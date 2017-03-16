// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.forms');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.next');
goog.require('om.util');
goog.require('cljs.tools.reader');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('untangled.client.logging');
goog.require('untangled.client.mutations');
untangled.ui.forms.fail_BANG_ = (function untangled$ui$forms$fail_BANG_(var_args){
var args704397 = [];
var len__28871__auto___704403 = arguments.length;
var i__28872__auto___704404 = (0);
while(true){
if((i__28872__auto___704404 < len__28871__auto___704403)){
args704397.push((arguments[i__28872__auto___704404]));

var G__704405 = (i__28872__auto___704404 + (1));
i__28872__auto___704404 = G__704405;
continue;
} else {
}
break;
}

var G__704401 = args704397.length;
switch (G__704401) {
case 1:
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704397.length)].join('')));

}
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return untangled.ui.forms.fail_BANG_.call(null,msg,null);
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,msg,ex_data){
var message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failed because of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var ex_data__$1 = cljs.core.assoc.call(null,ex_data,new cljs.core.Keyword("failing","obj","failing/obj",-80182394),obj);
return untangled.ui.forms.fail_BANG_.call(null,message,ex_data__$1);
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,ex_data){
return untangled.client.logging.error.call(null,msg,ex_data);
});

untangled.ui.forms.fail_BANG_.cljs$lang$maxFixedArity = 3;

untangled.ui.forms.assert_or_fail = (function untangled$ui$forms$assert_or_fail(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704439 = arguments.length;
var i__28872__auto___704440 = (0);
while(true){
if((i__28872__auto___704440 < len__28871__auto___704439)){
args__28878__auto__.push((arguments[i__28872__auto___704440]));

var G__704441 = (i__28872__auto___704440 + (1));
i__28872__auto___704440 = G__704441;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic = (function (obj,pred,msg,p__704433){
var vec__704434 = p__704433;
var ex_data = cljs.core.nth.call(null,vec__704434,(0),null);
if(cljs.core.truth_(pred.call(null,obj))){
return null;
} else {
return untangled.ui.forms.fail_BANG_.call(null,obj,msg,ex_data);
}
});

untangled.ui.forms.assert_or_fail.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.assert_or_fail.cljs$lang$applyTo = (function (seq704427){
var G__704428 = cljs.core.first.call(null,seq704427);
var seq704427__$1 = cljs.core.next.call(null,seq704427);
var G__704429 = cljs.core.first.call(null,seq704427__$1);
var seq704427__$2 = cljs.core.next.call(null,seq704427__$1);
var G__704430 = cljs.core.first.call(null,seq704427__$2);
var seq704427__$3 = cljs.core.next.call(null,seq704427__$2);
return untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic(G__704428,G__704429,G__704430,seq704427__$3);
});


/**
 * @interface
 */
untangled.ui.forms.IForm = function(){};

/**
 * Returns the form specification,
 *   ie: what the form is made of,
 *   eg: fields, subforms, form change listeners.
 */
untangled.ui.forms.form_spec = (function untangled$ui$forms$form_spec(this$){
if((!((this$ == null))) && (!((this$.untangled$ui$forms$IForm$form_spec$arity$1 == null)))){
return this$.untangled$ui$forms$IForm$form_spec$arity$1(this$);
} else {
var x__28368__auto__ = (((this$ == null))?null:this$);
var m__28369__auto__ = (untangled.ui.forms.form_spec[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,this$);
} else {
var m__28369__auto____$1 = (untangled.ui.forms.form_spec["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.form-spec",this$);
}
}
}
});

untangled.ui.forms.ui_ns = (function untangled$ui$forms$ui_ns(kw_name){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword("untangled.ui.forms","_","untangled.ui.forms/_",47897074)),kw_name);
});
/**
 * Query this in *all* of your form components, else form support will fail!
 * (often in subtle/obscure ways, WIP on how to better catch & report this)
 */
untangled.ui.forms.form_key = untangled.ui.forms.ui_ns.call(null,"form");
/**
 * Query this in your top level form component.
 * Is okay to have multiple 'root' components on screen at once,
 * as om and react will optimize the rendering step.
 */
untangled.ui.forms.form_root_key = untangled.ui.forms.ui_ns.call(null,"form-root");
/**
 * Returns a map with:
 * * :elements - contains user level fields
 * * :form - contains internal form details
 */
untangled.ui.forms.get_form_spec = (function untangled$ui$forms$get_form_spec(this$){
var assert_no_duplicate = (function (field){
return (function (old_value){
if((old_value == null)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot implement field <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> more than once!")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(nil? old-value)")].join('')));
}

return field;
});
});
return cljs.core.update.call(null,cljs.core.reduce.call(null,((function (assert_no_duplicate){
return (function (acc,field){
var spec_key = ((cljs.core._EQ_.call(null,untangled.ui.forms.form_key,new cljs.core.Keyword("input","type","input/type",1543186790).cljs$core$IFn$_invoke$arity$1(field)))?new cljs.core.Keyword(null,"form","form",-1624062471):new cljs.core.Keyword(null,"elements","elements",657646735));
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_key,new cljs.core.Keyword("input","name","input/name",1609508871).cljs$core$IFn$_invoke$arity$1(field)], null),assert_no_duplicate.call(null,(function (){var G__704465 = field;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),spec_key)){
return cljs.core.dissoc.call(null,G__704465,new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","type","input/type",1543186790));
} else {
return G__704465;
}
})()));
});})(assert_no_duplicate))
,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.forms.form_spec.call(null,this$)),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.vals);
});
/**
 * Declare that the current form links to subforms through the given entity property in a :one or :many capacity. this
 *   must be included in your list of form elements if you want form interactions to trigger across a form group.
 * 
 *   Additional named parameters:
 * 
 *   `isComponent` - A boolean to indicate that references to instances of this subform are the only uses of the target,
 *   such that removing the reference indicates that the target is no longer used and can be removed from the database.
 */
untangled.ui.forms.subform_element = (function untangled$ui$forms$subform_element(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704497 = arguments.length;
var i__28872__auto___704498 = (0);
while(true){
if((i__28872__auto___704498 < len__28871__auto___704497)){
args__28878__auto__.push((arguments[i__28872__auto___704498]));

var G__704504 = (i__28872__auto___704498 + (1));
i__28872__auto___704498 = G__704504;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic = (function (field,form_class,cardinality,p__704482){
var map__704483 = p__704482;
var map__704483__$1 = ((((!((map__704483 == null)))?((((map__704483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704483):map__704483);
var isComponent = cljs.core.get.call(null,map__704483__$1,new cljs.core.Keyword(null,"isComponent","isComponent",423348940));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"many","many",1092119164),null], null), null),cardinality)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("subform-element requires a cardinality of :one or :many"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? #{:one :many} cardinality)")].join('')));
}

if(cljs.core.truth_(cljs.core.every_pred.call(null,((function (map__704483,map__704483__$1,isComponent){
return (function (p1__704473_SHARP_){
if(!((p1__704473_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__704473_SHARP_.om$next$Ident$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__704483,map__704483__$1,isComponent))
,((function (map__704483,map__704483__$1,isComponent){
return (function (p1__704474_SHARP_){
if(!((p1__704474_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__704474_SHARP_.untangled$ui$forms$IForm$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__704483,map__704483__$1,isComponent))
,((function (map__704483,map__704483__$1,isComponent){
return (function (p1__704475_SHARP_){
if(!((p1__704475_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__704475_SHARP_.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__704483,map__704483__$1,isComponent))
).call(null,form_class))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Subform element "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" MUST implement IForm, IQuery, and Ident.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("((every-pred (fn* [p1__704473#] (implements? om/Ident p1__704473#)) (fn* [p1__704474#] (implements? IForm p1__704474#)) (fn* [p1__704475#] (implements? om/IQuery p1__704475#))) form-class)")].join('')));
}

return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("input","name","input/name",1609508871),field,new cljs.core.Keyword("input","is-form?","input/is-form?",-148630278),true,new cljs.core.Keyword("input","is-component?","input/is-component?",-801684576),isComponent,new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967),cardinality,new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","subform","untangled.ui.forms/subform",-411458075)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),form_class], null));
});

untangled.ui.forms.subform_element.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.subform_element.cljs$lang$applyTo = (function (seq704477){
var G__704478 = cljs.core.first.call(null,seq704477);
var seq704477__$1 = cljs.core.next.call(null,seq704477);
var G__704479 = cljs.core.first.call(null,seq704477__$1);
var seq704477__$2 = cljs.core.next.call(null,seq704477__$1);
var G__704480 = cljs.core.first.call(null,seq704477__$2);
var seq704477__$3 = cljs.core.next.call(null,seq704477__$2);
return untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic(G__704478,G__704479,G__704480,seq704477__$3);
});

/**
 * Create a field that understands it points to a to-many list of subforms, only one of which
 *   can be interacted with at a time, but all of which will be affected by top-level form operations like commit and
 *   validate. Functions like `valid?` check the validity of the list of subforms when applied to such a
 *   field. Rendering such a field requires that you pass the desired value of `select-key` to select the subform.
 */
untangled.ui.forms.form_switcher_input = (function untangled$ui$forms$form_switcher_input(field,FormClass,select_key){
return cljs.core.assoc.call(null,untangled.ui.forms.subform_element.call(null,field,FormClass,new cljs.core.Keyword(null,"many","many",1092119164)),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","switcher","untangled.ui.forms/switcher",1087624535),new cljs.core.Keyword("input","select-key","input/select-key",836770837),select_key);
});
/**
 * Declare a hidden identity field.
 * Required to read/write to/from other db tables,
 * and to make sure tempids and such follow along properly.
 */
untangled.ui.forms.id_field = (function untangled$ui$forms$id_field(name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("input","name","input/name",1609508871),name,new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","identity","untangled.ui.forms/identity",1281083548)], null);
});
/**
 * Declare a text input on a form. The allowed options are named parameters:
 * 
 *   :className nm    Additional CSS classnames to include on the input (as a string)
 *   :validator sym   A symbol to target the dispatch of validation
 *   :validator-args  Arguments that will be passed to the validator
 *   :placeholder     The input placeholder. Supports a lambda or string
 *   :default-value   A value to use in the field if the app-state value is nil
 *   :validate-on-blur? Should the field be validated on a blur event (default = true)
 *   
 */
untangled.ui.forms.text_input = (function untangled$ui$forms$text_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704548 = arguments.length;
var i__28872__auto___704550 = (0);
while(true){
if((i__28872__auto___704550 < len__28871__auto___704548)){
args__28878__auto__.push((arguments[i__28872__auto___704550]));

var G__704552 = (i__28872__auto___704550 + (1));
i__28872__auto___704550 = G__704552;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__704541){
var map__704542 = p__704541;
var map__704542__$1 = ((((!((map__704542 == null)))?((((map__704542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704542):map__704542);
var validator = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var validator_args = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"validator-args","validator-args",-487548518));
var className = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var default_value = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),"");
var placeholder = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"");
var validate_on_blur_QMARK_ = cljs.core.get.call(null,map__704542__$1,new cljs.core.Keyword(null,"validate-on-blur?","validate-on-blur?",-624002236),true);
var G__704547 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("input","name","input/name",1609508871),name,new cljs.core.Keyword("input","default-value","input/default-value",332369344),default_value,new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),placeholder,new cljs.core.Keyword("input","css-class","input/css-class",-886210056),className,new cljs.core.Keyword("input","validate-on-blur?","input/validate-on-blur?",-792735238),validate_on_blur_QMARK_,new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","text","untangled.ui.forms/text",1090303414)], null);
var G__704547__$1 = (cljs.core.truth_(validator)?cljs.core.assoc.call(null,G__704547,new cljs.core.Keyword("input","validator","input/validator",-2134276211),validator):G__704547);
if(cljs.core.truth_(validator_args)){
return cljs.core.assoc.call(null,G__704547__$1,new cljs.core.Keyword("input","validator-args","input/validator-args",1559502836),validator_args);
} else {
return G__704547__$1;
}
});

untangled.ui.forms.text_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.text_input.cljs$lang$applyTo = (function (seq704537){
var G__704538 = cljs.core.first.call(null,seq704537);
var seq704537__$1 = cljs.core.next.call(null,seq704537);
return untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(G__704538,seq704537__$1);
});

/**
 * Declare an integer input on a form. See text-input for additional options.
 */
untangled.ui.forms.integer_input = (function untangled$ui$forms$integer_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704571 = arguments.length;
var i__28872__auto___704572 = (0);
while(true){
if((i__28872__auto___704572 < len__28871__auto___704571)){
args__28878__auto__.push((arguments[i__28872__auto___704572]));

var G__704573 = (i__28872__auto___704572 + (1));
i__28872__auto___704572 = G__704573;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options){
return cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.apply.call(null,untangled.ui.forms.text_input,name,options),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","integer","untangled.ui.forms/integer",775827753)),new cljs.core.Keyword("input","default-value","input/default-value",332369344),(function (v){
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
return (0);
}
}));
});

untangled.ui.forms.integer_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.integer_input.cljs$lang$applyTo = (function (seq704569){
var G__704570 = cljs.core.first.call(null,seq704569);
var seq704569__$1 = cljs.core.next.call(null,seq704569);
return untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic(G__704570,seq704569__$1);
});

/**
 * Declare a text area on a form. See text-input for additional options.
 * 
 *   When rendering a text input, the params passed to the field render will be merged
 *   with the textarea HTML props.
 */
untangled.ui.forms.textarea_input = (function untangled$ui$forms$textarea_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704581 = arguments.length;
var i__28872__auto___704582 = (0);
while(true){
if((i__28872__auto___704582 < len__28871__auto___704581)){
args__28878__auto__.push((arguments[i__28872__auto___704582]));

var G__704583 = (i__28872__auto___704582 + (1));
i__28872__auto___704582 = G__704583;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options){
return cljs.core.assoc.call(null,cljs.core.apply.call(null,untangled.ui.forms.text_input,name,options),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","textarea","untangled.ui.forms/textarea",788040345));
});

untangled.ui.forms.textarea_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.textarea_input.cljs$lang$applyTo = (function (seq704579){
var G__704580 = cljs.core.first.call(null,seq704579);
var seq704579__$1 = cljs.core.next.call(null,seq704579);
return untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic(G__704580,seq704579__$1);
});

/**
 * Declare a checkbox on a form
 */
untangled.ui.forms.checkbox_input = (function untangled$ui$forms$checkbox_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704591 = arguments.length;
var i__28872__auto___704592 = (0);
while(true){
if((i__28872__auto___704592 < len__28871__auto___704591)){
args__28878__auto__.push((arguments[i__28872__auto___704592]));

var G__704595 = (i__28872__auto___704592 + (1));
i__28872__auto___704592 = G__704595;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__704588){
var map__704589 = p__704588;
var map__704589__$1 = ((((!((map__704589 == null)))?((((map__704589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704589):map__704589);
var className = cljs.core.get.call(null,map__704589__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var default_value = cljs.core.get.call(null,map__704589__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),false);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","checkbox","untangled.ui.forms/checkbox",1490685502),new cljs.core.Keyword("input","default-value","input/default-value",332369344),cljs.core.boolean$.call(null,default_value),new cljs.core.Keyword("input","css-class","input/css-class",-886210056),className,new cljs.core.Keyword("input","name","input/name",1609508871),name], null);
});

untangled.ui.forms.checkbox_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.checkbox_input.cljs$lang$applyTo = (function (seq704586){
var G__704587 = cljs.core.first.call(null,seq704586);
var seq704586__$1 = cljs.core.next.call(null,seq704586);
return untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic(G__704587,seq704586__$1);
});

/**
 * Declare a dropdown menu selector.
 * 
 *   name is the keyword property name of the field
 *   options is a vector of f/option items to display
 * 
 *   Additional (optional) named parameters are `default-value` and `className`. The
 *   default-value should be the `:key` of one of the options (defaults to :f/none).
 */
untangled.ui.forms.dropdown_input = (function untangled$ui$forms$dropdown_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704625 = arguments.length;
var i__28872__auto___704626 = (0);
while(true){
if((i__28872__auto___704626 < len__28871__auto___704625)){
args__28878__auto__.push((arguments[i__28872__auto___704626]));

var G__704627 = (i__28872__auto___704626 + (1));
i__28872__auto___704626 = G__704627;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options,p__704620){
var map__704621 = p__704620;
var map__704621__$1 = ((((!((map__704621 == null)))?((((map__704621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704621):map__704621);
var default_value = cljs.core.get.call(null,map__704621__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("untangled.ui.forms","none","untangled.ui.forms/none",-1572888597));
var className = cljs.core.get.call(null,map__704621__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
if(cljs.core.truth_((function (){var or__27650__auto__ = cljs.core._EQ_.call(null,default_value,new cljs.core.Keyword("untangled.ui.forms","none","untangled.ui.forms/none",-1572888597));
if(or__27650__auto__){
return or__27650__auto__;
} else {
return cljs.core.some.call(null,((function (or__27650__auto__,map__704621,map__704621__$1,default_value,className){
return (function (p1__704612_SHARP_){
return cljs.core._EQ_.call(null,default_value,new cljs.core.Keyword("option","key","option/key",-108532174).cljs$core$IFn$_invoke$arity$1(p1__704612_SHARP_));
});})(or__27650__auto__,map__704621,map__704621__$1,default_value,className))
,options);
}
})())){
} else {
throw (new Error("Assert failed: (or (= default-value :untangled.ui.forms/none) (some (fn* [p1__704612#] (= default-value (:option/key p1__704612#))) options))"));
}

if((cljs.core.seq.call(null,options)) && (cljs.core.every_QMARK_.call(null,new cljs.core.Keyword("option","key","option/key",-108532174),options))){
} else {
throw (new Error("Assert failed: (and (seq options) (every? :option/key options))"));
}

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","dropdown","untangled.ui.forms/dropdown",-1152053818),new cljs.core.Keyword("input","default-value","input/default-value",332369344),default_value,new cljs.core.Keyword("input","options","input/options",469009719),options,new cljs.core.Keyword("input","css-class","input/css-class",-886210056),className,new cljs.core.Keyword("input","name","input/name",1609508871),name], null);
});

untangled.ui.forms.dropdown_input.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.dropdown_input.cljs$lang$applyTo = (function (seq704613){
var G__704614 = cljs.core.first.call(null,seq704613);
var seq704613__$1 = cljs.core.next.call(null,seq704613);
var G__704615 = cljs.core.first.call(null,seq704613__$1);
var seq704613__$2 = cljs.core.next.call(null,seq704613__$1);
return untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic(G__704614,G__704615,seq704613__$2);
});

/**
 * Create an option for use in a dropdown. The key is used as your app database value, and label as the label.
 */
untangled.ui.forms.option = (function untangled$ui$forms$option(key,label){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("option","key","option/key",-108532174),key,new cljs.core.Keyword("option","label","option/label",1387746981),label], null);
});
/**
 * Declare an input that will render as some number of radio buttons.
 * 
 *   `name` : The field name
 *   `options` : A set of legal values. Can be anything that `pr-str` and `read-string` can convert to/from strings.
 * 
 *   Radio button rendering is done via the params of `form-field`. If you declare:
 * 
 *   ```
 *   (radio-input :rating #{1 2 3 4 5})
 *   ```
 * 
 *   then in your rendering you will render the field five times:
 * 
 *   ```
 *   (dom/div nil
 *  (form-field form :rating :choice 1) 1
 *  (form-field form :rating :choice 2) 2
 *  (form-field form :rating :choice 3) 3
 *  (form-field form :rating :choice 4) 4
 *  (form-field form :rating :choice 5) 5)
 *   ```
 *   
 */
untangled.ui.forms.radio_input = (function untangled$ui$forms$radio_input(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704673 = arguments.length;
var i__28872__auto___704674 = (0);
while(true){
if((i__28872__auto___704674 < len__28871__auto___704673)){
args__28878__auto__.push((arguments[i__28872__auto___704674]));

var G__704675 = (i__28872__auto___704674 + (1));
i__28872__auto___704674 = G__704675;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options,p__704667){
var map__704668 = p__704667;
var map__704668__$1 = ((((!((map__704668 == null)))?((((map__704668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704668):map__704668);
var default_value = cljs.core.get.call(null,map__704668__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("untangled.ui.forms","none","untangled.ui.forms/none",-1572888597));
var className = cljs.core.get.call(null,map__704668__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
if(cljs.core.set_QMARK_.call(null,options)){
} else {
throw (new Error("Assert failed: (set? options)"));
}

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("input","name","input/name",1609508871),name,new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("untangled.ui.forms","radio","untangled.ui.forms/radio",1789655245),new cljs.core.Keyword("input","default-value","input/default-value",332369344),default_value,new cljs.core.Keyword("input","css-class","input/css-class",-886210056),className,new cljs.core.Keyword("input","options","input/options",469009719),options], null);
});

untangled.ui.forms.radio_input.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.radio_input.cljs$lang$applyTo = (function (seq704661){
var G__704663 = cljs.core.first.call(null,seq704661);
var seq704661__$1 = cljs.core.next.call(null,seq704661);
var G__704664 = cljs.core.first.call(null,seq704661__$1);
var seq704661__$2 = cljs.core.next.call(null,seq704661__$1);
return untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic(G__704663,G__704664,seq704661__$2);
});

untangled.ui.forms.is_form_QMARK_ = (function untangled$ui$forms$is_form_QMARK_(_QMARK_form){
return cljs.core.get.call(null,_QMARK_form,untangled.ui.forms.form_key);
});
/**
 * Get the UI component that declared the given form.
 */
untangled.ui.forms.form_component = (function untangled$ui$forms$form_component(form){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,untangled.ui.forms.form_key.call(null,form)));
});
/**
 * Get the ident of this form's entity
 */
untangled.ui.forms.form_ident = (function untangled$ui$forms$form_ident(form){
return cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"ident","ident",-742346)], null));
});
/**
 * Get the configuration for the given field in the form.
 */
untangled.ui.forms.field_config = (function untangled$ui$forms$field_config(form,name){
return cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword("elements","by-name","elements/by-name",934326061),name], null));
});
/**
 * Get the configuration for the given field in the form.
 */
untangled.ui.forms.field_type = (function untangled$ui$forms$field_type(form,name){
return new cljs.core.Keyword("input","type","input/type",1543186790).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,name));
});
/**
 * Returns the current value of the placeholder, which may be a lambda or a string.
 */
untangled.ui.forms.placeholder = (function untangled$ui$forms$placeholder(form,field){
var map__704690 = untangled.ui.forms.field_config.call(null,form,field);
var map__704690__$1 = ((((!((map__704690 == null)))?((((map__704690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704690):map__704690);
var placeholder = cljs.core.get.call(null,map__704690__$1,new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),"");
if(typeof placeholder === 'string'){
return placeholder;
} else {
return placeholder.call(null);
}
});
/**
 * Returns whether the element, or the field-key in the form, is a subform.
 */
untangled.ui.forms.is_subform_QMARK_ = (function untangled$ui$forms$is_subform_QMARK_(var_args){
var args704696 = [];
var len__28871__auto___704699 = arguments.length;
var i__28872__auto___704700 = (0);
while(true){
if((i__28872__auto___704700 < len__28871__auto___704699)){
args704696.push((arguments[i__28872__auto___704700]));

var G__704701 = (i__28872__auto___704700 + (1));
i__28872__auto___704700 = G__704701;
continue;
} else {
}
break;
}

var G__704698 = args704696.length;
switch (G__704698) {
case 1:
return untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704696.length)].join('')));

}
});

untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (element){
return new cljs.core.Keyword("input","is-form?","input/is-form?",-148630278).cljs$core$IFn$_invoke$arity$1(element);
});

untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field_key){
return untangled.ui.forms.is_subform_QMARK_.call(null,untangled.ui.forms.field_config.call(null,form,field_key));
});

untangled.ui.forms.is_subform_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * TODO: Maybe make it public & access it from untangled-client ?
 */
untangled.ui.forms.is_ui_query_fragment_QMARK_ = (function untangled$ui$forms$is_ui_query_fragment_QMARK_(kw){
if((kw instanceof cljs.core.Keyword)){
var G__704706 = kw;
var G__704706__$1 = (((G__704706 == null))?null:cljs.core.namespace.call(null,G__704706));
if((G__704706__$1 == null)){
return null;
} else {
return cljs.core.re_find.call(null,/^ui(?:\.|$)/,G__704706__$1);
}
} else {
return null;
}
});
/**
 * For checking if a field is only a ui concern.
 * eg: should therefore not be sent to the server.
 */
untangled.ui.forms.ui_field_QMARK_ = (function untangled$ui$forms$ui_field_QMARK_(form,field){
return untangled.ui.forms.is_ui_query_fragment_QMARK_.call(null,new cljs.core.Keyword("input","name","input/name",1609508871).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,field)));
});
/**
 * Gets the current value of a field in a form.
 */
untangled.ui.forms.current_value = (function untangled$ui$forms$current_value(form,field){
return cljs.core.get.call(null,form,field);
});
/**
 * Updates the current value of a field in a form (with a fn) and marks it as :unchecked.
 */
untangled.ui.forms.update_current_value = (function untangled$ui$forms$update_current_value(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704731 = arguments.length;
var i__28872__auto___704732 = (0);
while(true){
if((i__28872__auto___704732 < len__28871__auto___704731)){
args__28878__auto__.push((arguments[i__28872__auto___704732]));

var G__704733 = (i__28872__auto___704732 + (1));
i__28872__auto___704732 = G__704733;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,field,f,args){
var the_form = form;
var the_form__$1 = cljs.core.apply.call(null,cljs.core.update,the_form,field,f,args);
return untangled.ui.forms.set_validation.call(null,the_form__$1,field,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
});

untangled.ui.forms.update_current_value.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.update_current_value.cljs$lang$applyTo = (function (seq704721){
var G__704722 = cljs.core.first.call(null,seq704721);
var seq704721__$1 = cljs.core.next.call(null,seq704721);
var G__704723 = cljs.core.first.call(null,seq704721__$1);
var seq704721__$2 = cljs.core.next.call(null,seq704721__$1);
var G__704724 = cljs.core.first.call(null,seq704721__$2);
var seq704721__$3 = cljs.core.next.call(null,seq704721__$2);
return untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic(G__704722,G__704723,G__704724,seq704721__$3);
});

/**
 * Sets the current value of a field in a form, and marks it as :unchecked.
 */
untangled.ui.forms.set_current_value = (function untangled$ui$forms$set_current_value(form,field,value){
return untangled.ui.forms.set_validation.call(null,cljs.core.assoc.call(null,form,field,value),field,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
});
/**
 * Gets the css class for the form field
 */
untangled.ui.forms.css_class = (function untangled$ui$forms$css_class(form,field){
return new cljs.core.Keyword("input","css-class","input/css-class",-886210056).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,field));
});
/**
 * Get all of the field names that are defined on the form.
 */
untangled.ui.forms.element_names = (function untangled$ui$forms$element_names(form){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword("elements","by-name","elements/by-name",934326061)], null)));
});
/**
 * Get the unmodified copy of the form state from when it was first initialized.
 */
untangled.ui.forms.get_original_data = (function untangled$ui$forms$get_original_data(var_args){
var args704773 = [];
var len__28871__auto___704787 = arguments.length;
var i__28872__auto___704789 = (0);
while(true){
if((i__28872__auto___704789 < len__28871__auto___704787)){
args704773.push((arguments[i__28872__auto___704789]));

var G__704790 = (i__28872__auto___704789 + (1));
i__28872__auto___704789 = G__704790;
continue;
} else {
}
break;
}

var G__704779 = args704773.length;
switch (G__704779) {
case 1:
return untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704773.length)].join('')));

}
});

untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"origin","origin",1037372088)], null));
});

untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core.get.call(null,untangled.ui.forms.get_original_data.call(null,form),field);
});

untangled.ui.forms.get_original_data.cljs$lang$maxFixedArity = 2;

untangled.ui.forms._QMARK_normalize = (function untangled$ui$forms$_QMARK_normalize(p__704798,x){
var map__704802 = p__704798;
var map__704802__$1 = ((((!((map__704802 == null)))?((((map__704802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704802):map__704802);
var cardinality = cljs.core.get.call(null,map__704802__$1,new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967));
if(cljs.core.not.call(null,(function (){var or__27650__auto__ = untangled.ui.forms.is_form_QMARK_.call(null,x);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core.seq.call(null,x)) && (cljs.core.every_QMARK_.call(null,untangled.ui.forms.is_form_QMARK_,x));
}
})())){
return x;
} else {
var G__704804 = (((cardinality instanceof cljs.core.Keyword))?cardinality.fqn:null);
switch (G__704804) {
case "one":
return untangled.ui.forms.form_ident.call(null,x);

break;
case "many":
return cljs.core.mapv.call(null,untangled.ui.forms.form_ident,x);

break;
default:
return x;

}
}
});
untangled.ui.forms.dirty_field_QMARK_ = (function untangled$ui$forms$dirty_field_QMARK_(form,field){
var cfg = untangled.ui.forms.field_config.call(null,form,field);
var curr = untangled.ui.forms._QMARK_normalize.call(null,cfg,untangled.ui.forms.current_value.call(null,form,field));
return (om.next.tempid_QMARK_.call(null,curr)) || (cljs.core.not_EQ_.call(null,curr,untangled.ui.forms._QMARK_normalize.call(null,cfg,untangled.ui.forms.get_original_data.call(null,form,field))));
});
/**
 * Get all of the names of the validatable fields that are defined on the (initialized) form.
 */
untangled.ui.forms.validatable_fields = (function untangled$ui$forms$validatable_fields(form){
return cljs.core.filter.call(null,(function (p1__704824_SHARP_){
return cljs.core.not.call(null,untangled.ui.forms.is_subform_QMARK_.call(null,form,p1__704824_SHARP_));
}),untangled.ui.forms.element_names.call(null,form));
});
/**
 * Commits the state of the form to the entity, making it the new original data.
 */
untangled.ui.forms.commit_state = (function untangled$ui$forms$commit_state(form){
return cljs.core.assoc_in.call(null,form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"origin","origin",1037372088)], null),cljs.core.select_keys.call(null,form,cljs.core.keys.call(null,untangled.ui.forms.get_original_data.call(null,form))));
});
/**
 * Resets the form back to the original state, ie when it was first created/initialized
 */
untangled.ui.forms.reset_entity = (function untangled$ui$forms$reset_entity(form){
return cljs.core.merge.call(null,form,untangled.ui.forms.get_original_data.call(null,form));
});
/**
 * Returns a map whose keys are the query key-path from the component's query that point to subforms, and whose values are the
 * defui component of that form (e.g. `{ [:k :k2] Subform }`). This will give you ALL of the current subforms declared in the static query and IForm
 * fields. NOTE: union queries in grouped forms are not supported, since there would be no way to auto-gather non-displayed
 * forms in the 'current' state.
 * 
 * Use get-forms to obtain the current state of active forms. It is a gathering mechanism only.
 */
untangled.ui.forms.subforms_STAR_ = (function untangled$ui$forms$subforms_STAR_(var_args){
var args704841 = [];
var len__28871__auto___704877 = arguments.length;
var i__28872__auto___704878 = (0);
while(true){
if((i__28872__auto___704878 < len__28871__auto___704877)){
args704841.push((arguments[i__28872__auto___704878]));

var G__704879 = (i__28872__auto___704878 + (1));
i__28872__auto___704878 = G__704879;
continue;
} else {
}
break;
}

var G__704844 = args704841.length;
switch (G__704844) {
case 1:
return untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704841.length)].join('')));

}
});

untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (form_class){
return untangled.ui.forms.subforms_STAR_.call(null,form_class,cljs.core.PersistentVector.EMPTY);
});

untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (form_class,current_path){
var ast = om.next.query__GT_ast.call(null,om.next.get_query.call(null,form_class));
var elements = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.get_form_spec.call(null,form_class));
var subform_fields = cljs.core.set.call(null,cljs.core.keep.call(null,((function (ast,elements){
return (function (p1__704837_SHARP_){
if(cljs.core.truth_(untangled.ui.forms.is_subform_QMARK_.call(null,p1__704837_SHARP_))){
return new cljs.core.Keyword("input","name","input/name",1609508871).cljs$core$IFn$_invoke$arity$1(p1__704837_SHARP_);
} else {
return null;
}
});})(ast,elements))
,elements));
var get_class = ((function (ast,elements,subform_fields){
return (function (ast_node){
var subquery = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ast_node);
if((cljs.core.int_QMARK_.call(null,subquery)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),subquery))){
return untangled.ui.forms.fail_BANG_.call(null,"Forms do not support recursive-query-based subforms!",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"subquery","subquery",-643148523),subquery,new cljs.core.Keyword(null,"ast-node","ast-node",1251435791),ast_node], null));
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast_node);
}
});})(ast,elements,subform_fields))
;
var is_form_node_QMARK_ = ((function (ast,elements,subform_fields,get_class){
return (function (ast_node){
var form_class__$1 = get_class.call(null,ast_node);
var prop = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast_node);
var join_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node));
var union_QMARK_ = (join_QMARK_) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ast_node)));
var wants_to_be_QMARK_ = cljs.core.contains_QMARK_.call(null,subform_fields,prop);
if((union_QMARK_) && (wants_to_be_QMARK_)){
untangled.ui.forms.fail_BANG_.call(null,"Subforms cannot be on union queries. You will have to manually group your subforms if you use unions.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast-node","ast-node",1251435791),ast_node], null));
} else {
}

if((wants_to_be_QMARK_) && (!((function (){var and__27638__auto__ = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$Ident$)))?true:false):false);
if(and__27638__auto__){
var and__27638__auto____$1 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.untangled$ui$forms$IForm$)))?true:false):false);
if(and__27638__auto____$1){
if(!((form_class__$1 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__27638__auto____$1;
}
} else {
return and__27638__auto__;
}
})()))){
untangled.ui.forms.fail_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Declared subform for property "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not implement IForm, IQuery, and Ident.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast-node","ast-node",1251435791),ast_node], null));
} else {
}

var and__27638__auto__ = form_class__$1;
if(cljs.core.truth_(and__27638__auto__)){
var and__27638__auto____$1 = wants_to_be_QMARK_;
if(and__27638__auto____$1){
var and__27638__auto____$2 = join_QMARK_;
if(and__27638__auto____$2){
var and__27638__auto____$3 = !(union_QMARK_);
if(and__27638__auto____$3){
var and__27638__auto____$4 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$IQuery$)))?true:false):false);
if(and__27638__auto____$4){
var and__27638__auto____$5 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$Ident$)))?true:false):false);
if(and__27638__auto____$5){
if(!((form_class__$1 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.untangled$ui$forms$IForm$))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__27638__auto____$5;
}
} else {
return and__27638__auto____$4;
}
} else {
return and__27638__auto____$3;
}
} else {
return and__27638__auto____$2;
}
} else {
return and__27638__auto____$1;
}
} else {
return and__27638__auto__;
}
});})(ast,elements,subform_fields,get_class))
;
var sub_forms = cljs.core.keep.call(null,((function (ast,elements,subform_fields,get_class,is_form_node_QMARK_){
return (function (ast_node){
if(cljs.core.truth_(is_form_node_QMARK_.call(null,ast_node))){
var path = cljs.core.conj.call(null,current_path,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast_node));
var form_class__$1 = get_class.call(null,ast_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,form_class__$1], null);
} else {
return null;
}
});})(ast,elements,subform_fields,get_class,is_form_node_QMARK_))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.reduce.call(null,((function (ast,elements,subform_fields,get_class,is_form_node_QMARK_,sub_forms){
return (function (collected_so_far,p__704873){
var vec__704874 = p__704873;
var path = cljs.core.nth.call(null,vec__704874,(0),null);
var component = cljs.core.nth.call(null,vec__704874,(1),null);
return cljs.core.into.call(null,cljs.core.conj.call(null,collected_so_far,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,component], null)),untangled.ui.forms.subforms_STAR_.call(null,component,path));
});})(ast,elements,subform_fields,get_class,is_form_node_QMARK_,sub_forms))
,cljs.core.PersistentVector.EMPTY,sub_forms);
});

untangled.ui.forms.subforms_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Follows a key-path through the graph database started from the current object. Follows to-one and to-many joins.
 * Results in a sequence of all of the idents of the items indicated by the given key-path from the given object.
 */
untangled.ui.forms.to_idents = (function untangled$ui$forms$to_idents(app_state,current_object,key_path){
var path = key_path;
var obj = current_object;
while(true){
var k = cljs.core.first.call(null,path);
var remainder = cljs.core.rest.call(null,path);
var v = cljs.core.get.call(null,obj,k);
var to_many_QMARK_ = (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.every_QMARK_.call(null,om.util.ident_QMARK_,v));
var ident_QMARK_ = (!(to_many_QMARK_)) && (om.util.ident_QMARK_.call(null,v));
var many_idents = ((!(to_many_QMARK_))?cljs.core.PersistentVector.EMPTY:cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (path,obj,k,remainder,v,to_many_QMARK_,ident_QMARK_){
return (function (idx,_){
return untangled.ui.forms.to_idents.call(null,app_state,v,cljs.core.conj.call(null,remainder,idx));
});})(path,obj,k,remainder,v,to_many_QMARK_,ident_QMARK_))
,v)));
var result = cljs.core.vec.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.conj.call(null,many_idents,((ident_QMARK_)?v:null))));
if((ident_QMARK_) && (cljs.core.seq.call(null,remainder))){
var G__704924 = remainder;
var G__704925 = cljs.core.get_in.call(null,app_state,v);
path = G__704924;
obj = G__704925;
continue;
} else {
return result;
}
break;
}
});
/**
 * Reads the app state database starting at form-ident, and returns a sequence of :
 * 
 *   {:ident ident :class form-class :form form-value}
 * 
 *   for the top form and all of its **declared** subforms. Useful for running transforms and collection across a nested form.
 * 
 *   If there are any to-many relations in the database, they will be expanded to individual entries of the returned sequence.
 *   
 */
untangled.ui.forms.get_forms = (function untangled$ui$forms$get_forms(app_state,root_form_class,form_ident){
var form = cljs.core.get_in.call(null,app_state,form_ident);
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,((function (form){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),form_ident,new cljs.core.Keyword(null,"class","class",-2030961996),root_form_class,new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null);
});})(form))
,null,null)),(new cljs.core.LazySeq(null,((function (form){
return (function (){
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,((function (form){
return (function (p__704936){
var vec__704937 = p__704936;
var query_key_path = cljs.core.nth.call(null,vec__704937,(0),null);
var class$ = cljs.core.nth.call(null,vec__704937,(1),null);
var iter__28512__auto__ = ((function (vec__704937,query_key_path,class$,form){
return (function untangled$ui$forms$get_forms_$_iter__704940(s__704941){
return (new cljs.core.LazySeq(null,((function (vec__704937,query_key_path,class$,form){
return (function (){
var s__704941__$1 = s__704941;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__704941__$1);
if(temp__6753__auto__){
var s__704941__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__704941__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__704941__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__704943 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__704942 = (0);
while(true){
if((i__704942 < size__28511__auto__)){
var ident = cljs.core._nth.call(null,c__28510__auto__,i__704942);
cljs.core.chunk_append.call(null,b__704943,(function (){var value = cljs.core.get_in.call(null,app_state,ident);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"form","form",-1624062471),value], null);
})());

var G__704951 = (i__704942 + (1));
i__704942 = G__704951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__704943),untangled$ui$forms$get_forms_$_iter__704940.call(null,cljs.core.chunk_rest.call(null,s__704941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__704943),null);
}
} else {
var ident = cljs.core.first.call(null,s__704941__$2);
return cljs.core.cons.call(null,(function (){var value = cljs.core.get_in.call(null,app_state,ident);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"form","form",-1624062471),value], null);
})(),untangled$ui$forms$get_forms_$_iter__704940.call(null,cljs.core.rest.call(null,s__704941__$2)));
}
} else {
return null;
}
break;
}
});})(vec__704937,query_key_path,class$,form))
,null,null));
});})(vec__704937,query_key_path,class$,form))
;
return iter__28512__auto__.call(null,untangled.ui.forms.to_idents.call(null,app_state,form,query_key_path));
});})(form))
),cljs.core.filter.call(null,new cljs.core.Keyword(null,"ident","ident",-742346))),untangled.ui.forms.subforms_STAR_.call(null,root_form_class));
});})(form))
,null,null)));
});
/**
 * Similar to update-in, but walks your form declaration to affect all (initialized and preset) nested forms.
 *   Useful for applying validation or some mutation to all forms. Returns the new app-state. You supply a
 *   `form-update-fn` of type (fn [{:keys [ident class form]}] => form), where:
 * * `:class` is the component that has the form,
 * * `:ident` is of the form in app state,
 * * `:form`  is the value of the form in app state.
 */
untangled.ui.forms.update_forms = (function untangled$ui$forms$update_forms(app_state,form,form_update_fn){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__704960_SHARP_){
return cljs.core.assoc.call(null,p1__704960_SHARP_,new cljs.core.Keyword(null,"form","form",-1624062471),form_update_fn.call(null,p1__704960_SHARP_));
})),cljs.core.completing.call(null,(function (s,p__704965){
var map__704966 = p__704965;
var map__704966__$1 = ((((!((map__704966 == null)))?((((map__704966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704966):map__704966);
var ident = cljs.core.get.call(null,map__704966__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var form__$1 = cljs.core.get.call(null,map__704966__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.assoc_in.call(null,s,ident,form__$1);
})),app_state,untangled.ui.forms.get_forms.call(null,app_state,untangled.ui.forms.form_component.call(null,form),untangled.ui.forms.form_ident.call(null,form)));
});
/**
 * Similar to reduce, but walks the forms.
 * Useful for gathering information from nested forms (eg: are all of them valid?).
 * At each form it calls (form-fn accumulator {:keys [ident form class]}).
 * The first visit will use `starting-value` as the initial accumulator,
 * and the return value of form-fn will become the new accumulator.
 * 
 * Returns the final accumulator value.
 */
untangled.ui.forms.reduce_forms = (function untangled$ui$forms$reduce_forms(app_state,form,starting_value,form_fn){
return cljs.core.reduce.call(null,form_fn,starting_value,untangled.ui.forms.get_forms.call(null,app_state,untangled.ui.forms.form_component.call(null,form),untangled.ui.forms.form_ident.call(null,form)));
});
/**
 * Returns a sequence of all the forms under a given `form`
 */
untangled.ui.forms.all_forms = (function untangled$ui$forms$all_forms(form){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null),cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,untangled.ui.forms.is_subform_QMARK_,form)),cljs.core.mapcat.call(null,(function (p1__704994_SHARP_){
var curr = untangled.ui.forms.current_value.call(null,form,p1__704994_SHARP_);
var G__705002 = curr;
if(cljs.core.truth_((function (){var and__27638__auto__ = curr;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,p1__704994_SHARP_)));
} else {
return and__27638__auto__;
}
})())){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__705002],null));
} else {
return G__705002;
}
})),cljs.core.mapcat.call(null,untangled.ui.forms.all_forms)),untangled.ui.forms.element_names.call(null,form)));
});
/**
 * Reduces over a `form` acquired via `om/props` on a component,
 * at each step calls `F` with each form.
 * `init` is the initial value for the reduce.
 * 
 * Optionally takes a transducing function
 * as an extra second argument & therefore calls transduce.
 */
untangled.ui.forms.form_reduce = (function untangled$ui$forms$form_reduce(var_args){
var args705016 = [];
var len__28871__auto___705020 = arguments.length;
var i__28872__auto___705021 = (0);
while(true){
if((i__28872__auto___705021 < len__28871__auto___705020)){
args705016.push((arguments[i__28872__auto___705021]));

var G__705025 = (i__28872__auto___705021 + (1));
i__28872__auto___705021 = G__705025;
continue;
} else {
}
break;
}

var G__705018 = args705016.length;
switch (G__705018) {
case 3:
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args705016.length)].join('')));

}
});

untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3 = (function (form,init,F){
return cljs.core.reduce.call(null,F,init,untangled.ui.forms.all_forms.call(null,form));
});

untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$4 = (function (form,xf,init,F){
return cljs.core.transduce.call(null,xf,cljs.core.completing.call(null,F),init,untangled.ui.forms.all_forms.call(null,form));
});

untangled.ui.forms.form_reduce.cljs$lang$maxFixedArity = 4;

/**
 * INTERNAL METHOD. Get the default state configuration for the given field definitions.
 * MUST ONLY BE PASSED PURE FIELDS. Not subforms.
 */
untangled.ui.forms.default_state = (function untangled$ui$forms$default_state(fields){
var parse_field = (function (f){
return cljs.core.merge.call(null,f,((cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.ui.forms","identity","untangled.ui.forms/identity",1281083548),new cljs.core.Keyword("input","type","input/type",1543186790).cljs$core$IFn$_invoke$arity$1(f)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),om.next.tempid.call(null),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"valid","valid",155614240)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("input","default-value","input/default-value",332369344).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"unchecked","unchecked",924418378)], null)));
});
return cljs.core.transduce.call(null,cljs.core.map.call(null,parse_field),cljs.core.completing.call(null,((function (parse_field){
return (function (acc,p__705035){
var map__705036 = p__705035;
var map__705036__$1 = ((((!((map__705036 == null)))?((((map__705036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705036):map__705036);
var value = cljs.core.get.call(null,map__705036__$1,new cljs.core.Keyword(null,"value","value",305978217));
var valid = cljs.core.get.call(null,map__705036__$1,new cljs.core.Keyword(null,"valid","valid",155614240));
var name = cljs.core.get.call(null,map__705036__$1,new cljs.core.Keyword("input","name","input/name",1609508871));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),name], null),value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validation","validation",-2141396518),name], null),valid);
});})(parse_field))
),cljs.core.PersistentArrayMap.EMPTY,fields);
});
/**
 * INTERNAL. Get the initialized state of the form based on default state of the fields and the current entity state
 */
untangled.ui.forms.initialized_state = (function untangled$ui$forms$initialized_state(empty_form_state,field_keys_to_initialize,entity){
untangled.ui.forms.assert_or_fail.call(null,field_keys_to_initialize,cljs.core.every_pred.call(null,cljs.core.seq,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.keyword_QMARK_)),"Empty or invalid field keys");

return cljs.core.reduce.call(null,(function (s,k){
var temp__6751__auto__ = cljs.core.get.call(null,entity,k);
if(cljs.core.truth_(temp__6751__auto__)){
var v = temp__6751__auto__;
return cljs.core.assoc.call(null,s,k,v);
} else {
return s;
}
}),empty_form_state,field_keys_to_initialize);
});
/**
 * Build an empty form based on the given entity state. Returns an entity that is compatible with the original, but
 * that has had form support added. If any fields are declared on
 * the form that do not exist in the entity, then the form will fill those with
 * the default field values for the declared input fields.
 * This function does **not** recursively build out nested forms, even when declared. See `init-form`.
 */
untangled.ui.forms.build_form = (function untangled$ui$forms$build_form(form_class,entity_state){
var map__705055 = untangled.ui.forms.get_form_spec.call(null,form_class);
var map__705055__$1 = ((((!((map__705055 == null)))?((((map__705055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705055):map__705055);
var elements = cljs.core.get.call(null,map__705055__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
var form = cljs.core.get.call(null,map__705055__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var element_keys = cljs.core.map.call(null,new cljs.core.Keyword("input","name","input/name",1609508871),elements);
var elements_by_name = cljs.core.zipmap.call(null,element_keys,elements);
var map__705056 = untangled.ui.forms.default_state.call(null,elements);
var map__705056__$1 = ((((!((map__705056 == null)))?((((map__705056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705056):map__705056);
var state = cljs.core.get.call(null,map__705056__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var validation = cljs.core.get.call(null,map__705056__$1,new cljs.core.Keyword(null,"validation","validation",-2141396518));
var entity_state_of_interest = cljs.core.select_keys.call(null,entity_state,element_keys);
var init_state = untangled.ui.forms.initialized_state.call(null,state,element_keys,entity_state_of_interest);
var final_state = cljs.core.merge.call(null,entity_state,init_state);
return cljs.core.assoc.call(null,final_state,untangled.ui.forms.form_key,cljs.core.vary_meta.call(null,cljs.core.merge.call(null,form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("elements","by-name","elements/by-name",934326061),elements_by_name,new cljs.core.Keyword(null,"ident","ident",-742346),om.next.ident.call(null,form_class,final_state),new cljs.core.Keyword(null,"origin","origin",1037372088),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__705055,map__705055__$1,elements,form,element_keys,elements_by_name,map__705056,map__705056__$1,state,validation,entity_state_of_interest,init_state,final_state){
return (function (p__705065){
var vec__705067 = p__705065;
var k = cljs.core.nth.call(null,vec__705067,(0),null);
var v = cljs.core.nth.call(null,vec__705067,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_((function (){var and__27638__auto__ = untangled.ui.forms.is_subform_QMARK_.call(null,elements_by_name.call(null,k));
if(cljs.core.truth_(and__27638__auto__)){
return !((om.util.ident_QMARK_.call(null,v)) || (cljs.core.every_QMARK_.call(null,om.util.ident_QMARK_,v)));
} else {
return and__27638__auto__;
}
})())?(function (){var G__705070 = (((new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(elements_by_name.call(null,k)) instanceof cljs.core.Keyword))?new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(elements_by_name.call(null,k)).fqn:null);
switch (G__705070) {
case "many":
return cljs.core.mapv.call(null,untangled.ui.forms.form_ident,v);

break;
default:
return untangled.ui.forms.form_ident.call(null,v);

}
})():v)], null);
});})(map__705055,map__705055__$1,elements,form,element_keys,elements_by_name,map__705056,map__705056__$1,state,validation,entity_state_of_interest,init_state,final_state))
),init_state),new cljs.core.Keyword(null,"subforms","subforms",-2073547090),(function (){var or__27650__auto__ = cljs.core.filterv.call(null,new cljs.core.Keyword("input","is-form?","input/is-form?",-148630278),elements);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"validation","validation",-2141396518),validation], null)),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),form_class], null)));
});
/**
 * Returns true if the given form is already initialized with form setup data
 */
untangled.ui.forms.initialized_QMARK_ = (function untangled$ui$forms$initialized_QMARK_(form){
return cljs.core.map_QMARK_.call(null,untangled.ui.forms.form_key.call(null,form));
});
untangled.ui.forms.init_one = (function untangled$ui$forms$init_one(state,base_form,subform_spec,visited){
var k = new cljs.core.Keyword("input","name","input/name",1609508871).cljs$core$IFn$_invoke$arity$1(subform_spec);
var subform_class = (function (){var G__705110 = subform_spec;
var G__705110__$1 = (((G__705110 == null))?null:cljs.core.meta.call(null,G__705110));
if((G__705110__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__705110__$1);
}
})();
var subform_ident = cljs.core.get.call(null,base_form,k);
var visited__$1 = cljs.core.update_in.call(null,visited,subform_ident,cljs.core.inc);
if(((subform_ident == null)) || (om.util.ident_QMARK_.call(null,subform_ident))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Initialize-one form did not find a to-one relation in the database"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? subform-ident) (util/ident? subform-ident))")].join('')));
}

if(((cljs.core.second.call(null,subform_ident) == null)) || ((cljs.core.get_in.call(null,visited__$1,subform_ident) > (1)))){
return state;
} else {
return untangled.ui.forms.init_form_STAR_.call(null,state,subform_class,subform_ident,visited__$1);
}
});
untangled.ui.forms.init_many = (function untangled$ui$forms$init_many(state,base_form,subform_spec,visited){
var k = new cljs.core.Keyword("input","name","input/name",1609508871).cljs$core$IFn$_invoke$arity$1(subform_spec);
var subform_idents = cljs.core.get.call(null,base_form,k);
var subform_class = (function (){var G__705114 = subform_spec;
var G__705114__$1 = (((G__705114 == null))?null:cljs.core.meta.call(null,G__705114));
if((G__705114__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__705114__$1);
}
})();
var visited__$1 = cljs.core.reduce.call(null,((function (k,subform_idents,subform_class){
return (function (v,ident){
return cljs.core.update_in.call(null,v,ident,cljs.core.inc);
});})(k,subform_idents,subform_class))
,visited,subform_idents);
if(((subform_idents == null)) || (cljs.core.every_QMARK_.call(null,om.util.ident_QMARK_,subform_idents))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Initialize-many form did not find a to-many relation in the database"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? subform-idents) (every? util/ident? subform-idents))")].join('')));
}

return cljs.core.reduce.call(null,((function (k,subform_idents,subform_class,visited__$1){
return (function (st,f_ident){
if(((cljs.core.second.call(null,f_ident) == null)) || ((cljs.core.get_in.call(null,visited__$1,f_ident) > (1)))){
return st;
} else {
return untangled.ui.forms.init_form_STAR_.call(null,st,subform_class,f_ident,visited__$1);
}
});})(k,subform_idents,subform_class,visited__$1))
,state,subform_idents);
});
untangled.ui.forms.init_form_STAR_ = (function untangled$ui$forms$init_form_STAR_(app_state,form_class,form_ident,forms_visited){
var temp__6751__auto__ = cljs.core.get_in.call(null,app_state,form_ident);
if(cljs.core.truth_(temp__6751__auto__)){
var form = temp__6751__auto__;
var base_form = (function (){var G__705135 = form;
if(cljs.core.not.call(null,untangled.ui.forms.initialized_QMARK_.call(null,form))){
return untangled.ui.forms.build_form.call(null,form_class,G__705135);
} else {
return G__705135;
}
})();
var base_app_state = cljs.core.assoc_in.call(null,app_state,form_ident,base_form);
return cljs.core.transduce.call(null,cljs.core.filter.call(null,untangled.ui.forms.is_subform_QMARK_),((function (base_form,base_app_state,form,temp__6751__auto__){
return (function (state,subform_spec){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"many","many",1092119164),new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(subform_spec))){
return untangled.ui.forms.init_many.call(null,state,base_form,subform_spec,forms_visited);
} else {
return untangled.ui.forms.init_one.call(null,state,base_form,subform_spec,forms_visited);
}
});})(base_form,base_app_state,form,temp__6751__auto__))
,base_app_state,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.get_form_spec.call(null,form_class)));
} else {
return app_state;
}
});
/**
 * Recursively initialize a form from an app state database. Will follow subforms (even when top-levels are initialized).
 *   Returns the new app state (can be used to `swap!` on app state atom). Will **not** add forms where there is not
 *   already an entity in the database. If there are subforms, this function will only initialize those that are present
 *   AND uninitialized. Under no circumstances will this function re-initialize a form or subform.
 * 
 *   `app-state` The map of the current app state.
 *   `form-class` The defui class that defines the top-level form.
 *   `form-ident` The ident of the entity's data in app state.
 */
untangled.ui.forms.init_form = (function untangled$ui$forms$init_form(app_state,form_class,form_ident){
return untangled.ui.forms.init_form_STAR_.call(null,app_state,form_class,form_ident,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","noop","untangled.ui.forms/noop",1310363364,null),(function (env705153,_,params){
return cljs.core.merge.call(null,(function (){var env = env705153;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
return null;
});})(env))
], null);
})(),(function (){var env = env705153;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
/**
 * Declare an Untangled mutation (as a properly namespaced symbol) that will be triggered on
 *   each form change. Only one such mutation can be defined for a form.
 * 
 *   Add this to your IForm declarations:
 * 
 *   ```
 *   (defui ^:once PhoneForm
 *  static uc/InitialAppState
 *  (initial-state [this params] (f/build-form this (or params {})))
 *  static f/IForm
 *  (form-spec [this] [(f/id-field :db/id)
 *                     (f/on-form-change 'some-ns/global-validate-phone-form)
 *                     ...])
 *   ...)
 *   ```
 * 
 *   When invoked, the target mutation params will include:
 * 
 *   `:form-id` The ident of the form. You may use the app state in `env` to do anything you want to do (validate, etc.)
 *   `:field` The name of the field that changed
 *   `:kind` The kind of change:
 *   `:blur` The user finished with the given field and moved away from it.
 *   `:edit` The user changed the value. Text fields edits will trigger one of these per keystroke.
 */
untangled.ui.forms.on_form_change = (function untangled$ui$forms$on_form_change(mut_sym){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("input","type","input/type",1543186790),untangled.ui.forms.form_key,new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword(null,"on-form-change","on-form-change",40586234),new cljs.core.Keyword("on-form-change","mutation-symbol","on-form-change/mutation-symbol",1301241575),mut_sym], null);
});
/**
 * Get the Om mutation symbol to invoke when the form changes. This is typically used in the implementation
 *   of form field renderers as part of the transaction to run on change and blur events.
 * 
 *   Returns a valid symbolic data structure that can be used inside of transact:
 * 
 *   ```
 *   (om/transact! `[~@(get-on-form-change-mutation form :f :blur)])
 *   ```
 * 
 *   will convert to something like:
 * 
 *   ```
 *   (om/transact! `[(your-change-handler-symbol {:form-id [:form 1] :field :f :kind :blur})])
 *   ```
 * 
 *   This function returns a list of mutations expressions to run (which will contain zero or one).
 *   Use list unquote to patch it into place.
 */
untangled.ui.forms.get_on_form_change_mutation = (function untangled$ui$forms$get_on_form_change_mutation(form,field_name,kind){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit","edit",-1641834166),null,new cljs.core.Keyword(null,"blur","blur",-453500461),null], null), null),kind)){
} else {
throw (new Error("Assert failed: (contains? #{:edit :blur} kind)"));
}

var temp__6753__auto__ = cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"on-form-change","on-form-change",40586234),new cljs.core.Keyword("on-form-change","mutation-symbol","on-form-change/mutation-symbol",1301241575)], null));
if(cljs.core.truth_(temp__6753__auto__)){
var mutation_symbol = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__28584__auto__ = mutation_symbol;
return cljs.core._conj.call(null,(function (){var x__28584__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),untangled.ui.forms.form_ident.call(null,form),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"field","field",-1302436500),field_name], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto____$1);
})(),x__28584__auto__);
})()], null);
} else {
return null;
}
});
/**
 * Returns the current validity from a form's props for the given field. One of :valid, :invalid, or :unchecked
 */
untangled.ui.forms.current_validity = (function untangled$ui$forms$current_validity(form,field){
return cljs.core.get_in.call(null,form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"validation","validation",-2141396518),field], null));
});
untangled.ui.forms.reduced_if = (function untangled$ui$forms$reduced_if(p,x){
var G__705165 = x;
if(cljs.core.truth_(p.call(null,x))){
return cljs.core.reduced.call(null,G__705165);
} else {
return G__705165;
}
});
/**
 * Returns true iff the form or field has been validated, and the validation failed.
 * Using this on a form ignores unchecked fields,
 * so you should run validate-entire-form! before trusting this value on a form.
 * 
 * SEE ALSO `would-be-valid?` if you'd like to pretend that full-form validation has been run
 * in a query-only sort of way.
 * 
 * `root-form` is the props of a top-level form. Evaluates form recursively.
 * `form` is the props of a specific form
 * `field` is a field to check on a specific form
 */
untangled.ui.forms.invalid_QMARK_ = (function untangled$ui$forms$invalid_QMARK_(var_args){
var args705166 = [];
var len__28871__auto___705170 = arguments.length;
var i__28872__auto___705171 = (0);
while(true){
if((i__28872__auto___705171 < len__28871__auto___705170)){
args705166.push((arguments[i__28872__auto___705171]));

var G__705172 = (i__28872__auto___705171 + (1));
i__28872__auto___705171 = G__705172;
continue;
} else {
}
break;
}

var G__705169 = args705166.length;
switch (G__705169) {
case 1:
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args705166.length)].join('')));

}
});

untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (root_form){
return untangled.ui.forms.form_reduce.call(null,root_form,false,(function (inv_QMARK_,form){
return untangled.ui.forms.reduced_if.call(null,cljs.core.true_QMARK_,cljs.core.reduce.call(null,(function (_,field){
return untangled.ui.forms.reduced_if.call(null,cljs.core.true_QMARK_,untangled.ui.forms.invalid_QMARK_.call(null,form,field));
}),inv_QMARK_,untangled.ui.forms.validatable_fields.call(null,form)));
}));
});

untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516),untangled.ui.forms.current_validity.call(null,form,field));
});

untangled.ui.forms.invalid_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns true iff the form or field has been validated, and the validation is ok.
 * 
 * Please make sure you've read and understood the form state lifecycle with respect to validation.
 * 
 * SEE ALSO `would-be-valid?` if you'd like to pretend that full-form validation has been run
 * in a query-only sort of way.
 * 
 * `root-form` is the props of a top-level form. Evaluates form recursively.
 * `form` is the props of a specific form
 * `field` is a field to check on a specific form
 */
untangled.ui.forms.valid_QMARK_ = (function untangled$ui$forms$valid_QMARK_(var_args){
var args705175 = [];
var len__28871__auto___705192 = arguments.length;
var i__28872__auto___705194 = (0);
while(true){
if((i__28872__auto___705194 < len__28871__auto___705192)){
args705175.push((arguments[i__28872__auto___705194]));

var G__705200 = (i__28872__auto___705194 + (1));
i__28872__auto___705194 = G__705200;
continue;
} else {
}
break;
}

var G__705179 = args705175.length;
switch (G__705179) {
case 1:
return untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args705175.length)].join('')));

}
});

untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (root_form){
return untangled.ui.forms.form_reduce.call(null,root_form,true,(function (vld_QMARK_,form){
return untangled.ui.forms.reduced_if.call(null,cljs.core.false_QMARK_,cljs.core.reduce.call(null,(function (_,field){
return untangled.ui.forms.reduced_if.call(null,cljs.core.false_QMARK_,untangled.ui.forms.valid_QMARK_.call(null,form,field));
}),vld_QMARK_,untangled.ui.forms.validatable_fields.call(null,form)));
}));
});

untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"valid","valid",155614240),untangled.ui.forms.current_validity.call(null,form,field));
});

untangled.ui.forms.valid_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns the validator symbol from the form field.
 * 
 *   `form` The form props
 *   `field` The field name
 */
untangled.ui.forms.validator = (function untangled$ui$forms$validator(form,field){
return new cljs.core.Keyword("input","validator","input/validator",-2134276211).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,field));
});
/**
 * Returns the validator args from the form field
 * 
 *   `form` The form props
 *   `field` The field name
 */
untangled.ui.forms.validator_args = (function untangled$ui$forms$validator_args(form,field){
return cljs.core.assoc.call(null,cljs.core.get.call(null,untangled.ui.forms.field_config.call(null,form,field),new cljs.core.Keyword("input","validator-args","input/validator-args",1559502836),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("untangled.ui.forms","this-form","untangled.ui.forms/this-form",-734881269),form);
});
untangled.ui.forms.set_validation = (function untangled$ui$forms$set_validation(form,field,value){
return cljs.core.assoc_in.call(null,form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,new cljs.core.Keyword(null,"validation","validation",-2141396518),field], null),value);
});
if(typeof untangled.ui.forms.form_field_valid_QMARK_ !== 'undefined'){
} else {
/**
 * Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves.
 */
untangled.ui.forms.form_field_valid_QMARK_ = (function (){var method_table__28681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28685__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.ui.forms","form-field-valid?"),((function (method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__,hierarchy__28685__auto__){
return (function (symbol,value,args){
return symbol;
});})(method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__,hierarchy__28685__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28685__auto__,method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__));
})();
}
cljs.core._add_method.call(null,untangled.ui.forms.form_field_valid_QMARK_,new cljs.core.Symbol("untangled.ui.forms","in-range?","untangled.ui.forms/in-range?",-1396976414,null),(function (_,value,p__705217){
var map__705218 = p__705217;
var map__705218__$1 = ((((!((map__705218 == null)))?((((map__705218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705218):map__705218);
var min = cljs.core.get.call(null,map__705218__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__705218__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value__$1 = (value | (0));
return ((min <= value__$1)) && ((value__$1 <= max));
}));
/**
 * Given a form and a field, returns a new form with that field validated. Does NOT recurse into subforms.
 */
untangled.ui.forms.validate_field_STAR_ = (function untangled$ui$forms$validate_field_STAR_(form,field){
return untangled.ui.forms.set_validation.call(null,form,field,(function (){var temp__6751__auto__ = untangled.ui.forms.validator.call(null,form,field);
if(cljs.core.truth_(temp__6751__auto__)){
var validator = temp__6751__auto__;
var validator_args = untangled.ui.forms.validator_args.call(null,form,field);
var valid_QMARK_ = untangled.ui.forms.form_field_valid_QMARK_.call(null,validator,untangled.ui.forms.current_value.call(null,form,field),validator_args);
if(cljs.core.truth_(valid_QMARK_)){
return new cljs.core.Keyword(null,"valid","valid",155614240);
} else {
return new cljs.core.Keyword(null,"invalid","invalid",412869516);
}
} else {
return new cljs.core.Keyword(null,"valid","valid",155614240);
}
})());
});
/**
 * Runs validation on the defined fields and returns a new form with them properly marked.
 */
untangled.ui.forms.validate_fields = (function untangled$ui$forms$validate_fields(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705231 = arguments.length;
var i__28872__auto___705232 = (0);
while(true){
if((i__28872__auto___705232 < len__28871__auto___705231)){
args__28878__auto__.push((arguments[i__28872__auto___705232]));

var G__705233 = (i__28872__auto___705232 + (1));
i__28872__auto___705232 = G__705233;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__705224){
var vec__705225 = p__705224;
var map__705228 = cljs.core.nth.call(null,vec__705225,(0),null);
var map__705228__$1 = ((((!((map__705228 == null)))?((((map__705228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705228):map__705228);
var skip_unchanged_QMARK_ = cljs.core.get.call(null,map__705228__$1,new cljs.core.Keyword(null,"skip-unchanged?","skip-unchanged?",516666016));
return cljs.core.transduce.call(null,cljs.core.filter.call(null,(cljs.core.truth_(skip_unchanged_QMARK_)?cljs.core.partial.call(null,untangled.ui.forms.dirty_field_QMARK_,form):cljs.core.identity)),untangled.ui.forms.validate_field_STAR_,form,untangled.ui.forms.validatable_fields.call(null,form));
});

untangled.ui.forms.validate_fields.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.validate_fields.cljs$lang$applyTo = (function (seq705222){
var G__705223 = cljs.core.first.call(null,seq705222);
var seq705222__$1 = cljs.core.next.call(null,seq705222);
return untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__705223,seq705222__$1);
});

/**
 * Checks (recursively on this form and subforms) if the values on the given form would be
 *   considered valid if full validation were to be run on the form. Returns true/false.
 */
untangled.ui.forms.would_be_valid_QMARK_ = (function untangled$ui$forms$would_be_valid_QMARK_(form){
var non_recursive_valid_QMARK_ = (function untangled$ui$forms$would_be_valid_QMARK__$_non_recursive_valid_QMARK_(form__$1){
return cljs.core.reduce.call(null,(function (still_valid_QMARK_,field){
var f = untangled.ui.forms.validate_field_STAR_.call(null,form__$1,field);
var field_valid_QMARK_ = untangled.ui.forms.valid_QMARK_.call(null,f,field);
return untangled.ui.forms.reduced_if.call(null,cljs.core.false_QMARK_,(function (){var and__27638__auto__ = still_valid_QMARK_;
if(cljs.core.truth_(and__27638__auto__)){
return field_valid_QMARK_;
} else {
return and__27638__auto__;
}
})());
}),true,untangled.ui.forms.validatable_fields.call(null,form__$1));
});
return untangled.ui.forms.form_reduce.call(null,form,true,(function (result,form__$1){
var and__27638__auto__ = result;
if(cljs.core.truth_(and__27638__auto__)){
return non_recursive_valid_QMARK_.call(null,form__$1);
} else {
return and__27638__auto__;
}
}));
});
/**
 * Checks if the top-level form, or any of the subforms, are dirty. NOTE: Forms remain dirty as long as they have tempids.
 */
untangled.ui.forms.dirty_QMARK_ = (function untangled$ui$forms$dirty_QMARK_(form){
var dirty_form_QMARK_ = (function untangled$ui$forms$dirty_QMARK__$_dirty_form_QMARK_(form__$1){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,untangled.ui.forms.dirty_field_QMARK_,form__$1),untangled.ui.forms.validatable_fields.call(null,form__$1)));
});
return untangled.ui.forms.form_reduce.call(null,form,false,(function (_,form__$1){
return untangled.ui.forms.reduced_if.call(null,cljs.core.true_QMARK_,dirty_form_QMARK_.call(null,form__$1));
}));
});
/**
 * Run validation on an entire form (by ident) with subforms. Returns an updated app-state.
 */
untangled.ui.forms.validate_forms = (function untangled$ui$forms$validate_forms(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705243 = arguments.length;
var i__28872__auto___705244 = (0);
while(true){
if((i__28872__auto___705244 < len__28871__auto___705243)){
args__28878__auto__.push((arguments[i__28872__auto___705244]));

var G__705245 = (i__28872__auto___705244 + (1));
i__28872__auto___705244 = G__705245;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,form_id,p__705239){
var vec__705240 = p__705239;
var opts = cljs.core.nth.call(null,vec__705240,(0),null);
var form = cljs.core.get_in.call(null,app_state,form_id);
var form_class = untangled.ui.forms.form_component.call(null,form);
if(cljs.core.truth_(form_class)){
return untangled.ui.forms.update_forms.call(null,app_state,form,cljs.core.comp.call(null,((function (form,form_class,vec__705240,opts){
return (function (p1__705235_SHARP_){
return untangled.ui.forms.validate_fields.call(null,p1__705235_SHARP_,opts);
});})(form,form_class,vec__705240,opts))
,new cljs.core.Keyword(null,"form","form",-1624062471)));
} else {
return untangled.ui.forms.fail_BANG_.call(null,"Unable to validate form. No component associated with form. Did you remember to use build-form?");
}
});

untangled.ui.forms.validate_forms.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.validate_forms.cljs$lang$applyTo = (function (seq705236){
var G__705237 = cljs.core.first.call(null,seq705236);
var seq705236__$1 = cljs.core.next.call(null,seq705236);
var G__705238 = cljs.core.first.call(null,seq705236__$1);
var seq705236__$2 = cljs.core.next.call(null,seq705236__$1);
return untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic(G__705237,G__705238,seq705236__$2);
});

cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","validate-field","untangled.ui.forms/validate-field",912319628,null),(function (env705250,_,p__705251){
var map__705252 = p__705251;
var map__705252__$1 = ((((!((map__705252 == null)))?((((map__705252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705252):map__705252);
var form_id = cljs.core.get.call(null,map__705252__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var field = cljs.core.get.call(null,map__705252__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return cljs.core.merge.call(null,(function (){var map__705258 = env705250;
var map__705258__$1 = ((((!((map__705258 == null)))?((((map__705258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705258):map__705258);
var state = cljs.core.get.call(null,map__705258__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705258,map__705258__$1,state,map__705252,map__705252__$1,form_id,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,form_id,untangled.ui.forms.validate_field_STAR_,field);
});})(map__705258,map__705258__$1,state,map__705252,map__705252__$1,form_id,field))
], null);
})(),(function (){var env = env705250;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","validate-form","untangled.ui.forms/validate-form",60827996,null),(function (env705271,_,p__705272){
var map__705273 = p__705272;
var map__705273__$1 = ((((!((map__705273 == null)))?((((map__705273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705273):map__705273);
var opts = map__705273__$1;
var form_id = cljs.core.get.call(null,map__705273__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
return cljs.core.merge.call(null,(function (){var map__705275 = env705271;
var map__705275__$1 = ((((!((map__705275 == null)))?((((map__705275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705275):map__705275);
var state = cljs.core.get.call(null,map__705275__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705275,map__705275__$1,state,map__705273,map__705273__$1,opts,form_id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.forms.validate_forms,form_id,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"form-id","form-id",-158754567)));
});})(map__705275,map__705275__$1,state,map__705273,map__705273__$1,opts,form_id))
], null);
})(),(function (){var env = env705271;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
/**
 * Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
 * but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
 * the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
 * own transaction (so your mutation can see the validated form), you may use the underlying
 * `(f/validate-form {:form-id fident})` mutation in your own call to `transact!`.
 */
untangled.ui.forms.validate_entire_form_BANG_ = (function untangled$ui$forms$validate_entire_form_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705287 = arguments.length;
var i__28872__auto___705288 = (0);
while(true){
if((i__28872__auto___705288 < len__28871__auto___705287)){
args__28878__auto__.push((arguments[i__28872__auto___705288]));

var G__705289 = (i__28872__auto___705288 + (1));
i__28872__auto___705288 = G__705289;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,form,p__705284){
var map__705285 = p__705284;
var map__705285__$1 = ((((!((map__705285 == null)))?((((map__705285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705285):map__705285);
var opts = map__705285__$1;
return om.next.transact_BANG_.call(null,comp_or_reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","validate-form","untangled.ui.forms/validate-form",60827996,null)),(function (){var x__28584__auto__ = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),untangled.ui.forms.form_ident.call(null,form)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});

untangled.ui.forms.validate_entire_form_BANG_.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.validate_entire_form_BANG_.cljs$lang$applyTo = (function (seq705281){
var G__705282 = cljs.core.first.call(null,seq705281);
var seq705281__$1 = cljs.core.next.call(null,seq705281);
var G__705283 = cljs.core.first.call(null,seq705281__$1);
var seq705281__$2 = cljs.core.next.call(null,seq705281__$1);
return untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__705282,G__705283,seq705281__$2);
});

cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","toggle-field","untangled.ui.forms/toggle-field",-1604684281,null),(function (env705291,_,p__705292){
var map__705293 = p__705292;
var map__705293__$1 = ((((!((map__705293 == null)))?((((map__705293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705293):map__705293);
var form_id = cljs.core.get.call(null,map__705293__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var field = cljs.core.get.call(null,map__705293__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return cljs.core.merge.call(null,(function (){var map__705295 = env705291;
var map__705295__$1 = ((((!((map__705295 == null)))?((((map__705295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705295):map__705295);
var state = cljs.core.get.call(null,map__705295__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705295,map__705295__$1,state,map__705293,map__705293__$1,form_id,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,form_id,untangled.ui.forms.update_current_value,field,cljs.core.not);
});})(map__705295,map__705295__$1,state,map__705293,map__705293__$1,form_id,field))
], null);
})(),(function (){var env = env705291;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","set-field","untangled.ui.forms/set-field",-989884384,null),(function (env705305,_,p__705306){
var map__705307 = p__705306;
var map__705307__$1 = ((((!((map__705307 == null)))?((((map__705307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705307):map__705307);
var form_id = cljs.core.get.call(null,map__705307__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var field = cljs.core.get.call(null,map__705307__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.call(null,map__705307__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.merge.call(null,(function (){var map__705309 = env705305;
var map__705309__$1 = ((((!((map__705309 == null)))?((((map__705309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705309):map__705309);
var state = cljs.core.get.call(null,map__705309__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705309,map__705309__$1,state,map__705307,map__705307__$1,form_id,field,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,form_id,untangled.ui.forms.set_current_value,field,value);
});})(map__705309,map__705309__$1,state,map__705307,map__705307__$1,form_id,field,value))
], null);
})(),(function (){var env = env705305;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
if(typeof untangled.ui.forms.form_field_STAR_ !== 'undefined'){
} else {
/**
 * Multimethod for rendering field types. Dispatches on field :input/type.
 */
untangled.ui.forms.form_field_STAR_ = (function (){var method_table__28681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28685__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.ui.forms","form-field*"),((function (method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__,hierarchy__28685__auto__){
return (function() { 
var G__705324__delegate = function (component,form,field_name,params){
return new cljs.core.Keyword("input","type","input/type",1543186790).cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config.call(null,form,field_name));
};
var G__705324 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705325__i = 0, G__705325__a = new Array(arguments.length -  3);
while (G__705325__i < G__705325__a.length) {G__705325__a[G__705325__i] = arguments[G__705325__i + 3]; ++G__705325__i;}
  params = new cljs.core.IndexedSeq(G__705325__a,0);
} 
return G__705324__delegate.call(this,component,form,field_name,params);};
G__705324.cljs$lang$maxFixedArity = 3;
G__705324.cljs$lang$applyTo = (function (arglist__705326){
var component = cljs.core.first(arglist__705326);
arglist__705326 = cljs.core.next(arglist__705326);
var form = cljs.core.first(arglist__705326);
arglist__705326 = cljs.core.next(arglist__705326);
var field_name = cljs.core.first(arglist__705326);
var params = cljs.core.rest(arglist__705326);
return G__705324__delegate(component,form,field_name,params);
});
G__705324.cljs$core$IFn$_invoke$arity$variadic = G__705324__delegate;
return G__705324;
})()
;})(method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__,hierarchy__28685__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28685__auto__,method_table__28681__auto__,prefer_table__28682__auto__,method_cache__28683__auto__,cached_hierarchy__28684__auto__));
})();
}
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__705327__delegate = function (component,form,field_name,params){
return untangled.ui.forms.fail_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot dispatch to form-field renderer on form "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for field "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)].join(''));
};
var G__705327 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705328__i = 0, G__705328__a = new Array(arguments.length -  3);
while (G__705328__i < G__705328__a.length) {G__705328__a[G__705328__i] = arguments[G__705328__i + 3]; ++G__705328__i;}
  params = new cljs.core.IndexedSeq(G__705328__a,0);
} 
return G__705327__delegate.call(this,component,form,field_name,params);};
G__705327.cljs$lang$maxFixedArity = 3;
G__705327.cljs$lang$applyTo = (function (arglist__705329){
var component = cljs.core.first(arglist__705329);
arglist__705329 = cljs.core.next(arglist__705329);
var form = cljs.core.first(arglist__705329);
arglist__705329 = cljs.core.next(arglist__705329);
var field_name = cljs.core.first(arglist__705329);
var params = cljs.core.rest(arglist__705329);
return G__705327__delegate(component,form,field_name,params);
});
G__705327.cljs$core$IFn$_invoke$arity$variadic = G__705327__delegate;
return G__705327;
})()
);
/**
 * Function for rendering form fields. Call this to render, but `defmethod` on `form-field*`.
 */
untangled.ui.forms.form_field = (function untangled$ui$forms$form_field(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705334 = arguments.length;
var i__28872__auto___705335 = (0);
while(true){
if((i__28872__auto___705335 < len__28871__auto___705334)){
args__28878__auto__.push((arguments[i__28872__auto___705335]));

var G__705336 = (i__28872__auto___705335 + (1));
i__28872__auto___705335 = G__705336;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,form,field_name,params){
return cljs.core.apply.call(null,untangled.ui.forms.form_field_STAR_,component,form,field_name,params);
});

untangled.ui.forms.form_field.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.form_field.cljs$lang$applyTo = (function (seq705330){
var G__705331 = cljs.core.first.call(null,seq705330);
var seq705330__$1 = cljs.core.next.call(null,seq705330);
var G__705332 = cljs.core.first.call(null,seq705330__$1);
var seq705330__$2 = cljs.core.next.call(null,seq705330__$1);
var G__705333 = cljs.core.first.call(null,seq705330__$2);
var seq705330__$3 = cljs.core.next.call(null,seq705330__$2);
return untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(G__705331,G__705332,G__705333,seq705330__$3);
});

untangled.ui.forms.render_input_field = (function untangled$ui$forms$render_input_field(component,htmlProps,form,field_name,type,field_value__GT_input_value,input_value__GT_field_value){
var id = untangled.ui.forms.form_ident.call(null,form);
var input_value = field_value__GT_input_value.call(null,untangled.ui.forms.current_value.call(null,form,field_name));
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "form-control";
}
})();
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,htmlProps,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),field_name,new cljs.core.Keyword(null,"value","value",305978217),input_value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),untangled.ui.forms.placeholder.call(null,form,field_name),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (id,input_value,cls){
return (function (_){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","validate-field","untangled.ui.forms/validate-field",912319628,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"blur","blur",-453500461)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,input_value,cls))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (id,input_value,cls){
return (function (event){
var value = input_value__GT_field_value.call(null,event.target.value);
var field_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.Keyword(null,"value","value",305978217),value], null);
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","set-field","untangled.ui.forms/set-field",-989884384,null)),(function (){var x__28584__auto__ = field_info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"edit","edit",-1641834166)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,input_value,cls))
], null)));
return om.dom.input.call(null,attrs);
});
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","text","untangled.ui.forms/text",1090303414),(function() { 
var G__705384__delegate = function (component,form,field_name,params){
var i__GT_f = cljs.core.identity;
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "form-control";
}
})();
var f__GT_i = cljs.core.identity;
return untangled.ui.forms.render_input_field.call(null,component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cls], null),form,field_name,"text",f__GT_i,i__GT_f);
};
var G__705384 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705388__i = 0, G__705388__a = new Array(arguments.length -  3);
while (G__705388__i < G__705388__a.length) {G__705388__a[G__705388__i] = arguments[G__705388__i + 3]; ++G__705388__i;}
  params = new cljs.core.IndexedSeq(G__705388__a,0);
} 
return G__705384__delegate.call(this,component,form,field_name,params);};
G__705384.cljs$lang$maxFixedArity = 3;
G__705384.cljs$lang$applyTo = (function (arglist__705389){
var component = cljs.core.first(arglist__705389);
arglist__705389 = cljs.core.next(arglist__705389);
var form = cljs.core.first(arglist__705389);
arglist__705389 = cljs.core.next(arglist__705389);
var field_name = cljs.core.first(arglist__705389);
var params = cljs.core.rest(arglist__705389);
return G__705384__delegate(component,form,field_name,params);
});
G__705384.cljs$core$IFn$_invoke$arity$variadic = G__705384__delegate;
return G__705384;
})()
);
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","integer","untangled.ui.forms/integer",775827753),(function() { 
var G__705393__delegate = function (component,form,field_name,params){
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "form-control";
}
})();
var i__GT_f = ((function (cls){
return (function (p1__705392_SHARP_){
if(cljs.core.seq.call(null,cljs.core.re_matches.call(null,/^[0-9]*$/,p1__705392_SHARP_))){
return (p1__705392_SHARP_ | (0));
} else {
return null;
}
});})(cls))
;
var f__GT_i = cljs.core.identity;
return untangled.ui.forms.render_input_field.call(null,component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),cls], null),form,field_name,"number",f__GT_i,i__GT_f);
};
var G__705393 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705395__i = 0, G__705395__a = new Array(arguments.length -  3);
while (G__705395__i < G__705395__a.length) {G__705395__a[G__705395__i] = arguments[G__705395__i + 3]; ++G__705395__i;}
  params = new cljs.core.IndexedSeq(G__705395__a,0);
} 
return G__705393__delegate.call(this,component,form,field_name,params);};
G__705393.cljs$lang$maxFixedArity = 3;
G__705393.cljs$lang$applyTo = (function (arglist__705396){
var component = cljs.core.first(arglist__705396);
arglist__705396 = cljs.core.next(arglist__705396);
var form = cljs.core.first(arglist__705396);
arglist__705396 = cljs.core.next(arglist__705396);
var field_name = cljs.core.first(arglist__705396);
var params = cljs.core.rest(arglist__705396);
return G__705393__delegate(component,form,field_name,params);
});
G__705393.cljs$core$IFn$_invoke$arity$variadic = G__705393__delegate;
return G__705393;
})()
);
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","select-option","untangled.ui.forms/select-option",1708359243,null),(function (env705397,_,p__705398){
var map__705399 = p__705398;
var map__705399__$1 = ((((!((map__705399 == null)))?((((map__705399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705399):map__705399);
var form_id = cljs.core.get.call(null,map__705399__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var field = cljs.core.get.call(null,map__705399__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.call(null,map__705399__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.merge.call(null,(function (){var map__705401 = env705397;
var map__705401__$1 = ((((!((map__705401 == null)))?((((map__705401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705401):map__705401);
var state = cljs.core.get.call(null,map__705401__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705401,map__705401__$1,state,map__705399,map__705399__$1,form_id,field,value){
return (function (){
var value__$1 = value.substring((1));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,cljs.core.conj.call(null,form_id,field),cljs.core.keyword.call(null,value__$1));
});})(map__705401,map__705401__$1,state,map__705399,map__705399__$1,form_id,field,value))
], null);
})(),(function (){var env = env705397;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","dropdown","untangled.ui.forms/dropdown",-1152053818),(function() { 
var G__705406__delegate = function (component,form,field_name,params){
var id = untangled.ui.forms.form_ident.call(null,form);
var selection = untangled.ui.forms.current_value.call(null,form,field_name);
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "form-control";
}
})();
var field = untangled.ui.forms.field_config.call(null,form,field_name);
var optional_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.ui.forms","none","untangled.ui.forms/none",-1572888597),new cljs.core.Keyword("input","default-value","input/default-value",332369344).cljs$core$IFn$_invoke$arity$1(field));
var options = new cljs.core.Keyword("input","options","input/options",469009719).cljs$core$IFn$_invoke$arity$1(field);
return om.dom.select.call(null,({"name": field_name, "className": cls, "value": selection, "onChange": ((function (id,selection,cls,field,optional_QMARK_,options){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.Keyword(null,"value","value",305978217),value], null);
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","select-option","untangled.ui.forms/select-option",1708359243,null)),(function (){var x__28584__auto__ = field_info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"edit","edit",-1641834166)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,selection,cls,field,optional_QMARK_,options))
}),((optional_QMARK_)?om.dom.option.call(null,({"value": new cljs.core.Keyword("untangled.ui.forms","none","untangled.ui.forms/none",-1572888597)}),""):null),cljs.core.map.call(null,((function (id,selection,cls,field,optional_QMARK_,options){
return (function (p__705403){
var map__705404 = p__705403;
var map__705404__$1 = ((((!((map__705404 == null)))?((((map__705404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705404):map__705404);
var key = cljs.core.get.call(null,map__705404__$1,new cljs.core.Keyword("option","key","option/key",-108532174));
var label = cljs.core.get.call(null,map__705404__$1,new cljs.core.Keyword("option","label","option/label",1387746981));
return om.dom.option.call(null,({"key": key, "value": key}),label);
});})(id,selection,cls,field,optional_QMARK_,options))
,options));
};
var G__705406 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705408__i = 0, G__705408__a = new Array(arguments.length -  3);
while (G__705408__i < G__705408__a.length) {G__705408__a[G__705408__i] = arguments[G__705408__i + 3]; ++G__705408__i;}
  params = new cljs.core.IndexedSeq(G__705408__a,0);
} 
return G__705406__delegate.call(this,component,form,field_name,params);};
G__705406.cljs$lang$maxFixedArity = 3;
G__705406.cljs$lang$applyTo = (function (arglist__705409){
var component = cljs.core.first(arglist__705409);
arglist__705409 = cljs.core.next(arglist__705409);
var form = cljs.core.first(arglist__705409);
arglist__705409 = cljs.core.next(arglist__705409);
var field_name = cljs.core.first(arglist__705409);
var params = cljs.core.rest(arglist__705409);
return G__705406__delegate(component,form,field_name,params);
});
G__705406.cljs$core$IFn$_invoke$arity$variadic = G__705406__delegate;
return G__705406;
})()
);
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","checkbox","untangled.ui.forms/checkbox",1490685502),(function() { 
var G__705411__delegate = function (component,form,field_name,params){
var id = untangled.ui.forms.form_ident.call(null,form);
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})();
var bool_value = untangled.ui.forms.current_value.call(null,form,field_name);
return om.dom.input.call(null,({"type": "checkbox", "name": field_name, "className": cls, "checked": bool_value, "onChange": ((function (id,cls,bool_value){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.Keyword(null,"value","value",305978217),value], null);
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","toggle-field","untangled.ui.forms/toggle-field",-1604684281,null)),(function (){var x__28584__auto__ = field_info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"edit","edit",-1641834166)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,cls,bool_value))
}));
};
var G__705411 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__705419__i = 0, G__705419__a = new Array(arguments.length -  3);
while (G__705419__i < G__705419__a.length) {G__705419__a[G__705419__i] = arguments[G__705419__i + 3]; ++G__705419__i;}
  params = new cljs.core.IndexedSeq(G__705419__a,0);
} 
return G__705411__delegate.call(this,component,form,field_name,params);};
G__705411.cljs$lang$maxFixedArity = 3;
G__705411.cljs$lang$applyTo = (function (arglist__705421){
var component = cljs.core.first(arglist__705421);
arglist__705421 = cljs.core.next(arglist__705421);
var form = cljs.core.first(arglist__705421);
arglist__705421 = cljs.core.next(arglist__705421);
var field_name = cljs.core.first(arglist__705421);
var params = cljs.core.rest(arglist__705421);
return G__705411__delegate(component,form,field_name,params);
});
G__705411.cljs$core$IFn$_invoke$arity$variadic = G__705411__delegate;
return G__705411;
})()
);
/**
 * Returns the generated ID of a form field component. Needed to label radio buttons
 */
untangled.ui.forms.radio_button_id = (function untangled$ui$forms$radio_button_id(form,field,choice){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,untangled.ui.forms.form_ident.call(null,form))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choice)].join('');
});
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","radio","untangled.ui.forms/radio",1789655245),(function() { 
var G__705433__delegate = function (component,form,field_name,p__705427){
var map__705428 = p__705427;
var map__705428__$1 = ((((!((map__705428 == null)))?((((map__705428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705428):map__705428);
var choice = cljs.core.get.call(null,map__705428__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var label = cljs.core.get.call(null,map__705428__$1,new cljs.core.Keyword(null,"label","label",1718410804),"\u00A0");
var id = untangled.ui.forms.form_ident.call(null,form);
var cls = "c-radio c-radio--expanded";
var field_id = untangled.ui.forms.radio_button_id.call(null,form,field_name,choice);
var current_val = untangled.ui.forms.current_value.call(null,form,field_name);
return om.dom.span.call(null,null,om.dom.input.call(null,({"type": "radio", "id": field_id, "name": field_name, "className": cls, "value": cljs.core.pr_str.call(null,choice), "checked": cljs.core._EQ_.call(null,current_val,choice), "onChange": ((function (id,cls,field_id,current_val,map__705428,map__705428__$1,choice,label){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read_string.call(null,value)], null);
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","set-field","untangled.ui.forms/set-field",-989884384,null)),(function (){var x__28584__auto__ = field_info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"edit","edit",-1641834166)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,cls,field_id,current_val,map__705428,map__705428__$1,choice,label))
})),om.dom.label.call(null,({"htmlFor": field_id}),label));
};
var G__705433 = function (component,form,field_name,var_args){
var p__705427 = null;
if (arguments.length > 3) {
var G__705446__i = 0, G__705446__a = new Array(arguments.length -  3);
while (G__705446__i < G__705446__a.length) {G__705446__a[G__705446__i] = arguments[G__705446__i + 3]; ++G__705446__i;}
  p__705427 = new cljs.core.IndexedSeq(G__705446__a,0);
} 
return G__705433__delegate.call(this,component,form,field_name,p__705427);};
G__705433.cljs$lang$maxFixedArity = 3;
G__705433.cljs$lang$applyTo = (function (arglist__705447){
var component = cljs.core.first(arglist__705447);
arglist__705447 = cljs.core.next(arglist__705447);
var form = cljs.core.first(arglist__705447);
arglist__705447 = cljs.core.next(arglist__705447);
var field_name = cljs.core.first(arglist__705447);
var p__705427 = cljs.core.rest(arglist__705447);
return G__705433__delegate(component,form,field_name,p__705427);
});
G__705433.cljs$core$IFn$_invoke$arity$variadic = G__705433__delegate;
return G__705433;
})()
);
cljs.core._add_method.call(null,untangled.ui.forms.form_field_STAR_,new cljs.core.Keyword("untangled.ui.forms","textarea","untangled.ui.forms/textarea",788040345),(function() { 
var G__705458__delegate = function (component,form,field_name,p__705454){
var map__705455 = p__705454;
var map__705455__$1 = ((((!((map__705455 == null)))?((((map__705455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705455):map__705455);
var htmlProps = map__705455__$1;
var id = untangled.ui.forms.form_ident.call(null,form);
var cls = (function (){var or__27650__auto__ = untangled.ui.forms.css_class.call(null,form,field_name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})();
var value = untangled.ui.forms.current_value.call(null,form,field_name);
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,htmlProps,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),field_name,new cljs.core.Keyword(null,"className","className",-1983287057),cls,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (id,cls,value,map__705455,map__705455__$1,htmlProps){
return (function (_){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","validate-field","untangled.ui.forms/validate-field",912319628,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"blur","blur",-453500461)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,cls,value,map__705455,map__705455__$1,htmlProps))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (id,cls,value,map__705455,map__705455__$1,htmlProps){
return (function (event){
var value__$1 = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),id,new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null);
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","set-field","untangled.ui.forms/set-field",-989884384,null)),(function (){var x__28584__auto__ = field_info;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation.call(null,form,field_name,new cljs.core.Keyword(null,"edit","edit",-1641834166)),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(id,cls,value,map__705455,map__705455__$1,htmlProps))
], null)));
return om.dom.textarea.call(null,attrs);
};
var G__705458 = function (component,form,field_name,var_args){
var p__705454 = null;
if (arguments.length > 3) {
var G__705464__i = 0, G__705464__a = new Array(arguments.length -  3);
while (G__705464__i < G__705464__a.length) {G__705464__a[G__705464__i] = arguments[G__705464__i + 3]; ++G__705464__i;}
  p__705454 = new cljs.core.IndexedSeq(G__705464__a,0);
} 
return G__705458__delegate.call(this,component,form,field_name,p__705454);};
G__705458.cljs$lang$maxFixedArity = 3;
G__705458.cljs$lang$applyTo = (function (arglist__705465){
var component = cljs.core.first(arglist__705465);
arglist__705465 = cljs.core.next(arglist__705465);
var form = cljs.core.first(arglist__705465);
arglist__705465 = cljs.core.next(arglist__705465);
var field_name = cljs.core.first(arglist__705465);
var p__705454 = cljs.core.rest(arglist__705465);
return G__705458__delegate(component,form,field_name,p__705454);
});
G__705458.cljs$core$IFn$_invoke$arity$variadic = G__705458__delegate;
return G__705458;
})()
);

/**
 * @interface
 */
untangled.ui.forms.DBAdapter = function(){};

/**
 * Entry point for creating (& executing) a transaction,
 *   given params with the same shape as what diff-form returns.
 *   Example code for using `DBAdapter/commit!`:
 *   (defmethod your-mutate `forms/commit-to-entity [env k params]
 *     (commit! (:adapter env) params))
 */
untangled.ui.forms.commit_BANG_ = (function untangled$ui$forms$commit_BANG_(this$,params){
if((!((this$ == null))) && (!((this$.untangled$ui$forms$DBAdapter$commit_BANG_$arity$2 == null)))){
return this$.untangled$ui$forms$DBAdapter$commit_BANG_$arity$2(this$,params);
} else {
var x__28368__auto__ = (((this$ == null))?null:this$);
var m__28369__auto__ = (untangled.ui.forms.commit_BANG_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,this$,params);
} else {
var m__28369__auto____$1 = (untangled.ui.forms.commit_BANG_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"DBAdapter.commit!",this$);
}
}
}
});

/**
 * Execute a transaction!
 */
untangled.ui.forms.transact_BANG_ = (function untangled$ui$forms$transact_BANG_(this$,tx){
if((!((this$ == null))) && (!((this$.untangled$ui$forms$DBAdapter$transact_BANG_$arity$2 == null)))){
return this$.untangled$ui$forms$DBAdapter$transact_BANG_$arity$2(this$,tx);
} else {
var x__28368__auto__ = (((this$ == null))?null:this$);
var m__28369__auto__ = (untangled.ui.forms.transact_BANG_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,this$,tx);
} else {
var m__28369__auto____$1 = (untangled.ui.forms.transact_BANG_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,this$,tx);
} else {
throw cljs.core.missing_protocol.call(null,"DBAdapter.transact!",this$);
}
}
}
});

/**
 * Generates a db tempid.
 */
untangled.ui.forms.gen_tempid = (function untangled$ui$forms$gen_tempid(this$){
if((!((this$ == null))) && (!((this$.untangled$ui$forms$DBAdapter$gen_tempid$arity$1 == null)))){
return this$.untangled$ui$forms$DBAdapter$gen_tempid$arity$1(this$);
} else {
var x__28368__auto__ = (((this$ == null))?null:this$);
var m__28369__auto__ = (untangled.ui.forms.gen_tempid[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,this$);
} else {
var m__28369__auto____$1 = (untangled.ui.forms.gen_tempid["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DBAdapter.gen-tempid",this$);
}
}
}
});

/**
 * Given a tx-type and data, transforms it into a db transaction.
 *   OR TODO: Should this be add-tx, set-tx, etc...
 */
untangled.ui.forms.parse_tx = (function untangled$ui$forms$parse_tx(this$,tx_type,data){
if((!((this$ == null))) && (!((this$.untangled$ui$forms$DBAdapter$parse_tx$arity$3 == null)))){
return this$.untangled$ui$forms$DBAdapter$parse_tx$arity$3(this$,tx_type,data);
} else {
var x__28368__auto__ = (((this$ == null))?null:this$);
var m__28369__auto__ = (untangled.ui.forms.parse_tx[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,this$,tx_type,data);
} else {
var m__28369__auto____$1 = (untangled.ui.forms.parse_tx["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,this$,tx_type,data);
} else {
throw cljs.core.missing_protocol.call(null,"DBAdapter.parse-tx",this$);
}
}
}
});

untangled.ui.forms.field_diff_STAR_ = (function untangled$ui$forms$field_diff_STAR_(curr,orig,cfg){
var G__705482 = (((new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(cfg) instanceof cljs.core.Keyword))?new cljs.core.Keyword("input","cardinality","input/cardinality",-71639967).cljs$core$IFn$_invoke$arity$1(cfg).fqn:null);
switch (G__705482) {
case "many":
var vec__705483 = cljs.core.map.call(null,cljs.core.set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,orig], null));
var curr_set = cljs.core.nth.call(null,vec__705483,(0),null);
var orig_set = cljs.core.nth.call(null,vec__705483,(1),null);
var additions = clojure.set.difference.call(null,curr_set,orig_set);
var removals = clojure.set.difference.call(null,orig_set,curr_set);
var G__705486 = cljs.core.PersistentArrayMap.EMPTY;
var G__705486__$1 = ((cljs.core.seq.call(null,removals))?cljs.core.assoc.call(null,G__705486,new cljs.core.Keyword("form","remove-relations","form/remove-relations",556419),cljs.core.vec.call(null,removals)):G__705486);
if(cljs.core.seq.call(null,additions)){
return cljs.core.assoc.call(null,G__705486__$1,new cljs.core.Keyword("form","add-relations","form/add-relations",-1319384722),cljs.core.vec.call(null,additions));
} else {
return G__705486__$1;
}

break;
case "one":
var G__705487 = cljs.core.PersistentArrayMap.EMPTY;
var G__705487__$1 = (cljs.core.truth_(curr)?cljs.core.assoc.call(null,G__705487,new cljs.core.Keyword("form","add-relations","form/add-relations",-1319384722),curr):G__705487);
if(cljs.core.truth_(orig)){
return cljs.core.assoc.call(null,G__705487__$1,new cljs.core.Keyword("form","remove-relations","form/remove-relations",556419),orig);
} else {
return G__705487__$1;
}

break;
default:
if(cljs.core.not_EQ_.call(null,curr,orig)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("form","updates","form/updates",2000348712),curr], null);
} else {
return null;
}

}
});
untangled.ui.forms.field_diff = (function untangled$ui$forms$field_diff(form,diff,field){
var ident = untangled.ui.forms.form_ident.call(null,form);
var cfg = untangled.ui.forms.field_config.call(null,form,field);
var curr = untangled.ui.forms._QMARK_normalize.call(null,cfg,untangled.ui.forms.current_value.call(null,form,field));
var orig = untangled.ui.forms._QMARK_normalize.call(null,cfg,untangled.ui.forms.get_original_data.call(null,form,field));
return cljs.core.reduce.call(null,((function (ident,cfg,curr,orig){
return (function (diff__$1,p__705498){
var vec__705499 = p__705498;
var tx_type = cljs.core.nth.call(null,vec__705499,(0),null);
var value = cljs.core.nth.call(null,vec__705499,(1),null);
return cljs.core.assoc_in.call(null,diff__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_type,ident,field], null),value);
});})(ident,cfg,curr,orig))
,diff,untangled.ui.forms.field_diff_STAR_.call(null,curr,orig,cfg));
});
/**
 * Returns the diff between the form's current state and its original data.
 * The return value is a map where the keys are the idents of the forms that have changed,
 * and the values are vectors of the keys for the fields that changed on that form.
 * 
 * Return value:
 * {:form/new-entities {[:phone/by-id #phone-id] {...}}
 *  :form/updates {[:phone/by-id 1] {:phone/number "123-4567"}}
 *  :form/add-relations {[:person/by-id 1] {:person/number #{phone-id-not-ident ...}}}
 *  :form/remove-relations {[:person/by-id 1] {:person/number #{4 5}}}}
 */
untangled.ui.forms.diff_form = (function untangled$ui$forms$diff_form(root_form){
return untangled.ui.forms.form_reduce.call(null,root_form,cljs.core.PersistentArrayMap.EMPTY,(function (diff,form){
var vec__705505 = untangled.ui.forms.form_ident.call(null,form);
var _ = cljs.core.nth.call(null,vec__705505,(0),null);
var id = cljs.core.nth.call(null,vec__705505,(1),null);
var ident = vec__705505;
var fields = untangled.ui.forms.element_names.call(null,form);
if(om.next.tempid_QMARK_.call(null,id)){
return cljs.core.assoc_in.call(null,diff,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","new-entities","form/new-entities",1403132343),ident], null),cljs.core.select_keys.call(null,form,cljs.core.remove.call(null,cljs.core.partial.call(null,untangled.ui.forms.ui_field_QMARK_,form),fields)));
} else {
return cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.remove.call(null,cljs.core.partial.call(null,untangled.ui.forms.ui_field_QMARK_,form)),cljs.core.filter.call(null,cljs.core.partial.call(null,untangled.ui.forms.dirty_field_QMARK_,form))),cljs.core.completing.call(null,cljs.core.partial.call(null,untangled.ui.forms.field_diff,form)),diff,fields);
}
}));
});
/**
 * Modify the form's (under `form-id`) using `update-forms` and a passed in transform `xf`
 */
untangled.ui.forms.entity_xform = (function untangled$ui$forms$entity_xform(state,form_id,xf){
return untangled.ui.forms.update_forms.call(null,state,cljs.core.get_in.call(null,state,form_id),cljs.core.comp.call(null,xf,new cljs.core.Keyword(null,"form","form",-1624062471)));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","commit-to-entity","untangled.ui.forms/commit-to-entity",-976115368,null),(function (env705538,_,p__705539){
var map__705541 = p__705539;
var map__705541__$1 = ((((!((map__705541 == null)))?((((map__705541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705541):map__705541);
var form = cljs.core.get.call(null,map__705541__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var remote = cljs.core.get.call(null,map__705541__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
return cljs.core.merge.call(null,(function (){var map__705544 = env705538;
var map__705544__$1 = ((((!((map__705544 == null)))?((((map__705544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705544):map__705544);
var state = cljs.core.get.call(null,map__705544__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705544,map__705544__$1,state,map__705541,map__705541__$1,form,remote){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.forms.entity_xform,untangled.ui.forms.form_ident.call(null,form),untangled.ui.forms.commit_state);
});})(map__705544,map__705544__$1,state,map__705541,map__705541__$1,form,remote))
], null);
})(),(function (){var map__705551 = env705538;
var map__705551__$1 = ((((!((map__705551 == null)))?((((map__705551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705551):map__705551);
var state = cljs.core.get.call(null,map__705551__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__705551__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var target = cljs.core.get.call(null,map__705551__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(cljs.core.truth_((function (){var and__27638__auto__ = remote;
if(cljs.core.truth_(and__27638__auto__)){
return target;
} else {
return and__27638__auto__;
}
})())?cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235),untangled.ui.forms.diff_form.call(null,form)):null)], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.forms","reset-from-entity","untangled.ui.forms/reset-from-entity",-2090060625,null),(function (env705591,_,p__705594){
var map__705596 = p__705594;
var map__705596__$1 = ((((!((map__705596 == null)))?((((map__705596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705596):map__705596);
var form_id = cljs.core.get.call(null,map__705596__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
return cljs.core.merge.call(null,(function (){var map__705598 = env705591;
var map__705598__$1 = ((((!((map__705598 == null)))?((((map__705598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705598):map__705598);
var state = cljs.core.get.call(null,map__705598__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__705598,map__705598__$1,state,map__705596,map__705596__$1,form_id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.forms.entity_xform,form_id,untangled.ui.forms.reset_entity);
});})(map__705598,map__705598__$1,state,map__705596,map__705596__$1,form_id))
], null);
})(),(function (){var env = env705591;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
/**
 * Reset the form from a given entity in your application database using an Om transaction and update the validation state.
 * You may compose your own Om transactions and use `(f/reset-from-entity {:form-id [:entity id]})` directly.
 */
untangled.ui.forms.reset_from_entity_BANG_ = (function untangled$ui$forms$reset_from_entity_BANG_(comp_or_reconciler,form){
var form_id = untangled.ui.forms.form_ident.call(null,form);
return om.next.transact_BANG_.call(null,comp_or_reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","reset-from-entity","untangled.ui.forms/reset-from-entity",-2090060625,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});
/**
 * Copy the given form state into the given entity. If remote is supplied, then it will optimistically update the app
 * database and also post the entity to the server.
 * 
 * IMPORTANT: This function checks the validity of the form. If it is invalid, it will NOT commit the changes, but will
 * instead trigger an update of the form in the UI to show validation errors.
 * 
 * For remotes to work you must implement `(f/commit-to-entity {:form-id [:id id] :value {...})`
 * on the server. 
 */
untangled.ui.forms.commit_to_entity_BANG_ = (function untangled$ui$forms$commit_to_entity_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705653 = arguments.length;
var i__28872__auto___705654 = (0);
while(true){
if((i__28872__auto___705654 < len__28871__auto___705653)){
args__28878__auto__.push((arguments[i__28872__auto___705654]));

var G__705657 = (i__28872__auto___705654 + (1));
i__28872__auto___705654 = G__705657;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__705647){
var map__705648 = p__705647;
var map__705648__$1 = ((((!((map__705648 == null)))?((((map__705648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705648):map__705648);
var remote = cljs.core.get.call(null,map__705648__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),false);
var rerender = cljs.core.get.call(null,map__705648__$1,new cljs.core.Keyword(null,"rerender","rerender",-1601192263));
var form = om.next.props.call(null,component);
return om.next.transact_BANG_.call(null,component,cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(untangled.ui.forms.valid_QMARK_.call(null,untangled.ui.forms.validate_fields.call(null,form)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","commit-to-entity","untangled.ui.forms/commit-to-entity",-976115368,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"remote","remote",-1593576576),remote], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","validate-form","untangled.ui.forms/validate-form",60827996,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-id","form-id",-158754567),untangled.ui.forms.form_ident.call(null,form)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))),untangled.ui.forms.form_root_key], null),rerender));
});

untangled.ui.forms.commit_to_entity_BANG_.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.commit_to_entity_BANG_.cljs$lang$applyTo = (function (seq705628){
var G__705629 = cljs.core.first.call(null,seq705628);
var seq705628__$1 = cljs.core.next.call(null,seq705628);
return untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__705629,seq705628__$1);
});


//# sourceMappingURL=forms.js.map?rel=1489703354038
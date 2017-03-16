// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.forms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var args51019 = [];
var len__8723__auto___51022 = arguments.length;
var i__8724__auto___51023 = (0);
while(true){
if((i__8724__auto___51023 < len__8723__auto___51022)){
args51019.push((arguments[i__8724__auto___51023]));

var G__51024 = (i__8724__auto___51023 + (1));
i__8724__auto___51023 = G__51024;
continue;
} else {
}
break;
}

var G__51021 = args51019.length;
switch (G__51021) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51019.length)].join('')));

}
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2(msg,null);
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,msg,ex_data){
var message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failed because of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var ex_data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data,cljs.core.cst$kw$failing_SLASH_obj,obj);
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2(message,ex_data__$1);
});

untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,ex_data){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg,ex_data], 0));
});

untangled.ui.forms.fail_BANG_.cljs$lang$maxFixedArity = 3;

untangled.ui.forms.assert_or_fail = (function untangled$ui$forms$assert_or_fail(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51034 = arguments.length;
var i__8724__auto___51035 = (0);
while(true){
if((i__8724__auto___51035 < len__8723__auto___51034)){
args__8730__auto__.push((arguments[i__8724__auto___51035]));

var G__51036 = (i__8724__auto___51035 + (1));
i__8724__auto___51035 = G__51036;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic = (function (obj,pred,msg,p__51030){
var vec__51031 = p__51030;
var ex_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51031,(0),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(obj) : pred.call(null,obj)))){
return null;
} else {
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$3(obj,msg,ex_data);
}
});

untangled.ui.forms.assert_or_fail.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.assert_or_fail.cljs$lang$applyTo = (function (seq51026){
var G__51027 = cljs.core.first(seq51026);
var seq51026__$1 = cljs.core.next(seq51026);
var G__51028 = cljs.core.first(seq51026__$1);
var seq51026__$2 = cljs.core.next(seq51026__$1);
var G__51029 = cljs.core.first(seq51026__$2);
var seq51026__$3 = cljs.core.next(seq51026__$2);
return untangled.ui.forms.assert_or_fail.cljs$core$IFn$_invoke$arity$variadic(G__51027,G__51028,G__51029,seq51026__$3);
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
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.ui.forms.form_spec[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto__.call(null,this$));
} else {
var m__8221__auto____$1 = (untangled.ui.forms.form_spec["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IForm.form-spec",this$);
}
}
}
});

untangled.ui.forms.ui_ns = (function untangled$ui$forms$ui_ns(kw_name){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(cljs.core.cst$kw$untangled$ui$forms_SLASH__),kw_name);
});
/**
 * Query this in *all* of your form components, else form support will fail!
 * (often in subtle/obscure ways, WIP on how to better catch & report this)
 */
untangled.ui.forms.form_key = untangled.ui.forms.ui_ns("form");
/**
 * Query this in your top level form component.
 * Is okay to have multiple 'root' components on screen at once,
 * as om and react will optimize the rendering step.
 */
untangled.ui.forms.form_root_key = untangled.ui.forms.ui_ns("form-root");
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (assert_no_duplicate){
return (function (acc,field){
var spec_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.form_key,cljs.core.cst$kw$input_SLASH_type.cljs$core$IFn$_invoke$arity$1(field)))?cljs.core.cst$kw$form:cljs.core.cst$kw$elements);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_key,cljs.core.cst$kw$input_SLASH_name.cljs$core$IFn$_invoke$arity$1(field)], null),assert_no_duplicate((function (){var G__51038 = field;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,spec_key)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51038,cljs.core.cst$kw$input_SLASH_name,cljs.core.array_seq([cljs.core.cst$kw$input_SLASH_type], 0));
} else {
return G__51038;
}
})()));
});})(assert_no_duplicate))
,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.forms.form_spec(this$)),cljs.core.cst$kw$elements,cljs.core.vals);
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
var args__8730__auto__ = [];
var len__8723__auto___51052 = arguments.length;
var i__8724__auto___51053 = (0);
while(true){
if((i__8724__auto___51053 < len__8723__auto___51052)){
args__8730__auto__.push((arguments[i__8724__auto___51053]));

var G__51054 = (i__8724__auto___51053 + (1));
i__8724__auto___51053 = G__51054;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic = (function (field,form_class,cardinality,p__51046){
var map__51047 = p__51046;
var map__51047__$1 = ((((!((map__51047 == null)))?((((map__51047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51047):map__51047);
var isComponent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,cljs.core.cst$kw$isComponent);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$one,null,cljs.core.cst$kw$many,null], null), null),cardinality)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("subform-element requires a cardinality of :one or :many"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? #{:one :many} cardinality)")].join('')));
}

if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(((function (map__51047,map__51047__$1,isComponent){
return (function (p1__51039_SHARP_){
if(!((p1__51039_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__51039_SHARP_.om$next$Ident$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__51047,map__51047__$1,isComponent))
,((function (map__51047,map__51047__$1,isComponent){
return (function (p1__51040_SHARP_){
if(!((p1__51040_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__51040_SHARP_.untangled$ui$forms$IForm$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__51047,map__51047__$1,isComponent))
,((function (map__51047,map__51047__$1,isComponent){
return (function (p1__51041_SHARP_){
if(!((p1__51041_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__51041_SHARP_.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});})(map__51047,map__51047__$1,isComponent))
).call(null,form_class))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Subform element "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" MUST implement IForm, IQuery, and Ident.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("((every-pred (fn* [p1__51039#] (implements? om/Ident p1__51039#)) (fn* [p1__51040#] (implements? IForm p1__51040#)) (fn* [p1__51041#] (implements? om/IQuery p1__51041#))) form-class)")].join('')));
}

return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_name,field,cljs.core.cst$kw$input_SLASH_is_DASH_form_QMARK_,true,cljs.core.cst$kw$input_SLASH_is_DASH_component_QMARK_,isComponent,cljs.core.cst$kw$input_SLASH_cardinality,cardinality,cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_subform], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,form_class], null));
});

untangled.ui.forms.subform_element.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.subform_element.cljs$lang$applyTo = (function (seq51042){
var G__51043 = cljs.core.first(seq51042);
var seq51042__$1 = cljs.core.next(seq51042);
var G__51044 = cljs.core.first(seq51042__$1);
var seq51042__$2 = cljs.core.next(seq51042__$1);
var G__51045 = cljs.core.first(seq51042__$2);
var seq51042__$3 = cljs.core.next(seq51042__$2);
return untangled.ui.forms.subform_element.cljs$core$IFn$_invoke$arity$variadic(G__51043,G__51044,G__51045,seq51042__$3);
});

/**
 * Create a field that understands it points to a to-many list of subforms, only one of which
 *   can be interacted with at a time, but all of which will be affected by top-level form operations like commit and
 *   validate. Functions like `valid?` check the validity of the list of subforms when applied to such a
 *   field. Rendering such a field requires that you pass the desired value of `select-key` to select the subform.
 */
untangled.ui.forms.form_switcher_input = (function untangled$ui$forms$form_switcher_input(field,FormClass,select_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.forms.subform_element(field,FormClass,cljs.core.cst$kw$many),cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_switcher,cljs.core.array_seq([cljs.core.cst$kw$input_SLASH_select_DASH_key,select_key], 0));
});
/**
 * Declare a hidden identity field.
 * Required to read/write to/from other db tables,
 * and to make sure tempids and such follow along properly.
 */
untangled.ui.forms.id_field = (function untangled$ui$forms$id_field(name){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_SLASH_name,name,cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_identity], null);
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
var args__8730__auto__ = [];
var len__8723__auto___51061 = arguments.length;
var i__8724__auto___51062 = (0);
while(true){
if((i__8724__auto___51062 < len__8723__auto___51061)){
args__8730__auto__.push((arguments[i__8724__auto___51062]));

var G__51063 = (i__8724__auto___51062 + (1));
i__8724__auto___51062 = G__51063;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__51057){
var map__51058 = p__51057;
var map__51058__$1 = ((((!((map__51058 == null)))?((((map__51058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51058):map__51058);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,cljs.core.cst$kw$validator);
var validator_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,cljs.core.cst$kw$validator_DASH_args);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51058__$1,cljs.core.cst$kw$className,"");
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51058__$1,cljs.core.cst$kw$default_DASH_value,"");
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51058__$1,cljs.core.cst$kw$placeholder,"");
var validate_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51058__$1,cljs.core.cst$kw$validate_DASH_on_DASH_blur_QMARK_,true);
var G__51060 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$input_SLASH_name,name,cljs.core.cst$kw$input_SLASH_default_DASH_value,default_value,cljs.core.cst$kw$input_SLASH_placeholder,placeholder,cljs.core.cst$kw$input_SLASH_css_DASH_class,className,cljs.core.cst$kw$input_SLASH_validate_DASH_on_DASH_blur_QMARK_,validate_on_blur_QMARK_,cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_text], null);
var G__51060__$1 = (cljs.core.truth_(validator)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51060,cljs.core.cst$kw$input_SLASH_validator,validator):G__51060);
if(cljs.core.truth_(validator_args)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51060__$1,cljs.core.cst$kw$input_SLASH_validator_DASH_args,validator_args);
} else {
return G__51060__$1;
}
});

untangled.ui.forms.text_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.text_input.cljs$lang$applyTo = (function (seq51055){
var G__51056 = cljs.core.first(seq51055);
var seq51055__$1 = cljs.core.next(seq51055);
return untangled.ui.forms.text_input.cljs$core$IFn$_invoke$arity$variadic(G__51056,seq51055__$1);
});

/**
 * Declare an integer input on a form. See text-input for additional options.
 */
untangled.ui.forms.integer_input = (function untangled$ui$forms$integer_input(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51066 = arguments.length;
var i__8724__auto___51067 = (0);
while(true){
if((i__8724__auto___51067 < len__8723__auto___51066)){
args__8730__auto__.push((arguments[i__8724__auto___51067]));

var G__51068 = (i__8724__auto___51067 + (1));
i__8724__auto___51067 = G__51068;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.forms.text_input,name,options),cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_integer),cljs.core.cst$kw$input_SLASH_default_DASH_value,(function (v){
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
return (0);
}
}));
});

untangled.ui.forms.integer_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.integer_input.cljs$lang$applyTo = (function (seq51064){
var G__51065 = cljs.core.first(seq51064);
var seq51064__$1 = cljs.core.next(seq51064);
return untangled.ui.forms.integer_input.cljs$core$IFn$_invoke$arity$variadic(G__51065,seq51064__$1);
});

/**
 * Declare a text area on a form. See text-input for additional options.
 * 
 *   When rendering a text input, the params passed to the field render will be merged
 *   with the textarea HTML props.
 */
untangled.ui.forms.textarea_input = (function untangled$ui$forms$textarea_input(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51071 = arguments.length;
var i__8724__auto___51072 = (0);
while(true){
if((i__8724__auto___51072 < len__8723__auto___51071)){
args__8730__auto__.push((arguments[i__8724__auto___51072]));

var G__51073 = (i__8724__auto___51072 + (1));
i__8724__auto___51072 = G__51073;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(untangled.ui.forms.text_input,name,options),cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_textarea);
});

untangled.ui.forms.textarea_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.textarea_input.cljs$lang$applyTo = (function (seq51069){
var G__51070 = cljs.core.first(seq51069);
var seq51069__$1 = cljs.core.next(seq51069);
return untangled.ui.forms.textarea_input.cljs$core$IFn$_invoke$arity$variadic(G__51070,seq51069__$1);
});

/**
 * Declare a checkbox on a form
 */
untangled.ui.forms.checkbox_input = (function untangled$ui$forms$checkbox_input(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51079 = arguments.length;
var i__8724__auto___51080 = (0);
while(true){
if((i__8724__auto___51080 < len__8723__auto___51079)){
args__8730__auto__.push((arguments[i__8724__auto___51080]));

var G__51081 = (i__8724__auto___51080 + (1));
i__8724__auto___51080 = G__51081;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__51076){
var map__51077 = p__51076;
var map__51077__$1 = ((((!((map__51077 == null)))?((((map__51077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51077):map__51077);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51077__$1,cljs.core.cst$kw$className);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51077__$1,cljs.core.cst$kw$default_DASH_value,false);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_checkbox,cljs.core.cst$kw$input_SLASH_default_DASH_value,cljs.core.boolean$(default_value),cljs.core.cst$kw$input_SLASH_css_DASH_class,className,cljs.core.cst$kw$input_SLASH_name,name], null);
});

untangled.ui.forms.checkbox_input.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.checkbox_input.cljs$lang$applyTo = (function (seq51074){
var G__51075 = cljs.core.first(seq51074);
var seq51074__$1 = cljs.core.next(seq51074);
return untangled.ui.forms.checkbox_input.cljs$core$IFn$_invoke$arity$variadic(G__51075,seq51074__$1);
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
var args__8730__auto__ = [];
var len__8723__auto___51089 = arguments.length;
var i__8724__auto___51090 = (0);
while(true){
if((i__8724__auto___51090 < len__8723__auto___51089)){
args__8730__auto__.push((arguments[i__8724__auto___51090]));

var G__51091 = (i__8724__auto___51090 + (1));
i__8724__auto___51090 = G__51091;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options,p__51086){
var map__51087 = p__51086;
var map__51087__$1 = ((((!((map__51087 == null)))?((((map__51087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51087):map__51087);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51087__$1,cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$untangled$ui$forms_SLASH_none);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51087__$1,cljs.core.cst$kw$className,"");
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default_value,cljs.core.cst$kw$untangled$ui$forms_SLASH_none);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.some(((function (or__7502__auto__,map__51087,map__51087__$1,default_value,className){
return (function (p1__51082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(default_value,cljs.core.cst$kw$option_SLASH_key.cljs$core$IFn$_invoke$arity$1(p1__51082_SHARP_));
});})(or__7502__auto__,map__51087,map__51087__$1,default_value,className))
,options);
}
})())){
} else {
throw (new Error("Assert failed: (or (= default-value :untangled.ui.forms/none) (some (fn* [p1__51082#] (= default-value (:option/key p1__51082#))) options))"));
}

if((cljs.core.seq(options)) && (cljs.core.every_QMARK_(cljs.core.cst$kw$option_SLASH_key,options))){
} else {
throw (new Error("Assert failed: (and (seq options) (every? :option/key options))"));
}

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_dropdown,cljs.core.cst$kw$input_SLASH_default_DASH_value,default_value,cljs.core.cst$kw$input_SLASH_options,options,cljs.core.cst$kw$input_SLASH_css_DASH_class,className,cljs.core.cst$kw$input_SLASH_name,name], null);
});

untangled.ui.forms.dropdown_input.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.dropdown_input.cljs$lang$applyTo = (function (seq51083){
var G__51084 = cljs.core.first(seq51083);
var seq51083__$1 = cljs.core.next(seq51083);
var G__51085 = cljs.core.first(seq51083__$1);
var seq51083__$2 = cljs.core.next(seq51083__$1);
return untangled.ui.forms.dropdown_input.cljs$core$IFn$_invoke$arity$variadic(G__51084,G__51085,seq51083__$2);
});

/**
 * Create an option for use in a dropdown. The key is used as your app database value, and label as the label.
 */
untangled.ui.forms.option = (function untangled$ui$forms$option(key,label){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$option_SLASH_key,key,cljs.core.cst$kw$option_SLASH_label,label], null);
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
var args__8730__auto__ = [];
var len__8723__auto___51098 = arguments.length;
var i__8724__auto___51099 = (0);
while(true){
if((i__8724__auto___51099 < len__8723__auto___51098)){
args__8730__auto__.push((arguments[i__8724__auto___51099]));

var G__51100 = (i__8724__auto___51099 + (1));
i__8724__auto___51099 = G__51100;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic = (function (name,options,p__51095){
var map__51096 = p__51095;
var map__51096__$1 = ((((!((map__51096 == null)))?((((map__51096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51096):map__51096);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51096__$1,cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$untangled$ui$forms_SLASH_none);
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51096__$1,cljs.core.cst$kw$className,"");
if(cljs.core.set_QMARK_(options)){
} else {
throw (new Error("Assert failed: (set? options)"));
}

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$input_SLASH_name,name,cljs.core.cst$kw$input_SLASH_type,cljs.core.cst$kw$untangled$ui$forms_SLASH_radio,cljs.core.cst$kw$input_SLASH_default_DASH_value,default_value,cljs.core.cst$kw$input_SLASH_css_DASH_class,className,cljs.core.cst$kw$input_SLASH_options,options], null);
});

untangled.ui.forms.radio_input.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.radio_input.cljs$lang$applyTo = (function (seq51092){
var G__51093 = cljs.core.first(seq51092);
var seq51092__$1 = cljs.core.next(seq51092);
var G__51094 = cljs.core.first(seq51092__$1);
var seq51092__$2 = cljs.core.next(seq51092__$1);
return untangled.ui.forms.radio_input.cljs$core$IFn$_invoke$arity$variadic(G__51093,G__51094,seq51092__$2);
});

untangled.ui.forms.is_form_QMARK_ = (function untangled$ui$forms$is_form_QMARK_(_QMARK_form){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_form,untangled.ui.forms.form_key);
});
/**
 * Get the UI component that declared the given form.
 */
untangled.ui.forms.form_component = (function untangled$ui$forms$form_component(form){
return cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta((untangled.ui.forms.form_key.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.forms.form_key.cljs$core$IFn$_invoke$arity$1(form) : untangled.ui.forms.form_key.call(null,form))));
});
/**
 * Get the ident of this form's entity
 */
untangled.ui.forms.form_ident = (function untangled$ui$forms$form_ident(form){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$ident], null));
});
/**
 * Get the configuration for the given field in the form.
 */
untangled.ui.forms.field_config = (function untangled$ui$forms$field_config(form,name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$elements_SLASH_by_DASH_name,name], null));
});
/**
 * Get the configuration for the given field in the form.
 */
untangled.ui.forms.field_type = (function untangled$ui$forms$field_type(form,name){
return cljs.core.cst$kw$input_SLASH_type.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,name));
});
/**
 * Returns the current value of the placeholder, which may be a lambda or a string.
 */
untangled.ui.forms.placeholder = (function untangled$ui$forms$placeholder(form,field){
var map__51103 = untangled.ui.forms.field_config(form,field);
var map__51103__$1 = ((((!((map__51103 == null)))?((((map__51103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51103):map__51103);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51103__$1,cljs.core.cst$kw$input_SLASH_placeholder,"");
if(typeof placeholder === 'string'){
return placeholder;
} else {
return (placeholder.cljs$core$IFn$_invoke$arity$0 ? placeholder.cljs$core$IFn$_invoke$arity$0() : placeholder.call(null));
}
});
/**
 * Returns whether the element, or the field-key in the form, is a subform.
 */
untangled.ui.forms.is_subform_QMARK_ = (function untangled$ui$forms$is_subform_QMARK_(var_args){
var args51105 = [];
var len__8723__auto___51108 = arguments.length;
var i__8724__auto___51109 = (0);
while(true){
if((i__8724__auto___51109 < len__8723__auto___51108)){
args51105.push((arguments[i__8724__auto___51109]));

var G__51110 = (i__8724__auto___51109 + (1));
i__8724__auto___51109 = G__51110;
continue;
} else {
}
break;
}

var G__51107 = args51105.length;
switch (G__51107) {
case 1:
return untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51105.length)].join('')));

}
});

untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (element){
return cljs.core.cst$kw$input_SLASH_is_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(element);
});

untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field_key){
return untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,field_key));
});

untangled.ui.forms.is_subform_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * TODO: Maybe make it public & access it from untangled-client ?
 */
untangled.ui.forms.is_ui_query_fragment_QMARK_ = (function untangled$ui$forms$is_ui_query_fragment_QMARK_(kw){
if((kw instanceof cljs.core.Keyword)){
var G__51113 = kw;
var G__51113__$1 = (((G__51113 == null))?null:cljs.core.namespace(G__51113));
if((G__51113__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__51113__$1);
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
return untangled.ui.forms.is_ui_query_fragment_QMARK_(cljs.core.cst$kw$input_SLASH_name.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,field)));
});
/**
 * Gets the current value of a field in a form.
 */
untangled.ui.forms.current_value = (function untangled$ui$forms$current_value(form,field){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,field);
});
/**
 * Updates the current value of a field in a form (with a fn) and marks it as :unchecked.
 */
untangled.ui.forms.update_current_value = (function untangled$ui$forms$update_current_value(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51121 = arguments.length;
var i__8724__auto___51122 = (0);
while(true){
if((i__8724__auto___51122 < len__8723__auto___51121)){
args__8730__auto__.push((arguments[i__8724__auto___51122]));

var G__51123 = (i__8724__auto___51122 + (1));
i__8724__auto___51122 = G__51123;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,field,f,args){
var the_form = form;
var the_form__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,the_form,field,f,args);
var G__51118 = the_form__$1;
var G__51119 = field;
var G__51120 = cljs.core.cst$kw$unchecked;
return (untangled.ui.forms.set_validation.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.forms.set_validation.cljs$core$IFn$_invoke$arity$3(G__51118,G__51119,G__51120) : untangled.ui.forms.set_validation.call(null,G__51118,G__51119,G__51120));
});

untangled.ui.forms.update_current_value.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.update_current_value.cljs$lang$applyTo = (function (seq51114){
var G__51115 = cljs.core.first(seq51114);
var seq51114__$1 = cljs.core.next(seq51114);
var G__51116 = cljs.core.first(seq51114__$1);
var seq51114__$2 = cljs.core.next(seq51114__$1);
var G__51117 = cljs.core.first(seq51114__$2);
var seq51114__$3 = cljs.core.next(seq51114__$2);
return untangled.ui.forms.update_current_value.cljs$core$IFn$_invoke$arity$variadic(G__51115,G__51116,G__51117,seq51114__$3);
});

/**
 * Sets the current value of a field in a form, and marks it as :unchecked.
 */
untangled.ui.forms.set_current_value = (function untangled$ui$forms$set_current_value(form,field,value){
var G__51127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form,field,value);
var G__51128 = field;
var G__51129 = cljs.core.cst$kw$unchecked;
return (untangled.ui.forms.set_validation.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.forms.set_validation.cljs$core$IFn$_invoke$arity$3(G__51127,G__51128,G__51129) : untangled.ui.forms.set_validation.call(null,G__51127,G__51128,G__51129));
});
/**
 * Gets the css class for the form field
 */
untangled.ui.forms.css_class = (function untangled$ui$forms$css_class(form,field){
return cljs.core.cst$kw$input_SLASH_css_DASH_class.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,field));
});
/**
 * Get all of the field names that are defined on the form.
 */
untangled.ui.forms.element_names = (function untangled$ui$forms$element_names(form){
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$elements_SLASH_by_DASH_name], null)));
});
/**
 * Get the unmodified copy of the form state from when it was first initialized.
 */
untangled.ui.forms.get_original_data = (function untangled$ui$forms$get_original_data(var_args){
var args51130 = [];
var len__8723__auto___51133 = arguments.length;
var i__8724__auto___51134 = (0);
while(true){
if((i__8724__auto___51134 < len__8723__auto___51133)){
args51130.push((arguments[i__8724__auto___51134]));

var G__51135 = (i__8724__auto___51134 + (1));
i__8724__auto___51134 = G__51135;
continue;
} else {
}
break;
}

var G__51132 = args51130.length;
switch (G__51132) {
case 1:
return untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51130.length)].join('')));

}
});

untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$origin], null));
});

untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1(form),field);
});

untangled.ui.forms.get_original_data.cljs$lang$maxFixedArity = 2;

untangled.ui.forms._QMARK_normalize = (function untangled$ui$forms$_QMARK_normalize(p__51137,x){
var map__51141 = p__51137;
var map__51141__$1 = ((((!((map__51141 == null)))?((((map__51141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51141):map__51141);
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51141__$1,cljs.core.cst$kw$input_SLASH_cardinality);
if(cljs.core.not((function (){var or__7502__auto__ = untangled.ui.forms.is_form_QMARK_(x);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (cljs.core.coll_QMARK_(x)) && (cljs.core.seq(x)) && (cljs.core.every_QMARK_(untangled.ui.forms.is_form_QMARK_,x));
}
})())){
return x;
} else {
var G__51143 = (((cardinality instanceof cljs.core.Keyword))?cardinality.fqn:null);
switch (G__51143) {
case "one":
return untangled.ui.forms.form_ident(x);

break;
case "many":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.form_ident,x);

break;
default:
return x;

}
}
});
untangled.ui.forms.dirty_field_QMARK_ = (function untangled$ui$forms$dirty_field_QMARK_(form,field){
var cfg = untangled.ui.forms.field_config(form,field);
var curr = untangled.ui.forms._QMARK_normalize(cfg,untangled.ui.forms.current_value(form,field));
return (om.next.tempid_QMARK_(curr)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(curr,untangled.ui.forms._QMARK_normalize(cfg,untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2(form,field))));
});
/**
 * Get all of the names of the validatable fields that are defined on the (initialized) form.
 */
untangled.ui.forms.validatable_fields = (function untangled$ui$forms$validatable_fields(form){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51145_SHARP_){
return cljs.core.not(untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$2(form,p1__51145_SHARP_));
}),untangled.ui.forms.element_names(form));
});
/**
 * Commits the state of the form to the entity, making it the new original data.
 */
untangled.ui.forms.commit_state = (function untangled$ui$forms$commit_state(form){
return cljs.core.assoc_in(form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$origin], null),cljs.core.select_keys(form,cljs.core.keys(untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1(form))));
});
/**
 * Resets the form back to the original state, ie when it was first created/initialized
 */
untangled.ui.forms.reset_entity = (function untangled$ui$forms$reset_entity(form){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$1(form)], 0));
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
var args51147 = [];
var len__8723__auto___51172 = arguments.length;
var i__8724__auto___51173 = (0);
while(true){
if((i__8724__auto___51173 < len__8723__auto___51172)){
args51147.push((arguments[i__8724__auto___51173]));

var G__51174 = (i__8724__auto___51173 + (1));
i__8724__auto___51173 = G__51174;
continue;
} else {
}
break;
}

var G__51149 = args51147.length;
switch (G__51149) {
case 1:
return untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51147.length)].join('')));

}
});

untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (form_class){
return untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2(form_class,cljs.core.PersistentVector.EMPTY);
});

untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (form_class,current_path){
var ast = om.next.query__GT_ast(om.next.get_query(form_class));
var elements = cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.get_form_spec(form_class));
var subform_fields = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (ast,elements){
return (function (p1__51146_SHARP_){
if(cljs.core.truth_(untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__51146_SHARP_))){
return cljs.core.cst$kw$input_SLASH_name.cljs$core$IFn$_invoke$arity$1(p1__51146_SHARP_);
} else {
return null;
}
});})(ast,elements))
,elements));
var get_class = ((function (ast,elements,subform_fields){
return (function (ast_node){
var subquery = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(ast_node);
if((cljs.core.int_QMARK_(subquery)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,subquery))){
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2("Forms do not support recursive-query-based subforms!",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$subquery,subquery,cljs.core.cst$kw$ast_DASH_node,ast_node], null));
} else {
return cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(ast_node);
}
});})(ast,elements,subform_fields))
;
var is_form_node_QMARK_ = ((function (ast,elements,subform_fields,get_class){
return (function (ast_node){
var form_class__$1 = get_class(ast_node);
var prop = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast_node);
var join_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast_node));
var union_QMARK_ = (join_QMARK_) && (cljs.core.map_QMARK_(cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(ast_node)));
var wants_to_be_QMARK_ = cljs.core.contains_QMARK_(subform_fields,prop);
if((union_QMARK_) && (wants_to_be_QMARK_)){
untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2("Subforms cannot be on union queries. You will have to manually group your subforms if you use unions.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ast_DASH_node,ast_node], null));
} else {
}

if((wants_to_be_QMARK_) && (!((function (){var and__7490__auto__ = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$Ident$)))?true:false):false);
if(and__7490__auto__){
var and__7490__auto____$1 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.untangled$ui$forms$IForm$)))?true:false):false);
if(and__7490__auto____$1){
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
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})()))){
untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Declared subform for property "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not implement IForm, IQuery, and Ident.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ast_DASH_node,ast_node], null));
} else {
}

var and__7490__auto__ = form_class__$1;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = wants_to_be_QMARK_;
if(and__7490__auto____$1){
var and__7490__auto____$2 = join_QMARK_;
if(and__7490__auto____$2){
var and__7490__auto____$3 = !(union_QMARK_);
if(and__7490__auto____$3){
var and__7490__auto____$4 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$IQuery$)))?true:false):false);
if(and__7490__auto____$4){
var and__7490__auto____$5 = ((!((form_class__$1 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form_class__$1.om$next$Ident$)))?true:false):false);
if(and__7490__auto____$5){
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
return and__7490__auto____$5;
}
} else {
return and__7490__auto____$4;
}
} else {
return and__7490__auto____$3;
}
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
});})(ast,elements,subform_fields,get_class))
;
var sub_forms = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (ast,elements,subform_fields,get_class,is_form_node_QMARK_){
return (function (ast_node){
if(cljs.core.truth_(is_form_node_QMARK_(ast_node))){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast_node));
var form_class__$1 = get_class(ast_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,form_class__$1], null);
} else {
return null;
}
});})(ast,elements,subform_fields,get_class,is_form_node_QMARK_))
,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ast,elements,subform_fields,get_class,is_form_node_QMARK_,sub_forms){
return (function (collected_so_far,p__51168){
var vec__51169 = p__51168;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51169,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51169,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(collected_so_far,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,component], null)),untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$2(component,path));
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
var k = cljs.core.first(path);
var remainder = cljs.core.rest(path);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,k);
var to_many_QMARK_ = (cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(om.util.ident_QMARK_,v));
var ident_QMARK_ = (!(to_many_QMARK_)) && (om.util.ident_QMARK_(v));
var many_idents = ((!(to_many_QMARK_))?cljs.core.PersistentVector.EMPTY:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (path,obj,k,remainder,v,to_many_QMARK_,ident_QMARK_){
return (function (idx,_){
var G__51179 = app_state;
var G__51180 = v;
var G__51181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remainder,idx);
return (untangled.ui.forms.to_idents.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.forms.to_idents.cljs$core$IFn$_invoke$arity$3(G__51179,G__51180,G__51181) : untangled.ui.forms.to_idents.call(null,G__51179,G__51180,G__51181));
});})(path,obj,k,remainder,v,to_many_QMARK_,ident_QMARK_))
,v)));
var result = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(many_idents,((ident_QMARK_)?v:null))));
if((ident_QMARK_) && (cljs.core.seq(remainder))){
var G__51182 = remainder;
var G__51183 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,v);
path = G__51182;
obj = G__51183;
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
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,form_ident);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,((function (form){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ident,form_ident,cljs.core.cst$kw$class,root_form_class,cljs.core.cst$kw$form,form], null)], null);
});})(form))
,null,null)),(new cljs.core.LazySeq(null,((function (form){
return (function (){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(((function (form){
return (function (p__51194){
var vec__51195 = p__51194;
var query_key_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51195,(0),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51195,(1),null);
var iter__8364__auto__ = ((function (vec__51195,query_key_path,class$,form){
return (function untangled$ui$forms$get_forms_$_iter__51198(s__51199){
return (new cljs.core.LazySeq(null,((function (vec__51195,query_key_path,class$,form){
return (function (){
var s__51199__$1 = s__51199;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51199__$1);
if(temp__6753__auto__){
var s__51199__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51199__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51199__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51201 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51200 = (0);
while(true){
if((i__51200 < size__8363__auto__)){
var ident = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51200);
cljs.core.chunk_append(b__51201,(function (){var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,ident);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ident,ident,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$form,value], null);
})());

var G__51204 = (i__51200 + (1));
i__51200 = G__51204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51201),untangled$ui$forms$get_forms_$_iter__51198(cljs.core.chunk_rest(s__51199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51201),null);
}
} else {
var ident = cljs.core.first(s__51199__$2);
return cljs.core.cons((function (){var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,ident);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ident,ident,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$form,value], null);
})(),untangled$ui$forms$get_forms_$_iter__51198(cljs.core.rest(s__51199__$2)));
}
} else {
return null;
}
break;
}
});})(vec__51195,query_key_path,class$,form))
,null,null));
});})(vec__51195,query_key_path,class$,form))
;
return iter__8364__auto__(untangled.ui.forms.to_idents(app_state,form,query_key_path));
});})(form))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ident)),untangled.ui.forms.subforms_STAR_.cljs$core$IFn$_invoke$arity$1(root_form_class));
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
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51205_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51205_SHARP_,cljs.core.cst$kw$form,(form_update_fn.cljs$core$IFn$_invoke$arity$1 ? form_update_fn.cljs$core$IFn$_invoke$arity$1(p1__51205_SHARP_) : form_update_fn.call(null,p1__51205_SHARP_)));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (s,p__51209){
var map__51210 = p__51209;
var map__51210__$1 = ((((!((map__51210 == null)))?((((map__51210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51210):map__51210);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,cljs.core.cst$kw$ident);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,cljs.core.cst$kw$form);
return cljs.core.assoc_in(s,ident,form__$1);
})),app_state,untangled.ui.forms.get_forms(app_state,untangled.ui.forms.form_component(form),untangled.ui.forms.form_ident(form)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(form_fn,starting_value,untangled.ui.forms.get_forms(app_state,untangled.ui.forms.form_component(form),untangled.ui.forms.form_ident(form)));
});
/**
 * Returns a sequence of all the forms under a given `form`
 */
untangled.ui.forms.all_forms = (function untangled$ui$forms$all_forms(form){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.is_subform_QMARK_,form)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__51212_SHARP_){
var curr = untangled.ui.forms.current_value(form,p1__51212_SHARP_);
var G__51214 = curr;
if(cljs.core.truth_((function (){var and__7490__auto__ = curr;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$one,cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,p1__51212_SHARP_)));
} else {
return and__7490__auto__;
}
})())){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__51214],null));
} else {
return G__51214;
}
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.all_forms)),untangled.ui.forms.element_names(form)));
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
var args51215 = [];
var len__8723__auto___51218 = arguments.length;
var i__8724__auto___51219 = (0);
while(true){
if((i__8724__auto___51219 < len__8723__auto___51218)){
args51215.push((arguments[i__8724__auto___51219]));

var G__51220 = (i__8724__auto___51219 + (1));
i__8724__auto___51219 = G__51220;
continue;
} else {
}
break;
}

var G__51217 = args51215.length;
switch (G__51217) {
case 3:
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51215.length)].join('')));

}
});

untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3 = (function (form,init,F){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(F,init,untangled.ui.forms.all_forms(form));
});

untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$4 = (function (form,xf,init,F){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xf,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(F),init,untangled.ui.forms.all_forms(form));
});

untangled.ui.forms.form_reduce.cljs$lang$maxFixedArity = 4;

/**
 * INTERNAL METHOD. Get the default state configuration for the given field definitions.
 * MUST ONLY BE PASSED PURE FIELDS. Not subforms.
 */
untangled.ui.forms.default_state = (function untangled$ui$forms$default_state(fields){
var parse_field = (function (f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$untangled$ui$forms_SLASH_identity,cljs.core.cst$kw$input_SLASH_type.cljs$core$IFn$_invoke$arity$1(f)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,om.next.tempid.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$valid,cljs.core.cst$kw$valid], null):new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$input_SLASH_default_DASH_value.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$valid,cljs.core.cst$kw$unchecked], null))], 0));
});
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(parse_field),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(((function (parse_field){
return (function (acc,p__51225){
var map__51226 = p__51225;
var map__51226__$1 = ((((!((map__51226 == null)))?((((map__51226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51226):map__51226);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,cljs.core.cst$kw$value);
var valid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,cljs.core.cst$kw$valid);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51226__$1,cljs.core.cst$kw$input_SLASH_name);
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,name], null),value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$validation,name], null),valid);
});})(parse_field))
),cljs.core.PersistentArrayMap.EMPTY,fields);
});
/**
 * INTERNAL. Get the initialized state of the form based on default state of the fields and the current entity state
 */
untangled.ui.forms.initialized_state = (function untangled$ui$forms$initialized_state(empty_form_state,field_keys_to_initialize,entity){
untangled.ui.forms.assert_or_fail(field_keys_to_initialize,cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.keyword_QMARK_)),"Empty or invalid field keys");

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,k);
if(cljs.core.truth_(temp__6751__auto__)){
var v = temp__6751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,v);
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
var map__51237 = untangled.ui.forms.get_form_spec(form_class);
var map__51237__$1 = ((((!((map__51237 == null)))?((((map__51237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51237):map__51237);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,cljs.core.cst$kw$elements);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,cljs.core.cst$kw$form);
var element_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input_SLASH_name,elements);
var elements_by_name = cljs.core.zipmap(element_keys,elements);
var map__51238 = untangled.ui.forms.default_state(elements);
var map__51238__$1 = ((((!((map__51238 == null)))?((((map__51238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51238):map__51238);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,cljs.core.cst$kw$state);
var validation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,cljs.core.cst$kw$validation);
var entity_state_of_interest = cljs.core.select_keys(entity_state,element_keys);
var init_state = untangled.ui.forms.initialized_state(state,element_keys,entity_state_of_interest);
var final_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entity_state,init_state], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(final_state,untangled.ui.forms.form_key,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$elements_SLASH_by_DASH_name,elements_by_name,cljs.core.cst$kw$ident,om.next.ident(form_class,final_state),cljs.core.cst$kw$origin,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__51237,map__51237__$1,elements,form,element_keys,elements_by_name,map__51238,map__51238__$1,state,validation,entity_state_of_interest,init_state,final_state){
return (function (p__51241){
var vec__51242 = p__51241;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51242,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_((function (){var and__7490__auto__ = untangled.ui.forms.is_subform_QMARK_.cljs$core$IFn$_invoke$arity$1((elements_by_name.cljs$core$IFn$_invoke$arity$1 ? elements_by_name.cljs$core$IFn$_invoke$arity$1(k) : elements_by_name.call(null,k)));
if(cljs.core.truth_(and__7490__auto__)){
return !((om.util.ident_QMARK_(v)) || (cljs.core.every_QMARK_(om.util.ident_QMARK_,v)));
} else {
return and__7490__auto__;
}
})())?(function (){var G__51245 = (((cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1((elements_by_name.cljs$core$IFn$_invoke$arity$1 ? elements_by_name.cljs$core$IFn$_invoke$arity$1(k) : elements_by_name.call(null,k))) instanceof cljs.core.Keyword))?cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1((elements_by_name.cljs$core$IFn$_invoke$arity$1 ? elements_by_name.cljs$core$IFn$_invoke$arity$1(k) : elements_by_name.call(null,k))).fqn:null);
switch (G__51245) {
case "many":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.form_ident,v);

break;
default:
return untangled.ui.forms.form_ident(v);

}
})():v)], null);
});})(map__51237,map__51237__$1,elements,form,element_keys,elements_by_name,map__51238,map__51238__$1,state,validation,entity_state_of_interest,init_state,final_state))
),init_state),cljs.core.cst$kw$subforms,(function (){var or__7502__auto__ = cljs.core.filterv(cljs.core.cst$kw$input_SLASH_is_DASH_form_QMARK_,elements);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$validation,validation], null)], 0)),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,form_class], null)));
});
/**
 * Returns true if the given form is already initialized with form setup data
 */
untangled.ui.forms.initialized_QMARK_ = (function untangled$ui$forms$initialized_QMARK_(form){
return cljs.core.map_QMARK_((untangled.ui.forms.form_key.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.forms.form_key.cljs$core$IFn$_invoke$arity$1(form) : untangled.ui.forms.form_key.call(null,form)));
});
untangled.ui.forms.init_one = (function untangled$ui$forms$init_one(state,base_form,subform_spec,visited){
var k = cljs.core.cst$kw$input_SLASH_name.cljs$core$IFn$_invoke$arity$1(subform_spec);
var subform_class = (function (){var G__51248 = subform_spec;
var G__51248__$1 = (((G__51248 == null))?null:cljs.core.meta(G__51248));
if((G__51248__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(G__51248__$1);
}
})();
var subform_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_form,k);
var visited__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(visited,subform_ident,cljs.core.inc);
if(((subform_ident == null)) || (om.util.ident_QMARK_(subform_ident))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Initialize-one form did not find a to-one relation in the database"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? subform-ident) (util/ident? subform-ident))")].join('')));
}

if(((cljs.core.second(subform_ident) == null)) || ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(visited__$1,subform_ident) > (1)))){
return state;
} else {
return (untangled.ui.forms.init_form_STAR_.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.forms.init_form_STAR_.cljs$core$IFn$_invoke$arity$4(state,subform_class,subform_ident,visited__$1) : untangled.ui.forms.init_form_STAR_.call(null,state,subform_class,subform_ident,visited__$1));
}
});
untangled.ui.forms.init_many = (function untangled$ui$forms$init_many(state,base_form,subform_spec,visited){
var k = cljs.core.cst$kw$input_SLASH_name.cljs$core$IFn$_invoke$arity$1(subform_spec);
var subform_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_form,k);
var subform_class = (function (){var G__51250 = subform_spec;
var G__51250__$1 = (((G__51250 == null))?null:cljs.core.meta(G__51250));
if((G__51250__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(G__51250__$1);
}
})();
var visited__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (k,subform_idents,subform_class){
return (function (v,ident){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(v,ident,cljs.core.inc);
});})(k,subform_idents,subform_class))
,visited,subform_idents);
if(((subform_idents == null)) || (cljs.core.every_QMARK_(om.util.ident_QMARK_,subform_idents))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Initialize-many form did not find a to-many relation in the database"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? subform-idents) (every? util/ident? subform-idents))")].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (k,subform_idents,subform_class,visited__$1){
return (function (st,f_ident){
if(((cljs.core.second(f_ident) == null)) || ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(visited__$1,f_ident) > (1)))){
return st;
} else {
return (untangled.ui.forms.init_form_STAR_.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.forms.init_form_STAR_.cljs$core$IFn$_invoke$arity$4(st,subform_class,f_ident,visited__$1) : untangled.ui.forms.init_form_STAR_.call(null,st,subform_class,f_ident,visited__$1));
}
});})(k,subform_idents,subform_class,visited__$1))
,state,subform_idents);
});
untangled.ui.forms.init_form_STAR_ = (function untangled$ui$forms$init_form_STAR_(app_state,form_class,form_ident,forms_visited){
var temp__6751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,form_ident);
if(cljs.core.truth_(temp__6751__auto__)){
var form = temp__6751__auto__;
var base_form = (function (){var G__51252 = form;
if(cljs.core.not(untangled.ui.forms.initialized_QMARK_(form))){
return untangled.ui.forms.build_form(form_class,G__51252);
} else {
return G__51252;
}
})();
var base_app_state = cljs.core.assoc_in(app_state,form_ident,base_form);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.is_subform_QMARK_),((function (base_form,base_app_state,form,temp__6751__auto__){
return (function (state,subform_spec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$many,cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(subform_spec))){
return untangled.ui.forms.init_many(state,base_form,subform_spec,forms_visited);
} else {
return untangled.ui.forms.init_one(state,base_form,subform_spec,forms_visited);
}
});})(base_form,base_app_state,form,temp__6751__auto__))
,base_app_state,cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.get_form_spec(form_class)));
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
return untangled.ui.forms.init_form_STAR_(app_state,form_class,form_ident,cljs.core.PersistentArrayMap.EMPTY);
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_noop,(function (env51253,_,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var env = env51253;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env){
return (function (){
return null;
});})(env))
], null);
})(),(function (){var env = env51253;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$input_SLASH_type,untangled.ui.forms.form_key,cljs.core.cst$kw$input_SLASH_name,cljs.core.cst$kw$on_DASH_form_DASH_change,cljs.core.cst$kw$on_DASH_form_DASH_change_SLASH_mutation_DASH_symbol,mut_sym], null);
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edit,null,cljs.core.cst$kw$blur,null], null), null),kind)){
} else {
throw (new Error("Assert failed: (contains? #{:edit :blur} kind)"));
}

var temp__6753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$on_DASH_form_DASH_change,cljs.core.cst$kw$on_DASH_form_DASH_change_SLASH_mutation_DASH_symbol], null));
if(cljs.core.truth_(temp__6753__auto__)){
var mutation_symbol = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8436__auto__ = mutation_symbol;
return cljs.core._conj((function (){var x__8436__auto____$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,untangled.ui.forms.form_ident(form),cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$field,field_name], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
})()], null);
} else {
return null;
}
});
/**
 * Returns the current validity from a form's props for the given field. One of :valid, :invalid, or :unchecked
 */
untangled.ui.forms.current_validity = (function untangled$ui$forms$current_validity(form,field){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$validation,field], null));
});
untangled.ui.forms.reduced_if = (function untangled$ui$forms$reduced_if(p,x){
var G__51255 = x;
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)))){
return cljs.core.reduced(G__51255);
} else {
return G__51255;
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
var args51256 = [];
var len__8723__auto___51259 = arguments.length;
var i__8724__auto___51260 = (0);
while(true){
if((i__8724__auto___51260 < len__8723__auto___51259)){
args51256.push((arguments[i__8724__auto___51260]));

var G__51261 = (i__8724__auto___51260 + (1));
i__8724__auto___51260 = G__51261;
continue;
} else {
}
break;
}

var G__51258 = args51256.length;
switch (G__51258) {
case 1:
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51256.length)].join('')));

}
});

untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (root_form){
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3(root_form,false,(function (inv_QMARK_,form){
return untangled.ui.forms.reduced_if(cljs.core.true_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,field){
return untangled.ui.forms.reduced_if(cljs.core.true_QMARK_,untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,field));
}),inv_QMARK_,untangled.ui.forms.validatable_fields(form)));
}));
});

untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$invalid,untangled.ui.forms.current_validity(form,field));
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
var args51263 = [];
var len__8723__auto___51266 = arguments.length;
var i__8724__auto___51267 = (0);
while(true){
if((i__8724__auto___51267 < len__8723__auto___51266)){
args51263.push((arguments[i__8724__auto___51267]));

var G__51268 = (i__8724__auto___51267 + (1));
i__8724__auto___51267 = G__51268;
continue;
} else {
}
break;
}

var G__51265 = args51263.length;
switch (G__51265) {
case 1:
return untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51263.length)].join('')));

}
});

untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (root_form){
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3(root_form,true,(function (vld_QMARK_,form){
return untangled.ui.forms.reduced_if(cljs.core.false_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,field){
return untangled.ui.forms.reduced_if(cljs.core.false_QMARK_,untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,field));
}),vld_QMARK_,untangled.ui.forms.validatable_fields(form)));
}));
});

untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form,field){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$valid,untangled.ui.forms.current_validity(form,field));
});

untangled.ui.forms.valid_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Returns the validator symbol from the form field.
 * 
 *   `form` The form props
 *   `field` The field name
 */
untangled.ui.forms.validator = (function untangled$ui$forms$validator(form,field){
return cljs.core.cst$kw$input_SLASH_validator.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,field));
});
/**
 * Returns the validator args from the form field
 * 
 *   `form` The form props
 *   `field` The field name
 */
untangled.ui.forms.validator_args = (function untangled$ui$forms$validator_args(form,field){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(untangled.ui.forms.field_config(form,field),cljs.core.cst$kw$input_SLASH_validator_DASH_args,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$untangled$ui$forms_SLASH_this_DASH_form,form);
});
untangled.ui.forms.set_validation = (function untangled$ui$forms$set_validation(form,field,value){
return cljs.core.assoc_in(form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_key,cljs.core.cst$kw$validation,field], null),value);
});
if(typeof untangled.ui.forms.form_field_valid_QMARK_ !== 'undefined'){
} else {
/**
 * Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves.
 */
untangled.ui.forms.form_field_valid_QMARK_ = (function (){var method_table__8533__auto__ = (function (){var G__51270 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51270) : cljs.core.atom.call(null,G__51270));
})();
var prefer_table__8534__auto__ = (function (){var G__51271 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51271) : cljs.core.atom.call(null,G__51271));
})();
var method_cache__8535__auto__ = (function (){var G__51272 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51272) : cljs.core.atom.call(null,G__51272));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__51273 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51273) : cljs.core.atom.call(null,G__51273));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("untangled.ui.forms","form-field-valid?"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (symbol,value,args){
return symbol;
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
untangled.ui.forms.form_field_valid_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_in_DASH_range_QMARK_,(function (_,value,p__51274){
var map__51275 = p__51274;
var map__51275__$1 = ((((!((map__51275 == null)))?((((map__51275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51275):map__51275);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51275__$1,cljs.core.cst$kw$max);
var value__$1 = (value | (0));
return ((min <= value__$1)) && ((value__$1 <= max));
}));
/**
 * Given a form and a field, returns a new form with that field validated. Does NOT recurse into subforms.
 */
untangled.ui.forms.validate_field_STAR_ = (function untangled$ui$forms$validate_field_STAR_(form,field){
return untangled.ui.forms.set_validation(form,field,(function (){var temp__6751__auto__ = untangled.ui.forms.validator(form,field);
if(cljs.core.truth_(temp__6751__auto__)){
var validator = temp__6751__auto__;
var validator_args = untangled.ui.forms.validator_args(form,field);
var valid_QMARK_ = (function (){var G__51280 = validator;
var G__51281 = untangled.ui.forms.current_value(form,field);
var G__51282 = validator_args;
return (untangled.ui.forms.form_field_valid_QMARK_.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.forms.form_field_valid_QMARK_.cljs$core$IFn$_invoke$arity$3(G__51280,G__51281,G__51282) : untangled.ui.forms.form_field_valid_QMARK_.call(null,G__51280,G__51281,G__51282));
})();
if(cljs.core.truth_(valid_QMARK_)){
return cljs.core.cst$kw$valid;
} else {
return cljs.core.cst$kw$invalid;
}
} else {
return cljs.core.cst$kw$valid;
}
})());
});
/**
 * Runs validation on the defined fields and returns a new form with them properly marked.
 */
untangled.ui.forms.validate_fields = (function untangled$ui$forms$validate_fields(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51291 = arguments.length;
var i__8724__auto___51292 = (0);
while(true){
if((i__8724__auto___51292 < len__8723__auto___51291)){
args__8730__auto__.push((arguments[i__8724__auto___51292]));

var G__51293 = (i__8724__auto___51292 + (1));
i__8724__auto___51292 = G__51293;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__51285){
var vec__51286 = p__51285;
var map__51289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51286,(0),null);
var map__51289__$1 = ((((!((map__51289 == null)))?((((map__51289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51289):map__51289);
var skip_unchanged_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289__$1,cljs.core.cst$kw$skip_DASH_unchanged_QMARK_);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(skip_unchanged_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.dirty_field_QMARK_,form):cljs.core.identity)),untangled.ui.forms.validate_field_STAR_,form,untangled.ui.forms.validatable_fields(form));
});

untangled.ui.forms.validate_fields.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.validate_fields.cljs$lang$applyTo = (function (seq51283){
var G__51284 = cljs.core.first(seq51283);
var seq51283__$1 = cljs.core.next(seq51283);
return untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic(G__51284,seq51283__$1);
});

/**
 * Checks (recursively on this form and subforms) if the values on the given form would be
 *   considered valid if full validation were to be run on the form. Returns true/false.
 */
untangled.ui.forms.would_be_valid_QMARK_ = (function untangled$ui$forms$would_be_valid_QMARK_(form){
var non_recursive_valid_QMARK_ = (function untangled$ui$forms$would_be_valid_QMARK__$_non_recursive_valid_QMARK_(form__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (still_valid_QMARK_,field){
var f = untangled.ui.forms.validate_field_STAR_(form__$1,field);
var field_valid_QMARK_ = untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(f,field);
return untangled.ui.forms.reduced_if(cljs.core.false_QMARK_,(function (){var and__7490__auto__ = still_valid_QMARK_;
if(cljs.core.truth_(and__7490__auto__)){
return field_valid_QMARK_;
} else {
return and__7490__auto__;
}
})());
}),true,untangled.ui.forms.validatable_fields(form__$1));
});
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3(form,true,(function (result,form__$1){
var and__7490__auto__ = result;
if(cljs.core.truth_(and__7490__auto__)){
return non_recursive_valid_QMARK_(form__$1);
} else {
return and__7490__auto__;
}
}));
});
/**
 * Checks if the top-level form, or any of the subforms, are dirty. NOTE: Forms remain dirty as long as they have tempids.
 */
untangled.ui.forms.dirty_QMARK_ = (function untangled$ui$forms$dirty_QMARK_(form){
var dirty_form_QMARK_ = (function untangled$ui$forms$dirty_QMARK__$_dirty_form_QMARK_(form__$1){
return cljs.core.boolean$(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.dirty_field_QMARK_,form__$1),untangled.ui.forms.validatable_fields(form__$1)));
});
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3(form,false,(function (_,form__$1){
return untangled.ui.forms.reduced_if(cljs.core.true_QMARK_,dirty_form_QMARK_(form__$1));
}));
});
/**
 * Run validation on an entire form (by ident) with subforms. Returns an updated app-state.
 */
untangled.ui.forms.validate_forms = (function untangled$ui$forms$validate_forms(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51302 = arguments.length;
var i__8724__auto___51303 = (0);
while(true){
if((i__8724__auto___51303 < len__8723__auto___51302)){
args__8730__auto__.push((arguments[i__8724__auto___51303]));

var G__51304 = (i__8724__auto___51303 + (1));
i__8724__auto___51303 = G__51304;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,form_id,p__51298){
var vec__51299 = p__51298;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51299,(0),null);
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,form_id);
var form_class = untangled.ui.forms.form_component(form);
if(cljs.core.truth_(form_class)){
return untangled.ui.forms.update_forms(app_state,form,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (form,form_class,vec__51299,opts){
return (function (p1__51294_SHARP_){
return untangled.ui.forms.validate_fields.cljs$core$IFn$_invoke$arity$variadic(p1__51294_SHARP_,cljs.core.array_seq([opts], 0));
});})(form,form_class,vec__51299,opts))
,cljs.core.cst$kw$form));
} else {
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$1("Unable to validate form. No component associated with form. Did you remember to use build-form?");
}
});

untangled.ui.forms.validate_forms.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.validate_forms.cljs$lang$applyTo = (function (seq51295){
var G__51296 = cljs.core.first(seq51295);
var seq51295__$1 = cljs.core.next(seq51295);
var G__51297 = cljs.core.first(seq51295__$1);
var seq51295__$2 = cljs.core.next(seq51295__$1);
return untangled.ui.forms.validate_forms.cljs$core$IFn$_invoke$arity$variadic(G__51296,G__51297,seq51295__$2);
});

untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_field,(function (env51305,_,p__51306){
var map__51307 = p__51306;
var map__51307__$1 = ((((!((map__51307 == null)))?((((map__51307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51307):map__51307);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51307__$1,cljs.core.cst$kw$form_DASH_id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51307__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51309 = env51305;
var map__51309__$1 = ((((!((map__51309 == null)))?((((map__51309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51309):map__51309);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51309__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51309,map__51309__$1,state,map__51307,map__51307__$1,form_id,field){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,form_id,untangled.ui.forms.validate_field_STAR_,cljs.core.array_seq([field], 0));
});})(map__51309,map__51309__$1,state,map__51307,map__51307__$1,form_id,field))
], null);
})(),(function (){var env = env51305;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_form,(function (env51311,_,p__51312){
var map__51313 = p__51312;
var map__51313__$1 = ((((!((map__51313 == null)))?((((map__51313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51313):map__51313);
var opts = map__51313__$1;
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51313__$1,cljs.core.cst$kw$form_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51315 = env51311;
var map__51315__$1 = ((((!((map__51315 == null)))?((((map__51315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51315):map__51315);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51315,map__51315__$1,state,map__51313,map__51313__$1,opts,form_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.forms.validate_forms,form_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$form_DASH_id));
});})(map__51315,map__51315__$1,state,map__51313,map__51313__$1,opts,form_id))
], null);
})(),(function (){var env = env51311;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
/**
 * Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
 * but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
 * the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
 * own transaction (so your mutation can see the validated form), you may use the underlying
 * `(f/validate-form {:form-id fident})` mutation in your own call to `transact!`.
 */
untangled.ui.forms.validate_entire_form_BANG_ = (function untangled$ui$forms$validate_entire_form_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51323 = arguments.length;
var i__8724__auto___51324 = (0);
while(true){
if((i__8724__auto___51324 < len__8723__auto___51323)){
args__8730__auto__.push((arguments[i__8724__auto___51324]));

var G__51325 = (i__8724__auto___51324 + (1));
i__8724__auto___51324 = G__51325;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,form,p__51320){
var map__51321 = p__51320;
var map__51321__$1 = ((((!((map__51321 == null)))?((((map__51321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51321):map__51321);
var opts = map__51321__$1;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_form),(function (){var x__8436__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_id,untangled.ui.forms.form_ident(form)], null)], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});

untangled.ui.forms.validate_entire_form_BANG_.cljs$lang$maxFixedArity = (2);

untangled.ui.forms.validate_entire_form_BANG_.cljs$lang$applyTo = (function (seq51317){
var G__51318 = cljs.core.first(seq51317);
var seq51317__$1 = cljs.core.next(seq51317);
var G__51319 = cljs.core.first(seq51317__$1);
var seq51317__$2 = cljs.core.next(seq51317__$1);
return untangled.ui.forms.validate_entire_form_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51318,G__51319,seq51317__$2);
});

untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_toggle_DASH_field,(function (env51326,_,p__51327){
var map__51328 = p__51327;
var map__51328__$1 = ((((!((map__51328 == null)))?((((map__51328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51328):map__51328);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,cljs.core.cst$kw$form_DASH_id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51330 = env51326;
var map__51330__$1 = ((((!((map__51330 == null)))?((((map__51330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51330):map__51330);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51330,map__51330__$1,state,map__51328,map__51328__$1,form_id,field){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,form_id,untangled.ui.forms.update_current_value,cljs.core.array_seq([field,cljs.core.not], 0));
});})(map__51330,map__51330__$1,state,map__51328,map__51328__$1,form_id,field))
], null);
})(),(function (){var env = env51326;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_set_DASH_field,(function (env51332,_,p__51333){
var map__51334 = p__51333;
var map__51334__$1 = ((((!((map__51334 == null)))?((((map__51334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51334):map__51334);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51334__$1,cljs.core.cst$kw$form_DASH_id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51334__$1,cljs.core.cst$kw$field);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51334__$1,cljs.core.cst$kw$value);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51336 = env51332;
var map__51336__$1 = ((((!((map__51336 == null)))?((((map__51336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51336):map__51336);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51336__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51336,map__51336__$1,state,map__51334,map__51334__$1,form_id,field,value){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,form_id,untangled.ui.forms.set_current_value,cljs.core.array_seq([field,value], 0));
});})(map__51336,map__51336__$1,state,map__51334,map__51334__$1,form_id,field,value))
], null);
})(),(function (){var env = env51332;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
if(typeof untangled.ui.forms.form_field_STAR_ !== 'undefined'){
} else {
/**
 * Multimethod for rendering field types. Dispatches on field :input/type.
 */
untangled.ui.forms.form_field_STAR_ = (function (){var method_table__8533__auto__ = (function (){var G__51338 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51338) : cljs.core.atom.call(null,G__51338));
})();
var prefer_table__8534__auto__ = (function (){var G__51339 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51339) : cljs.core.atom.call(null,G__51339));
})();
var method_cache__8535__auto__ = (function (){var G__51340 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51340) : cljs.core.atom.call(null,G__51340));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__51341 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51341) : cljs.core.atom.call(null,G__51341));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("untangled.ui.forms","form-field*"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function() { 
var G__51342__delegate = function (component,form,field_name,params){
return cljs.core.cst$kw$input_SLASH_type.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.field_config(form,field_name));
};
var G__51342 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51343__i = 0, G__51343__a = new Array(arguments.length -  3);
while (G__51343__i < G__51343__a.length) {G__51343__a[G__51343__i] = arguments[G__51343__i + 3]; ++G__51343__i;}
  params = new cljs.core.IndexedSeq(G__51343__a,0);
} 
return G__51342__delegate.call(this,component,form,field_name,params);};
G__51342.cljs$lang$maxFixedArity = 3;
G__51342.cljs$lang$applyTo = (function (arglist__51344){
var component = cljs.core.first(arglist__51344);
arglist__51344 = cljs.core.next(arglist__51344);
var form = cljs.core.first(arglist__51344);
arglist__51344 = cljs.core.next(arglist__51344);
var field_name = cljs.core.first(arglist__51344);
var params = cljs.core.rest(arglist__51344);
return G__51342__delegate(component,form,field_name,params);
});
G__51342.cljs$core$IFn$_invoke$arity$variadic = G__51342__delegate;
return G__51342;
})()
;})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__51345__delegate = function (component,form,field_name,params){
return untangled.ui.forms.fail_BANG_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot dispatch to form-field renderer on form "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for field "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)].join(''));
};
var G__51345 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51346__i = 0, G__51346__a = new Array(arguments.length -  3);
while (G__51346__i < G__51346__a.length) {G__51346__a[G__51346__i] = arguments[G__51346__i + 3]; ++G__51346__i;}
  params = new cljs.core.IndexedSeq(G__51346__a,0);
} 
return G__51345__delegate.call(this,component,form,field_name,params);};
G__51345.cljs$lang$maxFixedArity = 3;
G__51345.cljs$lang$applyTo = (function (arglist__51347){
var component = cljs.core.first(arglist__51347);
arglist__51347 = cljs.core.next(arglist__51347);
var form = cljs.core.first(arglist__51347);
arglist__51347 = cljs.core.next(arglist__51347);
var field_name = cljs.core.first(arglist__51347);
var params = cljs.core.rest(arglist__51347);
return G__51345__delegate(component,form,field_name,params);
});
G__51345.cljs$core$IFn$_invoke$arity$variadic = G__51345__delegate;
return G__51345;
})()
);
/**
 * Function for rendering form fields. Call this to render, but `defmethod` on `form-field*`.
 */
untangled.ui.forms.form_field = (function untangled$ui$forms$form_field(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51352 = arguments.length;
var i__8724__auto___51353 = (0);
while(true){
if((i__8724__auto___51353 < len__8723__auto___51352)){
args__8730__auto__.push((arguments[i__8724__auto___51353]));

var G__51354 = (i__8724__auto___51353 + (1));
i__8724__auto___51353 = G__51354;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,form,field_name,params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(untangled.ui.forms.form_field_STAR_,component,form,field_name,params);
});

untangled.ui.forms.form_field.cljs$lang$maxFixedArity = (3);

untangled.ui.forms.form_field.cljs$lang$applyTo = (function (seq51348){
var G__51349 = cljs.core.first(seq51348);
var seq51348__$1 = cljs.core.next(seq51348);
var G__51350 = cljs.core.first(seq51348__$1);
var seq51348__$2 = cljs.core.next(seq51348__$1);
var G__51351 = cljs.core.first(seq51348__$2);
var seq51348__$3 = cljs.core.next(seq51348__$2);
return untangled.ui.forms.form_field.cljs$core$IFn$_invoke$arity$variadic(G__51349,G__51350,G__51351,seq51348__$3);
});

untangled.ui.forms.render_input_field = (function untangled$ui$forms$render_input_field(component,htmlProps,form,field_name,type,field_value__GT_input_value,input_value__GT_field_value){
var id = untangled.ui.forms.form_ident(form);
var input_value = (function (){var G__51357 = untangled.ui.forms.current_value(form,field_name);
return (field_value__GT_input_value.cljs$core$IFn$_invoke$arity$1 ? field_value__GT_input_value.cljs$core$IFn$_invoke$arity$1(G__51357) : field_value__GT_input_value.call(null,G__51357));
})();
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "form-control";
}
})();
var attrs = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlProps,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,field_name,cljs.core.cst$kw$value,input_value,cljs.core.cst$kw$placeholder,untangled.ui.forms.placeholder(form,field_name),cljs.core.cst$kw$onBlur,((function (id,input_value,cls){
return (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_field),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$blur),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,input_value,cls))
,cljs.core.cst$kw$onChange,((function (id,input_value,cls){
return (function (event){
var value = (function (){var G__51358 = event.target.value;
return (input_value__GT_field_value.cljs$core$IFn$_invoke$arity$1 ? input_value__GT_field_value.cljs$core$IFn$_invoke$arity$1(G__51358) : input_value__GT_field_value.call(null,G__51358));
})();
var field_info = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name,cljs.core.cst$kw$value,value], null);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_set_DASH_field),(function (){var x__8436__auto__ = field_info;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$edit),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,input_value,cls))
], null)], 0)));
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(attrs) : om.dom.input.call(null,attrs));
});
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_text,(function() { 
var G__51359__delegate = function (component,form,field_name,params){
var i__GT_f = cljs.core.identity;
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "form-control";
}
})();
var f__GT_i = cljs.core.identity;
return untangled.ui.forms.render_input_field(component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,cls], null),form,field_name,"text",f__GT_i,i__GT_f);
};
var G__51359 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51360__i = 0, G__51360__a = new Array(arguments.length -  3);
while (G__51360__i < G__51360__a.length) {G__51360__a[G__51360__i] = arguments[G__51360__i + 3]; ++G__51360__i;}
  params = new cljs.core.IndexedSeq(G__51360__a,0);
} 
return G__51359__delegate.call(this,component,form,field_name,params);};
G__51359.cljs$lang$maxFixedArity = 3;
G__51359.cljs$lang$applyTo = (function (arglist__51361){
var component = cljs.core.first(arglist__51361);
arglist__51361 = cljs.core.next(arglist__51361);
var form = cljs.core.first(arglist__51361);
arglist__51361 = cljs.core.next(arglist__51361);
var field_name = cljs.core.first(arglist__51361);
var params = cljs.core.rest(arglist__51361);
return G__51359__delegate(component,form,field_name,params);
});
G__51359.cljs$core$IFn$_invoke$arity$variadic = G__51359__delegate;
return G__51359;
})()
);
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_integer,(function() { 
var G__51363__delegate = function (component,form,field_name,params){
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "form-control";
}
})();
var i__GT_f = ((function (cls){
return (function (p1__51362_SHARP_){
if(cljs.core.seq(cljs.core.re_matches(/^[0-9]*$/,p1__51362_SHARP_))){
return (p1__51362_SHARP_ | (0));
} else {
return null;
}
});})(cls))
;
var f__GT_i = cljs.core.identity;
return untangled.ui.forms.render_input_field(component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,cls], null),form,field_name,"number",f__GT_i,i__GT_f);
};
var G__51363 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51364__i = 0, G__51364__a = new Array(arguments.length -  3);
while (G__51364__i < G__51364__a.length) {G__51364__a[G__51364__i] = arguments[G__51364__i + 3]; ++G__51364__i;}
  params = new cljs.core.IndexedSeq(G__51364__a,0);
} 
return G__51363__delegate.call(this,component,form,field_name,params);};
G__51363.cljs$lang$maxFixedArity = 3;
G__51363.cljs$lang$applyTo = (function (arglist__51365){
var component = cljs.core.first(arglist__51365);
arglist__51365 = cljs.core.next(arglist__51365);
var form = cljs.core.first(arglist__51365);
arglist__51365 = cljs.core.next(arglist__51365);
var field_name = cljs.core.first(arglist__51365);
var params = cljs.core.rest(arglist__51365);
return G__51363__delegate(component,form,field_name,params);
});
G__51363.cljs$core$IFn$_invoke$arity$variadic = G__51363__delegate;
return G__51363;
})()
);
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_select_DASH_option,(function (env51366,_,p__51367){
var map__51368 = p__51367;
var map__51368__$1 = ((((!((map__51368 == null)))?((((map__51368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51368):map__51368);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,cljs.core.cst$kw$form_DASH_id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,cljs.core.cst$kw$field);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,cljs.core.cst$kw$value);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51370 = env51366;
var map__51370__$1 = ((((!((map__51370 == null)))?((((map__51370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51370):map__51370);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51370,map__51370__$1,state,map__51368,map__51368__$1,form_id,field,value){
return (function (){
var value__$1 = value.substring((1));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_id,field),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value__$1));
});})(map__51370,map__51370__$1,state,map__51368,map__51368__$1,form_id,field,value))
], null);
})(),(function (){var env = env51366;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_dropdown,(function() { 
var G__51382__delegate = function (component,form,field_name,params){
var id = untangled.ui.forms.form_ident(form);
var selection = untangled.ui.forms.current_value(form,field_name);
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "form-control";
}
})();
var field = untangled.ui.forms.field_config(form,field_name);
var optional_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$untangled$ui$forms_SLASH_none,cljs.core.cst$kw$input_SLASH_default_DASH_value.cljs$core$IFn$_invoke$arity$1(field));
var options = cljs.core.cst$kw$input_SLASH_options.cljs$core$IFn$_invoke$arity$1(field);
var G__51372 = ({"name": field_name, "className": cls, "value": selection, "onChange": ((function (id,selection,cls,field,optional_QMARK_,options){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name,cljs.core.cst$kw$value,value], null);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_select_DASH_option),(function (){var x__8436__auto__ = field_info;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$edit),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,selection,cls,field,optional_QMARK_,options))
});
var G__51373 = ((optional_QMARK_)?(function (){var G__51375 = ({"value": cljs.core.cst$kw$untangled$ui$forms_SLASH_none});
var G__51376 = "";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__51375,G__51376) : om.dom.option.call(null,G__51375,G__51376));
})():null);
var G__51374 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__51372,G__51373,id,selection,cls,field,optional_QMARK_,options){
return (function (p__51377){
var map__51378 = p__51377;
var map__51378__$1 = ((((!((map__51378 == null)))?((((map__51378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51378):map__51378);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51378__$1,cljs.core.cst$kw$option_SLASH_key);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51378__$1,cljs.core.cst$kw$option_SLASH_label);
var G__51380 = ({"key": key, "value": key});
var G__51381 = label;
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__51380,G__51381) : om.dom.option.call(null,G__51380,G__51381));
});})(G__51372,G__51373,id,selection,cls,field,optional_QMARK_,options))
,options);
return (om.dom.select.cljs$core$IFn$_invoke$arity$3 ? om.dom.select.cljs$core$IFn$_invoke$arity$3(G__51372,G__51373,G__51374) : om.dom.select.call(null,G__51372,G__51373,G__51374));
};
var G__51382 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51383__i = 0, G__51383__a = new Array(arguments.length -  3);
while (G__51383__i < G__51383__a.length) {G__51383__a[G__51383__i] = arguments[G__51383__i + 3]; ++G__51383__i;}
  params = new cljs.core.IndexedSeq(G__51383__a,0);
} 
return G__51382__delegate.call(this,component,form,field_name,params);};
G__51382.cljs$lang$maxFixedArity = 3;
G__51382.cljs$lang$applyTo = (function (arglist__51384){
var component = cljs.core.first(arglist__51384);
arglist__51384 = cljs.core.next(arglist__51384);
var form = cljs.core.first(arglist__51384);
arglist__51384 = cljs.core.next(arglist__51384);
var field_name = cljs.core.first(arglist__51384);
var params = cljs.core.rest(arglist__51384);
return G__51382__delegate(component,form,field_name,params);
});
G__51382.cljs$core$IFn$_invoke$arity$variadic = G__51382__delegate;
return G__51382;
})()
);
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_checkbox,(function() { 
var G__51386__delegate = function (component,form,field_name,params){
var id = untangled.ui.forms.form_ident(form);
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})();
var bool_value = untangled.ui.forms.current_value(form,field_name);
var G__51385 = ({"type": "checkbox", "name": field_name, "className": cls, "checked": bool_value, "onChange": ((function (id,cls,bool_value){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name,cljs.core.cst$kw$value,value], null);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_toggle_DASH_field),(function (){var x__8436__auto__ = field_info;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$edit),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,cls,bool_value))
});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__51385) : om.dom.input.call(null,G__51385));
};
var G__51386 = function (component,form,field_name,var_args){
var params = null;
if (arguments.length > 3) {
var G__51387__i = 0, G__51387__a = new Array(arguments.length -  3);
while (G__51387__i < G__51387__a.length) {G__51387__a[G__51387__i] = arguments[G__51387__i + 3]; ++G__51387__i;}
  params = new cljs.core.IndexedSeq(G__51387__a,0);
} 
return G__51386__delegate.call(this,component,form,field_name,params);};
G__51386.cljs$lang$maxFixedArity = 3;
G__51386.cljs$lang$applyTo = (function (arglist__51388){
var component = cljs.core.first(arglist__51388);
arglist__51388 = cljs.core.next(arglist__51388);
var form = cljs.core.first(arglist__51388);
arglist__51388 = cljs.core.next(arglist__51388);
var field_name = cljs.core.first(arglist__51388);
var params = cljs.core.rest(arglist__51388);
return G__51386__delegate(component,form,field_name,params);
});
G__51386.cljs$core$IFn$_invoke$arity$variadic = G__51386__delegate;
return G__51386;
})()
);
/**
 * Returns the generated ID of a form field component. Needed to label radio buttons
 */
untangled.ui.forms.radio_button_id = (function untangled$ui$forms$radio_button_id(form,field,choice){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(untangled.ui.forms.form_ident(form))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choice)].join('');
});
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_radio,(function() { 
var G__51393__delegate = function (component,form,field_name,p__51389){
var map__51390 = p__51389;
var map__51390__$1 = ((((!((map__51390 == null)))?((((map__51390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51390):map__51390);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51390__$1,cljs.core.cst$kw$choice);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51390__$1,cljs.core.cst$kw$label,"\u00A0");
var id = untangled.ui.forms.form_ident(form);
var cls = "c-radio c-radio--expanded";
var field_id = untangled.ui.forms.radio_button_id(form,field_name,choice);
var current_val = untangled.ui.forms.current_value(form,field_name);
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__51392 = ({"type": "radio", "id": field_id, "name": field_name, "className": cls, "value": cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([choice], 0)), "checked": cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_val,choice), "onChange": ((function (id,cls,field_id,current_val,map__51390,map__51390__$1,choice,label){
return (function (event){
var value = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name,cljs.core.cst$kw$value,cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(value)], null);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_set_DASH_field),(function (){var x__8436__auto__ = field_info;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$edit),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,cls,field_id,current_val,map__51390,map__51390__$1,choice,label))
});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__51392) : om.dom.input.call(null,G__51392));
})(),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"htmlFor": field_id}),cljs.core.array_seq([label], 0))], 0));
};
var G__51393 = function (component,form,field_name,var_args){
var p__51389 = null;
if (arguments.length > 3) {
var G__51394__i = 0, G__51394__a = new Array(arguments.length -  3);
while (G__51394__i < G__51394__a.length) {G__51394__a[G__51394__i] = arguments[G__51394__i + 3]; ++G__51394__i;}
  p__51389 = new cljs.core.IndexedSeq(G__51394__a,0);
} 
return G__51393__delegate.call(this,component,form,field_name,p__51389);};
G__51393.cljs$lang$maxFixedArity = 3;
G__51393.cljs$lang$applyTo = (function (arglist__51395){
var component = cljs.core.first(arglist__51395);
arglist__51395 = cljs.core.next(arglist__51395);
var form = cljs.core.first(arglist__51395);
arglist__51395 = cljs.core.next(arglist__51395);
var field_name = cljs.core.first(arglist__51395);
var p__51389 = cljs.core.rest(arglist__51395);
return G__51393__delegate(component,form,field_name,p__51389);
});
G__51393.cljs$core$IFn$_invoke$arity$variadic = G__51393__delegate;
return G__51393;
})()
);
untangled.ui.forms.form_field_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$untangled$ui$forms_SLASH_textarea,(function() { 
var G__51399__delegate = function (component,form,field_name,p__51396){
var map__51397 = p__51396;
var map__51397__$1 = ((((!((map__51397 == null)))?((((map__51397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51397):map__51397);
var htmlProps = map__51397__$1;
var id = untangled.ui.forms.form_ident(form);
var cls = (function (){var or__7502__auto__ = untangled.ui.forms.css_class(form,field_name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})();
var value = untangled.ui.forms.current_value(form,field_name);
var attrs = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([htmlProps,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,field_name,cljs.core.cst$kw$className,cls,cljs.core.cst$kw$value,value,cljs.core.cst$kw$onBlur,((function (id,cls,value,map__51397,map__51397__$1,htmlProps){
return (function (_){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_field),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$blur),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,cls,value,map__51397,map__51397__$1,htmlProps))
,cljs.core.cst$kw$onChange,((function (id,cls,value,map__51397,map__51397__$1,htmlProps){
return (function (event){
var value__$1 = event.target.value;
var field_info = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form_DASH_id,id,cljs.core.cst$kw$field,field_name,cljs.core.cst$kw$value,value__$1], null);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_set_DASH_field),(function (){var x__8436__auto__ = field_info;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),untangled.ui.forms.get_on_form_change_mutation(form,field_name,cljs.core.cst$kw$edit),cljs.core.array_seq([(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))))));
});})(id,cls,value,map__51397,map__51397__$1,htmlProps))
], null)], 0)));
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(attrs) : om.dom.textarea.call(null,attrs));
};
var G__51399 = function (component,form,field_name,var_args){
var p__51396 = null;
if (arguments.length > 3) {
var G__51400__i = 0, G__51400__a = new Array(arguments.length -  3);
while (G__51400__i < G__51400__a.length) {G__51400__a[G__51400__i] = arguments[G__51400__i + 3]; ++G__51400__i;}
  p__51396 = new cljs.core.IndexedSeq(G__51400__a,0);
} 
return G__51399__delegate.call(this,component,form,field_name,p__51396);};
G__51399.cljs$lang$maxFixedArity = 3;
G__51399.cljs$lang$applyTo = (function (arglist__51401){
var component = cljs.core.first(arglist__51401);
arglist__51401 = cljs.core.next(arglist__51401);
var form = cljs.core.first(arglist__51401);
arglist__51401 = cljs.core.next(arglist__51401);
var field_name = cljs.core.first(arglist__51401);
var p__51396 = cljs.core.rest(arglist__51401);
return G__51399__delegate(component,form,field_name,p__51396);
});
G__51399.cljs$core$IFn$_invoke$arity$variadic = G__51399__delegate;
return G__51399;
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
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.ui.forms.commit_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8221__auto__.call(null,this$,params));
} else {
var m__8221__auto____$1 = (untangled.ui.forms.commit_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__8221__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("DBAdapter.commit!",this$);
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
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.ui.forms.transact_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,tx) : m__8221__auto__.call(null,this$,tx));
} else {
var m__8221__auto____$1 = (untangled.ui.forms.transact_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,tx) : m__8221__auto____$1.call(null,this$,tx));
} else {
throw cljs.core.missing_protocol("DBAdapter.transact!",this$);
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
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.ui.forms.gen_tempid[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto__.call(null,this$));
} else {
var m__8221__auto____$1 = (untangled.ui.forms.gen_tempid["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DBAdapter.gen-tempid",this$);
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
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.ui.forms.parse_tx[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(this$,tx_type,data) : m__8221__auto__.call(null,this$,tx_type,data));
} else {
var m__8221__auto____$1 = (untangled.ui.forms.parse_tx["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,tx_type,data) : m__8221__auto____$1.call(null,this$,tx_type,data));
} else {
throw cljs.core.missing_protocol("DBAdapter.parse-tx",this$);
}
}
}
});

untangled.ui.forms.field_diff_STAR_ = (function untangled$ui$forms$field_diff_STAR_(curr,orig,cfg){
var G__51408 = (((cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(cfg) instanceof cljs.core.Keyword))?cljs.core.cst$kw$input_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(cfg).fqn:null);
switch (G__51408) {
case "many":
var vec__51409 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,orig], null));
var curr_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51409,(0),null);
var orig_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51409,(1),null);
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(curr_set,orig_set);
var removals = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(orig_set,curr_set);
var G__51412 = cljs.core.PersistentArrayMap.EMPTY;
var G__51412__$1 = ((cljs.core.seq(removals))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412,cljs.core.cst$kw$form_SLASH_remove_DASH_relations,cljs.core.vec(removals)):G__51412);
if(cljs.core.seq(additions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51412__$1,cljs.core.cst$kw$form_SLASH_add_DASH_relations,cljs.core.vec(additions));
} else {
return G__51412__$1;
}

break;
case "one":
var G__51413 = cljs.core.PersistentArrayMap.EMPTY;
var G__51413__$1 = (cljs.core.truth_(curr)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413,cljs.core.cst$kw$form_SLASH_add_DASH_relations,curr):G__51413);
if(cljs.core.truth_(orig)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51413__$1,cljs.core.cst$kw$form_SLASH_remove_DASH_relations,orig);
} else {
return G__51413__$1;
}

break;
default:
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(curr,orig)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_SLASH_updates,curr], null);
} else {
return null;
}

}
});
untangled.ui.forms.field_diff = (function untangled$ui$forms$field_diff(form,diff,field){
var ident = untangled.ui.forms.form_ident(form);
var cfg = untangled.ui.forms.field_config(form,field);
var curr = untangled.ui.forms._QMARK_normalize(cfg,untangled.ui.forms.current_value(form,field));
var orig = untangled.ui.forms._QMARK_normalize(cfg,untangled.ui.forms.get_original_data.cljs$core$IFn$_invoke$arity$2(form,field));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ident,cfg,curr,orig){
return (function (diff__$1,p__51419){
var vec__51420 = p__51419;
var tx_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51420,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51420,(1),null);
return cljs.core.assoc_in(diff__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_type,ident,field], null),value);
});})(ident,cfg,curr,orig))
,diff,untangled.ui.forms.field_diff_STAR_(curr,orig,cfg));
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
return untangled.ui.forms.form_reduce.cljs$core$IFn$_invoke$arity$3(root_form,cljs.core.PersistentArrayMap.EMPTY,(function (diff,form){
var vec__51426 = untangled.ui.forms.form_ident(form);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51426,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51426,(1),null);
var ident = vec__51426;
var fields = untangled.ui.forms.element_names(form);
if(om.next.tempid_QMARK_(id)){
return cljs.core.assoc_in(diff,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form_SLASH_new_DASH_entities,ident], null),cljs.core.select_keys(form,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.ui_field_QMARK_,form),fields)));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.ui_field_QMARK_,form)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.dirty_field_QMARK_,form))),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(untangled.ui.forms.field_diff,form)),diff,fields);
}
}));
});
/**
 * Modify the form's (under `form-id`) using `update-forms` and a passed in transform `xf`
 */
untangled.ui.forms.entity_xform = (function untangled$ui$forms$entity_xform(state,form_id,xf){
return untangled.ui.forms.update_forms(state,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,form_id),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,cljs.core.cst$kw$form));
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_commit_DASH_to_DASH_entity,(function (env51429,_,p__51430){
var map__51431 = p__51430;
var map__51431__$1 = ((((!((map__51431 == null)))?((((map__51431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51431):map__51431);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51431__$1,cljs.core.cst$kw$form);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51431__$1,cljs.core.cst$kw$remote);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51433 = env51429;
var map__51433__$1 = ((((!((map__51433 == null)))?((((map__51433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51433):map__51433);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51433__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51433,map__51433__$1,state,map__51431,map__51431__$1,form,remote){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.forms.entity_xform,untangled.ui.forms.form_ident(form),untangled.ui.forms.commit_state);
});})(map__51433,map__51433__$1,state,map__51431,map__51431__$1,form,remote))
], null);
})(),(function (){var map__51435 = env51429;
var map__51435__$1 = ((((!((map__51435 == null)))?((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51435):map__51435);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,cljs.core.cst$kw$state);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,cljs.core.cst$kw$ast);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,cljs.core.cst$kw$target);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,(cljs.core.truth_((function (){var and__7490__auto__ = remote;
if(cljs.core.truth_(and__7490__auto__)){
return target;
} else {
return and__7490__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$params,untangled.ui.forms.diff_form(form)):null)], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$forms_SLASH_reset_DASH_from_DASH_entity,(function (env51437,_,p__51438){
var map__51439 = p__51438;
var map__51439__$1 = ((((!((map__51439 == null)))?((((map__51439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51439):map__51439);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51439__$1,cljs.core.cst$kw$form_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51441 = env51437;
var map__51441__$1 = ((((!((map__51441 == null)))?((((map__51441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51441):map__51441);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51441__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51441,map__51441__$1,state,map__51439,map__51439__$1,form_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.forms.entity_xform,form_id,untangled.ui.forms.reset_entity);
});})(map__51441,map__51441__$1,state,map__51439,map__51439__$1,form_id))
], null);
})(),(function (){var env = env51437;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
/**
 * Reset the form from a given entity in your application database using an Om transaction and update the validation state.
 * You may compose your own Om transactions and use `(f/reset-from-entity {:form-id [:entity id]})` directly.
 */
untangled.ui.forms.reset_from_entity_BANG_ = (function untangled$ui$forms$reset_from_entity_BANG_(comp_or_reconciler,form){
var form_id = untangled.ui.forms.form_ident(form);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_reset_DASH_from_DASH_entity),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_id,form_id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = untangled.ui.forms.form_root_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
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
var args__8730__auto__ = [];
var len__8723__auto___51448 = arguments.length;
var i__8724__auto___51449 = (0);
while(true){
if((i__8724__auto___51449 < len__8723__auto___51448)){
args__8730__auto__.push((arguments[i__8724__auto___51449]));

var G__51450 = (i__8724__auto___51449 + (1));
i__8724__auto___51449 = G__51450;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__51445){
var map__51446 = p__51445;
var map__51446__$1 = ((((!((map__51446 == null)))?((((map__51446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51446):map__51446);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51446__$1,cljs.core.cst$kw$remote,false);
var rerender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51446__$1,cljs.core.cst$kw$rerender);
var form = om.next.props(component);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.validate_fields(form)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_commit_DASH_to_DASH_entity),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$remote,remote], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_validate_DASH_form),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$form_DASH_id,untangled.ui.forms.form_ident(form)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))),untangled.ui.forms.form_root_key], null),rerender));
});

untangled.ui.forms.commit_to_entity_BANG_.cljs$lang$maxFixedArity = (1);

untangled.ui.forms.commit_to_entity_BANG_.cljs$lang$applyTo = (function (seq51443){
var G__51444 = cljs.core.first(seq51443);
var seq51443__$1 = cljs.core.next(seq51443);
return untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51444,seq51443__$1);
});


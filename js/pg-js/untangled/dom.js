// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('om.next');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
var s = cljs.core.system_time();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args46330 = [];
var len__8723__auto___46333 = arguments.length;
var i__8724__auto___46334 = (0);
while(true){
if((i__8724__auto___46334 < len__8723__auto___46333)){
args46330.push((arguments[i__8724__auto___46334]));

var G__46335 = (i__8724__auto___46334 + (1));
i__8724__auto___46334 = G__46335;
continue;
} else {
}
break;
}

var G__46332 = args46330.length;
switch (G__46332) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46330.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_(reconciler,keywords);

return om.next.protocols.schedule_render_BANG_(reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state(reconciler);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());

return om.next.force_root_render_BANG_(reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;

/**
 * Append a CSS class. Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__46343__delegate = function (state_key,default_class_string,p__46340){
var map__46341 = p__46340;
var map__46341__$1 = ((((!((map__46341 == null)))?((((map__46341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46341):map__46341);
var when_true = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46341__$1,cljs.core.cst$kw$when_DASH_true,"active");
var when_false = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46341__$1,cljs.core.cst$kw$when_DASH_false,"");
var append_string = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state_key,om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,local_state_key)))?when_true:when_false);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_class_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(append_string)].join('');
};
var G__46343 = function (state_key,default_class_string,var_args){
var p__46340 = null;
if (arguments.length > 2) {
var G__46344__i = 0, G__46344__a = new Array(arguments.length -  2);
while (G__46344__i < G__46344__a.length) {G__46344__a[G__46344__i] = arguments[G__46344__i + 2]; ++G__46344__i;}
  p__46340 = new cljs.core.IndexedSeq(G__46344__a,0);
} 
return G__46343__delegate.call(this,state_key,default_class_string,p__46340);};
G__46343.cljs$lang$maxFixedArity = 2;
G__46343.cljs$lang$applyTo = (function (arglist__46345){
var state_key = cljs.core.first(arglist__46345);
arglist__46345 = cljs.core.next(arglist__46345);
var default_class_string = cljs.core.first(arglist__46345);
var p__46340 = cljs.core.rest(arglist__46345);
return G__46343__delegate(state_key,default_class_string,p__46340);
});
G__46343.cljs$core$IFn$_invoke$arity$variadic = G__46343__delegate;
return G__46343;
})()
;
});
/**
 * Adds the 'visible' CSS class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__8730__auto__ = [];
var len__8723__auto___46353 = arguments.length;
var i__8724__auto___46354 = (0);
while(true){
if((i__8724__auto___46354 < len__8723__auto___46353)){
args__8730__auto__.push((arguments[i__8724__auto___46354]));

var G__46355 = (i__8724__auto___46354 + (1));
i__8724__auto___46354 = G__46355;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__46350){
var map__46351 = p__46350;
var map__46351__$1 = ((((!((map__46351 == null)))?((((map__46351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46351):map__46351);
var when_true = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46351__$1,cljs.core.cst$kw$when_DASH_true,"active");
var when_false = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46351__$1,cljs.core.cst$kw$when_DASH_false,"");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq46346){
var G__46347 = cljs.core.first(seq46346);
var seq46346__$1 = cljs.core.next(seq46346);
var G__46348 = cljs.core.first(seq46346__$1);
var seq46346__$2 = cljs.core.next(seq46346__$1);
var G__46349 = cljs.core.first(seq46346__$2);
var seq46346__$3 = cljs.core.next(seq46346__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__46347,G__46348,G__46349,seq46346__$3);
});

/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e46357){if((e46357 instanceof Object)){
var e = e46357;
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Event had no target when trying to pull text"], 0));
} else {
throw e46357;

}
}});

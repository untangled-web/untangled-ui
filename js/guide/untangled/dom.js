// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.next');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
var s = cljs.core.system_time.call(null);
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
var args701402 = [];
var len__28871__auto___701412 = arguments.length;
var i__28872__auto___701413 = (0);
while(true){
if((i__28872__auto___701413 < len__28871__auto___701412)){
args701402.push((arguments[i__28872__auto___701413]));

var G__701415 = (i__28872__auto___701413 + (1));
i__28872__auto___701413 = G__701415;
continue;
} else {
}
break;
}

var G__701404 = args701402.length;
switch (G__701404) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701402.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
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
var G__701425__delegate = function (state_key,default_class_string,p__701422){
var map__701423 = p__701422;
var map__701423__$1 = ((((!((map__701423 == null)))?((((map__701423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__701423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__701423):map__701423);
var when_true = cljs.core.get.call(null,map__701423__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__701423__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_class_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(append_string)].join('');
};
var G__701425 = function (state_key,default_class_string,var_args){
var p__701422 = null;
if (arguments.length > 2) {
var G__701428__i = 0, G__701428__a = new Array(arguments.length -  2);
while (G__701428__i < G__701428__a.length) {G__701428__a[G__701428__i] = arguments[G__701428__i + 2]; ++G__701428__i;}
  p__701422 = new cljs.core.IndexedSeq(G__701428__a,0);
} 
return G__701425__delegate.call(this,state_key,default_class_string,p__701422);};
G__701425.cljs$lang$maxFixedArity = 2;
G__701425.cljs$lang$applyTo = (function (arglist__701429){
var state_key = cljs.core.first(arglist__701429);
arglist__701429 = cljs.core.next(arglist__701429);
var default_class_string = cljs.core.first(arglist__701429);
var p__701422 = cljs.core.rest(arglist__701429);
return G__701425__delegate(state_key,default_class_string,p__701422);
});
G__701425.cljs$core$IFn$_invoke$arity$variadic = G__701425__delegate;
return G__701425;
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
var args__28878__auto__ = [];
var len__28871__auto___701455 = arguments.length;
var i__28872__auto___701456 = (0);
while(true){
if((i__28872__auto___701456 < len__28871__auto___701455)){
args__28878__auto__.push((arguments[i__28872__auto___701456]));

var G__701458 = (i__28872__auto___701456 + (1));
i__28872__auto___701456 = G__701458;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__701438){
var map__701439 = p__701438;
var map__701439__$1 = ((((!((map__701439 == null)))?((((map__701439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__701439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__701439):map__701439);
var when_true = cljs.core.get.call(null,map__701439__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__701439__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq701430){
var G__701431 = cljs.core.first.call(null,seq701430);
var seq701430__$1 = cljs.core.next.call(null,seq701430);
var G__701432 = cljs.core.first.call(null,seq701430__$1);
var seq701430__$2 = cljs.core.next.call(null,seq701430__$1);
var G__701433 = cljs.core.first.call(null,seq701430__$2);
var seq701430__$3 = cljs.core.next.call(null,seq701430__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__701431,G__701432,G__701433,seq701430__$3);
});

/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e701463){if((e701463 instanceof Object)){
var e = e701463;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e701463;

}
}});

//# sourceMappingURL=dom.js.map?rel=1489703350538
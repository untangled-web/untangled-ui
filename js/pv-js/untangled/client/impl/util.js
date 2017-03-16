// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('cljs.spec');
goog.require('om.next');
untangled.client.impl.util.atom_QMARK_ = (function untangled$client$impl$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
untangled.client.impl.util.deep_merge = (function untangled$client$impl$util$deep_merge(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45033 = arguments.length;
var i__8724__auto___45034 = (0);
while(true){
if((i__8724__auto___45034 < len__8723__auto___45033)){
args__8730__auto__.push((arguments[i__8724__auto___45034]));

var G__45035 = (i__8724__auto___45034 + (1));
i__8724__auto___45034 = G__45035;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,untangled.client.impl.util.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

untangled.client.impl.util.deep_merge.cljs$lang$maxFixedArity = (0);

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq45024){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45024));
});

/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 * (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45052 = arguments.length;
var i__8724__auto___45053 = (0);
while(true){
if((i__8724__auto___45053 < len__8723__auto___45052)){
args__8730__auto__.push((arguments[i__8724__auto___45053]));

var G__45054 = (i__8724__auto___45053 + (1));
i__8724__auto___45053 = G__45054;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (app_atom,keys_and_paths){
try{var app_state = om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_atom) : cljs.core.deref.call(null,app_atom))));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var make_path = ((function (app_state){
return (function untangled$client$impl$util$make_path(location){
if(cljs.core.sequential_QMARK_(location)){
return location;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null);
}
});})(app_state))
;
var process_location = ((function (app_state){
return (function untangled$client$impl$util$process_location(acc,location){
var path = make_path(location);
return cljs.core.assoc_in(acc,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),path));
});})(app_state))
;
var pred__45047 = cljs.core._EQ_;
var expr__45048 = cljs.core.count(keys_and_paths);
if(cljs.core.truth_((pred__45047.cljs$core$IFn$_invoke$arity$2 ? pred__45047.cljs$core$IFn$_invoke$arity$2((0),expr__45048) : pred__45047.call(null,(0),expr__45048)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));
} else {
if(cljs.core.truth_((pred__45047.cljs$core$IFn$_invoke$arity$2 ? pred__45047.cljs$core$IFn$_invoke$arity$2((1),expr__45048) : pred__45047.call(null,(1),expr__45048)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),make_path(cljs.core.first(keys_and_paths)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e45045){if((e45045 instanceof Error)){
var e = e45045;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e45045;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq45039){
var G__45040 = cljs.core.first(seq45039);
var seq45039__$1 = cljs.core.next(seq45039);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__45040,seq45039__$1);
});


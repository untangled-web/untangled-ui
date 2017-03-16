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
var len__8723__auto___41885 = arguments.length;
var i__8724__auto___41886 = (0);
while(true){
if((i__8724__auto___41886 < len__8723__auto___41885)){
args__8730__auto__.push((arguments[i__8724__auto___41886]));

var G__41887 = (i__8724__auto___41886 + (1));
i__8724__auto___41886 = G__41887;
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

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq41884){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41884));
});

/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 * (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__8730__auto__ = [];
var len__8723__auto___41894 = arguments.length;
var i__8724__auto___41895 = (0);
while(true){
if((i__8724__auto___41895 < len__8723__auto___41894)){
args__8730__auto__.push((arguments[i__8724__auto___41895]));

var G__41896 = (i__8724__auto___41895 + (1));
i__8724__auto___41895 = G__41896;
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
var pred__41891 = cljs.core._EQ_;
var expr__41892 = cljs.core.count(keys_and_paths);
if(cljs.core.truth_((pred__41891.cljs$core$IFn$_invoke$arity$2 ? pred__41891.cljs$core$IFn$_invoke$arity$2((0),expr__41892) : pred__41891.call(null,(0),expr__41892)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));
} else {
if(cljs.core.truth_((pred__41891.cljs$core$IFn$_invoke$arity$2 ? pred__41891.cljs$core$IFn$_invoke$arity$2((1),expr__41892) : pred__41891.call(null,(1),expr__41892)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),make_path(cljs.core.first(keys_and_paths)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e41890){if((e41890 instanceof Error)){
var e = e41890;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e41890;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq41888){
var G__41889 = cljs.core.first(seq41888);
var seq41888__$1 = cljs.core.next(seq41888);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__41889,seq41888__$1);
});


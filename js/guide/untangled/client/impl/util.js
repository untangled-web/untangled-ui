// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.impl.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.spec');
goog.require('om.next');
untangled.client.impl.util.atom_QMARK_ = (function untangled$client$impl$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
untangled.client.impl.util.deep_merge = (function untangled$client$impl$util$deep_merge(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701337 = arguments.length;
var i__28872__auto___701340 = (0);
while(true){
if((i__28872__auto___701340 < len__28871__auto___701337)){
args__28878__auto__.push((arguments[i__28872__auto___701340]));

var G__701344 = (i__28872__auto___701340 + (1));
i__28872__auto___701340 = G__701344;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,xs)){
return cljs.core.apply.call(null,cljs.core.merge_with,untangled.client.impl.util.deep_merge,xs);
} else {
return cljs.core.last.call(null,xs);
}
});

untangled.client.impl.util.deep_merge.cljs$lang$maxFixedArity = (0);

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq701335){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq701335));
});

/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 * (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701361 = arguments.length;
var i__28872__auto___701362 = (0);
while(true){
if((i__28872__auto___701362 < len__28871__auto___701361)){
args__28878__auto__.push((arguments[i__28872__auto___701362]));

var G__701363 = (i__28872__auto___701362 + (1));
i__28872__auto___701362 = G__701363;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (app_atom,keys_and_paths){
try{var app_state = om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_atom)));
return cljs.pprint.pprint.call(null,(function (){var make_path = ((function (app_state){
return (function untangled$client$impl$util$make_path(location){
if(cljs.core.sequential_QMARK_.call(null,location)){
return location;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null);
}
});})(app_state))
;
var process_location = ((function (app_state){
return (function untangled$client$impl$util$process_location(acc,location){
var path = make_path.call(null,location);
return cljs.core.assoc_in.call(null,acc,path,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),path));
});})(app_state))
;
var pred__701356 = cljs.core._EQ_;
var expr__701357 = cljs.core.count.call(null,keys_and_paths);
if(cljs.core.truth_(pred__701356.call(null,(0),expr__701357))){
return cljs.core.deref.call(null,app_state);
} else {
if(cljs.core.truth_(pred__701356.call(null,(1),expr__701357))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),make_path.call(null,cljs.core.first.call(null,keys_and_paths)));
} else {
return cljs.core.reduce.call(null,process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e701353){if((e701353 instanceof Error)){
var e = e701353;
throw cljs.core.ex_info.call(null,"untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e701353;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq701348){
var G__701350 = cljs.core.first.call(null,seq701348);
var seq701348__$1 = cljs.core.next.call(null,seq701348);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__701350,seq701348__$1);
});


//# sourceMappingURL=util.js.map?rel=1489703350452
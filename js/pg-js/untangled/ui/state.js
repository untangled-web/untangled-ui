// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Evolve the application state by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve = (function untangled$ui$state$evolve(state_map,ident,op,args){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,ident,op,args);
});
/**
 * Evolve the application state in the given atom by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve_BANG_ = (function untangled$ui$state$evolve_BANG_(var_args){
var args33207 = [];
var len__8723__auto___33210 = arguments.length;
var i__8724__auto___33211 = (0);
while(true){
if((i__8724__auto___33211 < len__8723__auto___33210)){
args33207.push((arguments[i__8724__auto___33211]));

var G__33212 = (i__8724__auto___33211 + (1));
i__8724__auto___33211 = G__33212;
continue;
} else {
}
break;
}

var G__33209 = args33207.length;
switch (G__33209) {
case 3:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33207.length)].join('')));

}
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,ident,op){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,untangled.ui.state.evolve,ident,op,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY], 0));
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,ident,op,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,untangled.ui.state.evolve,ident,op,cljs.core.array_seq([args], 0));
});

untangled.ui.state.evolve_BANG_.cljs$lang$maxFixedArity = 4;


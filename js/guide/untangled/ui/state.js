// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.state');
goog.require('cljs.core');
/**
 * Evolve the application state by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve = (function untangled$ui$state$evolve(state_map,ident,op,args){
return cljs.core.update_in.call(null,state_map,ident,op,args);
});
/**
 * Evolve the application state in the given atom by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve_BANG_ = (function untangled$ui$state$evolve_BANG_(var_args){
var args691491 = [];
var len__28871__auto___691504 = arguments.length;
var i__28872__auto___691506 = (0);
while(true){
if((i__28872__auto___691506 < len__28871__auto___691504)){
args691491.push((arguments[i__28872__auto___691506]));

var G__691507 = (i__28872__auto___691506 + (1));
i__28872__auto___691506 = G__691507;
continue;
} else {
}
break;
}

var G__691498 = args691491.length;
switch (G__691498) {
case 3:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args691491.length)].join('')));

}
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,ident,op){
return cljs.core.swap_BANG_.call(null,state_atom,untangled.ui.state.evolve,ident,op,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,ident,op,args){
return cljs.core.swap_BANG_.call(null,state_atom,untangled.ui.state.evolve,ident,op,args);
});

untangled.ui.state.evolve_BANG_.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=state.js.map?rel=1489703336114
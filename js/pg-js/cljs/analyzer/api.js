// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.env');
goog.require('cljs.analyzer');
/**
 * Creates an empty compilation state Atom<Map>.
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env),(function (){var x__8436__auto__ = state;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.analyzer.api.with_state.cljs$lang$macro = true;
/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env();
});
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__8730__auto__ = [];
var len__8723__auto___38403 = arguments.length;
var i__8724__auto___38404 = (0);
while(true){
if((i__8724__auto___38404 < len__8723__auto___38403)){
args__8730__auto__.push((arguments[i__8724__auto___38404]));

var G__38405 = (i__8724__auto___38404 + (1));
i__8724__auto___38404 = G__38405;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_warnings_STAR_),(function (){var x__8436__auto__ = no_warnings;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2);

cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq38400){
var G__38401 = cljs.core.first(seq38400);
var seq38400__$1 = cljs.core.next(seq38400);
var G__38402 = cljs.core.first(seq38400__$1);
var seq38400__$2 = cljs.core.next(seq38400__$1);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic(G__38401,G__38402,seq38400__$2);
});


cljs.analyzer.api.no_warn.cljs$lang$macro = true;
/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return (cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type));
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler(warning_type,env,extra);
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var args38406 = [];
var len__8723__auto___38409 = arguments.length;
var i__8724__auto___38410 = (0);
while(true){
if((i__8724__auto___38410 < len__8723__auto___38409)){
args38406.push((arguments[i__8724__auto___38410]));

var G__38411 = (i__8724__auto___38410 + (1));
i__8724__auto___38410 = G__38411;
continue;
} else {
}
break;
}

var G__38408 = args38406.length;
switch (G__38408) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38406.length)].join('')));

}
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$options);
});

cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1;

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var args38413 = [];
var len__8723__auto___38416 = arguments.length;
var i__8724__auto___38417 = (0);
while(true){
if((i__8724__auto___38417 < len__8723__auto___38416)){
args38413.push((arguments[i__8724__auto___38417]));

var G__38418 = (i__8724__auto___38417 + (1));
i__8724__auto___38417 = G__38418;
continue;
} else {
}
break;
}

var G__38415 = args38413.length;
switch (G__38415) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38413.length)].join('')));

}
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$js_DASH_dependency_DASH_index);
});

cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1;

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}catch (e38421){var e = e38421;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var args38422 = [];
var len__8723__auto___38425 = arguments.length;
var i__8724__auto___38426 = (0);
while(true){
if((i__8724__auto___38426 < len__8723__auto___38425)){
args38422.push((arguments[i__8724__auto___38426]));

var G__38427 = (i__8724__auto___38426 + (1));
i__8724__auto___38426 = G__38427;
continue;
} else {
}
break;
}

var G__38424 = args38422.length;
switch (G__38424) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38422.length)].join('')));

}
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces));
});

cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1;

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var args38429 = [];
var len__8723__auto___38432 = arguments.length;
var i__8724__auto___38433 = (0);
while(true){
if((i__8724__auto___38433 < len__8723__auto___38432)){
args38429.push((arguments[i__8724__auto___38433]));

var G__38434 = (i__8724__auto___38433 + (1));
i__8724__auto___38433 = G__38434;
continue;
} else {
}
break;
}

var G__38431 = args38429.length;
switch (G__38431) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38429.length)].join('')));

}
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,sym);
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,sym], null));
});

cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var args38436 = [];
var len__8723__auto___38439 = arguments.length;
var i__8724__auto___38440 = (0);
while(true){
if((i__8724__auto___38440 < len__8723__auto___38439)){
args38436.push((arguments[i__8724__auto___38440]));

var G__38441 = (i__8724__auto___38440 + (1));
i__8724__auto___38440 = G__38441;
continue;
} else {
}
break;
}

var G__38438 = args38436.length;
switch (G__38438) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38436.length)].join('')));

}
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0));
});

cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var args38443 = [];
var len__8723__auto___38450 = arguments.length;
var i__8724__auto___38451 = (0);
while(true){
if((i__8724__auto___38451 < len__8723__auto___38450)){
args38443.push((arguments[i__8724__auto___38451]));

var G__38452 = (i__8724__auto___38451 + (1));
i__8724__auto___38451 = G__38452;
continue;
} else {
}
break;
}

var G__38445 = args38443.length;
switch (G__38445) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38443.length)].join('')));

}
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38446){
var vec__38447 = p__38446;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(1),null);
return cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))], 0))));
});

cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var args38454 = [];
var len__8723__auto___38457 = arguments.length;
var i__8724__auto___38458 = (0);
while(true){
if((i__8724__auto___38458 < len__8723__auto___38457)){
args38454.push((arguments[i__8724__auto___38458]));

var G__38459 = (i__8724__auto___38458 + (1));
i__8724__auto___38458 = G__38459;
continue;
} else {
}
break;
}

var G__38456 = args38454.length;
switch (G__38456) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38454.length)].join('')));

}
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.env._STAR_compiler_STAR_,ns,sym);
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs,sym], null));
});

cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3;

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var args38461 = [];
var len__8723__auto___38464 = arguments.length;
var i__8724__auto___38465 = (0);
while(true){
if((i__8724__auto___38465 < len__8723__auto___38464)){
args38461.push((arguments[i__8724__auto___38465]));

var G__38466 = (i__8724__auto___38465 + (1));
i__8724__auto___38465 = G__38466;
continue;
} else {
}
break;
}

var G__38463 = args38461.length;
switch (G__38463) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38461.length)].join('')));

}
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),cljs.core.dissoc,cljs.core.array_seq([ns], 0));
});

cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2;

/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__8730__auto__ = [];
var len__8723__auto___38472 = arguments.length;
var i__8724__auto___38473 = (0);
while(true){
if((i__8724__auto___38473 < len__8723__auto___38472)){
args__8730__auto__.push((arguments[i__8724__auto___38473]));

var G__38474 = (i__8724__auto___38473 + (1));
i__8724__auto___38473 = G__38474;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$analyzer_SLASH__STAR_cljs_DASH_ns_STAR_),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs_SLASH_user))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$env_SLASH_with_DASH_compiler_DASH_env),(function (){var x__8436__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
});

cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3);

cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq38468){
var G__38469 = cljs.core.first(seq38468);
var seq38468__$1 = cljs.core.next(seq38468);
var G__38470 = cljs.core.first(seq38468__$1);
var seq38468__$2 = cljs.core.next(seq38468__$1);
var G__38471 = cljs.core.first(seq38468__$2);
var seq38468__$3 = cljs.core.next(seq38468__$2);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic(G__38469,G__38470,G__38471,seq38468__$3);
});


cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true;

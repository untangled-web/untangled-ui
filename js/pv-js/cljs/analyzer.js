// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.env');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$sym$cljs$user;
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dep_DASH_path,cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
/**
 * The namespace of the constants table as a symbol.
 */
cljs.analyzer.constants_ns_sym = cljs.core.cst$sym$cljs$core$constants;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads],[true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 62, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
var args35398 = [];
var len__8723__auto___35411 = arguments.length;
var i__8724__auto___35412 = (0);
while(true){
if((i__8724__auto___35412 < len__8723__auto___35411)){
args35398.push((arguments[i__8724__auto___35412]));

var G__35414 = (i__8724__auto___35412 + (1));
i__8724__auto___35412 = G__35414;
continue;
} else {
}
break;
}

var G__35403 = args35398.length;
switch (G__35403) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35398.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;

cljs.analyzer.CLJ_NIL_SYM = cljs.core.cst$sym$clj_DASH_nil;
cljs.analyzer.NUMBER_SYM = cljs.core.cst$sym$number;
cljs.analyzer.STRING_SYM = cljs.core.cst$sym$string;
cljs.analyzer.BOOLEAN_SYM = cljs.core.cst$sym$boolean;
cljs.analyzer.JS_STAR_SYM = cljs.core.cst$sym$js_STAR_;
cljs.analyzer.DOT_SYM = cljs.core.cst$sym$_DOT_;
cljs.analyzer.NEW_SYM = cljs.core.cst$sym$new;
cljs.analyzer.CLJS_CORE_SYM = cljs.core.cst$sym$cljs$core;
cljs.analyzer.CLJS_CORE_MACROS_SYM = cljs.core.cst$sym$cljs$core$macros;
cljs.analyzer.IGNORE_SYM = cljs.core.cst$sym$ignore;
cljs.analyzer.ANY_SYM = cljs.core.cst$sym$any;
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISeq$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IVector$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
var args35445 = [];
var len__8723__auto___35451 = arguments.length;
var i__8724__auto___35452 = (0);
while(true){
if((i__8724__auto___35452 < len__8723__auto___35451)){
args35445.push((arguments[i__8724__auto___35452]));

var G__35453 = (i__8724__auto___35452 + (1));
i__8724__auto___35452 = G__35453;
continue;
} else {
}
break;
}

var G__35449 = args35445.length;
switch (G__35449) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35445.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$kw$cljs);
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.analyzer.munge_path(ns),".","/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
var args35455 = [];
var len__8723__auto___35476 = arguments.length;
var i__8724__auto___35477 = (0);
while(true){
if((i__8724__auto___35477 < len__8723__auto___35476)){
args35455.push((arguments[i__8724__auto___35477]));

var G__35478 = (i__8724__auto___35477 + (1));
i__8724__auto___35477 = G__35478;
continue;
} else {
}
break;
}

var G__35457 = args35455.length;
switch (G__35457) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35455.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__35458 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35458) : cljs.core.atom.call(null,G__35458));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__35459_35481 = cljs.core.seq(deps);
var chunk__35460_35482 = null;
var count__35461_35483 = (0);
var i__35462_35484 = (0);
while(true){
if((i__35462_35484 < count__35461_35483)){
var dep_35485 = chunk__35460_35482.cljs$core$IIndexed$_nth$arity$2(null,i__35462_35484);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_35485,(depth + (1)),state,memo_get_deps);

var G__35486 = seq__35459_35481;
var G__35487 = chunk__35460_35482;
var G__35488 = count__35461_35483;
var G__35489 = (i__35462_35484 + (1));
seq__35459_35481 = G__35486;
chunk__35460_35482 = G__35487;
count__35461_35483 = G__35488;
i__35462_35484 = G__35489;
continue;
} else {
var temp__6753__auto___35490 = cljs.core.seq(seq__35459_35481);
if(temp__6753__auto___35490){
var seq__35459_35491__$1 = temp__6753__auto___35490;
if(cljs.core.chunked_seq_QMARK_(seq__35459_35491__$1)){
var c__8413__auto___35492 = cljs.core.chunk_first(seq__35459_35491__$1);
var G__35493 = cljs.core.chunk_rest(seq__35459_35491__$1);
var G__35494 = c__8413__auto___35492;
var G__35495 = cljs.core.count(c__8413__auto___35492);
var G__35496 = (0);
seq__35459_35481 = G__35493;
chunk__35460_35482 = G__35494;
count__35461_35483 = G__35495;
i__35462_35484 = G__35496;
continue;
} else {
var dep_35497 = cljs.core.first(seq__35459_35491__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_35497,(depth + (1)),state,memo_get_deps);

var G__35498 = cljs.core.next(seq__35459_35491__$1);
var G__35499 = null;
var G__35500 = (0);
var G__35501 = (0);
seq__35459_35481 = G__35498;
chunk__35460_35482 = G__35499;
count__35461_35483 = G__35500;
i__35462_35484 = G__35501;
continue;
}
} else {
}
}
break;
}

var seq__35463_35502 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__35464_35503 = null;
var count__35465_35504 = (0);
var i__35466_35505 = (0);
while(true){
if((i__35466_35505 < count__35465_35504)){
var vec__35469_35515 = chunk__35464_35503.cljs$core$IIndexed$_nth$arity$2(null,i__35466_35505);
var _LT_depth_35516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469_35515,(0),null);
var __35517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35469_35515,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_35516], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__35520 = seq__35463_35502;
var G__35521 = chunk__35464_35503;
var G__35522 = count__35465_35504;
var G__35523 = (i__35466_35505 + (1));
seq__35463_35502 = G__35520;
chunk__35464_35503 = G__35521;
count__35465_35504 = G__35522;
i__35466_35505 = G__35523;
continue;
} else {
var temp__6753__auto___35524 = cljs.core.seq(seq__35463_35502);
if(temp__6753__auto___35524){
var seq__35463_35525__$1 = temp__6753__auto___35524;
if(cljs.core.chunked_seq_QMARK_(seq__35463_35525__$1)){
var c__8413__auto___35526 = cljs.core.chunk_first(seq__35463_35525__$1);
var G__35527 = cljs.core.chunk_rest(seq__35463_35525__$1);
var G__35528 = c__8413__auto___35526;
var G__35529 = cljs.core.count(c__8413__auto___35526);
var G__35530 = (0);
seq__35463_35502 = G__35527;
chunk__35464_35503 = G__35528;
count__35465_35504 = G__35529;
i__35466_35505 = G__35530;
continue;
} else {
var vec__35472_35531 = cljs.core.first(seq__35463_35525__$1);
var _LT_depth_35532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472_35531,(0),null);
var __35533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472_35531,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_35532], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__35534 = cljs.core.next(seq__35463_35525__$1);
var G__35535 = null;
var G__35536 = (0);
var G__35537 = (0);
seq__35463_35502 = G__35534;
chunk__35464_35503 = G__35535;
count__35465_35504 = G__35536;
i__35466_35505 = G__35537;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$op));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__8533__auto__ = (function (){var G__35541 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35541) : cljs.core.atom.call(null,G__35541));
})();
var prefer_table__8534__auto__ = (function (){var G__35542 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35542) : cljs.core.atom.call(null,G__35542));
})();
var method_cache__8535__auto__ = (function (){var G__35543 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35543) : cljs.core.atom.call(null,G__35543));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__35544 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35544) : cljs.core.atom.call(null,G__35544));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function() { 
var G__35545__delegate = function (warning_type,_){
return warning_type;
};
var G__35545 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__35546__i = 0, G__35546__a = new Array(arguments.length -  1);
while (G__35546__i < G__35546__a.length) {G__35546__a[G__35546__i] = arguments[G__35546__i + 1]; ++G__35546__i;}
  _ = new cljs.core.IndexedSeq(G__35546__a,0);
} 
return G__35545__delegate.call(this,warning_type,_);};
G__35545.cljs$lang$maxFixedArity = 1;
G__35545.cljs$lang$applyTo = (function (arglist__35547){
var warning_type = cljs.core.first(arglist__35547);
var _ = cljs.core.rest(arglist__35547);
return G__35545__delegate(warning_type,_);
});
G__35545.cljs$core$IFn$_invoke$arity$variadic = G__35545__delegate;
return G__35545;
})()
;})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$preamble_DASH_missing,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Preamble resource file not found: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$missing.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unprovided,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Required namespace not provided for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cst$kw$unprovided.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_var,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$macro_DASH_present_QMARK_.cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns,(function (warning_type,p__35554){
var map__35555 = p__35554;
var map__35555__$1 = ((((!((map__35555 == null)))?((((map__35555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35555):map__35555);
var info = map__35555__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35555__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such namespace: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", could not locate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", or Closure namespace \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns,(function (warning_type,p__35561){
var map__35562 = p__35561;
var map__35562__$1 = ((((!((map__35562 == null)))?((((map__35562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35562):map__35562);
var info = map__35562__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35562__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such macros namespace: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", could not locate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$clj)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" or "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dynamic,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" not declared ^:dynamic")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" already refers to: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" being replaced by: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$redef_DASH_in_DASH_file,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is being replaced")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_var,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" no longer fn, references are stale")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_arity,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Wrong number of args ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$argc.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") passed to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7502__auto__ = cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is deprecated.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid :refer, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lib.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Protocol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is deprecated")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve protocol symbol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Symbol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a protocol")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,(function (warning_type,info){
if(cljs.core.truth_(cljs.core.cst$kw$no_DASH_such_DASH_method.cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad method signature in protocol implementation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not declare method called "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad method signature in protocol implementation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not declare arity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$invalid_DASH_arity.cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicated methods in protocol implementation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Protocol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" implemented multiple times")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Protocol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" declares method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with variadic signature (&)")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": Can't have more than 1 variadic overload")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$overload_DASH_arity,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": Can't have 2 overloads with same arity")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("instead of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$current_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" e.g "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$suggested_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_arithmetic,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", all arguments must be numbers, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instead.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke_DASH_ctor,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot invoke type constructor "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" as function ")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is a single segment namespace")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$munged_DASH_namespace,(function (warning_type,p__35627){
var map__35628 = p__35627;
var map__35628__$1 = ((((!((map__35628 == null)))?((((map__35628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35628):map__35628);
var info = map__35628__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35628__$1,cljs.core.cst$kw$name);
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__35628,map__35628__$1,info,name){
return (function (p1__35625_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__35625_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__35625_SHARP_)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35625_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return p1__35625_SHARP_;
}
});})(map__35628,map__35628__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" contains a reserved JavaScript keyword,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" the corresponding Google Closure namespace will be munged to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,(function (warning_type,p__35650){
var map__35651 = p__35650;
var map__35651__$1 = ((((!((map__35651 == null)))?((((map__35651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35651):map__35651);
var info = map__35651__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35651__$1,cljs.core.cst$kw$ns);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35651__$1,cljs.core.cst$kw$var);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" clashes with var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__35658){
var map__35659 = p__35658;
var map__35659__$1 = ((((!((map__35659 == null)))?((((map__35659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35659):map__35659);
var info = map__35659__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35659__$1,cljs.core.cst$kw$protocol);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35659__$1,cljs.core.cst$kw$method);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad extend-type method shape for protocol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__35666){
var map__35667 = p__35666;
var map__35667__$1 = ((((!((map__35667 == null)))?((((map__35667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35667):map__35667);
var info = map__35667__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35667__$1,cljs.core.cst$kw$module_DASH_type);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35667__$1,cljs.core.cst$kw$file);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported JavaScript module type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for foreign library "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,(function (warning_type,p__35677){
var map__35678 = p__35677;
var map__35678__$1 = ((((!((map__35678 == null)))?((((map__35678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35678):map__35678);
var preprocess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,cljs.core.cst$kw$preprocess);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,cljs.core.cst$kw$file);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported preprocess value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for foreign library "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,(function (warning_type,p__35686){
var map__35687 = p__35686;
var map__35687__$1 = ((((!((map__35687 == null)))?((((map__35687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35687):map__35687);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35687__$1,cljs.core.cst$kw$name);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is shadowed by a local")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$infer_DASH_warning,(function (warning_type,p__35691){
var map__35692 = p__35691;
var map__35692__$1 = ((((!((map__35692 == null)))?((((map__35692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35692):map__35692);
var warn_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,cljs.core.cst$kw$warn_DASH_type);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,cljs.core.cst$kw$form);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,cljs.core.cst$kw$type);
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,cljs.core.cst$kw$property);
var G__35696 = (((warn_type instanceof cljs.core.Keyword))?warn_type.fqn:null);
switch (G__35696) {
case "target":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot infer target type in expression "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),cljs.core.str.cljs$core$IFn$_invoke$arity$1("")].join('');

break;
case "property":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot resolve property "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(property),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for inferred type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in expression "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
case "object":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Adding extern to Object for property "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(property),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" due to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ambiguous expression "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(warn_type)].join('')));

}
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__6753__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__6753__auto__)){
var s = temp__6753__auto__;
var _STAR_print_fn_STAR_35712 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__35713 = env;
var G__35714 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("WARNING: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__35713,G__35714) : cljs.analyzer.message.call(null,G__35713,G__35714));
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35712;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
var G__35742 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__35743 = (n__$1 - (1));
ret = G__35742;
n__$1 = G__35743;
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.repeat_char("0",(pad - len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join(''):hex);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("_u"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_")].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("constant type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" not supported")].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),(1)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
var name__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",name))?"_DOT_":clojure.string.replace(clojure.string.replace(cljs.core.munge(clojure.string.replace(name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,((function (prefix,name){
return (function (p1__35749_SHARP_){
return cljs.analyzer.hex_format(p1__35749_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var args35764 = [];
var len__8723__auto___35782 = arguments.length;
var i__8724__auto___35783 = (0);
while(true){
if((i__8724__auto___35783 < len__8723__auto___35782)){
args35764.push((arguments[i__8724__auto___35783]));

var G__35785 = (i__8724__auto___35783 + (1));
i__8724__auto___35783 = G__35785;
continue;
} else {
}
break;
}

var G__35768 = args35764.length;
switch (G__35768) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35764.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__35771 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__35771,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$cljs$analyzer_SLASH_constants], null),((function (G__35771){
return (function (p__35772){
var map__35773 = p__35772;
var map__35773__$1 = ((((!((map__35773 == null)))?((((map__35773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35773):map__35773);
var constants = map__35773__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35773__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35773__$1,cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY);
var G__35779 = constants;
if(!(cljs.core.contains_QMARK_(seen,val))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__35779,cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0));
} else {
return G__35779;
}
});})(G__35771))
);
} else {
return G__35771;
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$core], null),cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer35798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer35798 = (function (meta35799){
this.meta35799 = meta35799;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.analyzer.t_cljs$analyzer35798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35800,meta35799__$1){
var self__ = this;
var _35800__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer35798(meta35799__$1));
});


cljs.analyzer.t_cljs$analyzer35798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35800){
var self__ = this;
var _35800__$1 = this;
return self__.meta35799;
});


cljs.analyzer.t_cljs$analyzer35798.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer35798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta35799], null);
});

cljs.analyzer.t_cljs$analyzer35798.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer35798.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer35798";

cljs.analyzer.t_cljs$analyzer35798.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.analyzer/t_cljs$analyzer35798");
});

cljs.analyzer.__GT_t_cljs$analyzer35798 = (function cljs$analyzer$__GT_t_cljs$analyzer35798(meta35799){
return (new cljs.analyzer.t_cljs$analyzer35798(meta35799));
});

}

return (new cljs.analyzer.t_cljs$analyzer35798(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var args35810 = [];
var len__8723__auto___35820 = arguments.length;
var i__8724__auto___35821 = (0);
while(true){
if((i__8724__auto___35821 < len__8723__auto___35820)){
args35810.push((arguments[i__8724__auto___35821]));

var G__35822 = (i__8724__auto___35821 + (1));
i__8724__auto___35821 = G__35822;
continue;
} else {
}
break;
}

var G__35815 = args35810.length;
switch (G__35815) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35810.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var temp__6755__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cenv) : cljs.core.deref.call(null,cenv)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,key], null));
if((temp__6755__auto__ == null)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$user,key)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null);
} else {
return null;
}
} else {
var ns = temp__6755__auto__;
return ns;
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__7502__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__7502__auto__ = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
var args35840 = [];
var len__8723__auto___35864 = arguments.length;
var i__8724__auto___35865 = (0);
while(true){
if((i__8724__auto___35865 < len__8723__auto___35864)){
args35840.push((arguments[i__8724__auto___35865]));

var G__35868 = (i__8724__auto___35865 + (1));
i__8724__auto___35865 = G__35868;
continue;
} else {
}
break;
}

var G__35852 = args35840.length;
switch (G__35852) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35840.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__7502__auto__ = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null)) == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35855){
var vec__35857 = p__35855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35857,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var ns__$1 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,cljs.core.cst$kw$ns,ns__$1,cljs.core.array_seq([cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.cst$kw$macro,true], 0));
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35860){
var vec__35861 = p__35860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__35213__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$js_DASH_globals,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__35213__auto__){
return (function (p1__35880_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__35880_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,p1__35880_SHARP_], null)],null));
});})(val__35213__auto__))
,cljs.core.list(cljs.core.cst$sym$alert,cljs.core.cst$sym$window,cljs.core.cst$sym$document,cljs.core.cst$sym$console,cljs.core.cst$sym$escape,cljs.core.cst$sym$unescape,cljs.core.cst$sym$screen,cljs.core.cst$sym$location,cljs.core.cst$sym$navigator,cljs.core.cst$sym$history,cljs.core.cst$sym$location,cljs.core.cst$sym$global,cljs.core.cst$sym$process,cljs.core.cst$sym$require,cljs.core.cst$sym$module,cljs.core.cst$sym$exports)))], null);
}finally {if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var args35897 = [];
var len__8723__auto___35911 = arguments.length;
var i__8724__auto___35913 = (0);
while(true){
if((i__8724__auto___35913 < len__8723__auto___35911)){
args35897.push((arguments[i__8724__auto___35913]));

var G__35914 = (i__8724__auto___35913 + (1));
i__8724__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var G__35900 = args35897.length;
switch (G__35900) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35897.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(null,env);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
var G__35903 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line(name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(name,env)], null);
if(cljs.core.truth_(cljs.core.cst$kw$root_DASH_source_DASH_info.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([G__35903,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root_DASH_source_DASH_info], null))], 0));
} else {
return G__35903;
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__35944 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__35945 = null;
var count__35946 = (0);
var i__35947 = (0);
while(true){
if((i__35947 < count__35946)){
var handler = chunk__35945.cljs$core$IIndexed$_nth$arity$2(null,i__35947);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__35952 = seq__35944;
var G__35953 = chunk__35945;
var G__35954 = count__35946;
var G__35955 = (i__35947 + (1));
seq__35944 = G__35952;
chunk__35945 = G__35953;
count__35946 = G__35954;
i__35947 = G__35955;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__35944);
if(temp__6753__auto__){
var seq__35944__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35944__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__35944__$1);
var G__35959 = cljs.core.chunk_rest(seq__35944__$1);
var G__35960 = c__8413__auto__;
var G__35961 = cljs.core.count(c__8413__auto__);
var G__35962 = (0);
seq__35944 = G__35959;
chunk__35945 = G__35960;
count__35946 = G__35961;
i__35947 = G__35962;
continue;
} else {
var handler = cljs.core.first(seq__35944__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__35964 = cljs.core.next(seq__35944__$1);
var G__35965 = null;
var G__35966 = (0);
var G__35967 = (0);
seq__35944 = G__35964;
chunk__35945 = G__35965;
count__35946 = G__35966;
i__35947 = G__35967;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
var args35970 = [];
var len__8723__auto___35979 = arguments.length;
var i__8724__auto___35981 = (0);
while(true){
if((i__8724__auto___35981 < len__8723__auto___35979)){
args35970.push((arguments[i__8724__auto___35981]));

var G__35983 = (i__8724__auto___35981 + (1));
i__8724__auto___35981 = G__35983;
continue;
} else {
}
break;
}

var G__35977 = args35970.length;
switch (G__35977) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35970.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,msg),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$tag,cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs_SLASH_analysis_DASH_error,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$String,null,cljs.core.cst$sym$goog$string,null,cljs.core.cst$sym$goog,null,cljs.core.cst$sym$goog$object,null,cljs.core.cst$sym$Math,null,cljs.core.cst$sym$goog$array,null], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prefix,prefix__$1,cljs.core.cst$kw$suffix,suffix__$1,cljs.core.cst$kw$macro_DASH_present_QMARK_,!(((function (){var G__36008 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)].join(''));
var G__36009 = env__$1;
return (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(G__36008,G__36009) : cljs.analyzer.get_expander.call(null,G__36008,G__36009));
})() == null))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix))){
return null;
} else {
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env);
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))) || (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)));
}
});
cljs.analyzer.js_module_exists_QMARK_ = (function cljs$analyzer$js_module_exists_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index], null))),module);
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
var args36023 = [];
var len__8723__auto___36037 = arguments.length;
var i__8724__auto___36038 = (0);
while(true){
if((i__8724__auto___36038 < len__8723__auto___36037)){
args36023.push((arguments[i__8724__auto___36038]));

var G__36039 = (i__8724__auto___36038 + (1));
i__8724__auto___36038 = G__36039;
continue;
} else {
}
break;
}

var G__36028 = args36023.length;
switch (G__36028) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36023.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning(env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_(env,prefix))) && (!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$unquote,suffix__$1)))) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,suffix__$1) == null)) && (cljs.core.not(cljs.analyzer.js_module_exists_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''))))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve var: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
var args36047 = [];
var len__8723__auto___36053 = arguments.length;
var i__8724__auto___36054 = (0);
while(true){
if((i__8724__auto___36054 < len__8723__auto___36053)){
args36047.push((arguments[i__8724__auto___36054]));

var G__36060 = (i__8724__auto___36054 + (1));
i__8724__auto___36054 = G__36060;
continue;
} else {
}
break;
}

var G__36049 = args36047.length;
switch (G__36049) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36047.length)].join('')));

}
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name));
});

cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3;

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
var args36076 = [];
var len__8723__auto___36085 = arguments.length;
var i__8724__auto___36086 = (0);
while(true){
if((i__8724__auto___36086 < len__8723__auto___36085)){
args36076.push((arguments[i__8724__auto___36086]));

var G__36087 = (i__8724__auto___36086 + (1));
i__8724__auto___36086 = G__36087;
continue;
} else {
}
break;
}

var G__36078 = args36076.length;
switch (G__36078) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36076.length)].join('')));

}
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3(env,name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name));
});

cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,default$){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,default$);
});

cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core,ns_sym)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_sym) == null)) && (cljs.core.not(cljs.analyzer.js_module_exists_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join(''))))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_ns,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns_DASH_sym,ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__7490__auto__ = (function (){var or__7502__auto__ = !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$sym$cljs$core,cljs.core.cst$kw$defs,sym) == null));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var temp__6755__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if((temp__6755__auto__ == null)){
return false;
} else {
var mac = temp__6755__auto__;
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),cljs.core.cst$sym$cljs$core$macros);
}
}
})();
if(and__7490__auto__){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__7490__auto__;
}
});
cljs.analyzer.js_tag_QMARK_ = (function cljs$analyzer$js_tag_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",cljs.core.namespace(x))));
});
cljs.analyzer.normalize_js_tag = (function cljs$analyzer$normalize_js_tag(x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,x))){
return cljs.core.with_meta(cljs.core.cst$sym$js,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(x),/\./))),cljs.core.cst$sym$prototype)], null));
} else {
return x;
}
});
cljs.analyzer.alias__GT_type = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$object,cljs.core.cst$sym$Object,cljs.core.cst$sym$string,cljs.core.cst$sym$String,cljs.core.cst$sym$number,cljs.core.cst$sym$Number,cljs.core.cst$sym$array,cljs.core.cst$sym$Array,cljs.core.cst$sym$function,cljs.core.cst$sym$Function,cljs.core.cst$sym$boolean,cljs.core.cst$sym$Boolean,cljs.core.cst$sym$symbol,cljs.core.cst$sym$Symbol], null);
cljs.analyzer.has_extern_QMARK__STAR_ = (function cljs$analyzer$has_extern_QMARK__STAR_(var_args){
var args36113 = [];
var len__8723__auto___36125 = arguments.length;
var i__8724__auto___36126 = (0);
while(true){
if((i__8724__auto___36126 < len__8723__auto___36125)){
args36113.push((arguments[i__8724__auto___36126]));

var G__36127 = (i__8724__auto___36126 + (1));
i__8724__auto___36126 = G__36127;
continue;
} else {
}
break;
}

var G__36115 = args36113.length;
switch (G__36115) {
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36113.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var pre__$1 = (function (){var temp__6755__auto__ = cljs.core.find(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Window,cljs.core.cst$sym$prototype], null)),cljs.core.first(pre));
if((temp__6755__auto__ == null)){
return pre;
} else {
var me = temp__6755__auto__;
var temp__6755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(me)));
if((temp__6755__auto____$1 == null)){
return pre;
} else {
var tag = temp__6755__auto____$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.cst$sym$prototype], null),cljs.core.next(pre));
}
}
})();
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(pre__$1,externs,externs);
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (pre,externs,top){
while(true){
if(cljs.core.empty_QMARK_(pre)){
return true;
} else {
var x = cljs.core.first(pre);
var me = cljs.core.find(externs,x);
if(cljs.core.not(me)){
return false;
} else {
var vec__36119 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36119,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36119,(1),null);
var xmeta = cljs.core.meta(x_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Function,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(xmeta));
if(and__7490__auto__){
return cljs.core.cst$kw$ctor.cljs$core$IFn$_invoke$arity$1(xmeta);
} else {
return and__7490__auto__;
}
})())){
var or__7502__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prototype], null),cljs.core.next(pre)),externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.next(pre),externs_SINGLEQUOTE_,top);
}
} else {
var G__36132 = cljs.core.next(pre);
var G__36133 = externs_SINGLEQUOTE_;
var G__36134 = top;
pre = G__36132;
externs = G__36133;
top = G__36134;
continue;
}

}

}
break;
}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3;

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
var args36135 = [];
var len__8723__auto___36144 = arguments.length;
var i__8724__auto___36145 = (0);
while(true){
if((i__8724__auto___36145 < len__8723__auto___36144)){
args36135.push((arguments[i__8724__auto___36145]));

var G__36146 = (i__8724__auto___36145 + (1));
i__8724__auto___36145 = G__36146;
continue;
} else {
}
break;
}

var G__36139 = args36135.length;
switch (G__36139) {
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36135.length)].join('')));

}
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2(pre,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_externs));
});

cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var or__7502__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2(pre,externs);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pre)))?(function (){var x = cljs.core.first(pre);
var or__7502__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Window,cljs.core.cst$sym$prototype], null),x));
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(externs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Number], null),x));
}
})():null);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(pre))].join(''),"cljs$");
}
}
});

cljs.analyzer.has_extern_QMARK_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.js_tag = (function cljs$analyzer$js_tag(var_args){
var args36155 = [];
var len__8723__auto___36162 = arguments.length;
var i__8724__auto___36163 = (0);
while(true){
if((i__8724__auto___36163 < len__8723__auto___36162)){
args36155.push((arguments[i__8724__auto___36163]));

var G__36168 = (i__8724__auto___36163 + (1));
i__8724__auto___36163 = G__36168;
continue;
} else {
}
break;
}

var G__36157 = args36155.length;
switch (G__36157) {
case 1:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36155.length)].join('')));

}
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(pre,cljs.core.cst$kw$tag);
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2 = (function (pre,tag_type){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3(pre,tag_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_externs));
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3 = (function (pre,tag_type,externs){
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(pre,tag_type,externs,externs);
});

cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4 = (function (pre,tag_type,externs,top){
var temp__6753__auto__ = cljs.core.find(externs,cljs.core.first(pre));
if(cljs.core.truth_(temp__6753__auto__)){
var vec__36158 = temp__6753__auto__;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(1),null);
var me = vec__36158;
var tag = (function (){var G__36161 = cljs.core.meta(p);
return (tag_type.cljs$core$IFn$_invoke$arity$1 ? tag_type.cljs$core$IFn$_invoke$arity$1(G__36161) : tag_type.call(null,G__36161));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),(1))){
if(cljs.core.truth_(tag)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.analyzer.alias__GT_type.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.alias__GT_type.cljs$core$IFn$_invoke$arity$2(tag,tag) : cljs.analyzer.alias__GT_type.call(null,tag,tag)))].join(''));
} else {
return null;
}
} else {
var or__7502__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(cljs.core.next(pre),tag_type,externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$prototype], null),cljs.core.next(pre)),tag_type,cljs.core.get.cljs$core$IFn$_invoke$arity$2(top,tag),top);
}
}
} else {
return null;
}
});

cljs.analyzer.js_tag.cljs$lang$maxFixedArity = 4;

/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
var args36198 = [];
var len__8723__auto___36213 = arguments.length;
var i__8724__auto___36214 = (0);
while(true){
if((i__8724__auto___36214 < len__8723__auto___36213)){
args36198.push((arguments[i__8724__auto___36214]));

var G__36215 = (i__8724__auto___36214 + (1));
i__8724__auto___36214 = G__36215;
continue;
} else {
}
break;
}

var G__36204 = args36198.length;
switch (G__36204) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36198.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
if(("js" === cljs.core.namespace(sym))){
if(cljs.core.contains_QMARK_(locals,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)))){
cljs.analyzer.warning(cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,sym], null));
} else {
}

var pre = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),/\./)));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$externs], null),pre),cljs.core.merge,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY], 0));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sym,cljs.core.cst$kw$ns,cljs.core.cst$sym$js,cljs.core.cst$kw$tag,cljs.core.with_meta((function (){var or__7502__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1(pre);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$sym$js;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$prefix,pre], null))], null),(function (){var temp__6753__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(pre,cljs.core.cst$kw$ret_DASH_tag);
if(cljs.core.truth_(temp__6753__auto__)){
var ret_tag = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_fn_DASH_var,true,cljs.core.cst$kw$ret_DASH_tag,ret_tag], null);
} else {
return null;
}
})()], 0));
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('');
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace(sym) == null))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,ns__$1,(function (){var or__7502__auto__ = (function (){var and__7490__auto__ = cljs.analyzer.js_module_exists_QMARK_(ns__$1);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,ns__$1], null));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns__$1);
}
})());
if(!((confirm == null))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__36205_36233 = env;
var G__36206_36234 = full_ns;
var G__36207_36235 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__36205_36233,G__36206_36234,G__36207_36235) : confirm.call(null,G__36205_36233,G__36206_36234,G__36207_36235));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))].join('')),cljs.core.cst$kw$ns,full_ns], null)], 0));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var temp__6755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,prefix);
if((temp__6755__auto__ == null)){
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var temp__6755__auto____$1 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$imports,prefix);
if((temp__6755__auto____$1 == null)){
var temp__6755__auto____$2 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,prefix);
if((temp__6755__auto____$2 == null)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",prefix))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix):cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''),suffix)),cljs.core.cst$kw$ns,prefix], null)], 0));
} else {
var info = temp__6755__auto____$2;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.cst$kw$ns,cur_ns], null)], 0));
}
} else {
var full_ns = temp__6755__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),suffix)], null);
}
} else {
var lb__$1 = temp__6755__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
}
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym) == null))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$uses,sym);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.cst$kw$ns,full_ns], null)], 0));
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$renames,sym) == null))){
var qualified_symbol = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$renames,sym);
var full_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym__$1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,qualified_symbol,cljs.core.cst$kw$ns,full_ns], null)], 0));
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym) == null))){
var G__36307 = env;
var G__36308 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym);
var G__36309 = confirm;
env = G__36307;
sym = G__36308;
confirm = G__36309;
continue;
} else {
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.cst$kw$defs,sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.core.cst$sym$cljs$core:cur_ns
));
if(!((confirm == null))){
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,full_ns,sym) : confirm.call(null,env,full_ns,sym));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.cst$kw$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.cst$kw$ns,full_ns], null)], 0));

}
}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__36350 = cljs.core.seq(names);
var chunk__36351 = null;
var count__36352 = (0);
var i__36353 = (0);
while(true){
if((i__36353 < count__36352)){
var name = chunk__36351.cljs$core$IIndexed$_nth$arity$2(null,i__36353);
var env_36370__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_36371 = cljs.analyzer.resolve_existing_var(env_36370__$1,name);
if(cljs.core.truth_((function (){var and__7490__auto__ = ev_36371;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_36371));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_36370__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_36371,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_36371)], null));
} else {
}

var G__36388 = seq__36350;
var G__36389 = chunk__36351;
var G__36390 = count__36352;
var G__36391 = (i__36353 + (1));
seq__36350 = G__36388;
chunk__36351 = G__36389;
count__36352 = G__36390;
i__36353 = G__36391;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__36350);
if(temp__6753__auto__){
var seq__36350__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36350__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__36350__$1);
var G__36395 = cljs.core.chunk_rest(seq__36350__$1);
var G__36396 = c__8413__auto__;
var G__36397 = cljs.core.count(c__8413__auto__);
var G__36398 = (0);
seq__36350 = G__36395;
chunk__36351 = G__36396;
count__36352 = G__36397;
i__36353 = G__36398;
continue;
} else {
var name = cljs.core.first(seq__36350__$1);
var env_36399__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_36400 = cljs.analyzer.resolve_existing_var(env_36399__$1,name);
if(cljs.core.truth_((function (){var and__7490__auto__ = ev_36400;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_36400));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_36399__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_36400,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_36400)], null));
} else {
}

var G__36407 = cljs.core.next(seq__36350__$1);
var G__36408 = null;
var G__36409 = (0);
var G__36410 = (0);
seq__36350 = G__36407;
chunk__36351 = G__36408;
count__36352 = G__36409;
i__36353 = G__36410;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces);
if(!((cljs.core.namespace(sym) == null))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2(env,ns__$2);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if(!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null)) == null))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$use_DASH_macros,sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym], null));
} else {
if(!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null)) == null))){
var qualified_symbol = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$rename_DASH_macros,sym], null));
var full_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.cst$kw$macros,sym__$1], null));
} else {
var ns__$1 = ((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.cst$kw$macros,sym], null)) == null)))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?cljs.analyzer.CLJS_CORE_MACROS_SYM:null));
if(!((ns__$1 == null))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,cljs.core.cst$kw$defs,sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [cljs.core.cst$sym$_AMPERSAND_,null,cljs.core.cst$sym$case_STAR_,null,cljs.core.cst$sym$defrecord_STAR_,null,cljs.core.cst$sym$try,null,cljs.core.cst$sym$ns_STAR_,null,cljs.core.cst$sym$loop_STAR_,null,cljs.core.cst$sym$do,null,cljs.core.cst$sym$letfn_STAR_,null,cljs.core.cst$sym$if,null,cljs.core.cst$sym$new,null,cljs.core.cst$sym$ns,null,cljs.core.cst$sym$deftype_STAR_,null,cljs.core.cst$sym$let_STAR_,null,cljs.core.cst$sym$js_STAR_,null,cljs.core.cst$sym$fn_STAR_,null,cljs.core.cst$sym$recur,null,cljs.core.cst$sym$set_BANG_,null,cljs.core.cst$sym$_DOT_,null,cljs.core.cst$sym$var,null,cljs.core.cst$sym$quote,null,cljs.core.cst$sym$throw,null,cljs.core.cst$sym$def,null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer._STAR_allow_ns_STAR_ = true;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Keyword], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var temp__6755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(e);
if((temp__6755__auto__ == null)){
var temp__6755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e));
if((temp__6755__auto____$1 == null)){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e)));
} else {
var tag = temp__6755__auto____$1;
return tag;
}
} else {
var tag = temp__6755__auto__;
return tag;
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__7502__auto__ = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some(((function (methods$,c){
return (function (m){
var and__7490__auto__ = (function (){var or__7502__auto__ = (cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__7490__auto__)){
return m;
} else {
return and__7490__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
var temp__6755__auto__ = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__6755__auto__ == null)){
var temp__6755__auto____$1 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$));
if((temp__6755__auto____$1 == null)){
var temp__6755__auto____$2 = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__6755__auto____$2 == null)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap,null,cljs.core.cst$sym$cljs$core_SLASH_List,null], null), null),t);
} else {
var proto = temp__6755__auto____$2;
return proto;
}
} else {
var type = temp__6755__auto____$1;
return type;
}
} else {
var type = temp__6755__auto__;
return type;
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$not_DASH_native,null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__36575 = e;
var map__36575__$1 = ((((!((map__36575 == null)))?((((map__36575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36575):map__36575);
var map__36576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36575__$1,cljs.core.cst$kw$test);
var map__36576__$1 = ((((!((map__36576 == null)))?((((map__36576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36576):map__36576);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36576__$1,cljs.core.cst$kw$form);
var then_tag = (function (){var G__36579 = env;
var G__36580 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36579,G__36580) : cljs.analyzer.infer_tag.call(null,G__36579,G__36580));
})();
if((cljs.core.keyword_identical_QMARK_(op,cljs.core.cst$kw$constant)) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__36581 = env;
var G__36582 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36581,G__36582) : cljs.analyzer.infer_tag.call(null,G__36581,G__36582));
})();
if((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_(env,then_tag))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_(env,else_tag)))){
return cljs.core.cst$sym$clj;
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return cljs.core.cst$sym$seq;
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([else_tag], true));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__36607 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(e);
var map__36607__$1 = ((((!((map__36607 == null)))?((((map__36607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36607):map__36607);
var f = map__36607__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36607__$1,cljs.core.cst$kw$info);
var temp__6755__auto__ = (((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) === true) || (cljs.core.cst$kw$js_DASH_fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) === true))?cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(info):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info)))?cljs.core.cst$sym$js:null));
if((temp__6755__auto__ == null)){
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),cljs.core.cst$kw$op,cljs.core.cst$kw$method);
var temp__6755__auto____$1 = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if((temp__6755__auto____$1 == null)){
return cljs.analyzer.ANY_SYM;
} else {
var ret_tag = temp__6755__auto____$1;
return ret_tag;
}
} else {
var ret_tag = temp__6755__auto__;
return ret_tag;
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__6755__auto__ = cljs.analyzer.get_tag(e);
if((temp__6755__auto__ == null)){
var G__36638 = (((cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__36638) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
var G__36639 = env;
var G__36640 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36639,G__36640) : cljs.analyzer.infer_tag.call(null,G__36639,G__36640));

break;
case "do":
var G__36641 = env;
var G__36642 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36641,G__36642) : cljs.analyzer.infer_tag.call(null,G__36641,G__36642));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
var G__36643 = env;
var G__36644 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36643,G__36644) : cljs.analyzer.infer_tag.call(null,G__36643,G__36644));

break;
case "constant":
var G__36645 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__36645)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36645)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
var G__36646 = env;
var G__36647 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36646,G__36647) : cljs.analyzer.infer_tag.call(null,G__36646,G__36647));

break;
case "var":
var temp__6755__auto____$1 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
if((temp__6755__auto____$1 == null)){
var G__36648 = env;
var G__36649 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36648,G__36649) : cljs.analyzer.infer_tag.call(null,G__36648,G__36649));
} else {
var init = temp__6755__auto____$1;
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.infer_tag.call(null,env,init));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
var G__36650 = env;
var G__36651 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__36650,G__36651) : cljs.analyzer.infer_tag.call(null,G__36650,G__36651));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
} else {
var tag = temp__6755__auto__;
return tag;
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__8533__auto__ = (function (){var G__36667 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36667) : cljs.core.atom.call(null,G__36667));
})();
var prefer_table__8534__auto__ = (function (){var G__36668 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36668) : cljs.core.atom.call(null,G__36668));
})();
var method_cache__8535__auto__ = (function (){var G__36669 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36669) : cljs.core.atom.call(null,G__36669));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__36670 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36670) : cljs.core.atom.call(null,G__36670));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function() { 
var G__36676__delegate = function (op,rest){
return op;
};
var G__36676 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__36679__i = 0, G__36679__a = new Array(arguments.length -  1);
while (G__36679__i < G__36679__a.length) {G__36679__a[G__36679__i] = arguments[G__36679__i + 1]; ++G__36679__i;}
  rest = new cljs.core.IndexedSeq(G__36679__a,0);
} 
return G__36676__delegate.call(this,op,rest);};
G__36676.cljs$lang$maxFixedArity = 1;
G__36676.cljs$lang$applyTo = (function (arglist__36680){
var op = cljs.core.first(arglist__36680);
var rest = cljs.core.rest(arglist__36680);
return G__36676__delegate(op,rest);
});
G__36676.cljs$core$IFn$_invoke$arity$variadic = G__36676__delegate;
return G__36676;
})()
;})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var env__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals);
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env__$1,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var temp__6757__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$);
if((temp__6757__auto__ == null)){
return null;
} else {
var var_ns = temp__6757__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),cljs.core.cst$kw$sym,(function (){var G__36689 = expr_env;
var G__36690 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__8436__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36689,G__36690) : cljs.analyzer.analyze.call(null,G__36689,G__36690));
})(),cljs.core.cst$kw$meta,(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$doc,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env){
return (function (p1__36681_SHARP_){
return cljs.core._conj((function (){var x__8436__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__36681_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$quote);
});})(user_meta,uks,ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env){
return (function (p1__36682_SHARP_){
return cljs.core._conj((function (){var x__8436__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__36682_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$quote);
});})(ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env))
,ks)),cljs.core.cst$kw$name,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__8436__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))),cljs.core.array_seq([cljs.core.cst$kw$test,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__8436__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$test),(function (){var x__8436__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),cljs.core.cst$kw$arglists,(function (){var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return cljs.core._conj((function (){var x__8436__auto__ = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,cljs.core.cst$kw$arglists_DASH_meta.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$quote);
})()], 0))], 0));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
})()], null);
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$var,(function (op,env,p__36742,_,___$1){
var vec__36743 = p__36742;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36743,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36743,(1),null);
var form = vec__36743;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$form,form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (op,env,p__36750,name,_){
var vec__36751 = p__36750;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(3),null);
var form = vec__36751;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_36755 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__36756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__36757 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36756,G__36757) : cljs.analyzer.analyze.call(null,G__36756,G__36757));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_36755;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_36758 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_36758;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_36759 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_36759;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$if,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,test_expr,cljs.core.cst$kw$then,then_expr,cljs.core.cst$kw$else,else_expr,cljs.core.cst$kw$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case_STAR_,(function (op,env,p__36771,name,_){
var vec__36772 = p__36771;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36772,(4),null);
var form = vec__36772;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* must switch on symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? sym)")].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* tests must be grouped in vectors"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? vector? tests)")].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var v = (function (){var _STAR_recur_frames_STAR_36775 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_36775;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__36772,___$1,sym,tests,thens,default$,form){
return (function (p1__36766_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__36772,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__36772,___$1,sym,tests,thens,default$,form))
,p1__36766_SHARP_);
});})(expr_env,v,vec__36772,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__36772,___$1,sym,tests,thens,default$,form){
return (function (p1__36767_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__36767_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__36767_SHARP_));
});})(expr_env,v,tests__$1,vec__36772,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__36772,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__7502__auto__ = cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var and__7490__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(t));
if(and__7490__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__7490__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__36772,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* tests must be numbers, strings, or constants"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn [t] (or (-> t :info :const) (and (= :constant (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$case_STAR_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$v,v,cljs.core.cst$kw$tests,tests__$1,cljs.core.cst$kw$thens,thens__$1,cljs.core.cst$kw$default,default$__$1,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$throw,(function (op,env,p__36828,name,_){
var vec__36829 = p__36828;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829,(1),null);
var form = vec__36829;
var throw_expr = (function (){var _STAR_recur_frames_STAR_36835 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__36836 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__36837 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36836,G__36837) : cljs.analyzer.analyze.call(null,G__36836,G__36837));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_36835;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$throw,cljs.core.cst$kw$form,form,cljs.core.cst$kw$throw,throw_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$try,(function (op,env,p__36860,name,_){
var vec__36861 = p__36860;
var seq__36862 = cljs.core.seq(vec__36861);
var first__36863 = cljs.core.first(seq__36862);
var seq__36862__$1 = cljs.core.next(seq__36862);
var ___$1 = first__36863;
var body = seq__36862__$1;
var form = vec__36861;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),((function (vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form){
return (function (p1__36843_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,p1__36843_SHARP_)){
return cljs.core.cst$kw$return;
} else {
return p1__36843_SHARP_;
}
});})(vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form){
return (function (p1__36844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__36844_SHARP_),cljs.core.cst$sym$catch);
});})(catchenv,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form){
return (function (p1__36845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__36845_SHARP_),cljs.core.cst$kw$default);
});})(catchenv,catch_QMARK_,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form){
return (function (p1__36846_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__36846_SHARP_),cljs.core.cst$sym$finally);
});})(catchenv,catch_QMARK_,default_QMARK_,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form))
);
var map__36870 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$start,cljs.core.cst$kw$forms,body,cljs.core.cst$kw$body,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$dblock,null,cljs.core.cst$kw$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__36874 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser);
var seq__36875 = cljs.core.seq(vec__36874);
var first__36876 = cljs.core.first(seq__36875);
var seq__36875__$1 = cljs.core.next(seq__36875);
var form__$1 = first__36876;
var forms_STAR_ = seq__36875__$1;
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$forms,forms_STAR_);
var G__36881 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__36881) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__36918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$catches);
parser = G__36918;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__36919 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__36919;
continue;
} else {
var G__36920 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),cljs.core.conj,form__$1);
parser = G__36920;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__36921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$dblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$finally], 0));
parser = G__36921;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__36925 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cblocks], null),cljs.core.conj,form__$1);
parser = G__36925;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__36926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__36926;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__36927 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$fblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$done], 0));
parser = G__36927;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__36870__$1 = ((((!((map__36870 == null)))?((((map__36870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36870):map__36870);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,cljs.core.cst$kw$body);
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,cljs.core.cst$kw$cblocks);
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,cljs.core.cst$kw$dblock);
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36870__$1,cljs.core.cst$kw$fblock);
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__36893 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__36894 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36893,G__36894) : cljs.analyzer.analyze.call(null,G__36893,G__36894));
})():null);
var e = (cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.seq(cblocks);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__6751__auto__ = dblock;
if(cljs.core.truth_(temp__6751__auto__)){
var vec__36898 = temp__6751__auto__;
var seq__36899 = cljs.core.seq(vec__36898);
var first__36900 = cljs.core.first(seq__36899);
var seq__36899__$1 = cljs.core.next(seq__36899);
var ___$2 = first__36900;
var first__36900__$1 = cljs.core.first(seq__36899__$1);
var seq__36899__$2 = cljs.core.next(seq__36899__$1);
var ___$3 = first__36900__$1;
var first__36900__$2 = cljs.core.first(seq__36899__$2);
var seq__36899__$3 = cljs.core.next(seq__36899__$2);
var name__$1 = first__36900__$2;
var cb = seq__36899__$3;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = name__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__8436__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__36870,map__36870__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form){
return (function (p__36904){
var vec__36905 = p__36904;
var seq__36906 = cljs.core.seq(vec__36905);
var first__36907 = cljs.core.first(seq__36906);
var seq__36906__$1 = cljs.core.next(seq__36906);
var ___$2 = first__36907;
var first__36907__$1 = cljs.core.first(seq__36906__$1);
var seq__36906__$2 = cljs.core.next(seq__36906__$1);
var type = first__36907__$1;
var first__36907__$2 = cljs.core.first(seq__36906__$2);
var seq__36906__$3 = cljs.core.next(seq__36906__$2);
var name__$1 = first__36907__$2;
var cb = seq__36906__$3;
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't qualify symbol in catch"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (namespace name))")].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),(function (){var x__8436__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = name__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cb], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__36870,map__36870__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__36861,seq__36862,first__36863,seq__36862__$1,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__8436__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))):default$);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,e,cljs.core.cst$kw$line,cljs.analyzer.get_line(e,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__36913 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,cljs.core.cst$kw$locals,locals__$1);
var G__36914 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36913,G__36914) : cljs.analyzer.analyze.call(null,G__36913,G__36914));
})():null);
var try$ = (function (){var G__36915 = (cljs.core.truth_((function (){var or__7502__auto__ = e;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__36916 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36915,G__36916) : cljs.analyzer.analyze.call(null,G__36915,G__36916));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$try,cljs.core.cst$kw$form,form,cljs.core.cst$kw$try,try$,cljs.core.cst$kw$finally,finally$,cljs.core.cst$kw$name,e,cljs.core.cst$kw$catch,catch$,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$def,(function (op,env,form,_,___$1){
var pfn = (function() {
var G__36978 = null;
var G__36978__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym], null);
});
var G__36978__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$init,init], null);
});
var G__36978__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$init,init], null);
});
G__36978 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__36978__2.call(this,___$2,sym);
case 3:
return G__36978__3.call(this,___$2,sym,doc);
case 4:
return G__36978__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36978.cljs$core$IFn$_invoke$arity$2 = G__36978__2;
G__36978.cljs$core$IFn$_invoke$arity$3 = G__36978__3;
G__36978.cljs$core$IFn$_invoke$arity$4 = G__36978__4;
return G__36978;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta(sym);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = cljs.analyzer.valid_proto(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
var dynamic = cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var sym_ns = cljs.core.namespace(sym);
var sym__$1 = (cljs.core.truth_((function (){var and__7490__auto__ = sym_ns;
if(cljs.core.truth_(and__7490__auto__)){
return !(cljs.core.symbol_identical_QMARK_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym_ns),ns_name));
} else {
return and__7490__auto__;
}
})())?(function(){throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't def ns-qualified name in namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns)].join(''))})():((!((sym_ns == null)))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)):sym
));
if(!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns], null)) == null))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join('')),cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''))], null));
} else {
}

if(!((cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym__$1)) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__6757__auto___36981 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if((temp__6757__auto___36981 == null)){
} else {
var doc_36982 = temp__6757__auto___36981;
if(typeof doc_36982 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
}

var temp__6757__auto___36983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__6757__auto___36983 == null)){
} else {
var v_36984 = temp__6757__auto___36983;
if(cljs.core.truth_((function (){var and__7490__auto__ = !(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__7490__auto__){
var and__7490__auto____$1 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_36984));
if(and__7490__auto____$1){
var and__7490__auto____$2 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__7490__auto____$2){
var and__7490__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__7490__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_file_defs_STAR_) : cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_)),sym__$1);
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
})())){
cljs.analyzer.warning(cljs.core.cst$kw$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(v_36984)], null));
} else {
}
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

var env__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.cst$sym$cljs$core)) && (cljs.analyzer.core_name_QMARK_(env,sym__$1))) || (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$uses,sym__$1], null)) == null))))?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym__$1);
var conj_to_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
cljs.analyzer.warning(cljs.core.cst$kw$redef,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$ns,cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.cst$kw$ns_DASH_name,ns_name], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$excludes], null),conj_to_set,cljs.core.array_seq([sym__$1], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes], null),conj_to_set,sym__$1);
})():env);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_(args,cljs.core.cst$kw$init))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),sym_meta,((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR_36965 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var _STAR_allow_ns_STAR_36969 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{var G__36970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__36971 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args);
var G__36972 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__36970,G__36971,G__36972) : cljs.analyzer.analyze.call(null,G__36970,G__36971,G__36972));
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_36969;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_36965;
}})()
:null);
var fn_var_QMARK_ = (!((init_expr == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$fn));
var tag__$1 = ((fn_var_QMARK_)?(function (){var or__7502__auto__ = cljs.core.cst$kw$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return tag;
}
})():(function (){var or__7502__auto__ = tag;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
}
})());
var export_as = (function (){var temp__6753__auto__ = cljs.core.cst$kw$export.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
if(cljs.core.truth_(temp__6753__auto__)){
var export_val = temp__6753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__7502__auto__ = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
}
})();
var temp__6757__auto___37003 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__6757__auto___37003 == null)){
} else {
var v_37004 = temp__6757__auto___37003;
if((cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1)))) && ((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_37004) === true) && (!(fn_var_QMARK_)))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym__$1], null));
} else {
}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),(function (){var G__36973 = sym_meta;
if(cljs.core.truth_(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36973,cljs.core.cst$kw$test,true);
} else {
return G__36973;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$meta,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,cljs.core.cst$kw$test),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$1)),cljs.core.cst$sym$cljs$core)){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,doc], null):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,protocol], null):null),(function (){var temp__6753__auto__ = cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1));
if(cljs.core.truth_(temp__6753__auto__)){
var protocol_symbol = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol_DASH_symbol,protocol_symbol,cljs.core.cst$kw$info,cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),cljs.core.cst$kw$impls,cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1){
return (function (p1__36958_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__36958_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns,sym_ns,sym__$1))
,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$fn_DASH_var,cljs.core.not(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(sym_meta)),cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__6755__auto__ = cljs.core.cst$kw$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__6755__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,params,cljs.core.cst$kw$arglists,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
} else {
var top_fn_meta = temp__6755__auto__;
return top_fn_meta;
}
})()], 0));
})():null),(((fn_var_QMARK_) && (!((tag__$1 == null))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):(cljs.core.truth_(tag__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null):null))], 0)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$def,cljs.core.cst$kw$form,form,cljs.core.cst$kw$name,var_name,cljs.core.cst$kw$var,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36974 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$def_DASH_var,true);
var G__36975 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36974,G__36975) : cljs.analyzer.analyze.call(null,G__36974,G__36975));
})(),cljs.core.cst$kw$op,cljs.core.cst$kw$var),cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$init,init_expr], null),((cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var_DASH_ast,cljs.analyzer.var_ast(env__$1,sym__$1)], null):null),(function (){var temp__6757__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__6757__auto__ == null)){
return null;
} else {
var test = temp__6757__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,(function (){var G__36976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__36977 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__36976,G__36977) : cljs.analyzer.analyze.call(null,G__36976,G__36977));
})()], null);
}
})(),((!((tag__$1 == null)))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),((!((export_as == null)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$export,export_as], null):null),((!((init_expr == null)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__37036,name){
var vec__37037 = p__37036;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037,(1),null);
if(cljs.core.truth_(cljs.core.namespace(name))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't use qualified name as parameter: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line(name,env);
var column = cljs.analyzer.get_col(name,env);
var nmeta = cljs.core.meta(name);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = ((!((locals == null)))?(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name)):null);
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null)], 0));
var param = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow],[name,true,cljs.core.cst$kw$var,env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_37090 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37090;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__37103 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return,cljs.core.array_seq([cljs.core.cst$kw$locals,locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
var expr = cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames);
var recurs = (function (){var G__37106 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37106) : cljs.core.deref.call(null,G__37106));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$params,params,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,fixed_arity,cljs.core.cst$kw$type,type,cljs.core.cst$kw$form,form,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$recurs,recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if(!((name == null))){
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_globals,name], null)):null);
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_self_DASH_name,true,cljs.core.cst$kw$fn_DASH_scope,fn_scope,cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$shadow,shadow__$1], null)], null);
var tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
var ret_tag = ((!((tag == null)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag], null):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name_var,ret_tag], 0));
} else {
return null;
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37114_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__37114_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_37116 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_37116;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fn_STAR_,(function (op,env,p__37127,name,_){
var vec__37128 = p__37127;
var seq__37129 = cljs.core.seq(vec__37128);
var first__37130 = cljs.core.first(seq__37129);
var seq__37129__$1 = cljs.core.next(seq__37129);
var ___$1 = first__37130;
var args = seq__37129__$1;
var form = vec__37128;
var named_fn_QMARK_ = (cljs.core.first(args) instanceof cljs.core.Symbol);
var vec__37131 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37131,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37131,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?(function (){var x__8436__auto__ = meths;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})():meths);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var(env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_scope], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (named_fn_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta(form);
var type = cljs.core.cst$kw$cljs$analyzer_SLASH_type.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count(meths__$1) > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr):env__$1);
var menv__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([menv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol_DASH_impl,proto_impl,cljs.core.cst$kw$protocol_DASH_inline,proto_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (named_fn_QMARK_,vec__37131,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__37128,seq__37129,first__37130,seq__37129__$1,___$1,args,form){
return (function (p1__37126_SHARP_){
var _STAR_allow_ns_STAR_37134 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__37126_SHARP_,type);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_37134;
}});})(named_fn_QMARK_,vec__37131,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__37128,seq__37129,first__37130,seq__37129__$1,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$max_DASH_fixed_DASH_arity,methods$));
var variadic = cljs.core.boolean$(cljs.core.some(cljs.core.cst$kw$variadic,methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.array_seq([variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa,cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$)], 0)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?(function (){var _STAR_allow_ns_STAR_37135 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_methods_pass2(menv__$1,locals__$2,type,meths__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_37135;
}})():methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.cst$kw$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$loop_DASH_lets,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$methods,cljs.core.cst$kw$recur_DASH_frames,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$jsdoc],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,cljs.core.cst$kw$fn,env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,cljs.core.cst$sym$function,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_37142 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variadic,methods$__$1);
var variadic_params_37143 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_37142)));
var param_counts_37144 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$params),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_37142))){
cljs.analyzer.warning(cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(!(((variadic_params_37143 === (0))) || ((variadic_params_37143 === ((1) + mfa))))){
cljs.analyzer.warning(cljs.core.cst$kw$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_37144),param_counts_37144)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$letfn_STAR_,(function (op,env,p__37147,name,_){
var vec__37148 = p__37147;
var seq__37149 = cljs.core.seq(vec__37148);
var first__37150 = cljs.core.first(seq__37149);
var seq__37149__$1 = cljs.core.next(seq__37149);
var ___$1 = first__37150;
var first__37150__$1 = cljs.core.first(seq__37149__$1);
var seq__37149__$2 = cljs.core.next(seq__37149__$1);
var bindings = first__37150__$1;
var exprs = seq__37149__$2;
var form = vec__37148;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__37152 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__37148,seq__37149,first__37150,seq__37149__$1,___$1,first__37150__$1,seq__37149__$2,bindings,exprs,form){
return (function (p__37158,n){
var vec__37159 = p__37158;
var map__37162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37159,(0),null);
var map__37162__$1 = ((((!((map__37162 == null)))?((((map__37162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37162):map__37162);
var env__$1 = map__37162__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37162__$1,cljs.core.cst$kw$locals);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37159,(1),null);
var ret_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_37164 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__37168 = env__$1;
var G__37169 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37168,G__37169) : cljs.analyzer.analyze.call(null,G__37168,G__37169));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_37164;
}})();
var be = (function (){var G__37170 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$method_DASH_params,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[n,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37170,cljs.core.cst$kw$ret_DASH_tag,ret_tag);
} else {
return G__37170;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__37148,seq__37149,first__37150,seq__37149__$1,___$1,first__37150__$1,seq__37149__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var vec__37155 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__37152,meth_env,bes,meth_env__$1,vec__37148,seq__37149,first__37150,seq__37149__$1,___$1,first__37150__$1,seq__37149__$2,bindings,exprs,form){
return (function (p__37171,p__37172){
var vec__37173 = p__37171;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(1),null);
var map__37176 = p__37172;
var map__37176__$1 = ((((!((map__37176 == null)))?((((map__37176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37176):map__37176);
var be = map__37176__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37176__$1,cljs.core.cst$kw$name);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37176__$1,cljs.core.cst$kw$shadow);
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),shadow);
var fexpr = (function (){var G__37178 = env__$1;
var G__37179 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37178,G__37179) : cljs.analyzer.analyze.call(null,G__37178,G__37179));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,cljs.core.cst$kw$init,fexpr,cljs.core.array_seq([cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__37152,meth_env,bes,meth_env__$1,vec__37148,seq__37149,first__37150,seq__37149__$1,___$1,first__37150__$1,seq__37149__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37155,(1),null);
var expr = (function (){var G__37180 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__37181 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37180,G__37181) : cljs.analyzer.analyze.call(null,G__37180,G__37181));
})();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$letfn,cljs.core.cst$kw$bindings,bes__$1,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37198_SHARP_){
var G__37201 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__37202 = p1__37198_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37201,G__37202) : cljs.analyzer.analyze.call(null,G__37201,G__37202));
}),cljs.core.butlast(exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_37206 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37206;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$do,(function (op,env,p__37207,_,___$1){
var vec__37208 = p__37207;
var seq__37209 = cljs.core.seq(vec__37208);
var first__37210 = cljs.core.first(seq__37209);
var seq__37209__$1 = cljs.core.next(seq__37209);
var ___$2 = first__37210;
var exprs = seq__37209__$1;
var form = vec__37208;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__37211 = env;
var G__37212 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37211,G__37212) : cljs.analyzer.analyze.call(null,G__37211,G__37212));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return));
var ret = (function (){var G__37213 = ret_env;
var G__37214 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37213,G__37214) : cljs.analyzer.analyze.call(null,G__37213,G__37214));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_37216 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_37216;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var temp__6755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if((temp__6755__auto__ == null)){
var temp__6755__auto____$1 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if((temp__6755__auto____$1 == null)){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(init_expr));
} else {
var tag = temp__6755__auto____$1;
return tag;
}
} else {
var tag = temp__6755__auto__;
return tag;
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var temp__6755__auto__ = cljs.core.first(bindings__$1);
if((temp__6755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
} else {
var vec__37236 = temp__6755__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(1),null);
if(cljs.core.truth_((function (){var or__7502__auto__ = !((cljs.core.namespace(name) == null));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var G__37241 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var G__37242 = ".";
return goog.string.contains(G__37241,G__37242);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid local name: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$init,cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[init_expr,name,true,cljs.core.cst$kw$var,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,(function (){var G__37243 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__37243) : name.call(null,G__37243));
})()], null),cljs.analyzer.get_let_tag(name,init_expr),(function (){var G__37244 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__37244) : name.call(null,G__37244));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__37259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__37260 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null),be__$1);
var G__37261 = cljs.core.next(bindings__$1);
bes = G__37259;
env = G__37260;
bindings__$1 = G__37261;
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_37263 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37263;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__37266 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__37267 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37266,G__37267) : cljs.analyzer.analyze.call(null,G__37266,G__37267));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_37279 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_37280 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_37280;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37279;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__37284,is_loop){
var vec__37291 = p__37284;
var seq__37292 = cljs.core.seq(vec__37291);
var first__37293 = cljs.core.first(seq__37292);
var seq__37292__$1 = cljs.core.next(seq__37292);
var _ = first__37293;
var first__37293__$1 = cljs.core.first(seq__37292__$1);
var seq__37292__$2 = cljs.core.next(seq__37292__$1);
var bindings = first__37293__$1;
var exprs = seq__37292__$2;
var form = vec__37291;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__37294 = cljs.analyzer.analyze_let_bindings(encl_env,bindings);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37294,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,bes,cljs.core.cst$kw$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?cljs.core.cst$kw$loop:cljs.core.cst$kw$let);
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,encl_env,cljs.core.cst$kw$bindings,bes,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,children], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$let_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$loop_STAR_,(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$recur,(function (op,env,p__37308,_,___$1){
var vec__37309 = p__37308;
var seq__37310 = cljs.core.seq(vec__37309);
var first__37311 = cljs.core.first(seq__37310);
var seq__37310__$1 = cljs.core.next(seq__37310);
var ___$2 = first__37311;
var exprs = seq__37310__$1;
var form = vec__37309;
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_37312 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_37312,context,frame,vec__37309,seq__37310,first__37311,seq__37310__$1,___$2,exprs,form){
return (function (p1__37302_SHARP_){
var G__37313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37314 = p1__37302_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37313,G__37314) : cljs.analyzer.analyze.call(null,G__37313,G__37314));
});})(_STAR_recur_frames_STAR_37312,context,frame,vec__37309,seq__37310,first__37311,seq__37310__$1,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37312;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__37315_37342 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(frame);
var G__37316_37343 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37315_37342,G__37316_37343) : cljs.core.reset_BANG_.call(null,G__37315_37342,G__37316_37343));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$recur,cljs.core.cst$kw$form,form], null),cljs.core.cst$kw$frame,frame,cljs.core.array_seq([cljs.core.cst$kw$exprs,exprs__$1,cljs.core.cst$kw$children,exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$quote,(function (_,env,p__37350,___$1,___$2){
var vec__37351 = p__37350;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37351,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37351,(1),null);
var G__37354 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$quoted_QMARK_,true);
var G__37355 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37354,G__37355) : cljs.analyzer.analyze.call(null,G__37354,G__37355));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$new,(function (_,env,p__37361,___$1,___$2){
var vec__37362 = p__37361;
var seq__37363 = cljs.core.seq(vec__37362);
var first__37364 = cljs.core.first(seq__37363);
var seq__37363__$1 = cljs.core.next(seq__37363);
var ___$3 = first__37364;
var first__37364__$1 = cljs.core.first(seq__37363__$1);
var seq__37363__$2 = cljs.core.next(seq__37363__$1);
var ctor = first__37364__$1;
var args = seq__37363__$2;
var form = vec__37362;
var _STAR_recur_frames_STAR_37365 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ctorexpr),cljs.core.cst$kw$var))?cljs.analyzer.resolve_existing_var(env,ctor):null);
var record_args = (cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.cst$kw$record.cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__7490__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_37365,vec__37362,seq__37363,first__37364,seq__37363__$1,___$3,first__37364__$1,seq__37363__$2,ctor,args,form){
return (function (p1__37356_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__37356_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__37356_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_37365,vec__37362,seq__37363,first__37364,seq__37363__$1,___$3,first__37364__$1,seq__37363__$2,ctor,args,form))
,args)),record_args);
var known_num_fields = cljs.core.cst$kw$num_DASH_fields.cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if((cljs.core.not(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)))) && (!((known_num_fields == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$argc,argc,cljs.core.cst$kw$ctor,ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$new,cljs.core.cst$kw$form,form,cljs.core.cst$kw$ctor,ctorexpr,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),cljs.core.cst$kw$tag,(function (){var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__7502__auto__ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Object,cljs.core.cst$sym$object,cljs.core.cst$sym$js_SLASH_String,cljs.core.cst$sym$string,cljs.core.cst$sym$js_SLASH_Array,cljs.core.cst$sym$array,cljs.core.cst$sym$js_SLASH_Number,cljs.core.cst$sym$number,cljs.core.cst$sym$js_SLASH_Function,cljs.core.cst$sym$function,cljs.core.cst$sym$js_SLASH_Boolean,cljs.core.cst$sym$boolean], null).call(null,name);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37365;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$set_BANG_,(function (_,env,p__37393,___$1,___$2){
var vec__37394 = p__37393;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37394,(3),null);
var form = vec__37394;
var vec__37397 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__8436__auto__ = target;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37397,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37397,(1),null);
var _STAR_recur_frames_STAR_37400 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_)) && ((val__$1 === true) || (val__$1 === false)))?(function (){
cljs.core._STAR_unchecked_if_STAR_ = val__$1;

return cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if;
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,cljs.core.cst$sym$_STAR_warn_DASH_on_DASH_infer_STAR_))?(function (){
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_cljs_warnings_STAR_,cljs.core.cst$kw$infer_DASH_warning,true);

return cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_warn_DASH_on_DASH_infer;
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(!((cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),target__$1)) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_37469 = (function (){var G__37401 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__37401) : target__$1.call(null,G__37401));
})();
if(cljs.core.truth_((function (){var or__7502__auto__ = (local_37469 == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(local_37469);
if(cljs.core.truth_(and__7490__auto__)){
var or__7502__auto____$1 = cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(local_37469);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_37469);
if(cljs.core.truth_(or__7502__auto____$2)){
return or__7502__auto____$2;
} else {
return cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_37469);
}
}
} else {
return and__7490__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var targetexpr = (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(cljs.core.truth_(cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(targetexpr))){
return targetexpr;
} else {
return null;
}
})():null)
)));
var valexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(cljs.core.truth_(targetexpr)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_warn_DASH_on_DASH_infer,null,cljs.core.cst$kw$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if,null], null), null).call(null,targetexpr) == null))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$no_DASH_op], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$set_BANG_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$val,valexpr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37400;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? dep)"));
}

var js_index = cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
var temp__6755__auto__ = cljs.core.find(js_index,cljs.core.name(dep));
if((temp__6755__auto__ == null)){
return false;
} else {
var vec__37515 = temp__6755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(0),null);
var map__37518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(1),null);
var map__37518__$1 = ((((!((map__37518 == null)))?((((map__37518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37518):map__37518);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,cljs.core.cst$kw$foreign);
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var args37532 = [];
var len__8723__auto___37554 = arguments.length;
var i__8724__auto___37555 = (0);
while(true){
if((i__8724__auto___37555 < len__8723__auto___37554)){
args37532.push((arguments[i__8724__auto___37555]));

var G__37556 = (i__8724__auto___37555 + (1));
i__8724__auto___37555 = G__37556;
continue;
} else {
}
break;
}

var G__37544 = args37532.length;
switch (G__37544) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37532.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_37545 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_37545,compiler){
return (function (p1__37531_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__37531_SHARP_));
});})(_STAR_cljs_dep_set_STAR_37545,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency detected, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn* [p1__37531#] (not (contains? *cljs-dep-set* p1__37531#))) deps)")].join('')));
}

var seq__37546 = cljs.core.seq(deps);
var chunk__37547 = null;
var count__37548 = (0);
var i__37549 = (0);
while(true){
if((i__37549 < count__37548)){
var dep = chunk__37547.cljs$core$IIndexed$_nth$arity$2(null,i__37549);
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37550 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__37551 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37550,G__37551) : cljs.analyzer.error_message.call(null,G__37550,G__37551));
})());
}

var G__37568 = seq__37546;
var G__37569 = chunk__37547;
var G__37570 = count__37548;
var G__37571 = (i__37549 + (1));
seq__37546 = G__37568;
chunk__37547 = G__37569;
count__37548 = G__37570;
i__37549 = G__37571;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37546);
if(temp__6753__auto__){
var seq__37546__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37546__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37546__$1);
var G__37572 = cljs.core.chunk_rest(seq__37546__$1);
var G__37573 = c__8413__auto__;
var G__37574 = cljs.core.count(c__8413__auto__);
var G__37575 = (0);
seq__37546 = G__37572;
chunk__37547 = G__37573;
count__37548 = G__37574;
i__37549 = G__37575;
continue;
} else {
var dep = cljs.core.first(seq__37546__$1);
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37552 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__37553 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37552,G__37553) : cljs.analyzer.error_message.call(null,G__37552,G__37553));
})());
}

var G__37586 = cljs.core.next(seq__37546__$1);
var G__37587 = null;
var G__37588 = (0);
var G__37589 = (0);
seq__37546 = G__37586;
chunk__37547 = G__37587;
count__37548 = G__37588;
i__37549 = G__37589;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_37545;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,lib,cljs.core.cst$kw$defs,sym], null),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found),cljs.core.cst$kw$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib,cljs.core.cst$kw$group),cljs.core.cst$kw$goog))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib,cljs.core.cst$kw$closure_DASH_lib)));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
return cljs.analyzer.missing_use_QMARK_(lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
var the_ns = cljs.core.find_macros_ns(lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym) == null));
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(sym));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var the_ns = cljs.core.find_macros_ns(lib);
return ((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37598){
var vec__37599 = p__37598;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599,(1),null);
return cljs.analyzer.missing_use_QMARK_(lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37611){
var vec__37612 = p__37611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37612,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37612,(1),null);
return cljs.analyzer.missing_rename_QMARK_(qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37625){
var vec__37626 = p__37625;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37626,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37626,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_(lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37635){
var vec__37636 = p__37635;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37636,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37636,(1),null);
return cljs.core.not(cljs.analyzer.missing_use_macro_QMARK_(lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37643){
var vec__37644 = p__37643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(1),null);
return cljs.core.not(cljs.analyzer.missing_rename_macro_QMARK_(qualified_sym));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var seq__37661 = cljs.core.seq(uses);
var chunk__37662 = null;
var count__37663 = (0);
var i__37664 = (0);
while(true){
if((i__37664 < count__37663)){
var vec__37665 = chunk__37662.cljs$core$IIndexed$_nth$arity$2(null,i__37664);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37665,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37665,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37668 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37669 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37668,G__37669) : cljs.analyzer.error_message.call(null,G__37668,G__37669));
})());
} else {
}

var G__37680 = seq__37661;
var G__37681 = chunk__37662;
var G__37682 = count__37663;
var G__37683 = (i__37664 + (1));
seq__37661 = G__37680;
chunk__37662 = G__37681;
count__37663 = G__37682;
i__37664 = G__37683;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37661);
if(temp__6753__auto__){
var seq__37661__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37661__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37661__$1);
var G__37690 = cljs.core.chunk_rest(seq__37661__$1);
var G__37691 = c__8413__auto__;
var G__37692 = cljs.core.count(c__8413__auto__);
var G__37693 = (0);
seq__37661 = G__37690;
chunk__37662 = G__37691;
count__37663 = G__37692;
i__37664 = G__37693;
continue;
} else {
var vec__37671 = cljs.core.first(seq__37661__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37671,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37671,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37674 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37675 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37674,G__37675) : cljs.analyzer.error_message.call(null,G__37674,G__37675));
})());
} else {
}

var G__37698 = cljs.core.next(seq__37661__$1);
var G__37699 = null;
var G__37700 = (0);
var G__37701 = (0);
seq__37661 = G__37698;
chunk__37662 = G__37699;
count__37663 = G__37700;
i__37664 = G__37701;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
var args37702 = [];
var len__8723__auto___37719 = arguments.length;
var i__8724__auto___37720 = (0);
while(true){
if((i__8724__auto___37720 < len__8723__auto___37719)){
args37702.push((arguments[i__8724__auto___37720]));

var G__37721 = (i__8724__auto___37720 + (1));
i__8724__auto___37720 = G__37721;
continue;
} else {
}
break;
}

var G__37704 = args37702.length;
switch (G__37704) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37702.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var seq__37705_37723 = cljs.core.seq(use_macros);
var chunk__37706_37724 = null;
var count__37707_37725 = (0);
var i__37708_37726 = (0);
while(true){
if((i__37708_37726 < count__37707_37725)){
var vec__37709_37727 = chunk__37706_37724.cljs$core$IIndexed$_nth$arity$2(null,i__37708_37726);
var sym_37728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709_37727,(0),null);
var lib_37729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709_37727,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_37729,sym_37728))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37712 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37713 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_37729,cljs.core.cst$kw$sym,sym_37728], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37712,G__37713) : cljs.analyzer.error_message.call(null,G__37712,G__37713));
})());
} else {
}

var G__37731 = seq__37705_37723;
var G__37732 = chunk__37706_37724;
var G__37733 = count__37707_37725;
var G__37734 = (i__37708_37726 + (1));
seq__37705_37723 = G__37731;
chunk__37706_37724 = G__37732;
count__37707_37725 = G__37733;
i__37708_37726 = G__37734;
continue;
} else {
var temp__6753__auto___37736 = cljs.core.seq(seq__37705_37723);
if(temp__6753__auto___37736){
var seq__37705_37737__$1 = temp__6753__auto___37736;
if(cljs.core.chunked_seq_QMARK_(seq__37705_37737__$1)){
var c__8413__auto___37738 = cljs.core.chunk_first(seq__37705_37737__$1);
var G__37739 = cljs.core.chunk_rest(seq__37705_37737__$1);
var G__37740 = c__8413__auto___37738;
var G__37741 = cljs.core.count(c__8413__auto___37738);
var G__37742 = (0);
seq__37705_37723 = G__37739;
chunk__37706_37724 = G__37740;
count__37707_37725 = G__37741;
i__37708_37726 = G__37742;
continue;
} else {
var vec__37714_37743 = cljs.core.first(seq__37705_37737__$1);
var sym_37744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714_37743,(0),null);
var lib_37745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714_37743,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_37745,sym_37744))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37717 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37718 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_37745,cljs.core.cst$kw$sym,sym_37744], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37717,G__37718) : cljs.analyzer.error_message.call(null,G__37717,G__37718));
})());
} else {
}

var G__37748 = cljs.core.next(seq__37705_37737__$1);
var G__37749 = null;
var G__37750 = (0);
var G__37751 = (0);
seq__37705_37723 = G__37748;
chunk__37706_37724 = G__37749;
count__37707_37725 = G__37750;
i__37708_37726 = G__37751;
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses(cljs.analyzer.missing_use_macros(missing_uses,env),env);

return cljs.analyzer.inferred_use_macros(missing_uses,env);
});

cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3;

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__37767,env){
var map__37775 = p__37767;
var map__37775__$1 = ((((!((map__37775 == null)))?((((map__37775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37775):map__37775);
var ast = map__37775__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,cljs.core.cst$kw$name);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,cljs.core.cst$kw$use_DASH_macros);
var missing_uses = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq(uses)))?cljs.analyzer.missing_uses(uses,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,uses,cljs.core.keys(missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__37775,map__37775__$1,ast,name,uses,use_macros){
return (function (p1__37764_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__37764_SHARP_,cljs.core.keys(missing_uses));
});})(missing_uses,maybe_macros,map__37775,map__37775__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__37775,map__37775__$1,ast,name,uses,use_macros){
return (function (p1__37765_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__37765_SHARP_,cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,missing_uses,env)], 0)),cljs.analyzer.inferred_use_macros(maybe_macros,env)], 0));
});})(missing_uses,maybe_macros,remove_missing_uses,map__37775,map__37775__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),remove_missing_uses);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__37775,map__37775__$1,ast,name,uses,use_macros){
return (function (p1__37766_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__37766_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$use_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$use_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$uses], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__37775,map__37775__$1,ast,name,uses,use_macros))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__37797,env){
var map__37802 = p__37797;
var map__37802__$1 = ((((!((map__37802 == null)))?((((map__37802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37802):map__37802);
var ast = map__37802__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37802__$1,cljs.core.cst$kw$name);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37802__$1,cljs.core.cst$kw$renames);
var missing_renames = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq(renames)))?cljs.analyzer.missing_renames(renames,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,renames,cljs.core.keys(missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros(missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__37802,map__37802__$1,ast,name,renames){
return (function (p1__37794_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__37794_SHARP_,cljs.core.keys(missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__37802,map__37802__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rename_DASH_macros], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__37802,map__37802__$1,ast,name,renames){
return (function (p1__37795_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__37795_SHARP_,missing_rename_macros], 0)),cljs.analyzer.inferred_rename_macros(maybe_macros,env)], 0));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__37802,map__37802__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),remove_missing_renames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__37802,map__37802__$1,ast,name,renames){
return (function (p1__37796_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__37796_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$rename_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$rename_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$renames], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__37802,map__37802__$1,ast,name,renames))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; offending spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([spec], 0)))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((cljs.core.first(spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,null,cljs.core.cst$kw$rename,null,cljs.core.cst$kw$refer,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return (((function (){var G__37848 = cljs.core.cst$kw$as;
var G__37849 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__37848,G__37849) : fs.call(null,G__37848,G__37849));
})() <= (1))) && (((function (){var G__37850 = cljs.core.cst$kw$refer;
var G__37851 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__37850,G__37851) : fs.call(null,G__37850,G__37851));
})() <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37892){
var vec__37893 = p__37892;
var seq__37894 = cljs.core.seq(vec__37893);
var first__37895 = cljs.core.first(seq__37894);
var seq__37894__$1 = cljs.core.next(seq__37894);
var k = first__37895;
var filters = seq__37894__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$refer_DASH_clojure)){
if(cljs.core.seq(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exclude,null,cljs.core.cst$kw$rename,null], null), null);
var xs = (function (){var fs = cljs.core.seq(filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null);
var err = !(cljs.core.even_QMARK_(cljs.core.count(filters)));
while(true){
if(err === true){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if(!((fs == null))){
var kw = cljs.core.first(fs);
if(cljs.core.truth_((valid_kws.cljs$core$IFn$_invoke$arity$1 ? valid_kws.cljs$core$IFn$_invoke$arity$1(kw) : valid_kws.call(null,kw)))){
var refs = cljs.core.second(fs);
if(!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)) && (cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,valid_kws,vec__37893,seq__37894,first__37895,seq__37894__$1,k,filters){
return (function (p1__37871_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__37871_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__37893,seq__37894,first__37895,seq__37894__$1,k,filters))
,refs))))){
var G__37910 = fs;
var G__37911 = ret;
var G__37912 = true;
fs = G__37910;
ret = G__37911;
err = G__37912;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)){
var G__37913 = cljs.core.nnext(fs);
var G__37914 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null),cljs.core.into,refs);
var G__37915 = false;
fs = G__37913;
ret = G__37914;
err = G__37915;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)){
var G__37918 = cljs.core.nnext(fs);
var G__37919 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),cljs.core.merge,refs);
var G__37920 = false;
fs = G__37918;
ret = G__37919;
err = G__37920;
continue;
} else {
return null;
}
}
}
} else {
var G__37921 = fs;
var G__37922 = ret;
var G__37923 = true;
fs = G__37921;
ret = G__37922;
err = G__37923;
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([s,xs], 0));
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY], null),args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__37925){
var vec__37932 = p__37925;
var seq__37933 = cljs.core.seq(vec__37932);
var first__37934 = cljs.core.first(seq__37933);
var seq__37933__$1 = cljs.core.next(seq__37933);
var lib = first__37934;
var filters = seq__37933__$1;
var spec = vec__37932;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_(cljs.core.count(spec)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq(filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if(!((fs == null))){
var kw = cljs.core.first(fs);
var only_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$only);
if((only_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename))){
if(!((cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([((only_QMARK_)?cljs.core.cst$kw$refer:kw)], true),ret) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second(fs);
if(!(((only_QMARK_) && (cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,only_QMARK_,vec__37932,seq__37933,first__37934,seq__37933__$1,lib,filters,spec){
return (function (p1__37924_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__37924_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__37932,seq__37933,first__37934,seq__37933__$1,lib,filters,spec))
,refs))))){
var G__37941 = fs;
var G__37942 = ret;
var G__37943 = true;
fs = G__37941;
ret = G__37942;
err = G__37943;
continue;
} else {
var G__37944 = cljs.core.nnext(fs);
var G__37945 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?cljs.core.cst$kw$refer:kw),refs], null));
var G__37946 = false;
fs = G__37944;
ret = G__37945;
err = G__37946;
continue;
}
}
} else {
var G__37947 = fs;
var G__37948 = ret;
var G__37949 = true;
fs = G__37947;
ret = G__37948;
err = G__37949;
continue;
}
} else {
if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),ret) == null))){
return ret;
} else {
var G__37950 = fs;
var G__37951 = ret;
var G__37952 = true;
fs = G__37950;
ret = G__37951;
err = G__37952;
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__37985 = env;
var G__37986 = macros_QMARK_;
var G__37987 = deps;
var G__37988 = aliases;
var G__37989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__37985;
macros_QMARK_ = G__37986;
deps = G__37987;
aliases = G__37988;
spec = G__37989;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__37969 = spec;
var seq__37970 = cljs.core.seq(vec__37969);
var first__37971 = cljs.core.first(seq__37970);
var seq__37970__$1 = cljs.core.next(seq__37970);
var lib = first__37971;
var opts = seq__37970__$1;
var vec__37972 = (function (){var temp__6755__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')], null));
if((temp__6755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__6755__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name),lib], null);
}
})();
var lib__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37972,(0),null);
var js_module_provides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37972,(1),null);
var map__37975 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__37975__$1 = ((((!((map__37975 == null)))?((((map__37975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37975):map__37975);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37975__$1,cljs.core.cst$kw$as,lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,cljs.core.cst$kw$refer);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,cljs.core.cst$kw$rename);
var referred_without_renamed = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(renamed)),referred));
var vec__37976 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require,cljs.core.cst$kw$use,cljs.core.cst$kw$rename], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(2),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(!((alias == null))){
var alias_type_38014 = (cljs.core.truth_(macros_QMARK_)?cljs.core.cst$kw$macros:cljs.core.cst$kw$fns);
var lib_SINGLEQUOTE__38015 = (function (){var G__37980 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_38014.cljs$core$IFn$_invoke$arity$1 ? alias_type_38014.cljs$core$IFn$_invoke$arity$1(G__37980) : alias_type_38014.call(null,G__37980));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__38015 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__38015))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_38014], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null)], 0));
} else {
}

if(((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((!((alias == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null)], 0))]):null),((!((referred_without_renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred_without_renamed,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))]):null),((!((renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env,macros_QMARK_,deps,aliases,spec,vec__37969,seq__37970,first__37971,seq__37970__$1,lib,opts,vec__37972,lib__$1,js_module_provides,map__37975,map__37975__$1,alias,referred,renamed,referred_without_renamed,vec__37976,rk,uk,renk){
return (function (m,p__37981){
var vec__37982 = p__37981;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(0),null);
var renamed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37982,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([original], true),referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Renamed symbol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" not referred")].join(''));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(env,macros_QMARK_,deps,aliases,spec,vec__37969,seq__37970,first__37971,seq__37970__$1,lib,opts,vec__37972,lib__$1,js_module_provides,map__37975,map__37975__$1,alias,referred,renamed,referred_without_renamed,vec__37976,rk,uk,renk))
,cljs.core.PersistentArrayMap.EMPTY,renamed)]):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38030_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38030_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spec)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38030_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),/\./))),spec]));
var seq__38050_38070 = cljs.core.seq(import_map);
var chunk__38051_38071 = null;
var count__38052_38072 = (0);
var i__38053_38073 = (0);
while(true){
if((i__38053_38073 < count__38052_38072)){
var vec__38054_38074 = chunk__38051_38071.cljs$core$IIndexed$_nth$arity$2(null,i__38053_38073);
var __38075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38054_38074,(0),null);
var spec_38076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38054_38074,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_38076__$1);

var G__38080 = seq__38050_38070;
var G__38081 = chunk__38051_38071;
var G__38082 = count__38052_38072;
var G__38083 = (i__38053_38073 + (1));
seq__38050_38070 = G__38080;
chunk__38051_38071 = G__38081;
count__38052_38072 = G__38082;
i__38053_38073 = G__38083;
continue;
} else {
var temp__6753__auto___38084 = cljs.core.seq(seq__38050_38070);
if(temp__6753__auto___38084){
var seq__38050_38085__$1 = temp__6753__auto___38084;
if(cljs.core.chunked_seq_QMARK_(seq__38050_38085__$1)){
var c__8413__auto___38086 = cljs.core.chunk_first(seq__38050_38085__$1);
var G__38087 = cljs.core.chunk_rest(seq__38050_38085__$1);
var G__38088 = c__8413__auto___38086;
var G__38089 = cljs.core.count(c__8413__auto___38086);
var G__38090 = (0);
seq__38050_38070 = G__38087;
chunk__38051_38071 = G__38088;
count__38052_38072 = G__38089;
i__38053_38073 = G__38090;
continue;
} else {
var vec__38061_38091 = cljs.core.first(seq__38050_38085__$1);
var __38092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061_38091,(0),null);
var spec_38093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061_38091,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_38093__$1);

var G__38095 = cljs.core.next(seq__38050_38085__$1);
var G__38096 = null;
var G__38097 = (0);
var G__38098 = (0);
seq__38050_38070 = G__38095;
chunk__38051_38071 = G__38096;
count__38052_38072 = G__38097;
i__38053_38073 = G__38098;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$import,import_map,cljs.core.cst$kw$require,import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__38106 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null));
var map__38106__$1 = ((((!((map__38106 == null)))?((((map__38106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38106):map__38106);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38106__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38106__$1,cljs.core.cst$kw$require_DASH_macros);
var or__7502__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([ns], true),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([ns], true),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure",cljs.core.first(segs))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.cons("cljs",cljs.core.next(segs))));
} else {
return sym;
}
});
cljs.analyzer.canonicalize_specs = (function cljs$analyzer$canonicalize_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second(quoted_spec_or_kw);
if(cljs.core.vector_QMARK_(spec)){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(canonicalize,specs);
});
cljs.analyzer.canonicalize_import_specs = (function cljs$analyzer$canonicalize_import_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_import_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second(quoted_spec_or_kw);
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(canonicalize,specs);
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__38167 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38168){
var vec__38169 = p__38168;
var seq__38170 = cljs.core.seq(vec__38169);
var first__38171 = cljs.core.first(seq__38170);
var seq__38170__$1 = cljs.core.next(seq__38170);
var k = first__38171;
var specs = seq__38170__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__38167__$1 = ((((!((map__38167 == null)))?((((map__38167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38167):map__38167);
var indexed = map__38167__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38167__$1,cljs.core.cst$kw$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include_DASH_macros,null,cljs.core.cst$kw$refer_DASH_macros,null], null), null);
var remove_from_spec = ((function (map__38167,map__38167__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__7490__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__7490__auto__){
return cljs.core.some(pred,spec);
} else {
return and__7490__auto__;
}
})())){
return spec;
} else {
var vec__38176 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38176,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38176,(1),null);
var G__38200 = pred;
var G__38201 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__38200;
spec = G__38201;
continue;
}
break;
}
});})(map__38167,map__38167__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$refer_DASH_macros)){
return cljs.core.cst$kw$refer;
} else {
return x;
}
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__38137_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null).call(null,p1__38137_SHARP_);
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rename,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_macros,null], null), null),x))));
} else {
return x;
}
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__7502__auto__ = (function (){var and__7490__auto__ = cljs.core.sequential_QMARK_(x);
if(and__7490__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = reload_spec_QMARK_(x);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__6755__auto__ = cljs.core.seq(to_macro_specs(require));
if((temp__6755__auto__ == null)){
return args;
} else {
var require_specs = temp__6755__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__6755__auto__,map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__38194 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__6755__auto__,map__38167,map__38167__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__38229 = cljs.core.seq(to_check);
var chunk__38230 = null;
var count__38231 = (0);
var i__38232 = (0);
while(true){
if((i__38232 < count__38231)){
var vec__38234 = chunk__38230.cljs$core$IIndexed$_nth$arity$2(null,i__38232);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38234,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38234,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__38245 = seq__38229;
var G__38246 = chunk__38230;
var G__38247 = count__38231;
var G__38248 = (i__38232 + (1));
seq__38229 = G__38245;
chunk__38230 = G__38246;
count__38231 = G__38247;
i__38232 = G__38248;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__38229);
if(temp__6753__auto__){
var seq__38229__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38229__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__38229__$1);
var G__38250 = cljs.core.chunk_rest(seq__38229__$1);
var G__38251 = c__8413__auto__;
var G__38252 = cljs.core.count(c__8413__auto__);
var G__38253 = (0);
seq__38229 = G__38250;
chunk__38230 = G__38251;
count__38231 = G__38252;
i__38232 = G__38253;
continue;
} else {
var vec__38239 = cljs.core.first(seq__38229__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38239,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38239,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__38268 = cljs.core.next(seq__38229__$1);
var G__38269 = null;
var G__38270 = (0);
var G__38271 = (0);
seq__38229 = G__38268;
chunk__38230 = G__38269;
count__38231 = G__38270;
i__38232 = G__38271;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.not(goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$macros")].join(''));
} else {
return name;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns,(function (_,env,p__38286,___$1,opts){
var vec__38287 = p__38286;
var seq__38288 = cljs.core.seq(vec__38287);
var first__38289 = cljs.core.first(seq__38288);
var seq__38288__$1 = cljs.core.next(seq__38288);
var ___$2 = first__38289;
var first__38289__$1 = cljs.core.first(seq__38288__$1);
var seq__38288__$2 = cljs.core.next(seq__38288__$1);
var name = first__38289__$1;
var args = seq__38288__$2;
var form = vec__38287;
if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__38290 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__38290);
} else {
return G__38290;
}
})();
var segments_38361 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_38361))){
cljs.analyzer.warning(cljs.core.cst$kw$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

if(!((cljs.core.some(cljs.analyzer.js_reserved,segments_38361) == null))){
cljs.analyzer.warning(cljs.core.cst$kw$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_38361);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = ((!((docstring == null)))?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs(((!((metadata == null)))?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var map__38293 = cljs.analyzer.parse_ns_excludes(env,args__$2);
var map__38293__$1 = ((((!((map__38293 == null)))?((((map__38293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38293):map__38293);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (m,p__38299){
var vec__38300 = p__38299;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = (function (){var G__38312 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38312) : cljs.core.atom.call(null,G__38312));
})();
var aliases = (function (){var G__38313 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38313) : cljs.core.atom.call(null,G__38313));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__38323 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38323) : cljs.core.atom.call(null,G__38323));
})();
var reload = (function (){var G__38324 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38324) : cljs.core.atom.call(null,G__38324));
})();
var reloads = (function (){var G__38325 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38325) : cljs.core.atom.call(null,G__38325));
})();
var map__38294 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (m,p__38326){
var vec__38327 = p__38326;
var seq__38328 = cljs.core.seq(vec__38327);
var first__38329 = cljs.core.first(seq__38328);
var seq__38328__$1 = cljs.core.next(seq__38328);
var k = first__38329;
var libs = seq__38328__$1;
var libspec = vec__38327;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported. Got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instead.")].join(''));
}

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(valid_forms) : cljs.core.deref.call(null,valid_forms)).call(null,k))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Only one "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,k)){
} else {
if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs) == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs) == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__6753__auto___38390 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__38327,seq__38328,first__38329,seq__38328__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (p1__38275_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38275_SHARP_));
});})(vec__38327,seq__38328,first__38329,seq__38328__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,libs));
if(temp__6753__auto___38390){
var xs_38394 = temp__6753__auto___38390;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_38394),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_38394,temp__6753__auto___38390,vec__38327,seq__38328,first__38329,seq__38328__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (p1__38276_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38276_SHARP_));
});})(xs_38394,temp__6753__auto___38390,vec__38327,seq__38328,first__38329,seq__38328__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,xs_38394)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (p__38333){
var vec__38334 = p__38333;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38334,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,args__$2));
var map__38294__$1 = ((((!((map__38294 == null)))?((((map__38294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38294):map__38294);
var params = map__38294__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.cst$kw$import);
var vec__38295 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (spec_map){
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join(''),(0),(cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join('')) - (7))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (m,p__38341){
var vec__38342 = p__38341;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38342,(1),null);
var G__38345 = m;
if(!(cljs.core.symbol_identical_QMARK_(v,ns))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38345,k,v);
} else {
return G__38345;
}
});})(ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(0),null);
var use_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38295,(1),null);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$doc],[rename_macros,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([renames,core_renames__$1], 0)),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__7502__auto__ = docstring;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)))),cljs.core.cst$kw$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.cst$kw$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__38355 = ns_info;
var G__38355__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38355,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__38355,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38295,require_macros__$1,use_macros__$1,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use),true]));
});})(G__38355,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38295,require_macros__$1,use_macros__$1,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
):G__38355);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38355__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__38355,G__38355__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38295,require_macros__$1,use_macros__$1,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require),true]));
});})(G__38355,G__38355__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38293,map__38293__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38294,map__38294__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38295,require_macros__$1,use_macros__$1,name__$1,vec__38287,seq__38288,first__38289,seq__38288__$1,___$2,first__38289__$1,seq__38288__$2,name,args,form))
);
} else {
return G__38355__$1;
}
})()], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns_STAR_,(function (_,env,p__38506,___$1,opts){
var vec__38507 = p__38506;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38507,(0),null);
var quoted_specs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38507,(1),null);
var form = vec__38507;
var temp__6753__auto___38542 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__38507,___$2,quoted_specs,form){
return (function (p1__38493_SHARP_){
return (cljs.core.seq_QMARK_(p1__38493_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__38493_SHARP_)));
});})(vec__38507,___$2,quoted_specs,form))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__6753__auto___38542)){
var not_quoted_38545 = temp__6753__auto___38542;
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(quoted_specs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" must be quoted. Offending spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_38545)].join(''));
} else {
}

if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Calls to `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(quoted_specs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("` must appear at the top-level.")].join(''));
}

var specs = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,cljs.core.first(quoted_specs)))?cljs.analyzer.canonicalize_import_specs(quoted_specs):cljs.analyzer.canonicalize_specs(quoted_specs));
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
var args = cljs.analyzer.desugar_ns_specs((function (){var x__8436__auto__ = specs;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})());
var map__38514 = cljs.analyzer.parse_ns_excludes(env,args);
var map__38514__$1 = ((((!((map__38514 == null)))?((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514):map__38514);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,name,args,map__38514,map__38514__$1,excludes,core_renames,vec__38507,___$2,quoted_specs,form){
return (function (m,p__38517){
var vec__38518 = p__38517;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38518,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(specs,name,args,map__38514,map__38514__$1,excludes,core_renames,vec__38507,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = (function (){var G__38521 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38521) : cljs.core.atom.call(null,G__38521));
})();
var aliases = (function (){var G__38522 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38522) : cljs.core.atom.call(null,G__38522));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = (function (){var G__38525 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38525) : cljs.core.atom.call(null,G__38525));
})();
var reloads = (function (){var G__38526 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38526) : cljs.core.atom.call(null,G__38526));
})();
var map__38515 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form){
return (function (m,p__38527){
var vec__38528 = p__38527;
var seq__38529 = cljs.core.seq(vec__38528);
var first__38530 = cljs.core.first(seq__38529);
var seq__38529__$1 = cljs.core.next(seq__38529);
var k = first__38530;
var libs = seq__38529__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$import,k)){
} else {
if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload,null], null), null),libs) == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload);
} else {
}

if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reload_DASH_all,null], null), null),libs) == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.cst$kw$reload_DASH_all);
} else {
}
}

var temp__6757__auto___38575 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__38528,seq__38529,first__38530,seq__38529__$1,k,libs,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form){
return (function (p1__38500_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38500_SHARP_));
});})(vec__38528,seq__38529,first__38530,seq__38529__$1,k,libs,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form))
,libs));
if((temp__6757__auto___38575 == null)){
} else {
var xs_38577 = temp__6757__auto___38575;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_38577),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_38577,temp__6757__auto___38575,vec__38528,seq__38529,first__38530,seq__38529__$1,k,libs,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form){
return (function (p1__38501_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38501_SHARP_));
});})(xs_38577,temp__6757__auto___38575,vec__38528,seq__38529,first__38530,seq__38529__$1,k,libs,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form))
,xs_38577)));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form){
return (function (p__38534){
var vec__38535 = p__38534;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38535,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
});})(specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38507,___$2,quoted_specs,form))
,args));
var map__38515__$1 = ((((!((map__38515 == null)))?((((map__38515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38515):map__38515);
var params = map__38515__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,cljs.core.cst$kw$import);
cljs.analyzer._STAR_cljs_ns_STAR_ = name;

var require_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros],[rename_macros,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([renames,core_renames__$1], 0)),use_macros,excludes,name,imports,requires,uses,require_macros]);
var ns_info = (function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name], null));
if((cljs.core.count(ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames,cljs.core.cst$kw$imports], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ns_info_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$excludes,excludes], null),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys(ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys(require_info,merge_keys)], 0))], 0));
} else {
return require_info;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name], null),cljs.core.merge,cljs.core.array_seq([ns_info], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns_STAR_,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)))),cljs.core.cst$kw$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.cst$kw$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__38540 = require_info;
var G__38540__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38540,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__38540,require_info,ns_info,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38515,map__38515__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38507,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use),true]));
});})(G__38540,require_info,ns_info,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38515,map__38515__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38507,___$2,quoted_specs,form))
):G__38540);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38540__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__38540,G__38540__$1,require_info,ns_info,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38515,map__38515__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38507,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require),true]));
});})(G__38540,G__38540__$1,require_info,ns_info,specs,name,args,map__38514,map__38514__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38515,map__38515__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38507,___$2,quoted_specs,form))
);
} else {
return G__38540__$1;
}
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__38615){
var vec__38625 = p__38615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38625,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38625,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38625,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38625,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38625,(4),null);
var form = vec__38625;
var t = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__38625,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$field,cljs.core.cst$kw$column,cljs.core.cst$kw$unsynchronized_DASH_mutable,cljs.core.cst$kw$line,cljs.core.cst$kw$tag,cljs.core.cst$kw$mutable,cljs.core.cst$kw$volatile_DASH_mutable,cljs.core.cst$kw$shadow],[fld,true,cljs.analyzer.get_col(fld,env),cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__38625,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null)):fields));
var protocols = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,tsym], null),((function (t,locals,protocols,vec__38625,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__7502__auto__ = m;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$name,t,cljs.core.array_seq([cljs.core.cst$kw$type,true,cljs.core.cst$kw$num_DASH_fields,cljs.core.count(fields),cljs.core.cst$kw$record,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),cljs.core.cst$kw$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocols,protocols], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,protocols,vec__38625,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$t,t,cljs.core.cst$kw$fields,fields,cljs.core.cst$kw$pmasks,pmasks,cljs.core.cst$kw$protocols,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(protocols,cljs.core.cst$sym$cljs$core_SLASH_Object),cljs.core.cst$kw$body,(function (){var G__38628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,locals);
var G__38629 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38628,G__38629) : cljs.analyzer.analyze.call(null,G__38628,G__38629));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$deftype_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$deftype_STAR_,env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$defrecord_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$defrecord_STAR_,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__38647_SHARP_){
return cljs.core.boolean$((function (){var and__7490__auto__ = (p1__38647_SHARP_ instanceof cljs.core.Symbol);
if(and__7490__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__38647_SHARP_));
} else {
return and__7490__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__38656){
var vec__38666 = p__38656;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.cst$kw$cljs$analyzer_SLASH_error:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.cst$kw$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_list:cljs.core.cst$kw$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__8533__auto__ = (function (){var G__38676 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38676) : cljs.core.atom.call(null,G__38676));
})();
var prefer_table__8534__auto__ = (function (){var G__38678 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38678) : cljs.core.atom.call(null,G__38678));
})();
var method_cache__8535__auto__ = (function (){var G__38679 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38679) : cljs.core.atom.call(null,G__38679));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__38680 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38680) : cljs.core.atom.call(null,G__38680));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (p1__38674_SHARP_){
return cljs.analyzer.classify_dot_form(p1__38674_SHARP_);
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__38686){
var vec__38687 = p__38686;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_access,cljs.core.cst$kw$target,target,cljs.core.cst$kw$field,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.cst$kw$cljs$analyzer_SLASH_list], null),(function (p__38699){
var vec__38700 = p__38699;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38700,(2),null);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot provide arguments "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on property access "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,meth,cljs.core.cst$kw$args,args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_call,cljs.core.cst$kw$target,target,cljs.core.cst$kw$method,cljs.core.first(meth),cljs.core.cst$kw$args,args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.cst$kw$cljs$analyzer_SLASH_expr], null),(function (p__38727){
var vec__38728 = p__38727;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38728,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38728,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38728,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__38746){
var vec__38747 = p__38746;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38747,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38747,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38747,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__38761){
var vec__38762 = p__38761;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (dot_form){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown dot form of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,dot_form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with classification "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__38787 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__38787__$1 = ((((!((map__38787 == null)))?((((map__38787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38787):map__38787);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,cljs.core.cst$kw$dot_DASH_action);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,cljs.core.cst$kw$target);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,cljs.core.cst$kw$method);
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,cljs.core.cst$kw$field);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38787__$1,cljs.core.cst$kw$args);
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var form_meta = cljs.core.meta(form);
var target_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(targetexpr);
var prop = (function (){var or__7502__auto__ = field__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return method;
}
})();
var tag = (function (){var or__7502__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = cljs.analyzer.js_tag_QMARK_(target_tag);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.analyzer.normalize_js_tag(target_tag),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prefix], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$Object], null)),prop);
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return null;
}
}
})();
if(!(clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join(''),"cljs$"))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,cljs.core.first(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag))))){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$object,cljs.core.cst$kw$form,form,cljs.core.cst$kw$property,prop], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js,target_tag)){
if(cljs.core.truth_((function (){var or__7502__auto__ = (target_tag == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$any,null], null), null).call(null,target_tag);
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$target,cljs.core.cst$kw$form,form], null));
} else {
}

var vec__38789_38794 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.identity).call(null,cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)));
var pre_SINGLEQUOTE__38795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789_38794,(0),null);
var pre_38796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789_38794,(1),null);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_SINGLEQUOTE__38795);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_38796));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$property,cljs.core.cst$kw$form,form,cljs.core.cst$kw$type,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",(function (){var G__38792 = pre_SINGLEQUOTE__38795;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,cljs.core.last(pre_SINGLEQUOTE__38795))){
return cljs.core.butlast(G__38792);
} else {
return G__38792;
}
})())),cljs.core.cst$kw$property,prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_(tag))){
var pre_38798 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_38798))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$externs], null),pre_38798),cljs.core.merge,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY], 0));
}
} else {
}

var G__38793 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__38793) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$field,field__$1,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_(tag))?(function (){var or__7502__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)),cljs.core.cst$kw$tag);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return tag;
}
})():tag)], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__38793,v,map__38787,map__38787__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag){
return (function (p1__38779_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38779_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38779_SHARP_));
});})(G__38793,v,map__38787,map__38787__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag))
,args);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,cljs.core.cst$kw$dot,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$target,targetexpr,cljs.core.cst$kw$method,method,cljs.core.cst$kw$args,argexprs,cljs.core.cst$kw$children,children,cljs.core.cst$kw$tag,(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_(tag))?(function (){var or__7502__auto__ = cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)),cljs.core.cst$kw$ret_DASH_tag);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$sym$js;
}
})():tag)], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dot_action)].join('')));

}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_DOT_,(function (_,env,p__38815,___$1,___$2){
var vec__38816 = p__38815;
var seq__38817 = cljs.core.seq(vec__38816);
var first__38818 = cljs.core.first(seq__38817);
var seq__38817__$1 = cljs.core.next(seq__38817);
var ___$3 = first__38818;
var first__38818__$1 = cljs.core.first(seq__38817__$1);
var seq__38817__$2 = cljs.core.next(seq__38817__$1);
var target = first__38818__$1;
var vec__38819 = seq__38817__$2;
var seq__38820 = cljs.core.seq(vec__38819);
var first__38821 = cljs.core.first(seq__38820);
var seq__38820__$1 = cljs.core.next(seq__38820);
var field = first__38821;
var member_PLUS_ = seq__38820__$1;
var form = vec__38816;
var _STAR_recur_frames_STAR_38822 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38822;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta(form);
var temp__6755__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if((temp__6755__auto__ == null)){
if(cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return cljs.core.cst$sym$number;
} else {
return null;
}
} else {
var tag = temp__6755__auto__;
return tag;
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__8436__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
} else {
var end = s.indexOf("}",idx);
var inner = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,(function (){var G__38850 = env;
var G__38851 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2(G__38850,G__38851) : cljs.analyzer.js_star_interp.call(null,G__38850,G__38851));
})()));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
var x__8436__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),(function (){var G__38853 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1(G__38853) : cljs.analyzer.js_star_seg.call(null,G__38853));
})());
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$any,null,cljs.core.cst$sym$long,null,cljs.core.cst$sym$double,null,cljs.core.cst$sym$number,null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clj_DASH_nil,t)){
return true;
} else {
if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_(t))){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_(t)){
return (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$number)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$long)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$double)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$any)) || (cljs.core.contains_QMARK_(t,cljs.core.cst$sym$js));
} else {
return null;
}
}

}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var argexprs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve){
return (function (p1__38861_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38861_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38861_SHARP_));
});})(enve))
,args));
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_38865 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__38862_SHARP_){
return cljs.analyzer.infer_tag(env,p1__38862_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,types_38865)){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_arithmetic,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$types,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_38865)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$children,cljs.core.cst$kw$numeric,cljs.core.cst$kw$segs,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$js_DASH_op,cljs.core.cst$kw$form,cljs.core.cst$kw$tag],[argexprs,argexprs,numeric,segs,cljs.core.cst$kw$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_38868 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38868;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_STAR_,(function (op,env,p__38869,_,___$1){
var vec__38870 = p__38869;
var seq__38871 = cljs.core.seq(vec__38870);
var first__38872 = cljs.core.first(seq__38871);
var seq__38871__$1 = cljs.core.next(seq__38871);
var ___$2 = first__38872;
var first__38872__$1 = cljs.core.first(seq__38871__$1);
var seq__38871__$2 = cljs.core.next(seq__38871__$1);
var jsform = first__38872__$1;
var args = seq__38871__$2;
var form = vec__38870;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star(env,jsform,args,form);
} else {
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.analyzer.js_star_interp(env,jsform));
var tag = cljs.analyzer.get_js_tag(form);
var form_meta = cljs.core.meta(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$code,code,cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$numeric,numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_(cljs.core.meta(f),cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed);
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_((function (p1__38880_SHARP_){
return ((p1__38880_SHARP_ == null)) || ((p1__38880_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__38880_SHARP_ === 'string') || (typeof p1__38880_SHARP_ === 'number') || (p1__38880_SHARP_ === true) || (p1__38880_SHARP_ === false);
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__38896){
var vec__38922 = p__38896;
var seq__38923 = cljs.core.seq(vec__38922);
var first__38924 = cljs.core.first(seq__38923);
var seq__38923__$1 = cljs.core.next(seq__38923);
var f = first__38924;
var args = seq__38923__$1;
var form = vec__38922;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__38925_38943 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__38925_38944__$1 = ((((!((map__38925_38943 == null)))?((((map__38925_38943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38925_38943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38925_38943):map__38925_38943);
var variadic_38945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$variadic);
var max_fixed_arity_38946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params_38947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$method_DASH_params);
var name_38948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$name);
var ns_38949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$ns);
var macro_38950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38925_38944__$1,cljs.core.cst$kw$macro);
if((cljs.core.not((function (){var and__7490__auto__ = (function (){var G__38936 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns)].join('');
var G__38937 = "$macros";
return goog.string.endsWith(G__38936,G__38937);
})();
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.symbol_identical_QMARK_(cur_ns,ns_38949)) && (macro_38950 === true);
} else {
return and__7490__auto__;
}
})())) && (!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_38947))) && ((!(variadic_38945)) || ((variadic_38945) && ((argc < max_fixed_arity_38946))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_38948,cljs.core.cst$kw$argc,argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.first(form),cljs.core.cst$kw$argc,argc], null));
} else {
}

var deprecated_QMARK__38954 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__38955 = cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__38954)) && (!(cljs.core.boolean$(no_warn_QMARK__38955)))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if(!((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr)) == null))){
cljs.analyzer.warning(cljs.core.cst$kw$invoke_DASH_ctor,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fexpr,fexpr], null));
} else {
}

if(cljs.core.truth_((function (){var or__7502__auto__ = !(cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = fn_var_QMARK_;
if(cljs.core.truth_(or__7502__auto____$2)){
return or__7502__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_(f)) || (cljs.analyzer.all_values_QMARK_(args));
}
}
}
})())){
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,vec__38922,seq__38923,first__38924,seq__38923__$1,f,args,form){
return (function (p1__38892_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38892_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38892_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,vec__38922,seq__38923,first__38924,seq__38923__$1,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$invoke,cljs.core.cst$kw$form,form,cljs.core.cst$kw$f,fexpr,cljs.core.cst$kw$args,cljs.core.vec(argexprs),cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__38938 = env;
var G__38939 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),arg_syms)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38938,G__38939) : cljs.analyzer.analyze.call(null,G__38938,G__38939));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_38957 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38957;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

var G__38961 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Symbol], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38961) : cljs.analyzer.analyze_wrap_meta.call(null,G__38961));
} else {
var map__38962 = cljs.core.meta(sym);
var map__38962__$1 = ((((!((map__38962 == null)))?((((map__38962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38962):map__38962);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38962__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38962__$1,cljs.core.cst$kw$column);
var env__$1 = ((!((line == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$line,line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$column,column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$env,env__$2,cljs.core.cst$kw$form,sym], null);
var lcls = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env__$2);
var temp__6755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if((temp__6755__auto__ == null)){
var sym_meta = cljs.core.meta(sym);
var sym_ns = cljs.core.namespace(sym);
var cur_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env__$2)))].join('');
var sym__$1 = (cljs.core.truth_((function (){var and__7490__auto__ = sym_ns;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns,"cljs.core");
if(and__7490__auto____$1){
var and__7490__auto____$2 = goog.string.endsWith(cur_ns,"$macros");
if(cljs.core.truth_(and__7490__auto____$2)){
return (cljs.core.not(goog.string.endsWith(sym_ns,"$macros"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cur_ns,(0),(cljs.core.count(cur_ns) - (7)))));
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$macros")].join(''),cljs.core.name(sym)):sym);
var info = ((!(cljs.core.contains_QMARK_(sym_meta,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed)))?cljs.analyzer.resolve_existing_var(env__$2,sym__$1):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym__$1));
if(!(cljs.core.cst$kw$def_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,info], 0));
} else {
var info__$1 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,info__$1], 0));
}
} else {
var lb = temp__6755__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$op,cljs.core.cst$kw$var,cljs.core.array_seq([cljs.core.cst$kw$info,lb], 0));
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
return (!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$excludes,sym) == null))) || (!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$excludes,sym) == null)));
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
return (!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym) == null))) || (!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$name),cljs.core.cst$kw$use_DASH_macros,sym) == null)));
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__7502__auto__ = cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3(env,nstr,null);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3(env,nstr,null);
}
})();
var nstr__$1 = ((!((res == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)].join(''):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns(cljs.core.cst$sym$cljs$repl);
} else {
if(cljs.core.truth_(goog.string.contains(nstr__$1,"."))){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr__$1));
} else {
var G__38981 = env;
var G__38981__$1 = (((G__38981 == null))?null:cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__38981));
var G__38981__$2 = (((G__38981__$1 == null))?null:cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__38981__$1));
var G__38981__$3 = (((G__38981__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__38981__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr__$1)));
if((G__38981__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns(G__38981__$3);
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,sym) == null))) || ((cljs.analyzer.excluded_QMARK_(env,sym)) && (!(cljs.analyzer.used_QMARK_(env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if(!((ns == null))){
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym) == null))){
var qualified_symbol = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$rename_DASH_macros,sym);
var nsym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_symbol));
var sym__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
return cljs.core.find_macros_ns(nsym).findInternedVar(sym__$1);
} else {
var temp__6755__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.cst$kw$ns,cljs.core.cst$kw$use_DASH_macros,sym);
if((temp__6755__auto__ == null)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
} else {
var nsym = temp__6755__auto__;
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
var cached_var_38998 = (new cljs.core.Delay((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.ns_interns_STAR_(cljs.core.cst$sym$cljs$spec),cljs.core.cst$sym$macroexpand_DASH_check);
}),null));
cljs.analyzer.get_macroexpand_check_var = ((function (cached_var_38998){
return (function cljs$analyzer$get_macroexpand_check_var(){
if(!((cljs.core.find_ns_obj(cljs.core.cst$sym$cljs$spec) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cached_var_38998) : cljs.core.deref.call(null,cached_var_38998));
} else {
return null;
}
});})(cached_var_38998))
;
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(cljs.core.contains_QMARK_(cljs.analyzer.specials,op)){
return form;
} else {
var temp__6755__auto__ = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if((temp__6755__auto__ == null)){
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('');
if(("." === opname.charAt((0)))){
var vec__39004 = cljs.core.next(form);
var seq__39005 = cljs.core.seq(vec__39004);
var first__39006 = cljs.core.first(seq__39005);
var seq__39005__$1 = cljs.core.next(seq__39005);
var target = first__39006;
var args = seq__39005__$1;
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(cljs.core.count(opname) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
} else {
var mac_var = temp__6755__auto__;
var mchk = cljs.analyzer.get_macroexpand_check_var();
var _ = ((!((mchk == null)))?(function (){var G__39007 = mac_var;
var G__39008 = cljs.core.next(form);
return (mchk.cljs$core$IFn$_invoke$arity$2 ? mchk.cljs$core$IFn$_invoke$arity$2(G__39007,G__39008) : mchk.call(null,G__39007,G__39008));
})():null);
var form_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mac_var) : cljs.core.deref.call(null,mac_var)),form,env,cljs.core.rest(form));
if(cljs.analyzer.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = ((!((cljs.core.namespace(sym) == null)))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$js_DASH_op,sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(mac_var.sym));
var mac_var_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mac_var.sym));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,mac_var_ns,cljs.core.cst$kw$defs,mac_var_name,cljs.core.cst$kw$meta,cljs.core.cst$kw$cljs$analyzer_SLASH_numeric], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_op,cljs.core.cst$kw$numeric,true):js_op);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__35213__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e39025){var err__35310__auto__ = e39025;
if(cljs.analyzer.analysis_error_QMARK_(err__35310__auto__)){
throw err__35310__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__35310__auto__.message,err__35310__auto__);
}
}}finally {if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(cljs.core.contains_QMARK_(cljs.analyzer.specials,op)){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e39034){var err__35310__auto__ = e39034;
if(cljs.analyzer.analysis_error_QMARK_(err__35310__auto__)){
throw err__35310__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__35310__auto__.message,err__35310__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var args39042 = [];
var len__8723__auto___39046 = arguments.length;
var i__8724__auto___39047 = (0);
while(true){
if((i__8724__auto___39047 < len__8723__auto___39046)){
args39042.push((arguments[i__8724__auto___39047]));

var G__39048 = (i__8724__auto___39047 + (1));
i__8724__auto___39047 = G__39048;
continue;
} else {
}
break;
}

var G__39044 = args39042.length;
switch (G__39044) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39042.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env):line);
var col = cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$line,line__$1,cljs.core.array_seq([cljs.core.cst$kw$column,col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var ks = (function (){var _STAR_recur_frames_STAR_39058 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39058,expr_env){
return (function (p1__39053_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39053_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39053_SHARP_));
});})(_STAR_recur_frames_STAR_39058,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39058;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_39059 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39059,expr_env,ks){
return (function (p1__39054_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39054_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39054_SHARP_));
});})(_STAR_recur_frames_STAR_39059,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39059;
}})();
var G__39060 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$map,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,ks,cljs.core.cst$kw$vals,vs,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IMap], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__39060) : cljs.analyzer.analyze_wrap_meta.call(null,G__39060));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_39076 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39076,expr_env){
return (function (p1__39071_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39071_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39071_SHARP_));
});})(_STAR_recur_frames_STAR_39076,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39076;
}})();
var G__39078 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$list,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IList], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__39078) : cljs.analyzer.analyze_wrap_meta.call(null,G__39078));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_39085 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39085,expr_env){
return (function (p1__39082_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39082_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39082_SHARP_));
});})(_STAR_recur_frames_STAR_39085,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39085;
}})();
var G__39086 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$vector,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IVector], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__39086) : cljs.analyzer.analyze_wrap_meta.call(null,G__39086));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_39092 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39092,expr_env){
return (function (p1__39087_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39087_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39087_SHARP_));
});})(_STAR_recur_frames_STAR_39092,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39092;
}})();
var G__39095 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$set,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_ISet], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__39095) : cljs.analyzer.analyze_wrap_meta.call(null,G__39095));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_39102 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39102,val,expr_env){
return (function (p1__39098_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39098_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39098_SHARP_));
});})(_STAR_recur_frames_STAR_39102,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39102;
}})()):(function (){var _STAR_recur_frames_STAR_39103 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_39103,val,expr_env){
return (function (p1__39099_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__39099_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__39099_SHARP_));
});})(_STAR_recur_frames_STAR_39103,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_39103;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$js_DASH_value,cljs.core.cst$kw$js_DASH_type,((cljs.core.map_QMARK_(val))?cljs.core.cst$kw$object:cljs.core.cst$kw$array),cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,((cljs.core.map_QMARK_(val))?cljs.core.cst$sym$object:cljs.core.cst$sym$array)], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$file,cljs.core.array_seq([cljs.core.cst$kw$line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$source], 0));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta(cljs.core.meta(form));
if(!((cljs.core.seq(m) == null))){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$context], null),cljs.core.cst$kw$expr);
var meta_expr = cljs.analyzer.analyze_map(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$meta,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$meta,meta_expr,cljs.core.cst$kw$expr,expr__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
if((cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(ast) == null)){
var temp__6755__auto__ = cljs.analyzer.infer_tag(env,ast);
if((temp__6755__auto__ == null)){
return ast;
} else {
var tag = temp__6755__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$tag,tag);
}
} else {
return ast;
}
});
cljs.analyzer.repl_self_require_QMARK_ = (function cljs$analyzer$repl_self_require_QMARK_(env,deps){
var and__7490__auto__ = cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_], true),deps);
} else {
return and__7490__auto__;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_(form)) && (!((cljs.core.seq(form) == null)))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__39127 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39127,cljs.core.cst$kw$tag,tag);
} else {
return G__39127;
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(env,ast__$1,opts) : pass.call(null,env,ast__$1,opts));
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have :children [exprs...] entry. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
var args39145 = [];
var len__8723__auto___39164 = arguments.length;
var i__8724__auto___39165 = (0);
while(true){
if((i__8724__auto___39165 < len__8723__auto___39164)){
args39145.push((arguments[i__8724__auto___39165]));

var G__39169 = (i__8724__auto___39165 + (1));
i__8724__auto___39165 = G__39169;
continue;
} else {
}
break;
}

var G__39151 = args39145.length;
switch (G__39151) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39145.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__35213__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_39158 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__7502__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_39158;
}}catch (e39157){var err__35310__auto__ = e39157;
if(cljs.analyzer.analysis_error_QMARK_(err__35310__auto__)){
throw err__35310__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__35310__auto__.message,err__35310__auto__);
}
}}finally {if((val__35213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)),s));
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
var args39211 = [];
var len__8723__auto___39250 = arguments.length;
var i__8724__auto___39251 = (0);
while(true){
if((i__8724__auto___39251 < len__8723__auto___39250)){
args39211.push((arguments[i__8724__auto___39251]));

var G__39253 = (i__8724__auto___39251 + (1));
i__8724__auto___39251 = G__39253;
continue;
} else {
}
break;
}

var G__39216 = args39211.length;
switch (G__39216) {
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39211.length)].join('')));

}
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2(forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.empty_env(),cljs.core.cst$kw$build_DASH_options,opts);
var _STAR_file_defs_STAR_39221 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR_39222 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_39223 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR_39224 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.analyzer._STAR_file_defs_STAR_ = null;

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$sym$cljs$user;

cljs.analyzer._STAR_cljs_file_STAR_ = null;

cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__7502__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{var ns = null;
var forms__$1 = forms;
while(true){
if(!((forms__$1 == null))){
var form = cljs.core.first(forms__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ast = cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,form,null,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$ns)){
var G__39282 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast);
var G__39283 = cljs.core.next(forms__$1);
ns = G__39282;
forms__$1 = G__39283;
continue;
} else {
var G__39287 = ns;
var G__39288 = cljs.core.next(forms__$1);
ns = G__39287;
forms__$1 = G__39288;
continue;
}
} else {
return ns;
}
break;
}
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_39224;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_39223;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_39222;

cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR_39221;
}});

cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 2;


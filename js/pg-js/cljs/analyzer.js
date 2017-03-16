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
var args37115 = [];
var len__8723__auto___37118 = arguments.length;
var i__8724__auto___37119 = (0);
while(true){
if((i__8724__auto___37119 < len__8723__auto___37118)){
args37115.push((arguments[i__8724__auto___37119]));

var G__37120 = (i__8724__auto___37119 + (1));
i__8724__auto___37119 = G__37120;
continue;
} else {
}
break;
}

var G__37117 = args37115.length;
switch (G__37117) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37115.length)].join('')));

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
var args37130 = [];
var len__8723__auto___37133 = arguments.length;
var i__8724__auto___37134 = (0);
while(true){
if((i__8724__auto___37134 < len__8723__auto___37133)){
args37130.push((arguments[i__8724__auto___37134]));

var G__37135 = (i__8724__auto___37134 + (1));
i__8724__auto___37134 = G__37135;
continue;
} else {
}
break;
}

var G__37132 = args37130.length;
switch (G__37132) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37130.length)].join('')));

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
var args37137 = [];
var len__8723__auto___37155 = arguments.length;
var i__8724__auto___37156 = (0);
while(true){
if((i__8724__auto___37156 < len__8723__auto___37155)){
args37137.push((arguments[i__8724__auto___37156]));

var G__37157 = (i__8724__auto___37156 + (1));
i__8724__auto___37156 = G__37157;
continue;
} else {
}
break;
}

var G__37139 = args37137.length;
switch (G__37139) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37137.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__37140 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37140) : cljs.core.atom.call(null,G__37140));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__37141_37159 = cljs.core.seq(deps);
var chunk__37142_37160 = null;
var count__37143_37161 = (0);
var i__37144_37162 = (0);
while(true){
if((i__37144_37162 < count__37143_37161)){
var dep_37163 = chunk__37142_37160.cljs$core$IIndexed$_nth$arity$2(null,i__37144_37162);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_37163,(depth + (1)),state,memo_get_deps);

var G__37164 = seq__37141_37159;
var G__37165 = chunk__37142_37160;
var G__37166 = count__37143_37161;
var G__37167 = (i__37144_37162 + (1));
seq__37141_37159 = G__37164;
chunk__37142_37160 = G__37165;
count__37143_37161 = G__37166;
i__37144_37162 = G__37167;
continue;
} else {
var temp__6753__auto___37168 = cljs.core.seq(seq__37141_37159);
if(temp__6753__auto___37168){
var seq__37141_37169__$1 = temp__6753__auto___37168;
if(cljs.core.chunked_seq_QMARK_(seq__37141_37169__$1)){
var c__8413__auto___37170 = cljs.core.chunk_first(seq__37141_37169__$1);
var G__37171 = cljs.core.chunk_rest(seq__37141_37169__$1);
var G__37172 = c__8413__auto___37170;
var G__37173 = cljs.core.count(c__8413__auto___37170);
var G__37174 = (0);
seq__37141_37159 = G__37171;
chunk__37142_37160 = G__37172;
count__37143_37161 = G__37173;
i__37144_37162 = G__37174;
continue;
} else {
var dep_37175 = cljs.core.first(seq__37141_37169__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_37175,(depth + (1)),state,memo_get_deps);

var G__37176 = cljs.core.next(seq__37141_37169__$1);
var G__37177 = null;
var G__37178 = (0);
var G__37179 = (0);
seq__37141_37159 = G__37176;
chunk__37142_37160 = G__37177;
count__37143_37161 = G__37178;
i__37144_37162 = G__37179;
continue;
}
} else {
}
}
break;
}

var seq__37145_37180 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__37146_37181 = null;
var count__37147_37182 = (0);
var i__37148_37183 = (0);
while(true){
if((i__37148_37183 < count__37147_37182)){
var vec__37149_37184 = chunk__37146_37181.cljs$core$IIndexed$_nth$arity$2(null,i__37148_37183);
var _LT_depth_37185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37149_37184,(0),null);
var __37186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37149_37184,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_37185], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__37187 = seq__37145_37180;
var G__37188 = chunk__37146_37181;
var G__37189 = count__37147_37182;
var G__37190 = (i__37148_37183 + (1));
seq__37145_37180 = G__37187;
chunk__37146_37181 = G__37188;
count__37147_37182 = G__37189;
i__37148_37183 = G__37190;
continue;
} else {
var temp__6753__auto___37191 = cljs.core.seq(seq__37145_37180);
if(temp__6753__auto___37191){
var seq__37145_37192__$1 = temp__6753__auto___37191;
if(cljs.core.chunked_seq_QMARK_(seq__37145_37192__$1)){
var c__8413__auto___37193 = cljs.core.chunk_first(seq__37145_37192__$1);
var G__37194 = cljs.core.chunk_rest(seq__37145_37192__$1);
var G__37195 = c__8413__auto___37193;
var G__37196 = cljs.core.count(c__8413__auto___37193);
var G__37197 = (0);
seq__37145_37180 = G__37194;
chunk__37146_37181 = G__37195;
count__37147_37182 = G__37196;
i__37148_37183 = G__37197;
continue;
} else {
var vec__37152_37198 = cljs.core.first(seq__37145_37192__$1);
var _LT_depth_37199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152_37198,(0),null);
var __37200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37152_37198,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_37199], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__37201 = cljs.core.next(seq__37145_37192__$1);
var G__37202 = null;
var G__37203 = (0);
var G__37204 = (0);
seq__37145_37180 = G__37201;
chunk__37146_37181 = G__37202;
count__37147_37182 = G__37203;
i__37148_37183 = G__37204;
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
cljs.analyzer.error_message = (function (){var method_table__8533__auto__ = (function (){var G__37205 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37205) : cljs.core.atom.call(null,G__37205));
})();
var prefer_table__8534__auto__ = (function (){var G__37206 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37206) : cljs.core.atom.call(null,G__37206));
})();
var method_cache__8535__auto__ = (function (){var G__37207 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37207) : cljs.core.atom.call(null,G__37207));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__37208 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37208) : cljs.core.atom.call(null,G__37208));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function() { 
var G__37209__delegate = function (warning_type,_){
return warning_type;
};
var G__37209 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__37210__i = 0, G__37210__a = new Array(arguments.length -  1);
while (G__37210__i < G__37210__a.length) {G__37210__a[G__37210__i] = arguments[G__37210__i + 1]; ++G__37210__i;}
  _ = new cljs.core.IndexedSeq(G__37210__a,0);
} 
return G__37209__delegate.call(this,warning_type,_);};
G__37209.cljs$lang$maxFixedArity = 1;
G__37209.cljs$lang$applyTo = (function (arglist__37211){
var warning_type = cljs.core.first(arglist__37211);
var _ = cljs.core.rest(arglist__37211);
return G__37209__delegate(warning_type,_);
});
G__37209.cljs$core$IFn$_invoke$arity$variadic = G__37209__delegate;
return G__37209;
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
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_ns,(function (warning_type,p__37212){
var map__37213 = p__37212;
var map__37213__$1 = ((((!((map__37213 == null)))?((((map__37213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37213):map__37213);
var info = map__37213__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37213__$1,cljs.core.cst$kw$js_DASH_provide);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such namespace: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", could not locate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.cst$kw$cljc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", or Closure namespace \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns,(function (warning_type,p__37215){
var map__37216 = p__37215;
var map__37216__$1 = ((((!((map__37216 == null)))?((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37216):map__37216);
var info = map__37216__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,cljs.core.cst$kw$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,cljs.core.cst$kw$js_DASH_provide);
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
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$munged_DASH_namespace,(function (warning_type,p__37219){
var map__37220 = p__37219;
var map__37220__$1 = ((((!((map__37220 == null)))?((((map__37220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37220):map__37220);
var info = map__37220__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37220__$1,cljs.core.cst$kw$name);
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__37220,map__37220__$1,info,name){
return (function (p1__37218_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__37218_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__37218_SHARP_)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37218_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return p1__37218_SHARP_;
}
});})(map__37220,map__37220__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" contains a reserved JavaScript keyword,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" the corresponding Google Closure namespace will be munged to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_DASH_var_DASH_clash,(function (warning_type,p__37222){
var map__37223 = p__37222;
var map__37223__$1 = ((((!((map__37223 == null)))?((((map__37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37223):map__37223);
var info = map__37223__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,cljs.core.cst$kw$ns);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,cljs.core.cst$kw$var);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Namespace "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" clashes with var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__37225){
var map__37226 = p__37225;
var map__37226__$1 = ((((!((map__37226 == null)))?((((map__37226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37226):map__37226);
var info = map__37226__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37226__$1,cljs.core.cst$kw$protocol);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37226__$1,cljs.core.cst$kw$method);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad extend-type method shape for protocol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__37228){
var map__37229 = p__37228;
var map__37229__$1 = ((((!((map__37229 == null)))?((((map__37229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37229):map__37229);
var info = map__37229__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229__$1,cljs.core.cst$kw$module_DASH_type);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229__$1,cljs.core.cst$kw$file);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported JavaScript module type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for foreign library "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,(function (warning_type,p__37231){
var map__37232 = p__37231;
var map__37232__$1 = ((((!((map__37232 == null)))?((((map__37232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37232):map__37232);
var preprocess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,cljs.core.cst$kw$preprocess);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37232__$1,cljs.core.cst$kw$file);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported preprocess value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for foreign library "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,(function (warning_type,p__37234){
var map__37235 = p__37234;
var map__37235__$1 = ((((!((map__37235 == null)))?((((map__37235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37235):map__37235);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37235__$1,cljs.core.cst$kw$name);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is shadowed by a local")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$infer_DASH_warning,(function (warning_type,p__37237){
var map__37238 = p__37237;
var map__37238__$1 = ((((!((map__37238 == null)))?((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37238):map__37238);
var warn_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,cljs.core.cst$kw$warn_DASH_type);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,cljs.core.cst$kw$form);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,cljs.core.cst$kw$type);
var property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,cljs.core.cst$kw$property);
var G__37240 = (((warn_type instanceof cljs.core.Keyword))?warn_type.fqn:null);
switch (G__37240) {
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
var _STAR_print_fn_STAR_37245 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__37246 = env;
var G__37247 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("WARNING: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__37246,G__37247) : cljs.analyzer.message.call(null,G__37246,G__37247));
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37245;
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
var G__37248 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__37249 = (n__$1 - (1));
ret = G__37248;
n__$1 = G__37249;
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
return (function (p1__37250_SHARP_){
return cljs.analyzer.hex_format(p1__37250_SHARP_,(4));
});})(prefix,name))
));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
var args37251 = [];
var len__8723__auto___37259 = arguments.length;
var i__8724__auto___37260 = (0);
while(true){
if((i__8724__auto___37260 < len__8723__auto___37259)){
args37251.push((arguments[i__8724__auto___37260]));

var G__37261 = (i__8724__auto___37260 + (1));
i__8724__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var G__37253 = args37251.length;
switch (G__37253) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37251.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__37254 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
if(cljs.core.truth_(env)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__37254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$cljs$analyzer_SLASH_constants], null),((function (G__37254){
return (function (p__37255){
var map__37256 = p__37255;
var map__37256__$1 = ((((!((map__37256 == null)))?((((map__37256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37256):map__37256);
var constants = map__37256__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37256__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37256__$1,cljs.core.cst$kw$order,cljs.core.PersistentVector.EMPTY);
var G__37258 = constants;
if(!(cljs.core.contains_QMARK_(seen,val))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__37258,cljs.core.cst$kw$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([cljs.core.cst$kw$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0));
} else {
return G__37258;
}
});})(G__37254))
);
} else {
return G__37254;
}
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$core], null),cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t_cljs$analyzer37263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.analyzer.t_cljs$analyzer37263 = (function (meta37264){
this.meta37264 = meta37264;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.analyzer.t_cljs$analyzer37263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37265,meta37264__$1){
var self__ = this;
var _37265__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer37263(meta37264__$1));
});


cljs.analyzer.t_cljs$analyzer37263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37265){
var self__ = this;
var _37265__$1 = this;
return self__.meta37264;
});


cljs.analyzer.t_cljs$analyzer37263.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t_cljs$analyzer37263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta37264], null);
});

cljs.analyzer.t_cljs$analyzer37263.cljs$lang$type = true;

cljs.analyzer.t_cljs$analyzer37263.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer37263";

cljs.analyzer.t_cljs$analyzer37263.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.analyzer/t_cljs$analyzer37263");
});

cljs.analyzer.__GT_t_cljs$analyzer37263 = (function cljs$analyzer$__GT_t_cljs$analyzer37263(meta37264){
return (new cljs.analyzer.t_cljs$analyzer37263(meta37264));
});

}

return (new cljs.analyzer.t_cljs$analyzer37263(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var args37266 = [];
var len__8723__auto___37269 = arguments.length;
var i__8724__auto___37270 = (0);
while(true){
if((i__8724__auto___37270 < len__8723__auto___37269)){
args37266.push((arguments[i__8724__auto___37270]));

var G__37271 = (i__8724__auto___37270 + (1));
i__8724__auto___37270 = G__37271;
continue;
} else {
}
break;
}

var G__37268 = args37266.length;
switch (G__37268) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37266.length)].join('')));

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
var args37273 = [];
var len__8723__auto___37284 = arguments.length;
var i__8724__auto___37285 = (0);
while(true){
if((i__8724__auto___37285 < len__8723__auto___37284)){
args37273.push((arguments[i__8724__auto___37285]));

var G__37286 = (i__8724__auto___37285 + (1));
i__8724__auto___37285 = G__37286;
continue;
} else {
}
break;
}

var G__37275 = args37273.length;
switch (G__37275) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37273.length)].join('')));

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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$macros], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37276){
var vec__37277 = p__37276;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37277,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var ns__$1 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,cljs.core.cst$kw$ns,ns__$1,cljs.core.array_seq([cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.cst$kw$macro,true], 0));
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37280){
var vec__37281 = p__37280;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(1),null);
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
var val__37054__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__37054__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$js_DASH_globals,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__37054__auto__){
return (function (p1__37288_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37288_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,p1__37288_SHARP_], null)],null));
});})(val__37054__auto__))
,cljs.core.list(cljs.core.cst$sym$alert,cljs.core.cst$sym$window,cljs.core.cst$sym$document,cljs.core.cst$sym$console,cljs.core.cst$sym$escape,cljs.core.cst$sym$unescape,cljs.core.cst$sym$screen,cljs.core.cst$sym$location,cljs.core.cst$sym$navigator,cljs.core.cst$sym$history,cljs.core.cst$sym$location,cljs.core.cst$sym$global,cljs.core.cst$sym$process,cljs.core.cst$sym$require,cljs.core.cst$sym$module,cljs.core.cst$sym$exports)))], null);
}finally {if((val__37054__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var args37289 = [];
var len__8723__auto___37293 = arguments.length;
var i__8724__auto___37294 = (0);
while(true){
if((i__8724__auto___37294 < len__8723__auto___37293)){
args37289.push((arguments[i__8724__auto___37294]));

var G__37295 = (i__8724__auto___37294 + (1));
i__8724__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var G__37291 = args37289.length;
switch (G__37291) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37289.length)].join('')));

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
var G__37292 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$sym$cljs$core))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.cst$kw$line,cljs.analyzer.get_line(name,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(name,env)], null);
if(cljs.core.truth_(cljs.core.cst$kw$root_DASH_source_DASH_info.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([G__37292,cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$root_DASH_source_DASH_info], null))], 0));
} else {
return G__37292;
}
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__37301 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__37302 = null;
var count__37303 = (0);
var i__37304 = (0);
while(true){
if((i__37304 < count__37303)){
var handler = chunk__37302.cljs$core$IIndexed$_nth$arity$2(null,i__37304);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__37305 = seq__37301;
var G__37306 = chunk__37302;
var G__37307 = count__37303;
var G__37308 = (i__37304 + (1));
seq__37301 = G__37305;
chunk__37302 = G__37306;
count__37303 = G__37307;
i__37304 = G__37308;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37301);
if(temp__6753__auto__){
var seq__37301__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37301__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37301__$1);
var G__37309 = cljs.core.chunk_rest(seq__37301__$1);
var G__37310 = c__8413__auto__;
var G__37311 = cljs.core.count(c__8413__auto__);
var G__37312 = (0);
seq__37301 = G__37309;
chunk__37302 = G__37310;
count__37303 = G__37311;
i__37304 = G__37312;
continue;
} else {
var handler = cljs.core.first(seq__37301__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__37313 = cljs.core.next(seq__37301__$1);
var G__37314 = null;
var G__37315 = (0);
var G__37316 = (0);
seq__37301 = G__37313;
chunk__37302 = G__37314;
count__37303 = G__37315;
i__37304 = G__37316;
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
var args37317 = [];
var len__8723__auto___37320 = arguments.length;
var i__8724__auto___37321 = (0);
while(true){
if((i__8724__auto___37321 < len__8723__auto___37320)){
args37317.push((arguments[i__8724__auto___37321]));

var G__37322 = (i__8724__auto___37321 + (1));
i__8724__auto___37321 = G__37322;
continue;
} else {
}
break;
}

var G__37319 = args37317.length;
switch (G__37319) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37317.length)].join('')));

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
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prefix,prefix__$1,cljs.core.cst$kw$suffix,suffix__$1,cljs.core.cst$kw$macro_DASH_present_QMARK_,!(((function (){var G__37327 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)].join(''));
var G__37328 = env__$1;
return (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(G__37327,G__37328) : cljs.analyzer.get_expander.call(null,G__37327,G__37328));
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
var args37329 = [];
var len__8723__auto___37332 = arguments.length;
var i__8724__auto___37333 = (0);
while(true){
if((i__8724__auto___37333 < len__8723__auto___37332)){
args37329.push((arguments[i__8724__auto___37333]));

var G__37334 = (i__8724__auto___37333 + (1));
i__8724__auto___37333 = G__37334;
continue;
} else {
}
break;
}

var G__37331 = args37329.length;
switch (G__37331) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37329.length)].join('')));

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
var args37336 = [];
var len__8723__auto___37339 = arguments.length;
var i__8724__auto___37340 = (0);
while(true){
if((i__8724__auto___37340 < len__8723__auto___37339)){
args37336.push((arguments[i__8724__auto___37340]));

var G__37341 = (i__8724__auto___37340 + (1));
i__8724__auto___37340 = G__37341;
continue;
} else {
}
break;
}

var G__37338 = args37336.length;
switch (G__37338) {
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37336.length)].join('')));

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
var args37343 = [];
var len__8723__auto___37346 = arguments.length;
var i__8724__auto___37347 = (0);
while(true){
if((i__8724__auto___37347 < len__8723__auto___37346)){
args37343.push((arguments[i__8724__auto___37347]));

var G__37348 = (i__8724__auto___37347 + (1));
i__8724__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var G__37345 = args37343.length;
switch (G__37345) {
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37343.length)].join('')));

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
var args37350 = [];
var len__8723__auto___37356 = arguments.length;
var i__8724__auto___37357 = (0);
while(true){
if((i__8724__auto___37357 < len__8723__auto___37356)){
args37350.push((arguments[i__8724__auto___37357]));

var G__37358 = (i__8724__auto___37357 + (1));
i__8724__auto___37357 = G__37358;
continue;
} else {
}
break;
}

var G__37352 = args37350.length;
switch (G__37352) {
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37350.length)].join('')));

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
var vec__37353 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(1),null);
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
var G__37360 = cljs.core.next(pre);
var G__37361 = externs_SINGLEQUOTE_;
var G__37362 = top;
pre = G__37360;
externs = G__37361;
top = G__37362;
continue;
}

}

}
break;
}
});

cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3;

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
var args37363 = [];
var len__8723__auto___37366 = arguments.length;
var i__8724__auto___37367 = (0);
while(true){
if((i__8724__auto___37367 < len__8723__auto___37366)){
args37363.push((arguments[i__8724__auto___37367]));

var G__37368 = (i__8724__auto___37367 + (1));
i__8724__auto___37367 = G__37368;
continue;
} else {
}
break;
}

var G__37365 = args37363.length;
switch (G__37365) {
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37363.length)].join('')));

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
var args37370 = [];
var len__8723__auto___37377 = arguments.length;
var i__8724__auto___37378 = (0);
while(true){
if((i__8724__auto___37378 < len__8723__auto___37377)){
args37370.push((arguments[i__8724__auto___37378]));

var G__37379 = (i__8724__auto___37378 + (1));
i__8724__auto___37378 = G__37379;
continue;
} else {
}
break;
}

var G__37372 = args37370.length;
switch (G__37372) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37370.length)].join('')));

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
var vec__37373 = temp__6753__auto__;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37373,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37373,(1),null);
var me = vec__37373;
var tag = (function (){var G__37376 = cljs.core.meta(p);
return (tag_type.cljs$core$IFn$_invoke$arity$1 ? tag_type.cljs$core$IFn$_invoke$arity$1(G__37376) : tag_type.call(null,G__37376));
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
var args37381 = [];
var len__8723__auto___37387 = arguments.length;
var i__8724__auto___37388 = (0);
while(true){
if((i__8724__auto___37388 < len__8723__auto___37387)){
args37381.push((arguments[i__8724__auto___37388]));

var G__37389 = (i__8724__auto___37388 + (1));
i__8724__auto___37388 = G__37389;
continue;
} else {
}
break;
}

var G__37383 = args37381.length;
switch (G__37383) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37381.length)].join('')));

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

var G__37384_37391 = env;
var G__37385_37392 = full_ns;
var G__37386_37393 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__37384_37391,G__37385_37392,G__37386_37393) : confirm.call(null,G__37384_37391,G__37385_37392,G__37386_37393));
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
var G__37394 = env;
var G__37395 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$imports,sym);
var G__37396 = confirm;
env = G__37394;
sym = G__37395;
confirm = G__37396;
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
var seq__37401 = cljs.core.seq(names);
var chunk__37402 = null;
var count__37403 = (0);
var i__37404 = (0);
while(true){
if((i__37404 < count__37403)){
var name = chunk__37402.cljs$core$IIndexed$_nth$arity$2(null,i__37404);
var env_37405__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_37406 = cljs.analyzer.resolve_existing_var(env_37405__$1,name);
if(cljs.core.truth_((function (){var and__7490__auto__ = ev_37406;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_37406));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_37405__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_37406,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_37406)], null));
} else {
}

var G__37407 = seq__37401;
var G__37408 = chunk__37402;
var G__37409 = count__37403;
var G__37410 = (i__37404 + (1));
seq__37401 = G__37407;
chunk__37402 = G__37408;
count__37403 = G__37409;
i__37404 = G__37410;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37401);
if(temp__6753__auto__){
var seq__37401__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37401__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37401__$1);
var G__37411 = cljs.core.chunk_rest(seq__37401__$1);
var G__37412 = c__8413__auto__;
var G__37413 = cljs.core.count(c__8413__auto__);
var G__37414 = (0);
seq__37401 = G__37411;
chunk__37402 = G__37412;
count__37403 = G__37413;
i__37404 = G__37414;
continue;
} else {
var name = cljs.core.first(seq__37401__$1);
var env_37415__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_37416 = cljs.analyzer.resolve_existing_var(env_37415__$1,name);
if(cljs.core.truth_((function (){var and__7490__auto__ = ev_37416;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(ev_37416));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$dynamic,env_37415__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ev,ev_37416,cljs.core.cst$kw$name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ev_37416)], null));
} else {
}

var G__37417 = cljs.core.next(seq__37401__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__37401 = G__37417;
chunk__37402 = G__37418;
count__37403 = G__37419;
i__37404 = G__37420;
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
var map__37429 = e;
var map__37429__$1 = ((((!((map__37429 == null)))?((((map__37429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37429):map__37429);
var map__37430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,cljs.core.cst$kw$test);
var map__37430__$1 = ((((!((map__37430 == null)))?((((map__37430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37430):map__37430);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.cst$kw$form);
var then_tag = (function (){var G__37433 = env;
var G__37434 = cljs.core.cst$kw$then.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37433,G__37434) : cljs.analyzer.infer_tag.call(null,G__37433,G__37434));
})();
if((cljs.core.keyword_identical_QMARK_(op,cljs.core.cst$kw$constant)) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__37435 = env;
var G__37436 = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37435,G__37436) : cljs.analyzer.infer_tag.call(null,G__37435,G__37436));
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
var map__37439 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(e);
var map__37439__$1 = ((((!((map__37439 == null)))?((((map__37439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37439):map__37439);
var f = map__37439__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,cljs.core.cst$kw$info);
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
var G__37455 = (((cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__37455) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
var G__37456 = env;
var G__37457 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37456,G__37457) : cljs.analyzer.infer_tag.call(null,G__37456,G__37457));

break;
case "do":
var G__37458 = env;
var G__37459 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37458,G__37459) : cljs.analyzer.infer_tag.call(null,G__37458,G__37459));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
var G__37460 = env;
var G__37461 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37460,G__37461) : cljs.analyzer.infer_tag.call(null,G__37460,G__37461));

break;
case "constant":
var G__37462 = cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__37462)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__37462)){
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
var G__37463 = env;
var G__37464 = cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37463,G__37464) : cljs.analyzer.infer_tag.call(null,G__37463,G__37464));

break;
case "var":
var temp__6755__auto____$1 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
if((temp__6755__auto____$1 == null)){
var G__37465 = env;
var G__37466 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37465,G__37466) : cljs.analyzer.infer_tag.call(null,G__37465,G__37466));
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
var G__37467 = env;
var G__37468 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__37467,G__37468) : cljs.analyzer.infer_tag.call(null,G__37467,G__37468));

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
cljs.analyzer.parse = (function (){var method_table__8533__auto__ = (function (){var G__37470 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37470) : cljs.core.atom.call(null,G__37470));
})();
var prefer_table__8534__auto__ = (function (){var G__37471 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37471) : cljs.core.atom.call(null,G__37471));
})();
var method_cache__8535__auto__ = (function (){var G__37472 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37472) : cljs.core.atom.call(null,G__37472));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__37473 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37473) : cljs.core.atom.call(null,G__37473));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function() { 
var G__37474__delegate = function (op,rest){
return op;
};
var G__37474 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__37475__i = 0, G__37475__a = new Array(arguments.length -  1);
while (G__37475__i < G__37475__a.length) {G__37475__a[G__37475__i] = arguments[G__37475__i + 1]; ++G__37475__i;}
  rest = new cljs.core.IndexedSeq(G__37475__a,0);
} 
return G__37474__delegate.call(this,op,rest);};
G__37474.cljs$lang$maxFixedArity = 1;
G__37474.cljs$lang$applyTo = (function (arglist__37476){
var op = cljs.core.first(arglist__37476);
var rest = cljs.core.rest(arglist__37476);
return G__37474__delegate(op,rest);
});
G__37474.cljs$core$IFn$_invoke$arity$variadic = G__37474__delegate;
return G__37474;
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),cljs.core.cst$kw$sym,(function (){var G__37481 = expr_env;
var G__37482 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__8436__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37481,G__37482) : cljs.analyzer.analyze.call(null,G__37481,G__37482));
})(),cljs.core.cst$kw$meta,(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns,cljs.core.cst$kw$doc,cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env){
return (function (p1__37477_SHARP_){
return cljs.core._conj((function (){var x__8436__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__37477_SHARP_);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$quote);
});})(user_meta,uks,ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__6757__auto__,env__$1,var$,expr_env){
return (function (p1__37478_SHARP_){
return cljs.core._conj((function (){var x__8436__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__37478_SHARP_);
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
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$var,(function (op,env,p__37483,_,___$1){
var vec__37484 = p__37483;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37484,(1),null);
var form = vec__37484;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$form,form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$if,(function (op,env,p__37487,name,_){
var vec__37488 = p__37487;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37488,(3),null);
var form = vec__37488;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_37491 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__37492 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37493 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37492,G__37493) : cljs.analyzer.analyze.call(null,G__37492,G__37493));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37491;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_37494 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_37494;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_37495 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_37495;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$if,cljs.core.cst$kw$form,form,cljs.core.cst$kw$test,test_expr,cljs.core.cst$kw$then,then_expr,cljs.core.cst$kw$else,else_expr,cljs.core.cst$kw$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$case_STAR_,(function (op,env,p__37498,name,_){
var vec__37499 = p__37498;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37499,(4),null);
var form = vec__37499;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* must switch on symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? sym)")].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* tests must be grouped in vectors"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? vector? tests)")].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var v = (function (){var _STAR_recur_frames_STAR_37502 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37502;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__37499,___$1,sym,tests,thens,default$,form){
return (function (p1__37496_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__37499,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__37499,___$1,sym,tests,thens,default$,form))
,p1__37496_SHARP_);
});})(expr_env,v,vec__37499,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__37499,___$1,sym,tests,thens,default$,form){
return (function (p1__37497_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__37497_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__37497_SHARP_));
});})(expr_env,v,tests__$1,vec__37499,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__37499,___$1,sym,tests,thens,default$,form){
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
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__37499,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("case* tests must be numbers, strings, or constants"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn [t] (or (-> t :info :const) (and (= :constant (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$case_STAR_,cljs.core.cst$kw$form,form,cljs.core.cst$kw$v,v,cljs.core.cst$kw$tests,tests__$1,cljs.core.cst$kw$thens,thens__$1,cljs.core.cst$kw$default,default$__$1,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$throw,(function (op,env,p__37503,name,_){
var vec__37504 = p__37503;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504,(1),null);
var form = vec__37504;
var throw_expr = (function (){var _STAR_recur_frames_STAR_37507 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__37508 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37509 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37508,G__37509) : cljs.analyzer.analyze.call(null,G__37508,G__37509));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37507;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$throw,cljs.core.cst$kw$form,form,cljs.core.cst$kw$throw,throw_expr,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$try,(function (op,env,p__37514,name,_){
var vec__37515 = p__37514;
var seq__37516 = cljs.core.seq(vec__37515);
var first__37517 = cljs.core.first(seq__37516);
var seq__37516__$1 = cljs.core.next(seq__37516);
var ___$1 = first__37517;
var body = seq__37516__$1;
var form = vec__37515;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$context], null),((function (vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form){
return (function (p1__37510_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,p1__37510_SHARP_)){
return cljs.core.cst$kw$return;
} else {
return p1__37510_SHARP_;
}
});})(vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form){
return (function (p1__37511_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__37511_SHARP_),cljs.core.cst$sym$catch);
});})(catchenv,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form){
return (function (p1__37512_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__37512_SHARP_),cljs.core.cst$kw$default);
});})(catchenv,catch_QMARK_,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form){
return (function (p1__37513_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__37513_SHARP_),cljs.core.cst$sym$finally);
});})(catchenv,catch_QMARK_,default_QMARK_,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form))
);
var map__37518 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$state,cljs.core.cst$kw$start,cljs.core.cst$kw$forms,body,cljs.core.cst$kw$body,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$dblock,null,cljs.core.cst$kw$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__37519 = cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(parser);
var seq__37520 = cljs.core.seq(vec__37519);
var first__37521 = cljs.core.first(seq__37520);
var seq__37520__$1 = cljs.core.next(seq__37520);
var form__$1 = first__37521;
var forms_STAR_ = seq__37520__$1;
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$forms,forms_STAR_);
var G__37522 = (((cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__37522) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__37538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$catches);
parser = G__37538;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__37539 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__37539;
continue;
} else {
var G__37540 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),cljs.core.conj,form__$1);
parser = G__37540;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__37541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$dblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$finally], 0));
parser = G__37541;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__37542 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cblocks], null),cljs.core.conj,form__$1);
parser = G__37542;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__37543 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$state,cljs.core.cst$kw$finally);
parser = G__37543;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__37544 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.cst$kw$fblock,form__$1,cljs.core.array_seq([cljs.core.cst$kw$state,cljs.core.cst$kw$done], 0));
parser = G__37544;
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
var map__37518__$1 = ((((!((map__37518 == null)))?((((map__37518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37518):map__37518);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,cljs.core.cst$kw$body);
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,cljs.core.cst$kw$cblocks);
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,cljs.core.cst$kw$dblock);
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37518__$1,cljs.core.cst$kw$fblock);
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__37524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__37525 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37524,G__37525) : cljs.analyzer.analyze.call(null,G__37524,G__37525));
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
var vec__37526 = temp__6751__auto__;
var seq__37527 = cljs.core.seq(vec__37526);
var first__37528 = cljs.core.first(seq__37527);
var seq__37527__$1 = cljs.core.next(seq__37527);
var ___$2 = first__37528;
var first__37528__$1 = cljs.core.first(seq__37527__$1);
var seq__37527__$2 = cljs.core.next(seq__37527__$1);
var ___$3 = first__37528__$1;
var first__37528__$2 = cljs.core.first(seq__37527__$2);
var seq__37527__$3 = cljs.core.next(seq__37527__$2);
var name__$1 = first__37528__$2;
var cb = seq__37527__$3;
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
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__37518,map__37518__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form){
return (function (p__37529){
var vec__37530 = p__37529;
var seq__37531 = cljs.core.seq(vec__37530);
var first__37532 = cljs.core.first(seq__37531);
var seq__37531__$1 = cljs.core.next(seq__37531);
var ___$2 = first__37532;
var first__37532__$1 = cljs.core.first(seq__37531__$1);
var seq__37531__$2 = cljs.core.next(seq__37531__$1);
var type = first__37532__$1;
var first__37532__$2 = cljs.core.first(seq__37531__$2);
var seq__37531__$3 = cljs.core.next(seq__37531__$2);
var name__$1 = first__37532__$2;
var cb = seq__37531__$3;
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
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__37518,map__37518__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__37515,seq__37516,first__37517,seq__37516__$1,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__8436__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))):default$);
var locals = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,e,cljs.core.cst$kw$line,cljs.analyzer.get_line(e,env),cljs.core.cst$kw$column,cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__37533 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,cljs.core.cst$kw$locals,locals__$1);
var G__37534 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37533,G__37534) : cljs.analyzer.analyze.call(null,G__37533,G__37534));
})():null);
var try$ = (function (){var G__37535 = (cljs.core.truth_((function (){var or__7502__auto__ = e;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__37536 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37535,G__37536) : cljs.analyzer.analyze.call(null,G__37535,G__37536));
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
var G__37556 = null;
var G__37556__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,sym], null);
});
var G__37556__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$init,init], null);
});
var G__37556__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sym,sym,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$init,init], null);
});
G__37556 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__37556__2.call(this,___$2,sym);
case 3:
return G__37556__3.call(this,___$2,sym,doc);
case 4:
return G__37556__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37556.cljs$core$IFn$_invoke$arity$2 = G__37556__2;
G__37556.cljs$core$IFn$_invoke$arity$3 = G__37556__3;
G__37556.cljs$core$IFn$_invoke$arity$4 = G__37556__4;
return G__37556;
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

var temp__6757__auto___37557 = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(args);
if((temp__6757__auto___37557 == null)){
} else {
var doc_37558 = temp__6757__auto___37557;
if(typeof doc_37558 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
}

var temp__6757__auto___37559 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__6757__auto___37559 == null)){
} else {
var v_37560 = temp__6757__auto___37559;
if(cljs.core.truth_((function (){var and__7490__auto__ = !(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__7490__auto__){
var and__7490__auto____$1 = cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(v_37560));
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
cljs.analyzer.warning(cljs.core.cst$kw$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sym,sym__$1,cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(v_37560)], null));
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

var _STAR_recur_frames_STAR_37546 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var _STAR_allow_ns_STAR_37547 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{var G__37548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37549 = cljs.core.cst$kw$init.cljs$core$IFn$_invoke$arity$1(args);
var G__37550 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__37548,G__37549,G__37550) : cljs.analyzer.analyze.call(null,G__37548,G__37549,G__37550));
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_37547;
}}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37546;
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
var temp__6757__auto___37561 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null));
if((temp__6757__auto___37561 == null)){
} else {
var v_37562 = temp__6757__auto___37561;
if((cljs.core.not(cljs.core.cst$kw$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym__$1)))) && ((cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_37562) === true) && (!(fn_var_QMARK_)))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_name,ns_name,cljs.core.cst$kw$sym,sym__$1], null));
} else {
}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.cst$kw$defs,sym__$1], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,var_name], null),(function (){var G__37551 = sym_meta;
if(cljs.core.truth_(cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37551,cljs.core.cst$kw$test,true);
} else {
return G__37551;
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
return (function (p1__37545_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(p1__37545_SHARP_)));
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

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$env,env__$1,cljs.core.cst$kw$op,cljs.core.cst$kw$def,cljs.core.cst$kw$form,form,cljs.core.cst$kw$name,var_name,cljs.core.cst$kw$var,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37552 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$locals),cljs.core.cst$kw$context,cljs.core.cst$kw$expr),cljs.core.cst$kw$def_DASH_var,true);
var G__37553 = sym__$1;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37552,G__37553) : cljs.analyzer.analyze.call(null,G__37552,G__37553));
})(),cljs.core.cst$kw$op,cljs.core.cst$kw$var),cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.cst$kw$init,init_expr], null),((cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$var_DASH_ast,cljs.analyzer.var_ast(env__$1,sym__$1)], null):null),(function (){var temp__6757__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__6757__auto__ == null)){
return null;
} else {
var test = temp__6757__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$test,(function (){var G__37554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37555 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37554,G__37555) : cljs.analyzer.analyze.call(null,G__37554,G__37555));
})()], null);
}
})(),((!((tag__$1 == null)))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dynamic,true], null):null),((!((export_as == null)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$export,export_as], null):null),((!((init_expr == null)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__37567,name){
var vec__37568 = p__37567;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37568,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37568,(1),null);
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
var _STAR_recur_frames_STAR_37572 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37572;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__37577 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return,cljs.core.array_seq([cljs.core.cst$kw$locals,locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
var expr = cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames);
var recurs = (function (){var G__37580 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37580) : cljs.core.deref.call(null,G__37580));
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37581_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__37581_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_37583 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_37583;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fn_STAR_,(function (op,env,p__37585,name,_){
var vec__37586 = p__37585;
var seq__37587 = cljs.core.seq(vec__37586);
var first__37588 = cljs.core.first(seq__37587);
var seq__37587__$1 = cljs.core.next(seq__37587);
var ___$1 = first__37588;
var args = seq__37587__$1;
var form = vec__37586;
var named_fn_QMARK_ = (cljs.core.first(args) instanceof cljs.core.Symbol);
var vec__37589 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37589,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37589,(1),null);
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
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (named_fn_QMARK_,vec__37589,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__37586,seq__37587,first__37588,seq__37587__$1,___$1,args,form){
return (function (p1__37584_SHARP_){
var _STAR_allow_ns_STAR_37592 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__37584_SHARP_,type);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_37592;
}});})(named_fn_QMARK_,vec__37589,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__37586,seq__37587,first__37588,seq__37587__$1,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$max_DASH_fixed_DASH_arity,methods$));
var variadic = cljs.core.boolean$(cljs.core.some(cljs.core.cst$kw$variadic,methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.array_seq([variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa,cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$)], 0)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?(function (){var _STAR_allow_ns_STAR_37593 = cljs.analyzer._STAR_allow_ns_STAR_;
cljs.analyzer._STAR_allow_ns_STAR_ = false;

try{return cljs.analyzer.analyze_fn_methods_pass2(menv__$1,locals__$2,type,meths__$1);
}finally {cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR_37593;
}})():methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.cst$kw$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$children,cljs.core.cst$kw$protocol_DASH_inline,cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$loop_DASH_lets,cljs.core.cst$kw$protocol_DASH_impl,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$methods,cljs.core.cst$kw$recur_DASH_frames,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$form,cljs.core.cst$kw$tag,cljs.core.cst$kw$jsdoc],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,cljs.core.cst$kw$fn,env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,cljs.core.cst$sym$function,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_37594 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$variadic,methods$__$1);
var variadic_params_37595 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_37594)));
var param_counts_37596 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.cst$kw$params),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_37594))){
cljs.analyzer.warning(cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(!(((variadic_params_37595 === (0))) || ((variadic_params_37595 === ((1) + mfa))))){
cljs.analyzer.warning(cljs.core.cst$kw$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_37596),param_counts_37596)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$letfn_STAR_,(function (op,env,p__37597,name,_){
var vec__37598 = p__37597;
var seq__37599 = cljs.core.seq(vec__37598);
var first__37600 = cljs.core.first(seq__37599);
var seq__37599__$1 = cljs.core.next(seq__37599);
var ___$1 = first__37600;
var first__37600__$1 = cljs.core.first(seq__37599__$1);
var seq__37599__$2 = cljs.core.next(seq__37599__$1);
var bindings = first__37600__$1;
var exprs = seq__37599__$2;
var form = vec__37598;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__37601 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__37598,seq__37599,first__37600,seq__37599__$1,___$1,first__37600__$1,seq__37599__$2,bindings,exprs,form){
return (function (p__37607,n){
var vec__37608 = p__37607;
var map__37611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608,(0),null);
var map__37611__$1 = ((((!((map__37611 == null)))?((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37611):map__37611);
var env__$1 = map__37611__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37611__$1,cljs.core.cst$kw$locals);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608,(1),null);
var ret_tag = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_37613 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__37614 = env__$1;
var G__37615 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37614,G__37615) : cljs.analyzer.analyze.call(null,G__37614,G__37615));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_37613;
}})();
var be = (function (){var G__37616 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$variadic,cljs.core.cst$kw$method_DASH_params,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[n,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37616,cljs.core.cst$kw$ret_DASH_tag,ret_tag);
} else {
return G__37616;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__37598,seq__37599,first__37600,seq__37599__$1,___$1,first__37600__$1,seq__37599__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37601,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37601,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var vec__37604 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__37601,meth_env,bes,meth_env__$1,vec__37598,seq__37599,first__37600,seq__37599__$1,___$1,first__37600__$1,seq__37599__$2,bindings,exprs,form){
return (function (p__37617,p__37618){
var vec__37619 = p__37617;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(1),null);
var map__37622 = p__37618;
var map__37622__$1 = ((((!((map__37622 == null)))?((((map__37622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37622):map__37622);
var be = map__37622__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,cljs.core.cst$kw$name);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37622__$1,cljs.core.cst$kw$shadow);
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),shadow);
var fexpr = (function (){var G__37624 = env__$1;
var G__37625 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37624,G__37625) : cljs.analyzer.analyze.call(null,G__37624,G__37625));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,cljs.core.cst$kw$init,fexpr,cljs.core.array_seq([cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__37601,meth_env,bes,meth_env__$1,vec__37598,seq__37599,first__37600,seq__37599__$1,___$1,first__37600__$1,seq__37599__$2,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37604,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37604,(1),null);
var expr = (function (){var G__37626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__37627 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37626,G__37627) : cljs.analyzer.analyze.call(null,G__37626,G__37627));
})();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$letfn,cljs.core.cst$kw$bindings,bes__$1,cljs.core.cst$kw$expr,expr,cljs.core.cst$kw$form,form,cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37628_SHARP_){
var G__37631 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement);
var G__37632 = p1__37628_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37631,G__37632) : cljs.analyzer.analyze.call(null,G__37631,G__37632));
}),cljs.core.butlast(exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_37634 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37634;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$do,(function (op,env,p__37635,_,___$1){
var vec__37636 = p__37635;
var seq__37637 = cljs.core.seq(vec__37636);
var first__37638 = cljs.core.first(seq__37637);
var seq__37637__$1 = cljs.core.next(seq__37637);
var ___$2 = first__37638;
var exprs = seq__37637__$1;
var form = vec__37636;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__37639 = env;
var G__37640 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37639,G__37640) : cljs.analyzer.analyze.call(null,G__37639,G__37640));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$statement):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$return));
var ret = (function (){var G__37641 = ret_env;
var G__37642 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37641,G__37642) : cljs.analyzer.analyze.call(null,G__37641,G__37642));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$do,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$statements,statements,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_37644 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_37644;
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
var vec__37654 = temp__6755__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37654,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37654,(1),null);
if(cljs.core.truth_((function (){var or__7502__auto__ = !((cljs.core.namespace(name) == null));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var G__37659 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var G__37660 = ".";
return goog.string.contains(G__37659,G__37660);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid local name: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$init,cljs.core.cst$kw$name,cljs.core.cst$kw$binding_DASH_form_QMARK_,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$info,cljs.core.cst$kw$tag,cljs.core.cst$kw$shadow,cljs.core.cst$kw$local],[init_expr,name,true,cljs.core.cst$kw$var,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$shadow,(function (){var G__37661 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__37661) : name.call(null,G__37661));
})()], null),cljs.analyzer.get_let_tag(name,init_expr),(function (){var G__37662 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__37662) : name.call(null,G__37662));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fn_DASH_var,true,cljs.core.cst$kw$variadic,cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$max_DASH_fixed_DASH_arity,cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.cst$kw$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__37663 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__37664 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$locals,name], null),be__$1);
var G__37665 = cljs.core.next(bindings__$1);
bes = G__37663;
env = G__37664;
bindings__$1 = G__37665;
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_37667 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37667;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__37670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context))?cljs.core.cst$kw$return:context));
var G__37671 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37670,G__37671) : cljs.analyzer.analyze.call(null,G__37670,G__37671));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_37674 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_37675 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_37675;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37674;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__37676,is_loop){
var vec__37683 = p__37676;
var seq__37684 = cljs.core.seq(vec__37683);
var first__37685 = cljs.core.first(seq__37684);
var seq__37684__$1 = cljs.core.next(seq__37684);
var _ = first__37685;
var first__37685__$1 = cljs.core.first(seq__37684__$1);
var seq__37684__$2 = cljs.core.next(seq__37684__$1);
var bindings = first__37685__$1;
var exprs = seq__37684__$2;
var form = vec__37683;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__37686 = cljs.analyzer.analyze_let_bindings(encl_env,bindings);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(1),null);
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
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$recur,(function (op,env,p__37690,_,___$1){
var vec__37691 = p__37690;
var seq__37692 = cljs.core.seq(vec__37691);
var first__37693 = cljs.core.first(seq__37692);
var seq__37692__$1 = cljs.core.next(seq__37692);
var ___$2 = first__37693;
var exprs = seq__37692__$1;
var form = vec__37691;
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_37694 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_37694,context,frame,vec__37691,seq__37692,first__37693,seq__37692__$1,___$2,exprs,form){
return (function (p1__37689_SHARP_){
var G__37695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var G__37696 = p1__37689_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37695,G__37696) : cljs.analyzer.analyze.call(null,G__37695,G__37696));
});})(_STAR_recur_frames_STAR_37694,context,frame,vec__37691,seq__37692,first__37693,seq__37692__$1,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37694;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__37697_37699 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(frame);
var G__37698_37700 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37697_37699,G__37698_37700) : cljs.core.reset_BANG_.call(null,G__37697_37699,G__37698_37700));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$recur,cljs.core.cst$kw$form,form], null),cljs.core.cst$kw$frame,frame,cljs.core.array_seq([cljs.core.cst$kw$exprs,exprs__$1,cljs.core.cst$kw$children,exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$quote,(function (_,env,p__37701,___$1,___$2){
var vec__37702 = p__37701;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);
var G__37705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$quoted_QMARK_,true);
var G__37706 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__37705,G__37706) : cljs.analyzer.analyze.call(null,G__37705,G__37706));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$new,(function (_,env,p__37708,___$1,___$2){
var vec__37709 = p__37708;
var seq__37710 = cljs.core.seq(vec__37709);
var first__37711 = cljs.core.first(seq__37710);
var seq__37710__$1 = cljs.core.next(seq__37710);
var ___$3 = first__37711;
var first__37711__$1 = cljs.core.first(seq__37710__$1);
var seq__37710__$2 = cljs.core.next(seq__37710__$1);
var ctor = first__37711__$1;
var args = seq__37710__$2;
var form = vec__37709;
var _STAR_recur_frames_STAR_37712 = cljs.analyzer._STAR_recur_frames_STAR_;
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
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_37712,vec__37709,seq__37710,first__37711,seq__37710__$1,___$3,first__37711__$1,seq__37710__$2,ctor,args,form){
return (function (p1__37707_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__37707_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__37707_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_37712,vec__37709,seq__37710,first__37711,seq__37710__$1,___$3,first__37711__$1,seq__37710__$2,ctor,args,form))
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
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37712;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$set_BANG_,(function (_,env,p__37713,___$1,___$2){
var vec__37714 = p__37713;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37714,(3),null);
var form = vec__37714;
var vec__37717 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__8436__auto__ = target;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(1),null);
var _STAR_recur_frames_STAR_37720 = cljs.analyzer._STAR_recur_frames_STAR_;
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

var local_37722 = (function (){var G__37721 = cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__37721) : target__$1.call(null,G__37721));
})();
if(cljs.core.truth_((function (){var or__7502__auto__ = (local_37722 == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(local_37722);
if(cljs.core.truth_(and__7490__auto__)){
var or__7502__auto____$1 = cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(local_37722);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_37722);
if(cljs.core.truth_(or__7502__auto____$2)){
return or__7502__auto____$2;
} else {
return cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_37722);
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
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_37720;
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
var vec__37728 = temp__6755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37728,(0),null);
var map__37731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37728,(1),null);
var map__37731__$1 = ((((!((map__37731 == null)))?((((map__37731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37731):map__37731);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,cljs.core.cst$kw$foreign);
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
var args37734 = [];
var len__8723__auto___37746 = arguments.length;
var i__8724__auto___37747 = (0);
while(true){
if((i__8724__auto___37747 < len__8723__auto___37746)){
args37734.push((arguments[i__8724__auto___37747]));

var G__37748 = (i__8724__auto___37747 + (1));
i__8724__auto___37747 = G__37748;
continue;
} else {
}
break;
}

var G__37736 = args37734.length;
switch (G__37736) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37734.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_37737 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_37737,compiler){
return (function (p1__37733_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__37733_SHARP_));
});})(_STAR_cljs_dep_set_STAR_37737,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency detected, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn* [p1__37733#] (not (contains? *cljs-dep-set* p1__37733#))) deps)")].join('')));
}

var seq__37738 = cljs.core.seq(deps);
var chunk__37739 = null;
var count__37740 = (0);
var i__37741 = (0);
while(true){
if((i__37741 < count__37740)){
var dep = chunk__37739.cljs$core$IIndexed$_nth$arity$2(null,i__37741);
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37742 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__37743 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37742,G__37743) : cljs.analyzer.error_message.call(null,G__37742,G__37743));
})());
}

var G__37750 = seq__37738;
var G__37751 = chunk__37739;
var G__37752 = count__37740;
var G__37753 = (i__37741 + (1));
seq__37738 = G__37750;
chunk__37739 = G__37751;
count__37740 = G__37752;
i__37741 = G__37753;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37738);
if(temp__6753__auto__){
var seq__37738__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37738__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37738__$1);
var G__37754 = cljs.core.chunk_rest(seq__37738__$1);
var G__37755 = c__8413__auto__;
var G__37756 = cljs.core.count(c__8413__auto__);
var G__37757 = (0);
seq__37738 = G__37754;
chunk__37739 = G__37755;
count__37740 = G__37756;
i__37741 = G__37757;
continue;
} else {
var dep = cljs.core.first(seq__37738__$1);
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,dep,cljs.core.cst$kw$defs], null)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.cst$kw$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})())){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37744 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__37745 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37744,G__37745) : cljs.analyzer.error_message.call(null,G__37744,G__37745));
})());
}

var G__37758 = cljs.core.next(seq__37738__$1);
var G__37759 = null;
var G__37760 = (0);
var G__37761 = (0);
seq__37738 = G__37758;
chunk__37739 = G__37759;
count__37740 = G__37760;
i__37741 = G__37761;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_37737;
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
return (function (p__37766){
var vec__37767 = p__37766;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37767,(1),null);
return cljs.analyzer.missing_use_QMARK_(lib,sym,cenv);
});})(cenv))
,uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37774){
var vec__37775 = p__37774;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37775,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37775,(1),null);
return cljs.analyzer.missing_rename_QMARK_(qualified_sym,cenv);
});})(cenv))
,renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37782){
var vec__37783 = p__37782;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37783,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37783,(1),null);
return cljs.analyzer.missing_use_macro_QMARK_(lib,sym);
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cenv){
return (function (p__37790){
var vec__37791 = p__37790;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(1),null);
return cljs.core.not(cljs.analyzer.missing_use_macro_QMARK_(lib,sym));
});})(cenv))
,use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37798){
var vec__37799 = p__37798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37799,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37799,(1),null);
return cljs.core.not(cljs.analyzer.missing_rename_macro_QMARK_(qualified_sym));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var seq__37816 = cljs.core.seq(uses);
var chunk__37817 = null;
var count__37818 = (0);
var i__37819 = (0);
while(true){
if((i__37819 < count__37818)){
var vec__37820 = chunk__37817.cljs$core$IIndexed$_nth$arity$2(null,i__37819);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37820,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37820,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37823 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37824 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37823,G__37824) : cljs.analyzer.error_message.call(null,G__37823,G__37824));
})());
} else {
}

var G__37830 = seq__37816;
var G__37831 = chunk__37817;
var G__37832 = count__37818;
var G__37833 = (i__37819 + (1));
seq__37816 = G__37830;
chunk__37817 = G__37831;
count__37818 = G__37832;
i__37819 = G__37833;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__37816);
if(temp__6753__auto__){
var seq__37816__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37816__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__37816__$1);
var G__37834 = cljs.core.chunk_rest(seq__37816__$1);
var G__37835 = c__8413__auto__;
var G__37836 = cljs.core.count(c__8413__auto__);
var G__37837 = (0);
seq__37816 = G__37834;
chunk__37817 = G__37835;
count__37818 = G__37836;
i__37819 = G__37837;
continue;
} else {
var vec__37825 = cljs.core.first(seq__37816__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37825,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_QMARK_(lib,sym,cenv))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37828 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37829 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"var",cljs.core.cst$kw$lib,lib,cljs.core.cst$kw$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37828,G__37829) : cljs.analyzer.error_message.call(null,G__37828,G__37829));
})());
} else {
}

var G__37838 = cljs.core.next(seq__37816__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37816 = G__37838;
chunk__37817 = G__37839;
count__37818 = G__37840;
i__37819 = G__37841;
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
var args37842 = [];
var len__8723__auto___37859 = arguments.length;
var i__8724__auto___37860 = (0);
while(true){
if((i__8724__auto___37860 < len__8723__auto___37859)){
args37842.push((arguments[i__8724__auto___37860]));

var G__37861 = (i__8724__auto___37860 + (1));
i__8724__auto___37860 = G__37861;
continue;
} else {
}
break;
}

var G__37844 = args37842.length;
switch (G__37844) {
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37842.length)].join('')));

}
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,null,env);
});

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var seq__37845_37863 = cljs.core.seq(use_macros);
var chunk__37846_37864 = null;
var count__37847_37865 = (0);
var i__37848_37866 = (0);
while(true){
if((i__37848_37866 < count__37847_37865)){
var vec__37849_37867 = chunk__37846_37864.cljs$core$IIndexed$_nth$arity$2(null,i__37848_37866);
var sym_37868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37849_37867,(0),null);
var lib_37869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37849_37867,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_37869,sym_37868))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37852 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37853 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_37869,cljs.core.cst$kw$sym,sym_37868], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37852,G__37853) : cljs.analyzer.error_message.call(null,G__37852,G__37853));
})());
} else {
}

var G__37870 = seq__37845_37863;
var G__37871 = chunk__37846_37864;
var G__37872 = count__37847_37865;
var G__37873 = (i__37848_37866 + (1));
seq__37845_37863 = G__37870;
chunk__37846_37864 = G__37871;
count__37847_37865 = G__37872;
i__37848_37866 = G__37873;
continue;
} else {
var temp__6753__auto___37874 = cljs.core.seq(seq__37845_37863);
if(temp__6753__auto___37874){
var seq__37845_37875__$1 = temp__6753__auto___37874;
if(cljs.core.chunked_seq_QMARK_(seq__37845_37875__$1)){
var c__8413__auto___37876 = cljs.core.chunk_first(seq__37845_37875__$1);
var G__37877 = cljs.core.chunk_rest(seq__37845_37875__$1);
var G__37878 = c__8413__auto___37876;
var G__37879 = cljs.core.count(c__8413__auto___37876);
var G__37880 = (0);
seq__37845_37863 = G__37877;
chunk__37846_37864 = G__37878;
count__37847_37865 = G__37879;
i__37848_37866 = G__37880;
continue;
} else {
var vec__37854_37881 = cljs.core.first(seq__37845_37875__$1);
var sym_37882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854_37881,(0),null);
var lib_37883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854_37881,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_(lib_37883,sym_37882))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__37857 = cljs.core.cst$kw$undeclared_DASH_ns_DASH_form;
var G__37858 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"macro",cljs.core.cst$kw$lib,lib_37883,cljs.core.cst$kw$sym,sym_37882], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__37857,G__37858) : cljs.analyzer.error_message.call(null,G__37857,G__37858));
})());
} else {
}

var G__37884 = cljs.core.next(seq__37845_37875__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37845_37863 = G__37884;
chunk__37846_37864 = G__37885;
count__37847_37865 = G__37886;
i__37848_37866 = G__37887;
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

cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__37891,env){
var map__37894 = p__37891;
var map__37894__$1 = ((((!((map__37894 == null)))?((((map__37894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37894):map__37894);
var ast = map__37894__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,cljs.core.cst$kw$name);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,cljs.core.cst$kw$use_DASH_macros);
var missing_uses = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq(uses)))?cljs.analyzer.missing_uses(uses,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,uses,cljs.core.keys(missing_uses));
var remove_missing_uses = ((function (missing_uses,maybe_macros,map__37894,map__37894__$1,ast,name,uses,use_macros){
return (function (p1__37888_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__37888_SHARP_,cljs.core.keys(missing_uses));
});})(missing_uses,maybe_macros,map__37894,map__37894__$1,ast,name,uses,use_macros))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros], null),((function (missing_uses,maybe_macros,remove_missing_uses,map__37894,map__37894__$1,ast,name,uses,use_macros){
return (function (p1__37889_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__37889_SHARP_,cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3(use_macros,missing_uses,env)], 0)),cljs.analyzer.inferred_use_macros(maybe_macros,env)], 0));
});})(missing_uses,maybe_macros,remove_missing_uses,map__37894,map__37894__$1,ast,name,uses,use_macros))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),remove_missing_uses);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,((function (missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__37894,map__37894__$1,ast,name,uses,use_macros){
return (function (p1__37890_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__37890_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$use_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$use_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$uses], null),remove_missing_uses);
});})(missing_uses,maybe_macros,remove_missing_uses,ast_SINGLEQUOTE_,map__37894,map__37894__$1,ast,name,uses,use_macros))
);

return ast_SINGLEQUOTE_;
});
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__37899,env){
var map__37902 = p__37899;
var map__37902__$1 = ((((!((map__37902 == null)))?((((map__37902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37902):map__37902);
var ast = map__37902__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37902__$1,cljs.core.cst$kw$name);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37902__$1,cljs.core.cst$kw$renames);
var missing_renames = (((cljs.analyzer._STAR_analyze_deps_STAR_) && (cljs.core.seq(renames)))?cljs.analyzer.missing_renames(renames,env):null);
var maybe_macros = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,renames,cljs.core.keys(missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros(missing_renames,env);
var remove_missing_renames = ((function (missing_renames,maybe_macros,missing_rename_macros,map__37902,map__37902__$1,ast,name,renames){
return (function (p1__37896_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__37896_SHARP_,cljs.core.keys(missing_renames));
});})(missing_renames,maybe_macros,missing_rename_macros,map__37902,map__37902__$1,ast,name,renames))
;
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rename_DASH_macros], null),((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__37902,map__37902__$1,ast,name,renames){
return (function (p1__37897_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__37897_SHARP_,missing_rename_macros], 0)),cljs.analyzer.inferred_rename_macros(maybe_macros,env)], 0));
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,map__37902,map__37902__$1,ast,name,renames))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),remove_missing_renames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,((function (missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__37902,map__37902__$1,ast,name,renames){
return (function (p1__37898_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__37898_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$rename_DASH_macros], null),cljs.core.merge,cljs.core.cst$kw$rename_DASH_macros.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$renames], null),remove_missing_renames);
});})(missing_renames,maybe_macros,missing_rename_macros,remove_missing_renames,ast_SINGLEQUOTE_,map__37902,map__37902__$1,ast,name,renames))
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
return (((function (){var G__37916 = cljs.core.cst$kw$as;
var G__37917 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__37916,G__37917) : fs.call(null,G__37916,G__37917));
})() <= (1))) && (((function (){var G__37918 = cljs.core.cst$kw$refer;
var G__37919 = (0);
return (fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(G__37918,G__37919) : fs.call(null,G__37918,G__37919));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__37925){
var vec__37926 = p__37925;
var seq__37927 = cljs.core.seq(vec__37926);
var first__37928 = cljs.core.first(seq__37927);
var seq__37927__$1 = cljs.core.next(seq__37927);
var k = first__37928;
var filters = seq__37927__$1;
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
if(!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)) && (cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,valid_kws,vec__37926,seq__37927,first__37928,seq__37927__$1,k,filters){
return (function (p1__37920_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__37920_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__37926,seq__37927,first__37928,seq__37927__$1,k,filters))
,refs))))){
var G__37929 = fs;
var G__37930 = ret;
var G__37931 = true;
fs = G__37929;
ret = G__37930;
err = G__37931;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$exclude)){
var G__37932 = cljs.core.nnext(fs);
var G__37933 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null),cljs.core.into,refs);
var G__37934 = false;
fs = G__37932;
ret = G__37933;
err = G__37934;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)){
var G__37935 = cljs.core.nnext(fs);
var G__37936 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$renames], null),cljs.core.merge,refs);
var G__37937 = false;
fs = G__37935;
ret = G__37936;
err = G__37937;
continue;
} else {
return null;
}
}
}
} else {
var G__37938 = fs;
var G__37939 = ret;
var G__37940 = true;
fs = G__37938;
ret = G__37939;
err = G__37940;
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
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__37942){
var vec__37946 = p__37942;
var seq__37947 = cljs.core.seq(vec__37946);
var first__37948 = cljs.core.first(seq__37947);
var seq__37947__$1 = cljs.core.next(seq__37947);
var lib = first__37948;
var filters = seq__37947__$1;
var spec = vec__37946;
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
if(!(((only_QMARK_) && (cljs.core.sequential_QMARK_(refs)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,refs))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kw,cljs.core.cst$kw$rename)) && (cljs.core.map_QMARK_(refs)) && (cljs.core.every_QMARK_(((function (fs,ret,err,refs,kw,only_QMARK_,vec__37946,seq__37947,first__37948,seq__37947__$1,lib,filters,spec){
return (function (p1__37941_SHARP_){
return cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,p1__37941_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__37946,seq__37947,first__37948,seq__37947__$1,lib,filters,spec))
,refs))))){
var G__37949 = fs;
var G__37950 = ret;
var G__37951 = true;
fs = G__37949;
ret = G__37950;
err = G__37951;
continue;
} else {
var G__37952 = cljs.core.nnext(fs);
var G__37953 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?cljs.core.cst$kw$refer:kw),refs], null));
var G__37954 = false;
fs = G__37952;
ret = G__37953;
err = G__37954;
continue;
}
}
} else {
var G__37955 = fs;
var G__37956 = ret;
var G__37957 = true;
fs = G__37955;
ret = G__37956;
err = G__37957;
continue;
}
} else {
if(!((cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),ret) == null))){
return ret;
} else {
var G__37958 = fs;
var G__37959 = ret;
var G__37960 = true;
fs = G__37958;
ret = G__37959;
err = G__37960;
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
var G__37993 = env;
var G__37994 = macros_QMARK_;
var G__37995 = deps;
var G__37996 = aliases;
var G__37997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__37993;
macros_QMARK_ = G__37994;
deps = G__37995;
aliases = G__37996;
spec = G__37997;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__37977 = spec;
var seq__37978 = cljs.core.seq(vec__37977);
var first__37979 = cljs.core.first(seq__37978);
var seq__37978__$1 = cljs.core.next(seq__37978);
var lib = first__37979;
var opts = seq__37978__$1;
var vec__37980 = (function (){var temp__6755__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')], null));
if((temp__6755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__6755__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name),lib], null);
}
})();
var lib__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(0),null);
var js_module_provides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(1),null);
var map__37983 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__37983__$1 = ((((!((map__37983 == null)))?((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37983):map__37983);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37983__$1,cljs.core.cst$kw$as,lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.cst$kw$refer);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.cst$kw$rename);
var referred_without_renamed = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(renamed)),referred));
var vec__37984 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require,cljs.core.cst$kw$use,cljs.core.cst$kw$rename], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37984,(2),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(!((alias == null))){
var alias_type_37998 = (cljs.core.truth_(macros_QMARK_)?cljs.core.cst$kw$macros:cljs.core.cst$kw$fns);
var lib_SINGLEQUOTE__37999 = (function (){var G__37988 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_37998.cljs$core$IFn$_invoke$arity$1 ? alias_type_37998.cljs$core$IFn$_invoke$arity$1(G__37988) : alias_type_37998.call(null,G__37988));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__37999 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__37999))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_37998], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null)], 0));
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

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((!((alias == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null)], 0))]):null),((!((referred_without_renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred_without_renamed,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))]):null),((!((renamed == null)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env,macros_QMARK_,deps,aliases,spec,vec__37977,seq__37978,first__37979,seq__37978__$1,lib,opts,vec__37980,lib__$1,js_module_provides,map__37983,map__37983__$1,alias,referred,renamed,referred_without_renamed,vec__37984,rk,uk,renk){
return (function (m,p__37989){
var vec__37990 = p__37989;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(0),null);
var renamed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([original], true),referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Renamed symbol "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" not referred")].join(''));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(env,macros_QMARK_,deps,aliases,spec,vec__37977,seq__37978,first__37979,seq__37978__$1,lib,opts,vec__37980,lib__$1,js_module_provides,map__37983,map__37983__$1,alias,referred,renamed,referred_without_renamed,vec__37984,rk,uk,renk))
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

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38000_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__38000_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(spec)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38000_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),/\./))),spec]));
var seq__38011_38021 = cljs.core.seq(import_map);
var chunk__38012_38022 = null;
var count__38013_38023 = (0);
var i__38014_38024 = (0);
while(true){
if((i__38014_38024 < count__38013_38023)){
var vec__38015_38025 = chunk__38012_38022.cljs$core$IIndexed$_nth$arity$2(null,i__38014_38024);
var __38026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015_38025,(0),null);
var spec_38027__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015_38025,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_38027__$1);

var G__38028 = seq__38011_38021;
var G__38029 = chunk__38012_38022;
var G__38030 = count__38013_38023;
var G__38031 = (i__38014_38024 + (1));
seq__38011_38021 = G__38028;
chunk__38012_38022 = G__38029;
count__38013_38023 = G__38030;
i__38014_38024 = G__38031;
continue;
} else {
var temp__6753__auto___38032 = cljs.core.seq(seq__38011_38021);
if(temp__6753__auto___38032){
var seq__38011_38033__$1 = temp__6753__auto___38032;
if(cljs.core.chunked_seq_QMARK_(seq__38011_38033__$1)){
var c__8413__auto___38034 = cljs.core.chunk_first(seq__38011_38033__$1);
var G__38035 = cljs.core.chunk_rest(seq__38011_38033__$1);
var G__38036 = c__8413__auto___38034;
var G__38037 = cljs.core.count(c__8413__auto___38034);
var G__38038 = (0);
seq__38011_38021 = G__38035;
chunk__38012_38022 = G__38036;
count__38013_38023 = G__38037;
i__38014_38024 = G__38038;
continue;
} else {
var vec__38018_38039 = cljs.core.first(seq__38011_38033__$1);
var __38040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018_38039,(0),null);
var spec_38041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38018_38039,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_38041__$1);

var G__38042 = cljs.core.next(seq__38011_38033__$1);
var G__38043 = null;
var G__38044 = (0);
var G__38045 = (0);
seq__38011_38021 = G__38042;
chunk__38012_38022 = G__38043;
count__38013_38023 = G__38044;
i__38014_38024 = G__38045;
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
var map__38048 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null));
var map__38048__$1 = ((((!((map__38048 == null)))?((((map__38048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38048):map__38048);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,cljs.core.cst$kw$require_DASH_macros);
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
var map__38063 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38064){
var vec__38065 = p__38064;
var seq__38066 = cljs.core.seq(vec__38065);
var first__38067 = cljs.core.first(seq__38066);
var seq__38066__$1 = cljs.core.next(seq__38066);
var k = first__38067;
var specs = seq__38066__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__38063__$1 = ((((!((map__38063 == null)))?((((map__38063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38063):map__38063);
var indexed = map__38063__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063__$1,cljs.core.cst$kw$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include_DASH_macros,null,cljs.core.cst$kw$refer_DASH_macros,null], null), null);
var remove_from_spec = ((function (map__38063,map__38063__$1,indexed,require,sugar_keys){
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
var vec__38069 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(1),null);
var G__38075 = pred;
var G__38076 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__38075;
spec = G__38076;
continue;
}
break;
}
});})(map__38063,map__38063__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$refer_DASH_macros)){
return cljs.core.cst$kw$refer;
} else {
return x;
}
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__38050_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null).call(null,p1__38050_SHARP_);
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rename,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$refer,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_macros,null], null), null),x))));
} else {
return x;
}
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
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
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__6755__auto__ = cljs.core.seq(to_macro_specs(require));
if((temp__6755__auto__ == null)){
return args;
} else {
var require_specs = temp__6755__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__6755__auto__,map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__38072 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38072,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__6755__auto__,map__38063,map__38063__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__38087 = cljs.core.seq(to_check);
var chunk__38088 = null;
var count__38089 = (0);
var i__38090 = (0);
while(true){
if((i__38090 < count__38089)){
var vec__38091 = chunk__38088.cljs$core$IIndexed$_nth$arity$2(null,i__38090);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__38097 = seq__38087;
var G__38098 = chunk__38088;
var G__38099 = count__38089;
var G__38100 = (i__38090 + (1));
seq__38087 = G__38097;
chunk__38088 = G__38098;
count__38089 = G__38099;
i__38090 = G__38100;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__38087);
if(temp__6753__auto__){
var seq__38087__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38087__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__38087__$1);
var G__38101 = cljs.core.chunk_rest(seq__38087__$1);
var G__38102 = c__8413__auto__;
var G__38103 = cljs.core.count(c__8413__auto__);
var G__38104 = (0);
seq__38087 = G__38101;
chunk__38088 = G__38102;
count__38089 = G__38103;
i__38090 = G__38104;
continue;
} else {
var vec__38094 = cljs.core.first(seq__38087__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.cst$kw$defs,name], null)))){
cljs.analyzer.warning(cljs.core.cst$kw$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
} else {
}

var G__38105 = cljs.core.next(seq__38087__$1);
var G__38106 = null;
var G__38107 = (0);
var G__38108 = (0);
seq__38087 = G__38105;
chunk__38088 = G__38106;
count__38089 = G__38107;
i__38090 = G__38108;
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
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns,(function (_,env,p__38111,___$1,opts){
var vec__38112 = p__38111;
var seq__38113 = cljs.core.seq(vec__38112);
var first__38114 = cljs.core.first(seq__38113);
var seq__38113__$1 = cljs.core.next(seq__38113);
var ___$2 = first__38114;
var first__38114__$1 = cljs.core.first(seq__38113__$1);
var seq__38113__$2 = cljs.core.next(seq__38113__$1);
var name = first__38114__$1;
var args = seq__38113__$2;
var form = vec__38112;
if(cljs.analyzer._STAR_allow_ns_STAR_){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__38115 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__38115);
} else {
return G__38115;
}
})();
var segments_38146 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_38146))){
cljs.analyzer.warning(cljs.core.cst$kw$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

if(!((cljs.core.some(cljs.analyzer.js_reserved,segments_38146) == null))){
cljs.analyzer.warning(cljs.core.cst$kw$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_38146);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = ((!((docstring == null)))?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs(((!((metadata == null)))?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var map__38116 = cljs.analyzer.parse_ns_excludes(env,args__$2);
var map__38116__$1 = ((((!((map__38116 == null)))?((((map__38116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38116):map__38116);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (m,p__38122){
var vec__38123 = p__38122;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38123,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38123,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = (function (){var G__38126 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38126) : cljs.core.atom.call(null,G__38126));
})();
var aliases = (function (){var G__38127 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38127) : cljs.core.atom.call(null,G__38127));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__38128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38128) : cljs.core.atom.call(null,G__38128));
})();
var reload = (function (){var G__38129 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38129) : cljs.core.atom.call(null,G__38129));
})();
var reloads = (function (){var G__38130 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38130) : cljs.core.atom.call(null,G__38130));
})();
var map__38117 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (m,p__38131){
var vec__38132 = p__38131;
var seq__38133 = cljs.core.seq(vec__38132);
var first__38134 = cljs.core.first(seq__38133);
var seq__38133__$1 = cljs.core.next(seq__38133);
var k = first__38134;
var libs = seq__38133__$1;
var libspec = vec__38132;
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

var temp__6753__auto___38147 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__38132,seq__38133,first__38134,seq__38133__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (p1__38109_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38109_SHARP_));
});})(vec__38132,seq__38133,first__38134,seq__38133__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,libs));
if(temp__6753__auto___38147){
var xs_38148 = temp__6753__auto___38147;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_38148),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_38148,temp__6753__auto___38147,vec__38132,seq__38133,first__38134,seq__38133__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (p1__38110_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38110_SHARP_));
});})(xs_38148,temp__6753__auto___38147,vec__38132,seq__38133,first__38134,seq__38133__$1,k,libs,libspec,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,xs_38148)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (p__38135){
var vec__38136 = p__38135;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,args__$2));
var map__38117__$1 = ((((!((map__38117 == null)))?((((map__38117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38117):map__38117);
var params = map__38117__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,cljs.core.cst$kw$import);
var vec__38118 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (spec_map){
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join(''),(0),(cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)].join('')) - (7))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (m,p__38140){
var vec__38141 = p__38140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(1),null);
var G__38144 = m;
if(!(cljs.core.symbol_identical_QMARK_(v,ns))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38144,k,v);
} else {
return G__38144;
}
});})(ns,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
var require_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38118,(0),null);
var use_macros__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38118,(1),null);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rename_DASH_macros,cljs.core.cst$kw$renames,cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$excludes,cljs.core.cst$kw$name,cljs.core.cst$kw$imports,cljs.core.cst$kw$requires,cljs.core.cst$kw$uses,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$doc],[rename_macros,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([renames,core_renames__$1], 0)),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__7502__auto__ = docstring;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)))),cljs.core.cst$kw$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.cst$kw$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__38145 = ns_info;
var G__38145__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38145,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__38145,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38118,require_macros__$1,use_macros__$1,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use),true]));
});})(G__38145,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38118,require_macros__$1,use_macros__$1,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
):G__38145);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38145__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__38145,G__38145__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38118,require_macros__$1,use_macros__$1,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require),true]));
});})(G__38145,G__38145__$1,ns_info,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,map__38116,map__38116__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__38117,map__38117__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38118,require_macros__$1,use_macros__$1,name__$1,vec__38112,seq__38113,first__38114,seq__38113__$1,___$2,first__38114__$1,seq__38113__$2,name,args,form))
);
} else {
return G__38145__$1;
}
})()], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ns_STAR_,(function (_,env,p__38152,___$1,opts){
var vec__38153 = p__38152;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(0),null);
var quoted_specs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(1),null);
var form = vec__38153;
var temp__6753__auto___38177 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__38153,___$2,quoted_specs,form){
return (function (p1__38149_SHARP_){
return (cljs.core.seq_QMARK_(p1__38149_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__38149_SHARP_)));
});})(vec__38153,___$2,quoted_specs,form))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__6753__auto___38177)){
var not_quoted_38178 = temp__6753__auto___38177;
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(quoted_specs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" must be quoted. Offending spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_38178)].join(''));
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
var map__38156 = cljs.analyzer.parse_ns_excludes(env,args);
var map__38156__$1 = ((((!((map__38156 == null)))?((((map__38156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38156):map__38156);
var excludes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,cljs.core.cst$kw$excludes);
var core_renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,cljs.core.cst$kw$renames);
var core_renames__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,name,args,map__38156,map__38156__$1,excludes,core_renames,vec__38153,___$2,quoted_specs,form){
return (function (m,p__38159){
var vec__38160 = p__38159;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(0),null);
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)].join('')));
});})(specs,name,args,map__38156,map__38156__$1,excludes,core_renames,vec__38153,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = (function (){var G__38163 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38163) : cljs.core.atom.call(null,G__38163));
})();
var aliases = (function (){var G__38164 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38164) : cljs.core.atom.call(null,G__38164));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.cst$kw$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.cst$kw$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = (function (){var G__38165 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$use_DASH_macros,null,cljs.core.cst$kw$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38165) : cljs.core.atom.call(null,G__38165));
})();
var reloads = (function (){var G__38166 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38166) : cljs.core.atom.call(null,G__38166));
})();
var map__38157 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form){
return (function (m,p__38167){
var vec__38168 = p__38167;
var seq__38169 = cljs.core.seq(vec__38168);
var first__38170 = cljs.core.first(seq__38169);
var seq__38169__$1 = cljs.core.next(seq__38169);
var k = first__38170;
var libs = seq__38169__$1;
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

var temp__6757__auto___38179 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__38168,seq__38169,first__38170,seq__38169__$1,k,libs,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form){
return (function (p1__38150_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38150_SHARP_));
});})(vec__38168,seq__38169,first__38170,seq__38169__$1,k,libs,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form))
,libs));
if((temp__6757__auto___38179 == null)){
} else {
var xs_38180 = temp__6757__auto___38179;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_38180),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_38180,temp__6757__auto___38179,vec__38168,seq__38169,first__38170,seq__38169__$1,k,libs,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form){
return (function (p1__38151_SHARP_){
return cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__38151_SHARP_));
});})(xs_38180,temp__6757__auto___38179,vec__38168,seq__38169,first__38170,seq__38169__$1,k,libs,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form))
,xs_38180)));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null], null), null),libs)));
});})(specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form){
return (function (p__38171){
var vec__38172 = p__38171;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38172,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.cst$kw$refer_DASH_clojure);
});})(specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,vec__38153,___$2,quoted_specs,form))
,args));
var map__38157__$1 = ((((!((map__38157 == null)))?((((map__38157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38157):map__38157);
var params = map__38157__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$require);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$rename);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$require_DASH_macros);
var rename_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$rename_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.cst$kw$import);
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

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$ns_STAR_,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$deps,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)))),cljs.core.cst$kw$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.cst$kw$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__38176 = require_info;
var G__38176__$1 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38176,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses], null),((function (G__38176,require_info,ns_info,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38157,map__38157__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38153,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$use),true]));
});})(G__38176,require_info,ns_info,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38157,map__38157__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38153,___$2,quoted_specs,form))
):G__38176);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38176__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$requires], null),((function (G__38176,G__38176__$1,require_info,ns_info,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38157,map__38157__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38153,___$2,quoted_specs,form){
return (function (m){
return cljs.core.with_meta(m,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.cst$kw$require),true]));
});})(G__38176,G__38176__$1,require_info,ns_info,specs,name,args,map__38156,map__38156__$1,excludes,core_renames,core_renames__$1,deps,aliases,spec_parsers,reload,reloads,map__38157,map__38157__$1,params,uses,requires,renames,use_macros,require_macros,rename_macros,imports,vec__38153,___$2,quoted_specs,form))
);
} else {
return G__38176__$1;
}
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__38181){
var vec__38187 = p__38181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(4),null);
var form = vec__38187;
var t = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__38187,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$name,cljs.core.cst$kw$field,cljs.core.cst$kw$column,cljs.core.cst$kw$unsynchronized_DASH_mutable,cljs.core.cst$kw$line,cljs.core.cst$kw$tag,cljs.core.cst$kw$mutable,cljs.core.cst$kw$volatile_DASH_mutable,cljs.core.cst$kw$shadow],[fld,true,cljs.analyzer.get_col(fld,env),cljs.core.cst$kw$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.cst$kw$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__38187,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null)):fields));
var protocols = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$defs,tsym], null),((function (t,locals,protocols,vec__38187,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__7502__auto__ = m;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$name,t,cljs.core.array_seq([cljs.core.cst$kw$type,true,cljs.core.cst$kw$num_DASH_fields,cljs.core.count(fields),cljs.core.cst$kw$record,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$defrecord_STAR_,op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),cljs.core.cst$kw$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocols,protocols], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,protocols,vec__38187,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$op,op,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$t,t,cljs.core.cst$kw$fields,fields,cljs.core.cst$kw$pmasks,pmasks,cljs.core.cst$kw$protocols,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(protocols,cljs.core.cst$sym$cljs$core_SLASH_Object),cljs.core.cst$kw$body,(function (){var G__38190 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$locals,locals);
var G__38191 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38190,G__38191) : cljs.analyzer.analyze.call(null,G__38190,G__38191));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$deftype_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$deftype_STAR_,env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$defrecord_STAR_,(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.cst$kw$defrecord_STAR_,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__38192_SHARP_){
return cljs.core.boolean$((function (){var and__7490__auto__ = (p1__38192_SHARP_ instanceof cljs.core.Symbol);
if(and__7490__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__38192_SHARP_));
} else {
return and__7490__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__38193){
var vec__38197 = p__38193;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.cst$kw$cljs$analyzer_SLASH_error:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
),(cljs.core.truth_(cljs.analyzer.property_symbol_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.cst$kw$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_(member))?cljs.core.cst$kw$cljs$analyzer_SLASH_list:cljs.core.cst$kw$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.cst$kw$cljs$analyzer_SLASH_expr
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__8533__auto__ = (function (){var G__38201 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38201) : cljs.core.atom.call(null,G__38201));
})();
var prefer_table__8534__auto__ = (function (){var G__38202 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38202) : cljs.core.atom.call(null,G__38202));
})();
var method_cache__8535__auto__ = (function (){var G__38203 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38203) : cljs.core.atom.call(null,G__38203));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__38204 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38204) : cljs.core.atom.call(null,G__38204));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (p1__38200_SHARP_){
return cljs.analyzer.classify_dot_form(p1__38200_SHARP_);
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__38205){
var vec__38206 = p__38205;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dot_DASH_action,cljs.core.cst$kw$cljs$analyzer_SLASH_access,cljs.core.cst$kw$target,target,cljs.core.cst$kw$field,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_property,cljs.core.cst$kw$cljs$analyzer_SLASH_list], null),(function (p__38209){
var vec__38210 = p__38209;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38210,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38210,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38210,(2),null);
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
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.cst$kw$cljs$analyzer_SLASH_expr], null),(function (p__38213){
var vec__38214 = p__38213;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__38217){
var vec__38218 = p__38217;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_expr,cljs.core.cst$kw$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__38221){
var vec__38222 = p__38221;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (dot_form){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown dot form of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,dot_form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with classification "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__38233 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__38233__$1 = ((((!((map__38233 == null)))?((((map__38233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38233):map__38233);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38233__$1,cljs.core.cst$kw$dot_DASH_action);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38233__$1,cljs.core.cst$kw$target);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38233__$1,cljs.core.cst$kw$method);
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38233__$1,cljs.core.cst$kw$field);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38233__$1,cljs.core.cst$kw$args);
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

var vec__38235_38240 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast,cljs.core.identity).call(null,cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag)));
var pre_SINGLEQUOTE__38241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38235_38240,(0),null);
var pre_38242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38235_38240,(1),null);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_SINGLEQUOTE__38241);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_38242));
} else {
return and__7490__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$infer_DASH_warning,env,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$warn_DASH_type,cljs.core.cst$kw$property,cljs.core.cst$kw$form,form,cljs.core.cst$kw$type,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",(function (){var G__38238 = pre_SINGLEQUOTE__38241;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,cljs.core.last(pre_SINGLEQUOTE__38241))){
return cljs.core.butlast(G__38238);
} else {
return G__38238;
}
})())),cljs.core.cst$kw$property,prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer.js_tag_QMARK_(tag))){
var pre_38243 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1(pre_38243))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.cst$kw$externs], null),pre_38243),cljs.core.merge,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY], 0));
}
} else {
}

var G__38239 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__38239) {
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
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__38239,v,map__38233,map__38233__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag){
return (function (p1__38225_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38225_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38225_SHARP_));
});})(G__38239,v,map__38233,map__38233__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,target_tag,prop,tag))
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
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$_DOT_,(function (_,env,p__38245,___$1,___$2){
var vec__38246 = p__38245;
var seq__38247 = cljs.core.seq(vec__38246);
var first__38248 = cljs.core.first(seq__38247);
var seq__38247__$1 = cljs.core.next(seq__38247);
var ___$3 = first__38248;
var first__38248__$1 = cljs.core.first(seq__38247__$1);
var seq__38247__$2 = cljs.core.next(seq__38247__$1);
var target = first__38248__$1;
var vec__38249 = seq__38247__$2;
var seq__38250 = cljs.core.seq(vec__38249);
var first__38251 = cljs.core.first(seq__38250);
var seq__38250__$1 = cljs.core.next(seq__38250);
var field = first__38251;
var member_PLUS_ = seq__38250__$1;
var form = vec__38246;
var _STAR_recur_frames_STAR_38252 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38252;
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
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,(function (){var G__38255 = env;
var G__38256 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.js_star_interp.cljs$core$IFn$_invoke$arity$2(G__38255,G__38256) : cljs.analyzer.js_star_interp.call(null,G__38255,G__38256));
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
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),(function (){var G__38258 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)));
return (cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_star_seg.cljs$core$IFn$_invoke$arity$1(G__38258) : cljs.analyzer.js_star_seg.call(null,G__38258));
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
return (function (p1__38259_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38259_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38259_SHARP_));
});})(enve))
,args));
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = cljs.core.cst$kw$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.cst$kw$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_38261 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__38260_SHARP_){
return cljs.analyzer.infer_tag(env,p1__38260_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,types_38261)){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_arithmetic,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$js_DASH_op,js_op,cljs.core.cst$kw$types,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_38261)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$args,cljs.core.cst$kw$children,cljs.core.cst$kw$numeric,cljs.core.cst$kw$segs,cljs.core.cst$kw$op,cljs.core.cst$kw$env,cljs.core.cst$kw$js_DASH_op,cljs.core.cst$kw$form,cljs.core.cst$kw$tag],[argexprs,argexprs,numeric,segs,cljs.core.cst$kw$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_38263 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38263;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_STAR_,(function (op,env,p__38264,_,___$1){
var vec__38265 = p__38264;
var seq__38266 = cljs.core.seq(vec__38265);
var first__38267 = cljs.core.first(seq__38266);
var seq__38266__$1 = cljs.core.next(seq__38266);
var ___$2 = first__38267;
var first__38267__$1 = cljs.core.first(seq__38266__$1);
var seq__38266__$2 = cljs.core.next(seq__38266__$1);
var jsform = first__38267__$1;
var args = seq__38266__$2;
var form = vec__38265;
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
return cljs.core.every_QMARK_((function (p1__38268_SHARP_){
return ((p1__38268_SHARP_ == null)) || ((p1__38268_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__38268_SHARP_ === 'string') || (typeof p1__38268_SHARP_ === 'number') || (p1__38268_SHARP_ === true) || (p1__38268_SHARP_ === false);
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__38270){
var vec__38286 = p__38270;
var seq__38287 = cljs.core.seq(vec__38286);
var first__38288 = cljs.core.first(seq__38287);
var seq__38287__$1 = cljs.core.next(seq__38287);
var f = first__38288;
var args = seq__38287__$1;
var form = vec__38286;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_(fn_var_QMARK_)){
var map__38289_38301 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__38289_38302__$1 = ((((!((map__38289_38301 == null)))?((((map__38289_38301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38289_38301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38289_38301):map__38289_38301);
var variadic_38303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$variadic);
var max_fixed_arity_38304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var method_params_38305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$method_DASH_params);
var name_38306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$name);
var ns_38307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$ns);
var macro_38308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289_38302__$1,cljs.core.cst$kw$macro);
if((cljs.core.not((function (){var and__7490__auto__ = (function (){var G__38297 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns)].join('');
var G__38298 = "$macros";
return goog.string.endsWith(G__38297,G__38298);
})();
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.symbol_identical_QMARK_(cur_ns,ns_38307)) && (macro_38308 === true);
} else {
return and__7490__auto__;
}
})())) && (!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_38305))) && ((!(variadic_38303)) || ((variadic_38303) && ((argc < max_fixed_arity_38304))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name_38306,cljs.core.cst$kw$argc,argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning(cljs.core.cst$kw$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.first(form),cljs.core.cst$kw$argc,argc], null));
} else {
}

var deprecated_QMARK__38309 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__38310 = cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__38309)) && (!(cljs.core.boolean$(no_warn_QMARK__38310)))){
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
var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,vec__38286,seq__38287,first__38288,seq__38287__$1,f,args,form){
return (function (p1__38269_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__38269_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__38269_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,cur_ns,vec__38286,seq__38287,first__38288,seq__38287__$1,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$env,env,cljs.core.cst$kw$op,cljs.core.cst$kw$invoke,cljs.core.cst$kw$form,form,cljs.core.cst$kw$f,fexpr,cljs.core.cst$kw$args,cljs.core.vec(argexprs),cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__38299 = env;
var G__38300 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),arg_syms)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38299,G__38300) : cljs.analyzer.analyze.call(null,G__38299,G__38300));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_38312 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38312;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.cst$kw$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

var G__38316 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,sym,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_Symbol], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38316) : cljs.analyzer.analyze_wrap_meta.call(null,G__38316));
} else {
var map__38317 = cljs.core.meta(sym);
var map__38317__$1 = ((((!((map__38317 == null)))?((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38317):map__38317);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,cljs.core.cst$kw$column);
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
var G__38320 = env;
var G__38320__$1 = (((G__38320 == null))?null:cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(G__38320));
var G__38320__$2 = (((G__38320__$1 == null))?null:cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__38320__$1));
var G__38320__$3 = (((G__38320__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__38320__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr__$1)));
if((G__38320__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns(G__38320__$3);
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
var cached_var_38321 = (new cljs.core.Delay((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.ns_interns_STAR_(cljs.core.cst$sym$cljs$spec),cljs.core.cst$sym$macroexpand_DASH_check);
}),null));
cljs.analyzer.get_macroexpand_check_var = ((function (cached_var_38321){
return (function cljs$analyzer$get_macroexpand_check_var(){
if(!((cljs.core.find_ns_obj(cljs.core.cst$sym$cljs$spec) == null))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cached_var_38321) : cljs.core.deref.call(null,cached_var_38321));
} else {
return null;
}
});})(cached_var_38321))
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
var vec__38327 = cljs.core.next(form);
var seq__38328 = cljs.core.seq(vec__38327);
var first__38329 = cljs.core.first(seq__38328);
var seq__38328__$1 = cljs.core.next(seq__38328);
var target = first__38329;
var args = seq__38328__$1;
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
var _ = ((!((mchk == null)))?(function (){var G__38330 = mac_var;
var G__38331 = cljs.core.next(form);
return (mchk.cljs$core$IFn$_invoke$arity$2 ? mchk.cljs$core$IFn$_invoke$arity$2(G__38330,G__38331) : mchk.call(null,G__38330,G__38331));
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
var val__37054__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__37054__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e38333){var err__37090__auto__ = e38333;
if(cljs.analyzer.analysis_error_QMARK_(err__37090__auto__)){
throw err__37090__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__37090__auto__.message,err__37090__auto__);
}
}}finally {if((val__37054__auto__ == null)){
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
}catch (e38335){var err__37090__auto__ = e38335;
if(cljs.analyzer.analysis_error_QMARK_(err__37090__auto__)){
throw err__37090__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__37090__auto__.message,err__37090__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
var args38336 = [];
var len__8723__auto___38339 = arguments.length;
var i__8724__auto___38340 = (0);
while(true){
if((i__8724__auto___38340 < len__8723__auto___38339)){
args38336.push((arguments[i__8724__auto___38340]));

var G__38341 = (i__8724__auto___38340 + (1));
i__8724__auto___38340 = G__38341;
continue;
} else {
}
break;
}

var G__38338 = args38336.length;
switch (G__38338) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38336.length)].join('')));

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
var ks = (function (){var _STAR_recur_frames_STAR_38348 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38348,expr_env){
return (function (p1__38343_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38343_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38343_SHARP_));
});})(_STAR_recur_frames_STAR_38348,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38348;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_38349 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38349,expr_env,ks){
return (function (p1__38344_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38344_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38344_SHARP_));
});})(_STAR_recur_frames_STAR_38349,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38349;
}})();
var G__38350 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$op,cljs.core.cst$kw$map,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$keys,ks,cljs.core.cst$kw$vals,vs,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IMap], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38350) : cljs.analyzer.analyze_wrap_meta.call(null,G__38350));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_38354 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38354,expr_env){
return (function (p1__38351_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38351_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38351_SHARP_));
});})(_STAR_recur_frames_STAR_38354,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38354;
}})();
var G__38355 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$list,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IList], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38355) : cljs.analyzer.analyze_wrap_meta.call(null,G__38355));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_38359 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38359,expr_env){
return (function (p1__38356_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38356_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38356_SHARP_));
});})(_STAR_recur_frames_STAR_38359,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38359;
}})();
var G__38360 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$vector,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_IVector], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38360) : cljs.analyzer.analyze_wrap_meta.call(null,G__38360));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = (function (){var _STAR_recur_frames_STAR_38364 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38364,expr_env){
return (function (p1__38361_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38361_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38361_SHARP_));
});})(_STAR_recur_frames_STAR_38364,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38364;
}})();
var G__38365 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$op,cljs.core.cst$kw$set,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form,cljs.core.cst$kw$items,items,cljs.core.cst$kw$children,items,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_ISet], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__38365) : cljs.analyzer.analyze_wrap_meta.call(null,G__38365));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr);
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_38370 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38370,val,expr_env){
return (function (p1__38366_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38366_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38366_SHARP_));
});})(_STAR_recur_frames_STAR_38370,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38370;
}})()):(function (){var _STAR_recur_frames_STAR_38371 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_38371,val,expr_env){
return (function (p1__38367_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__38367_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__38367_SHARP_));
});})(_STAR_recur_frames_STAR_38371,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_38371;
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
var G__38373 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$op,cljs.core.cst$kw$constant,cljs.core.cst$kw$env,env,cljs.core.cst$kw$form,form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38373,cljs.core.cst$kw$tag,tag);
} else {
return G__38373;
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
var args38374 = [];
var len__8723__auto___38379 = arguments.length;
var i__8724__auto___38380 = (0);
while(true){
if((i__8724__auto___38380 < len__8723__auto___38379)){
args38374.push((arguments[i__8724__auto___38380]));

var G__38381 = (i__8724__auto___38380 + (1));
i__8724__auto___38380 = G__38381;
continue;
} else {
}
break;
}

var G__38376 = args38374.length;
switch (G__38376) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38374.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__37054__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__37054__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_38378 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__7502__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_38378;
}}catch (e38377){var err__37090__auto__ = e38377;
if(cljs.analyzer.analysis_error_QMARK_(err__37090__auto__)){
throw err__37090__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__37090__auto__.message,err__37090__auto__);
}
}}finally {if((val__37054__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;

cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)),s));
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
var args38383 = [];
var len__8723__auto___38390 = arguments.length;
var i__8724__auto___38391 = (0);
while(true){
if((i__8724__auto___38391 < len__8723__auto___38390)){
args38383.push((arguments[i__8724__auto___38391]));

var G__38392 = (i__8724__auto___38391 + (1));
i__8724__auto___38391 = G__38392;
continue;
} else {
}
break;
}

var G__38385 = args38383.length;
switch (G__38385) {
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38383.length)].join('')));

}
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2(forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.empty_env(),cljs.core.cst$kw$build_DASH_options,opts);
var _STAR_file_defs_STAR_38386 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR_38387 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR_38388 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR_38389 = cljs.tools.reader._STAR_alias_map_STAR_;
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
var G__38394 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast);
var G__38395 = cljs.core.next(forms__$1);
ns = G__38394;
forms__$1 = G__38395;
continue;
} else {
var G__38396 = ns;
var G__38397 = cljs.core.next(forms__$1);
ns = G__38396;
forms__$1 = G__38397;
continue;
}
} else {
return ns;
}
break;
}
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_38389;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_38388;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_38387;

cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR_38386;
}});

cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 2;


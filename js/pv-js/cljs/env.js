// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.env');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args32103 = [];
var len__8723__auto___32129 = arguments.length;
var i__8724__auto___32131 = (0);
while(true){
if((i__8724__auto___32131 < len__8723__auto___32129)){
args32103.push((arguments[i__8724__auto___32131]));

var G__32133 = (i__8724__auto___32131 + (1));
i__8724__auto___32131 = G__32133;
continue;
} else {
}
break;
}

var G__32125 = args32103.length;
switch (G__32125) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32103.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__32128 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null),cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_data_DASH_readers,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_externs,null,cljs.core.cst$kw$options,options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32128) : cljs.core.atom.call(null,G__32128));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;


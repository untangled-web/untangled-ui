// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34468 = arguments.length;
var i__8724__auto___34470 = (0);
while(true){
if((i__8724__auto___34470 < len__8723__auto___34468)){
args__8730__auto__.push((arguments[i__8724__auto___34470]));

var G__34471 = (i__8724__auto___34470 + (1));
i__8724__auto___34470 = G__34471;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34455){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34455));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34510 = arguments.length;
var i__8724__auto___34511 = (0);
while(true){
if((i__8724__auto___34511 < len__8723__auto___34510)){
args__8730__auto__.push((arguments[i__8724__auto___34511]));

var G__34514 = (i__8724__auto___34511 + (1));
i__8724__auto___34511 = G__34514;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34487){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34487));
});

var g_QMARK__34529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_34530 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34529){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34529))
,null));
var mkg_34531 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34529,g_34530){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34529,g_34530))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34529,g_34530,mkg_34531){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__34529) : cljs.core.deref.call(null,g_QMARK__34529)).call(null,x);
});})(g_QMARK__34529,g_34530,mkg_34531))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34529,g_34530,mkg_34531){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_34531) : cljs.core.deref.call(null,mkg_34531)).call(null,gfn);
});})(g_QMARK__34529,g_34530,mkg_34531))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34529,g_34530,mkg_34531){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_34530) : cljs.core.deref.call(null,g_34530)).call(null,generator);
});})(g_QMARK__34529,g_34530,mkg_34531))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__34295__auto___34762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34295__auto___34762){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34769 = arguments.length;
var i__8724__auto___34770 = (0);
while(true){
if((i__8724__auto___34770 < len__8723__auto___34769)){
args__8730__auto__.push((arguments[i__8724__auto___34770]));

var G__34774 = (i__8724__auto___34770 + (1));
i__8724__auto___34770 = G__34774;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34762))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34762){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34762) : cljs.core.deref.call(null,g__34295__auto___34762)),args);
});})(g__34295__auto___34762))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34295__auto___34762){
return (function (seq34566){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34566));
});})(g__34295__auto___34762))
;


var g__34295__auto___34786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34295__auto___34786){
return (function cljs$spec$impl$gen$list(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34787 = arguments.length;
var i__8724__auto___34788 = (0);
while(true){
if((i__8724__auto___34788 < len__8723__auto___34787)){
args__8730__auto__.push((arguments[i__8724__auto___34788]));

var G__34789 = (i__8724__auto___34788 + (1));
i__8724__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34786))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34786){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34786) : cljs.core.deref.call(null,g__34295__auto___34786)),args);
});})(g__34295__auto___34786))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34295__auto___34786){
return (function (seq34577){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34577));
});})(g__34295__auto___34786))
;


var g__34295__auto___34795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34295__auto___34795){
return (function cljs$spec$impl$gen$map(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34796 = arguments.length;
var i__8724__auto___34797 = (0);
while(true){
if((i__8724__auto___34797 < len__8723__auto___34796)){
args__8730__auto__.push((arguments[i__8724__auto___34797]));

var G__34798 = (i__8724__auto___34797 + (1));
i__8724__auto___34797 = G__34798;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34795))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34795){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34795) : cljs.core.deref.call(null,g__34295__auto___34795)),args);
});})(g__34295__auto___34795))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34295__auto___34795){
return (function (seq34587){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34587));
});})(g__34295__auto___34795))
;


var g__34295__auto___34805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34295__auto___34805){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34808 = arguments.length;
var i__8724__auto___34810 = (0);
while(true){
if((i__8724__auto___34810 < len__8723__auto___34808)){
args__8730__auto__.push((arguments[i__8724__auto___34810]));

var G__34812 = (i__8724__auto___34810 + (1));
i__8724__auto___34810 = G__34812;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34805))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34805){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34805) : cljs.core.deref.call(null,g__34295__auto___34805)),args);
});})(g__34295__auto___34805))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34295__auto___34805){
return (function (seq34593){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34593));
});})(g__34295__auto___34805))
;


var g__34295__auto___34813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34295__auto___34813){
return (function cljs$spec$impl$gen$set(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34818 = arguments.length;
var i__8724__auto___34819 = (0);
while(true){
if((i__8724__auto___34819 < len__8723__auto___34818)){
args__8730__auto__.push((arguments[i__8724__auto___34819]));

var G__34821 = (i__8724__auto___34819 + (1));
i__8724__auto___34819 = G__34821;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34813))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34813){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34813) : cljs.core.deref.call(null,g__34295__auto___34813)),args);
});})(g__34295__auto___34813))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34295__auto___34813){
return (function (seq34601){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34601));
});})(g__34295__auto___34813))
;


var g__34295__auto___34826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34295__auto___34826){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34832 = arguments.length;
var i__8724__auto___34837 = (0);
while(true){
if((i__8724__auto___34837 < len__8723__auto___34832)){
args__8730__auto__.push((arguments[i__8724__auto___34837]));

var G__34839 = (i__8724__auto___34837 + (1));
i__8724__auto___34837 = G__34839;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34826))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34826){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34826) : cljs.core.deref.call(null,g__34295__auto___34826)),args);
});})(g__34295__auto___34826))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34295__auto___34826){
return (function (seq34611){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34611));
});})(g__34295__auto___34826))
;


var g__34295__auto___34850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34295__auto___34850){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34854 = arguments.length;
var i__8724__auto___34855 = (0);
while(true){
if((i__8724__auto___34855 < len__8723__auto___34854)){
args__8730__auto__.push((arguments[i__8724__auto___34855]));

var G__34857 = (i__8724__auto___34855 + (1));
i__8724__auto___34855 = G__34857;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34850))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34850){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34850) : cljs.core.deref.call(null,g__34295__auto___34850)),args);
});})(g__34295__auto___34850))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34295__auto___34850){
return (function (seq34619){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34619));
});})(g__34295__auto___34850))
;


var g__34295__auto___34870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34295__auto___34870){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34875 = arguments.length;
var i__8724__auto___34877 = (0);
while(true){
if((i__8724__auto___34877 < len__8723__auto___34875)){
args__8730__auto__.push((arguments[i__8724__auto___34877]));

var G__34879 = (i__8724__auto___34877 + (1));
i__8724__auto___34877 = G__34879;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34870))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34870){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34870) : cljs.core.deref.call(null,g__34295__auto___34870)),args);
});})(g__34295__auto___34870))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34295__auto___34870){
return (function (seq34625){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34625));
});})(g__34295__auto___34870))
;


var g__34295__auto___34880 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34295__auto___34880){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34886 = arguments.length;
var i__8724__auto___34887 = (0);
while(true){
if((i__8724__auto___34887 < len__8723__auto___34886)){
args__8730__auto__.push((arguments[i__8724__auto___34887]));

var G__34889 = (i__8724__auto___34887 + (1));
i__8724__auto___34887 = G__34889;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34880))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34880){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34880) : cljs.core.deref.call(null,g__34295__auto___34880)),args);
});})(g__34295__auto___34880))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34295__auto___34880){
return (function (seq34632){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34632));
});})(g__34295__auto___34880))
;


var g__34295__auto___34895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34295__auto___34895){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34896 = arguments.length;
var i__8724__auto___34897 = (0);
while(true){
if((i__8724__auto___34897 < len__8723__auto___34896)){
args__8730__auto__.push((arguments[i__8724__auto___34897]));

var G__34902 = (i__8724__auto___34897 + (1));
i__8724__auto___34897 = G__34902;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34895))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34895){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34895) : cljs.core.deref.call(null,g__34295__auto___34895)),args);
});})(g__34295__auto___34895))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34295__auto___34895){
return (function (seq34639){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34639));
});})(g__34295__auto___34895))
;


var g__34295__auto___34910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34295__auto___34910){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34915 = arguments.length;
var i__8724__auto___34916 = (0);
while(true){
if((i__8724__auto___34916 < len__8723__auto___34915)){
args__8730__auto__.push((arguments[i__8724__auto___34916]));

var G__34917 = (i__8724__auto___34916 + (1));
i__8724__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34910))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34910){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34910) : cljs.core.deref.call(null,g__34295__auto___34910)),args);
});})(g__34295__auto___34910))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34295__auto___34910){
return (function (seq34645){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34645));
});})(g__34295__auto___34910))
;


var g__34295__auto___34932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34295__auto___34932){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34933 = arguments.length;
var i__8724__auto___34935 = (0);
while(true){
if((i__8724__auto___34935 < len__8723__auto___34933)){
args__8730__auto__.push((arguments[i__8724__auto___34935]));

var G__34938 = (i__8724__auto___34935 + (1));
i__8724__auto___34935 = G__34938;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34932))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34932){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34932) : cljs.core.deref.call(null,g__34295__auto___34932)),args);
});})(g__34295__auto___34932))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34295__auto___34932){
return (function (seq34650){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34650));
});})(g__34295__auto___34932))
;


var g__34295__auto___34948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34295__auto___34948){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34952 = arguments.length;
var i__8724__auto___34953 = (0);
while(true){
if((i__8724__auto___34953 < len__8723__auto___34952)){
args__8730__auto__.push((arguments[i__8724__auto___34953]));

var G__34957 = (i__8724__auto___34953 + (1));
i__8724__auto___34953 = G__34957;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34948))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34948){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34948) : cljs.core.deref.call(null,g__34295__auto___34948)),args);
});})(g__34295__auto___34948))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34295__auto___34948){
return (function (seq34672){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34672));
});})(g__34295__auto___34948))
;


var g__34295__auto___34959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34295__auto___34959){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34963 = arguments.length;
var i__8724__auto___34964 = (0);
while(true){
if((i__8724__auto___34964 < len__8723__auto___34963)){
args__8730__auto__.push((arguments[i__8724__auto___34964]));

var G__34965 = (i__8724__auto___34964 + (1));
i__8724__auto___34964 = G__34965;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34959))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34959){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34959) : cljs.core.deref.call(null,g__34295__auto___34959)),args);
});})(g__34295__auto___34959))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34295__auto___34959){
return (function (seq34694){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34694));
});})(g__34295__auto___34959))
;


var g__34295__auto___34968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34295__auto___34968){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34974 = arguments.length;
var i__8724__auto___34975 = (0);
while(true){
if((i__8724__auto___34975 < len__8723__auto___34974)){
args__8730__auto__.push((arguments[i__8724__auto___34975]));

var G__34976 = (i__8724__auto___34975 + (1));
i__8724__auto___34975 = G__34976;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34968))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34968){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34968) : cljs.core.deref.call(null,g__34295__auto___34968)),args);
});})(g__34295__auto___34968))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34295__auto___34968){
return (function (seq34703){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34703));
});})(g__34295__auto___34968))
;


var g__34295__auto___34985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34295__auto___34985){
return (function cljs$spec$impl$gen$return(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34987 = arguments.length;
var i__8724__auto___34989 = (0);
while(true){
if((i__8724__auto___34989 < len__8723__auto___34987)){
args__8730__auto__.push((arguments[i__8724__auto___34989]));

var G__34991 = (i__8724__auto___34989 + (1));
i__8724__auto___34989 = G__34991;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34985))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34985){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34985) : cljs.core.deref.call(null,g__34295__auto___34985)),args);
});})(g__34295__auto___34985))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34295__auto___34985){
return (function (seq34712){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34712));
});})(g__34295__auto___34985))
;


var g__34295__auto___34996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34295__auto___34996){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34999 = arguments.length;
var i__8724__auto___35001 = (0);
while(true){
if((i__8724__auto___35001 < len__8723__auto___34999)){
args__8730__auto__.push((arguments[i__8724__auto___35001]));

var G__35002 = (i__8724__auto___35001 + (1));
i__8724__auto___35001 = G__35002;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___34996))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___34996){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___34996) : cljs.core.deref.call(null,g__34295__auto___34996)),args);
});})(g__34295__auto___34996))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34295__auto___34996){
return (function (seq34726){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34726));
});})(g__34295__auto___34996))
;


var g__34295__auto___35004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34295__auto___35004){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35011 = arguments.length;
var i__8724__auto___35012 = (0);
while(true){
if((i__8724__auto___35012 < len__8723__auto___35011)){
args__8730__auto__.push((arguments[i__8724__auto___35012]));

var G__35013 = (i__8724__auto___35012 + (1));
i__8724__auto___35012 = G__35013;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___35004))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___35004){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___35004) : cljs.core.deref.call(null,g__34295__auto___35004)),args);
});})(g__34295__auto___35004))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34295__auto___35004){
return (function (seq34747){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34747));
});})(g__34295__auto___35004))
;


var g__34295__auto___35023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__34295__auto___35023){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35027 = arguments.length;
var i__8724__auto___35028 = (0);
while(true){
if((i__8724__auto___35028 < len__8723__auto___35027)){
args__8730__auto__.push((arguments[i__8724__auto___35028]));

var G__35029 = (i__8724__auto___35028 + (1));
i__8724__auto___35028 = G__35029;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34295__auto___35023))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34295__auto___35023){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34295__auto___35023) : cljs.core.deref.call(null,g__34295__auto___35023)),args);
});})(g__34295__auto___35023))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__34295__auto___35023){
return (function (seq34761){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34761));
});})(g__34295__auto___35023))
;

var g__34349__auto___35239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34349__auto___35239){
return (function cljs$spec$impl$gen$any(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35240 = arguments.length;
var i__8724__auto___35241 = (0);
while(true){
if((i__8724__auto___35241 < len__8723__auto___35240)){
args__8730__auto__.push((arguments[i__8724__auto___35241]));

var G__35244 = (i__8724__auto___35241 + (1));
i__8724__auto___35241 = G__35244;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35239))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35239){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35239) : cljs.core.deref.call(null,g__34349__auto___35239));
});})(g__34349__auto___35239))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34349__auto___35239){
return (function (seq35044){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35044));
});})(g__34349__auto___35239))
;


var g__34349__auto___35249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34349__auto___35249){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35250 = arguments.length;
var i__8724__auto___35251 = (0);
while(true){
if((i__8724__auto___35251 < len__8723__auto___35250)){
args__8730__auto__.push((arguments[i__8724__auto___35251]));

var G__35252 = (i__8724__auto___35251 + (1));
i__8724__auto___35251 = G__35252;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35249))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35249){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35249) : cljs.core.deref.call(null,g__34349__auto___35249));
});})(g__34349__auto___35249))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34349__auto___35249){
return (function (seq35048){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35048));
});})(g__34349__auto___35249))
;


var g__34349__auto___35258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34349__auto___35258){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35260 = arguments.length;
var i__8724__auto___35261 = (0);
while(true){
if((i__8724__auto___35261 < len__8723__auto___35260)){
args__8730__auto__.push((arguments[i__8724__auto___35261]));

var G__35262 = (i__8724__auto___35261 + (1));
i__8724__auto___35261 = G__35262;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35258))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35258){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35258) : cljs.core.deref.call(null,g__34349__auto___35258));
});})(g__34349__auto___35258))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34349__auto___35258){
return (function (seq35054){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35054));
});})(g__34349__auto___35258))
;


var g__34349__auto___35268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34349__auto___35268){
return (function cljs$spec$impl$gen$char(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35270 = arguments.length;
var i__8724__auto___35271 = (0);
while(true){
if((i__8724__auto___35271 < len__8723__auto___35270)){
args__8730__auto__.push((arguments[i__8724__auto___35271]));

var G__35272 = (i__8724__auto___35271 + (1));
i__8724__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35268))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35268){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35268) : cljs.core.deref.call(null,g__34349__auto___35268));
});})(g__34349__auto___35268))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34349__auto___35268){
return (function (seq35062){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35062));
});})(g__34349__auto___35268))
;


var g__34349__auto___35278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34349__auto___35278){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35280 = arguments.length;
var i__8724__auto___35281 = (0);
while(true){
if((i__8724__auto___35281 < len__8723__auto___35280)){
args__8730__auto__.push((arguments[i__8724__auto___35281]));

var G__35282 = (i__8724__auto___35281 + (1));
i__8724__auto___35281 = G__35282;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35278))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35278){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35278) : cljs.core.deref.call(null,g__34349__auto___35278));
});})(g__34349__auto___35278))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34349__auto___35278){
return (function (seq35070){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35070));
});})(g__34349__auto___35278))
;


var g__34349__auto___35287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34349__auto___35287){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35290 = arguments.length;
var i__8724__auto___35291 = (0);
while(true){
if((i__8724__auto___35291 < len__8723__auto___35290)){
args__8730__auto__.push((arguments[i__8724__auto___35291]));

var G__35292 = (i__8724__auto___35291 + (1));
i__8724__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35287))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35287){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35287) : cljs.core.deref.call(null,g__34349__auto___35287));
});})(g__34349__auto___35287))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34349__auto___35287){
return (function (seq35076){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35076));
});})(g__34349__auto___35287))
;


var g__34349__auto___35297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34349__auto___35297){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35299 = arguments.length;
var i__8724__auto___35300 = (0);
while(true){
if((i__8724__auto___35300 < len__8723__auto___35299)){
args__8730__auto__.push((arguments[i__8724__auto___35300]));

var G__35301 = (i__8724__auto___35300 + (1));
i__8724__auto___35300 = G__35301;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35297))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35297){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35297) : cljs.core.deref.call(null,g__34349__auto___35297));
});})(g__34349__auto___35297))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34349__auto___35297){
return (function (seq35085){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35085));
});})(g__34349__auto___35297))
;


var g__34349__auto___35302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34349__auto___35302){
return (function cljs$spec$impl$gen$double(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35303 = arguments.length;
var i__8724__auto___35305 = (0);
while(true){
if((i__8724__auto___35305 < len__8723__auto___35303)){
args__8730__auto__.push((arguments[i__8724__auto___35305]));

var G__35307 = (i__8724__auto___35305 + (1));
i__8724__auto___35305 = G__35307;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35302))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35302){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35302) : cljs.core.deref.call(null,g__34349__auto___35302));
});})(g__34349__auto___35302))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34349__auto___35302){
return (function (seq35091){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35091));
});})(g__34349__auto___35302))
;


var g__34349__auto___35312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34349__auto___35312){
return (function cljs$spec$impl$gen$int(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35313 = arguments.length;
var i__8724__auto___35314 = (0);
while(true){
if((i__8724__auto___35314 < len__8723__auto___35313)){
args__8730__auto__.push((arguments[i__8724__auto___35314]));

var G__35317 = (i__8724__auto___35314 + (1));
i__8724__auto___35314 = G__35317;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35312))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35312){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35312) : cljs.core.deref.call(null,g__34349__auto___35312));
});})(g__34349__auto___35312))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34349__auto___35312){
return (function (seq35104){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35104));
});})(g__34349__auto___35312))
;


var g__34349__auto___35321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34349__auto___35321){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35322 = arguments.length;
var i__8724__auto___35323 = (0);
while(true){
if((i__8724__auto___35323 < len__8723__auto___35322)){
args__8730__auto__.push((arguments[i__8724__auto___35323]));

var G__35324 = (i__8724__auto___35323 + (1));
i__8724__auto___35323 = G__35324;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35321))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35321){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35321) : cljs.core.deref.call(null,g__34349__auto___35321));
});})(g__34349__auto___35321))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34349__auto___35321){
return (function (seq35108){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35108));
});})(g__34349__auto___35321))
;


var g__34349__auto___35329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34349__auto___35329){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35332 = arguments.length;
var i__8724__auto___35333 = (0);
while(true){
if((i__8724__auto___35333 < len__8723__auto___35332)){
args__8730__auto__.push((arguments[i__8724__auto___35333]));

var G__35334 = (i__8724__auto___35333 + (1));
i__8724__auto___35333 = G__35334;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35329))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35329){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35329) : cljs.core.deref.call(null,g__34349__auto___35329));
});})(g__34349__auto___35329))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34349__auto___35329){
return (function (seq35120){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35120));
});})(g__34349__auto___35329))
;


var g__34349__auto___35348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34349__auto___35348){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35349 = arguments.length;
var i__8724__auto___35351 = (0);
while(true){
if((i__8724__auto___35351 < len__8723__auto___35349)){
args__8730__auto__.push((arguments[i__8724__auto___35351]));

var G__35353 = (i__8724__auto___35351 + (1));
i__8724__auto___35351 = G__35353;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35348))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35348){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35348) : cljs.core.deref.call(null,g__34349__auto___35348));
});})(g__34349__auto___35348))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34349__auto___35348){
return (function (seq35136){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35136));
});})(g__34349__auto___35348))
;


var g__34349__auto___35356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34349__auto___35356){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35358 = arguments.length;
var i__8724__auto___35359 = (0);
while(true){
if((i__8724__auto___35359 < len__8723__auto___35358)){
args__8730__auto__.push((arguments[i__8724__auto___35359]));

var G__35360 = (i__8724__auto___35359 + (1));
i__8724__auto___35359 = G__35360;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35356))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35356){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35356) : cljs.core.deref.call(null,g__34349__auto___35356));
});})(g__34349__auto___35356))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34349__auto___35356){
return (function (seq35141){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35141));
});})(g__34349__auto___35356))
;


var g__34349__auto___35365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34349__auto___35365){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35366 = arguments.length;
var i__8724__auto___35368 = (0);
while(true){
if((i__8724__auto___35368 < len__8723__auto___35366)){
args__8730__auto__.push((arguments[i__8724__auto___35368]));

var G__35370 = (i__8724__auto___35368 + (1));
i__8724__auto___35368 = G__35370;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35365))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35365){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35365) : cljs.core.deref.call(null,g__34349__auto___35365));
});})(g__34349__auto___35365))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34349__auto___35365){
return (function (seq35144){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35144));
});})(g__34349__auto___35365))
;


var g__34349__auto___35373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34349__auto___35373){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35375 = arguments.length;
var i__8724__auto___35376 = (0);
while(true){
if((i__8724__auto___35376 < len__8723__auto___35375)){
args__8730__auto__.push((arguments[i__8724__auto___35376]));

var G__35377 = (i__8724__auto___35376 + (1));
i__8724__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35373))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35373){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35373) : cljs.core.deref.call(null,g__34349__auto___35373));
});})(g__34349__auto___35373))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34349__auto___35373){
return (function (seq35159){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35159));
});})(g__34349__auto___35373))
;


var g__34349__auto___35380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34349__auto___35380){
return (function cljs$spec$impl$gen$string(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35381 = arguments.length;
var i__8724__auto___35382 = (0);
while(true){
if((i__8724__auto___35382 < len__8723__auto___35381)){
args__8730__auto__.push((arguments[i__8724__auto___35382]));

var G__35383 = (i__8724__auto___35382 + (1));
i__8724__auto___35382 = G__35383;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35380))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35380){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35380) : cljs.core.deref.call(null,g__34349__auto___35380));
});})(g__34349__auto___35380))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34349__auto___35380){
return (function (seq35174){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35174));
});})(g__34349__auto___35380))
;


var g__34349__auto___35384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34349__auto___35384){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35385 = arguments.length;
var i__8724__auto___35386 = (0);
while(true){
if((i__8724__auto___35386 < len__8723__auto___35385)){
args__8730__auto__.push((arguments[i__8724__auto___35386]));

var G__35389 = (i__8724__auto___35386 + (1));
i__8724__auto___35386 = G__35389;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35384))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35384){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35384) : cljs.core.deref.call(null,g__34349__auto___35384));
});})(g__34349__auto___35384))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34349__auto___35384){
return (function (seq35178){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35178));
});})(g__34349__auto___35384))
;


var g__34349__auto___35392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34349__auto___35392){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35393 = arguments.length;
var i__8724__auto___35396 = (0);
while(true){
if((i__8724__auto___35396 < len__8723__auto___35393)){
args__8730__auto__.push((arguments[i__8724__auto___35396]));

var G__35397 = (i__8724__auto___35396 + (1));
i__8724__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35392))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35392){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35392) : cljs.core.deref.call(null,g__34349__auto___35392));
});})(g__34349__auto___35392))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34349__auto___35392){
return (function (seq35187){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35187));
});})(g__34349__auto___35392))
;


var g__34349__auto___35401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34349__auto___35401){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35404 = arguments.length;
var i__8724__auto___35405 = (0);
while(true){
if((i__8724__auto___35405 < len__8723__auto___35404)){
args__8730__auto__.push((arguments[i__8724__auto___35405]));

var G__35407 = (i__8724__auto___35405 + (1));
i__8724__auto___35405 = G__35407;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35401))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35401){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35401) : cljs.core.deref.call(null,g__34349__auto___35401));
});})(g__34349__auto___35401))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34349__auto___35401){
return (function (seq35197){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35197));
});})(g__34349__auto___35401))
;


var g__34349__auto___35413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34349__auto___35413){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35418 = arguments.length;
var i__8724__auto___35420 = (0);
while(true){
if((i__8724__auto___35420 < len__8723__auto___35418)){
args__8730__auto__.push((arguments[i__8724__auto___35420]));

var G__35422 = (i__8724__auto___35420 + (1));
i__8724__auto___35420 = G__35422;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35413))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35413){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35413) : cljs.core.deref.call(null,g__34349__auto___35413));
});})(g__34349__auto___35413))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34349__auto___35413){
return (function (seq35199){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35199));
});})(g__34349__auto___35413))
;


var g__34349__auto___35423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34349__auto___35423){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35425 = arguments.length;
var i__8724__auto___35426 = (0);
while(true){
if((i__8724__auto___35426 < len__8723__auto___35425)){
args__8730__auto__.push((arguments[i__8724__auto___35426]));

var G__35427 = (i__8724__auto___35426 + (1));
i__8724__auto___35426 = G__35427;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});})(g__34349__auto___35423))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34349__auto___35423){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__34349__auto___35423) : cljs.core.deref.call(null,g__34349__auto___35423));
});})(g__34349__auto___35423))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34349__auto___35423){
return (function (seq35222){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35222));
});})(g__34349__auto___35423))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8730__auto__ = [];
var len__8723__auto___35431 = arguments.length;
var i__8724__auto___35432 = (0);
while(true){
if((i__8724__auto___35432 < len__8723__auto___35431)){
args__8730__auto__.push((arguments[i__8724__auto___35432]));

var G__35434 = (i__8724__auto___35432 + (1));
i__8724__auto___35432 = G__35434;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__35428_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__35428_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35429){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35429));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__35442_SHARP_){
return (new Date(p1__35442_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer()], 0)),cljs.spec.impl.gen.symbol(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0))], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.impl.gen.uuid(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.symbol()], null)], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns()], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.string_alphanumeric()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});

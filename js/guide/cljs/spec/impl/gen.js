// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
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
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693414 = arguments.length;
var i__28872__auto___693416 = (0);
while(true){
if((i__28872__auto___693416 < len__28871__auto___693414)){
args__28878__auto__.push((arguments[i__28872__auto___693416]));

var G__693419 = (i__28872__auto___693416 + (1));
i__28872__auto___693416 = G__693419;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq693413){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693413));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693426 = arguments.length;
var i__28872__auto___693427 = (0);
while(true){
if((i__28872__auto___693427 < len__28871__auto___693426)){
args__28878__auto__.push((arguments[i__28872__auto___693427]));

var G__693428 = (i__28872__auto___693427 + (1));
i__28872__auto___693427 = G__693428;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq693424){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693424));
});

var g_QMARK__693432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_693433 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__693432){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__693432))
,null));
var mkg_693434 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__693432,g_693433){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__693432,g_693433))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__693432,g_693433,mkg_693434){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__693432).call(null,x);
});})(g_QMARK__693432,g_693433,mkg_693434))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__693432,g_693433,mkg_693434){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_693434).call(null,gfn);
});})(g_QMARK__693432,g_693433,mkg_693434))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__693432,g_693433,mkg_693434){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_693433).call(null,generator);
});})(g_QMARK__693432,g_693433,mkg_693434))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32965__auto___693525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32965__auto___693525){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693526 = arguments.length;
var i__28872__auto___693528 = (0);
while(true){
if((i__28872__auto___693528 < len__28871__auto___693526)){
args__28878__auto__.push((arguments[i__28872__auto___693528]));

var G__693529 = (i__28872__auto___693528 + (1));
i__28872__auto___693528 = G__693529;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693525))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693525),args);
});})(g__32965__auto___693525))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32965__auto___693525){
return (function (seq693446){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693446));
});})(g__32965__auto___693525))
;


var g__32965__auto___693537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32965__auto___693537){
return (function cljs$spec$impl$gen$list(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693540 = arguments.length;
var i__28872__auto___693541 = (0);
while(true){
if((i__28872__auto___693541 < len__28871__auto___693540)){
args__28878__auto__.push((arguments[i__28872__auto___693541]));

var G__693542 = (i__28872__auto___693541 + (1));
i__28872__auto___693541 = G__693542;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693537))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693537),args);
});})(g__32965__auto___693537))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32965__auto___693537){
return (function (seq693452){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693452));
});})(g__32965__auto___693537))
;


var g__32965__auto___693549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32965__auto___693549){
return (function cljs$spec$impl$gen$map(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693551 = arguments.length;
var i__28872__auto___693552 = (0);
while(true){
if((i__28872__auto___693552 < len__28871__auto___693551)){
args__28878__auto__.push((arguments[i__28872__auto___693552]));

var G__693555 = (i__28872__auto___693552 + (1));
i__28872__auto___693552 = G__693555;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693549))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693549),args);
});})(g__32965__auto___693549))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32965__auto___693549){
return (function (seq693453){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693453));
});})(g__32965__auto___693549))
;


var g__32965__auto___693557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32965__auto___693557){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693561 = arguments.length;
var i__28872__auto___693562 = (0);
while(true){
if((i__28872__auto___693562 < len__28871__auto___693561)){
args__28878__auto__.push((arguments[i__28872__auto___693562]));

var G__693563 = (i__28872__auto___693562 + (1));
i__28872__auto___693562 = G__693563;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693557))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693557),args);
});})(g__32965__auto___693557))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32965__auto___693557){
return (function (seq693459){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693459));
});})(g__32965__auto___693557))
;


var g__32965__auto___693564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32965__auto___693564){
return (function cljs$spec$impl$gen$set(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693565 = arguments.length;
var i__28872__auto___693566 = (0);
while(true){
if((i__28872__auto___693566 < len__28871__auto___693565)){
args__28878__auto__.push((arguments[i__28872__auto___693566]));

var G__693570 = (i__28872__auto___693566 + (1));
i__28872__auto___693566 = G__693570;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693564))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693564),args);
});})(g__32965__auto___693564))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32965__auto___693564){
return (function (seq693467){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693467));
});})(g__32965__auto___693564))
;


var g__32965__auto___693574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32965__auto___693574){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693580 = arguments.length;
var i__28872__auto___693582 = (0);
while(true){
if((i__28872__auto___693582 < len__28871__auto___693580)){
args__28878__auto__.push((arguments[i__28872__auto___693582]));

var G__693583 = (i__28872__auto___693582 + (1));
i__28872__auto___693582 = G__693583;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693574))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693574),args);
});})(g__32965__auto___693574))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32965__auto___693574){
return (function (seq693470){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693470));
});})(g__32965__auto___693574))
;


var g__32965__auto___693588 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32965__auto___693588){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693589 = arguments.length;
var i__28872__auto___693590 = (0);
while(true){
if((i__28872__auto___693590 < len__28871__auto___693589)){
args__28878__auto__.push((arguments[i__28872__auto___693590]));

var G__693591 = (i__28872__auto___693590 + (1));
i__28872__auto___693590 = G__693591;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693588))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693588){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693588),args);
});})(g__32965__auto___693588))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32965__auto___693588){
return (function (seq693472){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693472));
});})(g__32965__auto___693588))
;


var g__32965__auto___693594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32965__auto___693594){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693597 = arguments.length;
var i__28872__auto___693598 = (0);
while(true){
if((i__28872__auto___693598 < len__28871__auto___693597)){
args__28878__auto__.push((arguments[i__28872__auto___693598]));

var G__693599 = (i__28872__auto___693598 + (1));
i__28872__auto___693598 = G__693599;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693594))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693594),args);
});})(g__32965__auto___693594))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32965__auto___693594){
return (function (seq693473){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693473));
});})(g__32965__auto___693594))
;


var g__32965__auto___693602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32965__auto___693602){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693604 = arguments.length;
var i__28872__auto___693605 = (0);
while(true){
if((i__28872__auto___693605 < len__28871__auto___693604)){
args__28878__auto__.push((arguments[i__28872__auto___693605]));

var G__693606 = (i__28872__auto___693605 + (1));
i__28872__auto___693605 = G__693606;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693602))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693602),args);
});})(g__32965__auto___693602))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32965__auto___693602){
return (function (seq693477){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693477));
});})(g__32965__auto___693602))
;


var g__32965__auto___693610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32965__auto___693610){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693612 = arguments.length;
var i__28872__auto___693613 = (0);
while(true){
if((i__28872__auto___693613 < len__28871__auto___693612)){
args__28878__auto__.push((arguments[i__28872__auto___693613]));

var G__693614 = (i__28872__auto___693613 + (1));
i__28872__auto___693613 = G__693614;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693610))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693610),args);
});})(g__32965__auto___693610))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32965__auto___693610){
return (function (seq693479){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693479));
});})(g__32965__auto___693610))
;


var g__32965__auto___693619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32965__auto___693619){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693621 = arguments.length;
var i__28872__auto___693622 = (0);
while(true){
if((i__28872__auto___693622 < len__28871__auto___693621)){
args__28878__auto__.push((arguments[i__28872__auto___693622]));

var G__693623 = (i__28872__auto___693622 + (1));
i__28872__auto___693622 = G__693623;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693619))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693619),args);
});})(g__32965__auto___693619))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32965__auto___693619){
return (function (seq693488){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693488));
});})(g__32965__auto___693619))
;


var g__32965__auto___693633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32965__auto___693633){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693642 = arguments.length;
var i__28872__auto___693644 = (0);
while(true){
if((i__28872__auto___693644 < len__28871__auto___693642)){
args__28878__auto__.push((arguments[i__28872__auto___693644]));

var G__693645 = (i__28872__auto___693644 + (1));
i__28872__auto___693644 = G__693645;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693633))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693633),args);
});})(g__32965__auto___693633))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32965__auto___693633){
return (function (seq693493){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693493));
});})(g__32965__auto___693633))
;


var g__32965__auto___693654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32965__auto___693654){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693655 = arguments.length;
var i__28872__auto___693656 = (0);
while(true){
if((i__28872__auto___693656 < len__28871__auto___693655)){
args__28878__auto__.push((arguments[i__28872__auto___693656]));

var G__693657 = (i__28872__auto___693656 + (1));
i__28872__auto___693656 = G__693657;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693654))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693654),args);
});})(g__32965__auto___693654))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32965__auto___693654){
return (function (seq693495){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693495));
});})(g__32965__auto___693654))
;


var g__32965__auto___693661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32965__auto___693661){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693663 = arguments.length;
var i__28872__auto___693665 = (0);
while(true){
if((i__28872__auto___693665 < len__28871__auto___693663)){
args__28878__auto__.push((arguments[i__28872__auto___693665]));

var G__693669 = (i__28872__auto___693665 + (1));
i__28872__auto___693665 = G__693669;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693661))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693661),args);
});})(g__32965__auto___693661))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32965__auto___693661){
return (function (seq693499){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693499));
});})(g__32965__auto___693661))
;


var g__32965__auto___693679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32965__auto___693679){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693683 = arguments.length;
var i__28872__auto___693684 = (0);
while(true){
if((i__28872__auto___693684 < len__28871__auto___693683)){
args__28878__auto__.push((arguments[i__28872__auto___693684]));

var G__693685 = (i__28872__auto___693684 + (1));
i__28872__auto___693684 = G__693685;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693679))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693679),args);
});})(g__32965__auto___693679))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32965__auto___693679){
return (function (seq693503){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693503));
});})(g__32965__auto___693679))
;


var g__32965__auto___693688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32965__auto___693688){
return (function cljs$spec$impl$gen$return(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693690 = arguments.length;
var i__28872__auto___693691 = (0);
while(true){
if((i__28872__auto___693691 < len__28871__auto___693690)){
args__28878__auto__.push((arguments[i__28872__auto___693691]));

var G__693698 = (i__28872__auto___693691 + (1));
i__28872__auto___693691 = G__693698;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693688))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693688),args);
});})(g__32965__auto___693688))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32965__auto___693688){
return (function (seq693504){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693504));
});})(g__32965__auto___693688))
;


var g__32965__auto___693710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32965__auto___693710){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693712 = arguments.length;
var i__28872__auto___693713 = (0);
while(true){
if((i__28872__auto___693713 < len__28871__auto___693712)){
args__28878__auto__.push((arguments[i__28872__auto___693713]));

var G__693714 = (i__28872__auto___693713 + (1));
i__28872__auto___693713 = G__693714;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693710))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693710),args);
});})(g__32965__auto___693710))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32965__auto___693710){
return (function (seq693509){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693509));
});})(g__32965__auto___693710))
;


var g__32965__auto___693720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32965__auto___693720){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693721 = arguments.length;
var i__28872__auto___693722 = (0);
while(true){
if((i__28872__auto___693722 < len__28871__auto___693721)){
args__28878__auto__.push((arguments[i__28872__auto___693722]));

var G__693727 = (i__28872__auto___693722 + (1));
i__28872__auto___693722 = G__693727;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693720))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693720){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693720),args);
});})(g__32965__auto___693720))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32965__auto___693720){
return (function (seq693514){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693514));
});})(g__32965__auto___693720))
;


var g__32965__auto___693732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__32965__auto___693732){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693738 = arguments.length;
var i__28872__auto___693739 = (0);
while(true){
if((i__28872__auto___693739 < len__28871__auto___693738)){
args__28878__auto__.push((arguments[i__28872__auto___693739]));

var G__693741 = (i__28872__auto___693739 + (1));
i__28872__auto___693739 = G__693741;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32965__auto___693732))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32965__auto___693732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32965__auto___693732),args);
});})(g__32965__auto___693732))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__32965__auto___693732){
return (function (seq693520){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693520));
});})(g__32965__auto___693732))
;

var g__32978__auto___693808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32978__auto___693808){
return (function cljs$spec$impl$gen$any(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693818 = arguments.length;
var i__28872__auto___693820 = (0);
while(true){
if((i__28872__auto___693820 < len__28871__auto___693818)){
args__28878__auto__.push((arguments[i__28872__auto___693820]));

var G__693823 = (i__28872__auto___693820 + (1));
i__28872__auto___693820 = G__693823;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693808))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693808){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693808);
});})(g__32978__auto___693808))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32978__auto___693808){
return (function (seq693751){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693751));
});})(g__32978__auto___693808))
;


var g__32978__auto___693833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32978__auto___693833){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693836 = arguments.length;
var i__28872__auto___693838 = (0);
while(true){
if((i__28872__auto___693838 < len__28871__auto___693836)){
args__28878__auto__.push((arguments[i__28872__auto___693838]));

var G__693839 = (i__28872__auto___693838 + (1));
i__28872__auto___693838 = G__693839;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693833))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693833){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693833);
});})(g__32978__auto___693833))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32978__auto___693833){
return (function (seq693756){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693756));
});})(g__32978__auto___693833))
;


var g__32978__auto___693842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32978__auto___693842){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693845 = arguments.length;
var i__28872__auto___693846 = (0);
while(true){
if((i__28872__auto___693846 < len__28871__auto___693845)){
args__28878__auto__.push((arguments[i__28872__auto___693846]));

var G__693850 = (i__28872__auto___693846 + (1));
i__28872__auto___693846 = G__693850;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693842))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693842){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693842);
});})(g__32978__auto___693842))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32978__auto___693842){
return (function (seq693757){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693757));
});})(g__32978__auto___693842))
;


var g__32978__auto___693856 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32978__auto___693856){
return (function cljs$spec$impl$gen$char(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693859 = arguments.length;
var i__28872__auto___693861 = (0);
while(true){
if((i__28872__auto___693861 < len__28871__auto___693859)){
args__28878__auto__.push((arguments[i__28872__auto___693861]));

var G__693863 = (i__28872__auto___693861 + (1));
i__28872__auto___693861 = G__693863;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693856))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693856){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693856);
});})(g__32978__auto___693856))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32978__auto___693856){
return (function (seq693761){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693761));
});})(g__32978__auto___693856))
;


var g__32978__auto___693865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32978__auto___693865){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693866 = arguments.length;
var i__28872__auto___693867 = (0);
while(true){
if((i__28872__auto___693867 < len__28871__auto___693866)){
args__28878__auto__.push((arguments[i__28872__auto___693867]));

var G__693868 = (i__28872__auto___693867 + (1));
i__28872__auto___693867 = G__693868;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693865))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693865){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693865);
});})(g__32978__auto___693865))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32978__auto___693865){
return (function (seq693762){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693762));
});})(g__32978__auto___693865))
;


var g__32978__auto___693869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32978__auto___693869){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693870 = arguments.length;
var i__28872__auto___693871 = (0);
while(true){
if((i__28872__auto___693871 < len__28871__auto___693870)){
args__28878__auto__.push((arguments[i__28872__auto___693871]));

var G__693874 = (i__28872__auto___693871 + (1));
i__28872__auto___693871 = G__693874;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693869))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693869){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693869);
});})(g__32978__auto___693869))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32978__auto___693869){
return (function (seq693763){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693763));
});})(g__32978__auto___693869))
;


var g__32978__auto___693883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32978__auto___693883){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693887 = arguments.length;
var i__28872__auto___693888 = (0);
while(true){
if((i__28872__auto___693888 < len__28871__auto___693887)){
args__28878__auto__.push((arguments[i__28872__auto___693888]));

var G__693891 = (i__28872__auto___693888 + (1));
i__28872__auto___693888 = G__693891;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693883))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693883){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693883);
});})(g__32978__auto___693883))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32978__auto___693883){
return (function (seq693767){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693767));
});})(g__32978__auto___693883))
;


var g__32978__auto___693896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32978__auto___693896){
return (function cljs$spec$impl$gen$double(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693901 = arguments.length;
var i__28872__auto___693902 = (0);
while(true){
if((i__28872__auto___693902 < len__28871__auto___693901)){
args__28878__auto__.push((arguments[i__28872__auto___693902]));

var G__693905 = (i__28872__auto___693902 + (1));
i__28872__auto___693902 = G__693905;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693896))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693896){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693896);
});})(g__32978__auto___693896))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32978__auto___693896){
return (function (seq693771){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693771));
});})(g__32978__auto___693896))
;


var g__32978__auto___693909 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32978__auto___693909){
return (function cljs$spec$impl$gen$int(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693913 = arguments.length;
var i__28872__auto___693914 = (0);
while(true){
if((i__28872__auto___693914 < len__28871__auto___693913)){
args__28878__auto__.push((arguments[i__28872__auto___693914]));

var G__693919 = (i__28872__auto___693914 + (1));
i__28872__auto___693914 = G__693919;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693909))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693909){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693909);
});})(g__32978__auto___693909))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32978__auto___693909){
return (function (seq693775){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693775));
});})(g__32978__auto___693909))
;


var g__32978__auto___693940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32978__auto___693940){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693969 = arguments.length;
var i__28872__auto___693973 = (0);
while(true){
if((i__28872__auto___693973 < len__28871__auto___693969)){
args__28878__auto__.push((arguments[i__28872__auto___693973]));

var G__693974 = (i__28872__auto___693973 + (1));
i__28872__auto___693973 = G__693974;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693940))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693940){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693940);
});})(g__32978__auto___693940))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32978__auto___693940){
return (function (seq693779){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693779));
});})(g__32978__auto___693940))
;


var g__32978__auto___693985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32978__auto___693985){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28878__auto__ = [];
var len__28871__auto___693993 = arguments.length;
var i__28872__auto___693994 = (0);
while(true){
if((i__28872__auto___693994 < len__28871__auto___693993)){
args__28878__auto__.push((arguments[i__28872__auto___693994]));

var G__693995 = (i__28872__auto___693994 + (1));
i__28872__auto___693994 = G__693995;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___693985))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___693985){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___693985);
});})(g__32978__auto___693985))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32978__auto___693985){
return (function (seq693783){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693783));
});})(g__32978__auto___693985))
;


var g__32978__auto___694003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32978__auto___694003){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694004 = arguments.length;
var i__28872__auto___694005 = (0);
while(true){
if((i__28872__auto___694005 < len__28871__auto___694004)){
args__28878__auto__.push((arguments[i__28872__auto___694005]));

var G__694006 = (i__28872__auto___694005 + (1));
i__28872__auto___694005 = G__694006;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694003))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694003){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694003);
});})(g__32978__auto___694003))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32978__auto___694003){
return (function (seq693784){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693784));
});})(g__32978__auto___694003))
;


var g__32978__auto___694009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32978__auto___694009){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694015 = arguments.length;
var i__28872__auto___694016 = (0);
while(true){
if((i__28872__auto___694016 < len__28871__auto___694015)){
args__28878__auto__.push((arguments[i__28872__auto___694016]));

var G__694017 = (i__28872__auto___694016 + (1));
i__28872__auto___694016 = G__694017;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694009))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694009){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694009);
});})(g__32978__auto___694009))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32978__auto___694009){
return (function (seq693787){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693787));
});})(g__32978__auto___694009))
;


var g__32978__auto___694022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32978__auto___694022){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694026 = arguments.length;
var i__28872__auto___694027 = (0);
while(true){
if((i__28872__auto___694027 < len__28871__auto___694026)){
args__28878__auto__.push((arguments[i__28872__auto___694027]));

var G__694031 = (i__28872__auto___694027 + (1));
i__28872__auto___694027 = G__694031;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694022))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694022){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694022);
});})(g__32978__auto___694022))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32978__auto___694022){
return (function (seq693789){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693789));
});})(g__32978__auto___694022))
;


var g__32978__auto___694035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32978__auto___694035){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694039 = arguments.length;
var i__28872__auto___694040 = (0);
while(true){
if((i__28872__auto___694040 < len__28871__auto___694039)){
args__28878__auto__.push((arguments[i__28872__auto___694040]));

var G__694041 = (i__28872__auto___694040 + (1));
i__28872__auto___694040 = G__694041;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694035))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694035){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694035);
});})(g__32978__auto___694035))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32978__auto___694035){
return (function (seq693790){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693790));
});})(g__32978__auto___694035))
;


var g__32978__auto___694045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32978__auto___694045){
return (function cljs$spec$impl$gen$string(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694048 = arguments.length;
var i__28872__auto___694061 = (0);
while(true){
if((i__28872__auto___694061 < len__28871__auto___694048)){
args__28878__auto__.push((arguments[i__28872__auto___694061]));

var G__694062 = (i__28872__auto___694061 + (1));
i__28872__auto___694061 = G__694062;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694045))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694045){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694045);
});})(g__32978__auto___694045))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32978__auto___694045){
return (function (seq693794){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693794));
});})(g__32978__auto___694045))
;


var g__32978__auto___694068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32978__auto___694068){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694069 = arguments.length;
var i__28872__auto___694070 = (0);
while(true){
if((i__28872__auto___694070 < len__28871__auto___694069)){
args__28878__auto__.push((arguments[i__28872__auto___694070]));

var G__694072 = (i__28872__auto___694070 + (1));
i__28872__auto___694070 = G__694072;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694068))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694068){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694068);
});})(g__32978__auto___694068))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32978__auto___694068){
return (function (seq693797){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693797));
});})(g__32978__auto___694068))
;


var g__32978__auto___694074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32978__auto___694074){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694075 = arguments.length;
var i__28872__auto___694076 = (0);
while(true){
if((i__28872__auto___694076 < len__28871__auto___694075)){
args__28878__auto__.push((arguments[i__28872__auto___694076]));

var G__694077 = (i__28872__auto___694076 + (1));
i__28872__auto___694076 = G__694077;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694074))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694074){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694074);
});})(g__32978__auto___694074))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32978__auto___694074){
return (function (seq693800){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693800));
});})(g__32978__auto___694074))
;


var g__32978__auto___694079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32978__auto___694079){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694082 = arguments.length;
var i__28872__auto___694083 = (0);
while(true){
if((i__28872__auto___694083 < len__28871__auto___694082)){
args__28878__auto__.push((arguments[i__28872__auto___694083]));

var G__694085 = (i__28872__auto___694083 + (1));
i__28872__auto___694083 = G__694085;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694079))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694079){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694079);
});})(g__32978__auto___694079))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32978__auto___694079){
return (function (seq693802){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693802));
});})(g__32978__auto___694079))
;


var g__32978__auto___694086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32978__auto___694086){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694094 = arguments.length;
var i__28872__auto___694095 = (0);
while(true){
if((i__28872__auto___694095 < len__28871__auto___694094)){
args__28878__auto__.push((arguments[i__28872__auto___694095]));

var G__694096 = (i__28872__auto___694095 + (1));
i__28872__auto___694095 = G__694096;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694086))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694086){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694086);
});})(g__32978__auto___694086))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32978__auto___694086){
return (function (seq693803){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693803));
});})(g__32978__auto___694086))
;


var g__32978__auto___694100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32978__auto___694100){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694105 = arguments.length;
var i__28872__auto___694106 = (0);
while(true){
if((i__28872__auto___694106 < len__28871__auto___694105)){
args__28878__auto__.push((arguments[i__28872__auto___694106]));

var G__694110 = (i__28872__auto___694106 + (1));
i__28872__auto___694106 = G__694110;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});})(g__32978__auto___694100))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32978__auto___694100){
return (function (args){
return cljs.core.deref.call(null,g__32978__auto___694100);
});})(g__32978__auto___694100))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32978__auto___694100){
return (function (seq693806){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq693806));
});})(g__32978__auto___694100))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28878__auto__ = [];
var len__28871__auto___694121 = arguments.length;
var i__28872__auto___694122 = (0);
while(true){
if((i__28872__auto___694122 < len__28871__auto___694121)){
args__28878__auto__.push((arguments[i__28872__auto___694122]));

var G__694125 = (i__28872__auto___694122 + (1));
i__28872__auto___694122 = G__694125;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__694111_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__694111_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq694112){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq694112));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__694138_SHARP_){
return (new Date(p1__694138_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489703337974
// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__8730__auto__ = [];
var len__8723__auto___33982 = arguments.length;
var i__8724__auto___33983 = (0);
while(true){
if((i__8724__auto___33983 < len__8723__auto___33982)){
args__8730__auto__.push((arguments[i__8724__auto___33983]));

var G__33984 = (i__8724__auto___33983 + (1));
i__8724__auto___33983 = G__33984;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq33981){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33981));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__8730__auto__ = [];
var len__8723__auto___33986 = arguments.length;
var i__8724__auto___33987 = (0);
while(true){
if((i__8724__auto___33987 < len__8723__auto___33986)){
args__8730__auto__.push((arguments[i__8724__auto___33987]));

var G__33988 = (i__8724__auto___33987 + (1));
i__8724__auto___33987 = G__33988;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq33985){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33985));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__34006 = cljs.core._EQ_;
var expr__34007 = c;
if(cljs.core.truth_((function (){var G__34009 = "\b";
var G__34010 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34009,G__34010) : pred__34006.call(null,G__34009,G__34010));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__34011 = "\t";
var G__34012 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34011,G__34012) : pred__34006.call(null,G__34011,G__34012));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__34013 = "\n";
var G__34014 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34013,G__34014) : pred__34006.call(null,G__34013,G__34014));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__34015 = "\f";
var G__34016 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34015,G__34016) : pred__34006.call(null,G__34015,G__34016));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__34017 = "\r";
var G__34018 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34017,G__34018) : pred__34006.call(null,G__34017,G__34018));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__34019 = "\"";
var G__34020 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34019,G__34020) : pred__34006.call(null,G__34019,G__34020));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__34021 = "\\";
var G__34022 = expr__34007;
return (pred__34006.cljs$core$IFn$_invoke$arity$2 ? pred__34006.cljs$core$IFn$_invoke$arity$2(G__34021,G__34022) : pred__34006.call(null,G__34021,G__34022));
})())){
return "\\\\";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34024 = arguments.length;
var i__8724__auto___34025 = (0);
while(true){
if((i__8724__auto___34025 < len__8723__auto___34024)){
args__8730__auto__.push((arguments[i__8724__auto___34025]));

var G__34026 = (i__8724__auto___34025 + (1));
i__8724__auto___34025 = G__34026;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq34023){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34023));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34028 = arguments.length;
var i__8724__auto___34029 = (0);
while(true){
if((i__8724__auto___34029 < len__8723__auto___34028)){
args__8730__auto__.push((arguments[i__8724__auto___34029]));

var G__34030 = (i__8724__auto___34029 + (1));
i__8724__auto___34029 = G__34030;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq34027){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34027));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__34034 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034,(1),null);
var G__34037 = new_context;
var G__34038 = remainder;
var G__34039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__34037;
lis__$1 = G__34038;
acc = G__34039;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__34043 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__34046 = new_context;
var G__34047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__34046;
acc = G__34047;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__34051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34051,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__34054 = new_context;
var G__34055 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__34054;
acc = G__34055;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8364__auto__ = (function cljs$pprint$unzip_map_$_iter__34116(s__34117){
return (new cljs.core.LazySeq(null,(function (){
var s__34117__$1 = s__34117;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34117__$1);
if(temp__6753__auto__){
var s__34117__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34117__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__34117__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__34119 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__34118 = (0);
while(true){
if((i__34118 < size__8363__auto__)){
var vec__34134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__34118);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134,(0),null);
var vec__34137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34134,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34137,(1),null);
cljs.core.chunk_append(b__34119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__34176 = (i__34118 + (1));
i__34118 = G__34176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34119),cljs$pprint$unzip_map_$_iter__34116(cljs.core.chunk_rest(s__34117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34119),null);
}
} else {
var vec__34140 = cljs.core.first(s__34117__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140,(0),null);
var vec__34143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__34116(cljs.core.rest(s__34117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8364__auto__ = (function cljs$pprint$unzip_map_$_iter__34146(s__34147){
return (new cljs.core.LazySeq(null,(function (){
var s__34147__$1 = s__34147;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34147__$1);
if(temp__6753__auto__){
var s__34147__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34147__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__34147__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__34149 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__34148 = (0);
while(true){
if((i__34148 < size__8363__auto__)){
var vec__34164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__34148);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34164,(0),null);
var vec__34167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34164,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34167,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34167,(1),null);
cljs.core.chunk_append(b__34149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__34177 = (i__34148 + (1));
i__34148 = G__34177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34149),cljs$pprint$unzip_map_$_iter__34146(cljs.core.chunk_rest(s__34147__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34149),null);
}
} else {
var vec__34170 = cljs.core.first(s__34147__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170,(0),null);
var vec__34173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34173,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34173,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__34146(cljs.core.rest(s__34147__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8364__auto__ = (function cljs$pprint$tuple_map_$_iter__34196(s__34197){
return (new cljs.core.LazySeq(null,(function (){
var s__34197__$1 = s__34197;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__34197__$1);
if(temp__6753__auto__){
var s__34197__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34197__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__34197__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__34199 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__34198 = (0);
while(true){
if((i__34198 < size__8363__auto__)){
var vec__34208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__34198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34208,(1),null);
cljs.core.chunk_append(b__34199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__34214 = (i__34198 + (1));
i__34198 = G__34214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34199),cljs$pprint$tuple_map_$_iter__34196(cljs.core.chunk_rest(s__34197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34199),null);
}
} else {
var vec__34211 = cljs.core.first(s__34197__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__34196(cljs.core.rest(s__34197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__34215 = (n - (1));
n = G__34215;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__34216 = (n + (1));
n = G__34216;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__34220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__34220) : test.call(null,G__34220));
})()))){
return pos;
} else {
var G__34221 = (pos + (1));
pos = G__34221;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__8220__auto__ = (((pp == null))?null:pp);
var m__8221__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__8221__auto__.call(null,pp));
} else {
var m__8221__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__8221__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__34224 = (function (){var G__34225 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34225) : cljs.core.deref.call(null,G__34225));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__34224) : sym.call(null,G__34224));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args34227 = [];
var len__8723__auto___34237 = arguments.length;
var i__8724__auto___34238 = (0);
while(true){
if((i__8724__auto___34238 < len__8723__auto___34237)){
args34227.push((arguments[i__8724__auto___34238]));

var G__34239 = (i__8724__auto___34238 + (1));
i__8724__auto___34238 = G__34239;
continue;
} else {
}
break;
}

var G__34229 = args34227.length;
switch (G__34229) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34227.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__34230 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34230) : cljs.core.atom.call(null,G__34230));
})();
if(typeof cljs.pprint.t_cljs$pprint34231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint34231 = (function (writer,max_columns,fields,meta34232){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta34232 = meta34232;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint34231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_34233,meta34232__$1){
var self__ = this;
var _34233__$1 = this;
return (new cljs.pprint.t_cljs$pprint34231(self__.writer,self__.max_columns,self__.fields,meta34232__$1));
});})(fields))
;


cljs.pprint.t_cljs$pprint34231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_34233){
var self__ = this;
var _34233__$1 = this;
return self__.meta34232;
});})(fields))
;


cljs.pprint.t_cljs$pprint34231.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;


cljs.pprint.t_cljs$pprint34231.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;


cljs.pprint.t_cljs$pprint34231.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__34234 = cljs.core._EQ_;
var expr__34235 = cljs.core.type(x);
if(cljs.core.truth_((pred__34234.cljs$core$IFn$_invoke$arity$2 ? pred__34234.cljs$core$IFn$_invoke$arity$2(String,expr__34235) : pred__34234.call(null,String,expr__34235)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__34234,expr__34235,this$__$1,fields){
return (function (p1__34226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__34226_SHARP_,"\n");
});})(s,nl,pred__34234,expr__34235,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__34234.cljs$core$IFn$_invoke$arity$2 ? pred__34234.cljs$core$IFn$_invoke$arity$2(Number,expr__34235) : pred__34234.call(null,Number,expr__34235)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34235)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint34231.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta34232], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint34231.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint34231.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint34231";

cljs.pprint.t_cljs$pprint34231.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint34231");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint34231 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint34231(writer__$1,max_columns__$1,fields__$1,meta34232){
return (new cljs.pprint.t_cljs$pprint34231(writer__$1,max_columns__$1,fields__$1,meta34232));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint34231(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34242,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34244 = (((k34242 instanceof cljs.core.Keyword))?k34242.fqn:null);
switch (G__34244) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34242,else__8180__auto__);

}
});


cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.logical-block{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});


cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34241){
var self__ = this;
var G__34241__$1 = this;
return (new cljs.core.RecordIter((0),G__34241__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});


cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34241){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34245 = cljs.core.keyword_identical_QMARK_;
var expr__34246 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34248 = cljs.core.cst$kw$parent;
var G__34249 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34248,G__34249) : pred__34245.call(null,G__34248,G__34249));
})())){
return (new cljs.pprint.logical_block(G__34241,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34250 = cljs.core.cst$kw$section;
var G__34251 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34250,G__34251) : pred__34245.call(null,G__34250,G__34251));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__34241,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34252 = cljs.core.cst$kw$start_DASH_col;
var G__34253 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34252,G__34253) : pred__34245.call(null,G__34252,G__34253));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__34241,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34254 = cljs.core.cst$kw$indent;
var G__34255 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34254,G__34255) : pred__34245.call(null,G__34254,G__34255));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__34241,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34256 = cljs.core.cst$kw$done_DASH_nl;
var G__34257 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34256,G__34257) : pred__34245.call(null,G__34256,G__34257));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__34241,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34258 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__34259 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34258,G__34259) : pred__34245.call(null,G__34258,G__34259));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__34241,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34260 = cljs.core.cst$kw$prefix;
var G__34261 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34260,G__34261) : pred__34245.call(null,G__34260,G__34261));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__34241,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34262 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__34263 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34262,G__34263) : pred__34245.call(null,G__34262,G__34263));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__34241,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34264 = cljs.core.cst$kw$suffix;
var G__34265 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34264,G__34265) : pred__34245.call(null,G__34264,G__34265));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__34241,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34266 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__34267 = expr__34246;
return (pred__34245.cljs$core$IFn$_invoke$arity$2 ? pred__34245.cljs$core$IFn$_invoke$arity$2(G__34266,G__34267) : pred__34245.call(null,G__34266,G__34267));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__34241,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34241),null));
}
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


cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});


cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34241){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__34241,self__.__extmap,self__.__hash));
});


cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__34243){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__34243),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__34243),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34243,cljs.core.cst$kw$parent,cljs.core.array_seq([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__34269 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__34269;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34271,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34273 = (((k34271 instanceof cljs.core.Keyword))?k34271.fqn:null);
switch (G__34273) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34271,else__8180__auto__);

}
});


cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34270){
var self__ = this;
var G__34270__$1 = this;
return (new cljs.core.RecordIter((0),G__34270__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});


cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34270){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34274 = cljs.core.keyword_identical_QMARK_;
var expr__34275 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34277 = cljs.core.cst$kw$type_DASH_tag;
var G__34278 = expr__34275;
return (pred__34274.cljs$core$IFn$_invoke$arity$2 ? pred__34274.cljs$core$IFn$_invoke$arity$2(G__34277,G__34278) : pred__34274.call(null,G__34277,G__34278));
})())){
return (new cljs.pprint.buffer_blob(G__34270,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34279 = cljs.core.cst$kw$data;
var G__34280 = expr__34275;
return (pred__34274.cljs$core$IFn$_invoke$arity$2 ? pred__34274.cljs$core$IFn$_invoke$arity$2(G__34279,G__34280) : pred__34274.call(null,G__34279,G__34280));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__34270,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34281 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__34282 = expr__34275;
return (pred__34274.cljs$core$IFn$_invoke$arity$2 ? pred__34274.cljs$core$IFn$_invoke$arity$2(G__34281,G__34282) : pred__34274.call(null,G__34281,G__34282));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__34270,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34283 = cljs.core.cst$kw$start_DASH_pos;
var G__34284 = expr__34275;
return (pred__34274.cljs$core$IFn$_invoke$arity$2 ? pred__34274.cljs$core$IFn$_invoke$arity$2(G__34283,G__34284) : pred__34274.call(null,G__34283,G__34284));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__34270,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34285 = cljs.core.cst$kw$end_DASH_pos;
var G__34286 = expr__34275;
return (pred__34274.cljs$core$IFn$_invoke$arity$2 ? pred__34274.cljs$core$IFn$_invoke$arity$2(G__34285,G__34286) : pred__34274.call(null,G__34285,G__34286));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__34270,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34270),null));
}
}
}
}
}
});


cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34270){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__34270,self__.__extmap,self__.__hash));
});


cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__34272){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__34272),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__34272),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__34272),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34272),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34272),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34272,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__33912__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__33912__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34289,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34291 = (((k34289 instanceof cljs.core.Keyword))?k34289.fqn:null);
switch (G__34291) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34289,else__8180__auto__);

}
});


cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.nl-t{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34288){
var self__ = this;
var G__34288__$1 = this;
return (new cljs.core.RecordIter((0),G__34288__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});


cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34288){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34292 = cljs.core.keyword_identical_QMARK_;
var expr__34293 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34295 = cljs.core.cst$kw$type_DASH_tag;
var G__34296 = expr__34293;
return (pred__34292.cljs$core$IFn$_invoke$arity$2 ? pred__34292.cljs$core$IFn$_invoke$arity$2(G__34295,G__34296) : pred__34292.call(null,G__34295,G__34296));
})())){
return (new cljs.pprint.nl_t(G__34288,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34297 = cljs.core.cst$kw$type;
var G__34298 = expr__34293;
return (pred__34292.cljs$core$IFn$_invoke$arity$2 ? pred__34292.cljs$core$IFn$_invoke$arity$2(G__34297,G__34298) : pred__34292.call(null,G__34297,G__34298));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__34288,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34299 = cljs.core.cst$kw$logical_DASH_block;
var G__34300 = expr__34293;
return (pred__34292.cljs$core$IFn$_invoke$arity$2 ? pred__34292.cljs$core$IFn$_invoke$arity$2(G__34299,G__34300) : pred__34292.call(null,G__34299,G__34300));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__34288,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34301 = cljs.core.cst$kw$start_DASH_pos;
var G__34302 = expr__34293;
return (pred__34292.cljs$core$IFn$_invoke$arity$2 ? pred__34292.cljs$core$IFn$_invoke$arity$2(G__34301,G__34302) : pred__34292.call(null,G__34301,G__34302));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__34288,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34303 = cljs.core.cst$kw$end_DASH_pos;
var G__34304 = expr__34293;
return (pred__34292.cljs$core$IFn$_invoke$arity$2 ? pred__34292.cljs$core$IFn$_invoke$arity$2(G__34303,G__34304) : pred__34292.call(null,G__34303,G__34304));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__34288,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34288),null));
}
}
}
}
}
});


cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34288){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__34288,self__.__extmap,self__.__hash));
});


cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__34290){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__34290),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__34290),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__34290),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34290),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34290),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34290,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__33912__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__33912__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34307,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34309 = (((k34307 instanceof cljs.core.Keyword))?k34307.fqn:null);
switch (G__34309) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34307,else__8180__auto__);

}
});


cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34306){
var self__ = this;
var G__34306__$1 = this;
return (new cljs.core.RecordIter((0),G__34306__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});


cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34306){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34310 = cljs.core.keyword_identical_QMARK_;
var expr__34311 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34313 = cljs.core.cst$kw$type_DASH_tag;
var G__34314 = expr__34311;
return (pred__34310.cljs$core$IFn$_invoke$arity$2 ? pred__34310.cljs$core$IFn$_invoke$arity$2(G__34313,G__34314) : pred__34310.call(null,G__34313,G__34314));
})())){
return (new cljs.pprint.start_block_t(G__34306,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34315 = cljs.core.cst$kw$logical_DASH_block;
var G__34316 = expr__34311;
return (pred__34310.cljs$core$IFn$_invoke$arity$2 ? pred__34310.cljs$core$IFn$_invoke$arity$2(G__34315,G__34316) : pred__34310.call(null,G__34315,G__34316));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__34306,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34317 = cljs.core.cst$kw$start_DASH_pos;
var G__34318 = expr__34311;
return (pred__34310.cljs$core$IFn$_invoke$arity$2 ? pred__34310.cljs$core$IFn$_invoke$arity$2(G__34317,G__34318) : pred__34310.call(null,G__34317,G__34318));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__34306,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34319 = cljs.core.cst$kw$end_DASH_pos;
var G__34320 = expr__34311;
return (pred__34310.cljs$core$IFn$_invoke$arity$2 ? pred__34310.cljs$core$IFn$_invoke$arity$2(G__34319,G__34320) : pred__34310.call(null,G__34319,G__34320));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__34306,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34306),null));
}
}
}
}
});


cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34306){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__34306,self__.__extmap,self__.__hash));
});


cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__34308){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__34308),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__34308),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34308),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34308),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34308,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__33912__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__33912__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34323,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34325 = (((k34323 instanceof cljs.core.Keyword))?k34323.fqn:null);
switch (G__34325) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34323,else__8180__auto__);

}
});


cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34322){
var self__ = this;
var G__34322__$1 = this;
return (new cljs.core.RecordIter((0),G__34322__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});


cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34322){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34326 = cljs.core.keyword_identical_QMARK_;
var expr__34327 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34329 = cljs.core.cst$kw$type_DASH_tag;
var G__34330 = expr__34327;
return (pred__34326.cljs$core$IFn$_invoke$arity$2 ? pred__34326.cljs$core$IFn$_invoke$arity$2(G__34329,G__34330) : pred__34326.call(null,G__34329,G__34330));
})())){
return (new cljs.pprint.end_block_t(G__34322,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34331 = cljs.core.cst$kw$logical_DASH_block;
var G__34332 = expr__34327;
return (pred__34326.cljs$core$IFn$_invoke$arity$2 ? pred__34326.cljs$core$IFn$_invoke$arity$2(G__34331,G__34332) : pred__34326.call(null,G__34331,G__34332));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__34322,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34333 = cljs.core.cst$kw$start_DASH_pos;
var G__34334 = expr__34327;
return (pred__34326.cljs$core$IFn$_invoke$arity$2 ? pred__34326.cljs$core$IFn$_invoke$arity$2(G__34333,G__34334) : pred__34326.call(null,G__34333,G__34334));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__34322,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34335 = cljs.core.cst$kw$end_DASH_pos;
var G__34336 = expr__34327;
return (pred__34326.cljs$core$IFn$_invoke$arity$2 ? pred__34326.cljs$core$IFn$_invoke$arity$2(G__34335,G__34336) : pred__34326.call(null,G__34335,G__34336));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__34322,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34322),null));
}
}
}
}
});


cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34322){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__34322,self__.__extmap,self__.__hash));
});


cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__34324){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__34324),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__34324),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34324),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34324),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34324,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__33912__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__33912__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34339,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34341 = (((k34339 instanceof cljs.core.Keyword))?k34339.fqn:null);
switch (G__34341) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34339,else__8180__auto__);

}
});


cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.indent-t{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34338){
var self__ = this;
var G__34338__$1 = this;
return (new cljs.core.RecordIter((0),G__34338__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});


cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34338){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34342 = cljs.core.keyword_identical_QMARK_;
var expr__34343 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34345 = cljs.core.cst$kw$type_DASH_tag;
var G__34346 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34345,G__34346) : pred__34342.call(null,G__34345,G__34346));
})())){
return (new cljs.pprint.indent_t(G__34338,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34347 = cljs.core.cst$kw$logical_DASH_block;
var G__34348 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34347,G__34348) : pred__34342.call(null,G__34347,G__34348));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__34338,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34349 = cljs.core.cst$kw$relative_DASH_to;
var G__34350 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34349,G__34350) : pred__34342.call(null,G__34349,G__34350));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__34338,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34351 = cljs.core.cst$kw$offset;
var G__34352 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34351,G__34352) : pred__34342.call(null,G__34351,G__34352));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__34338,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34353 = cljs.core.cst$kw$start_DASH_pos;
var G__34354 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34353,G__34354) : pred__34342.call(null,G__34353,G__34354));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__34338,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34355 = cljs.core.cst$kw$end_DASH_pos;
var G__34356 = expr__34343;
return (pred__34342.cljs$core$IFn$_invoke$arity$2 ? pred__34342.cljs$core$IFn$_invoke$arity$2(G__34355,G__34356) : pred__34342.call(null,G__34355,G__34356));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__34338,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34338),null));
}
}
}
}
}
}
});


cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});


cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34338){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__34338,self__.__extmap,self__.__hash));
});


cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__34340){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__34340),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__34340),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__34340),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__34340),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34340),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__34340),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34340,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__33912__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__33912__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__8533__auto__ = (function (){var G__34360 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34360) : cljs.core.atom.call(null,G__34360));
})();
var prefer_table__8534__auto__ = (function (){var G__34361 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34361) : cljs.core.atom.call(null,G__34361));
})();
var method_cache__8535__auto__ = (function (){var G__34362 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34362) : cljs.core.atom.call(null,G__34362));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__34363 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34363) : cljs.core.atom.call(null,G__34363));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (p1__34359_SHARP_,p2__34358_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__34358_SHARP_);
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__6753__auto___34372 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__34364 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34364) : cljs.core.deref.call(null,G__34364));
})());
if(cljs.core.truth_(temp__6753__auto___34372)){
var cb_34373 = temp__6753__auto___34372;
var G__34365_34374 = cljs.core.cst$kw$start;
(cb_34373.cljs$core$IFn$_invoke$arity$1 ? cb_34373.cljs$core$IFn$_invoke$arity$1(G__34365_34374) : cb_34373.call(null,G__34365_34374));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__6753__auto___34375 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__6753__auto___34375)){
var prefix_34376 = temp__6753__auto___34375;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34366 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34366) : cljs.core.deref.call(null,G__34366));
})()),prefix_34376);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34367 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34367) : cljs.core.deref.call(null,G__34367));
})()));
var G__34368_34377 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__34369_34378 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34368_34377,G__34369_34378) : cljs.core.reset_BANG_.call(null,G__34368_34377,G__34369_34378));

var G__34370 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__34371 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34370,G__34371) : cljs.core.reset_BANG_.call(null,G__34370,G__34371));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__6753__auto___34382 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__34379 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34379) : cljs.core.deref.call(null,G__34379));
})());
if(cljs.core.truth_(temp__6753__auto___34382)){
var cb_34383 = temp__6753__auto___34382;
var G__34380_34384 = cljs.core.cst$kw$end;
(cb_34383.cljs$core$IFn$_invoke$arity$1 ? cb_34383.cljs$core$IFn$_invoke$arity$1(G__34380_34384) : cb_34383.call(null,G__34380_34384));
} else {
}

var temp__6753__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__6753__auto__)){
var suffix = temp__6753__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34381 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34381) : cljs.core.deref.call(null,G__34381));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var G__34385 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__34386 = (cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__34387 = cljs.core._EQ_;
var expr__34388 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__34390 = cljs.core.cst$kw$block;
var G__34391 = expr__34388;
return (pred__34387.cljs$core$IFn$_invoke$arity$2 ? pred__34387.cljs$core$IFn$_invoke$arity$2(G__34390,G__34391) : pred__34387.call(null,G__34390,G__34391));
})())){
var G__34392 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34392) : cljs.core.deref.call(null,G__34392));
} else {
if(cljs.core.truth_((function (){var G__34393 = cljs.core.cst$kw$current;
var G__34394 = expr__34388;
return (pred__34387.cljs$core$IFn$_invoke$arity$2 ? pred__34387.cljs$core$IFn$_invoke$arity$2(G__34393,G__34394) : pred__34387.call(null,G__34393,G__34394));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34395 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34395) : cljs.core.deref.call(null,G__34395));
})()));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34388)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34385,G__34386) : cljs.core.reset_BANG_.call(null,G__34385,G__34386));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34396 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34396) : cljs.core.deref.call(null,G__34396));
})()),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__7490__auto__){
var G__34400 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34400) : cljs.core.deref.call(null,G__34400));
} else {
return and__7490__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__6751__auto___34403 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34401 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34401) : cljs.core.deref.call(null,G__34401));
})());
if(cljs.core.truth_(temp__6751__auto___34403)){
var tws_34404 = temp__6751__auto___34403;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34402 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34402) : cljs.core.deref.call(null,G__34402));
})()),tws_34404);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__34417 = cljs.core.seq(tokens);
var chunk__34418 = null;
var count__34419 = (0);
var i__34420 = (0);
while(true){
if((i__34420 < count__34419)){
var token = chunk__34418.cljs$core$IIndexed$_nth$arity$2(null,i__34420);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__6751__auto___34429 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34421 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34421) : cljs.core.deref.call(null,G__34421));
})());
if(cljs.core.truth_(temp__6751__auto___34429)){
var tws_34430 = temp__6751__auto___34429;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34422 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34422) : cljs.core.deref.call(null,G__34422));
})()),tws_34430);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_34431 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34423 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34423) : cljs.core.deref.call(null,G__34423));
})());
if(cljs.core.truth_((function (){var and__7490__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7490__auto__)){
return tws_34431;
} else {
return and__7490__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34424 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34424) : cljs.core.deref.call(null,G__34424));
})()),tws_34431);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__34432 = seq__34417;
var G__34433 = chunk__34418;
var G__34434 = count__34419;
var G__34435 = (i__34420 + (1));
seq__34417 = G__34432;
chunk__34418 = G__34433;
count__34419 = G__34434;
i__34420 = G__34435;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__34417);
if(temp__6753__auto__){
var seq__34417__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34417__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__34417__$1);
var G__34436 = cljs.core.chunk_rest(seq__34417__$1);
var G__34437 = c__8413__auto__;
var G__34438 = cljs.core.count(c__8413__auto__);
var G__34439 = (0);
seq__34417 = G__34436;
chunk__34418 = G__34437;
count__34419 = G__34438;
i__34420 = G__34439;
continue;
} else {
var token = cljs.core.first(seq__34417__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__6751__auto___34440 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34425 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34425) : cljs.core.deref.call(null,G__34425));
})());
if(cljs.core.truth_(temp__6751__auto___34440)){
var tws_34441 = temp__6751__auto___34440;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34426) : cljs.core.deref.call(null,G__34426));
})()),tws_34441);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_34442 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34427 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34427) : cljs.core.deref.call(null,G__34427));
})());
if(cljs.core.truth_((function (){var and__7490__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7490__auto__)){
return tws_34442;
} else {
return and__7490__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34428 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34428) : cljs.core.deref.call(null,G__34428));
})()),tws_34442);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__34443 = cljs.core.next(seq__34417__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__34417 = G__34443;
chunk__34418 = G__34444;
count__34419 = G__34445;
i__34420 = G__34446;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34450 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34450) : cljs.core.deref.call(null,G__34450));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34452 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34452) : cljs.core.deref.call(null,G__34452));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__7502__auto__ = (function (){var G__34456 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34456) : cljs.core.deref.call(null,G__34456));
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34460 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34460) : cljs.core.deref.call(null,G__34460));
})()));
var and__7490__auto__ = miser_width;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = maxcol;
if(cljs.core.truth_(and__7490__auto____$1)){
var and__7490__auto____$2 = ((function (){var G__34462 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34462) : cljs.core.deref.call(null,G__34462));
})() >= (maxcol - miser_width));
if(and__7490__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__8533__auto__ = (function (){var G__34463 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34463) : cljs.core.atom.call(null,G__34463));
})();
var prefer_table__8534__auto__ = (function (){var G__34464 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34464) : cljs.core.atom.call(null,G__34464));
})();
var method_cache__8535__auto__ = (function (){var G__34465 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34465) : cljs.core.atom.call(null,G__34465));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__34466 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34466) : cljs.core.atom.call(null,G__34466));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__7502__auto__ = (function (){var G__34468 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34468) : cljs.core.deref.call(null,G__34468));
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__34469_SHARP_){
return cljs.core.not((function (){var and__7490__auto__ = cljs.pprint.nl_t_QMARK_(p1__34469_SHARP_);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__34469_SHARP_),lb);
} else {
return and__7490__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__34470_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__34470_SHARP_);
return cljs.core.not((function (){var and__7490__auto__ = cljs.pprint.nl_t_QMARK_(p1__34470_SHARP_);
if(cljs.core.truth_(and__7490__auto__)){
var or__7502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__7490__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__34479_34487 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__34480_34488 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34479_34487,G__34480_34488) : cljs.core.reset_BANG_.call(null,G__34479_34487,G__34480_34488));

var G__34481_34489 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__34482_34490 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34481_34489,G__34482_34490) : cljs.core.reset_BANG_.call(null,G__34481_34489,G__34482_34490));

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__34483_34491 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__34484_34492 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34483_34491,G__34484_34492) : cljs.core.reset_BANG_.call(null,G__34483_34491,G__34484_34492));

var G__34485_34493 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__34486_34494 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34485_34493,G__34486_34494) : cljs.core.reset_BANG_.call(null,G__34485_34493,G__34486_34494));

var G__34495 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__34495;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34500 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34500) : cljs.core.deref.call(null,G__34500));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34501 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34501) : cljs.core.deref.call(null,G__34501));
})()),prefix);
} else {
}

var istr_34504 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__34502 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34502) : cljs.core.deref.call(null,G__34502));
})() - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34503 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34503) : cljs.core.deref.call(null,G__34503));
})()),istr_34504);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34505_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__34505_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__34516 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34516,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34516,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__34519 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34519,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34519,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__34522 = newl;
var G__34523 = this$;
var G__34524 = section;
var G__34525 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__34522,G__34523,G__34524,G__34525) : cljs.pprint.emit_nl_QMARK_.call(null,G__34522,G__34523,G__34524,G__34525));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__34527 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34527) : cljs.core.deref.call(null,G__34527));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__34528 = new_buffer;
buffer = G__34528;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__34531 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34531) : cljs.core.deref.call(null,G__34531));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__34532 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34532) : cljs.core.deref.call(null,G__34532));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__6751__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__34534 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34534) : cljs.core.deref.call(null,G__34534));
})());
if(cljs.core.truth_(temp__6751__auto__)){
var buf = temp__6751__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__6753__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__34537 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34537) : cljs.core.deref.call(null,G__34537));
})());
if(cljs.core.truth_(temp__6753__auto__)){
var tws = temp__6753__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34538 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34538) : cljs.core.deref.call(null,G__34538));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__34554 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34554) : cljs.core.deref.call(null,G__34554));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34555 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34555) : cljs.core.deref.call(null,G__34555));
})()))){
var oldpos_34569 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34556 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34556) : cljs.core.deref.call(null,G__34556));
})());
var newpos_34570 = (oldpos_34569 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_34570);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_34569,newpos_34570));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34557 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34557) : cljs.core.deref.call(null,G__34557));
})()),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34558 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34558) : cljs.core.deref.call(null,G__34558));
})()),"\n");

var seq__34559_34571 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__34560_34572 = null;
var count__34561_34573 = (0);
var i__34562_34574 = (0);
while(true){
if((i__34562_34574 < count__34561_34573)){
var l_34575__$1 = chunk__34560_34572.cljs$core$IIndexed$_nth$arity$2(null,i__34562_34574);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34563 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34563) : cljs.core.deref.call(null,G__34563));
})()),l_34575__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34564 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34564) : cljs.core.deref.call(null,G__34564));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34565 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34565) : cljs.core.deref.call(null,G__34565));
})()),prefix);
} else {
}

var G__34576 = seq__34559_34571;
var G__34577 = chunk__34560_34572;
var G__34578 = count__34561_34573;
var G__34579 = (i__34562_34574 + (1));
seq__34559_34571 = G__34576;
chunk__34560_34572 = G__34577;
count__34561_34573 = G__34578;
i__34562_34574 = G__34579;
continue;
} else {
var temp__6753__auto___34580 = cljs.core.seq(seq__34559_34571);
if(temp__6753__auto___34580){
var seq__34559_34581__$1 = temp__6753__auto___34580;
if(cljs.core.chunked_seq_QMARK_(seq__34559_34581__$1)){
var c__8413__auto___34582 = cljs.core.chunk_first(seq__34559_34581__$1);
var G__34583 = cljs.core.chunk_rest(seq__34559_34581__$1);
var G__34584 = c__8413__auto___34582;
var G__34585 = cljs.core.count(c__8413__auto___34582);
var G__34586 = (0);
seq__34559_34571 = G__34583;
chunk__34560_34572 = G__34584;
count__34561_34573 = G__34585;
i__34562_34574 = G__34586;
continue;
} else {
var l_34587__$1 = cljs.core.first(seq__34559_34581__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34566 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34566) : cljs.core.deref.call(null,G__34566));
})()),l_34587__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34567 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34567) : cljs.core.deref.call(null,G__34567));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34568 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34568) : cljs.core.deref.call(null,G__34568));
})()),prefix);
} else {
}

var G__34588 = cljs.core.next(seq__34559_34581__$1);
var G__34589 = null;
var G__34590 = (0);
var G__34591 = (0);
seq__34559_34571 = G__34588;
chunk__34560_34572 = G__34589;
count__34561_34573 = G__34590;
i__34562_34574 = G__34591;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34595 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34595) : cljs.core.deref.call(null,G__34595));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34596 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34596) : cljs.core.deref.call(null,G__34596));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34597 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34597) : cljs.core.deref.call(null,G__34597));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__34611 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34611) : cljs.core.atom.call(null,G__34611));
})();
if(typeof cljs.pprint.t_cljs$pprint34612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint34612 = (function (writer,max_columns,miser_width,lb,fields,meta34613){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta34613 = meta34613;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint34612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_34614,meta34613__$1){
var self__ = this;
var _34614__$1 = this;
return (new cljs.pprint.t_cljs$pprint34612(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta34613__$1));
});})(lb,fields))
;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_34614){
var self__ = this;
var _34614__$1 = this;
return self__.meta34613;
});})(lb,fields))
;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__34615 = cljs.core._EQ_;
var expr__34616 = cljs.core.type(x);
if(cljs.core.truth_((pred__34615.cljs$core$IFn$_invoke$arity$2 ? pred__34615.cljs$core$IFn$_invoke$arity$2(String,expr__34616) : pred__34615.call(null,String,expr__34616)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34618 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34618) : cljs.core.deref.call(null,G__34618));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34619 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34619) : cljs.core.deref.call(null,G__34619));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34620 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34620) : cljs.core.deref.call(null,G__34620));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__34615.cljs$core$IFn$_invoke$arity$2 ? pred__34615.cljs$core$IFn$_invoke$arity$2(Number,expr__34616) : pred__34615.call(null,Number,expr__34616)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34616)].join('')));
}
}
});})(lb,fields))
;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34621 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34621) : cljs.core.deref.call(null,G__34621));
})()));
});})(lb,fields))
;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.t_cljs$pprint34612.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34622 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34622) : cljs.core.deref.call(null,G__34622));
})()),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__34623 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34623) : cljs.core.deref.call(null,G__34623));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint34612.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta34613], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint34612.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint34612.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint34612";

cljs.pprint.t_cljs$pprint34612.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint34612");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint34612 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint34612(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta34613){
return (new cljs.pprint.t_cljs$pprint34612(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta34613));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint34612(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__34635 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34635) : cljs.core.deref.call(null,G__34635));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34636 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34636) : cljs.core.deref.call(null,G__34636));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__6753__auto___34646 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__34637 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34637) : cljs.core.deref.call(null,G__34637));
})());
if(cljs.core.truth_(temp__6753__auto___34646)){
var cb_34647 = temp__6753__auto___34646;
var G__34638_34648 = cljs.core.cst$kw$start;
(cb_34647.cljs$core$IFn$_invoke$arity$1 ? cb_34647.cljs$core$IFn$_invoke$arity$1(G__34638_34648) : cb_34647.call(null,G__34638_34648));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34639 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34639) : cljs.core.deref.call(null,G__34639));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34640 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34640) : cljs.core.deref.call(null,G__34640));
})()));
var G__34641_34649 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__34642_34650 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34641_34649,G__34642_34650) : cljs.core.reset_BANG_.call(null,G__34641_34649,G__34642_34650));

var G__34643 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__34644 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34643,G__34644) : cljs.core.reset_BANG_.call(null,G__34643,G__34644));
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34645 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34645) : cljs.core.deref.call(null,G__34645));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__34657 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34657) : cljs.core.deref.call(null,G__34657));
})());
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34658 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34658) : cljs.core.deref.call(null,G__34658));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34659 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34659) : cljs.core.deref.call(null,G__34659));
})()),suffix);
} else {
}

var temp__6753__auto___34663 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__34660 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34660) : cljs.core.deref.call(null,G__34660));
})());
if(cljs.core.truth_(temp__6753__auto___34663)){
var cb_34664 = temp__6753__auto___34663;
var G__34661_34665 = cljs.core.cst$kw$end;
(cb_34664.cljs$core$IFn$_invoke$arity$1 ? cb_34664.cljs$core$IFn$_invoke$arity$1(G__34661_34665) : cb_34664.call(null,G__34661_34665));
} else {
}
} else {
var oldpos_34666 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34662 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34662) : cljs.core.deref.call(null,G__34662));
})());
var newpos_34667 = (oldpos_34666 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_34667);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_34666,newpos_34667));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34670 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34670) : cljs.core.deref.call(null,G__34670));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__34671 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34671) : cljs.core.deref.call(null,G__34671));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__34686 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34686) : cljs.core.deref.call(null,G__34686));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__34687 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34687) : cljs.core.deref.call(null,G__34687));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var G__34688 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__34689 = (offset + (function (){var pred__34690 = cljs.core._EQ_;
var expr__34691 = relative_to;
if(cljs.core.truth_((function (){var G__34693 = cljs.core.cst$kw$block;
var G__34694 = expr__34691;
return (pred__34690.cljs$core$IFn$_invoke$arity$2 ? pred__34690.cljs$core$IFn$_invoke$arity$2(G__34693,G__34694) : pred__34690.call(null,G__34693,G__34694));
})())){
var G__34695 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34695) : cljs.core.deref.call(null,G__34695));
} else {
if(cljs.core.truth_((function (){var G__34696 = cljs.core.cst$kw$current;
var G__34697 = expr__34691;
return (pred__34690.cljs$core$IFn$_invoke$arity$2 ? pred__34690.cljs$core$IFn$_invoke$arity$2(G__34696,G__34697) : pred__34690.call(null,G__34696,G__34697));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__34698 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34698) : cljs.core.deref.call(null,G__34698));
})()));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34691)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34688,G__34689) : cljs.core.reset_BANG_.call(null,G__34688,G__34689));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__34699 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34699) : cljs.core.deref.call(null,G__34699));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1((function (){var G__34701 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34701) : cljs.core.deref.call(null,G__34701));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__34702_SHARP_){
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__34702_SHARP_));
if(cljs.core.truth_(temp__6753__auto__)){
var v = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__34702_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__7490__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__7490__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1((function (){var G__34708 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34708) : cljs.core.deref.call(null,G__34708));
})());
} else {
return and__7490__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__7490__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__7490__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34725 = arguments.length;
var i__8724__auto___34726 = (0);
while(true){
if((i__8724__auto___34726 < len__8723__auto___34725)){
args__8730__auto__.push((arguments[i__8724__auto___34726]));

var G__34727 = (i__8724__auto___34726 + (1));
i__8724__auto___34726 = G__34727;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_34711 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_34712 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_34713 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_34714 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_34715 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_34716 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_34717 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_34718 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_34719 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_34720 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_34721 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_34722 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__33895__auto___34728 = base_writer;
var new_writer__33896__auto___34729 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__33895__auto___34728));
var _STAR_out_STAR_34723_34730 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__33896__auto___34729)?cljs.pprint.make_pretty_writer(base_writer__33895__auto___34728,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__33895__auto___34728);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_34723_34730;
}} else {
var _STAR_out_STAR_34724_34731 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_34724_34731;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_34722;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_34721;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_34720;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_34719;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_34718;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_34717;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_34716;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_34715;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_34714;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_34713;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_34712;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_34711;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq34709){
var G__34710 = cljs.core.first(seq34709);
var seq34709__$1 = cljs.core.next(seq34709);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__34710,seq34709__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args34732 = [];
var len__8723__auto___34738 = arguments.length;
var i__8724__auto___34739 = (0);
while(true){
if((i__8724__auto___34739 < len__8723__auto___34738)){
args34732.push((arguments[i__8724__auto___34739]));

var G__34740 = (i__8724__auto___34739 + (1));
i__8724__auto___34739 = G__34740;
continue;
} else {
}
break;
}

var G__34734 = args34732.length;
switch (G__34734) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34732.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_34735 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_34735;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__33895__auto__ = writer;
var new_writer__33896__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__33895__auto__));
var _STAR_out_STAR_34736 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__33896__auto__)?cljs.pprint.make_pretty_writer(base_writer__33895__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__33895__auto__);

try{var _STAR_print_pretty_STAR_34737_34742 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_34737_34742;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_34736;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad argument: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". It must be one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__7490__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__7490__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__8730__auto__ = [];
var len__8723__auto___34746 = arguments.length;
var i__8724__auto___34747 = (0);
while(true){
if((i__8724__auto___34747 < len__8723__auto___34746)){
args__8730__auto__.push((arguments[i__8724__auto___34747]));

var G__34748 = (i__8724__auto___34747 + (1));
i__8724__auto___34747 = G__34748;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq34743){
var G__34744 = cljs.core.first(seq34743);
var seq34743__$1 = cljs.core.next(seq34743);
var G__34745 = cljs.core.first(seq34743__$1);
var seq34743__$2 = cljs.core.next(seq34743__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__34744,G__34745,seq34743__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34750,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34752 = (((k34750 instanceof cljs.core.Keyword))?k34750.fqn:null);
switch (G__34752) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34750,else__8180__auto__);

}
});


cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});


cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34749){
var self__ = this;
var G__34749__$1 = this;
return (new cljs.core.RecordIter((0),G__34749__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});


cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34749){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34753 = cljs.core.keyword_identical_QMARK_;
var expr__34754 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34756 = cljs.core.cst$kw$seq;
var G__34757 = expr__34754;
return (pred__34753.cljs$core$IFn$_invoke$arity$2 ? pred__34753.cljs$core$IFn$_invoke$arity$2(G__34756,G__34757) : pred__34753.call(null,G__34756,G__34757));
})())){
return (new cljs.pprint.arg_navigator(G__34749,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34758 = cljs.core.cst$kw$rest;
var G__34759 = expr__34754;
return (pred__34753.cljs$core$IFn$_invoke$arity$2 ? pred__34753.cljs$core$IFn$_invoke$arity$2(G__34758,G__34759) : pred__34753.call(null,G__34758,G__34759));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__34749,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34760 = cljs.core.cst$kw$pos;
var G__34761 = expr__34754;
return (pred__34753.cljs$core$IFn$_invoke$arity$2 ? pred__34753.cljs$core$IFn$_invoke$arity$2(G__34760,G__34761) : pred__34753.call(null,G__34760,G__34761));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__34749,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34749),null));
}
}
}
});


cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});


cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34749){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__34749,self__.__extmap,self__.__hash));
});


cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__34751){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__34751),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__34751),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__34751),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34751,cljs.core.cst$kw$seq,cljs.core.array_seq([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__34766 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__34771 = navigator;
var G__34772 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__34771,G__34772) : cljs.pprint.relative_reposition.call(null,G__34771,G__34772));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k34774,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__34776 = (((k34774 instanceof cljs.core.Keyword))?k34774.fqn:null);
switch (G__34776) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34774,else__8180__auto__);

}
});


cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});


cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34773){
var self__ = this;
var G__34773__$1 = this;
return (new cljs.core.RecordIter((0),G__34773__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});


cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__34773){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__34777 = cljs.core.keyword_identical_QMARK_;
var expr__34778 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__34780 = cljs.core.cst$kw$func;
var G__34781 = expr__34778;
return (pred__34777.cljs$core$IFn$_invoke$arity$2 ? pred__34777.cljs$core$IFn$_invoke$arity$2(G__34780,G__34781) : pred__34777.call(null,G__34780,G__34781));
})())){
return (new cljs.pprint.compiled_directive(G__34773,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34782 = cljs.core.cst$kw$def;
var G__34783 = expr__34778;
return (pred__34777.cljs$core$IFn$_invoke$arity$2 ? pred__34777.cljs$core$IFn$_invoke$arity$2(G__34782,G__34783) : pred__34777.call(null,G__34782,G__34783));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__34773,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34784 = cljs.core.cst$kw$params;
var G__34785 = expr__34778;
return (pred__34777.cljs$core$IFn$_invoke$arity$2 ? pred__34777.cljs$core$IFn$_invoke$arity$2(G__34784,G__34785) : pred__34777.call(null,G__34784,G__34785));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__34773,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34786 = cljs.core.cst$kw$offset;
var G__34787 = expr__34778;
return (pred__34777.cljs$core$IFn$_invoke$arity$2 ? pred__34777.cljs$core$IFn$_invoke$arity$2(G__34786,G__34787) : pred__34777.call(null,G__34786,G__34787));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__34773,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__34773),null));
}
}
}
}
});


cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});


cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__34773){
var self__ = this;
var this__8176__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__34773,self__.__extmap,self__.__hash));
});


cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__34775){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__34775),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__34775),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__34775),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__34775),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34775,cljs.core.cst$kw$func,cljs.core.array_seq([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__34789,navigator){
var vec__34799 = p__34789;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(0),null);
var vec__34802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802,(1),null);
var vec__34805 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__34811 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34811,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__7502__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("r")].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__34817 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,(1),null);
var base_output = (function (){var or__7502__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__34820_SHARP_){
if((p1__34820_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__34820_SHARP_,base),cljs.core.quot(p1__34820_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__34821_SHARP_){
if((p1__34821_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__34821_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__34821_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__34826 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34826,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34826,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_34829 = (arg < (0));
var pos_arg_34830 = ((neg_34829)?(- arg):arg);
var raw_str_34831 = cljs.pprint.opt_base_str(base,pos_arg_34830);
var group_str_34832 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_34829,pos_arg_34830,raw_str_34831,vec__34826,arg,arg_navigator__$1){
return (function (p1__34822_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__34822_SHARP_);
});})(neg_34829,pos_arg_34830,raw_str_34831,vec__34826,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_34831));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_34831);
var signed_str_34833 = ((neg_34829)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_34832)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_34832)].join(''):group_str_34832
));
var padded_str_34834 = (((signed_str_34833.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_34833.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_34833)].join(''):signed_str_34833);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_34834], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__34835 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__34836 = (pos - (1));
var G__34837 = cljs.core.first(remainder);
var G__34838 = cljs.core.next(remainder);
acc = G__34835;
pos = G__34836;
this$ = G__34837;
remainder = G__34838;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__34842 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_34845 = (((arg < (0)))?(- arg):arg);
var parts_34846 = cljs.pprint.remainders((1000),abs_arg_34845);
if((cljs.core.count(parts_34846) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_34847 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_34846);
var full_str_34848 = cljs.pprint.add_english_scales(parts_strs_34847,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_34848)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__34852 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34852,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34852,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_34855 = (((arg < (0)))?(- arg):arg);
var parts_34856 = cljs.pprint.remainders((1000),abs_arg_34855);
if((cljs.core.count(parts_34856) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_34857 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_34856));
var head_str_34858 = cljs.pprint.add_english_scales(parts_strs_34857,(1));
var tail_str_34859 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_34856));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_34858))) && (!(cljs.core.empty_QMARK_(tail_str_34859))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_34858),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_34859)].join(''):((!(cljs.core.empty_QMARK_(head_str_34858)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_34858),cljs.core.str.cljs$core$IFn$_invoke$arity$1("th")].join(''):tail_str_34859
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_34860 = cljs.core.rem(arg,(100));
var not_teens_34861 = (((11) < low_two_digits_34860)) || (((19) > low_two_digits_34860));
var low_digit_34862 = cljs.core.rem(low_two_digits_34860,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_34862 === (1))) && (not_teens_34861))?"st":((((low_digit_34862 === (2))) && (not_teens_34861))?"nd":((((low_digit_34862 === (3))) && (not_teens_34861))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__34866 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34866,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_34869 = cljs.pprint.remainders((10),arg);
var acc_34870 = cljs.core.PersistentVector.EMPTY;
var pos_34871 = (cljs.core.count(digits_34869) - (1));
var digits_34872__$1 = digits_34869;
while(true){
if(cljs.core.empty_QMARK_(digits_34872__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_34870)], 0));
} else {
var digit_34873 = cljs.core.first(digits_34872__$1);
var G__34874 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_34873))?acc_34870:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_34870,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_34871),(digit_34873 - (1)))));
var G__34875 = (pos_34871 - (1));
var G__34876 = cljs.core.next(digits_34872__$1);
acc_34870 = G__34874;
pos_34871 = G__34875;
digits_34872__$1 = G__34876;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__34880 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Control-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__34893 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34893,(1),null);
var pred__34896_34903 = cljs.core._EQ_;
var expr__34897_34904 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__34899 = "o";
var G__34900 = expr__34897_34904;
return (pred__34896_34903.cljs$core$IFn$_invoke$arity$2 ? pred__34896_34903.cljs$core$IFn$_invoke$arity$2(G__34899,G__34900) : pred__34896_34903.call(null,G__34899,G__34900));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__34901 = "u";
var G__34902 = expr__34897_34904;
return (pred__34896_34903.cljs$core$IFn$_invoke$arity$2 ? pred__34896_34903.cljs$core$IFn$_invoke$arity$2(G__34901,G__34902) : pred__34896_34903.call(null,G__34901,G__34902));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__34896_34903.cljs$core$IFn$_invoke$arity$2 ? pred__34896_34903.cljs$core$IFn$_invoke$arity$2(null,expr__34897_34904) : pred__34896_34903.call(null,null,expr__34897_34904)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34897_34904)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__34908 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34908,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__34917 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34917,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34917,(1),null);
var vec__34920 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__34926 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34926,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34926,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__34929 = (i - (1));
i = G__34929;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__7502__auto__ = d;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__7840__auto__ = (2);
var y__7841__auto__ = w;
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__7840__auto__ = (e + (1));
var y__7841__auto__ = (w__$1 - (1));
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})():(w__$1 + e)
));
var vec__34933 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34933,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34933,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34933,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34933,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__34939 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34939,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34939,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__34954 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954,(1),null);
var vec__34957 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34957,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__34960 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__7502__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__34963 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34963,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__7490__auto__ = w;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = d;
if(cljs.core.truth_(and__7490__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_34966 = cljs.core.count(fixed_repr__$1);
var signed_len_34967 = (cljs.core.truth_(add_sign)?(len_34966 + (1)):len_34966);
var prepend_zero_34968__$1 = (prepend_zero) && (!((signed_len_34967 >= w)));
var append_zero_34969__$1 = (append_zero) && (!((signed_len_34967 >= w)));
var full_len_34970 = (((prepend_zero_34968__$1) || (append_zero_34969__$1))?(signed_len_34967 + (1)):signed_len_34967);
if(cljs.core.truth_((function (){var and__7490__auto__ = (full_len_34970 > w);
if(and__7490__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7490__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_34970),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_34968__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_34969__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__34987 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__34993_35003 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__34994_35004 = G__34993_35003;
var mantissa_35005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35004,(0),null);
var exp_35006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34994_35004,(1),null);
var G__34993_35007__$1 = G__34993_35003;
while(true){
var vec__34997_35008 = G__34993_35007__$1;
var mantissa_35009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35008,(0),null);
var exp_35010__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34997_35008,(1),null);
var w_35011 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_35012 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_35013 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_35014 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_35015 = (function (){var or__7502__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "E";
}
})();
var add_sign_35016 = (function (){var or__7502__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_35017 = (k_35014 <= (0));
var scaled_exp_35018 = (exp_35010__$1 - (k_35014 - (1)));
var scaled_exp_str_35019 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_35018))].join('');
var scaled_exp_str_35020__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_35015),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_35018 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_35013)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_35013 - cljs.core.count(scaled_exp_str_35019)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_35019)].join('');
var exp_width_35021 = cljs.core.count(scaled_exp_str_35020__$1);
var base_mantissa_width_35022 = cljs.core.count(mantissa_35009__$1);
var scaled_mantissa_35023 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_35014),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_35009__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_35012)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_35012 - (base_mantissa_width_35022 - (1))) - (((k_35014 < (0)))?(- k_35014):(0))),"0")):null))].join('');
var w_mantissa_35024 = (cljs.core.truth_(w_35011)?(w_35011 - exp_width_35021):null);
var vec__35000_35025 = cljs.pprint.round_str(scaled_mantissa_35023,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_35014,(0)))?(d_35012 - (1)):(((k_35014 > (0)))?d_35012:(((k_35014 < (0)))?(d_35012 - (1)):null))),(cljs.core.truth_(w_mantissa_35024)?(w_mantissa_35024 - (cljs.core.truth_(add_sign_35016)?(1):(0))):null));
var rounded_mantissa_35026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000_35025,(0),null);
var __35027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000_35025,(1),null);
var incr_exp_35028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000_35025,(2),null);
var full_mantissa_35029 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_35026,k_35014);
var append_zero_35030 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_35014,cljs.core.count(rounded_mantissa_35026))) && ((d_35012 == null));
if(cljs.core.not(incr_exp_35028)){
if(cljs.core.truth_(w_35011)){
var len_35031 = (cljs.core.count(full_mantissa_35029) + exp_width_35021);
var signed_len_35032 = (cljs.core.truth_(add_sign_35016)?(len_35031 + (1)):len_35031);
var prepend_zero_35033__$1 = (prepend_zero_35017) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_35032,w_35011)));
var full_len_35034 = ((prepend_zero_35033__$1)?(signed_len_35032 + (1)):signed_len_35032);
var append_zero_35035__$1 = (append_zero_35030) && ((full_len_35034 < w_35011));
if(cljs.core.truth_((function (){var and__7490__auto__ = (function (){var or__7502__auto__ = (full_len_35034 > w_35011);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = e_35013;
if(cljs.core.truth_(and__7490__auto__)){
return ((exp_width_35021 - (2)) > e_35013);
} else {
return and__7490__auto__;
}
}
})();
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7490__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_35011,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_35011 - full_len_35034) - ((append_zero_35035__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_35016)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_35033__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_35029),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_35035__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_35020__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_35016)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_35017)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_35029),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_35030)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_35020__$1)].join('')], 0));
}
} else {
var G__35036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_35026,(exp_35010__$1 + (1))], null);
G__34993_35007__$1 = G__35036;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__35043 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35043,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__35046 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35046,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35046,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__7840__auto__ = cljs.core.count(mantissa);
var y__7841__auto__ = (function (){var x__7847__auto__ = n;
var y__7848__auto__ = (7);
return ((x__7847__auto__ < y__7848__auto__) ? x__7847__auto__ : y__7848__auto__);
})();
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__35058 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35058,(1),null);
var vec__35061 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35061,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__7502__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (arg < (0));
}
})();
var vec__35064 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7490__auto__)){
return add_sign;
} else {
return and__7490__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__7490__auto__){
return add_sign;
} else {
return and__7490__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__35070 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__35076 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__35082 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35082,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35091 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(1),null);
var vec__35094 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35094,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7502__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = max_count;
if(cljs.core.truth_(and__7490__auto__)){
return (count >= max_count);
} else {
return and__7490__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__35097 = (count + (1));
var G__35098 = iter_result;
var G__35099 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__35097;
args__$1 = G__35098;
last_pos = G__35099;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35106 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(1),null);
var vec__35109 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35109,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__7502__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = max_count;
if(cljs.core.truth_(and__7490__auto__)){
return (count >= max_count);
} else {
return and__7490__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__35112 = (count + (1));
var G__35113 = cljs.core.next(arg_list__$1);
count = G__35112;
arg_list__$1 = G__35113;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35117 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35117,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7502__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = max_count;
if(cljs.core.truth_(and__7490__auto__)){
return (count >= max_count);
} else {
return and__7490__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__35120 = (count + (1));
var G__35121 = iter_result;
var G__35122 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__35120;
navigator__$2 = G__35121;
last_pos = G__35122;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35129 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__7502__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = max_count;
if(cljs.core.truth_(and__7490__auto__)){
return (count >= max_count);
} else {
return and__7490__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__35132 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__35135 = (count + (1));
var G__35136 = navigator__$3;
count = G__35135;
navigator__$2 = G__35136;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__35141 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_35144 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35144;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__35145 = cljs.core.next(clauses__$1);
var G__35146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__35147 = iter_result;
clauses__$1 = G__35145;
acc = G__35146;
navigator__$1 = G__35147;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__35161 = (function (){var temp__6753__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__6753__auto__)){
var else$ = temp__6753__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__35164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35164,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35161,(1),null);
var navigator__$1 = (function (){var or__7502__auto__ = new_navigator;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return navigator;
}
})();
var vec__35167 = (function (){var temp__6753__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__6753__auto__)){
var p = temp__6753__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167,(1),null);
var navigator__$2 = (function (){var or__7502__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__7502__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__7502__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__35170 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35170,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35170,(1),null);
var slots = (function (){var x__7840__auto__ = (1);
var y__7841__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__7840__auto__ = minpad;
var y__7841__auto__ = cljs.core.quot(total_pad,slots);
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__7490__auto__ = eol_str;
if(cljs.core.truth_(and__7490__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35173 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35173) : cljs.core.deref.call(null,G__35173));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__7490__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_35174__$1 = slots;
var extra_pad_35175__$1 = extra_pad;
var strs_35176__$1 = strs;
var pad_only_35177 = (function (){var or__7502__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_35176__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_35176__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_35177))?cljs.core.first(strs_35176__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__7502__auto__ = pad_only_35177;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.core.next(strs_35176__$1);
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_35175__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__35178 = (slots_35174__$1 - (1));
var G__35179 = (extra_pad_35175__$1 - (1));
var G__35180 = (cljs.core.truth_(pad_only_35177)?strs_35176__$1:cljs.core.next(strs_35176__$1));
var G__35181 = false;
slots_35174__$1 = G__35178;
extra_pad_35175__$1 = G__35179;
strs_35176__$1 = G__35180;
pad_only_35177 = G__35181;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint35188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35188 = (function (writer,meta35189){
this.writer = writer;
this.meta35189 = meta35189;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint35188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35190,meta35189__$1){
var self__ = this;
var _35190__$1 = this;
return (new cljs.pprint.t_cljs$pprint35188(self__.writer,meta35189__$1));
});


cljs.pprint.t_cljs$pprint35188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35190){
var self__ = this;
var _35190__$1 = this;
return self__.meta35189;
});


cljs.pprint.t_cljs$pprint35188.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});


cljs.pprint.t_cljs$pprint35188.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35191 = cljs.core._EQ_;
var expr__35192 = cljs.core.type(x);
if(cljs.core.truth_((pred__35191.cljs$core$IFn$_invoke$arity$2 ? pred__35191.cljs$core$IFn$_invoke$arity$2(String,expr__35192) : pred__35191.call(null,String,expr__35192)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__35191.cljs$core$IFn$_invoke$arity$2 ? pred__35191.cljs$core$IFn$_invoke$arity$2(Number,expr__35192) : pred__35191.call(null,Number,expr__35192)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35192)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint35188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta35189], null);
});

cljs.pprint.t_cljs$pprint35188.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint35188.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35188";

cljs.pprint.t_cljs$pprint35188.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint35188");
});

cljs.pprint.__GT_t_cljs$pprint35188 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint35188(writer__$1,meta35189){
return (new cljs.pprint.t_cljs$pprint35188(writer__$1,meta35189));
});

}

return (new cljs.pprint.t_cljs$pprint35188(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint35200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35200 = (function (writer,meta35201){
this.writer = writer;
this.meta35201 = meta35201;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint35200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35202,meta35201__$1){
var self__ = this;
var _35202__$1 = this;
return (new cljs.pprint.t_cljs$pprint35200(self__.writer,meta35201__$1));
});


cljs.pprint.t_cljs$pprint35200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35202){
var self__ = this;
var _35202__$1 = this;
return self__.meta35201;
});


cljs.pprint.t_cljs$pprint35200.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});


cljs.pprint.t_cljs$pprint35200.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35203 = cljs.core._EQ_;
var expr__35204 = cljs.core.type(x);
if(cljs.core.truth_((pred__35203.cljs$core$IFn$_invoke$arity$2 ? pred__35203.cljs$core$IFn$_invoke$arity$2(String,expr__35204) : pred__35203.call(null,String,expr__35204)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__35203.cljs$core$IFn$_invoke$arity$2 ? pred__35203.cljs$core$IFn$_invoke$arity$2(Number,expr__35204) : pred__35203.call(null,Number,expr__35204)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35204)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint35200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta35201], null);
});

cljs.pprint.t_cljs$pprint35200.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint35200.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35200";

cljs.pprint.t_cljs$pprint35200.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint35200");
});

cljs.pprint.__GT_t_cljs$pprint35200 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint35200(writer__$1,meta35201){
return (new cljs.pprint.t_cljs$pprint35200(writer__$1,meta35201));
});

}

return (new cljs.pprint.t_cljs$pprint35200(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__7490__auto__ = first_QMARK_;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = f;
if(cljs.core.truth_(and__7490__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__7490__auto__ = m;
if(cljs.core.truth_(and__7490__auto__)){
return (m.index + (1));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t_cljs$pprint35217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35217 = (function (writer,last_was_whitespace_QMARK_,meta35218){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta35218 = meta35218;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint35217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_35219,meta35218__$1){
var self__ = this;
var _35219__$1 = this;
return (new cljs.pprint.t_cljs$pprint35217(self__.writer,self__.last_was_whitespace_QMARK_,meta35218__$1));
});})(last_was_whitespace_QMARK_))
;


cljs.pprint.t_cljs$pprint35217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_35219){
var self__ = this;
var _35219__$1 = this;
return self__.meta35218;
});})(last_was_whitespace_QMARK_))
;


cljs.pprint.t_cljs$pprint35217.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;


cljs.pprint.t_cljs$pprint35217.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35220 = cljs.core._EQ_;
var expr__35221 = cljs.core.type(x);
if(cljs.core.truth_((pred__35220.cljs$core$IFn$_invoke$arity$2 ? pred__35220.cljs$core$IFn$_invoke$arity$2(String,expr__35221) : pred__35220.call(null,String,expr__35221)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__35223 = self__.last_was_whitespace_QMARK_;
var G__35224 = (function (){var G__35225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__35225);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35223,G__35224) : cljs.core.reset_BANG_.call(null,G__35223,G__35224));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__35220.cljs$core$IFn$_invoke$arity$2 ? pred__35220.cljs$core$IFn$_invoke$arity$2(Number,expr__35221) : pred__35220.call(null,Number,expr__35221)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__35226 = self__.last_was_whitespace_QMARK_;
var G__35227 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35226,G__35227) : cljs.core.reset_BANG_.call(null,G__35226,G__35227));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35221)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint35217.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta35218], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint35217.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint35217.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35217";

cljs.pprint.t_cljs$pprint35217.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint35217");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint35217 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint35217(writer__$1,last_was_whitespace_QMARK___$1,meta35218){
return (new cljs.pprint.t_cljs$pprint35217(writer__$1,last_was_whitespace_QMARK___$1,meta35218));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint35217(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t_cljs$pprint35234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35234 = (function (writer,capped,meta35235){
this.writer = writer;
this.capped = capped;
this.meta35235 = meta35235;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.pprint.t_cljs$pprint35234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_35236,meta35235__$1){
var self__ = this;
var _35236__$1 = this;
return (new cljs.pprint.t_cljs$pprint35234(self__.writer,self__.capped,meta35235__$1));
});})(capped))
;


cljs.pprint.t_cljs$pprint35234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_35236){
var self__ = this;
var _35236__$1 = this;
return self__.meta35235;
});})(capped))
;


cljs.pprint.t_cljs$pprint35234.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;


cljs.pprint.t_cljs$pprint35234.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35237 = cljs.core._EQ_;
var expr__35238 = cljs.core.type(x);
if(cljs.core.truth_((pred__35237.cljs$core$IFn$_invoke$arity$2 ? pred__35237.cljs$core$IFn$_invoke$arity$2(String,expr__35238) : pred__35237.call(null,String,expr__35238)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__7490__auto__ = m;
if(cljs.core.truth_(and__7490__auto__)){
return m.index;
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__35237.cljs$core$IFn$_invoke$arity$2 ? pred__35237.cljs$core$IFn$_invoke$arity$2(Number,expr__35238) : pred__35237.call(null,Number,expr__35238)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__7490__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__7490__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35238)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint35234.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta35235], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint35234.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint35234.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35234";

cljs.pprint.t_cljs$pprint35234.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.pprint/t_cljs$pprint35234");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint35234 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint35234(writer__$1,capped__$1,meta35235){
return (new cljs.pprint.t_cljs$pprint35234(writer__$1,capped__$1,meta35235));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint35234(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_35241 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35241;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35245 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35245) : cljs.core.deref.call(null,G__35245));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_35248 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_35249 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_35250 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35247 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35247) : cljs.core.deref.call(null,G__35247));
})()));
var space_count_35251 = (((current_35250 < colnum_35248))?(colnum_35248 - current_35250):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_35249,(0)))?(0):(colinc_35249 - cljs.core.rem((current_35250 - colnum_35248),colinc_35249))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_35251," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_35254 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_35255 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_35256 = (colrel_35254 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35253 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35253) : cljs.core.deref.call(null,G__35253));
})())));
var offset_35257 = (((colinc_35255 > (0)))?cljs.core.rem(start_col_35256,colinc_35255):(0));
var space_count_35258 = (colrel_35254 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_35257))?(0):(colinc_35255 - offset_35257)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_35258," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__35264 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35264,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35267_35269 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35268_35270 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35268_35270;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35267_35269;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35271_SHARP_,p2__35272_SHARP_,p3__35273_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__35271_SHARP_,p2__35272_SHARP_,p3__35273_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35274_SHARP_,p2__35275_SHARP_,p3__35276_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__35274_SHARP_,p2__35275_SHARP_,p3__35276_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35277_SHARP_,p2__35278_SHARP_,p3__35279_SHARP_){
return cljs.pprint.format_integer((10),p1__35277_SHARP_,p2__35278_SHARP_,p3__35279_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35280_SHARP_,p2__35281_SHARP_,p3__35282_SHARP_){
return cljs.pprint.format_integer((2),p1__35280_SHARP_,p2__35281_SHARP_,p3__35282_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35283_SHARP_,p2__35284_SHARP_,p3__35285_SHARP_){
return cljs.pprint.format_integer((8),p1__35283_SHARP_,p2__35284_SHARP_,p3__35285_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__35286_SHARP_,p2__35287_SHARP_,p3__35288_SHARP_){
return cljs.pprint.format_integer((16),p1__35286_SHARP_,p2__35287_SHARP_,p3__35288_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__35289_SHARP_,p2__35290_SHARP_,p3__35291_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__35289_SHARP_),p1__35289_SHARP_,p2__35290_SHARP_,p3__35291_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7490__auto__;
}
})())){
return (function (p1__35292_SHARP_,p2__35293_SHARP_,p3__35294_SHARP_){
return cljs.pprint.format_old_roman(p1__35292_SHARP_,p2__35293_SHARP_,p3__35294_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35295_SHARP_,p2__35296_SHARP_,p3__35297_SHARP_){
return cljs.pprint.format_new_roman(p1__35295_SHARP_,p2__35296_SHARP_,p3__35297_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35298_SHARP_,p2__35299_SHARP_,p3__35300_SHARP_){
return cljs.pprint.format_ordinal_english(p1__35298_SHARP_,p2__35299_SHARP_,p3__35300_SHARP_);
});
} else {
return (function (p1__35301_SHARP_,p2__35302_SHARP_,p3__35303_SHARP_){
return cljs.pprint.format_cardinal_english(p1__35301_SHARP_,p2__35302_SHARP_,p3__35303_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__35313 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8523__auto___35331 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_35332 = (0);
while(true){
if((i_35332 < n__8523__auto___35331)){
cljs.pprint.prn();

var G__35333 = (i_35332 + (1));
i_35332 = G__35333;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_35334 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_35334 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__8523__auto___35335 = (cnt_35334 - (1));
var i_35336 = (0);
while(true){
if((i_35336 < n__8523__auto___35335)){
cljs.pprint.prn();

var G__35337 = (i_35336 + (1));
i_35336 = G__35337;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8523__auto___35338 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_35339 = (0);
while(true){
if((i_35339 < n__8523__auto___35338)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__35340 = (i_35339 + (1));
i_35339 = G__35340;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35304_SHARP_,p2__35305_SHARP_,p3__35306_SHARP_){
return cljs.pprint.relative_tabulation(p1__35304_SHARP_,p2__35305_SHARP_,p3__35306_SHARP_);
});
} else {
return (function (p1__35307_SHARP_,p2__35308_SHARP_,p3__35309_SHARP_){
return cljs.pprint.absolute_tabulation(p1__35307_SHARP_,p2__35308_SHARP_,p3__35309_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__35316 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__35319 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(1),null);
var vec__35322 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35322,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7490__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__35310_SHARP_,p2__35311_SHARP_,p3__35312_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__35310_SHARP_,p2__35311_SHARP_,p3__35312_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7490__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__7490__auto__ = arg1;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = arg2;
if(cljs.core.truth_(and__7490__auto____$1)){
return arg3;
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = arg1;
if(cljs.core.truth_(and__7490__auto__)){
return arg2;
} else {
return and__7490__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__35325 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35325,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__35328 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35328,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__35341){
var vec__35345 = p__35341;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__35348){
var vec__35352 = p__35348;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__35359){
var vec__35360 = p__35359;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35360,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Flag \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7490__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7490__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"@\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7490__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7490__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\":\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7490__auto__){
var and__7490__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__7490__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),(function (){var x__7847__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__7848__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__7847__auto__ < y__7848__auto__) ? x__7847__auto__ : y__7848__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__35363_SHARP_,p2__35364_SHARP_){
var val = cljs.core.first(p1__35363_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__35364_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__35364_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" has bad type in directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__35363_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__8364__auto__ = (function cljs$pprint$map_params_$_iter__35398(s__35399){
return (new cljs.core.LazySeq(null,(function (){
var s__35399__$1 = s__35399;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35399__$1);
if(temp__6753__auto__){
var s__35399__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35399__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__35399__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__35401 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__35400 = (0);
while(true){
if((i__35400 < size__8363__auto__)){
var vec__35416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__35400);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(0),null);
var vec__35419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419,(0),null);
cljs.core.chunk_append(b__35401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__35428 = (i__35400 + (1));
i__35400 = G__35428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35401),cljs$pprint$map_params_$_iter__35398(cljs.core.chunk_rest(s__35399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35401),null);
}
} else {
var vec__35422 = cljs.core.first(s__35399__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(0),null);
var vec__35425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35425,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__35398(cljs.core.rest(s__35399__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35365_SHARP_,p2__35366_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__35365_SHARP_,p2__35366_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35367_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__35367_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__35441 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(0),null);
var vec__35444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35441,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(1),null);
var vec__35447 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(0),null);
var vec__35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35450,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__7490__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__7490__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__35459 = (function (){var G__35462 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__35463 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__35464 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__35462,G__35463,G__35464) : cljs.pprint.collect_clauses.call(null,G__35462,G__35463,G__35464));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35459,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35459,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__35475){
var vec__35476 = p__35475;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476,(2),null);
var vec__35479 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479,(0),null);
var vec__35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_35490 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_35490){
return (function (p__35491){
var vec__35492 = p__35491;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35492,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_35490))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_35490;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__35495 = cljs.core.next(format__$1);
format__$1 = G__35495;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args35496 = [];
var len__8723__auto___35506 = arguments.length;
var i__8724__auto___35507 = (0);
while(true){
if((i__8724__auto___35507 < len__8723__auto___35506)){
args35496.push((arguments[i__8724__auto___35507]));

var G__35508 = (i__8724__auto___35507 + (1));
i__8724__auto___35507 = G__35508;
continue;
} else {
}
break;
}

var G__35498 = args35496.length;
switch (G__35498) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35496.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__7490__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__7490__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_35499 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35499;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__35500 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500,(1),null);
var vec__35503 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__35511 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__35511) : cljs.pprint.reader_macros.call(null,G__35511));
})();
if(cljs.core.truth_((function (){var and__7490__auto__ = macro_char;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__7490__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35515_35518 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35516_35519 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count35517_35520 = (0);
var alis_35521__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35517_35520 < cljs.core._STAR_print_length_STAR_))){
if(alis_35521__$1){
cljs.pprint.write_out(cljs.core.first(alis_35521__$1));

if(cljs.core.next(alis_35521__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35522 = (length_count35517_35520 + (1));
var G__35523 = cljs.core.next(alis_35521__$1);
length_count35517_35520 = G__35522;
alis_35521__$1 = G__35523;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35516_35519;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35515_35518;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35527_35530 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35528_35531 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count35529_35532 = (0);
var aseq_35533 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35529_35532 < cljs.core._STAR_print_length_STAR_))){
if(aseq_35533){
cljs.pprint.write_out(cljs.core.first(aseq_35533));

if(cljs.core.next(aseq_35533)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35534 = (length_count35529_35532 + (1));
var G__35535 = cljs.core.next(aseq_35533);
length_count35529_35532 = G__35534;
aseq_35533 = G__35535;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35528_35531;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35527_35530;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__33960__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35536__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35536 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35537__i = 0, G__35537__a = new Array(arguments.length -  0);
while (G__35537__i < G__35537__a.length) {G__35537__a[G__35537__i] = arguments[G__35537__i + 0]; ++G__35537__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35537__a,0);
} 
return G__35536__delegate.call(this,args__33962__auto__);};
G__35536.cljs$lang$maxFixedArity = 0;
G__35536.cljs$lang$applyTo = (function (arglist__35538){
var args__33962__auto__ = cljs.core.seq(arglist__35538);
return G__35536__delegate(args__33962__auto__);
});
G__35536.cljs$core$IFn$_invoke$arity$variadic = G__35536__delegate;
return G__35536;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__35547 = ((!(cljs.core.record_QMARK_(amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9457,9457,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35547,(1),null);
var amap__$1 = (function (){var or__7502__auto__ = lift_map;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35550_35555 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35551_35556 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count35552_35557 = (0);
var aseq_35558 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35552_35557 < cljs.core._STAR_print_length_STAR_))){
if(aseq_35558){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35553_35559 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35554_35560 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_35558));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_35558)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35554_35560;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35553_35559;
}}


if(cljs.core.next(aseq_35558)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35561 = (length_count35552_35557 + (1));
var G__35562 = cljs.core.next(aseq_35558);
length_count35552_35557 = G__35561;
aseq_35558 = G__35562;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35551_35556;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35550_35555;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__33960__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35563__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35563 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35564__i = 0, G__35564__a = new Array(arguments.length -  0);
while (G__35564__i < G__35564__a.length) {G__35564__a[G__35564__i] = arguments[G__35564__i + 0]; ++G__35564__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35564__a,0);
} 
return G__35563__delegate.call(this,args__33962__auto__);};
G__35563.cljs$lang$maxFixedArity = 0;
G__35563.cljs$lang$applyTo = (function (arglist__35565){
var args__33962__auto__ = cljs.core.seq(arglist__35565);
return G__35563__delegate(args__33962__auto__);
});
G__35563.cljs$core$IFn$_invoke$arity$variadic = G__35563__delegate;
return G__35563;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__7502__auto__ = (function (){var temp__6753__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__6753__auto__)){
var match = temp__6753__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35570_35574 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35571_35575 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__7490__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__7490__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__7490__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35571_35575;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35570_35574;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__33960__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35576__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35576 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35577__i = 0, G__35577__a = new Array(arguments.length -  0);
while (G__35577__i < G__35577__a.length) {G__35577__a[G__35577__i] = arguments[G__35577__i + 0]; ++G__35577__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35577__a,0);
} 
return G__35576__delegate.call(this,args__33962__auto__);};
G__35576.cljs$lang$maxFixedArity = 0;
G__35576.cljs$lang$applyTo = (function (arglist__35578){
var args__33962__auto__ = cljs.core.seq(arglist__35578);
return G__35576__delegate(args__33962__auto__);
});
G__35576.cljs$core$IFn$_invoke$arity$variadic = G__35576__delegate;
return G__35576;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__8533__auto__ = (function (){var G__35581 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35581) : cljs.core.atom.call(null,G__35581));
})();
var prefer_table__8534__auto__ = (function (){var G__35582 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35582) : cljs.core.atom.call(null,G__35582));
})();
var method_cache__8535__auto__ = (function (){var G__35583 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35583) : cljs.core.atom.call(null,G__35583));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__35584 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35584) : cljs.core.atom.call(null,G__35584));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__35601 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(1),null);
var vec__35604 = reference;
var seq__35605 = cljs.core.seq(vec__35604);
var first__35606 = cljs.core.first(seq__35605);
var seq__35605__$1 = cljs.core.next(seq__35605);
var keyw = first__35606;
var args = seq__35605__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35607_35617 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35608_35618 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__33960__auto__ = "~w~:i";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35619__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35619 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35620__i = 0, G__35620__a = new Array(arguments.length -  0);
while (G__35620__i < G__35620__a.length) {G__35620__a[G__35620__i] = arguments[G__35620__i + 0]; ++G__35620__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35620__a,0);
} 
return G__35619__delegate.call(this,args__33962__auto__);};
G__35619.cljs$lang$maxFixedArity = 0;
G__35619.cljs$lang$applyTo = (function (arglist__35621){
var args__33962__auto__ = cljs.core.seq(arglist__35621);
return G__35619__delegate(args__33962__auto__);
});
G__35619.cljs$core$IFn$_invoke$arity$variadic = G__35619__delegate;
return G__35619;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null,keyw);

var args_35622__$1 = args;
while(true){
if(cljs.core.seq(args_35622__$1)){
(function (){var format_in__33960__auto__ = " ";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35623__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35623 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35624__i = 0, G__35624__a = new Array(arguments.length -  0);
while (G__35624__i < G__35624__a.length) {G__35624__a[G__35624__i] = arguments[G__35624__i + 0]; ++G__35624__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35624__a,0);
} 
return G__35623__delegate.call(this,args__33962__auto__);};
G__35623.cljs$lang$maxFixedArity = 0;
G__35623.cljs$lang$applyTo = (function (arglist__35625){
var args__33962__auto__ = cljs.core.seq(arglist__35625);
return G__35623__delegate(args__33962__auto__);
});
G__35623.cljs$core$IFn$_invoke$arity$variadic = G__35623__delegate;
return G__35623;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null);

var arg_35626 = cljs.core.first(args_35622__$1);
if(cljs.core.sequential_QMARK_(arg_35626)){
var vec__35609_35627 = cljs.pprint.brackets(arg_35626);
var start_35628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609_35627,(0),null);
var end_35629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609_35627,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35612_35630 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35613_35631 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_35628__$1,null,end_35629__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_35626),(3))) && ((cljs.core.second(arg_35626) instanceof cljs.core.Keyword))){
var vec__35614_35632 = arg_35626;
var ns_35633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614_35632,(0),null);
var kw_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614_35632,(1),null);
var lis_35635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614_35632,(2),null);
(function (){var format_in__33960__auto__ = "~w ~w ";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35614_35632,ns_35633,kw_35634,lis_35635,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35636__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35636 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35637__i = 0, G__35637__a = new Array(arguments.length -  0);
while (G__35637__i < G__35637__a.length) {G__35637__a[G__35637__i] = arguments[G__35637__i + 0]; ++G__35637__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35637__a,0);
} 
return G__35636__delegate.call(this,args__33962__auto__);};
G__35636.cljs$lang$maxFixedArity = 0;
G__35636.cljs$lang$applyTo = (function (arglist__35638){
var args__33962__auto__ = cljs.core.seq(arglist__35638);
return G__35636__delegate(args__33962__auto__);
});
G__35636.cljs$core$IFn$_invoke$arity$variadic = G__35636__delegate;
return G__35636;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35614_35632,ns_35633,kw_35634,lis_35635,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null,ns_35633,kw_35634);

if(cljs.core.sequential_QMARK_(lis_35635)){
(function (){var format_in__33960__auto__ = ((cljs.core.vector_QMARK_(lis_35635))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35614_35632,ns_35633,kw_35634,lis_35635,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35639__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35639 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35640__i = 0, G__35640__a = new Array(arguments.length -  0);
while (G__35640__i < G__35640__a.length) {G__35640__a[G__35640__i] = arguments[G__35640__i + 0]; ++G__35640__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35640__a,0);
} 
return G__35639__delegate.call(this,args__33962__auto__);};
G__35639.cljs$lang$maxFixedArity = 0;
G__35639.cljs$lang$applyTo = (function (arglist__35641){
var args__33962__auto__ = cljs.core.seq(arglist__35641);
return G__35639__delegate(args__33962__auto__);
});
G__35639.cljs$core$IFn$_invoke$arity$variadic = G__35639__delegate;
return G__35639;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35614_35632,ns_35633,kw_35634,lis_35635,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null,lis_35635);
} else {
cljs.pprint.write_out(lis_35635);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__33960__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35642__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35642 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35643__i = 0, G__35643__a = new Array(arguments.length -  0);
while (G__35643__i < G__35643__a.length) {G__35643__a[G__35643__i] = arguments[G__35643__i + 0]; ++G__35643__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35643__a,0);
} 
return G__35642__delegate.call(this,args__33962__auto__);};
G__35642.cljs$lang$maxFixedArity = 0;
G__35642.cljs$lang$applyTo = (function (arglist__35644){
var args__33962__auto__ = cljs.core.seq(arglist__35644);
return G__35642__delegate(args__33962__auto__);
});
G__35642.cljs$core$IFn$_invoke$arity$variadic = G__35642__delegate;
return G__35642;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35612_35630,_STAR_current_length_STAR_35613_35631,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})(),arg_35626);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35613_35631;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35612_35630;
}}


if(cljs.core.next(args_35622__$1)){
(function (){var format_in__33960__auto__ = "~_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35645__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35645 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35646__i = 0, G__35646__a = new Array(arguments.length -  0);
while (G__35646__i < G__35646__a.length) {G__35646__a[G__35646__i] = arguments[G__35646__i + 0]; ++G__35646__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35646__a,0);
} 
return G__35645__delegate.call(this,args__33962__auto__);};
G__35645.cljs$lang$maxFixedArity = 0;
G__35645.cljs$lang$applyTo = (function (arglist__35647){
var args__33962__auto__ = cljs.core.seq(arglist__35647);
return G__35645__delegate(args__33962__auto__);
});
G__35645.cljs$core$IFn$_invoke$arity$variadic = G__35645__delegate;
return G__35645;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,vec__35609_35627,start_35628__$1,end_35629__$1,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_35626);

if(cljs.core.next(args_35622__$1)){
(function (){var format_in__33960__auto__ = "~:_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (args_35622__$1,format_in__33960__auto__,cf__33961__auto__,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args){
return (function() { 
var G__35648__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35648 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35649__i = 0, G__35649__a = new Array(arguments.length -  0);
while (G__35649__i < G__35649__a.length) {G__35649__a[G__35649__i] = arguments[G__35649__i + 0]; ++G__35649__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35649__a,0);
} 
return G__35648__delegate.call(this,args__33962__auto__);};
G__35648.cljs$lang$maxFixedArity = 0;
G__35648.cljs$lang$applyTo = (function (arglist__35650){
var args__33962__auto__ = cljs.core.seq(arglist__35650);
return G__35648__delegate(args__33962__auto__);
});
G__35648.cljs$core$IFn$_invoke$arity$variadic = G__35648__delegate;
return G__35648;
})()
;
;})(args_35622__$1,format_in__33960__auto__,cf__33961__auto__,arg_35626,_STAR_current_level_STAR_35607_35617,_STAR_current_length_STAR_35608_35618,vec__35601,start,end,vec__35604,seq__35605,first__35606,seq__35605__$1,keyw,args))
})().call(null);
} else {
}
}

var G__35651 = cljs.core.next(args_35622__$1);
args_35622__$1 = G__35651;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35608_35618;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35607_35617;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__35663 = alis;
var seq__35664 = cljs.core.seq(vec__35663);
var first__35665 = cljs.core.first(seq__35664);
var seq__35664__$1 = cljs.core.next(seq__35664);
var ns_sym = first__35665;
var first__35665__$1 = cljs.core.first(seq__35664__$1);
var seq__35664__$2 = cljs.core.next(seq__35664__$1);
var ns_name = first__35665__$1;
var stuff = seq__35664__$2;
var vec__35666 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(1),null);
var vec__35669 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35672_35674 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35673_35675 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__33960__auto__ = "~w ~1I~@_~w";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references){
return (function() { 
var G__35676__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35676 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35677__i = 0, G__35677__a = new Array(arguments.length -  0);
while (G__35677__i < G__35677__a.length) {G__35677__a[G__35677__i] = arguments[G__35677__i + 0]; ++G__35677__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35677__a,0);
} 
return G__35676__delegate.call(this,args__33962__auto__);};
G__35676.cljs$lang$maxFixedArity = 0;
G__35676.cljs$lang$applyTo = (function (arglist__35678){
var args__33962__auto__ = cljs.core.seq(arglist__35678);
return G__35676__delegate(args__33962__auto__);
});
G__35676.cljs$core$IFn$_invoke$arity$variadic = G__35676__delegate;
return G__35676;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__7502__auto__ = doc_str;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = attr_map;
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__33960__auto__ = "~@:_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references){
return (function() { 
var G__35679__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35679 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35680__i = 0, G__35680__a = new Array(arguments.length -  0);
while (G__35680__i < G__35680__a.length) {G__35680__a[G__35680__i] = arguments[G__35680__i + 0]; ++G__35680__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35680__a,0);
} 
return G__35679__delegate.call(this,args__33962__auto__);};
G__35679.cljs$lang$maxFixedArity = 0;
G__35679.cljs$lang$applyTo = (function (arglist__35681){
var args__33962__auto__ = cljs.core.seq(arglist__35681);
return G__35679__delegate(args__33962__auto__);
});
G__35679.cljs$core$IFn$_invoke$arity$variadic = G__35679__delegate;
return G__35679;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__7502__auto__ = attr_map;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__33960__auto__ = "~w~:[~;~:@_~]";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references){
return (function() { 
var G__35682__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35682 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35683__i = 0, G__35683__a = new Array(arguments.length -  0);
while (G__35683__i < G__35683__a.length) {G__35683__a[G__35683__i] = arguments[G__35683__i + 0]; ++G__35683__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35683__a,0);
} 
return G__35682__delegate.call(this,args__33962__auto__);};
G__35682.cljs$lang$maxFixedArity = 0;
G__35682.cljs$lang$applyTo = (function (arglist__35684){
var args__33962__auto__ = cljs.core.seq(arglist__35684);
return G__35682__delegate(args__33962__auto__);
});
G__35682.cljs$core$IFn$_invoke$arity$variadic = G__35682__delegate;
return G__35682;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35672_35674,_STAR_current_length_STAR_35673_35675,vec__35663,seq__35664,first__35665,seq__35664__$1,ns_sym,first__35665__$1,seq__35664__$2,ns_name,stuff,vec__35666,doc_str,stuff__$1,vec__35669,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_35685__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_35685__$1));

var temp__6753__auto___35686 = cljs.core.next(references_35685__$1);
if(temp__6753__auto___35686){
var references_35687__$2 = temp__6753__auto___35686;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35688 = references_35687__$2;
references_35685__$1 = G__35688;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35673_35675;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35672_35674;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__33960__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35689__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35689 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35690__i = 0, G__35690__a = new Array(arguments.length -  0);
while (G__35690__i < G__35690__a.length) {G__35690__a[G__35690__i] = arguments[G__35690__i + 0]; ++G__35690__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35690__a,0);
} 
return G__35689__delegate.call(this,args__33962__auto__);};
G__35689.cljs$lang$maxFixedArity = 0;
G__35689.cljs$lang$applyTo = (function (arglist__35691){
var args__33962__auto__ = cljs.core.seq(arglist__35691);
return G__35689__delegate(args__33962__auto__);
});
G__35689.cljs$core$IFn$_invoke$arity$variadic = G__35689__delegate;
return G__35689;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__33960__auto__ = " ~_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35692__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35692 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35693__i = 0, G__35693__a = new Array(arguments.length -  0);
while (G__35693__i < G__35693__a.length) {G__35693__a[G__35693__i] = arguments[G__35693__i + 0]; ++G__35693__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35693__a,0);
} 
return G__35692__delegate.call(this,args__33962__auto__);};
G__35692.cljs$lang$maxFixedArity = 0;
G__35692.cljs$lang$applyTo = (function (arglist__35694){
var args__33962__auto__ = cljs.core.seq(arglist__35694);
return G__35692__delegate(args__33962__auto__);
});
G__35692.cljs$core$IFn$_invoke$arity$variadic = G__35692__delegate;
return G__35692;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})().call(null);
} else {
(function (){var format_in__33960__auto__ = " ~@_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35695__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35695 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35696__i = 0, G__35696__a = new Array(arguments.length -  0);
while (G__35696__i < G__35696__a.length) {G__35696__a[G__35696__i] = arguments[G__35696__i + 0]; ++G__35696__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35696__a,0);
} 
return G__35695__delegate.call(this,args__33962__auto__);};
G__35695.cljs$lang$maxFixedArity = 0;
G__35695.cljs$lang$applyTo = (function (arglist__35697){
var args__33962__auto__ = cljs.core.seq(arglist__35697);
return G__35695__delegate(args__33962__auto__);
});
G__35695.cljs$core$IFn$_invoke$arity$variadic = G__35695__delegate;
return G__35695;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})().call(null);
}

return (function (){var format_in__33960__auto__ = "~{~w~^ ~_~}";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35698__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35698 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35699__i = 0, G__35699__a = new Array(arguments.length -  0);
while (G__35699__i < G__35699__a.length) {G__35699__a[G__35699__i] = arguments[G__35699__i + 0]; ++G__35699__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35699__a,0);
} 
return G__35698__delegate.call(this,args__33962__auto__);};
G__35698.cljs$lang$maxFixedArity = 0;
G__35698.cljs$lang$applyTo = (function (arglist__35700){
var args__33962__auto__ = cljs.core.seq(arglist__35700);
return G__35698__delegate(args__33962__auto__);
});
G__35698.cljs$core$IFn$_invoke$arity$variadic = G__35698__delegate;
return G__35698;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__33960__auto__ = " ~_~{~w~^ ~_~}";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35701__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35701 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35702__i = 0, G__35702__a = new Array(arguments.length -  0);
while (G__35702__i < G__35702__a.length) {G__35702__a[G__35702__i] = arguments[G__35702__i + 0]; ++G__35702__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35702__a,0);
} 
return G__35701__delegate.call(this,args__33962__auto__);};
G__35701.cljs$lang$maxFixedArity = 0;
G__35701.cljs$lang$applyTo = (function (arglist__35703){
var args__33962__auto__ = cljs.core.seq(arglist__35703);
return G__35701__delegate(args__33962__auto__);
});
G__35701.cljs$core$IFn$_invoke$arity$variadic = G__35701__delegate;
return G__35701;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__35715 = alis;
var seq__35716 = cljs.core.seq(vec__35715);
var first__35717 = cljs.core.first(seq__35716);
var seq__35716__$1 = cljs.core.next(seq__35716);
var defn_sym = first__35717;
var first__35717__$1 = cljs.core.first(seq__35716__$1);
var seq__35716__$2 = cljs.core.next(seq__35716__$1);
var defn_name = first__35717__$1;
var stuff = seq__35716__$2;
var vec__35718 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35718,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35718,(1),null);
var vec__35721 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35721,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35721,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35724_35726 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35725_35727 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__33960__auto__ = "~w ~1I~@_~w";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2){
return (function() { 
var G__35728__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35728 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35729__i = 0, G__35729__a = new Array(arguments.length -  0);
while (G__35729__i < G__35729__a.length) {G__35729__a[G__35729__i] = arguments[G__35729__i + 0]; ++G__35729__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35729__a,0);
} 
return G__35728__delegate.call(this,args__33962__auto__);};
G__35728.cljs$lang$maxFixedArity = 0;
G__35728.cljs$lang$applyTo = (function (arglist__35730){
var args__33962__auto__ = cljs.core.seq(arglist__35730);
return G__35728__delegate(args__33962__auto__);
});
G__35728.cljs$core$IFn$_invoke$arity$variadic = G__35728__delegate;
return G__35728;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__33960__auto__ = " ~_~w";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2){
return (function() { 
var G__35731__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35731 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35732__i = 0, G__35732__a = new Array(arguments.length -  0);
while (G__35732__i < G__35732__a.length) {G__35732__a[G__35732__i] = arguments[G__35732__i + 0]; ++G__35732__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35732__a,0);
} 
return G__35731__delegate.call(this,args__33962__auto__);};
G__35731.cljs$lang$maxFixedArity = 0;
G__35731.cljs$lang$applyTo = (function (arglist__35733){
var args__33962__auto__ = cljs.core.seq(arglist__35733);
return G__35731__delegate(args__33962__auto__);
});
G__35731.cljs$core$IFn$_invoke$arity$variadic = G__35731__delegate;
return G__35731;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__33960__auto__ = " ~_~w";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2){
return (function() { 
var G__35734__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35734 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35735__i = 0, G__35735__a = new Array(arguments.length -  0);
while (G__35735__i < G__35735__a.length) {G__35735__a[G__35735__i] = arguments[G__35735__i + 0]; ++G__35735__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35735__a,0);
} 
return G__35734__delegate.call(this,args__33962__auto__);};
G__35734.cljs$lang$maxFixedArity = 0;
G__35734.cljs$lang$applyTo = (function (arglist__35736){
var args__33962__auto__ = cljs.core.seq(arglist__35736);
return G__35734__delegate(args__33962__auto__);
});
G__35734.cljs$core$IFn$_invoke$arity$variadic = G__35734__delegate;
return G__35734;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35724_35726,_STAR_current_length_STAR_35725_35727,vec__35715,seq__35716,first__35717,seq__35716__$1,defn_sym,first__35717__$1,seq__35716__$2,defn_name,stuff,vec__35718,doc_str,stuff__$1,vec__35721,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__7502__auto__ = doc_str;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__7502__auto__ = doc_str;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35725_35727;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35724_35726;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35742_35747 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35743_35748 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count35744_35749 = (0);
var binding_35750 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35744_35749 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_35750)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35745_35751 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35746_35752 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_35750));

if(cljs.core.next(binding_35750)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_35750));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35746_35752;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35745_35751;
}}


if(cljs.core.next(cljs.core.rest(binding_35750))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35753 = (length_count35744_35749 + (1));
var G__35754 = cljs.core.next(cljs.core.rest(binding_35750));
length_count35744_35749 = G__35753;
binding_35750 = G__35754;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35743_35748;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35742_35747;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35757_35759 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35758_35760 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__33960__auto__ = "~w ~1I~@_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35757_35759,_STAR_current_length_STAR_35758_35760,base_sym){
return (function() { 
var G__35761__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35761 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35762__i = 0, G__35762__a = new Array(arguments.length -  0);
while (G__35762__i < G__35762__a.length) {G__35762__a[G__35762__i] = arguments[G__35762__i + 0]; ++G__35762__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35762__a,0);
} 
return G__35761__delegate.call(this,args__33962__auto__);};
G__35761.cljs$lang$maxFixedArity = 0;
G__35761.cljs$lang$applyTo = (function (arglist__35763){
var args__33962__auto__ = cljs.core.seq(arglist__35763);
return G__35761__delegate(args__33962__auto__);
});
G__35761.cljs$core$IFn$_invoke$arity$variadic = G__35761__delegate;
return G__35761;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35757_35759,_STAR_current_length_STAR_35758_35760,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__33960__auto__ = " ~_~{~w~^ ~_~}";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35757_35759,_STAR_current_length_STAR_35758_35760,base_sym){
return (function() { 
var G__35764__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35764 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35765__i = 0, G__35765__a = new Array(arguments.length -  0);
while (G__35765__i < G__35765__a.length) {G__35765__a[G__35765__i] = arguments[G__35765__i + 0]; ++G__35765__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35765__a,0);
} 
return G__35764__delegate.call(this,args__33962__auto__);};
G__35764.cljs$lang$maxFixedArity = 0;
G__35764.cljs$lang$applyTo = (function (arglist__35766){
var args__33962__auto__ = cljs.core.seq(arglist__35766);
return G__35764__delegate(args__33962__auto__);
});
G__35764.cljs$core$IFn$_invoke$arity$variadic = G__35764__delegate;
return G__35764;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35757_35759,_STAR_current_length_STAR_35758_35760,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35758_35760;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35757_35759;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__33960__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__){
return (function() { 
var G__35767__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35767 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35768__i = 0, G__35768__a = new Array(arguments.length -  0);
while (G__35768__i < G__35768__a.length) {G__35768__a[G__35768__i] = arguments[G__35768__i + 0]; ++G__35768__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35768__a,0);
} 
return G__35767__delegate.call(this,args__33962__auto__);};
G__35767.cljs$lang$maxFixedArity = 0;
G__35767.cljs$lang$applyTo = (function (arglist__35769){
var args__33962__auto__ = cljs.core.seq(arglist__35769);
return G__35767__delegate(args__33962__auto__);
});
G__35767.cljs$core$IFn$_invoke$arity$variadic = G__35767__delegate;
return G__35767;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35775_35780 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35776_35781 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count35777_35782 = (0);
var alis_35783__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35777_35782 < cljs.core._STAR_print_length_STAR_))){
if(alis_35783__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35778_35784 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35779_35785 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_35783__$1));

if(cljs.core.next(alis_35783__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_35783__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35779_35785;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35778_35784;
}}


if(cljs.core.next(cljs.core.rest(alis_35783__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35786 = (length_count35777_35782 + (1));
var G__35787 = cljs.core.next(cljs.core.rest(alis_35783__$1));
length_count35777_35782 = G__35786;
alis_35783__$1 = G__35787;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35776_35781;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35775_35780;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35793_35798 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35794_35799 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__33960__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35793_35798,_STAR_current_length_STAR_35794_35799){
return (function() { 
var G__35800__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35800 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35801__i = 0, G__35801__a = new Array(arguments.length -  0);
while (G__35801__i < G__35801__a.length) {G__35801__a[G__35801__i] = arguments[G__35801__i + 0]; ++G__35801__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35801__a,0);
} 
return G__35800__delegate.call(this,args__33962__auto__);};
G__35800.cljs$lang$maxFixedArity = 0;
G__35800.cljs$lang$applyTo = (function (arglist__35802){
var args__33962__auto__ = cljs.core.seq(arglist__35802);
return G__35800__delegate(args__33962__auto__);
});
G__35800.cljs$core$IFn$_invoke$arity$variadic = G__35800__delegate;
return G__35800;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_current_level_STAR_35793_35798,_STAR_current_length_STAR_35794_35799))
})(),alis);

var length_count35795_35803 = (0);
var alis_35804__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35795_35803 < cljs.core._STAR_print_length_STAR_))){
if(alis_35804__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35796_35805 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35797_35806 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_35804__$1));

if(cljs.core.next(alis_35804__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_35804__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35797_35806;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35796_35805;
}}


if(cljs.core.next(cljs.core.rest(alis_35804__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35807 = (length_count35795_35803 + (1));
var G__35808 = cljs.core.next(cljs.core.rest(alis_35804__$1));
length_count35795_35803 = G__35807;
alis_35804__$1 = G__35808;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35794_35799;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35793_35798;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_35812 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_35812,args,nlis){
return (function (p1__35809_SHARP_,p2__35810_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__35809_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35810_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_35812,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__33960__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__33961__auto__ = ((typeof format_in__33960__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__33960__auto__) : cljs.pprint.cached_compile.call(null,format_in__33960__auto__)):format_in__33960__auto__);
return ((function (format_in__33960__auto__,cf__33961__auto__,_STAR_symbol_map_STAR_35812,args,nlis){
return (function() { 
var G__35813__delegate = function (args__33962__auto__){
var navigator__33963__auto__ = cljs.pprint.init_navigator(args__33962__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__33961__auto__,navigator__33963__auto__);
};
var G__35813 = function (var_args){
var args__33962__auto__ = null;
if (arguments.length > 0) {
var G__35814__i = 0, G__35814__a = new Array(arguments.length -  0);
while (G__35814__i < G__35814__a.length) {G__35814__a[G__35814__i] = arguments[G__35814__i + 0]; ++G__35814__i;}
  args__33962__auto__ = new cljs.core.IndexedSeq(G__35814__a,0);
} 
return G__35813__delegate.call(this,args__33962__auto__);};
G__35813.cljs$lang$maxFixedArity = 0;
G__35813.cljs$lang$applyTo = (function (arglist__35815){
var args__33962__auto__ = cljs.core.seq(arglist__35815);
return G__35813__delegate(args__33962__auto__);
});
G__35813.cljs$core$IFn$_invoke$arity$variadic = G__35813__delegate;
return G__35813;
})()
;
;})(format_in__33960__auto__,cf__33961__auto__,_STAR_symbol_map_STAR_35812,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_35812;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35819_35822 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35820_35823 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count35821_35824 = (0);
var alis_35825__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count35821_35824 < cljs.core._STAR_print_length_STAR_))){
if(alis_35825__$1){
cljs.pprint.write_out(cljs.core.first(alis_35825__$1));

if(cljs.core.next(alis_35825__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__35826 = (length_count35821_35824 + (1));
var G__35827 = cljs.core.next(alis_35825__$1);
length_count35821_35824 = G__35826;
alis_35825__$1 = G__35827;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35820_35823;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35819_35822;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function cljs$pprint$two_forms_$_iter__35834(s__35835){
return (new cljs.core.LazySeq(null,(function (){
var s__35835__$1 = s__35835;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35835__$1);
if(temp__6753__auto__){
var s__35835__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35835__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__35835__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__35837 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__35836 = (0);
while(true){
if((i__35836 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__35836);
cljs.core.chunk_append(b__35837,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__35840 = (i__35836 + (1));
i__35836 = G__35840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35837),cljs$pprint$two_forms_$_iter__35834(cljs.core.chunk_rest(s__35835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35837),null);
}
} else {
var x = cljs.core.first(s__35835__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__35834(cljs.core.rest(s__35835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__35841_SHARP_){
var vec__35845 = p1__35841_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35845,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35845,(1),null);
if(cljs.core.not((function (){var or__7502__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__35841_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__6751__auto__ = (function (){var G__35849 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__35849) : cljs.pprint._STAR_code_table_STAR_.call(null,G__35849));
})();
if(cljs.core.truth_(temp__6751__auto__)){
var special_form = temp__6751__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__6751__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__6751__auto__)){
var arg_num = temp__6751__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__8533__auto__ = (function (){var G__35850 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35850) : cljs.core.atom.call(null,G__35850));
})();
var prefer_table__8534__auto__ = (function (){var G__35851 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35851) : cljs.core.atom.call(null,G__35851));
})();
var method_cache__8535__auto__ = (function (){var G__35852 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35852) : cljs.core.atom.call(null,G__35852));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__35853 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35853) : cljs.core.atom.call(null,G__35853));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__7840__auto__ = (0);
var y__7841__auto__ = (width - cljs.core.count(s));
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args35857 = [];
var len__8723__auto___35883 = arguments.length;
var i__8724__auto___35884 = (0);
while(true){
if((i__8724__auto___35884 < len__8723__auto___35883)){
args35857.push((arguments[i__8724__auto___35884]));

var G__35885 = (i__8724__auto___35884 + (1));
i__8724__auto___35884 = G__35885;
continue;
} else {
}
break;
}

var G__35859 = args35857.length;
switch (G__35859) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35857.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_35860 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_35860){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_35860){
return (function (p1__35854_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__35854_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_35860))
,rows));
});})(_STAR_print_newline_STAR_35860))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_35860){
return (function (p1__35855_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__35855_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_35860))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_35860){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__8364__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_35860){
return (function cljs$pprint$iter__35861(s__35862){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_35860){
return (function (){
var s__35862__$1 = s__35862;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__35862__$1);
if(temp__6753__auto__){
var s__35862__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35862__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__35862__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__35864 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__35863 = (0);
while(true){
if((i__35863 < size__8363__auto__)){
var vec__35873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__35863);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35873,(1),null);
cljs.core.chunk_append(b__35864,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__35887 = (i__35863 + (1));
i__35863 = G__35887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35864),cljs$pprint$iter__35861(cljs.core.chunk_rest(s__35862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35864),null);
}
} else {
var vec__35876 = cljs.core.first(s__35862__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35876,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35876,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__35861(cljs.core.rest(s__35862__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_35860))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_35860))
;
return iter__8364__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__8364__auto__,widths,spacers,_STAR_print_newline_STAR_35860){
return (function (p1__35856_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__35856_SHARP_);
});})(iter__8364__auto__,widths,spacers,_STAR_print_newline_STAR_35860))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_35860))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__35879 = cljs.core.seq(rows);
var chunk__35880 = null;
var count__35881 = (0);
var i__35882 = (0);
while(true){
if((i__35882 < count__35881)){
var row = chunk__35880.cljs$core$IIndexed$_nth$arity$2(null,i__35882);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__35888 = seq__35879;
var G__35889 = chunk__35880;
var G__35890 = count__35881;
var G__35891 = (i__35882 + (1));
seq__35879 = G__35888;
chunk__35880 = G__35889;
count__35881 = G__35890;
i__35882 = G__35891;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__35879);
if(temp__6753__auto__){
var seq__35879__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35879__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__35879__$1);
var G__35892 = cljs.core.chunk_rest(seq__35879__$1);
var G__35893 = c__8413__auto__;
var G__35894 = cljs.core.count(c__8413__auto__);
var G__35895 = (0);
seq__35879 = G__35892;
chunk__35880 = G__35893;
count__35881 = G__35894;
i__35882 = G__35895;
continue;
} else {
var row = cljs.core.first(seq__35879__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__35896 = cljs.core.next(seq__35879__$1);
var G__35897 = null;
var G__35898 = (0);
var G__35899 = (0);
seq__35879 = G__35896;
chunk__35880 = G__35897;
count__35881 = G__35898;
i__35882 = G__35899;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35860;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


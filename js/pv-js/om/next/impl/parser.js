// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('om.util');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__32263){
var vec__32273 = p__32263;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32273,(1),null);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$union_DASH_entry,cljs.core.cst$kw$union_DASH_key,k,cljs.core.cst$kw$query,v,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$union,cljs.core.cst$kw$query,m,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__32294){
var vec__32306 = p__32294;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32306,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32306,(1),null);
var call = vec__32306;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__7502__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__7502__auto__ = args;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__32310 = ast;
if((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32310,cljs.core.cst$kw$type,cljs.core.cst$kw$call);
} else {
return G__32310;
}
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__32328 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32328,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ast,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$join,cljs.core.cst$kw$query,v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,v)))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid join, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_join], null))})()
)))], 0));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__32341){
var vec__32346 = p__32341;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32346,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32346,(1),null);
var ref = vec__32346;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid expression "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__32357 = expr;
if((expr instanceof cljs.core.Keyword)){
var x__8436__auto__ = G__32357;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
} else {
return G__32357;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args32365 = [];
var len__8723__auto___32403 = arguments.length;
var i__8724__auto___32404 = (0);
while(true){
if((i__8724__auto___32404 < len__8723__auto___32403)){
args32365.push((arguments[i__8724__auto___32404]));

var G__32405 = (i__8724__auto___32404 + (1));
i__8724__auto___32404 = G__32405;
continue;
} else {
}
break;
}

var G__32370 = args32365.length;
switch (G__32370) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32365.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__32371,unparse_QMARK_){
var map__32372 = p__32371;
var map__32372__$1 = ((((!((map__32372 == null)))?((((map__32372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32372):map__32372);
var ast = map__32372__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32372__$1,cljs.core.cst$kw$component);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,type)){
var G__32378 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__32372,map__32372__$1,ast,type,component){
return (function (p1__32361_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__32361_SHARP_,unparse_QMARK_);
});})(map__32372,map__32372__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.with_meta(G__32378,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__32378;
}
} else {
var map__32382 = ast;
var map__32382__$1 = ((((!((map__32382 == null)))?((((map__32382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32382):map__32382);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32382__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32382__$1,cljs.core.cst$kw$query);
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32382__$1,cljs.core.cst$kw$query_DASH_root);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32382__$1,cljs.core.cst$kw$params);
return om.next.impl.parser.wrap_expr(query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_(params))){
var x__8436__auto__ = expr;
return cljs.core._conj((function (){var x__8436__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
} else {
var x__8436__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type))?(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__32389 = ast;
var map__32389__$1 = ((((!((map__32389 == null)))?((((map__32389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32389):map__32389);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32389__$1,cljs.core.cst$kw$children);
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__32393 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(component)){
return cljs.core.with_meta(G__32393,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__32393;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component){
return (function (p__32394){
var map__32395 = p__32394;
var map__32395__$1 = ((((!((map__32395 == null)))?((((map__32395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32395):map__32395);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,cljs.core.cst$kw$union_DASH_key);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,cljs.core.cst$kw$children);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32395__$1,cljs.core.cst$kw$component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__32399 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__32395,map__32395__$1,union_key,children__$1,component__$1,map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component){
return (function (p1__32363_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__32363_SHARP_,unparse_QMARK_);
});})(map__32395,map__32395__$1,union_key,children__$1,component__$1,map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.with_meta(G__32399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component__$1], null));
} else {
return G__32399;
}
})()], null);
});})(map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,(function (){var G__32400 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component){
return (function (p1__32364_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__32364_SHARP_,unparse_QMARK_);
});})(map__32389,map__32389__$1,children,map__32382,map__32382__$1,key,query,query_root,params,map__32372,map__32372__$1,ast,type,component))
),children);
if(!((component == null))){
return cljs.core.with_meta(G__32400,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__32400;
}
})()]);
}
})():cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args32450 = [];
var len__8723__auto___32487 = arguments.length;
var i__8724__auto___32488 = (0);
while(true){
if((i__8724__auto___32488 < len__8723__auto___32487)){
args32450.push((arguments[i__8724__auto___32488]));

var G__32489 = (i__8724__auto___32488 + (1));
i__8724__auto___32488 = G__32489;
continue;
} else {
}
break;
}

var G__32456 = args32450.length;
switch (G__32456) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32450.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
if((query == null)){
var G__32460 = data;
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__32460,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__32460;
}
} else {
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,v){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),query,union_expr);
})),data),cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
if(cljs.core.vector_QMARK_(query)){
var joins = cljs.core.seq(query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first(joins);
if(cljs.core.not((function (){var or__7502__auto__ = om.util.join_QMARK_(join);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (om.util.ident_QMARK_(join)) || ((cljs.core.seq_QMARK_(join)) && (om.util.ident_QMARK_(cljs.core.first(join))));
}
})())){
var G__32492 = cljs.core.next(joins);
var G__32493 = ret;
joins = G__32492;
ret = G__32493;
continue;
} else {
var join__$1 = (function (){var G__32476 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__32476);
} else {
return G__32476;
}
})();
var join__$2 = (function (){var G__32477 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__32477],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__32477;
}
})();
var vec__32473 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(1),null);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_(sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__32478 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__32478);
} else {
return G__32478;
}
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,key__$1);
var G__32494 = cljs.core.next(joins);
var G__32495 = (function (){var G__32480 = ret;
if((cljs.core.map_QMARK_(ret)) && (cljs.core.contains_QMARK_(ret,key__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32480,key__$1,om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1),sel__$1,union_entry));
} else {
return G__32480;
}
})();
joins = G__32494;
ret = G__32495;
continue;
}
} else {
var G__32481 = ret;
if(((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$)))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__32481,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__32481;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(data)){
var dispatch_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals(query);
var props = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dispatch_key,cljs.core.keys(data));
var query__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_key,branches,props){
return (function (ret,q){
var query_props = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(dispatch_key),q);
var props__$1 = cljs.core.set(props);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(props__$1),cljs.core.set(query_props))){
return cljs.core.reduced(q);
} else {
if(cljs.core.truth_(clojure.set.subset_QMARK_(props__$1,query_props))){
return q;
} else {
return ret;

}
}
});})(dispatch_key,branches,props))
,null,branches);
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;

om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__32502){
var map__32805 = p__32502;
var map__32805__$1 = ((((!((map__32805 == null)))?((((map__32805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32805):map__32805);
var config = map__32805__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,cljs.core.cst$kw$mutate);
return ((function (map__32805,map__32805__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__7502__auto__ = cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__32939 = (function (){var G__32942 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32942,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__32942;
}
})();
var map__32939__$1 = ((((!((map__32939 == null)))?((((map__32939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32939):map__32939);
var env__$1 = map__32939__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32939__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__32939,map__32939__$1,env__$1,path,map__32805,map__32805__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__33109 = om.next.impl.parser.expr__GT_ast(expr);
var map__33109__$1 = ((((!((map__33109 == null)))?((((map__33109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33109):map__33109);
var ast = map__33109__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33109__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var G__33114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ast,ast,cljs.core.cst$kw$query,query_SINGLEQUOTE_], null)], 0));
var G__33114__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33114,cljs.core.cst$kw$query):G__33114);
var G__33114__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33114__$1,cljs.core.cst$kw$query,query):G__33114__$1);
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33114__$2,cljs.core.cst$kw$query_DASH_root,key);
} else {
return G__33114__$2;
}
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (function (){var G__33115 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33115) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse mutation attempted but no :mutate function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("mutate")].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parse read attempted but no :read function supplied"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("read")].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__33118 = ret;
var G__33118__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__33118,expr):G__33118);
if(cljs.core.map_QMARK_(ast_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__33118__$1,om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_));
} else {
return G__33118__$1;
}
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var mut_ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{var G__33121_33190 = mut_ret;
var G__33122_33191 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33121_33190,G__33122_33191) : cljs.core.reset_BANG_.call(null,G__33121_33190,G__33122_33191));
}catch (e33119){var e_33194 = e33119;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_33194))){
throw e_33194;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_33194) : cljs.core.reset_BANG_.call(null,error,e_33194));
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? value) (map? value))")].join('')));
}
} else {
}

var G__33125 = ret;
var G__33125__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33125,key,value):G__33125);
var G__33125__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret)))?cljs.core.assoc_in(G__33125__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$result], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret))):G__33125__$1);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33125__$2,key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$om$next_SLASH_error,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error))], null));
} else {
return G__33125__$2;
}
}
}
});})(elide_paths_QMARK_,map__32939,map__32939__$1,env__$1,path,map__32805,map__32805__$1,config,read,mutate))
;
var G__33156 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(((target == null)) && (cljs.core.not(elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3(G__33156,path,query);
} else {
return G__33156;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__32805,map__32805__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

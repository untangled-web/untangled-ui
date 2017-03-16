// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.layout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.dom');
/**
 * Generate a layout row. This is a div container for a row in a 12-wide grid responsive layout.
 *   Rows should contain layout columns generated with the `col` function of this namespace.
 * 
 *   The properties are normal DOM attributes as a cljs map and can include standard React DOM properties.
 * 
 *   `:distribute-extra-columns` can be :between or :around, and indicates where to put unused columns.
 *    - :between Unused column space is even distributed between columns
 *        2COL _____ 2COL _____ 2COL
 *    - :around Unused column space is even distributed around columns
 *        __ 2COL __ 2COL __ 2COL __
 * 
 *   `:halign` can be :start, :center, or :end for positioning a single child column in that position
 *   `:valign` can be :top, :middle, or :bottom and will affect the vertical positioning of nested cells that do not
 *   share a common height.
 *   
 */
untangled.ui.layout.row = (function untangled$ui$layout$row(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47009 = arguments.length;
var i__8724__auto___47010 = (0);
while(true){
if((i__8724__auto___47010 < len__8723__auto___47009)){
args__8730__auto__.push((arguments[i__8724__auto___47010]));

var G__47014 = (i__8724__auto___47010 + (1));
i__8724__auto___47010 = G__47014;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic = (function (p__46966,children){
var map__46967 = p__46966;
var map__46967__$1 = ((((!((map__46967 == null)))?((((map__46967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46967):map__46967);
var props = map__46967__$1;
var distribute_extra_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,cljs.core.cst$kw$distribute_DASH_extra_DASH_columns);
var halign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,cljs.core.cst$kw$halign);
var valign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,cljs.core.cst$kw$valign);
var density = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,cljs.core.cst$kw$density);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,cljs.core.cst$kw$between,null,cljs.core.cst$kw$around,null], null), null),distribute_extra_columns)){
} else {
throw (new Error("Assert failed: (contains? #{nil :between :around} distribute-extra-columns)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$center,null,cljs.core.cst$kw$end,null], null), null),halign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :start :center :end} halign)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$bottom,null,cljs.core.cst$kw$top,null,cljs.core.cst$kw$middle,null], null), null),valign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :bottom :top :middle} valign)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$break,null,cljs.core.cst$kw$collapse,null,cljs.core.cst$kw$wide,null], null), null),density)){
} else {
throw (new Error("Assert failed: (contains? #{nil :break :collapse :wide} density)"));
}

var className = (function (){var or__7502__auto__ = cljs.core.cst$kw$className.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})();
var classes = (function (){var G__47001 = className;
var G__47001__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47001),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-row")].join('')
;
var G__47001__$2 = (cljs.core.truth_(distribute_extra_columns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47001__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(distribute_extra_columns))].join(''):G__47001__$1);
var G__47001__$3 = (cljs.core.truth_(halign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47001__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(halign))].join(''):G__47001__$2);
var G__47001__$4 = (cljs.core.truth_(valign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47001__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(valign))].join(''):G__47001__$3);
if(cljs.core.truth_(density)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47001__$4),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-row--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(density))].join('');
} else {
return G__47001__$4;
}
})();
var attrs = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$distribute_DASH_extra_DASH_columns,cljs.core.array_seq([cljs.core.cst$kw$halign,cljs.core.cst$kw$valign,cljs.core.cst$kw$density], 0)),cljs.core.cst$kw$className,classes));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,attrs,children);
});

untangled.ui.layout.row.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.row.cljs$lang$applyTo = (function (seq46942){
var G__46943 = cljs.core.first(seq46942);
var seq46942__$1 = cljs.core.next(seq46942);
return untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(G__46943,seq46942__$1);
});

/**
 * Output a div that represents a column in the 12-column responsive grid.
 * 
 *   NOTE: halign works on anything, valign on on rows
 * 
 *   
 */
untangled.ui.layout.col = (function untangled$ui$layout$col(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47099 = arguments.length;
var i__8724__auto___47102 = (0);
while(true){
if((i__8724__auto___47102 < len__8723__auto___47099)){
args__8730__auto__.push((arguments[i__8724__auto___47102]));

var G__47107 = (i__8724__auto___47102 + (1));
i__8724__auto___47102 = G__47107;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic = (function (p__47076,children){
var map__47077 = p__47076;
var map__47077__$1 = ((((!((map__47077 == null)))?((((map__47077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47077):map__47077);
var props = map__47077__$1;
var md_push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$md_DASH_push);
var sm_push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$sm_DASH_push);
var halign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$halign);
var xl_push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$xl_DASH_push);
var sm_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$sm_DASH_width);
var push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$push);
var lg_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$lg_DASH_width);
var valign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$valign);
var lg_push = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$lg_DASH_push);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$width);
var md_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$md_DASH_width);
var xl_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47077__$1,cljs.core.cst$kw$xl_DASH_width);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$center,null,cljs.core.cst$kw$end,null], null), null),halign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :start :center :end} halign)"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.cst$kw$bottom,null,cljs.core.cst$kw$top,null,cljs.core.cst$kw$middle,null], null), null),valign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :bottom :top :middle} valign)"));
}

var classes = (function (){var G__47093 = cljs.core.cst$kw$className.cljs$core$IFn$_invoke$arity$1(props);
var G__47093__$1 = (cljs.core.truth_(width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''):G__47093);
var G__47093__$2 = (cljs.core.truth_(halign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(halign))].join(''):G__47093__$1);
var G__47093__$3 = (cljs.core.truth_(valign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(valign))].join(''):G__47093__$2);
var G__47093__$4 = (cljs.core.truth_(sm_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@sm")].join(''):G__47093__$3);
var G__47093__$5 = (cljs.core.truth_(md_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$4),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@md")].join(''):G__47093__$4);
var G__47093__$6 = (cljs.core.truth_(lg_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$5),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lg_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@lg")].join(''):G__47093__$5);
var G__47093__$7 = (cljs.core.truth_(xl_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xl_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@xl")].join(''):G__47093__$6);
var G__47093__$8 = (cljs.core.truth_(push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$7),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(push)].join(''):G__47093__$7);
var G__47093__$9 = (cljs.core.truth_(sm_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@sm")].join(''):G__47093__$8);
var G__47093__$10 = (cljs.core.truth_(md_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$9),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@md")].join(''):G__47093__$9);
var G__47093__$11 = (cljs.core.truth_(lg_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$10),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lg_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@lg")].join(''):G__47093__$10);
if(cljs.core.truth_(xl_push)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47093__$11),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xl_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@xl")].join('');
} else {
return G__47093__$11;
}
})();
var attrs = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$width,cljs.core.array_seq([cljs.core.cst$kw$halign,cljs.core.cst$kw$valign,cljs.core.cst$kw$sm_DASH_width,cljs.core.cst$kw$md_DASH_width,cljs.core.cst$kw$lg_DASH_width,cljs.core.cst$kw$xl_DASH_width,cljs.core.cst$kw$push,cljs.core.cst$kw$sm_DASH_push,cljs.core.cst$kw$md_DASH_push,cljs.core.cst$kw$lg_DASH_push,cljs.core.cst$kw$xl_DASH_push], 0)),cljs.core.cst$kw$className,classes));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,attrs,children);
});

untangled.ui.layout.col.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.col.cljs$lang$applyTo = (function (seq47064){
var G__47065 = cljs.core.first(seq47064);
var seq47064__$1 = cljs.core.next(seq47064);
return untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(G__47065,seq47064__$1);
});

untangled.ui.layout.legal_scales = (function untangled$ui$layout$legal_scales(v){

return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [null,null,cljs.core.cst$kw$quarter,null,cljs.core.cst$kw$one,null,cljs.core.cst$kw$sixth,null,cljs.core.cst$kw$eigth,null,cljs.core.cst$kw$double,null,cljs.core.cst$kw$fifth,null,cljs.core.cst$kw$tenth,null,cljs.core.cst$kw$half,null,cljs.core.cst$kw$triple,null,cljs.core.cst$kw$third,null], null), null),v);
});
/**
 * Wraps children in a div that adds a margin above an element that has the global line height (or some portion or
 *   multiple thereof). This library vertical rhythm (components use a global line height as a basis for sizing).
 *   Thus, moving something so that it vertically aligns often involves fractions/multiples of that height.
 * 
 *   `:before` and/or `:after` can be supplied with the following values that are scales of the global line height.
 *   See CSS [ideas around vertical rhythm](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/):
 * 
 *   ```
 *   :one     The base unit (global line height)
 *   :double  Twice base unit
 *   :triple  3x base unit
 *   :half    1/2 the base unit
 *   :third   1/3 the base unit
 *   :quarter 1/4 the base unit
 *   :fifth   1/5 the base unit
 *   :sixth   1/6 the base unit
 *   :eigth   1/8 the base unit
 *   :tenth   1/10 the base unit
 *   ```
 *   
 */
untangled.ui.layout.ui_vertical_margin = (function untangled$ui$layout$ui_vertical_margin(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47346 = arguments.length;
var i__8724__auto___47348 = (0);
while(true){
if((i__8724__auto___47348 < len__8723__auto___47346)){
args__8730__auto__.push((arguments[i__8724__auto___47348]));

var G__47354 = (i__8724__auto___47348 + (1));
i__8724__auto___47348 = G__47354;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic = (function (p__47318,children){
var map__47319 = p__47318;
var map__47319__$1 = ((((!((map__47319 == null)))?((((map__47319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47319):map__47319);
var props = map__47319__$1;
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,cljs.core.cst$kw$before);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47319__$1,cljs.core.cst$kw$after);
if(cljs.core.truth_(untangled.ui.layout.legal_scales(before))){
} else {
throw (new Error("Assert failed: (legal-scales before)"));
}

if(cljs.core.truth_(untangled.ui.layout.legal_scales(after))){
} else {
throw (new Error("Assert failed: (legal-scales after)"));
}

var add_scaled_class = ((function (map__47319,map__47319__$1,props,before,after){
return (function (classes,base,scale){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$one,scale))?base:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(scale))].join('')))].join('');
});})(map__47319,map__47319__$1,props,before,after))
;
var attrs = (function (){var G__47321 = props;
var G__47321__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47321,cljs.core.cst$kw$before,cljs.core.array_seq([cljs.core.cst$kw$after], 0))
;
var G__47321__$2 = (cljs.core.truth_(before)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__47321__$1,cljs.core.cst$kw$className,add_scaled_class," u-leader",before):G__47321__$1);
if(cljs.core.truth_(after)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__47321__$2,cljs.core.cst$kw$className,add_scaled_class," u-trailer",after);
} else {
return G__47321__$2;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,cljs.core.clj__GT_js(attrs),children);
});

untangled.ui.layout.ui_vertical_margin.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.ui_vertical_margin.cljs$lang$applyTo = (function (seq47316){
var G__47317 = cljs.core.first(seq47316);
var seq47316__$1 = cljs.core.next(seq47316);
return untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic(G__47317,seq47316__$1);
});

/**
 * A map from responsive keywords to a string of the CSS class combo that will produce that visibility when the viewport has that size.
 * 
 *   ```
 *   :small  - Show only on screens with width 0-48em (non-inclusive)
 *   :medium  - Show only on screens with width 48-62em
 *   :large  - Show only on screens with width 62-75em
 *   :extra-large  - Show only on screens with width 75-90em (NOTE this will hide on screens larger than 90em wide!)
 *   :small+  - Show only on screens with width (all sizes...here for completeness, never used since it is the default)
 *   :medium+  - Show only on screens with width 48em+
 *   :large+  - Show only on screens with width 62em+
 *   :extra-large+  - Show only on screens with width 75em+
 *   :medium-  - Show only on screens with width 0-60em
 *   :large-  - Show only on screens with width 0-75em
 *   :extra-large-  - Show only on screens with width 0-90em
 *   ```
 * 
 *   Can be used like this:
 * 
 *   ```
 *   (dom/div #js {:className (l/when-class :large+)} children)
 *   ```
 * 
 *   See also `rwhen` for a more readable alternative.
 *   
 */
untangled.ui.layout.when_class = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$large,cljs.core.cst$kw$xlarge,cljs.core.cst$kw$xlarge_PLUS_,cljs.core.cst$kw$medium,cljs.core.cst$kw$small,cljs.core.cst$kw$large_PLUS_,cljs.core.cst$kw$medium_PLUS_,cljs.core.cst$kw$xlarge_DASH_,cljs.core.cst$kw$large_DASH_,cljs.core.cst$kw$medium_DASH_,cljs.core.cst$kw$small_PLUS_],["u-show@lg","u-show@xl","u-show@xl-up","u-show@md","u-show@sm","u-show@lg-up","u-show@md-up","u-show@sm u-show@md u-show@lg u-show@xl","u-show@sm u-show@md u-show@md","u-show@sm u-show@md",""]);
untangled.ui.layout.when_classes = cljs.core.set(cljs.core.keys(untangled.ui.layout.when_class));
/**
 * Wraps the given children with a span that will show/hide the children via responsive CSS classes.
 * 
 *   ```
 *   (l/rwhen :large+
 *   children)
 *   ```
 * 
 *   The allowed sizes are:
 * 
 *   ```
 *   :small  - Show only on screens with width 0-48em (non-inclusive)
 *   :medium  - Show only on screens with width 48-62em
 *   :large  - Show only on screens with width 62-75em
 *   :xlarge  - Show only on screens with width 75-90em (NOTE this will hide on screens larger than 90em wide!)
 *   :small+  - Show only on screens with width (all sizes...here for completeness, never used since it is the default)
 *   :medium+  - Show only on screens with width 48em+
 *   :large+  - Show only on screens with width 62em+
 *   :xlarge+  - Show only on screens with width 75em+
 *   :medium-  - Show only on screens with width 0-60em
 *   :large-  - Show only on screens with width 0-75em
 *   :xlarge-  - Show only on screens with width 0-90em
 *   ```
 *   
 */
untangled.ui.layout.rwhen = (function untangled$ui$layout$rwhen(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47378 = arguments.length;
var i__8724__auto___47380 = (0);
while(true){
if((i__8724__auto___47380 < len__8723__auto___47378)){
args__8730__auto__.push((arguments[i__8724__auto___47380]));

var G__47383 = (i__8724__auto___47380 + (1));
i__8724__auto___47380 = G__47383;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic = (function (size,children){
if(cljs.core.contains_QMARK_(untangled.ui.layout.when_classes,size)){
} else {
throw (new Error("Assert failed: (contains? when-classes size)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,({"className": (untangled.ui.layout.when_class.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.layout.when_class.cljs$core$IFn$_invoke$arity$1(size) : untangled.ui.layout.when_class.call(null,size))}),children);
});

untangled.ui.layout.rwhen.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.rwhen.cljs$lang$applyTo = (function (seq47369){
var G__47370 = cljs.core.first(seq47369);
var seq47369__$1 = cljs.core.next(seq47369);
return untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(G__47370,seq47369__$1);
});

/**
 * The CSS class string u-start for horizontal left alignment. Usable on most layout containers.
 */
untangled.ui.layout.css_align_start = "u-start";
/**
 * The CSS class string u-center for horizontal center alignment. Usable on most layout containers.
 */
untangled.ui.layout.css_align_center = "u-center";
/**
 * The CSS class string u-end for horizontal right alignment. Usable on most layout containers.
 */
untangled.ui.layout.css_align_end = "u-end";

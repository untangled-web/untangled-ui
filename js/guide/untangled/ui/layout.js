// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.layout');
goog.require('cljs.core');
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
var args__28878__auto__ = [];
var len__28871__auto___702303 = arguments.length;
var i__28872__auto___702304 = (0);
while(true){
if((i__28872__auto___702304 < len__28871__auto___702303)){
args__28878__auto__.push((arguments[i__28872__auto___702304]));

var G__702305 = (i__28872__auto___702304 + (1));
i__28872__auto___702304 = G__702305;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic = (function (p__702299,children){
var map__702300 = p__702299;
var map__702300__$1 = ((((!((map__702300 == null)))?((((map__702300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702300):map__702300);
var props = map__702300__$1;
var distribute_extra_columns = cljs.core.get.call(null,map__702300__$1,new cljs.core.Keyword(null,"distribute-extra-columns","distribute-extra-columns",-2101013909));
var halign = cljs.core.get.call(null,map__702300__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__702300__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var density = cljs.core.get.call(null,map__702300__$1,new cljs.core.Keyword(null,"density","density",-1664155941));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"between","between",1131099276),null,new cljs.core.Keyword(null,"around","around",-265975553),null], null), null),distribute_extra_columns)){
} else {
throw (new Error("Assert failed: (contains? #{nil :between :around} distribute-extra-columns)"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),halign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :start :center :end} halign)"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"middle","middle",-701029031),null], null), null),valign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :bottom :top :middle} valign)"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"break","break",126570225),null,new cljs.core.Keyword(null,"collapse","collapse",-1218136136),null,new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null),density)){
} else {
throw (new Error("Assert failed: (contains? #{nil :break :collapse :wide} density)"));
}

var className = (function (){var or__27650__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})();
var classes = (function (){var G__702302 = className;
var G__702302__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702302),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-row")].join('')
;
var G__702302__$2 = (cljs.core.truth_(distribute_extra_columns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702302__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,distribute_extra_columns))].join(''):G__702302__$1);
var G__702302__$3 = (cljs.core.truth_(halign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702302__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,halign))].join(''):G__702302__$2);
var G__702302__$4 = (cljs.core.truth_(valign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702302__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,valign))].join(''):G__702302__$3);
if(cljs.core.truth_(density)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702302__$4),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-row--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,density))].join('');
} else {
return G__702302__$4;
}
})();
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"distribute-extra-columns","distribute-extra-columns",-2101013909),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"density","density",-1664155941)),new cljs.core.Keyword(null,"className","className",-1983287057),classes));
return cljs.core.apply.call(null,om.dom.div,attrs,children);
});

untangled.ui.layout.row.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.row.cljs$lang$applyTo = (function (seq702297){
var G__702298 = cljs.core.first.call(null,seq702297);
var seq702297__$1 = cljs.core.next.call(null,seq702297);
return untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(G__702298,seq702297__$1);
});

/**
 * Output a div that represents a column in the 12-column responsive grid.
 * 
 *   NOTE: halign works on anything, valign on on rows
 * 
 *   
 */
untangled.ui.layout.col = (function untangled$ui$layout$col(var_args){
var args__28878__auto__ = [];
var len__28871__auto___702314 = arguments.length;
var i__28872__auto___702315 = (0);
while(true){
if((i__28872__auto___702315 < len__28871__auto___702314)){
args__28878__auto__.push((arguments[i__28872__auto___702315]));

var G__702316 = (i__28872__auto___702315 + (1));
i__28872__auto___702315 = G__702316;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic = (function (p__702310,children){
var map__702311 = p__702310;
var map__702311__$1 = ((((!((map__702311 == null)))?((((map__702311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702311):map__702311);
var props = map__702311__$1;
var md_push = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"md-push","md-push",288470810));
var sm_push = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573));
var halign = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var xl_push = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"xl-push","xl-push",-1108453728));
var sm_width = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"sm-width","sm-width",280805410));
var push = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"push","push",799791267));
var lg_width = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"lg-width","lg-width",420811558));
var valign = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var lg_push = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"lg-push","lg-push",606284103));
var width = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var md_width = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"md-width","md-width",-1317567860));
var xl_width = cljs.core.get.call(null,map__702311__$1,new cljs.core.Keyword(null,"xl-width","xl-width",401581997));
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),halign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :start :center :end} halign)"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"middle","middle",-701029031),null], null), null),valign)){
} else {
throw (new Error("Assert failed: (contains? #{nil :bottom :top :middle} valign)"));
}

var classes = (function (){var G__702313 = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
var G__702313__$1 = (cljs.core.truth_(width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''):G__702313);
var G__702313__$2 = (cljs.core.truth_(halign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,halign))].join(''):G__702313__$1);
var G__702313__$3 = (cljs.core.truth_(valign)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,valign))].join(''):G__702313__$2);
var G__702313__$4 = (cljs.core.truth_(sm_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@sm")].join(''):G__702313__$3);
var G__702313__$5 = (cljs.core.truth_(md_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$4),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@md")].join(''):G__702313__$4);
var G__702313__$6 = (cljs.core.truth_(lg_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$5),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lg_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@lg")].join(''):G__702313__$5);
var G__702313__$7 = (cljs.core.truth_(xl_width)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-column--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xl_width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@xl")].join(''):G__702313__$6);
var G__702313__$8 = (cljs.core.truth_(push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$7),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(push)].join(''):G__702313__$7);
var G__702313__$9 = (cljs.core.truth_(sm_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$8),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sm_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@sm")].join(''):G__702313__$8);
var G__702313__$10 = (cljs.core.truth_(md_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$9),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@md")].join(''):G__702313__$9);
var G__702313__$11 = (cljs.core.truth_(lg_push)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$10),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lg_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@lg")].join(''):G__702313__$10);
if(cljs.core.truth_(xl_push)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__702313__$11),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-push--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xl_push),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@xl")].join('');
} else {
return G__702313__$11;
}
})();
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"sm-width","sm-width",280805410),new cljs.core.Keyword(null,"md-width","md-width",-1317567860),new cljs.core.Keyword(null,"lg-width","lg-width",420811558),new cljs.core.Keyword(null,"xl-width","xl-width",401581997),new cljs.core.Keyword(null,"push","push",799791267),new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),new cljs.core.Keyword(null,"md-push","md-push",288470810),new cljs.core.Keyword(null,"lg-push","lg-push",606284103),new cljs.core.Keyword(null,"xl-push","xl-push",-1108453728)),new cljs.core.Keyword(null,"className","className",-1983287057),classes));
return cljs.core.apply.call(null,om.dom.div,attrs,children);
});

untangled.ui.layout.col.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.col.cljs$lang$applyTo = (function (seq702308){
var G__702309 = cljs.core.first.call(null,seq702308);
var seq702308__$1 = cljs.core.next.call(null,seq702308);
return untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(G__702309,seq702308__$1);
});

untangled.ui.layout.legal_scales = (function untangled$ui$layout$legal_scales(v){

return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [null,null,new cljs.core.Keyword(null,"quarter","quarter",-508147616),null,new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"sixth","sixth",800529730),null,new cljs.core.Keyword(null,"eigth","eigth",614284002),null,new cljs.core.Keyword(null,"double","double",884886883),null,new cljs.core.Keyword(null,"fifth","fifth",-575554395),null,new cljs.core.Keyword(null,"tenth","tenth",-481375954),null,new cljs.core.Keyword(null,"half","half",741990005),null,new cljs.core.Keyword(null,"triple","triple",672002454),null,new cljs.core.Keyword(null,"third","third",1602878105),null], null), null),v);
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
var args__28878__auto__ = [];
var len__28871__auto___702346 = arguments.length;
var i__28872__auto___702347 = (0);
while(true){
if((i__28872__auto___702347 < len__28871__auto___702346)){
args__28878__auto__.push((arguments[i__28872__auto___702347]));

var G__702353 = (i__28872__auto___702347 + (1));
i__28872__auto___702347 = G__702353;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic = (function (p__702335,children){
var map__702336 = p__702335;
var map__702336__$1 = ((((!((map__702336 == null)))?((((map__702336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702336):map__702336);
var props = map__702336__$1;
var before = cljs.core.get.call(null,map__702336__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__702336__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(cljs.core.truth_(untangled.ui.layout.legal_scales.call(null,before))){
} else {
throw (new Error("Assert failed: (legal-scales before)"));
}

if(cljs.core.truth_(untangled.ui.layout.legal_scales.call(null,after))){
} else {
throw (new Error("Assert failed: (legal-scales after)"));
}

var add_scaled_class = ((function (map__702336,map__702336__$1,props,before,after){
return (function (classes,base,scale){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"one","one",935007904),scale))?base:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,scale))].join('')))].join('');
});})(map__702336,map__702336__$1,props,before,after))
;
var attrs = (function (){var G__702338 = props;
var G__702338__$1 = cljs.core.dissoc.call(null,G__702338,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"after","after",594996914))
;
var G__702338__$2 = (cljs.core.truth_(before)?cljs.core.update.call(null,G__702338__$1,new cljs.core.Keyword(null,"className","className",-1983287057),add_scaled_class," u-leader",before):G__702338__$1);
if(cljs.core.truth_(after)){
return cljs.core.update.call(null,G__702338__$2,new cljs.core.Keyword(null,"className","className",-1983287057),add_scaled_class," u-trailer",after);
} else {
return G__702338__$2;
}
})();
return cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,attrs),children);
});

untangled.ui.layout.ui_vertical_margin.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.ui_vertical_margin.cljs$lang$applyTo = (function (seq702333){
var G__702334 = cljs.core.first.call(null,seq702333);
var seq702333__$1 = cljs.core.next.call(null,seq702333);
return untangled.ui.layout.ui_vertical_margin.cljs$core$IFn$_invoke$arity$variadic(G__702334,seq702333__$1);
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
untangled.ui.layout.when_class = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),new cljs.core.Keyword(null,"xlarge+","xlarge+",-472611452),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large+","large+",1572722677),new cljs.core.Keyword(null,"medium+","medium+",-1887936266),new cljs.core.Keyword(null,"xlarge-","xlarge-",1917962360),new cljs.core.Keyword(null,"large-","large-",-87858343),new cljs.core.Keyword(null,"medium-","medium-",208093466),new cljs.core.Keyword(null,"small+","small+",627424606)],["u-show@lg","u-show@xl","u-show@xl-up","u-show@md","u-show@sm","u-show@lg-up","u-show@md-up","u-show@sm u-show@md u-show@lg u-show@xl","u-show@sm u-show@md u-show@md","u-show@sm u-show@md",""]);
untangled.ui.layout.when_classes = cljs.core.set.call(null,cljs.core.keys.call(null,untangled.ui.layout.when_class));
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
var args__28878__auto__ = [];
var len__28871__auto___702392 = arguments.length;
var i__28872__auto___702393 = (0);
while(true){
if((i__28872__auto___702393 < len__28871__auto___702392)){
args__28878__auto__.push((arguments[i__28872__auto___702393]));

var G__702394 = (i__28872__auto___702393 + (1));
i__28872__auto___702393 = G__702394;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic = (function (size,children){
if(cljs.core.contains_QMARK_.call(null,untangled.ui.layout.when_classes,size)){
} else {
throw (new Error("Assert failed: (contains? when-classes size)"));
}

return cljs.core.apply.call(null,om.dom.span,({"className": untangled.ui.layout.when_class.call(null,size)}),children);
});

untangled.ui.layout.rwhen.cljs$lang$maxFixedArity = (1);

untangled.ui.layout.rwhen.cljs$lang$applyTo = (function (seq702389){
var G__702390 = cljs.core.first.call(null,seq702389);
var seq702389__$1 = cljs.core.next.call(null,seq702389);
return untangled.ui.layout.rwhen.cljs$core$IFn$_invoke$arity$variadic(G__702390,seq702389__$1);
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

//# sourceMappingURL=layout.js.map?rel=1489703351353
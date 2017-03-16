// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.element_visuals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.ui.menu');
goog.require('untangled.ui.elements');
goog.require('untangled.ui.layout');
goog.require('untangled.icons');
goog.require('clojure.string');
goog.require('untangled.i18n');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$avatar_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"avatar-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__50940(s__50941){
return (new cljs.core.LazySeq(null,(function (){
var s__50941__$1 = s__50941;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__50941__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__50941__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50940_$_iter__50942(s__50943){
return (new cljs.core.LazySeq(null,((function (s__50941__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50943__$1 = s__50943;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__50943__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var kind = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__50943__$1,s__50941__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50940_$_iter__50942_$_iter__50944(s__50945){
return (new cljs.core.LazySeq(null,((function (s__50943__$1,s__50941__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50945__$1 = s__50945;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__50945__$1);
if(temp__6753__auto____$2){
var s__50945__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__50945__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__50945__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__50947 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__50946 = (0);
while(true){
if((i__50946 < size__8363__auto__)){
var size = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__50946);
cljs.core.chunk_append(b__50947,om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')}),cljs.core.array_seq([untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$size,size], null),"AV"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$size,size], null),untangled.icons.icon(cljs.core.cst$kw$supervisor_account))], 0)));

var G__50966 = (i__50946 + (1));
i__50946 = G__50966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50947),untangled$ui$element_visuals$iter__50940_$_iter__50942_$_iter__50944(cljs.core.chunk_rest(s__50945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50947),null);
}
} else {
var size = cljs.core.first(s__50945__$2);
return cljs.core.cons(om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')}),cljs.core.array_seq([untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$size,size], null),"AV"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$size,size], null),untangled.icons.icon(cljs.core.cst$kw$supervisor_account))], 0)),untangled$ui$element_visuals$iter__50940_$_iter__50942_$_iter__50944(cljs.core.rest(s__50945__$2)));
}
} else {
return null;
}
break;
}
});})(s__50943__$1,s__50941__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50943__$1,s__50941__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$regular,cljs.core.cst$kw$medium,cljs.core.cst$kw$large,cljs.core.cst$kw$xlarge,cljs.core.cst$kw$huge], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50940_$_iter__50942(cljs.core.rest(s__50943__$1)));
} else {
var G__50967 = cljs.core.rest(s__50943__$1);
s__50943__$1 = G__50967;
continue;
}
} else {
return null;
}
break;
}
});})(s__50941__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50941__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$bordered], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50940(cljs.core.rest(s__50941__$1)));
} else {
var G__50968 = cljs.core.rest(s__50941__$1);
s__50941__$1 = G__50968;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$badges_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"badges-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["Notifications ",untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["8"], 0))], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Notifications ",untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["8"], 0))], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null),cljs.core.array_seq(["Notifications ",untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["5"], 0))], 0)),untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"hello"], null),cljs.core.array_seq(["7"], 0)),untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back)], 0)),untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back),untangled.icons.icon(cljs.core.cst$kw$arrow_forward)], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$buttons_DASH_visual_DASH_regression_DASH_testing], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"buttons-visual-regression-testing",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__50969(s__50970){
return (new cljs.core.LazySeq(null,(function (){
var s__50970__$1 = s__50970;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__50970__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var shape = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__50970__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50969_$_iter__50971(s__50972){
return (new cljs.core.LazySeq(null,((function (s__50970__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50972__$1 = s__50972;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__50972__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var color = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__50972__$1,s__50970__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973(s__50974){
return (new cljs.core.LazySeq(null,((function (s__50972__$1,s__50970__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50974__$1 = s__50974;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__50974__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var size = cljs.core.first(xs__7309__auto____$2);
var iterys__8360__auto__ = ((function (s__50974__$1,s__50972__$1,s__50970__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973_$_iter__50975(s__50976){
return (new cljs.core.LazySeq(null,((function (s__50974__$1,s__50972__$1,s__50970__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50976__$1 = s__50976;
while(true){
var temp__6753__auto____$3 = cljs.core.seq(s__50976__$1);
if(temp__6753__auto____$3){
var xs__7309__auto____$3 = temp__6753__auto____$3;
var disabled = cljs.core.first(xs__7309__auto____$3);
var iterys__8360__auto__ = ((function (s__50976__$1,s__50974__$1,s__50972__$1,s__50970__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973_$_iter__50975_$_iter__50977(s__50978){
return (new cljs.core.LazySeq(null,((function (s__50976__$1,s__50974__$1,s__50972__$1,s__50970__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__50978__$1 = s__50978;
while(true){
var temp__6753__auto____$4 = cljs.core.seq(s__50978__$1);
if(temp__6753__auto____$4){
var s__50978__$2 = temp__6753__auto____$4;
if(cljs.core.chunked_seq_QMARK_(s__50978__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__50978__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__50980 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__50979 = (0);
while(true){
if((i__50979 < size__8363__auto__)){
var active = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__50979);
cljs.core.chunk_append(b__50980,untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')], 0)));

var G__51028 = (i__50979 + (1));
i__50979 = G__51028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50980),untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973_$_iter__50975_$_iter__50977(cljs.core.chunk_rest(s__50978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50980),null);
}
} else {
var active = cljs.core.first(s__50978__$2);
return cljs.core.cons(untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')], 0)),untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973_$_iter__50975_$_iter__50977(cljs.core.rest(s__50978__$2)));
}
} else {
return null;
}
break;
}
});})(s__50976__$1,s__50974__$1,s__50972__$1,s__50970__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50976__$1,s__50974__$1,s__50972__$1,s__50970__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973_$_iter__50975(cljs.core.rest(s__50976__$1)));
} else {
var G__51029 = cljs.core.rest(s__50976__$1);
s__50976__$1 = G__51029;
continue;
}
} else {
return null;
}
break;
}
});})(s__50974__$1,s__50972__$1,s__50970__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50974__$1,s__50972__$1,s__50970__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50969_$_iter__50971_$_iter__50973(cljs.core.rest(s__50974__$1)));
} else {
var G__51030 = cljs.core.rest(s__50974__$1);
s__50974__$1 = G__51030;
continue;
}
} else {
return null;
}
break;
}
});})(s__50972__$1,s__50970__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50972__$1,s__50970__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$small], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50969_$_iter__50971(cljs.core.rest(s__50972__$1)));
} else {
var G__51031 = cljs.core.rest(s__50972__$1);
s__50972__$1 = G__51031;
continue;
}
} else {
return null;
}
break;
}
});})(s__50970__$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__50970__$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__50969(cljs.core.rest(s__50970__$1)));
} else {
var G__51032 = cljs.core.rest(s__50970__$1);
s__50970__$1 = G__51032;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.cst$kw$round,cljs.core.cst$kw$wide], null));
})(),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["Label",untangled.icons.icon(cljs.core.cst$kw$arrow_forward)], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back),"Label"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$flat_DASH_buttons_DASH_visual_DASH_regression_DASH_testing], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"flat-buttons-visual-regression-testing",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51033(s__51034){
return (new cljs.core.LazySeq(null,(function (){
var s__51034__$1 = s__51034;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51034__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var shape = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51034__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51033_$_iter__51035(s__51036){
return (new cljs.core.LazySeq(null,((function (s__51034__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51036__$1 = s__51036;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51036__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var color = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__51036__$1,s__51034__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037(s__51038){
return (new cljs.core.LazySeq(null,((function (s__51036__$1,s__51034__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51038__$1 = s__51038;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__51038__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var size = cljs.core.first(xs__7309__auto____$2);
var iterys__8360__auto__ = ((function (s__51038__$1,s__51036__$1,s__51034__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037_$_iter__51039(s__51040){
return (new cljs.core.LazySeq(null,((function (s__51038__$1,s__51036__$1,s__51034__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51040__$1 = s__51040;
while(true){
var temp__6753__auto____$3 = cljs.core.seq(s__51040__$1);
if(temp__6753__auto____$3){
var xs__7309__auto____$3 = temp__6753__auto____$3;
var disabled = cljs.core.first(xs__7309__auto____$3);
var iterys__8360__auto__ = ((function (s__51040__$1,s__51038__$1,s__51036__$1,s__51034__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037_$_iter__51039_$_iter__51041(s__51042){
return (new cljs.core.LazySeq(null,((function (s__51040__$1,s__51038__$1,s__51036__$1,s__51034__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51042__$1 = s__51042;
while(true){
var temp__6753__auto____$4 = cljs.core.seq(s__51042__$1);
if(temp__6753__auto____$4){
var s__51042__$2 = temp__6753__auto____$4;
if(cljs.core.chunked_seq_QMARK_(s__51042__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51042__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51044 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51043 = (0);
while(true){
if((i__51043 < size__8363__auto__)){
var active = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51043);
cljs.core.chunk_append(b__51044,untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-flat-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')], 0)));

var G__51092 = (i__51043 + (1));
i__51043 = G__51092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51044),untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037_$_iter__51039_$_iter__51041(cljs.core.chunk_rest(s__51042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51044),null);
}
} else {
var active = cljs.core.first(s__51042__$2);
return cljs.core.cons(untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-flat-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')], 0)),untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037_$_iter__51039_$_iter__51041(cljs.core.rest(s__51042__$2)));
}
} else {
return null;
}
break;
}
});})(s__51040__$1,s__51038__$1,s__51036__$1,s__51034__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51040__$1,s__51038__$1,s__51036__$1,s__51034__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037_$_iter__51039(cljs.core.rest(s__51040__$1)));
} else {
var G__51093 = cljs.core.rest(s__51040__$1);
s__51040__$1 = G__51093;
continue;
}
} else {
return null;
}
break;
}
});})(s__51038__$1,s__51036__$1,s__51034__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51038__$1,s__51036__$1,s__51034__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51033_$_iter__51035_$_iter__51037(cljs.core.rest(s__51038__$1)));
} else {
var G__51094 = cljs.core.rest(s__51038__$1);
s__51038__$1 = G__51094;
continue;
}
} else {
return null;
}
break;
}
});})(s__51036__$1,s__51034__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51036__$1,s__51034__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$small], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51033_$_iter__51035(cljs.core.rest(s__51036__$1)));
} else {
var G__51095 = cljs.core.rest(s__51036__$1);
s__51036__$1 = G__51095;
continue;
}
} else {
return null;
}
break;
}
});})(s__51034__$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51034__$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51033(cljs.core.rest(s__51034__$1)));
} else {
var G__51096 = cljs.core.rest(s__51034__$1);
s__51034__$1 = G__51096;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.cst$kw$round,cljs.core.cst$kw$wide], null));
})(),untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["Label",untangled.icons.icon(cljs.core.cst$kw$arrow_forward)], 0)),untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back),"Label"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$circular_DASH_buttons_DASH_visual_DASH_regression_DASH_testing], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"circular-buttons-visual-regression-testing",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51097(s__51098){
return (new cljs.core.LazySeq(null,(function (){
var s__51098__$1 = s__51098;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51098__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51098__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51097_$_iter__51099(s__51100){
return (new cljs.core.LazySeq(null,((function (s__51098__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51100__$1 = s__51100;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51100__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__51100__$1,s__51098__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51097_$_iter__51099_$_iter__51101(s__51102){
return (new cljs.core.LazySeq(null,((function (s__51100__$1,s__51098__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51102__$1 = s__51102;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__51102__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var disabled = cljs.core.first(xs__7309__auto____$2);
var iterys__8360__auto__ = ((function (s__51102__$1,s__51100__$1,s__51098__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51097_$_iter__51099_$_iter__51101_$_iter__51103(s__51104){
return (new cljs.core.LazySeq(null,((function (s__51102__$1,s__51100__$1,s__51098__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51104__$1 = s__51104;
while(true){
var temp__6753__auto____$3 = cljs.core.seq(s__51104__$1);
if(temp__6753__auto____$3){
var s__51104__$2 = temp__6753__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__51104__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51104__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51106 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51105 = (0);
while(true){
if((i__51105 < size__8363__auto__)){
var active = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51105);
cljs.core.chunk_append(b__51106,untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$title,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join(''),cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-circular-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$add)], 0)));

var G__51130 = (i__51105 + (1));
i__51105 = G__51130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51106),untangled$ui$element_visuals$iter__51097_$_iter__51099_$_iter__51101_$_iter__51103(cljs.core.chunk_rest(s__51104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51106),null);
}
} else {
var active = cljs.core.first(s__51104__$2);
return cljs.core.cons(untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"extra",cljs.core.cst$kw$color,color,cljs.core.cst$kw$active,active,cljs.core.cst$kw$disabled,disabled,cljs.core.cst$kw$title,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join(''),cljs.core.cst$kw$size,size,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-circular-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$add)], 0)),untangled$ui$element_visuals$iter__51097_$_iter__51099_$_iter__51101_$_iter__51103(cljs.core.rest(s__51104__$2)));
}
} else {
return null;
}
break;
}
});})(s__51102__$1,s__51100__$1,s__51098__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51102__$1,s__51100__$1,s__51098__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51097_$_iter__51099_$_iter__51101(cljs.core.rest(s__51102__$1)));
} else {
var G__51131 = cljs.core.rest(s__51102__$1);
s__51102__$1 = G__51131;
continue;
}
} else {
return null;
}
break;
}
});})(s__51100__$1,s__51098__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51100__$1,s__51098__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51097_$_iter__51099(cljs.core.rest(s__51100__$1)));
} else {
var G__51132 = cljs.core.rest(s__51100__$1);
s__51100__$1 = G__51132;
continue;
}
} else {
return null;
}
break;
}
});})(s__51098__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51098__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$small], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51097(cljs.core.rest(s__51098__$1)));
} else {
var G__51133 = cljs.core.rest(s__51098__$1);
s__51098__$1 = G__51133;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$card_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51134(s__51135){
return (new cljs.core.LazySeq(null,(function (){
var s__51135__$1 = s__51135;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51135__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51135__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51134_$_iter__51136(s__51137){
return (new cljs.core.LazySeq(null,((function (s__51135__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51137__$1 = s__51137;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51137__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__51137__$1,s__51135__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51134_$_iter__51136_$_iter__51138(s__51139){
return (new cljs.core.LazySeq(null,((function (s__51137__$1,s__51135__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51139__$1 = s__51139;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__51139__$1);
if(temp__6753__auto____$2){
var s__51139__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51139__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51139__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51141 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51140 = (0);
while(true){
if((i__51140 < size__8363__auto__)){
var actions = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51140);
cljs.core.chunk_append(b__51141,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$size,size,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)));

var G__51164 = (i__51140 + (1));
i__51140 = G__51164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51141),untangled$ui$element_visuals$iter__51134_$_iter__51136_$_iter__51138(cljs.core.chunk_rest(s__51139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51141),null);
}
} else {
var actions = cljs.core.first(s__51139__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$size,size,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51134_$_iter__51136_$_iter__51138(cljs.core.rest(s__51139__$2)));
}
} else {
return null;
}
break;
}
});})(s__51137__$1,s__51135__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51137__$1,s__51135__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Action"], 0))], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51134_$_iter__51136(cljs.core.rest(s__51137__$1)));
} else {
var G__51165 = cljs.core.rest(s__51137__$1);
s__51137__$1 = G__51165;
continue;
}
} else {
return null;
}
break;
}
});})(s__51135__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51135__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$expand,cljs.core.cst$kw$wide], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51134(cljs.core.rest(s__51135__$1)));
} else {
var G__51166 = cljs.core.rest(s__51135__$1);
s__51135__$1 = G__51166;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})(),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51153(s__51154){
return (new cljs.core.LazySeq(null,(function (){
var s__51154__$1 = s__51154;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51154__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51154__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51153_$_iter__51155(s__51156){
return (new cljs.core.LazySeq(null,((function (s__51154__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51156__$1 = s__51156;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51156__$1);
if(temp__6753__auto____$1){
var s__51156__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51156__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51156__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51158 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51157 = (0);
while(true){
if((i__51157 < size__8363__auto__)){
var image_position = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51157);
cljs.core.chunk_append(b__51158,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)));

var G__51167 = (i__51157 + (1));
i__51157 = G__51167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51158),untangled$ui$element_visuals$iter__51153_$_iter__51155(cljs.core.chunk_rest(s__51156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51158),null);
}
} else {
var image_position = cljs.core.first(s__51156__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51153_$_iter__51155(cljs.core.rest(s__51156__$2)));
}
} else {
return null;
}
break;
}
});})(s__51154__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51154__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$bottom_DASH_right], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51153(cljs.core.rest(s__51154__$1)));
} else {
var G__51168 = cljs.core.rest(s__51154__$1);
s__51154__$1 = G__51168;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})()], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(6)], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$media,"img/welcome_card.jpg",cljs.core.cst$kw$media_DASH_type,cljs.core.cst$kw$image], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Media Image")].join('')], 0))], 0))], 0))], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$card_DASH_bordered_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card-bordered-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51169(s__51170){
return (new cljs.core.LazySeq(null,(function (){
var s__51170__$1 = s__51170;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51170__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51170__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51169_$_iter__51171(s__51172){
return (new cljs.core.LazySeq(null,((function (s__51170__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51172__$1 = s__51172;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51172__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first(xs__7309__auto____$1);
var iterys__8360__auto__ = ((function (s__51172__$1,s__51170__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51169_$_iter__51171_$_iter__51173(s__51174){
return (new cljs.core.LazySeq(null,((function (s__51172__$1,s__51170__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51174__$1 = s__51174;
while(true){
var temp__6753__auto____$2 = cljs.core.seq(s__51174__$1);
if(temp__6753__auto____$2){
var s__51174__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51174__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51174__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51176 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51175 = (0);
while(true){
if((i__51175 < size__8363__auto__)){
var actions = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51175);
cljs.core.chunk_append(b__51176,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$size,size,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)));

var G__51199 = (i__51175 + (1));
i__51175 = G__51199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51176),untangled$ui$element_visuals$iter__51169_$_iter__51171_$_iter__51173(cljs.core.chunk_rest(s__51174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51176),null);
}
} else {
var actions = cljs.core.first(s__51174__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$size,size,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51169_$_iter__51171_$_iter__51173(cljs.core.rest(s__51174__$2)));
}
} else {
return null;
}
break;
}
});})(s__51172__$1,s__51170__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51172__$1,s__51170__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Action"], 0))], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51169_$_iter__51171(cljs.core.rest(s__51172__$1)));
} else {
var G__51200 = cljs.core.rest(s__51172__$1);
s__51172__$1 = G__51200;
continue;
}
} else {
return null;
}
break;
}
});})(s__51170__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51170__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$expand,cljs.core.cst$kw$wide], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51169(cljs.core.rest(s__51170__$1)));
} else {
var G__51201 = cljs.core.rest(s__51170__$1);
s__51170__$1 = G__51201;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})(),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51188(s__51189){
return (new cljs.core.LazySeq(null,(function (){
var s__51189__$1 = s__51189;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51189__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51189__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51188_$_iter__51190(s__51191){
return (new cljs.core.LazySeq(null,((function (s__51189__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51191__$1 = s__51191;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51191__$1);
if(temp__6753__auto____$1){
var s__51191__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51191__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51191__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51193 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51192 = (0);
while(true){
if((i__51192 < size__8363__auto__)){
var image_position = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51192);
cljs.core.chunk_append(b__51193,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)));

var G__51202 = (i__51192 + (1));
i__51192 = G__51202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51193),untangled$ui$element_visuals$iter__51188_$_iter__51190(cljs.core.chunk_rest(s__51191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51193),null);
}
} else {
var image_position = cljs.core.first(s__51191__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51188_$_iter__51190(cljs.core.rest(s__51191__$2)));
}
} else {
return null;
}
break;
}
});})(s__51189__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51189__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$bottom_DASH_right], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51188(cljs.core.rest(s__51189__$1)));
} else {
var G__51203 = cljs.core.rest(s__51189__$1);
s__51189__$1 = G__51203;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})()], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$card_DASH_transparent_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card-transparent-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51204(s__51205){
return (new cljs.core.LazySeq(null,(function (){
var s__51205__$1 = s__51205;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51205__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51205__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51204_$_iter__51206(s__51207){
return (new cljs.core.LazySeq(null,((function (s__51205__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51207__$1 = s__51207;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51207__$1);
if(temp__6753__auto____$1){
var s__51207__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51207__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51207__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51209 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51208 = (0);
while(true){
if((i__51208 < size__8363__auto__)){
var actions = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51208);
cljs.core.chunk_append(b__51209,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$kind,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0))], 0))], 0))], 0)));

var G__51226 = (i__51208 + (1));
i__51208 = G__51226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51209),untangled$ui$element_visuals$iter__51204_$_iter__51206(cljs.core.chunk_rest(s__51207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51209),null);
}
} else {
var actions = cljs.core.first(s__51207__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$kind,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,color,cljs.core.cst$kw$actions,actions], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51204_$_iter__51206(cljs.core.rest(s__51207__$2)));
}
} else {
return null;
}
break;
}
});})(s__51205__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51205__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Action"], 0))], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51204(cljs.core.rest(s__51205__$1)));
} else {
var G__51227 = cljs.core.rest(s__51205__$1);
s__51205__$1 = G__51227;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neutral,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})(),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51215(s__51216){
return (new cljs.core.LazySeq(null,(function (){
var s__51216__$1 = s__51216;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51216__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51216__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51215_$_iter__51217(s__51218){
return (new cljs.core.LazySeq(null,((function (s__51216__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51218__$1 = s__51218;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51218__$1);
if(temp__6753__auto____$1){
var s__51218__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51218__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51218__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51220 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51219 = (0);
while(true){
if((i__51219 < size__8363__auto__)){
var image_position = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51219);
cljs.core.chunk_append(b__51220,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)));

var G__51228 = (i__51219 + (1));
i__51219 = G__51228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51220),untangled$ui$element_visuals$iter__51215_$_iter__51217(cljs.core.chunk_rest(s__51218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51220),null);
}
} else {
var image_position = cljs.core.first(s__51218__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$kind,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,image,cljs.core.cst$kw$image_DASH_position,image_position], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')], 0)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(image_position))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51215_$_iter__51217(cljs.core.rest(s__51218__$2)));
}
} else {
return null;
}
break;
}
});})(s__51216__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51216__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$top_DASH_left,cljs.core.cst$kw$top_DASH_right,cljs.core.cst$kw$bottom_DASH_left,cljs.core.cst$kw$bottom_DASH_right], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51215(cljs.core.rest(s__51216__$1)));
} else {
var G__51229 = cljs.core.rest(s__51216__$1);
s__51216__$1 = G__51229;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})()], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$card_DASH_square_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card-square-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51230(s__51231){
return (new cljs.core.LazySeq(null,(function (){
var s__51231__$1 = s__51231;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51231__$1);
if(temp__6753__auto__){
var s__51231__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51231__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51231__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51233 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51232 = (0);
while(true){
if((i__51232 < size__8363__auto__)){
var size = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51232);
cljs.core.chunk_append(b__51233,untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$kind,cljs.core.cst$kw$square,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$size,size], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)));

var G__51236 = (i__51232 + (1));
i__51232 = G__51236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51233),untangled$ui$element_visuals$iter__51230(cljs.core.chunk_rest(s__51231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51233),null);
}
} else {
var size = cljs.core.first(s__51231__$2);
return cljs.core.cons(untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(6),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$kind,cljs.core.cst$kw$square,cljs.core.cst$kw$title,"Card Test",cljs.core.cst$kw$size,size], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size))].join('')], 0))], 0))], 0))], 0)),untangled$ui$element_visuals$iter__51230(cljs.core.rest(s__51231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$expand,cljs.core.cst$kw$wide], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$checkbox_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"checkbox-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "style": ({"width": "80px"})}),cljs.core.array_seq(["Normal "], 0)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"checkbox-1"], null)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"checkbox-3",cljs.core.cst$kw$checked,true], null)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"checkbox-3",cljs.core.cst$kw$checked,cljs.core.cst$kw$partial], null))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "style": ({"width": "80px"})}),cljs.core.array_seq(["Disabled "], 0)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"checkbox-2",cljs.core.cst$kw$disabled,true], null)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"checkbox-3",cljs.core.cst$kw$checked,true,cljs.core.cst$kw$disabled,true], null)),untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"checkbox-4",cljs.core.cst$kw$checked,cljs.core.cst$kw$partial,cljs.core.cst$kw$disabled,true], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$empty_DASH_state_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"empty-state-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Nothing specified"], 0)),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state(cljs.core.PersistentArrayMap.EMPTY)], 0))),om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Custom specification"], 0)),untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$widgets,cljs.core.cst$kw$title,"No widgets yet",cljs.core.cst$kw$message,"Create a widget to get started"], null))], 0)))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$field_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"field-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51237(s__51238){
return (new cljs.core.LazySeq(null,(function (){
var s__51238__$1 = s__51238;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51238__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var size = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51238__$1,size,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51237_$_iter__51239(s__51240){
return (new cljs.core.LazySeq(null,((function (s__51238__$1,size,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51240__$1 = s__51240;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51240__$1);
if(temp__6753__auto____$1){
var s__51240__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51240__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51240__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51242 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51241 = (0);
while(true){
if((i__51241 < size__8363__auto__)){
var states = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51241);
cljs.core.chunk_append(b__51242,untangled.ui.elements.ui_field(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$size,size,cljs.core.cst$kw$state,states,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(states)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" field")].join('')));

var G__51248 = (i__51241 + (1));
i__51241 = G__51248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51242),untangled$ui$element_visuals$iter__51237_$_iter__51239(cljs.core.chunk_rest(s__51240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51242),null);
}
} else {
var states = cljs.core.first(s__51240__$2);
return cljs.core.cons(untangled.ui.elements.ui_field(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$size,size,cljs.core.cst$kw$state,states,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(states)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" field")].join('')),untangled$ui$element_visuals$iter__51237_$_iter__51239(cljs.core.rest(s__51240__$2)));
}
} else {
return null;
}
break;
}
});})(s__51238__$1,size,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51238__$1,size,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$invalid,cljs.core.cst$kw$error], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51237(cljs.core.rest(s__51238__$1)));
} else {
var G__51249 = cljs.core.rest(s__51238__$1);
s__51238__$1 = G__51249;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$small,cljs.core.cst$kw$medium,cljs.core.cst$kw$large], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$icon_DASH_colors_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-colors-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$active], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge,cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),untangled.icons.icon(cljs.core.cst$kw$alarm))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$icon_DASH_sizes_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-sizes-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$small], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$medium], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$xlarge], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge], null),untangled.icons.icon(cljs.core.cst$kw$alarm))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$icon_DASH_bar_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-bar-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0)),untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$shifting,true], null),cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0)),om.dom.br(null),untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orientation,cljs.core.cst$kw$vertical], null),cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$labels_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"labels-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51250(s__51251){
return (new cljs.core.LazySeq(null,(function (){
var s__51251__$1 = s__51251;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51251__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51251__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51250_$_iter__51252(s__51253){
return (new cljs.core.LazySeq(null,((function (s__51251__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51253__$1 = s__51253;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51253__$1);
if(temp__6753__auto____$1){
var s__51253__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51253__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51253__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51255 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51254 = (0);
while(true){
if((i__51254 < size__8363__auto__)){
var icon = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51254);
cljs.core.chunk_append(b__51255,untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([icon,"Default"], 0)));

var G__51261 = (i__51254 + (1));
i__51254 = G__51261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51255),untangled$ui$element_visuals$iter__51250_$_iter__51252(cljs.core.chunk_rest(s__51253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51255),null);
}
} else {
var icon = cljs.core.first(s__51253__$2);
return cljs.core.cons(untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((256)))].join('')], null),cljs.core.array_seq([icon,"Default"], 0)),untangled$ui$element_visuals$iter__51250_$_iter__51252(cljs.core.rest(s__51253__$2)));
}
} else {
return null;
}
break;
}
});})(s__51251__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51251__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.icons.icon(cljs.core.cst$kw$add)], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51250(cljs.core.rest(s__51251__$1)));
} else {
var G__51262 = cljs.core.rest(s__51251__$1);
s__51251__$1 = G__51262;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$loader_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"loader-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(4),cljs.core.cst$kw$halign,cljs.core.cst$kw$center], null),cljs.core.array_seq([untangled.ui.elements.ui_loader(cljs.core.PersistentArrayMap.EMPTY)], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(4),cljs.core.cst$kw$halign,cljs.core.cst$kw$center], null),cljs.core.array_seq([untangled.ui.elements.ui_loader(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null))], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(4),cljs.core.cst$kw$halign,cljs.core.cst$kw$center], null),cljs.core.array_seq([untangled.ui.elements.ui_loader(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$messages_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"messages-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51263(s__51264){
return (new cljs.core.LazySeq(null,(function (){
var s__51264__$1 = s__51264;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51264__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51264__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51263_$_iter__51265(s__51266){
return (new cljs.core.LazySeq(null,((function (s__51264__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51266__$1 = s__51266;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51266__$1);
if(temp__6753__auto____$1){
var s__51266__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51266__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51266__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51268 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51267 = (0);
while(true){
if((i__51267 < size__8363__auto__)){
var class$ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51267);
cljs.core.chunk_append(b__51268,untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$className,class$,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("messages-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(class$))].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message.")].join('')], 0)));

var G__51274 = (i__51267 + (1));
i__51267 = G__51274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51268),untangled$ui$element_visuals$iter__51263_$_iter__51265(cljs.core.chunk_rest(s__51266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51268),null);
}
} else {
var class$ = cljs.core.first(s__51266__$2);
return cljs.core.cons(untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$className,class$,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("messages-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(class$))].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message.")].join('')], 0)),untangled$ui$element_visuals$iter__51263_$_iter__51265(cljs.core.rest(s__51266__$2)));
}
} else {
return null;
}
break;
}
});})(s__51264__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51264__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","u-font-size--semi-medium"], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51263(cljs.core.rest(s__51264__$1)));
} else {
var G__51275 = cljs.core.rest(s__51264__$1);
s__51264__$1 = G__51275;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})(),untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a message with an icon.")].join(''),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$glyph,cljs.core.cst$kw$arrow_forward], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$modal], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"modal",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"200",cljs.core.cst$kw$width,"100%"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),(function (){var G__51276 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,true], null);
var G__51277 = (function (){var G__51280 = cljs.core.PersistentArrayMap.EMPTY;
var G__51281 = "Informative";
return (untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2(G__51280,G__51281) : untangled.ui.elements.ui_dialog_title.call(null,G__51280,G__51281));
})();
var G__51278 = (function (){var G__51282 = cljs.core.PersistentArrayMap.EMPTY;
var G__51283 = "You have been notified.";
return (untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2(G__51282,G__51283) : untangled.ui.elements.ui_dialog_body.call(null,G__51282,G__51283));
})();
var G__51279 = (function (){var G__51284 = cljs.core.PersistentArrayMap.EMPTY;
var G__51285 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Cancel"], 0));
var G__51286 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Ok"], 0));
return (untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3(G__51284,G__51285,G__51286) : untangled.ui.elements.ui_dialog_actions.call(null,G__51284,G__51285,G__51286));
})();
return (untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4(G__51276,G__51277,G__51278,G__51279) : untangled.ui.elements.ui_dialog.call(null,G__51276,G__51277,G__51278,G__51279));
})()], 0)))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$notifications_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"notifications-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51287(s__51288){
return (new cljs.core.LazySeq(null,(function (){
var s__51288__$1 = s__51288;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51288__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var kind = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51288__$1,kind,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51287_$_iter__51289(s__51290){
return (new cljs.core.LazySeq(null,((function (s__51288__$1,kind,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51290__$1 = s__51290;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51290__$1);
if(temp__6753__auto____$1){
var s__51290__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51290__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51290__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51292 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51291 = (0);
while(true){
if((i__51291 < size__8363__auto__)){
var width = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51291);
cljs.core.chunk_append(b__51292,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')}),cljs.core.array_seq([(function (){var G__51340 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$width,width], null);
var G__51341 = (function (){var G__51343 = cljs.core.PersistentArrayMap.EMPTY;
var G__51344 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.cst$kw$wide))?clojure.string.capitalize(cljs.core.name(width)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.name(kind)))].join('');
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__51343,G__51344) : untangled.ui.elements.ui_notification_title.call(null,G__51343,G__51344));
})();
var G__51342 = (function (){var G__51345 = cljs.core.PersistentArrayMap.EMPTY;
var G__51346 = "Your message here...";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__51345,G__51346) : untangled.ui.elements.ui_notification_body.call(null,G__51345,G__51346));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__51340,G__51341,G__51342) : untangled.ui.elements.ui_notification.call(null,G__51340,G__51341,G__51342));
})(),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" "], 0))], 0)));

var G__51354 = (i__51291 + (1));
i__51291 = G__51354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51292),untangled$ui$element_visuals$iter__51287_$_iter__51289(cljs.core.chunk_rest(s__51290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51292),null);
}
} else {
var width = cljs.core.first(s__51290__$2);
return cljs.core.cons(om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')}),cljs.core.array_seq([(function (){var G__51347 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$width,width], null);
var G__51348 = (function (){var G__51350 = cljs.core.PersistentArrayMap.EMPTY;
var G__51351 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.cst$kw$wide))?clojure.string.capitalize(cljs.core.name(width)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.name(kind)))].join('');
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__51350,G__51351) : untangled.ui.elements.ui_notification_title.call(null,G__51350,G__51351));
})();
var G__51349 = (function (){var G__51352 = cljs.core.PersistentArrayMap.EMPTY;
var G__51353 = "Your message here...";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__51352,G__51353) : untangled.ui.elements.ui_notification_body.call(null,G__51352,G__51353));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__51347,G__51348,G__51349) : untangled.ui.elements.ui_notification.call(null,G__51347,G__51348,G__51349));
})(),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" "], 0))], 0)),untangled$ui$element_visuals$iter__51287_$_iter__51289(cljs.core.rest(s__51290__$2)));
}
} else {
return null;
}
break;
}
});})(s__51288__$1,kind,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51288__$1,kind,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$wide], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51287(cljs.core.rest(s__51288__$1)));
} else {
var G__51355 = cljs.core.rest(s__51288__$1);
s__51288__$1 = G__51355;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$normal,cljs.core.cst$kw$informative,cljs.core.cst$kw$success,cljs.core.cst$kw$warning,cljs.core.cst$kw$error], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$progress_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"progress-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_progress(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"u-trailer--half"], null)),(function (){var iter__8364__auto__ = (function untangled$ui$element_visuals$iter__51356(s__51357){
return (new cljs.core.LazySeq(null,(function (){
var s__51357__$1 = s__51357;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__51357__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var value = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__51357__$1,value,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__51356_$_iter__51358(s__51359){
return (new cljs.core.LazySeq(null,((function (s__51357__$1,value,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__51359__$1 = s__51359;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__51359__$1);
if(temp__6753__auto____$1){
var s__51359__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51359__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__51359__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__51361 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__51360 = (0);
while(true){
if((i__51360 < size__8363__auto__)){
var size = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__51360);
cljs.core.chunk_append(b__51361,untangled.ui.elements.ui_progress(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,value,cljs.core.cst$kw$size,size,cljs.core.cst$kw$className,"u-trailer--half",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)));

var G__51367 = (i__51360 + (1));
i__51360 = G__51367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51361),untangled$ui$element_visuals$iter__51356_$_iter__51358(cljs.core.chunk_rest(s__51359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51361),null);
}
} else {
var size = cljs.core.first(s__51359__$2);
return cljs.core.cons(untangled.ui.elements.ui_progress(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,value,cljs.core.cst$kw$size,size,cljs.core.cst$kw$className,"u-trailer--half",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)),untangled$ui$element_visuals$iter__51356_$_iter__51358(cljs.core.rest(s__51359__$2)));
}
} else {
return null;
}
break;
}
});})(s__51357__$1,value,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__51357__$1,value,xs__7309__auto__,temp__6753__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$regular,cljs.core.cst$kw$dense], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_visuals$iter__51356(cljs.core.rest(s__51357__$1)));
} else {
var G__51368 = cljs.core.rest(s__51357__$1);
s__51357__$1 = G__51368;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(25),(50),(75),(100)], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$radio_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"radio-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"radio-1"], null)),untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"radio-1",cljs.core.cst$kw$checked,true], null)),untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"radio-2",cljs.core.cst$kw$disabled,true], null)),untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"radio-2",cljs.core.cst$kw$disabled,true,cljs.core.cst$kw$checked,true], null))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$switch_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"switch-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_switch(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,false,cljs.core.cst$kw$id,"switch-1"], null)),untangled.ui.elements.ui_switch(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,true,cljs.core.cst$kw$id,"switch-1"], null)),untangled.ui.elements.ui_switch(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checked,false,cljs.core.cst$kw$id,"switch-1",cljs.core.cst$kw$disabled,true], null)),untangled.ui.elements.ui_switch(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checked,true,cljs.core.cst$kw$id,"switch-1",cljs.core.cst$kw$disabled,true], null))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_visuals,cljs.core.cst$kw$tab_DASH_visual_DASH_regressions], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"tab-visual-regressions",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Docs"], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Support"], null))], 0)),untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "t-dark"}),cljs.core.array_seq([untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null))], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

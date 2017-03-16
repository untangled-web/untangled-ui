// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.calendar_visuals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.ui.calendar');
goog.require('untangled.i18n');
untangled.ui.calendar_visuals.height = "400px";
untangled.ui.calendar_visuals.offset = "300px";
untangled.ui.calendar_visuals.cal_1 = untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cal1,(new Date((1998),(1),(1))));
untangled.ui.calendar_visuals.cal_1_open = untangled.ui.calendar.set_overlay_visible_impl(untangled.ui.calendar_visuals.cal_1,true);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_no_DASH_overlay], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-no-overlay",cljs.core.cst$kw$documentation,"This is how the calendar widget looks without the overlay showing",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--4"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.calendar_visuals.cal_1,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,(function (t,cal){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TRIGGER"], 0));
})], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_no_DASH_overlay_DASH_no_DASH_trigger], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-no-overlay-no-trigger",cljs.core.cst$kw$documentation,"A calendar with no trigger cannot be hidden.",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.calendar.ui_calendar(untangled.ui.calendar_visuals.cal_1),untangled.ui.calendar.ui_calendar(untangled.ui.calendar_visuals.cal_1)], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_overlay_DASH_tl], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-overlay-tl",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"marginTop": untangled.ui.calendar_visuals.offset}), "className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--4"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.calendar_visuals.cal_1_open,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,(function (t,cal){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TRIGGER"], 0));
}),cljs.core.cst$kw$align,cljs.core.cst$kw$top_DASH_left_DASH_edge], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_overlay_DASH_tr], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-overlay-tr",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"marginTop": untangled.ui.calendar_visuals.offset}), "className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--4 u-end"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.calendar_visuals.cal_1_open,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,(function (t,cal){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TRIGGER"], 0));
}),cljs.core.cst$kw$align,cljs.core.cst$kw$top_DASH_right_DASH_edge], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_overlay_DASH_bl], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-overlay-bl",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"height": untangled.ui.calendar_visuals.height}), "className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--4"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.calendar_visuals.cal_1_open,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,(function (t,cal){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TRIGGER"], 0));
}),cljs.core.cst$kw$align,cljs.core.cst$kw$bottom_DASH_left_DASH_edge], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$calendar_DASH_overlay_DASH_br], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"calendar-overlay-br",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"height": untangled.ui.calendar_visuals.height}), "className": "u-row"}),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "u-column--3 u-push--4 u-end"}),cljs.core.array_seq([untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.calendar_visuals.cal_1_open,cljs.core.array_seq([cljs.core.cst$kw$overlay_DASH_trigger,(function (t,cal){
return om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["TRIGGER"], 0));
}),cljs.core.cst$kw$align,cljs.core.cst$kw$bottom_DASH_right_DASH_edge], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$calendar_visuals,cljs.core.cst$kw$full_DASH_year], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"full-year",cljs.core.cst$kw$documentation,"A full year of calendar overlays.",cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = (function untangled$ui$calendar_visuals$iter__50957(s__50958){
return (new cljs.core.LazySeq(null,(function (){
var s__50958__$1 = s__50958;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__50958__$1);
if(temp__6753__auto__){
var s__50958__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50958__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__50958__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__50960 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__50959 = (0);
while(true){
if((i__50959 < size__8363__auto__)){
var month = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__50959);
cljs.core.chunk_append(b__50960,(function (){var d = untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3((2012),month,(15));
var cal = untangled.ui.calendar.set_overlay_visible_impl(untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cal-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''),d),true);
return untangled.ui.calendar.ui_calendar(cal);
})());

var G__50965 = (i__50959 + (1));
i__50959 = G__50965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50960),untangled$ui$calendar_visuals$iter__50957(cljs.core.chunk_rest(s__50958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50960),null);
}
} else {
var month = cljs.core.first(s__50958__$2);
return cljs.core.cons((function (){var d = untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3((2012),month,(15));
var cal = untangled.ui.calendar.set_overlay_visible_impl(untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cal-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''),d),true);
return untangled.ui.calendar.ui_calendar(cal);
})(),untangled$ui$calendar_visuals$iter__50957(cljs.core.rest(s__50958__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

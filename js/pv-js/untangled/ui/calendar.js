// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.calendar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('untangled.client.mutations');
goog.require('om.next');
goog.require('untangled.icons');
goog.require('untangled.ui.state');
goog.require('untangled.i18n');
goog.require('untangled.client.logging');
/**
 * The Om table name under which calendars are stored.
 */
untangled.ui.calendar.table_name = cljs.core.cst$kw$untangled$ui$calendar_SLASH_by_DASH_id;
/**
 * Returns the Om ident for a calendar with the given id.
 */
untangled.ui.calendar.calendar_ident = (function untangled$ui$calendar$calendar_ident(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.calendar.table_name,id], null);
});
if(typeof untangled.ui.calendar.ms_in_a_day !== 'undefined'){
} else {
untangled.ui.calendar.ms_in_a_day = (86400000);
}
/**
 * Create a java/js date. y is 4-digit, m is zero-based, and d is 1-based day
 */
untangled.ui.calendar.date = (function untangled$ui$calendar$date(var_args){
var args47142 = [];
var len__8723__auto___47148 = arguments.length;
var i__8724__auto___47150 = (0);
while(true){
if((i__8724__auto___47150 < len__8723__auto___47148)){
args47142.push((arguments[i__8724__auto___47150]));

var G__47152 = (i__8724__auto___47150 + (1));
i__8724__auto___47150 = G__47152;
continue;
} else {
}
break;
}

var G__47147 = args47142.length;
switch (G__47147) {
case 0:
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47142.length)].join('')));

}
});

untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new Date());
});

untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$2 = (function (base,offset_ms){
return (new Date((base.getTime() + offset_ms)));
});

untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3 = (function (y,m,day){
return (new Date(y,m,day,(12),(0),(0)));
});

untangled.ui.calendar.date.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sequence of weeks (each of which contains 7 days) that should be included on a sunday-aligned calendar.
 *   The weeks are simple lists. The days are javascript Date objects. Their position in the week list indicates their
 *   day of the week (first position is sunday).
 */
untangled.ui.calendar.weeks_of_interest = (function untangled$ui$calendar$weeks_of_interest(month,year){
var prior_day = (function untangled$ui$calendar$weeks_of_interest_$_prior_day(dt){
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$2(dt,(- untangled.ui.calendar.ms_in_a_day));
});
var next_day = (function untangled$ui$calendar$weeks_of_interest_$_next_day(dt){
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$2(dt,untangled.ui.calendar.ms_in_a_day);
});
var zero_based_month = (month - (1));
var first_day_of_month = untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3(year,zero_based_month,(1));
var all_prior_days = cljs.core.iterate(prior_day,first_day_of_month);
var prior_sunday = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (zero_based_month,first_day_of_month,all_prior_days){
return (function (p1__47166_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__47166_SHARP_.getDay());
});})(zero_based_month,first_day_of_month,all_prior_days))
,all_prior_days));
var all_weeks_from_prior_sunday = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((7),cljs.core.iterate(next_day,prior_sunday));
var contains_this_month_QMARK_ = ((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (week){
return cljs.core.some(((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (p1__47167_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zero_based_month,p1__47167_SHARP_.getMonth());
});})(zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday))
,week);
});})(zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday))
;
var all_weeks_from_starting_sunday = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,contains_this_month_QMARK_),all_weeks_from_prior_sunday);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(contains_this_month_QMARK_,all_weeks_from_starting_sunday);
});
/**
 * Create a calendar with the given ID and date (as a JS date object). Note that label will be passed through the untangled
 *   i18n `tr-unsafe`, so you should do something to ensure that label is extracted if you are supporting more than one locale.
 */
untangled.ui.calendar.calendar = (function untangled$ui$calendar$calendar(var_args){
var args47199 = [];
var len__8723__auto___47212 = arguments.length;
var i__8724__auto___47213 = (0);
while(true){
if((i__8724__auto___47213 < len__8723__auto___47212)){
args47199.push((arguments[i__8724__auto___47213]));

var G__47214 = (i__8724__auto___47213 + (1));
i__8724__auto___47213 = G__47214;
continue;
} else {
}
break;
}

var G__47205 = args47199.length;
switch (G__47205) {
case 1:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47199.length)].join('')));

}
});

untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1 = (function (id){
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2(id,untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$0());
});

untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2 = (function (id,starting_js_date){
var month = ((1) + starting_js_date.getMonth());
var day = starting_js_date.getDate();
var year = starting_js_date.getFullYear();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$calendar_SLASH_id,id,cljs.core.cst$kw$calendar_SLASH_month,month,cljs.core.cst$kw$calendar_SLASH_day,day,cljs.core.cst$kw$calendar_SLASH_year,year,cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,year),cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_,false], null);
});

untangled.ui.calendar.calendar.cljs$lang$maxFixedArity = 2;

/**
 * Is the given date in the calendar's currently selected month?
 */
untangled.ui.calendar.in_month_QMARK_ = (function untangled$ui$calendar$in_month_QMARK_(calendar,jsdt){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$calendar_SLASH_month.cljs$core$IFn$_invoke$arity$1(calendar),((1) + jsdt.getMonth()));
});
/**
 * Is the given date the currently selected date of the calendar?
 */
untangled.ui.calendar.selected_day_QMARK_ = (function untangled$ui$calendar$selected_day_QMARK_(calendar,jsdt){
var and__7490__auto__ = untangled.ui.calendar.in_month_QMARK_(calendar,jsdt);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$calendar_SLASH_day.cljs$core$IFn$_invoke$arity$1(calendar),jsdt.getDate());
} else {
return and__7490__auto__;
}
});
/**
 * Convert the calendar's currently selected date to a Date object.
 */
untangled.ui.calendar.cal__GT_Date = (function untangled$ui$calendar$cal__GT_Date(p__47222){
var map__47238 = p__47222;
var map__47238__$1 = ((((!((map__47238 == null)))?((((map__47238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47238):map__47238);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47238__$1,cljs.core.cst$kw$calendar_SLASH_year);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47238__$1,cljs.core.cst$kw$calendar_SLASH_month);
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47238__$1,cljs.core.cst$kw$calendar_SLASH_day);
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3(year,(month - (1)),day);
});
/**
 * Give back a calendar's current day setting as an i18n string for the current untangled.i18n locale.
 */
untangled.ui.calendar.displayed_date = (function untangled$ui$calendar$displayed_date(calendar){
var G__47259 = "{dt,date}";
var G__47260 = cljs.core.cst$kw$dt;
var G__47261 = untangled.ui.calendar.cal__GT_Date(calendar);
return trf(G__47259,G__47260,G__47261);
});
/**
 * Update a calendar to change the overlay visibility.
 */
untangled.ui.calendar.set_overlay_visible_impl = (function untangled$ui$calendar$set_overlay_visible_impl(calendar,visible_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(calendar,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_,visible_QMARK_);
});
/**
 * Returns an updated app state with the all calendar overlays closed application-wide.
 */
untangled.ui.calendar.close_all_overlays_impl = (function untangled$ui$calendar$close_all_overlays_impl(state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,id){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.calendar.table_name,id,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_], null),false);
}),state_map,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,untangled.ui.calendar.table_name)));
});
/**
 * Returns an updated calendar set to the given js/Date object
 */
untangled.ui.calendar.set_date_impl = (function untangled$ui$calendar$set_date_impl(calendar,new_dt){
try{var is_js_date_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Date,cljs.core.type(new_dt));
var month = ((is_js_date_QMARK_)?((1) + new_dt.getMonth()):cljs.core.cst$kw$calendar_SLASH_month.cljs$core$IFn$_invoke$arity$1(new_dt));
var day = ((is_js_date_QMARK_)?new_dt.getDate():cljs.core.cst$kw$calendar_SLASH_day.cljs$core$IFn$_invoke$arity$1(new_dt));
var year = ((is_js_date_QMARK_)?new_dt.getFullYear():cljs.core.cst$kw$calendar_SLASH_year.cljs$core$IFn$_invoke$arity$1(new_dt));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_month,month,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_day,day,cljs.core.cst$kw$calendar_SLASH_year,year,cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,year)], 0));
}catch (e47273){var e = e47273;
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Failed to set date: ",e], 0));

return calendar;
}});
/**
 * Returns an updated calendar with the year backed up by one.
 */
untangled.ui.calendar.prior_year_impl = (function untangled$ui$calendar$prior_year_impl(calendar){
var map__47282 = calendar;
var map__47282__$1 = ((((!((map__47282 == null)))?((((map__47282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47282):map__47282);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47282__$1,cljs.core.cst$kw$calendar_SLASH_year);
var prior_year = (year - (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_year,prior_year,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,prior_year)], 0));
});
/**
 * Returns an updated calendar with the year moved forward by one.
 */
untangled.ui.calendar.next_year_impl = (function untangled$ui$calendar$next_year_impl(calendar){
var map__47303 = calendar;
var map__47303__$1 = ((((!((map__47303 == null)))?((((map__47303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47303):map__47303);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,cljs.core.cst$kw$calendar_SLASH_year);
var next_year = (year + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_year,next_year,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,next_year)], 0));
});
/**
 * Returns an updated calendar for the prior month.
 */
untangled.ui.calendar.prior_month_impl = (function untangled$ui$calendar$prior_month_impl(calendar){
var map__47314 = calendar;
var map__47314__$1 = ((((!((map__47314 == null)))?((((map__47314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47314):map__47314);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,cljs.core.cst$kw$calendar_SLASH_year);
var this_month = month;
var prior_month = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_month,(1)))?(12):(this_month - (1)));
var this_year = year;
var year__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),prior_month))?(this_year - (1)):this_year);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_month,prior_month,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_year,year__$1,cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(prior_month,year__$1)], 0));
});
/**
 * Returns an updated calendar for the next month.
 */
untangled.ui.calendar.next_month_impl = (function untangled$ui$calendar$next_month_impl(calendar){
var map__47341 = calendar;
var map__47341__$1 = ((((!((map__47341 == null)))?((((map__47341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47341):map__47341);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47341__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47341__$1,cljs.core.cst$kw$calendar_SLASH_year);
var this_month = month;
var next_month = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_month,(12)))?(1):((1) + this_month));
var this_year = year;
var year__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),next_month))?((1) + this_year):this_year);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_month,next_month,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_year,year__$1,cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(next_month,year__$1)], 0));
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_toggle_DASH_overlay,(function (env47347,_,p__47349){
var map__47350 = p__47349;
var map__47350__$1 = ((((!((map__47350 == null)))?((((map__47350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47350):map__47350);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47350__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47355 = env47347;
var map__47355__$1 = ((((!((map__47355 == null)))?((((map__47355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47355):map__47355);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47355,map__47355__$1,state,map__47350,map__47350__$1,calendar_id){
return (function (){
var ident = untangled.ui.calendar.calendar_ident(calendar_id);
var calendar = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),ident);
var target_visible_QMARK_ = cljs.core.not(cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_.cljs$core$IFn$_invoke$arity$1(calendar));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (ident,calendar,target_visible_QMARK_,map__47355,map__47355__$1,state,map__47350,map__47350__$1,calendar_id){
return (function (state_map){
return untangled.ui.state.evolve(untangled.ui.calendar.close_all_overlays_impl(state_map),ident,untangled.ui.calendar.set_overlay_visible_impl,target_visible_QMARK_);
});})(ident,calendar,target_visible_QMARK_,map__47355,map__47355__$1,state,map__47350,map__47350__$1,calendar_id))
);
});})(map__47355,map__47355__$1,state,map__47350,map__47350__$1,calendar_id))
], null);
})(),(function (){var env = env47347;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_overlay_DASH_visible,(function (env47359,_,p__47360){
var map__47361 = p__47360;
var map__47361__$1 = ((((!((map__47361 == null)))?((((map__47361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47361):map__47361);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47361__$1,cljs.core.cst$kw$calendar_DASH_id);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47361__$1,cljs.core.cst$kw$visible_QMARK_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47363 = env47359;
var map__47363__$1 = ((((!((map__47363 == null)))?((((map__47363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47363):map__47363);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47363__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47363,map__47363__$1,state,map__47361,map__47361__$1,calendar_id,visible_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_overlay_visible_impl,visible_QMARK_);
});})(map__47363,map__47363__$1,state,map__47361,map__47361__$1,calendar_id,visible_QMARK_))
], null);
})(),(function (){var env = env47359;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay,(function (env47403,_,p__47404){
var map__47405 = p__47404;
var map__47405__$1 = ((((!((map__47405 == null)))?((((map__47405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47405):map__47405);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47405__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47407 = env47403;
var map__47407__$1 = ((((!((map__47407 == null)))?((((map__47407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47407):map__47407);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47407__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47407,map__47407__$1,state,map__47405,map__47405__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_overlay_visible_impl,false);
});})(map__47407,map__47407__$1,state,map__47405,map__47405__$1,calendar_id))
], null);
})(),(function (){var env = env47403;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_all_DASH_overlays,(function (env47411,_,params_ignored){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47412 = env47411;
var map__47412__$1 = ((((!((map__47412 == null)))?((((map__47412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47412):map__47412);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47412__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47412,map__47412__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,untangled.ui.calendar.close_all_overlays_impl);
});})(map__47412,map__47412__$1,state))
], null);
})(),(function (){var env = env47411;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_month,(function (env47419,_,p__47420){
var map__47421 = p__47420;
var map__47421__$1 = ((((!((map__47421 == null)))?((((map__47421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47421):map__47421);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47421__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47423 = env47419;
var map__47423__$1 = ((((!((map__47423 == null)))?((((map__47423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47423):map__47423);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47423__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47423,map__47423__$1,state,map__47421,map__47421__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.next_month_impl);
});})(map__47423,map__47423__$1,state,map__47421,map__47421__$1,calendar_id))
], null);
})(),(function (){var env = env47419;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_month,(function (env47518,_,p__47523){
var map__47524 = p__47523;
var map__47524__$1 = ((((!((map__47524 == null)))?((((map__47524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47524):map__47524);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47524__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47529 = env47518;
var map__47529__$1 = ((((!((map__47529 == null)))?((((map__47529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47529):map__47529);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47529__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47529,map__47529__$1,state,map__47524,map__47524__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.prior_month_impl);
});})(map__47529,map__47529__$1,state,map__47524,map__47524__$1,calendar_id))
], null);
})(),(function (){var env = env47518;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_year,(function (env47583,_,p__47584){
var map__47586 = p__47584;
var map__47586__$1 = ((((!((map__47586 == null)))?((((map__47586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47586):map__47586);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47586__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47591 = env47583;
var map__47591__$1 = ((((!((map__47591 == null)))?((((map__47591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47591):map__47591);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47591__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47591,map__47591__$1,state,map__47586,map__47586__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.prior_year_impl);
});})(map__47591,map__47591__$1,state,map__47586,map__47586__$1,calendar_id))
], null);
})(),(function (){var env = env47583;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_year,(function (env47640,_,p__47641){
var map__47642 = p__47641;
var map__47642__$1 = ((((!((map__47642 == null)))?((((map__47642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47642):map__47642);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47642__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47647 = env47640;
var map__47647__$1 = ((((!((map__47647 == null)))?((((map__47647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47647):map__47647);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47647__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47647,map__47647__$1,state,map__47642,map__47642__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.next_year_impl);
});})(map__47647,map__47647__$1,state,map__47642,map__47642__$1,calendar_id))
], null);
})(),(function (){var env = env47640;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date,(function (env47689,_,p__47690){
var map__47691 = p__47690;
var map__47691__$1 = ((((!((map__47691 == null)))?((((map__47691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47691):map__47691);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,cljs.core.cst$kw$calendar_DASH_id);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47691__$1,cljs.core.cst$kw$date);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__47695 = env47689;
var map__47695__$1 = ((((!((map__47695 == null)))?((((map__47695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47695):map__47695);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47695__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47695,map__47695__$1,state,map__47691,map__47691__$1,calendar_id,date){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_date_impl,date);
});})(map__47695,map__47695__$1,state,map__47691,map__47691__$1,calendar_id,date))
], null);
})(),(function (){var env = env47689;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.ui.calendar.calendar_toolbar = (function untangled$ui$calendar$calendar_toolbar(this$){
var map__47714 = om.next.props(this$);
var map__47714__$1 = ((((!((map__47714 == null)))?((((map__47714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47714):map__47714);
var calendar = map__47714__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47714__$1,cljs.core.cst$kw$calendar_SLASH_id);
var overlay_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47714__$1,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_);
return om.dom.header.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__control"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Last Month", "onClick": ((function (map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_month),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$keyboard_arrow_left)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "current", "onClick": ((function (map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_overlay_DASH_visible),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$visible_QMARK_,cljs.core.not(overlay_visible_QMARK_)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.ui.calendar.displayed_date(calendar)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Today", "onClick": ((function (map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$today)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Next Month", "onClick": ((function (map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_month),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__47714,map__47714__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$keyboard_arrow_right)], 0))], 0));
});
untangled.ui.calendar.days_of_week_labels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [trc("Abbrev for sunday","Su"),trc("Abbrev for monday","M"),trc("Abbrev for tuesday","Tu"),trc("Abbrev for wednesday","W"),trc("Abbrev for thursday","Th"),trc("Abbrev for friday","F"),trc("Abbrev for saturday","Sa")], null);
untangled.ui.calendar.calendar_month_view = (function untangled$ui$calendar$calendar_month_view(this$){
var map__48043 = om.next.props(this$);
var map__48043__$1 = ((((!((map__48043 == null)))?((((map__48043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48043):map__48043);
var calendar = map__48043__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48043__$1,cljs.core.cst$kw$calendar_SLASH_id);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48043__$1,cljs.core.cst$kw$calendar_SLASH_weeks);
var map__48044 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__48044__$1 = ((((!((map__48044 == null)))?((((map__48044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48044):map__48044);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48044__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var onDateSelected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48044__$1,cljs.core.cst$kw$onDateSelected);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__month"}),cljs.core.array_seq([om.dom.table.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__48048(s__48049){
return (new cljs.core.LazySeq(null,((function (map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
var s__48049__$1 = s__48049;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48049__$1);
if(temp__6753__auto__){
var s__48049__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48049__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48049__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48051 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48050 = (0);
while(true){
if((i__48050 < size__8363__auto__)){
var label = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48050);
cljs.core.chunk_append(b__48051,om.dom.th.cljs$core$IFn$_invoke$arity$variadic(({"key": label, "className": "o-day-name"}),cljs.core.array_seq([tr(label)], 0)));

var G__48329 = (i__48050 + (1));
i__48050 = G__48329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48051),untangled$ui$calendar$calendar_month_view_$_iter__48048(cljs.core.chunk_rest(s__48049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48051),null);
}
} else {
var label = cljs.core.first(s__48049__$2);
return cljs.core.cons(om.dom.th.cljs$core$IFn$_invoke$arity$variadic(({"key": label, "className": "o-day-name"}),cljs.core.array_seq([tr(label)], 0)),untangled$ui$calendar$calendar_month_view_$_iter__48048(cljs.core.rest(s__48049__$2)));
}
} else {
return null;
}
break;
}
});})(map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
,null,null));
});})(map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
;
return iter__8364__auto__(untangled.ui.calendar.days_of_week_labels);
})()], 0)),(function (){var iter__8364__auto__ = ((function (map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__48064(s__48065){
return (new cljs.core.LazySeq(null,((function (map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
var s__48065__$1 = s__48065;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48065__$1);
if(temp__6753__auto__){
var s__48065__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48065__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48065__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48067 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48066 = (0);
while(true){
if((i__48066 < size__8363__auto__)){
var week = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48066);
cljs.core.chunk_append(b__48067,om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"key": cljs.core.first(week).toUTCString(), "className": "week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (i__48066,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48166(s__48167){
return (new cljs.core.LazySeq(null,((function (i__48066,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
var s__48167__$1 = s__48167;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__48167__$1);
if(temp__6753__auto____$1){
var s__48167__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48167__$2)){
var c__8362__auto____$1 = cljs.core.chunk_first(s__48167__$2);
var size__8363__auto____$1 = cljs.core.count(c__8362__auto____$1);
var b__48169 = cljs.core.chunk_buffer(size__8363__auto____$1);
if((function (){var i__48168 = (0);
while(true){
if((i__48168 < size__8363__auto____$1)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto____$1,i__48168);
cljs.core.chunk_append(b__48169,om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__48188 = "c-calendar__day";
var G__48188__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48188),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__48188);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48188__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__48188__$1;
}
})(), "onClick": ((function (i__48168,i__48066,day,c__8362__auto____$1,size__8363__auto____$1,b__48169,s__48167__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$date,day], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$calendar_DASH_id),(function (){var x__8436__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([refresh], 0))))));

if(cljs.core.truth_(onDateSelected)){
return (onDateSelected.cljs$core$IFn$_invoke$arity$1 ? onDateSelected.cljs$core$IFn$_invoke$arity$1(day) : onDateSelected.call(null,day));
} else {
return null;
}
});})(i__48168,i__48066,day,c__8362__auto____$1,size__8363__auto____$1,b__48169,s__48167__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)));

var G__48384 = (i__48168 + (1));
i__48168 = G__48384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48169),untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48166(cljs.core.chunk_rest(s__48167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48169),null);
}
} else {
var day = cljs.core.first(s__48167__$2);
return cljs.core.cons(om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__48190 = "c-calendar__day";
var G__48190__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48190),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__48190);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48190__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__48190__$1;
}
})(), "onClick": ((function (i__48066,day,s__48167__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$date,day], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$calendar_DASH_id),(function (){var x__8436__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([refresh], 0))))));

if(cljs.core.truth_(onDateSelected)){
return (onDateSelected.cljs$core$IFn$_invoke$arity$1 ? onDateSelected.cljs$core$IFn$_invoke$arity$1(day) : onDateSelected.call(null,day));
} else {
return null;
}
});})(i__48066,day,s__48167__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)),untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48166(cljs.core.rest(s__48167__$2)));
}
} else {
return null;
}
break;
}
});})(i__48066,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
,null,null));
});})(i__48066,week,c__8362__auto__,size__8363__auto__,b__48067,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
;
return iter__8364__auto__(week);
})()], 0)));

var G__48431 = (i__48066 + (1));
i__48066 = G__48431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48067),untangled$ui$calendar$calendar_month_view_$_iter__48064(cljs.core.chunk_rest(s__48065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48067),null);
}
} else {
var week = cljs.core.first(s__48065__$2);
return cljs.core.cons(om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"key": cljs.core.first(week).toUTCString(), "className": "week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48222(s__48223){
return (new cljs.core.LazySeq(null,((function (week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
var s__48223__$1 = s__48223;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__48223__$1);
if(temp__6753__auto____$1){
var s__48223__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48223__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48223__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48225 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48224 = (0);
while(true){
if((i__48224 < size__8363__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48224);
cljs.core.chunk_append(b__48225,om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__48273 = "c-calendar__day";
var G__48273__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48273),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__48273);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48273__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__48273__$1;
}
})(), "onClick": ((function (i__48224,day,c__8362__auto__,size__8363__auto__,b__48225,s__48223__$2,temp__6753__auto____$1,week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$date,day], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$calendar_DASH_id),(function (){var x__8436__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([refresh], 0))))));

if(cljs.core.truth_(onDateSelected)){
return (onDateSelected.cljs$core$IFn$_invoke$arity$1 ? onDateSelected.cljs$core$IFn$_invoke$arity$1(day) : onDateSelected.call(null,day));
} else {
return null;
}
});})(i__48224,day,c__8362__auto__,size__8363__auto__,b__48225,s__48223__$2,temp__6753__auto____$1,week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)));

var G__48439 = (i__48224 + (1));
i__48224 = G__48439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48225),untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48222(cljs.core.chunk_rest(s__48223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48225),null);
}
} else {
var day = cljs.core.first(s__48223__$2);
return cljs.core.cons(om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__48285 = "c-calendar__day";
var G__48285__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48285),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__48285);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48285__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__48285__$1;
}
})(), "onClick": ((function (day,s__48223__$2,temp__6753__auto____$1,week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$date,day], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$calendar_DASH_id),(function (){var x__8436__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([refresh], 0))))));

if(cljs.core.truth_(onDateSelected)){
return (onDateSelected.cljs$core$IFn$_invoke$arity$1 ? onDateSelected.cljs$core$IFn$_invoke$arity$1(day) : onDateSelected.call(null,day));
} else {
return null;
}
});})(day,s__48223__$2,temp__6753__auto____$1,week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)),untangled$ui$calendar$calendar_month_view_$_iter__48064_$_iter__48222(cljs.core.rest(s__48223__$2)));
}
} else {
return null;
}
break;
}
});})(week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
,null,null));
});})(week,s__48065__$2,temp__6753__auto__,map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
;
return iter__8364__auto__(week);
})()], 0)),untangled$ui$calendar$calendar_month_view_$_iter__48064(cljs.core.rest(s__48065__$2)));
}
} else {
return null;
}
break;
}
});})(map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
,null,null));
});})(map__48043,map__48043__$1,calendar,id,weeks,map__48044,map__48044__$1,refresh,onDateSelected))
;
return iter__8364__auto__(weeks);
})()], 0))], 0))], 0));
});
if(typeof untangled.ui.calendar.Calendar !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.calendar.Calendar = (function untangled$ui$calendar$Calendar(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.calendar.Calendar.prototype = goog.object.clone(React.Component.prototype);
}

var x48454_48525 = untangled.ui.calendar.Calendar.prototype;
x48454_48525.componentWillUpdate = ((function (x48454_48525){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___48531 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___48532 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___48531,next_ident__10196__auto___48532)){
var idxr__10197__auto___48538 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___48538 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___48538),((function (idxr__10197__auto___48538,ident__10195__auto___48531,next_ident__10196__auto___48532,this__10191__auto__,x48454_48525){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___48531], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___48532], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___48538,ident__10195__auto___48531,next_ident__10196__auto___48532,this__10191__auto__,x48454_48525))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x48454_48525))
;

x48454_48525.shouldComponentUpdate = ((function (x48454_48525){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__48460 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__48460);
} else {
return G__48460;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__48470 = this__10191__auto__.state;
var G__48471 = "omcljs$state";
return goog.object.get(G__48470,G__48471);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x48454_48525))
;

x48454_48525.componentWillUnmount = ((function (x48454_48525){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x48454_48525))
;

x48454_48525.componentDidUpdate = ((function (x48454_48525){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x48454_48525))
;

x48454_48525.isMounted = ((function (x48454_48525){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x48454_48525))
;

x48454_48525.componentWillMount = ((function (x48454_48525){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x48454_48525))
;

x48454_48525.render = ((function (x48454_48525){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_48477 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_48478 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_48479 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_48480 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_48481 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": ""}),cljs.core.array_seq([(function (){var map__48485 = om.next.props(this$);
var map__48485__$1 = ((((!((map__48485 == null)))?((((map__48485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48485):map__48485);
var calendar = map__48485__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,cljs.core.cst$kw$calendar_SLASH_id);
var overlay_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_);
var map__48486 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__48486__$1 = ((((!((map__48486 == null)))?((((map__48486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48486):map__48486);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48486__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$bottom_DASH_left_DASH_edge);
var overlay_trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48486__$1,cljs.core.cst$kw$overlay_DASH_trigger);
var up_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top_DASH_left_DASH_edge,null,cljs.core.cst$kw$top_DASH_right_DASH_edge,null], null), null).call(null,align);
var toggle = ((function (map__48485,map__48485__$1,calendar,id,overlay_visible_QMARK_,map__48486,map__48486__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_48477,_STAR_depth_STAR_48478,_STAR_shared_STAR_48479,_STAR_instrument_STAR_48480,_STAR_parent_STAR_48481,this$,this__10190__auto__,x48454_48525){
return (function (evt){
evt.stopPropagation();

var open_QMARK_ = cljs.core.not(overlay_visible_QMARK_);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_all_DASH_overlays),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_overlay_DASH_visible),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$visible_QMARK_,open_QMARK_], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$calendar_SLASH_id)], 0))))));
});})(map__48485,map__48485__$1,calendar,id,overlay_visible_QMARK_,map__48486,map__48486__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_48477,_STAR_depth_STAR_48478,_STAR_shared_STAR_48479,_STAR_instrument_STAR_48480,_STAR_parent_STAR_48481,this$,this__10190__auto__,x48454_48525))
;
var alignment_class = (cljs.core.truth_(overlay_trigger)?(function (){var G__48500 = (((align instanceof cljs.core.Keyword))?align.fqn:null);
switch (G__48500) {
case "bottom-right-edge":
return "c-calendar--right";

break;
case "top-left-edge":
return "c-calendar--up";

break;
case "top-right-edge":
return "c-calendar--up c-calendar--right";

break;
default:
return "";

}
})():null);
var calendar_classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-calendar "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(alignment_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(overlay_trigger)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-calendar--raised"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(up_QMARK_)?null:" c-calendar--down"))].join(''):null))].join('');
var overlay_rendering = om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": calendar_classes}),cljs.core.array_seq([untangled.ui.calendar.calendar_toolbar(this$),untangled.ui.calendar.calendar_month_view(this$)], 0));
if(cljs.core.truth_(overlay_trigger)){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("calendar-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''), "className": "u-wrapper"}),cljs.core.array_seq([(overlay_trigger.cljs$core$IFn$_invoke$arity$2 ? overlay_trigger.cljs$core$IFn$_invoke$arity$2(toggle,calendar) : overlay_trigger.call(null,toggle,calendar)),(cljs.core.truth_(overlay_visible_QMARK_)?overlay_rendering:null)], 0));
} else {
return overlay_rendering;
}
})()], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_48481;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_48480;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_48479;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_48478;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_48477;
}});})(x48454_48525))
;


untangled.ui.calendar.Calendar.prototype.constructor = untangled.ui.calendar.Calendar;

untangled.ui.calendar.Calendar.prototype.constructor.displayName = "untangled.ui.calendar/Calendar";

untangled.ui.calendar.Calendar.prototype.om$isComponent = true;

var x48502_48647 = untangled.ui.calendar.Calendar;
/** @nocollapse */
x48502_48647.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48502_48647.om$next$IQuery$query$arity$1 = ((function (x48502_48647){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$calendar_SLASH_id,cljs.core.cst$kw$calendar_SLASH_month,cljs.core.cst$kw$calendar_SLASH_day,cljs.core.cst$kw$calendar_SLASH_year,cljs.core.cst$kw$calendar_SLASH_weeks,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_], null);
});})(x48502_48647))
;

/** @nocollapse */
x48502_48647.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x48502_48647.om$next$Ident$ident$arity$2 = ((function (x48502_48647){
return (function (this$,p__48508){
var map__48510 = p__48508;
var map__48510__$1 = ((((!((map__48510 == null)))?((((map__48510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48510):map__48510);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,cljs.core.cst$kw$calendar_SLASH_id);
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident(id);
});})(x48502_48647))
;


var x48512_48649 = untangled.ui.calendar.Calendar.prototype;

x48512_48649.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x48512_48649.om$next$IQuery$query$arity$1 = ((function (x48512_48649){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$calendar_SLASH_id,cljs.core.cst$kw$calendar_SLASH_month,cljs.core.cst$kw$calendar_SLASH_day,cljs.core.cst$kw$calendar_SLASH_year,cljs.core.cst$kw$calendar_SLASH_weeks,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_], null);
});})(x48512_48649))
;


x48512_48649.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x48512_48649.om$next$Ident$ident$arity$2 = ((function (x48512_48649){
return (function (this$,p__48516){
var map__48517 = p__48516;
var map__48517__$1 = ((((!((map__48517 == null)))?((((map__48517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48517):map__48517);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517__$1,cljs.core.cst$kw$calendar_SLASH_id);
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident(id);
});})(x48512_48649))
;


untangled.ui.calendar.Calendar.cljs$lang$type = true;

untangled.ui.calendar.Calendar.cljs$lang$ctorStr = "untangled.ui.calendar/Calendar";

untangled.ui.calendar.Calendar.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.calendar/Calendar");
});
untangled.ui.calendar.ui_calendar_factory = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.calendar.Calendar);
/**
 * Render a calendar.
 * 
 *   `onDateSelected` will be called when a date is selected
 *   `refresh` is a sequence of Om keywords on which to trigger re-render.
 *   `align` Align the overlay such that:
 *    :bottom-left-edge (default) The upper left edge of the overlay will align with the bottom left edge of the container.
 *    :bottom-right-edge The right edge of the overlay aligns with the lower-right edge of whatever container you put it in.
 *    :top-left-edge The upper left edge of the overlay will align with the top left of the container.
 *    :top-right-edge The right edge of the overlay aligns with the upper-right edge of whatever container you put it in.
 *   `overlay-trigger` is a function `(f [toggle-fn cal-props] ...)` that will receive a toggle function and the calendar
 *   properties and should render a DOM element with a click handler that invokes `toggle-fn`
 *   to open/close the month-view overlay.
 *   
 */
untangled.ui.calendar.ui_calendar = (function untangled$ui$calendar$ui_calendar(var_args){
var args__8730__auto__ = [];
var len__8723__auto___48687 = arguments.length;
var i__8724__auto___48688 = (0);
while(true){
if((i__8724__auto___48688 < len__8723__auto___48687)){
args__8730__auto__.push((arguments[i__8724__auto___48688]));

var G__48693 = (i__8724__auto___48688 + (1));
i__8724__auto___48688 = G__48693;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic = (function (props,p__48679){
var map__48680 = p__48679;
var map__48680__$1 = ((((!((map__48680 == null)))?((((map__48680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48680):map__48680);
var opts = map__48680__$1;
var onDateSelected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48680__$1,cljs.core.cst$kw$onDateSelected);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48680__$1,cljs.core.cst$kw$refresh);
var overlay_trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48680__$1,cljs.core.cst$kw$overlay_DASH_trigger);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48680__$1,cljs.core.cst$kw$align);
var G__48682 = om.next.computed(props,opts);
return (untangled.ui.calendar.ui_calendar_factory.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.calendar.ui_calendar_factory.cljs$core$IFn$_invoke$arity$1(G__48682) : untangled.ui.calendar.ui_calendar_factory.call(null,G__48682));
});

untangled.ui.calendar.ui_calendar.cljs$lang$maxFixedArity = (1);

untangled.ui.calendar.ui_calendar.cljs$lang$applyTo = (function (seq48677){
var G__48678 = cljs.core.first(seq48677);
var seq48677__$1 = cljs.core.next(seq48677);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(G__48678,seq48677__$1);
});


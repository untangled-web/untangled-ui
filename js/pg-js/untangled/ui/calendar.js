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
var args52271 = [];
var len__8723__auto___52274 = arguments.length;
var i__8724__auto___52275 = (0);
while(true){
if((i__8724__auto___52275 < len__8723__auto___52274)){
args52271.push((arguments[i__8724__auto___52275]));

var G__52276 = (i__8724__auto___52275 + (1));
i__8724__auto___52275 = G__52276;
continue;
} else {
}
break;
}

var G__52273 = args52271.length;
switch (G__52273) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52271.length)].join('')));

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
return (function (p1__52278_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__52278_SHARP_.getDay());
});})(zero_based_month,first_day_of_month,all_prior_days))
,all_prior_days));
var all_weeks_from_prior_sunday = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((7),cljs.core.iterate(next_day,prior_sunday));
var contains_this_month_QMARK_ = ((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (week){
return cljs.core.some(((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (p1__52279_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zero_based_month,p1__52279_SHARP_.getMonth());
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
var args52280 = [];
var len__8723__auto___52283 = arguments.length;
var i__8724__auto___52284 = (0);
while(true){
if((i__8724__auto___52284 < len__8723__auto___52283)){
args52280.push((arguments[i__8724__auto___52284]));

var G__52285 = (i__8724__auto___52284 + (1));
i__8724__auto___52284 = G__52285;
continue;
} else {
}
break;
}

var G__52282 = args52280.length;
switch (G__52282) {
case 1:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52280.length)].join('')));

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
untangled.ui.calendar.cal__GT_Date = (function untangled$ui$calendar$cal__GT_Date(p__52287){
var map__52290 = p__52287;
var map__52290__$1 = ((((!((map__52290 == null)))?((((map__52290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52290):map__52290);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52290__$1,cljs.core.cst$kw$calendar_SLASH_year);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52290__$1,cljs.core.cst$kw$calendar_SLASH_month);
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52290__$1,cljs.core.cst$kw$calendar_SLASH_day);
return untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$3(year,(month - (1)),day);
});
/**
 * Give back a calendar's current day setting as an i18n string for the current untangled.i18n locale.
 */
untangled.ui.calendar.displayed_date = (function untangled$ui$calendar$displayed_date(calendar){
var G__52295 = "{dt,date}";
var G__52296 = cljs.core.cst$kw$dt;
var G__52297 = untangled.ui.calendar.cal__GT_Date(calendar);
return trf(G__52295,G__52296,G__52297);
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
}catch (e52299){var e = e52299;
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Failed to set date: ",e], 0));

return calendar;
}});
/**
 * Returns an updated calendar with the year backed up by one.
 */
untangled.ui.calendar.prior_year_impl = (function untangled$ui$calendar$prior_year_impl(calendar){
var map__52302 = calendar;
var map__52302__$1 = ((((!((map__52302 == null)))?((((map__52302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52302):map__52302);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52302__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52302__$1,cljs.core.cst$kw$calendar_SLASH_year);
var prior_year = (year - (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_year,prior_year,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,prior_year)], 0));
});
/**
 * Returns an updated calendar with the year moved forward by one.
 */
untangled.ui.calendar.next_year_impl = (function untangled$ui$calendar$next_year_impl(calendar){
var map__52306 = calendar;
var map__52306__$1 = ((((!((map__52306 == null)))?((((map__52306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52306):map__52306);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52306__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52306__$1,cljs.core.cst$kw$calendar_SLASH_year);
var next_year = (year + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_year,next_year,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(month,next_year)], 0));
});
/**
 * Returns an updated calendar for the prior month.
 */
untangled.ui.calendar.prior_month_impl = (function untangled$ui$calendar$prior_month_impl(calendar){
var map__52310 = calendar;
var map__52310__$1 = ((((!((map__52310 == null)))?((((map__52310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52310):map__52310);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52310__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52310__$1,cljs.core.cst$kw$calendar_SLASH_year);
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
var map__52314 = calendar;
var map__52314__$1 = ((((!((map__52314 == null)))?((((map__52314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52314):map__52314);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,cljs.core.cst$kw$calendar_SLASH_month);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52314__$1,cljs.core.cst$kw$calendar_SLASH_year);
var this_month = month;
var next_month = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_month,(12)))?(1):((1) + this_month));
var this_year = year;
var year__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),next_month))?((1) + this_year):this_year);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calendar,cljs.core.cst$kw$calendar_SLASH_month,next_month,cljs.core.array_seq([cljs.core.cst$kw$calendar_SLASH_year,year__$1,cljs.core.cst$kw$calendar_SLASH_weeks,untangled.ui.calendar.weeks_of_interest(next_month,year__$1)], 0));
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_toggle_DASH_overlay,(function (env52316,_,p__52317){
var map__52318 = p__52317;
var map__52318__$1 = ((((!((map__52318 == null)))?((((map__52318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52318):map__52318);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52318__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52320 = env52316;
var map__52320__$1 = ((((!((map__52320 == null)))?((((map__52320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52320):map__52320);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52320__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52320,map__52320__$1,state,map__52318,map__52318__$1,calendar_id){
return (function (){
var ident = untangled.ui.calendar.calendar_ident(calendar_id);
var calendar = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),ident);
var target_visible_QMARK_ = cljs.core.not(cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_.cljs$core$IFn$_invoke$arity$1(calendar));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (ident,calendar,target_visible_QMARK_,map__52320,map__52320__$1,state,map__52318,map__52318__$1,calendar_id){
return (function (state_map){
return untangled.ui.state.evolve(untangled.ui.calendar.close_all_overlays_impl(state_map),ident,untangled.ui.calendar.set_overlay_visible_impl,target_visible_QMARK_);
});})(ident,calendar,target_visible_QMARK_,map__52320,map__52320__$1,state,map__52318,map__52318__$1,calendar_id))
);
});})(map__52320,map__52320__$1,state,map__52318,map__52318__$1,calendar_id))
], null);
})(),(function (){var env = env52316;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_overlay_DASH_visible,(function (env52322,_,p__52323){
var map__52324 = p__52323;
var map__52324__$1 = ((((!((map__52324 == null)))?((((map__52324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52324):map__52324);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,cljs.core.cst$kw$calendar_DASH_id);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,cljs.core.cst$kw$visible_QMARK_);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52326 = env52322;
var map__52326__$1 = ((((!((map__52326 == null)))?((((map__52326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52326):map__52326);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52326__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52326,map__52326__$1,state,map__52324,map__52324__$1,calendar_id,visible_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_overlay_visible_impl,visible_QMARK_);
});})(map__52326,map__52326__$1,state,map__52324,map__52324__$1,calendar_id,visible_QMARK_))
], null);
})(),(function (){var env = env52322;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_overlay,(function (env52328,_,p__52329){
var map__52330 = p__52329;
var map__52330__$1 = ((((!((map__52330 == null)))?((((map__52330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52330):map__52330);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52330__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52332 = env52328;
var map__52332__$1 = ((((!((map__52332 == null)))?((((map__52332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52332):map__52332);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52332__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52332,map__52332__$1,state,map__52330,map__52330__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_overlay_visible_impl,false);
});})(map__52332,map__52332__$1,state,map__52330,map__52330__$1,calendar_id))
], null);
})(),(function (){var env = env52328;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_close_DASH_all_DASH_overlays,(function (env52334,_,params_ignored){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52335 = env52334;
var map__52335__$1 = ((((!((map__52335 == null)))?((((map__52335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52335):map__52335);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52335__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52335,map__52335__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,untangled.ui.calendar.close_all_overlays_impl);
});})(map__52335,map__52335__$1,state))
], null);
})(),(function (){var env = env52334;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_month,(function (env52337,_,p__52338){
var map__52339 = p__52338;
var map__52339__$1 = ((((!((map__52339 == null)))?((((map__52339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52339):map__52339);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52339__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52341 = env52337;
var map__52341__$1 = ((((!((map__52341 == null)))?((((map__52341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52341):map__52341);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52341__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52341,map__52341__$1,state,map__52339,map__52339__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.next_month_impl);
});})(map__52341,map__52341__$1,state,map__52339,map__52339__$1,calendar_id))
], null);
})(),(function (){var env = env52337;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_month,(function (env52343,_,p__52344){
var map__52345 = p__52344;
var map__52345__$1 = ((((!((map__52345 == null)))?((((map__52345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52345):map__52345);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52345__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52347 = env52343;
var map__52347__$1 = ((((!((map__52347 == null)))?((((map__52347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52347):map__52347);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52347__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52347,map__52347__$1,state,map__52345,map__52345__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.prior_month_impl);
});})(map__52347,map__52347__$1,state,map__52345,map__52345__$1,calendar_id))
], null);
})(),(function (){var env = env52343;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_year,(function (env52349,_,p__52350){
var map__52351 = p__52350;
var map__52351__$1 = ((((!((map__52351 == null)))?((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52351):map__52351);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52353 = env52349;
var map__52353__$1 = ((((!((map__52353 == null)))?((((map__52353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52353):map__52353);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52353__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52353,map__52353__$1,state,map__52351,map__52351__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.prior_year_impl);
});})(map__52353,map__52353__$1,state,map__52351,map__52351__$1,calendar_id))
], null);
})(),(function (){var env = env52349;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_year,(function (env52355,_,p__52356){
var map__52357 = p__52356;
var map__52357__$1 = ((((!((map__52357 == null)))?((((map__52357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52357):map__52357);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52357__$1,cljs.core.cst$kw$calendar_DASH_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52359 = env52355;
var map__52359__$1 = ((((!((map__52359 == null)))?((((map__52359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52359):map__52359);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52359__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52359,map__52359__$1,state,map__52357,map__52357__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.next_year_impl);
});})(map__52359,map__52359__$1,state,map__52357,map__52357__$1,calendar_id))
], null);
})(),(function (){var env = env52355;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date,(function (env52361,_,p__52362){
var map__52363 = p__52362;
var map__52363__$1 = ((((!((map__52363 == null)))?((((map__52363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52363):map__52363);
var calendar_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52363__$1,cljs.core.cst$kw$calendar_DASH_id);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52363__$1,cljs.core.cst$kw$date);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52365 = env52361;
var map__52365__$1 = ((((!((map__52365 == null)))?((((map__52365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52365):map__52365);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52365__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52365,map__52365__$1,state,map__52363,map__52363__$1,calendar_id,date){
return (function (){
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4(state,untangled.ui.calendar.calendar_ident(calendar_id),untangled.ui.calendar.set_date_impl,date);
});})(map__52365,map__52365__$1,state,map__52363,map__52363__$1,calendar_id,date))
], null);
})(),(function (){var env = env52361;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
untangled.ui.calendar.calendar_toolbar = (function untangled$ui$calendar$calendar_toolbar(this$){
var map__52369 = om.next.props(this$);
var map__52369__$1 = ((((!((map__52369 == null)))?((((map__52369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52369):map__52369);
var calendar = map__52369__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,cljs.core.cst$kw$calendar_SLASH_id);
var overlay_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_);
return om.dom.header.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__control"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Last Month", "onClick": ((function (map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_prior_DASH_month),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$keyboard_arrow_left)], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "current", "onClick": ((function (map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_overlay_DASH_visible),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$calendar_DASH_id,id,cljs.core.cst$kw$visible_QMARK_,cljs.core.not(overlay_visible_QMARK_)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.ui.calendar.displayed_date(calendar)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Today", "onClick": ((function (map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_set_DASH_date),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$date,untangled.ui.calendar.date.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$today)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-button c-button--icon", "type": "button", "title": "Next Month", "onClick": ((function (map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$calendar_SLASH_next_DASH_month),(function (){var x__8436__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calendar_DASH_id,id], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});})(map__52369,map__52369__$1,calendar,id,overlay_visible_QMARK_))
}),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$keyboard_arrow_right)], 0))], 0));
});
untangled.ui.calendar.days_of_week_labels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [trc("Abbrev for sunday","Su"),trc("Abbrev for monday","M"),trc("Abbrev for tuesday","Tu"),trc("Abbrev for wednesday","W"),trc("Abbrev for thursday","Th"),trc("Abbrev for friday","F"),trc("Abbrev for saturday","Sa")], null);
untangled.ui.calendar.calendar_month_view = (function untangled$ui$calendar$calendar_month_view(this$){
var map__52427 = om.next.props(this$);
var map__52427__$1 = ((((!((map__52427 == null)))?((((map__52427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52427):map__52427);
var calendar = map__52427__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52427__$1,cljs.core.cst$kw$calendar_SLASH_id);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52427__$1,cljs.core.cst$kw$calendar_SLASH_weeks);
var map__52428 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__52428__$1 = ((((!((map__52428 == null)))?((((map__52428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52428):map__52428);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52428__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var onDateSelected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52428__$1,cljs.core.cst$kw$onDateSelected);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__month"}),cljs.core.array_seq([om.dom.table.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"className": "c-calendar__week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__52431(s__52432){
return (new cljs.core.LazySeq(null,((function (map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function (){
var s__52432__$1 = s__52432;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__52432__$1);
if(temp__6753__auto__){
var s__52432__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52432__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__52432__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__52434 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__52433 = (0);
while(true){
if((i__52433 < size__8363__auto__)){
var label = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__52433);
cljs.core.chunk_append(b__52434,om.dom.th.cljs$core$IFn$_invoke$arity$variadic(({"key": label, "className": "o-day-name"}),cljs.core.array_seq([tr(label)], 0)));

var G__52483 = (i__52433 + (1));
i__52433 = G__52483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52434),untangled$ui$calendar$calendar_month_view_$_iter__52431(cljs.core.chunk_rest(s__52432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52434),null);
}
} else {
var label = cljs.core.first(s__52432__$2);
return cljs.core.cons(om.dom.th.cljs$core$IFn$_invoke$arity$variadic(({"key": label, "className": "o-day-name"}),cljs.core.array_seq([tr(label)], 0)),untangled$ui$calendar$calendar_month_view_$_iter__52431(cljs.core.rest(s__52432__$2)));
}
} else {
return null;
}
break;
}
});})(map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
,null,null));
});})(map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
;
return iter__8364__auto__(untangled.ui.calendar.days_of_week_labels);
})()], 0)),(function (){var iter__8364__auto__ = ((function (map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__52437(s__52438){
return (new cljs.core.LazySeq(null,((function (map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function (){
var s__52438__$1 = s__52438;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__52438__$1);
if(temp__6753__auto__){
var s__52438__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52438__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__52438__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__52440 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__52439 = (0);
while(true){
if((i__52439 < size__8363__auto__)){
var week = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__52439);
cljs.core.chunk_append(b__52440,om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"key": cljs.core.first(week).toUTCString(), "className": "week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (i__52439,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52463(s__52464){
return (new cljs.core.LazySeq(null,((function (i__52439,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function (){
var s__52464__$1 = s__52464;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__52464__$1);
if(temp__6753__auto____$1){
var s__52464__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52464__$2)){
var c__8362__auto____$1 = cljs.core.chunk_first(s__52464__$2);
var size__8363__auto____$1 = cljs.core.count(c__8362__auto____$1);
var b__52466 = cljs.core.chunk_buffer(size__8363__auto____$1);
if((function (){var i__52465 = (0);
while(true){
if((i__52465 < size__8363__auto____$1)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto____$1,i__52465);
cljs.core.chunk_append(b__52466,om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__52471 = "c-calendar__day";
var G__52471__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52471),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__52471);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52471__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__52471__$1;
}
})(), "onClick": ((function (i__52465,i__52439,day,c__8362__auto____$1,size__8363__auto____$1,b__52466,s__52464__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
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
});})(i__52465,i__52439,day,c__8362__auto____$1,size__8363__auto____$1,b__52466,s__52464__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)));

var G__52484 = (i__52465 + (1));
i__52465 = G__52484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52466),untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52463(cljs.core.chunk_rest(s__52464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52466),null);
}
} else {
var day = cljs.core.first(s__52464__$2);
return cljs.core.cons(om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__52472 = "c-calendar__day";
var G__52472__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52472),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__52472);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52472__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__52472__$1;
}
})(), "onClick": ((function (i__52439,day,s__52464__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
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
});})(i__52439,day,s__52464__$2,temp__6753__auto____$1,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)),untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52463(cljs.core.rest(s__52464__$2)));
}
} else {
return null;
}
break;
}
});})(i__52439,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
,null,null));
});})(i__52439,week,c__8362__auto__,size__8363__auto__,b__52440,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
;
return iter__8364__auto__(week);
})()], 0)));

var G__52485 = (i__52439 + (1));
i__52439 = G__52485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52440),untangled$ui$calendar$calendar_month_view_$_iter__52437(cljs.core.chunk_rest(s__52438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52440),null);
}
} else {
var week = cljs.core.first(s__52438__$2);
return cljs.core.cons(om.dom.tr.cljs$core$IFn$_invoke$arity$variadic(({"key": cljs.core.first(week).toUTCString(), "className": "week"}),cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52473(s__52474){
return (new cljs.core.LazySeq(null,((function (week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
return (function (){
var s__52474__$1 = s__52474;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__52474__$1);
if(temp__6753__auto____$1){
var s__52474__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52474__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__52474__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__52476 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__52475 = (0);
while(true){
if((i__52475 < size__8363__auto__)){
var day = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__52475);
cljs.core.chunk_append(b__52476,om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__52481 = "c-calendar__day";
var G__52481__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52481),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__52481);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52481__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__52481__$1;
}
})(), "onClick": ((function (i__52475,day,c__8362__auto__,size__8363__auto__,b__52476,s__52474__$2,temp__6753__auto____$1,week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
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
});})(i__52475,day,c__8362__auto__,size__8363__auto__,b__52476,s__52474__$2,temp__6753__auto____$1,week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)));

var G__52486 = (i__52475 + (1));
i__52475 = G__52486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52476),untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52473(cljs.core.chunk_rest(s__52474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52476),null);
}
} else {
var day = cljs.core.first(s__52474__$2);
return cljs.core.cons(om.dom.td.cljs$core$IFn$_invoke$arity$variadic(({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__52482 = "c-calendar__day";
var G__52482__$1 = ((cljs.core.not(untangled.ui.calendar.in_month_QMARK_(calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52482),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__52482);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_(calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52482__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__52482__$1;
}
})(), "onClick": ((function (day,s__52474__$2,temp__6753__auto____$1,week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected){
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
});})(day,s__52474__$2,temp__6753__auto____$1,week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
}),cljs.core.array_seq([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([day.getDate()], 0))], 0)),untangled$ui$calendar$calendar_month_view_$_iter__52437_$_iter__52473(cljs.core.rest(s__52474__$2)));
}
} else {
return null;
}
break;
}
});})(week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
,null,null));
});})(week,s__52438__$2,temp__6753__auto__,map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
;
return iter__8364__auto__(week);
})()], 0)),untangled$ui$calendar$calendar_month_view_$_iter__52437(cljs.core.rest(s__52438__$2)));
}
} else {
return null;
}
break;
}
});})(map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
,null,null));
});})(map__52427,map__52427__$1,calendar,id,weeks,map__52428,map__52428__$1,refresh,onDateSelected))
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

var x52491_52518 = untangled.ui.calendar.Calendar.prototype;
x52491_52518.componentWillUpdate = ((function (x52491_52518){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52519 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52520 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52519,next_ident__10196__auto___52520)){
var idxr__10197__auto___52521 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52521 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52521),((function (idxr__10197__auto___52521,ident__10195__auto___52519,next_ident__10196__auto___52520,this__10191__auto__,x52491_52518){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52519], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52520], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52521,ident__10195__auto___52519,next_ident__10196__auto___52520,this__10191__auto__,x52491_52518))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52491_52518))
;

x52491_52518.shouldComponentUpdate = ((function (x52491_52518){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52493 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52493);
} else {
return G__52493;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52498 = this__10191__auto__.state;
var G__52499 = "omcljs$state";
return goog.object.get(G__52498,G__52499);
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
});})(x52491_52518))
;

x52491_52518.componentWillUnmount = ((function (x52491_52518){
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
});})(x52491_52518))
;

x52491_52518.componentDidUpdate = ((function (x52491_52518){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52491_52518))
;

x52491_52518.isMounted = ((function (x52491_52518){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52491_52518))
;

x52491_52518.componentWillMount = ((function (x52491_52518){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52491_52518))
;

x52491_52518.render = ((function (x52491_52518){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52500 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52501 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52502 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52503 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52504 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": ""}),cljs.core.array_seq([(function (){var map__52505 = om.next.props(this$);
var map__52505__$1 = ((((!((map__52505 == null)))?((((map__52505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52505):map__52505);
var calendar = map__52505__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,cljs.core.cst$kw$calendar_SLASH_id);
var overlay_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52505__$1,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_);
var map__52506 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__52506__$1 = ((((!((map__52506 == null)))?((((map__52506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52506):map__52506);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52506__$1,cljs.core.cst$kw$align,cljs.core.cst$kw$bottom_DASH_left_DASH_edge);
var overlay_trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52506__$1,cljs.core.cst$kw$overlay_DASH_trigger);
var up_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top_DASH_left_DASH_edge,null,cljs.core.cst$kw$top_DASH_right_DASH_edge,null], null), null).call(null,align);
var toggle = ((function (map__52505,map__52505__$1,calendar,id,overlay_visible_QMARK_,map__52506,map__52506__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_52500,_STAR_depth_STAR_52501,_STAR_shared_STAR_52502,_STAR_instrument_STAR_52503,_STAR_parent_STAR_52504,this$,this__10190__auto__,x52491_52518){
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
});})(map__52505,map__52505__$1,calendar,id,overlay_visible_QMARK_,map__52506,map__52506__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_52500,_STAR_depth_STAR_52501,_STAR_shared_STAR_52502,_STAR_instrument_STAR_52503,_STAR_parent_STAR_52504,this$,this__10190__auto__,x52491_52518))
;
var alignment_class = (cljs.core.truth_(overlay_trigger)?(function (){var G__52509 = (((align instanceof cljs.core.Keyword))?align.fqn:null);
switch (G__52509) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52504;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52503;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52502;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52501;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52500;
}});})(x52491_52518))
;


untangled.ui.calendar.Calendar.prototype.constructor = untangled.ui.calendar.Calendar;

untangled.ui.calendar.Calendar.prototype.constructor.displayName = "untangled.ui.calendar/Calendar";

untangled.ui.calendar.Calendar.prototype.om$isComponent = true;

var x52510_52523 = untangled.ui.calendar.Calendar;
/** @nocollapse */
x52510_52523.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52510_52523.om$next$IQuery$query$arity$1 = ((function (x52510_52523){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$calendar_SLASH_id,cljs.core.cst$kw$calendar_SLASH_month,cljs.core.cst$kw$calendar_SLASH_day,cljs.core.cst$kw$calendar_SLASH_year,cljs.core.cst$kw$calendar_SLASH_weeks,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_], null);
});})(x52510_52523))
;

/** @nocollapse */
x52510_52523.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52510_52523.om$next$Ident$ident$arity$2 = ((function (x52510_52523){
return (function (this$,p__52511){
var map__52512 = p__52511;
var map__52512__$1 = ((((!((map__52512 == null)))?((((map__52512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52512):map__52512);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512__$1,cljs.core.cst$kw$calendar_SLASH_id);
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident(id);
});})(x52510_52523))
;


var x52514_52524 = untangled.ui.calendar.Calendar.prototype;

x52514_52524.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52514_52524.om$next$IQuery$query$arity$1 = ((function (x52514_52524){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$calendar_SLASH_id,cljs.core.cst$kw$calendar_SLASH_month,cljs.core.cst$kw$calendar_SLASH_day,cljs.core.cst$kw$calendar_SLASH_year,cljs.core.cst$kw$calendar_SLASH_weeks,cljs.core.cst$kw$calendar_SLASH_overlay_DASH_visible_QMARK_], null);
});})(x52514_52524))
;


x52514_52524.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52514_52524.om$next$Ident$ident$arity$2 = ((function (x52514_52524){
return (function (this$,p__52515){
var map__52516 = p__52515;
var map__52516__$1 = ((((!((map__52516 == null)))?((((map__52516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52516):map__52516);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,cljs.core.cst$kw$calendar_SLASH_id);
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident(id);
});})(x52514_52524))
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
var len__8723__auto___52531 = arguments.length;
var i__8724__auto___52532 = (0);
while(true){
if((i__8724__auto___52532 < len__8723__auto___52531)){
args__8730__auto__.push((arguments[i__8724__auto___52532]));

var G__52533 = (i__8724__auto___52532 + (1));
i__8724__auto___52532 = G__52533;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic = (function (props,p__52527){
var map__52528 = p__52527;
var map__52528__$1 = ((((!((map__52528 == null)))?((((map__52528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52528):map__52528);
var opts = map__52528__$1;
var onDateSelected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,cljs.core.cst$kw$onDateSelected);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,cljs.core.cst$kw$refresh);
var overlay_trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,cljs.core.cst$kw$overlay_DASH_trigger);
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,cljs.core.cst$kw$align);
var G__52530 = om.next.computed(props,opts);
return (untangled.ui.calendar.ui_calendar_factory.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.calendar.ui_calendar_factory.cljs$core$IFn$_invoke$arity$1(G__52530) : untangled.ui.calendar.ui_calendar_factory.call(null,G__52530));
});

untangled.ui.calendar.ui_calendar.cljs$lang$maxFixedArity = (1);

untangled.ui.calendar.ui_calendar.cljs$lang$applyTo = (function (seq52525){
var G__52526 = cljs.core.first(seq52525);
var seq52525__$1 = cljs.core.next(seq52525);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(G__52526,seq52525__$1);
});


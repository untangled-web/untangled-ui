// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.calendar');
goog.require('cljs.core');
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
untangled.ui.calendar.table_name = new cljs.core.Keyword("untangled.ui.calendar","by-id","untangled.ui.calendar/by-id",1308247373);
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
var args704515 = [];
var len__28871__auto___704518 = arguments.length;
var i__28872__auto___704519 = (0);
while(true){
if((i__28872__auto___704519 < len__28871__auto___704518)){
args704515.push((arguments[i__28872__auto___704519]));

var G__704522 = (i__28872__auto___704519 + (1));
i__28872__auto___704519 = G__704522;
continue;
} else {
}
break;
}

var G__704517 = args704515.length;
switch (G__704517) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704515.length)].join('')));

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
return untangled.ui.calendar.date.call(null,dt,(- untangled.ui.calendar.ms_in_a_day));
});
var next_day = (function untangled$ui$calendar$weeks_of_interest_$_next_day(dt){
return untangled.ui.calendar.date.call(null,dt,untangled.ui.calendar.ms_in_a_day);
});
var zero_based_month = (month - (1));
var first_day_of_month = untangled.ui.calendar.date.call(null,year,zero_based_month,(1));
var all_prior_days = cljs.core.iterate.call(null,prior_day,first_day_of_month);
var prior_sunday = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (zero_based_month,first_day_of_month,all_prior_days){
return (function (p1__704531_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__704531_SHARP_.getDay());
});})(zero_based_month,first_day_of_month,all_prior_days))
,all_prior_days));
var all_weeks_from_prior_sunday = cljs.core.partition.call(null,(7),cljs.core.iterate.call(null,next_day,prior_sunday));
var contains_this_month_QMARK_ = ((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (week){
return cljs.core.some.call(null,((function (zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday){
return (function (p1__704532_SHARP_){
return cljs.core._EQ_.call(null,zero_based_month,p1__704532_SHARP_.getMonth());
});})(zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday))
,week);
});})(zero_based_month,first_day_of_month,all_prior_days,prior_sunday,all_weeks_from_prior_sunday))
;
var all_weeks_from_starting_sunday = cljs.core.drop_while.call(null,cljs.core.comp.call(null,cljs.core.not,contains_this_month_QMARK_),all_weeks_from_prior_sunday);
return cljs.core.take_while.call(null,contains_this_month_QMARK_,all_weeks_from_starting_sunday);
});
/**
 * Create a calendar with the given ID and date (as a JS date object). Note that label will be passed through the untangled
 *   i18n `tr-unsafe`, so you should do something to ensure that label is extracted if you are supporting more than one locale.
 */
untangled.ui.calendar.calendar = (function untangled$ui$calendar$calendar(var_args){
var args704563 = [];
var len__28871__auto___704575 = arguments.length;
var i__28872__auto___704576 = (0);
while(true){
if((i__28872__auto___704576 < len__28871__auto___704575)){
args704563.push((arguments[i__28872__auto___704576]));

var G__704577 = (i__28872__auto___704576 + (1));
i__28872__auto___704576 = G__704577;
continue;
} else {
}
break;
}

var G__704574 = args704563.length;
switch (G__704574) {
case 1:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args704563.length)].join('')));

}
});

untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$1 = (function (id){
return untangled.ui.calendar.calendar.call(null,id,untangled.ui.calendar.date.call(null));
});

untangled.ui.calendar.calendar.cljs$core$IFn$_invoke$arity$2 = (function (id,starting_js_date){
var month = ((1) + starting_js_date.getMonth());
var day = starting_js_date.getDate();
var year = starting_js_date.getFullYear();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("calendar","id","calendar/id",-652759274),id,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),month,new cljs.core.Keyword("calendar","day","calendar/day",-440542204),day,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),year,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,month,year),new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765),false], null);
});

untangled.ui.calendar.calendar.cljs$lang$maxFixedArity = 2;

/**
 * Is the given date in the calendar's currently selected month?
 */
untangled.ui.calendar.in_month_QMARK_ = (function untangled$ui$calendar$in_month_QMARK_(calendar,jsdt){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559).cljs$core$IFn$_invoke$arity$1(calendar),((1) + jsdt.getMonth()));
});
/**
 * Is the given date the currently selected date of the calendar?
 */
untangled.ui.calendar.selected_day_QMARK_ = (function untangled$ui$calendar$selected_day_QMARK_(calendar,jsdt){
var and__27638__auto__ = untangled.ui.calendar.in_month_QMARK_.call(null,calendar,jsdt);
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("calendar","day","calendar/day",-440542204).cljs$core$IFn$_invoke$arity$1(calendar),jsdt.getDate());
} else {
return and__27638__auto__;
}
});
/**
 * Convert the calendar's currently selected date to a Date object.
 */
untangled.ui.calendar.cal__GT_Date = (function untangled$ui$calendar$cal__GT_Date(p__704607){
var map__704610 = p__704607;
var map__704610__$1 = ((((!((map__704610 == null)))?((((map__704610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704610):map__704610);
var year = cljs.core.get.call(null,map__704610__$1,new cljs.core.Keyword("calendar","year","calendar/year",-312042257));
var month = cljs.core.get.call(null,map__704610__$1,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559));
var day = cljs.core.get.call(null,map__704610__$1,new cljs.core.Keyword("calendar","day","calendar/day",-440542204));
return untangled.ui.calendar.date.call(null,year,(month - (1)),day);
});
/**
 * Give back a calendar's current day setting as an i18n string for the current untangled.i18n locale.
 */
untangled.ui.calendar.displayed_date = (function untangled$ui$calendar$displayed_date(calendar){
return trf("{dt,date}",new cljs.core.Keyword(null,"dt","dt",-368444759),untangled.ui.calendar.cal__GT_Date.call(null,calendar));
});
/**
 * Update a calendar to change the overlay visibility.
 */
untangled.ui.calendar.set_overlay_visible_impl = (function untangled$ui$calendar$set_overlay_visible_impl(calendar,visible_QMARK_){
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765),visible_QMARK_);
});
/**
 * Returns an updated app state with the all calendar overlays closed application-wide.
 */
untangled.ui.calendar.close_all_overlays_impl = (function untangled$ui$calendar$close_all_overlays_impl(state_map){
return cljs.core.reduce.call(null,(function (m,id){
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.calendar.table_name,id,new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765)], null),false);
}),state_map,cljs.core.keys.call(null,cljs.core.get.call(null,state_map,untangled.ui.calendar.table_name)));
});
/**
 * Returns an updated calendar set to the given js/Date object
 */
untangled.ui.calendar.set_date_impl = (function untangled$ui$calendar$set_date_impl(calendar,new_dt){
try{var is_js_date_QMARK_ = cljs.core._EQ_.call(null,Date,cljs.core.type.call(null,new_dt));
var month = ((is_js_date_QMARK_)?((1) + new_dt.getMonth()):new cljs.core.Keyword("calendar","month","calendar/month",-1870129559).cljs$core$IFn$_invoke$arity$1(new_dt));
var day = ((is_js_date_QMARK_)?new_dt.getDate():new cljs.core.Keyword("calendar","day","calendar/day",-440542204).cljs$core$IFn$_invoke$arity$1(new_dt));
var year = ((is_js_date_QMARK_)?new_dt.getFullYear():new cljs.core.Keyword("calendar","year","calendar/year",-312042257).cljs$core$IFn$_invoke$arity$1(new_dt));
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),month,new cljs.core.Keyword("calendar","day","calendar/day",-440542204),day,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),year,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,month,year));
}catch (e704660){var e = e704660;
untangled.client.logging.info.call(null,"Failed to set date: ",e);

return calendar;
}});
/**
 * Returns an updated calendar with the year backed up by one.
 */
untangled.ui.calendar.prior_year_impl = (function untangled$ui$calendar$prior_year_impl(calendar){
var map__704682 = calendar;
var map__704682__$1 = ((((!((map__704682 == null)))?((((map__704682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704682):map__704682);
var month = cljs.core.get.call(null,map__704682__$1,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559));
var year = cljs.core.get.call(null,map__704682__$1,new cljs.core.Keyword("calendar","year","calendar/year",-312042257));
var prior_year = (year - (1));
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),prior_year,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,month,prior_year));
});
/**
 * Returns an updated calendar with the year moved forward by one.
 */
untangled.ui.calendar.next_year_impl = (function untangled$ui$calendar$next_year_impl(calendar){
var map__704686 = calendar;
var map__704686__$1 = ((((!((map__704686 == null)))?((((map__704686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704686):map__704686);
var month = cljs.core.get.call(null,map__704686__$1,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559));
var year = cljs.core.get.call(null,map__704686__$1,new cljs.core.Keyword("calendar","year","calendar/year",-312042257));
var next_year = (year + (1));
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),next_year,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,month,next_year));
});
/**
 * Returns an updated calendar for the prior month.
 */
untangled.ui.calendar.prior_month_impl = (function untangled$ui$calendar$prior_month_impl(calendar){
var map__704694 = calendar;
var map__704694__$1 = ((((!((map__704694 == null)))?((((map__704694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704694):map__704694);
var month = cljs.core.get.call(null,map__704694__$1,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559));
var year = cljs.core.get.call(null,map__704694__$1,new cljs.core.Keyword("calendar","year","calendar/year",-312042257));
var this_month = month;
var prior_month = ((cljs.core._EQ_.call(null,this_month,(1)))?(12):(this_month - (1)));
var this_year = year;
var year__$1 = ((cljs.core._EQ_.call(null,(12),prior_month))?(this_year - (1)):this_year);
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),prior_month,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),year__$1,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,prior_month,year__$1));
});
/**
 * Returns an updated calendar for the next month.
 */
untangled.ui.calendar.next_month_impl = (function untangled$ui$calendar$next_month_impl(calendar){
var map__704711 = calendar;
var map__704711__$1 = ((((!((map__704711 == null)))?((((map__704711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704711):map__704711);
var month = cljs.core.get.call(null,map__704711__$1,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559));
var year = cljs.core.get.call(null,map__704711__$1,new cljs.core.Keyword("calendar","year","calendar/year",-312042257));
var this_month = month;
var next_month = ((cljs.core._EQ_.call(null,this_month,(12)))?(1):((1) + this_month));
var this_year = year;
var year__$1 = ((cljs.core._EQ_.call(null,(1),next_month))?((1) + this_year):this_year);
return cljs.core.assoc.call(null,calendar,new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),next_month,new cljs.core.Keyword("calendar","year","calendar/year",-312042257),year__$1,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),untangled.ui.calendar.weeks_of_interest.call(null,next_month,year__$1));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","toggle-overlay","untangled.ui.calendar/toggle-overlay",-1779458042,null),(function (env704734,_,p__704735){
var map__704736 = p__704735;
var map__704736__$1 = ((((!((map__704736 == null)))?((((map__704736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704736):map__704736);
var calendar_id = cljs.core.get.call(null,map__704736__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704738 = env704734;
var map__704738__$1 = ((((!((map__704738 == null)))?((((map__704738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704738):map__704738);
var state = cljs.core.get.call(null,map__704738__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704738,map__704738__$1,state,map__704736,map__704736__$1,calendar_id){
return (function (){
var ident = untangled.ui.calendar.calendar_ident.call(null,calendar_id);
var calendar = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),ident);
var target_visible_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765).cljs$core$IFn$_invoke$arity$1(calendar));
return cljs.core.swap_BANG_.call(null,state,((function (ident,calendar,target_visible_QMARK_,map__704738,map__704738__$1,state,map__704736,map__704736__$1,calendar_id){
return (function (state_map){
return untangled.ui.state.evolve.call(null,untangled.ui.calendar.close_all_overlays_impl.call(null,state_map),ident,untangled.ui.calendar.set_overlay_visible_impl,target_visible_QMARK_);
});})(ident,calendar,target_visible_QMARK_,map__704738,map__704738__$1,state,map__704736,map__704736__$1,calendar_id))
);
});})(map__704738,map__704738__$1,state,map__704736,map__704736__$1,calendar_id))
], null);
})(),(function (){var env = env704734;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","set-overlay-visible","untangled.ui.calendar/set-overlay-visible",1873026378,null),(function (env704791,_,p__704792){
var map__704793 = p__704792;
var map__704793__$1 = ((((!((map__704793 == null)))?((((map__704793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704793):map__704793);
var calendar_id = cljs.core.get.call(null,map__704793__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
var visible_QMARK_ = cljs.core.get.call(null,map__704793__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return cljs.core.merge.call(null,(function (){var map__704796 = env704791;
var map__704796__$1 = ((((!((map__704796 == null)))?((((map__704796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704796):map__704796);
var state = cljs.core.get.call(null,map__704796__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704796,map__704796__$1,state,map__704793,map__704793__$1,calendar_id,visible_QMARK_){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.set_overlay_visible_impl,visible_QMARK_);
});})(map__704796,map__704796__$1,state,map__704793,map__704793__$1,calendar_id,visible_QMARK_))
], null);
})(),(function (){var env = env704791;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","close-overlay","untangled.ui.calendar/close-overlay",-137058561,null),(function (env704806,_,p__704808){
var map__704809 = p__704808;
var map__704809__$1 = ((((!((map__704809 == null)))?((((map__704809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704809):map__704809);
var calendar_id = cljs.core.get.call(null,map__704809__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704811 = env704806;
var map__704811__$1 = ((((!((map__704811 == null)))?((((map__704811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704811):map__704811);
var state = cljs.core.get.call(null,map__704811__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704811,map__704811__$1,state,map__704809,map__704809__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.set_overlay_visible_impl,false);
});})(map__704811,map__704811__$1,state,map__704809,map__704809__$1,calendar_id))
], null);
})(),(function (){var env = env704806;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","close-all-overlays","untangled.ui.calendar/close-all-overlays",-1351705602,null),(function (env704821,_,params_ignored){
return cljs.core.merge.call(null,(function (){var map__704822 = env704821;
var map__704822__$1 = ((((!((map__704822 == null)))?((((map__704822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704822):map__704822);
var state = cljs.core.get.call(null,map__704822__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704822,map__704822__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.calendar.close_all_overlays_impl);
});})(map__704822,map__704822__$1,state))
], null);
})(),(function (){var env = env704821;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","next-month","untangled.ui.calendar/next-month",-1290437497,null),(function (env704825,_,p__704826){
var map__704827 = p__704826;
var map__704827__$1 = ((((!((map__704827 == null)))?((((map__704827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704827):map__704827);
var calendar_id = cljs.core.get.call(null,map__704827__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704829 = env704825;
var map__704829__$1 = ((((!((map__704829 == null)))?((((map__704829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704829):map__704829);
var state = cljs.core.get.call(null,map__704829__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704829,map__704829__$1,state,map__704827,map__704827__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.next_month_impl);
});})(map__704829,map__704829__$1,state,map__704827,map__704827__$1,calendar_id))
], null);
})(),(function (){var env = env704825;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","prior-month","untangled.ui.calendar/prior-month",-683905771,null),(function (env704856,_,p__704857){
var map__704858 = p__704857;
var map__704858__$1 = ((((!((map__704858 == null)))?((((map__704858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704858):map__704858);
var calendar_id = cljs.core.get.call(null,map__704858__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704860 = env704856;
var map__704860__$1 = ((((!((map__704860 == null)))?((((map__704860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704860):map__704860);
var state = cljs.core.get.call(null,map__704860__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704860,map__704860__$1,state,map__704858,map__704858__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.prior_month_impl);
});})(map__704860,map__704860__$1,state,map__704858,map__704858__$1,calendar_id))
], null);
})(),(function (){var env = env704856;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","prior-year","untangled.ui.calendar/prior-year",-1377200827,null),(function (env704881,_,p__704882){
var map__704883 = p__704882;
var map__704883__$1 = ((((!((map__704883 == null)))?((((map__704883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704883):map__704883);
var calendar_id = cljs.core.get.call(null,map__704883__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704885 = env704881;
var map__704885__$1 = ((((!((map__704885 == null)))?((((map__704885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704885):map__704885);
var state = cljs.core.get.call(null,map__704885__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704885,map__704885__$1,state,map__704883,map__704883__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.prior_year_impl);
});})(map__704885,map__704885__$1,state,map__704883,map__704883__$1,calendar_id))
], null);
})(),(function (){var env = env704881;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","next-year","untangled.ui.calendar/next-year",-922981285,null),(function (env704896,_,p__704897){
var map__704898 = p__704897;
var map__704898__$1 = ((((!((map__704898 == null)))?((((map__704898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704898):map__704898);
var calendar_id = cljs.core.get.call(null,map__704898__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
return cljs.core.merge.call(null,(function (){var map__704900 = env704896;
var map__704900__$1 = ((((!((map__704900 == null)))?((((map__704900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704900):map__704900);
var state = cljs.core.get.call(null,map__704900__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704900,map__704900__$1,state,map__704898,map__704898__$1,calendar_id){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.next_year_impl);
});})(map__704900,map__704900__$1,state,map__704898,map__704898__$1,calendar_id))
], null);
})(),(function (){var env = env704896;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null),(function (env704907,_,p__704908){
var map__704909 = p__704908;
var map__704909__$1 = ((((!((map__704909 == null)))?((((map__704909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704909):map__704909);
var calendar_id = cljs.core.get.call(null,map__704909__$1,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326));
var date = cljs.core.get.call(null,map__704909__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.merge.call(null,(function (){var map__704911 = env704907;
var map__704911__$1 = ((((!((map__704911 == null)))?((((map__704911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704911):map__704911);
var state = cljs.core.get.call(null,map__704911__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704911,map__704911__$1,state,map__704909,map__704909__$1,calendar_id,date){
return (function (){
return untangled.ui.state.evolve_BANG_.call(null,state,untangled.ui.calendar.calendar_ident.call(null,calendar_id),untangled.ui.calendar.set_date_impl,date);
});})(map__704911,map__704911__$1,state,map__704909,map__704909__$1,calendar_id,date))
], null);
})(),(function (){var env = env704907;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
untangled.ui.calendar.calendar_toolbar = (function untangled$ui$calendar$calendar_toolbar(this$){
var map__704934 = om.next.props.call(null,this$);
var map__704934__$1 = ((((!((map__704934 == null)))?((((map__704934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704934):map__704934);
var calendar = map__704934__$1;
var id = cljs.core.get.call(null,map__704934__$1,new cljs.core.Keyword("calendar","id","calendar/id",-652759274));
var overlay_visible_QMARK_ = cljs.core.get.call(null,map__704934__$1,new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765));
return om.dom.header.call(null,({"className": "c-calendar__control"}),om.dom.button.call(null,({"className": "c-button c-button--icon", "type": "button", "title": "Last Month", "onClick": ((function (map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","prior-month","untangled.ui.calendar/prior-month",-683905771,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_))
}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"keyboard_arrow_left","keyboard_arrow_left",-1967046806))),om.dom.span.call(null,({"className": "current", "onClick": ((function (map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-overlay-visible","untangled.ui.calendar/set-overlay-visible",1873026378,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.not.call(null,overlay_visible_QMARK_)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_))
}),untangled.ui.calendar.displayed_date.call(null,calendar)),om.dom.button.call(null,({"className": "c-button c-button--icon", "type": "button", "title": "Today", "onClick": ((function (map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),untangled.ui.calendar.date.call(null),new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_))
}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"today","today",945271563))),om.dom.button.call(null,({"className": "c-button c-button--icon", "type": "button", "title": "Next Month", "onClick": ((function (map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","next-month","untangled.ui.calendar/next-month",-1290437497,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(map__704934,map__704934__$1,calendar,id,overlay_visible_QMARK_))
}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"keyboard_arrow_right","keyboard_arrow_right",-228907623))));
});
untangled.ui.calendar.days_of_week_labels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [trc("Abbrev for sunday","Su"),trc("Abbrev for monday","M"),trc("Abbrev for tuesday","Tu"),trc("Abbrev for wednesday","W"),trc("Abbrev for thursday","Th"),trc("Abbrev for friday","F"),trc("Abbrev for saturday","Sa")], null);
untangled.ui.calendar.calendar_month_view = (function untangled$ui$calendar$calendar_month_view(this$){
var map__705115 = om.next.props.call(null,this$);
var map__705115__$1 = ((((!((map__705115 == null)))?((((map__705115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705115):map__705115);
var calendar = map__705115__$1;
var id = cljs.core.get.call(null,map__705115__$1,new cljs.core.Keyword("calendar","id","calendar/id",-652759274));
var weeks = cljs.core.get.call(null,map__705115__$1,new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521));
var map__705116 = om.next.get_computed.call(null,this$);
var map__705116__$1 = ((((!((map__705116 == null)))?((((map__705116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705116):map__705116);
var refresh = cljs.core.get.call(null,map__705116__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var onDateSelected = cljs.core.get.call(null,map__705116__$1,new cljs.core.Keyword(null,"onDateSelected","onDateSelected",1438028168));
return om.dom.div.call(null,({"className": "c-calendar__month"}),om.dom.table.call(null,null,om.dom.tbody.call(null,null,om.dom.tr.call(null,({"className": "c-calendar__week"}),(function (){var iter__28512__auto__ = ((function (map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__705119(s__705120){
return (new cljs.core.LazySeq(null,((function (map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
var s__705120__$1 = s__705120;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705120__$1);
if(temp__6753__auto__){
var s__705120__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705120__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705120__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705122 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705121 = (0);
while(true){
if((i__705121 < size__28511__auto__)){
var label = cljs.core._nth.call(null,c__28510__auto__,i__705121);
cljs.core.chunk_append.call(null,b__705122,om.dom.th.call(null,({"key": label, "className": "o-day-name"}),tr(label)));

var G__705234 = (i__705121 + (1));
i__705121 = G__705234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705122),untangled$ui$calendar$calendar_month_view_$_iter__705119.call(null,cljs.core.chunk_rest.call(null,s__705120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705122),null);
}
} else {
var label = cljs.core.first.call(null,s__705120__$2);
return cljs.core.cons.call(null,om.dom.th.call(null,({"key": label, "className": "o-day-name"}),tr(label)),untangled$ui$calendar$calendar_month_view_$_iter__705119.call(null,cljs.core.rest.call(null,s__705120__$2)));
}
} else {
return null;
}
break;
}
});})(map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
,null,null));
});})(map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
;
return iter__28512__auto__.call(null,untangled.ui.calendar.days_of_week_labels);
})()),(function (){var iter__28512__auto__ = ((function (map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__705123(s__705124){
return (new cljs.core.LazySeq(null,((function (map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
var s__705124__$1 = s__705124;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705124__$1);
if(temp__6753__auto__){
var s__705124__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705124__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705124__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705126 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705125 = (0);
while(true){
if((i__705125 < size__28511__auto__)){
var week = cljs.core._nth.call(null,c__28510__auto__,i__705125);
cljs.core.chunk_append.call(null,b__705126,om.dom.tr.call(null,({"key": cljs.core.first.call(null,week).toUTCString(), "className": "week"}),(function (){var iter__28512__auto__ = ((function (i__705125,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705180(s__705181){
return (new cljs.core.LazySeq(null,((function (i__705125,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
var s__705181__$1 = s__705181;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__705181__$1);
if(temp__6753__auto____$1){
var s__705181__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705181__$2)){
var c__28510__auto____$1 = cljs.core.chunk_first.call(null,s__705181__$2);
var size__28511__auto____$1 = cljs.core.count.call(null,c__28510__auto____$1);
var b__705183 = cljs.core.chunk_buffer.call(null,size__28511__auto____$1);
if((function (){var i__705182 = (0);
while(true){
if((i__705182 < size__28511__auto____$1)){
var day = cljs.core._nth.call(null,c__28510__auto____$1,i__705182);
cljs.core.chunk_append.call(null,b__705183,om.dom.td.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__705206 = "c-calendar__day";
var G__705206__$1 = ((cljs.core.not.call(null,untangled.ui.calendar.in_month_QMARK_.call(null,calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705206),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__705206);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_.call(null,calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705206__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__705206__$1;
}
})(), "onClick": ((function (i__705182,i__705125,day,c__28510__auto____$1,size__28511__auto____$1,b__705183,s__705181__$2,temp__6753__auto____$1,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"date","date",-1463434462),day], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","close-overlay","untangled.ui.calendar/close-overlay",-137058561,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326)),(function (){var x__28584__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),refresh)))));

if(cljs.core.truth_(onDateSelected)){
return onDateSelected.call(null,day);
} else {
return null;
}
});})(i__705182,i__705125,day,c__28510__auto____$1,size__28511__auto____$1,b__705183,s__705181__$2,temp__6753__auto____$1,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
}),om.dom.p.call(null,null,day.getDate())));

var G__705280 = (i__705182 + (1));
i__705182 = G__705280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705183),untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705180.call(null,cljs.core.chunk_rest.call(null,s__705181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705183),null);
}
} else {
var day = cljs.core.first.call(null,s__705181__$2);
return cljs.core.cons.call(null,om.dom.td.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__705210 = "c-calendar__day";
var G__705210__$1 = ((cljs.core.not.call(null,untangled.ui.calendar.in_month_QMARK_.call(null,calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705210),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__705210);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_.call(null,calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705210__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__705210__$1;
}
})(), "onClick": ((function (i__705125,day,s__705181__$2,temp__6753__auto____$1,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"date","date",-1463434462),day], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","close-overlay","untangled.ui.calendar/close-overlay",-137058561,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326)),(function (){var x__28584__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),refresh)))));

if(cljs.core.truth_(onDateSelected)){
return onDateSelected.call(null,day);
} else {
return null;
}
});})(i__705125,day,s__705181__$2,temp__6753__auto____$1,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
}),om.dom.p.call(null,null,day.getDate())),untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705180.call(null,cljs.core.rest.call(null,s__705181__$2)));
}
} else {
return null;
}
break;
}
});})(i__705125,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
,null,null));
});})(i__705125,week,c__28510__auto__,size__28511__auto__,b__705126,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
;
return iter__28512__auto__.call(null,week);
})()));

var G__705290 = (i__705125 + (1));
i__705125 = G__705290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705126),untangled$ui$calendar$calendar_month_view_$_iter__705123.call(null,cljs.core.chunk_rest.call(null,s__705124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705126),null);
}
} else {
var week = cljs.core.first.call(null,s__705124__$2);
return cljs.core.cons.call(null,om.dom.tr.call(null,({"key": cljs.core.first.call(null,week).toUTCString(), "className": "week"}),(function (){var iter__28512__auto__ = ((function (week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705212(s__705213){
return (new cljs.core.LazySeq(null,((function (week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
var s__705213__$1 = s__705213;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__705213__$1);
if(temp__6753__auto____$1){
var s__705213__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705213__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705213__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705215 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705214 = (0);
while(true){
if((i__705214 < size__28511__auto__)){
var day = cljs.core._nth.call(null,c__28510__auto__,i__705214);
cljs.core.chunk_append.call(null,b__705215,om.dom.td.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__705221 = "c-calendar__day";
var G__705221__$1 = ((cljs.core.not.call(null,untangled.ui.calendar.in_month_QMARK_.call(null,calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705221),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__705221);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_.call(null,calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705221__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__705221__$1;
}
})(), "onClick": ((function (i__705214,day,c__28510__auto__,size__28511__auto__,b__705215,s__705213__$2,temp__6753__auto____$1,week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"date","date",-1463434462),day], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","close-overlay","untangled.ui.calendar/close-overlay",-137058561,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326)),(function (){var x__28584__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),refresh)))));

if(cljs.core.truth_(onDateSelected)){
return onDateSelected.call(null,day);
} else {
return null;
}
});})(i__705214,day,c__28510__auto__,size__28511__auto__,b__705215,s__705213__$2,temp__6753__auto____$1,week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
}),om.dom.p.call(null,null,day.getDate())));

var G__705320 = (i__705214 + (1));
i__705214 = G__705320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705215),untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705212.call(null,cljs.core.chunk_rest.call(null,s__705213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705215),null);
}
} else {
var day = cljs.core.first.call(null,s__705213__$2);
return cljs.core.cons.call(null,om.dom.td.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("d"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getMonth()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day.getDate())].join(''), "className": (function (){var G__705230 = "c-calendar__day";
var G__705230__$1 = ((cljs.core.not.call(null,untangled.ui.calendar.in_month_QMARK_.call(null,calendar,day)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705230),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-inactive")].join(''):G__705230);
if(cljs.core.truth_(untangled.ui.calendar.selected_day_QMARK_.call(null,calendar,day))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__705230__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__705230__$1;
}
})(), "onClick": ((function (day,s__705213__$2,temp__6753__auto____$1,week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected){
return (function (){
om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-date","untangled.ui.calendar/set-date",1412719412,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"date","date",-1463434462),day], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","close-overlay","untangled.ui.calendar/close-overlay",-137058561,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326)),(function (){var x__28584__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),refresh)))));

if(cljs.core.truth_(onDateSelected)){
return onDateSelected.call(null,day);
} else {
return null;
}
});})(day,s__705213__$2,temp__6753__auto____$1,week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
}),om.dom.p.call(null,null,day.getDate())),untangled$ui$calendar$calendar_month_view_$_iter__705123_$_iter__705212.call(null,cljs.core.rest.call(null,s__705213__$2)));
}
} else {
return null;
}
break;
}
});})(week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
,null,null));
});})(week,s__705124__$2,temp__6753__auto__,map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
;
return iter__28512__auto__.call(null,week);
})()),untangled$ui$calendar$calendar_month_view_$_iter__705123.call(null,cljs.core.rest.call(null,s__705124__$2)));
}
} else {
return null;
}
break;
}
});})(map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
,null,null));
});})(map__705115,map__705115__$1,calendar,id,weeks,map__705116,map__705116__$1,refresh,onDateSelected))
;
return iter__28512__auto__.call(null,weeks);
})())));
});
if(typeof untangled.ui.calendar.Calendar !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.calendar.Calendar = (function untangled$ui$calendar$Calendar(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.calendar.Calendar.prototype = goog.object.clone(React.Component.prototype);
}

var x705341_705364 = untangled.ui.calendar.Calendar.prototype;
x705341_705364.componentWillUpdate = ((function (x705341_705364){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705370 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705371 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705370,next_ident__29856__auto___705371)){
var idxr__29857__auto___705374 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705374 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705374),((function (idxr__29857__auto___705374,ident__29855__auto___705370,next_ident__29856__auto___705371,this__29851__auto__,x705341_705364){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705370], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705374,ident__29855__auto___705370,next_ident__29856__auto___705371,this__29851__auto__,x705341_705364))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705341_705364))
;

x705341_705364.shouldComponentUpdate = ((function (x705341_705364){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705343 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705343);
} else {
return G__705343;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x705341_705364))
;

x705341_705364.componentWillUnmount = ((function (x705341_705364){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705341_705364))
;

x705341_705364.componentDidUpdate = ((function (x705341_705364){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705341_705364))
;

x705341_705364.isMounted = ((function (x705341_705364){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705341_705364))
;

x705341_705364.componentWillMount = ((function (x705341_705364){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705341_705364))
;

x705341_705364.render = ((function (x705341_705364){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705344 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705345 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705346 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705347 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705348 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.div.call(null,({"className": ""}),(function (){var map__705349 = om.next.props.call(null,this$);
var map__705349__$1 = ((((!((map__705349 == null)))?((((map__705349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705349):map__705349);
var calendar = map__705349__$1;
var id = cljs.core.get.call(null,map__705349__$1,new cljs.core.Keyword("calendar","id","calendar/id",-652759274));
var overlay_visible_QMARK_ = cljs.core.get.call(null,map__705349__$1,new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765));
var map__705350 = om.next.get_computed.call(null,this$);
var map__705350__$1 = ((((!((map__705350 == null)))?((((map__705350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705350):map__705350);
var align = cljs.core.get.call(null,map__705350__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"bottom-left-edge","bottom-left-edge",-1549014388));
var overlay_trigger = cljs.core.get.call(null,map__705350__$1,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336));
var up_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-left-edge","top-left-edge",-1886153583),null,new cljs.core.Keyword(null,"top-right-edge","top-right-edge",1139337016),null], null), null).call(null,align);
var toggle = ((function (map__705349,map__705349__$1,calendar,id,overlay_visible_QMARK_,map__705350,map__705350__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_705344,_STAR_depth_STAR_705345,_STAR_shared_STAR_705346,_STAR_instrument_STAR_705347,_STAR_parent_STAR_705348,this$,this__29850__auto__,x705341_705364){
return (function (evt){
evt.stopPropagation();

var open_QMARK_ = cljs.core.not.call(null,overlay_visible_QMARK_);
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","close-all-overlays","untangled.ui.calendar/close-all-overlays",-1351705602,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.calendar","set-overlay-visible","untangled.ui.calendar/set-overlay-visible",1873026378,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calendar-id","calendar-id",-1560522326),id,new cljs.core.Keyword(null,"visible?","visible?",2129863715),open_QMARK_], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("calendar","id","calendar/id",-652759274)))))));
});})(map__705349,map__705349__$1,calendar,id,overlay_visible_QMARK_,map__705350,map__705350__$1,align,overlay_trigger,up_QMARK_,_STAR_reconciler_STAR_705344,_STAR_depth_STAR_705345,_STAR_shared_STAR_705346,_STAR_instrument_STAR_705347,_STAR_parent_STAR_705348,this$,this__29850__auto__,x705341_705364))
;
var alignment_class = (cljs.core.truth_(overlay_trigger)?(function (){var G__705353 = (((align instanceof cljs.core.Keyword))?align.fqn:null);
switch (G__705353) {
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
var overlay_rendering = om.dom.div.call(null,({"className": calendar_classes}),untangled.ui.calendar.calendar_toolbar.call(null,this$),untangled.ui.calendar.calendar_month_view.call(null,this$));
if(cljs.core.truth_(overlay_trigger)){
return om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("calendar-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''), "className": "u-wrapper"}),overlay_trigger.call(null,toggle,calendar),(cljs.core.truth_(overlay_visible_QMARK_)?overlay_rendering:null));
} else {
return overlay_rendering;
}
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705348;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705347;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705346;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705345;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705344;
}});})(x705341_705364))
;


untangled.ui.calendar.Calendar.prototype.constructor = untangled.ui.calendar.Calendar;

untangled.ui.calendar.Calendar.prototype.constructor.displayName = "untangled.ui.calendar/Calendar";

untangled.ui.calendar.Calendar.prototype.om$isComponent = true;

var x705354_705412 = untangled.ui.calendar.Calendar;
/** @nocollapse */
x705354_705412.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705354_705412.om$next$IQuery$query$arity$1 = ((function (x705354_705412){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","id","calendar/id",-652759274),new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),new cljs.core.Keyword("calendar","day","calendar/day",-440542204),new cljs.core.Keyword("calendar","year","calendar/year",-312042257),new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765)], null);
});})(x705354_705412))
;

/** @nocollapse */
x705354_705412.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705354_705412.om$next$Ident$ident$arity$2 = ((function (x705354_705412){
return (function (this$,p__705355){
var map__705356 = p__705355;
var map__705356__$1 = ((((!((map__705356 == null)))?((((map__705356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705356):map__705356);
var id = cljs.core.get.call(null,map__705356__$1,new cljs.core.Keyword("calendar","id","calendar/id",-652759274));
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident.call(null,id);
});})(x705354_705412))
;


var x705358_705415 = untangled.ui.calendar.Calendar.prototype;

x705358_705415.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705358_705415.om$next$IQuery$query$arity$1 = ((function (x705358_705415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("calendar","id","calendar/id",-652759274),new cljs.core.Keyword("calendar","month","calendar/month",-1870129559),new cljs.core.Keyword("calendar","day","calendar/day",-440542204),new cljs.core.Keyword("calendar","year","calendar/year",-312042257),new cljs.core.Keyword("calendar","weeks","calendar/weeks",-1894559521),new cljs.core.Keyword("calendar","overlay-visible?","calendar/overlay-visible?",-506636765)], null);
});})(x705358_705415))
;


x705358_705415.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x705358_705415.om$next$Ident$ident$arity$2 = ((function (x705358_705415){
return (function (this$,p__705360){
var map__705361 = p__705360;
var map__705361__$1 = ((((!((map__705361 == null)))?((((map__705361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705361):map__705361);
var id = cljs.core.get.call(null,map__705361__$1,new cljs.core.Keyword("calendar","id","calendar/id",-652759274));
var this$__$1 = this;
return untangled.ui.calendar.calendar_ident.call(null,id);
});})(x705358_705415))
;


untangled.ui.calendar.Calendar.cljs$lang$type = true;

untangled.ui.calendar.Calendar.cljs$lang$ctorStr = "untangled.ui.calendar/Calendar";

untangled.ui.calendar.Calendar.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.calendar/Calendar");
});
untangled.ui.calendar.ui_calendar_factory = om.next.factory.call(null,untangled.ui.calendar.Calendar);
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
var args__28878__auto__ = [];
var len__28871__auto___705434 = arguments.length;
var i__28872__auto___705435 = (0);
while(true){
if((i__28872__auto___705435 < len__28871__auto___705434)){
args__28878__auto__.push((arguments[i__28872__auto___705435]));

var G__705436 = (i__28872__auto___705435 + (1));
i__28872__auto___705435 = G__705436;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic = (function (props,p__705430){
var map__705431 = p__705430;
var map__705431__$1 = ((((!((map__705431 == null)))?((((map__705431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705431):map__705431);
var opts = map__705431__$1;
var onDateSelected = cljs.core.get.call(null,map__705431__$1,new cljs.core.Keyword(null,"onDateSelected","onDateSelected",1438028168));
var refresh = cljs.core.get.call(null,map__705431__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var overlay_trigger = cljs.core.get.call(null,map__705431__$1,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336));
var align = cljs.core.get.call(null,map__705431__$1,new cljs.core.Keyword(null,"align","align",1964212802));
return untangled.ui.calendar.ui_calendar_factory.call(null,om.next.computed.call(null,props,opts));
});

untangled.ui.calendar.ui_calendar.cljs$lang$maxFixedArity = (1);

untangled.ui.calendar.ui_calendar.cljs$lang$applyTo = (function (seq705425){
var G__705426 = cljs.core.first.call(null,seq705425);
var seq705425__$1 = cljs.core.next.call(null,seq705425);
return untangled.ui.calendar.ui_calendar.cljs$core$IFn$_invoke$arity$variadic(G__705426,seq705425__$1);
});


//# sourceMappingURL=calendar.js.map?rel=1489703353843
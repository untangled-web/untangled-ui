// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.calendar_visuals');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.ui.calendar');
goog.require('untangled.i18n');
untangled.ui.calendar_visuals.height = "400px";
untangled.ui.calendar_visuals.offset = "300px";
untangled.ui.calendar_visuals.cal_1 = untangled.ui.calendar.calendar.call(null,new cljs.core.Keyword(null,"cal1","cal1",1753587257),(new Date((1998),(1),(1))));
untangled.ui.calendar_visuals.cal_1_open = untangled.ui.calendar.set_overlay_visible_impl.call(null,untangled.ui.calendar_visuals.cal_1,true);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-no-overlay","calendar-no-overlay",-239303679)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-no-overlay",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This is how the calendar widget looks without the overlay showing",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3 u-push--4"}),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),(function (t,cal){
return om.dom.span.call(null,null,"TRIGGER");
})))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-no-overlay-no-trigger","calendar-no-overlay-no-trigger",-1680360885)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-no-overlay-no-trigger",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A calendar with no trigger cannot be hidden.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-overlay-tl","calendar-overlay-tl",-425831731)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-overlay-tl",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"style": ({"marginTop": untangled.ui.calendar_visuals.offset}), "className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3 u-push--4"}),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1_open,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),(function (t,cal){
return om.dom.span.call(null,null,"TRIGGER");
}),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top-left-edge","top-left-edge",-1886153583)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-overlay-tr","calendar-overlay-tr",-2145665406)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-overlay-tr",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"style": ({"marginTop": untangled.ui.calendar_visuals.offset}), "className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3 u-push--4 u-end"}),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1_open,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),(function (t,cal){
return om.dom.span.call(null,null,"TRIGGER");
}),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top-right-edge","top-right-edge",1139337016)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-overlay-bl","calendar-overlay-bl",1657731705)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-overlay-bl",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"style": ({"height": untangled.ui.calendar_visuals.height}), "className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3 u-push--4"}),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1_open,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),(function (t,cal){
return om.dom.span.call(null,null,"TRIGGER");
}),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"bottom-left-edge","bottom-left-edge",-1549014388)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"calendar-overlay-br","calendar-overlay-br",-1731662827)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"calendar-overlay-br",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"style": ({"height": untangled.ui.calendar_visuals.height}), "className": "u-row"}),om.dom.div.call(null,({"className": "u-column--3 u-push--4 u-end"}),untangled.ui.calendar.ui_calendar.call(null,untangled.ui.calendar_visuals.cal_1_open,new cljs.core.Keyword(null,"overlay-trigger","overlay-trigger",204144336),(function (t,cal){
return om.dom.span.call(null,null,"TRIGGER");
}),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"bottom-right-edge","bottom-right-edge",1853941038)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.calendar_visuals","untangled.ui.calendar_visuals",-707566658),new cljs.core.Keyword(null,"full-year","full-year",-2081148264)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"full-year",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A full year of calendar overlays.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$calendar_visuals$iter__705488(s__705489){
return (new cljs.core.LazySeq(null,(function (){
var s__705489__$1 = s__705489;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705489__$1);
if(temp__6753__auto__){
var s__705489__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705489__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705489__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705491 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705490 = (0);
while(true){
if((i__705490 < size__28511__auto__)){
var month = cljs.core._nth.call(null,c__28510__auto__,i__705490);
cljs.core.chunk_append.call(null,b__705491,(function (){var d = untangled.ui.calendar.date.call(null,(2012),month,(15));
var cal = untangled.ui.calendar.set_overlay_visible_impl.call(null,untangled.ui.calendar.calendar.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cal-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''),d),true);
return untangled.ui.calendar.ui_calendar.call(null,cal);
})());

var G__705493 = (i__705490 + (1));
i__705490 = G__705493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705491),untangled$ui$calendar_visuals$iter__705488.call(null,cljs.core.chunk_rest.call(null,s__705489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705491),null);
}
} else {
var month = cljs.core.first.call(null,s__705489__$2);
return cljs.core.cons.call(null,(function (){var d = untangled.ui.calendar.date.call(null,(2012),month,(15));
var cal = untangled.ui.calendar.set_overlay_visible_impl.call(null,untangled.ui.calendar.calendar.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cal-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''),d),true);
return untangled.ui.calendar.ui_calendar.call(null,cal);
})(),untangled$ui$calendar_visuals$iter__705488.call(null,cljs.core.rest.call(null,s__705489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,cljs.core.range.call(null,(0),(12)));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=calendar_visuals.js.map?rel=1489703353922
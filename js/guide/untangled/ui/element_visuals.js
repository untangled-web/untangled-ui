// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.element_visuals');
goog.require('cljs.core');
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"avatar-visual-regressions","avatar-visual-regressions",1712219393)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"avatar-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__705529(s__705530){
return (new cljs.core.LazySeq(null,(function (){
var s__705530__$1 = s__705530;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705530__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__705530__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705529_$_iter__705531(s__705532){
return (new cljs.core.LazySeq(null,((function (s__705530__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705532__$1 = s__705532;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__705532__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var kind = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__705532__$1,s__705530__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705529_$_iter__705531_$_iter__705533(s__705534){
return (new cljs.core.LazySeq(null,((function (s__705532__$1,s__705530__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705534__$1 = s__705534;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__705534__$1);
if(temp__6753__auto____$2){
var s__705534__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705534__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705534__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705536 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705535 = (0);
while(true){
if((i__705535 < size__28511__auto__)){
var size = cljs.core._nth.call(null,c__28510__auto__,i__705535);
cljs.core.chunk_append.call(null,b__705536,om.dom.span.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')}),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"size","size",1098693007),size], null),"AV"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"size","size",1098693007),size], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"supervisor_account","supervisor_account",-191133661)))));

var G__705616 = (i__705535 + (1));
i__705535 = G__705616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705536),untangled$ui$element_visuals$iter__705529_$_iter__705531_$_iter__705533.call(null,cljs.core.chunk_rest.call(null,s__705534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705536),null);
}
} else {
var size = cljs.core.first.call(null,s__705534__$2);
return cljs.core.cons.call(null,om.dom.span.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')}),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"size","size",1098693007),size], null),"AV"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"size","size",1098693007),size], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"supervisor_account","supervisor_account",-191133661)))),untangled$ui$element_visuals$iter__705529_$_iter__705531_$_iter__705533.call(null,cljs.core.rest.call(null,s__705534__$2)));
}
} else {
return null;
}
break;
}
});})(s__705532__$1,s__705530__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705532__$1,s__705530__$1,kind,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),new cljs.core.Keyword(null,"huge","huge",1683634816)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705529_$_iter__705531.call(null,cljs.core.rest.call(null,s__705532__$1)));
} else {
var G__705622 = cljs.core.rest.call(null,s__705532__$1);
s__705532__$1 = G__705622;
continue;
}
} else {
return null;
}
break;
}
});})(s__705530__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705530__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705529.call(null,cljs.core.rest.call(null,s__705530__$1)));
} else {
var G__705624 = cljs.core.rest.call(null,s__705530__$1);
s__705530__$1 = G__705624;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"badges-visual-regressions","badges-visual-regressions",15791127)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"badges-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Notifications ",untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,"8")),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Notifications ",untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,"8")),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null),"Notifications ",untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,"5")),untangled.ui.elements.ui_badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"hello"], null),"7"),untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964))),untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"buttons-visual-regression-testing","buttons-visual-regression-testing",864064511)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"buttons-visual-regression-testing",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__705634(s__705635){
return (new cljs.core.LazySeq(null,(function (){
var s__705635__$1 = s__705635;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705635__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var shape = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__705635__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705634_$_iter__705636(s__705637){
return (new cljs.core.LazySeq(null,((function (s__705635__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705637__$1 = s__705637;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__705637__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var color = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__705637__$1,s__705635__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638(s__705639){
return (new cljs.core.LazySeq(null,((function (s__705637__$1,s__705635__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705639__$1 = s__705639;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__705639__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var size = cljs.core.first.call(null,xs__7309__auto____$2);
var iterys__28508__auto__ = ((function (s__705639__$1,s__705637__$1,s__705635__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638_$_iter__705640(s__705641){
return (new cljs.core.LazySeq(null,((function (s__705639__$1,s__705637__$1,s__705635__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705641__$1 = s__705641;
while(true){
var temp__6753__auto____$3 = cljs.core.seq.call(null,s__705641__$1);
if(temp__6753__auto____$3){
var xs__7309__auto____$3 = temp__6753__auto____$3;
var disabled = cljs.core.first.call(null,xs__7309__auto____$3);
var iterys__28508__auto__ = ((function (s__705641__$1,s__705639__$1,s__705637__$1,s__705635__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638_$_iter__705640_$_iter__705642(s__705643){
return (new cljs.core.LazySeq(null,((function (s__705641__$1,s__705639__$1,s__705637__$1,s__705635__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705643__$1 = s__705643;
while(true){
var temp__6753__auto____$4 = cljs.core.seq.call(null,s__705643__$1);
if(temp__6753__auto____$4){
var s__705643__$2 = temp__6753__auto____$4;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705643__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705643__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705645 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705644 = (0);
while(true){
if((i__705644 < size__28511__auto__)){
var active = cljs.core._nth.call(null,c__28510__auto__,i__705644);
cljs.core.chunk_append.call(null,b__705645,untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')));

var G__705806 = (i__705644 + (1));
i__705644 = G__705806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705645),untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638_$_iter__705640_$_iter__705642.call(null,cljs.core.chunk_rest.call(null,s__705643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705645),null);
}
} else {
var active = cljs.core.first.call(null,s__705643__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')),untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638_$_iter__705640_$_iter__705642.call(null,cljs.core.rest.call(null,s__705643__$2)));
}
} else {
return null;
}
break;
}
});})(s__705641__$1,s__705639__$1,s__705637__$1,s__705635__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705641__$1,s__705639__$1,s__705637__$1,s__705635__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638_$_iter__705640.call(null,cljs.core.rest.call(null,s__705641__$1)));
} else {
var G__705807 = cljs.core.rest.call(null,s__705641__$1);
s__705641__$1 = G__705807;
continue;
}
} else {
return null;
}
break;
}
});})(s__705639__$1,s__705637__$1,s__705635__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705639__$1,s__705637__$1,s__705635__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705634_$_iter__705636_$_iter__705638.call(null,cljs.core.rest.call(null,s__705639__$1)));
} else {
var G__705808 = cljs.core.rest.call(null,s__705639__$1);
s__705639__$1 = G__705808;
continue;
}
} else {
return null;
}
break;
}
});})(s__705637__$1,s__705635__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705637__$1,s__705635__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705634_$_iter__705636.call(null,cljs.core.rest.call(null,s__705637__$1)));
} else {
var G__705809 = cljs.core.rest.call(null,s__705637__$1);
s__705637__$1 = G__705809;
continue;
}
} else {
return null;
}
break;
}
});})(s__705635__$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705635__$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705634.call(null,cljs.core.rest.call(null,s__705635__$1)));
} else {
var G__705810 = cljs.core.rest.call(null,s__705635__$1);
s__705635__$1 = G__705810;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"wide","wide",-151772487)], null));
})(),untangled.ui.elements.ui_button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Label",untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887))),untangled.ui.elements.ui_button.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"Label")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"flat-buttons-visual-regression-testing","flat-buttons-visual-regression-testing",-198496942)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"flat-buttons-visual-regression-testing",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__705811(s__705812){
return (new cljs.core.LazySeq(null,(function (){
var s__705812__$1 = s__705812;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__705812__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var shape = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__705812__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705811_$_iter__705813(s__705814){
return (new cljs.core.LazySeq(null,((function (s__705812__$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705814__$1 = s__705814;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__705814__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var color = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__705814__$1,s__705812__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815(s__705816){
return (new cljs.core.LazySeq(null,((function (s__705814__$1,s__705812__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705816__$1 = s__705816;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__705816__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var size = cljs.core.first.call(null,xs__7309__auto____$2);
var iterys__28508__auto__ = ((function (s__705816__$1,s__705814__$1,s__705812__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815_$_iter__705817(s__705818){
return (new cljs.core.LazySeq(null,((function (s__705816__$1,s__705814__$1,s__705812__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705818__$1 = s__705818;
while(true){
var temp__6753__auto____$3 = cljs.core.seq.call(null,s__705818__$1);
if(temp__6753__auto____$3){
var xs__7309__auto____$3 = temp__6753__auto____$3;
var disabled = cljs.core.first.call(null,xs__7309__auto____$3);
var iterys__28508__auto__ = ((function (s__705818__$1,s__705816__$1,s__705814__$1,s__705812__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815_$_iter__705817_$_iter__705819(s__705820){
return (new cljs.core.LazySeq(null,((function (s__705818__$1,s__705816__$1,s__705814__$1,s__705812__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__705820__$1 = s__705820;
while(true){
var temp__6753__auto____$4 = cljs.core.seq.call(null,s__705820__$1);
if(temp__6753__auto____$4){
var s__705820__$2 = temp__6753__auto____$4;
if(cljs.core.chunked_seq_QMARK_.call(null,s__705820__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__705820__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__705822 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__705821 = (0);
while(true){
if((i__705821 < size__28511__auto__)){
var active = cljs.core._nth.call(null,c__28510__auto__,i__705821);
cljs.core.chunk_append.call(null,b__705822,untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-flat-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')));

var G__706046 = (i__705821 + (1));
i__705821 = G__706046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705822),untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815_$_iter__705817_$_iter__705819.call(null,cljs.core.chunk_rest.call(null,s__705820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__705822),null);
}
} else {
var active = cljs.core.first.call(null,s__705820__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-flat-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join('')),untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815_$_iter__705817_$_iter__705819.call(null,cljs.core.rest.call(null,s__705820__$2)));
}
} else {
return null;
}
break;
}
});})(s__705818__$1,s__705816__$1,s__705814__$1,s__705812__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705818__$1,s__705816__$1,s__705814__$1,s__705812__$1,disabled,xs__7309__auto____$3,temp__6753__auto____$3,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815_$_iter__705817.call(null,cljs.core.rest.call(null,s__705818__$1)));
} else {
var G__706057 = cljs.core.rest.call(null,s__705818__$1);
s__705818__$1 = G__706057;
continue;
}
} else {
return null;
}
break;
}
});})(s__705816__$1,s__705814__$1,s__705812__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705816__$1,s__705814__$1,s__705812__$1,size,xs__7309__auto____$2,temp__6753__auto____$2,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705811_$_iter__705813_$_iter__705815.call(null,cljs.core.rest.call(null,s__705816__$1)));
} else {
var G__706065 = cljs.core.rest.call(null,s__705816__$1);
s__705816__$1 = G__706065;
continue;
}
} else {
return null;
}
break;
}
});})(s__705814__$1,s__705812__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705814__$1,s__705812__$1,color,xs__7309__auto____$1,temp__6753__auto____$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705811_$_iter__705813.call(null,cljs.core.rest.call(null,s__705814__$1)));
} else {
var G__706069 = cljs.core.rest.call(null,s__705814__$1);
s__705814__$1 = G__706069;
continue;
}
} else {
return null;
}
break;
}
});})(s__705812__$1,shape,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__705812__$1,shape,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__705811.call(null,cljs.core.rest.call(null,s__705812__$1)));
} else {
var G__706071 = cljs.core.rest.call(null,s__705812__$1);
s__705812__$1 = G__706071;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"wide","wide",-151772487)], null));
})(),untangled.ui.elements.ui_flat_button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Label",untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887))),untangled.ui.elements.ui_flat_button.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"Label")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"circular-buttons-visual-regression-testing","circular-buttons-visual-regression-testing",-1002209694)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"circular-buttons-visual-regression-testing",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__706077(s__706078){
return (new cljs.core.LazySeq(null,(function (){
var s__706078__$1 = s__706078;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706078__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706078__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706077_$_iter__706079(s__706080){
return (new cljs.core.LazySeq(null,((function (s__706078__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706080__$1 = s__706080;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706080__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__706080__$1,s__706078__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706077_$_iter__706079_$_iter__706081(s__706082){
return (new cljs.core.LazySeq(null,((function (s__706080__$1,s__706078__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706082__$1 = s__706082;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__706082__$1);
if(temp__6753__auto____$2){
var xs__7309__auto____$2 = temp__6753__auto____$2;
var disabled = cljs.core.first.call(null,xs__7309__auto____$2);
var iterys__28508__auto__ = ((function (s__706082__$1,s__706080__$1,s__706078__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706077_$_iter__706079_$_iter__706081_$_iter__706083(s__706084){
return (new cljs.core.LazySeq(null,((function (s__706082__$1,s__706080__$1,s__706078__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706084__$1 = s__706084;
while(true){
var temp__6753__auto____$3 = cljs.core.seq.call(null,s__706084__$1);
if(temp__6753__auto____$3){
var s__706084__$2 = temp__6753__auto____$3;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706084__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706084__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706086 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706085 = (0);
while(true){
if((i__706085 < size__28511__auto__)){
var active = cljs.core._nth.call(null,c__28510__auto__,i__706085);
cljs.core.chunk_append.call(null,b__706086,untangled.ui.elements.ui_circular_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join(''),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-circular-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"add","add",235287739))));

var G__706275 = (i__706085 + (1));
i__706085 = G__706275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706086),untangled$ui$element_visuals$iter__706077_$_iter__706079_$_iter__706081_$_iter__706083.call(null,cljs.core.chunk_rest.call(null,s__706084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706086),null);
}
} else {
var active = cljs.core.first.call(null,s__706084__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_circular_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"className","className",-1983287057),"extra",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?"disabled ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active ":null))].join(''),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("btn-circular-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(disabled),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)].join('')], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"add","add",235287739))),untangled$ui$element_visuals$iter__706077_$_iter__706079_$_iter__706081_$_iter__706083.call(null,cljs.core.rest.call(null,s__706084__$2)));
}
} else {
return null;
}
break;
}
});})(s__706082__$1,s__706080__$1,s__706078__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706082__$1,s__706080__$1,s__706078__$1,disabled,xs__7309__auto____$2,temp__6753__auto____$2,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706077_$_iter__706079_$_iter__706081.call(null,cljs.core.rest.call(null,s__706082__$1)));
} else {
var G__706282 = cljs.core.rest.call(null,s__706082__$1);
s__706082__$1 = G__706282;
continue;
}
} else {
return null;
}
break;
}
});})(s__706080__$1,s__706078__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706080__$1,s__706078__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706077_$_iter__706079.call(null,cljs.core.rest.call(null,s__706080__$1)));
} else {
var G__706283 = cljs.core.rest.call(null,s__706080__$1);
s__706080__$1 = G__706283;
continue;
}
} else {
return null;
}
break;
}
});})(s__706078__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706078__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706077.call(null,cljs.core.rest.call(null,s__706078__$1)));
} else {
var G__706284 = cljs.core.rest.call(null,s__706078__$1);
s__706078__$1 = G__706284;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"card-visual-regressions","card-visual-regressions",1531726056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__706286(s__706287){
return (new cljs.core.LazySeq(null,(function (){
var s__706287__$1 = s__706287;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706287__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706287__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706286_$_iter__706288(s__706289){
return (new cljs.core.LazySeq(null,((function (s__706287__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706289__$1 = s__706289;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706289__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__706289__$1,s__706287__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706286_$_iter__706288_$_iter__706290(s__706291){
return (new cljs.core.LazySeq(null,((function (s__706289__$1,s__706287__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706291__$1 = s__706291;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__706291__$1);
if(temp__6753__auto____$2){
var s__706291__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706291__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706291__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706293 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706292 = (0);
while(true){
if((i__706292 < size__28511__auto__)){
var actions = cljs.core._nth.call(null,c__28510__auto__,i__706292);
cljs.core.chunk_append.call(null,b__706293,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))));

var G__706520 = (i__706292 + (1));
i__706292 = G__706520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706293),untangled$ui$element_visuals$iter__706286_$_iter__706288_$_iter__706290.call(null,cljs.core.chunk_rest.call(null,s__706291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706293),null);
}
} else {
var actions = cljs.core.first.call(null,s__706291__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))),untangled$ui$element_visuals$iter__706286_$_iter__706288_$_iter__706290.call(null,cljs.core.rest.call(null,s__706291__$2)));
}
} else {
return null;
}
break;
}
});})(s__706289__$1,s__706287__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706289__$1,s__706287__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Action")], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706286_$_iter__706288.call(null,cljs.core.rest.call(null,s__706289__$1)));
} else {
var G__706522 = cljs.core.rest.call(null,s__706289__$1);
s__706289__$1 = G__706522;
continue;
}
} else {
return null;
}
break;
}
});})(s__706287__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706287__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"wide","wide",-151772487)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706286.call(null,cljs.core.rest.call(null,s__706287__$1)));
} else {
var G__706524 = cljs.core.rest.call(null,s__706287__$1);
s__706287__$1 = G__706524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})(),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__706409(s__706410){
return (new cljs.core.LazySeq(null,(function (){
var s__706410__$1 = s__706410;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706410__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706410__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706409_$_iter__706411(s__706412){
return (new cljs.core.LazySeq(null,((function (s__706410__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706412__$1 = s__706412;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706412__$1);
if(temp__6753__auto____$1){
var s__706412__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706412__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706412__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706414 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706413 = (0);
while(true){
if((i__706413 < size__28511__auto__)){
var image_position = cljs.core._nth.call(null,c__28510__auto__,i__706413);
cljs.core.chunk_append.call(null,b__706414,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))));

var G__706552 = (i__706413 + (1));
i__706413 = G__706552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706414),untangled$ui$element_visuals$iter__706409_$_iter__706411.call(null,cljs.core.chunk_rest.call(null,s__706412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706414),null);
}
} else {
var image_position = cljs.core.first.call(null,s__706412__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))),untangled$ui$element_visuals$iter__706409_$_iter__706411.call(null,cljs.core.rest.call(null,s__706412__$2)));
}
} else {
return null;
}
break;
}
});})(s__706410__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706410__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706409.call(null,cljs.core.rest.call(null,s__706410__$1)));
} else {
var G__706567 = cljs.core.rest.call(null,s__706410__$1);
s__706410__$1 = G__706567;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})()),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(6)], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"media","media",-1066138403),"img/welcome_card.jpg",new cljs.core.Keyword(null,"media-type","media-type",-764436129),new cljs.core.Keyword(null,"image","image",-58725096)], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Media Image")].join(''))))))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"card-bordered-visual-regressions","card-bordered-visual-regressions",-1508225526)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card-bordered-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__706569(s__706570){
return (new cljs.core.LazySeq(null,(function (){
var s__706570__$1 = s__706570;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706570__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706570__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706569_$_iter__706571(s__706572){
return (new cljs.core.LazySeq(null,((function (s__706570__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706572__$1 = s__706572;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706572__$1);
if(temp__6753__auto____$1){
var xs__7309__auto____$1 = temp__6753__auto____$1;
var size = cljs.core.first.call(null,xs__7309__auto____$1);
var iterys__28508__auto__ = ((function (s__706572__$1,s__706570__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706569_$_iter__706571_$_iter__706573(s__706574){
return (new cljs.core.LazySeq(null,((function (s__706572__$1,s__706570__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706574__$1 = s__706574;
while(true){
var temp__6753__auto____$2 = cljs.core.seq.call(null,s__706574__$1);
if(temp__6753__auto____$2){
var s__706574__$2 = temp__6753__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706574__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706574__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706576 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706575 = (0);
while(true){
if((i__706575 < size__28511__auto__)){
var actions = cljs.core._nth.call(null,c__28510__auto__,i__706575);
cljs.core.chunk_append.call(null,b__706576,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))));

var G__706847 = (i__706575 + (1));
i__706575 = G__706847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706576),untangled$ui$element_visuals$iter__706569_$_iter__706571_$_iter__706573.call(null,cljs.core.chunk_rest.call(null,s__706574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706576),null);
}
} else {
var actions = cljs.core.first.call(null,s__706574__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))),untangled$ui$element_visuals$iter__706569_$_iter__706571_$_iter__706573.call(null,cljs.core.rest.call(null,s__706574__$2)));
}
} else {
return null;
}
break;
}
});})(s__706572__$1,s__706570__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706572__$1,s__706570__$1,size,xs__7309__auto____$1,temp__6753__auto____$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Action")], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706569_$_iter__706571.call(null,cljs.core.rest.call(null,s__706572__$1)));
} else {
var G__706926 = cljs.core.rest.call(null,s__706572__$1);
s__706572__$1 = G__706926;
continue;
}
} else {
return null;
}
break;
}
});})(s__706570__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706570__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"wide","wide",-151772487)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706569.call(null,cljs.core.rest.call(null,s__706570__$1)));
} else {
var G__706941 = cljs.core.rest.call(null,s__706570__$1);
s__706570__$1 = G__706941;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})(),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__706725(s__706726){
return (new cljs.core.LazySeq(null,(function (){
var s__706726__$1 = s__706726;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706726__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706726__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__706725_$_iter__706727(s__706728){
return (new cljs.core.LazySeq(null,((function (s__706726__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__706728__$1 = s__706728;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706728__$1);
if(temp__6753__auto____$1){
var s__706728__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706728__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706728__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706730 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706729 = (0);
while(true){
if((i__706729 < size__28511__auto__)){
var image_position = cljs.core._nth.call(null,c__28510__auto__,i__706729);
cljs.core.chunk_append.call(null,b__706730,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))));

var G__707235 = (i__706729 + (1));
i__706729 = G__707235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706730),untangled$ui$element_visuals$iter__706725_$_iter__706727.call(null,cljs.core.chunk_rest.call(null,s__706728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706730),null);
}
} else {
var image_position = cljs.core.first.call(null,s__706728__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))),untangled$ui$element_visuals$iter__706725_$_iter__706727.call(null,cljs.core.rest.call(null,s__706728__$2)));
}
} else {
return null;
}
break;
}
});})(s__706726__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__706726__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__706725.call(null,cljs.core.rest.call(null,s__706726__$1)));
} else {
var G__707259 = cljs.core.rest.call(null,s__706726__$1);
s__706726__$1 = G__707259;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})())),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"card-transparent-visual-regressions","card-transparent-visual-regressions",-1817683204)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card-transparent-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707269(s__707270){
return (new cljs.core.LazySeq(null,(function (){
var s__707270__$1 = s__707270;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707270__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707270__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707269_$_iter__707271(s__707272){
return (new cljs.core.LazySeq(null,((function (s__707270__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707272__$1 = s__707272;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707272__$1);
if(temp__6753__auto____$1){
var s__707272__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707272__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707272__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707274 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707273 = (0);
while(true){
if((i__707273 < size__28511__auto__)){
var actions = cljs.core._nth.call(null,c__28510__auto__,i__707273);
cljs.core.chunk_append.call(null,b__707274,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''))))));

var G__707387 = (i__707273 + (1));
i__707273 = G__707387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707274),untangled$ui$element_visuals$iter__707269_$_iter__707271.call(null,cljs.core.chunk_rest.call(null,s__707272__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707274),null);
}
} else {
var actions = cljs.core.first.call(null,s__707272__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(actions),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''))))),untangled$ui$element_visuals$iter__707269_$_iter__707271.call(null,cljs.core.rest.call(null,s__707272__$2)));
}
} else {
return null;
}
break;
}
});})(s__707270__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707270__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Action")], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707269.call(null,cljs.core.rest.call(null,s__707270__$1)));
} else {
var G__707392 = cljs.core.rest.call(null,s__707270__$1);
s__707270__$1 = G__707392;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})(),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707343(s__707344){
return (new cljs.core.LazySeq(null,(function (){
var s__707344__$1 = s__707344;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707344__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var image = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707344__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707343_$_iter__707345(s__707346){
return (new cljs.core.LazySeq(null,((function (s__707344__$1,image,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707346__$1 = s__707346;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707346__$1);
if(temp__6753__auto____$1){
var s__707346__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707346__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707346__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707348 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707347 = (0);
while(true){
if((i__707347 < size__28511__auto__)){
var image_position = cljs.core._nth.call(null,c__28510__auto__,i__707347);
cljs.core.chunk_append.call(null,b__707348,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))));

var G__707426 = (i__707347 + (1));
i__707347 = G__707426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707348),untangled$ui$element_visuals$iter__707343_$_iter__707345.call(null,cljs.core.chunk_rest.call(null,s__707346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707348),null);
}
} else {
var image_position = cljs.core.first.call(null,s__707346__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"image-position","image-position",-2131640298),image_position], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image)].join('')),om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image position: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''))))),untangled$ui$element_visuals$iter__707343_$_iter__707345.call(null,cljs.core.rest.call(null,s__707346__$2)));
}
} else {
return null;
}
break;
}
});})(s__707344__$1,image,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707344__$1,image,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707343.call(null,cljs.core.rest.call(null,s__707344__$1)));
} else {
var G__707462 = cljs.core.rest.call(null,s__707344__$1);
s__707344__$1 = G__707462;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/bubbles.png","img/welcome_card.jpg"], null));
})())),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"card-square-visual-regressions","card-square-visual-regressions",-1279480015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card-square-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707468(s__707469){
return (new cljs.core.LazySeq(null,(function (){
var s__707469__$1 = s__707469;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707469__$1);
if(temp__6753__auto__){
var s__707469__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707469__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707469__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707471 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707470 = (0);
while(true){
if((i__707470 < size__28511__auto__)){
var size = cljs.core._nth.call(null,c__28510__auto__,i__707470);
cljs.core.chunk_append.call(null,b__707471,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"size","size",1098693007),size], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))));

var G__707492 = (i__707470 + (1));
i__707470 = G__707492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707471),untangled$ui$element_visuals$iter__707468.call(null,cljs.core.chunk_rest.call(null,s__707469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707471),null);
}
} else {
var size = cljs.core.first.call(null,s__707469__$2);
return cljs.core.cons.call(null,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(6),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"title","title",636505583),"Card Test",new cljs.core.Keyword(null,"size","size",1098693007),size], null),om.dom.div.call(null,null,om.dom.p.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''))))),untangled$ui$element_visuals$iter__707468.call(null,cljs.core.rest.call(null,s__707469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"wide","wide",-151772487)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"checkbox-visual-regressions","checkbox-visual-regressions",-659979322)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"checkbox-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,om.dom.div.call(null,null,om.dom.label.call(null,({"className": "is-optional", "style": ({"width": "80px"})}),"Normal "),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-1"], null)),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-3",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-3",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"partial","partial",241141745)], null))),om.dom.div.call(null,null,om.dom.label.call(null,({"className": "is-optional", "style": ({"width": "80px"})}),"Disabled "),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-2",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-3",new cljs.core.Keyword(null,"checked","checked",-50955819),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-4",new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"partial","partial",241141745),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"empty-state-visual-regressions","empty-state-visual-regressions",-548791473)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"empty-state-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,om.dom.h1.call(null,null,"Nothing specified"),untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null),om.dom.div.call(null,null,om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state.call(null,cljs.core.PersistentArrayMap.EMPTY))),om.dom.h1.call(null,null,"Custom specification"),untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null),om.dom.div.call(null,null,om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"widgets","widgets",-159098978),new cljs.core.Keyword(null,"title","title",636505583),"No widgets yet",new cljs.core.Keyword(null,"message","message",-406056002),"Create a widget to get started"], null))))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"field-visual-regressions","field-visual-regressions",549910761)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"field-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707501(s__707502){
return (new cljs.core.LazySeq(null,(function (){
var s__707502__$1 = s__707502;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707502__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var size = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707502__$1,size,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707501_$_iter__707503(s__707504){
return (new cljs.core.LazySeq(null,((function (s__707502__$1,size,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707504__$1 = s__707504;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707504__$1);
if(temp__6753__auto____$1){
var s__707504__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707504__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707504__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707506 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707505 = (0);
while(true){
if((i__707505 < size__28511__auto__)){
var states = cljs.core._nth.call(null,c__28510__auto__,i__707505);
cljs.core.chunk_append.call(null,b__707506,untangled.ui.elements.ui_field.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"state","state",-1988618099),states,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,states)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" field")].join('')));

var G__707536 = (i__707505 + (1));
i__707505 = G__707536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707506),untangled$ui$element_visuals$iter__707501_$_iter__707503.call(null,cljs.core.chunk_rest.call(null,s__707504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707506),null);
}
} else {
var states = cljs.core.first.call(null,s__707504__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_field.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"state","state",-1988618099),states,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,states)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" field")].join('')),untangled$ui$element_visuals$iter__707501_$_iter__707503.call(null,cljs.core.rest.call(null,s__707504__$2)));
}
} else {
return null;
}
break;
}
});})(s__707502__$1,size,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707502__$1,size,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707501.call(null,cljs.core.rest.call(null,s__707502__$1)));
} else {
var G__707544 = cljs.core.rest.call(null,s__707502__$1);
s__707502__$1 = G__707544;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"icon-colors-visual-regressions","icon-colors-visual-regressions",1943494452)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-colors-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"active","active",1895962068)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"icon-sizes-visual-regressions","icon-sizes-visual-regressions",-1550770774)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-sizes-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"icon-bar-visual-regressions","icon-bar-visual-regressions",1468568664)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-bar-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon_bar.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),untangled.ui.elements.ui_icon_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shifting","shifting",-1091369273),true], null),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),om.dom.br.call(null,null),untangled.ui.elements.ui_icon_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"labels-visual-regressions","labels-visual-regressions",224766403)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"labels-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707638(s__707639){
return (new cljs.core.LazySeq(null,(function (){
var s__707639__$1 = s__707639;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707639__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707639__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707638_$_iter__707640(s__707641){
return (new cljs.core.LazySeq(null,((function (s__707639__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707641__$1 = s__707641;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707641__$1);
if(temp__6753__auto____$1){
var s__707641__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707641__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707641__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707643 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707642 = (0);
while(true){
if((i__707642 < size__28511__auto__)){
var icon = cljs.core._nth.call(null,c__28510__auto__,i__707642);
cljs.core.chunk_append.call(null,b__707643,untangled.ui.elements.ui_label.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),icon,"Default"));

var G__707744 = (i__707642 + (1));
i__707642 = G__707744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707643),untangled$ui$element_visuals$iter__707638_$_iter__707640.call(null,cljs.core.chunk_rest.call(null,s__707641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707643),null);
}
} else {
var icon = cljs.core.first.call(null,s__707641__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_label.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(256)))].join('')], null),icon,"Default"),untangled$ui$element_visuals$iter__707638_$_iter__707640.call(null,cljs.core.rest.call(null,s__707641__$2)));
}
} else {
return null;
}
break;
}
});})(s__707639__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707639__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",untangled.icons.icon.call(null,new cljs.core.Keyword(null,"add","add",235287739))], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707638.call(null,cljs.core.rest.call(null,s__707639__$1)));
} else {
var G__707770 = cljs.core.rest.call(null,s__707639__$1);
s__707639__$1 = G__707770;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"loader-visual-regressions","loader-visual-regressions",143544451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"loader-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368)], null),untangled.ui.elements.ui_loader.call(null,cljs.core.PersistentArrayMap.EMPTY)),untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368)], null),untangled.ui.elements.ui_loader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null))),untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"center","center",-748944368)], null),untangled.ui.elements.ui_loader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"messages-visual-regressions","messages-visual-regressions",1556452046)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"messages-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707794(s__707795){
return (new cljs.core.LazySeq(null,(function (){
var s__707795__$1 = s__707795;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707795__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var color = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707795__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707794_$_iter__707796(s__707797){
return (new cljs.core.LazySeq(null,((function (s__707795__$1,color,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707797__$1 = s__707797;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707797__$1);
if(temp__6753__auto____$1){
var s__707797__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707797__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707797__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707799 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707798 = (0);
while(true){
if((i__707798 < size__28511__auto__)){
var class$ = cljs.core._nth.call(null,c__28510__auto__,i__707798);
cljs.core.chunk_append.call(null,b__707799,untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"className","className",-1983287057),class$,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("messages-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,class$))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message.")].join('')));

var G__707809 = (i__707798 + (1));
i__707798 = G__707809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707799),untangled$ui$element_visuals$iter__707794_$_iter__707796.call(null,cljs.core.chunk_rest.call(null,s__707797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707799),null);
}
} else {
var class$ = cljs.core.first.call(null,s__707797__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"className","className",-1983287057),class$,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("messages-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,class$))].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message.")].join('')),untangled$ui$element_visuals$iter__707794_$_iter__707796.call(null,cljs.core.rest.call(null,s__707797__$2)));
}
} else {
return null;
}
break;
}
});})(s__707795__$1,color,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707795__$1,color,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","u-font-size--semi-medium"], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707794.call(null,cljs.core.rest.call(null,s__707795__$1)));
} else {
var G__707815 = cljs.core.rest.call(null,s__707795__$1);
s__707795__$1 = G__707815;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})(),untangled.ui.elements.ui_message.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a message with an icon.")].join(''),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887)], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"modal",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"200",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),om.dom.div.call(null,({}),om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_dialog.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true], null),untangled.ui.elements.ui_dialog_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Informative"),untangled.ui.elements.ui_dialog_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You have been notified."),untangled.ui.elements.ui_dialog_actions.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Cancel"),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Ok")))))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"notifications-visual-regressions","notifications-visual-regressions",-833940519)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"notifications-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__707820(s__707821){
return (new cljs.core.LazySeq(null,(function (){
var s__707821__$1 = s__707821;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__707821__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var kind = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__707821__$1,kind,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__707820_$_iter__707822(s__707823){
return (new cljs.core.LazySeq(null,((function (s__707821__$1,kind,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__707823__$1 = s__707823;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__707823__$1);
if(temp__6753__auto____$1){
var s__707823__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__707823__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__707823__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__707825 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__707824 = (0);
while(true){
if((i__707824 < size__28511__auto__)){
var width = cljs.core._nth.call(null,c__28510__auto__,i__707824);
cljs.core.chunk_append.call(null,b__707825,om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')}),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"width","width",-384071477),width], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,width,new cljs.core.Keyword(null,"wide","wide",-151772487)))?clojure.string.capitalize.call(null,cljs.core.name.call(null,width)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,kind)))].join('')),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"Your message here...")),om.dom.p.call(null,null," ")));

var G__707868 = (i__707824 + (1));
i__707824 = G__707868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707825),untangled$ui$element_visuals$iter__707820_$_iter__707822.call(null,cljs.core.chunk_rest.call(null,s__707823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__707825),null);
}
} else {
var width = cljs.core.first.call(null,s__707823__$2);
return cljs.core.cons.call(null,om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')}),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"width","width",-384071477),width], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,width,new cljs.core.Keyword(null,"wide","wide",-151772487)))?clojure.string.capitalize.call(null,cljs.core.name.call(null,width)):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,kind)))].join('')),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"Your message here...")),om.dom.p.call(null,null," ")),untangled$ui$element_visuals$iter__707820_$_iter__707822.call(null,cljs.core.rest.call(null,s__707823__$2)));
}
} else {
return null;
}
break;
}
});})(s__707821__$1,kind,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__707821__$1,kind,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"wide","wide",-151772487)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__707820.call(null,cljs.core.rest.call(null,s__707821__$1)));
} else {
var G__708018 = cljs.core.rest.call(null,s__707821__$1);
s__707821__$1 = G__708018;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"informative","informative",1852560673),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"error","error",-978969032)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"progress-visual-regressions","progress-visual-regressions",1157535283)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"progress-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_progress.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"u-trailer--half"], null)),(function (){var iter__28512__auto__ = (function untangled$ui$element_visuals$iter__708024(s__708025){
return (new cljs.core.LazySeq(null,(function (){
var s__708025__$1 = s__708025;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__708025__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var value = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__708025__$1,value,xs__7309__auto__,temp__6753__auto__){
return (function untangled$ui$element_visuals$iter__708024_$_iter__708026(s__708027){
return (new cljs.core.LazySeq(null,((function (s__708025__$1,value,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__708027__$1 = s__708027;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__708027__$1);
if(temp__6753__auto____$1){
var s__708027__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__708027__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__708027__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__708029 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__708028 = (0);
while(true){
if((i__708028 < size__28511__auto__)){
var size = cljs.core._nth.call(null,c__28510__auto__,i__708028);
cljs.core.chunk_append.call(null,b__708029,untangled.ui.elements.ui_progress.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"className","className",-1983287057),"u-trailer--half",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)));

var G__708086 = (i__708028 + (1));
i__708028 = G__708086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__708029),untangled$ui$element_visuals$iter__708024_$_iter__708026.call(null,cljs.core.chunk_rest.call(null,s__708027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__708029),null);
}
} else {
var size = cljs.core.first.call(null,s__708027__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_progress.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"className","className",-1983287057),"u-trailer--half",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null)),untangled$ui$element_visuals$iter__708024_$_iter__708026.call(null,cljs.core.rest.call(null,s__708027__$2)));
}
} else {
return null;
}
break;
}
});})(s__708025__$1,value,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__708025__$1,value,xs__7309__auto__,temp__6753__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"dense","dense",-1352835783)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_visuals$iter__708024.call(null,cljs.core.rest.call(null,s__708025__$1)));
} else {
var G__708108 = cljs.core.rest.call(null,s__708025__$1);
s__708025__$1 = G__708108;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(25),(50),(75),(100)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"radio-visual-regressions","radio-visual-regressions",-678582438)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"radio-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-1"], null)),untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-1",new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)),untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-2",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-2",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"checked","checked",-50955819),true], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"switch-visual-regressions","switch-visual-regressions",-646334620)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"switch-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_switch.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"id","id",-1388402092),"switch-1"], null)),untangled.ui.elements.ui_switch.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),true,new cljs.core.Keyword(null,"id","id",-1388402092),"switch-1"], null)),untangled.ui.elements.ui_switch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"id","id",-1388402092),"switch-1",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),untangled.ui.elements.ui_switch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),true,new cljs.core.Keyword(null,"id","id",-1388402092),"switch-1",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_visuals","untangled.ui.element_visuals",-1734134175),new cljs.core.Keyword(null,"tab-visual-regressions","tab-visual-regressions",252634554)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-visual-regressions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs"], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null))),om.dom.div.call(null,({"className": "t-dark"}),untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null))))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=element_visuals.js.map?rel=1489703355391
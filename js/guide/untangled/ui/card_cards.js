// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.card_cards');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('devcards.util.utils');
goog.require('untangled.ui.sample_card');
goog.require('om.dom');
goog.require('untangled.ui.elements');
goog.require('untangled.client.core');
goog.require('untangled.ui.menu');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Card\n\n   A card component applies styling to ui elements that represent a paper card\n\n  ```\n    (ele/ui-card {:title \"Some Title\"\n                  :type  :bordered\n                      or :transparent\n                      or :square\n                      or :image\n                  :color :primary\n                      or :accent\n                  :size  :expand\n                      or :wide\n                  :image string\n                  :image-position :cover\n                               or :top-left\n                               or :top-right\n                               or :bottom-left\n                               or :bottom-right\n                  :menu-icon (keyword for icon name)\n                  :menu-items [:ia \"This\" :ib \"that\"]}\n    ...)\n  ```\n  "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"ui-card","ui-card",294831793)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Card"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705559_705563 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705560_705564 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705559_705563,_STAR_print_fn_STAR_705560_705564,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705559_705563,_STAR_print_fn_STAR_705560_705564,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705561_705565 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),cljs.core.PersistentArrayMap.EMPTY));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705561_705565;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705560_705564;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705559_705563;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ui-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"ui-card-content","ui-card-content",-2113211216)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Card Content"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705569_705575 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705570_705576 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705569_705575,_STAR_print_fn_STAR_705570_705576,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705569_705575,_STAR_print_fn_STAR_705570_705576,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705571_705581 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705571_705581;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705570_705576;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705569_705575;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ui-card-content",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,cljs.core.PersistentArrayMap.EMPTY,om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"ui-card-title","ui-card-title",-1267971514)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705588_705601 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705589_705602 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705588_705601,_STAR_print_fn_STAR_705589_705602,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705588_705601,_STAR_print_fn_STAR_705589_705602,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705590_705604 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Hey There"], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705590_705604;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705589_705602;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705588_705601;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ui-card-title",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Hey There"], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"ui-card-actions","ui-card-actions",281684597)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Actions"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705607_705612 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705608_705613 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705607_705612,_STAR_print_fn_STAR_705608_705613,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705607_705612,_STAR_print_fn_STAR_705608_705613,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705609_705615 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.list(new cljs.core.Symbol("ele","ui-flat-button","ele/ui-flat-button",1830198922,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Learn more")], null)));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705609_705615;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705608_705613;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705607_705612;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"ui-card-actions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Learn more")], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"type-bordered","type-bordered",-994362412)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bordered"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705617_705620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705618_705621 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705617_705620,_STAR_print_fn_STAR_705618_705621,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705617_705620,_STAR_print_fn_STAR_705618_705621,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705619_705623 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Bordered",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.list(new cljs.core.Symbol("ele","ui-flat-button","ele/ui-flat-button",1830198922,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Learn more")], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Bordered type just draws a line between content and actions.")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705619_705623;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705618_705621;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705617_705620;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"type-bordered",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bordered","bordered",-832486681),new cljs.core.Keyword(null,"title","title",636505583),"Bordered",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"actions","actions",-812656882),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Learn more")], null),om.dom.div.call(null,null,"Bordered type just draws a line between content and actions.")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"type-transparent","type-transparent",-288672848)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Transparent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705626_705632 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705627_705633 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705626_705632,_STAR_print_fn_STAR_705627_705633,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705626_705632,_STAR_print_fn_STAR_705627_705633,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705630_705646 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Transparent",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705630_705646;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705627_705633;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705626_705632;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"type-transparent",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"title","title",636505583),"Transparent",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"type-square","type-square",150600262)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Square"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705650_705655 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705651_705656 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705650_705655,_STAR_print_fn_STAR_705651_705656,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705650_705655,_STAR_print_fn_STAR_705651_705656,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705652_705658 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"square","square",812434677)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705652_705658;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705651_705656;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705650_705655;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"type-square",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"square","square",812434677)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"size-expand","size-expand",-1540008559)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size Expand"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705659_705662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705660_705663 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705659_705662,_STAR_print_fn_STAR_705660_705663,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705659_705662,_STAR_print_fn_STAR_705660_705663,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705661_705664 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"expand","expand",595248157)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content  asd asd adda das asd adsas dfasfasfaafs fas asfa afs afas fafag sasf asfa a f sfas as aa asf\n    asd a as dsdsaa sasa asd das ada dasdsasd das asasdsa dsasad asasdsa dssa d ad ss assdsa sdadaaaad ads ada dasas dasdadsda ads adsada asd\n    asdas dasdsaasdas ads adsads dadas ds a sd dasdsaasd as adaddads")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705661_705664;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705660_705663;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705659_705662;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"size-expand",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"expand","expand",595248157)], null),om.dom.div.call(null,null,"Content  asd asd adda das asd adsas dfasfasfaafs fas asfa afs afas fafag sasf asfa a f sfas as aa asf\n    asd a as dsdsaa sasa asd das ada dasdsasd das asasdsa dsasad asasdsa dssa d ad ss assdsa sdadaaaad ads ada dasas dasdadsda ads adsada asd\n    asdas dasdsaasdas ads adsads dadas ds a sd dasdsaasd as adaddads")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"size-wide","size-wide",898473478)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size Wide"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705665_705668 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705666_705669 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705665_705668,_STAR_print_fn_STAR_705666_705669,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705665_705668,_STAR_print_fn_STAR_705666_705669,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705667_705670 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705667_705670;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705666_705669;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705665_705668;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"size-wide",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"color-primary","color-primary",1415907910)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color Primary"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705672_705676 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705673_705677 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705672_705676,_STAR_print_fn_STAR_705673_705677,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705672_705676,_STAR_print_fn_STAR_705673_705677,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705674_705678 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583),"Primary"], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705674_705678;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705673_705677;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705672_705676;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"color-primary",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583),"Primary"], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"color-accent","color-accent",-843871719)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color Accent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705684_705688 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705685_705689 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705684_705688,_STAR_print_fn_STAR_705685_705689,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705684_705688,_STAR_print_fn_STAR_705685_705689,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705686_705693 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"title","title",636505583),"Accent"], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705686_705693;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705685_705689;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705684_705688;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"color-accent",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"title","title",636505583),"Accent"], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image","image",-58725096)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705694_705701 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705695_705702 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705694_705701,_STAR_print_fn_STAR_705695_705702,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705694_705701,_STAR_print_fn_STAR_705695_705702,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705696_705707 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Image card",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png"], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705696_705707;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705695_705702;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705694_705701;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Image card",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png"], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image-pos-tl","image-pos-tl",490165748)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Top Left"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705708_705711 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705709_705712 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705708_705711,_STAR_print_fn_STAR_705709_705712,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705708_705711,_STAR_print_fn_STAR_705709_705712,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705710_705716 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Top Left",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"top-left","top-left",-1396159636)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705710_705716;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705709_705712;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705708_705711;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image-pos-tl",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Top Left",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"top-left","top-left",-1396159636)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image-pos-tr","image-pos-tr",1583522343)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Top Right"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705720_705723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705721_705724 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705720_705723,_STAR_print_fn_STAR_705721_705724,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705720_705723,_STAR_print_fn_STAR_705721_705724,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705722_705729 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Top Right",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"top-right","top-right",284698505)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705722_705729;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705721_705724;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705720_705723;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image-pos-tr",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Top Right",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"top-right","top-right",284698505)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image-pos-bl","image-pos-bl",-2084886062)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Bottom Left"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705742_705746 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705743_705747 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705742_705746,_STAR_print_fn_STAR_705743_705747,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705742_705746,_STAR_print_fn_STAR_705743_705747,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705744_705755 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Bottom Left",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705744_705755;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705743_705747;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705742_705746;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image-pos-bl",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Bottom Left",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image-pos-br","image-pos-br",1669986826)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Bottom Right"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705770_705773 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705771_705774 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705770_705773,_STAR_print_fn_STAR_705771_705774,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705770_705773,_STAR_print_fn_STAR_705771_705774,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705772_705783 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Bottom Right",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705772_705783;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705771_705774;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705770_705773;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image-pos-br",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Image Bottom Right",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/bubbles.png",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"image-pos-cover","image-pos-cover",-1788415199)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Cover"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705792_705795 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705793_705796 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705792_705795,_STAR_print_fn_STAR_705793_705796,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705792_705795,_STAR_print_fn_STAR_705793_705796,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705794_705798 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Image Cover",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/welcome_card.jpg",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"cover","cover",-823541365),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705794_705798;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705793_705796;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705792_705795;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"image-pos-cover",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Image Cover",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"image","image",-58725096),"img/welcome_card.jpg",new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"cover","cover",-823541365),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.card_cards","untangled.ui.card_cards",1957328449),new cljs.core.Keyword(null,"menu-card","menu-card",1336545352)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Menu Card"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705799_705802 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705800_705803 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705799_705802,_STAR_print_fn_STAR_705800_705803,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705799_705802,_STAR_print_fn_STAR_705800_705803,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705801_705805 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("ele","ui-card","ele/ui-card",1935197590,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Menu Card",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"menu","menu",352255198),cljs.core.list(new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Keyword(null,"a","a",-2123407586),"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.Keyword(null,"ia","ia",1614010639),"Item Label")], null))], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705801_705805;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705800_705803;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705799_705802;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"menu-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_card.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Menu Card",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"menu","menu",352255198),untangled.ui.menu.menu.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item.call(null,new cljs.core.Keyword(null,"ia","ia",1614010639),"Item Label")], null))], null),om.dom.div.call(null,null,"Content")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));

//# sourceMappingURL=card_cards.js.map?rel=1489703354143
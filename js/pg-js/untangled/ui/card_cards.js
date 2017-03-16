// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.card_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('devcards.util.utils');
goog.require('untangled.ui.sample_card');
goog.require('om.dom');
goog.require('untangled.ui.elements');
goog.require('untangled.client.core');
goog.require('untangled.ui.menu');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Card\n\n   A card component applies styling to ui elements that represent a paper card\n\n  ```\n    (ele/ui-card {:title \"Some Title\"\n                  :type  :bordered\n                      or :transparent\n                      or :square\n                      or :image\n                  :color :primary\n                      or :accent\n                  :size  :expand\n                      or :wide\n                  :image string\n                  :image-position :cover\n                               or :top-left\n                               or :top-right\n                               or :bottom-left\n                               or :bottom-right\n                  :menu-icon (keyword for icon name)\n                  :menu-items [:ia \"This\" :ib \"that\"]}\n    ...)\n  ```\n  "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$ui_DASH_card], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Card"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51978_51981 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51979_51982 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51978_51981,_STAR_print_fn_STAR_51979_51982,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_51978_51981,_STAR_print_fn_STAR_51979_51982,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_51980_51983 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,cljs.core.PersistentArrayMap.EMPTY));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_51980_51983;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51979_51982;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51978_51981;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"ui-card",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$ui_DASH_card_DASH_content], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Card Content"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51984_51987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51985_51988 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51984_51987,_STAR_print_fn_STAR_51985_51988,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_51984_51987,_STAR_print_fn_STAR_51985_51988,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_51986_51989 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_51986_51989;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51985_51988;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51984_51987;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"ui-card-content",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$ui_DASH_card_DASH_title], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51990_51993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51991_51994 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51990_51993,_STAR_print_fn_STAR_51991_51994,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_51990_51993,_STAR_print_fn_STAR_51991_51994,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_51992_51995 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Hey There"], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_51992_51995;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51991_51994;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51990_51993;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"ui-card-title",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Hey There"], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$ui_DASH_card_DASH_actions], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Actions"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51996_51999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51997_52000 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51996_51999,_STAR_print_fn_STAR_51997_52000,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_51996_51999,_STAR_print_fn_STAR_51997_52000,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_51998_52001 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_flat_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"Learn more")], null)));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_51998_52001;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51997_52000;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51996_51999;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"ui-card-actions",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$actions,untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Learn more"], 0))], null)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$type_DASH_bordered], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bordered"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52002_52005 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52003_52006 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52002_52005,_STAR_print_fn_STAR_52003_52006,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52002_52005,_STAR_print_fn_STAR_52003_52006,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52004_52007 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Bordered",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$actions,cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_flat_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"Learn more")], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Bordered type just draws a line between content and actions.")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52004_52007;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52003_52006;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52002_52005;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"type-bordered",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$bordered,cljs.core.cst$kw$title,"Bordered",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$actions,untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Learn more"], 0))], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Bordered type just draws a line between content and actions."], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$type_DASH_transparent], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Transparent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52008_52011 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52009_52012 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52008_52011,_STAR_print_fn_STAR_52009_52012,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52008_52011,_STAR_print_fn_STAR_52009_52012,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52010_52013 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Transparent",cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52010_52013;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52009_52012;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52008_52011;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"type-transparent",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$transparent,cljs.core.cst$kw$title,"Transparent",cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$type_DASH_square], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Square"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52014_52017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52015_52018 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52014_52017,_STAR_print_fn_STAR_52015_52018,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52014_52017,_STAR_print_fn_STAR_52015_52018,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52016_52019 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$square], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52016_52019;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52015_52018;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52014_52017;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"type-square",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$square], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$size_DASH_expand], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size Expand"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52020_52023 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52021_52024 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52020_52023,_STAR_print_fn_STAR_52021_52024,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52020_52023,_STAR_print_fn_STAR_52021_52024,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52022_52025 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$expand], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content  asd asd adda das asd adsas dfasfasfaafs fas asfa afs afas fafag sasf asfa a f sfas as aa asf\n    asd a as dsdsaa sasa asd das ada dasdsasd das asasdsa dsasad asasdsa dssa d ad ss assdsa sdadaaaad ads ada dasas dasdadsda ads adsada asd\n    asdas dasdsaasdas ads adsads dadas ds a sd dasdsaasd as adaddads")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52022_52025;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52021_52024;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52020_52023;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"size-expand",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$expand], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content  asd asd adda das asd adsas dfasfasfaafs fas asfa afs afas fafag sasf asfa a f sfas as aa asf\n    asd a as dsdsaa sasa asd das ada dasdsasd das asasdsa dsasad asasdsa dssa d ad ss assdsa sdadaaaad ads ada dasas dasdadsda ads adsada asd\n    asdas dasdsaasdas ads adsads dadas ds a sd dasdsaasd as adaddads"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$size_DASH_wide], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Size Wide"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52026_52029 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52027_52030 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52026_52029,_STAR_print_fn_STAR_52027_52030,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52026_52029,_STAR_print_fn_STAR_52027_52030,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52028_52031 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$wide], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52028_52031;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52027_52030;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52026_52029;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"size-wide",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$wide], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$color_DASH_primary], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color Primary"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52032_52035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52033_52036 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52032_52035,_STAR_print_fn_STAR_52033_52036,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52032_52035,_STAR_print_fn_STAR_52033_52036,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52034_52037 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$title,"Primary"], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52034_52037;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52033_52036;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52032_52035;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"color-primary",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$title,"Primary"], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$color_DASH_accent], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Color Accent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52038_52041 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52039_52042 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52038_52041,_STAR_print_fn_STAR_52039_52042,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52038_52041,_STAR_print_fn_STAR_52039_52042,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52040_52043 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$title,"Accent"], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52040_52043;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52039_52042;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52038_52041;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"color-accent",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$title,"Accent"], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52044_52047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52045_52048 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52044_52047,_STAR_print_fn_STAR_52045_52048,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52044_52047,_STAR_print_fn_STAR_52045_52048,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52046_52049 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Image card",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png"], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52046_52049;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52045_52048;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52044_52047;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Image card",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png"], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image_DASH_pos_DASH_tl], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Top Left"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52050_52053 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52051_52054 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52050_52053,_STAR_print_fn_STAR_52051_52054,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52050_52053,_STAR_print_fn_STAR_52051_52054,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52052_52055 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Top Left",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$top_DASH_left], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52052_52055;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52051_52054;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52050_52053;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image-pos-tl",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Top Left",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$top_DASH_left], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image_DASH_pos_DASH_tr], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Top Right"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52056_52059 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52057_52060 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52056_52059,_STAR_print_fn_STAR_52057_52060,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52056_52059,_STAR_print_fn_STAR_52057_52060,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52058_52061 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Top Right",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$top_DASH_right], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52058_52061;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52057_52060;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52056_52059;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image-pos-tr",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Top Right",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$top_DASH_right], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image_DASH_pos_DASH_bl], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Bottom Left"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52062_52065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52063_52066 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52062_52065,_STAR_print_fn_STAR_52063_52066,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52062_52065,_STAR_print_fn_STAR_52063_52066,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52064_52067 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Bottom Left",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$bottom_DASH_left], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52064_52067;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52063_52066;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52062_52065;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image-pos-bl",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Bottom Left",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$bottom_DASH_left], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image_DASH_pos_DASH_br], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Bottom Right"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52068_52071 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52069_52072 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52068_52071,_STAR_print_fn_STAR_52069_52072,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52068_52071,_STAR_print_fn_STAR_52069_52072,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52070_52073 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Bottom Right",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$bottom_DASH_right], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52070_52073;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52069_52072;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52068_52071;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image-pos-br",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Image Bottom Right",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/bubbles.png",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$bottom_DASH_right], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$image_DASH_pos_DASH_cover], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Image Position Cover"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52074_52077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52075_52078 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52074_52077,_STAR_print_fn_STAR_52075_52078,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52074_52077,_STAR_print_fn_STAR_52075_52078,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52076_52079 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Image Cover",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/welcome_card.jpg",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$cover,cljs.core.cst$kw$size,cljs.core.cst$kw$wide], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52076_52079;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52075_52078;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52074_52077;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"image-pos-cover",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Image Cover",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$image,"img/welcome_card.jpg",cljs.core.cst$kw$image_DASH_position,cljs.core.cst$kw$cover,cljs.core.cst$kw$size,cljs.core.cst$kw$wide], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$card_cards,cljs.core.cst$kw$menu_DASH_card], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Menu Card"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52080_52083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52081_52084 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52080_52083,_STAR_print_fn_STAR_52081_52084,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52080_52083,_STAR_print_fn_STAR_52081_52084,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52082_52085 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$ele_SLASH_ui_DASH_card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Menu Card",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$menu,cljs.core.list(cljs.core.cst$sym$menu,cljs.core.cst$kw$a,"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$menu_DASH_item,cljs.core.cst$kw$ia,"Item Label")], null))], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content")));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52082_52085;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52081_52084;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52080_52083;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-card",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Menu Card",cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$menu,untangled.ui.menu.menu(cljs.core.cst$kw$a,"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$ia,"Item Label")], null))], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));

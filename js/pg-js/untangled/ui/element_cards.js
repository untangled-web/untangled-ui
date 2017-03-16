// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.element_cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('untangled.ui.sample_card');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.cards');
goog.require('untangled.i18n.core');
goog.require('untangled.client.core');
goog.require('untangled.ui.layout');
goog.require('untangled.icons');
goog.require('untangled.ui.elements');
goog.require('untangled.client.mutations');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$avatar], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Avatars\n\n  Use `ui-avatar` to render a single child within an avatar (typically an icon, an image or a string).\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52570_52573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52571_52574 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52570_52573,_STAR_print_fn_STAR_52571_52574,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52570_52573,_STAR_print_fn_STAR_52571_52574,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52572_52575 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,cljs.core.PersistentArrayMap.EMPTY,"AV"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"BR"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"PC"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"PB"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null),"AC"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"AB"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$medium], null),"MD"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),"LG"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$xlarge], null),"XL"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge], null),"HU"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_avatar,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$supervisor_account))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52572_52575;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52571_52574;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52570_52573;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"avatar",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_avatar(cljs.core.PersistentArrayMap.EMPTY,"AV"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"BR"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"PC"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"PB"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null),"AC"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$kind,cljs.core.cst$kw$bordered], null),"AB"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$medium], null),"MD"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),"LG"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$xlarge], null),"XL"),untangled.ui.elements.ui_avatar(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge], null),"HU"),untangled.ui.elements.ui_avatar(cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon(cljs.core.cst$kw$supervisor_account))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$badge], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Badges\n\n  Use `ui-badge` to render children within a badge. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52576_52579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52577_52580 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52576_52579,_STAR_print_fn_STAR_52577_52580,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52576_52579,_STAR_print_fn_STAR_52577_52580,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52578_52581 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$marginTop,"10px"], null)], null),"A plain badge: ",cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_badge,cljs.core.PersistentArrayMap.EMPTY,"6")),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$marginTop,"10px"], null)], null),"A button with a badge: ",cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"Inbox ",cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_badge,cljs.core.PersistentArrayMap.EMPTY,"6")))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52578_52581;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52577_52580;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52576_52579;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"badge",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"marginTop": "10px"})}),cljs.core.array_seq(["A plain badge: ",untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["6"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"marginTop": "10px"})}),cljs.core.array_seq(["A button with a badge: ",untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Inbox ",untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["6"], 0))], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$button], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Buttons\n\n  Use `ui-button` to render buttons of various styles/shapes. See the docstring of the function for available options. The\n  children of button can be anything, but common combinations include text and icons. See `untangled.icons`.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52582_52585 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52583_52586 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52582_52585,_STAR_print_fn_STAR_52583_52586,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52582_52585,_STAR_print_fn_STAR_52583_52586,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52584_52587 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,cljs.core.PersistentArrayMap.EMPTY,"Default Look"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$arrow_back),"With an icon"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),"Primary look"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$shape,cljs.core.cst$kw$wide], null),"Wide Accent"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_flat_DASH_button,cljs.core.PersistentArrayMap.EMPTY,"Flat Look"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_flat_DASH_button,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$arrow_back),"With an icon"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_flat_DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$shape,cljs.core.cst$kw$wide], null),"Wide Accent"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_circular_DASH_button,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$arrow_back)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_circular_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$small], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$arrow_back))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52584_52587;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52583_52586;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52582_52585;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"button",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["Default Look"], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back),"With an icon"], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Primary look"], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$shape,cljs.core.cst$kw$wide], null),cljs.core.array_seq(["Wide Accent"], 0)),untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq(["Flat Look"], 0)),untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back),"With an icon"], 0)),untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent,cljs.core.cst$kw$shape,cljs.core.cst$kw$wide], null),cljs.core.array_seq(["Wide Accent"], 0)),untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back)], 0)),untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$small], null),cljs.core.array_seq([untangled.icons.icon(cljs.core.cst$kw$arrow_back)], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$checkbox], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"checkbox",cljs.core.cst$kw$documentation,"# Checkboxes\n\n  These render a normal HTML checkbox input, but allow a partial select rendering (which is still internally held\n  as `true`). In other words, you will need to model the partial as your own state external from the control,\n  but it is also 100% compatible with a normal HTML checkbox input.\n\n  ```\n    (dom/div nil\n    (e/ui-checkbox {:checked current-state :id \"checkbox-5\"\n                    :onClick #(move-to-next-state)})\n    (dom/label #js {:className \"is-optional\"} \"With a label!\"))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var current_state = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
var states = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cycle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,cljs.core.cst$kw$partial], null)));
var next_state = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (current_state,states){
return (function (p1__52588_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,p1__52588_SHARP_);
});})(current_state,states))
,states));
var move_to_next_state = ((function (current_state,states,next_state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$checked,next_state);
});})(current_state,states,next_state))
;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_checkbox(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checked,current_state,cljs.core.cst$kw$id,"checkbox-5",cljs.core.cst$kw$onClick,((function (current_state,states,next_state,move_to_next_state){
return (function (){
return move_to_next_state();
});})(current_state,states,next_state,move_to_next_state))
], null)),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "htmlFor": "checkbox-5"}),cljs.core.array_seq(["With a label!"], 0))], 0));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checked,false], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$dialog_DASH_not_DASH_modal], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"dialog-not-modal",cljs.core.cst$kw$documentation,"# Dialogs\n\n  Use `ui-dialog` to render a modal dialog with title, body and action items (typically buttons).\n\n  ```\n  (e/ui-button {:onClick #(show-dialog)} \"Show Dialog\")\n  (dom/div #js {}\n    (e/ui-dialog {:visible is-visible :onClose #(hide-dialog)}\n      (e/ui-dialog-title {} \"Informative\")\n      (e/ui-dialog-body {} \"You have been notified.\")\n      (e/ui-dialog-actions {}\n        (e/ui-flat-button {:color :primary} \"Cancel\")\n        (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} \"Ok\"))))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var show_dialog = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$visible,true);
});
var hide_dialog = ((function (show_dialog){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$visible,false);
});})(show_dialog))
;
var is_visible = cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
return untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"200",cljs.core.cst$kw$width,"100%"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (show_dialog,hide_dialog,is_visible){
return (function (){
return show_dialog();
});})(show_dialog,hide_dialog,is_visible))
], null),cljs.core.array_seq(["Show Dialog"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([(function (){var G__52589 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible,is_visible,cljs.core.cst$kw$onClose,((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog();
});})(show_dialog,hide_dialog,is_visible))
], null);
var G__52590 = (function (){var G__52593 = cljs.core.PersistentArrayMap.EMPTY;
var G__52594 = "Informative";
return (untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2(G__52593,G__52594) : untangled.ui.elements.ui_dialog_title.call(null,G__52593,G__52594));
})();
var G__52591 = (function (){var G__52595 = cljs.core.PersistentArrayMap.EMPTY;
var G__52596 = "You have been notified.";
return (untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2(G__52595,G__52596) : untangled.ui.elements.ui_dialog_body.call(null,G__52595,G__52596));
})();
var G__52592 = (function (){var G__52597 = cljs.core.PersistentArrayMap.EMPTY;
var G__52598 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Cancel"], 0));
var G__52599 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$onClick,((function (G__52597,G__52598,G__52589,G__52590,G__52591,show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog();
});})(G__52597,G__52598,G__52589,G__52590,G__52591,show_dialog,hide_dialog,is_visible))
], null),cljs.core.array_seq(["Ok"], 0));
return (untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3(G__52597,G__52598,G__52599) : untangled.ui.elements.ui_dialog_actions.call(null,G__52597,G__52598,G__52599));
})();
return (untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4(G__52589,G__52590,G__52591,G__52592) : untangled.ui.elements.ui_dialog.call(null,G__52589,G__52590,G__52591,G__52592));
})()], 0))], 0)));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,false], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$dialog_DASH_modal], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"dialog-modal",cljs.core.cst$kw$documentation,"# Modal Dialogs\n\n  Use `ui-dialog` has a modal option. The backdrop gives an extra area from which you can recieve `onClose` events\n  to tell you the dialog wants to close (you still have to change the visible property, since this is a stateless\n  rendering).\n\n  ```\n  (e/ui-button {:onClick #(show-dialog)} \"Show Dialog\")\n  (dom/div #js {}\n    (e/ui-dialog {:visible is-visible :modal true :onClose #(hide-dialog)}\n      (e/ui-dialog-title {} \"Informative\")\n      (e/ui-dialog-body {} \"You have been notified.\")\n      (e/ui-dialog-actions {}\n        (e/ui-flat-button {:color :primary} \"Cancel\")\n        (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} \"Ok\"))))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var show_dialog = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$visible,true);
});
var hide_dialog = ((function (show_dialog){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$visible,false);
});})(show_dialog))
;
var is_visible = cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
return untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"200",cljs.core.cst$kw$width,"100%"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (show_dialog,hide_dialog,is_visible){
return (function (){
return show_dialog();
});})(show_dialog,hide_dialog,is_visible))
], null),cljs.core.array_seq(["Show Dialog"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({}),cljs.core.array_seq([(function (){var G__52600 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$visible,is_visible,cljs.core.cst$kw$modal,true,cljs.core.cst$kw$onClose,((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog();
});})(show_dialog,hide_dialog,is_visible))
], null);
var G__52601 = (function (){var G__52604 = cljs.core.PersistentArrayMap.EMPTY;
var G__52605 = "Informative";
return (untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$2(G__52604,G__52605) : untangled.ui.elements.ui_dialog_title.call(null,G__52604,G__52605));
})();
var G__52602 = (function (){var G__52606 = cljs.core.PersistentArrayMap.EMPTY;
var G__52607 = "You have been notified.";
return (untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$2(G__52606,G__52607) : untangled.ui.elements.ui_dialog_body.call(null,G__52606,G__52607));
})();
var G__52603 = (function (){var G__52608 = cljs.core.PersistentArrayMap.EMPTY;
var G__52609 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null),cljs.core.array_seq(["Cancel"], 0));
var G__52610 = untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary,cljs.core.cst$kw$onClick,((function (G__52608,G__52609,G__52600,G__52601,G__52602,show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog();
});})(G__52608,G__52609,G__52600,G__52601,G__52602,show_dialog,hide_dialog,is_visible))
], null),cljs.core.array_seq(["Ok"], 0));
return (untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3(G__52608,G__52609,G__52610) : untangled.ui.elements.ui_dialog_actions.call(null,G__52608,G__52609,G__52610));
})();
return (untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4(G__52600,G__52601,G__52602,G__52603) : untangled.ui.elements.ui_dialog.call(null,G__52600,G__52601,G__52602,G__52603));
})()], 0))], 0)));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,false], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$empty_DASH_state], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"empty-state",cljs.core.cst$kw$documentation,"# Empty State\n\n  Render an icon and text for when you can't display anything when you normally would have a collection of things.\n\n  ```\n  (e/ui-empty-state {:glyph :widgets :title \"No widgets yet\" :message \"Create a widget to get started\"})\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,untangled.ui.elements.ui_iframe(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px"], null),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.link(({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$widgets,cljs.core.cst$kw$title,"No widgets yet",cljs.core.cst$kw$message,"Create a widget to get started"], null))], 0))),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,false], null),cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$fader], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fader\n\n  Use `ui-fader` to control the visibilty of children when you want a fade in/out CSS animation to be triggered. The\n  length of the animation is configurable when you generate your application-specific CSS via the PostCSS variable\n  `--global-duration`"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52611_52616 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52612_52617 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52611_52616,_STAR_print_fn_STAR_52612_52617,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52611_52616,_STAR_print_fn_STAR_52612_52617,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52613_52618 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state_DASH_atom,cljs.core.cst$sym$_], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$visible_QMARK_], null)], null),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$state_DASH_atom)], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,cljs.core.list(cljs.core.cst$sym$fn_STAR_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$swap_BANG_,cljs.core.cst$sym$state_DASH_atom,cljs.core.cst$sym$update,cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$sym$not))], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$visible_QMARK_,"Fade Out","Fade In")),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_fader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,cljs.core.cst$sym$visible_QMARK_], null),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Child"),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,"Content"))))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52613_52618;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52612_52617;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52611_52616;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"fader",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,((function (document__28050__auto__){
return (function (state_atom,_){
var map__52614 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
var map__52614__$1 = ((((!((map__52614 == null)))?((((map__52614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52614):map__52614);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,cljs.core.cst$kw$visible_QMARK_);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__52614,map__52614__$1,visible_QMARK_,document__28050__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.update,cljs.core.cst$kw$visible_QMARK_,cljs.core.not);
});})(map__52614,map__52614__$1,visible_QMARK_,document__28050__auto__))
], null),cljs.core.array_seq([(cljs.core.truth_(visible_QMARK_)?"Fade Out":"Fade In")], 0)),untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visible,visible_QMARK_], null),cljs.core.array_seq([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Child"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Content"], 0))], 0))], 0));
});})(document__28050__auto__))
,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$field_DASH_sizes], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field with optional sizes and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52619_52622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52620_52623 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52619_52622,_STAR_print_fn_STAR_52620_52623,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52619_52622,_STAR_print_fn_STAR_52620_52623,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52621_52624 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$sizes], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_field,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,cljs.core.cst$sym$sizes,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$str,"ui-",cljs.core.cst$sym$sizes)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$sizes))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$small,cljs.core.cst$kw$medium,cljs.core.cst$kw$large], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52621_52624;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52620_52623;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52619_52622;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"field-sizes",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (document__28050__auto__){
return (function (sizes){
return untangled.ui.elements.ui_field(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,sizes,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizes)].join('')], null),cljs.core.name(sizes));
});})(document__28050__auto__))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$small,cljs.core.cst$kw$medium,cljs.core.cst$kw$large], null))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$field_DASH_states], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field with optional states and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52625_52628 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52626_52629 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52625_52628,_STAR_print_fn_STAR_52626_52629,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52625_52628,_STAR_print_fn_STAR_52626_52629,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52627_52630 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$states], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_field,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,cljs.core.cst$sym$states,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$str,"ui-",cljs.core.cst$sym$states)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$states))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$invalid,cljs.core.cst$kw$error], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52627_52630;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52626_52629;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52625_52628;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"field-states",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (document__28050__auto__){
return (function (states){
return untangled.ui.elements.ui_field(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,states,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states)].join('')], null),cljs.core.name(states));
});})(document__28050__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$valid,cljs.core.cst$kw$invalid,cljs.core.cst$kw$error], null))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$field_DASH_types], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field of optional types and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52631_52634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52632_52635 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52631_52634,_STAR_print_fn_STAR_52632_52635,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52631_52634,_STAR_print_fn_STAR_52632_52635,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52633_52636 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_field,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$sym$type,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$str,"ui-",cljs.core.cst$sym$type)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$type))),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$date,cljs.core.cst$kw$datetime,cljs.core.cst$kw$datetime_DASH_local,cljs.core.cst$kw$month,cljs.core.cst$kw$week,cljs.core.cst$kw$email,cljs.core.cst$kw$number,cljs.core.cst$kw$search,cljs.core.cst$kw$tel,cljs.core.cst$kw$time,cljs.core.cst$kw$url,cljs.core.cst$kw$color], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52633_52636;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52632_52635;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52631_52634;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"field-types",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (document__28050__auto__){
return (function (type){
return untangled.ui.elements.ui_field(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.name(type));
});})(document__28050__auto__))
,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.cst$kw$password,cljs.core.cst$kw$date,cljs.core.cst$kw$datetime,cljs.core.cst$kw$datetime_DASH_local,cljs.core.cst$kw$month,cljs.core.cst$kw$week,cljs.core.cst$kw$email,cljs.core.cst$kw$number,cljs.core.cst$kw$search,cljs.core.cst$kw$tel,cljs.core.cst$kw$time,cljs.core.cst$kw$url,cljs.core.cst$kw$color], null))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$icon_DASH_colors], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icons\n\n  Use `ui-icon` to render an icon with designated color attributes.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52637_52640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52638_52641 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52637_52640,_STAR_print_fn_STAR_52638_52641,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52637_52640,_STAR_print_fn_STAR_52638_52641,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52639_52642 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$active], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52639_52642;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52638_52641;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52637_52640;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-colors",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$active], null),untangled.icons.icon(cljs.core.cst$kw$alarm))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$icon_DASH_sizes], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icons\n\n  Use `ui-icon` to render an icon with designated size attributes.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52643_52646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52644_52647 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52643_52646,_STAR_print_fn_STAR_52644_52647,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52643_52646,_STAR_print_fn_STAR_52644_52647,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52645_52648 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$small], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$medium], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$xlarge], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge], null),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$kw$alarm))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52645_52648;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52644_52647;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52643_52646;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-sizes",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$small], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$medium], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$xlarge], null),untangled.icons.icon(cljs.core.cst$kw$alarm)),untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,cljs.core.cst$kw$huge], null),untangled.icons.icon(cljs.core.cst$kw$alarm))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$icon_DASH_bar], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icon Bar\n\n  Renders icons on a horizontal or vertical bar.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52649_52652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52650_52653 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52649_52652,_STAR_print_fn_STAR_52650_52653,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52649_52652,_STAR_print_fn_STAR_52650_52653,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52651_52654 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$shifting,true], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))),cljs.core.list(cljs.core.cst$sym$dom_SLASH_br,null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orientation,cljs.core.cst$kw$vertical], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon_DASH_bar_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52651_52654;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52650_52653;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52649_52652;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"icon-bar",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0)),untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$shifting,true], null),cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0)),om.dom.br(null),untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$orientation,cljs.core.cst$kw$vertical], null),cljs.core.array_seq([untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$home,cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$description,cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$color,cljs.core.cst$kw$passive], null)),untangled.ui.elements.ui_icon_bar_item(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$feedback,cljs.core.cst$kw$label,"Support"], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$label], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Labels\n\n  Use `ui-label` to render children within a label. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52655_52669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52656_52670 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52655_52669,_STAR_print_fn_STAR_52656_52670,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52655_52669,_STAR_print_fn_STAR_52656_52670,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52657_52671 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$for,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$colors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null),cljs.core.cst$sym$icons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$close], null)], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_label,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$sym$colors,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$str,"id-",cljs.core.cst$sym$colors,cljs.core.cst$sym$icons)], null),cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$colors),cljs.core.list(cljs.core.cst$sym$icon,cljs.core.cst$sym$icons)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52657_52671;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52656_52670;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52655_52669;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"label",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var iter__8364__auto__ = ((function (document__28050__auto__){
return (function untangled$ui$element_cards$iter__52658(s__52659){
return (new cljs.core.LazySeq(null,((function (document__28050__auto__){
return (function (){
var s__52659__$1 = s__52659;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__52659__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var colors = cljs.core.first(xs__7309__auto__);
var iterys__8360__auto__ = ((function (s__52659__$1,colors,xs__7309__auto__,temp__6753__auto__,document__28050__auto__){
return (function untangled$ui$element_cards$iter__52658_$_iter__52660(s__52661){
return (new cljs.core.LazySeq(null,((function (s__52659__$1,colors,xs__7309__auto__,temp__6753__auto__,document__28050__auto__){
return (function (){
var s__52661__$1 = s__52661;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__52661__$1);
if(temp__6753__auto____$1){
var s__52661__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52661__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__52661__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__52663 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__52662 = (0);
while(true){
if((i__52662 < size__8363__auto__)){
var icons = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__52662);
cljs.core.chunk_append(b__52663,untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,colors,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icons)].join('')], null),cljs.core.array_seq([cljs.core.name(colors),untangled.icons.icon(icons)], 0)));

var G__52672 = (i__52662 + (1));
i__52662 = G__52672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52663),untangled$ui$element_cards$iter__52658_$_iter__52660(cljs.core.chunk_rest(s__52661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52663),null);
}
} else {
var icons = cljs.core.first(s__52661__$2);
return cljs.core.cons(untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,colors,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icons)].join('')], null),cljs.core.array_seq([cljs.core.name(colors),untangled.icons.icon(icons)], 0)),untangled$ui$element_cards$iter__52658_$_iter__52660(cljs.core.rest(s__52661__$2)));
}
} else {
return null;
}
break;
}
});})(s__52659__$1,colors,xs__7309__auto__,temp__6753__auto__,document__28050__auto__))
,null,null));
});})(s__52659__$1,colors,xs__7309__auto__,temp__6753__auto__,document__28050__auto__))
;
var fs__8361__auto__ = cljs.core.seq(iterys__8360__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$none,cljs.core.cst$kw$close], null)));
if(fs__8361__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8361__auto__,untangled$ui$element_cards$iter__52658(cljs.core.rest(s__52659__$1)));
} else {
var G__52673 = cljs.core.rest(s__52659__$1);
s__52659__$1 = G__52673;
continue;
}
} else {
return null;
}
break;
}
});})(document__28050__auto__))
,null,null));
});})(document__28050__auto__))
;
return iter__8364__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$loader], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Loaders\n\n  Use `ui-loader` to render a loading graphic.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52674_52677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52675_52678 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52674_52677,_STAR_print_fn_STAR_52675_52678,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52674_52677,_STAR_print_fn_STAR_52675_52678,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52676_52679 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"50px"], null)], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_loader,cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_loader,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52676_52679;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52675_52678;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52674_52677;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"loader",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"height": "50px"})}),cljs.core.array_seq([untangled.ui.elements.ui_loader(cljs.core.PersistentArrayMap.EMPTY),untangled.ui.elements.ui_loader(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$primary], null)),untangled.ui.elements.ui_loader(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$accent], null))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$message], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Messages\n\n  Use `ui-message` to render children within a message. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52680_52683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52681_52684 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52680_52683,_STAR_print_fn_STAR_52681_52684,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52680_52683,_STAR_print_fn_STAR_52681_52684,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52682_52685 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$mapv,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$colors], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_message,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.cst$sym$colors,cljs.core.cst$kw$key,cljs.core.list(cljs.core.cst$sym$str,"id-",cljs.core.cst$sym$colors)], null),cljs.core.list(cljs.core.cst$sym$str,"This is a ",cljs.core.list(cljs.core.cst$sym$name,cljs.core.cst$sym$colors)," message"))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$warning], null),"This is a warning message with another child.",cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$arrow_forward,cljs.core.cst$kw$size,cljs.core.cst$kw$small], null)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52682_52685;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52681_52684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52680_52683;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"message",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (document__28050__auto__){
return (function (colors){
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,colors,cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors)].join('')], null),cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(colors)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message")].join('')], 0));
});})(document__28050__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default,cljs.core.cst$kw$primary,cljs.core.cst$kw$accent], null)),untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$warning], null),cljs.core.array_seq(["This is a warning message with another child.",untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$glyph,cljs.core.cst$kw$arrow_forward,cljs.core.cst$kw$size,cljs.core.cst$kw$small], null))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$notifications], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Notifications\n\n  Use `ui-notification` to render a notification of designated kind and with.\n\n  Some samples are shown below:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52686_52724 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52687_52725 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52686_52724,_STAR_print_fn_STAR_52687_52725,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52686_52724,_STAR_print_fn_STAR_52687_52725,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52688_52726 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$informative], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_title,cljs.core.PersistentArrayMap.EMPTY,"Informative"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_body,cljs.core.PersistentArrayMap.EMPTY,"You have been notified.")),cljs.core.list(cljs.core.cst$sym$dom_SLASH_br,null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$success], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_title,cljs.core.PersistentArrayMap.EMPTY,"Success"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_body,cljs.core.PersistentArrayMap.EMPTY,"You did it!  You're awesome.")),cljs.core.list(cljs.core.cst$sym$dom_SLASH_br,null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$warning], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_title,cljs.core.PersistentArrayMap.EMPTY,"Warning"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_body,cljs.core.PersistentArrayMap.EMPTY,"You have been warned.")),cljs.core.list(cljs.core.cst$sym$dom_SLASH_br,null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$error], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_title,cljs.core.PersistentArrayMap.EMPTY,"Error"),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_body,cljs.core.PersistentArrayMap.EMPTY,"There has been an error.")),cljs.core.list(cljs.core.cst$sym$dom_SLASH_br,null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,cljs.core.cst$kw$wide], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_body,cljs.core.PersistentArrayMap.EMPTY,"This is a wide message."),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_notification_DASH_title,cljs.core.PersistentArrayMap.EMPTY,"Width"))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52688_52726;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52687_52725;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52686_52724;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"notifications",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(function (){var G__52689 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$informative], null);
var G__52690 = (function (){var G__52692 = cljs.core.PersistentArrayMap.EMPTY;
var G__52693 = "Informative";
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__52692,G__52693) : untangled.ui.elements.ui_notification_title.call(null,G__52692,G__52693));
})();
var G__52691 = (function (){var G__52694 = cljs.core.PersistentArrayMap.EMPTY;
var G__52695 = "You have been notified.";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__52694,G__52695) : untangled.ui.elements.ui_notification_body.call(null,G__52694,G__52695));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__52689,G__52690,G__52691) : untangled.ui.elements.ui_notification.call(null,G__52689,G__52690,G__52691));
})(),om.dom.br(null),(function (){var G__52696 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$success], null);
var G__52697 = (function (){var G__52699 = cljs.core.PersistentArrayMap.EMPTY;
var G__52700 = "Success";
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__52699,G__52700) : untangled.ui.elements.ui_notification_title.call(null,G__52699,G__52700));
})();
var G__52698 = (function (){var G__52701 = cljs.core.PersistentArrayMap.EMPTY;
var G__52702 = "You did it!  You're awesome.";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__52701,G__52702) : untangled.ui.elements.ui_notification_body.call(null,G__52701,G__52702));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__52696,G__52697,G__52698) : untangled.ui.elements.ui_notification.call(null,G__52696,G__52697,G__52698));
})(),om.dom.br(null),(function (){var G__52703 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$warning], null);
var G__52704 = (function (){var G__52706 = cljs.core.PersistentArrayMap.EMPTY;
var G__52707 = "Warning";
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__52706,G__52707) : untangled.ui.elements.ui_notification_title.call(null,G__52706,G__52707));
})();
var G__52705 = (function (){var G__52708 = cljs.core.PersistentArrayMap.EMPTY;
var G__52709 = "You have been warned.";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__52708,G__52709) : untangled.ui.elements.ui_notification_body.call(null,G__52708,G__52709));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__52703,G__52704,G__52705) : untangled.ui.elements.ui_notification.call(null,G__52703,G__52704,G__52705));
})(),om.dom.br(null),(function (){var G__52710 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind,cljs.core.cst$kw$error], null);
var G__52711 = (function (){var G__52713 = cljs.core.PersistentArrayMap.EMPTY;
var G__52714 = "Error";
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__52713,G__52714) : untangled.ui.elements.ui_notification_title.call(null,G__52713,G__52714));
})();
var G__52712 = (function (){var G__52715 = cljs.core.PersistentArrayMap.EMPTY;
var G__52716 = "There has been an error.";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__52715,G__52716) : untangled.ui.elements.ui_notification_body.call(null,G__52715,G__52716));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__52710,G__52711,G__52712) : untangled.ui.elements.ui_notification.call(null,G__52710,G__52711,G__52712));
})(),om.dom.br(null),(function (){var G__52717 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,cljs.core.cst$kw$wide], null);
var G__52718 = (function (){var G__52720 = cljs.core.PersistentArrayMap.EMPTY;
var G__52721 = "This is a wide message.";
return (untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_body.cljs$core$IFn$_invoke$arity$2(G__52720,G__52721) : untangled.ui.elements.ui_notification_body.call(null,G__52720,G__52721));
})();
var G__52719 = (function (){var G__52722 = cljs.core.PersistentArrayMap.EMPTY;
var G__52723 = "Width";
return (untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.elements.ui_notification_title.cljs$core$IFn$_invoke$arity$2(G__52722,G__52723) : untangled.ui.elements.ui_notification_title.call(null,G__52722,G__52723));
})();
return (untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_notification.cljs$core$IFn$_invoke$arity$3(G__52717,G__52718,G__52719) : untangled.ui.elements.ui_notification.call(null,G__52717,G__52718,G__52719));
})()], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$progress], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Progress"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52727_52730 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52728_52731 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52727_52730,_STAR_print_fn_STAR_52728_52731,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52727_52730,_STAR_print_fn_STAR_52728_52731,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52729_52732 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_progress,cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(cljs.core.cst$sym$dom_SLASH_p,null," "),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_progress,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,"70"], null)),cljs.core.list(cljs.core.cst$sym$dom_SLASH_p,null," "),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_progress,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,"50",cljs.core.cst$kw$size,cljs.core.cst$kw$dense], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52729_52732;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52728_52731;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52727_52730;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"progress",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_progress(cljs.core.PersistentArrayMap.EMPTY),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" "], 0)),untangled.ui.elements.ui_progress(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,"70"], null)),om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([" "], 0)),untangled.ui.elements.ui_progress(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max,"100",cljs.core.cst$kw$value,"50",cljs.core.cst$kw$size,cljs.core.cst$kw$dense], null))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$radio], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"radio",cljs.core.cst$kw$documentation,"# Radio buttons\n\n  Radio buttons render normal react controls for a radio button input with correct DOM. You may optionally\n  provide a label, as you would expect.\n\n  ```\n  (dom/div nil\n    (e/ui-radio {:id \"radio-1\" :onClick #(choose 1) :checked (= choice 1)})\n    (dom/div nil\n      (e/ui-radio {:id \"radio-2\" :onClick #(choose 2) :checked (= choice 2)})\n      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-2\"} \"With bel!\"))\n    (e/ui-radio {:id \"radio-3\" :onClick #(choose 3) :checked (= choice 3)\n                 :disabled true})\n    (dom/div nil\n      (e/ui-radio {:id \"radio-4\" :onClick #(choose 4) :checked (= choice 4)\n                   :disabled true})\n      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-4\"\n                      :disabled true} \"With a label!\")))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var choose = (function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$choice,v);
});
var choice = cljs.core.cst$kw$choice.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"radio-1",cljs.core.cst$kw$onClick,((function (choose,choice){
return (function (){
return choose((1));
});})(choose,choice))
,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(1))], null)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"radio-2",cljs.core.cst$kw$onClick,((function (choose,choice){
return (function (){
return choose((2));
});})(choose,choice))
,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(2))], null)),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "htmlFor": "radio-2"}),cljs.core.array_seq(["With a label!"], 0))], 0)),untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"radio-3",cljs.core.cst$kw$onClick,((function (choose,choice){
return (function (){
return choose((3));
});})(choose,choice))
,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(3)),cljs.core.cst$kw$disabled,true], null)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_radio(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"radio-4",cljs.core.cst$kw$onClick,((function (choose,choice){
return (function (){
return choose((4));
});})(choose,choice))
,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice,(4)),cljs.core.cst$kw$disabled,true], null)),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "htmlFor": "radio-4", "disabled": true}),cljs.core.array_seq(["With a label!"], 0))], 0))], 0));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$choice,(1)], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$switch], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"switch",cljs.core.cst$kw$documentation,"# Switch\n\n  These render a switch input which is just a stylized checkbox.\n\n  ```\n    (dom/div nil\n    (e/ui-switch {:checked current-state :id \"switch-1\"\n                  :onClick #(move-to-next-state)})\n    (dom/label #js {:className \"is-optional\"} \"With a label!\"))\n  ```\n  ",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var current_state = cljs.core.cst$kw$checked.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
var states = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cycle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
var next_state = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (current_state,states){
return (function (p1__52733_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_state,p1__52733_SHARP_);
});})(current_state,states))
,states));
var move_to_next_state = ((function (current_state,states,next_state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$checked,next_state);
});})(current_state,states,next_state))
;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_switch(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$checked,current_state,cljs.core.cst$kw$id,"switch-1",cljs.core.cst$kw$onClick,((function (current_state,states,next_state,move_to_next_state){
return (function (){
return move_to_next_state();
});})(current_state,states,next_state,move_to_next_state))
], null)),om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "is-optional", "htmlFor": "switch-1"}),cljs.core.array_seq(["With a label!"], 0))], 0));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$checked,false], null),cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$element_cards,cljs.core.cst$kw$tabs], null),cljs.core.cst$kw$func,(function (){
var document__28050__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Tabs\n\n  Renders tabs with text inside a tabs container.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_52734_52737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_52735_52738 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_52734_52737,_STAR_print_fn_STAR_52735_52738,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_52734_52737,_STAR_print_fn_STAR_52735_52738,sb__8594__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_52736_52739 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,null,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tabs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Docs"], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Support"], null))),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tabs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null))),cljs.core.list(cljs.core.cst$sym$dom_SLASH_div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"t-dark"], null),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tabs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),cljs.core.list(cljs.core.cst$sym$e_SLASH_ui_DASH_tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null))))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52736_52739;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_52735_52738;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_52734_52737;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"tabs",cljs.core.cst$kw$documentation,document__28050__auto__,cljs.core.cst$kw$main_DASH_obj,om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Docs"], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,"Support"], null))], 0)),untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$primary], null))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "t-dark"}),cljs.core.array_seq([untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Home",cljs.core.cst$kw$active,true,cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Docs",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null)),untangled.ui.elements.ui_tab(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Support",cljs.core.cst$kw$kind,cljs.core.cst$kw$contrast], null))], 0))], 0))], 0)),cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,null], null));
})], null));

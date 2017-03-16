// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.element_cards');
goog.require('cljs.core');
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"avatar","avatar",-1607499307)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Avatars\n\n  Use `ui-avatar` to render a single child within an avatar (typically an icon, an image or a string).\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705829_705832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705830_705833 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705829_705832,_STAR_print_fn_STAR_705830_705833,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705829_705832,_STAR_print_fn_STAR_705830_705833,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705831_705834 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),cljs.core.PersistentArrayMap.EMPTY,"AV"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"BR"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"PC"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"PB"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null),"AC"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"AB"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),"MD"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),"LG"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null),"XL"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816)], null),"HU"),cljs.core.list(new cljs.core.Symbol("e","ui-avatar","e/ui-avatar",-854502889,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"supervisor_account","supervisor_account",-191133661)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705831_705834;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705830_705833;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705829_705832;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"avatar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_avatar.call(null,cljs.core.PersistentArrayMap.EMPTY,"AV"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"BR"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"PC"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"PB"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null),"AC"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"bordered","bordered",-832486681)], null),"AB"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),"MD"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),"LG"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null),"XL"),untangled.ui.elements.ui_avatar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816)], null),"HU"),untangled.ui.elements.ui_avatar.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"supervisor_account","supervisor_account",-191133661)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"badge","badge",-1277997221)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Badges\n\n  Use `ui-badge` to render children within a badge. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705837_705840 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705838_705841 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705837_705840,_STAR_print_fn_STAR_705838_705841,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705837_705840,_STAR_print_fn_STAR_705838_705841,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705839_705842 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px"], null)], null),"A plain badge: ",cljs.core.list(new cljs.core.Symbol("e","ui-badge","e/ui-badge",257460452,null),cljs.core.PersistentArrayMap.EMPTY,"6")),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px"], null)], null),"A button with a badge: ",cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Inbox ",cljs.core.list(new cljs.core.Symbol("e","ui-badge","e/ui-badge",257460452,null),cljs.core.PersistentArrayMap.EMPTY,"6")))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705839_705842;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705838_705841;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705837_705840;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"badge",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,om.dom.div.call(null,({"style": ({"marginTop": "10px"})}),"A plain badge: ",untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,"6")),om.dom.div.call(null,({"style": ({"marginTop": "10px"})}),"A button with a badge: ",untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Inbox ",untangled.ui.elements.ui_badge.call(null,cljs.core.PersistentArrayMap.EMPTY,"6")))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Buttons\n\n  Use `ui-button` to render buttons of various styles/shapes. See the docstring of the function for available options. The\n  children of button can be anything, but common combinations include text and icons. See `untangled.icons`.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_705843_705846 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_705844_705847 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_705843_705846,_STAR_print_fn_STAR_705844_705847,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_705843_705846,_STAR_print_fn_STAR_705844_705847,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_705845_705848 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),cljs.core.PersistentArrayMap.EMPTY,"Default Look"),cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"With an icon"),cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Primary look"),cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),"Wide Accent"),cljs.core.list(new cljs.core.Symbol("e","ui-flat-button","e/ui-flat-button",1830299329,null),cljs.core.PersistentArrayMap.EMPTY,"Flat Look"),cljs.core.list(new cljs.core.Symbol("e","ui-flat-button","e/ui-flat-button",1830299329,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"With an icon"),cljs.core.list(new cljs.core.Symbol("e","ui-flat-button","e/ui-flat-button",1830299329,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),"Wide Accent"),cljs.core.list(new cljs.core.Symbol("e","ui-circular-button","e/ui-circular-button",741269786,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964))),cljs.core.list(new cljs.core.Symbol("e","ui-circular-button","e/ui-circular-button",741269786,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_705845_705848;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_705844_705847;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_705843_705846;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"button",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Default Look"),untangled.ui.elements.ui_button.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"With an icon"),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Primary look"),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),"Wide Accent"),untangled.ui.elements.ui_flat_button.call(null,cljs.core.PersistentArrayMap.EMPTY,"Flat Look"),untangled.ui.elements.ui_flat_button.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)),"With an icon"),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),"Wide Accent"),untangled.ui.elements.ui_circular_button.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964))),untangled.ui.elements.ui_circular_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"checkbox",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Checkboxes\n\n  These render a normal HTML checkbox input, but allow a partial select rendering (which is still internally held\n  as `true`). In other words, you will need to model the partial as your own state external from the control,\n  but it is also 100% compatible with a normal HTML checkbox input.\n\n  ```\n    (dom/div nil\n    (e/ui-checkbox {:checked current-state :id \"checkbox-5\"\n                    :onClick #(move-to-next-state)})\n    (dom/label #js {:className \"is-optional\"} \"With a label!\"))\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var current_state = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var states = cljs.core.take.call(null,(4),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true,new cljs.core.Keyword(null,"partial","partial",241141745)], null)));
var next_state = cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (current_state,states){
return (function (p1__705872_SHARP_){
return cljs.core.not_EQ_.call(null,current_state,p1__705872_SHARP_);
});})(current_state,states))
,states));
var move_to_next_state = ((function (current_state,states,next_state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"checked","checked",-50955819),next_state);
});})(current_state,states,next_state))
;
return om.dom.div.call(null,null,untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),current_state,new cljs.core.Keyword(null,"id","id",-1388402092),"checkbox-5",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_state,states,next_state,move_to_next_state){
return (function (){
return move_to_next_state.call(null);
});})(current_state,states,next_state,move_to_next_state))
], null)),om.dom.label.call(null,({"className": "is-optional", "htmlFor": "checkbox-5"}),"With a label!"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"dialog-not-modal","dialog-not-modal",1469656304)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dialog-not-modal",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Dialogs\n\n  Use `ui-dialog` to render a modal dialog with title, body and action items (typically buttons).\n\n  ```\n  (e/ui-button {:onClick #(show-dialog)} \"Show Dialog\")\n  (dom/div #js {}\n    (e/ui-dialog {:visible is-visible :onClose #(hide-dialog)}\n      (e/ui-dialog-title {} \"Informative\")\n      (e/ui-dialog-body {} \"You have been notified.\")\n      (e/ui-dialog-actions {}\n        (e/ui-flat-button {:color :primary} \"Cancel\")\n        (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} \"Ok\"))))\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var show_dialog = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
});
var hide_dialog = ((function (show_dialog){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
});})(show_dialog))
;
var is_visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"200",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),om.dom.div.call(null,null,om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return show_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),"Show Dialog"),om.dom.div.call(null,({}),untangled.ui.elements.ui_dialog.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),is_visible,new cljs.core.Keyword(null,"onClose","onClose",1513531338),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),untangled.ui.elements.ui_dialog_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Informative"),untangled.ui.elements.ui_dialog_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You have been notified."),untangled.ui.elements.ui_dialog_actions.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Cancel"),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),"Ok"))))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"dialog-modal","dialog-modal",1461452572)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dialog-modal",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Modal Dialogs\n\n  Use `ui-dialog` has a modal option. The backdrop gives an extra area from which you can recieve `onClose` events\n  to tell you the dialog wants to close (you still have to change the visible property, since this is a stateless\n  rendering).\n\n  ```\n  (e/ui-button {:onClick #(show-dialog)} \"Show Dialog\")\n  (dom/div #js {}\n    (e/ui-dialog {:visible is-visible :modal true :onClose #(hide-dialog)}\n      (e/ui-dialog-title {} \"Informative\")\n      (e/ui-dialog-body {} \"You have been notified.\")\n      (e/ui-dialog-actions {}\n        (e/ui-flat-button {:color :primary} \"Cancel\")\n        (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} \"Ok\"))))\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var show_dialog = (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
});
var hide_dialog = ((function (show_dialog){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
});})(show_dialog))
;
var is_visible = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"200",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),om.dom.div.call(null,null,om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return show_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),"Show Dialog"),om.dom.div.call(null,({}),untangled.ui.elements.ui_dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),is_visible,new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"onClose","onClose",1513531338),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),untangled.ui.elements.ui_dialog_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Informative"),untangled.ui.elements.ui_dialog_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You have been notified."),untangled.ui.elements.ui_dialog_actions.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null),"Cancel"),untangled.ui.elements.ui_flat_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (show_dialog,hide_dialog,is_visible){
return (function (){
return hide_dialog.call(null);
});})(show_dialog,hide_dialog,is_visible))
], null),"Ok"))))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"empty-state","empty-state",-632496921)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"empty-state",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Empty State\n\n  Render an icon and text for when you can't display anything when you normally would have a collection of things.\n\n  ```\n  (e/ui-empty-state {:glyph :widgets :title \"No widgets yet\" :message \"Create a widget to get started\"})\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),untangled.ui.elements.ui_iframe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null),om.dom.div.call(null,null,om.dom.link.call(null,({"rel": "stylesheet", "href": "css/untangled-ui.css"})),untangled.ui.elements.ui_empty_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"widgets","widgets",-159098978),new cljs.core.Keyword(null,"title","title",636505583),"No widgets yet",new cljs.core.Keyword(null,"message","message",-406056002),"Create a widget to get started"], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"fader","fader",554896532)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fader\n\n  Use `ui-fader` to control the visibilty of children when you want a fade in/out CSS animation to be triggered. The\n  length of the animation is configurable when you generate your application-specific CSS via the PostCSS variable\n  `--global-duration`"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706013_706022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706014_706023 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706013_706022,_STAR_print_fn_STAR_706014_706023,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706013_706022,_STAR_print_fn_STAR_706014_706023,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706019_706026 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible?","visible?",-524572054,null)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null))], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-button","e/ui-button",8869780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Symbol(null,"not","not",1044554643,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"visible?","visible?",-524572054,null),"Fade Out","Fade In")),cljs.core.list(new cljs.core.Symbol("e","ui-fader","e/ui-fader",654482156,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Symbol(null,"visible?","visible?",-524572054,null)], null),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Child"),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,"Content"))))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706019_706026;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706014_706023;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706013_706022;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fader",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (document__37934__auto__){
return (function (state_atom,_){
var map__706020 = cljs.core.deref.call(null,state_atom);
var map__706020__$1 = ((((!((map__706020 == null)))?((((map__706020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706020):map__706020);
var visible_QMARK_ = cljs.core.get.call(null,map__706020__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return om.dom.div.call(null,null,untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__706020,map__706020__$1,visible_QMARK_,document__37934__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update,new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.not);
});})(map__706020,map__706020__$1,visible_QMARK_,document__37934__auto__))
], null),(cljs.core.truth_(visible_QMARK_)?"Fade Out":"Fade In")),untangled.ui.elements.ui_fader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),visible_QMARK_], null),om.dom.div.call(null,null,"Child"),om.dom.div.call(null,null,"Content")));
});})(document__37934__auto__))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"field-sizes","field-sizes",879323567)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field with optional sizes and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706039_706047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706040_706048 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706039_706047,_STAR_print_fn_STAR_706040_706048,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706039_706047,_STAR_print_fn_STAR_706040_706048,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706045_706050 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sizes","sizes",1367003401,null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-field","e/ui-field",-730662112,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Symbol(null,"sizes","sizes",1367003401,null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ui-",new cljs.core.Symbol(null,"sizes","sizes",1367003401,null))], null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"sizes","sizes",1367003401,null)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544)], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706045_706050;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706040_706048;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706039_706047;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"field-sizes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,cljs.core.mapv.call(null,((function (document__37934__auto__){
return (function (sizes){
return untangled.ui.elements.ui_field.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),sizes,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sizes)].join('')], null),cljs.core.name.call(null,sizes));
});})(document__37934__auto__))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544)], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"field-states","field-states",-1578532206)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field with optional states and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706060_706067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706061_706068 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706060_706067,_STAR_print_fn_STAR_706061_706068,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706060_706067,_STAR_print_fn_STAR_706061_706068,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706063_706070 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"states","states",-1265422227,null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-field","e/ui-field",-730662112,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol(null,"states","states",-1265422227,null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ui-",new cljs.core.Symbol(null,"states","states",-1265422227,null))], null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"states","states",-1265422227,null)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"error","error",-978969032)], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706063_706070;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706061_706068;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706060_706067;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"field-states",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,cljs.core.mapv.call(null,((function (document__37934__auto__){
return (function (states){
return untangled.ui.elements.ui_field.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),states,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(states)].join('')], null),cljs.core.name.call(null,states));
});})(document__37934__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"error","error",-978969032)], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"field-types","field-types",1152184095)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Fields\n\n  Use `ui-field` to render a field of optional types and provide placeholder text.  Also supports custom classes.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706087_706091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706088_706092 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706087_706091,_STAR_print_fn_STAR_706088_706092,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706087_706091,_STAR_print_fn_STAR_706088_706092,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706089_706093 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-field","e/ui-field",-730662112,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"ui-",new cljs.core.Symbol(null,"type","type",-1480165421,null))], null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)))),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"color","color",1011675173)], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706089_706093;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706088_706092;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706087_706091;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"field-types",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,cljs.core.mapv.call(null,((function (document__37934__auto__){
return (function (type){
return untangled.ui.elements.ui_field.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ui-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),cljs.core.name.call(null,type));
});})(document__37934__auto__))
,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"datetime-local","datetime-local",2147123072),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"color","color",1011675173)], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"icon-colors","icon-colors",1243790929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icons\n\n  Use `ui-icon` to render an icon with designated color attributes.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706100_706106 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706101_706107 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706100_706106,_STAR_print_fn_STAR_706101_706107,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706100_706106,_STAR_print_fn_STAR_706101_706107,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706103_706115 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"active","active",1895962068)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706103_706115;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706101_706107;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706100_706106;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-colors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"active","active",1895962068)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"icon-sizes","icon-sizes",76511936)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icons\n\n  Use `ui-icon` to render an icon with designated size attributes.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706122_706128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706123_706129 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706122_706128,_STAR_print_fn_STAR_706123_706129,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706122_706128,_STAR_print_fn_STAR_706123_706129,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706124_706132 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946))),cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816)], null),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706124_706132;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706123_706129;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706122_706128;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-sizes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"large","large",-196820544)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xlarge","xlarge",-905930014)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946))),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816)], null),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"icon-bar","icon-bar",-1367463831)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Icon Bar\n\n  Renders icons on a horizontal or vertical bar.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706143_706148 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706144_706149 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706143_706148,_STAR_print_fn_STAR_706144_706149,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706143_706148,_STAR_print_fn_STAR_706144_706149,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706145_706152 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar","e/ui-icon-bar",1589295619,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar","e/ui-icon-bar",1589295619,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shifting","shifting",-1091369273),true], null),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),cljs.core.list(new cljs.core.Symbol("dom","br","dom/br",-1720432559,null),null),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar","e/ui-icon-bar",1589295619,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-icon-bar-item","e/ui-icon-bar-item",1742221104,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706145_706152;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706144_706149;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706143_706148;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"icon-bar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_icon_bar.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),untangled.ui.elements.ui_icon_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shifting","shifting",-1091369273),true], null),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),om.dom.br.call(null,null),untangled.ui.elements.ui_icon_bar.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"vertical","vertical",718696748)], null),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null)),untangled.ui.elements.ui_icon_bar_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"feedback","feedback",1624587107),new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"label","label",1718410804)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Labels\n\n  Use `ui-label` to render children within a label. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706168_706195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706169_706196 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706168_706195,_STAR_print_fn_STAR_706169_706196,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706168_706195,_STAR_print_fn_STAR_706169_706196,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706170_706199 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null),new cljs.core.Symbol(null,"icons","icons",1343390550,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"close","close",1835149582)], null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-label","e/ui-label",-523907077,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"id-",new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null))], null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null)),cljs.core.list(new cljs.core.Symbol(null,"icon","icon",-974829228,null),new cljs.core.Symbol(null,"icons","icons",1343390550,null))))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706170_706199;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706169_706196;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706168_706195;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"label",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,(function (){var iter__28512__auto__ = ((function (document__37934__auto__){
return (function untangled$ui$element_cards$iter__706171(s__706172){
return (new cljs.core.LazySeq(null,((function (document__37934__auto__){
return (function (){
var s__706172__$1 = s__706172;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__706172__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var colors = cljs.core.first.call(null,xs__7309__auto__);
var iterys__28508__auto__ = ((function (s__706172__$1,colors,xs__7309__auto__,temp__6753__auto__,document__37934__auto__){
return (function untangled$ui$element_cards$iter__706171_$_iter__706173(s__706174){
return (new cljs.core.LazySeq(null,((function (s__706172__$1,colors,xs__7309__auto__,temp__6753__auto__,document__37934__auto__){
return (function (){
var s__706174__$1 = s__706174;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__706174__$1);
if(temp__6753__auto____$1){
var s__706174__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__706174__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__706174__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__706176 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__706175 = (0);
while(true){
if((i__706175 < size__28511__auto__)){
var icons = cljs.core._nth.call(null,c__28510__auto__,i__706175);
cljs.core.chunk_append.call(null,b__706176,untangled.ui.elements.ui_label.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),colors,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icons)].join('')], null),cljs.core.name.call(null,colors),untangled.icons.icon.call(null,icons)));

var G__706216 = (i__706175 + (1));
i__706175 = G__706216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706176),untangled$ui$element_cards$iter__706171_$_iter__706173.call(null,cljs.core.chunk_rest.call(null,s__706174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__706176),null);
}
} else {
var icons = cljs.core.first.call(null,s__706174__$2);
return cljs.core.cons.call(null,untangled.ui.elements.ui_label.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),colors,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icons)].join('')], null),cljs.core.name.call(null,colors),untangled.icons.icon.call(null,icons)),untangled$ui$element_cards$iter__706171_$_iter__706173.call(null,cljs.core.rest.call(null,s__706174__$2)));
}
} else {
return null;
}
break;
}
});})(s__706172__$1,colors,xs__7309__auto__,temp__6753__auto__,document__37934__auto__))
,null,null));
});})(s__706172__$1,colors,xs__7309__auto__,temp__6753__auto__,document__37934__auto__))
;
var fs__28509__auto__ = cljs.core.seq.call(null,iterys__28508__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"close","close",1835149582)], null)));
if(fs__28509__auto__){
return cljs.core.concat.call(null,fs__28509__auto__,untangled$ui$element_cards$iter__706171.call(null,cljs.core.rest.call(null,s__706172__$1)));
} else {
var G__706218 = cljs.core.rest.call(null,s__706172__$1);
s__706172__$1 = G__706218;
continue;
}
} else {
return null;
}
break;
}
});})(document__37934__auto__))
,null,null));
});})(document__37934__auto__))
;
return iter__28512__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null));
})()),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"loader","loader",-462395423)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Loaders\n\n  Use `ui-loader` to render a loading graphic.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706227_706230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706228_706231 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706227_706230,_STAR_print_fn_STAR_706228_706231,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706227_706230,_STAR_print_fn_STAR_706228_706231,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706229_706233 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-loader","e/ui-loader",-1668666514,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("e","ui-loader","e/ui-loader",-1668666514,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-loader","e/ui-loader",-1668666514,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706229_706233;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706228_706231;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706227_706230;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"loader",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,({"style": ({"height": "50px"})}),untangled.ui.elements.ui_loader.call(null,cljs.core.PersistentArrayMap.EMPTY),untangled.ui.elements.ui_loader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),untangled.ui.elements.ui_loader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"message","message",-406056002)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Messages\n\n  Use `ui-message` to render children within a message. Common children include text and icons.\n\n  Some samples are shown below:\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706237_706246 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706238_706247 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706237_706246,_STAR_print_fn_STAR_706238_706247,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706237_706246,_STAR_print_fn_STAR_706238_706247,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706239_706253 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"colors","colors",-1497261037,null)], null),cljs.core.list(new cljs.core.Symbol("e","ui-message","e/ui-message",2023085085,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Symbol(null,"colors","colors",-1497261037,null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"id-",new cljs.core.Symbol(null,"colors","colors",-1497261037,null))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"This is a ",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"colors","colors",-1497261037,null))," message"))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-message","e/ui-message",2023085085,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),"This is a warning message with another child.",cljs.core.list(new cljs.core.Symbol("e","ui-icon","e/ui-icon",1894618354,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706239_706253;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706238_706247;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706237_706246;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,cljs.core.mapv.call(null,((function (document__37934__auto__){
return (function (colors){
return untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),colors,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("id-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors)].join('')], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,colors)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" message")].join(''));
});})(document__37934__auto__))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"accent","accent",-1826298468)], null)),untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),"This is a warning message with another child.",untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"arrow_forward","arrow_forward",-613078887),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Notifications\n\n  Use `ui-notification` to render a notification of designated kind and with.\n\n  Some samples are shown below:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706263_706267 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706264_706268 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706263_706267,_STAR_print_fn_STAR_706264_706268,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706263_706267,_STAR_print_fn_STAR_706264_706268,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706265_706271 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-notification","e/ui-notification",-1979249539,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"informative","informative",1852560673)], null),cljs.core.list(new cljs.core.Symbol("e","ui-notification-title","e/ui-notification-title",665607766,null),cljs.core.PersistentArrayMap.EMPTY,"Informative"),cljs.core.list(new cljs.core.Symbol("e","ui-notification-body","e/ui-notification-body",809446266,null),cljs.core.PersistentArrayMap.EMPTY,"You have been notified.")),cljs.core.list(new cljs.core.Symbol("dom","br","dom/br",-1720432559,null),null),cljs.core.list(new cljs.core.Symbol("e","ui-notification","e/ui-notification",-1979249539,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"success","success",1890645906)], null),cljs.core.list(new cljs.core.Symbol("e","ui-notification-title","e/ui-notification-title",665607766,null),cljs.core.PersistentArrayMap.EMPTY,"Success"),cljs.core.list(new cljs.core.Symbol("e","ui-notification-body","e/ui-notification-body",809446266,null),cljs.core.PersistentArrayMap.EMPTY,"You did it!  You're awesome.")),cljs.core.list(new cljs.core.Symbol("dom","br","dom/br",-1720432559,null),null),cljs.core.list(new cljs.core.Symbol("e","ui-notification","e/ui-notification",-1979249539,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),cljs.core.list(new cljs.core.Symbol("e","ui-notification-title","e/ui-notification-title",665607766,null),cljs.core.PersistentArrayMap.EMPTY,"Warning"),cljs.core.list(new cljs.core.Symbol("e","ui-notification-body","e/ui-notification-body",809446266,null),cljs.core.PersistentArrayMap.EMPTY,"You have been warned.")),cljs.core.list(new cljs.core.Symbol("dom","br","dom/br",-1720432559,null),null),cljs.core.list(new cljs.core.Symbol("e","ui-notification","e/ui-notification",-1979249539,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.list(new cljs.core.Symbol("e","ui-notification-title","e/ui-notification-title",665607766,null),cljs.core.PersistentArrayMap.EMPTY,"Error"),cljs.core.list(new cljs.core.Symbol("e","ui-notification-body","e/ui-notification-body",809446266,null),cljs.core.PersistentArrayMap.EMPTY,"There has been an error.")),cljs.core.list(new cljs.core.Symbol("dom","br","dom/br",-1720432559,null),null),cljs.core.list(new cljs.core.Symbol("e","ui-notification","e/ui-notification",-1979249539,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),cljs.core.list(new cljs.core.Symbol("e","ui-notification-body","e/ui-notification-body",809446266,null),cljs.core.PersistentArrayMap.EMPTY,"This is a wide message."),cljs.core.list(new cljs.core.Symbol("e","ui-notification-title","e/ui-notification-title",665607766,null),cljs.core.PersistentArrayMap.EMPTY,"Width"))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706265_706271;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706264_706268;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706263_706267;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"notifications",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"informative","informative",1852560673)], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Informative"),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You have been notified.")),om.dom.br.call(null,null),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"success","success",1890645906)], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Success"),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You did it!  You're awesome.")),om.dom.br.call(null,null),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Warning"),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"You have been warned.")),om.dom.br.call(null,null),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"error","error",-978969032)], null),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Error"),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"There has been an error.")),om.dom.br.call(null,null),untangled.ui.elements.ui_notification.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"wide","wide",-151772487)], null),untangled.ui.elements.ui_notification_body.call(null,cljs.core.PersistentArrayMap.EMPTY,"This is a wide message."),untangled.ui.elements.ui_notification_title.call(null,cljs.core.PersistentArrayMap.EMPTY,"Width"))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"progress","progress",244323547)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Progress"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706276_706279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706277_706280 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706276_706279,_STAR_print_fn_STAR_706277_706280,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706276_706279,_STAR_print_fn_STAR_706277_706280,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706278_706281 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-progress","e/ui-progress",673416806,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("dom","p","dom/p",1791938586,null),null," "),cljs.core.list(new cljs.core.Symbol("e","ui-progress","e/ui-progress",673416806,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),"70"], null)),cljs.core.list(new cljs.core.Symbol("dom","p","dom/p",1791938586,null),null," "),cljs.core.list(new cljs.core.Symbol("e","ui-progress","e/ui-progress",673416806,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),"50",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"dense","dense",-1352835783)], null))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706278_706281;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706277_706280;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706276_706279;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"progress",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_progress.call(null,cljs.core.PersistentArrayMap.EMPTY),om.dom.p.call(null,null," "),untangled.ui.elements.ui_progress.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),"70"], null)),om.dom.p.call(null,null," "),untangled.ui.elements.ui_progress.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),"50",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"dense","dense",-1352835783)], null))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"radio","radio",1323726374)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"radio",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Radio buttons\n\n  Radio buttons render normal react controls for a radio button input with correct DOM. You may optionally\n  provide a label, as you would expect.\n\n  ```\n  (dom/div nil\n    (e/ui-radio {:id \"radio-1\" :onClick #(choose 1) :checked (= choice 1)})\n    (dom/div nil\n      (e/ui-radio {:id \"radio-2\" :onClick #(choose 2) :checked (= choice 2)})\n      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-2\"} \"With bel!\"))\n    (e/ui-radio {:id \"radio-3\" :onClick #(choose 3) :checked (= choice 3)\n                 :disabled true})\n    (dom/div nil\n      (e/ui-radio {:id \"radio-4\" :onClick #(choose 4) :checked (= choice 4)\n                   :disabled true})\n      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-4\"\n                      :disabled true} \"With a label!\")))\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var choose = (function (v){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"choice","choice",-1375170727),v);
});
var choice = new cljs.core.Keyword(null,"choice","choice",-1375170727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return om.dom.div.call(null,null,untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-1",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (choose,choice){
return (function (){
return choose.call(null,(1));
});})(choose,choice))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,choice,(1))], null)),om.dom.div.call(null,null,untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-2",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (choose,choice){
return (function (){
return choose.call(null,(2));
});})(choose,choice))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,choice,(2))], null)),om.dom.label.call(null,({"className": "is-optional", "htmlFor": "radio-2"}),"With a label!")),untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-3",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (choose,choice){
return (function (){
return choose.call(null,(3));
});})(choose,choice))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,choice,(3)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),om.dom.div.call(null,null,untangled.ui.elements.ui_radio.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"radio-4",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (choose,choice){
return (function (){
return choose.call(null,(4));
});})(choose,choice))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,choice,(4)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)),om.dom.label.call(null,({"className": "is-optional", "htmlFor": "radio-4", "disabled": true}),"With a label!")));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choice","choice",-1375170727),(1)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"switch","switch",71881310)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"switch",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Switch\n\n  These render a switch input which is just a stylized checkbox.\n\n  ```\n    (dom/div nil\n    (e/ui-switch {:checked current-state :id \"switch-1\"\n                  :onClick #(move-to-next-state)})\n    (dom/label #js {:className \"is-optional\"} \"With a label!\"))\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
var current_state = new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var states = cljs.core.take.call(null,(4),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null)));
var next_state = cljs.core.second.call(null,cljs.core.drop_while.call(null,((function (current_state,states){
return (function (p1__706390_SHARP_){
return cljs.core.not_EQ_.call(null,current_state,p1__706390_SHARP_);
});})(current_state,states))
,states));
var move_to_next_state = ((function (current_state,states,next_state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"checked","checked",-50955819),next_state);
});})(current_state,states,next_state))
;
return om.dom.div.call(null,null,untangled.ui.elements.ui_switch.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),current_state,new cljs.core.Keyword(null,"id","id",-1388402092),"switch-1",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_state,states,next_state,move_to_next_state){
return (function (){
return move_to_next_state.call(null);
});})(current_state,states,next_state,move_to_next_state))
], null)),om.dom.label.call(null,({"className": "is-optional", "htmlFor": "switch-1"}),"With a label!"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.element_cards","untangled.ui.element_cards",548720915),new cljs.core.Keyword(null,"tabs","tabs",-779855354)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
var document__37934__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("# Tabs\n\n  Renders tabs with text inside a tabs container.\n  "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_706415_706432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_706416_706433 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_706415_706432,_STAR_print_fn_STAR_706416_706433,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_706415_706432,_STAR_print_fn_STAR_706416_706433,sb__28742__auto__))
;

try{var _STAR_print_pprint_dispatch_STAR_706417_706441 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{cljs.pprint.pprint.call(null,cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),null,cljs.core.list(new cljs.core.Symbol("e","ui-tabs","e/ui-tabs",-293065799,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs"], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),cljs.core.list(new cljs.core.Symbol("e","ui-tabs","e/ui-tabs",-293065799,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null))),cljs.core.list(new cljs.core.Symbol("dom","div","dom/div",-1597676971,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"t-dark"], null),cljs.core.list(new cljs.core.Symbol("e","ui-tabs","e/ui-tabs",-293065799,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),cljs.core.list(new cljs.core.Symbol("e","ui-tab","e/ui-tab",227321141,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null))))));
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_706417_706441;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_706416_706433;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_706415_706432;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"documentation","documentation",1889593999),document__37934__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),om.dom.div.call(null,null,untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs"], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Support"], null))),untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"primary","primary",817773892)], null))),om.dom.div.call(null,({"className": "t-dark"}),untangled.ui.elements.ui_tabs.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Home",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Docs",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null)),untangled.ui.elements.ui_tab.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Support",new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"contrast","contrast",568337131)], null))))),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));

//# sourceMappingURL=element_cards.js.map?rel=1489703354666
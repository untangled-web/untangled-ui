// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.menu_visuals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.ui.menu');
goog.require('untangled.i18n');
untangled.ui.menu_visuals.menu_with_item = untangled.ui.menu.menu(cljs.core.cst$kw$a,"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$ia,"Item Label")], null));
untangled.ui.menu_visuals.menu_with_icon = untangled.ui.menu.menu(cljs.core.cst$kw$a,"Label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.menu.menu_item(cljs.core.cst$kw$ia,"Item Label")], null));
untangled.ui.menu_visuals.open_menu = untangled.ui.menu.set_open_impl(untangled.ui.menu_visuals.menu_with_item,true);
untangled.ui.menu_visuals.menu_with_selection = untangled.ui.menu.select_impl(untangled.ui.menu_visuals.menu_with_item,cljs.core.cst$kw$ia);
untangled.ui.menu_visuals.open_menu_with_selection = untangled.ui.menu.set_open_impl(untangled.ui.menu_visuals.menu_with_selection,true);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_visuals,cljs.core.cst$kw$menu_DASH_closed], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-closed",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.menu.ui_menu(untangled.ui.menu_visuals.menu_with_item),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_visuals,cljs.core.cst$kw$menu_DASH_closed_DASH_with_DASH_selection], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-closed-with-selection",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.menu.ui_menu(untangled.ui.menu_visuals.menu_with_selection),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_visuals,cljs.core.cst$kw$menu_DASH_open], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-open",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.menu.ui_menu(untangled.ui.menu_visuals.open_menu),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_visuals,cljs.core.cst$kw$menu_DASH_open_DASH_with_DASH_selection], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-open-with-selection",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.menu.ui_menu(untangled.ui.menu_visuals.open_menu_with_selection),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$menu_visuals,cljs.core.cst$kw$menu_DASH_icon], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"menu-icon",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,untangled.ui.menu.ui_menu.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.menu_visuals.menu_with_icon,cljs.core.array_seq([cljs.core.cst$kw$style,cljs.core.cst$kw$icon], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

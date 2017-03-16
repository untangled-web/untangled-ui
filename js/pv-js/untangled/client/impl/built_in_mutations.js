// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled_SLASH_load,(function (p__46946,_,p__46947){
var map__46948 = p__46946;
var map__46948__$1 = ((((!((map__46948 == null)))?((((map__46948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46948):map__46948);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46948__$1,cljs.core.cst$kw$state);
var map__46949 = p__46947;
var map__46949__$1 = ((((!((map__46949 == null)))?((((map__46949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46949):map__46949);
var config = map__46949__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46949__$1,cljs.core.cst$kw$post_DASH_mutation);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46949__$1,cljs.core.cst$kw$remote);
if(cljs.core.truth_((function (){var and__7490__auto__ = post_mutation;
if(cljs.core.truth_(and__7490__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__7490__auto__;
}
})())){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["post-mutation must be a symbol or nil"], 0));
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:cljs.core.cst$kw$remote),true,cljs.core.cst$kw$action,((function (map__46948,map__46948__$1,state,map__46949,map__46949__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$state,state));
});})(map__46948,map__46948__$1,state,map__46949,map__46949__$1,config,post_mutation,remote))
]);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_change_DASH_locale,(function (p__46958,_,p__46959){
var map__46960 = p__46958;
var map__46960__$1 = ((((!((map__46960 == null)))?((((map__46960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46960):map__46960);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46960__$1,cljs.core.cst$kw$state);
var map__46962 = p__46959;
var map__46962__$1 = ((((!((map__46962 == null)))?((((map__46962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46962):map__46962);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46962__$1,cljs.core.cst$kw$lang);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__46960,map__46960__$1,state,map__46962,map__46962__$1,lang){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(untangled.i18n.core._STAR_current_locale_STAR_,lang) : cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__46960,map__46960__$1,state,map__46962,map__46962__$1,lang){
return (function (p1__46957_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46957_SHARP_,cljs.core.cst$kw$ui_SLASH_locale,lang),cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});})(map__46960,map__46960__$1,state,map__46962,map__46962__$1,lang))
);
});})(map__46960,map__46960__$1,state,map__46962,map__46962__$1,lang))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$tx_SLASH_fallback,(function (env,_,p__46977){
var map__46978 = p__46977;
var map__46978__$1 = ((((!((map__46978 == null)))?((((map__46978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46978):map__46978);
var params = map__46978__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,cljs.core.cst$kw$action);
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,cljs.core.cst$kw$execute);
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__46978,map__46978__$1,params,action,execute){
return (function (){
var G__46985 = (function (){var G__46986 = env;
var G__46987 = action;
var G__46988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.cst$kw$action,cljs.core.array_seq([cljs.core.cst$kw$execute], 0));
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46986,G__46987,G__46988) : untangled.client.mutations.mutate.call(null,G__46986,G__46987,G__46988));
})();
var G__46985__$1 = (((G__46985 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46985));
if((G__46985__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46985__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__46978,map__46978__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_set_DASH_props,(function (p__47011,_,params){
var map__47012 = p__47011;
var map__47012__$1 = ((((!((map__47012 == null)))?((((map__47012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47012):map__47012);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47012__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47012__$1,cljs.core.cst$kw$ref);
if((ref == null)){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ui/set-props requires component to have an ident."], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47012,map__47012__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__47012,map__47012__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([st,params], 0));
});})(map__47012,map__47012__$1,state,ref))
);
});})(map__47012,map__47012__$1,state,ref))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_toggle,(function (p__47017,_,p__47018){
var map__47019 = p__47017;
var map__47019__$1 = ((((!((map__47019 == null)))?((((map__47019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47019):map__47019);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47019__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47019__$1,cljs.core.cst$kw$ref);
var map__47020 = p__47018;
var map__47020__$1 = ((((!((map__47020 == null)))?((((map__47020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47020):map__47020);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47020__$1,cljs.core.cst$kw$field);
if((ref == null)){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ui/toggle requires component to have an ident."], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47019,map__47019__$1,state,ref,map__47020,map__47020__$1,field){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__47019,map__47019__$1,state,ref,map__47020,map__47020__$1,field))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__47035,k,_){
var map__47036 = p__47035;
var map__47036__$1 = ((((!((map__47036 == null)))?((((map__47036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47036):map__47036);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.cst$kw$target);
if((target == null)){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([untangled.client.logging.value_message("Unknown app state mutation. Have you required the file with your mutations?",k)], 0));
} else {
return null;
}
}));
untangled.client.mutations.post_mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,k,p){
return null;
}));

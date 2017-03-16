// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled_SLASH_load,(function (p__47174,_,p__47175){
var map__47176 = p__47174;
var map__47176__$1 = ((((!((map__47176 == null)))?((((map__47176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47176):map__47176);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,cljs.core.cst$kw$state);
var map__47177 = p__47175;
var map__47177__$1 = ((((!((map__47177 == null)))?((((map__47177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47177):map__47177);
var config = map__47177__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,cljs.core.cst$kw$post_DASH_mutation);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,cljs.core.cst$kw$remote);
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

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:cljs.core.cst$kw$remote),true,cljs.core.cst$kw$action,((function (map__47176,map__47176__$1,state,map__47177,map__47177__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$state,state));
});})(map__47176,map__47176__$1,state,map__47177,map__47177__$1,config,post_mutation,remote))
]);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_change_DASH_locale,(function (p__47181,_,p__47182){
var map__47183 = p__47181;
var map__47183__$1 = ((((!((map__47183 == null)))?((((map__47183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47183):map__47183);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,cljs.core.cst$kw$state);
var map__47184 = p__47182;
var map__47184__$1 = ((((!((map__47184 == null)))?((((map__47184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47184):map__47184);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184__$1,cljs.core.cst$kw$lang);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47183,map__47183__$1,state,map__47184,map__47184__$1,lang){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(untangled.i18n.core._STAR_current_locale_STAR_,lang) : cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__47183,map__47183__$1,state,map__47184,map__47184__$1,lang){
return (function (p1__47180_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47180_SHARP_,cljs.core.cst$kw$ui_SLASH_locale,lang),cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});})(map__47183,map__47183__$1,state,map__47184,map__47184__$1,lang))
);
});})(map__47183,map__47183__$1,state,map__47184,map__47184__$1,lang))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$tx_SLASH_fallback,(function (env,_,p__47187){
var map__47188 = p__47187;
var map__47188__$1 = ((((!((map__47188 == null)))?((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47188):map__47188);
var params = map__47188__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,cljs.core.cst$kw$action);
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,cljs.core.cst$kw$execute);
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47188,map__47188__$1,params,action,execute){
return (function (){
var G__47190 = (function (){var G__47191 = env;
var G__47192 = action;
var G__47193 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.cst$kw$action,cljs.core.array_seq([cljs.core.cst$kw$execute], 0));
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__47191,G__47192,G__47193) : untangled.client.mutations.mutate.call(null,G__47191,G__47192,G__47193));
})();
var G__47190__$1 = (((G__47190 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__47190));
if((G__47190__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__47190__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__47188,map__47188__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_set_DASH_props,(function (p__47194,_,params){
var map__47195 = p__47194;
var map__47195__$1 = ((((!((map__47195 == null)))?((((map__47195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47195):map__47195);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195__$1,cljs.core.cst$kw$ref);
if((ref == null)){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ui/set-props requires component to have an ident."], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47195,map__47195__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ref,((function (map__47195,map__47195__$1,state,ref){
return (function (st){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([st,params], 0));
});})(map__47195,map__47195__$1,state,ref))
);
});})(map__47195,map__47195__$1,state,ref))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$ui_SLASH_toggle,(function (p__47197,_,p__47198){
var map__47199 = p__47197;
var map__47199__$1 = ((((!((map__47199 == null)))?((((map__47199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47199):map__47199);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47199__$1,cljs.core.cst$kw$state);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47199__$1,cljs.core.cst$kw$ref);
var map__47200 = p__47198;
var map__47200__$1 = ((((!((map__47200 == null)))?((((map__47200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47200):map__47200);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47200__$1,cljs.core.cst$kw$field);
if((ref == null)){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ui/toggle requires component to have an ident."], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__47199,map__47199__$1,state,ref,map__47200,map__47200__$1,field){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,field),cljs.core.not);
});})(map__47199,map__47199__$1,state,ref,map__47200,map__47200__$1,field))
], null);
}));
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__47203,k,_){
var map__47204 = p__47203;
var map__47204__$1 = ((((!((map__47204 == null)))?((((map__47204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47204):map__47204);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47204__$1,cljs.core.cst$kw$target);
if((target == null)){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([untangled.client.logging.value_message("Unknown app state mutation. Have you required the file with your mutations?",k)], 0));
} else {
return null;
}
}));
untangled.client.mutations.post_mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (env,k,p){
return null;
}));

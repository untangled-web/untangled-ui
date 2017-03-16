// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__702319,_,p__702320){
var map__702321 = p__702319;
var map__702321__$1 = ((((!((map__702321 == null)))?((((map__702321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702321):map__702321);
var state = cljs.core.get.call(null,map__702321__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__702322 = p__702320;
var map__702322__$1 = ((((!((map__702322 == null)))?((((map__702322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702322):map__702322);
var config = map__702322__$1;
var post_mutation = cljs.core.get.call(null,map__702322__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.call(null,map__702322__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
if(cljs.core.truth_((function (){var and__27638__auto__ = post_mutation;
if(cljs.core.truth_(and__27638__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__27638__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__702321,map__702321__$1,state,map__702322,map__702322__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__702321,map__702321__$1,state,map__702322,map__702322__$1,config,post_mutation,remote))
]);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__702340,_,p__702341){
var map__702342 = p__702340;
var map__702342__$1 = ((((!((map__702342 == null)))?((((map__702342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702342):map__702342);
var state = cljs.core.get.call(null,map__702342__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__702343 = p__702341;
var map__702343__$1 = ((((!((map__702343 == null)))?((((map__702343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702343):map__702343);
var lang = cljs.core.get.call(null,map__702343__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__702342,map__702342__$1,state,map__702343,map__702343__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__702342,map__702342__$1,state,map__702343,map__702343__$1,lang){
return (function (p1__702339_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__702339_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__702342,map__702342__$1,state,map__702343,map__702343__$1,lang))
);
});})(map__702342,map__702342__$1,state,map__702343,map__702343__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__702373){
var map__702374 = p__702373;
var map__702374__$1 = ((((!((map__702374 == null)))?((((map__702374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702374):map__702374);
var params = map__702374__$1;
var action = cljs.core.get.call(null,map__702374__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__702374__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__702374,map__702374__$1,params,action,execute){
return (function (){
var G__702376 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__702376__$1 = (((G__702376 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__702376));
if((G__702376__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__702376__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__702374,map__702374__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__702386,_,params){
var map__702387 = p__702386;
var map__702387__$1 = ((((!((map__702387 == null)))?((((map__702387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702387):map__702387);
var state = cljs.core.get.call(null,map__702387__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__702387__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__702387,map__702387__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__702387,map__702387__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__702387,map__702387__$1,state,ref))
);
});})(map__702387,map__702387__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__702409,_,p__702410){
var map__702411 = p__702409;
var map__702411__$1 = ((((!((map__702411 == null)))?((((map__702411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702411):map__702411);
var state = cljs.core.get.call(null,map__702411__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__702411__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__702412 = p__702410;
var map__702412__$1 = ((((!((map__702412 == null)))?((((map__702412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702412):map__702412);
var field = cljs.core.get.call(null,map__702412__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__702411,map__702411__$1,state,ref,map__702412,map__702412__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__702411,map__702411__$1,state,ref,map__702412,map__702412__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__702431,k,_){
var map__702432 = p__702431;
var map__702432__$1 = ((((!((map__702432 == null)))?((((map__702432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702432):map__702432);
var target = cljs.core.get.call(null,map__702432__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1489703351369
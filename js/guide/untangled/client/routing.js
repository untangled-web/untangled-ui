// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.routing');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.logging');
untangled.client.routing.routing_tree_key = new cljs.core.Keyword("untangled.client.routing","routing-tree","untangled.client.routing/routing-tree",-1326549102);
untangled.client.routing.routers_table = new cljs.core.Keyword("untangled.client.routing.routers","by-id","untangled.client.routing.routers/by-id",878971844);
/**
 * Make a route name that executes the provided routing instructions to change which screen in on the UI. routing-instructions
 *   must be a vector. Returns an item that can be passed to `routing-tree` to generate your overall application's routing
 *   plan.
 * 
 *   `(make-route :route/a [(router-instruction ...) ...])`
 * 
 *   
 */
untangled.client.routing.make_route = (function untangled$client$routing$make_route(name,routing_instructions){
if(cljs.core.vector_QMARK_.call(null,routing_instructions)){
} else {
throw (new Error("Assert failed: (vector? routing-instructions)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"instructions","instructions",1724333802),routing_instructions], null);
});
/**
 * Generate initial state for your application's routing tree. The return value of this should be merged into your overall
 *   app state in your Root UI component
 * 
 *   ```
 *   (defui Root
 *  static uc/InitialAppState
 *  (initial-state [cls params]  (merge {:child-key (uc/get-initial-state Child)}
 *                                      (routing-tree
 *                                        (make-route :route/a [(router-instruction ...)])
 *                                        ...)))
 *  ...
 *   ```
 *   
 */
untangled.client.routing.routing_tree = (function untangled$client$routing$routing_tree(var_args){
var args__28878__auto__ = [];
var len__28871__auto___704381 = arguments.length;
var i__28872__auto___704382 = (0);
while(true){
if((i__28872__auto___704382 < len__28871__auto___704381)){
args__28878__auto__.push((arguments[i__28872__auto___704382]));

var G__704384 = (i__28872__auto___704382 + (1));
i__28872__auto___704382 = G__704384;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic = (function (routes){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([untangled.client.routing.routing_tree_key,cljs.core.reduce.call(null,(function (tree,p__704377){
var map__704378 = p__704377;
var map__704378__$1 = ((((!((map__704378 == null)))?((((map__704378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704378):map__704378);
var name = cljs.core.get.call(null,map__704378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var instructions = cljs.core.get.call(null,map__704378__$1,new cljs.core.Keyword(null,"instructions","instructions",1724333802));
return cljs.core.assoc.call(null,tree,name,instructions);
}),cljs.core.PersistentArrayMap.EMPTY,routes)]);
});

untangled.client.routing.routing_tree.cljs$lang$maxFixedArity = (0);

untangled.client.routing.routing_tree.cljs$lang$applyTo = (function (seq704375){
return untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq704375));
});

/**
 * Return the definition of a change-route instruction.
 */
untangled.client.routing.router_instruction = (function untangled$client$routing$router_instruction(router_id,target_screen_ident){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target-router","target-router",1118628820),router_id,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524),target_screen_ident], null);
});
/**
 * Get the current route from the router with the given id
 */
untangled.client.routing.current_route = (function untangled$client$routing$current_route(state_map,router_id){
return cljs.core.get_in.call(null,state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routers_table,router_id,new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null));
});
/**
 * Replace any keywords of the form :params/X with the value of (get route-params X)
 */
untangled.client.routing.set_ident_route_params = (function untangled$client$routing$set_ident_route_params(ident,route_params){
return cljs.core.mapv.call(null,(function (element){
if(((element instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"param",cljs.core.namespace.call(null,element)))){
return cljs.core.keyword.call(null,cljs.core.get.call(null,route_params,cljs.core.keyword.call(null,cljs.core.name.call(null,element)),element));
} else {
return element;
}
}),ident);
});
/**
 * Set the given screen-ident as the current route on the router with the given ID. Returns a new application
 *   state map.
 */
untangled.client.routing.set_route = (function untangled$client$routing$set_route(state_map,router_id,screen_ident){
return cljs.core.assoc_in.call(null,state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routers_table,router_id,new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null),screen_ident);
});
/**
 * Given the app state map, returns a new map that has the routing graph links updated for the given route/params
 *   as a bidi match.
 */
untangled.client.routing.update_routing_links = (function untangled$client$routing$update_routing_links(state_map,p__704406){
var map__704420 = p__704406;
var map__704420__$1 = ((((!((map__704420 == null)))?((((map__704420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704420):map__704420);
var handler = cljs.core.get.call(null,map__704420__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__704420__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var routing_instructions = cljs.core.get_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routing_tree_key,handler], null));
if(!(((routing_instructions == null)) || (cljs.core.vector_QMARK_.call(null,routing_instructions)))){
return untangled.client.logging.error.call(null,"Routing tree does not contain a vector of routing-instructions for handler ",handler);
} else {
return cljs.core.reduce.call(null,((function (routing_instructions,map__704420,map__704420__$1,handler,route_params){
return (function (m,p__704422){
var map__704423 = p__704422;
var map__704423__$1 = ((((!((map__704423 == null)))?((((map__704423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704423):map__704423);
var target_router = cljs.core.get.call(null,map__704423__$1,new cljs.core.Keyword(null,"target-router","target-router",1118628820));
var target_screen = cljs.core.get.call(null,map__704423__$1,new cljs.core.Keyword(null,"target-screen","target-screen",-744688524));
var parameterized_screen_ident = untangled.client.routing.set_ident_route_params.call(null,target_screen,route_params);
return untangled.client.routing.set_route.call(null,m,target_router,parameterized_screen_ident);
});})(routing_instructions,map__704420,map__704420__$1,handler,route_params))
,state_map,routing_instructions);
}
});
/**
 * Om Mutation (use in transact! only):
 *   Change the application's overall UI route to the given route by handler. Handler must be a single keyword that indicates an entry in
 *   your routing tree (which must be in the initial app state of your UI root). route-params is a map of key-value pairs
 *   that will be substituted in the target screen idents of the routing tree.
 */
untangled.client.routing.route_to = (function untangled$client$routing$route_to(p__704444){
var map__704447 = p__704444;
var map__704447__$1 = ((((!((map__704447 == null)))?((((map__704447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704447):map__704447);
var handler = cljs.core.get.call(null,map__704447__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__704447__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return null;
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.client.routing","route-to","untangled.client.routing/route-to",2054911520,null),(function (p__704451,k,p){
var map__704452 = p__704451;
var map__704452__$1 = ((((!((map__704452 == null)))?((((map__704452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704452):map__704452);
var state = cljs.core.get.call(null,map__704452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__704452,map__704452__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.client.routing.update_routing_links,p);
});})(map__704452,map__704452__$1,state))
], null);
}));

//# sourceMappingURL=routing.js.map?rel=1489703352937
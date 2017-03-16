// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.mutations');
goog.require('untangled.client.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.logging');
untangled.client.routing.routing_tree_key = cljs.core.cst$kw$untangled$client$routing_SLASH_routing_DASH_tree;
untangled.client.routing.routers_table = cljs.core.cst$kw$untangled$client$routing$routers_SLASH_by_DASH_id;
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
if(cljs.core.vector_QMARK_(routing_instructions)){
} else {
throw (new Error("Assert failed: (vector? routing-instructions)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$instructions,routing_instructions], null);
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
var args__8730__auto__ = [];
var len__8723__auto___51488 = arguments.length;
var i__8724__auto___51489 = (0);
while(true){
if((i__8724__auto___51489 < len__8723__auto___51488)){
args__8730__auto__.push((arguments[i__8724__auto___51489]));

var G__51490 = (i__8724__auto___51489 + (1));
i__8724__auto___51489 = G__51490;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic = (function (routes){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([untangled.client.routing.routing_tree_key,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tree,p__51485){
var map__51486 = p__51485;
var map__51486__$1 = ((((!((map__51486 == null)))?((((map__51486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51486):map__51486);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,cljs.core.cst$kw$name);
var instructions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,cljs.core.cst$kw$instructions);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,name,instructions);
}),cljs.core.PersistentArrayMap.EMPTY,routes)]);
});

untangled.client.routing.routing_tree.cljs$lang$maxFixedArity = (0);

untangled.client.routing.routing_tree.cljs$lang$applyTo = (function (seq51484){
return untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51484));
});

/**
 * Return the definition of a change-route instruction.
 */
untangled.client.routing.router_instruction = (function untangled$client$routing$router_instruction(router_id,target_screen_ident){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target_DASH_router,router_id,cljs.core.cst$kw$target_DASH_screen,target_screen_ident], null);
});
/**
 * Get the current route from the router with the given id
 */
untangled.client.routing.current_route = (function untangled$client$routing$current_route(state_map,router_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routers_table,router_id,cljs.core.cst$kw$current_DASH_route], null));
});
/**
 * Replace any keywords of the form :params/X with the value of (get route-params X)
 */
untangled.client.routing.set_ident_route_params = (function untangled$client$routing$set_ident_route_params(ident,route_params){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
if(((element instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(element)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(route_params,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(element)),element));
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
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routers_table,router_id,cljs.core.cst$kw$current_DASH_route], null),screen_ident);
});
/**
 * Given the app state map, returns a new map that has the routing graph links updated for the given route/params
 *   as a bidi match.
 */
untangled.client.routing.update_routing_links = (function untangled$client$routing$update_routing_links(state_map,p__51491){
var map__51497 = p__51491;
var map__51497__$1 = ((((!((map__51497 == null)))?((((map__51497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51497):map__51497);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51497__$1,cljs.core.cst$kw$handler);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51497__$1,cljs.core.cst$kw$route_DASH_params);
var routing_instructions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.routing_tree_key,handler], null));
if(!(((routing_instructions == null)) || (cljs.core.vector_QMARK_(routing_instructions)))){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Routing tree does not contain a vector of routing-instructions for handler ",handler], 0));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (routing_instructions,map__51497,map__51497__$1,handler,route_params){
return (function (m,p__51499){
var map__51500 = p__51499;
var map__51500__$1 = ((((!((map__51500 == null)))?((((map__51500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51500):map__51500);
var target_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,cljs.core.cst$kw$target_DASH_router);
var target_screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,cljs.core.cst$kw$target_DASH_screen);
var parameterized_screen_ident = untangled.client.routing.set_ident_route_params(target_screen,route_params);
return untangled.client.routing.set_route(m,target_router,parameterized_screen_ident);
});})(routing_instructions,map__51497,map__51497__$1,handler,route_params))
,state_map,routing_instructions);
}
});
/**
 * Om Mutation (use in transact! only):
 *   Change the application's overall UI route to the given route by handler. Handler must be a single keyword that indicates an entry in
 *   your routing tree (which must be in the initial app state of your UI root). route-params is a map of key-value pairs
 *   that will be substituted in the target screen idents of the routing tree.
 */
untangled.client.routing.route_to = (function untangled$client$routing$route_to(p__51502){
var map__51505 = p__51502;
var map__51505__$1 = ((((!((map__51505 == null)))?((((map__51505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51505):map__51505);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51505__$1,cljs.core.cst$kw$handler);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51505__$1,cljs.core.cst$kw$route_DASH_params);
return null;
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$client$routing_SLASH_route_DASH_to,(function (p__51507,k,p){
var map__51508 = p__51507;
var map__51508__$1 = ((((!((map__51508 == null)))?((((map__51508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51508):map__51508);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51508,map__51508__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,untangled.client.routing.update_routing_links,p);
});})(map__51508,map__51508__$1,state))
], null);
}));

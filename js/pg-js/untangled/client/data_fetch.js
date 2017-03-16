// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('om.next');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('om.util');





/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
untangled.client.data_fetch.load_params_STAR_ = (function untangled$client$data_fetch$load_params_STAR_(server_property_or_ident,SubqueryClass,p__50943){
var map__50948 = p__50943;
var map__50948__$1 = ((((!((map__50948 == null)))?((((map__50948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50948):map__50948);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,cljs.core.cst$kw$target);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50948__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50948__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50948__$1,cljs.core.cst$kw$parallel,false);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50948__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50948__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50948__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(((target == null)) || (cljs.core.vector_QMARK_(target))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if(((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if(((fallback == null)) || ((fallback instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if(((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_(refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if(((params == null)) || (cljs.core.map_QMARK_(params))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_(without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((om.util.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

if((function (){var or__7502__auto__ = (SubqueryClass == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
if(!((SubqueryClass == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === SubqueryClass.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
} else {
throw (new Error("Assert failed: (or (nil? SubqueryClass) (implements? om/IQuery SubqueryClass))"));
}

var query = (cljs.core.truth_((function (){var and__7490__auto__ = SubqueryClass;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__7490__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = server_property_or_ident;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = om.next.get_query(SubqueryClass);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))):(cljs.core.truth_(SubqueryClass)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,om.next.get_query(SubqueryClass)])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8436__auto__ = server_property_or_ident;
return cljs.core._conj((function (){var x__8436__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$target,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,post_mutation,without,post_mutation_params,target,query]);
});
/**
 * Generates an Om transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete Om expression (vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
untangled.client.data_fetch.load_mutation = (function untangled$client$data_fetch$load_mutation(load_args){
if(((cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_(cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args)))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__7502__auto__ = cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__8436__auto__ = load_args;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$untangled_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive an Om query of the form: [({server-property (om/get-query SubqueryClass)} params)], which
 *   the Om parser will correctly parse as a Join on server-property with the given subquery and params. See Om AST and
 *   instructions on parsing Om queries.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : An Om component instance, Untangled application, or Om reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `SubqueryClass` : An Om component that implements IQuery. This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  SubqueryClass can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery. If supplied, the data AND load marker will appear
 *  at this path. If not supplied the data and marker will appear at `server-property` in the top-level of the client app state
 *  database. Ignored if you're loading via ident (the ident is your target).
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - Boolean to determine if you want a fetch-state marker in your app state. Defaults to true. Add `:ui/fetch-state` to the
 *   target component in order to see this data in your component.
 *   - `refresh` - A vector of keywords that will cause component re-renders after the final load/mutations. Same as follow-on
 *   reads in normal `transact!`
 *   - `parallel` - If true, indicates that this load does not have to go through the sequential network queue. Defaults to false.
 *   - `post-mutation` - A mutation (symbol) to run after the data is merged. Note, if target is supplied be sure your post mutation
 *   should expect the data at the targeted location.
 *   - `post-mutation-params` - An optional map  that will be passed to the post-mutation when it is called. May only contain raw data, not code!
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 *   
 */
untangled.client.data_fetch.load = (function untangled$client$data_fetch$load(var_args){
var args50952 = [];
var len__8723__auto___50959 = arguments.length;
var i__8724__auto___50960 = (0);
while(true){
if((i__8724__auto___50960 < len__8723__auto___50959)){
args50952.push((arguments[i__8724__auto___50960]));

var G__50961 = (i__8724__auto___50960 + (1));
i__8724__auto___50960 = G__50961;
continue;
} else {
}
break;
}

var G__50954 = args50952.length;
switch (G__50954) {
case 3:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50952.length)].join('')));

}
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,config){
if((function (){var or__7502__auto__ = om.next.component_QMARK_(app_or_comp_or_reconciler);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = om.next.reconciler_QMARK_(app_or_comp_or_reconciler);
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
}
})()){
} else {
throw (new Error("Assert failed: (or (om/component? app-or-comp-or-reconciler) (om/reconciler? app-or-comp-or-reconciler) (implements? uc/UntangledApplication app-or-comp-or-reconciler))"));
}

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var reconciler = ((((!((app_or_comp_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$)))?true:false):false))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_or_comp_or_reconciler,cljs.core.cst$kw$reconciler):app_or_comp_or_reconciler);
var mutation_args = untangled.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,untangled.client.data_fetch.load_mutation(mutation_args));
});

untangled.client.data_fetch.load.cljs$lang$maxFixedArity = 4;

/**
 * 
 *   See `load` for descriptions of parameters and config.
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load`, but usable from
 *   within a mutation. IMPORTANT: Make sure you specify the `:remote` parameter to this function, as
 *   well as including a `remote-load` for that remote.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *     ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *     ; You must still name the remote in the `load-action` if it is something other than default.
 *     :action (fn []
 *        (load-action ...)
 *        ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_action = (function untangled$client$data_fetch$load_action(var_args){
var args50963 = [];
var len__8723__auto___50966 = arguments.length;
var i__8724__auto___50967 = (0);
while(true){
if((i__8724__auto___50967 < len__8723__auto___50966)){
args50963.push((arguments[i__8724__auto___50967]));

var G__50968 = (i__8724__auto___50967 + (1));
i__8724__auto___50967 = G__50968;
continue;
} else {
}
break;
}

var G__50965 = args50963.length;
switch (G__50965) {
case 3:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50963.length)].join('')));

}
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(state_atom,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,server_property_or_ident,SubqueryClass,config){
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
return untangled.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(untangled.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1),cljs.core.cst$kw$state,state_atom));
});

untangled.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `om/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 * 
 *   Named Parameters:
 *   - `without`: See `load-data`
 *   - `params`: See `load-data`
 *   - `post-mutation`: See `load-data`
 *   - `parallel`: See `load-data`
 *   - `fallback`: See `load-data`
 *   - `marker`: See `load-data`
 *   - `remote`: See `load-data`
 *   - `refresh`: See `load-data`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using an Om link (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because Om will not have to run a full root query.
 *   
 */
untangled.client.data_fetch.load_field = (function untangled$client$data_fetch$load_field(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50976 = arguments.length;
var i__8724__auto___50977 = (0);
while(true){
if((i__8724__auto___50977 < len__8723__auto___50976)){
args__8730__auto__.push((arguments[i__8724__auto___50977]));

var G__50978 = (i__8724__auto___50977 + (1));
i__8724__auto___50977 = G__50978;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__50973){
var map__50974 = p__50973;
var map__50974__$1 = ((((!((map__50974 == null)))?((((map__50974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50974):map__50974);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50974__$1,cljs.core.cst$kw$without);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50974__$1,cljs.core.cst$kw$params);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50974__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50974__$1,cljs.core.cst$kw$post_DASH_mutation);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50974__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50974__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50974__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50974__$1,cljs.core.cst$kw$marker,true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fallback must be a mutation symbol."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__8436__auto__ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,field,post_mutation,without,om.next.get_ident(component),om.next.focus_query(om.next.get_query(component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$untangled_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,om.next.get_ident(component)], null),refresh));
});

untangled.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq50970){
var G__50971 = cljs.core.first(seq50970);
var seq50970__$1 = cljs.core.next(seq50970);
var G__50972 = cljs.core.first(seq50970__$1);
var seq50970__$2 = cljs.core.next(seq50970__$1);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__50971,G__50972,seq50970__$2);
});

/**
 * 
 *   Load data from the remote. Runs `om/transact!`. See also `load-field`.
 * 
 *   Parameters
 *   - `comp-or-reconciler`: A component or reconciler (not a class)
 *   - `query`: The query for the element(s) attributes. Use defui to generate arbitrary queries so normalization will work.
 * 
 *   Optional Named parameters
 *   - `post-mutation`: A mutation (symbol) invoked after the load succeeds.
 *   - `fallback`: A mutation (symbol) invoked after the load fails. App state is in env, server error is in the params under :error.
 *   - `parallel`: Boolean to indicate that this load should happen in the parallel on the server (non-blocking load). Any loads marked this way will happen in parallel.
 *   - `marker`: A boolean (default true). If true, a marker is placed in the app state in place of the target data during the load. If false, no marker is produced.
 *   - `refresh`: A vector of keywords indicating data that will be changing. If any of the listed keywords are queried by on-screen
 *  components, then those components will be re-rendered after the load has finished and post mutations have run.
 *   - `without`: A set of keywords. Any keyword appearing in this set will be recursively removed from the query (in a proper AST-preserving fashion).
 *   - `params`: A parameter map to augment onto the first element of the query
 *   - `remote`: A keyword naming which remote to query.
 *   
 */
untangled.client.data_fetch.load_data = (function untangled$client$data_fetch$load_data(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50985 = arguments.length;
var i__8724__auto___50986 = (0);
while(true){
if((i__8724__auto___50986 < len__8723__auto___50985)){
args__8730__auto__.push((arguments[i__8724__auto___50986]));

var G__50987 = (i__8724__auto___50986 + (1));
i__8724__auto___50986 = G__50987;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,query,p__50982){
var map__50983 = p__50982;
var map__50983__$1 = ((((!((map__50983 == null)))?((((map__50983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50983):map__50983);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$ident);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$without);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50983__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$post_DASH_mutation);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50983__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50983__$1,cljs.core.cst$kw$marker,true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fallback must be a mutation symbol."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp_or_reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__8436__auto__ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,post_mutation,without,ident,query]);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$untangled_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data], null),refresh));
});

untangled.client.data_fetch.load_data.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data.cljs$lang$applyTo = (function (seq50979){
var G__50980 = cljs.core.first(seq50979);
var seq50979__$1 = cljs.core.next(seq50979);
var G__50981 = cljs.core.first(seq50979__$1);
var seq50979__$2 = cljs.core.next(seq50979__$1);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic(G__50980,G__50981,seq50979__$2);
});

/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *  ; You must still name the remote in the `load-action` if it is something other than default.
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_field_action = (function untangled$client$data_fetch$load_field_action(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50996 = arguments.length;
var i__8724__auto___50997 = (0);
while(true){
if((i__8724__auto___50997 < len__8723__auto___50996)){
args__8730__auto__.push((arguments[i__8724__auto___50997]));

var G__50998 = (i__8724__auto___50997 + (1));
i__8724__auto___50997 = G__50998;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((4) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((4)),(0),null)):null);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8731__auto__);
});

untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,component_class,ident,field,p__50993){
var map__50994 = p__50993;
var map__50994__$1 = ((((!((map__50994 == null)))?((((map__50994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50994):map__50994);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,cljs.core.cst$kw$without);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50994__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,cljs.core.cst$kw$post_DASH_mutation);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50994__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50994__$1,cljs.core.cst$kw$marker,true);
return untangled.client.impl.data_fetch.mark_ready(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$state,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,field,app_state,post_mutation,without,ident,om.next.focus_query(om.next.get_query(component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]));
});

untangled.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

untangled.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq50988){
var G__50989 = cljs.core.first(seq50988);
var seq50988__$1 = cljs.core.next(seq50988);
var G__50990 = cljs.core.first(seq50988__$1);
var seq50988__$2 = cljs.core.next(seq50988__$1);
var G__50991 = cljs.core.first(seq50988__$2);
var seq50988__$3 = cljs.core.next(seq50988__$2);
var G__50992 = cljs.core.first(seq50988__$3);
var seq50988__$4 = cljs.core.next(seq50988__$3);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__50989,G__50990,G__50991,G__50992,seq50988__$4);
});

/**
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load-data`, but usable from
 *   within a mutation.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-data-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_data_action = (function untangled$client$data_fetch$load_data_action(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51005 = arguments.length;
var i__8724__auto___51006 = (0);
while(true){
if((i__8724__auto___51006 < len__8723__auto___51005)){
args__8730__auto__.push((arguments[i__8724__auto___51006]));

var G__51007 = (i__8724__auto___51006 + (1));
i__8724__auto___51006 = G__51007;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,query,p__51002){
var map__51003 = p__51002;
var map__51003__$1 = ((((!((map__51003 == null)))?((((map__51003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51003):map__51003);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$ident);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$without);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$params);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51003__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$post_DASH_mutation);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51003__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51003__$1,cljs.core.cst$kw$marker,true);
return untangled.client.impl.data_fetch.mark_ready(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$state,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,app_state,post_mutation,without,ident,query]));
});

untangled.client.data_fetch.load_data_action.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data_action.cljs$lang$applyTo = (function (seq50999){
var G__51000 = cljs.core.first(seq50999);
var seq50999__$1 = cljs.core.next(seq50999);
var G__51001 = cljs.core.first(seq50999__$1);
var seq50999__$2 = cljs.core.next(seq50999__$1);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic(G__51000,G__51001,seq50999__$2);
});

/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-data-action` or
 *   `load-data-field` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
untangled.client.data_fetch.remote_load = (function untangled$client$data_fetch$remote_load(parsing_env){
var ast = cljs.core.cst$kw$ast.cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$key,cljs.core.cst$sym$untangled_SLASH_load,cljs.core.array_seq([cljs.core.cst$kw$dispatch_DASH_key,cljs.core.cst$sym$untangled_SLASH_load], 0));
});
untangled.client.data_fetch.data_state_QMARK_ = (function untangled$client$data_fetch$data_state_QMARK_(state){
return untangled.client.impl.data_fetch.data_state_QMARK_(state);
});
untangled.client.data_fetch.ready_QMARK_ = (function untangled$client$data_fetch$ready_QMARK_(state){
return untangled.client.impl.data_fetch.ready_QMARK_(state);
});
untangled.client.data_fetch.loading_QMARK_ = (function untangled$client$data_fetch$loading_QMARK_(state){
return untangled.client.impl.data_fetch.loading_QMARK_(state);
});
untangled.client.data_fetch.failed_QMARK_ = (function untangled$client$data_fetch$failed_QMARK_(state){
return untangled.client.impl.data_fetch.failed_QMARK_(state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be an Om factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static om/IQuery
 *  (query [this] [{:thing2 (om/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (om/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static om/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (om/factory Thing2))
 *   ```
 */
untangled.client.data_fetch.lazily_loaded = (function untangled$client$data_fetch$lazily_loaded(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51014 = arguments.length;
var i__8724__auto___51015 = (0);
while(true){
if((i__8724__auto___51015 < len__8723__auto___51014)){
args__8730__auto__.push((arguments[i__8724__auto___51015]));

var G__51016 = (i__8724__auto___51015 + (1));
i__8724__auto___51015 = G__51016;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__51011){
var map__51012 = p__51011;
var map__51012__$1 = ((((!((map__51012 == null)))?((((map__51012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51012):map__51012);
var ready_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51012__$1,cljs.core.cst$kw$ready_DASH_render,((function (map__51012,map__51012__$1){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-ready"], null)),cljs.core.array_seq(["Queued"], 0));
});})(map__51012,map__51012__$1))
);
var loading_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51012__$1,cljs.core.cst$kw$loading_DASH_render,((function (map__51012,map__51012__$1,ready_render){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-load"], null)),cljs.core.array_seq(["Loading..."], 0));
});})(map__51012,map__51012__$1,ready_render))
);
var failed_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51012__$1,cljs.core.cst$kw$failed_DASH_render,((function (map__51012,map__51012__$1,ready_render,loading_render){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-failed"], null)),cljs.core.array_seq(["Loading error!"], 0));
});})(map__51012,map__51012__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51012__$1,cljs.core.cst$kw$not_DASH_present_DASH_render);
var state = cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(untangled.client.data_fetch.ready_QMARK_(state))){
return (ready_render.cljs$core$IFn$_invoke$arity$1 ? ready_render.cljs$core$IFn$_invoke$arity$1(props) : ready_render.call(null,props));
} else {
if(cljs.core.truth_(untangled.client.data_fetch.loading_QMARK_(state))){
return (loading_render.cljs$core$IFn$_invoke$arity$1 ? loading_render.cljs$core$IFn$_invoke$arity$1(props) : loading_render.call(null,props));
} else {
if(cljs.core.truth_(untangled.client.data_fetch.failed_QMARK_(state))){
return (failed_render.cljs$core$IFn$_invoke$arity$1 ? failed_render.cljs$core$IFn$_invoke$arity$1(props) : failed_render.call(null,props));
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = not_present_render;
if(cljs.core.truth_(and__7490__auto__)){
return (props == null);
} else {
return and__7490__auto__;
}
})())){
return (not_present_render.cljs$core$IFn$_invoke$arity$1 ? not_present_render.cljs$core$IFn$_invoke$arity$1(props) : not_present_render.call(null,props));
} else {
return (data_render.cljs$core$IFn$_invoke$arity$1 ? data_render.cljs$core$IFn$_invoke$arity$1(props) : data_render.call(null,props));

}
}
}
}
});

untangled.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq51008){
var G__51009 = cljs.core.first(seq51008);
var seq51008__$1 = cljs.core.next(seq51008);
var G__51010 = cljs.core.first(seq51008__$1);
var seq51008__$2 = cljs.core.next(seq51008__$1);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__51009,G__51010,seq51008__$2);
});


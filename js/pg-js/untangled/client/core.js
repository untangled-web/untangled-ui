// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('untangled.client.impl.application');
goog.require('untangled.client.impl.built_in_mutations');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.logging');
goog.require('untangled.dom');
goog.require('cljs.core.async');
goog.require('om.next.protocols');
goog.require('untangled.client.impl.util');
goog.require('untangled.client.impl.om_plumbing');
goog.require('clojure.set');
goog.require('om.next.cache');
goog.require('goog.dom');
goog.require('goog.Uri');




/**
 * Entrypoint for creating a new untangled client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [edn headers] [edn' headers'])
 *   ```
 * 
 *   it can replace the outgoing EDN or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map. IMPORTANT: Only supported
 *   when using the default built-in single-remote networking.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Untangled databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized untangled application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the default built-in
 *   networking.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   `:transit-handlers` (optional). A map with keys for `:read` and `:write`, which contain maps to be used for the read
 *   and write side of transit to extend the supported data types. See `make-untangled-network` in network.cljs. Only used
 *   when you default to the built-in networking.
 * 
 *   `:pathopt` (optional, defaults to true).  Turn on/off Om path optimization. This is here in case you're experiencing problems with rendering.
 *   Path optimization is a rendering optimization that may still have bugs.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (om/shared this)
 * 
 *   `:networking` (optional). An instance of UntangledNetwork that will act as the default remote (named :remote). If
 *   you want to support multiple remotes, then this should be a map whose keys are the keyword names of the remotes
 *   and whose values are UntangledNetwork instances.
 * 
 *   `:mutation-merge (optional). A function `(fn [state mutation-symbol return-value])` that receives the app state as a
 *   map (NOT an atom) and should return the new state as a map. This function is run when network results are being merged,
 *   and is called once for each mutation that had a return value on the server. Returning nil from this function is safe, and will be ignored
 *   with a console message for debugging. If you need information about the original mutation arguments then you must reflect
 *   them back from the server in your return value. By default such values are discarded.
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
untangled.client.core.new_untangled_client = (function untangled$client$core$new_untangled_client(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47245 = arguments.length;
var i__8724__auto___47246 = (0);
while(true){
if((i__8724__auto___47246 < len__8723__auto___47245)){
args__8730__auto__.push((arguments[i__8724__auto___47246]));

var G__47247 = (i__8724__auto___47246 + (1));
i__8724__auto___47246 = G__47247;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__47241){
var map__47242 = p__47241;
var map__47242__$1 = ((((!((map__47242 == null)))?((((map__47242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47242):map__47242);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47242__$1,cljs.core.cst$kw$started_DASH_callback,cljs.core.constantly(null));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47242__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var network_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47242__$1,cljs.core.cst$kw$network_DASH_error_DASH_callback,cljs.core.constantly(null));
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47242__$1,cljs.core.cst$kw$pathopt);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47242__$1,cljs.core.cst$kw$networking);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47242__$1,cljs.core.cst$kw$mutation_DASH_merge);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47242__$1,cljs.core.cst$kw$transit_DASH_handlers);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47242__$1,cljs.core.cst$kw$migrate,null);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47242__$1,cljs.core.cst$kw$request_DASH_transform);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47242__$1,cljs.core.cst$kw$shared,null);
var G__47244 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$mutation_DASH_merge,mutation_merge,cljs.core.cst$kw$started_DASH_callback,started_callback,cljs.core.cst$kw$reconciler_DASH_options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$migrate,migrate,cljs.core.cst$kw$pathopt,pathopt,cljs.core.cst$kw$shared,shared], null),cljs.core.cst$kw$networking,(function (){var or__7502__auto__ = networking;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic("/api",cljs.core.array_seq([cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$global_DASH_error_DASH_callback,network_error_callback], 0));
}
})()], null);
return (untangled.client.core.map__GT_Application.cljs$core$IFn$_invoke$arity$1 ? untangled.client.core.map__GT_Application.cljs$core$IFn$_invoke$arity$1(G__47244) : untangled.client.core.map__GT_Application.call(null,G__47244));
});

untangled.client.core.new_untangled_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_client.cljs$lang$applyTo = (function (seq47240){
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47240));
});


/**
 * @interface
 */
untangled.client.core.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
untangled.client.core.initial_state = (function untangled$client$core$initial_state(clz,params){
if((!((clz == null))) && (!((clz.untangled$client$core$InitialAppState$initial_state$arity$2 == null)))){
return clz.untangled$client$core$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__8220__auto__ = (((clz == null))?null:clz);
var m__8221__auto__ = (untangled.client.core.initial_state[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__8221__auto__.call(null,clz,params));
} else {
var m__8221__auto____$1 = (untangled.client.core.initial_state["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(clz,params) : m__8221__auto____$1.call(null,clz,params));
} else {
throw cljs.core.missing_protocol("InitialAppState.initial-state",clz);
}
}
}
});

/**
 * Get the initial state of a component. Needed because calling the protocol method from a defui component in clj will not work as expected.
 */
untangled.client.core.get_initial_state = (function untangled$client$core$get_initial_state(class$,params){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.untangled$client$core$InitialAppState$)))?true:false):false)){
return untangled.client.core.initial_state(class$,params);
} else {
return null;
}
});

/**
 * @interface
 */
untangled.client.core.UntangledApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
untangled.client.core.mount = (function untangled$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$mount$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.mount[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__8221__auto__.call(null,this$,root_component,target_dom_id));
} else {
var m__8221__auto____$1 = (untangled.client.core.mount["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__8221__auto____$1.call(null,this$,root_component,target_dom_id));
} else {
throw cljs.core.missing_protocol("UntangledApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
untangled.client.core.reset_state_BANG_ = (function untangled$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.reset_state_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__8221__auto__.call(null,this$,new_state));
} else {
var m__8221__auto____$1 = (untangled.client.core.reset_state_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__8221__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("UntangledApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
untangled.client.core.reset_app_BANG_ = (function untangled$client$core$reset_app_BANG_(this$,root_component,callback){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.reset_app_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__8221__auto__.call(null,this$,root_component,callback));
} else {
var m__8221__auto____$1 = (untangled.client.core.reset_app_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__8221__auto____$1.call(null,this$,root_component,callback));
} else {
throw cljs.core.missing_protocol("UntangledApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests on the given remote(s). Useful on failures to eliminate cascading failures. Remote can be a keyword, set, or nil. `nil` means all remotes.
 */
untangled.client.core.clear_pending_remote_requests_BANG_ = (function untangled$client$core$clear_pending_remote_requests_BANG_(this$,remotes){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$2(this$,remotes);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.clear_pending_remote_requests_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__8221__auto__.call(null,this$,remotes));
} else {
var m__8221__auto____$1 = (untangled.client.core.clear_pending_remote_requests_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__8221__auto____$1.call(null,this$,remotes));
} else {
throw cljs.core.missing_protocol("UntangledApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
untangled.client.core.refresh = (function untangled$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$refresh$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$refresh$arity$1(this$);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.refresh[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto__.call(null,this$));
} else {
var m__8221__auto____$1 = (untangled.client.core.refresh["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("UntangledApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
untangled.client.core.history = (function untangled$client$core$history(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$history$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$history$arity$1(this$);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.history[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto__.call(null,this$));
} else {
var m__8221__auto____$1 = (untangled.client.core.history["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("UntangledApplication.history",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
untangled.client.core.reset_history_BANG_ = (function untangled$client$core$reset_history_BANG_(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.core.reset_history_BANG_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto__.call(null,this$));
} else {
var m__8221__auto____$1 = (untangled.client.core.reset_history_BANG_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("UntangledApplication.reset-history!",this$);
}
}
}
});

untangled.client.core.merge_alternate_union_elements_BANG_ = (function untangled$client$core$merge_alternate_union_elements_BANG_(app,root_component){
var walk_ast = (function() {
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = null;
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2 = (function (ast,visitor){
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3 = (function (p__47313,visitor,parent_union){
var map__47320 = p__47313;
var map__47320__$1 = ((((!((map__47320 == null)))?((((map__47320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47320):map__47320);
var parent_ast = map__47320__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$children);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$component);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$type);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$dispatch_DASH_key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$union_DASH_key);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47320__$1,cljs.core.cst$kw$key);
if(cljs.core.truth_((function (){var and__7490__auto__ = component;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = parent_union;
if(cljs.core.truth_(and__7490__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union_DASH_entry,type);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__47322 = cljs.core.seq(children);
var chunk__47323 = null;
var count__47324 = (0);
var i__47325 = (0);
while(true){
if((i__47325 < count__47324)){
var ast = chunk__47323.cljs$core$IIndexed$_nth$arity$2(null,i__47325);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__47334 = seq__47322;
var G__47335 = chunk__47323;
var G__47336 = count__47324;
var G__47337 = (i__47325 + (1));
seq__47322 = G__47334;
chunk__47323 = G__47335;
count__47324 = G__47336;
i__47325 = G__47337;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47322);
if(temp__6753__auto__){
var seq__47322__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47322__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47322__$1);
var G__47338 = cljs.core.chunk_rest(seq__47322__$1);
var G__47339 = c__8413__auto__;
var G__47340 = cljs.core.count(c__8413__auto__);
var G__47341 = (0);
seq__47322 = G__47338;
chunk__47323 = G__47339;
count__47324 = G__47340;
i__47325 = G__47341;
continue;
} else {
var ast = cljs.core.first(seq__47322__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__47342 = cljs.core.next(seq__47322__$1);
var G__47343 = null;
var G__47344 = (0);
var G__47345 = (0);
seq__47322 = G__47342;
chunk__47323 = G__47343;
count__47324 = G__47344;
i__47325 = G__47345;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = function(p__47313,visitor,parent_union){
switch(arguments.length){
case 2:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2.call(this,p__47313,visitor);
case 3:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3.call(this,p__47313,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$2 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2;
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3;
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast;
})()
;
var merge_union = (function untangled$client$core$merge_alternate_union_elements_BANG__$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__7490__auto__ = parent_union;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = ((!((parent_union == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === parent_union.untangled$client$core$InitialAppState$)))?true:false):false);
if(and__7490__auto____$1){
return untangled.client.core.initial_state(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__7490__auto__ = component;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = ((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.untangled$client$core$InitialAppState$)))?true:false):false);
if(and__7490__auto____$1){
return untangled.client.core.initial_state(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(default_initial_state)){
} else {
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Subelements of union ",parent_union," have initial state, but the union itself has no initial state. Your app state may suffer."], 0));
}

if(cljs.core.truth_((function (){var and__7490__auto__ = component;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__7490__auto____$1)){
var and__7490__auto____$2 = parent_union;
if(cljs.core.truth_(and__7490__auto____$2)){
return (!(to_many_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state));
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
return (untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$3(app,parent_union,component_initial_state) : untangled.client.core.merge_state_BANG_.call(null,app,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast.cljs$core$IFn$_invoke$arity$2(om.next.query__GT_ast(om.next.get_query(root_component)),merge_union);
});
/**
 * Initialize the untangled Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
untangled.client.core.initialize = (function untangled$client$core$initialize(p__47346,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__47354 = p__47346;
var map__47354__$1 = ((((!((map__47354 == null)))?((((map__47354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47354):map__47354);
var app = map__47354__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354__$1,cljs.core.cst$kw$networking);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354__$1,cljs.core.cst$kw$started_DASH_callback);
var network_map = ((((!((networking == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === networking.untangled$client$impl$network$UntangledNetwork$)))?true:false):false))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,networking], null):networking);
var remotes = cljs.core.keys(network_map);
var send_queues = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,remotes,map__47354,map__47354__$1,app,networking,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1024));
});})(network_map,remotes,map__47354,map__47354__$1,app,networking,started_callback))
,remotes));
var response_channels = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,remotes,send_queues,map__47354,map__47354__$1,app,networking,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});})(network_map,remotes,send_queues,map__47354,map__47354__$1,app,networking,started_callback))
,remotes));
var parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,untangled.client.impl.om_plumbing.read_local,cljs.core.cst$kw$mutate,untangled.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.cst$kw$send_DASH_queues,send_queues,cljs.core.array_seq([cljs.core.cst$kw$response_DASH_channels,response_channels,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$mounted_QMARK_,true,cljs.core.cst$kw$networking,network_map], 0));
var rec = untangled.client.impl.application.generate_reconciler(initial_app,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_app,cljs.core.cst$kw$reconciler,rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
var seq__47357_47361 = cljs.core.seq(remotes);
var chunk__47358_47362 = null;
var count__47359_47363 = (0);
var i__47360_47364 = (0);
while(true){
if((i__47360_47364 < count__47359_47363)){
var r_47365 = chunk__47358_47362.cljs$core$IIndexed$_nth$arity$2(null,i__47360_47364);
untangled.client.impl.network.start(cljs.core.get.cljs$core$IFn$_invoke$arity$2(network_map,r_47365),completed_app);

var G__47366 = seq__47357_47361;
var G__47367 = chunk__47358_47362;
var G__47368 = count__47359_47363;
var G__47369 = (i__47360_47364 + (1));
seq__47357_47361 = G__47366;
chunk__47358_47362 = G__47367;
count__47359_47363 = G__47368;
i__47360_47364 = G__47369;
continue;
} else {
var temp__6753__auto___47370 = cljs.core.seq(seq__47357_47361);
if(temp__6753__auto___47370){
var seq__47357_47371__$1 = temp__6753__auto___47370;
if(cljs.core.chunked_seq_QMARK_(seq__47357_47371__$1)){
var c__8413__auto___47372 = cljs.core.chunk_first(seq__47357_47371__$1);
var G__47373 = cljs.core.chunk_rest(seq__47357_47371__$1);
var G__47374 = c__8413__auto___47372;
var G__47375 = cljs.core.count(c__8413__auto___47372);
var G__47376 = (0);
seq__47357_47361 = G__47373;
chunk__47358_47362 = G__47374;
count__47359_47363 = G__47375;
i__47360_47364 = G__47376;
continue;
} else {
var r_47377 = cljs.core.first(seq__47357_47371__$1);
untangled.client.impl.network.start(cljs.core.get.cljs$core$IFn$_invoke$arity$2(network_map,r_47377),completed_app);

var G__47378 = cljs.core.next(seq__47357_47371__$1);
var G__47379 = null;
var G__47380 = (0);
var G__47381 = (0);
seq__47357_47361 = G__47378;
chunk__47358_47362 = G__47379;
count__47359_47363 = G__47380;
i__47360_47364 = G__47381;
continue;
}
} else {
}
}
break;
}

untangled.client.impl.application.initialize_internationalization(rec);

untangled.client.impl.application.initialize_global_error_callbacks(completed_app);

untangled.client.impl.application.start_network_sequential_processing(completed_app);

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(rec,root_component,node);

untangled.client.core.merge_alternate_union_elements_BANG_(completed_app,root_component);

if(cljs.core.truth_(started_callback)){
(started_callback.cljs$core$IFn$_invoke$arity$1 ? started_callback.cljs$core$IFn$_invoke$arity$1(completed_app) : started_callback.call(null,completed_app));
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.clear_queue = (function untangled$client$core$clear_queue(queue){
var element = cljs.core.async.poll_BANG_(queue);
while(true){
if(cljs.core.truth_(element)){
var G__47382 = cljs.core.async.poll_BANG_(queue);
element = G__47382;
continue;
} else {
return null;
}
break;
}
});
/**
 * Needed for mocking in tests. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.reset_history_impl = (function untangled$client$core$reset_history_impl(app){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$history], null),(function (p1__47383_SHARP_){
return om.next.cache.cache(p1__47383_SHARP_.size);
})));
});
untangled.client.core.refresh_STAR_ = (function untangled$client$core$refresh_STAR_(p__47384){
var map__47387 = p__47384;
var map__47387__$1 = ((((!((map__47387 == null)))?((((map__47387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47387):map__47387);
var app = map__47387__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47387__$1,cljs.core.cst$kw$reconciler);
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element"], 0));

return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
});
untangled.client.core.mount_STAR_ = (function untangled$client$core$mount_STAR_(p__47389,root_component,dom_id_or_node){
var map__47396 = p__47389;
var map__47396__$1 = ((((!((map__47396 == null)))?((((map__47396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47396):map__47396);
var app = map__47396__$1;
var mounted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47396__$1,cljs.core.cst$kw$mounted_QMARK_);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47396__$1,cljs.core.cst$kw$initial_DASH_state);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47396__$1,cljs.core.cst$kw$reconciler_DASH_options);
if(cljs.core.truth_(mounted_QMARK_)){
untangled.client.core.refresh_STAR_(app);

return app;
} else {
var uses_initial_app_state_QMARK_ = ((!((root_component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$)))?true:false):false);
var ui_declared_state = (function (){var and__7490__auto__ = uses_initial_app_state_QMARK_;
if(and__7490__auto__){
return untangled.client.core.initial_state(root_component,null);
} else {
return and__7490__auto__;
}
})();
var atom_supplied_QMARK_ = untangled.client.impl.util.atom_QMARK_(initial_state);
var init_conflict_QMARK_ = (function (){var and__7490__auto__ = (function (){var or__7502__auto__ = atom_supplied_QMARK_;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.seq(initial_state);
}
})();
if(cljs.core.truth_(and__7490__auto__)){
if(!((root_component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__7490__auto__;
}
})();
var state = ((!(uses_initial_app_state_QMARK_))?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(atom_supplied_QMARK_)?(function (){
var G__47400_47402 = initial_state;
var G__47401_47403 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root_component,ui_declared_state,true);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47400_47402,G__47401_47403) : cljs.core.reset_BANG_.call(null,G__47400_47402,G__47401_47403));

return initial_state;
})()
:ui_declared_state
));
if(cljs.core.truth_(init_conflict_QMARK_)){
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You supplied an initial state AND a root component with initial state. Using root's InitialAppState (atom overwritten)!"], 0));
} else {
}

return untangled.client.core.initialize(app,state,root_component,dom_id_or_node,reconciler_options);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {untangled.client.core.UntangledApplication}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.core.Application = (function (initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.remotes = remotes;
this.networking = networking;
this.send_queues = send_queues;
this.response_channels = response_channels;
this.reconciler = reconciler;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k47405,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__47407 = (((k47405 instanceof cljs.core.Keyword))?k47405.fqn:null);
switch (G__47407) {
case "networking":
return self__.networking;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "remotes":
return self__.remotes;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "response-channels":
return self__.response_channels;

break;
case "reconciler":
return self__.reconciler;

break;
case "parser":
return self__.parser;

break;
case "send-queues":
return self__.send_queues;

break;
case "started-callback":
return self__.started_callback;

break;
case "initial-state":
return self__.initial_state;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47405,else__8180__auto__);

}
});


untangled.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.client.core.Application{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47404){
var self__ = this;
var G__47404__$1 = this;
return (new cljs.core.RecordIter((0),G__47404__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


untangled.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$networking,null,cljs.core.cst$kw$mutation_DASH_merge,null,cljs.core.cst$kw$remotes,null,cljs.core.cst$kw$mounted_QMARK_,null,cljs.core.cst$kw$response_DASH_channels,null,cljs.core.cst$kw$reconciler,null,cljs.core.cst$kw$parser,null,cljs.core.cst$kw$send_DASH_queues,null,cljs.core.cst$kw$started_DASH_callback,null,cljs.core.cst$kw$initial_DASH_state,null,cljs.core.cst$kw$reconciler_DASH_options,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.mount_STAR_(this$__$1,root_component,dom_id_or_node);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
var G__47408 = om.next.app_state(self__.reconciler);
var G__47409 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47408,G__47409) : cljs.core.reset_BANG_.call(null,G__47408,G__47409));
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if(!(((!((root_component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$)))?true:false):false))){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["The specified root component does not implement InitialAppState!"], 0));
} else {
var base_state = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root_component,untangled.client.core.initial_state(root_component,null),true);
this$__$1.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$2(null,null);

var G__47411_47448 = om.next.app_state(self__.reconciler);
var G__47412_47449 = base_state;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__47411_47448,G__47412_47449) : cljs.core.reset_BANG_.call(null,G__47411_47448,G__47412_47449));

this$__$1.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1(null);

untangled.client.core.merge_alternate_union_elements_BANG_(this$__$1,root_component);

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["updated app state to original ",om.next.app_state(self__.reconciler)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback,cljs.core.cst$kw$original)){
(self__.started_callback.cljs$core$IFn$_invoke$arity$1 ? self__.started_callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.started_callback.call(null,this$__$1));
} else {
if(cljs.core.truth_(callback)){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : callback.call(null,this$__$1));
} else {
}
}

return this$__$1.untangled$client$core$UntangledApplication$refresh$arity$1(null);
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$2 = (function (this$,remotes__$1){
var self__ = this;
var this$__$1 = this;
var remotes__$2 = (((remotes__$1 == null))?cljs.core.keys(self__.send_queues):(((remotes__$1 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remotes__$1], null):remotes__$1
));
var seq__47413 = cljs.core.seq(remotes__$2);
var chunk__47414 = null;
var count__47415 = (0);
var i__47416 = (0);
while(true){
if((i__47416 < count__47415)){
var r = chunk__47414.cljs$core$IIndexed$_nth$arity$2(null,i__47416);
untangled.client.core.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__47450 = seq__47413;
var G__47451 = chunk__47414;
var G__47452 = count__47415;
var G__47453 = (i__47416 + (1));
seq__47413 = G__47450;
chunk__47414 = G__47451;
count__47415 = G__47452;
i__47416 = G__47453;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47413);
if(temp__6753__auto__){
var seq__47413__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47413__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47413__$1);
var G__47454 = cljs.core.chunk_rest(seq__47413__$1);
var G__47455 = c__8413__auto__;
var G__47456 = cljs.core.count(c__8413__auto__);
var G__47457 = (0);
seq__47413 = G__47454;
chunk__47414 = G__47455;
count__47415 = G__47456;
i__47416 = G__47457;
continue;
} else {
var r = cljs.core.first(seq__47413__$1);
untangled.client.core.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__47458 = cljs.core.next(seq__47413__$1);
var G__47459 = null;
var G__47460 = (0);
var G__47461 = (0);
seq__47413 = G__47458;
chunk__47414 = G__47459;
count__47415 = G__47460;
i__47416 = G__47461;
continue;
}
} else {
return null;
}
}
break;
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = (function (){var G__47417 = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47417) : cljs.core.deref.call(null,G__47417));
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$steps,history_steps,cljs.core.cst$kw$history,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (history_steps,history_map,this$__$1){
return (function (p__47418){
var vec__47419 = p__47418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47419,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$untangled_SLASH_meta,cljs.core.meta(v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.reset_history_impl(this$__$1);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element"], 0));

return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1(self__.reconciler);
});


untangled.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__47404){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__47422 = cljs.core.keyword_identical_QMARK_;
var expr__47423 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__47425 = cljs.core.cst$kw$initial_DASH_state;
var G__47426 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47425,G__47426) : pred__47422.call(null,G__47425,G__47426));
})())){
return (new untangled.client.core.Application(G__47404,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47427 = cljs.core.cst$kw$mutation_DASH_merge;
var G__47428 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47427,G__47428) : pred__47422.call(null,G__47427,G__47428));
})())){
return (new untangled.client.core.Application(self__.initial_state,G__47404,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47429 = cljs.core.cst$kw$started_DASH_callback;
var G__47430 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47429,G__47430) : pred__47422.call(null,G__47429,G__47430));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,G__47404,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47431 = cljs.core.cst$kw$remotes;
var G__47432 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47431,G__47432) : pred__47422.call(null,G__47431,G__47432));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__47404,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47433 = cljs.core.cst$kw$networking;
var G__47434 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47433,G__47434) : pred__47422.call(null,G__47433,G__47434));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,G__47404,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47435 = cljs.core.cst$kw$send_DASH_queues;
var G__47436 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47435,G__47436) : pred__47422.call(null,G__47435,G__47436));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,G__47404,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47437 = cljs.core.cst$kw$response_DASH_channels;
var G__47438 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47437,G__47438) : pred__47422.call(null,G__47437,G__47438));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,G__47404,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47439 = cljs.core.cst$kw$reconciler;
var G__47440 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47439,G__47440) : pred__47422.call(null,G__47439,G__47440));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,G__47404,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47441 = cljs.core.cst$kw$parser;
var G__47442 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47441,G__47442) : pred__47422.call(null,G__47441,G__47442));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,G__47404,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47443 = cljs.core.cst$kw$mounted_QMARK_;
var G__47444 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47443,G__47444) : pred__47422.call(null,G__47443,G__47444));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,G__47404,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47445 = cljs.core.cst$kw$reconciler_DASH_options;
var G__47446 = expr__47423;
return (pred__47422.cljs$core$IFn$_invoke$arity$2 ? pred__47422.cljs$core$IFn$_invoke$arity$2(G__47445,G__47446) : pred__47422.call(null,G__47445,G__47446));
})())){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,G__47404,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__47404),null));
}
}
}
}
}
}
}
}
}
}
}
});


untangled.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__47404){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__47404,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$initial_DASH_state,cljs.core.cst$sym$mutation_DASH_merge,cljs.core.cst$sym$started_DASH_callback,cljs.core.cst$sym$remotes,cljs.core.cst$sym$networking,cljs.core.cst$sym$send_DASH_queues,cljs.core.cst$sym$response_DASH_channels,cljs.core.cst$sym$reconciler,cljs.core.cst$sym$parser,cljs.core.cst$sym$mounted_QMARK_,cljs.core.cst$sym$reconciler_DASH_options], null);
});

untangled.client.core.Application.cljs$lang$type = true;

untangled.client.core.Application.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.client.core/Application");
});

untangled.client.core.Application.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.client.core/Application");
});

untangled.client.core.__GT_Application = (function untangled$client$core$__GT_Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,parser,mounted_QMARK_,reconciler_options){
return (new untangled.client.core.Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

untangled.client.core.map__GT_Application = (function untangled$client$core$map__GT_Application(G__47406){
return (new untangled.client.core.Application(cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$mutation_DASH_merge.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$started_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$send_DASH_queues.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$response_DASH_channels.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(G__47406),cljs.core.cst$kw$reconciler_DASH_options.cljs$core$IFn$_invoke$arity$1(G__47406),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47406,cljs.core.cst$kw$initial_DASH_state,cljs.core.array_seq([cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], 0)),null));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Untangled app container.
 */
untangled.client.core.new_untangled_test_client = (function untangled$client$core$new_untangled_test_client(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47466 = arguments.length;
var i__8724__auto___47467 = (0);
while(true){
if((i__8724__auto___47467 < len__8723__auto___47466)){
args__8730__auto__.push((arguments[i__8724__auto___47467]));

var G__47468 = (i__8724__auto___47467 + (1));
i__8724__auto___47467 = G__47468;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__47463){
var map__47464 = p__47463;
var map__47464__$1 = ((((!((map__47464 == null)))?((((map__47464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47464):map__47464);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47464__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47464__$1,cljs.core.cst$kw$started_DASH_callback,null);
return untangled.client.core.map__GT_Application(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$started_DASH_callback,started_callback,cljs.core.cst$kw$networking,untangled.client.impl.network.mock_network()], null));
});

untangled.client.core.new_untangled_test_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_test_client.cljs$lang$applyTo = (function (seq47462){
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47462));
});

/**
 * Get the current window location from the browser
 */
untangled.client.core.get_url = (function untangled$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
untangled.client.core.uri_params = (function untangled$client$core$uri_params(var_args){
var args47469 = [];
var len__8723__auto___47478 = arguments.length;
var i__8724__auto___47479 = (0);
while(true){
if((i__8724__auto___47479 < len__8723__auto___47478)){
args47469.push((arguments[i__8724__auto___47479]));

var G__47480 = (i__8724__auto___47479 + (1));
i__8724__auto___47479 = G__47480;
continue;
} else {
}
break;
}

var G__47471 = args47469.length;
switch (G__47471) {
case 0:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47469.length)].join('')));

}
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1(untangled.client.core.get_url());
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8364__auto__ = ((function (query_data){
return (function untangled$client$core$iter__47472(s__47473){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__47473__$1 = s__47473;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__47473__$1);
if(temp__6753__auto__){
var s__47473__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47473__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__47473__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__47475 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__47474 = (0);
while(true){
if((i__47474 < size__8363__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__47474);
cljs.core.chunk_append(b__47475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__47482 = (i__47474 + (1));
i__47474 = G__47482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47475),untangled$client$core$iter__47472(cljs.core.chunk_rest(s__47473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47475),null);
}
} else {
var k = cljs.core.first(s__47473__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),untangled$client$core$iter__47472(cljs.core.rest(s__47473__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__8364__auto__(query_data.getKeys());
})());
});

untangled.client.core.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
untangled.client.core.get_url_param = (function untangled$client$core$get_url_param(var_args){
var args47483 = [];
var len__8723__auto___47486 = arguments.length;
var i__8724__auto___47487 = (0);
while(true){
if((i__8724__auto___47487 < len__8723__auto___47486)){
args47483.push((arguments[i__8724__auto___47487]));

var G__47488 = (i__8724__auto___47487 + (1));
i__8724__auto___47487 = G__47488;
continue;
} else {
}
break;
}

var G__47485 = args47483.length;
switch (G__47485) {
case 1:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47483.length)].join('')));

}
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2(untangled.client.core.get_url(),param_name);
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1(url),param_name);
});

untangled.client.core.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * Get the ident using a component class and data. Om's simulated statics are elided by
 *   advanced compilation. This function compensates.
 */
untangled.client.core.get_class_ident = (function untangled$client$core$get_class_ident(comp,data){
return om.next.ident(comp,data);
});
/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
untangled.client.core.component_merge_query = (function untangled$client$core$component_merge_query(component,object_data){
var ident = om.next.ident(component,object_data);
var object_query = om.next.get_query(component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Untangled with respect
 *   to data overwrites in the app database.
 */
untangled.client.core.preprocess_merge = (function untangled$client$core$preprocess_merge(state_atom,component,object_data){
var ident = untangled.client.core.get_class_ident(component,object_data);
var object_query = om.next.get_query(component);
var object_query__$1 = ((cljs.core.map_QMARK_(object_query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_query], null):object_query);
var base_query = untangled.client.core.component_merge_query(component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$untangled_SLASH_merge,base_query], null)], null);
var existing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(base_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom))),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = untangled.client.impl.om_plumbing.mark_missing(object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$untangled_SLASH_merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([existing_data,marked_data], 0))])], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge_DASH_query,merge_query,cljs.core.cst$kw$merge_DASH_data,merge_data], null);
});
/**
 * Returns TRUE when x is an atom.
 */
untangled.client.core.is_atom_QMARK_ = (function untangled$client$core$is_atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
untangled.client.core.integrate_ident = (function untangled$client$core$integrate_ident(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47500 = arguments.length;
var i__8724__auto___47501 = (0);
while(true){
if((i__8724__auto___47501 < len__8723__auto___47500)){
args__8730__auto__.push((arguments[i__8724__auto___47501]));

var G__47502 = (i__8724__auto___47501 + (1));
i__8724__auto___47501 = G__47502;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__47495){
var vec__47496 = p__47495;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47496,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47496,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__47496,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__47496,command,data_path,actions){
return (function (p1__47490_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47490_SHARP_,ident);
});})(vec__47496,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__47496,command,data_path,actions))
;
var G__47499 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__47499) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for prepend must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in state data-path))")].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__47499,already_has_ident_at_path_QMARK_,vec__47496,command,data_path,actions){
return (function (p1__47491_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__47491_SHARP_);
});})(G__47499,already_has_ident_at_path_QMARK_,vec__47496,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for append must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in state data-path))")].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = (cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector)));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Replacement path must be a vector. You passed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? data-path)")].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must be a vector"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? vector)")].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must end in a vector index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target vector for replacement does not have an item at index "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? vector index)")].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$command,command,cljs.core.cst$kw$arg,data_path], null));

}
});})(actions))
,state,actions);
});

untangled.client.core.integrate_ident.cljs$lang$maxFixedArity = (2);

untangled.client.core.integrate_ident.cljs$lang$applyTo = (function (seq47492){
var G__47493 = cljs.core.first(seq47492);
var seq47492__$1 = cljs.core.next(seq47492);
var G__47494 = cljs.core.first(seq47492__$1);
var seq47492__$2 = cljs.core.next(seq47492__$1);
return untangled.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__47493,G__47494,seq47492__$2);
});

/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 *   
 */
untangled.client.core.integrate_ident_BANG_ = (function untangled$client$core$integrate_ident_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47507 = arguments.length;
var i__8724__auto___47508 = (0);
while(true){
if((i__8724__auto___47508 < len__8723__auto___47507)){
args__8730__auto__.push((arguments[i__8724__auto___47508]));

var G__47509 = (i__8724__auto___47508 + (1));
i__8724__auto___47508 = G__47509;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.truth_(untangled.client.core.is_atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("The state has to be an atom. Use 'integrate-ident' instead."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(is-atom? state)")].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,untangled.client.core.integrate_ident,ident,named_parameters);
});

untangled.client.core.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.core.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq47504){
var G__47505 = cljs.core.first(seq47504);
var seq47504__$1 = cljs.core.next(seq47504);
var G__47506 = cljs.core.first(seq47504__$1);
var seq47504__$2 = cljs.core.next(seq47504__$1);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47505,G__47506,seq47504__$2);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Untangled: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - app-or-reconciler: The Untangled application or Om reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 *   
 */
untangled.client.core.merge_state_BANG_ = (function untangled$client$core$merge_state_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___47518 = arguments.length;
var i__8724__auto___47519 = (0);
while(true){
if((i__8724__auto___47519 < len__8723__auto___47518)){
args__8730__auto__.push((arguments[i__8724__auto___47519]));

var G__47520 = (i__8724__auto___47519 + (1));
i__8724__auto___47519 = G__47520;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_parameters){
if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$Ident$)))?true:false):false)){
} else {
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["merge-state!: component must implement Ident"], 0));
}

var ident = untangled.client.core.get_class_ident(component,object_data);
var reconciler = ((((!((app_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_reconciler.untangled$client$core$UntangledApplication$)))?true:false):false))?cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
var state = om.next.app_state(reconciler);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__47515 = untangled.client.core.preprocess_merge(state,component,object_data);
var map__47515__$1 = ((((!((map__47515 == null)))?((((map__47515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47515):map__47515);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,cljs.core.cst$kw$merge_DASH_data);
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47515__$1,cljs.core.cst$kw$merge_DASH_query);
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$untangled_SLASH_merge);

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(untangled.client.core.integrate_ident_BANG_,state,ident,named_parameters);

om.next.protocols.queue_BANG_(reconciler,data_path_keys);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
});

untangled.client.core.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

untangled.client.core.merge_state_BANG_.cljs$lang$applyTo = (function (seq47510){
var G__47511 = cljs.core.first(seq47510);
var seq47510__$1 = cljs.core.next(seq47510);
var G__47512 = cljs.core.first(seq47510__$1);
var seq47510__$2 = cljs.core.next(seq47510__$1);
var G__47513 = cljs.core.first(seq47510__$2);
var seq47510__$3 = cljs.core.next(seq47510__$2);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47511,G__47512,G__47513,seq47510__$3);
});


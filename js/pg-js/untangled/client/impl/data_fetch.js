// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next.impl.parser');
goog.require('om.next');
goog.require('om.next.protocols');
goog.require('om.util');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('untangled.dom');
goog.require('cljs_uuid_utils.core');









/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_(state,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type);
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_(state))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type.cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$ready);
});

/**
 * Test if the given item is a data state marker in the loading state
 */
untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$loading);
});

/**
 * Test if the given item is a data state marker in the failed state
 */
untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_(state,cljs.core.cst$kw$failed);
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__46364 = cljs.core.seq(items_to_load);
var chunk__46365 = null;
var count__46366 = (0);
var i__46367 = (0);
while(true){
if((i__46367 < count__46366)){
var item = chunk__46365.cljs$core$IIndexed$_nth$arity$2(null,i__46367);
var i_46368 = (untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var place_marker_46369 = ((function (seq__46364,chunk__46365,count__46366,i__46367,i_46368,item){
return (function (state){
if(cljs.core.truth_((untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i_46368) : untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_46368)))){
return cljs.core.assoc_in(state,(untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(i_46368) : untangled.client.impl.data_fetch.data_path.call(null,i_46368)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,i_46368], null));
} else {
return state;
}
});})(seq__46364,chunk__46365,count__46366,i__46367,i_46368,item))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46364,chunk__46365,count__46366,i__46367,i_46368,place_marker_46369,item){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(place_marker_46369(s),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i_46368) : untangled.client.impl.data_fetch.data_uuid.call(null,i_46368)));
});})(seq__46364,chunk__46365,count__46366,i__46367,i_46368,place_marker_46369,item))
);

var G__46370 = seq__46364;
var G__46371 = chunk__46365;
var G__46372 = count__46366;
var G__46373 = (i__46367 + (1));
seq__46364 = G__46370;
chunk__46365 = G__46371;
count__46366 = G__46372;
i__46367 = G__46373;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46364);
if(temp__6753__auto__){
var seq__46364__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46364__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46364__$1);
var G__46374 = cljs.core.chunk_rest(seq__46364__$1);
var G__46375 = c__8413__auto__;
var G__46376 = cljs.core.count(c__8413__auto__);
var G__46377 = (0);
seq__46364 = G__46374;
chunk__46365 = G__46375;
count__46366 = G__46376;
i__46367 = G__46377;
continue;
} else {
var item = cljs.core.first(seq__46364__$1);
var i_46378 = (untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var place_marker_46379 = ((function (seq__46364,chunk__46365,count__46366,i__46367,i_46378,item,seq__46364__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_((untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i_46378) : untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_46378)))){
return cljs.core.assoc_in(state,(untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(i_46378) : untangled.client.impl.data_fetch.data_path.call(null,i_46378)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,i_46378], null));
} else {
return state;
}
});})(seq__46364,chunk__46365,count__46366,i__46367,i_46378,item,seq__46364__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46364,chunk__46365,count__46366,i__46367,i_46378,place_marker_46379,item,seq__46364__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(place_marker_46379(s),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i_46378) : untangled.client.impl.data_fetch.data_uuid.call(null,i_46378)));
});})(seq__46364,chunk__46365,count__46366,i__46367,i_46378,place_marker_46379,item,seq__46364__$1,temp__6753__auto__))
);

var G__46380 = cljs.core.next(seq__46364__$1);
var G__46381 = null;
var G__46382 = (0);
var G__46383 = (0);
seq__46364 = G__46380;
chunk__46365 = G__46381;
count__46366 = G__46382;
i__46367 = G__46383;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(remote_name,reconciler){
var state = om.next.app_state(reconciler);
var queued_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load);
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__7490__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_parallel.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote_name,(untangled.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.data_remote.call(null,item)));
} else {
return and__7490__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress)));
var items_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = (cljs.core.seq(items_to_load)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_(items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers(state,items_to_load);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));

var iter__8364__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46394(s__46395){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__46395__$1 = s__46395;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46395__$1);
if(temp__6753__auto__){
var s__46395__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46395__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46395__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46397 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46396 = (0);
while(true){
if((i__46396 < size__8363__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46396);
cljs.core.chunk_append(b__46397,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__46402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__46402) : untangled.client.impl.data_fetch.full_query.call(null,G__46402));
})(),cljs.core.cst$kw$on_DASH_load,(untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__46404 = (i__46396 + (1));
i__46396 = G__46404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46397),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46394(cljs.core.chunk_rest(s__46395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46397),null);
}
} else {
var item = cljs.core.first(s__46395__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__46403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__46403) : untangled.client.impl.data_fetch.full_query.call(null,G__46403));
})(),cljs.core.cst$kw$on_DASH_load,(untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46394(cljs.core.rest(s__46395__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
,null,null));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
;
return iter__8364__auto__(items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args46405 = [];
var len__8723__auto___46408 = arguments.length;
var i__8724__auto___46409 = (0);
while(true){
if((i__8724__auto___46409 < len__8723__auto___46408)){
args46405.push((arguments[i__8724__auto___46409]));

var G__46410 = (i__8724__auto___46409 + (1));
i__8724__auto___46409 = G__46410;
continue;
} else {
}
break;
}

var G__46407 = args46405.length;
switch (G__46407) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46405.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__46412 = null;
var G__46412__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46412__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__46412__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keys_seen) : cljs.core.deref.call(null,keys_seen)),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__46412 = function(result,input){
switch(arguments.length){
case 0:
return G__46412__0.call(this);
case 1:
return G__46412__1.call(this,result);
case 2:
return G__46412__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46412.cljs$core$IFn$_invoke$arity$0 = G__46412__0;
G__46412.cljs$core$IFn$_invoke$arity$1 = G__46412__1;
G__46412.cljs$core$IFn$_invoke$arity$2 = G__46412__2;
return G__46412;
})()
;})(keys_seen))
});
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1(keys_fn),coll);
});

untangled.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.join_key_or_nil = (function untangled$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var join_key_or_ident = om.util.join_key(expr);
if(om.util.ident_QMARK_(join_key_or_ident)){
return cljs.core.first(join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
/**
 * This function is used to split accidental colliding queries into separate network
 *   requests. The most general description of this issue is
 *   from two unrelated `load` calls when black-box composing functions. The two
 *   separate queries: One issues `[{:entitlements [:foo]}]`, and the other
 *   asks for `[{:entitlements [:bar]}]`. Untangled merges these into a single query
 *   [{:entitlements [:foo]} {:entitlements [:bar]}]. However, the response to a query
 *   is a map, and such a query would result in the backend parser being called twice (once per key in the subquery)
 *   but one would stomp on the other. Thus, this function ensures such accidental collisions are
 *   not combined into a single network request.
 */
untangled.client.impl.data_fetch.split_items_ready_to_load = (function untangled$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.set(untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.join_key_or_nil,(untangled.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_query.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.data_query.call(null,item)));
}),items_ready_to_load));
var items_to_defer = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(items_to_load_now,items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(remote,reconciler){
var state = om.next.app_state(reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remote,(untangled.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_remote.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.data_remote.call(null,item)));
});})(state))
;
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load);
var items_ready_to_load = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress)));
var vec__46416 = untangled.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(1),null);
var remaining_items = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.seq(items_to_load_now)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_(items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers(state,items_to_load_now);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load,remaining_items], 0));

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(items_to_load_now) : untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now)),cljs.core.cst$kw$on_DASH_load,(untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ready,null,cljs.core.cst$kw$loading,null,cljs.core.cst$kw$failed,null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args46419 = [];
var len__8723__auto___46422 = arguments.length;
var i__8724__auto___46423 = (0);
while(true){
if((i__8724__auto___46423 < len__8723__auto___46422)){
args46419.push((arguments[i__8724__auto___46423]));

var G__46424 = (i__8724__auto___46423 + (1));
i__8724__auto___46423 = G__46424;
continue;
} else {
}
break;
}

var G__46421 = args46419.length;
switch (G__46421) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46419.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2(type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_params,params], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("INVALID DATA STATE TYPE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load);
if(cljs.core.empty_QMARK_(items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items_DASH_to_DASH_load,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(untangled.client.impl.data_fetch.data_query,cljs.core.array_seq([items_to_load], 0)))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__46427,elision_set){
var map__46430 = p__46427;
var map__46430__$1 = ((((!((map__46430 == null)))?((((map__46430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46430):map__46430);
var ast = map__46430__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46430__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46430__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46430__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([union_key], 0))], 0));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__46430,map__46430__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__46430,map__46430__$1,ast,key,union_key,children){
return (function (p1__46426_SHARP_){
return (untangled.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__46426_SHARP_,elision_set) : untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__46426_SHARP_,elision_set));
});})(union_elision_QMARK_,map__46430,map__46430__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__46430,map__46430__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set(cljs.core.keys(params));
var unknown_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_(unknown_keys))){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error: You attempted to add parameters for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([unknown_keys], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to top-level key(s) of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.ast__GT_query(ast)], 0)))].join('')], 0));
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__46432_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__6751__auto__)){
var new_params = temp__6751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(c,cljs.core.cst$kw$params,cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__46432_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__46433){
var map__46437 = p__46433;
var map__46437__$1 = ((((!((map__46437 == null)))?((((map__46437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46437):map__46437);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$query);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46437__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46437__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46437__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$field);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46437__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46437__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(cljs.core.truth_((function (){var or__7502__auto__ = field;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("You must supply a query or a field/ident pair"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.core.not(field);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var and__7490__auto__ = field;
if(cljs.core.truth_(and__7490__auto__)){
return om.util.ident_QMARK_(ident);
} else {
return and__7490__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Field requires ident"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast(query);
var ast = (function (){var G__46439 = old_ast;
var G__46439__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?untangled.client.impl.data_fetch.elide_ast_nodes(G__46439,without):G__46439);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params(G__46439__$1,params);
} else {
return G__46439__$1;
}
})();
var query_field = cljs.core.first(query);
var key = (cljs.core.truth_(om.util.join_QMARK_(query_field))?om.util.join_key(query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query(ast);
if((cljs.core.not(field)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,key))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Component fetch query does not match supplied field."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_parallel,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_marker,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_ident,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_remote,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_fallback,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_query,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_refresh,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_uuid],[post_mutation,parallel,marker,cljs.core.cst$kw$ready,ident,post_mutation_params,remote,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_squuid())]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__46440){
var map__46443 = p__46440;
var map__46443__$1 = ((((!((map__46443 == null)))?((((map__46443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46443):map__46443);
var config = map__46443__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46443__$1,cljs.core.cst$kw$state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.array_seq([untangled.client.impl.data_fetch.ready_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0)))], 0));
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_target = (function untangled$client$impl$data_fetch$data_target(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_ident.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident(state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([untangled.client.impl.data_fetch.data_ident(state),cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_uuid.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
untangled.client.impl.data_fetch.data_marker_QMARK_ = (function untangled$client$impl$data_fetch$data_marker_QMARK_(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_marker.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_refresh.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
untangled.client.impl.data_fetch.data_remote = (function untangled$client$impl$data_fetch$data_remote(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_remote.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast(cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_query.cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
var target = untangled.client.impl.data_fetch.data_target(state);
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.vector_QMARK_(target);
if(and__7490__auto__){
return cljs.core.not_empty(target);
} else {
return and__7490__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_(untangled.client.impl.data_fetch.data_ident(state))) && ((untangled.client.impl.data_fetch.data_field(state) instanceof cljs.core.Keyword))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_ident(state),untangled.client.impl.data_fetch.data_field(state));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key(state)], null);

}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_params.cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_without.cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_type,type,cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_params,params], null)], 0));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args46445 = [];
var len__8723__auto___46454 = arguments.length;
var i__8724__auto___46455 = (0);
while(true){
if((i__8724__auto___46455 < len__8723__auto___46454)){
args46445.push((arguments[i__8724__auto___46455]));

var G__46456 = (i__8724__auto___46455 + (1));
i__8724__auto___46455 = G__46456;
continue;
} else {
}
break;
}

var G__46447 = args46445.length;
switch (G__46447) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46445.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$ready,params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args46448 = [];
var len__8723__auto___46458 = arguments.length;
var i__8724__auto___46459 = (0);
while(true){
if((i__8724__auto___46459 < len__8723__auto___46458)){
args46448.push((arguments[i__8724__auto___46459]));

var G__46460 = (i__8724__auto___46459 + (1));
i__8724__auto___46459 = G__46460;
continue;
} else {
}
break;
}

var G__46450 = args46448.length;
switch (G__46450) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46448.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type(state,cljs.core.cst$kw$loading,params);
return cljs.core.with_meta(rv,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args46451 = [];
var len__8723__auto___46462 = arguments.length;
var i__8724__auto___46463 = (0);
while(true){
if((i__8724__auto___46463 < len__8723__auto___46462)){
args46451.push((arguments[i__8724__auto___46463]));

var G__46464 = (i__8724__auto___46463 + (1));
i__8724__auto___46463 = G__46464;
continue;
} else {
}
break;
}

var G__46453 = args46451.length;
switch (G__46453) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46451.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2(state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type(state,cljs.core.cst$kw$failed,params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (item){
return untangled.client.impl.data_fetch.data_query(item);
}),cljs.core.array_seq([items], 0)));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state(reconciler);
var loading_QMARK_ = cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_loading_DASH_data,loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
untangled.client.impl.data_fetch.relocate_targeted_results = (function untangled$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
var seq__46470 = cljs.core.seq(items);
var chunk__46471 = null;
var count__46472 = (0);
var i__46473 = (0);
while(true){
if((i__46473 < count__46472)){
var item = chunk__46471.cljs$core$IIndexed$_nth$arity$2(null,i__46473);
var default_target_46474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key(item)], null);
var field_target_46475 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = untangled.client.impl.data_fetch.data_ident(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_46476 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__46477 = (function (){var and__7490__auto__ = cljs.core.not_empty(explicit_target_46476);
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46476,field_target_46475)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46476,default_target_46474));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__46477)){
var value_46478 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),default_target_46474);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46470,chunk__46471,count__46472,i__46473,value_46478,default_target_46474,field_target_46475,explicit_target_46476,relocate_QMARK__46477,item){
return (function (m){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,untangled.client.impl.data_fetch.data_query_key(item)),explicit_target_46476,value_46478);
});})(seq__46470,chunk__46471,count__46472,i__46473,value_46478,default_target_46474,field_target_46475,explicit_target_46476,relocate_QMARK__46477,item))
);
} else {
}

var G__46479 = seq__46470;
var G__46480 = chunk__46471;
var G__46481 = count__46472;
var G__46482 = (i__46473 + (1));
seq__46470 = G__46479;
chunk__46471 = G__46480;
count__46472 = G__46481;
i__46473 = G__46482;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46470);
if(temp__6753__auto__){
var seq__46470__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46470__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46470__$1);
var G__46483 = cljs.core.chunk_rest(seq__46470__$1);
var G__46484 = c__8413__auto__;
var G__46485 = cljs.core.count(c__8413__auto__);
var G__46486 = (0);
seq__46470 = G__46483;
chunk__46471 = G__46484;
count__46472 = G__46485;
i__46473 = G__46486;
continue;
} else {
var item = cljs.core.first(seq__46470__$1);
var default_target_46487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key(item)], null);
var field_target_46488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = untangled.client.impl.data_fetch.data_ident(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_46489 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__46490 = (function (){var and__7490__auto__ = cljs.core.not_empty(explicit_target_46489);
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46489,field_target_46488)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46489,default_target_46487));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__46490)){
var value_46491 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),default_target_46487);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46470,chunk__46471,count__46472,i__46473,value_46491,default_target_46487,field_target_46488,explicit_target_46489,relocate_QMARK__46490,item,seq__46470__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,untangled.client.impl.data_fetch.data_query_key(item)),explicit_target_46489,value_46491);
});})(seq__46470,chunk__46471,count__46472,i__46473,value_46491,default_target_46487,field_target_46488,explicit_target_46489,relocate_QMARK__46490,item,seq__46470__$1,temp__6753__auto__))
);
} else {
}

var G__46492 = cljs.core.next(seq__46470__$1);
var G__46493 = null;
var G__46494 = (0);
var G__46495 = (0);
seq__46470 = G__46492;
chunk__46471 = G__46493;
count__46472 = G__46494;
i__46473 = G__46495;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote load has completed. This includes:
 * 
 *   - Marking the items that were queries for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Forcing a global re-render if post-mutations ran (may change in future versions)
 *   
 */
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query(items);
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_loading_DASH_data,null], null), null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(untangled.client.impl.data_fetch.data_refresh,cljs.core.array_seq([items], 0)));
var to_refresh = cljs.core.vec(refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing(response,query);
var app_state = om.next.app_state(reconciler);
var ran_mutations = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__46514 = cljs.core.seq(loading_items);
var chunk__46515 = null;
var count__46516 = (0);
var i__46517 = (0);
while(true){
if((i__46517 < count__46516)){
var item = chunk__46515.cljs$core$IIndexed$_nth$arity$2(null,i__46517);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46514,chunk__46515,count__46516,i__46517,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__46518 = s;
var G__46518__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46518,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))){
return cljs.core.assoc_in(G__46518__$1,untangled.client.impl.data_fetch.data_path(item),null);
} else {
return G__46518__$1;
}
});})(seq__46514,chunk__46515,count__46516,i__46517,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__46532 = seq__46514;
var G__46533 = chunk__46515;
var G__46534 = count__46516;
var G__46535 = (i__46517 + (1));
seq__46514 = G__46532;
chunk__46515 = G__46533;
count__46516 = G__46534;
i__46517 = G__46535;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46514);
if(temp__6753__auto__){
var seq__46514__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46514__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46514__$1);
var G__46536 = cljs.core.chunk_rest(seq__46514__$1);
var G__46537 = c__8413__auto__;
var G__46538 = cljs.core.count(c__8413__auto__);
var G__46539 = (0);
seq__46514 = G__46536;
chunk__46515 = G__46537;
count__46516 = G__46538;
i__46517 = G__46539;
continue;
} else {
var item = cljs.core.first(seq__46514__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46514,chunk__46515,count__46516,i__46517,item,seq__46514__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__46519 = s;
var G__46519__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46519,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))){
return cljs.core.assoc_in(G__46519__$1,untangled.client.impl.data_fetch.data_path(item),null);
} else {
return G__46519__$1;
}
});})(seq__46514,chunk__46515,count__46516,i__46517,item,seq__46514__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__46540 = cljs.core.next(seq__46514__$1);
var G__46541 = null;
var G__46542 = (0);
var G__46543 = (0);
seq__46514 = G__46540;
chunk__46515 = G__46541;
count__46516 = G__46542;
i__46517 = G__46543;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__46520 = cljs.core.seq(loading_items);
var chunk__46521 = null;
var count__46522 = (0);
var i__46523 = (0);
while(true){
if((i__46523 < count__46522)){
var item = chunk__46521.cljs$core$IIndexed$_nth$arity$2(null,i__46523);
var temp__6753__auto___46544 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46544)){
var mutation_symbol_46545 = temp__6753__auto___46544;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_mutations,true) : cljs.core.reset_BANG_.call(null,ran_mutations,true));

var params_46546 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__46524_46547 = (function (){var G__46525 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,om.next.app_state(reconciler)], null);
var G__46526 = mutation_symbol_46545;
var G__46527 = params_46546;
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46525,G__46526,G__46527) : untangled.client.mutations.mutate.call(null,G__46525,G__46526,G__46527));
})();
var G__46524_46548__$1 = (((G__46524_46547 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46524_46547));
if((G__46524_46548__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46524_46548__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46549 = seq__46520;
var G__46550 = chunk__46521;
var G__46551 = count__46522;
var G__46552 = (i__46523 + (1));
seq__46520 = G__46549;
chunk__46521 = G__46550;
count__46522 = G__46551;
i__46523 = G__46552;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46520);
if(temp__6753__auto__){
var seq__46520__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46520__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46520__$1);
var G__46553 = cljs.core.chunk_rest(seq__46520__$1);
var G__46554 = c__8413__auto__;
var G__46555 = cljs.core.count(c__8413__auto__);
var G__46556 = (0);
seq__46520 = G__46553;
chunk__46521 = G__46554;
count__46522 = G__46555;
i__46523 = G__46556;
continue;
} else {
var item = cljs.core.first(seq__46520__$1);
var temp__6753__auto___46557__$1 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46557__$1)){
var mutation_symbol_46558 = temp__6753__auto___46557__$1;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_mutations,true) : cljs.core.reset_BANG_.call(null,ran_mutations,true));

var params_46559 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__46528_46560 = (function (){var G__46529 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,om.next.app_state(reconciler)], null);
var G__46530 = mutation_symbol_46558;
var G__46531 = params_46559;
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46529,G__46530,G__46531) : untangled.client.mutations.mutate.call(null,G__46529,G__46530,G__46531));
})();
var G__46528_46561__$1 = (((G__46528_46560 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46528_46560));
if((G__46528_46561__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46528_46561__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46562 = cljs.core.next(seq__46520__$1);
var G__46563 = null;
var G__46564 = (0);
var G__46565 = (0);
seq__46520 = G__46562;
chunk__46521 = G__46563;
count__46522 = G__46564;
i__46523 = G__46565;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers();

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,marked_response,query);

untangled.client.impl.data_fetch.relocate_targeted_results(app_state,loading_items);

run_post_mutations();

untangled.client.impl.data_fetch.set_global_loading(reconciler);

if(cljs.core.contains_QMARK_(refresh_set,cljs.core.cst$kw$untangled_SLASH_force_DASH_root)){
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
} else {
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2(reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:untangled/server-error)
 *   - Refreshes UI
 *   
 */
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state(reconciler);
var refresh_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_loading_DASH_data,null], null), null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(untangled.client.impl.data_fetch.data_refresh,cljs.core.array_seq([items], 0)));
var to_refresh = cljs.core.vec(refresh_set);
var ran_fallbacks = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$untangled_SLASH_server_DASH_error,error);

var seq__46584 = cljs.core.seq(loading_items);
var chunk__46585 = null;
var count__46586 = (0);
var i__46587 = (0);
while(true){
if((i__46587 < count__46586)){
var item = chunk__46585.cljs$core$IIndexed$_nth$arity$2(null,i__46587);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46584,chunk__46585,count__46586,i__46587,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46588 = s;
var G__46588__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__46588,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46588);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46588__$1,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item));

});})(seq__46584,chunk__46585,count__46586,i__46587,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46602 = seq__46584;
var G__46603 = chunk__46585;
var G__46604 = count__46586;
var G__46605 = (i__46587 + (1));
seq__46584 = G__46602;
chunk__46585 = G__46603;
count__46586 = G__46604;
i__46587 = G__46605;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46584);
if(temp__6753__auto__){
var seq__46584__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46584__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46584__$1);
var G__46606 = cljs.core.chunk_rest(seq__46584__$1);
var G__46607 = c__8413__auto__;
var G__46608 = cljs.core.count(c__8413__auto__);
var G__46609 = (0);
seq__46584 = G__46606;
chunk__46585 = G__46607;
count__46586 = G__46608;
i__46587 = G__46609;
continue;
} else {
var item = cljs.core.first(seq__46584__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46584,chunk__46585,count__46586,i__46587,item,seq__46584__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46589 = s;
var G__46589__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__46589,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46589);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46589__$1,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item));

});})(seq__46584,chunk__46585,count__46586,i__46587,item,seq__46584__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46610 = cljs.core.next(seq__46584__$1);
var G__46611 = null;
var G__46612 = (0);
var G__46613 = (0);
seq__46584 = G__46610;
chunk__46585 = G__46611;
count__46586 = G__46612;
i__46587 = G__46613;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__46590 = cljs.core.seq(loading_items);
var chunk__46591 = null;
var count__46592 = (0);
var i__46593 = (0);
while(true){
if((i__46593 < count__46592)){
var item = chunk__46591.cljs$core$IIndexed$_nth$arity$2(null,i__46593);
var temp__6753__auto___46614 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46614)){
var fallback_symbol_46615 = temp__6753__auto___46614;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_fallbacks,true) : cljs.core.reset_BANG_.call(null,ran_fallbacks,true));

var G__46594_46616 = (function (){var G__46595 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,app_state], null);
var G__46596 = fallback_symbol_46615;
var G__46597 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46595,G__46596,G__46597) : untangled.client.mutations.mutate.call(null,G__46595,G__46596,G__46597));
})();
var G__46594_46617__$1 = (((G__46594_46616 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46594_46616));
if((G__46594_46617__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46594_46617__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46618 = seq__46590;
var G__46619 = chunk__46591;
var G__46620 = count__46592;
var G__46621 = (i__46593 + (1));
seq__46590 = G__46618;
chunk__46591 = G__46619;
count__46592 = G__46620;
i__46593 = G__46621;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46590);
if(temp__6753__auto__){
var seq__46590__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46590__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46590__$1);
var G__46622 = cljs.core.chunk_rest(seq__46590__$1);
var G__46623 = c__8413__auto__;
var G__46624 = cljs.core.count(c__8413__auto__);
var G__46625 = (0);
seq__46590 = G__46622;
chunk__46591 = G__46623;
count__46592 = G__46624;
i__46593 = G__46625;
continue;
} else {
var item = cljs.core.first(seq__46590__$1);
var temp__6753__auto___46626__$1 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46626__$1)){
var fallback_symbol_46627 = temp__6753__auto___46626__$1;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_fallbacks,true) : cljs.core.reset_BANG_.call(null,ran_fallbacks,true));

var G__46598_46628 = (function (){var G__46599 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,app_state], null);
var G__46600 = fallback_symbol_46627;
var G__46601 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46599,G__46600,G__46601) : untangled.client.mutations.mutate.call(null,G__46599,G__46600,G__46601));
})();
var G__46598_46629__$1 = (((G__46598_46628 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46598_46628));
if((G__46598_46629__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46598_46629__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46630 = cljs.core.next(seq__46590__$1);
var G__46631 = null;
var G__46632 = (0);
var G__46633 = (0);
seq__46590 = G__46630;
chunk__46591 = G__46631;
count__46592 = G__46632;
i__46593 = G__46633;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors();

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key()], null));

run_fallbacks();

untangled.client.impl.data_fetch.set_global_loading(reconciler);

if(cljs.core.contains_QMARK_(refresh_set,cljs.core.cst$kw$untangled_SLASH_force_DASH_root)){
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
} else {
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2(reconciler,to_refresh);
}
});
});

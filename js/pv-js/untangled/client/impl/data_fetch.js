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
var seq__45995 = cljs.core.seq(items_to_load);
var chunk__45996 = null;
var count__45997 = (0);
var i__45998 = (0);
while(true){
if((i__45998 < count__45997)){
var item = chunk__45996.cljs$core$IIndexed$_nth$arity$2(null,i__45998);
var i_46009 = (untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var place_marker_46010 = ((function (seq__45995,chunk__45996,count__45997,i__45998,i_46009,item){
return (function (state){
if(cljs.core.truth_((untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i_46009) : untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_46009)))){
return cljs.core.assoc_in(state,(untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(i_46009) : untangled.client.impl.data_fetch.data_path.call(null,i_46009)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,i_46009], null));
} else {
return state;
}
});})(seq__45995,chunk__45996,count__45997,i__45998,i_46009,item))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__45995,chunk__45996,count__45997,i__45998,i_46009,place_marker_46010,item){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(place_marker_46010(s),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i_46009) : untangled.client.impl.data_fetch.data_uuid.call(null,i_46009)));
});})(seq__45995,chunk__45996,count__45997,i__45998,i_46009,place_marker_46010,item))
);

var G__46023 = seq__45995;
var G__46024 = chunk__45996;
var G__46025 = count__45997;
var G__46026 = (i__45998 + (1));
seq__45995 = G__46023;
chunk__45996 = G__46024;
count__45997 = G__46025;
i__45998 = G__46026;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__45995);
if(temp__6753__auto__){
var seq__45995__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45995__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__45995__$1);
var G__46029 = cljs.core.chunk_rest(seq__45995__$1);
var G__46030 = c__8413__auto__;
var G__46031 = cljs.core.count(c__8413__auto__);
var G__46032 = (0);
seq__45995 = G__46029;
chunk__45996 = G__46030;
count__45997 = G__46031;
i__45998 = G__46032;
continue;
} else {
var item = cljs.core.first(seq__45995__$1);
var i_46038 = (untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1(item) : untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item));
var place_marker_46039 = ((function (seq__45995,chunk__45996,count__45997,i__45998,i_46038,item,seq__45995__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_((untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_marker_QMARK_.cljs$core$IFn$_invoke$arity$1(i_46038) : untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_46038)))){
return cljs.core.assoc_in(state,(untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_path.cljs$core$IFn$_invoke$arity$1(i_46038) : untangled.client.impl.data_fetch.data_path.call(null,i_46038)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,i_46038], null));
} else {
return state;
}
});})(seq__45995,chunk__45996,count__45997,i__45998,i_46038,item,seq__45995__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__45995,chunk__45996,count__45997,i__45998,i_46038,place_marker_46039,item,seq__45995__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(place_marker_46039(s),cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.data_uuid.cljs$core$IFn$_invoke$arity$1(i_46038) : untangled.client.impl.data_fetch.data_uuid.call(null,i_46038)));
});})(seq__45995,chunk__45996,count__45997,i__45998,i_46038,place_marker_46039,item,seq__45995__$1,temp__6753__auto__))
);

var G__46058 = cljs.core.next(seq__45995__$1);
var G__46059 = null;
var G__46060 = (0);
var G__46061 = (0);
seq__45995 = G__46058;
chunk__45996 = G__46059;
count__45997 = G__46060;
i__45998 = G__46061;
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
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46088(s__46089){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__46089__$1 = s__46089;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46089__$1);
if(temp__6753__auto__){
var s__46089__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46089__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46089__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46091 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46090 = (0);
while(true){
if((i__46090 < size__8363__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46090);
cljs.core.chunk_append(b__46091,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__46099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__46099) : untangled.client.impl.data_fetch.full_query.call(null,G__46099));
})(),cljs.core.cst$kw$on_DASH_load,(untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__46146 = (i__46090 + (1));
i__46090 = G__46146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46091),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46088(cljs.core.chunk_rest(s__46089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46091),null);
}
} else {
var item = cljs.core.first(s__46089__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,(function (){var G__46100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
return (untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.full_query.cljs$core$IFn$_invoke$arity$1(G__46100) : untangled.client.impl.data_fetch.full_query.call(null,G__46100));
})(),cljs.core.cst$kw$on_DASH_load,(untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.loaded_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler)),cljs.core.cst$kw$on_DASH_error,(untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.data_fetch.error_callback.cljs$core$IFn$_invoke$arity$1(reconciler) : untangled.client.impl.data_fetch.error_callback.call(null,reconciler)),cljs.core.cst$kw$load_DASH_descriptors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__46088(cljs.core.rest(s__46089__$2)));
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
var args46157 = [];
var len__8723__auto___46187 = arguments.length;
var i__8724__auto___46188 = (0);
while(true){
if((i__8724__auto___46188 < len__8723__auto___46187)){
args46157.push((arguments[i__8724__auto___46188]));

var G__46191 = (i__8724__auto___46188 + (1));
i__8724__auto___46188 = G__46191;
continue;
} else {
}
break;
}

var G__46161 = args46157.length;
switch (G__46161) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46157.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__46203 = null;
var G__46203__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46203__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__46203__2 = (function (result,input){
var input_keys = cljs.core.set((keys_fn.cljs$core$IFn$_invoke$arity$1 ? keys_fn.cljs$core$IFn$_invoke$arity$1(input) : keys_fn.call(null,input)));
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(keys_seen) : cljs.core.deref.call(null,keys_seen)),input_keys))){
cljs.core._vreset_BANG_(keys_seen,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(keys_seen),input_keys));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__46203 = function(result,input){
switch(arguments.length){
case 0:
return G__46203__0.call(this);
case 1:
return G__46203__1.call(this,result);
case 2:
return G__46203__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46203.cljs$core$IFn$_invoke$arity$0 = G__46203__0;
G__46203.cljs$core$IFn$_invoke$arity$1 = G__46203__1;
G__46203.cljs$core$IFn$_invoke$arity$2 = G__46203__2;
return G__46203;
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
var vec__46255 = untangled.client.impl.data_fetch.split_items_ready_to_load(items_ready_to_load);
var items_to_load_now = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(0),null);
var items_to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46255,(1),null);
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
var args46281 = [];
var len__8723__auto___46300 = arguments.length;
var i__8724__auto___46301 = (0);
while(true){
if((i__8724__auto___46301 < len__8723__auto___46300)){
args46281.push((arguments[i__8724__auto___46301]));

var G__46311 = (i__8724__auto___46301 + (1));
i__8724__auto___46301 = G__46311;
continue;
} else {
}
break;
}

var G__46291 = args46281.length;
switch (G__46291) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46281.length)].join('')));

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
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__46333,elision_set){
var map__46341 = p__46333;
var map__46341__$1 = ((((!((map__46341 == null)))?((((map__46341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46341):map__46341);
var ast = map__46341__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,cljs.core.cst$kw$key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,cljs.core.cst$kw$union_DASH_key);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46341__$1,cljs.core.cst$kw$children);
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count(children) <= (2)))){
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([union_key], 0))], 0));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$children,((function (union_elision_QMARK_,map__46341,map__46341__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__46341,map__46341__$1,ast,key,union_key,children){
return (function (p1__46332_SHARP_){
return (untangled.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? untangled.client.impl.data_fetch.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__46332_SHARP_,elision_set) : untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__46332_SHARP_,elision_set));
});})(union_elision_QMARK_,map__46341,map__46341__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__46341,map__46341__$1,ast,key,union_key,children))
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
return (function (p1__46372_SHARP_){
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
,p1__46372_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__46379){
var map__46388 = p__46379;
var map__46388__$1 = ((((!((map__46388 == null)))?((((map__46388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46388):map__46388);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$target);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$query);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46388__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46388__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$parallel);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46388__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$params);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$field);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46388__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$ident);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
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
var ast = (function (){var G__46390 = old_ast;
var G__46390__$1 = (cljs.core.truth_(cljs.core.not_empty(without))?untangled.client.impl.data_fetch.elide_ast_nodes(G__46390,without):G__46390);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params(G__46390__$1,params);
} else {
return G__46390__$1;
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
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__46399){
var map__46402 = p__46399;
var map__46402__$1 = ((((!((map__46402 == null)))?((((map__46402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46402):map__46402);
var config = map__46402__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46402__$1,cljs.core.cst$kw$state);
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
var args46474 = [];
var len__8723__auto___46495 = arguments.length;
var i__8724__auto___46496 = (0);
while(true){
if((i__8724__auto___46496 < len__8723__auto___46495)){
args46474.push((arguments[i__8724__auto___46496]));

var G__46498 = (i__8724__auto___46496 + (1));
i__8724__auto___46496 = G__46498;
continue;
} else {
}
break;
}

var G__46480 = args46474.length;
switch (G__46480) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46474.length)].join('')));

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
var args46481 = [];
var len__8723__auto___46503 = arguments.length;
var i__8724__auto___46505 = (0);
while(true){
if((i__8724__auto___46505 < len__8723__auto___46503)){
args46481.push((arguments[i__8724__auto___46505]));

var G__46506 = (i__8724__auto___46505 + (1));
i__8724__auto___46505 = G__46506;
continue;
} else {
}
break;
}

var G__46484 = args46481.length;
switch (G__46484) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46481.length)].join('')));

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
var args46487 = [];
var len__8723__auto___46512 = arguments.length;
var i__8724__auto___46513 = (0);
while(true){
if((i__8724__auto___46513 < len__8723__auto___46512)){
args46487.push((arguments[i__8724__auto___46513]));

var G__46514 = (i__8724__auto___46513 + (1));
i__8724__auto___46513 = G__46514;
continue;
} else {
}
break;
}

var G__46490 = args46487.length;
switch (G__46490) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46487.length)].join('')));

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
var seq__46532 = cljs.core.seq(items);
var chunk__46533 = null;
var count__46534 = (0);
var i__46535 = (0);
while(true){
if((i__46535 < count__46534)){
var item = chunk__46533.cljs$core$IIndexed$_nth$arity$2(null,i__46535);
var default_target_46540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key(item)], null);
var field_target_46541 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = untangled.client.impl.data_fetch.data_ident(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_46542 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__46543 = (function (){var and__7490__auto__ = cljs.core.not_empty(explicit_target_46542);
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46542,field_target_46541)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46542,default_target_46540));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__46543)){
var value_46550 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),default_target_46540);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46532,chunk__46533,count__46534,i__46535,value_46550,default_target_46540,field_target_46541,explicit_target_46542,relocate_QMARK__46543,item){
return (function (m){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,untangled.client.impl.data_fetch.data_query_key(item)),explicit_target_46542,value_46550);
});})(seq__46532,chunk__46533,count__46534,i__46535,value_46550,default_target_46540,field_target_46541,explicit_target_46542,relocate_QMARK__46543,item))
);
} else {
}

var G__46553 = seq__46532;
var G__46554 = chunk__46533;
var G__46555 = count__46534;
var G__46556 = (i__46535 + (1));
seq__46532 = G__46553;
chunk__46533 = G__46554;
count__46534 = G__46555;
i__46535 = G__46556;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46532);
if(temp__6753__auto__){
var seq__46532__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46532__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46532__$1);
var G__46559 = cljs.core.chunk_rest(seq__46532__$1);
var G__46560 = c__8413__auto__;
var G__46561 = cljs.core.count(c__8413__auto__);
var G__46562 = (0);
seq__46532 = G__46559;
chunk__46533 = G__46560;
count__46534 = G__46561;
i__46535 = G__46562;
continue;
} else {
var item = cljs.core.first(seq__46532__$1);
var default_target_46563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key(item)], null);
var field_target_46564 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = untangled.client.impl.data_fetch.data_ident(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_field.cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_46565 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_target.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__46566 = (function (){var and__7490__auto__ = cljs.core.not_empty(explicit_target_46565);
if(cljs.core.truth_(and__7490__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46565,field_target_46564)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(explicit_target_46565,default_target_46563));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__46566)){
var value_46571 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)),default_target_46563);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (seq__46532,chunk__46533,count__46534,i__46535,value_46571,default_target_46563,field_target_46564,explicit_target_46565,relocate_QMARK__46566,item,seq__46532__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,untangled.client.impl.data_fetch.data_query_key(item)),explicit_target_46565,value_46571);
});})(seq__46532,chunk__46533,count__46534,i__46535,value_46571,default_target_46563,field_target_46564,explicit_target_46565,relocate_QMARK__46566,item,seq__46532__$1,temp__6753__auto__))
);
} else {
}

var G__46574 = cljs.core.next(seq__46532__$1);
var G__46575 = null;
var G__46576 = (0);
var G__46577 = (0);
seq__46532 = G__46574;
chunk__46533 = G__46575;
count__46534 = G__46576;
i__46535 = G__46577;
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
var seq__46628 = cljs.core.seq(loading_items);
var chunk__46629 = null;
var count__46630 = (0);
var i__46631 = (0);
while(true){
if((i__46631 < count__46630)){
var item = chunk__46629.cljs$core$IIndexed$_nth$arity$2(null,i__46631);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46628,chunk__46629,count__46630,i__46631,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__46632 = s;
var G__46632__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46632,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))){
return cljs.core.assoc_in(G__46632__$1,untangled.client.impl.data_fetch.data_path(item),null);
} else {
return G__46632__$1;
}
});})(seq__46628,chunk__46629,count__46630,i__46631,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__46691 = seq__46628;
var G__46692 = chunk__46629;
var G__46693 = count__46630;
var G__46694 = (i__46631 + (1));
seq__46628 = G__46691;
chunk__46629 = G__46692;
count__46630 = G__46693;
i__46631 = G__46694;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46628);
if(temp__6753__auto__){
var seq__46628__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46628__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46628__$1);
var G__46696 = cljs.core.chunk_rest(seq__46628__$1);
var G__46697 = c__8413__auto__;
var G__46698 = cljs.core.count(c__8413__auto__);
var G__46699 = (0);
seq__46628 = G__46696;
chunk__46629 = G__46697;
count__46630 = G__46698;
i__46631 = G__46699;
continue;
} else {
var item = cljs.core.first(seq__46628__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46628,chunk__46629,count__46630,i__46631,item,seq__46628__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__46633 = s;
var G__46633__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46633,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))){
return cljs.core.assoc_in(G__46633__$1,untangled.client.impl.data_fetch.data_path(item),null);
} else {
return G__46633__$1;
}
});})(seq__46628,chunk__46629,count__46630,i__46631,item,seq__46628__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__46711 = cljs.core.next(seq__46628__$1);
var G__46712 = null;
var G__46713 = (0);
var G__46714 = (0);
seq__46628 = G__46711;
chunk__46629 = G__46712;
count__46630 = G__46713;
i__46631 = G__46714;
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
var seq__46634 = cljs.core.seq(loading_items);
var chunk__46635 = null;
var count__46636 = (0);
var i__46637 = (0);
while(true){
if((i__46637 < count__46636)){
var item = chunk__46635.cljs$core$IIndexed$_nth$arity$2(null,i__46637);
var temp__6753__auto___46716 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46716)){
var mutation_symbol_46717 = temp__6753__auto___46716;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_mutations,true) : cljs.core.reset_BANG_.call(null,ran_mutations,true));

var params_46718 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__46641_46720 = (function (){var G__46642 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,om.next.app_state(reconciler)], null);
var G__46643 = mutation_symbol_46717;
var G__46644 = params_46718;
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46642,G__46643,G__46644) : untangled.client.mutations.mutate.call(null,G__46642,G__46643,G__46644));
})();
var G__46641_46721__$1 = (((G__46641_46720 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46641_46720));
if((G__46641_46721__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46641_46721__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46724 = seq__46634;
var G__46725 = chunk__46635;
var G__46726 = count__46636;
var G__46727 = (i__46637 + (1));
seq__46634 = G__46724;
chunk__46635 = G__46725;
count__46636 = G__46726;
i__46637 = G__46727;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46634);
if(temp__6753__auto__){
var seq__46634__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46634__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46634__$1);
var G__46731 = cljs.core.chunk_rest(seq__46634__$1);
var G__46732 = c__8413__auto__;
var G__46733 = cljs.core.count(c__8413__auto__);
var G__46734 = (0);
seq__46634 = G__46731;
chunk__46635 = G__46732;
count__46636 = G__46733;
i__46637 = G__46734;
continue;
} else {
var item = cljs.core.first(seq__46634__$1);
var temp__6753__auto___46737__$1 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46737__$1)){
var mutation_symbol_46740 = temp__6753__auto___46737__$1;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_mutations,true) : cljs.core.reset_BANG_.call(null,ran_mutations,true));

var params_46742 = (function (){var or__7502__auto__ = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_post_DASH_mutation_DASH_params.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__46645_46744 = (function (){var G__46646 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,om.next.app_state(reconciler)], null);
var G__46647 = mutation_symbol_46740;
var G__46648 = params_46742;
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46646,G__46647,G__46648) : untangled.client.mutations.mutate.call(null,G__46646,G__46647,G__46648));
})();
var G__46645_46745__$1 = (((G__46645_46744 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46645_46744));
if((G__46645_46745__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46645_46745__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46750 = cljs.core.next(seq__46634__$1);
var G__46751 = null;
var G__46752 = (0);
var G__46753 = (0);
seq__46634 = G__46750;
chunk__46635 = G__46751;
count__46636 = G__46752;
i__46637 = G__46753;
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

var seq__46793 = cljs.core.seq(loading_items);
var chunk__46794 = null;
var count__46795 = (0);
var i__46796 = (0);
while(true){
if((i__46796 < count__46795)){
var item = chunk__46794.cljs$core$IIndexed$_nth$arity$2(null,i__46796);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46793,chunk__46794,count__46795,i__46796,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46797 = s;
var G__46797__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__46797,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46797);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46797__$1,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item));

});})(seq__46793,chunk__46794,count__46795,i__46796,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46827 = seq__46793;
var G__46828 = chunk__46794;
var G__46829 = count__46795;
var G__46830 = (i__46796 + (1));
seq__46793 = G__46827;
chunk__46794 = G__46828;
count__46795 = G__46829;
i__46796 = G__46830;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46793);
if(temp__6753__auto__){
var seq__46793__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46793__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46793__$1);
var G__46831 = cljs.core.chunk_rest(seq__46793__$1);
var G__46832 = c__8413__auto__;
var G__46833 = cljs.core.count(c__8413__auto__);
var G__46834 = (0);
seq__46793 = G__46831;
chunk__46794 = G__46832;
count__46795 = G__46833;
i__46796 = G__46834;
continue;
} else {
var item = cljs.core.first(seq__46793__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,((function (seq__46793,chunk__46794,count__46795,i__46796,item,seq__46793__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46798 = s;
var G__46798__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_(item))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__46798,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_path(item),cljs.core.cst$kw$ui_SLASH_fetch_DASH_state),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46798);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46798__$1,cljs.core.cst$kw$untangled_SLASH_loads_DASH_in_DASH_progress,cljs.core.disj,untangled.client.impl.data_fetch.data_uuid(item));

});})(seq__46793,chunk__46794,count__46795,i__46796,item,seq__46793__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46835 = cljs.core.next(seq__46793__$1);
var G__46836 = null;
var G__46837 = (0);
var G__46838 = (0);
seq__46793 = G__46835;
chunk__46794 = G__46836;
count__46795 = G__46837;
i__46796 = G__46838;
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
var seq__46799 = cljs.core.seq(loading_items);
var chunk__46800 = null;
var count__46801 = (0);
var i__46802 = (0);
while(true){
if((i__46802 < count__46801)){
var item = chunk__46800.cljs$core$IIndexed$_nth$arity$2(null,i__46802);
var temp__6753__auto___46839 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46839)){
var fallback_symbol_46840 = temp__6753__auto___46839;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_fallbacks,true) : cljs.core.reset_BANG_.call(null,ran_fallbacks,true));

var G__46804_46841 = (function (){var G__46805 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,app_state], null);
var G__46806 = fallback_symbol_46840;
var G__46807 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46805,G__46806,G__46807) : untangled.client.mutations.mutate.call(null,G__46805,G__46806,G__46807));
})();
var G__46804_46842__$1 = (((G__46804_46841 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46804_46841));
if((G__46804_46842__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46804_46842__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46845 = seq__46799;
var G__46846 = chunk__46800;
var G__46847 = count__46801;
var G__46848 = (i__46802 + (1));
seq__46799 = G__46845;
chunk__46800 = G__46846;
count__46801 = G__46847;
i__46802 = G__46848;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46799);
if(temp__6753__auto__){
var seq__46799__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46799__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46799__$1);
var G__46885 = cljs.core.chunk_rest(seq__46799__$1);
var G__46886 = c__8413__auto__;
var G__46887 = cljs.core.count(c__8413__auto__);
var G__46888 = (0);
seq__46799 = G__46885;
chunk__46800 = G__46886;
count__46801 = G__46887;
i__46802 = G__46888;
continue;
} else {
var item = cljs.core.first(seq__46799__$1);
var temp__6753__auto___46889__$1 = cljs.core.cst$kw$untangled$client$impl$data_DASH_fetch_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46889__$1)){
var fallback_symbol_46890 = temp__6753__auto___46889__$1;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ran_fallbacks,true) : cljs.core.reset_BANG_.call(null,ran_fallbacks,true));

var G__46808_46895 = (function (){var G__46809 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,app_state], null);
var G__46810 = fallback_symbol_46890;
var G__46811 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,error], null);
return (untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? untangled.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__46809,G__46810,G__46811) : untangled.client.mutations.mutate.call(null,G__46809,G__46810,G__46811));
})();
var G__46808_46896__$1 = (((G__46808_46895 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__46808_46895));
if((G__46808_46896__$1 == null)){
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__46808_46896__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46908 = cljs.core.next(seq__46799__$1);
var G__46909 = null;
var G__46910 = (0);
var G__46911 = (0);
seq__46799 = G__46908;
chunk__46800 = G__46909;
count__46801 = G__46910;
i__46802 = G__46911;
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

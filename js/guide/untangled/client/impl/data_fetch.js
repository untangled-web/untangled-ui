// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
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
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

/**
 * Test if the given item is a data state marker in the loading state
 */
untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

/**
 * Test if the given item is a data state marker in the failed state
 */
untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__701761 = cljs.core.seq.call(null,items_to_load);
var chunk__701762 = null;
var count__701763 = (0);
var i__701764 = (0);
while(true){
if((i__701764 < count__701763)){
var item = cljs.core._nth.call(null,chunk__701762,i__701764);
var i_701772 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_701773 = ((function (seq__701761,chunk__701762,count__701763,i__701764,i_701772,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_701772))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_701772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_701772], null));
} else {
return state;
}
});})(seq__701761,chunk__701762,count__701763,i__701764,i_701772,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__701761,chunk__701762,count__701763,i__701764,i_701772,place_marker_701773,item){
return (function (s){
return cljs.core.update.call(null,place_marker_701773.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_701772));
});})(seq__701761,chunk__701762,count__701763,i__701764,i_701772,place_marker_701773,item))
);

var G__701786 = seq__701761;
var G__701787 = chunk__701762;
var G__701788 = count__701763;
var G__701789 = (i__701764 + (1));
seq__701761 = G__701786;
chunk__701762 = G__701787;
count__701763 = G__701788;
i__701764 = G__701789;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__701761);
if(temp__6753__auto__){
var seq__701761__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__701761__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__701761__$1);
var G__701794 = cljs.core.chunk_rest.call(null,seq__701761__$1);
var G__701795 = c__28561__auto__;
var G__701796 = cljs.core.count.call(null,c__28561__auto__);
var G__701797 = (0);
seq__701761 = G__701794;
chunk__701762 = G__701795;
count__701763 = G__701796;
i__701764 = G__701797;
continue;
} else {
var item = cljs.core.first.call(null,seq__701761__$1);
var i_701801 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_701802 = ((function (seq__701761,chunk__701762,count__701763,i__701764,i_701801,item,seq__701761__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_701801))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_701801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_701801], null));
} else {
return state;
}
});})(seq__701761,chunk__701762,count__701763,i__701764,i_701801,item,seq__701761__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__701761,chunk__701762,count__701763,i__701764,i_701801,place_marker_701802,item,seq__701761__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_701802.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_701801));
});})(seq__701761,chunk__701762,count__701763,i__701764,i_701801,place_marker_701802,item,seq__701761__$1,temp__6753__auto__))
);

var G__701820 = cljs.core.next.call(null,seq__701761__$1);
var G__701821 = null;
var G__701822 = (0);
var G__701823 = (0);
seq__701761 = G__701820;
chunk__701762 = G__701821;
count__701763 = G__701822;
i__701764 = G__701823;
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
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__27638__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core._EQ_.call(null,remote_name,untangled.client.impl.data_fetch.data_remote.call(null,item));
} else {
return and__27638__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
var items_to_load = cljs.core.filter.call(null,is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = (cljs.core.seq.call(null,items_to_load)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),remaining_items);

var iter__28512__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__701835(s__701836){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__701836__$1 = s__701836;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__701836__$1);
if(temp__6753__auto__){
var s__701836__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__701836__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__701836__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__701838 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__701837 = (0);
while(true){
if((i__701837 < size__28511__auto__)){
var item = cljs.core._nth.call(null,c__28510__auto__,i__701837);
cljs.core.chunk_append.call(null,b__701838,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__701865 = (i__701837 + (1));
i__701837 = G__701865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701838),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__701835.call(null,cljs.core.chunk_rest.call(null,s__701836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701838),null);
}
} else {
var item = cljs.core.first.call(null,s__701836__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__701835.call(null,cljs.core.rest.call(null,s__701836__$2)));
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
return iter__28512__auto__.call(null,items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args701870 = [];
var len__28871__auto___701875 = arguments.length;
var i__28872__auto___701877 = (0);
while(true){
if((i__28872__auto___701877 < len__28871__auto___701875)){
args701870.push((arguments[i__28872__auto___701877]));

var G__701879 = (i__28872__auto___701877 + (1));
i__28872__auto___701877 = G__701879;
continue;
} else {
}
break;
}

var G__701872 = args701870.length;
switch (G__701872) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701870.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__701883 = null;
var G__701883__0 = (function (){
return rf.call(null);
});
var G__701883__1 = (function (result){
return rf.call(null,result);
});
var G__701883__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__701883 = function(result,input){
switch(arguments.length){
case 0:
return G__701883__0.call(this);
case 1:
return G__701883__1.call(this,result);
case 2:
return G__701883__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__701883.cljs$core$IFn$_invoke$arity$0 = G__701883__0;
G__701883.cljs$core$IFn$_invoke$arity$1 = G__701883__1;
G__701883.cljs$core$IFn$_invoke$arity$2 = G__701883__2;
return G__701883;
})()
;})(keys_seen))
});
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,keys_fn),coll);
});

untangled.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.join_key_or_nil = (function untangled$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var join_key_or_ident = om.util.join_key.call(null,expr);
if(om.util.ident_QMARK_.call(null,join_key_or_ident)){
return cljs.core.first.call(null,join_key_or_ident);
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
var items_to_load_now = cljs.core.set.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,(function (item){
return cljs.core.map.call(null,untangled.client.impl.data_fetch.join_key_or_nil,untangled.client.impl.data_fetch.data_query.call(null,item));
}),items_ready_to_load));
var items_to_defer = cljs.core.vec.call(null,cljs.core.remove.call(null,items_to_load_now,items_ready_to_load));
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
var state = om.next.app_state.call(null,reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.call(null,remote,untangled.client.impl.data_fetch.data_remote.call(null,item));
});})(state))
;
var all_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var items_ready_to_load = cljs.core.filter.call(null,is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
var vec__701895 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__701895,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__701895,(1),null);
var remaining_items = cljs.core.concat.call(null,items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.seq.call(null,items_to_load_now)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_.call(null,items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load_now);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),remaining_items);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args701906 = [];
var len__28871__auto___701919 = arguments.length;
var i__28872__auto___701921 = (0);
while(true){
if((i__28872__auto___701921 < len__28871__auto___701919)){
args701906.push((arguments[i__28872__auto___701921]));

var G__701923 = (i__28872__auto___701921 + (1));
i__28872__auto___701921 = G__701923;
continue;
} else {
}
break;
}

var G__701909 = args701906.length;
switch (G__701909) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701906.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("INVALID DATA STATE TYPE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__701938,elision_set){
var map__701942 = p__701938;
var map__701942__$1 = ((((!((map__701942 == null)))?((((map__701942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__701942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__701942):map__701942);
var ast = map__701942__$1;
var key = cljs.core.get.call(null,map__701942__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__701942__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__701942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__701942,map__701942__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__701942,map__701942__$1,ast,key,union_key,children){
return (function (p1__701937_SHARP_){
return untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__701937_SHARP_,elision_set);
});})(union_elision_QMARK_,map__701942,map__701942__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__701942,map__701942__$1,ast,key,union_key,children))
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
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error: You attempted to add parameters for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to top-level key(s) of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__701956_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__6751__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__6751__auto__)){
var new_params = temp__6751__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__701956_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__701965){
var map__701975 = p__701965;
var map__701975__$1 = ((((!((map__701975 == null)))?((((map__701975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__701975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__701975):map__701975);
var target = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__701975__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__27650__auto__ = field;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("You must supply a query or a field/ident pair"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__27650__auto__ = cljs.core.not.call(null,field);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var and__27638__auto__ = field;
if(cljs.core.truth_(and__27638__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__27638__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Field requires ident"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__701978 = old_ast;
var G__701978__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__701978,without):G__701978);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__701978__$1,params);
} else {
return G__701978__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Component fetch query does not match supplied field."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555),new cljs.core.Keyword("untangled.client.impl.data-fetch","remote","untangled.client.impl.data-fetch/remote",2143699060),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,marker,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,post_mutation_params,remote,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__701996){
var map__702001 = p__701996;
var map__702001__$1 = ((((!((map__702001 == null)))?((((map__702001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702001):map__702001);
var config = map__702001__$1;
var state = cljs.core.get.call(null,map__702001__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),untangled.client.impl.data_fetch.ready_state.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config)));
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_target = (function untangled$client$impl$data_fetch$data_target(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
untangled.client.impl.data_fetch.data_marker_QMARK_ = (function untangled$client$impl$data_fetch$data_marker_QMARK_(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
untangled.client.impl.data_fetch.data_remote = (function untangled$client$impl$data_fetch$data_remote(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","remote","untangled.client.impl.data-fetch/remote",2143699060).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
var target = untangled.client.impl.data_fetch.data_target.call(null,state);
if(cljs.core.truth_((function (){var and__27638__auto__ = cljs.core.vector_QMARK_.call(null,target);
if(and__27638__auto__){
return cljs.core.not_empty.call(null,target);
} else {
return and__27638__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state))) && ((untangled.client.impl.data_fetch.data_field.call(null,state) instanceof cljs.core.Keyword))){
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);

}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args702066 = [];
var len__28871__auto___702079 = arguments.length;
var i__28872__auto___702080 = (0);
while(true){
if((i__28872__auto___702080 < len__28871__auto___702079)){
args702066.push((arguments[i__28872__auto___702080]));

var G__702081 = (i__28872__auto___702080 + (1));
i__28872__auto___702080 = G__702081;
continue;
} else {
}
break;
}

var G__702069 = args702066.length;
switch (G__702069) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702066.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args702070 = [];
var len__28871__auto___702083 = arguments.length;
var i__28872__auto___702084 = (0);
while(true){
if((i__28872__auto___702084 < len__28871__auto___702083)){
args702070.push((arguments[i__28872__auto___702084]));

var G__702085 = (i__28872__auto___702084 + (1));
i__28872__auto___702084 = G__702085;
continue;
} else {
}
break;
}

var G__702072 = args702070.length;
switch (G__702072) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702070.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args702073 = [];
var len__28871__auto___702099 = arguments.length;
var i__28872__auto___702100 = (0);
while(true){
if((i__28872__auto___702100 < len__28871__auto___702099)){
args702073.push((arguments[i__28872__auto___702100]));

var G__702102 = (i__28872__auto___702100 + (1));
i__28872__auto___702100 = G__702102;
continue;
} else {
}
break;
}

var G__702075 = args702073.length;
switch (G__702075) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702073.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
untangled.client.impl.data_fetch.relocate_targeted_results = (function untangled$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
var seq__702123 = cljs.core.seq.call(null,items);
var chunk__702124 = null;
var count__702125 = (0);
var i__702126 = (0);
while(true){
if((i__702126 < count__702125)){
var item = cljs.core._nth.call(null,chunk__702124,i__702126);
var default_target_702129 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_702130 = cljs.core.conj.call(null,(function (){var or__27650__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_702131 = (function (){var or__27650__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__702132 = (function (){var and__27638__auto__ = cljs.core.not_empty.call(null,explicit_target_702131);
if(cljs.core.truth_(and__27638__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_702131,field_target_702130)) && (cljs.core.not_EQ_.call(null,explicit_target_702131,default_target_702129));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__702132)){
var value_702135 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_702129);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__702123,chunk__702124,count__702125,i__702126,value_702135,default_target_702129,field_target_702130,explicit_target_702131,relocate_QMARK__702132,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_702131,value_702135);
});})(seq__702123,chunk__702124,count__702125,i__702126,value_702135,default_target_702129,field_target_702130,explicit_target_702131,relocate_QMARK__702132,item))
);
} else {
}

var G__702137 = seq__702123;
var G__702138 = chunk__702124;
var G__702139 = count__702125;
var G__702140 = (i__702126 + (1));
seq__702123 = G__702137;
chunk__702124 = G__702138;
count__702125 = G__702139;
i__702126 = G__702140;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702123);
if(temp__6753__auto__){
var seq__702123__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702123__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702123__$1);
var G__702148 = cljs.core.chunk_rest.call(null,seq__702123__$1);
var G__702149 = c__28561__auto__;
var G__702150 = cljs.core.count.call(null,c__28561__auto__);
var G__702151 = (0);
seq__702123 = G__702148;
chunk__702124 = G__702149;
count__702125 = G__702150;
i__702126 = G__702151;
continue;
} else {
var item = cljs.core.first.call(null,seq__702123__$1);
var default_target_702154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_702155 = cljs.core.conj.call(null,(function (){var or__27650__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_702156 = (function (){var or__27650__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__702157 = (function (){var and__27638__auto__ = cljs.core.not_empty.call(null,explicit_target_702156);
if(cljs.core.truth_(and__27638__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_702156,field_target_702155)) && (cljs.core.not_EQ_.call(null,explicit_target_702156,default_target_702154));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__702157)){
var value_702159 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_702154);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__702123,chunk__702124,count__702125,i__702126,value_702159,default_target_702154,field_target_702155,explicit_target_702156,relocate_QMARK__702157,item,seq__702123__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_702156,value_702159);
});})(seq__702123,chunk__702124,count__702125,i__702126,value_702159,default_target_702154,field_target_702155,explicit_target_702156,relocate_QMARK__702157,item,seq__702123__$1,temp__6753__auto__))
);
} else {
}

var G__702160 = cljs.core.next.call(null,seq__702123__$1);
var G__702161 = null;
var G__702162 = (0);
var G__702163 = (0);
seq__702123 = G__702160;
chunk__702124 = G__702161;
count__702125 = G__702162;
i__702126 = G__702163;
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
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__702176 = cljs.core.seq.call(null,loading_items);
var chunk__702177 = null;
var count__702178 = (0);
var i__702179 = (0);
while(true){
if((i__702179 < count__702178)){
var item = cljs.core._nth.call(null,chunk__702177,i__702179);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__702176,chunk__702177,count__702178,i__702179,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__702180 = s;
var G__702180__$1 = cljs.core.update.call(null,G__702180,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__702180__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__702180__$1;
}
});})(seq__702176,chunk__702177,count__702178,i__702179,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__702188 = seq__702176;
var G__702189 = chunk__702177;
var G__702190 = count__702178;
var G__702191 = (i__702179 + (1));
seq__702176 = G__702188;
chunk__702177 = G__702189;
count__702178 = G__702190;
i__702179 = G__702191;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702176);
if(temp__6753__auto__){
var seq__702176__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702176__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702176__$1);
var G__702192 = cljs.core.chunk_rest.call(null,seq__702176__$1);
var G__702193 = c__28561__auto__;
var G__702194 = cljs.core.count.call(null,c__28561__auto__);
var G__702195 = (0);
seq__702176 = G__702192;
chunk__702177 = G__702193;
count__702178 = G__702194;
i__702179 = G__702195;
continue;
} else {
var item = cljs.core.first.call(null,seq__702176__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__702176,chunk__702177,count__702178,i__702179,item,seq__702176__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__702181 = s;
var G__702181__$1 = cljs.core.update.call(null,G__702181,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__702181__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__702181__$1;
}
});})(seq__702176,chunk__702177,count__702178,i__702179,item,seq__702176__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__702196 = cljs.core.next.call(null,seq__702176__$1);
var G__702197 = null;
var G__702198 = (0);
var G__702199 = (0);
seq__702176 = G__702196;
chunk__702177 = G__702197;
count__702178 = G__702198;
i__702179 = G__702199;
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
var seq__702182 = cljs.core.seq.call(null,loading_items);
var chunk__702183 = null;
var count__702184 = (0);
var i__702185 = (0);
while(true){
if((i__702185 < count__702184)){
var item = cljs.core._nth.call(null,chunk__702183,i__702185);
var temp__6753__auto___702200 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___702200)){
var mutation_symbol_702201 = temp__6753__auto___702200;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_702202 = (function (){var or__27650__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__702186_702203 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_702201,params_702202);
var G__702186_702204__$1 = (((G__702186_702203 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__702186_702203));
if((G__702186_702204__$1 == null)){
} else {
cljs.core.apply.call(null,G__702186_702204__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__702207 = seq__702182;
var G__702208 = chunk__702183;
var G__702209 = count__702184;
var G__702210 = (i__702185 + (1));
seq__702182 = G__702207;
chunk__702183 = G__702208;
count__702184 = G__702209;
i__702185 = G__702210;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702182);
if(temp__6753__auto__){
var seq__702182__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702182__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702182__$1);
var G__702211 = cljs.core.chunk_rest.call(null,seq__702182__$1);
var G__702212 = c__28561__auto__;
var G__702213 = cljs.core.count.call(null,c__28561__auto__);
var G__702214 = (0);
seq__702182 = G__702211;
chunk__702183 = G__702212;
count__702184 = G__702213;
i__702185 = G__702214;
continue;
} else {
var item = cljs.core.first.call(null,seq__702182__$1);
var temp__6753__auto___702217__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___702217__$1)){
var mutation_symbol_702218 = temp__6753__auto___702217__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_702219 = (function (){var or__27650__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__702187_702220 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_702218,params_702219);
var G__702187_702221__$1 = (((G__702187_702220 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__702187_702220));
if((G__702187_702221__$1 == null)){
} else {
cljs.core.apply.call(null,G__702187_702221__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__702222 = cljs.core.next.call(null,seq__702182__$1);
var G__702223 = null;
var G__702224 = (0);
var G__702225 = (0);
seq__702182 = G__702222;
chunk__702183 = G__702223;
count__702184 = G__702224;
i__702185 = G__702225;
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
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

untangled.client.impl.data_fetch.relocate_targeted_results.call(null,app_state,loading_items);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
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
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__702242 = cljs.core.seq.call(null,loading_items);
var chunk__702243 = null;
var count__702244 = (0);
var i__702245 = (0);
while(true){
if((i__702245 < count__702244)){
var item = cljs.core._nth.call(null,chunk__702243,i__702245);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__702242,chunk__702243,count__702244,i__702245,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__702246 = s;
var G__702246__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__702246,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__702246);
return cljs.core.update.call(null,G__702246__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__702242,chunk__702243,count__702244,i__702245,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__702261 = seq__702242;
var G__702262 = chunk__702243;
var G__702263 = count__702244;
var G__702264 = (i__702245 + (1));
seq__702242 = G__702261;
chunk__702243 = G__702262;
count__702244 = G__702263;
i__702245 = G__702264;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702242);
if(temp__6753__auto__){
var seq__702242__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702242__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702242__$1);
var G__702265 = cljs.core.chunk_rest.call(null,seq__702242__$1);
var G__702266 = c__28561__auto__;
var G__702267 = cljs.core.count.call(null,c__28561__auto__);
var G__702268 = (0);
seq__702242 = G__702265;
chunk__702243 = G__702266;
count__702244 = G__702267;
i__702245 = G__702268;
continue;
} else {
var item = cljs.core.first.call(null,seq__702242__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__702242,chunk__702243,count__702244,i__702245,item,seq__702242__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__702247 = s;
var G__702247__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__702247,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__702247);
return cljs.core.update.call(null,G__702247__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__702242,chunk__702243,count__702244,i__702245,item,seq__702242__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__702269 = cljs.core.next.call(null,seq__702242__$1);
var G__702270 = null;
var G__702271 = (0);
var G__702272 = (0);
seq__702242 = G__702269;
chunk__702243 = G__702270;
count__702244 = G__702271;
i__702245 = G__702272;
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
var seq__702248 = cljs.core.seq.call(null,loading_items);
var chunk__702249 = null;
var count__702250 = (0);
var i__702251 = (0);
while(true){
if((i__702251 < count__702250)){
var item = cljs.core._nth.call(null,chunk__702249,i__702251);
var temp__6753__auto___702273 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___702273)){
var fallback_symbol_702274 = temp__6753__auto___702273;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__702252_702275 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_702274,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__702252_702276__$1 = (((G__702252_702275 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__702252_702275));
if((G__702252_702276__$1 == null)){
} else {
cljs.core.apply.call(null,G__702252_702276__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__702277 = seq__702248;
var G__702278 = chunk__702249;
var G__702279 = count__702250;
var G__702280 = (i__702251 + (1));
seq__702248 = G__702277;
chunk__702249 = G__702278;
count__702250 = G__702279;
i__702251 = G__702280;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702248);
if(temp__6753__auto__){
var seq__702248__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702248__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702248__$1);
var G__702282 = cljs.core.chunk_rest.call(null,seq__702248__$1);
var G__702283 = c__28561__auto__;
var G__702284 = cljs.core.count.call(null,c__28561__auto__);
var G__702285 = (0);
seq__702248 = G__702282;
chunk__702249 = G__702283;
count__702250 = G__702284;
i__702251 = G__702285;
continue;
} else {
var item = cljs.core.first.call(null,seq__702248__$1);
var temp__6753__auto___702287__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___702287__$1)){
var fallback_symbol_702288 = temp__6753__auto___702287__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__702253_702289 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_702288,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__702253_702290__$1 = (((G__702253_702289 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__702253_702289));
if((G__702253_702290__$1 == null)){
} else {
cljs.core.apply.call(null,G__702253_702290__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__702291 = cljs.core.next.call(null,seq__702248__$1);
var G__702292 = null;
var G__702293 = (0);
var G__702294 = (0);
seq__702248 = G__702291;
chunk__702249 = G__702292;
count__702250 = G__702293;
i__702251 = G__702294;
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
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1489703351235
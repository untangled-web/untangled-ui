// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.logging');
goog.require('om.next');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.client.impl.util');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('untangled.i18n.core');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming Om transaction, which is in turn used by the error-handling logic of the plumbing.
 */
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__46954,query){
var map__46961 = p__46954;
var map__46961__$1 = ((((!((map__46961 == null)))?((((map__46961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46961):map__46961);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46961__$1,cljs.core.cst$kw$reconciler);
return ((function (map__46961,map__46961__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.app_state(reconciler),cljs.core.assoc,cljs.core.cst$kw$untangled_SLASH_server_DASH_error,error);

var temp__6751__auto__ = untangled.client.impl.om_plumbing.fallback_query(query,error);
if(cljs.core.truth_(temp__6751__auto__)){
var q = temp__6751__auto__;
untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([untangled.client.logging.value_message("Transaction failed. Running fallback.",q)], 0));

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,q);
} else {
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Fallback triggered, but no fallbacks were defined."], 0));
}
});
;})(map__46961,map__46961__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_46999){
var state_val_47000 = (state_46999[(1)]);
if((state_val_47000 === (1))){
var state_46999__$1 = state_46999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46999__$1,(2),q,v);
} else {
if((state_val_47000 === (2))){
var inst_46997 = (state_46999[(2)]);
var state_46999__$1 = state_46999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46999__$1,inst_46997);
} else {
return null;
}
}
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__40507__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__40507__auto____0 = (function (){
var statearr_47005 = [null,null,null,null,null,null,null];
(statearr_47005[(0)] = untangled$client$impl$application$enqueue_$_state_machine__40507__auto__);

(statearr_47005[(1)] = (1));

return statearr_47005;
});
var untangled$client$impl$application$enqueue_$_state_machine__40507__auto____1 = (function (state_46999){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_46999);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e47006){if((e47006 instanceof Object)){
var ex__40510__auto__ = e47006;
var statearr_47007_47015 = state_46999;
(statearr_47007_47015[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46999);

return cljs.core.cst$kw$recur;
} else {
throw e47006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__47016 = state_46999;
state_46999 = G__47016;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__40507__auto__ = function(state_46999){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__40507__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__40507__auto____1.call(this,state_46999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__40507__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__40507__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_47008 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_47008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_47008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_done,on_error,on_load){
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.untangled$client$impl$network$ProgressiveTransfer$)))?true:false):false)){
return untangled.client.impl.network.updating_send(net,untangled.client.impl.om_plumbing.strip_ui(tx),on_done,on_error,on_load);
} else {
return untangled.client.impl.network.send(net,untangled.client.impl.om_plumbing.strip_ui(tx),on_done,on_error);
}
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__47026,remote_tx_map,cb){
var map__47033 = p__47026;
var map__47033__$1 = ((((!((map__47033 == null)))?((((map__47033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47033):map__47033);
var app = map__47033__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47033__$1,cljs.core.cst$kw$send_DASH_queues);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47033__$1,cljs.core.cst$kw$networking);
var seq__47037 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__47038 = null;
var count__47039 = (0);
var i__47040 = (0);
while(true){
if((i__47040 < count__47039)){
var remote = chunk__47038.cljs$core$IIndexed$_nth$arity$2(null,i__47040);
var queue_47052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_47053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_47054 = untangled.client.impl.application.fallback_handler(app,full_remote_transaction_47053);
var desired_remote_mutations_47055 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_47053);
var has_mutations_QMARK__47056 = (cljs.core.count(desired_remote_mutations_47055) > (0));
var payload_47057 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,desired_remote_mutations_47055,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__47037,chunk__47038,count__47039,i__47040,queue_47052,full_remote_transaction_47053,fallback_47054,desired_remote_mutations_47055,has_mutations_QMARK__47056,remote,map__47033,map__47033__$1,app,send_queues,networking){
return (function (p1__47025_SHARP_){
return (fallback_47054.cljs$core$IFn$_invoke$arity$1 ? fallback_47054.cljs$core$IFn$_invoke$arity$1(p1__47025_SHARP_) : fallback_47054.call(null,p1__47025_SHARP_));
});})(seq__47037,chunk__47038,count__47039,i__47040,queue_47052,full_remote_transaction_47053,fallback_47054,desired_remote_mutations_47055,has_mutations_QMARK__47056,remote,map__47033,map__47033__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__47056){
untangled.client.impl.application.enqueue(queue_47052,payload_47057);
} else {
}

var G__47070 = seq__47037;
var G__47071 = chunk__47038;
var G__47072 = count__47039;
var G__47073 = (i__47040 + (1));
seq__47037 = G__47070;
chunk__47038 = G__47071;
count__47039 = G__47072;
i__47040 = G__47073;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47037);
if(temp__6753__auto__){
var seq__47037__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47037__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47037__$1);
var G__47079 = cljs.core.chunk_rest(seq__47037__$1);
var G__47080 = c__8413__auto__;
var G__47081 = cljs.core.count(c__8413__auto__);
var G__47082 = (0);
seq__47037 = G__47079;
chunk__47038 = G__47080;
count__47039 = G__47081;
i__47040 = G__47082;
continue;
} else {
var remote = cljs.core.first(seq__47037__$1);
var queue_47083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_47084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_47085 = untangled.client.impl.application.fallback_handler(app,full_remote_transaction_47084);
var desired_remote_mutations_47086 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_47084);
var has_mutations_QMARK__47087 = (cljs.core.count(desired_remote_mutations_47086) > (0));
var payload_47088 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,desired_remote_mutations_47086,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__47037,chunk__47038,count__47039,i__47040,queue_47083,full_remote_transaction_47084,fallback_47085,desired_remote_mutations_47086,has_mutations_QMARK__47087,remote,seq__47037__$1,temp__6753__auto__,map__47033,map__47033__$1,app,send_queues,networking){
return (function (p1__47025_SHARP_){
return (fallback_47085.cljs$core$IFn$_invoke$arity$1 ? fallback_47085.cljs$core$IFn$_invoke$arity$1(p1__47025_SHARP_) : fallback_47085.call(null,p1__47025_SHARP_));
});})(seq__47037,chunk__47038,count__47039,i__47040,queue_47083,full_remote_transaction_47084,fallback_47085,desired_remote_mutations_47086,has_mutations_QMARK__47087,remote,seq__47037__$1,temp__6753__auto__,map__47033,map__47033__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__47087){
untangled.client.impl.application.enqueue(queue_47083,payload_47088);
} else {
}

var G__47103 = cljs.core.next(seq__47037__$1);
var G__47104 = null;
var G__47105 = (0);
var G__47106 = (0);
seq__47037 = G__47103;
chunk__47038 = G__47104;
count__47039 = G__47105;
i__47040 = G__47106;
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
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__47111){
var map__47149 = p__47111;
var map__47149__$1 = ((((!((map__47149 == null)))?((((map__47149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47149):map__47149);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47149__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47149__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47149__$1,cljs.core.cst$kw$networking);
var seq__47153 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__47154 = null;
var count__47155 = (0);
var i__47156 = (0);
while(true){
if((i__47156 < count__47155)){
var remote = chunk__47154.cljs$core$IIndexed$_nth$arity$2(null,i__47156);
var queue_47196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_47198 = untangled.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__47158_47200 = cljs.core.seq(parallel_payload_47198);
var chunk__47159_47201 = null;
var count__47160_47202 = (0);
var i__47161_47203 = (0);
while(true){
if((i__47161_47203 < count__47160_47202)){
var map__47162_47206 = chunk__47159_47201.cljs$core$IIndexed$_nth$arity$2(null,i__47161_47203);
var map__47162_47207__$1 = ((((!((map__47162_47206 == null)))?((((map__47162_47206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47162_47206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47162_47206):map__47162_47206);
var query_47208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162_47207__$1,cljs.core.cst$kw$query);
var on_load_47209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162_47207__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_47210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162_47207__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_47211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162_47207__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__47216 = ((function (seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,map__47162_47206,map__47162_47207__$1,query_47208,on_load_47209,on_error_47210,load_descriptors_47211,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47109_SHARP_){
return (on_load_47209.cljs$core$IFn$_invoke$arity$2 ? on_load_47209.cljs$core$IFn$_invoke$arity$2(p1__47109_SHARP_,load_descriptors_47211) : on_load_47209.call(null,p1__47109_SHARP_,load_descriptors_47211));
});})(seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,map__47162_47206,map__47162_47207__$1,query_47208,on_load_47209,on_error_47210,load_descriptors_47211,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__47217 = ((function (seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47216,map__47162_47206,map__47162_47207__$1,query_47208,on_load_47209,on_error_47210,load_descriptors_47211,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47110_SHARP_){
return (on_error_47210.cljs$core$IFn$_invoke$arity$2 ? on_error_47210.cljs$core$IFn$_invoke$arity$2(p1__47110_SHARP_,load_descriptors_47211) : on_error_47210.call(null,p1__47110_SHARP_,load_descriptors_47211));
});})(seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47216,map__47162_47206,map__47162_47207__$1,query_47208,on_load_47209,on_error_47210,load_descriptors_47211,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_47197,query_47208,on_load_SINGLEQUOTE__47216,on_error_SINGLEQUOTE__47217,null);

var G__47218 = seq__47158_47200;
var G__47219 = chunk__47159_47201;
var G__47220 = count__47160_47202;
var G__47221 = (i__47161_47203 + (1));
seq__47158_47200 = G__47218;
chunk__47159_47201 = G__47219;
count__47160_47202 = G__47220;
i__47161_47203 = G__47221;
continue;
} else {
var temp__6753__auto___47224 = cljs.core.seq(seq__47158_47200);
if(temp__6753__auto___47224){
var seq__47158_47225__$1 = temp__6753__auto___47224;
if(cljs.core.chunked_seq_QMARK_(seq__47158_47225__$1)){
var c__8413__auto___47226 = cljs.core.chunk_first(seq__47158_47225__$1);
var G__47227 = cljs.core.chunk_rest(seq__47158_47225__$1);
var G__47228 = c__8413__auto___47226;
var G__47229 = cljs.core.count(c__8413__auto___47226);
var G__47230 = (0);
seq__47158_47200 = G__47227;
chunk__47159_47201 = G__47228;
count__47160_47202 = G__47229;
i__47161_47203 = G__47230;
continue;
} else {
var map__47164_47231 = cljs.core.first(seq__47158_47225__$1);
var map__47164_47232__$1 = ((((!((map__47164_47231 == null)))?((((map__47164_47231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47164_47231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47164_47231):map__47164_47231);
var query_47233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47164_47232__$1,cljs.core.cst$kw$query);
var on_load_47234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47164_47232__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_47235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47164_47232__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_47236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47164_47232__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__47240 = ((function (seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,map__47164_47231,map__47164_47232__$1,query_47233,on_load_47234,on_error_47235,load_descriptors_47236,seq__47158_47225__$1,temp__6753__auto___47224,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47109_SHARP_){
return (on_load_47234.cljs$core$IFn$_invoke$arity$2 ? on_load_47234.cljs$core$IFn$_invoke$arity$2(p1__47109_SHARP_,load_descriptors_47236) : on_load_47234.call(null,p1__47109_SHARP_,load_descriptors_47236));
});})(seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,map__47164_47231,map__47164_47232__$1,query_47233,on_load_47234,on_error_47235,load_descriptors_47236,seq__47158_47225__$1,temp__6753__auto___47224,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__47241 = ((function (seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47240,map__47164_47231,map__47164_47232__$1,query_47233,on_load_47234,on_error_47235,load_descriptors_47236,seq__47158_47225__$1,temp__6753__auto___47224,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47110_SHARP_){
return (on_error_47235.cljs$core$IFn$_invoke$arity$2 ? on_error_47235.cljs$core$IFn$_invoke$arity$2(p1__47110_SHARP_,load_descriptors_47236) : on_error_47235.call(null,p1__47110_SHARP_,load_descriptors_47236));
});})(seq__47158_47200,chunk__47159_47201,count__47160_47202,i__47161_47203,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47240,map__47164_47231,map__47164_47232__$1,query_47233,on_load_47234,on_error_47235,load_descriptors_47236,seq__47158_47225__$1,temp__6753__auto___47224,queue_47196,network_47197,parallel_payload_47198,remote,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_47197,query_47233,on_load_SINGLEQUOTE__47240,on_error_SINGLEQUOTE__47241,null);

var G__47252 = cljs.core.next(seq__47158_47225__$1);
var G__47253 = null;
var G__47254 = (0);
var G__47255 = (0);
seq__47158_47200 = G__47252;
chunk__47159_47201 = G__47253;
count__47160_47202 = G__47254;
i__47161_47203 = G__47255;
continue;
}
} else {
}
}
break;
}

var fetch_payload_47274 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_47274)){
untangled.client.impl.application.enqueue(queue_47196,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_47274,cljs.core.cst$kw$networking,network_47197));

var G__47275 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_47274 = G__47275;
continue;
} else {
}
break;
}

var G__47276 = seq__47153;
var G__47277 = chunk__47154;
var G__47278 = count__47155;
var G__47279 = (i__47156 + (1));
seq__47153 = G__47276;
chunk__47154 = G__47277;
count__47155 = G__47278;
i__47156 = G__47279;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47153);
if(temp__6753__auto__){
var seq__47153__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47153__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47153__$1);
var G__47284 = cljs.core.chunk_rest(seq__47153__$1);
var G__47285 = c__8413__auto__;
var G__47286 = cljs.core.count(c__8413__auto__);
var G__47287 = (0);
seq__47153 = G__47284;
chunk__47154 = G__47285;
count__47155 = G__47286;
i__47156 = G__47287;
continue;
} else {
var remote = cljs.core.first(seq__47153__$1);
var queue_47288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_47290 = untangled.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__47168_47291 = cljs.core.seq(parallel_payload_47290);
var chunk__47169_47292 = null;
var count__47170_47293 = (0);
var i__47171_47294 = (0);
while(true){
if((i__47171_47294 < count__47170_47293)){
var map__47172_47297 = chunk__47169_47292.cljs$core$IIndexed$_nth$arity$2(null,i__47171_47294);
var map__47172_47298__$1 = ((((!((map__47172_47297 == null)))?((((map__47172_47297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47172_47297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47172_47297):map__47172_47297);
var query_47299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172_47298__$1,cljs.core.cst$kw$query);
var on_load_47300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172_47298__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_47301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172_47298__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_47302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172_47298__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__47310 = ((function (seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,map__47172_47297,map__47172_47298__$1,query_47299,on_load_47300,on_error_47301,load_descriptors_47302,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47109_SHARP_){
return (on_load_47300.cljs$core$IFn$_invoke$arity$2 ? on_load_47300.cljs$core$IFn$_invoke$arity$2(p1__47109_SHARP_,load_descriptors_47302) : on_load_47300.call(null,p1__47109_SHARP_,load_descriptors_47302));
});})(seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,map__47172_47297,map__47172_47298__$1,query_47299,on_load_47300,on_error_47301,load_descriptors_47302,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__47311 = ((function (seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47310,map__47172_47297,map__47172_47298__$1,query_47299,on_load_47300,on_error_47301,load_descriptors_47302,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47110_SHARP_){
return (on_error_47301.cljs$core$IFn$_invoke$arity$2 ? on_error_47301.cljs$core$IFn$_invoke$arity$2(p1__47110_SHARP_,load_descriptors_47302) : on_error_47301.call(null,p1__47110_SHARP_,load_descriptors_47302));
});})(seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47310,map__47172_47297,map__47172_47298__$1,query_47299,on_load_47300,on_error_47301,load_descriptors_47302,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_47289,query_47299,on_load_SINGLEQUOTE__47310,on_error_SINGLEQUOTE__47311,null);

var G__47322 = seq__47168_47291;
var G__47323 = chunk__47169_47292;
var G__47324 = count__47170_47293;
var G__47325 = (i__47171_47294 + (1));
seq__47168_47291 = G__47322;
chunk__47169_47292 = G__47323;
count__47170_47293 = G__47324;
i__47171_47294 = G__47325;
continue;
} else {
var temp__6753__auto___47326__$1 = cljs.core.seq(seq__47168_47291);
if(temp__6753__auto___47326__$1){
var seq__47168_47327__$1 = temp__6753__auto___47326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47168_47327__$1)){
var c__8413__auto___47328 = cljs.core.chunk_first(seq__47168_47327__$1);
var G__47329 = cljs.core.chunk_rest(seq__47168_47327__$1);
var G__47330 = c__8413__auto___47328;
var G__47331 = cljs.core.count(c__8413__auto___47328);
var G__47332 = (0);
seq__47168_47291 = G__47329;
chunk__47169_47292 = G__47330;
count__47170_47293 = G__47331;
i__47171_47294 = G__47332;
continue;
} else {
var map__47180_47333 = cljs.core.first(seq__47168_47327__$1);
var map__47180_47334__$1 = ((((!((map__47180_47333 == null)))?((((map__47180_47333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47180_47333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47180_47333):map__47180_47333);
var query_47335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47180_47334__$1,cljs.core.cst$kw$query);
var on_load_47336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47180_47334__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_47337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47180_47334__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_47338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47180_47334__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__47357 = ((function (seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,map__47180_47333,map__47180_47334__$1,query_47335,on_load_47336,on_error_47337,load_descriptors_47338,seq__47168_47327__$1,temp__6753__auto___47326__$1,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47109_SHARP_){
return (on_load_47336.cljs$core$IFn$_invoke$arity$2 ? on_load_47336.cljs$core$IFn$_invoke$arity$2(p1__47109_SHARP_,load_descriptors_47338) : on_load_47336.call(null,p1__47109_SHARP_,load_descriptors_47338));
});})(seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,map__47180_47333,map__47180_47334__$1,query_47335,on_load_47336,on_error_47337,load_descriptors_47338,seq__47168_47327__$1,temp__6753__auto___47326__$1,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__47358 = ((function (seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47357,map__47180_47333,map__47180_47334__$1,query_47335,on_load_47336,on_error_47337,load_descriptors_47338,seq__47168_47327__$1,temp__6753__auto___47326__$1,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking){
return (function (p1__47110_SHARP_){
return (on_error_47337.cljs$core$IFn$_invoke$arity$2 ? on_error_47337.cljs$core$IFn$_invoke$arity$2(p1__47110_SHARP_,load_descriptors_47338) : on_error_47337.call(null,p1__47110_SHARP_,load_descriptors_47338));
});})(seq__47168_47291,chunk__47169_47292,count__47170_47293,i__47171_47294,seq__47153,chunk__47154,count__47155,i__47156,on_load_SINGLEQUOTE__47357,map__47180_47333,map__47180_47334__$1,query_47335,on_load_47336,on_error_47337,load_descriptors_47338,seq__47168_47327__$1,temp__6753__auto___47326__$1,queue_47288,network_47289,parallel_payload_47290,remote,seq__47153__$1,temp__6753__auto__,map__47149,map__47149__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_47289,query_47335,on_load_SINGLEQUOTE__47357,on_error_SINGLEQUOTE__47358,null);

var G__47365 = cljs.core.next(seq__47168_47327__$1);
var G__47366 = null;
var G__47367 = (0);
var G__47368 = (0);
seq__47168_47291 = G__47365;
chunk__47169_47292 = G__47366;
count__47170_47293 = G__47367;
i__47171_47294 = G__47368;
continue;
}
} else {
}
}
break;
}

var fetch_payload_47371 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_47371)){
untangled.client.impl.application.enqueue(queue_47288,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_47371,cljs.core.cst$kw$networking,network_47289));

var G__47373 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_47371 = G__47373;
continue;
} else {
}
break;
}

var G__47374 = cljs.core.next(seq__47153__$1);
var G__47375 = null;
var G__47376 = (0);
var G__47377 = (0);
seq__47153 = G__47374;
chunk__47154 = G__47375;
count__47155 = G__47376;
i__47156 = G__47377;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__47379){
var map__47384 = p__47379;
var map__47384__$1 = ((((!((map__47384 == null)))?((((map__47384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47384):map__47384);
var app = map__47384__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47384__$1,cljs.core.cst$kw$send_DASH_queues);
var state = om.next.app_state(reconciler);
var all_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$untangled_SLASH_ready_DASH_to_DASH_load);
var item_remotes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set(cljs.core.keys(send_queues));
var invalid_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty(invalid_remotes))){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Use of invalid remote(s) detected! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_remotes)].join('')], 0));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app,remote_tx_map,cb){
untangled.client.impl.application.detect_errant_remotes(app);

untangled.client.impl.application.enqueue_mutations(app,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads(app);
});
/**
 * Sends a network payload. There are two kinds of payloads in Untanged. The first is
 *   for reads, which are tracked by load descriptors in the app state. These load descriptors
 *   tell the plumbing how to handle the response, and expect to only be merged in once. Mutations
 *   do not have a payload, and can technically received progress updates from the network. The built-in
 *   networking does not (currently) give progress events, but plugin networking can. It is currently not
 *   supported to give an update on a load, so this function is careful to detect that a payload is a send
 *   and turns all but the last update into a no-op. The send-complete function comes from the
 *   network sequential processing loop, and when called unblocks the network processing to allow the
 *   next request to go. Be very careful with this code, as bugs will cause applications to stop responding
 *   to remote requests.
 */
untangled.client.impl.application.send_payload = (function untangled$client$impl$application$send_payload(network,payload,send_complete){
var map__47409 = payload;
var map__47409__$1 = ((((!((map__47409 == null)))?((((map__47409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47409):map__47409);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,cljs.core.cst$kw$query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,cljs.core.cst$kw$on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,cljs.core.cst$kw$load_DASH_descriptors);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__47409,map__47409__$1,query,on_load,on_error,load_descriptors){
return (function (p1__47399_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__47399_SHARP_,load_descriptors) : on_load.call(null,p1__47399_SHARP_,load_descriptors));
});})(map__47409,map__47409__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__47409,map__47409__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__47400_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__47400_SHARP_,load_descriptors) : on_error.call(null,p1__47400_SHARP_,load_descriptors));
});})(map__47409,map__47409__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,on_error__$1);
var on_done = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(send_complete,merge_data);
return untangled.client.impl.application.real_send(network,query,on_done,on_error__$2,on_update);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__47432){
var map__47598 = p__47432;
var map__47598__$1 = ((((!((map__47598 == null)))?((((map__47598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47598):map__47598);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47598__$1,cljs.core.cst$kw$networking);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47598__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47598__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__47600 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__47601 = null;
var count__47602 = (0);
var i__47603 = (0);
while(true){
if((i__47603 < count__47602)){
var remote = chunk__47601.cljs$core$IIndexed$_nth$arity$2(null,i__47603);
var queue_47708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var response_channel_47710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_47711 = ((function (seq__47600,chunk__47601,count__47602,i__47603,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (state_47607){
var state_val_47608 = (state_47607[(1)]);
if((state_val_47608 === (1))){
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47607__$1,(2),response_channel_47710,cljs.core.cst$kw$complete);
} else {
if((state_val_47608 === (2))){
var inst_47605 = (state_47607[(2)]);
var state_47607__$1 = state_47607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47607__$1,inst_47605);
} else {
return null;
}
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0 = (function (){
var statearr_47612 = [null,null,null,null,null,null,null];
(statearr_47612[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__);

(statearr_47612[(1)] = (1));

return statearr_47612;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1 = (function (state_47607){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_47607);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e47613){if((e47613 instanceof Object)){
var ex__40510__auto__ = e47613;
var statearr_47614_47716 = state_47607;
(statearr_47614_47716[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47607);

return cljs.core.cst$kw$recur;
} else {
throw e47613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__47717 = state_47607;
state_47607 = G__47717;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = function(state_47607){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1.call(this,state_47607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
})();
var state__40692__auto__ = (function (){var statearr_47615 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_47615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_47615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
);

return c__40690__auto__;
});})(seq__47600,chunk__47601,count__47602,i__47603,queue_47708,network_47709,response_channel_47710,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
var c__40690__auto___47718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (state_47629){
var state_val_47630 = (state_47629[(1)]);
if((state_val_47630 === (1))){
var state_47629__$1 = state_47629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47629__$1,(2),queue_47708);
} else {
if((state_val_47630 === (2))){
var inst_47617 = (state_47629[(2)]);
var inst_47618 = inst_47617;
var state_47629__$1 = (function (){var statearr_47632 = state_47629;
(statearr_47632[(7)] = inst_47618);

return statearr_47632;
})();
var statearr_47635_47719 = state_47629__$1;
(statearr_47635_47719[(2)] = null);

(statearr_47635_47719[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47630 === (3))){
var inst_47618 = (state_47629[(7)]);
var inst_47620 = untangled.client.impl.application.send_payload(network_47709,inst_47618,send_complete_47711);
var state_47629__$1 = (function (){var statearr_47639 = state_47629;
(statearr_47639[(8)] = inst_47620);

return statearr_47639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47629__$1,(5),response_channel_47710);
} else {
if((state_val_47630 === (4))){
var inst_47627 = (state_47629[(2)]);
var state_47629__$1 = state_47629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47629__$1,inst_47627);
} else {
if((state_val_47630 === (5))){
var inst_47622 = (state_47629[(2)]);
var state_47629__$1 = (function (){var statearr_47644 = state_47629;
(statearr_47644[(9)] = inst_47622);

return statearr_47644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47629__$1,(6),queue_47708);
} else {
if((state_val_47630 === (6))){
var inst_47624 = (state_47629[(2)]);
var inst_47618 = inst_47624;
var state_47629__$1 = (function (){var statearr_47645 = state_47629;
(statearr_47645[(7)] = inst_47618);

return statearr_47645;
})();
var statearr_47646_47720 = state_47629__$1;
(statearr_47646_47720[(2)] = null);

(statearr_47646_47720[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0 = (function (){
var statearr_47652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47652[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__);

(statearr_47652[(1)] = (1));

return statearr_47652;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1 = (function (state_47629){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_47629);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e47653){if((e47653 instanceof Object)){
var ex__40510__auto__ = e47653;
var statearr_47654_47721 = state_47629;
(statearr_47654_47721[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47629);

return cljs.core.cst$kw$recur;
} else {
throw e47653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__47726 = state_47629;
state_47629 = G__47726;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = function(state_47629){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1.call(this,state_47629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
})();
var state__40692__auto__ = (function (){var statearr_47655 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_47655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___47718);

return statearr_47655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47718,queue_47708,network_47709,response_channel_47710,send_complete_47711,remote,map__47598,map__47598__$1,networking,send_queues,response_channels))
);


var G__47733 = seq__47600;
var G__47734 = chunk__47601;
var G__47735 = count__47602;
var G__47736 = (i__47603 + (1));
seq__47600 = G__47733;
chunk__47601 = G__47734;
count__47602 = G__47735;
i__47603 = G__47736;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47600);
if(temp__6753__auto__){
var seq__47600__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47600__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47600__$1);
var G__47741 = cljs.core.chunk_rest(seq__47600__$1);
var G__47742 = c__8413__auto__;
var G__47743 = cljs.core.count(c__8413__auto__);
var G__47744 = (0);
seq__47600 = G__47741;
chunk__47601 = G__47742;
count__47602 = G__47743;
i__47603 = G__47744;
continue;
} else {
var remote = cljs.core.first(seq__47600__$1);
var queue_47749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var response_channel_47751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_47752 = ((function (seq__47600,chunk__47601,count__47602,i__47603,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (state_47665){
var state_val_47666 = (state_47665[(1)]);
if((state_val_47666 === (1))){
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47665__$1,(2),response_channel_47751,cljs.core.cst$kw$complete);
} else {
if((state_val_47666 === (2))){
var inst_47663 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47665__$1,inst_47663);
} else {
return null;
}
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0 = (function (){
var statearr_47670 = [null,null,null,null,null,null,null];
(statearr_47670[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__);

(statearr_47670[(1)] = (1));

return statearr_47670;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1 = (function (state_47665){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_47665);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e47671){if((e47671 instanceof Object)){
var ex__40510__auto__ = e47671;
var statearr_47672_47762 = state_47665;
(statearr_47672_47762[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665);

return cljs.core.cst$kw$recur;
} else {
throw e47671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__47764 = state_47665;
state_47665 = G__47764;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = function(state_47665){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1.call(this,state_47665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
})();
var state__40692__auto__ = (function (){var statearr_47673 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_47673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_47673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto__,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
);

return c__40690__auto__;
});})(seq__47600,chunk__47601,count__47602,i__47603,queue_47749,network_47750,response_channel_47751,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
var c__40690__auto___47765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function (state_47687){
var state_val_47688 = (state_47687[(1)]);
if((state_val_47688 === (1))){
var state_47687__$1 = state_47687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47687__$1,(2),queue_47749);
} else {
if((state_val_47688 === (2))){
var inst_47675 = (state_47687[(2)]);
var inst_47676 = inst_47675;
var state_47687__$1 = (function (){var statearr_47693 = state_47687;
(statearr_47693[(7)] = inst_47676);

return statearr_47693;
})();
var statearr_47694_47778 = state_47687__$1;
(statearr_47694_47778[(2)] = null);

(statearr_47694_47778[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47688 === (3))){
var inst_47676 = (state_47687[(7)]);
var inst_47678 = untangled.client.impl.application.send_payload(network_47750,inst_47676,send_complete_47752);
var state_47687__$1 = (function (){var statearr_47697 = state_47687;
(statearr_47697[(8)] = inst_47678);

return statearr_47697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47687__$1,(5),response_channel_47751);
} else {
if((state_val_47688 === (4))){
var inst_47685 = (state_47687[(2)]);
var state_47687__$1 = state_47687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47687__$1,inst_47685);
} else {
if((state_val_47688 === (5))){
var inst_47680 = (state_47687[(2)]);
var state_47687__$1 = (function (){var statearr_47698 = state_47687;
(statearr_47698[(9)] = inst_47680);

return statearr_47698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47687__$1,(6),queue_47749);
} else {
if((state_val_47688 === (6))){
var inst_47682 = (state_47687[(2)]);
var inst_47676 = inst_47682;
var state_47687__$1 = (function (){var statearr_47699 = state_47687;
(statearr_47699[(7)] = inst_47676);

return statearr_47699;
})();
var statearr_47700_47802 = state_47687__$1;
(statearr_47700_47802[(2)] = null);

(statearr_47700_47802[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
;
return ((function (seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0 = (function (){
var statearr_47704 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47704[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__);

(statearr_47704[(1)] = (1));

return statearr_47704;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1 = (function (state_47687){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_47687);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e47705){if((e47705 instanceof Object)){
var ex__40510__auto__ = e47705;
var statearr_47706_47809 = state_47687;
(statearr_47706_47809[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47687);

return cljs.core.cst$kw$recur;
} else {
throw e47705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__47835 = state_47687;
state_47687 = G__47835;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__ = function(state_47687){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1.call(this,state_47687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__40507__auto__;
})()
;})(seq__47600,chunk__47601,count__47602,i__47603,switch__40506__auto__,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
})();
var state__40692__auto__ = (function (){var statearr_47707 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_47707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___47765);

return statearr_47707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(seq__47600,chunk__47601,count__47602,i__47603,c__40690__auto___47765,queue_47749,network_47750,response_channel_47751,send_complete_47752,remote,seq__47600__$1,temp__6753__auto__,map__47598,map__47598__$1,networking,send_queues,response_channels))
);


var G__47861 = cljs.core.next(seq__47600__$1);
var G__47862 = null;
var G__47863 = (0);
var G__47864 = (0);
seq__47600 = G__47861;
chunk__47601 = G__47862;
count__47602 = G__47863;
i__47603 = G__47864;
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
 * Configure a re-render when the locale changes. During startup this function will be called once for each
 *   reconciler that is running on a page.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch(untangled.i18n.core._STAR_current_locale_STAR_,cljs.core.cst$kw$locale);

return cljs.core.add_watch(untangled.i18n.core._STAR_current_locale_STAR_,cljs.core.cst$kw$locale,(function (k,r,o,n){
if(om.next.mounted_QMARK_(om.next.app_root(reconciler))){
return om.next.force_root_render_BANG_(reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47887){
var vec__47888 = p__47887;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$untangled$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,v)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.application.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_(m))){
return untangled.client.impl.application.sweep_one(m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47959){
var vec__47960 = p__47959;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$untangled$client$impl$om_DASH_plumbing_SLASH_not_DASH_found,v)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(untangled.client.impl.application.sweep.cljs$core$IFn$_invoke$arity$1 ? untangled.client.impl.application.sweep.cljs$core$IFn$_invoke$arity$1(v) : untangled.client.impl.application.sweep.call(null,v)));
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.application.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47992){
var vec__47993 = p__47992;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$untangled$client$impl$om_DASH_plumbing_SLASH_not_DASH_found)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,untangled.client.impl.application.sweep_one(v));
} else {
if((cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k))) && (cljs.core.map_QMARK_(v))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,k,untangled.client.impl.application.sweep_merge,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,untangled.client.impl.application.sweep(v));

}
}
}
}),target,source);
});
untangled.client.impl.application.merge_handler = (function untangled$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48024){
var vec__48025 = p__48024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48025,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48025,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__48029){
var vec__48030 = p__48029;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(1),null);
if(cljs.core.truth_((function (){var and__7490__auto__ = mutation_merge;
if(cljs.core.truth_(and__7490__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__7490__auto__;
}
})())){
var temp__6751__auto__ = (function (){var G__48033 = acc;
var G__48034 = k;
var G__48035 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$tempids);
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__48033,G__48034,G__48035) : mutation_merge.call(null,G__48033,G__48034,G__48035));
})();
if(cljs.core.truth_(temp__6751__auto__)){
var updated_state = temp__6751__auto__;
return updated_state;
} else {
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Return value handler for",k,"returned nil. Ignored."], 0));

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__48052,initial_state,parser,p__48053){
var map__48072 = p__48052;
var map__48072__$1 = ((((!((map__48072 == null)))?((((map__48072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48072):map__48072);
var app = map__48072__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__48073 = p__48053;
var map__48073__$1 = ((((!((map__48073 == null)))?((((map__48073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48073):map__48073);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48073__$1,cljs.core.cst$kw$pathopt,true);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48073__$1,cljs.core.cst$kw$migrate,null);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48073__$1,cljs.core.cst$kw$shared,null);
var rec_atom = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__48078_48091 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__48079_48092 = null;
var count__48080_48093 = (0);
var i__48081_48094 = (0);
while(true){
if((i__48081_48094 < count__48080_48093)){
var queue_48095 = chunk__48079_48092.cljs$core$IIndexed$_nth$arity$2(null,i__48081_48094);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_48095,tempids);

var G__48097 = seq__48078_48091;
var G__48098 = chunk__48079_48092;
var G__48099 = count__48080_48093;
var G__48100 = (i__48081_48094 + (1));
seq__48078_48091 = G__48097;
chunk__48079_48092 = G__48098;
count__48080_48093 = G__48099;
i__48081_48094 = G__48100;
continue;
} else {
var temp__6753__auto___48105 = cljs.core.seq(seq__48078_48091);
if(temp__6753__auto___48105){
var seq__48078_48108__$1 = temp__6753__auto___48105;
if(cljs.core.chunked_seq_QMARK_(seq__48078_48108__$1)){
var c__8413__auto___48109 = cljs.core.chunk_first(seq__48078_48108__$1);
var G__48111 = cljs.core.chunk_rest(seq__48078_48108__$1);
var G__48112 = c__8413__auto___48109;
var G__48113 = cljs.core.count(c__8413__auto___48109);
var G__48114 = (0);
seq__48078_48091 = G__48111;
chunk__48079_48092 = G__48112;
count__48080_48093 = G__48113;
i__48081_48094 = G__48114;
continue;
} else {
var queue_48115 = cljs.core.first(seq__48078_48108__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_48115,tempids);

var G__48117 = cljs.core.next(seq__48078_48108__$1);
var G__48118 = null;
var G__48119 = (0);
var G__48120 = (0);
seq__48078_48091 = G__48117;
chunk__48079_48092 = G__48118;
count__48080_48093 = G__48119;
i__48081_48094 = G__48120;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__7502__auto__ = migrate;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
return (state_migrate.cljs$core$IFn$_invoke$arity$2 ? state_migrate.cljs$core$IFn$_invoke$arity$2(pure,tempids) : state_migrate.call(null,pure,tempids));
});})(rec_atom,remotes,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(initial_state))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(initial_state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_locale,"en-US");

return initial_state;
})()
:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_state,cljs.core.cst$kw$ui_SLASH_locale,"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$state,cljs.core.cst$kw$parser,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$normalize],[pathopt,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared))
,remotes,(function (){var or__7502__auto__ = migrate;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rec_atom) : cljs.core.deref.call(null,rec_atom))),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__48072,map__48072__$1,app,send_queues,mutation_merge,map__48073,map__48073__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler(config);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rec_atom,rec) : cljs.core.reset_BANG_.call(null,rec_atom,rec));

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__48161 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__48162 = null;
var count__48163 = (0);
var i__48164 = (0);
while(true){
if((i__48164 < count__48163)){
var remote = chunk__48162.cljs$core$IIndexed$_nth$arity$2(null,i__48164);
var cb_atom_48176 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(cb_atom_48176))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_48176,((function (seq__48161,chunk__48162,count__48163,i__48164,cb_atom_48176,remote){
return (function (p1__48145_SHARP_){
if(cljs.core.fn_QMARK_(p1__48145_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__48145_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__48161,chunk__48162,count__48163,i__48164,cb_atom_48176,remote))
);
} else {
}

var G__48179 = seq__48161;
var G__48180 = chunk__48162;
var G__48181 = count__48163;
var G__48182 = (i__48164 + (1));
seq__48161 = G__48179;
chunk__48162 = G__48180;
count__48163 = G__48181;
i__48164 = G__48182;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__48161);
if(temp__6753__auto__){
var seq__48161__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48161__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__48161__$1);
var G__48184 = cljs.core.chunk_rest(seq__48161__$1);
var G__48185 = c__8413__auto__;
var G__48186 = cljs.core.count(c__8413__auto__);
var G__48187 = (0);
seq__48161 = G__48184;
chunk__48162 = G__48185;
count__48163 = G__48186;
i__48164 = G__48187;
continue;
} else {
var remote = cljs.core.first(seq__48161__$1);
var cb_atom_48189 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(cb_atom_48189))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_48189,((function (seq__48161,chunk__48162,count__48163,i__48164,cb_atom_48189,remote,seq__48161__$1,temp__6753__auto__){
return (function (p1__48145_SHARP_){
if(cljs.core.fn_QMARK_(p1__48145_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__48145_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__48161,chunk__48162,count__48163,i__48164,cb_atom_48189,remote,seq__48161__$1,temp__6753__auto__))
);
} else {
}

var G__48192 = cljs.core.next(seq__48161__$1);
var G__48193 = null;
var G__48194 = (0);
var G__48195 = (0);
seq__48161 = G__48192;
chunk__48162 = G__48193;
count__48163 = G__48194;
i__48164 = G__48195;
continue;
}
} else {
return null;
}
}
break;
}
});

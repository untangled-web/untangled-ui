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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__46636,query){
var map__46639 = p__46636;
var map__46639__$1 = ((((!((map__46639 == null)))?((((map__46639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46639):map__46639);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46639__$1,cljs.core.cst$kw$reconciler);
return ((function (map__46639,map__46639__$1,reconciler){
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
;})(map__46639,map__46639__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_46656){
var state_val_46657 = (state_46656[(1)]);
if((state_val_46657 === (1))){
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46656__$1,(2),q,v);
} else {
if((state_val_46657 === (2))){
var inst_46654 = (state_46656[(2)]);
var state_46656__$1 = state_46656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46656__$1,inst_46654);
} else {
return null;
}
}
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__43224__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__43224__auto____0 = (function (){
var statearr_46661 = [null,null,null,null,null,null,null];
(statearr_46661[(0)] = untangled$client$impl$application$enqueue_$_state_machine__43224__auto__);

(statearr_46661[(1)] = (1));

return statearr_46661;
});
var untangled$client$impl$application$enqueue_$_state_machine__43224__auto____1 = (function (state_46656){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46656);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46662){if((e46662 instanceof Object)){
var ex__43227__auto__ = e46662;
var statearr_46663_46665 = state_46656;
(statearr_46663_46665[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46656);

return cljs.core.cst$kw$recur;
} else {
throw e46662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__46666 = state_46656;
state_46656 = G__46666;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__43224__auto__ = function(state_46656){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__43224__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__43224__auto____1.call(this,state_46656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__43224__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__43224__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_46664 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_46664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_46664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__46670,remote_tx_map,cb){
var map__46677 = p__46670;
var map__46677__$1 = ((((!((map__46677 == null)))?((((map__46677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46677):map__46677);
var app = map__46677__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46677__$1,cljs.core.cst$kw$send_DASH_queues);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46677__$1,cljs.core.cst$kw$networking);
var seq__46679 = cljs.core.seq(cljs.core.keys(remote_tx_map));
var chunk__46680 = null;
var count__46681 = (0);
var i__46682 = (0);
while(true){
if((i__46682 < count__46681)){
var remote = chunk__46680.cljs$core$IIndexed$_nth$arity$2(null,i__46682);
var queue_46683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46685 = untangled.client.impl.application.fallback_handler(app,full_remote_transaction_46684);
var desired_remote_mutations_46686 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46684);
var has_mutations_QMARK__46687 = (cljs.core.count(desired_remote_mutations_46686) > (0));
var payload_46688 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,desired_remote_mutations_46686,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46679,chunk__46680,count__46681,i__46682,queue_46683,full_remote_transaction_46684,fallback_46685,desired_remote_mutations_46686,has_mutations_QMARK__46687,remote,map__46677,map__46677__$1,app,send_queues,networking){
return (function (p1__46669_SHARP_){
return (fallback_46685.cljs$core$IFn$_invoke$arity$1 ? fallback_46685.cljs$core$IFn$_invoke$arity$1(p1__46669_SHARP_) : fallback_46685.call(null,p1__46669_SHARP_));
});})(seq__46679,chunk__46680,count__46681,i__46682,queue_46683,full_remote_transaction_46684,fallback_46685,desired_remote_mutations_46686,has_mutations_QMARK__46687,remote,map__46677,map__46677__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__46687){
untangled.client.impl.application.enqueue(queue_46683,payload_46688);
} else {
}

var G__46689 = seq__46679;
var G__46690 = chunk__46680;
var G__46691 = count__46681;
var G__46692 = (i__46682 + (1));
seq__46679 = G__46689;
chunk__46680 = G__46690;
count__46681 = G__46691;
i__46682 = G__46692;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46679);
if(temp__6753__auto__){
var seq__46679__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46679__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46679__$1);
var G__46693 = cljs.core.chunk_rest(seq__46679__$1);
var G__46694 = c__8413__auto__;
var G__46695 = cljs.core.count(c__8413__auto__);
var G__46696 = (0);
seq__46679 = G__46693;
chunk__46680 = G__46694;
count__46681 = G__46695;
i__46682 = G__46696;
continue;
} else {
var remote = cljs.core.first(seq__46679__$1);
var queue_46697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var full_remote_transaction_46698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote_tx_map,remote);
var fallback_46699 = untangled.client.impl.application.fallback_handler(app,full_remote_transaction_46698);
var desired_remote_mutations_46700 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks(full_remote_transaction_46698);
var has_mutations_QMARK__46701 = (cljs.core.count(desired_remote_mutations_46700) > (0));
var payload_46702 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query,desired_remote_mutations_46700,cljs.core.cst$kw$on_DASH_load,cb,cljs.core.cst$kw$on_DASH_error,((function (seq__46679,chunk__46680,count__46681,i__46682,queue_46697,full_remote_transaction_46698,fallback_46699,desired_remote_mutations_46700,has_mutations_QMARK__46701,remote,seq__46679__$1,temp__6753__auto__,map__46677,map__46677__$1,app,send_queues,networking){
return (function (p1__46669_SHARP_){
return (fallback_46699.cljs$core$IFn$_invoke$arity$1 ? fallback_46699.cljs$core$IFn$_invoke$arity$1(p1__46669_SHARP_) : fallback_46699.call(null,p1__46669_SHARP_));
});})(seq__46679,chunk__46680,count__46681,i__46682,queue_46697,full_remote_transaction_46698,fallback_46699,desired_remote_mutations_46700,has_mutations_QMARK__46701,remote,seq__46679__$1,temp__6753__auto__,map__46677,map__46677__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__46701){
untangled.client.impl.application.enqueue(queue_46697,payload_46702);
} else {
}

var G__46703 = cljs.core.next(seq__46679__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46679 = G__46703;
chunk__46680 = G__46704;
count__46681 = G__46705;
i__46682 = G__46706;
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__46709){
var map__46732 = p__46709;
var map__46732__$1 = ((((!((map__46732 == null)))?((((map__46732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46732):map__46732);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,cljs.core.cst$kw$send_DASH_queues);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,cljs.core.cst$kw$reconciler);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46732__$1,cljs.core.cst$kw$networking);
var seq__46734 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46735 = null;
var count__46736 = (0);
var i__46737 = (0);
while(true){
if((i__46737 < count__46736)){
var remote = chunk__46735.cljs$core$IIndexed$_nth$arity$2(null,i__46737);
var queue_46754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46756 = untangled.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46738_46757 = cljs.core.seq(parallel_payload_46756);
var chunk__46739_46758 = null;
var count__46740_46759 = (0);
var i__46741_46760 = (0);
while(true){
if((i__46741_46760 < count__46740_46759)){
var map__46742_46761 = chunk__46739_46758.cljs$core$IIndexed$_nth$arity$2(null,i__46741_46760);
var map__46742_46762__$1 = ((((!((map__46742_46761 == null)))?((((map__46742_46761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46742_46761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46742_46761):map__46742_46761);
var query_46763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46742_46762__$1,cljs.core.cst$kw$query);
var on_load_46764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46742_46762__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46742_46762__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46742_46762__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46767 = ((function (seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,map__46742_46761,map__46742_46762__$1,query_46763,on_load_46764,on_error_46765,load_descriptors_46766,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46707_SHARP_){
return (on_load_46764.cljs$core$IFn$_invoke$arity$2 ? on_load_46764.cljs$core$IFn$_invoke$arity$2(p1__46707_SHARP_,load_descriptors_46766) : on_load_46764.call(null,p1__46707_SHARP_,load_descriptors_46766));
});})(seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,map__46742_46761,map__46742_46762__$1,query_46763,on_load_46764,on_error_46765,load_descriptors_46766,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46768 = ((function (seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46767,map__46742_46761,map__46742_46762__$1,query_46763,on_load_46764,on_error_46765,load_descriptors_46766,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46708_SHARP_){
return (on_error_46765.cljs$core$IFn$_invoke$arity$2 ? on_error_46765.cljs$core$IFn$_invoke$arity$2(p1__46708_SHARP_,load_descriptors_46766) : on_error_46765.call(null,p1__46708_SHARP_,load_descriptors_46766));
});})(seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46767,map__46742_46761,map__46742_46762__$1,query_46763,on_load_46764,on_error_46765,load_descriptors_46766,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_46755,query_46763,on_load_SINGLEQUOTE__46767,on_error_SINGLEQUOTE__46768,null);

var G__46769 = seq__46738_46757;
var G__46770 = chunk__46739_46758;
var G__46771 = count__46740_46759;
var G__46772 = (i__46741_46760 + (1));
seq__46738_46757 = G__46769;
chunk__46739_46758 = G__46770;
count__46740_46759 = G__46771;
i__46741_46760 = G__46772;
continue;
} else {
var temp__6753__auto___46773 = cljs.core.seq(seq__46738_46757);
if(temp__6753__auto___46773){
var seq__46738_46774__$1 = temp__6753__auto___46773;
if(cljs.core.chunked_seq_QMARK_(seq__46738_46774__$1)){
var c__8413__auto___46775 = cljs.core.chunk_first(seq__46738_46774__$1);
var G__46776 = cljs.core.chunk_rest(seq__46738_46774__$1);
var G__46777 = c__8413__auto___46775;
var G__46778 = cljs.core.count(c__8413__auto___46775);
var G__46779 = (0);
seq__46738_46757 = G__46776;
chunk__46739_46758 = G__46777;
count__46740_46759 = G__46778;
i__46741_46760 = G__46779;
continue;
} else {
var map__46744_46780 = cljs.core.first(seq__46738_46774__$1);
var map__46744_46781__$1 = ((((!((map__46744_46780 == null)))?((((map__46744_46780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46744_46780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46744_46780):map__46744_46780);
var query_46782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46744_46781__$1,cljs.core.cst$kw$query);
var on_load_46783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46744_46781__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46744_46781__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46744_46781__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46786 = ((function (seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,map__46744_46780,map__46744_46781__$1,query_46782,on_load_46783,on_error_46784,load_descriptors_46785,seq__46738_46774__$1,temp__6753__auto___46773,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46707_SHARP_){
return (on_load_46783.cljs$core$IFn$_invoke$arity$2 ? on_load_46783.cljs$core$IFn$_invoke$arity$2(p1__46707_SHARP_,load_descriptors_46785) : on_load_46783.call(null,p1__46707_SHARP_,load_descriptors_46785));
});})(seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,map__46744_46780,map__46744_46781__$1,query_46782,on_load_46783,on_error_46784,load_descriptors_46785,seq__46738_46774__$1,temp__6753__auto___46773,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46787 = ((function (seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46786,map__46744_46780,map__46744_46781__$1,query_46782,on_load_46783,on_error_46784,load_descriptors_46785,seq__46738_46774__$1,temp__6753__auto___46773,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46708_SHARP_){
return (on_error_46784.cljs$core$IFn$_invoke$arity$2 ? on_error_46784.cljs$core$IFn$_invoke$arity$2(p1__46708_SHARP_,load_descriptors_46785) : on_error_46784.call(null,p1__46708_SHARP_,load_descriptors_46785));
});})(seq__46738_46757,chunk__46739_46758,count__46740_46759,i__46741_46760,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46786,map__46744_46780,map__46744_46781__$1,query_46782,on_load_46783,on_error_46784,load_descriptors_46785,seq__46738_46774__$1,temp__6753__auto___46773,queue_46754,network_46755,parallel_payload_46756,remote,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_46755,query_46782,on_load_SINGLEQUOTE__46786,on_error_SINGLEQUOTE__46787,null);

var G__46788 = cljs.core.next(seq__46738_46774__$1);
var G__46789 = null;
var G__46790 = (0);
var G__46791 = (0);
seq__46738_46757 = G__46788;
chunk__46739_46758 = G__46789;
count__46740_46759 = G__46790;
i__46741_46760 = G__46791;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46792 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46792)){
untangled.client.impl.application.enqueue(queue_46754,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46792,cljs.core.cst$kw$networking,network_46755));

var G__46793 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46792 = G__46793;
continue;
} else {
}
break;
}

var G__46794 = seq__46734;
var G__46795 = chunk__46735;
var G__46796 = count__46736;
var G__46797 = (i__46737 + (1));
seq__46734 = G__46794;
chunk__46735 = G__46795;
count__46736 = G__46796;
i__46737 = G__46797;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46734);
if(temp__6753__auto__){
var seq__46734__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46734__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46734__$1);
var G__46798 = cljs.core.chunk_rest(seq__46734__$1);
var G__46799 = c__8413__auto__;
var G__46800 = cljs.core.count(c__8413__auto__);
var G__46801 = (0);
seq__46734 = G__46798;
chunk__46735 = G__46799;
count__46736 = G__46800;
i__46737 = G__46801;
continue;
} else {
var remote = cljs.core.first(seq__46734__$1);
var queue_46802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_46803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var parallel_payload_46804 = untangled.client.impl.data_fetch.mark_parallel_loading(remote,reconciler);
var seq__46746_46805 = cljs.core.seq(parallel_payload_46804);
var chunk__46747_46806 = null;
var count__46748_46807 = (0);
var i__46749_46808 = (0);
while(true){
if((i__46749_46808 < count__46748_46807)){
var map__46750_46809 = chunk__46747_46806.cljs$core$IIndexed$_nth$arity$2(null,i__46749_46808);
var map__46750_46810__$1 = ((((!((map__46750_46809 == null)))?((((map__46750_46809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46750_46809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46750_46809):map__46750_46809);
var query_46811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750_46810__$1,cljs.core.cst$kw$query);
var on_load_46812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750_46810__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750_46810__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750_46810__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46815 = ((function (seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,map__46750_46809,map__46750_46810__$1,query_46811,on_load_46812,on_error_46813,load_descriptors_46814,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46707_SHARP_){
return (on_load_46812.cljs$core$IFn$_invoke$arity$2 ? on_load_46812.cljs$core$IFn$_invoke$arity$2(p1__46707_SHARP_,load_descriptors_46814) : on_load_46812.call(null,p1__46707_SHARP_,load_descriptors_46814));
});})(seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,map__46750_46809,map__46750_46810__$1,query_46811,on_load_46812,on_error_46813,load_descriptors_46814,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46816 = ((function (seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46815,map__46750_46809,map__46750_46810__$1,query_46811,on_load_46812,on_error_46813,load_descriptors_46814,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46708_SHARP_){
return (on_error_46813.cljs$core$IFn$_invoke$arity$2 ? on_error_46813.cljs$core$IFn$_invoke$arity$2(p1__46708_SHARP_,load_descriptors_46814) : on_error_46813.call(null,p1__46708_SHARP_,load_descriptors_46814));
});})(seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46815,map__46750_46809,map__46750_46810__$1,query_46811,on_load_46812,on_error_46813,load_descriptors_46814,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_46803,query_46811,on_load_SINGLEQUOTE__46815,on_error_SINGLEQUOTE__46816,null);

var G__46817 = seq__46746_46805;
var G__46818 = chunk__46747_46806;
var G__46819 = count__46748_46807;
var G__46820 = (i__46749_46808 + (1));
seq__46746_46805 = G__46817;
chunk__46747_46806 = G__46818;
count__46748_46807 = G__46819;
i__46749_46808 = G__46820;
continue;
} else {
var temp__6753__auto___46821__$1 = cljs.core.seq(seq__46746_46805);
if(temp__6753__auto___46821__$1){
var seq__46746_46822__$1 = temp__6753__auto___46821__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46746_46822__$1)){
var c__8413__auto___46823 = cljs.core.chunk_first(seq__46746_46822__$1);
var G__46824 = cljs.core.chunk_rest(seq__46746_46822__$1);
var G__46825 = c__8413__auto___46823;
var G__46826 = cljs.core.count(c__8413__auto___46823);
var G__46827 = (0);
seq__46746_46805 = G__46824;
chunk__46747_46806 = G__46825;
count__46748_46807 = G__46826;
i__46749_46808 = G__46827;
continue;
} else {
var map__46752_46828 = cljs.core.first(seq__46746_46822__$1);
var map__46752_46829__$1 = ((((!((map__46752_46828 == null)))?((((map__46752_46828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46752_46828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46752_46828):map__46752_46828);
var query_46830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752_46829__$1,cljs.core.cst$kw$query);
var on_load_46831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752_46829__$1,cljs.core.cst$kw$on_DASH_load);
var on_error_46832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752_46829__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors_46833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46752_46829__$1,cljs.core.cst$kw$load_DASH_descriptors);
var on_load_SINGLEQUOTE__46834 = ((function (seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,map__46752_46828,map__46752_46829__$1,query_46830,on_load_46831,on_error_46832,load_descriptors_46833,seq__46746_46822__$1,temp__6753__auto___46821__$1,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46707_SHARP_){
return (on_load_46831.cljs$core$IFn$_invoke$arity$2 ? on_load_46831.cljs$core$IFn$_invoke$arity$2(p1__46707_SHARP_,load_descriptors_46833) : on_load_46831.call(null,p1__46707_SHARP_,load_descriptors_46833));
});})(seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,map__46752_46828,map__46752_46829__$1,query_46830,on_load_46831,on_error_46832,load_descriptors_46833,seq__46746_46822__$1,temp__6753__auto___46821__$1,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__46835 = ((function (seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46834,map__46752_46828,map__46752_46829__$1,query_46830,on_load_46831,on_error_46832,load_descriptors_46833,seq__46746_46822__$1,temp__6753__auto___46821__$1,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking){
return (function (p1__46708_SHARP_){
return (on_error_46832.cljs$core$IFn$_invoke$arity$2 ? on_error_46832.cljs$core$IFn$_invoke$arity$2(p1__46708_SHARP_,load_descriptors_46833) : on_error_46832.call(null,p1__46708_SHARP_,load_descriptors_46833));
});})(seq__46746_46805,chunk__46747_46806,count__46748_46807,i__46749_46808,seq__46734,chunk__46735,count__46736,i__46737,on_load_SINGLEQUOTE__46834,map__46752_46828,map__46752_46829__$1,query_46830,on_load_46831,on_error_46832,load_descriptors_46833,seq__46746_46822__$1,temp__6753__auto___46821__$1,queue_46802,network_46803,parallel_payload_46804,remote,seq__46734__$1,temp__6753__auto__,map__46732,map__46732__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send(network_46803,query_46830,on_load_SINGLEQUOTE__46834,on_error_SINGLEQUOTE__46835,null);

var G__46836 = cljs.core.next(seq__46746_46822__$1);
var G__46837 = null;
var G__46838 = (0);
var G__46839 = (0);
seq__46746_46805 = G__46836;
chunk__46747_46806 = G__46837;
count__46748_46807 = G__46838;
i__46749_46808 = G__46839;
continue;
}
} else {
}
}
break;
}

var fetch_payload_46840 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_46840)){
untangled.client.impl.application.enqueue(queue_46802,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_payload_46840,cljs.core.cst$kw$networking,network_46803));

var G__46841 = untangled.client.impl.data_fetch.mark_loading(remote,reconciler);
fetch_payload_46840 = G__46841;
continue;
} else {
}
break;
}

var G__46842 = cljs.core.next(seq__46734__$1);
var G__46843 = null;
var G__46844 = (0);
var G__46845 = (0);
seq__46734 = G__46842;
chunk__46735 = G__46843;
count__46736 = G__46844;
i__46737 = G__46845;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__46846){
var map__46849 = p__46846;
var map__46849__$1 = ((((!((map__46849 == null)))?((((map__46849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46849):map__46849);
var app = map__46849__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46849__$1,cljs.core.cst$kw$reconciler);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46849__$1,cljs.core.cst$kw$send_DASH_queues);
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
var map__46855 = payload;
var map__46855__$1 = ((((!((map__46855 == null)))?((((map__46855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46855):map__46855);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46855__$1,cljs.core.cst$kw$query);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46855__$1,cljs.core.cst$kw$on_DASH_load);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46855__$1,cljs.core.cst$kw$on_DASH_error);
var load_descriptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46855__$1,cljs.core.cst$kw$load_DASH_descriptors);
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__46855,map__46855__$1,query,on_load,on_error,load_descriptors){
return (function (p1__46851_SHARP_){
return (on_load.cljs$core$IFn$_invoke$arity$2 ? on_load.cljs$core$IFn$_invoke$arity$2(p1__46851_SHARP_,load_descriptors) : on_load.call(null,p1__46851_SHARP_,load_descriptors));
});})(map__46855,map__46855__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__46855,map__46855__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__46852_SHARP_){
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(p1__46852_SHARP_,load_descriptors) : on_error.call(null,p1__46852_SHARP_,load_descriptors));
});})(map__46855,map__46855__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__46857){
var map__46944 = p__46857;
var map__46944__$1 = ((((!((map__46944 == null)))?((((map__46944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46944):map__46944);
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46944__$1,cljs.core.cst$kw$networking);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46944__$1,cljs.core.cst$kw$send_DASH_queues);
var response_channels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46944__$1,cljs.core.cst$kw$response_DASH_channels);
var seq__46946 = cljs.core.seq(cljs.core.keys(send_queues));
var chunk__46947 = null;
var count__46948 = (0);
var i__46949 = (0);
while(true){
if((i__46949 < count__46948)){
var remote = chunk__46947.cljs$core$IIndexed$_nth$arity$2(null,i__46949);
var queue_47030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var response_channel_47032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_47033 = ((function (seq__46946,chunk__46947,count__46948,i__46949,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (state_46953){
var state_val_46954 = (state_46953[(1)]);
if((state_val_46954 === (1))){
var state_46953__$1 = state_46953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46953__$1,(2),response_channel_47032,cljs.core.cst$kw$complete);
} else {
if((state_val_46954 === (2))){
var inst_46951 = (state_46953[(2)]);
var state_46953__$1 = state_46953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46953__$1,inst_46951);
} else {
return null;
}
}
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
return ((function (seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0 = (function (){
var statearr_46958 = [null,null,null,null,null,null,null];
(statearr_46958[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__);

(statearr_46958[(1)] = (1));

return statearr_46958;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1 = (function (state_46953){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46953);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46959){if((e46959 instanceof Object)){
var ex__43227__auto__ = e46959;
var statearr_46960_47034 = state_46953;
(statearr_46960_47034[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46953);

return cljs.core.cst$kw$recur;
} else {
throw e46959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__47035 = state_46953;
state_46953 = G__47035;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = function(state_46953){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1.call(this,state_46953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__;
})()
;})(seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
})();
var state__43351__auto__ = (function (){var statearr_46961 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_46961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_46961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
);

return c__43349__auto__;
});})(seq__46946,chunk__46947,count__46948,i__46949,queue_47030,network_47031,response_channel_47032,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
var c__43349__auto___47036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (state_46975){
var state_val_46976 = (state_46975[(1)]);
if((state_val_46976 === (1))){
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46975__$1,(2),queue_47030);
} else {
if((state_val_46976 === (2))){
var inst_46963 = (state_46975[(2)]);
var inst_46964 = inst_46963;
var state_46975__$1 = (function (){var statearr_46977 = state_46975;
(statearr_46977[(7)] = inst_46964);

return statearr_46977;
})();
var statearr_46978_47037 = state_46975__$1;
(statearr_46978_47037[(2)] = null);

(statearr_46978_47037[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46976 === (3))){
var inst_46964 = (state_46975[(7)]);
var inst_46966 = untangled.client.impl.application.send_payload(network_47031,inst_46964,send_complete_47033);
var state_46975__$1 = (function (){var statearr_46979 = state_46975;
(statearr_46979[(8)] = inst_46966);

return statearr_46979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46975__$1,(5),response_channel_47032);
} else {
if((state_val_46976 === (4))){
var inst_46973 = (state_46975[(2)]);
var state_46975__$1 = state_46975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46975__$1,inst_46973);
} else {
if((state_val_46976 === (5))){
var inst_46968 = (state_46975[(2)]);
var state_46975__$1 = (function (){var statearr_46980 = state_46975;
(statearr_46980[(9)] = inst_46968);

return statearr_46980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46975__$1,(6),queue_47030);
} else {
if((state_val_46976 === (6))){
var inst_46970 = (state_46975[(2)]);
var inst_46964 = inst_46970;
var state_46975__$1 = (function (){var statearr_46981 = state_46975;
(statearr_46981[(7)] = inst_46964);

return statearr_46981;
})();
var statearr_46982_47038 = state_46975__$1;
(statearr_46982_47038[(2)] = null);

(statearr_46982_47038[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
return ((function (seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0 = (function (){
var statearr_46986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46986[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__);

(statearr_46986[(1)] = (1));

return statearr_46986;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1 = (function (state_46975){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46975);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46987){if((e46987 instanceof Object)){
var ex__43227__auto__ = e46987;
var statearr_46988_47039 = state_46975;
(statearr_46988_47039[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46975);

return cljs.core.cst$kw$recur;
} else {
throw e46987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__47040 = state_46975;
state_46975 = G__47040;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = function(state_46975){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1.call(this,state_46975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__;
})()
;})(seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
})();
var state__43351__auto__ = (function (){var statearr_46989 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_46989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___47036);

return statearr_46989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47036,queue_47030,network_47031,response_channel_47032,send_complete_47033,remote,map__46944,map__46944__$1,networking,send_queues,response_channels))
);


var G__47041 = seq__46946;
var G__47042 = chunk__46947;
var G__47043 = count__46948;
var G__47044 = (i__46949 + (1));
seq__46946 = G__47041;
chunk__46947 = G__47042;
count__46948 = G__47043;
i__46949 = G__47044;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__46946);
if(temp__6753__auto__){
var seq__46946__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46946__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__46946__$1);
var G__47045 = cljs.core.chunk_rest(seq__46946__$1);
var G__47046 = c__8413__auto__;
var G__47047 = cljs.core.count(c__8413__auto__);
var G__47048 = (0);
seq__46946 = G__47045;
chunk__46947 = G__47046;
count__46948 = G__47047;
i__46949 = G__47048;
continue;
} else {
var remote = cljs.core.first(seq__46946__$1);
var queue_47049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var network_47050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(networking,remote);
var response_channel_47051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_channels,remote);
var send_complete_47052 = ((function (seq__46946,chunk__46947,count__46948,i__46949,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (state_46993){
var state_val_46994 = (state_46993[(1)]);
if((state_val_46994 === (1))){
var state_46993__$1 = state_46993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46993__$1,(2),response_channel_47051,cljs.core.cst$kw$complete);
} else {
if((state_val_46994 === (2))){
var inst_46991 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46993__$1,inst_46991);
} else {
return null;
}
}
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
return ((function (seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0 = (function (){
var statearr_46998 = [null,null,null,null,null,null,null];
(statearr_46998[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__);

(statearr_46998[(1)] = (1));

return statearr_46998;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1 = (function (state_46993){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46993);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46999){if((e46999 instanceof Object)){
var ex__43227__auto__ = e46999;
var statearr_47000_47053 = state_46993;
(statearr_47000_47053[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46993);

return cljs.core.cst$kw$recur;
} else {
throw e46999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__47054 = state_46993;
state_46993 = G__47054;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = function(state_46993){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1.call(this,state_46993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__;
})()
;})(seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
})();
var state__43351__auto__ = (function (){var statearr_47001 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_47001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_47001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto__,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
);

return c__43349__auto__;
});})(seq__46946,chunk__46947,count__46948,i__46949,queue_47049,network_47050,response_channel_47051,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
var c__43349__auto___47055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function (state_47015){
var state_val_47016 = (state_47015[(1)]);
if((state_val_47016 === (1))){
var state_47015__$1 = state_47015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47015__$1,(2),queue_47049);
} else {
if((state_val_47016 === (2))){
var inst_47003 = (state_47015[(2)]);
var inst_47004 = inst_47003;
var state_47015__$1 = (function (){var statearr_47017 = state_47015;
(statearr_47017[(7)] = inst_47004);

return statearr_47017;
})();
var statearr_47018_47056 = state_47015__$1;
(statearr_47018_47056[(2)] = null);

(statearr_47018_47056[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_47016 === (3))){
var inst_47004 = (state_47015[(7)]);
var inst_47006 = untangled.client.impl.application.send_payload(network_47050,inst_47004,send_complete_47052);
var state_47015__$1 = (function (){var statearr_47019 = state_47015;
(statearr_47019[(8)] = inst_47006);

return statearr_47019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47015__$1,(5),response_channel_47051);
} else {
if((state_val_47016 === (4))){
var inst_47013 = (state_47015[(2)]);
var state_47015__$1 = state_47015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47015__$1,inst_47013);
} else {
if((state_val_47016 === (5))){
var inst_47008 = (state_47015[(2)]);
var state_47015__$1 = (function (){var statearr_47020 = state_47015;
(statearr_47020[(9)] = inst_47008);

return statearr_47020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47015__$1,(6),queue_47049);
} else {
if((state_val_47016 === (6))){
var inst_47010 = (state_47015[(2)]);
var inst_47004 = inst_47010;
var state_47015__$1 = (function (){var statearr_47021 = state_47015;
(statearr_47021[(7)] = inst_47004);

return statearr_47021;
})();
var statearr_47022_47057 = state_47015__$1;
(statearr_47022_47057[(2)] = null);

(statearr_47022_47057[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
;
return ((function (seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0 = (function (){
var statearr_47026 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47026[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__);

(statearr_47026[(1)] = (1));

return statearr_47026;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1 = (function (state_47015){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_47015);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e47027){if((e47027 instanceof Object)){
var ex__43227__auto__ = e47027;
var statearr_47028_47058 = state_47015;
(statearr_47028_47058[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47015);

return cljs.core.cst$kw$recur;
} else {
throw e47027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__47059 = state_47015;
state_47015 = G__47059;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__ = function(state_47015){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1.call(this,state_47015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43224__auto__;
})()
;})(seq__46946,chunk__46947,count__46948,i__46949,switch__43223__auto__,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
})();
var state__43351__auto__ = (function (){var statearr_47029 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_47029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___47055);

return statearr_47029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(seq__46946,chunk__46947,count__46948,i__46949,c__43349__auto___47055,queue_47049,network_47050,response_channel_47051,send_complete_47052,remote,seq__46946__$1,temp__6753__auto__,map__46944,map__46944__$1,networking,send_queues,response_channels))
);


var G__47060 = cljs.core.next(seq__46946__$1);
var G__47061 = null;
var G__47062 = (0);
var G__47063 = (0);
seq__46946 = G__47060;
chunk__46947 = G__47061;
count__46948 = G__47062;
i__46949 = G__47063;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47068){
var vec__47069 = p__47068;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47069,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47069,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47076){
var vec__47077 = p__47076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47077,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47084){
var vec__47085 = p__47084;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47085,(1),null);
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
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__47099){
var vec__47100 = p__47099;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47100,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47100,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge(target,source_to_merge);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source_to_merge,merged_state){
return (function (acc,p__47103){
var vec__47104 = p__47103;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47104,(1),null);
if(cljs.core.truth_((function (){var and__7490__auto__ = mutation_merge;
if(cljs.core.truth_(and__7490__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__7490__auto__;
}
})())){
var temp__6751__auto__ = (function (){var G__47107 = acc;
var G__47108 = k;
var G__47109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$tempids);
return (mutation_merge.cljs$core$IFn$_invoke$arity$3 ? mutation_merge.cljs$core$IFn$_invoke$arity$3(G__47107,G__47108,G__47109) : mutation_merge.call(null,G__47107,G__47108,G__47109));
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__47110,initial_state,parser,p__47111){
var map__47120 = p__47110;
var map__47120__$1 = ((((!((map__47120 == null)))?((((map__47120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47120):map__47120);
var app = map__47120__$1;
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47120__$1,cljs.core.cst$kw$send_DASH_queues);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47120__$1,cljs.core.cst$kw$mutation_DASH_merge);
var map__47121 = p__47111;
var map__47121__$1 = ((((!((map__47121 == null)))?((((map__47121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47121):map__47121);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47121__$1,cljs.core.cst$kw$pathopt,true);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47121__$1,cljs.core.cst$kw$migrate,null);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47121__$1,cljs.core.cst$kw$shared,null);
var rec_atom = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var remotes = cljs.core.keys(send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__47124_47128 = cljs.core.seq(cljs.core.vals(send_queues));
var chunk__47125_47129 = null;
var count__47126_47130 = (0);
var i__47127_47131 = (0);
while(true){
if((i__47127_47131 < count__47126_47130)){
var queue_47132 = chunk__47125_47129.cljs$core$IIndexed$_nth$arity$2(null,i__47127_47131);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_47132,tempids);

var G__47133 = seq__47124_47128;
var G__47134 = chunk__47125_47129;
var G__47135 = count__47126_47130;
var G__47136 = (i__47127_47131 + (1));
seq__47124_47128 = G__47133;
chunk__47125_47129 = G__47134;
count__47126_47130 = G__47135;
i__47127_47131 = G__47136;
continue;
} else {
var temp__6753__auto___47137 = cljs.core.seq(seq__47124_47128);
if(temp__6753__auto___47137){
var seq__47124_47138__$1 = temp__6753__auto___47137;
if(cljs.core.chunked_seq_QMARK_(seq__47124_47138__$1)){
var c__8413__auto___47139 = cljs.core.chunk_first(seq__47124_47138__$1);
var G__47140 = cljs.core.chunk_rest(seq__47124_47138__$1);
var G__47141 = c__8413__auto___47139;
var G__47142 = cljs.core.count(c__8413__auto___47139);
var G__47143 = (0);
seq__47124_47128 = G__47140;
chunk__47125_47129 = G__47141;
count__47126_47130 = G__47142;
i__47127_47131 = G__47143;
continue;
} else {
var queue_47144 = cljs.core.first(seq__47124_47138__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue(queue_47144,tempids);

var G__47145 = cljs.core.next(seq__47124_47138__$1);
var G__47146 = null;
var G__47147 = (0);
var G__47148 = (0);
seq__47124_47128 = G__47145;
chunk__47125_47129 = G__47146;
count__47126_47130 = G__47147;
i__47127_47131 = G__47148;
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
});})(rec_atom,remotes,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(initial_state))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(initial_state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_locale,"en-US");

return initial_state;
})()
:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_state,cljs.core.cst$kw$ui_SLASH_locale,"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$state,cljs.core.cst$kw$parser,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$normalize],[pathopt,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(untangled.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared))
,remotes,(function (){var or__7502__auto__ = migrate;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rec_atom) : cljs.core.deref.call(null,rec_atom))),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler(mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__47120,map__47120__$1,app,send_queues,mutation_merge,map__47121,map__47121__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler(config);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(rec_atom,rec) : cljs.core.reset_BANG_.call(null,rec_atom,rec));

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__47154 = cljs.core.seq(cljs.core.keys(cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(app)));
var chunk__47155 = null;
var count__47156 = (0);
var i__47157 = (0);
while(true){
if((i__47157 < count__47156)){
var remote = chunk__47155.cljs$core$IIndexed$_nth$arity$2(null,i__47157);
var cb_atom_47158 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(cb_atom_47158))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_47158,((function (seq__47154,chunk__47155,count__47156,i__47157,cb_atom_47158,remote){
return (function (p1__47149_SHARP_){
if(cljs.core.fn_QMARK_(p1__47149_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__47149_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__47154,chunk__47155,count__47156,i__47157,cb_atom_47158,remote))
);
} else {
}

var G__47159 = seq__47154;
var G__47160 = chunk__47155;
var G__47161 = count__47156;
var G__47162 = (i__47157 + (1));
seq__47154 = G__47159;
chunk__47155 = G__47160;
count__47156 = G__47161;
i__47157 = G__47162;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__47154);
if(temp__6753__auto__){
var seq__47154__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47154__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__47154__$1);
var G__47163 = cljs.core.chunk_rest(seq__47154__$1);
var G__47164 = c__8413__auto__;
var G__47165 = cljs.core.count(c__8413__auto__);
var G__47166 = (0);
seq__47154 = G__47163;
chunk__47155 = G__47164;
count__47156 = G__47165;
i__47157 = G__47166;
continue;
} else {
var remote = cljs.core.first(seq__47154__$1);
var cb_atom_47167 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$networking,remote,cljs.core.cst$kw$global_DASH_error_DASH_callback], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_(cb_atom_47167))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cb_atom_47167,((function (seq__47154,chunk__47155,count__47156,i__47157,cb_atom_47167,remote,seq__47154__$1,temp__6753__auto__){
return (function (p1__47149_SHARP_){
if(cljs.core.fn_QMARK_(p1__47149_SHARP_)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(p1__47149_SHARP_,om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__47154,chunk__47155,count__47156,i__47157,cb_atom_47167,remote,seq__47154__$1,temp__6753__auto__))
);
} else {
}

var G__47168 = cljs.core.next(seq__47154__$1);
var G__47169 = null;
var G__47170 = (0);
var G__47171 = (0);
seq__47154 = G__47168;
chunk__47155 = G__47169;
count__47156 = G__47170;
i__47157 = G__47171;
continue;
}
} else {
return null;
}
}
break;
}
});

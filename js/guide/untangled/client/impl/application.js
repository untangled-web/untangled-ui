// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__702328,query){
var map__702331 = p__702328;
var map__702331__$1 = ((((!((map__702331 == null)))?((((map__702331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702331):map__702331);
var reconciler = cljs.core.get.call(null,map__702331__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__702331,map__702331__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__6751__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__6751__auto__)){
var q = temp__6751__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__702331,map__702331__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_702364){
var state_val_702365 = (state_702364[(1)]);
if((state_val_702365 === (1))){
var state_702364__$1 = state_702364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_702364__$1,(2),q,v);
} else {
if((state_val_702365 === (2))){
var inst_702362 = (state_702364[(2)]);
var state_702364__$1 = state_702364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_702364__$1,inst_702362);
} else {
return null;
}
}
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__32860__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__32860__auto____0 = (function (){
var statearr_702369 = [null,null,null,null,null,null,null];
(statearr_702369[(0)] = untangled$client$impl$application$enqueue_$_state_machine__32860__auto__);

(statearr_702369[(1)] = (1));

return statearr_702369;
});
var untangled$client$impl$application$enqueue_$_state_machine__32860__auto____1 = (function (state_702364){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_702364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e702370){if((e702370 instanceof Object)){
var ex__32863__auto__ = e702370;
var statearr_702371_702383 = state_702364;
(statearr_702371_702383[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_702364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e702370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__702384 = state_702364;
state_702364 = G__702384;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__32860__auto__ = function(state_702364){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__32860__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__32860__auto____1.call(this,state_702364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__32860__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__32860__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_702372 = f__32883__auto__.call(null);
(statearr_702372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_702372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_done,on_error,on_load){
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.untangled$client$impl$network$ProgressiveTransfer$)))?true:false):false)){
return untangled.client.impl.network.updating_send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_done,on_error,on_load);
} else {
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_done,on_error);
}
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__702396,remote_tx_map,cb){
var map__702403 = p__702396;
var map__702403__$1 = ((((!((map__702403 == null)))?((((map__702403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702403):map__702403);
var app = map__702403__$1;
var send_queues = cljs.core.get.call(null,map__702403__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var networking = cljs.core.get.call(null,map__702403__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__702405 = cljs.core.seq.call(null,cljs.core.keys.call(null,remote_tx_map));
var chunk__702406 = null;
var count__702407 = (0);
var i__702408 = (0);
while(true){
if((i__702408 < count__702407)){
var remote = cljs.core._nth.call(null,chunk__702406,i__702408);
var queue_702420 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_702421 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_702422 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_702421);
var desired_remote_mutations_702423 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_702421);
var has_mutations_QMARK__702424 = (cljs.core.count.call(null,desired_remote_mutations_702423) > (0));
var payload_702425 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_702423,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__702405,chunk__702406,count__702407,i__702408,queue_702420,full_remote_transaction_702421,fallback_702422,desired_remote_mutations_702423,has_mutations_QMARK__702424,remote,map__702403,map__702403__$1,app,send_queues,networking){
return (function (p1__702395_SHARP_){
return fallback_702422.call(null,p1__702395_SHARP_);
});})(seq__702405,chunk__702406,count__702407,i__702408,queue_702420,full_remote_transaction_702421,fallback_702422,desired_remote_mutations_702423,has_mutations_QMARK__702424,remote,map__702403,map__702403__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__702424){
untangled.client.impl.application.enqueue.call(null,queue_702420,payload_702425);
} else {
}

var G__702434 = seq__702405;
var G__702435 = chunk__702406;
var G__702436 = count__702407;
var G__702437 = (i__702408 + (1));
seq__702405 = G__702434;
chunk__702406 = G__702435;
count__702407 = G__702436;
i__702408 = G__702437;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702405);
if(temp__6753__auto__){
var seq__702405__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702405__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702405__$1);
var G__702438 = cljs.core.chunk_rest.call(null,seq__702405__$1);
var G__702439 = c__28561__auto__;
var G__702440 = cljs.core.count.call(null,c__28561__auto__);
var G__702441 = (0);
seq__702405 = G__702438;
chunk__702406 = G__702439;
count__702407 = G__702440;
i__702408 = G__702441;
continue;
} else {
var remote = cljs.core.first.call(null,seq__702405__$1);
var queue_702442 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_702443 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_702444 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_702443);
var desired_remote_mutations_702445 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_702443);
var has_mutations_QMARK__702446 = (cljs.core.count.call(null,desired_remote_mutations_702445) > (0));
var payload_702447 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_702445,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__702405,chunk__702406,count__702407,i__702408,queue_702442,full_remote_transaction_702443,fallback_702444,desired_remote_mutations_702445,has_mutations_QMARK__702446,remote,seq__702405__$1,temp__6753__auto__,map__702403,map__702403__$1,app,send_queues,networking){
return (function (p1__702395_SHARP_){
return fallback_702444.call(null,p1__702395_SHARP_);
});})(seq__702405,chunk__702406,count__702407,i__702408,queue_702442,full_remote_transaction_702443,fallback_702444,desired_remote_mutations_702445,has_mutations_QMARK__702446,remote,seq__702405__$1,temp__6753__auto__,map__702403,map__702403__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__702446){
untangled.client.impl.application.enqueue.call(null,queue_702442,payload_702447);
} else {
}

var G__702455 = cljs.core.next.call(null,seq__702405__$1);
var G__702456 = null;
var G__702457 = (0);
var G__702458 = (0);
seq__702405 = G__702455;
chunk__702406 = G__702456;
count__702407 = G__702457;
i__702408 = G__702458;
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__702461){
var map__702494 = p__702461;
var map__702494__$1 = ((((!((map__702494 == null)))?((((map__702494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702494):map__702494);
var send_queues = cljs.core.get.call(null,map__702494__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.call(null,map__702494__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__702494__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__702496 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__702497 = null;
var count__702498 = (0);
var i__702499 = (0);
while(true){
if((i__702499 < count__702498)){
var remote = cljs.core._nth.call(null,chunk__702497,i__702499);
var queue_702522 = cljs.core.get.call(null,send_queues,remote);
var network_702523 = cljs.core.get.call(null,networking,remote);
var parallel_payload_702524 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__702501_702525 = cljs.core.seq.call(null,parallel_payload_702524);
var chunk__702502_702526 = null;
var count__702503_702527 = (0);
var i__702504_702528 = (0);
while(true){
if((i__702504_702528 < count__702503_702527)){
var map__702505_702529 = cljs.core._nth.call(null,chunk__702502_702526,i__702504_702528);
var map__702505_702530__$1 = ((((!((map__702505_702529 == null)))?((((map__702505_702529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702505_702529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702505_702529):map__702505_702529);
var query_702531 = cljs.core.get.call(null,map__702505_702530__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_702532 = cljs.core.get.call(null,map__702505_702530__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_702533 = cljs.core.get.call(null,map__702505_702530__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_702534 = cljs.core.get.call(null,map__702505_702530__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__702535 = ((function (seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,map__702505_702529,map__702505_702530__$1,query_702531,on_load_702532,on_error_702533,load_descriptors_702534,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702459_SHARP_){
return on_load_702532.call(null,p1__702459_SHARP_,load_descriptors_702534);
});})(seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,map__702505_702529,map__702505_702530__$1,query_702531,on_load_702532,on_error_702533,load_descriptors_702534,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__702536 = ((function (seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702535,map__702505_702529,map__702505_702530__$1,query_702531,on_load_702532,on_error_702533,load_descriptors_702534,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702460_SHARP_){
return on_error_702533.call(null,p1__702460_SHARP_,load_descriptors_702534);
});})(seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702535,map__702505_702529,map__702505_702530__$1,query_702531,on_load_702532,on_error_702533,load_descriptors_702534,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_702523,query_702531,on_load_SINGLEQUOTE__702535,on_error_SINGLEQUOTE__702536,null);

var G__702545 = seq__702501_702525;
var G__702546 = chunk__702502_702526;
var G__702547 = count__702503_702527;
var G__702548 = (i__702504_702528 + (1));
seq__702501_702525 = G__702545;
chunk__702502_702526 = G__702546;
count__702503_702527 = G__702547;
i__702504_702528 = G__702548;
continue;
} else {
var temp__6753__auto___702549 = cljs.core.seq.call(null,seq__702501_702525);
if(temp__6753__auto___702549){
var seq__702501_702550__$1 = temp__6753__auto___702549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702501_702550__$1)){
var c__28561__auto___702551 = cljs.core.chunk_first.call(null,seq__702501_702550__$1);
var G__702552 = cljs.core.chunk_rest.call(null,seq__702501_702550__$1);
var G__702553 = c__28561__auto___702551;
var G__702554 = cljs.core.count.call(null,c__28561__auto___702551);
var G__702555 = (0);
seq__702501_702525 = G__702552;
chunk__702502_702526 = G__702553;
count__702503_702527 = G__702554;
i__702504_702528 = G__702555;
continue;
} else {
var map__702507_702556 = cljs.core.first.call(null,seq__702501_702550__$1);
var map__702507_702557__$1 = ((((!((map__702507_702556 == null)))?((((map__702507_702556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702507_702556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702507_702556):map__702507_702556);
var query_702558 = cljs.core.get.call(null,map__702507_702557__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_702559 = cljs.core.get.call(null,map__702507_702557__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_702560 = cljs.core.get.call(null,map__702507_702557__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_702561 = cljs.core.get.call(null,map__702507_702557__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__702572 = ((function (seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,map__702507_702556,map__702507_702557__$1,query_702558,on_load_702559,on_error_702560,load_descriptors_702561,seq__702501_702550__$1,temp__6753__auto___702549,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702459_SHARP_){
return on_load_702559.call(null,p1__702459_SHARP_,load_descriptors_702561);
});})(seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,map__702507_702556,map__702507_702557__$1,query_702558,on_load_702559,on_error_702560,load_descriptors_702561,seq__702501_702550__$1,temp__6753__auto___702549,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__702573 = ((function (seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702572,map__702507_702556,map__702507_702557__$1,query_702558,on_load_702559,on_error_702560,load_descriptors_702561,seq__702501_702550__$1,temp__6753__auto___702549,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702460_SHARP_){
return on_error_702560.call(null,p1__702460_SHARP_,load_descriptors_702561);
});})(seq__702501_702525,chunk__702502_702526,count__702503_702527,i__702504_702528,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702572,map__702507_702556,map__702507_702557__$1,query_702558,on_load_702559,on_error_702560,load_descriptors_702561,seq__702501_702550__$1,temp__6753__auto___702549,queue_702522,network_702523,parallel_payload_702524,remote,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_702523,query_702558,on_load_SINGLEQUOTE__702572,on_error_SINGLEQUOTE__702573,null);

var G__702590 = cljs.core.next.call(null,seq__702501_702550__$1);
var G__702591 = null;
var G__702592 = (0);
var G__702593 = (0);
seq__702501_702525 = G__702590;
chunk__702502_702526 = G__702591;
count__702503_702527 = G__702592;
i__702504_702528 = G__702593;
continue;
}
} else {
}
}
break;
}

var fetch_payload_702594 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_702594)){
untangled.client.impl.application.enqueue.call(null,queue_702522,cljs.core.assoc.call(null,fetch_payload_702594,new cljs.core.Keyword(null,"networking","networking",586110628),network_702523));

var G__702595 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_702594 = G__702595;
continue;
} else {
}
break;
}

var G__702596 = seq__702496;
var G__702597 = chunk__702497;
var G__702598 = count__702498;
var G__702599 = (i__702499 + (1));
seq__702496 = G__702596;
chunk__702497 = G__702597;
count__702498 = G__702598;
i__702499 = G__702599;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702496);
if(temp__6753__auto__){
var seq__702496__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702496__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702496__$1);
var G__702603 = cljs.core.chunk_rest.call(null,seq__702496__$1);
var G__702604 = c__28561__auto__;
var G__702605 = cljs.core.count.call(null,c__28561__auto__);
var G__702606 = (0);
seq__702496 = G__702603;
chunk__702497 = G__702604;
count__702498 = G__702605;
i__702499 = G__702606;
continue;
} else {
var remote = cljs.core.first.call(null,seq__702496__$1);
var queue_702610 = cljs.core.get.call(null,send_queues,remote);
var network_702611 = cljs.core.get.call(null,networking,remote);
var parallel_payload_702612 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__702509_702613 = cljs.core.seq.call(null,parallel_payload_702612);
var chunk__702510_702614 = null;
var count__702511_702615 = (0);
var i__702512_702616 = (0);
while(true){
if((i__702512_702616 < count__702511_702615)){
var map__702513_702617 = cljs.core._nth.call(null,chunk__702510_702614,i__702512_702616);
var map__702513_702618__$1 = ((((!((map__702513_702617 == null)))?((((map__702513_702617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702513_702617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702513_702617):map__702513_702617);
var query_702619 = cljs.core.get.call(null,map__702513_702618__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_702620 = cljs.core.get.call(null,map__702513_702618__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_702621 = cljs.core.get.call(null,map__702513_702618__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_702622 = cljs.core.get.call(null,map__702513_702618__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__702623 = ((function (seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,map__702513_702617,map__702513_702618__$1,query_702619,on_load_702620,on_error_702621,load_descriptors_702622,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702459_SHARP_){
return on_load_702620.call(null,p1__702459_SHARP_,load_descriptors_702622);
});})(seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,map__702513_702617,map__702513_702618__$1,query_702619,on_load_702620,on_error_702621,load_descriptors_702622,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__702624 = ((function (seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702623,map__702513_702617,map__702513_702618__$1,query_702619,on_load_702620,on_error_702621,load_descriptors_702622,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702460_SHARP_){
return on_error_702621.call(null,p1__702460_SHARP_,load_descriptors_702622);
});})(seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702623,map__702513_702617,map__702513_702618__$1,query_702619,on_load_702620,on_error_702621,load_descriptors_702622,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_702611,query_702619,on_load_SINGLEQUOTE__702623,on_error_SINGLEQUOTE__702624,null);

var G__702630 = seq__702509_702613;
var G__702631 = chunk__702510_702614;
var G__702632 = count__702511_702615;
var G__702633 = (i__702512_702616 + (1));
seq__702509_702613 = G__702630;
chunk__702510_702614 = G__702631;
count__702511_702615 = G__702632;
i__702512_702616 = G__702633;
continue;
} else {
var temp__6753__auto___702634__$1 = cljs.core.seq.call(null,seq__702509_702613);
if(temp__6753__auto___702634__$1){
var seq__702509_702635__$1 = temp__6753__auto___702634__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702509_702635__$1)){
var c__28561__auto___702640 = cljs.core.chunk_first.call(null,seq__702509_702635__$1);
var G__702641 = cljs.core.chunk_rest.call(null,seq__702509_702635__$1);
var G__702642 = c__28561__auto___702640;
var G__702643 = cljs.core.count.call(null,c__28561__auto___702640);
var G__702644 = (0);
seq__702509_702613 = G__702641;
chunk__702510_702614 = G__702642;
count__702511_702615 = G__702643;
i__702512_702616 = G__702644;
continue;
} else {
var map__702515_702646 = cljs.core.first.call(null,seq__702509_702635__$1);
var map__702515_702647__$1 = ((((!((map__702515_702646 == null)))?((((map__702515_702646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702515_702646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702515_702646):map__702515_702646);
var query_702648 = cljs.core.get.call(null,map__702515_702647__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_702649 = cljs.core.get.call(null,map__702515_702647__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_702650 = cljs.core.get.call(null,map__702515_702647__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_702651 = cljs.core.get.call(null,map__702515_702647__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__702659 = ((function (seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,map__702515_702646,map__702515_702647__$1,query_702648,on_load_702649,on_error_702650,load_descriptors_702651,seq__702509_702635__$1,temp__6753__auto___702634__$1,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702459_SHARP_){
return on_load_702649.call(null,p1__702459_SHARP_,load_descriptors_702651);
});})(seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,map__702515_702646,map__702515_702647__$1,query_702648,on_load_702649,on_error_702650,load_descriptors_702651,seq__702509_702635__$1,temp__6753__auto___702634__$1,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__702660 = ((function (seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702659,map__702515_702646,map__702515_702647__$1,query_702648,on_load_702649,on_error_702650,load_descriptors_702651,seq__702509_702635__$1,temp__6753__auto___702634__$1,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking){
return (function (p1__702460_SHARP_){
return on_error_702650.call(null,p1__702460_SHARP_,load_descriptors_702651);
});})(seq__702509_702613,chunk__702510_702614,count__702511_702615,i__702512_702616,seq__702496,chunk__702497,count__702498,i__702499,on_load_SINGLEQUOTE__702659,map__702515_702646,map__702515_702647__$1,query_702648,on_load_702649,on_error_702650,load_descriptors_702651,seq__702509_702635__$1,temp__6753__auto___702634__$1,queue_702610,network_702611,parallel_payload_702612,remote,seq__702496__$1,temp__6753__auto__,map__702494,map__702494__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_702611,query_702648,on_load_SINGLEQUOTE__702659,on_error_SINGLEQUOTE__702660,null);

var G__702699 = cljs.core.next.call(null,seq__702509_702635__$1);
var G__702700 = null;
var G__702701 = (0);
var G__702702 = (0);
seq__702509_702613 = G__702699;
chunk__702510_702614 = G__702700;
count__702511_702615 = G__702701;
i__702512_702616 = G__702702;
continue;
}
} else {
}
}
break;
}

var fetch_payload_702709 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_702709)){
untangled.client.impl.application.enqueue.call(null,queue_702610,cljs.core.assoc.call(null,fetch_payload_702709,new cljs.core.Keyword(null,"networking","networking",586110628),network_702611));

var G__702710 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_702709 = G__702710;
continue;
} else {
}
break;
}

var G__702723 = cljs.core.next.call(null,seq__702496__$1);
var G__702724 = null;
var G__702725 = (0);
var G__702726 = (0);
seq__702496 = G__702723;
chunk__702497 = G__702724;
count__702498 = G__702725;
i__702499 = G__702726;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__702732){
var map__702740 = p__702732;
var map__702740__$1 = ((((!((map__702740 == null)))?((((map__702740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702740):map__702740);
var app = map__702740__$1;
var reconciler = cljs.core.get.call(null,map__702740__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.call(null,map__702740__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = om.next.app_state.call(null,reconciler);
var all_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var item_remotes = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set.call(null,cljs.core.keys.call(null,send_queues));
var invalid_remotes = clojure.set.difference.call(null,item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty.call(null,invalid_remotes))){
return untangled.client.logging.error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Use of invalid remote(s) detected! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_remotes)].join(''));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app,remote_tx_map,cb){
untangled.client.impl.application.detect_errant_remotes.call(null,app);

untangled.client.impl.application.enqueue_mutations.call(null,app,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app);
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
var map__702833 = payload;
var map__702833__$1 = ((((!((map__702833 == null)))?((((map__702833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702833):map__702833);
var query = cljs.core.get.call(null,map__702833__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load = cljs.core.get.call(null,map__702833__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error = cljs.core.get.call(null,map__702833__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors = cljs.core.get.call(null,map__702833__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__702833,map__702833__$1,query,on_load,on_error,load_descriptors){
return (function (p1__702824_SHARP_){
return on_load.call(null,p1__702824_SHARP_,load_descriptors);
});})(map__702833,map__702833__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__702833,map__702833__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__702825_SHARP_){
return on_error.call(null,p1__702825_SHARP_,load_descriptors);
});})(map__702833,map__702833__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.call(null,send_complete,on_error__$1);
var on_done = cljs.core.comp.call(null,send_complete,merge_data);
return untangled.client.impl.application.real_send.call(null,network,query,on_done,on_error__$2,on_update);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__702863){
var map__702959 = p__702863;
var map__702959__$1 = ((((!((map__702959 == null)))?((((map__702959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702959):map__702959);
var networking = cljs.core.get.call(null,map__702959__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var send_queues = cljs.core.get.call(null,map__702959__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.call(null,map__702959__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__702961 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__702962 = null;
var count__702963 = (0);
var i__702964 = (0);
while(true){
if((i__702964 < count__702963)){
var remote = cljs.core._nth.call(null,chunk__702962,i__702964);
var queue_703053 = cljs.core.get.call(null,send_queues,remote);
var network_703054 = cljs.core.get.call(null,networking,remote);
var response_channel_703055 = cljs.core.get.call(null,response_channels,remote);
var send_complete_703056 = ((function (seq__702961,chunk__702962,count__702963,i__702964,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
untangled.client.logging.info.call(null,"Send complete");

var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (state_702968){
var state_val_702969 = (state_702968[(1)]);
if((state_val_702969 === (1))){
var state_702968__$1 = state_702968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_702968__$1,(2),response_channel_703055,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_702969 === (2))){
var inst_702966 = (state_702968[(2)]);
var state_702968__$1 = state_702968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_702968__$1,inst_702966);
} else {
return null;
}
}
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
return ((function (seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0 = (function (){
var statearr_702973 = [null,null,null,null,null,null,null];
(statearr_702973[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__);

(statearr_702973[(1)] = (1));

return statearr_702973;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1 = (function (state_702968){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_702968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e702974){if((e702974 instanceof Object)){
var ex__32863__auto__ = e702974;
var statearr_702975_703071 = state_702968;
(statearr_702975_703071[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_702968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e702974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__703075 = state_702968;
state_702968 = G__703075;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = function(state_702968){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1.call(this,state_702968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__;
})()
;})(seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
})();
var state__32884__auto__ = (function (){var statearr_702977 = f__32883__auto__.call(null);
(statearr_702977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_702977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
);

return c__32882__auto__;
});})(seq__702961,chunk__702962,count__702963,i__702964,queue_703053,network_703054,response_channel_703055,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
var c__32882__auto___703090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (state_702992){
var state_val_702993 = (state_702992[(1)]);
if((state_val_702993 === (1))){
var state_702992__$1 = state_702992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_702992__$1,(2),queue_703053);
} else {
if((state_val_702993 === (2))){
var inst_702979 = (state_702992[(2)]);
var inst_702980 = inst_702979;
var state_702992__$1 = (function (){var statearr_702994 = state_702992;
(statearr_702994[(7)] = inst_702980);

return statearr_702994;
})();
var statearr_702995_703097 = state_702992__$1;
(statearr_702995_703097[(2)] = null);

(statearr_702995_703097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_702993 === (3))){
var inst_702980 = (state_702992[(7)]);
var inst_702982 = untangled.client.logging.info.call(null,"Payload pulled");
var inst_702983 = untangled.client.impl.application.send_payload.call(null,network_703054,inst_702980,send_complete_703056);
var state_702992__$1 = (function (){var statearr_702996 = state_702992;
(statearr_702996[(8)] = inst_702983);

(statearr_702996[(9)] = inst_702982);

return statearr_702996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_702992__$1,(5),response_channel_703055);
} else {
if((state_val_702993 === (4))){
var inst_702990 = (state_702992[(2)]);
var state_702992__$1 = state_702992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_702992__$1,inst_702990);
} else {
if((state_val_702993 === (5))){
var inst_702985 = (state_702992[(2)]);
var state_702992__$1 = (function (){var statearr_702998 = state_702992;
(statearr_702998[(10)] = inst_702985);

return statearr_702998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_702992__$1,(6),queue_703053);
} else {
if((state_val_702993 === (6))){
var inst_702987 = (state_702992[(2)]);
var inst_702980 = inst_702987;
var state_702992__$1 = (function (){var statearr_702999 = state_702992;
(statearr_702999[(7)] = inst_702980);

return statearr_702999;
})();
var statearr_703000_703102 = state_702992__$1;
(statearr_703000_703102[(2)] = null);

(statearr_703000_703102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
return ((function (seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0 = (function (){
var statearr_703005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_703005[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__);

(statearr_703005[(1)] = (1));

return statearr_703005;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1 = (function (state_702992){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_702992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e703006){if((e703006 instanceof Object)){
var ex__32863__auto__ = e703006;
var statearr_703007_703142 = state_702992;
(statearr_703007_703142[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_702992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e703006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__703144 = state_702992;
state_702992 = G__703144;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = function(state_702992){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1.call(this,state_702992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__;
})()
;})(seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
})();
var state__32884__auto__ = (function (){var statearr_703008 = f__32883__auto__.call(null);
(statearr_703008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___703090);

return statearr_703008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703090,queue_703053,network_703054,response_channel_703055,send_complete_703056,remote,map__702959,map__702959__$1,networking,send_queues,response_channels))
);


var G__703171 = seq__702961;
var G__703172 = chunk__702962;
var G__703173 = count__702963;
var G__703174 = (i__702964 + (1));
seq__702961 = G__703171;
chunk__702962 = G__703172;
count__702963 = G__703173;
i__702964 = G__703174;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__702961);
if(temp__6753__auto__){
var seq__702961__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702961__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__702961__$1);
var G__703177 = cljs.core.chunk_rest.call(null,seq__702961__$1);
var G__703178 = c__28561__auto__;
var G__703179 = cljs.core.count.call(null,c__28561__auto__);
var G__703180 = (0);
seq__702961 = G__703177;
chunk__702962 = G__703178;
count__702963 = G__703179;
i__702964 = G__703180;
continue;
} else {
var remote = cljs.core.first.call(null,seq__702961__$1);
var queue_703181 = cljs.core.get.call(null,send_queues,remote);
var network_703182 = cljs.core.get.call(null,networking,remote);
var response_channel_703183 = cljs.core.get.call(null,response_channels,remote);
var send_complete_703184 = ((function (seq__702961,chunk__702962,count__702963,i__702964,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
untangled.client.logging.info.call(null,"Send complete");

var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (state_703012){
var state_val_703013 = (state_703012[(1)]);
if((state_val_703013 === (1))){
var state_703012__$1 = state_703012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_703012__$1,(2),response_channel_703183,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_703013 === (2))){
var inst_703010 = (state_703012[(2)]);
var state_703012__$1 = state_703012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_703012__$1,inst_703010);
} else {
return null;
}
}
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
return ((function (seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0 = (function (){
var statearr_703017 = [null,null,null,null,null,null,null];
(statearr_703017[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__);

(statearr_703017[(1)] = (1));

return statearr_703017;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1 = (function (state_703012){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_703012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e703018){if((e703018 instanceof Object)){
var ex__32863__auto__ = e703018;
var statearr_703019_703201 = state_703012;
(statearr_703019_703201[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_703012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e703018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__703202 = state_703012;
state_703012 = G__703202;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = function(state_703012){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1.call(this,state_703012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__;
})()
;})(seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
})();
var state__32884__auto__ = (function (){var statearr_703020 = f__32883__auto__.call(null);
(statearr_703020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_703020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto__,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
);

return c__32882__auto__;
});})(seq__702961,chunk__702962,count__702963,i__702964,queue_703181,network_703182,response_channel_703183,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
var c__32882__auto___703205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function (state_703037){
var state_val_703038 = (state_703037[(1)]);
if((state_val_703038 === (1))){
var state_703037__$1 = state_703037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_703037__$1,(2),queue_703181);
} else {
if((state_val_703038 === (2))){
var inst_703023 = (state_703037[(2)]);
var inst_703024 = inst_703023;
var state_703037__$1 = (function (){var statearr_703039 = state_703037;
(statearr_703039[(7)] = inst_703024);

return statearr_703039;
})();
var statearr_703040_703208 = state_703037__$1;
(statearr_703040_703208[(2)] = null);

(statearr_703040_703208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_703038 === (3))){
var inst_703024 = (state_703037[(7)]);
var inst_703026 = untangled.client.logging.info.call(null,"Payload pulled");
var inst_703027 = untangled.client.impl.application.send_payload.call(null,network_703182,inst_703024,send_complete_703184);
var state_703037__$1 = (function (){var statearr_703041 = state_703037;
(statearr_703041[(8)] = inst_703027);

(statearr_703041[(9)] = inst_703026);

return statearr_703041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_703037__$1,(5),response_channel_703183);
} else {
if((state_val_703038 === (4))){
var inst_703034 = (state_703037[(2)]);
var state_703037__$1 = state_703037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_703037__$1,inst_703034);
} else {
if((state_val_703038 === (5))){
var inst_703029 = (state_703037[(2)]);
var state_703037__$1 = (function (){var statearr_703042 = state_703037;
(statearr_703042[(10)] = inst_703029);

return statearr_703042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_703037__$1,(6),queue_703181);
} else {
if((state_val_703038 === (6))){
var inst_703031 = (state_703037[(2)]);
var inst_703024 = inst_703031;
var state_703037__$1 = (function (){var statearr_703043 = state_703037;
(statearr_703043[(7)] = inst_703024);

return statearr_703043;
})();
var statearr_703044_703211 = state_703037__$1;
(statearr_703044_703211[(2)] = null);

(statearr_703044_703211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
;
return ((function (seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0 = (function (){
var statearr_703048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_703048[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__);

(statearr_703048[(1)] = (1));

return statearr_703048;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1 = (function (state_703037){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_703037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e703049){if((e703049 instanceof Object)){
var ex__32863__auto__ = e703049;
var statearr_703050_703239 = state_703037;
(statearr_703050_703239[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_703037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e703049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__703245 = state_703037;
state_703037 = G__703245;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__ = function(state_703037){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1.call(this,state_703037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__32860__auto__;
})()
;})(seq__702961,chunk__702962,count__702963,i__702964,switch__32859__auto__,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
})();
var state__32884__auto__ = (function (){var statearr_703051 = f__32883__auto__.call(null);
(statearr_703051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___703205);

return statearr_703051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(seq__702961,chunk__702962,count__702963,i__702964,c__32882__auto___703205,queue_703181,network_703182,response_channel_703183,send_complete_703184,remote,seq__702961__$1,temp__6753__auto__,map__702959,map__702959__$1,networking,send_queues,response_channels))
);


var G__703257 = cljs.core.next.call(null,seq__702961__$1);
var G__703258 = null;
var G__703259 = (0);
var G__703260 = (0);
seq__702961 = G__703257;
chunk__702962 = G__703258;
count__702963 = G__703259;
i__702964 = G__703260;
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
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__703308){
var vec__703309 = p__703308;
var k = cljs.core.nth.call(null,vec__703309,(0),null);
var v = cljs.core.nth.call(null,vec__703309,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled.client.impl.application.sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__703316){
var vec__703317 = p__703316;
var k = cljs.core.nth.call(null,vec__703317,(0),null);
var v = cljs.core.nth.call(null,vec__703317,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled.client.impl.application.sweep,m),cljs.core.meta.call(null,m));
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
return cljs.core.reduce.call(null,(function (acc,p__703325){
var vec__703326 = p__703325;
var k = cljs.core.nth.call(null,vec__703326,(0),null);
var v = cljs.core.nth.call(null,vec__703326,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled.client.impl.application.sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
untangled.client.impl.application.merge_handler = (function untangled$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__703341){
var vec__703342 = p__703341;
var k = cljs.core.nth.call(null,vec__703342,(0),null);
var _ = cljs.core.nth.call(null,vec__703342,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__703345){
var vec__703346 = p__703345;
var k = cljs.core.nth.call(null,vec__703346,(0),null);
var v = cljs.core.nth.call(null,vec__703346,(1),null);
if(cljs.core.truth_((function (){var and__27638__auto__ = mutation_merge;
if(cljs.core.truth_(and__27638__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__27638__auto__;
}
})())){
var temp__6751__auto__ = mutation_merge.call(null,acc,k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"tempids","tempids",1767509089)));
if(cljs.core.truth_(temp__6751__auto__)){
var updated_state = temp__6751__auto__;
return updated_state;
} else {
untangled.client.logging.info.call(null,"Return value handler for",k,"returned nil. Ignored.");

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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__703352,initial_state,parser,p__703353){
var map__703362 = p__703352;
var map__703362__$1 = ((((!((map__703362 == null)))?((((map__703362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703362):map__703362);
var app = map__703362__$1;
var send_queues = cljs.core.get.call(null,map__703362__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.call(null,map__703362__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__703363 = p__703353;
var map__703363__$1 = ((((!((map__703363 == null)))?((((map__703363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703363):map__703363);
var pathopt = cljs.core.get.call(null,map__703363__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__703363__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__703363__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var remotes = cljs.core.keys.call(null,send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__703366_703370 = cljs.core.seq.call(null,cljs.core.vals.call(null,send_queues));
var chunk__703367_703371 = null;
var count__703368_703372 = (0);
var i__703369_703373 = (0);
while(true){
if((i__703369_703373 < count__703368_703372)){
var queue_703374 = cljs.core._nth.call(null,chunk__703367_703371,i__703369_703373);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_703374,tempids);

var G__703375 = seq__703366_703370;
var G__703376 = chunk__703367_703371;
var G__703377 = count__703368_703372;
var G__703378 = (i__703369_703373 + (1));
seq__703366_703370 = G__703375;
chunk__703367_703371 = G__703376;
count__703368_703372 = G__703377;
i__703369_703373 = G__703378;
continue;
} else {
var temp__6753__auto___703379 = cljs.core.seq.call(null,seq__703366_703370);
if(temp__6753__auto___703379){
var seq__703366_703380__$1 = temp__6753__auto___703379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__703366_703380__$1)){
var c__28561__auto___703381 = cljs.core.chunk_first.call(null,seq__703366_703380__$1);
var G__703382 = cljs.core.chunk_rest.call(null,seq__703366_703380__$1);
var G__703383 = c__28561__auto___703381;
var G__703384 = cljs.core.count.call(null,c__28561__auto___703381);
var G__703385 = (0);
seq__703366_703370 = G__703382;
chunk__703367_703371 = G__703383;
count__703368_703372 = G__703384;
i__703369_703373 = G__703385;
continue;
} else {
var queue_703386 = cljs.core.first.call(null,seq__703366_703380__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_703386,tempids);

var G__703387 = cljs.core.next.call(null,seq__703366_703380__$1);
var G__703388 = null;
var G__703389 = (0);
var G__703390 = (0);
seq__703366_703370 = G__703387;
chunk__703367_703371 = G__703388;
count__703368_703372 = G__703389;
i__703369_703373 = G__703390;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__27650__auto__ = migrate;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
return state_migrate.call(null,pure,tempids);
});})(rec_atom,remotes,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,remotes,(function (){var or__27650__auto__ = migrate;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__703362,map__703362__$1,app,send_queues,mutation_merge,map__703363,map__703363__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__703396 = cljs.core.seq.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__703397 = null;
var count__703398 = (0);
var i__703399 = (0);
while(true){
if((i__703399 < count__703398)){
var remote = cljs.core._nth.call(null,chunk__703397,i__703399);
var cb_atom_703400 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_703400))){
cljs.core.swap_BANG_.call(null,cb_atom_703400,((function (seq__703396,chunk__703397,count__703398,i__703399,cb_atom_703400,remote){
return (function (p1__703391_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__703391_SHARP_)){
return cljs.core.partial.call(null,p1__703391_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__703396,chunk__703397,count__703398,i__703399,cb_atom_703400,remote))
);
} else {
}

var G__703401 = seq__703396;
var G__703402 = chunk__703397;
var G__703403 = count__703398;
var G__703404 = (i__703399 + (1));
seq__703396 = G__703401;
chunk__703397 = G__703402;
count__703398 = G__703403;
i__703399 = G__703404;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__703396);
if(temp__6753__auto__){
var seq__703396__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__703396__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__703396__$1);
var G__703405 = cljs.core.chunk_rest.call(null,seq__703396__$1);
var G__703406 = c__28561__auto__;
var G__703407 = cljs.core.count.call(null,c__28561__auto__);
var G__703408 = (0);
seq__703396 = G__703405;
chunk__703397 = G__703406;
count__703398 = G__703407;
i__703399 = G__703408;
continue;
} else {
var remote = cljs.core.first.call(null,seq__703396__$1);
var cb_atom_703411 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_703411))){
cljs.core.swap_BANG_.call(null,cb_atom_703411,((function (seq__703396,chunk__703397,count__703398,i__703399,cb_atom_703411,remote,seq__703396__$1,temp__6753__auto__){
return (function (p1__703391_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__703391_SHARP_)){
return cljs.core.partial.call(null,p1__703391_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__703396,chunk__703397,count__703398,i__703399,cb_atom_703411,remote,seq__703396__$1,temp__6753__auto__))
);
} else {
}

var G__703412 = cljs.core.next.call(null,seq__703396__$1);
var G__703413 = null;
var G__703414 = (0);
var G__703415 = (0);
seq__703396 = G__703412;
chunk__703397 = G__703413;
count__703398 = G__703414;
i__703399 = G__703415;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=application.js.map?rel=1489703351891
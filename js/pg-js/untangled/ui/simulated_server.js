// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.simulated_server');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('untangled.client.impl.network');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.ui.simulated_server.MockNetwork = (function (server,__meta,__extmap,__hash){
this.server = server;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k51958,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__51960 = (((k51958 instanceof cljs.core.Keyword))?k51958.fqn:null);
switch (G__51960) {
case "server":
return self__.server;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51958,else__8180__auto__);

}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.ui.simulated-server.MockNetwork{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$server,self__.server],null))], null),self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51957){
var self__ = this;
var G__51957__$1 = this;
return (new cljs.core.RecordIter((0),G__51957__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$server], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.ui.simulated_server.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.simulated_server.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var resp = (function (){var G__51961 = cljs.core.PersistentArrayMap.EMPTY;
var G__51962 = edn;
return (self__.server.cljs$core$IFn$_invoke$arity$2 ? self__.server.cljs$core$IFn$_invoke$arity$2(G__51961,G__51962) : self__.server.call(null,G__51961,G__51962));
})();
var G__51963 = ((function (resp,this$__$1){
return (function (){
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(resp) : ok.call(null,resp));
});})(resp,this$__$1))
;
var G__51964 = (700);
return setTimeout(G__51963,G__51964);
});


untangled.ui.simulated_server.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$server,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__51957){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__51965 = cljs.core.keyword_identical_QMARK_;
var expr__51966 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__51968 = cljs.core.cst$kw$server;
var G__51969 = expr__51966;
return (pred__51965.cljs$core$IFn$_invoke$arity$2 ? pred__51965.cljs$core$IFn$_invoke$arity$2(G__51968,G__51969) : pred__51965.call(null,G__51968,G__51969));
})())){
return (new untangled.ui.simulated_server.MockNetwork(G__51957,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__51957),null));
}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$server,self__.server],null))], null),self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__51957){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.ui.simulated_server.MockNetwork(self__.server,G__51957,self__.__extmap,self__.__hash));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.ui.simulated_server.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$server], null);
});

untangled.ui.simulated_server.MockNetwork.cljs$lang$type = true;

untangled.ui.simulated_server.MockNetwork.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.ui.simulated-server/MockNetwork");
});

untangled.ui.simulated_server.MockNetwork.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.ui.simulated-server/MockNetwork");
});

untangled.ui.simulated_server.__GT_MockNetwork = (function untangled$ui$simulated_server$__GT_MockNetwork(server){
return (new untangled.ui.simulated_server.MockNetwork(server,null,null,null));
});

untangled.ui.simulated_server.map__GT_MockNetwork = (function untangled$ui$simulated_server$map__GT_MockNetwork(G__51959){
return (new untangled.ui.simulated_server.MockNetwork(cljs.core.cst$kw$server.cljs$core$IFn$_invoke$arity$1(G__51959),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51959,cljs.core.cst$kw$server),null));
});

untangled.ui.simulated_server.make_mock_network = (function untangled$ui$simulated_server$make_mock_network(state,read_PLUS_mutate){
return untangled.ui.simulated_server.__GT_MockNetwork((function (){var parser = om.next.parser(read_PLUS_mutate);
return ((function (parser){
return (function (env,tx){
var G__51973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$state,state);
var G__51974 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__51973,G__51974) : parser.call(null,G__51973,G__51974));
});
;})(parser))
})());
});

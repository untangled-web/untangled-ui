// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.simulated_server');
goog.require('cljs.core');
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

untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28325__auto__,k__28326__auto__){
var self__ = this;
var this__28325__auto____$1 = this;
return this__28325__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28326__auto__,null);
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28327__auto__,k705075,else__28328__auto__){
var self__ = this;
var this__28327__auto____$1 = this;
var G__705082 = (((k705075 instanceof cljs.core.Keyword))?k705075.fqn:null);
switch (G__705082) {
case "server":
return self__.server;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k705075,else__28328__auto__);

}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28339__auto__,writer__28340__auto__,opts__28341__auto__){
var self__ = this;
var this__28339__auto____$1 = this;
var pr_pair__28342__auto__ = ((function (this__28339__auto____$1){
return (function (keyval__28343__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,cljs.core.pr_writer,""," ","",opts__28341__auto__,keyval__28343__auto__);
});})(this__28339__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,pr_pair__28342__auto__,"#untangled.ui.simulated-server.MockNetwork{",", ","}",opts__28341__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server","server",1499190120),self__.server],null))], null),self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__705074){
var self__ = this;
var G__705074__$1 = this;
return (new cljs.core.RecordIter((0),G__705074__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28323__auto__){
var self__ = this;
var this__28323__auto____$1 = this;
return self__.__meta;
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28319__auto__){
var self__ = this;
var this__28319__auto____$1 = this;
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28329__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28320__auto__){
var self__ = this;
var this__28320__auto____$1 = this;
var h__28092__auto__ = self__.__hash;
if(!((h__28092__auto__ == null))){
return h__28092__auto__;
} else {
var h__28092__auto____$1 = cljs.core.hash_imap.call(null,this__28320__auto____$1);
self__.__hash = h__28092__auto____$1;

return h__28092__auto____$1;
}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28321__auto__,other__28322__auto__){
var self__ = this;
var this__28321__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27638__auto__ = other__28322__auto__;
if(cljs.core.truth_(and__27638__auto__)){
return ((this__28321__auto____$1.constructor === other__28322__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28321__auto____$1,other__28322__auto__));
} else {
return and__27638__auto__;
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
var resp = self__.server.call(null,cljs.core.PersistentArrayMap.EMPTY,edn);
return setTimeout(((function (resp,this$__$1){
return (function (){
return ok.call(null,resp);
});})(resp,this$__$1))
,(700));
});


untangled.ui.simulated_server.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28334__auto__,k__28335__auto__){
var self__ = this;
var this__28334__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server","server",1499190120),null], null), null),k__28335__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28334__auto____$1),self__.__meta),k__28335__auto__);
} else {
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28335__auto__)),null));
}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28332__auto__,k__28333__auto__,G__705074){
var self__ = this;
var this__28332__auto____$1 = this;
var pred__705086 = cljs.core.keyword_identical_QMARK_;
var expr__705087 = k__28333__auto__;
if(cljs.core.truth_(pred__705086.call(null,new cljs.core.Keyword(null,"server","server",1499190120),expr__705087))){
return (new untangled.ui.simulated_server.MockNetwork(G__705074,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.simulated_server.MockNetwork(self__.server,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28333__auto__,G__705074),null));
}
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28337__auto__){
var self__ = this;
var this__28337__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server","server",1499190120),self__.server],null))], null),self__.__extmap));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28324__auto__,G__705074){
var self__ = this;
var this__28324__auto____$1 = this;
return (new untangled.ui.simulated_server.MockNetwork(self__.server,G__705074,self__.__extmap,self__.__hash));
});


untangled.ui.simulated_server.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28330__auto__,entry__28331__auto__){
var self__ = this;
var this__28330__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28331__auto__)){
return this__28330__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28331__auto__,(0)),cljs.core._nth.call(null,entry__28331__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28330__auto____$1,entry__28331__auto__);
}
});

untangled.ui.simulated_server.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"server","server",-1155245649,null)], null);
});

untangled.ui.simulated_server.MockNetwork.cljs$lang$type = true;

untangled.ui.simulated_server.MockNetwork.cljs$lang$ctorPrSeq = (function (this__28361__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.ui.simulated-server/MockNetwork");
});

untangled.ui.simulated_server.MockNetwork.cljs$lang$ctorPrWriter = (function (this__28361__auto__,writer__28362__auto__){
return cljs.core._write.call(null,writer__28362__auto__,"untangled.ui.simulated-server/MockNetwork");
});

untangled.ui.simulated_server.__GT_MockNetwork = (function untangled$ui$simulated_server$__GT_MockNetwork(server){
return (new untangled.ui.simulated_server.MockNetwork(server,null,null,null));
});

untangled.ui.simulated_server.map__GT_MockNetwork = (function untangled$ui$simulated_server$map__GT_MockNetwork(G__705076){
return (new untangled.ui.simulated_server.MockNetwork(new cljs.core.Keyword(null,"server","server",1499190120).cljs$core$IFn$_invoke$arity$1(G__705076),null,cljs.core.dissoc.call(null,G__705076,new cljs.core.Keyword(null,"server","server",1499190120)),null));
});

untangled.ui.simulated_server.make_mock_network = (function untangled$ui$simulated_server$make_mock_network(state,read_PLUS_mutate){
return untangled.ui.simulated_server.__GT_MockNetwork.call(null,(function (){var parser = om.next.parser.call(null,read_PLUS_mutate);
return ((function (parser){
return (function (env,tx){
return parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"state","state",-1988618099),state),tx);
});
;})(parser))
})());
});

//# sourceMappingURL=simulated_server.js.map?rel=1489703353464
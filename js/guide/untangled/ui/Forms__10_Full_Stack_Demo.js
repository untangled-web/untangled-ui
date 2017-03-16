// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.Forms__10_Full_Stack_Demo');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('untangled.client.cards');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.client.routing');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.ui.forms');
goog.require('untangled.ui.layout');
goog.require('untangled.ui.elements');
goog.require('untangled.client.data_fetch');
goog.require('cljs.reader');
untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number = (function untangled$ui$Forms__10_Full_Stack_Demo$make_phone_number(id,type,num){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("phone","type","phone/type",1541079546),type,new cljs.core.Keyword("phone","number","phone/number",1397184156),num], null);
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.server_state !== 'undefined'){
} else {
untangled.ui.Forms__10_Full_Stack_Demo.server_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-numbers","all-numbers",-1949249601),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number.call(null,(1),new cljs.core.Keyword(null,"home","home",-74557309),"555-1212"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number.call(null,(2),new cljs.core.Keyword(null,"home","home",-74557309),"555-1213"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number.call(null,(3),new cljs.core.Keyword(null,"home","home",-74557309),"555-1214"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number.call(null,(4),new cljs.core.Keyword(null,"home","home",-74557309),"555-1215")], null)], null));
}
var old_state_705892 = cljs.reader.read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("/"))].join(''));
if(cljs.core.map_QMARK_.call(null,old_state_705892)){
cljs.core.reset_BANG_.call(null,untangled.ui.Forms__10_Full_Stack_Demo.server_state,old_state_705892);
} else {
}
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number = (function untangled$ui$Forms__10_Full_Stack_Demo$update_phone_number(id,incoming_changes){
untangled.client.logging.info.call(null,"Server asked to updated phone ",id," with changes: ",incoming_changes);

cljs.core.swap_BANG_.call(null,untangled.ui.Forms__10_Full_Stack_Demo.server_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-numbers","all-numbers",-1949249601),(id - (1))], null),cljs.core.merge,incoming_changes);

return localStorage.setItem("/",cljs.core.pr_str.call(null,cljs.core.deref.call(null,untangled.ui.Forms__10_Full_Stack_Demo.server_state)));
});
untangled.ui.Forms__10_Full_Stack_Demo.read_handler = (function untangled$ui$Forms__10_Full_Stack_Demo$read_handler(p__705894,k,p){
var map__705898 = p__705894;
var map__705898__$1 = ((((!((map__705898 == null)))?((((map__705898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705898):map__705898);
var state = cljs.core.get.call(null,map__705898__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
untangled.client.logging.info.call(null,"SERVER query for ",k);

var G__705901 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__705901) {
case "all-numbers":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"all-numbers","all-numbers",-1949249601))], null);

break;
default:
return null;

}
});
untangled.ui.Forms__10_Full_Stack_Demo.write_handler = (function untangled$ui$Forms__10_Full_Stack_Demo$write_handler(env,k,p){
untangled.client.logging.info.call(null,"SERVER mutation for ",k," with params ",p);

var G__705965 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__705965)){
var updates = new cljs.core.Keyword("form","updates","form/updates",2000348712).cljs$core$IFn$_invoke$arity$1(p);
var seq__705966 = cljs.core.seq.call(null,updates);
var chunk__705967 = null;
var count__705968 = (0);
var i__705969 = (0);
while(true){
if((i__705969 < count__705968)){
var vec__705971 = cljs.core._nth.call(null,chunk__705967,i__705969);
var vec__705974 = cljs.core.nth.call(null,vec__705971,(0),null);
var table = cljs.core.nth.call(null,vec__705974,(0),null);
var id = cljs.core.nth.call(null,vec__705974,(1),null);
var changes = cljs.core.nth.call(null,vec__705971,(1),null);
var G__705977_706007 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__705977_706007) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number.call(null,id,changes);

break;
default:
untangled.client.logging.info.call(null,"Server asked to update unknown entity ",table);

}

var G__706009 = seq__705966;
var G__706010 = chunk__705967;
var G__706011 = count__705968;
var G__706012 = (i__705969 + (1));
seq__705966 = G__706009;
chunk__705967 = G__706010;
count__705968 = G__706011;
i__705969 = G__706012;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__705966);
if(temp__6753__auto__){
var seq__705966__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__705966__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__705966__$1);
var G__706015 = cljs.core.chunk_rest.call(null,seq__705966__$1);
var G__706016 = c__28561__auto__;
var G__706017 = cljs.core.count.call(null,c__28561__auto__);
var G__706018 = (0);
seq__705966 = G__706015;
chunk__705967 = G__706016;
count__705968 = G__706017;
i__705969 = G__706018;
continue;
} else {
var vec__705978 = cljs.core.first.call(null,seq__705966__$1);
var vec__705981 = cljs.core.nth.call(null,vec__705978,(0),null);
var table = cljs.core.nth.call(null,vec__705981,(0),null);
var id = cljs.core.nth.call(null,vec__705981,(1),null);
var changes = cljs.core.nth.call(null,vec__705978,(1),null);
var G__705984_706024 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__705984_706024) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number.call(null,id,changes);

break;
default:
untangled.client.logging.info.call(null,"Server asked to update unknown entity ",table);

}

var G__706027 = cljs.core.next.call(null,seq__705966__$1);
var G__706028 = null;
var G__706029 = (0);
var G__706030 = (0);
seq__705966 = G__706027;
chunk__705967 = G__706028;
count__705968 = G__706029;
i__705969 = G__706030;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("untangled.ui.forms","commit-to-entity","untangled.ui.forms/commit-to-entity",-976115368,null),G__705965)){
var updates = new cljs.core.Keyword("form","updates","form/updates",2000348712).cljs$core$IFn$_invoke$arity$1(p);
var seq__705985 = cljs.core.seq.call(null,updates);
var chunk__705986 = null;
var count__705987 = (0);
var i__705988 = (0);
while(true){
if((i__705988 < count__705987)){
var vec__705989 = cljs.core._nth.call(null,chunk__705986,i__705988);
var vec__705992 = cljs.core.nth.call(null,vec__705989,(0),null);
var table = cljs.core.nth.call(null,vec__705992,(0),null);
var id = cljs.core.nth.call(null,vec__705992,(1),null);
var changes = cljs.core.nth.call(null,vec__705989,(1),null);
var G__705995_706031 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__705995_706031) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number.call(null,id,changes);

break;
default:
untangled.client.logging.info.call(null,"Server asked to update unknown entity ",table);

}

var G__706033 = seq__705985;
var G__706034 = chunk__705986;
var G__706035 = count__705987;
var G__706036 = (i__705988 + (1));
seq__705985 = G__706033;
chunk__705986 = G__706034;
count__705987 = G__706035;
i__705988 = G__706036;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__705985);
if(temp__6753__auto__){
var seq__705985__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__705985__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__705985__$1);
var G__706041 = cljs.core.chunk_rest.call(null,seq__705985__$1);
var G__706042 = c__28561__auto__;
var G__706043 = cljs.core.count.call(null,c__28561__auto__);
var G__706044 = (0);
seq__705985 = G__706041;
chunk__705986 = G__706042;
count__705987 = G__706043;
i__705988 = G__706044;
continue;
} else {
var vec__705996 = cljs.core.first.call(null,seq__705985__$1);
var vec__705999 = cljs.core.nth.call(null,vec__705996,(0),null);
var table = cljs.core.nth.call(null,vec__705999,(0),null);
var id = cljs.core.nth.call(null,vec__705999,(1),null);
var changes = cljs.core.nth.call(null,vec__705996,(1),null);
var G__706002_706049 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__706002_706049) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number.call(null,id,changes);

break;
default:
untangled.client.logging.info.call(null,"Server asked to update unknown entity ",table);

}

var G__706052 = cljs.core.next.call(null,seq__705985__$1);
var G__706053 = null;
var G__706054 = (0);
var G__706055 = (0);
seq__705985 = G__706052;
chunk__705986 = G__706053;
count__705987 = G__706054;
i__705988 = G__706055;
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
}
});
untangled.ui.Forms__10_Full_Stack_Demo.server_parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.ui.Forms__10_Full_Stack_Demo.read_handler,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.ui.Forms__10_Full_Stack_Demo.write_handler], null));
untangled.ui.Forms__10_Full_Stack_Demo.server = (function untangled$ui$Forms__10_Full_Stack_Demo$server(env,tx){
return untangled.ui.Forms__10_Full_Stack_Demo.server_parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"state","state",-1988618099),untangled.ui.Forms__10_Full_Stack_Demo.server_state),tx);
});

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
untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28325__auto__,k__28326__auto__){
var self__ = this;
var this__28325__auto____$1 = this;
return this__28325__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28326__auto__,null);
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28327__auto__,k706059,else__28328__auto__){
var self__ = this;
var this__28327__auto____$1 = this;
var G__706066 = (((k706059 instanceof cljs.core.Keyword))?k706059.fqn:null);
switch (G__706066) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k706059,else__28328__auto__);

}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28339__auto__,writer__28340__auto__,opts__28341__auto__){
var self__ = this;
var this__28339__auto____$1 = this;
var pr_pair__28342__auto__ = ((function (this__28339__auto____$1){
return (function (keyval__28343__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,cljs.core.pr_writer,""," ","",opts__28341__auto__,keyval__28343__auto__);
});})(this__28339__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,pr_pair__28342__auto__,"#untangled.ui.Forms--10-Full-Stack-Demo.MockNetwork{",", ","}",opts__28341__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__706058){
var self__ = this;
var G__706058__$1 = this;
return (new cljs.core.RecordIter((0),G__706058__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return setTimeout(((function (this$__$1){
return (function (){
var resp = untangled.ui.Forms__10_Full_Stack_Demo.server.call(null,cljs.core.PersistentArrayMap.EMPTY,edn);
return ok.call(null,resp);
});})(this$__$1))
,(1000));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28323__auto__){
var self__ = this;
var this__28323__auto____$1 = this;
return self__.__meta;
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28319__auto__){
var self__ = this;
var this__28319__auto____$1 = this;
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28329__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28320__auto__){
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


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28321__auto__,other__28322__auto__){
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


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28334__auto__,k__28335__auto__){
var self__ = this;
var this__28334__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__28335__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28334__auto____$1),self__.__meta),k__28335__auto__);
} else {
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28335__auto__)),null));
}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28332__auto__,k__28333__auto__,G__706058){
var self__ = this;
var this__28332__auto____$1 = this;
var pred__706072 = cljs.core.keyword_identical_QMARK_;
var expr__706073 = k__28333__auto__;
if(cljs.core.truth_(pred__706072.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__706073))){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(G__706058,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28333__auto__,G__706058),null));
}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28337__auto__){
var self__ = this;
var this__28337__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28324__auto__,G__706058){
var self__ = this;
var this__28324__auto____$1 = this;
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,G__706058,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28330__auto__,entry__28331__auto__){
var self__ = this;
var this__28330__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28331__auto__)){
return this__28330__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28331__auto__,(0)),cljs.core._nth.call(null,entry__28331__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28330__auto____$1,entry__28331__auto__);
}
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$ctorPrSeq = (function (this__28361__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.ui.Forms--10-Full-Stack-Demo/MockNetwork");
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$ctorPrWriter = (function (this__28361__auto__,writer__28362__auto__){
return cljs.core._write.call(null,writer__28362__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/MockNetwork");
});

untangled.ui.Forms__10_Full_Stack_Demo.__GT_MockNetwork = (function untangled$ui$Forms__10_Full_Stack_Demo$__GT_MockNetwork(complete_app){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(complete_app,null,null,null));
});

untangled.ui.Forms__10_Full_Stack_Demo.map__GT_MockNetwork = (function untangled$ui$Forms__10_Full_Stack_Demo$map__GT_MockNetwork(G__706062){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__706062),null,cljs.core.dissoc.call(null,G__706062,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__10_Full_Stack_Demo.field_with_label = (function untangled$ui$Forms__10_Full_Stack_Demo$field_with_label(var_args){
var args706142 = [];
var len__28871__auto___706150 = arguments.length;
var i__28872__auto___706151 = (0);
while(true){
if((i__28872__auto___706151 < len__28871__auto___706150)){
args706142.push((arguments[i__28872__auto___706151]));

var G__706153 = (i__28872__auto___706151 + (1));
i__28872__auto___706151 = G__706153;
continue;
} else {
}
break;
}

var G__706147 = args706142.length;
switch (G__706147) {
case 4:
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args706142.length)].join('')));

}
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.call(null,comp,form,name,label,null);
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.call(null,form,name))?" has-error":""))].join('')}),om.dom.label.call(null,({"className": "col-sm-2", "htmlFor": name}),label),om.dom.div.call(null,({"className": "col-sm-10"}),untangled.ui.forms.form_field.call(null,comp,form,name)),(cljs.core.truth_((function (){var and__27638__auto__ = validation_message;
if(cljs.core.truth_(and__27638__auto__)){
return untangled.ui.forms.invalid_QMARK_.call(null,form,name);
} else {
return and__27638__auto__;
}
})())?om.dom.span.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),validation_message):null));
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$lang$maxFixedArity = 5;

untangled.ui.Forms__10_Full_Stack_Demo.phone_ident = (function untangled$ui$Forms__10_Full_Stack_Demo$phone_ident(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),id], null);
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneForm(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x706166_706194 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype;
x706166_706194.componentWillUpdate = ((function (x706166_706194){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706197 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706198 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706197,next_ident__29856__auto___706198)){
var idxr__29857__auto___706200 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706200 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706200),((function (idxr__29857__auto___706200,ident__29855__auto___706197,next_ident__29856__auto___706198,this__29851__auto__,x706166_706194){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706197], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706198], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706200,ident__29855__auto___706197,next_ident__29856__auto___706198,this__29851__auto__,x706166_706194))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706166_706194))
;

x706166_706194.shouldComponentUpdate = ((function (x706166_706194){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706177 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706177);
} else {
return G__706177;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x706166_706194))
;

x706166_706194.componentWillUnmount = ((function (x706166_706194){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706166_706194))
;

x706166_706194.componentDidUpdate = ((function (x706166_706194){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706166_706194))
;

x706166_706194.isMounted = ((function (x706166_706194){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706166_706194))
;

x706166_706194.componentWillMount = ((function (x706166_706194){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706166_706194))
;

x706166_706194.render = ((function (x706166_706194){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706179 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706180 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706181 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706182 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706183 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var form = om.next.props.call(null,this$);
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","type","phone/type",1541079546),"Phone type:"),untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.call(null,this$,form,new cljs.core.Keyword("phone","number","phone/number",1397184156),"Number:"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706183;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706182;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706181;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706180;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706179;
}});})(x706166_706194))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.om$isComponent = true;

var x706185_706217 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm;
/** @nocollapse */
x706185_706217.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706185_706217.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706185_706217){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x706185_706217))
;

/** @nocollapse */
x706185_706217.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706185_706217.om$next$IQuery$query$arity$1 = ((function (x706185_706217){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x706185_706217))
;

/** @nocollapse */
x706185_706217.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706185_706217.om$next$Ident$ident$arity$2 = ((function (x706185_706217){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.Forms__10_Full_Stack_Demo.phone_ident.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props));
});})(x706185_706217))
;


var x706188_706219 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype;

x706188_706219.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x706188_706219.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706188_706219){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("phone","number","phone/number",1397184156)),untangled.ui.forms.dropdown_input.call(null,new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"home","home",-74557309),"Home"),untangled.ui.forms.option.call(null,new cljs.core.Keyword(null,"work","work",385770312),"Work")], null))], null);
});})(x706188_706219))
;


x706188_706219.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706188_706219.om$next$IQuery$query$arity$1 = ((function (x706188_706219){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156),untangled.ui.forms.form_key], null);
});})(x706188_706219))
;


x706188_706219.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x706188_706219.om$next$Ident$ident$arity$2 = ((function (x706188_706219){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.Forms__10_Full_Stack_Demo.phone_ident.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props));
});})(x706188_706219))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form = om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm);
untangled.ui.Forms__10_Full_Stack_Demo.set_number_to_edit = (function untangled$ui$Forms__10_Full_Stack_Demo$set_number_to_edit(state_map,phone_id){
return cljs.core.assoc_in.call(null,state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"number-to-edit","number-to-edit",1682446283)], null),untangled.ui.Forms__10_Full_Stack_Demo.phone_ident.call(null,phone_id));
});
untangled.ui.Forms__10_Full_Stack_Demo.initialize_form = (function untangled$ui$Forms__10_Full_Stack_Demo$initialize_form(state_map,form_class,form_ident){
return cljs.core.update_in.call(null,state_map,form_ident,(function (p1__706220_SHARP_){
return untangled.ui.forms.build_form.call(null,form_class,p1__706220_SHARP_);
}));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.Forms--10-Full-Stack-Demo","edit-phone","untangled.ui.Forms--10-Full-Stack-Demo/edit-phone",2832431,null),(function (env706221,_,p__706222){
var map__706223 = p__706222;
var map__706223__$1 = ((((!((map__706223 == null)))?((((map__706223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706223):map__706223);
var id = cljs.core.get.call(null,map__706223__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.merge.call(null,(function (){var map__706225 = env706221;
var map__706225__$1 = ((((!((map__706225 == null)))?((((map__706225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706225):map__706225);
var state = cljs.core.get.call(null,map__706225__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706225,map__706225__$1,state,map__706223,map__706223__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__706225,map__706225__$1,state,map__706223,map__706223__$1,id){
return (function (state_map){
return untangled.client.routing.update_routing_links.call(null,untangled.ui.Forms__10_Full_Stack_Demo.set_number_to_edit.call(null,untangled.ui.Forms__10_Full_Stack_Demo.initialize_form.call(null,state_map,untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm,untangled.ui.Forms__10_Full_Stack_Demo.phone_ident.call(null,id)),id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword("route","phone-editor","route/phone-editor",-44631224)], null));
});})(map__706225,map__706225__$1,state,map__706223,map__706223__$1,id))
);
});})(map__706225,map__706225__$1,state,map__706223,map__706223__$1,id))
], null);
})(),(function (){var env = env706221;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})());
}));
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneDisplayRow(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype = goog.object.clone(React.Component.prototype);
}

var x706244_706266 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype;
x706244_706266.componentWillUpdate = ((function (x706244_706266){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706269 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706270 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706269,next_ident__29856__auto___706270)){
var idxr__29857__auto___706272 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706272 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706272),((function (idxr__29857__auto___706272,ident__29855__auto___706269,next_ident__29856__auto___706270,this__29851__auto__,x706244_706266){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706269], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706270], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706272,ident__29855__auto___706269,next_ident__29856__auto___706270,this__29851__auto__,x706244_706266))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706244_706266))
;

x706244_706266.shouldComponentUpdate = ((function (x706244_706266){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706252 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706252);
} else {
return G__706252;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x706244_706266))
;

x706244_706266.componentWillUnmount = ((function (x706244_706266){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706244_706266))
;

x706244_706266.componentDidUpdate = ((function (x706244_706266){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706244_706266))
;

x706244_706266.isMounted = ((function (x706244_706266){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706244_706266))
;

x706244_706266.componentWillMount = ((function (x706244_706266){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706244_706266))
;

x706244_706266.render = ((function (x706244_706266){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706254 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706255 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706256 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706257 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706258 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706259 = om.next.props.call(null,this$);
var map__706259__$1 = ((((!((map__706259 == null)))?((((map__706259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706259):map__706259);
var id = cljs.core.get.call(null,map__706259__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var type = cljs.core.get.call(null,map__706259__$1,new cljs.core.Keyword("phone","type","phone/type",1541079546));
var number = cljs.core.get.call(null,map__706259__$1,new cljs.core.Keyword("phone","number","phone/number",1397184156));
return untangled.ui.layout.row.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__706259,map__706259__$1,id,type,number,_STAR_reconciler_STAR_706254,_STAR_depth_STAR_706255,_STAR_shared_STAR_706256,_STAR_instrument_STAR_706257,_STAR_parent_STAR_706258,this$,this__29850__auto__,x706244_706266){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.Forms--10-Full-Stack-Demo","edit-phone","untangled.ui.Forms--10-Full-Stack-Demo/edit-phone",2832431,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),(function (){var x__28584__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)))))));
});})(map__706259,map__706259__$1,id,type,number,_STAR_reconciler_STAR_706254,_STAR_depth_STAR_706255,_STAR_shared_STAR_706256,_STAR_instrument_STAR_706257,_STAR_parent_STAR_706258,this$,this__29850__auto__,x706244_706266))
], null),untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),cljs.core.name.call(null,type)),untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),number));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706258;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706257;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706256;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706255;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706254;
}});})(x706244_706266))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.om$isComponent = true;

var x706261_706357 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow;
/** @nocollapse */
x706261_706357.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706261_706357.om$next$IQuery$query$arity$1 = ((function (x706261_706357){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156)], null);
});})(x706261_706357))
;

/** @nocollapse */
x706261_706357.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706261_706357.om$next$Ident$ident$arity$2 = ((function (x706261_706357){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706261_706357))
;


var x706262_706379 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype;

x706262_706379.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706262_706379.om$next$IQuery$query$arity$1 = ((function (x706262_706379){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("phone","type","phone/type",1541079546),new cljs.core.Keyword("phone","number","phone/number",1397184156)], null);
});})(x706262_706379))
;


x706262_706379.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x706262_706379.om$next$Ident$ident$arity$2 = ((function (x706262_706379){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("phone","by-id","phone/by-id",-2109894411),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706262_706379))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_row = om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneEditor(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype = goog.object.clone(React.Component.prototype);
}

var x706420_706481 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype;
x706420_706481.componentWillUpdate = ((function (x706420_706481){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706490 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706491 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706490,next_ident__29856__auto___706491)){
var idxr__29857__auto___706499 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706499 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706499),((function (idxr__29857__auto___706499,ident__29855__auto___706490,next_ident__29856__auto___706491,this__29851__auto__,x706420_706481){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706490], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706491], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706499,ident__29855__auto___706490,next_ident__29856__auto___706491,this__29851__auto__,x706420_706481))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706420_706481))
;

x706420_706481.shouldComponentUpdate = ((function (x706420_706481){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706431 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706431);
} else {
return G__706431;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x706420_706481))
;

x706420_706481.componentWillUnmount = ((function (x706420_706481){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706420_706481))
;

x706420_706481.componentDidUpdate = ((function (x706420_706481){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706420_706481))
;

x706420_706481.isMounted = ((function (x706420_706481){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706420_706481))
;

x706420_706481.componentWillMount = ((function (x706420_706481){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706420_706481))
;

x706420_706481.render = ((function (x706420_706481){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706434 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706435 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706436 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706437 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706438 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706439 = om.next.props.call(null,this$);
var map__706439__$1 = ((((!((map__706439 == null)))?((((map__706439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706439):map__706439);
var number_to_edit = cljs.core.get.call(null,map__706439__$1,new cljs.core.Keyword(null,"number-to-edit","number-to-edit",1682446283));
var not_dirty_QMARK_ = cljs.core.not.call(null,untangled.ui.forms.dirty_QMARK_.call(null,number_to_edit));
var valid_QMARK_ = untangled.ui.forms.valid_QMARK_.call(null,untangled.ui.forms.validate_fields.call(null,number_to_edit));
var not_valid_QMARK_ = cljs.core.not.call(null,valid_QMARK_);
var save = ((function (map__706439,map__706439__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,_STAR_reconciler_STAR_706434,_STAR_depth_STAR_706435,_STAR_shared_STAR_706436,_STAR_instrument_STAR_706437,_STAR_parent_STAR_706438,this$,this__29850__auto__,x706420_706481){
return (function (evt){
if(cljs.core.truth_(valid_QMARK_)){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","commit-to-entity","untangled.ui.forms/commit-to-entity",-976115368,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471)),(function (){var x__28584__auto__ = number_to_edit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"remote","remote",-1593576576)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.client.routing","route-to","untangled.client.routing/route-to",2054911520,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("route","phone-list","route/phone-list",1489613823))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200)))))));
} else {
return null;
}
});})(map__706439,map__706439__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,_STAR_reconciler_STAR_706434,_STAR_depth_STAR_706435,_STAR_shared_STAR_706436,_STAR_instrument_STAR_706437,_STAR_parent_STAR_706438,this$,this__29850__auto__,x706420_706481))
;
var cancel_edit = ((function (map__706439,map__706439__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,save,_STAR_reconciler_STAR_706434,_STAR_depth_STAR_706435,_STAR_shared_STAR_706436,_STAR_instrument_STAR_706437,_STAR_parent_STAR_706438,this$,this__29850__auto__,x706420_706481){
return (function (evt){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.ui.forms","reset-from-entity","untangled.ui.forms/reset-from-entity",-2090060625,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"form-id","form-id",-158754567)),(function (){var x__28584__auto__ = untangled.ui.Forms__10_Full_Stack_Demo.phone_ident.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(number_to_edit));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.client.routing","route-to","untangled.client.routing/route-to",2054911520,null)),(function (){var x__28584__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("route","phone-list","route/phone-list",1489613823))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200)))))));
});})(map__706439,map__706439__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,save,_STAR_reconciler_STAR_706434,_STAR_depth_STAR_706435,_STAR_shared_STAR_706436,_STAR_instrument_STAR_706437,_STAR_parent_STAR_706438,this$,this__29850__auto__,x706420_706481))
;
return om.dom.div.call(null,null,om.dom.h1.call(null,null,"Edit Phone Number"),(cljs.core.truth_(number_to_edit)?untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form.call(null,number_to_edit):null),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cancel_edit], null),"Cancel"),untangled.ui.elements.ui_button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(not_valid_QMARK_) || (not_dirty_QMARK_),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),save], null),"Save")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706438;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706437;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706436;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706435;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706434;
}});})(x706420_706481))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.om$isComponent = true;

var x706472_706761 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor;
/** @nocollapse */
x706472_706761.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706472_706761.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706472_706761){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581)], null);
});})(x706472_706761))
;

/** @nocollapse */
x706472_706761.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706472_706761.om$next$IQuery$query$arity$1 = ((function (x706472_706761){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-to-edit","number-to-edit",1682446283),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm)], null)], null);
});})(x706472_706761))
;


var x706473_706795 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype;

x706473_706795.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706473_706795.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706473_706795){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581)], null);
});})(x706473_706795))
;


x706473_706795.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706473_706795.om$next$IQuery$query$arity$1 = ((function (x706473_706795){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number-to-edit","number-to-edit",1682446283),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm)], null)], null);
});})(x706473_706795))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor");
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneList !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneList = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneList(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype = goog.object.clone(React.Component.prototype);
}

var x706818_706890 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype;
x706818_706890.componentWillUpdate = ((function (x706818_706890){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706897 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706898 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706897,next_ident__29856__auto___706898)){
var idxr__29857__auto___706924 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706924 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706924),((function (idxr__29857__auto___706924,ident__29855__auto___706897,next_ident__29856__auto___706898,this__29851__auto__,x706818_706890){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706897], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706898], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706924,ident__29855__auto___706897,next_ident__29856__auto___706898,this__29851__auto__,x706818_706890))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706818_706890))
;

x706818_706890.shouldComponentUpdate = ((function (x706818_706890){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706822 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706822);
} else {
return G__706822;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x706818_706890))
;

x706818_706890.componentWillUnmount = ((function (x706818_706890){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706818_706890))
;

x706818_706890.componentDidUpdate = ((function (x706818_706890){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706818_706890))
;

x706818_706890.isMounted = ((function (x706818_706890){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706818_706890))
;

x706818_706890.componentWillMount = ((function (x706818_706890){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706818_706890))
;

x706818_706890.render = ((function (x706818_706890){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706840 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706841 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706842 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706843 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706844 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706845 = om.next.props.call(null,this$);
var map__706845__$1 = ((((!((map__706845 == null)))?((((map__706845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706845):map__706845);
var phone_numbers = cljs.core.get.call(null,map__706845__$1,new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942));
return om.dom.div.call(null,null,om.dom.h1.call(null,null,"Phone Numbers (click a row to edit)"),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),"Phone Type"),untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),"Phone Number")),untangled.client.data_fetch.lazily_loaded.call(null,((function (map__706845,map__706845__$1,phone_numbers,_STAR_reconciler_STAR_706840,_STAR_depth_STAR_706841,_STAR_shared_STAR_706842,_STAR_instrument_STAR_706843,_STAR_parent_STAR_706844,this$,this__29850__auto__,x706818_706890){
return (function (p1__706809_SHARP_){
return cljs.core.mapv.call(null,untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_row,p1__706809_SHARP_);
});})(map__706845,map__706845__$1,phone_numbers,_STAR_reconciler_STAR_706840,_STAR_depth_STAR_706841,_STAR_shared_STAR_706842,_STAR_instrument_STAR_706843,_STAR_parent_STAR_706844,this$,this__29850__auto__,x706818_706890))
,phone_numbers));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706844;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706843;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706842;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706841;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706840;
}});})(x706818_706890))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneList";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.om$isComponent = true;

var x706856_707034 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList;
/** @nocollapse */
x706856_707034.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706856_707034.om$next$IQuery$query$arity$1 = ((function (x706856_707034){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow)], null)], null);
});})(x706856_707034))
;

/** @nocollapse */
x706856_707034.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706856_707034.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706856_707034){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),cljs.core.PersistentVector.EMPTY], null);
});})(x706856_707034))
;


var x706858_707035 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype;

x706858_707035.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706858_707035.om$next$IQuery$query$arity$1 = ((function (x706858_707035){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow)], null)], null);
});})(x706858_707035))
;


x706858_707035.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706858_707035.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706858_707035){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322),new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942),cljs.core.PersistentVector.EMPTY], null);
});})(x706858_707035))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneList";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneList");
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union = (function untangled$ui$Forms__10_Full_Stack_Demo$TopLevelRouter_Union(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype = goog.object.clone(React.Component.prototype);
}

var x707041_707087 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype;
x707041_707087.componentWillUpdate = ((function (x707041_707087){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707091 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707092 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707091,next_ident__29856__auto___707092)){
var idxr__29857__auto___707096 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707096 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707096),((function (idxr__29857__auto___707096,ident__29855__auto___707091,next_ident__29856__auto___707092,this__29851__auto__,x707041_707087){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707091], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707092], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707096,ident__29855__auto___707091,next_ident__29856__auto___707092,this__29851__auto__,x707041_707087))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707041_707087))
;

x707041_707087.shouldComponentUpdate = ((function (x707041_707087){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707043 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707043);
} else {
return G__707043;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x707041_707087))
;

x707041_707087.componentWillUnmount = ((function (x707041_707087){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707041_707087))
;

x707041_707087.componentDidUpdate = ((function (x707041_707087){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707041_707087))
;

x707041_707087.isMounted = ((function (x707041_707087){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707041_707087))
;

x707041_707087.componentWillMount = ((function (x707041_707087){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707041_707087))
;

x707041_707087.render = ((function (x707041_707087){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707044 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707045 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707046 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707047 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707048 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var page__39253__auto__ = cljs.core.first.call(null,om.next.get_ident.call(null,this$));
var G__707050 = (((page__39253__auto__ instanceof cljs.core.Keyword))?page__39253__auto__.fqn:null);
switch (G__707050) {
case "screen/phone-list":
return om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),((function (G__707050,page__39253__auto__,_STAR_reconciler_STAR_707044,_STAR_depth_STAR_707045,_STAR_shared_STAR_707046,_STAR_instrument_STAR_707047,_STAR_parent_STAR_707048,this$,this__29850__auto__,x707041_707087){
return (function (props__39252__auto__){
return "PhoneList";
});})(G__707050,page__39253__auto__,_STAR_reconciler_STAR_707044,_STAR_depth_STAR_707045,_STAR_shared_STAR_707046,_STAR_instrument_STAR_707047,_STAR_parent_STAR_707048,this$,this__29850__auto__,x707041_707087))
], null)).call(null,om.next.props.call(null,this$));

break;
case "screen/phone-editor":
return om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),((function (G__707050,page__39253__auto__,_STAR_reconciler_STAR_707044,_STAR_depth_STAR_707045,_STAR_shared_STAR_707046,_STAR_instrument_STAR_707047,_STAR_parent_STAR_707048,this$,this__29850__auto__,x707041_707087){
return (function (props__39252__auto__){
return "PhoneEditor";
});})(G__707050,page__39253__auto__,_STAR_reconciler_STAR_707044,_STAR_depth_STAR_707045,_STAR_shared_STAR_707046,_STAR_instrument_STAR_707047,_STAR_parent_STAR_707048,this$,this__29850__auto__,x707041_707087))
], null)).call(null,om.next.props.call(null,this$));

break;
default:
return om.dom.div.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot route: Unknown Screen "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page__39253__auto__)].join(''));

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707048;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707047;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707046;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707045;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707044;
}});})(x707041_707087))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.om$isComponent = true;

var x707051_707223 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union;
/** @nocollapse */
x707051_707223.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707051_707223.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707051_707223){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,params);
});})(x707051_707223))
;

/** @nocollapse */
x707051_707223.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707051_707223.om$next$Ident$ident$arity$2 = ((function (x707051_707223){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"tab","tab",-559583621)], null);
});})(x707051_707223))
;

/** @nocollapse */
x707051_707223.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707051_707223.om$next$IQuery$query$arity$1 = ((function (x707051_707223){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneList),new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor)], null);
});})(x707051_707223))
;


var x707052_707236 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype;

x707052_707236.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707052_707236.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707052_707236){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,params);
});})(x707052_707236))
;


x707052_707236.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707052_707236.om$next$Ident$ident$arity$2 = ((function (x707052_707236){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"tab","tab",-559583621)], null);
});})(x707052_707236))
;


x707052_707236.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707052_707236.om$next$IQuery$query$arity$1 = ((function (x707052_707236){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneList),new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor)], null);
});})(x707052_707236))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union");
});

if(typeof untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter = (function untangled$ui$Forms__10_Full_Stack_Demo$TopLevelRouter(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype = goog.object.clone(React.Component.prototype);
}

var x707070_707288 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype;
x707070_707288.componentWillUpdate = ((function (x707070_707288){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707297 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707298 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707297,next_ident__29856__auto___707298)){
var idxr__29857__auto___707307 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707307 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707307),((function (idxr__29857__auto___707307,ident__29855__auto___707297,next_ident__29856__auto___707298,this__29851__auto__,x707070_707288){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707297], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707298], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707307,ident__29855__auto___707297,next_ident__29856__auto___707298,this__29851__auto__,x707070_707288))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707070_707288))
;

x707070_707288.shouldComponentUpdate = ((function (x707070_707288){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707073 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707073);
} else {
return G__707073;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x707070_707288))
;

x707070_707288.componentWillUnmount = ((function (x707070_707288){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707070_707288))
;

x707070_707288.componentDidUpdate = ((function (x707070_707288){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707070_707288))
;

x707070_707288.isMounted = ((function (x707070_707288){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707070_707288))
;

x707070_707288.componentWillMount = ((function (x707070_707288){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707070_707288))
;

x707070_707288.render = ((function (x707070_707288){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707074 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707075 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707076 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707077 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707078 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union).call(null,new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707078;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707077;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707076;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707075;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707074;
}});})(x707070_707288))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.om$isComponent = true;

var x707082_707388 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter;
/** @nocollapse */
x707082_707388.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707082_707388.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707082_707388){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null);
});})(x707082_707388))
;

/** @nocollapse */
x707082_707388.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707082_707388.om$next$Ident$ident$arity$2 = ((function (x707082_707388){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled.client.routing.routers","by-id","untangled.client.routing.routers/by-id",878971844),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null);
});})(x707082_707388))
;

/** @nocollapse */
x707082_707388.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707082_707388.om$next$IQuery$query$arity$1 = ((function (x707082_707388){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union)], null)], null);
});})(x707082_707388))
;


var x707085_707390 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype;

x707085_707390.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707085_707390.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707085_707390){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null);
});})(x707085_707390))
;


x707085_707390.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707085_707390.om$next$Ident$ident$arity$2 = ((function (x707085_707390){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled.client.routing.routers","by-id","untangled.client.routing.routers/by-id",878971844),new cljs.core.Keyword(null,"top-router","top-router",1966843717)], null);
});})(x707085_707390))
;


x707085_707390.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707085_707390.om$next$IQuery$query$arity$1 = ((function (x707085_707390){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union)], null)], null);
});})(x707085_707390))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router = om.next.factory.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter);
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.Root = (function untangled$ui$Forms__10_Full_Stack_Demo$Root(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x707411_707442 = untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype;
x707411_707442.componentWillUpdate = ((function (x707411_707442){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707457 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707458 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707457,next_ident__29856__auto___707458)){
var idxr__29857__auto___707466 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707466 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707466),((function (idxr__29857__auto___707466,ident__29855__auto___707457,next_ident__29856__auto___707458,this__29851__auto__,x707411_707442){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707457], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707458], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707466,ident__29855__auto___707457,next_ident__29856__auto___707458,this__29851__auto__,x707411_707442))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707411_707442))
;

x707411_707442.shouldComponentUpdate = ((function (x707411_707442){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707413 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707413);
} else {
return G__707413;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x707411_707442))
;

x707411_707442.componentWillUnmount = ((function (x707411_707442){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707411_707442))
;

x707411_707442.componentDidUpdate = ((function (x707411_707442){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707411_707442))
;

x707411_707442.isMounted = ((function (x707411_707442){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707411_707442))
;

x707411_707442.componentWillMount = ((function (x707411_707442){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707411_707442))
;

x707411_707442.render = ((function (x707411_707442){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707417 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707418 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707419 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707420 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707421 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__707422 = om.next.props.call(null,this$);
var map__707422__$1 = ((((!((map__707422 == null)))?((((map__707422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707422):map__707422);
var react_key = cljs.core.get.call(null,map__707422__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var main_ui_router = cljs.core.get.call(null,map__707422__$1,new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200));
return om.dom.div.call(null,({"key": react_key}),untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router.call(null,main_ui_router));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707421;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707420;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707419;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707418;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707417;
}});})(x707411_707442))
;


untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.Root;

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/Root";

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.om$isComponent = true;

var x707427_707516 = untangled.ui.Forms__10_Full_Stack_Demo.Root;
/** @nocollapse */
x707427_707516.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707427_707516.om$next$IQuery$query$arity$1 = ((function (x707427_707516){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter)], null)], null);
});})(x707427_707516))
;

/** @nocollapse */
x707427_707516.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707427_707516.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707427_707516){
return (function (cls,params){
var cls__$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200),untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter,cljs.core.PersistentArrayMap.EMPTY)], null),untangled.client.routing.routing_tree.call(null,untangled.client.routing.make_route.call(null,new cljs.core.Keyword("route","phone-list","route/phone-list",1489613823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction.call(null,new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),new cljs.core.Keyword(null,"tab","tab",-559583621)], null))], null)),untangled.client.routing.make_route.call(null,new cljs.core.Keyword("route","phone-editor","route/phone-editor",-44631224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction.call(null,new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581),new cljs.core.Keyword(null,"tab","tab",-559583621)], null))], null))));
});})(x707427_707516))
;


var x707428_707519 = untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype;

x707428_707519.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707428_707519.om$next$IQuery$query$arity$1 = ((function (x707428_707519){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200),om.next.get_query.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter)], null)], null);
});})(x707428_707519))
;


x707428_707519.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707428_707519.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707428_707519){
return (function (cls,params){
var cls__$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"main-ui-router","main-ui-router",-627687200),untangled.client.core.get_initial_state.call(null,untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter,cljs.core.PersistentArrayMap.EMPTY)], null),untangled.client.routing.routing_tree.call(null,untangled.client.routing.make_route.call(null,new cljs.core.Keyword("route","phone-list","route/phone-list",1489613823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction.call(null,new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),new cljs.core.Keyword(null,"tab","tab",-559583621)], null))], null)),untangled.client.routing.make_route.call(null,new cljs.core.Keyword("route","phone-editor","route/phone-editor",-44631224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction.call(null,new cljs.core.Keyword(null,"top-router","top-router",1966843717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-editor","screen/phone-editor",-1228927581),new cljs.core.Keyword(null,"tab","tab",-559583621)], null))], null))));
});})(x707428_707519))
;


untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/Root";

untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/Root");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__10_Full_Stack_Demo","untangled.ui.Forms__10_Full_Stack_Demo",-1622164113),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Full Stack Form Demo\n\n  This page talks you through a complete full-stack demo of an application that lets you\n  both examine data from the server (as a table of values) and click-to-edit those rows\n  using the forms support of this library.\n\n  The server is provided by a simulation the has a built-in 1 second delay so that you can watch\n  the interactions happen as if the network was very slow. We're using browser local\n  storage to make sure the changes get persisted, so you should see your edited\n  data on page reloads.\n\n  Note that we're simulating the server using a mock network plugin for the client that\n  loops back to 'server-like' code in the browser. As far as the client is concerned,\n  it is talking to a real remote, and as far as the remote code goes: it is essentially\n  what you could write on a real server to accomplish the same tasks.\n\n  We're implementing the server this way to make it easier to see the complete demo\n  without having to run a server.\n\n  This is as simple as creating an implementation of UntangledNetwork that looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defrecord MockNetwork [complete-app]\n  un/UntangledNetwork\n  (send [this edn ok err]\n    ; simulates a network delay:\n    (js/setTimeout\n      #(let [resp (server {} edn)]\n         (ok resp))\n      1000))\n  (start [this app]\n    (assoc this :complete-app app)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  where `server` is pretty much what you have to write on any Untangled Server: an Om parser with\n  a read and write handler:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(def server-parser (om/parser {:read read-handler :mutate write-handler}))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn server [env tx]\n  (server-parser (assoc env :state server-state) tx))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  ## Application Load\n\n  When the application loads it uses `data-fetch/load` to query the server for\n  `:all-numbers`.\n\n  ```\n  (df/load app :all-numbers PhoneDisplayRow {:target [:screen/phone-list :tab :phone-numbers]})\n  ```\n\n  We have a very simple database that looks like this on the server:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defonce server-state (atom {:all-numbers [(make-phone-number 1 :home \"555-1212\")\n                                           (make-phone-number 2 :home \"555-1213\")\n                                           (make-phone-number 3 :home \"555-1214\")\n                                           (make-phone-number 4 :home \"555-1215\")]}))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  So we can implement our server read emitter for the server parser very simply as:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn read-handler [{:keys [state]} k p]\n  (log/info \"SERVER query for \" k)\n  (case k\n    ; we only have one \"server\" query...get all of the phone numbers in the database\n    :all-numbers {:value (get @state :all-numbers)}\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  where we set up the parser environment to have the above server state atom as just `state`.\n\n  # The UI\n\n  We're using a UI router via defrouter to create two screens: A phone list and phone editor screen.\n\n  The basic UI tree looks like this:\n\n  ```\n             Root\n               |\n         TopLevelRouter\n           /          \\\n    PhoneEditor     PhoneList\n        |               / | \\\n    PhoneForm       PhoneDisplayRow...\n  ```\n\n  The UI starts out showing PhoneList. Clicking on an element leads to editing.\n\n  The code of the various elements looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn phone-ident [id] [:phone/by-id id])"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneDisplayRow\n  static om/IQuery\n  (query [this] [:ui/fetch-state :db/id :phone/type :phone/number])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [db/id phone/type phone/number]} (om/props this)]\n      (l/row {:onClick #(om/transact! this `[(edit-phone {:id ~id})\n                                             :ui/react-key])}\n        (l/col {:width 2} (name type)) (l/col {:width 2} number)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneList\n  static om/IQuery\n  (query [this] [:screen-type {:phone-numbers (om/get-query PhoneDisplayRow)}])\n  static uc/InitialAppState\n  ; make sure to include the :screen-type so the router can get the ident of this component\n  (initial-state [this params] {:screen-type   :screen/phone-list\n                                :phone-numbers []})\n  Object\n  (render [this]\n    (let [{:keys [phone-numbers]} (om/props this)]\n      (dom/div nil\n        (dom/h1 nil \"Phone Numbers (click a row to edit)\")\n        (l/row {} (l/col {:width 2} \"Phone Type\") (l/col {:width 2} \"Phone Number\"))\n        ; Show a loading message while we're waiting for the network load\n        (df/lazily-loaded #(mapv ui-phone-row %) phone-numbers)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneEditor\n  static uc/InitialAppState\n  ; make sure to include the :screen-type so the router can get the ident of this component\n  (initial-state [cls params] {:screen-type :screen/phone-editor})\n  static om/IQuery\n  ; NOTE: the query is asking for :number-to-edit. The edit mutation will fill this in before routing here.\n  (query [this] [f/form-root-key :screen-type {:number-to-edit (om/get-query PhoneForm)}])\n  Object\n  (render [this]\n    (let [{:keys [number-to-edit]} (om/props this)\n          ; dirty check is recursive and always up-to-date\n          not-dirty?  (not (f/dirty? number-to-edit))\n          ; validation is tri-state. Most fields are unchecked. Use pure functions to transform the\n          ; form to a validated state to check validity of all fields\n          valid?      (f/valid? (f/validate-fields number-to-edit))\n          not-valid?  (not valid?)\n          save        (fn [evt]\n                        (when valid?\n                          (om/transact! this `[(f/commit-to-entity {:form ~number-to-edit :remote true})\n                                               (r/route-to {:handler :route/phone-list})\n                                               ; ROUTING HAPPENS ELSEWHERE, make sure the UI for that router updates\n                                               :main-ui-router])))\n          cancel-edit (fn [evt]\n                        (om/transact! this `[(f/reset-from-entity {:form-id ~(phone-ident (:db/id number-to-edit))})\n                                             (r/route-to {:handler :route/phone-list})\n                                             ; ROUTING HAPPENS ELSEWHERE, make sure the UI for that router updates\n                                             :main-ui-router]))]\n      (dom/div nil\n        (dom/h1 nil \"Edit Phone Number\")\n        (when number-to-edit\n          (ui-phone-form number-to-edit))\n        (l/row {}\n          (ele/ui-button {:onClick cancel-edit} \"Cancel\")\n          (ele/ui-button {:disabled (or not-valid? not-dirty?)\n                          :onClick  save} \"Save\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defrouter TopLevelRouter :top-router\n  ; Note the ident function works against the router children, so they must have a :screen-type data field\n  (ident [this props] [(:screen-type props) :tab])\n  :screen/phone-list PhoneList\n  :screen/phone-editor PhoneEditor)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Root\n  static om/IQuery\n  (query [this] [:ui/react-key {:main-ui-router (om/get-query TopLevelRouter)}])\n  static uc/InitialAppState\n  (initial-state [cls params]\n    ; merge the routing tree into the app state\n    (merge\n      {:main-ui-router (uc/get-initial-state TopLevelRouter {})}\n      (r/routing-tree\n        (r/make-route :route/phone-list [(r/router-instruction :top-router [:screen/phone-list :tab])])\n        (r/make-route :route/phone-editor [(r/router-instruction :top-router [:screen/phone-editor :tab])]))))\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key main-ui-router]} (om/props this)]\n      (dom/div #js {:key react-key}\n        (ui-top-router main-ui-router)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  # The Mutations\n\n  Note: PhoneForm and PhoneDisplayRow share the same ident since they render two differing views\n  of the same entity in our database.\n\n  ## Editing\n\n  Since the phone numbers were loaded from raw data on a server, they are not form capable yet.\n\n  Thus, the application must do a few things in order for editing to work:\n\n  - It must add form state to the entity using `build-form`. We create a quick helper function\n  to do this against app state (the function `phone-ident` just returns the ident of a phone\n  number based on the simple ID):\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn- initialize-form [state-map form-class form-ident]\n  (update-in state-map form-ident #(f/build-form form-class %)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  - The form itself needs to link up to the thing it should edit. In order words we need to write\n  an ident into PhoneEditor to point it to the (newly initialized) PhoneForm instance. We write\n  another helper to do this against app state (as a map). Note the path is just the ident of the\n  PhoneEditor combined with the field name.\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn- set-number-to-edit [state-map phone-id]\n  (assoc-in state-map [:screen/phone-editor :tab :number-to-edit] (phone-ident phone-id)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  - Tell the top UI router to change UI routes. We can do this with the built-in `route-to` mutation.\n\n  Our final `edit-phone` mutation is thus:\n\n  ```\n  (defmutation edit-phone\n    [{:keys [id]}]\n    (action [{:keys [state]}]\n      (swap! state (fn [state-map]\n                     (-> state-map\n                       (initialize-form PhoneForm (phone-ident id))\n                       (set-number-to-edit id)\n                       (r/update-routing-links {:route-params {}\n                                                :handler      :route/phone-editor}))))))\n  ```\n\n  ## Working with the Form Data - Global Properties\n\n  Some fields will cause validation to run on the form as they are used, but in general you want to know\n  where the overall form (and subforms) stand. The `dirty?` check is always correct, since editing\n  a field causes an immediate update to this flag. Validation is not so easy. We don't want to\n  validate things that have not yet been reached (which might show error messages are required fields\n  the user has yet to reach). There is a mutation to run validation on the entire form, but this\n  is only what you want if you're trying to update the UI on the entire form to show validation\n  problems.\n\n  Instead, you will often treat the incoming form props as what they are: the current state of the form.\n  The `validate-fields` function is a pure function that takes a form and recursively runs validations on it,\n  returning a new version of the form that is marked. This has no effect on the UI, because you're doing this\n  in isolation from the UI. These are pure functions. No mutation is taking place. The result can then\n  be passed to `valid?` which will give you a boolean answer. You can then use this to do things like\n  make the Save button disable until they've finished working on the form.\n\n  ## Commit and Reset\n\n  Commit and reset are a built-in mutations.  They both have cljs and Om-composable version (the former\n  just calls transact for you). Often you'll want to combine other operations with a commit or\n  reset, as is shown in the form editor.\n\n  NOTE: Since our editor is asking for routing somewhere deep below the routing component\n  it must use follow-on reads (in this case on the :main-ui-router key) to ensure that the UI updates properly.\n\n  The Save button runs a commit operation with a remote flag. This causes the changes to not only be sync'd with\n  the form's pristine state, it also causes a network (in this case simulated) request to have the server update\n  its copy.\n\n  See the form documentation for the full possible items in such a request. For this example we'll describe\n  just the one we're supporting: Updates.\n\n  The parameters passed to the server on update have \n  a `:form/updates` key with a map whose keys are the idents of things that changed, and whose values are maps\n  of the field/value updates. For example:\n\n  ```\n  {:form/updates {[:phone/by-id 1] {:phone/number \"444-5421\"}}}\n  ```\n\n  would be sent to indicate that phone number with id 1 had just its `:phone/number` attribute changed to the\n  new value \"444-5421\".\n\n  So, a really naive implementation of this update handler looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn update-phone-number [id incoming-changes]\n  (log/info \"Server asked to updated phone \" id \" with changes: \" incoming-changes)\n  (swap! server-state update-in [:all-numbers (dec id)] merge incoming-changes)\n  ;; simulate saving to \"disk\"\n  (.setItem js/localStorage \"/\" (pr-str @server-state)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn write-handler [env k p]\n  (log/info \"SERVER mutation for \" k \" with params \" p)\n  (case k\n    `f/commit-to-entity (let [updates (-> p :form/updates)]\n                          (doseq [[[table id] changes] updates]\n                            (case table\n                              :phone/by-id (update-phone-number id changes)\n                              (log/info \"Server asked to update unknown entity \" table))))\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  # The Final Result\n\n  The server state and application are in the following two live cards:\n  "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__10_Full_Stack_Demo","untangled.ui.Forms__10_Full_Stack_Demo",-1622164113),new cljs.core.Keyword(null,"server-state-card","server-state-card",762429152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"server-state-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# This card shows the current server-side state (simulated)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state_atom,_){
return om.dom.div.call(null,null,"");
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),untangled.ui.Forms__10_Full_Stack_Demo.server_state,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__10_Full_Stack_Demo","untangled.ui.Forms__10_Full_Stack_Demo",-1622164113),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# The Application\n\n  You can enable data inspection on this card to see the client state as you work on the form.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.ui.Forms__10_Full_Stack_Demo.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__707629){
var map__707630 = p__707629;
var map__707630__$1 = ((((!((map__707630 == null)))?((((map__707630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707630):map__707630);
var app = map__707630__$1;
var reconciler = cljs.core.get.call(null,map__707630__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return untangled.client.data_fetch.load.call(null,app,new cljs.core.Keyword(null,"all-numbers","all-numbers",-1949249601),untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","phone-list","screen/phone-list",640041500),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"phone-numbers","phone-numbers",538985942)], null),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-type","screen-type",1673072322)], null)], null));
})),untangled.ui.Forms__10_Full_Stack_Demo.Root,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false], null)))], null));
})], null));

//# sourceMappingURL=Forms__10_Full_Stack_Demo.js.map?rel=1489703355258
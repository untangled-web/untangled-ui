// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.Forms__10_Full_Stack_Demo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,id,cljs.core.cst$kw$phone_SLASH_type,type,cljs.core.cst$kw$phone_SLASH_number,num], null);
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.server_state !== 'undefined'){
} else {
untangled.ui.Forms__10_Full_Stack_Demo.server_state = (function (){var G__51512 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$all_DASH_numbers,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number((1),cljs.core.cst$kw$home,"555-1212"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number((2),cljs.core.cst$kw$home,"555-1213"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number((3),cljs.core.cst$kw$home,"555-1214"),untangled.ui.Forms__10_Full_Stack_Demo.make_phone_number((4),cljs.core.cst$kw$home,"555-1215")], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__51512) : cljs.core.atom.call(null,G__51512));
})();
}
var old_state_51513 = cljs.reader.read_string([cljs.core.str.cljs$core$IFn$_invoke$arity$1(localStorage.getItem("/"))].join(''));
if(cljs.core.map_QMARK_(old_state_51513)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__10_Full_Stack_Demo.server_state,old_state_51513) : cljs.core.reset_BANG_.call(null,untangled.ui.Forms__10_Full_Stack_Demo.server_state,old_state_51513));
} else {
}
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number = (function untangled$ui$Forms__10_Full_Stack_Demo$update_phone_number(id,incoming_changes){
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Server asked to updated phone ",id," with changes: ",incoming_changes], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(untangled.ui.Forms__10_Full_Stack_Demo.server_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$all_DASH_numbers,(id - (1))], null),cljs.core.merge,cljs.core.array_seq([incoming_changes], 0));

return localStorage.setItem("/",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__10_Full_Stack_Demo.server_state) : cljs.core.deref.call(null,untangled.ui.Forms__10_Full_Stack_Demo.server_state))], 0)));
});
untangled.ui.Forms__10_Full_Stack_Demo.read_handler = (function untangled$ui$Forms__10_Full_Stack_Demo$read_handler(p__51514,k,p){
var map__51518 = p__51514;
var map__51518__$1 = ((((!((map__51518 == null)))?((((map__51518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51518):map__51518);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51518__$1,cljs.core.cst$kw$state);
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SERVER query for ",k], 0));

var G__51520 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__51520) {
case "all-numbers":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$all_DASH_numbers)], null);

break;
default:
return null;

}
});
untangled.ui.Forms__10_Full_Stack_Demo.write_handler = (function untangled$ui$Forms__10_Full_Stack_Demo$write_handler(env,k,p){
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SERVER mutation for ",k," with params ",p], 0));

var G__51559 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__51559)){
var updates = cljs.core.cst$kw$form_SLASH_updates.cljs$core$IFn$_invoke$arity$1(p);
var seq__51560 = cljs.core.seq(updates);
var chunk__51561 = null;
var count__51562 = (0);
var i__51563 = (0);
while(true){
if((i__51563 < count__51562)){
var vec__51564 = chunk__51561.cljs$core$IIndexed$_nth$arity$2(null,i__51563);
var vec__51567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51564,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51567,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51567,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51564,(1),null);
var G__51570_51596 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__51570_51596) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number(id,changes);

break;
default:
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Server asked to update unknown entity ",table], 0));

}

var G__51598 = seq__51560;
var G__51599 = chunk__51561;
var G__51600 = count__51562;
var G__51601 = (i__51563 + (1));
seq__51560 = G__51598;
chunk__51561 = G__51599;
count__51562 = G__51600;
i__51563 = G__51601;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__51560);
if(temp__6753__auto__){
var seq__51560__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51560__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__51560__$1);
var G__51602 = cljs.core.chunk_rest(seq__51560__$1);
var G__51603 = c__8413__auto__;
var G__51604 = cljs.core.count(c__8413__auto__);
var G__51605 = (0);
seq__51560 = G__51602;
chunk__51561 = G__51603;
count__51562 = G__51604;
i__51563 = G__51605;
continue;
} else {
var vec__51571 = cljs.core.first(seq__51560__$1);
var vec__51574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51571,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51571,(1),null);
var G__51577_51606 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__51577_51606) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number(id,changes);

break;
default:
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Server asked to update unknown entity ",table], 0));

}

var G__51608 = cljs.core.next(seq__51560__$1);
var G__51609 = null;
var G__51610 = (0);
var G__51611 = (0);
seq__51560 = G__51608;
chunk__51561 = G__51609;
count__51562 = G__51610;
i__51563 = G__51611;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$untangled$ui$forms_SLASH_commit_DASH_to_DASH_entity,G__51559)){
var updates = cljs.core.cst$kw$form_SLASH_updates.cljs$core$IFn$_invoke$arity$1(p);
var seq__51578 = cljs.core.seq(updates);
var chunk__51579 = null;
var count__51580 = (0);
var i__51581 = (0);
while(true){
if((i__51581 < count__51580)){
var vec__51582 = chunk__51579.cljs$core$IIndexed$_nth$arity$2(null,i__51581);
var vec__51585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51582,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51585,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51582,(1),null);
var G__51588_51612 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__51588_51612) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number(id,changes);

break;
default:
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Server asked to update unknown entity ",table], 0));

}

var G__51614 = seq__51578;
var G__51615 = chunk__51579;
var G__51616 = count__51580;
var G__51617 = (i__51581 + (1));
seq__51578 = G__51614;
chunk__51579 = G__51615;
count__51580 = G__51616;
i__51581 = G__51617;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__51578);
if(temp__6753__auto__){
var seq__51578__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51578__$1)){
var c__8413__auto__ = cljs.core.chunk_first(seq__51578__$1);
var G__51618 = cljs.core.chunk_rest(seq__51578__$1);
var G__51619 = c__8413__auto__;
var G__51620 = cljs.core.count(c__8413__auto__);
var G__51621 = (0);
seq__51578 = G__51618;
chunk__51579 = G__51619;
count__51580 = G__51620;
i__51581 = G__51621;
continue;
} else {
var vec__51589 = cljs.core.first(seq__51578__$1);
var vec__51592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589,(0),null);
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51592,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51592,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51589,(1),null);
var G__51595_51622 = (((table instanceof cljs.core.Keyword))?table.fqn:null);
switch (G__51595_51622) {
case "phone/by-id":
untangled.ui.Forms__10_Full_Stack_Demo.update_phone_number(id,changes);

break;
default:
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Server asked to update unknown entity ",table], 0));

}

var G__51624 = cljs.core.next(seq__51578__$1);
var G__51625 = null;
var G__51626 = (0);
var G__51627 = (0);
seq__51578 = G__51624;
chunk__51579 = G__51625;
count__51580 = G__51626;
i__51581 = G__51627;
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
untangled.ui.Forms__10_Full_Stack_Demo.server_parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,untangled.ui.Forms__10_Full_Stack_Demo.read_handler,cljs.core.cst$kw$mutate,untangled.ui.Forms__10_Full_Stack_Demo.write_handler], null));
untangled.ui.Forms__10_Full_Stack_Demo.server = (function untangled$ui$Forms__10_Full_Stack_Demo$server(env,tx){
var G__51630 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$state,untangled.ui.Forms__10_Full_Stack_Demo.server_state);
var G__51631 = tx;
return (untangled.ui.Forms__10_Full_Stack_Demo.server_parser.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.Forms__10_Full_Stack_Demo.server_parser.cljs$core$IFn$_invoke$arity$2(G__51630,G__51631) : untangled.ui.Forms__10_Full_Stack_Demo.server_parser.call(null,G__51630,G__51631));
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

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k51633,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__51635 = (((k51633 instanceof cljs.core.Keyword))?k51633.fqn:null);
switch (G__51635) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51633,else__8180__auto__);

}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.ui.Forms--10-Full-Stack-Demo.MockNetwork{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51632){
var self__ = this;
var G__51632__$1 = this;
return (new cljs.core.RecordIter((0),G__51632__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_app], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var G__51636 = ((function (this$__$1){
return (function (){
var resp = untangled.ui.Forms__10_Full_Stack_Demo.server(cljs.core.PersistentArrayMap.EMPTY,edn);
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(resp) : ok.call(null,resp));
});})(this$__$1))
;
var G__51637 = (1000);
return setTimeout(G__51636,G__51637);
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$complete_DASH_app,app);
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$complete_DASH_app,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__51632){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__51638 = cljs.core.keyword_identical_QMARK_;
var expr__51639 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__51641 = cljs.core.cst$kw$complete_DASH_app;
var G__51642 = expr__51639;
return (pred__51638.cljs$core$IFn$_invoke$arity$2 ? pred__51638.cljs$core$IFn$_invoke$arity$2(G__51641,G__51642) : pred__51638.call(null,G__51641,G__51642));
})())){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(G__51632,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__51632),null));
}
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__51632){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(self__.complete_app,G__51632,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$complete_DASH_app], null);
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.ui.Forms--10-Full-Stack-Demo/MockNetwork");
});

untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/MockNetwork");
});

untangled.ui.Forms__10_Full_Stack_Demo.__GT_MockNetwork = (function untangled$ui$Forms__10_Full_Stack_Demo$__GT_MockNetwork(complete_app){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(complete_app,null,null,null));
});

untangled.ui.Forms__10_Full_Stack_Demo.map__GT_MockNetwork = (function untangled$ui$Forms__10_Full_Stack_Demo$map__GT_MockNetwork(G__51634){
return (new untangled.ui.Forms__10_Full_Stack_Demo.MockNetwork(cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__51634),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51634,cljs.core.cst$kw$complete_DASH_app),null));
});

/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__10_Full_Stack_Demo.field_with_label = (function untangled$ui$Forms__10_Full_Stack_Demo$field_with_label(var_args){
var args51644 = [];
var len__8723__auto___51647 = arguments.length;
var i__8724__auto___51648 = (0);
while(true){
if((i__8724__auto___51648 < len__8723__auto___51647)){
args51644.push((arguments[i__8724__auto___51648]));

var G__51649 = (i__8724__auto___51648 + (1));
i__8724__auto___51648 = G__51649;
continue;
} else {
}
break;
}

var G__51646 = args51644.length;
switch (G__51646) {
case 4:
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51644.length)].join('')));

}
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$5(comp,form,name,label,null);
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name))?" has-error":""))].join('')}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-2", "htmlFor": name}),cljs.core.array_seq([label], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-10"}),cljs.core.array_seq([untangled.ui.forms.form_field(comp,form,name)], 0)),(cljs.core.truth_((function (){var and__7490__auto__ = validation_message;
if(cljs.core.truth_(and__7490__auto__)){
return untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name);
} else {
return and__7490__auto__;
}
})())?om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),cljs.core.array_seq([validation_message], 0)):null)], 0));
});

untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$lang$maxFixedArity = 5;

untangled.ui.Forms__10_Full_Stack_Demo.phone_ident = (function untangled$ui$Forms__10_Full_Stack_Demo$phone_ident(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,id], null);
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneForm(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype = goog.object.clone(React.Component.prototype);
}

var x51655_51671 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype;
x51655_51671.componentWillUpdate = ((function (x51655_51671){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51672 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51673 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51672,next_ident__10196__auto___51673)){
var idxr__10197__auto___51674 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51674 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51674),((function (idxr__10197__auto___51674,ident__10195__auto___51672,next_ident__10196__auto___51673,this__10191__auto__,x51655_51671){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51672], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51673], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51674,ident__10195__auto___51672,next_ident__10196__auto___51673,this__10191__auto__,x51655_51671))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51655_51671))
;

x51655_51671.shouldComponentUpdate = ((function (x51655_51671){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51657 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51657);
} else {
return G__51657;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51662 = this__10191__auto__.state;
var G__51663 = "omcljs$state";
return goog.object.get(G__51662,G__51663);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51655_51671))
;

x51655_51671.componentWillUnmount = ((function (x51655_51671){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51655_51671))
;

x51655_51671.componentDidUpdate = ((function (x51655_51671){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51655_51671))
;

x51655_51671.isMounted = ((function (x51655_51671){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51655_51671))
;

x51655_51671.componentWillMount = ((function (x51655_51671){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51655_51671))
;

x51655_51671.render = ((function (x51655_51671){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51664 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51665 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51666 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51667 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51668 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var form = om.next.props(this$);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,form,cljs.core.cst$kw$phone_SLASH_type,"Phone type:"),untangled.ui.Forms__10_Full_Stack_Demo.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,form,cljs.core.cst$kw$phone_SLASH_number,"Number:")], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51668;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51667;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51666;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51665;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51664;
}});})(x51655_51671))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype.om$isComponent = true;

var x51669_51675 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm;
/** @nocollapse */
x51669_51675.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51669_51675.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x51669_51675){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input(cljs.core.cst$kw$phone_SLASH_number),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x51669_51675))
;

/** @nocollapse */
x51669_51675.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51669_51675.om$next$IQuery$query$arity$1 = ((function (x51669_51675){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x51669_51675))
;

/** @nocollapse */
x51669_51675.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51669_51675.om$next$Ident$ident$arity$2 = ((function (x51669_51675){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.Forms__10_Full_Stack_Demo.phone_ident(cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x51669_51675))
;


var x51670_51676 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.prototype;

x51670_51676.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x51670_51676.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x51670_51676){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.text_input(cljs.core.cst$kw$phone_SLASH_number),untangled.ui.forms.dropdown_input(cljs.core.cst$kw$phone_SLASH_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.option(cljs.core.cst$kw$home,"Home"),untangled.ui.forms.option(cljs.core.cst$kw$work,"Work")], null))], null);
});})(x51670_51676))
;


x51670_51676.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51670_51676.om$next$IQuery$query$arity$1 = ((function (x51670_51676){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number,untangled.ui.forms.form_key], null);
});})(x51670_51676))
;


x51670_51676.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x51670_51676.om$next$Ident$ident$arity$2 = ((function (x51670_51676){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.Forms__10_Full_Stack_Demo.phone_ident(cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props));
});})(x51670_51676))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneForm");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm);
untangled.ui.Forms__10_Full_Stack_Demo.set_number_to_edit = (function untangled$ui$Forms__10_Full_Stack_Demo$set_number_to_edit(state_map,phone_id){
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_editor,cljs.core.cst$kw$tab,cljs.core.cst$kw$number_DASH_to_DASH_edit], null),untangled.ui.Forms__10_Full_Stack_Demo.phone_ident(phone_id));
});
untangled.ui.Forms__10_Full_Stack_Demo.initialize_form = (function untangled$ui$Forms__10_Full_Stack_Demo$initialize_form(state_map,form_class,form_ident){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,form_ident,(function (p1__51677_SHARP_){
return untangled.ui.forms.build_form(form_class,p1__51677_SHARP_);
}));
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$Forms_DASH__DASH_10_DASH_Full_DASH_Stack_DASH_Demo_SLASH_edit_DASH_phone,(function (env51678,_,p__51679){
var map__51680 = p__51679;
var map__51680__$1 = ((((!((map__51680 == null)))?((((map__51680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51680):map__51680);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51680__$1,cljs.core.cst$kw$id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__51682 = env51678;
var map__51682__$1 = ((((!((map__51682 == null)))?((((map__51682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51682):map__51682);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51682__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__51682,map__51682__$1,state,map__51680,map__51680__$1,id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__51682,map__51682__$1,state,map__51680,map__51680__$1,id){
return (function (state_map){
return untangled.client.routing.update_routing_links(untangled.ui.Forms__10_Full_Stack_Demo.set_number_to_edit(untangled.ui.Forms__10_Full_Stack_Demo.initialize_form(state_map,untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm,untangled.ui.Forms__10_Full_Stack_Demo.phone_ident(id)),id),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route_DASH_params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$handler,cljs.core.cst$kw$route_SLASH_phone_DASH_editor], null));
});})(map__51682,map__51682__$1,state,map__51680,map__51680__$1,id))
);
});})(map__51682,map__51682__$1,state,map__51680,map__51680__$1,id))
], null);
})(),(function (){var env = env51678;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneDisplayRow(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype = goog.object.clone(React.Component.prototype);
}

var x51688_51706 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype;
x51688_51706.componentWillUpdate = ((function (x51688_51706){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51707 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51708 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51707,next_ident__10196__auto___51708)){
var idxr__10197__auto___51709 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51709 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51709),((function (idxr__10197__auto___51709,ident__10195__auto___51707,next_ident__10196__auto___51708,this__10191__auto__,x51688_51706){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51707], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51708], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51709,ident__10195__auto___51707,next_ident__10196__auto___51708,this__10191__auto__,x51688_51706))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51688_51706))
;

x51688_51706.shouldComponentUpdate = ((function (x51688_51706){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51690 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51690);
} else {
return G__51690;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51695 = this__10191__auto__.state;
var G__51696 = "omcljs$state";
return goog.object.get(G__51695,G__51696);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51688_51706))
;

x51688_51706.componentWillUnmount = ((function (x51688_51706){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51688_51706))
;

x51688_51706.componentDidUpdate = ((function (x51688_51706){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51688_51706))
;

x51688_51706.isMounted = ((function (x51688_51706){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51688_51706))
;

x51688_51706.componentWillMount = ((function (x51688_51706){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51688_51706))
;

x51688_51706.render = ((function (x51688_51706){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51697 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51698 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51699 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51700 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51701 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51702 = om.next.props(this$);
var map__51702__$1 = ((((!((map__51702 == null)))?((((map__51702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51702):map__51702);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51702__$1,cljs.core.cst$kw$db_SLASH_id);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51702__$1,cljs.core.cst$kw$phone_SLASH_type);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51702__$1,cljs.core.cst$kw$phone_SLASH_number);
return untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (map__51702,map__51702__$1,id,type,number,_STAR_reconciler_STAR_51697,_STAR_depth_STAR_51698,_STAR_shared_STAR_51699,_STAR_instrument_STAR_51700,_STAR_parent_STAR_51701,this$,this__10190__auto__,x51688_51706){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$Forms_DASH__DASH_10_DASH_Full_DASH_Stack_DASH_Demo_SLASH_edit_DASH_phone),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$id),(function (){var x__8436__auto__ = id;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ui_SLASH_react_DASH_key))))));
});})(map__51702,map__51702__$1,id,type,number,_STAR_reconciler_STAR_51697,_STAR_depth_STAR_51698,_STAR_shared_STAR_51699,_STAR_instrument_STAR_51700,_STAR_parent_STAR_51701,this$,this__10190__auto__,x51688_51706))
], null),cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(2)], null),cljs.core.array_seq([cljs.core.name(type)], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(2)], null),cljs.core.array_seq([number], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51701;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51700;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51699;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51698;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51697;
}});})(x51688_51706))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype.om$isComponent = true;

var x51704_51710 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow;
/** @nocollapse */
x51704_51710.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51704_51710.om$next$IQuery$query$arity$1 = ((function (x51704_51710){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number], null);
});})(x51704_51710))
;

/** @nocollapse */
x51704_51710.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51704_51710.om$next$Ident$ident$arity$2 = ((function (x51704_51710){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51704_51710))
;


var x51705_51711 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.prototype;

x51705_51711.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51705_51711.om$next$IQuery$query$arity$1 = ((function (x51705_51711){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_fetch_DASH_state,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$phone_SLASH_type,cljs.core.cst$kw$phone_SLASH_number], null);
});})(x51705_51711))
;


x51705_51711.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x51705_51711.om$next$Ident$ident$arity$2 = ((function (x51705_51711){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51705_51711))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneDisplayRow");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_row = om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneEditor(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype = goog.object.clone(React.Component.prototype);
}

var x51716_51734 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype;
x51716_51734.componentWillUpdate = ((function (x51716_51734){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51735 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51736 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51735,next_ident__10196__auto___51736)){
var idxr__10197__auto___51737 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51737 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51737),((function (idxr__10197__auto___51737,ident__10195__auto___51735,next_ident__10196__auto___51736,this__10191__auto__,x51716_51734){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51735], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51736], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51737,ident__10195__auto___51735,next_ident__10196__auto___51736,this__10191__auto__,x51716_51734))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51716_51734))
;

x51716_51734.shouldComponentUpdate = ((function (x51716_51734){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51718 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51718);
} else {
return G__51718;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51723 = this__10191__auto__.state;
var G__51724 = "omcljs$state";
return goog.object.get(G__51723,G__51724);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51716_51734))
;

x51716_51734.componentWillUnmount = ((function (x51716_51734){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51716_51734))
;

x51716_51734.componentDidUpdate = ((function (x51716_51734){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51716_51734))
;

x51716_51734.isMounted = ((function (x51716_51734){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51716_51734))
;

x51716_51734.componentWillMount = ((function (x51716_51734){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51716_51734))
;

x51716_51734.render = ((function (x51716_51734){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51725 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51726 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51727 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51728 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51729 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51730 = om.next.props(this$);
var map__51730__$1 = ((((!((map__51730 == null)))?((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51730):map__51730);
var number_to_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,cljs.core.cst$kw$number_DASH_to_DASH_edit);
var not_dirty_QMARK_ = cljs.core.not(untangled.ui.forms.dirty_QMARK_(number_to_edit));
var valid_QMARK_ = untangled.ui.forms.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(untangled.ui.forms.validate_fields(number_to_edit));
var not_valid_QMARK_ = cljs.core.not(valid_QMARK_);
var save = ((function (map__51730,map__51730__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,_STAR_reconciler_STAR_51725,_STAR_depth_STAR_51726,_STAR_shared_STAR_51727,_STAR_instrument_STAR_51728,_STAR_parent_STAR_51729,this$,this__10190__auto__,x51716_51734){
return (function (evt){
if(cljs.core.truth_(valid_QMARK_)){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_commit_DASH_to_DASH_entity),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$form),(function (){var x__8436__auto__ = number_to_edit;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$remote),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$client$routing_SLASH_route_DASH_to),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$handler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$route_SLASH_phone_DASH_list)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$main_DASH_ui_DASH_router)], 0))))));
} else {
return null;
}
});})(map__51730,map__51730__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,_STAR_reconciler_STAR_51725,_STAR_depth_STAR_51726,_STAR_shared_STAR_51727,_STAR_instrument_STAR_51728,_STAR_parent_STAR_51729,this$,this__10190__auto__,x51716_51734))
;
var cancel_edit = ((function (map__51730,map__51730__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,save,_STAR_reconciler_STAR_51725,_STAR_depth_STAR_51726,_STAR_shared_STAR_51727,_STAR_instrument_STAR_51728,_STAR_parent_STAR_51729,this$,this__10190__auto__,x51716_51734){
return (function (evt){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$ui$forms_SLASH_reset_DASH_from_DASH_entity),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$form_DASH_id),(function (){var x__8436__auto__ = untangled.ui.Forms__10_Full_Stack_Demo.phone_ident(cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(number_to_edit));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$client$routing_SLASH_route_DASH_to),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$handler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$route_SLASH_phone_DASH_list)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$main_DASH_ui_DASH_router)], 0))))));
});})(map__51730,map__51730__$1,number_to_edit,not_dirty_QMARK_,valid_QMARK_,not_valid_QMARK_,save,_STAR_reconciler_STAR_51725,_STAR_depth_STAR_51726,_STAR_shared_STAR_51727,_STAR_instrument_STAR_51728,_STAR_parent_STAR_51729,this$,this__10190__auto__,x51716_51734))
;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Edit Phone Number"], 0)),(cljs.core.truth_(number_to_edit)?(untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form.cljs$core$IFn$_invoke$arity$1(number_to_edit) : untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_form.call(null,number_to_edit)):null),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,cancel_edit], null),cljs.core.array_seq(["Cancel"], 0)),untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,(not_valid_QMARK_) || (not_dirty_QMARK_),cljs.core.cst$kw$onClick,save], null),cljs.core.array_seq(["Save"], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51729;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51728;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51727;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51726;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51725;
}});})(x51716_51734))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype.om$isComponent = true;

var x51732_51738 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor;
/** @nocollapse */
x51732_51738.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51732_51738.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51732_51738){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen_DASH_type,cljs.core.cst$kw$screen_SLASH_phone_DASH_editor], null);
});})(x51732_51738))
;

/** @nocollapse */
x51732_51738.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51732_51738.om$next$IQuery$query$arity$1 = ((function (x51732_51738){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,cljs.core.cst$kw$screen_DASH_type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$number_DASH_to_DASH_edit,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm)], null)], null);
});})(x51732_51738))
;


var x51733_51739 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.prototype;

x51733_51739.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51733_51739.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51733_51739){
return (function (cls,params){
var cls__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen_DASH_type,cljs.core.cst$kw$screen_SLASH_phone_DASH_editor], null);
});})(x51733_51739))
;


x51733_51739.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51733_51739.om$next$IQuery$query$arity$1 = ((function (x51733_51739){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,cljs.core.cst$kw$screen_DASH_type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$number_DASH_to_DASH_edit,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneForm)], null)], null);
});})(x51733_51739))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneEditor");
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.PhoneList !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.PhoneList = (function untangled$ui$Forms__10_Full_Stack_Demo$PhoneList(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype = goog.object.clone(React.Component.prototype);
}

var x51745_51763 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype;
x51745_51763.componentWillUpdate = ((function (x51745_51763){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51764 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51765 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51764,next_ident__10196__auto___51765)){
var idxr__10197__auto___51766 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51766 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51766),((function (idxr__10197__auto___51766,ident__10195__auto___51764,next_ident__10196__auto___51765,this__10191__auto__,x51745_51763){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51764], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51766,ident__10195__auto___51764,next_ident__10196__auto___51765,this__10191__auto__,x51745_51763))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51745_51763))
;

x51745_51763.shouldComponentUpdate = ((function (x51745_51763){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51747 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51747);
} else {
return G__51747;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51752 = this__10191__auto__.state;
var G__51753 = "omcljs$state";
return goog.object.get(G__51752,G__51753);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51745_51763))
;

x51745_51763.componentWillUnmount = ((function (x51745_51763){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51745_51763))
;

x51745_51763.componentDidUpdate = ((function (x51745_51763){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51745_51763))
;

x51745_51763.isMounted = ((function (x51745_51763){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51745_51763))
;

x51745_51763.componentWillMount = ((function (x51745_51763){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51745_51763))
;

x51745_51763.render = ((function (x51745_51763){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51754 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51755 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51756 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51757 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51758 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51759 = om.next.props(this$);
var map__51759__$1 = ((((!((map__51759 == null)))?((((map__51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51759):map__51759);
var phone_numbers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51759__$1,cljs.core.cst$kw$phone_DASH_numbers);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([om.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Phone Numbers (click a row to edit)"], 0)),untangled.ui.layout.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(2)], null),cljs.core.array_seq(["Phone Type"], 0)),untangled.ui.layout.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(2)], null),cljs.core.array_seq(["Phone Number"], 0))], 0)),untangled.client.data_fetch.lazily_loaded(((function (map__51759,map__51759__$1,phone_numbers,_STAR_reconciler_STAR_51754,_STAR_depth_STAR_51755,_STAR_shared_STAR_51756,_STAR_instrument_STAR_51757,_STAR_parent_STAR_51758,this$,this__10190__auto__,x51745_51763){
return (function (p1__51740_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__10_Full_Stack_Demo.ui_phone_row,p1__51740_SHARP_);
});})(map__51759,map__51759__$1,phone_numbers,_STAR_reconciler_STAR_51754,_STAR_depth_STAR_51755,_STAR_shared_STAR_51756,_STAR_instrument_STAR_51757,_STAR_parent_STAR_51758,this$,this__10190__auto__,x51745_51763))
,phone_numbers)], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51758;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51757;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51756;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51755;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51754;
}});})(x51745_51763))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneList";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype.om$isComponent = true;

var x51761_51767 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList;
/** @nocollapse */
x51761_51767.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51761_51767.om$next$IQuery$query$arity$1 = ((function (x51761_51767){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone_DASH_numbers,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow)], null)], null);
});})(x51761_51767))
;

/** @nocollapse */
x51761_51767.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51761_51767.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51761_51767){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen_DASH_type,cljs.core.cst$kw$screen_SLASH_phone_DASH_list,cljs.core.cst$kw$phone_DASH_numbers,cljs.core.PersistentVector.EMPTY], null);
});})(x51761_51767))
;


var x51762_51768 = untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.prototype;

x51762_51768.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51762_51768.om$next$IQuery$query$arity$1 = ((function (x51762_51768){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_type,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phone_DASH_numbers,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow)], null)], null);
});})(x51762_51768))
;


x51762_51768.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51762_51768.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51762_51768){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen_DASH_type,cljs.core.cst$kw$screen_SLASH_phone_DASH_list,cljs.core.cst$kw$phone_DASH_numbers,cljs.core.PersistentVector.EMPTY], null);
});})(x51762_51768))
;


untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/PhoneList";

untangled.ui.Forms__10_Full_Stack_Demo.PhoneList.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/PhoneList");
});
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union = (function untangled$ui$Forms__10_Full_Stack_Demo$TopLevelRouter_Union(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype = goog.object.clone(React.Component.prototype);
}

var x51773_51810 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype;
x51773_51810.componentWillUpdate = ((function (x51773_51810){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51811 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51812 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51811,next_ident__10196__auto___51812)){
var idxr__10197__auto___51813 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51813 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51813),((function (idxr__10197__auto___51813,ident__10195__auto___51811,next_ident__10196__auto___51812,this__10191__auto__,x51773_51810){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51811], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51812], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51813,ident__10195__auto___51811,next_ident__10196__auto___51812,this__10191__auto__,x51773_51810))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51773_51810))
;

x51773_51810.shouldComponentUpdate = ((function (x51773_51810){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51775 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51775);
} else {
return G__51775;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51780 = this__10191__auto__.state;
var G__51781 = "omcljs$state";
return goog.object.get(G__51780,G__51781);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51773_51810))
;

x51773_51810.componentWillUnmount = ((function (x51773_51810){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51773_51810))
;

x51773_51810.componentDidUpdate = ((function (x51773_51810){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51773_51810))
;

x51773_51810.isMounted = ((function (x51773_51810){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51773_51810))
;

x51773_51810.componentWillMount = ((function (x51773_51810){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51773_51810))
;

x51773_51810.render = ((function (x51773_51810){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51782 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51783 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51784 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51785 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51786 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var page__51463__auto__ = cljs.core.first(om.next.get_ident(this$));
var G__51787 = (((page__51463__auto__ instanceof cljs.core.Keyword))?page__51463__auto__.fqn:null);
switch (G__51787) {
case "screen/phone-list":
return om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,((function (G__51787,page__51463__auto__,_STAR_reconciler_STAR_51782,_STAR_depth_STAR_51783,_STAR_shared_STAR_51784,_STAR_instrument_STAR_51785,_STAR_parent_STAR_51786,this$,this__10190__auto__,x51773_51810){
return (function (props__51462__auto__){
return "PhoneList";
});})(G__51787,page__51463__auto__,_STAR_reconciler_STAR_51782,_STAR_depth_STAR_51783,_STAR_shared_STAR_51784,_STAR_instrument_STAR_51785,_STAR_parent_STAR_51786,this$,this__10190__auto__,x51773_51810))
], null)).call(null,om.next.props(this$));

break;
case "screen/phone-editor":
return om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,((function (G__51787,page__51463__auto__,_STAR_reconciler_STAR_51782,_STAR_depth_STAR_51783,_STAR_shared_STAR_51784,_STAR_instrument_STAR_51785,_STAR_parent_STAR_51786,this$,this__10190__auto__,x51773_51810){
return (function (props__51462__auto__){
return "PhoneEditor";
});})(G__51787,page__51463__auto__,_STAR_reconciler_STAR_51782,_STAR_depth_STAR_51783,_STAR_shared_STAR_51784,_STAR_instrument_STAR_51785,_STAR_parent_STAR_51786,this$,this__10190__auto__,x51773_51810))
], null)).call(null,om.next.props(this$));

break;
default:
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot route: Unknown Screen "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(page__51463__auto__)].join('')], 0));

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51786;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51785;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51784;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51783;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51782;
}});})(x51773_51810))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype.om$isComponent = true;

var x51788_51815 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union;
/** @nocollapse */
x51788_51815.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51788_51815.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51788_51815){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,params);
});})(x51788_51815))
;

/** @nocollapse */
x51788_51815.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51788_51815.om$next$Ident$ident$arity$2 = ((function (x51788_51815){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_type.cljs$core$IFn$_invoke$arity$1(props),cljs.core.cst$kw$tab], null);
});})(x51788_51815))
;

/** @nocollapse */
x51788_51815.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51788_51815.om$next$IQuery$query$arity$1 = ((function (x51788_51815){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen_SLASH_phone_DASH_list,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneList),cljs.core.cst$kw$screen_SLASH_phone_DASH_editor,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor)], null);
});})(x51788_51815))
;


var x51789_51816 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.prototype;

x51789_51816.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51789_51816.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51789_51816){
return (function (clz,params){
var clz__$1 = this;
return untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.PhoneList,params);
});})(x51789_51816))
;


x51789_51816.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x51789_51816.om$next$Ident$ident$arity$2 = ((function (x51789_51816){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_type.cljs$core$IFn$_invoke$arity$1(props),cljs.core.cst$kw$tab], null);
});})(x51789_51816))
;


x51789_51816.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51789_51816.om$next$IQuery$query$arity$1 = ((function (x51789_51816){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen_SLASH_phone_DASH_list,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneList),cljs.core.cst$kw$screen_SLASH_phone_DASH_editor,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.PhoneEditor)], null);
});})(x51789_51816))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter-Union");
});

if(typeof untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter = (function untangled$ui$Forms__10_Full_Stack_Demo$TopLevelRouter(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype = goog.object.clone(React.Component.prototype);
}

var x51794_51817 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype;
x51794_51817.componentWillUpdate = ((function (x51794_51817){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51818 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51819 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51818,next_ident__10196__auto___51819)){
var idxr__10197__auto___51820 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51820 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51820),((function (idxr__10197__auto___51820,ident__10195__auto___51818,next_ident__10196__auto___51819,this__10191__auto__,x51794_51817){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51818], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51820,ident__10195__auto___51818,next_ident__10196__auto___51819,this__10191__auto__,x51794_51817))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51794_51817))
;

x51794_51817.shouldComponentUpdate = ((function (x51794_51817){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51796 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51796);
} else {
return G__51796;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51801 = this__10191__auto__.state;
var G__51802 = "omcljs$state";
return goog.object.get(G__51801,G__51802);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51794_51817))
;

x51794_51817.componentWillUnmount = ((function (x51794_51817){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51794_51817))
;

x51794_51817.componentDidUpdate = ((function (x51794_51817){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51794_51817))
;

x51794_51817.isMounted = ((function (x51794_51817){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51794_51817))
;

x51794_51817.componentWillMount = ((function (x51794_51817){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51794_51817))
;

x51794_51817.render = ((function (x51794_51817){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51803 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51804 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51805 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51806 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51807 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{return om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union).call(null,cljs.core.cst$kw$current_DASH_route.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51807;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51806;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51805;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51804;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51803;
}});})(x51794_51817))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype.om$isComponent = true;

var x51808_51821 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter;
/** @nocollapse */
x51808_51821.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51808_51821.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51808_51821){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_route,untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$id,cljs.core.cst$kw$top_DASH_router], null);
});})(x51808_51821))
;

/** @nocollapse */
x51808_51821.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51808_51821.om$next$Ident$ident$arity$2 = ((function (x51808_51821){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$client$routing$routers_SLASH_by_DASH_id,cljs.core.cst$kw$top_DASH_router], null);
});})(x51808_51821))
;

/** @nocollapse */
x51808_51821.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51808_51821.om$next$IQuery$query$arity$1 = ((function (x51808_51821){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$current_DASH_route,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union)], null)], null);
});})(x51808_51821))
;


var x51809_51822 = untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.prototype;

x51809_51822.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51809_51822.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51809_51822){
return (function (clz,params){
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_route,untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$id,cljs.core.cst$kw$top_DASH_router], null);
});})(x51809_51822))
;


x51809_51822.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x51809_51822.om$next$Ident$ident$arity$2 = ((function (x51809_51822){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$client$routing$routers_SLASH_by_DASH_id,cljs.core.cst$kw$top_DASH_router], null);
});})(x51809_51822))
;


x51809_51822.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51809_51822.om$next$IQuery$query$arity$1 = ((function (x51809_51822){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$current_DASH_route,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter_Union)], null)], null);
});})(x51809_51822))
;


untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter";

untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/TopLevelRouter");
});
untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter);
if(typeof untangled.ui.Forms__10_Full_Stack_Demo.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__10_Full_Stack_Demo.Root = (function untangled$ui$Forms__10_Full_Stack_Demo$Root(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x51827_51845 = untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype;
x51827_51845.componentWillUpdate = ((function (x51827_51845){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51846 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51847 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51846,next_ident__10196__auto___51847)){
var idxr__10197__auto___51848 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51848 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51848),((function (idxr__10197__auto___51848,ident__10195__auto___51846,next_ident__10196__auto___51847,this__10191__auto__,x51827_51845){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51846], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51847], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51848,ident__10195__auto___51846,next_ident__10196__auto___51847,this__10191__auto__,x51827_51845))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51827_51845))
;

x51827_51845.shouldComponentUpdate = ((function (x51827_51845){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51829 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51829);
} else {
return G__51829;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51834 = this__10191__auto__.state;
var G__51835 = "omcljs$state";
return goog.object.get(G__51834,G__51835);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51827_51845))
;

x51827_51845.componentWillUnmount = ((function (x51827_51845){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51827_51845))
;

x51827_51845.componentDidUpdate = ((function (x51827_51845){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51827_51845))
;

x51827_51845.isMounted = ((function (x51827_51845){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51827_51845))
;

x51827_51845.componentWillMount = ((function (x51827_51845){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51827_51845))
;

x51827_51845.render = ((function (x51827_51845){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51836 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51837 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51838 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51839 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51840 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51841 = om.next.props(this$);
var map__51841__$1 = ((((!((map__51841 == null)))?((((map__51841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51841):map__51841);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51841__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var main_ui_router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51841__$1,cljs.core.cst$kw$main_DASH_ui_DASH_router);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.array_seq([(untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router.cljs$core$IFn$_invoke$arity$1(main_ui_router) : untangled.ui.Forms__10_Full_Stack_Demo.ui_top_router.call(null,main_ui_router))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51840;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51839;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51838;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51837;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51836;
}});})(x51827_51845))
;


untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.constructor = untangled.ui.Forms__10_Full_Stack_Demo.Root;

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.constructor.displayName = "untangled.ui.Forms--10-Full-Stack-Demo/Root";

untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype.om$isComponent = true;

var x51843_51849 = untangled.ui.Forms__10_Full_Stack_Demo.Root;
/** @nocollapse */
x51843_51849.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51843_51849.om$next$IQuery$query$arity$1 = ((function (x51843_51849){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main_DASH_ui_DASH_router,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter)], null)], null);
});})(x51843_51849))
;

/** @nocollapse */
x51843_51849.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51843_51849.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51843_51849){
return (function (cls,params){
var cls__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main_DASH_ui_DASH_router,untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter,cljs.core.PersistentArrayMap.EMPTY)], null),untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([untangled.client.routing.make_route(cljs.core.cst$kw$route_SLASH_phone_DASH_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction(cljs.core.cst$kw$top_DASH_router,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_list,cljs.core.cst$kw$tab], null))], null)),untangled.client.routing.make_route(cljs.core.cst$kw$route_SLASH_phone_DASH_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction(cljs.core.cst$kw$top_DASH_router,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_editor,cljs.core.cst$kw$tab], null))], null))], 0))], 0));
});})(x51843_51849))
;


var x51844_51850 = untangled.ui.Forms__10_Full_Stack_Demo.Root.prototype;

x51844_51850.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51844_51850.om$next$IQuery$query$arity$1 = ((function (x51844_51850){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main_DASH_ui_DASH_router,om.next.get_query(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter)], null)], null);
});})(x51844_51850))
;


x51844_51850.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x51844_51850.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x51844_51850){
return (function (cls,params){
var cls__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$main_DASH_ui_DASH_router,untangled.client.core.get_initial_state(untangled.ui.Forms__10_Full_Stack_Demo.TopLevelRouter,cljs.core.PersistentArrayMap.EMPTY)], null),untangled.client.routing.routing_tree.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([untangled.client.routing.make_route(cljs.core.cst$kw$route_SLASH_phone_DASH_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction(cljs.core.cst$kw$top_DASH_router,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_list,cljs.core.cst$kw$tab], null))], null)),untangled.client.routing.make_route(cljs.core.cst$kw$route_SLASH_phone_DASH_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.routing.router_instruction(cljs.core.cst$kw$top_DASH_router,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_editor,cljs.core.cst$kw$tab], null))], null))], 0))], 0));
});})(x51844_51850))
;


untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$type = true;

untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$ctorStr = "untangled.ui.Forms--10-Full-Stack-Demo/Root";

untangled.ui.Forms__10_Full_Stack_Demo.Root.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--10-Full-Stack-Demo/Root");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__10_Full_Stack_Demo,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Full Stack Form Demo\n\n  This page talks you through a complete full-stack demo of an application that lets you\n  both examine data from the server (as a table of values) and click-to-edit those rows\n  using the forms support of this library.\n\n  The server is provided by a simulation the has a built-in 1 second delay so that you can watch\n  the interactions happen as if the network was very slow. We're using browser local\n  storage to make sure the changes get persisted, so you should see your edited\n  data on page reloads.\n\n  Note that we're simulating the server using a mock network plugin for the client that\n  loops back to 'server-like' code in the browser. As far as the client is concerned,\n  it is talking to a real remote, and as far as the remote code goes: it is essentially\n  what you could write on a real server to accomplish the same tasks.\n\n  We're implementing the server this way to make it easier to see the complete demo\n  without having to run a server.\n\n  This is as simple as creating an implementation of UntangledNetwork that looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defrecord MockNetwork [complete-app]\n  un/UntangledNetwork\n  (send [this edn ok err]\n    ; simulates a network delay:\n    (js/setTimeout\n      #(let [resp (server {} edn)]\n         (ok resp))\n      1000))\n  (start [this app]\n    (assoc this :complete-app app)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  where `server` is pretty much what you have to write on any Untangled Server: an Om parser with\n  a read and write handler:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(def server-parser (om/parser {:read read-handler :mutate write-handler}))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn server [env tx]\n  (server-parser (assoc env :state server-state) tx))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  ## Application Load\n\n  When the application loads it uses `data-fetch/load` to query the server for\n  `:all-numbers`.\n\n  ```\n  (df/load app :all-numbers PhoneDisplayRow {:target [:screen/phone-list :tab :phone-numbers]})\n  ```\n\n  We have a very simple database that looks like this on the server:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defonce server-state (atom {:all-numbers [(make-phone-number 1 :home \"555-1212\")\n                                           (make-phone-number 2 :home \"555-1213\")\n                                           (make-phone-number 3 :home \"555-1214\")\n                                           (make-phone-number 4 :home \"555-1215\")]}))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  So we can implement our server read emitter for the server parser very simply as:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn read-handler [{:keys [state]} k p]\n  (log/info \"SERVER query for \" k)\n  (case k\n    ; we only have one \"server\" query...get all of the phone numbers in the database\n    :all-numbers {:value (get @state :all-numbers)}\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  where we set up the parser environment to have the above server state atom as just `state`.\n\n  # The UI\n\n  We're using a UI router via defrouter to create two screens: A phone list and phone editor screen.\n\n  The basic UI tree looks like this:\n\n  ```\n             Root\n               |\n         TopLevelRouter\n           /          \\\n    PhoneEditor     PhoneList\n        |               / | \\\n    PhoneForm       PhoneDisplayRow...\n  ```\n\n  The UI starts out showing PhoneList. Clicking on an element leads to editing.\n\n  The code of the various elements looks like this:\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn phone-ident [id] [:phone/by-id id])"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneDisplayRow\n  static om/IQuery\n  (query [this] [:ui/fetch-state :db/id :phone/type :phone/number])\n  static om/Ident\n  (ident [this props] [:phone/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [db/id phone/type phone/number]} (om/props this)]\n      (l/row {:onClick #(om/transact! this `[(edit-phone {:id ~id})\n                                             :ui/react-key])}\n        (l/col {:width 2} (name type)) (l/col {:width 2} number)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneList\n  static om/IQuery\n  (query [this] [:screen-type {:phone-numbers (om/get-query PhoneDisplayRow)}])\n  static uc/InitialAppState\n  ; make sure to include the :screen-type so the router can get the ident of this component\n  (initial-state [this params] {:screen-type   :screen/phone-list\n                                :phone-numbers []})\n  Object\n  (render [this]\n    (let [{:keys [phone-numbers]} (om/props this)]\n      (dom/div nil\n        (dom/h1 nil \"Phone Numbers (click a row to edit)\")\n        (l/row {} (l/col {:width 2} \"Phone Type\") (l/col {:width 2} \"Phone Number\"))\n        ; Show a loading message while we're waiting for the network load\n        (df/lazily-loaded #(mapv ui-phone-row %) phone-numbers)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once PhoneEditor\n  static uc/InitialAppState\n  ; make sure to include the :screen-type so the router can get the ident of this component\n  (initial-state [cls params] {:screen-type :screen/phone-editor})\n  static om/IQuery\n  ; NOTE: the query is asking for :number-to-edit. The edit mutation will fill this in before routing here.\n  (query [this] [f/form-root-key :screen-type {:number-to-edit (om/get-query PhoneForm)}])\n  Object\n  (render [this]\n    (let [{:keys [number-to-edit]} (om/props this)\n          ; dirty check is recursive and always up-to-date\n          not-dirty?  (not (f/dirty? number-to-edit))\n          ; validation is tri-state. Most fields are unchecked. Use pure functions to transform the\n          ; form to a validated state to check validity of all fields\n          valid?      (f/valid? (f/validate-fields number-to-edit))\n          not-valid?  (not valid?)\n          save        (fn [evt]\n                        (when valid?\n                          (om/transact! this `[(f/commit-to-entity {:form ~number-to-edit :remote true})\n                                               (r/route-to {:handler :route/phone-list})\n                                               ; ROUTING HAPPENS ELSEWHERE, make sure the UI for that router updates\n                                               :main-ui-router])))\n          cancel-edit (fn [evt]\n                        (om/transact! this `[(f/reset-from-entity {:form-id ~(phone-ident (:db/id number-to-edit))})\n                                             (r/route-to {:handler :route/phone-list})\n                                             ; ROUTING HAPPENS ELSEWHERE, make sure the UI for that router updates\n                                             :main-ui-router]))]\n      (dom/div nil\n        (dom/h1 nil \"Edit Phone Number\")\n        (when number-to-edit\n          (ui-phone-form number-to-edit))\n        (l/row {}\n          (ele/ui-button {:onClick cancel-edit} \"Cancel\")\n          (ele/ui-button {:disabled (or not-valid? not-dirty?)\n                          :onClick  save} \"Save\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defrouter TopLevelRouter :top-router\n  ; Note the ident function works against the router children, so they must have a :screen-type data field\n  (ident [this props] [(:screen-type props) :tab])\n  :screen/phone-list PhoneList\n  :screen/phone-editor PhoneEditor)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Root\n  static om/IQuery\n  (query [this] [:ui/react-key {:main-ui-router (om/get-query TopLevelRouter)}])\n  static uc/InitialAppState\n  (initial-state [cls params]\n    ; merge the routing tree into the app state\n    (merge\n      {:main-ui-router (uc/get-initial-state TopLevelRouter {})}\n      (r/routing-tree\n        (r/make-route :route/phone-list [(r/router-instruction :top-router [:screen/phone-list :tab])])\n        (r/make-route :route/phone-editor [(r/router-instruction :top-router [:screen/phone-editor :tab])]))))\n  Object\n  (render [this]\n    (let [{:keys [ui/react-key main-ui-router]} (om/props this)]\n      (dom/div #js {:key react-key}\n        (ui-top-router main-ui-router)))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  # The Mutations\n\n  Note: PhoneForm and PhoneDisplayRow share the same ident since they render two differing views\n  of the same entity in our database.\n\n  ## Editing\n\n  Since the phone numbers were loaded from raw data on a server, they are not form capable yet.\n\n  Thus, the application must do a few things in order for editing to work:\n\n  - It must add form state to the entity using `build-form`. We create a quick helper function\n  to do this against app state (the function `phone-ident` just returns the ident of a phone\n  number based on the simple ID):\n\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn- initialize-form [state-map form-class form-ident]\n  (update-in state-map form-ident #(f/build-form form-class %)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  - The form itself needs to link up to the thing it should edit. In order words we need to write\n  an ident into PhoneEditor to point it to the (newly initialized) PhoneForm instance. We write\n  another helper to do this against app state (as a map). Note the path is just the ident of the\n  PhoneEditor combined with the field name.\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn- set-number-to-edit [state-map phone-id]\n  (assoc-in state-map [:screen/phone-editor :tab :number-to-edit] (phone-ident phone-id)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  - Tell the top UI router to change UI routes. We can do this with the built-in `route-to` mutation.\n\n  Our final `edit-phone` mutation is thus:\n\n  ```\n  (defmutation edit-phone\n    [{:keys [id]}]\n    (action [{:keys [state]}]\n      (swap! state (fn [state-map]\n                     (-> state-map\n                       (initialize-form PhoneForm (phone-ident id))\n                       (set-number-to-edit id)\n                       (r/update-routing-links {:route-params {}\n                                                :handler      :route/phone-editor}))))))\n  ```\n\n  ## Working with the Form Data - Global Properties\n\n  Some fields will cause validation to run on the form as they are used, but in general you want to know\n  where the overall form (and subforms) stand. The `dirty?` check is always correct, since editing\n  a field causes an immediate update to this flag. Validation is not so easy. We don't want to\n  validate things that have not yet been reached (which might show error messages are required fields\n  the user has yet to reach). There is a mutation to run validation on the entire form, but this\n  is only what you want if you're trying to update the UI on the entire form to show validation\n  problems.\n\n  Instead, you will often treat the incoming form props as what they are: the current state of the form.\n  The `validate-fields` function is a pure function that takes a form and recursively runs validations on it,\n  returning a new version of the form that is marked. This has no effect on the UI, because you're doing this\n  in isolation from the UI. These are pure functions. No mutation is taking place. The result can then\n  be passed to `valid?` which will give you a boolean answer. You can then use this to do things like\n  make the Save button disable until they've finished working on the form.\n\n  ## Commit and Reset\n\n  Commit and reset are a built-in mutations.  They both have cljs and Om-composable version (the former\n  just calls transact for you). Often you'll want to combine other operations with a commit or\n  reset, as is shown in the form editor.\n\n  NOTE: Since our editor is asking for routing somewhere deep below the routing component\n  it must use follow-on reads (in this case on the :main-ui-router key) to ensure that the UI updates properly.\n\n  The Save button runs a commit operation with a remote flag. This causes the changes to not only be sync'd with\n  the form's pristine state, it also causes a network (in this case simulated) request to have the server update\n  its copy.\n\n  See the form documentation for the full possible items in such a request. For this example we'll describe\n  just the one we're supporting: Updates.\n\n  The parameters passed to the server on update have \n  a `:form/updates` key with a map whose keys are the idents of things that changed, and whose values are maps\n  of the field/value updates. For example:\n\n  ```\n  {:form/updates {[:phone/by-id 1] {:phone/number \"444-5421\"}}}\n  ```\n\n  would be sent to indicate that phone number with id 1 had just its `:phone/number` attribute changed to the\n  new value \"444-5421\".\n\n  So, a really naive implementation of this update handler looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn update-phone-number [id incoming-changes]\n  (log/info \"Server asked to updated phone \" id \" with changes: \" incoming-changes)\n  (swap! server-state update-in [:all-numbers (dec id)] merge incoming-changes)\n  ;; simulate saving to \"disk\"\n  (.setItem js/localStorage \"/\" (pr-str @server-state)))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn write-handler [env k p]\n  (log/info \"SERVER mutation for \" k \" with params \" p)\n  (case k\n    `f/commit-to-entity (let [updates (-> p :form/updates)]\n                          (doseq [[[table id] changes] updates]\n                            (case table\n                              :phone/by-id (update-phone-number id changes)\n                              (log/info \"Server asked to update unknown entity \" table))))\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  # The Final Result\n\n  The server state and application are in the following two live cards:\n  "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__10_Full_Stack_Demo,cljs.core.cst$kw$server_DASH_state_DASH_card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"server-state-card",cljs.core.cst$kw$documentation,"# This card shows the current server-side state (simulated)",cljs.core.cst$kw$main_DASH_obj,(function (state_atom,_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([""], 0));
}),cljs.core.cst$kw$initial_DASH_data,untangled.ui.Forms__10_Full_Stack_Demo.server_state,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__10_Full_Stack_Demo,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"# The Application\n\n  You can enable data inspection on this card to see the client state as you work on the form.\n  ",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__,cljs.core.cst$kw$networking,untangled.ui.Forms__10_Full_Stack_Demo.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$started_DASH_callback,(function (p__51853){
var map__51854 = p__51853;
var map__51854__$1 = ((((!((map__51854 == null)))?((((map__51854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51854):map__51854);
var app = map__51854__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51854__$1,cljs.core.cst$kw$reconciler);
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(app,cljs.core.cst$kw$all_DASH_numbers,untangled.ui.Forms__10_Full_Stack_Demo.PhoneDisplayRow,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_SLASH_phone_DASH_list,cljs.core.cst$kw$tab,cljs.core.cst$kw$phone_DASH_numbers], null),cljs.core.cst$kw$refresh,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_type], null)], null));
})], 0)),untangled.ui.Forms__10_Full_Stack_Demo.Root,node__50268__auto__);

var G__51856 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__51857 = (1000);
return setTimeout(G__51856,G__51857);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,false], null))], 0))], null));
})], null));

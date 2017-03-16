// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.Forms__05_Whole_Form_Logic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('com.stuartsierra.component');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.mutations');
goog.require('untangled.ui.forms');
goog.require('untangled.icons');
goog.require('untangled.client.cards');
goog.require('untangled.ui.simulated_server');
goog.require('untangled.ui.elements');
goog.require('untangled.client.logging');
goog.require('untangled.client.data_fetch');
goog.require('untangled.client.impl.network');
untangled.ui.Forms__05_Whole_Form_Logic.read_handler = (function untangled$ui$Forms__05_Whole_Form_Logic$read_handler(p__52746,k,p__52747){
var map__52753 = p__52746;
var map__52753__$1 = ((((!((map__52753 == null)))?((((map__52753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52753):map__52753);
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,cljs.core.cst$kw$users);
var map__52754 = p__52747;
var map__52754__$1 = ((((!((map__52754 == null)))?((((map__52754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52754):map__52754);
var params = map__52754__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,cljs.core.cst$kw$name);
untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SERVER query for ",k," with parameters ",params," and existing usernames ",users], 0));

var G__52757 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__52757) {
case "name-in-use":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,((cljs.core.contains_QMARK_(users,name))?cljs.core.cst$kw$duplicate:cljs.core.cst$kw$ok)], null);

break;
default:
return null;

}
});
untangled.ui.Forms__05_Whole_Form_Logic.write_handler = (function untangled$ui$Forms__05_Whole_Form_Logic$write_handler(env,k,p){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["SERVER mutation for ",k," with params ",p], 0));
});
untangled.ui.Forms__05_Whole_Form_Logic.server_parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,untangled.ui.Forms__05_Whole_Form_Logic.read_handler,cljs.core.cst$kw$mutate,untangled.ui.Forms__05_Whole_Form_Logic.write_handler], null));
untangled.ui.Forms__05_Whole_Form_Logic.server = (function untangled$ui$Forms__05_Whole_Form_Logic$server(env,tx){
var G__52761 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$users,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["sam",null,"tony",null], null), null));
var G__52762 = tx;
return (untangled.ui.Forms__05_Whole_Form_Logic.server_parser.cljs$core$IFn$_invoke$arity$2 ? untangled.ui.Forms__05_Whole_Form_Logic.server_parser.cljs$core$IFn$_invoke$arity$2(G__52761,G__52762) : untangled.ui.Forms__05_Whole_Form_Logic.server_parser.call(null,G__52761,G__52762));
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
untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k52764,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__52766 = (((k52764 instanceof cljs.core.Keyword))?k52764.fqn:null);
switch (G__52766) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52764,else__8180__auto__);

}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.ui.Forms--05-Whole-Form-Logic.MockNetwork{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52763){
var self__ = this;
var G__52763__$1 = this;
return (new cljs.core.RecordIter((0),G__52763__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_app], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var G__52767 = ((function (this$__$1){
return (function (){
var resp = untangled.ui.Forms__05_Whole_Form_Logic.server(cljs.core.PersistentArrayMap.EMPTY,edn);
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(resp) : ok.call(null,resp));
});})(this$__$1))
;
var G__52768 = (1000);
return setTimeout(G__52767,G__52768);
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$complete_DASH_app,app);
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$complete_DASH_app,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__52763){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__52769 = cljs.core.keyword_identical_QMARK_;
var expr__52770 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__52772 = cljs.core.cst$kw$complete_DASH_app;
var G__52773 = expr__52770;
return (pred__52769.cljs$core$IFn$_invoke$arity$2 ? pred__52769.cljs$core$IFn$_invoke$arity$2(G__52772,G__52773) : pred__52769.call(null,G__52772,G__52773));
})())){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(G__52763,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__52763),null));
}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__52763){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,G__52763,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$complete_DASH_app], null);
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.ui.Forms--05-Whole-Form-Logic/MockNetwork");
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/MockNetwork");
});

untangled.ui.Forms__05_Whole_Form_Logic.__GT_MockNetwork = (function untangled$ui$Forms__05_Whole_Form_Logic$__GT_MockNetwork(complete_app){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(complete_app,null,null,null));
});

untangled.ui.Forms__05_Whole_Form_Logic.map__GT_MockNetwork = (function untangled$ui$Forms__05_Whole_Form_Logic$map__GT_MockNetwork(G__52765){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__52765),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52765,cljs.core.cst$kw$complete_DASH_app),null));
});

/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__05_Whole_Form_Logic.field_with_label = (function untangled$ui$Forms__05_Whole_Form_Logic$field_with_label(var_args){
var args52775 = [];
var len__8723__auto___52778 = arguments.length;
var i__8724__auto___52779 = (0);
while(true){
if((i__8724__auto___52779 < len__8723__auto___52778)){
args52775.push((arguments[i__8724__auto___52779]));

var G__52780 = (i__8724__auto___52779 + (1));
i__8724__auto___52779 = G__52780;
continue;
} else {
}
break;
}

var G__52777 = args52775.length;
switch (G__52777) {
case 4:
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52775.length)].join('')));

}
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5(comp,form,name,label,null);
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form,name))?" has-error":""))].join('')}),cljs.core.array_seq([om.dom.label.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-2", "htmlFor": name}),cljs.core.array_seq([label], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-sm-10"}),cljs.core.array_seq([untangled.ui.forms.form_field(comp,form,name)], 0)),(cljs.core.truth_(validation_message)?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10 "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),cljs.core.array_seq([validation_message], 0)):null)], 0));
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$lang$maxFixedArity = 5;

/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery = (function untangled$ui$Forms__05_Whole_Form_Logic$NameInUseQuery(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype = goog.object.clone(React.Component.prototype);

var x52786_52797 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype;
x52786_52797.componentWillUpdate = ((function (x52786_52797){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52798 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52799 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52798,next_ident__10196__auto___52799)){
var idxr__10197__auto___52800 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52800 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52800),((function (idxr__10197__auto___52800,ident__10195__auto___52798,next_ident__10196__auto___52799,this__10191__auto__,x52786_52797){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52798], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52799], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52800,ident__10195__auto___52798,next_ident__10196__auto___52799,this__10191__auto__,x52786_52797))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52786_52797))
;

x52786_52797.shouldComponentUpdate = ((function (x52786_52797){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52788 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52788);
} else {
return G__52788;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52793 = this__10191__auto__.state;
var G__52794 = "omcljs$state";
return goog.object.get(G__52793,G__52794);
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
});})(x52786_52797))
;

x52786_52797.componentWillUnmount = ((function (x52786_52797){
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
});})(x52786_52797))
;

x52786_52797.componentDidUpdate = ((function (x52786_52797){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52786_52797))
;

x52786_52797.isMounted = ((function (x52786_52797){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52786_52797))
;

x52786_52797.componentWillMount = ((function (x52786_52797){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52786_52797))
;


untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery;

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery";

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.om$isComponent = true;

var x52795_52801 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery;
/** @nocollapse */
x52795_52801.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52795_52801.om$next$IQuery$query$arity$1 = ((function (x52795_52801){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52795_52801))
;


var x52796_52802 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype;

x52796_52802.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52796_52802.om$next$IQuery$query$arity$1 = ((function (x52796_52802){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52796_52802))
;


untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery";

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery");
});
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$untangled$ui$Forms_DASH__DASH_05_DASH_Whole_DASH_Form_DASH_Logic_SLASH_check_DASH_username_DASH_available,(function (env52803,_,p__52804){
var map__52805 = p__52804;
var map__52805__$1 = ((((!((map__52805 == null)))?((((map__52805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52805):map__52805);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,cljs.core.cst$kw$form_DASH_id);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,cljs.core.cst$kw$kind);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,cljs.core.cst$kw$field);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var map__52807 = env52803;
var map__52807__$1 = ((((!((map__52807 == null)))?((((map__52807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52807):map__52807);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__52807,map__52807__$1,state,map__52805,map__52805__$1,form_id,kind,field){
return (function (){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,cljs.core.cst$kw$blur)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$person_SLASH_name,field))){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_id,field));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_id,cljs.core.cst$kw$ui_SLASH_name_DASH_status),cljs.core.cst$kw$checking);

return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$name_DASH_in_DASH_use,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_id,cljs.core.cst$kw$ui_SLASH_name_DASH_status),cljs.core.cst$kw$refresh,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key], null),cljs.core.cst$kw$marker,false,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,value], null)], null));
} else {
return null;
}
});})(map__52807,map__52807__$1,state,map__52805,map__52805__$1,form_id,kind,field))
], null);
})(),(function (){var env = env52803;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,untangled.client.data_fetch.remote_load(env)], null);
})()], 0));
}));
if(typeof untangled.ui.Forms__05_Whole_Form_Logic.Person !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.Person = (function untangled$ui$Forms__05_Whole_Form_Logic$Person(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype = goog.object.clone(React.Component.prototype);
}

var x52813_52832 = untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype;
x52813_52832.componentWillUpdate = ((function (x52813_52832){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52833 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52834 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52833,next_ident__10196__auto___52834)){
var idxr__10197__auto___52835 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52835 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52835),((function (idxr__10197__auto___52835,ident__10195__auto___52833,next_ident__10196__auto___52834,this__10191__auto__,x52813_52832){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52833], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52834], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52835,ident__10195__auto___52833,next_ident__10196__auto___52834,this__10191__auto__,x52813_52832))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52813_52832))
;

x52813_52832.shouldComponentUpdate = ((function (x52813_52832){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52815 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52815);
} else {
return G__52815;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52820 = this__10191__auto__.state;
var G__52821 = "omcljs$state";
return goog.object.get(G__52820,G__52821);
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
});})(x52813_52832))
;

x52813_52832.componentWillUnmount = ((function (x52813_52832){
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
});})(x52813_52832))
;

x52813_52832.componentDidUpdate = ((function (x52813_52832){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52813_52832))
;

x52813_52832.isMounted = ((function (x52813_52832){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52813_52832))
;

x52813_52832.componentWillMount = ((function (x52813_52832){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52813_52832))
;

x52813_52832.render = ((function (x52813_52832){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52822 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52823 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52824 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52825 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52826 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52827 = om.next.props(this$);
var map__52827__$1 = ((((!((map__52827 == null)))?((((map__52827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52827):map__52827);
var props = map__52827__$1;
var name_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52827__$1,cljs.core.cst$kw$ui_SLASH_name_DASH_status);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "form-horizontal"}),cljs.core.array_seq([untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5(this$,props,cljs.core.cst$kw$person_SLASH_name,"Username:",(function (){var G__52829 = (((name_status instanceof cljs.core.Keyword))?name_status.fqn:null);
switch (G__52829) {
case "duplicate":
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$alert], null),cljs.core.array_seq(["That username is in use.",untangled.icons.icon(cljs.core.cst$kw$error)], 0));

break;
case "checking":
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$neutral], null),cljs.core.array_seq(["Checking if that username is in use..."], 0));

break;
case "ok":
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$success], null),cljs.core.array_seq(["OK",untangled.icons.icon(cljs.core.cst$kw$check)], 0));

break;
default:
return "";

}
})()),untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$4(this$,props,cljs.core.cst$kw$person_SLASH_age,"Age:"),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "button-group"}),cljs.core.array_seq([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn btn-default", "disabled": cljs.core.not(untangled.ui.forms.dirty_QMARK_(props)), "onClick": ((function (map__52827,map__52827__$1,props,name_status,_STAR_reconciler_STAR_52822,_STAR_depth_STAR_52823,_STAR_shared_STAR_52824,_STAR_instrument_STAR_52825,_STAR_parent_STAR_52826,this$,this__10190__auto__,x52813_52832){
return (function (){
return untangled.ui.forms.commit_to_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([cljs.core.cst$kw$remote,true], 0));
});})(map__52827,map__52827__$1,props,name_status,_STAR_reconciler_STAR_52822,_STAR_depth_STAR_52823,_STAR_shared_STAR_52824,_STAR_instrument_STAR_52825,_STAR_parent_STAR_52826,this$,this__10190__auto__,x52813_52832))
}),cljs.core.array_seq(["Save!"], 0))], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52826;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52825;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52824;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52823;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52822;
}});})(x52813_52832))
;


untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.Person;

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/Person";

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.om$isComponent = true;

var x52830_52837 = untangled.ui.Forms__05_Whole_Form_Logic.Person;
/** @nocollapse */
x52830_52837.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52830_52837.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52830_52837){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x52830_52837))
;

/** @nocollapse */
x52830_52837.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52830_52837.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52830_52837){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.on_form_change(cljs.core.cst$sym$untangled$ui$Forms_DASH__DASH_05_DASH_Whole_DASH_Form_DASH_Logic_SLASH_check_DASH_username_DASH_available),untangled.ui.forms.text_input(cljs.core.cst$kw$person_SLASH_name),untangled.ui.forms.integer_input(cljs.core.cst$kw$person_SLASH_age)], null);
});})(x52830_52837))
;

/** @nocollapse */
x52830_52837.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52830_52837.om$next$IQuery$query$arity$1 = ((function (x52830_52837){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$person_SLASH_name,cljs.core.cst$kw$person_SLASH_age,cljs.core.cst$kw$ui_SLASH_name_DASH_status], null);
});})(x52830_52837))
;

/** @nocollapse */
x52830_52837.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52830_52837.om$next$Ident$ident$arity$2 = ((function (x52830_52837){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52830_52837))
;


var x52831_52838 = untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype;

x52831_52838.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52831_52838.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52831_52838){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form(this$__$1,(function (){var or__7502__auto__ = params;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x52831_52838))
;


x52831_52838.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x52831_52838.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x52831_52838){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field(cljs.core.cst$kw$db_SLASH_id),untangled.ui.forms.on_form_change(cljs.core.cst$sym$untangled$ui$Forms_DASH__DASH_05_DASH_Whole_DASH_Form_DASH_Logic_SLASH_check_DASH_username_DASH_available),untangled.ui.forms.text_input(cljs.core.cst$kw$person_SLASH_name),untangled.ui.forms.integer_input(cljs.core.cst$kw$person_SLASH_age)], null);
});})(x52831_52838))
;


x52831_52838.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52831_52838.om$next$IQuery$query$arity$1 = ((function (x52831_52838){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,cljs.core.cst$kw$db_SLASH_id,cljs.core.cst$kw$person_SLASH_name,cljs.core.cst$kw$person_SLASH_age,cljs.core.cst$kw$ui_SLASH_name_DASH_status], null);
});})(x52831_52838))
;


x52831_52838.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52831_52838.om$next$Ident$ident$arity$2 = ((function (x52831_52838){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_by_DASH_id,cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52831_52838))
;


untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/Person";

untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/Person");
});
untangled.ui.Forms__05_Whole_Form_Logic.ui_person = om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$db_SLASH_id], null));
if(typeof untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot = (function untangled$ui$Forms__05_Whole_Form_Logic$CommitRoot(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x52843_52861 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype;
x52843_52861.componentWillUpdate = ((function (x52843_52861){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___52862 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___52863 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___52862,next_ident__10196__auto___52863)){
var idxr__10197__auto___52864 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___52864 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___52864),((function (idxr__10197__auto___52864,ident__10195__auto___52862,next_ident__10196__auto___52863,this__10191__auto__,x52843_52861){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___52862], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___52863], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___52864,ident__10195__auto___52862,next_ident__10196__auto___52863,this__10191__auto__,x52843_52861))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x52843_52861))
;

x52843_52861.shouldComponentUpdate = ((function (x52843_52861){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__52845 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__52845);
} else {
return G__52845;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__52850 = this__10191__auto__.state;
var G__52851 = "omcljs$state";
return goog.object.get(G__52850,G__52851);
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
});})(x52843_52861))
;

x52843_52861.componentWillUnmount = ((function (x52843_52861){
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
});})(x52843_52861))
;

x52843_52861.componentDidUpdate = ((function (x52843_52861){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x52843_52861))
;

x52843_52861.isMounted = ((function (x52843_52861){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52843_52861))
;

x52843_52861.componentWillMount = ((function (x52843_52861){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x52843_52861))
;

x52843_52861.render = ((function (x52843_52861){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_52852 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52853 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52854 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52855 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52856 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__52857 = om.next.props(this$);
var map__52857__$1 = ((((!((map__52857 == null)))?((((map__52857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52857):map__52857);
var react_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,cljs.core.cst$kw$ui_SLASH_react_DASH_key);
var new_person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,cljs.core.cst$kw$new_DASH_person);
var person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,cljs.core.cst$kw$person);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"key": react_key}),cljs.core.array_seq([(untangled.ui.Forms__05_Whole_Form_Logic.ui_person.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.Forms__05_Whole_Form_Logic.ui_person.cljs$core$IFn$_invoke$arity$1(person) : untangled.ui.Forms__05_Whole_Form_Logic.ui_person.call(null,person))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52856;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52855;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52854;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52853;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52852;
}});})(x52843_52861))
;


untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot;

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot";

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.om$isComponent = true;

var x52859_52865 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot;
/** @nocollapse */
x52859_52865.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52859_52865.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52859_52865){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,untangled.client.core.initial_state(untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null))], null);
});})(x52859_52865))
;

/** @nocollapse */
x52859_52865.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52859_52865.om$next$IQuery$query$arity$1 = ((function (x52859_52865){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,om.next.get_query(untangled.ui.Forms__05_Whole_Form_Logic.Person)], null)], null);
});})(x52859_52865))
;


var x52860_52866 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype;

x52860_52866.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52860_52866.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52860_52866){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,untangled.client.core.initial_state(untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,(1)], null))], null);
});})(x52860_52866))
;


x52860_52866.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52860_52866.om$next$IQuery$query$arity$1 = ((function (x52860_52866){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui_SLASH_react_DASH_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person,om.next.get_query(untangled.ui.Forms__05_Whole_Form_Logic.Person)], null)], null);
});})(x52860_52866))
;


untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot";

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot");
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__05_Whole_Form_Logic,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Forms \u2013 Whole Form Logic\n\n  Many forms need logic that updates the UI in some non-local way as form interactions take place.\n  Simple field validations can be local to a field, but some UI changes require who-form reasoning\n  or cross-field interactions.\n\n  Some simple examples:\n\n  - Verification fields (two fields must contain the same data to ensure they typed it correctly)\n  - Triggering a server-side check of a value (e.g. is that username in use?)\n  - Making other UI elements appear/disappear according to field changes\n\n  We accomplish these things in the form support by allowing you to declare an entry in your\n  `IForm` list that names an Untangled mutation to run as changes are detected in the form/subform\n  set.\n\n  The mutation given is just a normal mutation that can do anything you need done: remoting, global\n  reasoning, etc.\n\n  Only one (the last if more than one) `on-form-change` can be declared on a form. Use other composition\n  techniques to make a single mutation if you'd like multiple operations on the form change.\n\n  ```\n  (defui ^:once Person\n    static uc/InitialAppState\n    (initial-state [this params] (f/build-form this (or params {})))\n    static f/IForm\n    (form-spec [this] [(f/id-field :db/id)\n                       (f/on-form-change `check-username-available)\n                       (f/text-input :person/name)\n                       (f/integer-input :person/age)])\n  ```\n\n  ## The Events\n\n  The form change support can send events on change and on blur. The latter is useful for regular\n  input fields (as opposed to checkboxes, for example). Your mutation will be passed parameters\n  as a map that has:\n\n  `:form-id` - The ident of the form that generated the event\n  `:kind` - Either :blur or :edit\n  `:field` - The name of the field affected\n\n  Your mutation can do anything a normal mutation can do.\n\n  ## An Example\n\n  In this example, we'll use remoting to ask the server (on field blur) if a given username is\n  already in use (in our code, 'sam' and 'tony' are taken). The client-side mutation looks like this:\n\n  ```\n  (defmutation check-username-available\n    [{:keys [form-id kind field]}]\n    (action [{:keys [state]}]\n      (when (and (= kind :blur) (= :person/name field)) ; only do things on blur\n        (let [value (get-in @state (conj form-id field))] ; get the value of the field\n          (swap! state assoc-in (conj form-id :ui/name-status) :checking) ; set a UI state to show progress\n          (df/load-action state :name-in-use nil {:target  (conj form-id :ui/name-status) ; trigger a remote load\n                                                  :refresh [f/form-root-key] ; ensure the forms re-render\n                                                  :marker  false ; don't overwrite our marker with a loading marker\n                                                  :params  {:name value}})))) ; include params on the query\n    (remote [env] (df/remote-load env))) ; trigger eval of network queue to see if there is anything remote to do\n  ```\n\n  and a server-side query function would satisfy this with something like this (users is just a set of existing usernames in\n  our sample code):\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn read-handler [{:keys [users]} k {:keys [name] :as params}]\n  (log/info \"SERVER query for \" k \" with parameters \" params\n    \" and existing usernames \" users)\n  (case k\n    :name-in-use {:value (if (contains? users name) :duplicate :ok)}\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  Now, the sequence of interactions is as follows:\n\n  1. The user blurs on the username field (we could also debounce edit events)\n  2. The mutation places a marker in the app state that allows the UI to show the 'checking' message\n  3. The mutation causes a remote query targeted to the marker location\n  4. When the server query completes, it overwrites the marker from (2) with the server response\n\n  The main catch is the `:refresh` argument to the `load-action`. This ensures that the form gets\n  re-rendered when the request completes. Of course, this could have just as easily been any keyword\n  queried by Person.\n\n  The general Person form UI looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Person\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/on-form-change `check-username-available)\n                     (f/text-input :person/name)\n                     (f/integer-input :person/age)])\n  static om/IQuery\n  (query [this] [f/form-root-key f/form-key\n                 :db/id :person/name :person/age :ui/name-status])\n  static om/Ident\n  (ident [this props] [:person/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [ui/name-status] :as props} (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :person/name \"Username:\"\n          (case name-status\n            :duplicate (ele/ui-message {:color :alert}\n                         \"That username is in use.\" (i/icon :error))\n            :checking (ele/ui-message {:color :neutral}\n                        \"Checking if that username is in use...\")\n            :ok (ele/ui-message {:color :success} \"OK\" (i/icon :check))\n            \"\"))\n        (field-with-label this props :person/age \"Age:\")\n        (dom/div #js {:className \"button-group\"}\n          (dom/button #js {:className \"btn btn-default\"\n                           :disabled  (not (f/dirty? props))\n                           :onClick   #(f/commit-to-entity! this :remote true)}\n            \"Save!\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  Note, in particular, that the query includes `:ui/name-status` and rendering code for the possible\n  values of status. The UI is completely disconnected from the fact that remoting is being used\n  to verify the username.\n  "], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$untangled$ui$Forms__05_Whole_Form_Logic,cljs.core.cst$kw$form_DASH_changes], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"form-changes",cljs.core.cst$kw$documentation,"# Live Example\n\n  The following sample uses a mock server to do a full-stack form interaction example that uses\n  `on-form-change` to check is a username is available. The already known usernames are 'tony' and\n  'sam'.\n\n  On blur, the server will be asked if the username is available (with a simulated 1s network latency).\n\n  Try `tony` (in use) and `bob` (not in use).\n  ",cljs.core.cst$kw$main_DASH_obj,devcards.core.dom_node_STAR_((function (state_atom__50267__auto__,node__50268__auto__){
untangled.client.core.mount(untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_state,state_atom__50267__auto__,cljs.core.cst$kw$networking,untangled.ui.Forms__05_Whole_Form_Logic.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY)], 0)),untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot,node__50268__auto__);

var G__52867 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom__50267__auto__,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,untangled.dom.unique_key());
});
var G__52868 = (1000);
return setTimeout(G__52867,G__52868);
})),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,false], null)], null));
})], null));

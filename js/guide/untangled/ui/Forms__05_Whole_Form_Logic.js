// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.Forms__05_Whole_Form_Logic');
goog.require('cljs.core');
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
untangled.ui.Forms__05_Whole_Form_Logic.read_handler = (function untangled$ui$Forms__05_Whole_Form_Logic$read_handler(p__706310,k,p__706311){
var map__706317 = p__706310;
var map__706317__$1 = ((((!((map__706317 == null)))?((((map__706317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706317):map__706317);
var users = cljs.core.get.call(null,map__706317__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var map__706318 = p__706311;
var map__706318__$1 = ((((!((map__706318 == null)))?((((map__706318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706318):map__706318);
var params = map__706318__$1;
var name = cljs.core.get.call(null,map__706318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
untangled.client.logging.info.call(null,"SERVER query for ",k," with parameters ",params," and existing usernames ",users);

var G__706323 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__706323) {
case "name-in-use":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.contains_QMARK_.call(null,users,name))?new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184):new cljs.core.Keyword(null,"ok","ok",967785236))], null);

break;
default:
return null;

}
});
untangled.ui.Forms__05_Whole_Form_Logic.write_handler = (function untangled$ui$Forms__05_Whole_Form_Logic$write_handler(env,k,p){
return untangled.client.logging.info.call(null,"SERVER mutation for ",k," with params ",p);
});
untangled.ui.Forms__05_Whole_Form_Logic.server_parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.ui.Forms__05_Whole_Form_Logic.read_handler,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.ui.Forms__05_Whole_Form_Logic.write_handler], null));
untangled.ui.Forms__05_Whole_Form_Logic.server = (function untangled$ui$Forms__05_Whole_Form_Logic$server(env,tx){
return untangled.ui.Forms__05_Whole_Form_Logic.server_parser.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["sam",null,"tony",null], null), null)),tx);
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

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28325__auto__,k__28326__auto__){
var self__ = this;
var this__28325__auto____$1 = this;
return this__28325__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28326__auto__,null);
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28327__auto__,k706339,else__28328__auto__){
var self__ = this;
var this__28327__auto____$1 = this;
var G__706349 = (((k706339 instanceof cljs.core.Keyword))?k706339.fqn:null);
switch (G__706349) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k706339,else__28328__auto__);

}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28339__auto__,writer__28340__auto__,opts__28341__auto__){
var self__ = this;
var this__28339__auto____$1 = this;
var pr_pair__28342__auto__ = ((function (this__28339__auto____$1){
return (function (keyval__28343__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,cljs.core.pr_writer,""," ","",opts__28341__auto__,keyval__28343__auto__);
});})(this__28339__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,pr_pair__28342__auto__,"#untangled.ui.Forms--05-Whole-Form-Logic.MockNetwork{",", ","}",opts__28341__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__706338){
var self__ = this;
var G__706338__$1 = this;
return (new cljs.core.RecordIter((0),G__706338__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return setTimeout(((function (this$__$1){
return (function (){
var resp = untangled.ui.Forms__05_Whole_Form_Logic.server.call(null,cljs.core.PersistentArrayMap.EMPTY,edn);
return ok.call(null,resp);
});})(this$__$1))
,(1000));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28323__auto__){
var self__ = this;
var this__28323__auto____$1 = this;
return self__.__meta;
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28319__auto__){
var self__ = this;
var this__28319__auto____$1 = this;
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28329__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28320__auto__){
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


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28321__auto__,other__28322__auto__){
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


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28334__auto__,k__28335__auto__){
var self__ = this;
var this__28334__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__28335__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28334__auto____$1),self__.__meta),k__28335__auto__);
} else {
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28335__auto__)),null));
}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28332__auto__,k__28333__auto__,G__706338){
var self__ = this;
var this__28332__auto____$1 = this;
var pred__706366 = cljs.core.keyword_identical_QMARK_;
var expr__706367 = k__28333__auto__;
if(cljs.core.truth_(pred__706366.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__706367))){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(G__706338,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28333__auto__,G__706338),null));
}
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28337__auto__){
var self__ = this;
var this__28337__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28324__auto__,G__706338){
var self__ = this;
var this__28324__auto____$1 = this;
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(self__.complete_app,G__706338,self__.__extmap,self__.__hash));
});


untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28330__auto__,entry__28331__auto__){
var self__ = this;
var this__28330__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28331__auto__)){
return this__28330__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28331__auto__,(0)),cljs.core._nth.call(null,entry__28331__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28330__auto____$1,entry__28331__auto__);
}
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$ctorPrSeq = (function (this__28361__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.ui.Forms--05-Whole-Form-Logic/MockNetwork");
});

untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork.cljs$lang$ctorPrWriter = (function (this__28361__auto__,writer__28362__auto__){
return cljs.core._write.call(null,writer__28362__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/MockNetwork");
});

untangled.ui.Forms__05_Whole_Form_Logic.__GT_MockNetwork = (function untangled$ui$Forms__05_Whole_Form_Logic$__GT_MockNetwork(complete_app){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(complete_app,null,null,null));
});

untangled.ui.Forms__05_Whole_Form_Logic.map__GT_MockNetwork = (function untangled$ui$Forms__05_Whole_Form_Logic$map__GT_MockNetwork(G__706346){
return (new untangled.ui.Forms__05_Whole_Form_Logic.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__706346),null,cljs.core.dissoc.call(null,G__706346,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

/**
 * A non-library helper function, written by you to help lay out your form.
 */
untangled.ui.Forms__05_Whole_Form_Logic.field_with_label = (function untangled$ui$Forms__05_Whole_Form_Logic$field_with_label(var_args){
var args706442 = [];
var len__28871__auto___706446 = arguments.length;
var i__28872__auto___706447 = (0);
while(true){
if((i__28872__auto___706447 < len__28871__auto___706446)){
args706442.push((arguments[i__28872__auto___706447]));

var G__706448 = (i__28872__auto___706447 + (1));
i__28872__auto___706447 = G__706448;
continue;
} else {
}
break;
}

var G__706444 = args706442.length;
switch (G__706444) {
case 4:
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args706442.length)].join('')));

}
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$4 = (function (comp,form,name,label){
return untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.call(null,comp,form,name,label,null);
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$core$IFn$_invoke$arity$5 = (function (comp,form,name,label,validation_message){
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-group"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(untangled.ui.forms.invalid_QMARK_.call(null,form,name))?" has-error":""))].join('')}),om.dom.label.call(null,({"className": "col-sm-2", "htmlFor": name}),label),om.dom.div.call(null,({"className": "col-sm-10"}),untangled.ui.forms.form_field.call(null,comp,form,name)),(cljs.core.truth_(validation_message)?om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-sm-offset-2 col-sm-10 "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')}),validation_message):null));
});

untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.cljs$lang$maxFixedArity = 5;

/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery = (function untangled$ui$Forms__05_Whole_Form_Logic$NameInUseQuery(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype = goog.object.clone(React.Component.prototype);

var x706461_706467 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype;
x706461_706467.componentWillUpdate = ((function (x706461_706467){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706474 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706475 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706474,next_ident__29856__auto___706475)){
var idxr__29857__auto___706480 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706480 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706480),((function (idxr__29857__auto___706480,ident__29855__auto___706474,next_ident__29856__auto___706475,this__29851__auto__,x706461_706467){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706474], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706475], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706480,ident__29855__auto___706474,next_ident__29856__auto___706475,this__29851__auto__,x706461_706467))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706461_706467))
;

x706461_706467.shouldComponentUpdate = ((function (x706461_706467){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706463 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706463);
} else {
return G__706463;
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
});})(x706461_706467))
;

x706461_706467.componentWillUnmount = ((function (x706461_706467){
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
});})(x706461_706467))
;

x706461_706467.componentDidUpdate = ((function (x706461_706467){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706461_706467))
;

x706461_706467.isMounted = ((function (x706461_706467){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706461_706467))
;

x706461_706467.componentWillMount = ((function (x706461_706467){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706461_706467))
;


untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery;

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery";

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype.om$isComponent = true;

var x706465_706521 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery;
/** @nocollapse */
x706465_706521.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706465_706521.om$next$IQuery$query$arity$1 = ((function (x706465_706521){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x706465_706521))
;


var x706466_706523 = untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.prototype;

x706466_706523.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706466_706523.om$next$IQuery$query$arity$1 = ((function (x706466_706523){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x706466_706523))
;


untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery";

untangled.ui.Forms__05_Whole_Form_Logic.NameInUseQuery.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/NameInUseQuery");
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.ui.Forms--05-Whole-Form-Logic","check-username-available","untangled.ui.Forms--05-Whole-Form-Logic/check-username-available",1359984675,null),(function (env706531,_,p__706532){
var map__706533 = p__706532;
var map__706533__$1 = ((((!((map__706533 == null)))?((((map__706533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706533):map__706533);
var form_id = cljs.core.get.call(null,map__706533__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var kind = cljs.core.get.call(null,map__706533__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var field = cljs.core.get.call(null,map__706533__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
return cljs.core.merge.call(null,(function (){var map__706535 = env706531;
var map__706535__$1 = ((((!((map__706535 == null)))?((((map__706535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706535):map__706535);
var state = cljs.core.get.call(null,map__706535__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706535,map__706535__$1,state,map__706533,map__706533__$1,form_id,kind,field){
return (function (){
if((cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"blur","blur",-453500461))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("person","name","person/name",549444500),field))){
var value = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),cljs.core.conj.call(null,form_id,field));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,cljs.core.conj.call(null,form_id,new cljs.core.Keyword("ui","name-status","ui/name-status",19216167)),new cljs.core.Keyword(null,"checking","checking",1748720818));

return untangled.client.data_fetch.load_action.call(null,state,new cljs.core.Keyword(null,"name-in-use","name-in-use",493588282),null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.conj.call(null,form_id,new cljs.core.Keyword("ui","name-status","ui/name-status",19216167)),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key], null),new cljs.core.Keyword(null,"marker","marker",865118313),false,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),value], null)], null));
} else {
return null;
}
});})(map__706535,map__706535__$1,state,map__706533,map__706533__$1,form_id,kind,field))
], null);
})(),(function (){var env = env706531;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),untangled.client.data_fetch.remote_load.call(null,env)], null);
})());
}));
if(typeof untangled.ui.Forms__05_Whole_Form_Logic.Person !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.Person = (function untangled$ui$Forms__05_Whole_Form_Logic$Person(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype = goog.object.clone(React.Component.prototype);
}

var x706634_706692 = untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype;
x706634_706692.componentWillUpdate = ((function (x706634_706692){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___706702 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___706703 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___706702,next_ident__29856__auto___706703)){
var idxr__29857__auto___706716 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___706716 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___706716),((function (idxr__29857__auto___706716,ident__29855__auto___706702,next_ident__29856__auto___706703,this__29851__auto__,x706634_706692){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___706702], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___706703], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___706716,ident__29855__auto___706702,next_ident__29856__auto___706703,this__29851__auto__,x706634_706692))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706634_706692))
;

x706634_706692.shouldComponentUpdate = ((function (x706634_706692){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706636 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706636);
} else {
return G__706636;
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
});})(x706634_706692))
;

x706634_706692.componentWillUnmount = ((function (x706634_706692){
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
});})(x706634_706692))
;

x706634_706692.componentDidUpdate = ((function (x706634_706692){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706634_706692))
;

x706634_706692.isMounted = ((function (x706634_706692){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706634_706692))
;

x706634_706692.componentWillMount = ((function (x706634_706692){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706634_706692))
;

x706634_706692.render = ((function (x706634_706692){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706639 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706640 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706641 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706642 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706643 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706648 = om.next.props.call(null,this$);
var map__706648__$1 = ((((!((map__706648 == null)))?((((map__706648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706648):map__706648);
var props = map__706648__$1;
var name_status = cljs.core.get.call(null,map__706648__$1,new cljs.core.Keyword("ui","name-status","ui/name-status",19216167));
return om.dom.div.call(null,({"className": "form-horizontal"}),untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.call(null,this$,props,new cljs.core.Keyword("person","name","person/name",549444500),"Username:",(function (){var G__706654 = (((name_status instanceof cljs.core.Keyword))?name_status.fqn:null);
switch (G__706654) {
case "duplicate":
return untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"alert","alert",-571950580)], null),"That username is in use.",untangled.icons.icon.call(null,new cljs.core.Keyword(null,"error","error",-978969032)));

break;
case "checking":
return untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"neutral","neutral",-1941956087)], null),"Checking if that username is in use...");

break;
case "ok":
return untangled.ui.elements.ui_message.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"success","success",1890645906)], null),"OK",untangled.icons.icon.call(null,new cljs.core.Keyword(null,"check","check",1226308904)));

break;
default:
return "";

}
})()),untangled.ui.Forms__05_Whole_Form_Logic.field_with_label.call(null,this$,props,new cljs.core.Keyword("person","age","person/age",387881455),"Age:"),om.dom.div.call(null,({"className": "button-group"}),om.dom.button.call(null,({"className": "btn btn-default", "disabled": cljs.core.not.call(null,untangled.ui.forms.dirty_QMARK_.call(null,props)), "onClick": ((function (map__706648,map__706648__$1,props,name_status,_STAR_reconciler_STAR_706639,_STAR_depth_STAR_706640,_STAR_shared_STAR_706641,_STAR_instrument_STAR_706642,_STAR_parent_STAR_706643,this$,this__29850__auto__,x706634_706692){
return (function (){
return untangled.ui.forms.commit_to_entity_BANG_.call(null,this$,new cljs.core.Keyword(null,"remote","remote",-1593576576),true);
});})(map__706648,map__706648__$1,props,name_status,_STAR_reconciler_STAR_706639,_STAR_depth_STAR_706640,_STAR_shared_STAR_706641,_STAR_instrument_STAR_706642,_STAR_parent_STAR_706643,this$,this__29850__auto__,x706634_706692))
}),"Save!")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706643;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706642;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706641;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706640;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706639;
}});})(x706634_706692))
;


untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.Person;

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/Person";

untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype.om$isComponent = true;

var x706656_706933 = untangled.ui.Forms__05_Whole_Form_Logic.Person;
/** @nocollapse */
x706656_706933.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706656_706933.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706656_706933){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x706656_706933))
;

/** @nocollapse */
x706656_706933.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706656_706933.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706656_706933){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.on_form_change.call(null,new cljs.core.Symbol("untangled.ui.Forms--05-Whole-Form-Logic","check-username-available","untangled.ui.Forms--05-Whole-Form-Logic/check-username-available",1359984675,null)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("person","name","person/name",549444500)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword("person","age","person/age",387881455))], null);
});})(x706656_706933))
;

/** @nocollapse */
x706656_706933.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706656_706933.om$next$IQuery$query$arity$1 = ((function (x706656_706933){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("ui","name-status","ui/name-status",19216167)], null);
});})(x706656_706933))
;

/** @nocollapse */
x706656_706933.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x706656_706933.om$next$Ident$ident$arity$2 = ((function (x706656_706933){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706656_706933))
;


var x706666_707036 = untangled.ui.Forms__05_Whole_Form_Logic.Person.prototype;

x706666_707036.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x706666_707036.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x706666_707036){
return (function (this$,params){
var this$__$1 = this;
return untangled.ui.forms.build_form.call(null,this$__$1,(function (){var or__27650__auto__ = params;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(x706666_707036))
;


x706666_707036.untangled$ui$forms$IForm$ = cljs.core.PROTOCOL_SENTINEL;


x706666_707036.untangled$ui$forms$IForm$form_spec$arity$1 = ((function (x706666_707036){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.id_field.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098)),untangled.ui.forms.on_form_change.call(null,new cljs.core.Symbol("untangled.ui.Forms--05-Whole-Form-Logic","check-username-available","untangled.ui.Forms--05-Whole-Form-Logic/check-username-available",1359984675,null)),untangled.ui.forms.text_input.call(null,new cljs.core.Keyword("person","name","person/name",549444500)),untangled.ui.forms.integer_input.call(null,new cljs.core.Keyword("person","age","person/age",387881455))], null);
});})(x706666_707036))
;


x706666_707036.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x706666_707036.om$next$IQuery$query$arity$1 = ((function (x706666_707036){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.ui.forms.form_root_key,untangled.ui.forms.form_key,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.Keyword("ui","name-status","ui/name-status",19216167)], null);
});})(x706666_707036))
;


x706666_707036.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x706666_707036.om$next$Ident$ident$arity$2 = ((function (x706666_707036){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-id","person/by-id",1144472464),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x706666_707036))
;


untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/Person";

untangled.ui.Forms__05_Whole_Form_Logic.Person.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/Person");
});
untangled.ui.Forms__05_Whole_Form_Logic.ui_person = om.next.factory.call(null,untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(typeof untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot = (function untangled$ui$Forms__05_Whole_Form_Logic$CommitRoot(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype = goog.object.clone(React.Component.prototype);
}

var x707132_707202 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype;
x707132_707202.componentWillUpdate = ((function (x707132_707202){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707205 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707206 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707205,next_ident__29856__auto___707206)){
var idxr__29857__auto___707211 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707211 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707211),((function (idxr__29857__auto___707211,ident__29855__auto___707205,next_ident__29856__auto___707206,this__29851__auto__,x707132_707202){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707205], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707206], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707211,ident__29855__auto___707205,next_ident__29856__auto___707206,this__29851__auto__,x707132_707202))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707132_707202))
;

x707132_707202.shouldComponentUpdate = ((function (x707132_707202){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707174 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707174);
} else {
return G__707174;
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
});})(x707132_707202))
;

x707132_707202.componentWillUnmount = ((function (x707132_707202){
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
});})(x707132_707202))
;

x707132_707202.componentDidUpdate = ((function (x707132_707202){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707132_707202))
;

x707132_707202.isMounted = ((function (x707132_707202){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707132_707202))
;

x707132_707202.componentWillMount = ((function (x707132_707202){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707132_707202))
;

x707132_707202.render = ((function (x707132_707202){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707178 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707179 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707180 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707181 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707182 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__707183 = om.next.props.call(null,this$);
var map__707183__$1 = ((((!((map__707183 == null)))?((((map__707183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707183):map__707183);
var react_key = cljs.core.get.call(null,map__707183__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var new_person = cljs.core.get.call(null,map__707183__$1,new cljs.core.Keyword(null,"new-person","new-person",-438446119));
var person = cljs.core.get.call(null,map__707183__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
return om.dom.div.call(null,({"key": react_key}),untangled.ui.Forms__05_Whole_Form_Logic.ui_person.call(null,person));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707182;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707181;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707180;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707179;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707178;
}});})(x707132_707202))
;


untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.constructor = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot;

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.constructor.displayName = "untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot";

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype.om$isComponent = true;

var x707191_707355 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot;
/** @nocollapse */
x707191_707355.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707191_707355.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707191_707355){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),untangled.client.core.initial_state.call(null,untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null))], null);
});})(x707191_707355))
;

/** @nocollapse */
x707191_707355.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707191_707355.om$next$IQuery$query$arity$1 = ((function (x707191_707355){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),om.next.get_query.call(null,untangled.ui.Forms__05_Whole_Form_Logic.Person)], null)], null);
});})(x707191_707355))
;


var x707193_707365 = untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.prototype;

x707193_707365.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x707193_707365.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x707193_707365){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),untangled.client.core.initial_state.call(null,untangled.ui.Forms__05_Whole_Form_Logic.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1)], null))], null);
});})(x707193_707365))
;


x707193_707365.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707193_707365.om$next$IQuery$query$arity$1 = ((function (x707193_707365){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"person","person",-1059806875),om.next.get_query.call(null,untangled.ui.Forms__05_Whole_Form_Logic.Person)], null)], null);
});})(x707193_707365))
;


untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$type = true;

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$ctorStr = "untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot";

untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.Forms--05-Whole-Form-Logic/CommitRoot");
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__05_Whole_Form_Logic","untangled.ui.Forms__05_Whole_Form_Logic",-1924484254),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"# Forms \u2013 Whole Form Logic\n\n  Many forms need logic that updates the UI in some non-local way as form interactions take place.\n  Simple field validations can be local to a field, but some UI changes require who-form reasoning\n  or cross-field interactions.\n\n  Some simple examples:\n\n  - Verification fields (two fields must contain the same data to ensure they typed it correctly)\n  - Triggering a server-side check of a value (e.g. is that username in use?)\n  - Making other UI elements appear/disappear according to field changes\n\n  We accomplish these things in the form support by allowing you to declare an entry in your\n  `IForm` list that names an Untangled mutation to run as changes are detected in the form/subform\n  set.\n\n  The mutation given is just a normal mutation that can do anything you need done: remoting, global\n  reasoning, etc.\n\n  Only one (the last if more than one) `on-form-change` can be declared on a form. Use other composition\n  techniques to make a single mutation if you'd like multiple operations on the form change.\n\n  ```\n  (defui ^:once Person\n    static uc/InitialAppState\n    (initial-state [this params] (f/build-form this (or params {})))\n    static f/IForm\n    (form-spec [this] [(f/id-field :db/id)\n                       (f/on-form-change `check-username-available)\n                       (f/text-input :person/name)\n                       (f/integer-input :person/age)])\n  ```\n\n  ## The Events\n\n  The form change support can send events on change and on blur. The latter is useful for regular\n  input fields (as opposed to checkboxes, for example). Your mutation will be passed parameters\n  as a map that has:\n\n  `:form-id` - The ident of the form that generated the event\n  `:kind` - Either :blur or :edit\n  `:field` - The name of the field affected\n\n  Your mutation can do anything a normal mutation can do.\n\n  ## An Example\n\n  In this example, we'll use remoting to ask the server (on field blur) if a given username is\n  already in use (in our code, 'sam' and 'tony' are taken). The client-side mutation looks like this:\n\n  ```\n  (defmutation check-username-available\n    [{:keys [form-id kind field]}]\n    (action [{:keys [state]}]\n      (when (and (= kind :blur) (= :person/name field)) ; only do things on blur\n        (let [value (get-in @state (conj form-id field))] ; get the value of the field\n          (swap! state assoc-in (conj form-id :ui/name-status) :checking) ; set a UI state to show progress\n          (df/load-action state :name-in-use nil {:target  (conj form-id :ui/name-status) ; trigger a remote load\n                                                  :refresh [f/form-root-key] ; ensure the forms re-render\n                                                  :marker  false ; don't overwrite our marker with a loading marker\n                                                  :params  {:name value}})))) ; include params on the query\n    (remote [env] (df/remote-load env))) ; trigger eval of network queue to see if there is anything remote to do\n  ```\n\n  and a server-side query function would satisfy this with something like this (users is just a set of existing usernames in\n  our sample code):\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defn read-handler [{:keys [users]} k {:keys [name] :as params}]\n  (log/info \"SERVER query for \" k \" with parameters \" params\n    \" and existing usernames \" users)\n  (case k\n    :name-in-use {:value (if (contains? users name) :duplicate :ok)}\n    nil))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n\n  Now, the sequence of interactions is as follows:\n\n  1. The user blurs on the username field (we could also debounce edit events)\n  2. The mutation places a marker in the app state that allows the UI to show the 'checking' message\n  3. The mutation causes a remote query targeted to the marker location\n  4. When the server query completes, it overwrites the marker from (2) with the server response\n\n  The main catch is the `:refresh` argument to the `load-action`. This ensures that the form gets\n  re-rendered when the request completes. Of course, this could have just as easily been any keyword\n  queried by Person.\n\n  The general Person form UI looks like this:\n  ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(defui ^:once Person\n  static uc/InitialAppState\n  (initial-state [this params] (f/build-form this (or params {})))\n  static f/IForm\n  (form-spec [this] [(f/id-field :db/id)\n                     (f/on-form-change `check-username-available)\n                     (f/text-input :person/name)\n                     (f/integer-input :person/age)])\n  static om/IQuery\n  (query [this] [f/form-root-key f/form-key\n                 :db/id :person/name :person/age :ui/name-status])\n  static om/Ident\n  (ident [this props] [:person/by-id (:db/id props)])\n  Object\n  (render [this]\n    (let [{:keys [ui/name-status] :as props} (om/props this)]\n      (dom/div #js {:className \"form-horizontal\"}\n        (field-with-label this props :person/name \"Username:\"\n          (case name-status\n            :duplicate (ele/ui-message {:color :alert}\n                         \"That username is in use.\" (i/icon :error))\n            :checking (ele/ui-message {:color :neutral}\n                        \"Checking if that username is in use...\")\n            :ok (ele/ui-message {:color :success} \"OK\" (i/icon :check))\n            \"\"))\n        (field-with-label this props :person/age \"Age:\")\n        (dom/div #js {:className \"button-group\"}\n          (dom/button #js {:className \"btn btn-default\"\n                           :disabled  (not (f/dirty? props))\n                           :onClick   #(f/commit-to-entity! this :remote true)}\n            \"Save!\"))))))"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n```\n")].join(''),"\n  Note, in particular, that the query includes `:ui/name-status` and rendering code for the possible\n  values of status. The UI is completely disconnected from the fact that remoting is being used\n  to verify the username.\n  "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"untangled.ui.Forms__05_Whole_Form_Logic","untangled.ui.Forms__05_Whole_Form_Logic",-1924484254),new cljs.core.Keyword(null,"form-changes","form-changes",938131149)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-changes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Live Example\n\n  The following sample uses a mock server to do a full-stack form interaction example that uses\n  `on-form-change` to check is a username is available. The already known usernames are 'tony' and\n  'sam'.\n\n  On blur, the server will be asked if the username is available (with a simulated 1s network latency).\n\n  Try `tony` (in use) and `bob` (not in use).\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,(function (state_atom__37612__auto__,node__37613__auto__){
untangled.client.core.mount.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),state_atom__37612__auto__,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.ui.Forms__05_Whole_Form_Logic.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY)),untangled.ui.Forms__05_Whole_Form_Logic.CommitRoot,node__37613__auto__);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,state_atom__37612__auto__,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
}),(1000));
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false], null)], null));
})], null));

//# sourceMappingURL=Forms__05_Whole_Form_Logic.js.map?rel=1489703355123
// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.clip_geometry');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
untangled.ui.clip_geometry.Point = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.ui.clip_geometry.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k50288,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__50290 = (((k50288 instanceof cljs.core.Keyword))?k50288.fqn:null);
switch (G__50290) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50288,else__8180__auto__);

}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.ui.clip-geometry.Point{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.clip_geometry.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50287){
var self__ = this;
var G__50287__$1 = this;
return (new cljs.core.RecordIter((0),G__50287__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.ui.clip_geometry.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.ui.clip_geometry.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$x,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__50287){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__50291 = cljs.core.keyword_identical_QMARK_;
var expr__50292 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__50294 = cljs.core.cst$kw$x;
var G__50295 = expr__50292;
return (pred__50291.cljs$core$IFn$_invoke$arity$2 ? pred__50291.cljs$core$IFn$_invoke$arity$2(G__50294,G__50295) : pred__50291.call(null,G__50294,G__50295));
})())){
return (new untangled.ui.clip_geometry.Point(G__50287,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__50296 = cljs.core.cst$kw$y;
var G__50297 = expr__50292;
return (pred__50291.cljs$core$IFn$_invoke$arity$2 ? pred__50291.cljs$core$IFn$_invoke$arity$2(G__50296,G__50297) : pred__50291.call(null,G__50296,G__50297));
})())){
return (new untangled.ui.clip_geometry.Point(self__.x,G__50287,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__50287),null));
}
}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__50287){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,G__50287,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.ui.clip_geometry.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y], null);
});

untangled.ui.clip_geometry.Point.cljs$lang$type = true;

untangled.ui.clip_geometry.Point.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.ui.clip-geometry/Point");
});

untangled.ui.clip_geometry.Point.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.ui.clip-geometry/Point");
});

untangled.ui.clip_geometry.__GT_Point = (function untangled$ui$clip_geometry$__GT_Point(x,y){
return (new untangled.ui.clip_geometry.Point(x,y,null,null,null));
});

untangled.ui.clip_geometry.map__GT_Point = (function untangled$ui$clip_geometry$map__GT_Point(G__50289){
return (new untangled.ui.clip_geometry.Point(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__50289),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__50289),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50289,cljs.core.cst$kw$x,cljs.core.array_seq([cljs.core.cst$kw$y], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
untangled.ui.clip_geometry.Rectangle = (function (ul,lr,__meta,__extmap,__hash){
this.ul = ul;
this.lr = lr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k50300,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__50302 = (((k50300 instanceof cljs.core.Keyword))?k50300.fqn:null);
switch (G__50302) {
case "ul":
return self__.ul;

break;
case "lr":
return self__.lr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50300,else__8180__auto__);

}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.ui.clip-geometry.Rectangle{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ul,self__.ul],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lr,self__.lr],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50299){
var self__ = this;
var G__50299__$1 = this;
return (new cljs.core.RecordIter((0),G__50299__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.cst$kw$lr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lr,null,cljs.core.cst$kw$ul,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__50299){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__50303 = cljs.core.keyword_identical_QMARK_;
var expr__50304 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__50306 = cljs.core.cst$kw$ul;
var G__50307 = expr__50304;
return (pred__50303.cljs$core$IFn$_invoke$arity$2 ? pred__50303.cljs$core$IFn$_invoke$arity$2(G__50306,G__50307) : pred__50303.call(null,G__50306,G__50307));
})())){
return (new untangled.ui.clip_geometry.Rectangle(G__50299,self__.lr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__50308 = cljs.core.cst$kw$lr;
var G__50309 = expr__50304;
return (pred__50303.cljs$core$IFn$_invoke$arity$2 ? pred__50303.cljs$core$IFn$_invoke$arity$2(G__50308,G__50309) : pred__50303.call(null,G__50308,G__50309));
})())){
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,G__50299,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__50299),null));
}
}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ul,self__.ul],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lr,self__.lr],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__50299){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,G__50299,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.ui.clip_geometry.Rectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ul,cljs.core.cst$sym$lr], null);
});

untangled.ui.clip_geometry.Rectangle.cljs$lang$type = true;

untangled.ui.clip_geometry.Rectangle.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.ui.clip-geometry/Rectangle");
});

untangled.ui.clip_geometry.Rectangle.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.ui.clip-geometry/Rectangle");
});

untangled.ui.clip_geometry.__GT_Rectangle = (function untangled$ui$clip_geometry$__GT_Rectangle(ul,lr){
return (new untangled.ui.clip_geometry.Rectangle(ul,lr,null,null,null));
});

untangled.ui.clip_geometry.map__GT_Rectangle = (function untangled$ui$clip_geometry$map__GT_Rectangle(G__50301){
return (new untangled.ui.clip_geometry.Rectangle(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(G__50301),cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(G__50301),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50301,cljs.core.cst$kw$ul,cljs.core.array_seq([cljs.core.cst$kw$lr], 0)),null));
});

untangled.ui.clip_geometry.width = (function untangled$ui$clip_geometry$width(rect){
return (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)));
});
untangled.ui.clip_geometry.height = (function untangled$ui$clip_geometry$height(rect){
return (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)));
});
/**
 * Translate a javascript evt to a clj {:x x :y y} map within the given dom element.
 */
untangled.ui.clip_geometry.event__GT_dom_coords = (function untangled$ui$clip_geometry$event__GT_dom_coords(evt,dom_ele){
var cx = evt.clientX;
var cy = evt.clientY;
var BB = dom_ele.getBoundingClientRect();
var x = (cx - BB.left);
var y = (cy - BB.top);
return (new untangled.ui.clip_geometry.Point(x,y,null,null,null));
});
/**
 * Check if the rectangle (with :ul and :lr) contains the given coord (:x :y)
 */
untangled.ui.clip_geometry.inside_rect_QMARK_ = (function untangled$ui$clip_geometry$inside_rect_QMARK_(rect,coords){
return ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(coords) >= cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)))) && ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(coords) >= cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)))) && ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(coords) <= cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)))) && ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(coords) <= cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect))));
});
untangled.ui.clip_geometry.rect_midpoint = (function untangled$ui$clip_geometry$rect_midpoint(rect){
return untangled.ui.clip_geometry.__GT_Point((((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect))) / (2)) | (0)),(((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect))) / (2)) | (0)));
});
/**
 * Return a point translated by the vector difference of target and origin as the translation (both orign and target
 *   are vectors drawn from (0,0)).
 */
untangled.ui.clip_geometry.diff_translate = (function untangled$ui$clip_geometry$diff_translate(point,origin_vector,target_vector){
var dx = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(target_vector) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(origin_vector));
var dy = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(target_vector) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(origin_vector));
return untangled.ui.clip_geometry.__GT_Point((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point) + dx),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + dy));
});
/**
 * Creates a new control handle, centered at point, of size sz
 */
untangled.ui.clip_geometry.new_handle = (function untangled$ui$clip_geometry$new_handle(p__50311,sz){
var map__50314 = p__50311;
var map__50314__$1 = ((((!((map__50314 == null)))?((((map__50314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50314):map__50314);
var point = map__50314__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,cljs.core.cst$kw$y);
var half_sz = ((sz / (2)) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((x - half_sz),(y - half_sz)),untangled.ui.clip_geometry.__GT_Point((x + half_sz),(y + half_sz)));
});
/**
 * Return a rectangle translated by the vector difference of target - origin.
 */
untangled.ui.clip_geometry.diff_translate_rect = (function untangled$ui$clip_geometry$diff_translate_rect(rect,origin,target){
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.diff_translate(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect),origin,target),untangled.ui.clip_geometry.diff_translate(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect),origin,target));
});
/**
 * Draw a rectangle with a style (:solid-white, :solid-black, :solid, or :dashed)
 */
untangled.ui.clip_geometry.draw_rect = (function untangled$ui$clip_geometry$draw_rect(ctx,rect,style){
ctx.save();

var x_50318 = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect));
var y_50319 = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect));
var w_50320 = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)));
var h_50321 = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(rect)) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(rect)));
var G__50317_50322 = (((style instanceof cljs.core.Keyword))?style.fqn:null);
switch (G__50317_50322) {
case "solid-white":
ctx.fillStyle = "white";

ctx.fillRect(x_50318,y_50319,w_50320,h_50321);

break;
case "solid-black":
ctx.fillStyle = "black";

ctx.fillRect(x_50318,y_50319,w_50320,h_50321);

break;
case "solid":
ctx.setLineDash([(0)]);

ctx.strokeRect(x_50318,y_50319,w_50320,h_50321);

break;
case "dashed":
ctx.setLineDash([(5)]);

ctx.strokeRect(x_50318,y_50319,w_50320,h_50321);

break;
default:
console.log("ERROR: Unsupported style ",style);

}

return ctx.restore();
});
/**
 * Return the largest rectangle that fits in bounding-rect but has the given aspect ratio (w/h)
 */
untangled.ui.clip_geometry.max_rect = (function untangled$ui$clip_geometry$max_rect(bounding_rect,aspect_ratio){
var brect_aspect = (untangled.ui.clip_geometry.width(bounding_rect) / untangled.ui.clip_geometry.height(bounding_rect));
if((brect_aspect <= aspect_ratio)){
var w = untangled.ui.clip_geometry.width(bounding_rect);
var h = ((w / aspect_ratio) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(w,h));
} else {
var h = untangled.ui.clip_geometry.height(bounding_rect);
var w = ((h * aspect_ratio) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(w,h));
}
});

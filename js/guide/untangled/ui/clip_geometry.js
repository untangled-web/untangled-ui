// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.clip_geometry');
goog.require('cljs.core');

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

untangled.ui.clip_geometry.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28325__auto__,k__28326__auto__){
var self__ = this;
var this__28325__auto____$1 = this;
return this__28325__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28326__auto__,null);
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28327__auto__,k702451,else__28328__auto__){
var self__ = this;
var this__28327__auto____$1 = this;
var G__702453 = (((k702451 instanceof cljs.core.Keyword))?k702451.fqn:null);
switch (G__702453) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k702451,else__28328__auto__);

}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28339__auto__,writer__28340__auto__,opts__28341__auto__){
var self__ = this;
var this__28339__auto____$1 = this;
var pr_pair__28342__auto__ = ((function (this__28339__auto____$1){
return (function (keyval__28343__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,cljs.core.pr_writer,""," ","",opts__28341__auto__,keyval__28343__auto__);
});})(this__28339__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,pr_pair__28342__auto__,"#untangled.ui.clip-geometry.Point{",", ","}",opts__28341__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.clip_geometry.Point.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__702450){
var self__ = this;
var G__702450__$1 = this;
return (new cljs.core.RecordIter((0),G__702450__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28323__auto__){
var self__ = this;
var this__28323__auto____$1 = this;
return self__.__meta;
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28319__auto__){
var self__ = this;
var this__28319__auto____$1 = this;
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28329__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28320__auto__){
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


untangled.ui.clip_geometry.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28321__auto__,other__28322__auto__){
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


untangled.ui.clip_geometry.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28334__auto__,k__28335__auto__){
var self__ = this;
var this__28334__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__28335__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28334__auto____$1),self__.__meta),k__28335__auto__);
} else {
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28335__auto__)),null));
}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28332__auto__,k__28333__auto__,G__702450){
var self__ = this;
var this__28332__auto____$1 = this;
var pred__702474 = cljs.core.keyword_identical_QMARK_;
var expr__702475 = k__28333__auto__;
if(cljs.core.truth_(pred__702474.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__702475))){
return (new untangled.ui.clip_geometry.Point(G__702450,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__702474.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__702475))){
return (new untangled.ui.clip_geometry.Point(self__.x,G__702450,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28333__auto__,G__702450),null));
}
}
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28337__auto__){
var self__ = this;
var this__28337__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28324__auto__,G__702450){
var self__ = this;
var this__28324__auto____$1 = this;
return (new untangled.ui.clip_geometry.Point(self__.x,self__.y,G__702450,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28330__auto__,entry__28331__auto__){
var self__ = this;
var this__28330__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28331__auto__)){
return this__28330__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28331__auto__,(0)),cljs.core._nth.call(null,entry__28331__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28330__auto____$1,entry__28331__auto__);
}
});

untangled.ui.clip_geometry.Point.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

untangled.ui.clip_geometry.Point.cljs$lang$type = true;

untangled.ui.clip_geometry.Point.cljs$lang$ctorPrSeq = (function (this__28361__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.ui.clip-geometry/Point");
});

untangled.ui.clip_geometry.Point.cljs$lang$ctorPrWriter = (function (this__28361__auto__,writer__28362__auto__){
return cljs.core._write.call(null,writer__28362__auto__,"untangled.ui.clip-geometry/Point");
});

untangled.ui.clip_geometry.__GT_Point = (function untangled$ui$clip_geometry$__GT_Point(x,y){
return (new untangled.ui.clip_geometry.Point(x,y,null,null,null));
});

untangled.ui.clip_geometry.map__GT_Point = (function untangled$ui$clip_geometry$map__GT_Point(G__702452){
return (new untangled.ui.clip_geometry.Point(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__702452),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__702452),null,cljs.core.dissoc.call(null,G__702452,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
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

untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28325__auto__,k__28326__auto__){
var self__ = this;
var this__28325__auto____$1 = this;
return this__28325__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28326__auto__,null);
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28327__auto__,k702563,else__28328__auto__){
var self__ = this;
var this__28327__auto____$1 = this;
var G__702566 = (((k702563 instanceof cljs.core.Keyword))?k702563.fqn:null);
switch (G__702566) {
case "ul":
return self__.ul;

break;
case "lr":
return self__.lr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k702563,else__28328__auto__);

}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28339__auto__,writer__28340__auto__,opts__28341__auto__){
var self__ = this;
var this__28339__auto____$1 = this;
var pr_pair__28342__auto__ = ((function (this__28339__auto____$1){
return (function (keyval__28343__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,cljs.core.pr_writer,""," ","",opts__28341__auto__,keyval__28343__auto__);
});})(this__28339__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28340__auto__,pr_pair__28342__auto__,"#untangled.ui.clip-geometry.Rectangle{",", ","}",opts__28341__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ul","ul",-1349521403),self__.ul],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lr","lr",445647393),self__.lr],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__702562){
var self__ = this;
var G__702562__$1 = this;
return (new cljs.core.RecordIter((0),G__702562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"lr","lr",445647393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28323__auto__){
var self__ = this;
var this__28323__auto____$1 = this;
return self__.__meta;
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28319__auto__){
var self__ = this;
var this__28319__auto____$1 = this;
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28329__auto__){
var self__ = this;
var this__28329__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28320__auto__){
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


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28321__auto__,other__28322__auto__){
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


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28334__auto__,k__28335__auto__){
var self__ = this;
var this__28334__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lr","lr",445647393),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null], null), null),k__28335__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28334__auto____$1),self__.__meta),k__28335__auto__);
} else {
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28335__auto__)),null));
}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28332__auto__,k__28333__auto__,G__702562){
var self__ = this;
var this__28332__auto____$1 = this;
var pred__702586 = cljs.core.keyword_identical_QMARK_;
var expr__702587 = k__28333__auto__;
if(cljs.core.truth_(pred__702586.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),expr__702587))){
return (new untangled.ui.clip_geometry.Rectangle(G__702562,self__.lr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__702586.call(null,new cljs.core.Keyword(null,"lr","lr",445647393),expr__702587))){
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,G__702562,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28333__auto__,G__702562),null));
}
}
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28337__auto__){
var self__ = this;
var this__28337__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ul","ul",-1349521403),self__.ul],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lr","lr",445647393),self__.lr],null))], null),self__.__extmap));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28324__auto__,G__702562){
var self__ = this;
var this__28324__auto____$1 = this;
return (new untangled.ui.clip_geometry.Rectangle(self__.ul,self__.lr,G__702562,self__.__extmap,self__.__hash));
});


untangled.ui.clip_geometry.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28330__auto__,entry__28331__auto__){
var self__ = this;
var this__28330__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28331__auto__)){
return this__28330__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28331__auto__,(0)),cljs.core._nth.call(null,entry__28331__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28330__auto____$1,entry__28331__auto__);
}
});

untangled.ui.clip_geometry.Rectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.Symbol(null,"lr","lr",2086178920,null)], null);
});

untangled.ui.clip_geometry.Rectangle.cljs$lang$type = true;

untangled.ui.clip_geometry.Rectangle.cljs$lang$ctorPrSeq = (function (this__28361__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.ui.clip-geometry/Rectangle");
});

untangled.ui.clip_geometry.Rectangle.cljs$lang$ctorPrWriter = (function (this__28361__auto__,writer__28362__auto__){
return cljs.core._write.call(null,writer__28362__auto__,"untangled.ui.clip-geometry/Rectangle");
});

untangled.ui.clip_geometry.__GT_Rectangle = (function untangled$ui$clip_geometry$__GT_Rectangle(ul,lr){
return (new untangled.ui.clip_geometry.Rectangle(ul,lr,null,null,null));
});

untangled.ui.clip_geometry.map__GT_Rectangle = (function untangled$ui$clip_geometry$map__GT_Rectangle(G__702564){
return (new untangled.ui.clip_geometry.Rectangle(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(G__702564),new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(G__702564),null,cljs.core.dissoc.call(null,G__702564,new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"lr","lr",445647393)),null));
});

untangled.ui.clip_geometry.width = (function untangled$ui$clip_geometry$width(rect){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)));
});
untangled.ui.clip_geometry.height = (function untangled$ui$clip_geometry$height(rect){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)));
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
return ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords) >= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords) >= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords) <= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords) <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect))));
});
untangled.ui.clip_geometry.rect_midpoint = (function untangled$ui$clip_geometry$rect_midpoint(rect){
return untangled.ui.clip_geometry.__GT_Point.call(null,(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect))) / (2)) | (0)),(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect))) / (2)) | (0)));
});
/**
 * Return a point translated by the vector difference of target and origin as the translation (both orign and target
 *   are vectors drawn from (0,0)).
 */
untangled.ui.clip_geometry.diff_translate = (function untangled$ui$clip_geometry$diff_translate(point,origin_vector,target_vector){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(target_vector) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(origin_vector));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(target_vector) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(origin_vector));
return untangled.ui.clip_geometry.__GT_Point.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + dx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + dy));
});
/**
 * Creates a new control handle, centered at point, of size sz
 */
untangled.ui.clip_geometry.new_handle = (function untangled$ui$clip_geometry$new_handle(p__702751,sz){
var map__702758 = p__702751;
var map__702758__$1 = ((((!((map__702758 == null)))?((((map__702758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__702758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__702758):map__702758);
var point = map__702758__$1;
var x = cljs.core.get.call(null,map__702758__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__702758__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var half_sz = ((sz / (2)) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(x - half_sz),(y - half_sz)),untangled.ui.clip_geometry.__GT_Point.call(null,(x + half_sz),(y + half_sz)));
});
/**
 * Return a rectangle translated by the vector difference of target - origin.
 */
untangled.ui.clip_geometry.diff_translate_rect = (function untangled$ui$clip_geometry$diff_translate_rect(rect,origin,target){
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.diff_translate.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect),origin,target),untangled.ui.clip_geometry.diff_translate.call(null,new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect),origin,target));
});
/**
 * Draw a rectangle with a style (:solid-white, :solid-black, :solid, or :dashed)
 */
untangled.ui.clip_geometry.draw_rect = (function untangled$ui$clip_geometry$draw_rect(ctx,rect,style){
ctx.save();

var x_702853 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect));
var y_702854 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect));
var w_702855 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)));
var h_702856 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(rect)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(rect)));
var G__702847_702860 = (((style instanceof cljs.core.Keyword))?style.fqn:null);
switch (G__702847_702860) {
case "solid-white":
ctx.fillStyle = "white";

ctx.fillRect(x_702853,y_702854,w_702855,h_702856);

break;
case "solid-black":
ctx.fillStyle = "black";

ctx.fillRect(x_702853,y_702854,w_702855,h_702856);

break;
case "solid":
ctx.setLineDash([(0)]);

ctx.strokeRect(x_702853,y_702854,w_702855,h_702856);

break;
case "dashed":
ctx.setLineDash([(5)]);

ctx.strokeRect(x_702853,y_702854,w_702855,h_702856);

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
var brect_aspect = (untangled.ui.clip_geometry.width.call(null,bounding_rect) / untangled.ui.clip_geometry.height.call(null,bounding_rect));
if((brect_aspect <= aspect_ratio)){
var w = untangled.ui.clip_geometry.width.call(null,bounding_rect);
var h = ((w / aspect_ratio) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,w,h));
} else {
var h = untangled.ui.clip_geometry.height.call(null,bounding_rect);
var w = ((h * aspect_ratio) | (0));
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,w,h));
}
});

//# sourceMappingURL=clip_geometry.js.map?rel=1489703351563
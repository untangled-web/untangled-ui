// Compiled by ClojureScript 1.9.473 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');

cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;


goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;


goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});


com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;


com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__692722_692726 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__692723_692727 = null;
var count__692724_692728 = (0);
var i__692725_692729 = (0);
while(true){
if((i__692725_692729 < count__692724_692728)){
var k_692731 = cljs.core._nth.call(null,chunk__692723_692727,i__692725_692729);
var v_692733 = (b[k_692731]);
(a[k_692731] = v_692733);

var G__692736 = seq__692722_692726;
var G__692737 = chunk__692723_692727;
var G__692738 = count__692724_692728;
var G__692739 = (i__692725_692729 + (1));
seq__692722_692726 = G__692736;
chunk__692723_692727 = G__692737;
count__692724_692728 = G__692738;
i__692725_692729 = G__692739;
continue;
} else {
var temp__6753__auto___692741 = cljs.core.seq.call(null,seq__692722_692726);
if(temp__6753__auto___692741){
var seq__692722_692742__$1 = temp__6753__auto___692741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__692722_692742__$1)){
var c__28561__auto___692743 = cljs.core.chunk_first.call(null,seq__692722_692742__$1);
var G__692744 = cljs.core.chunk_rest.call(null,seq__692722_692742__$1);
var G__692745 = c__28561__auto___692743;
var G__692746 = cljs.core.count.call(null,c__28561__auto___692743);
var G__692747 = (0);
seq__692722_692726 = G__692744;
chunk__692723_692727 = G__692745;
count__692724_692728 = G__692746;
i__692725_692729 = G__692747;
continue;
} else {
var k_692748 = cljs.core.first.call(null,seq__692722_692742__$1);
var v_692749 = (b[k_692748]);
(a[k_692748] = v_692749);

var G__692752 = cljs.core.next.call(null,seq__692722_692742__$1);
var G__692753 = null;
var G__692754 = (0);
var G__692755 = (0);
seq__692722_692726 = G__692752;
chunk__692723_692727 = G__692753;
count__692724_692728 = G__692754;
i__692725_692729 = G__692755;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args692759 = [];
var len__28871__auto___692810 = arguments.length;
var i__28872__auto___692811 = (0);
while(true){
if((i__28872__auto___692811 < len__28871__auto___692810)){
args692759.push((arguments[i__28872__auto___692811]));

var G__692812 = (i__28872__auto___692811 + (1));
i__28872__auto___692811 = G__692812;
continue;
} else {
}
break;
}

var G__692766 = args692759.length;
switch (G__692766) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args692759.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__692830 = (i + (2));
var G__692831 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__692830;
ret = G__692831;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__692918_692948 = cljs.core.seq.call(null,v);
var chunk__692919_692949 = null;
var count__692920_692950 = (0);
var i__692921_692951 = (0);
while(true){
if((i__692921_692951 < count__692920_692950)){
var x_692963 = cljs.core._nth.call(null,chunk__692919_692949,i__692921_692951);
ret.push(x_692963);

var G__692970 = seq__692918_692948;
var G__692971 = chunk__692919_692949;
var G__692972 = count__692920_692950;
var G__692973 = (i__692921_692951 + (1));
seq__692918_692948 = G__692970;
chunk__692919_692949 = G__692971;
count__692920_692950 = G__692972;
i__692921_692951 = G__692973;
continue;
} else {
var temp__6753__auto___692981 = cljs.core.seq.call(null,seq__692918_692948);
if(temp__6753__auto___692981){
var seq__692918_693021__$1 = temp__6753__auto___692981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__692918_693021__$1)){
var c__28561__auto___693025 = cljs.core.chunk_first.call(null,seq__692918_693021__$1);
var G__693026 = cljs.core.chunk_rest.call(null,seq__692918_693021__$1);
var G__693027 = c__28561__auto___693025;
var G__693028 = cljs.core.count.call(null,c__28561__auto___693025);
var G__693029 = (0);
seq__692918_692948 = G__693026;
chunk__692919_692949 = G__693027;
count__692920_692950 = G__693028;
i__692921_692951 = G__693029;
continue;
} else {
var x_693036 = cljs.core.first.call(null,seq__692918_693021__$1);
ret.push(x_693036);

var G__693040 = cljs.core.next.call(null,seq__692918_693021__$1);
var G__693041 = null;
var G__693042 = (0);
var G__693043 = (0);
seq__692918_692948 = G__693040;
chunk__692919_692949 = G__693041;
count__692920_692950 = G__693042;
i__692921_692951 = G__693043;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__693080_693084 = cljs.core.seq.call(null,v);
var chunk__693081_693085 = null;
var count__693082_693086 = (0);
var i__693083_693087 = (0);
while(true){
if((i__693083_693087 < count__693082_693086)){
var x_693092 = cljs.core._nth.call(null,chunk__693081_693085,i__693083_693087);
ret.push(x_693092);

var G__693093 = seq__693080_693084;
var G__693094 = chunk__693081_693085;
var G__693095 = count__693082_693086;
var G__693096 = (i__693083_693087 + (1));
seq__693080_693084 = G__693093;
chunk__693081_693085 = G__693094;
count__693082_693086 = G__693095;
i__693083_693087 = G__693096;
continue;
} else {
var temp__6753__auto___693097 = cljs.core.seq.call(null,seq__693080_693084);
if(temp__6753__auto___693097){
var seq__693080_693098__$1 = temp__6753__auto___693097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__693080_693098__$1)){
var c__28561__auto___693100 = cljs.core.chunk_first.call(null,seq__693080_693098__$1);
var G__693101 = cljs.core.chunk_rest.call(null,seq__693080_693098__$1);
var G__693102 = c__28561__auto___693100;
var G__693103 = cljs.core.count.call(null,c__28561__auto___693100);
var G__693104 = (0);
seq__693080_693084 = G__693101;
chunk__693081_693085 = G__693102;
count__693082_693086 = G__693103;
i__693083_693087 = G__693104;
continue;
} else {
var x_693108 = cljs.core.first.call(null,seq__693080_693098__$1);
ret.push(x_693108);

var G__693109 = cljs.core.next.call(null,seq__693080_693098__$1);
var G__693110 = null;
var G__693111 = (0);
var G__693112 = (0);
seq__693080_693084 = G__693109;
chunk__693081_693085 = G__693110;
count__693082_693086 = G__693111;
i__693083_693087 = G__693112;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__693131_693135 = cljs.core.seq.call(null,v);
var chunk__693132_693136 = null;
var count__693133_693137 = (0);
var i__693134_693138 = (0);
while(true){
if((i__693134_693138 < count__693133_693137)){
var x_693142 = cljs.core._nth.call(null,chunk__693132_693136,i__693134_693138);
ret.push(x_693142);

var G__693143 = seq__693131_693135;
var G__693144 = chunk__693132_693136;
var G__693145 = count__693133_693137;
var G__693146 = (i__693134_693138 + (1));
seq__693131_693135 = G__693143;
chunk__693132_693136 = G__693144;
count__693133_693137 = G__693145;
i__693134_693138 = G__693146;
continue;
} else {
var temp__6753__auto___693147 = cljs.core.seq.call(null,seq__693131_693135);
if(temp__6753__auto___693147){
var seq__693131_693148__$1 = temp__6753__auto___693147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__693131_693148__$1)){
var c__28561__auto___693149 = cljs.core.chunk_first.call(null,seq__693131_693148__$1);
var G__693151 = cljs.core.chunk_rest.call(null,seq__693131_693148__$1);
var G__693152 = c__28561__auto___693149;
var G__693153 = cljs.core.count.call(null,c__28561__auto___693149);
var G__693154 = (0);
seq__693131_693135 = G__693151;
chunk__693132_693136 = G__693152;
count__693133_693137 = G__693153;
i__693134_693138 = G__693154;
continue;
} else {
var x_693155 = cljs.core.first.call(null,seq__693131_693148__$1);
ret.push(x_693155);

var G__693156 = cljs.core.next.call(null,seq__693131_693148__$1);
var G__693157 = null;
var G__693158 = (0);
var G__693159 = (0);
seq__693131_693135 = G__693156;
chunk__693132_693136 = G__693157;
count__693133_693137 = G__693158;
i__693134_693138 = G__693159;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args693180 = [];
var len__28871__auto___693201 = arguments.length;
var i__28872__auto___693204 = (0);
while(true){
if((i__28872__auto___693204 < len__28871__auto___693201)){
args693180.push((arguments[i__28872__auto___693204]));

var G__693208 = (i__28872__auto___693204 + (1));
i__28872__auto___693204 = G__693208;
continue;
} else {
}
break;
}

var G__693183 = args693180.length;
switch (G__693183) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args693180.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__693185 = obj;
G__693185.push(kfn.call(null,k),vfn.call(null,v));

return G__693185;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x693186 = cljs.core.clone.call(null,handlers);
x693186.forEach = ((function (x693186,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__693187 = cljs.core.seq.call(null,coll);
var chunk__693188 = null;
var count__693189 = (0);
var i__693190 = (0);
while(true){
if((i__693190 < count__693189)){
var vec__693191 = cljs.core._nth.call(null,chunk__693188,i__693190);
var k = cljs.core.nth.call(null,vec__693191,(0),null);
var v = cljs.core.nth.call(null,vec__693191,(1),null);
f.call(null,v,k);

var G__693245 = seq__693187;
var G__693246 = chunk__693188;
var G__693247 = count__693189;
var G__693248 = (i__693190 + (1));
seq__693187 = G__693245;
chunk__693188 = G__693246;
count__693189 = G__693247;
i__693190 = G__693248;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__693187);
if(temp__6753__auto__){
var seq__693187__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__693187__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__693187__$1);
var G__693249 = cljs.core.chunk_rest.call(null,seq__693187__$1);
var G__693250 = c__28561__auto__;
var G__693251 = cljs.core.count.call(null,c__28561__auto__);
var G__693252 = (0);
seq__693187 = G__693249;
chunk__693188 = G__693250;
count__693189 = G__693251;
i__693190 = G__693252;
continue;
} else {
var vec__693194 = cljs.core.first.call(null,seq__693187__$1);
var k = cljs.core.nth.call(null,vec__693194,(0),null);
var v = cljs.core.nth.call(null,vec__693194,(1),null);
f.call(null,v,k);

var G__693256 = cljs.core.next.call(null,seq__693187__$1);
var G__693257 = null;
var G__693258 = (0);
var G__693259 = (0);
seq__693187 = G__693256;
chunk__693188 = G__693257;
count__693189 = G__693258;
i__693190 = G__693259;
continue;
}
} else {
return null;
}
}
break;
}
});})(x693186,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x693186;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args693272 = [];
var len__28871__auto___693296 = arguments.length;
var i__28872__auto___693297 = (0);
while(true){
if((i__28872__auto___693297 < len__28871__auto___693296)){
args693272.push((arguments[i__28872__auto___693297]));

var G__693301 = (i__28872__auto___693297 + (1));
i__28872__auto___693297 = G__693301;
continue;
} else {
}
break;
}

var G__693281 = args693272.length;
switch (G__693281) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args693272.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit693288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit693288 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta693289){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta693289 = meta693289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cognitect.transit.t_cognitect$transit693288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_693290,meta693289__$1){
var self__ = this;
var _693290__$1 = this;
return (new cognitect.transit.t_cognitect$transit693288(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta693289__$1));
});


cognitect.transit.t_cognitect$transit693288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_693290){
var self__ = this;
var _693290__$1 = this;
return self__.meta693289;
});

cognitect.transit.t_cognitect$transit693288.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit693288.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit693288.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit693288.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit693288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta693289","meta693289",620464065,null)], null);
});

cognitect.transit.t_cognitect$transit693288.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit693288.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit693288";

cognitect.transit.t_cognitect$transit693288.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cognitect.transit/t_cognitect$transit693288");
});

cognitect.transit.__GT_t_cognitect$transit693288 = (function cognitect$transit$__GT_t_cognitect$transit693288(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta693289){
return (new cognitect.transit.t_cognitect$transit693288(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta693289));
});

}

return (new cognitect.transit.t_cognitect$transit693288(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__27650__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1489703337339
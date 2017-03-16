// Compiled by ClojureScript 1.9.473 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__701560__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__701557 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__701558 = cljs.core.seq.call(null,vec__701557);
var first__701559 = cljs.core.first.call(null,seq__701558);
var seq__701558__$1 = cljs.core.next.call(null,seq__701558);
var tag = first__701559;
var body = seq__701558__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__701560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__701570__i = 0, G__701570__a = new Array(arguments.length -  0);
while (G__701570__i < G__701570__a.length) {G__701570__a[G__701570__i] = arguments[G__701570__i + 0]; ++G__701570__i;}
  args = new cljs.core.IndexedSeq(G__701570__a,0);
} 
return G__701560__delegate.call(this,args);};
G__701560.cljs$lang$maxFixedArity = 0;
G__701560.cljs$lang$applyTo = (function (arglist__701572){
var args = cljs.core.seq(arglist__701572);
return G__701560__delegate(args);
});
G__701560.cljs$core$IFn$_invoke$arity$variadic = G__701560__delegate;
return G__701560;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__28512__auto__ = (function sablono$core$update_arglists_$_iter__701582(s__701583){
return (new cljs.core.LazySeq(null,(function (){
var s__701583__$1 = s__701583;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__701583__$1);
if(temp__6753__auto__){
var s__701583__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__701583__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__701583__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__701585 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__701584 = (0);
while(true){
if((i__701584 < size__28511__auto__)){
var args = cljs.core._nth.call(null,c__28510__auto__,i__701584);
cljs.core.chunk_append.call(null,b__701585,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__701591 = (i__701584 + (1));
i__701584 = G__701591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701585),sablono$core$update_arglists_$_iter__701582.call(null,cljs.core.chunk_rest.call(null,s__701583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701585),null);
}
} else {
var args = cljs.core.first.call(null,s__701583__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__701582.call(null,cljs.core.rest.call(null,s__701583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701620 = arguments.length;
var i__28872__auto___701621 = (0);
while(true){
if((i__28872__auto___701621 < len__28871__auto___701620)){
args__28878__auto__.push((arguments[i__28872__auto___701621]));

var G__701623 = (i__28872__auto___701621 + (1));
i__28872__auto___701621 = G__701623;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__28512__auto__ = (function sablono$core$iter__701609(s__701610){
return (new cljs.core.LazySeq(null,(function (){
var s__701610__$1 = s__701610;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__701610__$1);
if(temp__6753__auto__){
var s__701610__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__701610__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__701610__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__701612 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__701611 = (0);
while(true){
if((i__701611 < size__28511__auto__)){
var style = cljs.core._nth.call(null,c__28510__auto__,i__701611);
cljs.core.chunk_append.call(null,b__701612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__701634 = (i__701611 + (1));
i__701611 = G__701634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701612),sablono$core$iter__701609.call(null,cljs.core.chunk_rest.call(null,s__701610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701612),null);
}
} else {
var style = cljs.core.first.call(null,s__701610__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__701609.call(null,cljs.core.rest.call(null,s__701610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq701605){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq701605));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to701647 = (function sablono$core$link_to701647(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701650 = arguments.length;
var i__28872__auto___701651 = (0);
while(true){
if((i__28872__auto___701651 < len__28871__auto___701650)){
args__28878__auto__.push((arguments[i__28872__auto___701651]));

var G__701653 = (i__28872__auto___701651 + (1));
i__28872__auto___701651 = G__701653;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to701647.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

sablono.core.link_to701647.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to701647.cljs$lang$maxFixedArity = (1);

sablono.core.link_to701647.cljs$lang$applyTo = (function (seq701648){
var G__701649 = cljs.core.first.call(null,seq701648);
var seq701648__$1 = cljs.core.next.call(null,seq701648);
return sablono.core.link_to701647.cljs$core$IFn$_invoke$arity$variadic(G__701649,seq701648__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to701647);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to701654 = (function sablono$core$mail_to701654(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701661 = arguments.length;
var i__28872__auto___701662 = (0);
while(true){
if((i__28872__auto___701662 < len__28871__auto___701661)){
args__28878__auto__.push((arguments[i__28872__auto___701662]));

var G__701663 = (i__28872__auto___701662 + (1));
i__28872__auto___701662 = G__701663;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to701654.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

sablono.core.mail_to701654.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__701657){
var vec__701658 = p__701657;
var content = cljs.core.nth.call(null,vec__701658,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__27650__auto__ = content;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to701654.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to701654.cljs$lang$applyTo = (function (seq701655){
var G__701656 = cljs.core.first.call(null,seq701655);
var seq701655__$1 = cljs.core.next.call(null,seq701655);
return sablono.core.mail_to701654.cljs$core$IFn$_invoke$arity$variadic(G__701656,seq701655__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to701654);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list701664 = (function sablono$core$unordered_list701664(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28512__auto__ = (function sablono$core$unordered_list701664_$_iter__701669(s__701670){
return (new cljs.core.LazySeq(null,(function (){
var s__701670__$1 = s__701670;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__701670__$1);
if(temp__6753__auto__){
var s__701670__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__701670__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__701670__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__701672 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__701671 = (0);
while(true){
if((i__701671 < size__28511__auto__)){
var x = cljs.core._nth.call(null,c__28510__auto__,i__701671);
cljs.core.chunk_append.call(null,b__701672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__701673 = (i__701671 + (1));
i__701671 = G__701673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701672),sablono$core$unordered_list701664_$_iter__701669.call(null,cljs.core.chunk_rest.call(null,s__701670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701672),null);
}
} else {
var x = cljs.core.first.call(null,s__701670__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list701664_$_iter__701669.call(null,cljs.core.rest.call(null,s__701670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list701664);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list701674 = (function sablono$core$ordered_list701674(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__28512__auto__ = (function sablono$core$ordered_list701674_$_iter__701679(s__701680){
return (new cljs.core.LazySeq(null,(function (){
var s__701680__$1 = s__701680;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__701680__$1);
if(temp__6753__auto__){
var s__701680__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__701680__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__701680__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__701682 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__701681 = (0);
while(true){
if((i__701681 < size__28511__auto__)){
var x = cljs.core._nth.call(null,c__28510__auto__,i__701681);
cljs.core.chunk_append.call(null,b__701682,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__701683 = (i__701681 + (1));
i__701681 = G__701683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701682),sablono$core$ordered_list701674_$_iter__701679.call(null,cljs.core.chunk_rest.call(null,s__701680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__701682),null);
}
} else {
var x = cljs.core.first.call(null,s__701680__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list701674_$_iter__701679.call(null,cljs.core.rest.call(null,s__701680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list701674);
/**
 * Create an image element.
 */
sablono.core.image701684 = (function sablono$core$image701684(var_args){
var args701685 = [];
var len__28871__auto___701688 = arguments.length;
var i__28872__auto___701689 = (0);
while(true){
if((i__28872__auto___701689 < len__28871__auto___701688)){
args701685.push((arguments[i__28872__auto___701689]));

var G__701690 = (i__28872__auto___701689 + (1));
i__28872__auto___701689 = G__701690;
continue;
} else {
}
break;
}

var G__701687 = args701685.length;
switch (G__701687) {
case 1:
return sablono.core.image701684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image701684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701685.length)].join('')));

}
});

sablono.core.image701684.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image701684.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image701684.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image701684);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__701692_SHARP_,p2__701693_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__701692_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__701693_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__701694_SHARP_,p2__701695_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__701694_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__701695_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27650__auto__ = value;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field701707 = (function sablono$core$color_field701707(var_args){
var args701708 = [];
var len__28871__auto___701827 = arguments.length;
var i__28872__auto___701828 = (0);
while(true){
if((i__28872__auto___701828 < len__28871__auto___701827)){
args701708.push((arguments[i__28872__auto___701828]));

var G__701833 = (i__28872__auto___701828 + (1));
i__28872__auto___701828 = G__701833;
continue;
} else {
}
break;
}

var G__701711 = args701708.length;
switch (G__701711) {
case 1:
return sablono.core.color_field701707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field701707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701708.length)].join('')));

}
});

sablono.core.color_field701707.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.color_field701707.call(null,name__34119__auto__,null);
});

sablono.core.color_field701707.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.color_field701707.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field701707);

/**
 * Creates a date input field.
 */
sablono.core.date_field701712 = (function sablono$core$date_field701712(var_args){
var args701713 = [];
var len__28871__auto___701839 = arguments.length;
var i__28872__auto___701840 = (0);
while(true){
if((i__28872__auto___701840 < len__28871__auto___701839)){
args701713.push((arguments[i__28872__auto___701840]));

var G__701841 = (i__28872__auto___701840 + (1));
i__28872__auto___701840 = G__701841;
continue;
} else {
}
break;
}

var G__701715 = args701713.length;
switch (G__701715) {
case 1:
return sablono.core.date_field701712.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field701712.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701713.length)].join('')));

}
});

sablono.core.date_field701712.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.date_field701712.call(null,name__34119__auto__,null);
});

sablono.core.date_field701712.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.date_field701712.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field701712);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field701716 = (function sablono$core$datetime_field701716(var_args){
var args701717 = [];
var len__28871__auto___701846 = arguments.length;
var i__28872__auto___701847 = (0);
while(true){
if((i__28872__auto___701847 < len__28871__auto___701846)){
args701717.push((arguments[i__28872__auto___701847]));

var G__701848 = (i__28872__auto___701847 + (1));
i__28872__auto___701847 = G__701848;
continue;
} else {
}
break;
}

var G__701721 = args701717.length;
switch (G__701721) {
case 1:
return sablono.core.datetime_field701716.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field701716.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701717.length)].join('')));

}
});

sablono.core.datetime_field701716.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.datetime_field701716.call(null,name__34119__auto__,null);
});

sablono.core.datetime_field701716.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.datetime_field701716.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field701716);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field701722 = (function sablono$core$datetime_local_field701722(var_args){
var args701723 = [];
var len__28871__auto___701850 = arguments.length;
var i__28872__auto___701851 = (0);
while(true){
if((i__28872__auto___701851 < len__28871__auto___701850)){
args701723.push((arguments[i__28872__auto___701851]));

var G__701855 = (i__28872__auto___701851 + (1));
i__28872__auto___701851 = G__701855;
continue;
} else {
}
break;
}

var G__701725 = args701723.length;
switch (G__701725) {
case 1:
return sablono.core.datetime_local_field701722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field701722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701723.length)].join('')));

}
});

sablono.core.datetime_local_field701722.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.datetime_local_field701722.call(null,name__34119__auto__,null);
});

sablono.core.datetime_local_field701722.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.datetime_local_field701722.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field701722);

/**
 * Creates a email input field.
 */
sablono.core.email_field701729 = (function sablono$core$email_field701729(var_args){
var args701730 = [];
var len__28871__auto___701866 = arguments.length;
var i__28872__auto___701867 = (0);
while(true){
if((i__28872__auto___701867 < len__28871__auto___701866)){
args701730.push((arguments[i__28872__auto___701867]));

var G__701868 = (i__28872__auto___701867 + (1));
i__28872__auto___701867 = G__701868;
continue;
} else {
}
break;
}

var G__701732 = args701730.length;
switch (G__701732) {
case 1:
return sablono.core.email_field701729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field701729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701730.length)].join('')));

}
});

sablono.core.email_field701729.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.email_field701729.call(null,name__34119__auto__,null);
});

sablono.core.email_field701729.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.email_field701729.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field701729);

/**
 * Creates a file input field.
 */
sablono.core.file_field701733 = (function sablono$core$file_field701733(var_args){
var args701734 = [];
var len__28871__auto___701873 = arguments.length;
var i__28872__auto___701874 = (0);
while(true){
if((i__28872__auto___701874 < len__28871__auto___701873)){
args701734.push((arguments[i__28872__auto___701874]));

var G__701876 = (i__28872__auto___701874 + (1));
i__28872__auto___701874 = G__701876;
continue;
} else {
}
break;
}

var G__701741 = args701734.length;
switch (G__701741) {
case 1:
return sablono.core.file_field701733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field701733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701734.length)].join('')));

}
});

sablono.core.file_field701733.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.file_field701733.call(null,name__34119__auto__,null);
});

sablono.core.file_field701733.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.file_field701733.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field701733);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field701742 = (function sablono$core$hidden_field701742(var_args){
var args701743 = [];
var len__28871__auto___701886 = arguments.length;
var i__28872__auto___701887 = (0);
while(true){
if((i__28872__auto___701887 < len__28871__auto___701886)){
args701743.push((arguments[i__28872__auto___701887]));

var G__701888 = (i__28872__auto___701887 + (1));
i__28872__auto___701887 = G__701888;
continue;
} else {
}
break;
}

var G__701745 = args701743.length;
switch (G__701745) {
case 1:
return sablono.core.hidden_field701742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field701742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701743.length)].join('')));

}
});

sablono.core.hidden_field701742.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.hidden_field701742.call(null,name__34119__auto__,null);
});

sablono.core.hidden_field701742.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.hidden_field701742.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field701742);

/**
 * Creates a month input field.
 */
sablono.core.month_field701746 = (function sablono$core$month_field701746(var_args){
var args701747 = [];
var len__28871__auto___701893 = arguments.length;
var i__28872__auto___701894 = (0);
while(true){
if((i__28872__auto___701894 < len__28871__auto___701893)){
args701747.push((arguments[i__28872__auto___701894]));

var G__701898 = (i__28872__auto___701894 + (1));
i__28872__auto___701894 = G__701898;
continue;
} else {
}
break;
}

var G__701749 = args701747.length;
switch (G__701749) {
case 1:
return sablono.core.month_field701746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field701746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701747.length)].join('')));

}
});

sablono.core.month_field701746.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.month_field701746.call(null,name__34119__auto__,null);
});

sablono.core.month_field701746.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.month_field701746.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field701746);

/**
 * Creates a number input field.
 */
sablono.core.number_field701756 = (function sablono$core$number_field701756(var_args){
var args701757 = [];
var len__28871__auto___701900 = arguments.length;
var i__28872__auto___701901 = (0);
while(true){
if((i__28872__auto___701901 < len__28871__auto___701900)){
args701757.push((arguments[i__28872__auto___701901]));

var G__701902 = (i__28872__auto___701901 + (1));
i__28872__auto___701901 = G__701902;
continue;
} else {
}
break;
}

var G__701760 = args701757.length;
switch (G__701760) {
case 1:
return sablono.core.number_field701756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field701756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701757.length)].join('')));

}
});

sablono.core.number_field701756.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.number_field701756.call(null,name__34119__auto__,null);
});

sablono.core.number_field701756.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.number_field701756.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field701756);

/**
 * Creates a password input field.
 */
sablono.core.password_field701765 = (function sablono$core$password_field701765(var_args){
var args701766 = [];
var len__28871__auto___701904 = arguments.length;
var i__28872__auto___701905 = (0);
while(true){
if((i__28872__auto___701905 < len__28871__auto___701904)){
args701766.push((arguments[i__28872__auto___701905]));

var G__701908 = (i__28872__auto___701905 + (1));
i__28872__auto___701905 = G__701908;
continue;
} else {
}
break;
}

var G__701768 = args701766.length;
switch (G__701768) {
case 1:
return sablono.core.password_field701765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field701765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701766.length)].join('')));

}
});

sablono.core.password_field701765.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.password_field701765.call(null,name__34119__auto__,null);
});

sablono.core.password_field701765.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.password_field701765.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field701765);

/**
 * Creates a range input field.
 */
sablono.core.range_field701769 = (function sablono$core$range_field701769(var_args){
var args701770 = [];
var len__28871__auto___701931 = arguments.length;
var i__28872__auto___701932 = (0);
while(true){
if((i__28872__auto___701932 < len__28871__auto___701931)){
args701770.push((arguments[i__28872__auto___701932]));

var G__701933 = (i__28872__auto___701932 + (1));
i__28872__auto___701932 = G__701933;
continue;
} else {
}
break;
}

var G__701774 = args701770.length;
switch (G__701774) {
case 1:
return sablono.core.range_field701769.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field701769.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701770.length)].join('')));

}
});

sablono.core.range_field701769.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.range_field701769.call(null,name__34119__auto__,null);
});

sablono.core.range_field701769.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.range_field701769.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field701769);

/**
 * Creates a search input field.
 */
sablono.core.search_field701775 = (function sablono$core$search_field701775(var_args){
var args701776 = [];
var len__28871__auto___701935 = arguments.length;
var i__28872__auto___701936 = (0);
while(true){
if((i__28872__auto___701936 < len__28871__auto___701935)){
args701776.push((arguments[i__28872__auto___701936]));

var G__701941 = (i__28872__auto___701936 + (1));
i__28872__auto___701936 = G__701941;
continue;
} else {
}
break;
}

var G__701778 = args701776.length;
switch (G__701778) {
case 1:
return sablono.core.search_field701775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field701775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701776.length)].join('')));

}
});

sablono.core.search_field701775.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.search_field701775.call(null,name__34119__auto__,null);
});

sablono.core.search_field701775.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.search_field701775.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field701775);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field701782 = (function sablono$core$tel_field701782(var_args){
var args701783 = [];
var len__28871__auto___701947 = arguments.length;
var i__28872__auto___701948 = (0);
while(true){
if((i__28872__auto___701948 < len__28871__auto___701947)){
args701783.push((arguments[i__28872__auto___701948]));

var G__701949 = (i__28872__auto___701948 + (1));
i__28872__auto___701948 = G__701949;
continue;
} else {
}
break;
}

var G__701785 = args701783.length;
switch (G__701785) {
case 1:
return sablono.core.tel_field701782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field701782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701783.length)].join('')));

}
});

sablono.core.tel_field701782.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.tel_field701782.call(null,name__34119__auto__,null);
});

sablono.core.tel_field701782.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.tel_field701782.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field701782);

/**
 * Creates a text input field.
 */
sablono.core.text_field701790 = (function sablono$core$text_field701790(var_args){
var args701791 = [];
var len__28871__auto___701954 = arguments.length;
var i__28872__auto___701955 = (0);
while(true){
if((i__28872__auto___701955 < len__28871__auto___701954)){
args701791.push((arguments[i__28872__auto___701955]));

var G__701957 = (i__28872__auto___701955 + (1));
i__28872__auto___701955 = G__701957;
continue;
} else {
}
break;
}

var G__701793 = args701791.length;
switch (G__701793) {
case 1:
return sablono.core.text_field701790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field701790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701791.length)].join('')));

}
});

sablono.core.text_field701790.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.text_field701790.call(null,name__34119__auto__,null);
});

sablono.core.text_field701790.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.text_field701790.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field701790);

/**
 * Creates a time input field.
 */
sablono.core.time_field701798 = (function sablono$core$time_field701798(var_args){
var args701799 = [];
var len__28871__auto___701961 = arguments.length;
var i__28872__auto___701962 = (0);
while(true){
if((i__28872__auto___701962 < len__28871__auto___701961)){
args701799.push((arguments[i__28872__auto___701962]));

var G__701963 = (i__28872__auto___701962 + (1));
i__28872__auto___701962 = G__701963;
continue;
} else {
}
break;
}

var G__701803 = args701799.length;
switch (G__701803) {
case 1:
return sablono.core.time_field701798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field701798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701799.length)].join('')));

}
});

sablono.core.time_field701798.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.time_field701798.call(null,name__34119__auto__,null);
});

sablono.core.time_field701798.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.time_field701798.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field701798);

/**
 * Creates a url input field.
 */
sablono.core.url_field701807 = (function sablono$core$url_field701807(var_args){
var args701808 = [];
var len__28871__auto___701968 = arguments.length;
var i__28872__auto___701969 = (0);
while(true){
if((i__28872__auto___701969 < len__28871__auto___701968)){
args701808.push((arguments[i__28872__auto___701969]));

var G__701971 = (i__28872__auto___701969 + (1));
i__28872__auto___701969 = G__701971;
continue;
} else {
}
break;
}

var G__701815 = args701808.length;
switch (G__701815) {
case 1:
return sablono.core.url_field701807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field701807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701808.length)].join('')));

}
});

sablono.core.url_field701807.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.url_field701807.call(null,name__34119__auto__,null);
});

sablono.core.url_field701807.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.url_field701807.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field701807);

/**
 * Creates a week input field.
 */
sablono.core.week_field701816 = (function sablono$core$week_field701816(var_args){
var args701817 = [];
var len__28871__auto___701981 = arguments.length;
var i__28872__auto___701982 = (0);
while(true){
if((i__28872__auto___701982 < len__28871__auto___701981)){
args701817.push((arguments[i__28872__auto___701982]));

var G__701985 = (i__28872__auto___701982 + (1));
i__28872__auto___701982 = G__701985;
continue;
} else {
}
break;
}

var G__701819 = args701817.length;
switch (G__701819) {
case 1:
return sablono.core.week_field701816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field701816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701817.length)].join('')));

}
});

sablono.core.week_field701816.cljs$core$IFn$_invoke$arity$1 = (function (name__34119__auto__){
return sablono.core.week_field701816.call(null,name__34119__auto__,null);
});

sablono.core.week_field701816.cljs$core$IFn$_invoke$arity$2 = (function (name__34119__auto__,value__34120__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34119__auto__,value__34120__auto__);
});

sablono.core.week_field701816.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field701816);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box701988 = (function sablono$core$check_box701988(var_args){
var args701989 = [];
var len__28871__auto___701992 = arguments.length;
var i__28872__auto___701993 = (0);
while(true){
if((i__28872__auto___701993 < len__28871__auto___701992)){
args701989.push((arguments[i__28872__auto___701993]));

var G__701994 = (i__28872__auto___701993 + (1));
i__28872__auto___701993 = G__701994;
continue;
} else {
}
break;
}

var G__701991 = args701989.length;
switch (G__701991) {
case 1:
return sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701989.length)].join('')));

}
});

sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box701988.call(null,name,null);
});

sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box701988.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box701988.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27650__auto__ = value;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box701988.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box701988);
/**
 * Creates a radio button.
 */
sablono.core.radio_button701999 = (function sablono$core$radio_button701999(var_args){
var args702000 = [];
var len__28871__auto___702008 = arguments.length;
var i__28872__auto___702009 = (0);
while(true){
if((i__28872__auto___702009 < len__28871__auto___702008)){
args702000.push((arguments[i__28872__auto___702009]));

var G__702013 = (i__28872__auto___702009 + (1));
i__28872__auto___702009 = G__702013;
continue;
} else {
}
break;
}

var G__702004 = args702000.length;
switch (G__702004) {
case 1:
return sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702000.length)].join('')));

}
});

sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button701999.call(null,group,null);
});

sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button701999.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button701999.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27650__auto__ = value;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button701999.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button701999);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options702015 = (function sablono$core$select_options702015(coll){
var iter__28512__auto__ = (function sablono$core$select_options702015_$_iter__702046(s__702047){
return (new cljs.core.LazySeq(null,(function (){
var s__702047__$1 = s__702047;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__702047__$1);
if(temp__6753__auto__){
var s__702047__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__702047__$2)){
var c__28510__auto__ = cljs.core.chunk_first.call(null,s__702047__$2);
var size__28511__auto__ = cljs.core.count.call(null,c__28510__auto__);
var b__702049 = cljs.core.chunk_buffer.call(null,size__28511__auto__);
if((function (){var i__702048 = (0);
while(true){
if((i__702048 < size__28511__auto__)){
var x = cljs.core._nth.call(null,c__28510__auto__,i__702048);
cljs.core.chunk_append.call(null,b__702049,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__702060 = x;
var text = cljs.core.nth.call(null,vec__702060,(0),null);
var val = cljs.core.nth.call(null,vec__702060,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__702060,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options702015.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__702078 = (i__702048 + (1));
i__702048 = G__702078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__702049),sablono$core$select_options702015_$_iter__702046.call(null,cljs.core.chunk_rest.call(null,s__702047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__702049),null);
}
} else {
var x = cljs.core.first.call(null,s__702047__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__702063 = x;
var text = cljs.core.nth.call(null,vec__702063,(0),null);
var val = cljs.core.nth.call(null,vec__702063,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__702063,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options702015.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options702015_$_iter__702046.call(null,cljs.core.rest.call(null,s__702047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28512__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options702015);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down702091 = (function sablono$core$drop_down702091(var_args){
var args702092 = [];
var len__28871__auto___702103 = arguments.length;
var i__28872__auto___702106 = (0);
while(true){
if((i__28872__auto___702106 < len__28871__auto___702103)){
args702092.push((arguments[i__28872__auto___702106]));

var G__702107 = (i__28872__auto___702106 + (1));
i__28872__auto___702106 = G__702107;
continue;
} else {
}
break;
}

var G__702098 = args702092.length;
switch (G__702098) {
case 2:
return sablono.core.drop_down702091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down702091.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702092.length)].join('')));

}
});

sablono.core.drop_down702091.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down702091.call(null,name,options,null);
});

sablono.core.drop_down702091.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down702091.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down702091);
/**
 * Creates a text area element.
 */
sablono.core.text_area702113 = (function sablono$core$text_area702113(var_args){
var args702114 = [];
var len__28871__auto___702121 = arguments.length;
var i__28872__auto___702122 = (0);
while(true){
if((i__28872__auto___702122 < len__28871__auto___702121)){
args702114.push((arguments[i__28872__auto___702122]));

var G__702127 = (i__28872__auto___702122 + (1));
i__28872__auto___702122 = G__702127;
continue;
} else {
}
break;
}

var G__702120 = args702114.length;
switch (G__702120) {
case 1:
return sablono.core.text_area702113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area702113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args702114.length)].join('')));

}
});

sablono.core.text_area702113.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area702113.call(null,name,null);
});

sablono.core.text_area702113.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__27650__auto__ = value;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area702113.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area702113);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label702133 = (function sablono$core$label702133(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label702133);
/**
 * Creates a submit button.
 */
sablono.core.submit_button702134 = (function sablono$core$submit_button702134(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button702134);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button702136 = (function sablono$core$reset_button702136(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button702136);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to702141 = (function sablono$core$form_to702141(var_args){
var args__28878__auto__ = [];
var len__28871__auto___702152 = arguments.length;
var i__28872__auto___702153 = (0);
while(true){
if((i__28872__auto___702153 < len__28871__auto___702152)){
args__28878__auto__.push((arguments[i__28872__auto___702153]));

var G__702158 = (i__28872__auto___702153 + (1));
i__28872__auto___702153 = G__702158;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to702141.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

sablono.core.form_to702141.cljs$core$IFn$_invoke$arity$variadic = (function (p__702144,body){
var vec__702145 = p__702144;
var method = cljs.core.nth.call(null,vec__702145,(0),null);
var action = cljs.core.nth.call(null,vec__702145,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to702141.cljs$lang$maxFixedArity = (1);

sablono.core.form_to702141.cljs$lang$applyTo = (function (seq702142){
var G__702143 = cljs.core.first.call(null,seq702142);
var seq702142__$1 = cljs.core.next.call(null,seq702142);
return sablono.core.form_to702141.cljs$core$IFn$_invoke$arity$variadic(G__702143,seq702142__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to702141);

//# sourceMappingURL=core.js.map?rel=1489703351090
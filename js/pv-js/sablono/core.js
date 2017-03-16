// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__45960__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__45956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__45957 = cljs.core.seq(vec__45956);
var first__45958 = cljs.core.first(seq__45957);
var seq__45957__$1 = cljs.core.next(seq__45957);
var tag = first__45958;
var body = seq__45957__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__45960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45968__i = 0, G__45968__a = new Array(arguments.length -  0);
while (G__45968__i < G__45968__a.length) {G__45968__a[G__45968__i] = arguments[G__45968__i + 0]; ++G__45968__i;}
  args = new cljs.core.IndexedSeq(G__45968__a,0);
} 
return G__45960__delegate.call(this,args);};
G__45960.cljs$lang$maxFixedArity = 0;
G__45960.cljs$lang$applyTo = (function (arglist__45974){
var args = cljs.core.seq(arglist__45974);
return G__45960__delegate(args);
});
G__45960.cljs$core$IFn$_invoke$arity$variadic = G__45960__delegate;
return G__45960;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__8364__auto__ = (function sablono$core$update_arglists_$_iter__45984(s__45985){
return (new cljs.core.LazySeq(null,(function (){
var s__45985__$1 = s__45985;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__45985__$1);
if(temp__6753__auto__){
var s__45985__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45985__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__45985__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__45987 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__45986 = (0);
while(true){
if((i__45986 < size__8363__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__45986);
cljs.core.chunk_append(b__45987,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__45990 = (i__45986 + (1));
i__45986 = G__45990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45987),sablono$core$update_arglists_$_iter__45984(cljs.core.chunk_rest(s__45985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45987),null);
}
} else {
var args = cljs.core.first(s__45985__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__45984(cljs.core.rest(s__45985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__8730__auto__ = [];
var len__8723__auto___46017 = arguments.length;
var i__8724__auto___46018 = (0);
while(true){
if((i__8724__auto___46018 < len__8723__auto___46017)){
args__8730__auto__.push((arguments[i__8724__auto___46018]));

var G__46019 = (i__8724__auto___46018 + (1));
i__8724__auto___46018 = G__46019;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__8364__auto__ = (function sablono$core$iter__46001(s__46002){
return (new cljs.core.LazySeq(null,(function (){
var s__46002__$1 = s__46002;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46002__$1);
if(temp__6753__auto__){
var s__46002__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46002__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46002__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46004 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46003 = (0);
while(true){
if((i__46003 < size__8363__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46003);
cljs.core.chunk_append(b__46004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__46036 = (i__46003 + (1));
i__46003 = G__46036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46004),sablono$core$iter__46001(cljs.core.chunk_rest(s__46002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46004),null);
}
} else {
var style = cljs.core.first(s__46002__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__46001(cljs.core.rest(s__46002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq45999){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45999));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__46050 = goog.dom.getDocument().body;
var G__46051 = (function (){var G__46053 = "script";
var G__46054 = ({"src": src});
return goog.dom.createDom(G__46053,G__46054);
})();
return goog.dom.appendChild(G__46050,G__46051);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to46069 = (function sablono$core$link_to46069(var_args){
var args__8730__auto__ = [];
var len__8723__auto___46080 = arguments.length;
var i__8724__auto___46081 = (0);
while(true){
if((i__8724__auto___46081 < len__8723__auto___46080)){
args__8730__auto__.push((arguments[i__8724__auto___46081]));

var G__46084 = (i__8724__auto___46081 + (1));
i__8724__auto___46081 = G__46084;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to46069.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.link_to46069.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to46069.cljs$lang$maxFixedArity = (1);

sablono.core.link_to46069.cljs$lang$applyTo = (function (seq46070){
var G__46071 = cljs.core.first(seq46070);
var seq46070__$1 = cljs.core.next(seq46070);
return sablono.core.link_to46069.cljs$core$IFn$_invoke$arity$variadic(G__46071,seq46070__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to46069);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to46092 = (function sablono$core$mail_to46092(var_args){
var args__8730__auto__ = [];
var len__8723__auto___46112 = arguments.length;
var i__8724__auto___46113 = (0);
while(true){
if((i__8724__auto___46113 < len__8723__auto___46112)){
args__8730__auto__.push((arguments[i__8724__auto___46113]));

var G__46116 = (i__8724__auto___46113 + (1));
i__8724__auto___46113 = G__46116;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to46092.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.mail_to46092.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__46105){
var vec__46106 = p__46105;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46106,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7502__auto__ = content;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to46092.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to46092.cljs$lang$applyTo = (function (seq46093){
var G__46094 = cljs.core.first(seq46093);
var seq46093__$1 = cljs.core.next(seq46093);
return sablono.core.mail_to46092.cljs$core$IFn$_invoke$arity$variadic(G__46094,seq46093__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to46092);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list46124 = (function sablono$core$unordered_list46124(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8364__auto__ = (function sablono$core$unordered_list46124_$_iter__46131(s__46132){
return (new cljs.core.LazySeq(null,(function (){
var s__46132__$1 = s__46132;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46132__$1);
if(temp__6753__auto__){
var s__46132__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46132__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46132__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46134 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46133 = (0);
while(true){
if((i__46133 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46133);
cljs.core.chunk_append(b__46134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__46142 = (i__46133 + (1));
i__46133 = G__46142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46134),sablono$core$unordered_list46124_$_iter__46131(cljs.core.chunk_rest(s__46132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46134),null);
}
} else {
var x = cljs.core.first(s__46132__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list46124_$_iter__46131(cljs.core.rest(s__46132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list46124);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list46181 = (function sablono$core$ordered_list46181(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__8364__auto__ = (function sablono$core$ordered_list46181_$_iter__46196(s__46197){
return (new cljs.core.LazySeq(null,(function (){
var s__46197__$1 = s__46197;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46197__$1);
if(temp__6753__auto__){
var s__46197__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46197__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46197__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46199 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46198 = (0);
while(true){
if((i__46198 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46198);
cljs.core.chunk_append(b__46199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__46221 = (i__46198 + (1));
i__46198 = G__46221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46199),sablono$core$ordered_list46181_$_iter__46196(cljs.core.chunk_rest(s__46197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46199),null);
}
} else {
var x = cljs.core.first(s__46197__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list46181_$_iter__46196(cljs.core.rest(s__46197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list46181);
/**
 * Create an image element.
 */
sablono.core.image46235 = (function sablono$core$image46235(var_args){
var args46236 = [];
var len__8723__auto___46243 = arguments.length;
var i__8724__auto___46244 = (0);
while(true){
if((i__8724__auto___46244 < len__8723__auto___46243)){
args46236.push((arguments[i__8724__auto___46244]));

var G__46245 = (i__8724__auto___46244 + (1));
i__8724__auto___46244 = G__46245;
continue;
} else {
}
break;
}

var G__46238 = args46236.length;
switch (G__46238) {
case 1:
return sablono.core.image46235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image46235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46236.length)].join('')));

}
});

sablono.core.image46235.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image46235.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image46235.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image46235);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46262_SHARP_,p2__46263_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46262_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46263_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46268_SHARP_,p2__46269_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46268_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46269_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field46277 = (function sablono$core$color_field46277(var_args){
var args46279 = [];
var len__8723__auto___46444 = arguments.length;
var i__8724__auto___46445 = (0);
while(true){
if((i__8724__auto___46445 < len__8723__auto___46444)){
args46279.push((arguments[i__8724__auto___46445]));

var G__46446 = (i__8724__auto___46445 + (1));
i__8724__auto___46445 = G__46446;
continue;
} else {
}
break;
}

var G__46282 = args46279.length;
switch (G__46282) {
case 1:
return sablono.core.color_field46277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field46277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46279.length)].join('')));

}
});

sablono.core.color_field46277.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.color_field46277.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.color_field46277.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.color_field46277.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field46277);

/**
 * Creates a date input field.
 */
sablono.core.date_field46283 = (function sablono$core$date_field46283(var_args){
var args46284 = [];
var len__8723__auto___46449 = arguments.length;
var i__8724__auto___46450 = (0);
while(true){
if((i__8724__auto___46450 < len__8723__auto___46449)){
args46284.push((arguments[i__8724__auto___46450]));

var G__46452 = (i__8724__auto___46450 + (1));
i__8724__auto___46450 = G__46452;
continue;
} else {
}
break;
}

var G__46287 = args46284.length;
switch (G__46287) {
case 1:
return sablono.core.date_field46283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field46283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46284.length)].join('')));

}
});

sablono.core.date_field46283.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.date_field46283.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.date_field46283.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.date_field46283.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field46283);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field46293 = (function sablono$core$datetime_field46293(var_args){
var args46294 = [];
var len__8723__auto___46454 = arguments.length;
var i__8724__auto___46455 = (0);
while(true){
if((i__8724__auto___46455 < len__8723__auto___46454)){
args46294.push((arguments[i__8724__auto___46455]));

var G__46456 = (i__8724__auto___46455 + (1));
i__8724__auto___46455 = G__46456;
continue;
} else {
}
break;
}

var G__46296 = args46294.length;
switch (G__46296) {
case 1:
return sablono.core.datetime_field46293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field46293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46294.length)].join('')));

}
});

sablono.core.datetime_field46293.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.datetime_field46293.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.datetime_field46293.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.datetime_field46293.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field46293);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field46297 = (function sablono$core$datetime_local_field46297(var_args){
var args46298 = [];
var len__8723__auto___46458 = arguments.length;
var i__8724__auto___46459 = (0);
while(true){
if((i__8724__auto___46459 < len__8723__auto___46458)){
args46298.push((arguments[i__8724__auto___46459]));

var G__46460 = (i__8724__auto___46459 + (1));
i__8724__auto___46459 = G__46460;
continue;
} else {
}
break;
}

var G__46302 = args46298.length;
switch (G__46302) {
case 1:
return sablono.core.datetime_local_field46297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field46297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46298.length)].join('')));

}
});

sablono.core.datetime_local_field46297.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.datetime_local_field46297.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.datetime_local_field46297.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.datetime_local_field46297.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field46297);

/**
 * Creates a email input field.
 */
sablono.core.email_field46303 = (function sablono$core$email_field46303(var_args){
var args46304 = [];
var len__8723__auto___46462 = arguments.length;
var i__8724__auto___46463 = (0);
while(true){
if((i__8724__auto___46463 < len__8723__auto___46462)){
args46304.push((arguments[i__8724__auto___46463]));

var G__46464 = (i__8724__auto___46463 + (1));
i__8724__auto___46463 = G__46464;
continue;
} else {
}
break;
}

var G__46310 = args46304.length;
switch (G__46310) {
case 1:
return sablono.core.email_field46303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field46303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46304.length)].join('')));

}
});

sablono.core.email_field46303.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.email_field46303.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.email_field46303.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.email_field46303.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field46303);

/**
 * Creates a file input field.
 */
sablono.core.file_field46313 = (function sablono$core$file_field46313(var_args){
var args46314 = [];
var len__8723__auto___46466 = arguments.length;
var i__8724__auto___46467 = (0);
while(true){
if((i__8724__auto___46467 < len__8723__auto___46466)){
args46314.push((arguments[i__8724__auto___46467]));

var G__46468 = (i__8724__auto___46467 + (1));
i__8724__auto___46467 = G__46468;
continue;
} else {
}
break;
}

var G__46316 = args46314.length;
switch (G__46316) {
case 1:
return sablono.core.file_field46313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field46313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46314.length)].join('')));

}
});

sablono.core.file_field46313.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.file_field46313.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.file_field46313.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.file_field46313.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field46313);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field46320 = (function sablono$core$hidden_field46320(var_args){
var args46321 = [];
var len__8723__auto___46470 = arguments.length;
var i__8724__auto___46471 = (0);
while(true){
if((i__8724__auto___46471 < len__8723__auto___46470)){
args46321.push((arguments[i__8724__auto___46471]));

var G__46472 = (i__8724__auto___46471 + (1));
i__8724__auto___46471 = G__46472;
continue;
} else {
}
break;
}

var G__46327 = args46321.length;
switch (G__46327) {
case 1:
return sablono.core.hidden_field46320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field46320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46321.length)].join('')));

}
});

sablono.core.hidden_field46320.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.hidden_field46320.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.hidden_field46320.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.hidden_field46320.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field46320);

/**
 * Creates a month input field.
 */
sablono.core.month_field46328 = (function sablono$core$month_field46328(var_args){
var args46330 = [];
var len__8723__auto___46475 = arguments.length;
var i__8724__auto___46476 = (0);
while(true){
if((i__8724__auto___46476 < len__8723__auto___46475)){
args46330.push((arguments[i__8724__auto___46476]));

var G__46478 = (i__8724__auto___46476 + (1));
i__8724__auto___46476 = G__46478;
continue;
} else {
}
break;
}

var G__46339 = args46330.length;
switch (G__46339) {
case 1:
return sablono.core.month_field46328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field46328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46330.length)].join('')));

}
});

sablono.core.month_field46328.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.month_field46328.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.month_field46328.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.month_field46328.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field46328);

/**
 * Creates a number input field.
 */
sablono.core.number_field46343 = (function sablono$core$number_field46343(var_args){
var args46345 = [];
var len__8723__auto___46483 = arguments.length;
var i__8724__auto___46485 = (0);
while(true){
if((i__8724__auto___46485 < len__8723__auto___46483)){
args46345.push((arguments[i__8724__auto___46485]));

var G__46486 = (i__8724__auto___46485 + (1));
i__8724__auto___46485 = G__46486;
continue;
} else {
}
break;
}

var G__46347 = args46345.length;
switch (G__46347) {
case 1:
return sablono.core.number_field46343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field46343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46345.length)].join('')));

}
});

sablono.core.number_field46343.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.number_field46343.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.number_field46343.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.number_field46343.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field46343);

/**
 * Creates a password input field.
 */
sablono.core.password_field46348 = (function sablono$core$password_field46348(var_args){
var args46349 = [];
var len__8723__auto___46492 = arguments.length;
var i__8724__auto___46493 = (0);
while(true){
if((i__8724__auto___46493 < len__8723__auto___46492)){
args46349.push((arguments[i__8724__auto___46493]));

var G__46494 = (i__8724__auto___46493 + (1));
i__8724__auto___46493 = G__46494;
continue;
} else {
}
break;
}

var G__46353 = args46349.length;
switch (G__46353) {
case 1:
return sablono.core.password_field46348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field46348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46349.length)].join('')));

}
});

sablono.core.password_field46348.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.password_field46348.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.password_field46348.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.password_field46348.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field46348);

/**
 * Creates a range input field.
 */
sablono.core.range_field46354 = (function sablono$core$range_field46354(var_args){
var args46355 = [];
var len__8723__auto___46500 = arguments.length;
var i__8724__auto___46501 = (0);
while(true){
if((i__8724__auto___46501 < len__8723__auto___46500)){
args46355.push((arguments[i__8724__auto___46501]));

var G__46502 = (i__8724__auto___46501 + (1));
i__8724__auto___46501 = G__46502;
continue;
} else {
}
break;
}

var G__46357 = args46355.length;
switch (G__46357) {
case 1:
return sablono.core.range_field46354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field46354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46355.length)].join('')));

}
});

sablono.core.range_field46354.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.range_field46354.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.range_field46354.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.range_field46354.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field46354);

/**
 * Creates a search input field.
 */
sablono.core.search_field46358 = (function sablono$core$search_field46358(var_args){
var args46359 = [];
var len__8723__auto___46508 = arguments.length;
var i__8724__auto___46509 = (0);
while(true){
if((i__8724__auto___46509 < len__8723__auto___46508)){
args46359.push((arguments[i__8724__auto___46509]));

var G__46510 = (i__8724__auto___46509 + (1));
i__8724__auto___46509 = G__46510;
continue;
} else {
}
break;
}

var G__46361 = args46359.length;
switch (G__46361) {
case 1:
return sablono.core.search_field46358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46359.length)].join('')));

}
});

sablono.core.search_field46358.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.search_field46358.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.search_field46358.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.search_field46358.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field46358);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46362 = (function sablono$core$tel_field46362(var_args){
var args46363 = [];
var len__8723__auto___46516 = arguments.length;
var i__8724__auto___46517 = (0);
while(true){
if((i__8724__auto___46517 < len__8723__auto___46516)){
args46363.push((arguments[i__8724__auto___46517]));

var G__46518 = (i__8724__auto___46517 + (1));
i__8724__auto___46517 = G__46518;
continue;
} else {
}
break;
}

var G__46366 = args46363.length;
switch (G__46366) {
case 1:
return sablono.core.tel_field46362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46363.length)].join('')));

}
});

sablono.core.tel_field46362.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.tel_field46362.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.tel_field46362.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.tel_field46362.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field46362);

/**
 * Creates a text input field.
 */
sablono.core.text_field46368 = (function sablono$core$text_field46368(var_args){
var args46369 = [];
var len__8723__auto___46520 = arguments.length;
var i__8724__auto___46521 = (0);
while(true){
if((i__8724__auto___46521 < len__8723__auto___46520)){
args46369.push((arguments[i__8724__auto___46521]));

var G__46522 = (i__8724__auto___46521 + (1));
i__8724__auto___46521 = G__46522;
continue;
} else {
}
break;
}

var G__46371 = args46369.length;
switch (G__46371) {
case 1:
return sablono.core.text_field46368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46369.length)].join('')));

}
});

sablono.core.text_field46368.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.text_field46368.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.text_field46368.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.text_field46368.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field46368);

/**
 * Creates a time input field.
 */
sablono.core.time_field46408 = (function sablono$core$time_field46408(var_args){
var args46409 = [];
var len__8723__auto___46528 = arguments.length;
var i__8724__auto___46529 = (0);
while(true){
if((i__8724__auto___46529 < len__8723__auto___46528)){
args46409.push((arguments[i__8724__auto___46529]));

var G__46530 = (i__8724__auto___46529 + (1));
i__8724__auto___46529 = G__46530;
continue;
} else {
}
break;
}

var G__46419 = args46409.length;
switch (G__46419) {
case 1:
return sablono.core.time_field46408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46409.length)].join('')));

}
});

sablono.core.time_field46408.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.time_field46408.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.time_field46408.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.time_field46408.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field46408);

/**
 * Creates a url input field.
 */
sablono.core.url_field46420 = (function sablono$core$url_field46420(var_args){
var args46421 = [];
var len__8723__auto___46536 = arguments.length;
var i__8724__auto___46537 = (0);
while(true){
if((i__8724__auto___46537 < len__8723__auto___46536)){
args46421.push((arguments[i__8724__auto___46537]));

var G__46538 = (i__8724__auto___46537 + (1));
i__8724__auto___46537 = G__46538;
continue;
} else {
}
break;
}

var G__46432 = args46421.length;
switch (G__46432) {
case 1:
return sablono.core.url_field46420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46421.length)].join('')));

}
});

sablono.core.url_field46420.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.url_field46420.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.url_field46420.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.url_field46420.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field46420);

/**
 * Creates a week input field.
 */
sablono.core.week_field46440 = (function sablono$core$week_field46440(var_args){
var args46441 = [];
var len__8723__auto___46544 = arguments.length;
var i__8724__auto___46545 = (0);
while(true){
if((i__8724__auto___46545 < len__8723__auto___46544)){
args46441.push((arguments[i__8724__auto___46545]));

var G__46547 = (i__8724__auto___46545 + (1));
i__8724__auto___46545 = G__46547;
continue;
} else {
}
break;
}

var G__46443 = args46441.length;
switch (G__46443) {
case 1:
return sablono.core.week_field46440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46441.length)].join('')));

}
});

sablono.core.week_field46440.cljs$core$IFn$_invoke$arity$1 = (function (name__45943__auto__){
return sablono.core.week_field46440.cljs$core$IFn$_invoke$arity$2(name__45943__auto__,null);
});

sablono.core.week_field46440.cljs$core$IFn$_invoke$arity$2 = (function (name__45943__auto__,value__45944__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__45943__auto__,value__45944__auto__);
});

sablono.core.week_field46440.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field46440);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46551 = (function sablono$core$check_box46551(var_args){
var args46552 = [];
var len__8723__auto___46567 = arguments.length;
var i__8724__auto___46568 = (0);
while(true){
if((i__8724__auto___46568 < len__8723__auto___46567)){
args46552.push((arguments[i__8724__auto___46568]));

var G__46569 = (i__8724__auto___46568 + (1));
i__8724__auto___46568 = G__46569;
continue;
} else {
}
break;
}

var G__46558 = args46552.length;
switch (G__46558) {
case 1:
return sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46552.length)].join('')));

}
});

sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box46551.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box46551.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box46551);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46578 = (function sablono$core$radio_button46578(var_args){
var args46579 = [];
var len__8723__auto___46592 = arguments.length;
var i__8724__auto___46593 = (0);
while(true){
if((i__8724__auto___46593 < len__8723__auto___46592)){
args46579.push((arguments[i__8724__auto___46593]));

var G__46594 = (i__8724__auto___46593 + (1));
i__8724__auto___46593 = G__46594;
continue;
} else {
}
break;
}

var G__46586 = args46579.length;
switch (G__46586) {
case 1:
return sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46579.length)].join('')));

}
});

sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button46578.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button46578.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button46578);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__46597 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__46597);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46599 = (function sablono$core$select_options46599(coll){
var iter__8364__auto__ = (function sablono$core$select_options46599_$_iter__46663(s__46664){
return (new cljs.core.LazySeq(null,(function (){
var s__46664__$1 = s__46664;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__46664__$1);
if(temp__6753__auto__){
var s__46664__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46664__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__46664__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__46666 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__46665 = (0);
while(true){
if((i__46665 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__46665);
cljs.core.chunk_append(b__46666,((cljs.core.sequential_QMARK_(x))?(function (){var vec__46679 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46679,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46679,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46679,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options46599.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46599.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46599.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__46715 = (i__46665 + (1));
i__46665 = G__46715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46666),sablono$core$select_options46599_$_iter__46663(cljs.core.chunk_rest(s__46664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46666),null);
}
} else {
var x = cljs.core.first(s__46664__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__46687 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options46599.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options46599.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options46599.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options46599_$_iter__46663(cljs.core.rest(s__46664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8364__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options46599);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46722 = (function sablono$core$drop_down46722(var_args){
var args46723 = [];
var len__8723__auto___46738 = arguments.length;
var i__8724__auto___46739 = (0);
while(true){
if((i__8724__auto___46739 < len__8723__auto___46738)){
args46723.push((arguments[i__8724__auto___46739]));

var G__46741 = (i__8724__auto___46739 + (1));
i__8724__auto___46739 = G__46741;
continue;
} else {
}
break;
}

var G__46729 = args46723.length;
switch (G__46729) {
case 2:
return sablono.core.drop_down46722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46722.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46723.length)].join('')));

}
});

sablono.core.drop_down46722.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46722.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down46722.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down46722.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down46722);
/**
 * Creates a text area element.
 */
sablono.core.text_area46754 = (function sablono$core$text_area46754(var_args){
var args46755 = [];
var len__8723__auto___46779 = arguments.length;
var i__8724__auto___46780 = (0);
while(true){
if((i__8724__auto___46780 < len__8723__auto___46779)){
args46755.push((arguments[i__8724__auto___46780]));

var G__46791 = (i__8724__auto___46780 + (1));
i__8724__auto___46780 = G__46791;
continue;
} else {
}
break;
}

var G__46757 = args46755.length;
switch (G__46757) {
case 1:
return sablono.core.text_area46754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46755.length)].join('')));

}
});

sablono.core.text_area46754.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area46754.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area46754.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area46754.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area46754);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46803 = (function sablono$core$label46803(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label46803);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46812 = (function sablono$core$submit_button46812(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button46812);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46813 = (function sablono$core$reset_button46813(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button46813);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46814 = (function sablono$core$form_to46814(var_args){
var args__8730__auto__ = [];
var len__8723__auto___46824 = arguments.length;
var i__8724__auto___46825 = (0);
while(true){
if((i__8724__auto___46825 < len__8723__auto___46824)){
args__8730__auto__.push((arguments[i__8724__auto___46825]));

var G__46826 = (i__8724__auto___46825 + (1));
i__8724__auto___46825 = G__46826;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46814.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.form_to46814.cljs$core$IFn$_invoke$arity$variadic = (function (p__46817,body){
var vec__46818 = p__46817;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46818,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__46821 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__46822 = "_method";
var G__46823 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__46821,G__46822,G__46823) : sablono.core.hidden_field.call(null,G__46821,G__46822,G__46823));
})()], null)),body));
});

sablono.core.form_to46814.cljs$lang$maxFixedArity = (1);

sablono.core.form_to46814.cljs$lang$applyTo = (function (seq46815){
var G__46816 = cljs.core.first(seq46815);
var seq46815__$1 = cljs.core.next(seq46815);
return sablono.core.form_to46814.cljs$core$IFn$_invoke$arity$variadic(G__46816,seq46815__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to46814);

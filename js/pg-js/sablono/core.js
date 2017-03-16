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
var G__48164__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__48161 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__48162 = cljs.core.seq(vec__48161);
var first__48163 = cljs.core.first(seq__48162);
var seq__48162__$1 = cljs.core.next(seq__48162);
var tag = first__48163;
var body = seq__48162__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__48164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48165__i = 0, G__48165__a = new Array(arguments.length -  0);
while (G__48165__i < G__48165__a.length) {G__48165__a[G__48165__i] = arguments[G__48165__i + 0]; ++G__48165__i;}
  args = new cljs.core.IndexedSeq(G__48165__a,0);
} 
return G__48164__delegate.call(this,args);};
G__48164.cljs$lang$maxFixedArity = 0;
G__48164.cljs$lang$applyTo = (function (arglist__48166){
var args = cljs.core.seq(arglist__48166);
return G__48164__delegate(args);
});
G__48164.cljs$core$IFn$_invoke$arity$variadic = G__48164__delegate;
return G__48164;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__8364__auto__ = (function sablono$core$update_arglists_$_iter__48173(s__48174){
return (new cljs.core.LazySeq(null,(function (){
var s__48174__$1 = s__48174;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48174__$1);
if(temp__6753__auto__){
var s__48174__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48174__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48174__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48176 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48175 = (0);
while(true){
if((i__48175 < size__8363__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48175);
cljs.core.chunk_append(b__48176,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__48179 = (i__48175 + (1));
i__48175 = G__48179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48176),sablono$core$update_arglists_$_iter__48173(cljs.core.chunk_rest(s__48174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48176),null);
}
} else {
var args = cljs.core.first(s__48174__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__48173(cljs.core.rest(s__48174__$2)));
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
var len__8723__auto___48187 = arguments.length;
var i__8724__auto___48188 = (0);
while(true){
if((i__8724__auto___48188 < len__8723__auto___48187)){
args__8730__auto__.push((arguments[i__8724__auto___48188]));

var G__48189 = (i__8724__auto___48188 + (1));
i__8724__auto___48188 = G__48189;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__8364__auto__ = (function sablono$core$iter__48181(s__48182){
return (new cljs.core.LazySeq(null,(function (){
var s__48182__$1 = s__48182;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48182__$1);
if(temp__6753__auto__){
var s__48182__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48182__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48182__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48184 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48183 = (0);
while(true){
if((i__48183 < size__8363__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48183);
cljs.core.chunk_append(b__48184,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__48190 = (i__48183 + (1));
i__48183 = G__48190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48184),sablono$core$iter__48181(cljs.core.chunk_rest(s__48182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48184),null);
}
} else {
var style = cljs.core.first(s__48182__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__48181(cljs.core.rest(s__48182__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq48180){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48180));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__48195 = goog.dom.getDocument().body;
var G__48196 = (function (){var G__48197 = "script";
var G__48198 = ({"src": src});
return goog.dom.createDom(G__48197,G__48198);
})();
return goog.dom.appendChild(G__48195,G__48196);
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
sablono.core.link_to48199 = (function sablono$core$link_to48199(var_args){
var args__8730__auto__ = [];
var len__8723__auto___48202 = arguments.length;
var i__8724__auto___48203 = (0);
while(true){
if((i__8724__auto___48203 < len__8723__auto___48202)){
args__8730__auto__.push((arguments[i__8724__auto___48203]));

var G__48204 = (i__8724__auto___48203 + (1));
i__8724__auto___48203 = G__48204;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48199.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.link_to48199.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to48199.cljs$lang$maxFixedArity = (1);

sablono.core.link_to48199.cljs$lang$applyTo = (function (seq48200){
var G__48201 = cljs.core.first(seq48200);
var seq48200__$1 = cljs.core.next(seq48200);
return sablono.core.link_to48199.cljs$core$IFn$_invoke$arity$variadic(G__48201,seq48200__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to48199);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48205 = (function sablono$core$mail_to48205(var_args){
var args__8730__auto__ = [];
var len__8723__auto___48212 = arguments.length;
var i__8724__auto___48213 = (0);
while(true){
if((i__8724__auto___48213 < len__8723__auto___48212)){
args__8730__auto__.push((arguments[i__8724__auto___48213]));

var G__48214 = (i__8724__auto___48213 + (1));
i__8724__auto___48213 = G__48214;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48205.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.mail_to48205.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48208){
var vec__48209 = p__48208;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48209,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7502__auto__ = content;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to48205.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to48205.cljs$lang$applyTo = (function (seq48206){
var G__48207 = cljs.core.first(seq48206);
var seq48206__$1 = cljs.core.next(seq48206);
return sablono.core.mail_to48205.cljs$core$IFn$_invoke$arity$variadic(G__48207,seq48206__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to48205);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48215 = (function sablono$core$unordered_list48215(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8364__auto__ = (function sablono$core$unordered_list48215_$_iter__48222(s__48223){
return (new cljs.core.LazySeq(null,(function (){
var s__48223__$1 = s__48223;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48223__$1);
if(temp__6753__auto__){
var s__48223__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48223__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48223__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48225 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48224 = (0);
while(true){
if((i__48224 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48224);
cljs.core.chunk_append(b__48225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__48228 = (i__48224 + (1));
i__48224 = G__48228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48225),sablono$core$unordered_list48215_$_iter__48222(cljs.core.chunk_rest(s__48223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48225),null);
}
} else {
var x = cljs.core.first(s__48223__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list48215_$_iter__48222(cljs.core.rest(s__48223__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list48215);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list48229 = (function sablono$core$ordered_list48229(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__8364__auto__ = (function sablono$core$ordered_list48229_$_iter__48236(s__48237){
return (new cljs.core.LazySeq(null,(function (){
var s__48237__$1 = s__48237;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48237__$1);
if(temp__6753__auto__){
var s__48237__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48237__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48237__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48239 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48238 = (0);
while(true){
if((i__48238 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48238);
cljs.core.chunk_append(b__48239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__48242 = (i__48238 + (1));
i__48238 = G__48242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48239),sablono$core$ordered_list48229_$_iter__48236(cljs.core.chunk_rest(s__48237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48239),null);
}
} else {
var x = cljs.core.first(s__48237__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list48229_$_iter__48236(cljs.core.rest(s__48237__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list48229);
/**
 * Create an image element.
 */
sablono.core.image48243 = (function sablono$core$image48243(var_args){
var args48244 = [];
var len__8723__auto___48247 = arguments.length;
var i__8724__auto___48248 = (0);
while(true){
if((i__8724__auto___48248 < len__8723__auto___48247)){
args48244.push((arguments[i__8724__auto___48248]));

var G__48249 = (i__8724__auto___48248 + (1));
i__8724__auto___48248 = G__48249;
continue;
} else {
}
break;
}

var G__48246 = args48244.length;
switch (G__48246) {
case 1:
return sablono.core.image48243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image48243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48244.length)].join('')));

}
});

sablono.core.image48243.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image48243.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image48243.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image48243);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48251_SHARP_,p2__48252_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48251_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48252_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48253_SHARP_,p2__48254_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48253_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48254_SHARP_)].join('');
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
sablono.core.color_field48255 = (function sablono$core$color_field48255(var_args){
var args48256 = [];
var len__8723__auto___48323 = arguments.length;
var i__8724__auto___48324 = (0);
while(true){
if((i__8724__auto___48324 < len__8723__auto___48323)){
args48256.push((arguments[i__8724__auto___48324]));

var G__48325 = (i__8724__auto___48324 + (1));
i__8724__auto___48324 = G__48325;
continue;
} else {
}
break;
}

var G__48258 = args48256.length;
switch (G__48258) {
case 1:
return sablono.core.color_field48255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field48255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48256.length)].join('')));

}
});

sablono.core.color_field48255.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.color_field48255.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.color_field48255.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.color_field48255.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field48255);

/**
 * Creates a date input field.
 */
sablono.core.date_field48259 = (function sablono$core$date_field48259(var_args){
var args48260 = [];
var len__8723__auto___48327 = arguments.length;
var i__8724__auto___48328 = (0);
while(true){
if((i__8724__auto___48328 < len__8723__auto___48327)){
args48260.push((arguments[i__8724__auto___48328]));

var G__48329 = (i__8724__auto___48328 + (1));
i__8724__auto___48328 = G__48329;
continue;
} else {
}
break;
}

var G__48262 = args48260.length;
switch (G__48262) {
case 1:
return sablono.core.date_field48259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field48259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48260.length)].join('')));

}
});

sablono.core.date_field48259.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.date_field48259.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.date_field48259.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.date_field48259.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field48259);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field48263 = (function sablono$core$datetime_field48263(var_args){
var args48264 = [];
var len__8723__auto___48331 = arguments.length;
var i__8724__auto___48332 = (0);
while(true){
if((i__8724__auto___48332 < len__8723__auto___48331)){
args48264.push((arguments[i__8724__auto___48332]));

var G__48333 = (i__8724__auto___48332 + (1));
i__8724__auto___48332 = G__48333;
continue;
} else {
}
break;
}

var G__48266 = args48264.length;
switch (G__48266) {
case 1:
return sablono.core.datetime_field48263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field48263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48264.length)].join('')));

}
});

sablono.core.datetime_field48263.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.datetime_field48263.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.datetime_field48263.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.datetime_field48263.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field48263);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field48267 = (function sablono$core$datetime_local_field48267(var_args){
var args48268 = [];
var len__8723__auto___48335 = arguments.length;
var i__8724__auto___48336 = (0);
while(true){
if((i__8724__auto___48336 < len__8723__auto___48335)){
args48268.push((arguments[i__8724__auto___48336]));

var G__48337 = (i__8724__auto___48336 + (1));
i__8724__auto___48336 = G__48337;
continue;
} else {
}
break;
}

var G__48270 = args48268.length;
switch (G__48270) {
case 1:
return sablono.core.datetime_local_field48267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field48267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48268.length)].join('')));

}
});

sablono.core.datetime_local_field48267.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.datetime_local_field48267.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.datetime_local_field48267.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.datetime_local_field48267.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field48267);

/**
 * Creates a email input field.
 */
sablono.core.email_field48271 = (function sablono$core$email_field48271(var_args){
var args48272 = [];
var len__8723__auto___48339 = arguments.length;
var i__8724__auto___48340 = (0);
while(true){
if((i__8724__auto___48340 < len__8723__auto___48339)){
args48272.push((arguments[i__8724__auto___48340]));

var G__48341 = (i__8724__auto___48340 + (1));
i__8724__auto___48340 = G__48341;
continue;
} else {
}
break;
}

var G__48274 = args48272.length;
switch (G__48274) {
case 1:
return sablono.core.email_field48271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field48271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48272.length)].join('')));

}
});

sablono.core.email_field48271.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.email_field48271.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.email_field48271.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.email_field48271.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field48271);

/**
 * Creates a file input field.
 */
sablono.core.file_field48275 = (function sablono$core$file_field48275(var_args){
var args48276 = [];
var len__8723__auto___48343 = arguments.length;
var i__8724__auto___48344 = (0);
while(true){
if((i__8724__auto___48344 < len__8723__auto___48343)){
args48276.push((arguments[i__8724__auto___48344]));

var G__48345 = (i__8724__auto___48344 + (1));
i__8724__auto___48344 = G__48345;
continue;
} else {
}
break;
}

var G__48278 = args48276.length;
switch (G__48278) {
case 1:
return sablono.core.file_field48275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field48275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48276.length)].join('')));

}
});

sablono.core.file_field48275.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.file_field48275.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.file_field48275.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.file_field48275.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field48275);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field48279 = (function sablono$core$hidden_field48279(var_args){
var args48280 = [];
var len__8723__auto___48347 = arguments.length;
var i__8724__auto___48348 = (0);
while(true){
if((i__8724__auto___48348 < len__8723__auto___48347)){
args48280.push((arguments[i__8724__auto___48348]));

var G__48349 = (i__8724__auto___48348 + (1));
i__8724__auto___48348 = G__48349;
continue;
} else {
}
break;
}

var G__48282 = args48280.length;
switch (G__48282) {
case 1:
return sablono.core.hidden_field48279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field48279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48280.length)].join('')));

}
});

sablono.core.hidden_field48279.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.hidden_field48279.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.hidden_field48279.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.hidden_field48279.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field48279);

/**
 * Creates a month input field.
 */
sablono.core.month_field48283 = (function sablono$core$month_field48283(var_args){
var args48284 = [];
var len__8723__auto___48351 = arguments.length;
var i__8724__auto___48352 = (0);
while(true){
if((i__8724__auto___48352 < len__8723__auto___48351)){
args48284.push((arguments[i__8724__auto___48352]));

var G__48353 = (i__8724__auto___48352 + (1));
i__8724__auto___48352 = G__48353;
continue;
} else {
}
break;
}

var G__48286 = args48284.length;
switch (G__48286) {
case 1:
return sablono.core.month_field48283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field48283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48284.length)].join('')));

}
});

sablono.core.month_field48283.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.month_field48283.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.month_field48283.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.month_field48283.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field48283);

/**
 * Creates a number input field.
 */
sablono.core.number_field48287 = (function sablono$core$number_field48287(var_args){
var args48288 = [];
var len__8723__auto___48355 = arguments.length;
var i__8724__auto___48356 = (0);
while(true){
if((i__8724__auto___48356 < len__8723__auto___48355)){
args48288.push((arguments[i__8724__auto___48356]));

var G__48357 = (i__8724__auto___48356 + (1));
i__8724__auto___48356 = G__48357;
continue;
} else {
}
break;
}

var G__48290 = args48288.length;
switch (G__48290) {
case 1:
return sablono.core.number_field48287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field48287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48288.length)].join('')));

}
});

sablono.core.number_field48287.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.number_field48287.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.number_field48287.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.number_field48287.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field48287);

/**
 * Creates a password input field.
 */
sablono.core.password_field48291 = (function sablono$core$password_field48291(var_args){
var args48292 = [];
var len__8723__auto___48359 = arguments.length;
var i__8724__auto___48360 = (0);
while(true){
if((i__8724__auto___48360 < len__8723__auto___48359)){
args48292.push((arguments[i__8724__auto___48360]));

var G__48361 = (i__8724__auto___48360 + (1));
i__8724__auto___48360 = G__48361;
continue;
} else {
}
break;
}

var G__48294 = args48292.length;
switch (G__48294) {
case 1:
return sablono.core.password_field48291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field48291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48292.length)].join('')));

}
});

sablono.core.password_field48291.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.password_field48291.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.password_field48291.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.password_field48291.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field48291);

/**
 * Creates a range input field.
 */
sablono.core.range_field48295 = (function sablono$core$range_field48295(var_args){
var args48296 = [];
var len__8723__auto___48363 = arguments.length;
var i__8724__auto___48364 = (0);
while(true){
if((i__8724__auto___48364 < len__8723__auto___48363)){
args48296.push((arguments[i__8724__auto___48364]));

var G__48365 = (i__8724__auto___48364 + (1));
i__8724__auto___48364 = G__48365;
continue;
} else {
}
break;
}

var G__48298 = args48296.length;
switch (G__48298) {
case 1:
return sablono.core.range_field48295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field48295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48296.length)].join('')));

}
});

sablono.core.range_field48295.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.range_field48295.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.range_field48295.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.range_field48295.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field48295);

/**
 * Creates a search input field.
 */
sablono.core.search_field48299 = (function sablono$core$search_field48299(var_args){
var args48300 = [];
var len__8723__auto___48367 = arguments.length;
var i__8724__auto___48368 = (0);
while(true){
if((i__8724__auto___48368 < len__8723__auto___48367)){
args48300.push((arguments[i__8724__auto___48368]));

var G__48369 = (i__8724__auto___48368 + (1));
i__8724__auto___48368 = G__48369;
continue;
} else {
}
break;
}

var G__48302 = args48300.length;
switch (G__48302) {
case 1:
return sablono.core.search_field48299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field48299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48300.length)].join('')));

}
});

sablono.core.search_field48299.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.search_field48299.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.search_field48299.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.search_field48299.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field48299);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field48303 = (function sablono$core$tel_field48303(var_args){
var args48304 = [];
var len__8723__auto___48371 = arguments.length;
var i__8724__auto___48372 = (0);
while(true){
if((i__8724__auto___48372 < len__8723__auto___48371)){
args48304.push((arguments[i__8724__auto___48372]));

var G__48373 = (i__8724__auto___48372 + (1));
i__8724__auto___48372 = G__48373;
continue;
} else {
}
break;
}

var G__48306 = args48304.length;
switch (G__48306) {
case 1:
return sablono.core.tel_field48303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field48303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48304.length)].join('')));

}
});

sablono.core.tel_field48303.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.tel_field48303.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.tel_field48303.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.tel_field48303.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field48303);

/**
 * Creates a text input field.
 */
sablono.core.text_field48307 = (function sablono$core$text_field48307(var_args){
var args48308 = [];
var len__8723__auto___48375 = arguments.length;
var i__8724__auto___48376 = (0);
while(true){
if((i__8724__auto___48376 < len__8723__auto___48375)){
args48308.push((arguments[i__8724__auto___48376]));

var G__48377 = (i__8724__auto___48376 + (1));
i__8724__auto___48376 = G__48377;
continue;
} else {
}
break;
}

var G__48310 = args48308.length;
switch (G__48310) {
case 1:
return sablono.core.text_field48307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field48307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48308.length)].join('')));

}
});

sablono.core.text_field48307.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.text_field48307.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.text_field48307.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.text_field48307.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field48307);

/**
 * Creates a time input field.
 */
sablono.core.time_field48311 = (function sablono$core$time_field48311(var_args){
var args48312 = [];
var len__8723__auto___48379 = arguments.length;
var i__8724__auto___48380 = (0);
while(true){
if((i__8724__auto___48380 < len__8723__auto___48379)){
args48312.push((arguments[i__8724__auto___48380]));

var G__48381 = (i__8724__auto___48380 + (1));
i__8724__auto___48380 = G__48381;
continue;
} else {
}
break;
}

var G__48314 = args48312.length;
switch (G__48314) {
case 1:
return sablono.core.time_field48311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field48311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48312.length)].join('')));

}
});

sablono.core.time_field48311.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.time_field48311.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.time_field48311.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.time_field48311.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field48311);

/**
 * Creates a url input field.
 */
sablono.core.url_field48315 = (function sablono$core$url_field48315(var_args){
var args48316 = [];
var len__8723__auto___48383 = arguments.length;
var i__8724__auto___48384 = (0);
while(true){
if((i__8724__auto___48384 < len__8723__auto___48383)){
args48316.push((arguments[i__8724__auto___48384]));

var G__48385 = (i__8724__auto___48384 + (1));
i__8724__auto___48384 = G__48385;
continue;
} else {
}
break;
}

var G__48318 = args48316.length;
switch (G__48318) {
case 1:
return sablono.core.url_field48315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field48315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48316.length)].join('')));

}
});

sablono.core.url_field48315.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.url_field48315.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.url_field48315.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.url_field48315.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field48315);

/**
 * Creates a week input field.
 */
sablono.core.week_field48319 = (function sablono$core$week_field48319(var_args){
var args48320 = [];
var len__8723__auto___48387 = arguments.length;
var i__8724__auto___48388 = (0);
while(true){
if((i__8724__auto___48388 < len__8723__auto___48387)){
args48320.push((arguments[i__8724__auto___48388]));

var G__48389 = (i__8724__auto___48388 + (1));
i__8724__auto___48388 = G__48389;
continue;
} else {
}
break;
}

var G__48322 = args48320.length;
switch (G__48322) {
case 1:
return sablono.core.week_field48319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field48319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48320.length)].join('')));

}
});

sablono.core.week_field48319.cljs$core$IFn$_invoke$arity$1 = (function (name__48148__auto__){
return sablono.core.week_field48319.cljs$core$IFn$_invoke$arity$2(name__48148__auto__,null);
});

sablono.core.week_field48319.cljs$core$IFn$_invoke$arity$2 = (function (name__48148__auto__,value__48149__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__48148__auto__,value__48149__auto__);
});

sablono.core.week_field48319.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field48319);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box48391 = (function sablono$core$check_box48391(var_args){
var args48392 = [];
var len__8723__auto___48395 = arguments.length;
var i__8724__auto___48396 = (0);
while(true){
if((i__8724__auto___48396 < len__8723__auto___48395)){
args48392.push((arguments[i__8724__auto___48396]));

var G__48397 = (i__8724__auto___48396 + (1));
i__8724__auto___48396 = G__48397;
continue;
} else {
}
break;
}

var G__48394 = args48392.length;
switch (G__48394) {
case 1:
return sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48392.length)].join('')));

}
});

sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box48391.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box48391.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box48391);
/**
 * Creates a radio button.
 */
sablono.core.radio_button48399 = (function sablono$core$radio_button48399(var_args){
var args48400 = [];
var len__8723__auto___48403 = arguments.length;
var i__8724__auto___48404 = (0);
while(true){
if((i__8724__auto___48404 < len__8723__auto___48403)){
args48400.push((arguments[i__8724__auto___48404]));

var G__48405 = (i__8724__auto___48404 + (1));
i__8724__auto___48404 = G__48405;
continue;
} else {
}
break;
}

var G__48402 = args48400.length;
switch (G__48402) {
case 1:
return sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48400.length)].join('')));

}
});

sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button48399.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button48399.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button48399);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__48408 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__48408);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options48409 = (function sablono$core$select_options48409(coll){
var iter__8364__auto__ = (function sablono$core$select_options48409_$_iter__48428(s__48429){
return (new cljs.core.LazySeq(null,(function (){
var s__48429__$1 = s__48429;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__48429__$1);
if(temp__6753__auto__){
var s__48429__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48429__$2)){
var c__8362__auto__ = cljs.core.chunk_first(s__48429__$2);
var size__8363__auto__ = cljs.core.count(c__8362__auto__);
var b__48431 = cljs.core.chunk_buffer(size__8363__auto__);
if((function (){var i__48430 = (0);
while(true){
if((i__48430 < size__8363__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8362__auto__,i__48430);
cljs.core.chunk_append(b__48431,((cljs.core.sequential_QMARK_(x))?(function (){var vec__48440 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48440,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48440,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48440,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options48409.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48409.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48409.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__48446 = (i__48430 + (1));
i__48430 = G__48446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48431),sablono$core$select_options48409_$_iter__48428(cljs.core.chunk_rest(s__48429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48431),null);
}
} else {
var x = cljs.core.first(s__48429__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__48443 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options48409.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48409.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48409.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options48409_$_iter__48428(cljs.core.rest(s__48429__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options48409);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down48447 = (function sablono$core$drop_down48447(var_args){
var args48448 = [];
var len__8723__auto___48451 = arguments.length;
var i__8724__auto___48452 = (0);
while(true){
if((i__8724__auto___48452 < len__8723__auto___48451)){
args48448.push((arguments[i__8724__auto___48452]));

var G__48453 = (i__8724__auto___48452 + (1));
i__8724__auto___48452 = G__48453;
continue;
} else {
}
break;
}

var G__48450 = args48448.length;
switch (G__48450) {
case 2:
return sablono.core.drop_down48447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down48447.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48448.length)].join('')));

}
});

sablono.core.drop_down48447.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down48447.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down48447.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down48447.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down48447);
/**
 * Creates a text area element.
 */
sablono.core.text_area48455 = (function sablono$core$text_area48455(var_args){
var args48456 = [];
var len__8723__auto___48459 = arguments.length;
var i__8724__auto___48460 = (0);
while(true){
if((i__8724__auto___48460 < len__8723__auto___48459)){
args48456.push((arguments[i__8724__auto___48460]));

var G__48461 = (i__8724__auto___48460 + (1));
i__8724__auto___48460 = G__48461;
continue;
} else {
}
break;
}

var G__48458 = args48456.length;
switch (G__48458) {
case 1:
return sablono.core.text_area48455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area48455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48456.length)].join('')));

}
});

sablono.core.text_area48455.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area48455.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area48455.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7502__auto__ = value;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area48455.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area48455);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label48463 = (function sablono$core$label48463(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label48463);
/**
 * Creates a submit button.
 */
sablono.core.submit_button48464 = (function sablono$core$submit_button48464(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button48464);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button48465 = (function sablono$core$reset_button48465(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button48465);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to48466 = (function sablono$core$form_to48466(var_args){
var args__8730__auto__ = [];
var len__8723__auto___48476 = arguments.length;
var i__8724__auto___48477 = (0);
while(true){
if((i__8724__auto___48477 < len__8723__auto___48476)){
args__8730__auto__.push((arguments[i__8724__auto___48477]));

var G__48478 = (i__8724__auto___48477 + (1));
i__8724__auto___48477 = G__48478;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to48466.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

sablono.core.form_to48466.cljs$core$IFn$_invoke$arity$variadic = (function (p__48469,body){
var vec__48470 = p__48469;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48470,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__48473 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__48474 = "_method";
var G__48475 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__48473,G__48474,G__48475) : sablono.core.hidden_field.call(null,G__48473,G__48474,G__48475));
})()], null)),body));
});

sablono.core.form_to48466.cljs$lang$maxFixedArity = (1);

sablono.core.form_to48466.cljs$lang$applyTo = (function (seq48467){
var G__48468 = cljs.core.first(seq48467);
var seq48467__$1 = cljs.core.next(seq48467);
return sablono.core.form_to48466.cljs$core$IFn$_invoke$arity$variadic(G__48468,seq48467__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to48466);

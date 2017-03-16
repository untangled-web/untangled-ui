// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(untangled.i18n.core._STAR_current_locale_STAR_) : cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_));
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(untangled.i18n.core._STAR_loaded_translations_STAR_) : cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_)),untangled.i18n.current_locale());
});
tr = (function (msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctxt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__45123__delegate = function (fmt,p__45115){
var map__45116 = p__45115;
var map__45116__$1 = ((((!((map__45116 == null)))?((((map__45116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45116):map__45116);
var argmap = map__45116__$1;
try{var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = untangled.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale()));
return formatter.format(cljs.core.clj__GT_js(argmap));
}catch (e45120){var e = e45120;
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Failed to format ",fmt," args: ",argmap," exception: ",e], 0));

return "???";
}};
var G__45123 = function (fmt,var_args){
var p__45115 = null;
if (arguments.length > 1) {
var G__45127__i = 0, G__45127__a = new Array(arguments.length -  1);
while (G__45127__i < G__45127__a.length) {G__45127__a[G__45127__i] = arguments[G__45127__i + 1]; ++G__45127__i;}
  p__45115 = new cljs.core.IndexedSeq(G__45127__a,0);
} 
return G__45123__delegate.call(this,fmt,p__45115);};
G__45123.cljs$lang$maxFixedArity = 1;
G__45123.cljs$lang$applyTo = (function (arglist__45128){
var fmt = cljs.core.first(arglist__45128);
var p__45115 = cljs.core.rest(arglist__45128);
return G__45123__delegate(fmt,p__45115);
});
G__45123.cljs$core$IFn$_invoke$arity$variadic = G__45123__delegate;
return G__45123;
})()
;

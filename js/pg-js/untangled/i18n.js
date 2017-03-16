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
var G__40306__delegate = function (fmt,p__40302){
var map__40303 = p__40302;
var map__40303__$1 = ((((!((map__40303 == null)))?((((map__40303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40303):map__40303);
var argmap = map__40303__$1;
try{var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = untangled.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale()));
return formatter.format(cljs.core.clj__GT_js(argmap));
}catch (e40305){var e = e40305;
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Failed to format ",fmt," args: ",argmap," exception: ",e], 0));

return "???";
}};
var G__40306 = function (fmt,var_args){
var p__40302 = null;
if (arguments.length > 1) {
var G__40307__i = 0, G__40307__a = new Array(arguments.length -  1);
while (G__40307__i < G__40307__a.length) {G__40307__a[G__40307__i] = arguments[G__40307__i + 1]; ++G__40307__i;}
  p__40302 = new cljs.core.IndexedSeq(G__40307__a,0);
} 
return G__40306__delegate.call(this,fmt,p__40302);};
G__40306.cljs$lang$maxFixedArity = 1;
G__40306.cljs$lang$applyTo = (function (arglist__40308){
var fmt = cljs.core.first(arglist__40308);
var p__40302 = cljs.core.rest(arglist__40308);
return G__40306__delegate(fmt,p__40302);
});
G__40306.cljs$core$IFn$_invoke$arity$variadic = G__40306__delegate;
return G__40306;
})()
;

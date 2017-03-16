// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
goog.require('yahoo.intl_messageformat_with_locales');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_);
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.call(null,cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_),untangled.i18n.current_locale.call(null));
});
tr = (function (msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctxt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__701411__delegate = function (fmt,p__701405){
var map__701406 = p__701405;
var map__701406__$1 = ((((!((map__701406 == null)))?((((map__701406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__701406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__701406):map__701406);
var argmap = map__701406__$1;
try{var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e701408){var e = e701408;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__701411 = function (fmt,var_args){
var p__701405 = null;
if (arguments.length > 1) {
var G__701417__i = 0, G__701417__a = new Array(arguments.length -  1);
while (G__701417__i < G__701417__a.length) {G__701417__a[G__701417__i] = arguments[G__701417__i + 1]; ++G__701417__i;}
  p__701405 = new cljs.core.IndexedSeq(G__701417__a,0);
} 
return G__701411__delegate.call(this,fmt,p__701405);};
G__701411.cljs$lang$maxFixedArity = 1;
G__701411.cljs$lang$applyTo = (function (arglist__701418){
var fmt = cljs.core.first(arglist__701418);
var p__701405 = cljs.core.rest(arglist__701418);
return G__701411__delegate(fmt,p__701405);
});
G__701411.cljs$core$IFn$_invoke$arity$variadic = G__701411__delegate;
return G__701411;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1489703350506
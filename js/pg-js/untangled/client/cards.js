// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.core');
goog.require('devcards.core');
goog.require('untangled.dom');
/**
 * Embed an untangled client application in a devcard. The `args` can be any args you'd
 *   normally pass to `new-untangled-client` except for `:initial-state` (which is taken from
 *   InitialAppState or the card's data in that preferred order)
 */
untangled.client.cards.untangled_app = (function untangled$client$cards$untangled_app(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50282 = arguments.length;
var i__8724__auto___50283 = (0);
while(true){
if((i__8724__auto___50283 < len__8723__auto___50282)){
args__8730__auto__.push((arguments[i__8724__auto___50283]));

var G__50284 = (i__8724__auto___50283 + (1));
i__8724__auto___50283 = G__50284;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,root_ui,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$devcards$core_SLASH_dom_DASH_node),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$state_DASH_atom__50276__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$node__50277__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$client$core_SLASH_mount),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$client$core_SLASH_new_DASH_untangled_DASH_client),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$initial_DASH_state),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$state_DASH_atom__50276__auto__),args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = root_ui;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$node__50277__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_setTimeout),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8436__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$state_DASH_atom__50276__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ui_SLASH_react_DASH_key),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$untangled$dom_SLASH_unique_DASH_key))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1000))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
});

untangled.client.cards.untangled_app.cljs$lang$maxFixedArity = (3);

untangled.client.cards.untangled_app.cljs$lang$applyTo = (function (seq50278){
var G__50279 = cljs.core.first(seq50278);
var seq50278__$1 = cljs.core.next(seq50278);
var G__50280 = cljs.core.first(seq50278__$1);
var seq50278__$2 = cljs.core.next(seq50278__$1);
var G__50281 = cljs.core.first(seq50278__$2);
var seq50278__$3 = cljs.core.next(seq50278__$2);
return untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic(G__50279,G__50280,G__50281,seq50278__$3);
});


untangled.client.cards.untangled_app.cljs$lang$macro = true;

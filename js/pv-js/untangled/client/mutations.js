// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__8533__auto__ = (function (){var G__45016 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45016) : cljs.core.atom.call(null,G__45016));
})();
var prefer_table__8534__auto__ = (function (){var G__45017 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45017) : cljs.core.atom.call(null,G__45017));
})();
var method_cache__8535__auto__ = (function (){var G__45018 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45018) : cljs.core.atom.call(null,G__45018));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__45019 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45019) : cljs.core.atom.call(null,G__45019));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("untangled.client.mutations","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__8533__auto__ = (function (){var G__45025 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45025) : cljs.core.atom.call(null,G__45025));
})();
var prefer_table__8534__auto__ = (function (){var G__45026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45026) : cljs.core.atom.call(null,G__45026));
})();
var method_cache__8535__auto__ = (function (){var G__45027 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45027) : cljs.core.atom.call(null,G__45027));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__45028 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45028) : cljs.core.atom.call(null,G__45028));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("untangled.client.mutations","post-mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ui_SLASH_toggle),(function (){var x__8436__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$field),(function (){var x__8436__auto__ = field;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ui_SLASH_set_DASH_props),(function (){var x__8436__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
untangled.client.mutations.target_value = (function untangled$client$mutations$target_value(evt){
return evt.target.value;
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45085 = arguments.length;
var i__8724__auto___45086 = (0);
while(true){
if((i__8724__auto___45086 < len__8723__auto___45085)){
args__8730__auto__.push((arguments[i__8724__auto___45086]));

var G__45087 = (i__8724__auto___45086 + (1));
i__8724__auto___45086 = G__45087;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45077){
var map__45078 = p__45077;
var map__45078__$1 = ((((!((map__45078 == null)))?((((map__45078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45078):map__45078);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__7490__auto__ = (function (){var or__7502__auto__ = event;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not((function (){var and__7490__auto____$1 = event;
if(cljs.core.truth_(and__7490__auto____$1)){
return value;
} else {
return and__7490__auto____$1;
}
})());
} else {
return and__7490__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer((cljs.core.truth_(event)?untangled.client.mutations.target_value(event):value));
return untangled.client.mutations.set_value_BANG_(component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq45073){
var G__45074 = cljs.core.first(seq45073);
var seq45073__$1 = cljs.core.next(seq45073);
var G__45075 = cljs.core.first(seq45073__$1);
var seq45073__$2 = cljs.core.next(seq45073__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45074,G__45075,seq45073__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45100 = arguments.length;
var i__8724__auto___45101 = (0);
while(true){
if((i__8724__auto___45101 < len__8723__auto___45100)){
args__8730__auto__.push((arguments[i__8724__auto___45101]));

var G__45102 = (i__8724__auto___45101 + (1));
i__8724__auto___45101 = G__45102;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__45097){
var map__45098 = p__45097;
var map__45098__$1 = ((((!((map__45098 == null)))?((((map__45098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45098):map__45098);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__7490__auto__ = (function (){var or__7502__auto__ = event;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not((function (){var and__7490__auto____$1 = event;
if(cljs.core.truth_(and__7490__auto____$1)){
return value;
} else {
return and__7490__auto____$1;
}
})());
} else {
return and__7490__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?untangled.client.mutations.target_value(event):value);
return untangled.client.mutations.set_value_BANG_(component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq45094){
var G__45095 = cljs.core.first(seq45094);
var seq45094__$1 = cljs.core.next(seq45094);
var G__45096 = cljs.core.first(seq45094__$1);
var seq45094__$2 = cljs.core.next(seq45094__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45095,G__45096,seq45094__$2);
});


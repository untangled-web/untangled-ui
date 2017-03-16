// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__8533__auto__ = (function (){var G__41901 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41901) : cljs.core.atom.call(null,G__41901));
})();
var prefer_table__8534__auto__ = (function (){var G__41902 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41902) : cljs.core.atom.call(null,G__41902));
})();
var method_cache__8535__auto__ = (function (){var G__41903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41903) : cljs.core.atom.call(null,G__41903));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__41904 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41904) : cljs.core.atom.call(null,G__41904));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("untangled.client.mutations","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__8533__auto__ = (function (){var G__41905 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41905) : cljs.core.atom.call(null,G__41905));
})();
var prefer_table__8534__auto__ = (function (){var G__41906 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41906) : cljs.core.atom.call(null,G__41906));
})();
var method_cache__8535__auto__ = (function (){var G__41907 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41907) : cljs.core.atom.call(null,G__41907));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__41908 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41908) : cljs.core.atom.call(null,G__41908));
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
var len__8723__auto___41915 = arguments.length;
var i__8724__auto___41916 = (0);
while(true){
if((i__8724__auto___41916 < len__8723__auto___41915)){
args__8730__auto__.push((arguments[i__8724__auto___41916]));

var G__41917 = (i__8724__auto___41916 + (1));
i__8724__auto___41916 = G__41917;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__41912){
var map__41913 = p__41912;
var map__41913__$1 = ((((!((map__41913 == null)))?((((map__41913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41913):map__41913);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41913__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41913__$1,cljs.core.cst$kw$value);
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

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq41909){
var G__41910 = cljs.core.first(seq41909);
var seq41909__$1 = cljs.core.next(seq41909);
var G__41911 = cljs.core.first(seq41909__$1);
var seq41909__$2 = cljs.core.next(seq41909__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41910,G__41911,seq41909__$2);
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
var len__8723__auto___41924 = arguments.length;
var i__8724__auto___41925 = (0);
while(true){
if((i__8724__auto___41925 < len__8723__auto___41924)){
args__8730__auto__.push((arguments[i__8724__auto___41925]));

var G__41926 = (i__8724__auto___41925 + (1));
i__8724__auto___41925 = G__41926;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((2) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8731__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__41921){
var map__41922 = p__41921;
var map__41922__$1 = ((((!((map__41922 == null)))?((((map__41922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41922):map__41922);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,cljs.core.cst$kw$event);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41922__$1,cljs.core.cst$kw$value);
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

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq41918){
var G__41919 = cljs.core.first(seq41918);
var seq41918__$1 = cljs.core.next(seq41918);
var G__41920 = cljs.core.first(seq41918__$1);
var seq41918__$2 = cljs.core.next(seq41918__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41919,G__41920,seq41918__$2);
});


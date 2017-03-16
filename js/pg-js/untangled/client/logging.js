// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel((function (){var G__40258 = (function (){var G__40259 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__40259) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_level)].join('')));

}
})();
return goog.debug.Logger.Level.getPredefinedLevel(G__40258);
})());
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40263_40265 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40264_40266 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40263_40265,_STAR_print_fn_STAR_40264_40266,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_40263_40265,_STAR_print_fn_STAR_40264_40266,sb__8594__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40264_40266;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40263_40265;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args40267 = [];
var len__8723__auto___40274 = arguments.length;
var i__8724__auto___40275 = (0);
while(true){
if((i__8724__auto___40275 < len__8723__auto___40274)){
args40267.push((arguments[i__8724__auto___40275]));

var G__40276 = (i__8724__auto___40275 + (1));
i__8724__auto___40275 = G__40276;
continue;
} else {
}
break;
}

var G__40269 = args40267.length;
switch (G__40269) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40267.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
var G__40270_40278 = om.next._STAR_logger_STAR_;
var G__40271_40279 = untangled.client.logging.value_message("DEBUG",value);
goog.log.fine(G__40270_40278,G__40271_40279);

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
var G__40272_40280 = om.next._STAR_logger_STAR_;
var G__40273_40281 = untangled.client.logging.value_message(msg,value);
goog.log.fine(G__40272_40280,G__40273_40281);

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__8730__auto__ = [];
var len__8723__auto___40285 = arguments.length;
var i__8724__auto___40286 = (0);
while(true){
if((i__8724__auto___40286 < len__8723__auto___40285)){
args__8730__auto__.push((arguments[i__8724__auto___40286]));

var G__40287 = (i__8724__auto___40286 + (1));
i__8724__auto___40286 = G__40287;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__40283 = om.next._STAR_logger_STAR_;
var G__40284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.info(G__40283,G__40284);
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq40282){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40282));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__8730__auto__ = [];
var len__8723__auto___40291 = arguments.length;
var i__8724__auto___40292 = (0);
while(true){
if((i__8724__auto___40292 < len__8723__auto___40291)){
args__8730__auto__.push((arguments[i__8724__auto___40292]));

var G__40293 = (i__8724__auto___40292 + (1));
i__8724__auto___40292 = G__40293;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__40289 = om.next._STAR_logger_STAR_;
var G__40290 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.warning(G__40289,G__40290);
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq40288){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40288));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__8730__auto__ = [];
var len__8723__auto___40297 = arguments.length;
var i__8724__auto___40298 = (0);
while(true){
if((i__8724__auto___40298 < len__8723__auto___40297)){
args__8730__auto__.push((arguments[i__8724__auto___40298]));

var G__40299 = (i__8724__auto___40298 + (1));
i__8724__auto___40298 = G__40299;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__40295 = om.next._STAR_logger_STAR_;
var G__40296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.error(G__40295,G__40296);
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq40294){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40294));
});


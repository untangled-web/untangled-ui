// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel((function (){var G__45031 = (function (){var G__45032 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__45032) {
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
return goog.debug.Logger.Level.getPredefinedLevel(G__45031);
})());
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45041_45043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45042_45044 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45041_45043,_STAR_print_fn_STAR_45042_45044,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_45041_45043,_STAR_print_fn_STAR_45042_45044,sb__8594__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45042_45044;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45041_45043;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args45046 = [];
var len__8723__auto___45059 = arguments.length;
var i__8724__auto___45060 = (0);
while(true){
if((i__8724__auto___45060 < len__8723__auto___45059)){
args45046.push((arguments[i__8724__auto___45060]));

var G__45061 = (i__8724__auto___45060 + (1));
i__8724__auto___45060 = G__45061;
continue;
} else {
}
break;
}

var G__45051 = args45046.length;
switch (G__45051) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45046.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
var G__45055_45063 = om.next._STAR_logger_STAR_;
var G__45056_45064 = untangled.client.logging.value_message("DEBUG",value);
goog.log.fine(G__45055_45063,G__45056_45064);

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
var G__45057_45065 = om.next._STAR_logger_STAR_;
var G__45058_45066 = untangled.client.logging.value_message(msg,value);
goog.log.fine(G__45057_45065,G__45058_45066);

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45070 = arguments.length;
var i__8724__auto___45071 = (0);
while(true){
if((i__8724__auto___45071 < len__8723__auto___45070)){
args__8730__auto__.push((arguments[i__8724__auto___45071]));

var G__45072 = (i__8724__auto___45071 + (1));
i__8724__auto___45071 = G__45072;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__45068 = om.next._STAR_logger_STAR_;
var G__45069 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.info(G__45068,G__45069);
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq45067){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45067));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45082 = arguments.length;
var i__8724__auto___45083 = (0);
while(true){
if((i__8724__auto___45083 < len__8723__auto___45082)){
args__8730__auto__.push((arguments[i__8724__auto___45083]));

var G__45084 = (i__8724__auto___45083 + (1));
i__8724__auto___45083 = G__45084;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__45080 = om.next._STAR_logger_STAR_;
var G__45081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.warning(G__45080,G__45081);
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq45076){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45076));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__8730__auto__ = [];
var len__8723__auto___45091 = arguments.length;
var i__8724__auto___45092 = (0);
while(true){
if((i__8724__auto___45092 < len__8723__auto___45091)){
args__8730__auto__.push((arguments[i__8724__auto___45092]));

var G__45093 = (i__8724__auto___45092 + (1));
i__8724__auto___45092 = G__45093;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var G__45089 = om.next._STAR_logger_STAR_;
var G__45090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",data));
return goog.log.error(G__45089,G__45090);
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq45088){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45088));
});


// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__701334 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__701334) {
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
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_701341_701346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_701342_701347 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_701341_701346,_STAR_print_fn_STAR_701342_701347,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_701341_701346,_STAR_print_fn_STAR_701342_701347,sb__28742__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_701342_701347;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_701341_701346;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args701349 = [];
var len__28871__auto___701354 = arguments.length;
var i__28872__auto___701355 = (0);
while(true){
if((i__28872__auto___701355 < len__28871__auto___701354)){
args701349.push((arguments[i__28872__auto___701355]));

var G__701359 = (i__28872__auto___701355 + (1));
i__28872__auto___701355 = G__701359;
continue;
} else {
}
break;
}

var G__701352 = args701349.length;
switch (G__701352) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args701349.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701365 = arguments.length;
var i__28872__auto___701366 = (0);
while(true){
if((i__28872__auto___701366 < len__28871__auto___701365)){
args__28878__auto__.push((arguments[i__28872__auto___701366]));

var G__701367 = (i__28872__auto___701366 + (1));
i__28872__auto___701366 = G__701367;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq701364){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq701364));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701369 = arguments.length;
var i__28872__auto___701370 = (0);
while(true){
if((i__28872__auto___701370 < len__28871__auto___701369)){
args__28878__auto__.push((arguments[i__28872__auto___701370]));

var G__701371 = (i__28872__auto___701370 + (1));
i__28872__auto___701370 = G__701371;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq701368){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq701368));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__28878__auto__ = [];
var len__28871__auto___701379 = arguments.length;
var i__28872__auto___701381 = (0);
while(true){
if((i__28872__auto___701381 < len__28871__auto___701379)){
args__28878__auto__.push((arguments[i__28872__auto___701381]));

var G__701383 = (i__28872__auto___701381 + (1));
i__28872__auto___701381 = G__701383;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq701375){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq701375));
});


//# sourceMappingURL=logging.js.map?rel=1489703350462
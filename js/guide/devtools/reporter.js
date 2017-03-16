// Compiled by ClojureScript 1.9.473 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711379 = arguments.length;
var i__28872__auto___711380 = (0);
while(true){
if((i__28872__auto___711380 < len__28871__auto___711379)){
args__28878__auto__.push((arguments[i__28872__auto___711380]));

var G__711395 = (i__28872__auto___711380 + (1));
i__28872__auto___711380 = G__711395;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__711372){
var vec__711373 = p__711372;
var context = cljs.core.nth.call(null,vec__711373,(0),null);
var footer = cljs.core.nth.call(null,vec__711373,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__27650__auto__ = e.message;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("In "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):".")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n")].join('');
var footer_msg = ((!((footer == null)))?footer:[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("---\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please report the issue here: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e711376){var e__$1 = e711376;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq711370){
var G__711371 = cljs.core.first.call(null,seq711370);
var seq711370__$1 = cljs.core.next.call(null,seq711370);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__711371,seq711370__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1489703358732
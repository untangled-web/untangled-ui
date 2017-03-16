// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__6751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__6751__auto__)){
var doc = temp__6751__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47606_47608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47607_47609 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47606_47608,_STAR_print_fn_STAR_47607_47609,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_47606_47608,_STAR_print_fn_STAR_47607_47609,sb__8594__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47607_47609;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47606_47608;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
}catch (e47604){if((e47604 instanceof Error)){
var e1 = e47604;
try{return obj.toString();
}catch (e47605){if((e47605 instanceof Error)){
var e2 = e47605;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e47605;

}
}} else {
throw e47604;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_47611 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str(code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_47611;
}});

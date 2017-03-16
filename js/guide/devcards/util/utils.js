// Compiled by ClojureScript 1.9.473 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
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
try{var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_701445_701451 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_701446_701452 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_701445_701451,_STAR_print_fn_STAR_701446_701452,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_701445_701451,_STAR_print_fn_STAR_701446_701452,sb__28742__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_701446_701452;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_701445_701451;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
}catch (e701441){if((e701441 instanceof Error)){
var e1 = e701441;
try{return obj.toString();
}catch (e701442){if((e701442 instanceof Error)){
var e2 = e701442;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e701442;

}
}} else {
throw e701441;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_701460 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_701460;
}});

//# sourceMappingURL=utils.js.map?rel=1489703350528
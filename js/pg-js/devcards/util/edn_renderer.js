// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.edn_renderer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sablono.core');
goog.require('devcards.util.utils');
if(typeof devcards.util.edn_renderer._STAR_key_counter_STAR_ !== 'undefined'){
} else {
devcards.util.edn_renderer._STAR_key_counter_STAR_ = null;
}
devcards.util.edn_renderer.get_key = (function devcards$util$edn_renderer$get_key(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("k-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.util.edn_renderer._STAR_key_counter_STAR_) : cljs.core.deref.call(null,devcards.util.edn_renderer._STAR_key_counter_STAR_)))].join('');
});
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (!(cljs.core.seq_QMARK_(x))) && (!(cljs.core.coll_QMARK_(x)));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var G__48484 = "span";
var G__48485 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__48486 = sablono.interpreter.interpret(s);
return React.createElement(G__48484,G__48485,G__48486);
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__48497 = "span";
var G__48498 = ({"key": devcards.util.edn_renderer.get_key()});
var G__48499 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__48500 = (function (){var G__48501 = "span";
var G__48502 = ({"className": "clearfix"});
return React.createElement(G__48501,G__48502);
})();
return React.createElement(G__48497,G__48498,G__48499,G__48500);
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
if(!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__48506 = "span";
var G__48507 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__48508 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return React.createElement(G__48506,G__48507,G__48508);
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__48512 = "span";
var G__48513 = ({"key": index});
var G__48514 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__48512,G__48513,G__48514);
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__48515){
var vec__48523 = p__48515;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(1),null);
var G__48526 = "span";
var G__48527 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0)), "className": "keyval"});
var G__48528 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__48529 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__48526,G__48527,G__48528,G__48529);
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__48544 = "span";
var G__48545 = ({"className": class_str, "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rct_coll))].join('')});
var G__48546 = (function (){var G__48549 = "span";
var G__48550 = ({"key": (1), "className": "opener"});
var G__48551 = sablono.interpreter.interpret(opener);
return React.createElement(G__48549,G__48550,G__48551);
})();
var G__48547 = (function (){var G__48552 = "span";
var G__48553 = ({"key": (2), "className": "contents"});
var G__48554 = sablono.interpreter.interpret(rct_coll);
return React.createElement(G__48552,G__48553,G__48554);
})();
var G__48548 = (function (){var G__48555 = "span";
var G__48556 = ({"key": (3), "className": "closer"});
var G__48557 = sablono.interpreter.interpret(closer);
return React.createElement(G__48555,G__48556,G__48557);
})();
return React.createElement(G__48544,G__48545,G__48546,G__48547,G__48548);
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close([cljs.core.str.cljs$core$IFn$_invoke$arity$1("collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var _STAR_key_counter_STAR_48562 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
devcards.util.edn_renderer._STAR_key_counter_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));

try{var G__48563 = "div";
var G__48564 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__48565 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return React.createElement(G__48563,G__48564,G__48565);
}finally {devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR_48562;
}});

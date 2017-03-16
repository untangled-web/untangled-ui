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
var G__46854 = "span";
var G__46855 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__46856 = sablono.interpreter.interpret(s);
return React.createElement(G__46854,G__46855,G__46856);
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__46867 = "span";
var G__46868 = ({"key": devcards.util.edn_renderer.get_key()});
var G__46869 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__46870 = (function (){var G__46871 = "span";
var G__46872 = ({"className": "clearfix"});
return React.createElement(G__46871,G__46872);
})();
return React.createElement(G__46867,G__46868,G__46869,G__46870);
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
var G__46876 = "span";
var G__46877 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__46878 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return React.createElement(G__46876,G__46877,G__46878);
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__46882 = "span";
var G__46883 = ({"key": index});
var G__46884 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__46882,G__46883,G__46884);
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__46891){
var vec__46901 = p__46891;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46901,(1),null);
var G__46904 = "span";
var G__46905 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0)), "className": "keyval"});
var G__46906 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__46907 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return React.createElement(G__46904,G__46905,G__46906,G__46907);
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__46926 = "span";
var G__46927 = ({"className": class_str, "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rct_coll))].join('')});
var G__46928 = (function (){var G__46931 = "span";
var G__46932 = ({"key": (1), "className": "opener"});
var G__46933 = sablono.interpreter.interpret(opener);
return React.createElement(G__46931,G__46932,G__46933);
})();
var G__46929 = (function (){var G__46934 = "span";
var G__46935 = ({"key": (2), "className": "contents"});
var G__46936 = sablono.interpreter.interpret(rct_coll);
return React.createElement(G__46934,G__46935,G__46936);
})();
var G__46930 = (function (){var G__46937 = "span";
var G__46938 = ({"key": (3), "className": "closer"});
var G__46939 = sablono.interpreter.interpret(closer);
return React.createElement(G__46937,G__46938,G__46939);
})();
return React.createElement(G__46926,G__46927,G__46928,G__46929,G__46930);
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
var _STAR_key_counter_STAR_46983 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
devcards.util.edn_renderer._STAR_key_counter_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));

try{var G__46989 = "div";
var G__46990 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__46991 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return React.createElement(G__46989,G__46990,G__46991);
}finally {devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR_46983;
}});

// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__7502__auto__ = (function (){var and__7490__auto__ = typeof Symbol !== 'undefined';
if(and__7490__auto__){
var and__7490__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__7490__auto____$1){
var and__7490__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__7490__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__49354_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__49354_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args49355 = [];
var len__8723__auto___49358 = arguments.length;
var i__8724__auto___49359 = (0);
while(true){
if((i__8724__auto___49359 < len__8723__auto___49358)){
args49355.push((arguments[i__8724__auto___49359]));

var G__49360 = (i__8724__auto___49359 + (1));
i__8724__auto___49359 = G__49360;
continue;
} else {
}
break;
}

var G__49357 = args49355.length;
switch (G__49357) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49355.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__7490__auto__ = cljs.core.map_QMARK_(c);
if(and__7490__auto__){
var map__49368 = c;
var map__49368__$1 = ((((!((map__49368 == null)))?((((map__49368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49368):map__49368);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49368__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49368__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__7490__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__6753__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__6753__auto__)){
var node = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__6753__auto____$1)){
var hljs = temp__6753__auto____$1;
var temp__6753__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__6753__auto____$2)){
var highlight_block = temp__6753__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__48597__auto___49388 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__49370 = "pre";
var G__49371 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__49373 = this$;
var G__49374 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__49373,G__49374) : devcards.core.get_props.call(null,G__49373,G__49374));
})())});
var G__49372 = (function (){var G__49375 = "code";
var G__49376 = ({"className": (function (){var or__7502__auto__ = (function (){var G__49380 = this$;
var G__49381 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__49380,G__49381) : devcards.core.get_props.call(null,G__49380,G__49381));
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__49377 = sablono.interpreter.interpret((function (){var G__49382 = this$;
var G__49383 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__49382,G__49383) : devcards.core.get_props.call(null,G__49382,G__49383));
})());
return React.createElement(G__49375,G__49376,G__49377);
})();
return React.createElement(G__49370,G__49371,G__49372);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__48597__auto___49388);
}

var seq__49384_49389 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__49385_49390 = null;
var count__49386_49391 = (0);
var i__49387_49392 = (0);
while(true){
if((i__49387_49392 < count__49386_49391)){
var property__48598__auto___49393 = chunk__49385_49390.cljs$core$IIndexed$_nth$arity$2(null,i__49387_49392);
if(cljs.core.truth_((base__48597__auto___49388[property__48598__auto___49393]))){
(devcards.core.CodeHighlight.prototype[property__48598__auto___49393] = (base__48597__auto___49388[property__48598__auto___49393]));
} else {
}

var G__49394 = seq__49384_49389;
var G__49395 = chunk__49385_49390;
var G__49396 = count__49386_49391;
var G__49397 = (i__49387_49392 + (1));
seq__49384_49389 = G__49394;
chunk__49385_49390 = G__49395;
count__49386_49391 = G__49396;
i__49387_49392 = G__49397;
continue;
} else {
var temp__6753__auto___49398 = cljs.core.seq(seq__49384_49389);
if(temp__6753__auto___49398){
var seq__49384_49399__$1 = temp__6753__auto___49398;
if(cljs.core.chunked_seq_QMARK_(seq__49384_49399__$1)){
var c__8413__auto___49400 = cljs.core.chunk_first(seq__49384_49399__$1);
var G__49401 = cljs.core.chunk_rest(seq__49384_49399__$1);
var G__49402 = c__8413__auto___49400;
var G__49403 = cljs.core.count(c__8413__auto___49400);
var G__49404 = (0);
seq__49384_49389 = G__49401;
chunk__49385_49390 = G__49402;
count__49386_49391 = G__49403;
i__49387_49392 = G__49404;
continue;
} else {
var property__48598__auto___49405 = cljs.core.first(seq__49384_49399__$1);
if(cljs.core.truth_((base__48597__auto___49388[property__48598__auto___49405]))){
(devcards.core.CodeHighlight.prototype[property__48598__auto___49405] = (base__48597__auto___49388[property__48598__auto___49405]));
} else {
}

var G__49406 = cljs.core.next(seq__49384_49399__$1);
var G__49407 = null;
var G__49408 = (0);
var G__49409 = (0);
seq__49384_49389 = G__49406;
chunk__49385_49390 = G__49407;
count__49386_49391 = G__49408;
i__49387_49392 = G__49409;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__49412 = devcards.core.CodeHighlight;
var G__49413 = ({"code": code_str, "lang": lang});
return React.createElement(G__49412,G__49413);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__8533__auto__ = (function (){var G__49414 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49414) : cljs.core.atom.call(null,G__49414));
})();
var prefer_table__8534__auto__ = (function (){var G__49415 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49415) : cljs.core.atom.call(null,G__49415));
})();
var method_cache__8535__auto__ = (function (){var G__49416 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49416) : cljs.core.atom.call(null,G__49416));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__49417 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49417) : cljs.core.atom.call(null,G__49417));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__49418){
var map__49419 = p__49418;
var map__49419__$1 = ((((!((map__49419 == null)))?((((map__49419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49419):map__49419);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49419__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__49421){
var map__49422 = p__49421;
var map__49422__$1 = ((((!((map__49422 == null)))?((((map__49422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49422):map__49422);
var block = map__49422__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49422__$1,cljs.core.cst$kw$content);
var G__49424 = devcards.core.CodeHighlight;
var G__49425 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__49424,G__49425);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__8730__auto__ = [];
var len__8723__auto___49436 = arguments.length;
var i__8724__auto___49437 = (0);
while(true){
if((i__8724__auto___49437 < len__8723__auto___49436)){
args__8730__auto__.push((arguments[i__8724__auto___49437]));

var G__49438 = (i__8724__auto___49437 + (1));
i__8724__auto___49437 = G__49438;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("```clojure\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var G__49427 = "div";
var G__49428 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__49429 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__49427,G__49428,blocks,strs__$1){
return (function (i,data){
var G__49430 = "div";
var G__49431 = ({"key": i});
var G__49432 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__49430,G__49431,G__49432);
});})(G__49427,G__49428,blocks,strs__$1))
,blocks));
return React.createElement(G__49427,G__49428,G__49429);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__49433 = "div";
var G__49434 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__49435 = sablono.interpreter.interpret(message);
return React.createElement(G__49433,G__49434,G__49435);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq49426){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49426));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__49443 = "div";
var G__49444 = ({"key": "devcards_naked-card", "className": (function (){var G__49446 = devcards.system.devcards_rendered_card_class;
var G__49446__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49446),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" com-rigsomelight-devcards-devcard-padding")].join(''):G__49446);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49446__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__49446__$1;
}
})()});
var G__49445 = sablono.interpreter.interpret(children);
return React.createElement(G__49443,G__49444,G__49445);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args49447 = [];
var len__8723__auto___49469 = arguments.length;
var i__8724__auto___49470 = (0);
while(true){
if((i__8724__auto___49470 < len__8723__auto___49469)){
args49447.push((arguments[i__8724__auto___49470]));

var G__49471 = (i__8724__auto___49470 + (1));
i__8724__auto___49470 = G__49471;
continue;
} else {
}
break;
}

var G__49449 = args49447.length;
switch (G__49449) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49447.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__49450 = card;
var map__49450__$1 = ((((!((map__49450 == null)))?((((map__49450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49450):map__49450);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49450__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49450__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__49452 = "div";
var G__49453 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__49454 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__49452,G__49453,G__49454);
} else {
var G__49455 = "div";
var G__49456 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__49457 = (function (){var G__49459 = "div";
var G__49460 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__49461 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__49462 = "a";
var G__49463 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__49462,G__49459,G__49460,G__49455,G__49456,map__49450,map__49450__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__49462,G__49459,G__49460,G__49455,G__49456,map__49450,map__49450__$1,path,options))
)});
var G__49464 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__49465 = " ";
return React.createElement(G__49462,G__49463,G__49464,G__49465);
})()):sablono.interpreter.interpret((function (){var attrs49466 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs49466))?sablono.interpreter.attributes(attrs49466):null),((cljs.core.map_QMARK_(attrs49466))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49466)], null)));
})()));
return React.createElement(G__49459,G__49460,G__49461);
})();
var G__49458 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__49455,G__49456,G__49457,G__49458);
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (devcards.core._devcard_options[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__8221__auto__.call(null,this$,devcard_opts));
} else {
var m__8221__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__8221__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (devcards.core._devcard[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__8221__auto__.call(null,this$,devcard_opts));
} else {
var m__8221__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__8221__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__6753__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__6753__auto__)){
var comp = temp__6753__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
var base__48597__auto___49478 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs49473 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49473))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs49473], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs49473))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49473)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__48597__auto___49478);
}

var seq__49474_49479 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__49475_49480 = null;
var count__49476_49481 = (0);
var i__49477_49482 = (0);
while(true){
if((i__49477_49482 < count__49476_49481)){
var property__48598__auto___49483 = chunk__49475_49480.cljs$core$IIndexed$_nth$arity$2(null,i__49477_49482);
if(cljs.core.truth_((base__48597__auto___49478[property__48598__auto___49483]))){
(devcards.core.DontUpdate.prototype[property__48598__auto___49483] = (base__48597__auto___49478[property__48598__auto___49483]));
} else {
}

var G__49484 = seq__49474_49479;
var G__49485 = chunk__49475_49480;
var G__49486 = count__49476_49481;
var G__49487 = (i__49477_49482 + (1));
seq__49474_49479 = G__49484;
chunk__49475_49480 = G__49485;
count__49476_49481 = G__49486;
i__49477_49482 = G__49487;
continue;
} else {
var temp__6753__auto___49488 = cljs.core.seq(seq__49474_49479);
if(temp__6753__auto___49488){
var seq__49474_49489__$1 = temp__6753__auto___49488;
if(cljs.core.chunked_seq_QMARK_(seq__49474_49489__$1)){
var c__8413__auto___49490 = cljs.core.chunk_first(seq__49474_49489__$1);
var G__49491 = cljs.core.chunk_rest(seq__49474_49489__$1);
var G__49492 = c__8413__auto___49490;
var G__49493 = cljs.core.count(c__8413__auto___49490);
var G__49494 = (0);
seq__49474_49479 = G__49491;
chunk__49475_49480 = G__49492;
count__49476_49481 = G__49493;
i__49477_49482 = G__49494;
continue;
} else {
var property__48598__auto___49495 = cljs.core.first(seq__49474_49489__$1);
if(cljs.core.truth_((base__48597__auto___49478[property__48598__auto___49495]))){
(devcards.core.DontUpdate.prototype[property__48598__auto___49495] = (base__48597__auto___49478[property__48598__auto___49495]));
} else {
}

var G__49496 = cljs.core.next(seq__49474_49489__$1);
var G__49497 = null;
var G__49498 = (0);
var G__49499 = (0);
seq__49474_49479 = G__49496;
chunk__49475_49480 = G__49497;
count__49476_49481 = G__49498;
i__49477_49482 = G__49499;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__49502 = devcards.core.DontUpdate;
var G__49503 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__49502,G__49503);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__7502__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__6753__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__6753__auto__)){
var docu = temp__6753__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom))):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__49512 = "div";
var G__49513 = ({"key": "devcards-main-section"});
var G__49514 = sablono.interpreter.interpret(main);
return React.createElement(G__49512,G__49513,G__49514);
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var x__8436__auto__ = document;
return cljs.core._conj((function (){var x__8436__auto____$1 = main__$1;
return cljs.core._conj((function (){var x__8436__auto____$2 = hist_ctl;
return cljs.core._conj((function (){var x__8436__auto____$3 = edn;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$3);
})(),x__8436__auto____$2);
})(),x__8436__auto____$1);
})(),x__8436__auto__);
})());
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__49515 = "div";
var G__49516 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__49517 = sablono.interpreter.interpret(children);
return React.createElement(G__49515,G__49516,G__49517);
}
});
var base__48597__auto___49522 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__7502__auto__ = (function (){var and__7490__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__7490__auto__)){
return this$.state;
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__7490__auto__ = data_atom;
if(cljs.core.truth_(and__7490__auto__)){
return id;
} else {
return and__7490__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__6753__auto__)){
var data_atom = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__6753__auto____$1)){
var id = temp__6753__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__6753__auto____$1,data_atom,temp__6753__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
});})(id,temp__6753__auto____$1,data_atom,temp__6753__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__48597__auto___49522);
}

var seq__49518_49523 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__49519_49524 = null;
var count__49520_49525 = (0);
var i__49521_49526 = (0);
while(true){
if((i__49521_49526 < count__49520_49525)){
var property__48598__auto___49527 = chunk__49519_49524.cljs$core$IIndexed$_nth$arity$2(null,i__49521_49526);
if(cljs.core.truth_((base__48597__auto___49522[property__48598__auto___49527]))){
(devcards.core.DevcardBase.prototype[property__48598__auto___49527] = (base__48597__auto___49522[property__48598__auto___49527]));
} else {
}

var G__49528 = seq__49518_49523;
var G__49529 = chunk__49519_49524;
var G__49530 = count__49520_49525;
var G__49531 = (i__49521_49526 + (1));
seq__49518_49523 = G__49528;
chunk__49519_49524 = G__49529;
count__49520_49525 = G__49530;
i__49521_49526 = G__49531;
continue;
} else {
var temp__6753__auto___49532 = cljs.core.seq(seq__49518_49523);
if(temp__6753__auto___49532){
var seq__49518_49533__$1 = temp__6753__auto___49532;
if(cljs.core.chunked_seq_QMARK_(seq__49518_49533__$1)){
var c__8413__auto___49534 = cljs.core.chunk_first(seq__49518_49533__$1);
var G__49535 = cljs.core.chunk_rest(seq__49518_49533__$1);
var G__49536 = c__8413__auto___49534;
var G__49537 = cljs.core.count(c__8413__auto___49534);
var G__49538 = (0);
seq__49518_49523 = G__49535;
chunk__49519_49524 = G__49536;
count__49520_49525 = G__49537;
i__49521_49526 = G__49538;
continue;
} else {
var property__48598__auto___49539 = cljs.core.first(seq__49518_49533__$1);
if(cljs.core.truth_((base__48597__auto___49522[property__48598__auto___49539]))){
(devcards.core.DevcardBase.prototype[property__48598__auto___49539] = (base__48597__auto___49522[property__48598__auto___49539]));
} else {
}

var G__49540 = cljs.core.next(seq__49518_49533__$1);
var G__49541 = null;
var G__49542 = (0);
var G__49543 = (0);
seq__49518_49523 = G__49540;
chunk__49519_49524 = G__49541;
count__49520_49525 = G__49542;
i__49521_49526 = G__49543;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__6753__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__6753__auto__)){
var node_fn = temp__6753__auto__;
var temp__6753__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6753__auto____$1)){
var node = temp__6753__auto____$1;
var G__49544 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49545 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__49544,G__49545) : node_fn.call(null,G__49544,G__49545));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__48597__auto___49552 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__7490__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__6753__auto__)){
var node = temp__6753__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__49546 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__49547 = "Card has not mounted DOM node.";
return React.DOM.div(G__49546,G__49547);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__48597__auto___49552);
}

var seq__49548_49553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__49549_49554 = null;
var count__49550_49555 = (0);
var i__49551_49556 = (0);
while(true){
if((i__49551_49556 < count__49550_49555)){
var property__48598__auto___49557 = chunk__49549_49554.cljs$core$IIndexed$_nth$arity$2(null,i__49551_49556);
if(cljs.core.truth_((base__48597__auto___49552[property__48598__auto___49557]))){
(devcards.core.DomComponent.prototype[property__48598__auto___49557] = (base__48597__auto___49552[property__48598__auto___49557]));
} else {
}

var G__49558 = seq__49548_49553;
var G__49559 = chunk__49549_49554;
var G__49560 = count__49550_49555;
var G__49561 = (i__49551_49556 + (1));
seq__49548_49553 = G__49558;
chunk__49549_49554 = G__49559;
count__49550_49555 = G__49560;
i__49551_49556 = G__49561;
continue;
} else {
var temp__6753__auto___49562 = cljs.core.seq(seq__49548_49553);
if(temp__6753__auto___49562){
var seq__49548_49563__$1 = temp__6753__auto___49562;
if(cljs.core.chunked_seq_QMARK_(seq__49548_49563__$1)){
var c__8413__auto___49564 = cljs.core.chunk_first(seq__49548_49563__$1);
var G__49565 = cljs.core.chunk_rest(seq__49548_49563__$1);
var G__49566 = c__8413__auto___49564;
var G__49567 = cljs.core.count(c__8413__auto___49564);
var G__49568 = (0);
seq__49548_49553 = G__49565;
chunk__49549_49554 = G__49566;
count__49550_49555 = G__49567;
i__49551_49556 = G__49568;
continue;
} else {
var property__48598__auto___49569 = cljs.core.first(seq__49548_49563__$1);
if(cljs.core.truth_((base__48597__auto___49552[property__48598__auto___49569]))){
(devcards.core.DomComponent.prototype[property__48598__auto___49569] = (base__48597__auto___49552[property__48598__auto___49569]));
} else {
}

var G__49570 = cljs.core.next(seq__49548_49563__$1);
var G__49571 = null;
var G__49572 = (0);
var G__49573 = (0);
seq__49548_49553 = G__49570;
chunk__49549_49554 = G__49571;
count__49550_49555 = G__49572;
i__49551_49556 = G__49573;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__7502__auto__ = x === true;
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = x === false;
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = (x == null);
if(or__7502__auto____$2){
return or__7502__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__7502__auto__ = typeof x === 'string';
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (x == null);
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__7502__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__49574_SHARP_){
return !(p1__49574_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__49583 = opts;
var map__49583__$1 = ((((!((map__49583 == null)))?((((map__49583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49583):map__49583);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49583__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7502__auto__ = cljs.core.map_QMARK_(options);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (options == null);
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__7502__auto__ = (initial_data == null);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__7502__auto____$1){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__7502__auto____$2){
return or__7502__auto____$2;
} else {
var or__7502__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$)))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__7502__auto____$3){
return or__7502__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__49583,map__49583__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__49575_SHARP_){
return devcards.core.booler_QMARK_(p1__49575_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__49583,map__49583__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__49606 = "div";
var G__49607 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__49608 = sablono.interpreter.interpret((function (){var G__49611 = "code";
var G__49612 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__49613 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__49611,G__49612,G__49613);
})());
var G__49609 = (function (){var G__49614 = "span";
var G__49615 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__49616 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__49614,G__49615,G__49616);
})();
var G__49610 = (function (){var G__49618 = "span";
var G__49619 = ({"style": ({"flex": "1 100px"})});
var G__49620 = " Received: ";
var G__49621 = (function (){var attrs49617 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs49617))?sablono.interpreter.attributes(attrs49617):null),((cljs.core.map_QMARK_(attrs49617))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49617)], null)));
})();
return React.createElement(G__49618,G__49619,G__49620,G__49621);
})();
return React.createElement(G__49606,G__49607,G__49608,G__49609,G__49610);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__49634 = "div";
var G__49635 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__49636 = (function (){var attrs49633 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49633))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs49633], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs49633))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49633)], null)));
})();
var G__49637 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__49639 = "div";
var G__49640 = null;
var G__49641 = (function (){var attrs49638 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49638))?sablono.interpreter.attributes(attrs49638):null),((cljs.core.map_QMARK_(attrs49638))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49638)], null)));
})();
var G__49642 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs49643 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49643))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs49643], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs49643))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49643)], null)));
})():null));
return React.createElement(G__49639,G__49640,G__49641,G__49642);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__49634,G__49635,G__49636,G__49637);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__49644_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__49644_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__49647 = devcards.core.DevcardBase;
var G__49648 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__49647,G__49648);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49650,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49652 = (((k49650 instanceof cljs.core.Keyword))?k49650.fqn:null);
switch (G__49652) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49650,else__8180__auto__);

}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49649){
var self__ = this;
var G__49649__$1 = this;
return (new cljs.core.RecordIter((0),G__49649__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49649){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49653 = cljs.core.keyword_identical_QMARK_;
var expr__49654 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49656 = cljs.core.cst$kw$obj;
var G__49657 = expr__49654;
return (pred__49653.cljs$core$IFn$_invoke$arity$2 ? pred__49653.cljs$core$IFn$_invoke$arity$2(G__49656,G__49657) : pred__49653.call(null,G__49656,G__49657));
})())){
return (new devcards.core.IdentiyOptions(G__49649,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49649),null));
}
});


devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});


devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49649){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__49649,self__.__extmap,self__.__hash));
});


devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__49651){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49651),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49651,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__49659){
var map__49662 = p__49659;
var map__49662__$1 = ((((!((map__49662 == null)))?((((map__49662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49662):map__49662);
var devcard_opts = map__49662__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__49662,map__49662__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__49662,map__49662__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49665,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49667 = (((k49665 instanceof cljs.core.Keyword))?k49665.fqn:null);
switch (G__49667) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49665,else__8180__auto__);

}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49664){
var self__ = this;
var G__49664__$1 = this;
return (new cljs.core.RecordIter((0),G__49664__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49664){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49668 = cljs.core.keyword_identical_QMARK_;
var expr__49669 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49671 = cljs.core.cst$kw$obj;
var G__49672 = expr__49669;
return (pred__49668.cljs$core$IFn$_invoke$arity$2 ? pred__49668.cljs$core$IFn$_invoke$arity$2(G__49671,G__49672) : pred__49668.call(null,G__49671,G__49672));
})())){
return (new devcards.core.AtomLikeOptions(G__49664,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49664),null));
}
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});


devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49664){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__49664,self__.__extmap,self__.__hash));
});


devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__49666){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49666),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49666,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49677,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49679 = (((k49677 instanceof cljs.core.Keyword))?k49677.fqn:null);
switch (G__49679) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49677,else__8180__auto__);

}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49676){
var self__ = this;
var G__49676__$1 = this;
return (new cljs.core.RecordIter((0),G__49676__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
var self__ = this;
var this__8172__auto____$1 = this;
var h__7944__auto__ = self__.__hash;
if(!((h__7944__auto__ == null))){
return h__7944__auto__;
} else {
var h__7944__auto____$1 = cljs.core.hash_imap(this__8172__auto____$1);
self__.__hash = h__7944__auto____$1;

return h__7944__auto____$1;
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
var self__ = this;
var this__8173__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7490__auto__ = other__8174__auto__;
if(cljs.core.truth_(and__7490__auto__)){
return ((this__8173__auto____$1.constructor === other__8174__auto__.constructor)) && (cljs.core.equiv_map(this__8173__auto____$1,other__8174__auto__));
} else {
return and__7490__auto__;
}
})())){
return true;
} else {
return false;
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49676){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49680 = cljs.core.keyword_identical_QMARK_;
var expr__49681 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49683 = cljs.core.cst$kw$obj;
var G__49684 = expr__49681;
return (pred__49680.cljs$core$IFn$_invoke$arity$2 ? pred__49680.cljs$core$IFn$_invoke$arity$2(G__49683,G__49684) : pred__49680.call(null,G__49683,G__49684));
})())){
return (new devcards.core.EdnLikeOptions(G__49676,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49676),null));
}
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});


devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});


devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49676){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__49676,self__.__extmap,self__.__hash));
});


devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__49678){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49678),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49678,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__7490__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__7490__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__7490__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$)))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__49697 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__49697 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__49697.devcards$core$IDevcard$))){
return true;
} else {
if((!G__49697.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__49697);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__49697);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__49700 = devcards.core.DomComponent;
var G__49701 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__49700,G__49701);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__49705 = (function (){var G__49706 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49706) : cljs.core.deref.call(null,G__49706));
})();
var map__49705__$1 = ((((!((map__49705 == null)))?((((map__49705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49705):map__49705);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49705__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49705__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__49709 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49709) : cljs.core.deref.call(null,G__49709));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__49711 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49711) : cljs.core.deref.call(null,G__49711));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49716 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49716__$1 = ((((!((map__49716 == null)))?((((map__49716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49716):map__49716);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49716__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49716__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49718_49720 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49719_49721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49718_49720,G__49719_49721) : cljs.core.reset_BANG_.call(null,G__49718_49720,G__49719_49721));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49726 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49726__$1 = ((((!((map__49726 == null)))?((((map__49726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49726):map__49726);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49726__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49726__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49728_49730 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49729_49731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49728_49730,G__49729_49731) : cljs.core.reset_BANG_.call(null,G__49728_49730,G__49729_49731));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49736 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49736__$1 = ((((!((map__49736 == null)))?((((map__49736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49736):map__49736);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49738_49740 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49739_49741 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49738_49740,G__49739_49741) : cljs.core.reset_BANG_.call(null,G__49738_49740,G__49739_49741));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__49742 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__49743 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49743) : cljs.core.atom.call(null,G__49743));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__8436__auto__ = (function (){var G__49745 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49745) : cljs.core.deref.call(null,G__49745));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__7490__auto__ = data_atom;
if(cljs.core.truth_(and__7490__auto__)){
return id;
} else {
return and__7490__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__49746){
var map__49747 = p__49746;
var map__49747__$1 = ((((!((map__49747 == null)))?((((map__49747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49747):map__49747);
var ha = map__49747__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49747__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__7502__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__49749 = "div";
var G__49750 = ({"style": ({"display": (cljs.core.truth_((function (){var or__7502__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__49751 = (function (){var action = ((function (G__49749,G__49750,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__49749,G__49750,this$))
;
return sablono.interpreter.interpret((function (){var G__49757 = "button";
var G__49758 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__49759 = (function (){var G__49760 = "span";
var G__49761 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__49762 = "";
return React.createElement(G__49760,G__49761,G__49762);
})();
return React.createElement(G__49757,G__49758,G__49759);
})());
})();
var G__49752 = (function (){var action = ((function (G__49749,G__49750,G__49751,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49763 = data_atom;
var G__49764 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49763,G__49764) : cljs.core.reset_BANG_.call(null,G__49763,G__49764));
});})(G__49749,G__49750,G__49751,this$))
;
return sablono.interpreter.interpret((function (){var G__49767 = "button";
var G__49768 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__49769 = (function (){var G__49770 = "span";
var G__49771 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__49772 = "";
return React.createElement(G__49770,G__49771,G__49772);
})();
return React.createElement(G__49767,G__49768,G__49769);
})());
})();
var G__49753 = (function (){var action = ((function (G__49749,G__49750,G__49751,G__49752,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__49749,G__49750,G__49751,G__49752,this$))
;
return sablono.interpreter.interpret((function (){var G__49775 = "button";
var G__49776 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__49777 = (function (){var G__49778 = "span";
var G__49779 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__49780 = "";
return React.createElement(G__49778,G__49779,G__49780);
})();
return React.createElement(G__49775,G__49776,G__49777);
})());
})();
var G__49754 = (function (){var listener = ((function (G__49749,G__49750,G__49751,G__49752,G__49753,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__49749,G__49750,G__49751,G__49752,G__49753,this$))
;
return sablono.interpreter.interpret((function (){var G__49787 = "button";
var G__49788 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__49789 = (function (){var G__49792 = "span";
var G__49793 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__49792,G__49793);
})();
var G__49790 = (function (){var G__49794 = "span";
var G__49795 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__49794,G__49795);
})();
var G__49791 = (function (){var G__49796 = "span";
var G__49797 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__49796,G__49797);
})();
return React.createElement(G__49787,G__49788,G__49789,G__49790,G__49791);
})());
})();
return React.createElement(G__49749,G__49750,G__49751,G__49752,G__49753,G__49754);
} else {
return null;
}
})});
return React.createClass(G__49742);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__49800 = devcards.core.HistoryComponent;
var G__49801 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__49800,G__49801);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_49803 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_49803;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__8533__auto__ = (function (){var G__49804 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49804) : cljs.core.atom.call(null,G__49804));
})();
var prefer_table__8534__auto__ = (function (){var G__49805 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49805) : cljs.core.atom.call(null,G__49805));
})();
var method_cache__8535__auto__ = (function (){var G__49806 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49806) : cljs.core.atom.call(null,G__49806));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__49807 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49807) : cljs.core.atom.call(null,G__49807));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs49808 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49808))?sablono.interpreter.attributes(attrs49808):null),((cljs.core.map_QMARK_(attrs49808))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49808)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__49809,body){
var map__49817 = p__49809;
var map__49817__$1 = ((((!((map__49817 == null)))?((((map__49817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49817):map__49817);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__49820 = "div";
var G__49821 = null;
var G__49822 = (function (){var attrs49819 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs49819))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs49819], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs49819))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49819)], null)));
})();
var G__49823 = sablono.interpreter.interpret(body);
return React.createElement(G__49820,G__49821,G__49822,G__49823);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__49824){
var map__49858 = p__49824;
var map__49858__$1 = ((((!((map__49858 == null)))?((((map__49858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49858):map__49858);
var m = map__49858__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs49860 = (function (){var G__49861 = devcards.core.CodeHighlight;
var G__49862 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__49861,G__49862);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49860))?sablono.interpreter.attributes(attrs49860):null),((cljs.core.map_QMARK_(attrs49860))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__49865 = "div";
var G__49866 = ({"style": ({"marginTop": "5px"})});
var G__49867 = (function (){var G__49869 = "div";
var G__49870 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__49871 = "\u25B6";
return React.createElement(G__49869,G__49870,G__49871);
})();
var G__49868 = (function (){var G__49872 = "div";
var G__49873 = ({"style": ({"marginLeft": "20px"})});
var G__49874 = sablono.interpreter.interpret((function (){var G__49875 = devcards.core.CodeHighlight;
var G__49876 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__49875,G__49876);
})());
return React.createElement(G__49872,G__49873,G__49874);
})();
return React.createElement(G__49865,G__49866,G__49867,G__49868);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49860),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__49879 = "div";
var G__49880 = ({"style": ({"marginTop": "5px"})});
var G__49881 = (function (){var G__49883 = "div";
var G__49884 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__49885 = "\u25B6";
return React.createElement(G__49883,G__49884,G__49885);
})();
var G__49882 = (function (){var G__49886 = "div";
var G__49887 = ({"style": ({"marginLeft": "20px"})});
var G__49888 = sablono.interpreter.interpret((function (){var G__49889 = devcards.core.CodeHighlight;
var G__49890 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__49889,G__49890);
})());
return React.createElement(G__49886,G__49887,G__49888);
})();
return React.createElement(G__49879,G__49880,G__49881,G__49882);
})():null))], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__49894 = "div";
var G__49895 = null;
var G__49896 = React.createElement("strong",null,"Error: ");
var G__49897 = (function (){var attrs49893 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs49893))?sablono.interpreter.attributes(attrs49893):null),((cljs.core.map_QMARK_(attrs49893))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49893)], null)));
})();
return React.createElement(G__49894,G__49895,G__49896,G__49897);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs49898 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49898))?sablono.interpreter.attributes(attrs49898):null),((cljs.core.map_QMARK_(attrs49898))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49898)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__49899){
var map__49900 = p__49899;
var map__49900__$1 = ((((!((map__49900 == null)))?((((map__49900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49900):map__49900);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs49902 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__49900,map__49900__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__49900,map__49900__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__8436__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49902))?sablono.interpreter.attributes(attrs49902):null),((cljs.core.map_QMARK_(attrs49902))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49902)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__49904 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__49904) : cljs.test.report.call(null,G__49904));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs49913 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49914,p__49915){
var map__49916 = p__49914;
var map__49916__$1 = ((((!((map__49916 == null)))?((((map__49916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49916):map__49916);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49916__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49916__$1,cljs.core.cst$kw$html_DASH_list);
var vec__49917 = p__49915;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49917,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49917,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__8436__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49913))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs49913], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs49913))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49913)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__49958){
var map__49959 = p__49958;
var map__49959__$1 = ((((!((map__49959 == null)))?((((map__49959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49959):map__49959);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49959__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__49957 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__49957__$1 = ((((!((map__49957 == null)))?((((map__49957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49957):map__49957);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__49962 = "div";
var G__49963 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__49964 = (function (){var G__49966 = "div";
var G__49967 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__49968 = (function (){var G__49972 = "a";
var G__49973 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__49972,G__49966,G__49967,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__49972,G__49966,G__49967,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
)});
var G__49974 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__49972,G__49973,G__49974);
})();
var G__49969 = (function (){var G__49975 = "button";
var G__49976 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49975,G__49966,G__49967,G__49968,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__49975,G__49966,G__49967,G__49968,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49977 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__49975,G__49976,G__49977);
})();
var G__49970 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__49978 = "button";
var G__49979 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49978,G__49966,G__49967,G__49968,G__49969,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__49978,G__49966,G__49967,G__49968,G__49969,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (p__49981){
var map__49982 = p__49981;
var map__49982__$1 = ((((!((map__49982 == null)))?((((map__49982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49982):map__49982);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__49978,G__49966,G__49967,G__49968,G__49969,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
}));
});})(G__49978,G__49966,G__49967,G__49968,G__49969,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49980 = sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1))].join(''));
return React.createElement(G__49978,G__49979,G__49980);
})()));
var G__49971 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__49984 = "button";
var G__49985 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49984,G__49966,G__49967,G__49968,G__49969,G__49970,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__49984,G__49966,G__49967,G__49968,G__49969,G__49970,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1){
return (function (p__49987){
var map__49988 = p__49987;
var map__49988__$1 = ((((!((map__49988 == null)))?((((map__49988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49988):map__49988);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__49984,G__49966,G__49967,G__49968,G__49969,G__49970,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
}));
});})(G__49984,G__49966,G__49967,G__49968,G__49969,G__49970,G__49962,G__49963,error_QMARK_,tests,some_tests,total_tests,map__49957,map__49957__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49986 = sablono.interpreter.interpret(pass);
return React.createElement(G__49984,G__49985,G__49986);
})()));
return React.createElement(G__49966,G__49967,G__49968,G__49969,G__49970,G__49971);
})();
var G__49965 = (function (){var G__49990 = "div";
var G__49991 = ({"className": devcards.system.devcards_rendered_card_class});
var G__49992 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__49990,G__49991,G__49992);
})();
return React.createElement(G__49962,G__49963,G__49964,G__49965);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_50083){
var state_val_50084 = (state_50083[(1)]);
if((state_val_50084 === (7))){
var state_50083__$1 = state_50083;
var statearr_50085_50134 = state_50083__$1;
(statearr_50085_50134[(2)] = false);

(statearr_50085_50134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (20))){
var inst_50021 = (state_50083[(7)]);
var inst_50041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50021);
var state_50083__$1 = state_50083;
var statearr_50086_50135 = state_50083__$1;
(statearr_50086_50135[(2)] = inst_50041);

(statearr_50086_50135[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (27))){
var inst_50058 = (state_50083[(8)]);
var inst_50046 = (state_50083[(9)]);
var inst_50062 = (inst_50046.cljs$core$IFn$_invoke$arity$1 ? inst_50046.cljs$core$IFn$_invoke$arity$1(inst_50058) : inst_50046.call(null,inst_50058));
var state_50083__$1 = state_50083;
var statearr_50087_50136 = state_50083__$1;
(statearr_50087_50136[(2)] = inst_50062);

(statearr_50087_50136[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (1))){
var state_50083__$1 = state_50083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50083__$1,(2),devcards.core.test_channel);
} else {
if((state_val_50084 === (24))){
var state_50083__$1 = state_50083;
var statearr_50088_50137 = state_50083__$1;
(statearr_50088_50137[(2)] = null);

(statearr_50088_50137[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (4))){
var state_50083__$1 = state_50083;
var statearr_50089_50138 = state_50083__$1;
(statearr_50089_50138[(2)] = false);

(statearr_50089_50138[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (15))){
var state_50083__$1 = state_50083;
var statearr_50090_50139 = state_50083__$1;
(statearr_50090_50139[(2)] = false);

(statearr_50090_50139[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (21))){
var inst_50021 = (state_50083[(7)]);
var state_50083__$1 = state_50083;
var statearr_50091_50140 = state_50083__$1;
(statearr_50091_50140[(2)] = inst_50021);

(statearr_50091_50140[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (13))){
var inst_50081 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50083__$1,inst_50081);
} else {
if((state_val_50084 === (22))){
var inst_50045 = (state_50083[(10)]);
var inst_50044 = (state_50083[(2)]);
var inst_50045__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50044,cljs.core.cst$kw$tests);
var inst_50046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50044,cljs.core.cst$kw$callback);
var state_50083__$1 = (function (){var statearr_50092 = state_50083;
(statearr_50092[(9)] = inst_50046);

(statearr_50092[(10)] = inst_50045__$1);

return statearr_50092;
})();
if(cljs.core.truth_(inst_50045__$1)){
var statearr_50093_50141 = state_50083__$1;
(statearr_50093_50141[(1)] = (23));

} else {
var statearr_50094_50142 = state_50083__$1;
(statearr_50094_50142[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (29))){
var inst_50072 = (state_50083[(2)]);
var inst_50073 = cljs.test.clear_env_BANG_();
var state_50083__$1 = (function (){var statearr_50095 = state_50083;
(statearr_50095[(11)] = inst_50072);

(statearr_50095[(12)] = inst_50073);

return statearr_50095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50083__$1,(30),devcards.core.test_channel);
} else {
if((state_val_50084 === (6))){
var state_50083__$1 = state_50083;
var statearr_50096_50143 = state_50083__$1;
(statearr_50096_50143[(2)] = true);

(statearr_50096_50143[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (28))){
var inst_50046 = (state_50083[(9)]);
var inst_50064 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_50065 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_50066 = cljs.core.PersistentHashMap.fromArrays(inst_50064,inst_50065);
var inst_50067 = devcards.core.collect_test(inst_50066);
var inst_50068 = cljs.test.get_current_env();
var inst_50069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_50068,cljs.core.cst$kw$error,"Execution timed out!");
var inst_50070 = (inst_50046.cljs$core$IFn$_invoke$arity$1 ? inst_50046.cljs$core$IFn$_invoke$arity$1(inst_50069) : inst_50046.call(null,inst_50069));
var state_50083__$1 = (function (){var statearr_50097 = state_50083;
(statearr_50097[(13)] = inst_50067);

return statearr_50097;
})();
var statearr_50098_50144 = state_50083__$1;
(statearr_50098_50144[(2)] = inst_50070);

(statearr_50098_50144[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (25))){
var inst_50079 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
var statearr_50099_50145 = state_50083__$1;
(statearr_50099_50145[(2)] = inst_50079);

(statearr_50099_50145[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (17))){
var state_50083__$1 = state_50083;
var statearr_50100_50146 = state_50083__$1;
(statearr_50100_50146[(2)] = true);

(statearr_50100_50146[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (3))){
var inst_49997 = (state_50083[(14)]);
var inst_50002 = inst_49997.cljs$lang$protocol_mask$partition0$;
var inst_50003 = (inst_50002 & (64));
var inst_50004 = inst_49997.cljs$core$ISeq$;
var inst_50005 = (cljs.core.PROTOCOL_SENTINEL === inst_50004);
var inst_50006 = (inst_50003) || (inst_50005);
var state_50083__$1 = state_50083;
if(cljs.core.truth_(inst_50006)){
var statearr_50101_50147 = state_50083__$1;
(statearr_50101_50147[(1)] = (6));

} else {
var statearr_50102_50148 = state_50083__$1;
(statearr_50102_50148[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (12))){
var inst_50021 = (state_50083[(7)]);
var inst_50025 = (inst_50021 == null);
var inst_50026 = cljs.core.not(inst_50025);
var state_50083__$1 = state_50083;
if(inst_50026){
var statearr_50103_50149 = state_50083__$1;
(statearr_50103_50149[(1)] = (14));

} else {
var statearr_50104_50150 = state_50083__$1;
(statearr_50104_50150[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (2))){
var inst_49997 = (state_50083[(14)]);
var inst_49997__$1 = (state_50083[(2)]);
var inst_49999 = (inst_49997__$1 == null);
var inst_50000 = cljs.core.not(inst_49999);
var state_50083__$1 = (function (){var statearr_50105 = state_50083;
(statearr_50105[(14)] = inst_49997__$1);

return statearr_50105;
})();
if(inst_50000){
var statearr_50106_50151 = state_50083__$1;
(statearr_50106_50151[(1)] = (3));

} else {
var statearr_50107_50152 = state_50083__$1;
(statearr_50107_50152[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (23))){
var inst_50045 = (state_50083[(10)]);
var inst_50051 = (state_50083[(15)]);
var inst_50051__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_50052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50053 = devcards.core.run_card_tests(inst_50045);
var inst_50054 = [inst_50053,inst_50051__$1];
var inst_50055 = (new cljs.core.PersistentVector(null,2,(5),inst_50052,inst_50054,null));
var state_50083__$1 = (function (){var statearr_50108 = state_50083;
(statearr_50108[(15)] = inst_50051__$1);

return statearr_50108;
})();
return cljs.core.async.ioc_alts_BANG_(state_50083__$1,(26),inst_50055);
} else {
if((state_val_50084 === (19))){
var inst_50036 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
var statearr_50109_50153 = state_50083__$1;
(statearr_50109_50153[(2)] = inst_50036);

(statearr_50109_50153[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (11))){
var inst_49997 = (state_50083[(14)]);
var inst_50018 = (state_50083[(2)]);
var inst_50019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50018,cljs.core.cst$kw$tests);
var inst_50020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50018,cljs.core.cst$kw$callback);
var inst_50021 = inst_49997;
var state_50083__$1 = (function (){var statearr_50110 = state_50083;
(statearr_50110[(16)] = inst_50019);

(statearr_50110[(7)] = inst_50021);

(statearr_50110[(17)] = inst_50020);

return statearr_50110;
})();
var statearr_50111_50154 = state_50083__$1;
(statearr_50111_50154[(2)] = null);

(statearr_50111_50154[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (9))){
var inst_49997 = (state_50083[(14)]);
var inst_50015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49997);
var state_50083__$1 = state_50083;
var statearr_50112_50155 = state_50083__$1;
(statearr_50112_50155[(2)] = inst_50015);

(statearr_50112_50155[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (5))){
var inst_50013 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
if(cljs.core.truth_(inst_50013)){
var statearr_50113_50156 = state_50083__$1;
(statearr_50113_50156[(1)] = (9));

} else {
var statearr_50114_50157 = state_50083__$1;
(statearr_50114_50157[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (14))){
var inst_50021 = (state_50083[(7)]);
var inst_50028 = inst_50021.cljs$lang$protocol_mask$partition0$;
var inst_50029 = (inst_50028 & (64));
var inst_50030 = inst_50021.cljs$core$ISeq$;
var inst_50031 = (cljs.core.PROTOCOL_SENTINEL === inst_50030);
var inst_50032 = (inst_50029) || (inst_50031);
var state_50083__$1 = state_50083;
if(cljs.core.truth_(inst_50032)){
var statearr_50115_50158 = state_50083__$1;
(statearr_50115_50158[(1)] = (17));

} else {
var statearr_50116_50159 = state_50083__$1;
(statearr_50116_50159[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (26))){
var inst_50051 = (state_50083[(15)]);
var inst_50057 = (state_50083[(2)]);
var inst_50058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50057,(0),null);
var inst_50059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50057,(1),null);
var inst_50060 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_50059,inst_50051);
var state_50083__$1 = (function (){var statearr_50117 = state_50083;
(statearr_50117[(8)] = inst_50058);

return statearr_50117;
})();
if(inst_50060){
var statearr_50118_50160 = state_50083__$1;
(statearr_50118_50160[(1)] = (27));

} else {
var statearr_50119_50161 = state_50083__$1;
(statearr_50119_50161[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (16))){
var inst_50039 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
if(cljs.core.truth_(inst_50039)){
var statearr_50120_50162 = state_50083__$1;
(statearr_50120_50162[(1)] = (20));

} else {
var statearr_50121_50163 = state_50083__$1;
(statearr_50121_50163[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (30))){
var inst_50075 = (state_50083[(2)]);
var inst_50021 = inst_50075;
var state_50083__$1 = (function (){var statearr_50122 = state_50083;
(statearr_50122[(7)] = inst_50021);

return statearr_50122;
})();
var statearr_50123_50164 = state_50083__$1;
(statearr_50123_50164[(2)] = null);

(statearr_50123_50164[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (10))){
var inst_49997 = (state_50083[(14)]);
var state_50083__$1 = state_50083;
var statearr_50124_50165 = state_50083__$1;
(statearr_50124_50165[(2)] = inst_49997);

(statearr_50124_50165[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (18))){
var state_50083__$1 = state_50083;
var statearr_50125_50166 = state_50083__$1;
(statearr_50125_50166[(2)] = false);

(statearr_50125_50166[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_50084 === (8))){
var inst_50010 = (state_50083[(2)]);
var state_50083__$1 = state_50083;
var statearr_50126_50167 = state_50083__$1;
(statearr_50126_50167[(2)] = inst_50010);

(statearr_50126_50167[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var devcards$core$state_machine__43224__auto__ = null;
var devcards$core$state_machine__43224__auto____0 = (function (){
var statearr_50130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50130[(0)] = devcards$core$state_machine__43224__auto__);

(statearr_50130[(1)] = (1));

return statearr_50130;
});
var devcards$core$state_machine__43224__auto____1 = (function (state_50083){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_50083);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e50131){if((e50131 instanceof Object)){
var ex__43227__auto__ = e50131;
var statearr_50132_50168 = state_50083;
(statearr_50132_50168[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50083);

return cljs.core.cst$kw$recur;
} else {
throw e50131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__50169 = state_50083;
state_50083 = G__50169;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
devcards$core$state_machine__43224__auto__ = function(state_50083){
switch(arguments.length){
case 0:
return devcards$core$state_machine__43224__auto____0.call(this);
case 1:
return devcards$core$state_machine__43224__auto____1.call(this,state_50083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__43224__auto____0;
devcards$core$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__43224__auto____1;
return devcards$core$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_50133 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_50133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_50133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__48597__auto___50174 = ({"componentWillMount": (function (){
var this$ = this;
var temp__6753__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__6753__auto__)){
var test_thunks = temp__6753__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__6753__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__6753__auto__)){
var test_thunks = temp__6753__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__48597__auto___50174);
}

var seq__50170_50175 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__50171_50176 = null;
var count__50172_50177 = (0);
var i__50173_50178 = (0);
while(true){
if((i__50173_50178 < count__50172_50177)){
var property__48598__auto___50179 = chunk__50171_50176.cljs$core$IIndexed$_nth$arity$2(null,i__50173_50178);
if(cljs.core.truth_((base__48597__auto___50174[property__48598__auto___50179]))){
(devcards.core.TestDevcard.prototype[property__48598__auto___50179] = (base__48597__auto___50174[property__48598__auto___50179]));
} else {
}

var G__50180 = seq__50170_50175;
var G__50181 = chunk__50171_50176;
var G__50182 = count__50172_50177;
var G__50183 = (i__50173_50178 + (1));
seq__50170_50175 = G__50180;
chunk__50171_50176 = G__50181;
count__50172_50177 = G__50182;
i__50173_50178 = G__50183;
continue;
} else {
var temp__6753__auto___50184 = cljs.core.seq(seq__50170_50175);
if(temp__6753__auto___50184){
var seq__50170_50185__$1 = temp__6753__auto___50184;
if(cljs.core.chunked_seq_QMARK_(seq__50170_50185__$1)){
var c__8413__auto___50186 = cljs.core.chunk_first(seq__50170_50185__$1);
var G__50187 = cljs.core.chunk_rest(seq__50170_50185__$1);
var G__50188 = c__8413__auto___50186;
var G__50189 = cljs.core.count(c__8413__auto___50186);
var G__50190 = (0);
seq__50170_50175 = G__50187;
chunk__50171_50176 = G__50188;
count__50172_50177 = G__50189;
i__50173_50178 = G__50190;
continue;
} else {
var property__48598__auto___50191 = cljs.core.first(seq__50170_50185__$1);
if(cljs.core.truth_((base__48597__auto___50174[property__48598__auto___50191]))){
(devcards.core.TestDevcard.prototype[property__48598__auto___50191] = (base__48597__auto___50174[property__48598__auto___50191]));
} else {
}

var G__50192 = cljs.core.next(seq__50170_50185__$1);
var G__50193 = null;
var G__50194 = (0);
var G__50195 = (0);
seq__50170_50175 = G__50192;
chunk__50171_50176 = G__50193;
count__50172_50177 = G__50194;
i__50173_50178 = G__50195;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__8730__auto__ = [];
var len__8723__auto___50202 = arguments.length;
var i__8724__auto___50203 = (0);
while(true){
if((i__8724__auto___50203 < len__8723__auto___50202)){
args__8730__auto__.push((arguments[i__8724__auto___50203]));

var G__50204 = (i__8724__auto___50203 + (1));
i__8724__auto___50203 = G__50204;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core50197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core50197 = (function (test_thunks,meta50198){
this.test_thunks = test_thunks;
this.meta50198 = meta50198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

devcards.core.t_devcards$core50197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50199,meta50198__$1){
var self__ = this;
var _50199__$1 = this;
return (new devcards.core.t_devcards$core50197(self__.test_thunks,meta50198__$1));
});


devcards.core.t_devcards$core50197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50199){
var self__ = this;
var _50199__$1 = this;
return self__.meta50198;
});


devcards.core.t_devcards$core50197.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.t_devcards$core50197.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__50200 = devcards.core.TestDevcard;
var G__50201 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__50200,G__50201);
});

devcards.core.t_devcards$core50197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta50198], null);
});

devcards.core.t_devcards$core50197.cljs$lang$type = true;

devcards.core.t_devcards$core50197.cljs$lang$ctorStr = "devcards.core/t_devcards$core50197";

devcards.core.t_devcards$core50197.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"devcards.core/t_devcards$core50197");
});

devcards.core.__GT_t_devcards$core50197 = (function devcards$core$__GT_t_devcards$core50197(test_thunks__$1,meta50198){
return (new devcards.core.t_devcards$core50197(test_thunks__$1,meta50198));
});

}

return (new devcards.core.t_devcards$core50197(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq50196){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50196));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__6753__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__6753__auto__)){
var cards = temp__6753__auto__;
var temp__6753__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
if(cljs.core.truth_(temp__6753__auto____$1)){
var card = temp__6753__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__6753__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__6753__auto__)){
var base_card_options = temp__6753__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__6753__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__6753__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__6753__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6753__auto__)){
var card = temp__6753__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__50207 = (function (){var attrs50208 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs50208))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs50208], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs50208))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50208)], null)));
})();
return React.renderToString(G__50207);
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__6753__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__6753__auto__)){
var card = temp__6753__auto__;
var G__50212 = (function (){var attrs50214 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs50214))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs50214], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs50214))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50214)], null)));
})();
var G__50213 = devcards.system.devcards_app_node();
return React.render(G__50212,G__50213);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_50244){
var state_val_50245 = (state_50244[(1)]);
if((state_val_50245 === (1))){
var inst_50235 = devcards.core.load_data_from_channel_BANG_();
var state_50244__$1 = state_50244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50244__$1,(2),inst_50235);
} else {
if((state_val_50245 === (2))){
var inst_50237 = (state_50244[(2)]);
var inst_50238 = cljs.core.async.timeout((100));
var state_50244__$1 = (function (){var statearr_50246 = state_50244;
(statearr_50246[(7)] = inst_50237);

return statearr_50246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50244__$1,(3),inst_50238);
} else {
if((state_val_50245 === (3))){
var inst_50240 = (state_50244[(2)]);
var inst_50241 = (function (){return ((function (inst_50240,state_val_50245,c__43349__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_50240,state_val_50245,c__43349__auto__))
})();
var inst_50242 = setTimeout(inst_50241,(0));
var state_50244__$1 = (function (){var statearr_50247 = state_50244;
(statearr_50247[(8)] = inst_50240);

return statearr_50247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50244__$1,inst_50242);
} else {
return null;
}
}
}
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__43224__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__43224__auto____0 = (function (){
var statearr_50251 = [null,null,null,null,null,null,null,null,null];
(statearr_50251[(0)] = devcards$core$mount_namespace_$_state_machine__43224__auto__);

(statearr_50251[(1)] = (1));

return statearr_50251;
});
var devcards$core$mount_namespace_$_state_machine__43224__auto____1 = (function (state_50244){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_50244);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e50252){if((e50252 instanceof Object)){
var ex__43227__auto__ = e50252;
var statearr_50253_50255 = state_50244;
(statearr_50253_50255[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50244);

return cljs.core.cst$kw$recur;
} else {
throw e50252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__50256 = state_50244;
state_50244 = G__50256;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__43224__auto__ = function(state_50244){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__43224__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__43224__auto____1.call(this,state_50244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__43224__auto____0;
devcards$core$mount_namespace_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__43224__auto____1;
return devcards$core$mount_namespace_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_50254 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_50254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_50254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

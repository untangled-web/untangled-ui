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
document.body.addEventListener("figwheel.js-reload",(function (p1__48488_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__48488_SHARP_.detail], null));
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
var args48501 = [];
var len__8723__auto___48513 = arguments.length;
var i__8724__auto___48515 = (0);
while(true){
if((i__8724__auto___48515 < len__8723__auto___48513)){
args48501.push((arguments[i__8724__auto___48515]));

var G__48520 = (i__8724__auto___48515 + (1));
i__8724__auto___48515 = G__48520;
continue;
} else {
}
break;
}

var G__48506 = args48501.length;
switch (G__48506) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48501.length)].join('')));

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
var map__48533 = c;
var map__48533__$1 = ((((!((map__48533 == null)))?((((map__48533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48533):map__48533);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48533__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48533__$1,cljs.core.cst$kw$func);
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
var base__47100__auto___48588 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__48565 = "pre";
var G__48566 = ({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__48569 = this$;
var G__48570 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__48569,G__48570) : devcards.core.get_props.call(null,G__48569,G__48570));
})())});
var G__48567 = (function (){var G__48571 = "code";
var G__48572 = ({"className": (function (){var or__7502__auto__ = (function (){var G__48576 = this$;
var G__48577 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__48576,G__48577) : devcards.core.get_props.call(null,G__48576,G__48577));
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__48573 = sablono.interpreter.interpret((function (){var G__48578 = this$;
var G__48579 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__48578,G__48579) : devcards.core.get_props.call(null,G__48578,G__48579));
})());
return React.createElement(G__48571,G__48572,G__48573);
})();
return React.createElement(G__48565,G__48566,G__48567);
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__47100__auto___48588);
}

var seq__48580_48597 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__48581_48598 = null;
var count__48582_48599 = (0);
var i__48583_48600 = (0);
while(true){
if((i__48583_48600 < count__48582_48599)){
var property__47101__auto___48601 = chunk__48581_48598.cljs$core$IIndexed$_nth$arity$2(null,i__48583_48600);
if(cljs.core.truth_((base__47100__auto___48588[property__47101__auto___48601]))){
(devcards.core.CodeHighlight.prototype[property__47101__auto___48601] = (base__47100__auto___48588[property__47101__auto___48601]));
} else {
}

var G__48602 = seq__48580_48597;
var G__48603 = chunk__48581_48598;
var G__48604 = count__48582_48599;
var G__48605 = (i__48583_48600 + (1));
seq__48580_48597 = G__48602;
chunk__48581_48598 = G__48603;
count__48582_48599 = G__48604;
i__48583_48600 = G__48605;
continue;
} else {
var temp__6753__auto___48606 = cljs.core.seq(seq__48580_48597);
if(temp__6753__auto___48606){
var seq__48580_48607__$1 = temp__6753__auto___48606;
if(cljs.core.chunked_seq_QMARK_(seq__48580_48607__$1)){
var c__8413__auto___48608 = cljs.core.chunk_first(seq__48580_48607__$1);
var G__48609 = cljs.core.chunk_rest(seq__48580_48607__$1);
var G__48610 = c__8413__auto___48608;
var G__48611 = cljs.core.count(c__8413__auto___48608);
var G__48612 = (0);
seq__48580_48597 = G__48609;
chunk__48581_48598 = G__48610;
count__48582_48599 = G__48611;
i__48583_48600 = G__48612;
continue;
} else {
var property__47101__auto___48613 = cljs.core.first(seq__48580_48607__$1);
if(cljs.core.truth_((base__47100__auto___48588[property__47101__auto___48613]))){
(devcards.core.CodeHighlight.prototype[property__47101__auto___48613] = (base__47100__auto___48588[property__47101__auto___48613]));
} else {
}

var G__48614 = cljs.core.next(seq__48580_48607__$1);
var G__48615 = null;
var G__48616 = (0);
var G__48617 = (0);
seq__48580_48597 = G__48614;
chunk__48581_48598 = G__48615;
count__48582_48599 = G__48616;
i__48583_48600 = G__48617;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__48620 = devcards.core.CodeHighlight;
var G__48621 = ({"code": code_str, "lang": lang});
return React.createElement(G__48620,G__48621);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__8533__auto__ = (function (){var G__48622 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48622) : cljs.core.atom.call(null,G__48622));
})();
var prefer_table__8534__auto__ = (function (){var G__48623 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48623) : cljs.core.atom.call(null,G__48623));
})();
var method_cache__8535__auto__ = (function (){var G__48628 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48628) : cljs.core.atom.call(null,G__48628));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__48629 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48629) : cljs.core.atom.call(null,G__48629));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__48635){
var map__48636 = p__48635;
var map__48636__$1 = ((((!((map__48636 == null)))?((((map__48636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48636):map__48636);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48636__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__48642){
var map__48643 = p__48642;
var map__48643__$1 = ((((!((map__48643 == null)))?((((map__48643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48643):map__48643);
var block = map__48643__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48643__$1,cljs.core.cst$kw$content);
var G__48645 = devcards.core.CodeHighlight;
var G__48646 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return React.createElement(G__48645,G__48646);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__8730__auto__ = [];
var len__8723__auto___48669 = arguments.length;
var i__8724__auto___48670 = (0);
while(true){
if((i__8724__auto___48670 < len__8723__auto___48669)){
args__8730__auto__.push((arguments[i__8724__auto___48670]));

var G__48672 = (i__8724__auto___48670 + (1));
i__8724__auto___48670 = G__48672;
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
var G__48654 = "div";
var G__48655 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__48656 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__48654,G__48655,blocks,strs__$1){
return (function (i,data){
var G__48661 = "div";
var G__48662 = ({"key": i});
var G__48663 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return React.createElement(G__48661,G__48662,G__48663);
});})(G__48654,G__48655,blocks,strs__$1))
,blocks));
return React.createElement(G__48654,G__48655,G__48656);
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__48664 = "div";
var G__48665 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__48666 = sablono.interpreter.interpret(message);
return React.createElement(G__48664,G__48665,G__48666);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq48648){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48648));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__48689 = "div";
var G__48690 = ({"key": "devcards_naked-card", "className": (function (){var G__48692 = devcards.system.devcards_rendered_card_class;
var G__48692__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48692),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" com-rigsomelight-devcards-devcard-padding")].join(''):G__48692);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48692__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__48692__$1;
}
})()});
var G__48691 = sablono.interpreter.interpret(children);
return React.createElement(G__48689,G__48690,G__48691);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args48699 = [];
var len__8723__auto___48737 = arguments.length;
var i__8724__auto___48739 = (0);
while(true){
if((i__8724__auto___48739 < len__8723__auto___48737)){
args48699.push((arguments[i__8724__auto___48739]));

var G__48741 = (i__8724__auto___48739 + (1));
i__8724__auto___48739 = G__48741;
continue;
} else {
}
break;
}

var G__48705 = args48699.length;
switch (G__48705) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48699.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__48708 = card;
var map__48708__$1 = ((((!((map__48708 == null)))?((((map__48708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48708):map__48708);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__48716 = "div";
var G__48717 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))});
var G__48718 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__48716,G__48717,G__48718);
} else {
var G__48723 = "div";
var G__48724 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__48725 = (function (){var G__48727 = "div";
var G__48728 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__48729 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__48730 = "a";
var G__48731 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__48730,G__48727,G__48728,G__48723,G__48724,map__48708,map__48708__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__48730,G__48727,G__48728,G__48723,G__48724,map__48708,map__48708__$1,path,options))
)});
var G__48732 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__48733 = " ";
return React.createElement(G__48730,G__48731,G__48732,G__48733);
})()):sablono.interpreter.interpret((function (){var attrs48734 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs48734))?sablono.interpreter.attributes(attrs48734):null),((cljs.core.map_QMARK_(attrs48734))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48734)], null)));
})()));
return React.createElement(G__48727,G__48728,G__48729);
})();
var G__48726 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__48723,G__48724,G__48725,G__48726);
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
var base__47100__auto___48771 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((next_props["change_count"]),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs48763 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48763))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs48763], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs48763))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48763)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__47100__auto___48771);
}

var seq__48764_48773 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__48765_48774 = null;
var count__48766_48775 = (0);
var i__48767_48776 = (0);
while(true){
if((i__48767_48776 < count__48766_48775)){
var property__47101__auto___48777 = chunk__48765_48774.cljs$core$IIndexed$_nth$arity$2(null,i__48767_48776);
if(cljs.core.truth_((base__47100__auto___48771[property__47101__auto___48777]))){
(devcards.core.DontUpdate.prototype[property__47101__auto___48777] = (base__47100__auto___48771[property__47101__auto___48777]));
} else {
}

var G__48778 = seq__48764_48773;
var G__48779 = chunk__48765_48774;
var G__48780 = count__48766_48775;
var G__48781 = (i__48767_48776 + (1));
seq__48764_48773 = G__48778;
chunk__48765_48774 = G__48779;
count__48766_48775 = G__48780;
i__48767_48776 = G__48781;
continue;
} else {
var temp__6753__auto___48782 = cljs.core.seq(seq__48764_48773);
if(temp__6753__auto___48782){
var seq__48764_48783__$1 = temp__6753__auto___48782;
if(cljs.core.chunked_seq_QMARK_(seq__48764_48783__$1)){
var c__8413__auto___48784 = cljs.core.chunk_first(seq__48764_48783__$1);
var G__48785 = cljs.core.chunk_rest(seq__48764_48783__$1);
var G__48786 = c__8413__auto___48784;
var G__48787 = cljs.core.count(c__8413__auto___48784);
var G__48788 = (0);
seq__48764_48773 = G__48785;
chunk__48765_48774 = G__48786;
count__48766_48775 = G__48787;
i__48767_48776 = G__48788;
continue;
} else {
var property__47101__auto___48791 = cljs.core.first(seq__48764_48783__$1);
if(cljs.core.truth_((base__47100__auto___48771[property__47101__auto___48791]))){
(devcards.core.DontUpdate.prototype[property__47101__auto___48791] = (base__47100__auto___48771[property__47101__auto___48791]));
} else {
}

var G__48795 = cljs.core.next(seq__48764_48783__$1);
var G__48796 = null;
var G__48797 = (0);
var G__48798 = (0);
seq__48764_48773 = G__48795;
chunk__48765_48774 = G__48796;
count__48766_48775 = G__48797;
i__48767_48776 = G__48798;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__48805 = devcards.core.DontUpdate;
var G__48806 = ({"change_count": change_count, "children_thunk": children_thunk});
return React.createElement(G__48805,G__48806);
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
var main__$1 = (function (){var G__48846 = "div";
var G__48847 = ({"key": "devcards-main-section"});
var G__48848 = sablono.interpreter.interpret(main);
return React.createElement(G__48846,G__48847,G__48848);
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
var G__48849 = "div";
var G__48850 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__48851 = sablono.interpreter.interpret(children);
return React.createElement(G__48849,G__48850,G__48851);
}
});
var base__47100__auto___48856 = ({"getInitialState": (function (){
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
devcards.core.DevcardBase = React.createClass(base__47100__auto___48856);
}

var seq__48852_48863 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__48853_48864 = null;
var count__48854_48865 = (0);
var i__48855_48866 = (0);
while(true){
if((i__48855_48866 < count__48854_48865)){
var property__47101__auto___48867 = chunk__48853_48864.cljs$core$IIndexed$_nth$arity$2(null,i__48855_48866);
if(cljs.core.truth_((base__47100__auto___48856[property__47101__auto___48867]))){
(devcards.core.DevcardBase.prototype[property__47101__auto___48867] = (base__47100__auto___48856[property__47101__auto___48867]));
} else {
}

var G__48868 = seq__48852_48863;
var G__48869 = chunk__48853_48864;
var G__48870 = count__48854_48865;
var G__48871 = (i__48855_48866 + (1));
seq__48852_48863 = G__48868;
chunk__48853_48864 = G__48869;
count__48854_48865 = G__48870;
i__48855_48866 = G__48871;
continue;
} else {
var temp__6753__auto___48876 = cljs.core.seq(seq__48852_48863);
if(temp__6753__auto___48876){
var seq__48852_48877__$1 = temp__6753__auto___48876;
if(cljs.core.chunked_seq_QMARK_(seq__48852_48877__$1)){
var c__8413__auto___48878 = cljs.core.chunk_first(seq__48852_48877__$1);
var G__48879 = cljs.core.chunk_rest(seq__48852_48877__$1);
var G__48880 = c__8413__auto___48878;
var G__48881 = cljs.core.count(c__8413__auto___48878);
var G__48882 = (0);
seq__48852_48863 = G__48879;
chunk__48853_48864 = G__48880;
count__48854_48865 = G__48881;
i__48855_48866 = G__48882;
continue;
} else {
var property__47101__auto___48887 = cljs.core.first(seq__48852_48877__$1);
if(cljs.core.truth_((base__47100__auto___48856[property__47101__auto___48887]))){
(devcards.core.DevcardBase.prototype[property__47101__auto___48887] = (base__47100__auto___48856[property__47101__auto___48887]));
} else {
}

var G__48888 = cljs.core.next(seq__48852_48877__$1);
var G__48889 = null;
var G__48890 = (0);
var G__48891 = (0);
seq__48852_48863 = G__48888;
chunk__48853_48864 = G__48889;
count__48854_48865 = G__48890;
i__48855_48866 = G__48891;
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
var G__48892 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__48893 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__48892,G__48893) : node_fn.call(null,G__48892,G__48893));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__47100__auto___48900 = ({"getInitialState": (function (){
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
var G__48894 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__48895 = "Card has not mounted DOM node.";
return React.DOM.div(G__48894,G__48895);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__47100__auto___48900);
}

var seq__48896_48901 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__48897_48902 = null;
var count__48898_48903 = (0);
var i__48899_48904 = (0);
while(true){
if((i__48899_48904 < count__48898_48903)){
var property__47101__auto___48905 = chunk__48897_48902.cljs$core$IIndexed$_nth$arity$2(null,i__48899_48904);
if(cljs.core.truth_((base__47100__auto___48900[property__47101__auto___48905]))){
(devcards.core.DomComponent.prototype[property__47101__auto___48905] = (base__47100__auto___48900[property__47101__auto___48905]));
} else {
}

var G__48906 = seq__48896_48901;
var G__48907 = chunk__48897_48902;
var G__48908 = count__48898_48903;
var G__48909 = (i__48899_48904 + (1));
seq__48896_48901 = G__48906;
chunk__48897_48902 = G__48907;
count__48898_48903 = G__48908;
i__48899_48904 = G__48909;
continue;
} else {
var temp__6753__auto___48910 = cljs.core.seq(seq__48896_48901);
if(temp__6753__auto___48910){
var seq__48896_48911__$1 = temp__6753__auto___48910;
if(cljs.core.chunked_seq_QMARK_(seq__48896_48911__$1)){
var c__8413__auto___48912 = cljs.core.chunk_first(seq__48896_48911__$1);
var G__48913 = cljs.core.chunk_rest(seq__48896_48911__$1);
var G__48914 = c__8413__auto___48912;
var G__48915 = cljs.core.count(c__8413__auto___48912);
var G__48916 = (0);
seq__48896_48901 = G__48913;
chunk__48897_48902 = G__48914;
count__48898_48903 = G__48915;
i__48899_48904 = G__48916;
continue;
} else {
var property__47101__auto___48917 = cljs.core.first(seq__48896_48911__$1);
if(cljs.core.truth_((base__47100__auto___48900[property__47101__auto___48917]))){
(devcards.core.DomComponent.prototype[property__47101__auto___48917] = (base__47100__auto___48900[property__47101__auto___48917]));
} else {
}

var G__48918 = cljs.core.next(seq__48896_48911__$1);
var G__48919 = null;
var G__48920 = (0);
var G__48921 = (0);
seq__48896_48901 = G__48918;
chunk__48897_48902 = G__48919;
count__48898_48903 = G__48920;
i__48899_48904 = G__48921;
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
return (function (p1__48922_SHARP_){
return !(p1__48922_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__48931 = opts;
var map__48931__$1 = ((((!((map__48931 == null)))?((((map__48931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48931):map__48931);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$options);
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
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__48931,map__48931__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__48923_SHARP_){
return devcards.core.booler_QMARK_(p1__48923_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__48931,map__48931__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__48954 = "div";
var G__48955 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__48956 = sablono.interpreter.interpret((function (){var G__48959 = "code";
var G__48960 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__48961 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__48959,G__48960,G__48961);
})());
var G__48957 = (function (){var G__48962 = "span";
var G__48963 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__48964 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__48962,G__48963,G__48964);
})();
var G__48958 = (function (){var G__48966 = "span";
var G__48967 = ({"style": ({"flex": "1 100px"})});
var G__48968 = " Received: ";
var G__48969 = (function (){var attrs48965 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs48965))?sablono.interpreter.attributes(attrs48965):null),((cljs.core.map_QMARK_(attrs48965))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48965)], null)));
})();
return React.createElement(G__48966,G__48967,G__48968,G__48969);
})();
return React.createElement(G__48954,G__48955,G__48956,G__48957,G__48958);
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__48989 = "div";
var G__48990 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__48991 = (function (){var attrs48988 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48988))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs48988], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs48988))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48988)], null)));
})();
var G__48992 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__48994 = "div";
var G__48995 = null;
var G__48996 = (function (){var attrs48993 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48993))?sablono.interpreter.attributes(attrs48993):null),((cljs.core.map_QMARK_(attrs48993))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48993)], null)));
})();
var G__48997 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs48998 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48998))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs48998], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs48998))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48998)], null)));
})():null));
return React.createElement(G__48994,G__48995,G__48996,G__48997);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__48989,G__48990,G__48991,G__48992);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__49012_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__49012_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__49015 = devcards.core.DevcardBase;
var G__49016 = ({"card": devcards.core.add_environment_defaults(card_options)});
return React.createElement(G__49015,G__49016);
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


devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49019,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49021 = (((k49019 instanceof cljs.core.Keyword))?k49019.fqn:null);
switch (G__49021) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49019,else__8180__auto__);

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


devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49018){
var self__ = this;
var G__49018__$1 = this;
return (new cljs.core.RecordIter((0),G__49018__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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


devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49018){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49029 = cljs.core.keyword_identical_QMARK_;
var expr__49030 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49032 = cljs.core.cst$kw$obj;
var G__49033 = expr__49030;
return (pred__49029.cljs$core$IFn$_invoke$arity$2 ? pred__49029.cljs$core$IFn$_invoke$arity$2(G__49032,G__49033) : pred__49029.call(null,G__49032,G__49033));
})())){
return (new devcards.core.IdentiyOptions(G__49018,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49018),null));
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


devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49018){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__49018,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__49020){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49020),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49020,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__49048){
var map__49051 = p__49048;
var map__49051__$1 = ((((!((map__49051 == null)))?((((map__49051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49051):map__49051);
var devcard_opts = map__49051__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__49051,map__49051__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__49051,map__49051__$1,devcard_opts,options))
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


devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49055,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49057 = (((k49055 instanceof cljs.core.Keyword))?k49055.fqn:null);
switch (G__49057) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49055,else__8180__auto__);

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


devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49054){
var self__ = this;
var G__49054__$1 = this;
return (new cljs.core.RecordIter((0),G__49054__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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


devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49054){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49058 = cljs.core.keyword_identical_QMARK_;
var expr__49059 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49061 = cljs.core.cst$kw$obj;
var G__49062 = expr__49059;
return (pred__49058.cljs$core$IFn$_invoke$arity$2 ? pred__49058.cljs$core$IFn$_invoke$arity$2(G__49061,G__49062) : pred__49058.call(null,G__49061,G__49062));
})())){
return (new devcards.core.AtomLikeOptions(G__49054,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49054),null));
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


devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49054){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__49054,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__49056){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49056),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49056,cljs.core.cst$kw$obj),null));
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


devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k49084,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__49086 = (((k49084 instanceof cljs.core.Keyword))?k49084.fqn:null);
switch (G__49086) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49084,else__8180__auto__);

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


devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49083){
var self__ = this;
var G__49083__$1 = this;
return (new cljs.core.RecordIter((0),G__49083__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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


devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__49083){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__49087 = cljs.core.keyword_identical_QMARK_;
var expr__49088 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__49090 = cljs.core.cst$kw$obj;
var G__49091 = expr__49088;
return (pred__49087.cljs$core$IFn$_invoke$arity$2 ? pred__49087.cljs$core$IFn$_invoke$arity$2(G__49090,G__49091) : pred__49087.call(null,G__49090,G__49091));
})())){
return (new devcards.core.EdnLikeOptions(G__49083,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__49083),null));
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


devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__49083){
var self__ = this;
var this__8176__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__49083,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__49085){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__49085),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49085,cljs.core.cst$kw$obj),null));
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
if((function (){var G__49135 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__49135 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__49135.devcards$core$IDevcard$))){
return true;
} else {
if((!G__49135.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__49135);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__49135);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__49145 = devcards.core.DomComponent;
var G__49146 = ({"node_fn": node_fn, "data_atom": data_atom});
return React.createElement(G__49145,G__49146);
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
var map__49159 = (function (){var G__49160 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49160) : cljs.core.deref.call(null,G__49160));
})();
var map__49159__$1 = ((((!((map__49159 == null)))?((((map__49159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49159):map__49159);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49159__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49159__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__49163 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49163) : cljs.core.deref.call(null,G__49163));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__49165 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49165) : cljs.core.deref.call(null,G__49165));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49170 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49170__$1 = ((((!((map__49170 == null)))?((((map__49170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49170):map__49170);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49170__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49170__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49172_49174 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49173_49175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49172_49174,G__49173_49175) : cljs.core.reset_BANG_.call(null,G__49172_49174,G__49173_49175));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49180 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49180__$1 = ((((!((map__49180 == null)))?((((map__49180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49180):map__49180);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49180__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49180__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49182_49184 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49183_49185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49182_49184,G__49183_49185) : cljs.core.reset_BANG_.call(null,G__49182_49184,G__49183_49185));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__49190 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__49190__$1 = ((((!((map__49190 == null)))?((((map__49190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49190):map__49190);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49190__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__49192_49194 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49193_49195 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49192_49194,G__49193_49195) : cljs.core.reset_BANG_.call(null,G__49192_49194,G__49193_49195));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__49196 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__49197 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49197) : cljs.core.atom.call(null,G__49197));
})()});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(function (){var x__8436__auto__ = (function (){var G__49199 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49199) : cljs.core.deref.call(null,G__49199));
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
return (function (p__49200){
var map__49201 = p__49200;
var map__49201__$1 = ((((!((map__49201 == null)))?((((map__49201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49201):map__49201);
var ha = map__49201__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49201__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49201__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49201__$1,cljs.core.cst$kw$ignore_DASH_click);
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
var G__49203 = "div";
var G__49204 = ({"style": ({"display": (cljs.core.truth_((function (){var or__7502__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__49205 = (function (){var action = ((function (G__49203,G__49204,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__49203,G__49204,this$))
;
return sablono.interpreter.interpret((function (){var G__49211 = "button";
var G__49212 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__49213 = (function (){var G__49214 = "span";
var G__49215 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__49216 = "";
return React.createElement(G__49214,G__49215,G__49216);
})();
return React.createElement(G__49211,G__49212,G__49213);
})());
})();
var G__49206 = (function (){var action = ((function (G__49203,G__49204,G__49205,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__49217 = data_atom;
var G__49218 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49217,G__49218) : cljs.core.reset_BANG_.call(null,G__49217,G__49218));
});})(G__49203,G__49204,G__49205,this$))
;
return sablono.interpreter.interpret((function (){var G__49221 = "button";
var G__49222 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__49223 = (function (){var G__49224 = "span";
var G__49225 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__49226 = "";
return React.createElement(G__49224,G__49225,G__49226);
})();
return React.createElement(G__49221,G__49222,G__49223);
})());
})();
var G__49207 = (function (){var action = ((function (G__49203,G__49204,G__49205,G__49206,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__49203,G__49204,G__49205,G__49206,this$))
;
return sablono.interpreter.interpret((function (){var G__49229 = "button";
var G__49230 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__49231 = (function (){var G__49232 = "span";
var G__49233 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__49234 = "";
return React.createElement(G__49232,G__49233,G__49234);
})();
return React.createElement(G__49229,G__49230,G__49231);
})());
})();
var G__49208 = (function (){var listener = ((function (G__49203,G__49204,G__49205,G__49206,G__49207,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__49203,G__49204,G__49205,G__49206,G__49207,this$))
;
return sablono.interpreter.interpret((function (){var G__49243 = "button";
var G__49244 = ({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__49245 = (function (){var G__49248 = "span";
var G__49249 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__49248,G__49249);
})();
var G__49246 = (function (){var G__49250 = "span";
var G__49251 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return React.createElement(G__49250,G__49251);
})();
var G__49247 = (function (){var G__49252 = "span";
var G__49253 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return React.createElement(G__49252,G__49253);
})();
return React.createElement(G__49243,G__49244,G__49245,G__49246,G__49247);
})());
})();
return React.createElement(G__49203,G__49204,G__49205,G__49206,G__49207,G__49208);
} else {
return null;
}
})});
return React.createClass(G__49196);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__49276 = devcards.core.HistoryComponent;
var G__49277 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return React.createElement(G__49276,G__49277);
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
var _STAR_current_env_STAR_49280 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_49280;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__8533__auto__ = (function (){var G__49281 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49281) : cljs.core.atom.call(null,G__49281));
})();
var prefer_table__8534__auto__ = (function (){var G__49284 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49284) : cljs.core.atom.call(null,G__49284));
})();
var method_cache__8535__auto__ = (function (){var G__49285 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49285) : cljs.core.atom.call(null,G__49285));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__49286 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49286) : cljs.core.atom.call(null,G__49286));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs49298 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49298))?sablono.interpreter.attributes(attrs49298):null),((cljs.core.map_QMARK_(attrs49298))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49298)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__49306,body){
var map__49315 = p__49306;
var map__49315__$1 = ((((!((map__49315 == null)))?((((map__49315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49315):map__49315);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49315__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__49319 = "div";
var G__49320 = null;
var G__49321 = (function (){var attrs49318 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs49318))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs49318], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs49318))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49318)], null)));
})();
var G__49322 = sablono.interpreter.interpret(body);
return React.createElement(G__49319,G__49320,G__49321,G__49322);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__49327){
var map__49361 = p__49327;
var map__49361__$1 = ((((!((map__49361 == null)))?((((map__49361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49361):map__49361);
var m = map__49361__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49361__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49361__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49361__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs49363 = (function (){var G__49364 = devcards.core.CodeHighlight;
var G__49365 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return React.createElement(G__49364,G__49365);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49363))?sablono.interpreter.attributes(attrs49363):null),((cljs.core.map_QMARK_(attrs49363))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__49368 = "div";
var G__49369 = ({"style": ({"marginTop": "5px"})});
var G__49370 = (function (){var G__49372 = "div";
var G__49373 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__49374 = "\u25B6";
return React.createElement(G__49372,G__49373,G__49374);
})();
var G__49371 = (function (){var G__49375 = "div";
var G__49376 = ({"style": ({"marginLeft": "20px"})});
var G__49377 = sablono.interpreter.interpret((function (){var G__49378 = devcards.core.CodeHighlight;
var G__49379 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__49378,G__49379);
})());
return React.createElement(G__49375,G__49376,G__49377);
})();
return React.createElement(G__49368,G__49369,G__49370,G__49371);
})():null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49363),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?(function (){var G__49382 = "div";
var G__49383 = ({"style": ({"marginTop": "5px"})});
var G__49384 = (function (){var G__49386 = "div";
var G__49387 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__49388 = "\u25B6";
return React.createElement(G__49386,G__49387,G__49388);
})();
var G__49385 = (function (){var G__49389 = "div";
var G__49390 = ({"style": ({"marginLeft": "20px"})});
var G__49391 = sablono.interpreter.interpret((function (){var G__49392 = devcards.core.CodeHighlight;
var G__49393 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return React.createElement(G__49392,G__49393);
})());
return React.createElement(G__49389,G__49390,G__49391);
})();
return React.createElement(G__49382,G__49383,G__49384,G__49385);
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
return devcards.core.display_message(m,(function (){var G__49407 = "div";
var G__49408 = null;
var G__49409 = React.createElement("strong",null,"Error: ");
var G__49410 = (function (){var attrs49406 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs49406))?sablono.interpreter.attributes(attrs49406):null),((cljs.core.map_QMARK_(attrs49406))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49406)], null)));
})();
return React.createElement(G__49407,G__49408,G__49409,G__49410);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs49411 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49411))?sablono.interpreter.attributes(attrs49411):null),((cljs.core.map_QMARK_(attrs49411))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49411)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__49412){
var map__49413 = p__49412;
var map__49413__$1 = ((((!((map__49413 == null)))?((((map__49413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49413):map__49413);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49413__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs49415 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__49413,map__49413__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__49413,map__49413__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),(function (){var x__8436__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49415))?sablono.interpreter.attributes(attrs49415):null),((cljs.core.map_QMARK_(attrs49415))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49415)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__49422 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__49422) : cljs.test.report.call(null,G__49422));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t,i], 0)),cljs.core.cst$kw$className,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs49434 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49435,p__49436){
var map__49437 = p__49435;
var map__49437__$1 = ((((!((map__49437 == null)))?((((map__49437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49437):map__49437);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49437__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49437__$1,cljs.core.cst$kw$html_DASH_list);
var vec__49438 = p__49436;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49438,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49438,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (function (){var x__8436__auto__ = devcards.core.test_renderer(t,i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})();
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49434))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs49434], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs49434))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49434)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__49489){
var map__49490 = p__49489;
var map__49490__$1 = ((((!((map__49490 == null)))?((((map__49490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49490):map__49490);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__49488 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__49488__$1 = ((((!((map__49488 == null)))?((((map__49488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49488):map__49488);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__49495 = "div";
var G__49496 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__49497 = (function (){var G__49499 = "div";
var G__49500 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__49501 = (function (){var G__49505 = "a";
var G__49506 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__49505,G__49499,G__49500,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__49505,G__49499,G__49500,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
)});
var G__49507 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__49505,G__49506,G__49507);
})();
var G__49502 = (function (){var G__49511 = "button";
var G__49512 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49511,G__49499,G__49500,G__49501,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(G__49511,G__49499,G__49500,G__49501,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49513 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__49511,G__49512,G__49513);
})();
var G__49503 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__49514 = "button";
var G__49515 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49514,G__49499,G__49500,G__49501,G__49502,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__49514,G__49499,G__49500,G__49501,G__49502,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (p__49517){
var map__49518 = p__49517;
var map__49518__$1 = ((((!((map__49518 == null)))?((((map__49518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49518):map__49518);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49518__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__49514,G__49499,G__49500,G__49501,G__49502,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
}));
});})(G__49514,G__49499,G__49500,G__49501,G__49502,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49516 = sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1))].join(''));
return React.createElement(G__49514,G__49515,G__49516);
})()));
var G__49504 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__49523 = "button";
var G__49524 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_(((function (G__49523,G__49499,G__49500,G__49501,G__49502,G__49503,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (G__49523,G__49499,G__49500,G__49501,G__49502,G__49503,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1){
return (function (p__49526){
var map__49527 = p__49526;
var map__49527__$1 = ((((!((map__49527 == null)))?((((map__49527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49527):map__49527);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49527__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__49523,G__49499,G__49500,G__49501,G__49502,G__49503,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
}));
});})(G__49523,G__49499,G__49500,G__49501,G__49502,G__49503,G__49495,G__49496,error_QMARK_,tests,some_tests,total_tests,map__49488,map__49488__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"});
var G__49525 = sablono.interpreter.interpret(pass);
return React.createElement(G__49523,G__49524,G__49525);
})()));
return React.createElement(G__49499,G__49500,G__49501,G__49502,G__49503,G__49504);
})();
var G__49498 = (function (){var G__49529 = "div";
var G__49530 = ({"className": devcards.system.devcards_rendered_card_class});
var G__49531 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__7502__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__49529,G__49530,G__49531);
})();
return React.createElement(G__49495,G__49496,G__49497,G__49498);
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
devcards.core.test_loop = (function (){var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_49639){
var state_val_49640 = (state_49639[(1)]);
if((state_val_49640 === (7))){
var state_49639__$1 = state_49639;
var statearr_49641_49712 = state_49639__$1;
(statearr_49641_49712[(2)] = false);

(statearr_49641_49712[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (20))){
var inst_49577 = (state_49639[(7)]);
var inst_49597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49577);
var state_49639__$1 = state_49639;
var statearr_49642_49713 = state_49639__$1;
(statearr_49642_49713[(2)] = inst_49597);

(statearr_49642_49713[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (27))){
var inst_49602 = (state_49639[(8)]);
var inst_49614 = (state_49639[(9)]);
var inst_49618 = (inst_49602.cljs$core$IFn$_invoke$arity$1 ? inst_49602.cljs$core$IFn$_invoke$arity$1(inst_49614) : inst_49602.call(null,inst_49614));
var state_49639__$1 = state_49639;
var statearr_49643_49714 = state_49639__$1;
(statearr_49643_49714[(2)] = inst_49618);

(statearr_49643_49714[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (1))){
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49639__$1,(2),devcards.core.test_channel);
} else {
if((state_val_49640 === (24))){
var state_49639__$1 = state_49639;
var statearr_49644_49715 = state_49639__$1;
(statearr_49644_49715[(2)] = null);

(statearr_49644_49715[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (4))){
var state_49639__$1 = state_49639;
var statearr_49645_49716 = state_49639__$1;
(statearr_49645_49716[(2)] = false);

(statearr_49645_49716[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (15))){
var state_49639__$1 = state_49639;
var statearr_49646_49720 = state_49639__$1;
(statearr_49646_49720[(2)] = false);

(statearr_49646_49720[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (21))){
var inst_49577 = (state_49639[(7)]);
var state_49639__$1 = state_49639;
var statearr_49647_49722 = state_49639__$1;
(statearr_49647_49722[(2)] = inst_49577);

(statearr_49647_49722[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (13))){
var inst_49637 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49639__$1,inst_49637);
} else {
if((state_val_49640 === (22))){
var inst_49601 = (state_49639[(10)]);
var inst_49600 = (state_49639[(2)]);
var inst_49601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49600,cljs.core.cst$kw$tests);
var inst_49602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49600,cljs.core.cst$kw$callback);
var state_49639__$1 = (function (){var statearr_49651 = state_49639;
(statearr_49651[(8)] = inst_49602);

(statearr_49651[(10)] = inst_49601__$1);

return statearr_49651;
})();
if(cljs.core.truth_(inst_49601__$1)){
var statearr_49652_49728 = state_49639__$1;
(statearr_49652_49728[(1)] = (23));

} else {
var statearr_49653_49729 = state_49639__$1;
(statearr_49653_49729[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (29))){
var inst_49628 = (state_49639[(2)]);
var inst_49629 = cljs.test.clear_env_BANG_();
var state_49639__$1 = (function (){var statearr_49657 = state_49639;
(statearr_49657[(11)] = inst_49629);

(statearr_49657[(12)] = inst_49628);

return statearr_49657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49639__$1,(30),devcards.core.test_channel);
} else {
if((state_val_49640 === (6))){
var state_49639__$1 = state_49639;
var statearr_49659_49730 = state_49639__$1;
(statearr_49659_49730[(2)] = true);

(statearr_49659_49730[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (28))){
var inst_49602 = (state_49639[(8)]);
var inst_49620 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_49621 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_49622 = cljs.core.PersistentHashMap.fromArrays(inst_49620,inst_49621);
var inst_49623 = devcards.core.collect_test(inst_49622);
var inst_49624 = cljs.test.get_current_env();
var inst_49625 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49624,cljs.core.cst$kw$error,"Execution timed out!");
var inst_49626 = (inst_49602.cljs$core$IFn$_invoke$arity$1 ? inst_49602.cljs$core$IFn$_invoke$arity$1(inst_49625) : inst_49602.call(null,inst_49625));
var state_49639__$1 = (function (){var statearr_49662 = state_49639;
(statearr_49662[(13)] = inst_49623);

return statearr_49662;
})();
var statearr_49663_49731 = state_49639__$1;
(statearr_49663_49731[(2)] = inst_49626);

(statearr_49663_49731[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (25))){
var inst_49635 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49666_49733 = state_49639__$1;
(statearr_49666_49733[(2)] = inst_49635);

(statearr_49666_49733[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (17))){
var state_49639__$1 = state_49639;
var statearr_49668_49735 = state_49639__$1;
(statearr_49668_49735[(2)] = true);

(statearr_49668_49735[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (3))){
var inst_49553 = (state_49639[(14)]);
var inst_49558 = inst_49553.cljs$lang$protocol_mask$partition0$;
var inst_49559 = (inst_49558 & (64));
var inst_49560 = inst_49553.cljs$core$ISeq$;
var inst_49561 = (cljs.core.PROTOCOL_SENTINEL === inst_49560);
var inst_49562 = (inst_49559) || (inst_49561);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49562)){
var statearr_49670_49744 = state_49639__$1;
(statearr_49670_49744[(1)] = (6));

} else {
var statearr_49672_49745 = state_49639__$1;
(statearr_49672_49745[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (12))){
var inst_49577 = (state_49639[(7)]);
var inst_49581 = (inst_49577 == null);
var inst_49582 = cljs.core.not(inst_49581);
var state_49639__$1 = state_49639;
if(inst_49582){
var statearr_49673_49749 = state_49639__$1;
(statearr_49673_49749[(1)] = (14));

} else {
var statearr_49674_49750 = state_49639__$1;
(statearr_49674_49750[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (2))){
var inst_49553 = (state_49639[(14)]);
var inst_49553__$1 = (state_49639[(2)]);
var inst_49555 = (inst_49553__$1 == null);
var inst_49556 = cljs.core.not(inst_49555);
var state_49639__$1 = (function (){var statearr_49676 = state_49639;
(statearr_49676[(14)] = inst_49553__$1);

return statearr_49676;
})();
if(inst_49556){
var statearr_49677_49752 = state_49639__$1;
(statearr_49677_49752[(1)] = (3));

} else {
var statearr_49678_49753 = state_49639__$1;
(statearr_49678_49753[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (23))){
var inst_49601 = (state_49639[(10)]);
var inst_49607 = (state_49639[(15)]);
var inst_49607__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_49608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49609 = devcards.core.run_card_tests(inst_49601);
var inst_49610 = [inst_49609,inst_49607__$1];
var inst_49611 = (new cljs.core.PersistentVector(null,2,(5),inst_49608,inst_49610,null));
var state_49639__$1 = (function (){var statearr_49679 = state_49639;
(statearr_49679[(15)] = inst_49607__$1);

return statearr_49679;
})();
return cljs.core.async.ioc_alts_BANG_(state_49639__$1,(26),inst_49611);
} else {
if((state_val_49640 === (19))){
var inst_49592 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49680_49754 = state_49639__$1;
(statearr_49680_49754[(2)] = inst_49592);

(statearr_49680_49754[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (11))){
var inst_49553 = (state_49639[(14)]);
var inst_49574 = (state_49639[(2)]);
var inst_49575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49574,cljs.core.cst$kw$tests);
var inst_49576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49574,cljs.core.cst$kw$callback);
var inst_49577 = inst_49553;
var state_49639__$1 = (function (){var statearr_49681 = state_49639;
(statearr_49681[(16)] = inst_49575);

(statearr_49681[(7)] = inst_49577);

(statearr_49681[(17)] = inst_49576);

return statearr_49681;
})();
var statearr_49682_49755 = state_49639__$1;
(statearr_49682_49755[(2)] = null);

(statearr_49682_49755[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (9))){
var inst_49553 = (state_49639[(14)]);
var inst_49571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49553);
var state_49639__$1 = state_49639;
var statearr_49683_49756 = state_49639__$1;
(statearr_49683_49756[(2)] = inst_49571);

(statearr_49683_49756[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (5))){
var inst_49569 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49569)){
var statearr_49684_49757 = state_49639__$1;
(statearr_49684_49757[(1)] = (9));

} else {
var statearr_49685_49758 = state_49639__$1;
(statearr_49685_49758[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (14))){
var inst_49577 = (state_49639[(7)]);
var inst_49584 = inst_49577.cljs$lang$protocol_mask$partition0$;
var inst_49585 = (inst_49584 & (64));
var inst_49586 = inst_49577.cljs$core$ISeq$;
var inst_49587 = (cljs.core.PROTOCOL_SENTINEL === inst_49586);
var inst_49588 = (inst_49585) || (inst_49587);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49588)){
var statearr_49686_49761 = state_49639__$1;
(statearr_49686_49761[(1)] = (17));

} else {
var statearr_49687_49762 = state_49639__$1;
(statearr_49687_49762[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (26))){
var inst_49607 = (state_49639[(15)]);
var inst_49613 = (state_49639[(2)]);
var inst_49614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49613,(0),null);
var inst_49615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49613,(1),null);
var inst_49616 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_49615,inst_49607);
var state_49639__$1 = (function (){var statearr_49688 = state_49639;
(statearr_49688[(9)] = inst_49614);

return statearr_49688;
})();
if(inst_49616){
var statearr_49689_49770 = state_49639__$1;
(statearr_49689_49770[(1)] = (27));

} else {
var statearr_49690_49771 = state_49639__$1;
(statearr_49690_49771[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (16))){
var inst_49595 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49595)){
var statearr_49691_49772 = state_49639__$1;
(statearr_49691_49772[(1)] = (20));

} else {
var statearr_49692_49773 = state_49639__$1;
(statearr_49692_49773[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (30))){
var inst_49631 = (state_49639[(2)]);
var inst_49577 = inst_49631;
var state_49639__$1 = (function (){var statearr_49693 = state_49639;
(statearr_49693[(7)] = inst_49577);

return statearr_49693;
})();
var statearr_49694_49774 = state_49639__$1;
(statearr_49694_49774[(2)] = null);

(statearr_49694_49774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (10))){
var inst_49553 = (state_49639[(14)]);
var state_49639__$1 = state_49639;
var statearr_49695_49775 = state_49639__$1;
(statearr_49695_49775[(2)] = inst_49553);

(statearr_49695_49775[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (18))){
var state_49639__$1 = state_49639;
var statearr_49696_49776 = state_49639__$1;
(statearr_49696_49776[(2)] = false);

(statearr_49696_49776[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_49640 === (8))){
var inst_49566 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49697_49782 = state_49639__$1;
(statearr_49697_49782[(2)] = inst_49566);

(statearr_49697_49782[(1)] = (5));


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
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var devcards$core$state_machine__40507__auto__ = null;
var devcards$core$state_machine__40507__auto____0 = (function (){
var statearr_49701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49701[(0)] = devcards$core$state_machine__40507__auto__);

(statearr_49701[(1)] = (1));

return statearr_49701;
});
var devcards$core$state_machine__40507__auto____1 = (function (state_49639){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_49639);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e49702){if((e49702 instanceof Object)){
var ex__40510__auto__ = e49702;
var statearr_49703_49783 = state_49639;
(statearr_49703_49783[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49639);

return cljs.core.cst$kw$recur;
} else {
throw e49702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__49786 = state_49639;
state_49639 = G__49786;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
devcards$core$state_machine__40507__auto__ = function(state_49639){
switch(arguments.length){
case 0:
return devcards$core$state_machine__40507__auto____0.call(this);
case 1:
return devcards$core$state_machine__40507__auto____1.call(this,state_49639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__40507__auto____0;
devcards$core$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__40507__auto____1;
return devcards$core$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_49707 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_49707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_49707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__47100__auto___49798 = ({"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__47100__auto___49798);
}

var seq__49794_49799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__49795_49800 = null;
var count__49796_49801 = (0);
var i__49797_49802 = (0);
while(true){
if((i__49797_49802 < count__49796_49801)){
var property__47101__auto___49806 = chunk__49795_49800.cljs$core$IIndexed$_nth$arity$2(null,i__49797_49802);
if(cljs.core.truth_((base__47100__auto___49798[property__47101__auto___49806]))){
(devcards.core.TestDevcard.prototype[property__47101__auto___49806] = (base__47100__auto___49798[property__47101__auto___49806]));
} else {
}

var G__49810 = seq__49794_49799;
var G__49811 = chunk__49795_49800;
var G__49812 = count__49796_49801;
var G__49813 = (i__49797_49802 + (1));
seq__49794_49799 = G__49810;
chunk__49795_49800 = G__49811;
count__49796_49801 = G__49812;
i__49797_49802 = G__49813;
continue;
} else {
var temp__6753__auto___49815 = cljs.core.seq(seq__49794_49799);
if(temp__6753__auto___49815){
var seq__49794_49816__$1 = temp__6753__auto___49815;
if(cljs.core.chunked_seq_QMARK_(seq__49794_49816__$1)){
var c__8413__auto___49817 = cljs.core.chunk_first(seq__49794_49816__$1);
var G__49818 = cljs.core.chunk_rest(seq__49794_49816__$1);
var G__49819 = c__8413__auto___49817;
var G__49820 = cljs.core.count(c__8413__auto___49817);
var G__49821 = (0);
seq__49794_49799 = G__49818;
chunk__49795_49800 = G__49819;
count__49796_49801 = G__49820;
i__49797_49802 = G__49821;
continue;
} else {
var property__47101__auto___49822 = cljs.core.first(seq__49794_49816__$1);
if(cljs.core.truth_((base__47100__auto___49798[property__47101__auto___49822]))){
(devcards.core.TestDevcard.prototype[property__47101__auto___49822] = (base__47100__auto___49798[property__47101__auto___49822]));
} else {
}

var G__49823 = cljs.core.next(seq__49794_49816__$1);
var G__49824 = null;
var G__49825 = (0);
var G__49826 = (0);
seq__49794_49799 = G__49823;
chunk__49795_49800 = G__49824;
count__49796_49801 = G__49825;
i__49797_49802 = G__49826;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__8730__auto__ = [];
var len__8723__auto___49839 = arguments.length;
var i__8724__auto___49840 = (0);
while(true){
if((i__8724__auto___49840 < len__8723__auto___49839)){
args__8730__auto__.push((arguments[i__8724__auto___49840]));

var G__49843 = (i__8724__auto___49840 + (1));
i__8724__auto___49840 = G__49843;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core49828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core49828 = (function (test_thunks,meta49829){
this.test_thunks = test_thunks;
this.meta49829 = meta49829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

devcards.core.t_devcards$core49828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49830,meta49829__$1){
var self__ = this;
var _49830__$1 = this;
return (new devcards.core.t_devcards$core49828(self__.test_thunks,meta49829__$1));
});


devcards.core.t_devcards$core49828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49830){
var self__ = this;
var _49830__$1 = this;
return self__.meta49829;
});


devcards.core.t_devcards$core49828.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;


devcards.core.t_devcards$core49828.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__49837 = devcards.core.TestDevcard;
var G__49838 = ({"test_thunks": self__.test_thunks, "path": path});
return React.createElement(G__49837,G__49838);
});

devcards.core.t_devcards$core49828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta49829], null);
});

devcards.core.t_devcards$core49828.cljs$lang$type = true;

devcards.core.t_devcards$core49828.cljs$lang$ctorStr = "devcards.core/t_devcards$core49828";

devcards.core.t_devcards$core49828.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"devcards.core/t_devcards$core49828");
});

devcards.core.__GT_t_devcards$core49828 = (function devcards$core$__GT_t_devcards$core49828(test_thunks__$1,meta49829){
return (new devcards.core.t_devcards$core49828(test_thunks__$1,meta49829));
});

}

return (new devcards.core.t_devcards$core49828(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq49827){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49827));
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

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__49871 = (function (){var attrs49872 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49872))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs49872], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs49872))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49872)], null)));
})();
return React.renderToString(G__49871);
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
var G__49876 = (function (){var attrs49878 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs49878))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs49878], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs49878))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49878)], null)));
})();
var G__49877 = devcards.system.devcards_app_node();
return React.render(G__49876,G__49877);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_49916){
var state_val_49917 = (state_49916[(1)]);
if((state_val_49917 === (1))){
var inst_49907 = devcards.core.load_data_from_channel_BANG_();
var state_49916__$1 = state_49916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49916__$1,(2),inst_49907);
} else {
if((state_val_49917 === (2))){
var inst_49909 = (state_49916[(2)]);
var inst_49910 = cljs.core.async.timeout((100));
var state_49916__$1 = (function (){var statearr_49918 = state_49916;
(statearr_49918[(7)] = inst_49909);

return statearr_49918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49916__$1,(3),inst_49910);
} else {
if((state_val_49917 === (3))){
var inst_49912 = (state_49916[(2)]);
var inst_49913 = (function (){return ((function (inst_49912,state_val_49917,c__40690__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_49912,state_val_49917,c__40690__auto__))
})();
var inst_49914 = setTimeout(inst_49913,(0));
var state_49916__$1 = (function (){var statearr_49920 = state_49916;
(statearr_49920[(8)] = inst_49912);

return statearr_49920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49916__$1,inst_49914);
} else {
return null;
}
}
}
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__40507__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__40507__auto____0 = (function (){
var statearr_49930 = [null,null,null,null,null,null,null,null,null];
(statearr_49930[(0)] = devcards$core$mount_namespace_$_state_machine__40507__auto__);

(statearr_49930[(1)] = (1));

return statearr_49930;
});
var devcards$core$mount_namespace_$_state_machine__40507__auto____1 = (function (state_49916){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_49916);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e49931){if((e49931 instanceof Object)){
var ex__40510__auto__ = e49931;
var statearr_49932_49945 = state_49916;
(statearr_49932_49945[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49916);

return cljs.core.cst$kw$recur;
} else {
throw e49931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__49946 = state_49916;
state_49916 = G__49946;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__40507__auto__ = function(state_49916){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__40507__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__40507__auto____1.call(this,state_49916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__40507__auto____0;
devcards$core$mount_namespace_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__40507__auto____1;
return devcards$core$mount_namespace_$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_49933 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_49933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_49933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

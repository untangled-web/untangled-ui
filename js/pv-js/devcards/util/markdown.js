// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__6753__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__6753__auto__)){
var ws = temp__6753__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__7502__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(cljs.core.truth_(devcards.util.markdown.is_bullet_item_QMARK_(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
var conv_class_45532 = Showdown.converter;
var converter_45533 = (new conv_class_45532());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_45532,converter_45533){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_45533.makeHtml(markdown_txt);
});})(conv_class_45532,converter_45533))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__8533__auto__ = (function (){var G__45542 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45542) : cljs.core.atom.call(null,G__45542));
})();
var prefer_table__8534__auto__ = (function (){var G__45543 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45543) : cljs.core.atom.call(null,G__45543));
})();
var method_cache__8535__auto__ = (function (){var G__45544 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45544) : cljs.core.atom.call(null,G__45544));
})();
var cached_hierarchy__8536__auto__ = (function (){var G__45545 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45545) : cljs.core.atom.call(null,G__45545));
})();
var hierarchy__8537__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),((function (method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__){
return (function (p__45546,line){
var map__45547 = p__45546;
var map__45547__$1 = ((((!((map__45547 == null)))?((((map__45547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45547):map__45547);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45547__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__,hierarchy__8537__auto__))
,cljs.core.cst$kw$default,hierarchy__8537__auto__,method_table__8533__auto__,prefer_table__8534__auto__,method_cache__8535__auto__,cached_hierarchy__8536__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__45565,line){
var map__45566 = p__45565;
var map__45566__$1 = ((((!((map__45566 == null)))?((((map__45566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45566):map__45566);
var st = map__45566__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45566__$1,cljs.core.cst$kw$stage);
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45566__$1,cljs.core.cst$kw$left_DASH_margin);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__45579,line){
var map__45580 = p__45579;
var map__45580__$1 = ((((!((map__45580 == null)))?((((map__45580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45580):map__45580);
var st = map__45580__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45580__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__45597,line){
var map__45598 = p__45597;
var map__45598__$1 = ((((!((map__45598 == null)))?((((map__45598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45598):map__45598);
var st = map__45598__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45598__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45598__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__45613,line){
var map__45614 = p__45613;
var map__45614__$1 = ((((!((map__45614 == null)))?((((map__45614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45614):map__45614);
var st = map__45614__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45614__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45614__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$left_DASH_margin,devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__45646 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__45646__$1 = ((((!((map__45646 == null)))?((((map__45646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45646):map__45646);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45646__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45646__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__45646,map__45646__$1,stage,accum){
return (function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),((function (map__45646,map__45646__$1,stage,accum){
return (function (p1__45634_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__45634_SHARP_);
});})(map__45646,map__45646__$1,stage,accum))
);
});})(map__45646,map__45646__$1,stage,accum))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__45646,map__45646__$1,stage,accum){
return (function (p__45649){
var map__45650 = p__45649;
var map__45650__$1 = ((((!((map__45650 == null)))?((((map__45650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45650):map__45650);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45650__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
});})(map__45646,map__45646__$1,stage,accum))
,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});

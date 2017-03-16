// Compiled by ClojureScript 1.9.473 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28368__auto__ = (((value == null))?null:value);
var m__28369__auto__ = (devtools.format._header[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,value);
} else {
var m__28369__auto____$1 = (devtools.format._header["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28368__auto__ = (((value == null))?null:value);
var m__28369__auto__ = (devtools.format._has_body[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,value);
} else {
var m__28369__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28368__auto__ = (((value == null))?null:value);
var m__28369__auto__ = (devtools.format._body[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,value);
} else {
var m__28369__auto____$1 = (devtools.format._body["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__688424__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__688424__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__688424__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__688424__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__688423__auto__ = temp__6753__auto____$2;
return goog.object.get(o__688423__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709466 = arguments.length;
var i__28872__auto___709467 = (0);
while(true){
if((i__28872__auto___709467 < len__28871__auto___709466)){
args__28878__auto__.push((arguments[i__28872__auto___709467]));

var G__709468 = (i__28872__auto___709467 + (1));
i__28872__auto___709467 = G__709468;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq709460){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709460));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709485 = arguments.length;
var i__28872__auto___709488 = (0);
while(true){
if((i__28872__auto___709488 < len__28871__auto___709485)){
args__28878__auto__.push((arguments[i__28872__auto___709488]));

var G__709489 = (i__28872__auto___709488 + (1));
i__28872__auto___709488 = G__709489;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq709480){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709480));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709517 = arguments.length;
var i__28872__auto___709518 = (0);
while(true){
if((i__28872__auto___709518 < len__28871__auto___709517)){
args__28878__auto__.push((arguments[i__28872__auto___709518]));

var G__709521 = (i__28872__auto___709518 + (1));
i__28872__auto___709518 = G__709521;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq709506){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709506));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709543 = arguments.length;
var i__28872__auto___709544 = (0);
while(true){
if((i__28872__auto___709544 < len__28871__auto___709543)){
args__28878__auto__.push((arguments[i__28872__auto___709544]));

var G__709548 = (i__28872__auto___709544 + (1));
i__28872__auto___709544 = G__709548;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq709534){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709534));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709569 = arguments.length;
var i__28872__auto___709571 = (0);
while(true){
if((i__28872__auto___709571 < len__28871__auto___709569)){
args__28878__auto__.push((arguments[i__28872__auto___709571]));

var G__709576 = (i__28872__auto___709571 + (1));
i__28872__auto___709571 = G__709576;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq709561){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709561));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709596 = arguments.length;
var i__28872__auto___709597 = (0);
while(true){
if((i__28872__auto___709597 < len__28871__auto___709596)){
args__28878__auto__.push((arguments[i__28872__auto___709597]));

var G__709601 = (i__28872__auto___709597 + (1));
i__28872__auto___709597 = G__709601;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq709587){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709587));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709613 = arguments.length;
var i__28872__auto___709614 = (0);
while(true){
if((i__28872__auto___709614 < len__28871__auto___709613)){
args__28878__auto__.push((arguments[i__28872__auto___709614]));

var G__709618 = (i__28872__auto___709614 + (1));
i__28872__auto___709614 = G__709618;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq709608){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709608));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709637 = arguments.length;
var i__28872__auto___709638 = (0);
while(true){
if((i__28872__auto___709638 < len__28871__auto___709637)){
args__28878__auto__.push((arguments[i__28872__auto___709638]));

var G__709641 = (i__28872__auto___709638 + (1));
i__28872__auto___709638 = G__709641;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__709631){
var vec__709632 = p__709631;
var state_override = cljs.core.nth.call(null,vec__709632,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__709632,state_override){
return (function (p1__709623_SHARP_){
return cljs.core.merge.call(null,p1__709623_SHARP_,state_override);
});})(vec__709632,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq709625){
var G__709627 = cljs.core.first.call(null,seq709625);
var seq709625__$1 = cljs.core.next.call(null,seq709625);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__709627,seq709625__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709661 = arguments.length;
var i__28872__auto___709662 = (0);
while(true){
if((i__28872__auto___709662 < len__28871__auto___709661)){
args__28878__auto__.push((arguments[i__28872__auto___709662]));

var G__709663 = (i__28872__auto___709662 + (1));
i__28872__auto___709662 = G__709663;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq709653){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709653));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709683 = arguments.length;
var i__28872__auto___709684 = (0);
while(true){
if((i__28872__auto___709684 < len__28871__auto___709683)){
args__28878__auto__.push((arguments[i__28872__auto___709684]));

var G__709687 = (i__28872__auto___709684 + (1));
i__28872__auto___709684 = G__709687;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq709677){
var G__709678 = cljs.core.first.call(null,seq709677);
var seq709677__$1 = cljs.core.next.call(null,seq709677);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__709678,seq709677__$1);
});


//# sourceMappingURL=format.js.map?rel=1489703356439
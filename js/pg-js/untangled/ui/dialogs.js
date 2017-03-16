// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.dialogs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('untangled.i18n');
goog.require('untangled.ui.elements');
goog.require('untangled.client.mutations');
untangled.ui.dialogs.dialog_ident = (function untangled$ui$dialogs$dialog_ident(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dialogs_SLASH_by_DASH_id,cljs.core.cst$kw$dialog_SLASH_id.cljs$core$IFn$_invoke$arity$1(props)], null);
});
untangled.ui.dialogs.default_yes_label = (function (){
tr("Yes");

return "Yes";
})()
;
untangled.ui.dialogs.default_no_label = (function (){
tr("No");

return "No";
})()
;
/**
 * If using i18n, be sure to pass these labels through `tr`. This is a bit
 *   counterintuitive, but to get it right, use a pattern like this:
 * 
 *   ```
 *   (def do-it-string (do (tr "Do it???") "Do it???"))
 *   (make-confirmation-dialog
 *   :title do-it-string ...)
 *   ```
 * 
 *   
 */
untangled.ui.dialogs.make_confirmation_dialog = (function untangled$ui$dialogs$make_confirmation_dialog(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51867 = arguments.length;
var i__8724__auto___51868 = (0);
while(true){
if((i__8724__auto___51868 < len__8723__auto___51867)){
args__8730__auto__.push((arguments[i__8724__auto___51868]));

var G__51869 = (i__8724__auto___51868 + (1));
i__8724__auto___51868 = G__51869;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (id,modal_QMARK_,message,p__51864){
var map__51865 = p__51864;
var map__51865__$1 = ((((!((map__51865 == null)))?((((map__51865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51865):map__51865);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51865__$1,cljs.core.cst$kw$title);
var yes_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51865__$1,cljs.core.cst$kw$yes_DASH_label,"Yes");
var no_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51865__$1,cljs.core.cst$kw$no_DASH_label,"No");
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$dialog_SLASH_id,id,cljs.core.cst$kw$dialog_SLASH_visible_QMARK_,false,cljs.core.cst$kw$dialog_SLASH_modal_QMARK_,modal_QMARK_,cljs.core.cst$kw$dialog_SLASH_title,title,cljs.core.cst$kw$dialog_SLASH_message,message,cljs.core.cst$kw$dialog_SLASH_yes_DASH_label,yes_label,cljs.core.cst$kw$dialog_SLASH_no_DASH_label,no_label], null);
});

untangled.ui.dialogs.make_confirmation_dialog.cljs$lang$maxFixedArity = (3);

untangled.ui.dialogs.make_confirmation_dialog.cljs$lang$applyTo = (function (seq51860){
var G__51861 = cljs.core.first(seq51860);
var seq51860__$1 = cljs.core.next(seq51860);
var G__51862 = cljs.core.first(seq51860__$1);
var seq51860__$2 = cljs.core.next(seq51860__$1);
var G__51863 = cljs.core.first(seq51860__$2);
var seq51860__$3 = cljs.core.next(seq51860__$2);
return untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(G__51861,G__51862,G__51863,seq51860__$3);
});

/**
 * @constructor
 */
untangled.ui.dialogs.ConfirmationDialog = (function untangled$ui$dialogs$ConfirmationDialog(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.dialogs.ConfirmationDialog.prototype = goog.object.clone(React.Component.prototype);

var x51874_51903 = untangled.ui.dialogs.ConfirmationDialog.prototype;
x51874_51903.componentWillUpdate = ((function (x51874_51903){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___51904 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___51905 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___51904,next_ident__10196__auto___51905)){
var idxr__10197__auto___51906 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___51906 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___51906),((function (idxr__10197__auto___51906,ident__10195__auto___51904,next_ident__10196__auto___51905,this__10191__auto__,x51874_51903){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___51904], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___51905], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___51906,ident__10195__auto___51904,next_ident__10196__auto___51905,this__10191__auto__,x51874_51903))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x51874_51903))
;

x51874_51903.shouldComponentUpdate = ((function (x51874_51903){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__51876 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__51876);
} else {
return G__51876;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__51881 = this__10191__auto__.state;
var G__51882 = "omcljs$state";
return goog.object.get(G__51881,G__51882);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x51874_51903))
;

x51874_51903.componentWillUnmount = ((function (x51874_51903){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51874_51903))
;

x51874_51903.componentDidUpdate = ((function (x51874_51903){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x51874_51903))
;

x51874_51903.isMounted = ((function (x51874_51903){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x51874_51903))
;

x51874_51903.componentWillMount = ((function (x51874_51903){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x51874_51903))
;

x51874_51903.render = ((function (x51874_51903){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_51883 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_51884 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_51885 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_51886 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_51887 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__51888 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__51888__$1 = ((((!((map__51888 == null)))?((((map__51888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51888):map__51888);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,cljs.core.cst$kw$title);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,cljs.core.cst$kw$message);
var no_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,cljs.core.cst$kw$no_DASH_label);
var yes_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,cljs.core.cst$kw$yes_DASH_label);
var onDone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888__$1,cljs.core.cst$kw$onDone);
var respond = ((function (map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903){
return (function (v){
untangled.client.mutations.set_value_BANG_(this$,cljs.core.cst$kw$dialog_SLASH_visible_QMARK_,false);

if(cljs.core.truth_(onDone)){
return (onDone.cljs$core$IFn$_invoke$arity$1 ? onDone.cljs$core$IFn$_invoke$arity$1(v) : onDone.call(null,v));
} else {
return null;
}
});})(map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903))
;
var map__51889 = om.next.props(this$);
var map__51889__$1 = ((((!((map__51889 == null)))?((((map__51889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51889):map__51889);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,cljs.core.cst$kw$dialog_SLASH_visible_QMARK_);
var modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889__$1,cljs.core.cst$kw$dialog_SLASH_modal_QMARK_);
var G__51892 = cljs.core.PersistentArrayMap.EMPTY;
var G__51893 = (cljs.core.truth_(title)?(function (){var G__51896 = tr(title);
return (untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.elements.ui_dialog_title.cljs$core$IFn$_invoke$arity$1(G__51896) : untangled.ui.elements.ui_dialog_title.call(null,G__51896));
})():null);
var G__51894 = (cljs.core.truth_(message)?(function (){var G__51897 = tr(message);
return (untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$1 ? untangled.ui.elements.ui_dialog_body.cljs$core$IFn$_invoke$arity$1(G__51897) : untangled.ui.elements.ui_dialog_body.call(null,G__51897));
})():null);
var G__51895 = (function (){var G__51898 = cljs.core.PersistentArrayMap.EMPTY;
var G__51899 = untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (G__51898,G__51892,G__51893,G__51894,map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,respond,map__51889,map__51889__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903){
return (function (){
return respond(false);
});})(G__51898,G__51892,G__51893,G__51894,map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,respond,map__51889,map__51889__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903))
}),cljs.core.array_seq([tr(no_label)], 0));
var G__51900 = untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (G__51898,G__51899,G__51892,G__51893,G__51894,map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,respond,map__51889,map__51889__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903){
return (function (){
return respond(true);
});})(G__51898,G__51899,G__51892,G__51893,G__51894,map__51888,map__51888__$1,title,message,no_label,yes_label,onDone,respond,map__51889,map__51889__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_51883,_STAR_depth_STAR_51884,_STAR_shared_STAR_51885,_STAR_instrument_STAR_51886,_STAR_parent_STAR_51887,this$,this__10190__auto__,x51874_51903))
}),cljs.core.array_seq([tr(yes_label)], 0));
return (untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3 ? untangled.ui.elements.ui_dialog_actions.cljs$core$IFn$_invoke$arity$3(G__51898,G__51899,G__51900) : untangled.ui.elements.ui_dialog_actions.call(null,G__51898,G__51899,G__51900));
})();
return (untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4 ? untangled.ui.elements.ui_dialog.cljs$core$IFn$_invoke$arity$4(G__51892,G__51893,G__51894,G__51895) : untangled.ui.elements.ui_dialog.call(null,G__51892,G__51893,G__51894,G__51895));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_51887;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_51886;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_51885;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_51884;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_51883;
}});})(x51874_51903))
;


untangled.ui.dialogs.ConfirmationDialog.prototype.constructor = untangled.ui.dialogs.ConfirmationDialog;

untangled.ui.dialogs.ConfirmationDialog.prototype.constructor.displayName = "untangled.ui.dialogs/ConfirmationDialog";

untangled.ui.dialogs.ConfirmationDialog.prototype.om$isComponent = true;

var x51901_51907 = untangled.ui.dialogs.ConfirmationDialog;
/** @nocollapse */
x51901_51907.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51901_51907.om$next$Ident$ident$arity$2 = ((function (x51901_51907){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.dialogs.dialog_ident(props);
});})(x51901_51907))
;

/** @nocollapse */
x51901_51907.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x51901_51907.om$next$IQuery$query$arity$1 = ((function (x51901_51907){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible,cljs.core.cst$kw$modal], null);
});})(x51901_51907))
;


var x51902_51908 = untangled.ui.dialogs.ConfirmationDialog.prototype;

x51902_51908.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x51902_51908.om$next$Ident$ident$arity$2 = ((function (x51902_51908){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.dialogs.dialog_ident(props);
});})(x51902_51908))
;


x51902_51908.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x51902_51908.om$next$IQuery$query$arity$1 = ((function (x51902_51908){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$visible,cljs.core.cst$kw$modal], null);
});})(x51902_51908))
;


untangled.ui.dialogs.ConfirmationDialog.cljs$lang$type = true;

untangled.ui.dialogs.ConfirmationDialog.cljs$lang$ctorStr = "untangled.ui.dialogs/ConfirmationDialog";

untangled.ui.dialogs.ConfirmationDialog.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.dialogs/ConfirmationDialog");
});
var factory_51915 = om.next.factory.cljs$core$IFn$_invoke$arity$2(untangled.ui.dialogs.ConfirmationDialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$dialog_SLASH_id], null));
/**
 * Render a confirmation dialog. The various labels are supplied to this
 *  function so you can internationalize them.
 * 
 *  Note: Initialize dialogs in your app state with `make-confirmation-dialog`,
 *  which is also where you decide if it is a modal dialog.
 * 
 *  Parameters:
 * 
 *  `props` The Om props for the component
 *  `onDone` Function to be called (with true/false) when the user chooses.
 * 
 *  The dialog automatically closes when a choice is made.
 *  
 */
untangled.ui.dialogs.ui_confirmation_dialog = ((function (factory_51915){
return (function untangled$ui$dialogs$ui_confirmation_dialog(var_args){
var args__8730__auto__ = [];
var len__8723__auto___51916 = arguments.length;
var i__8724__auto___51917 = (0);
while(true){
if((i__8724__auto___51917 < len__8723__auto___51916)){
args__8730__auto__.push((arguments[i__8724__auto___51917]));

var G__51918 = (i__8724__auto___51917 + (1));
i__8724__auto___51917 = G__51918;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});})(factory_51915))
;

untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic = ((function (factory_51915){
return (function (props,p__51911){
var map__51912 = p__51911;
var map__51912__$1 = ((((!((map__51912 == null)))?((((map__51912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51912):map__51912);
var onDone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,cljs.core.cst$kw$onDone);
var G__51914 = om.next.computed(props,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onDone,onDone], null));
return (factory_51915.cljs$core$IFn$_invoke$arity$1 ? factory_51915.cljs$core$IFn$_invoke$arity$1(G__51914) : factory_51915.call(null,G__51914));
});})(factory_51915))
;

untangled.ui.dialogs.ui_confirmation_dialog.cljs$lang$maxFixedArity = (1);

untangled.ui.dialogs.ui_confirmation_dialog.cljs$lang$applyTo = ((function (factory_51915){
return (function (seq51909){
var G__51910 = cljs.core.first(seq51909);
var seq51909__$1 = cljs.core.next(seq51909);
return untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(G__51910,seq51909__$1);
});})(factory_51915))
;


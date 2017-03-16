// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.dialogs');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.i18n');
goog.require('untangled.ui.elements');
goog.require('untangled.client.mutations');
untangled.ui.dialogs.dialog_ident = (function untangled$ui$dialogs$dialog_ident(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialogs","by-id","dialogs/by-id",-437701990),new cljs.core.Keyword("dialog","id","dialog/id",501525772).cljs$core$IFn$_invoke$arity$1(props)], null);
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
var args__28878__auto__ = [];
var len__28871__auto___705554 = arguments.length;
var i__28872__auto___705556 = (0);
while(true){
if((i__28872__auto___705556 < len__28871__auto___705554)){
args__28878__auto__.push((arguments[i__28872__auto___705556]));

var G__705557 = (i__28872__auto___705556 + (1));
i__28872__auto___705556 = G__705557;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (id,modal_QMARK_,message,p__705527){
var map__705528 = p__705527;
var map__705528__$1 = ((((!((map__705528 == null)))?((((map__705528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705528):map__705528);
var title = cljs.core.get.call(null,map__705528__$1,new cljs.core.Keyword(null,"title","title",636505583));
var yes_label = cljs.core.get.call(null,map__705528__$1,new cljs.core.Keyword(null,"yes-label","yes-label",179740702),"Yes");
var no_label = cljs.core.get.call(null,map__705528__$1,new cljs.core.Keyword(null,"no-label","no-label",-928333903),"No");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("dialog","id","dialog/id",501525772),id,new cljs.core.Keyword("dialog","visible?","dialog/visible?",-296410277),false,new cljs.core.Keyword("dialog","modal?","dialog/modal?",780981247),modal_QMARK_,new cljs.core.Keyword("dialog","title","dialog/title",1863734199),title,new cljs.core.Keyword("dialog","message","dialog/message",-1754918090),message,new cljs.core.Keyword("dialog","yes-label","dialog/yes-label",-620978458),yes_label,new cljs.core.Keyword("dialog","no-label","dialog/no-label",-1681081767),no_label], null);
});

untangled.ui.dialogs.make_confirmation_dialog.cljs$lang$maxFixedArity = (3);

untangled.ui.dialogs.make_confirmation_dialog.cljs$lang$applyTo = (function (seq705520){
var G__705521 = cljs.core.first.call(null,seq705520);
var seq705520__$1 = cljs.core.next.call(null,seq705520);
var G__705522 = cljs.core.first.call(null,seq705520__$1);
var seq705520__$2 = cljs.core.next.call(null,seq705520__$1);
var G__705523 = cljs.core.first.call(null,seq705520__$2);
var seq705520__$3 = cljs.core.next.call(null,seq705520__$2);
return untangled.ui.dialogs.make_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(G__705521,G__705522,G__705523,seq705520__$3);
});

/**
 * @constructor
 */
untangled.ui.dialogs.ConfirmationDialog = (function untangled$ui$dialogs$ConfirmationDialog(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.dialogs.ConfirmationDialog.prototype = goog.object.clone(React.Component.prototype);

var x705579_705606 = untangled.ui.dialogs.ConfirmationDialog.prototype;
x705579_705606.componentWillUpdate = ((function (x705579_705606){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___705610 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___705611 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___705610,next_ident__29856__auto___705611)){
var idxr__29857__auto___705614 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___705614 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___705614),((function (idxr__29857__auto___705614,ident__29855__auto___705610,next_ident__29856__auto___705611,this__29851__auto__,x705579_705606){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___705610], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___705611], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___705614,ident__29855__auto___705610,next_ident__29856__auto___705611,this__29851__auto__,x705579_705606))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x705579_705606))
;

x705579_705606.shouldComponentUpdate = ((function (x705579_705606){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__705582 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__705582);
} else {
return G__705582;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x705579_705606))
;

x705579_705606.componentWillUnmount = ((function (x705579_705606){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705579_705606))
;

x705579_705606.componentDidUpdate = ((function (x705579_705606){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x705579_705606))
;

x705579_705606.isMounted = ((function (x705579_705606){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x705579_705606))
;

x705579_705606.componentWillMount = ((function (x705579_705606){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x705579_705606))
;

x705579_705606.render = ((function (x705579_705606){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_705583 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_705584 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_705585 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_705586 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_705587 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__705592 = om.next.get_computed.call(null,this$);
var map__705592__$1 = ((((!((map__705592 == null)))?((((map__705592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705592):map__705592);
var title = cljs.core.get.call(null,map__705592__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.call(null,map__705592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var no_label = cljs.core.get.call(null,map__705592__$1,new cljs.core.Keyword(null,"no-label","no-label",-928333903));
var yes_label = cljs.core.get.call(null,map__705592__$1,new cljs.core.Keyword(null,"yes-label","yes-label",179740702));
var onDone = cljs.core.get.call(null,map__705592__$1,new cljs.core.Keyword(null,"onDone","onDone",-1640247431));
var respond = ((function (map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606){
return (function (v){
untangled.client.mutations.set_value_BANG_.call(null,this$,new cljs.core.Keyword("dialog","visible?","dialog/visible?",-296410277),false);

if(cljs.core.truth_(onDone)){
return onDone.call(null,v);
} else {
return null;
}
});})(map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606))
;
var map__705593 = om.next.props.call(null,this$);
var map__705593__$1 = ((((!((map__705593 == null)))?((((map__705593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705593):map__705593);
var visible_QMARK_ = cljs.core.get.call(null,map__705593__$1,new cljs.core.Keyword("dialog","visible?","dialog/visible?",-296410277));
var modal_QMARK_ = cljs.core.get.call(null,map__705593__$1,new cljs.core.Keyword("dialog","modal?","dialog/modal?",780981247));
return untangled.ui.elements.ui_dialog.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(title)?untangled.ui.elements.ui_dialog_title.call(null,tr(title)):null),(cljs.core.truth_(message)?untangled.ui.elements.ui_dialog_body.call(null,tr(message)):null),untangled.ui.elements.ui_dialog_actions.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.elements.ui_button.call(null,({"onClick": ((function (map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,respond,map__705593,map__705593__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606){
return (function (){
return respond.call(null,false);
});})(map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,respond,map__705593,map__705593__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606))
}),tr(no_label)),untangled.ui.elements.ui_button.call(null,({"onClick": ((function (map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,respond,map__705593,map__705593__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606){
return (function (){
return respond.call(null,true);
});})(map__705592,map__705592__$1,title,message,no_label,yes_label,onDone,respond,map__705593,map__705593__$1,visible_QMARK_,modal_QMARK_,_STAR_reconciler_STAR_705583,_STAR_depth_STAR_705584,_STAR_shared_STAR_705585,_STAR_instrument_STAR_705586,_STAR_parent_STAR_705587,this$,this__29850__auto__,x705579_705606))
}),tr(yes_label))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_705587;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_705586;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_705585;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_705584;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_705583;
}});})(x705579_705606))
;


untangled.ui.dialogs.ConfirmationDialog.prototype.constructor = untangled.ui.dialogs.ConfirmationDialog;

untangled.ui.dialogs.ConfirmationDialog.prototype.constructor.displayName = "untangled.ui.dialogs/ConfirmationDialog";

untangled.ui.dialogs.ConfirmationDialog.prototype.om$isComponent = true;

var x705603_705671 = untangled.ui.dialogs.ConfirmationDialog;
/** @nocollapse */
x705603_705671.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705603_705671.om$next$Ident$ident$arity$2 = ((function (x705603_705671){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.dialogs.dialog_ident.call(null,props);
});})(x705603_705671))
;

/** @nocollapse */
x705603_705671.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x705603_705671.om$next$IQuery$query$arity$1 = ((function (x705603_705671){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
});})(x705603_705671))
;


var x705605_705675 = untangled.ui.dialogs.ConfirmationDialog.prototype;

x705605_705675.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x705605_705675.om$next$Ident$ident$arity$2 = ((function (x705605_705675){
return (function (this$,props){
var this$__$1 = this;
return untangled.ui.dialogs.dialog_ident.call(null,props);
});})(x705605_705675))
;


x705605_705675.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x705605_705675.om$next$IQuery$query$arity$1 = ((function (x705605_705675){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
});})(x705605_705675))
;


untangled.ui.dialogs.ConfirmationDialog.cljs$lang$type = true;

untangled.ui.dialogs.ConfirmationDialog.cljs$lang$ctorStr = "untangled.ui.dialogs/ConfirmationDialog";

untangled.ui.dialogs.ConfirmationDialog.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.dialogs/ConfirmationDialog");
});
var factory_705687 = om.next.factory.call(null,untangled.ui.dialogs.ConfirmationDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("dialog","id","dialog/id",501525772)], null));
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
untangled.ui.dialogs.ui_confirmation_dialog = ((function (factory_705687){
return (function untangled$ui$dialogs$ui_confirmation_dialog(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705690 = arguments.length;
var i__28872__auto___705691 = (0);
while(true){
if((i__28872__auto___705691 < len__28871__auto___705690)){
args__28878__auto__.push((arguments[i__28872__auto___705691]));

var G__705692 = (i__28872__auto___705691 + (1));
i__28872__auto___705691 = G__705692;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});})(factory_705687))
;

untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic = ((function (factory_705687){
return (function (props,p__705681){
var map__705682 = p__705681;
var map__705682__$1 = ((((!((map__705682 == null)))?((((map__705682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__705682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__705682):map__705682);
var onDone = cljs.core.get.call(null,map__705682__$1,new cljs.core.Keyword(null,"onDone","onDone",-1640247431));
return factory_705687.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDone","onDone",-1640247431),onDone], null)));
});})(factory_705687))
;

untangled.ui.dialogs.ui_confirmation_dialog.cljs$lang$maxFixedArity = (1);

untangled.ui.dialogs.ui_confirmation_dialog.cljs$lang$applyTo = ((function (factory_705687){
return (function (seq705679){
var G__705680 = cljs.core.first.call(null,seq705679);
var seq705679__$1 = cljs.core.next.call(null,seq705679);
return untangled.ui.dialogs.ui_confirmation_dialog.cljs$core$IFn$_invoke$arity$variadic(G__705680,seq705679__$1);
});})(factory_705687))
;


//# sourceMappingURL=dialogs.js.map?rel=1489703354064
// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args708447 = [];
var len__28871__auto___708450 = arguments.length;
var i__28872__auto___708451 = (0);
while(true){
if((i__28872__auto___708451 < len__28871__auto___708450)){
args708447.push((arguments[i__28872__auto___708451]));

var G__708452 = (i__28872__auto___708451 + (1));
i__28872__auto___708451 = G__708452;
continue;
} else {
}
break;
}

var G__708449 = args708447.length;
switch (G__708449) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args708447.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28878__auto__ = [];
var len__28871__auto___708455 = arguments.length;
var i__28872__auto___708456 = (0);
while(true){
if((i__28872__auto___708456 < len__28871__auto___708455)){
args__28878__auto__.push((arguments[i__28872__auto___708456]));

var G__708457 = (i__28872__auto___708456 + (1));
i__28872__auto___708456 = G__708457;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq708454){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq708454));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28878__auto__ = [];
var len__28871__auto___708459 = arguments.length;
var i__28872__auto___708460 = (0);
while(true){
if((i__28872__auto___708460 < len__28871__auto___708459)){
args__28878__auto__.push((arguments[i__28872__auto___708460]));

var G__708461 = (i__28872__auto___708460 + (1));
i__28872__auto___708460 = G__708461;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq708458){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq708458));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__708462){
var map__708465 = p__708462;
var map__708465__$1 = ((((!((map__708465 == null)))?((((map__708465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708465):map__708465);
var message = cljs.core.get.call(null,map__708465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__708465__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27650__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27638__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27638__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27638__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32882__auto___708627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___708627,ch){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___708627,ch){
return (function (state_708596){
var state_val_708597 = (state_708596[(1)]);
if((state_val_708597 === (7))){
var inst_708592 = (state_708596[(2)]);
var state_708596__$1 = state_708596;
var statearr_708598_708628 = state_708596__$1;
(statearr_708598_708628[(2)] = inst_708592);

(statearr_708598_708628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (1))){
var state_708596__$1 = state_708596;
var statearr_708599_708629 = state_708596__$1;
(statearr_708599_708629[(2)] = null);

(statearr_708599_708629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (4))){
var inst_708549 = (state_708596[(7)]);
var inst_708549__$1 = (state_708596[(2)]);
var state_708596__$1 = (function (){var statearr_708600 = state_708596;
(statearr_708600[(7)] = inst_708549__$1);

return statearr_708600;
})();
if(cljs.core.truth_(inst_708549__$1)){
var statearr_708601_708630 = state_708596__$1;
(statearr_708601_708630[(1)] = (5));

} else {
var statearr_708602_708631 = state_708596__$1;
(statearr_708602_708631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (15))){
var inst_708556 = (state_708596[(8)]);
var inst_708571 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_708556);
var inst_708572 = cljs.core.first.call(null,inst_708571);
var inst_708573 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_708572);
var inst_708574 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_708573)].join('');
var inst_708575 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_708574);
var state_708596__$1 = state_708596;
var statearr_708603_708632 = state_708596__$1;
(statearr_708603_708632[(2)] = inst_708575);

(statearr_708603_708632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (13))){
var inst_708580 = (state_708596[(2)]);
var state_708596__$1 = state_708596;
var statearr_708604_708633 = state_708596__$1;
(statearr_708604_708633[(2)] = inst_708580);

(statearr_708604_708633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (6))){
var state_708596__$1 = state_708596;
var statearr_708605_708634 = state_708596__$1;
(statearr_708605_708634[(2)] = null);

(statearr_708605_708634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (17))){
var inst_708578 = (state_708596[(2)]);
var state_708596__$1 = state_708596;
var statearr_708606_708635 = state_708596__$1;
(statearr_708606_708635[(2)] = inst_708578);

(statearr_708606_708635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (3))){
var inst_708594 = (state_708596[(2)]);
var state_708596__$1 = state_708596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_708596__$1,inst_708594);
} else {
if((state_val_708597 === (12))){
var inst_708555 = (state_708596[(9)]);
var inst_708569 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_708555,opts);
var state_708596__$1 = state_708596;
if(cljs.core.truth_(inst_708569)){
var statearr_708607_708636 = state_708596__$1;
(statearr_708607_708636[(1)] = (15));

} else {
var statearr_708608_708637 = state_708596__$1;
(statearr_708608_708637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (2))){
var state_708596__$1 = state_708596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708596__$1,(4),ch);
} else {
if((state_val_708597 === (11))){
var inst_708556 = (state_708596[(8)]);
var inst_708561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_708562 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_708556);
var inst_708563 = cljs.core.async.timeout.call(null,(1000));
var inst_708564 = [inst_708562,inst_708563];
var inst_708565 = (new cljs.core.PersistentVector(null,2,(5),inst_708561,inst_708564,null));
var state_708596__$1 = state_708596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_708596__$1,(14),inst_708565);
} else {
if((state_val_708597 === (9))){
var inst_708556 = (state_708596[(8)]);
var inst_708582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_708583 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_708556);
var inst_708584 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_708583);
var inst_708585 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_708584)].join('');
var inst_708586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_708585);
var state_708596__$1 = (function (){var statearr_708609 = state_708596;
(statearr_708609[(10)] = inst_708582);

return statearr_708609;
})();
var statearr_708610_708638 = state_708596__$1;
(statearr_708610_708638[(2)] = inst_708586);

(statearr_708610_708638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (5))){
var inst_708549 = (state_708596[(7)]);
var inst_708551 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_708552 = (new cljs.core.PersistentArrayMap(null,2,inst_708551,null));
var inst_708553 = (new cljs.core.PersistentHashSet(null,inst_708552,null));
var inst_708554 = figwheel.client.focus_msgs.call(null,inst_708553,inst_708549);
var inst_708555 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_708554);
var inst_708556 = cljs.core.first.call(null,inst_708554);
var inst_708557 = figwheel.client.autoload_QMARK_.call(null);
var state_708596__$1 = (function (){var statearr_708611 = state_708596;
(statearr_708611[(9)] = inst_708555);

(statearr_708611[(8)] = inst_708556);

return statearr_708611;
})();
if(cljs.core.truth_(inst_708557)){
var statearr_708612_708639 = state_708596__$1;
(statearr_708612_708639[(1)] = (8));

} else {
var statearr_708613_708640 = state_708596__$1;
(statearr_708613_708640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (14))){
var inst_708567 = (state_708596[(2)]);
var state_708596__$1 = state_708596;
var statearr_708614_708641 = state_708596__$1;
(statearr_708614_708641[(2)] = inst_708567);

(statearr_708614_708641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (16))){
var state_708596__$1 = state_708596;
var statearr_708615_708642 = state_708596__$1;
(statearr_708615_708642[(2)] = null);

(statearr_708615_708642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (10))){
var inst_708588 = (state_708596[(2)]);
var state_708596__$1 = (function (){var statearr_708616 = state_708596;
(statearr_708616[(11)] = inst_708588);

return statearr_708616;
})();
var statearr_708617_708643 = state_708596__$1;
(statearr_708617_708643[(2)] = null);

(statearr_708617_708643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708597 === (8))){
var inst_708555 = (state_708596[(9)]);
var inst_708559 = figwheel.client.reload_file_state_QMARK_.call(null,inst_708555,opts);
var state_708596__$1 = state_708596;
if(cljs.core.truth_(inst_708559)){
var statearr_708618_708644 = state_708596__$1;
(statearr_708618_708644[(1)] = (11));

} else {
var statearr_708619_708645 = state_708596__$1;
(statearr_708619_708645[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__32882__auto___708627,ch))
;
return ((function (switch__32859__auto__,c__32882__auto___708627,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____0 = (function (){
var statearr_708623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_708623[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__);

(statearr_708623[(1)] = (1));

return statearr_708623;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____1 = (function (state_708596){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_708596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e708624){if((e708624 instanceof Object)){
var ex__32863__auto__ = e708624;
var statearr_708625_708646 = state_708596;
(statearr_708625_708646[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_708596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e708624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__708647 = state_708596;
state_708596 = G__708647;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__ = function(state_708596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____1.call(this,state_708596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32860__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___708627,ch))
})();
var state__32884__auto__ = (function (){var statearr_708626 = f__32883__auto__.call(null);
(statearr_708626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___708627);

return statearr_708626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___708627,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__708648_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__708648_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_708651 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_708651){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e708650){if((e708650 instanceof Error)){
var e = e708650;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_708651], null));
} else {
var e = e708650;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_708651))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__708652){
var map__708661 = p__708652;
var map__708661__$1 = ((((!((map__708661 == null)))?((((map__708661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708661):map__708661);
var opts = map__708661__$1;
var build_id = cljs.core.get.call(null,map__708661__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__708661,map__708661__$1,opts,build_id){
return (function (p__708663){
var vec__708664 = p__708663;
var seq__708665 = cljs.core.seq.call(null,vec__708664);
var first__708666 = cljs.core.first.call(null,seq__708665);
var seq__708665__$1 = cljs.core.next.call(null,seq__708665);
var map__708667 = first__708666;
var map__708667__$1 = ((((!((map__708667 == null)))?((((map__708667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708667):map__708667);
var msg = map__708667__$1;
var msg_name = cljs.core.get.call(null,map__708667__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__708665__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__708664,seq__708665,first__708666,seq__708665__$1,map__708667,map__708667__$1,msg,msg_name,_,map__708661,map__708661__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__708664,seq__708665,first__708666,seq__708665__$1,map__708667,map__708667__$1,msg,msg_name,_,map__708661,map__708661__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__708661,map__708661__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__708675){
var vec__708676 = p__708675;
var seq__708677 = cljs.core.seq.call(null,vec__708676);
var first__708678 = cljs.core.first.call(null,seq__708677);
var seq__708677__$1 = cljs.core.next.call(null,seq__708677);
var map__708679 = first__708678;
var map__708679__$1 = ((((!((map__708679 == null)))?((((map__708679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708679):map__708679);
var msg = map__708679__$1;
var msg_name = cljs.core.get.call(null,map__708679__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__708677__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__708681){
var map__708693 = p__708681;
var map__708693__$1 = ((((!((map__708693 == null)))?((((map__708693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708693):map__708693);
var on_compile_warning = cljs.core.get.call(null,map__708693__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__708693__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__708693,map__708693__$1,on_compile_warning,on_compile_fail){
return (function (p__708695){
var vec__708696 = p__708695;
var seq__708697 = cljs.core.seq.call(null,vec__708696);
var first__708698 = cljs.core.first.call(null,seq__708697);
var seq__708697__$1 = cljs.core.next.call(null,seq__708697);
var map__708699 = first__708698;
var map__708699__$1 = ((((!((map__708699 == null)))?((((map__708699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708699):map__708699);
var msg = map__708699__$1;
var msg_name = cljs.core.get.call(null,map__708699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__708697__$1;
var pred__708701 = cljs.core._EQ_;
var expr__708702 = msg_name;
if(cljs.core.truth_(pred__708701.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__708702))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__708701.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__708702))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__708693,map__708693__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__,msg_hist,msg_names,msg){
return (function (state_708930){
var state_val_708931 = (state_708930[(1)]);
if((state_val_708931 === (7))){
var inst_708850 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708850)){
var statearr_708932_708982 = state_708930__$1;
(statearr_708932_708982[(1)] = (8));

} else {
var statearr_708933_708983 = state_708930__$1;
(statearr_708933_708983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (20))){
var inst_708924 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708934_708984 = state_708930__$1;
(statearr_708934_708984[(2)] = inst_708924);

(statearr_708934_708984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (27))){
var inst_708920 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708935_708985 = state_708930__$1;
(statearr_708935_708985[(2)] = inst_708920);

(statearr_708935_708985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (1))){
var inst_708843 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708843)){
var statearr_708936_708986 = state_708930__$1;
(statearr_708936_708986[(1)] = (2));

} else {
var statearr_708937_708987 = state_708930__$1;
(statearr_708937_708987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (24))){
var inst_708922 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708938_708988 = state_708930__$1;
(statearr_708938_708988[(2)] = inst_708922);

(statearr_708938_708988[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (4))){
var inst_708928 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_708930__$1,inst_708928);
} else {
if((state_val_708931 === (15))){
var inst_708926 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708939_708989 = state_708930__$1;
(statearr_708939_708989[(2)] = inst_708926);

(statearr_708939_708989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (21))){
var inst_708879 = (state_708930[(2)]);
var inst_708880 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708881 = figwheel.client.auto_jump_to_error.call(null,opts,inst_708880);
var state_708930__$1 = (function (){var statearr_708940 = state_708930;
(statearr_708940[(7)] = inst_708879);

return statearr_708940;
})();
var statearr_708941_708990 = state_708930__$1;
(statearr_708941_708990[(2)] = inst_708881);

(statearr_708941_708990[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (31))){
var inst_708909 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708909)){
var statearr_708942_708991 = state_708930__$1;
(statearr_708942_708991[(1)] = (34));

} else {
var statearr_708943_708992 = state_708930__$1;
(statearr_708943_708992[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (32))){
var inst_708918 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708944_708993 = state_708930__$1;
(statearr_708944_708993[(2)] = inst_708918);

(statearr_708944_708993[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (33))){
var inst_708905 = (state_708930[(2)]);
var inst_708906 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708907 = figwheel.client.auto_jump_to_error.call(null,opts,inst_708906);
var state_708930__$1 = (function (){var statearr_708945 = state_708930;
(statearr_708945[(8)] = inst_708905);

return statearr_708945;
})();
var statearr_708946_708994 = state_708930__$1;
(statearr_708946_708994[(2)] = inst_708907);

(statearr_708946_708994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (13))){
var inst_708864 = figwheel.client.heads_up.clear.call(null);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(16),inst_708864);
} else {
if((state_val_708931 === (22))){
var inst_708885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708886 = figwheel.client.heads_up.append_warning_message.call(null,inst_708885);
var state_708930__$1 = state_708930;
var statearr_708947_708995 = state_708930__$1;
(statearr_708947_708995[(2)] = inst_708886);

(statearr_708947_708995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (36))){
var inst_708916 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708948_708996 = state_708930__$1;
(statearr_708948_708996[(2)] = inst_708916);

(statearr_708948_708996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (29))){
var inst_708896 = (state_708930[(2)]);
var inst_708897 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708898 = figwheel.client.auto_jump_to_error.call(null,opts,inst_708897);
var state_708930__$1 = (function (){var statearr_708949 = state_708930;
(statearr_708949[(9)] = inst_708896);

return statearr_708949;
})();
var statearr_708950_708997 = state_708930__$1;
(statearr_708950_708997[(2)] = inst_708898);

(statearr_708950_708997[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (6))){
var inst_708845 = (state_708930[(10)]);
var state_708930__$1 = state_708930;
var statearr_708951_708998 = state_708930__$1;
(statearr_708951_708998[(2)] = inst_708845);

(statearr_708951_708998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (28))){
var inst_708892 = (state_708930[(2)]);
var inst_708893 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708894 = figwheel.client.heads_up.display_warning.call(null,inst_708893);
var state_708930__$1 = (function (){var statearr_708952 = state_708930;
(statearr_708952[(11)] = inst_708892);

return statearr_708952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(29),inst_708894);
} else {
if((state_val_708931 === (25))){
var inst_708890 = figwheel.client.heads_up.clear.call(null);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(28),inst_708890);
} else {
if((state_val_708931 === (34))){
var inst_708911 = figwheel.client.heads_up.flash_loaded.call(null);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(37),inst_708911);
} else {
if((state_val_708931 === (17))){
var inst_708870 = (state_708930[(2)]);
var inst_708871 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708872 = figwheel.client.auto_jump_to_error.call(null,opts,inst_708871);
var state_708930__$1 = (function (){var statearr_708953 = state_708930;
(statearr_708953[(12)] = inst_708870);

return statearr_708953;
})();
var statearr_708954_708999 = state_708930__$1;
(statearr_708954_708999[(2)] = inst_708872);

(statearr_708954_708999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (3))){
var inst_708862 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708862)){
var statearr_708955_709000 = state_708930__$1;
(statearr_708955_709000[(1)] = (13));

} else {
var statearr_708956_709001 = state_708930__$1;
(statearr_708956_709001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (12))){
var inst_708858 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708957_709002 = state_708930__$1;
(statearr_708957_709002[(2)] = inst_708858);

(statearr_708957_709002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (2))){
var inst_708845 = (state_708930[(10)]);
var inst_708845__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_708930__$1 = (function (){var statearr_708958 = state_708930;
(statearr_708958[(10)] = inst_708845__$1);

return statearr_708958;
})();
if(cljs.core.truth_(inst_708845__$1)){
var statearr_708959_709003 = state_708930__$1;
(statearr_708959_709003[(1)] = (5));

} else {
var statearr_708960_709004 = state_708930__$1;
(statearr_708960_709004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (23))){
var inst_708888 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708888)){
var statearr_708961_709005 = state_708930__$1;
(statearr_708961_709005[(1)] = (25));

} else {
var statearr_708962_709006 = state_708930__$1;
(statearr_708962_709006[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (35))){
var state_708930__$1 = state_708930;
var statearr_708963_709007 = state_708930__$1;
(statearr_708963_709007[(2)] = null);

(statearr_708963_709007[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (19))){
var inst_708883 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708883)){
var statearr_708964_709008 = state_708930__$1;
(statearr_708964_709008[(1)] = (22));

} else {
var statearr_708965_709009 = state_708930__$1;
(statearr_708965_709009[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (11))){
var inst_708854 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708966_709010 = state_708930__$1;
(statearr_708966_709010[(2)] = inst_708854);

(statearr_708966_709010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (9))){
var inst_708856 = figwheel.client.heads_up.clear.call(null);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(12),inst_708856);
} else {
if((state_val_708931 === (5))){
var inst_708847 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_708930__$1 = state_708930;
var statearr_708967_709011 = state_708930__$1;
(statearr_708967_709011[(2)] = inst_708847);

(statearr_708967_709011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (14))){
var inst_708874 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708874)){
var statearr_708968_709012 = state_708930__$1;
(statearr_708968_709012[(1)] = (18));

} else {
var statearr_708969_709013 = state_708930__$1;
(statearr_708969_709013[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (26))){
var inst_708900 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_708930__$1 = state_708930;
if(cljs.core.truth_(inst_708900)){
var statearr_708970_709014 = state_708930__$1;
(statearr_708970_709014[(1)] = (30));

} else {
var statearr_708971_709015 = state_708930__$1;
(statearr_708971_709015[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (16))){
var inst_708866 = (state_708930[(2)]);
var inst_708867 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708868 = figwheel.client.heads_up.display_exception.call(null,inst_708867);
var state_708930__$1 = (function (){var statearr_708972 = state_708930;
(statearr_708972[(13)] = inst_708866);

return statearr_708972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(17),inst_708868);
} else {
if((state_val_708931 === (30))){
var inst_708902 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708903 = figwheel.client.heads_up.display_warning.call(null,inst_708902);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(33),inst_708903);
} else {
if((state_val_708931 === (10))){
var inst_708860 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708973_709016 = state_708930__$1;
(statearr_708973_709016[(2)] = inst_708860);

(statearr_708973_709016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (18))){
var inst_708876 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_708877 = figwheel.client.heads_up.display_exception.call(null,inst_708876);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(21),inst_708877);
} else {
if((state_val_708931 === (37))){
var inst_708913 = (state_708930[(2)]);
var state_708930__$1 = state_708930;
var statearr_708974_709017 = state_708930__$1;
(statearr_708974_709017[(2)] = inst_708913);

(statearr_708974_709017[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708931 === (8))){
var inst_708852 = figwheel.client.heads_up.flash_loaded.call(null);
var state_708930__$1 = state_708930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708930__$1,(11),inst_708852);
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
}
}
}
}
}
}
}
});})(c__32882__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32859__auto__,c__32882__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____0 = (function (){
var statearr_708978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_708978[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__);

(statearr_708978[(1)] = (1));

return statearr_708978;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____1 = (function (state_708930){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_708930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e708979){if((e708979 instanceof Object)){
var ex__32863__auto__ = e708979;
var statearr_708980_709018 = state_708930;
(statearr_708980_709018[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_708930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e708979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__709019 = state_708930;
state_708930 = G__709019;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__ = function(state_708930){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____1.call(this,state_708930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__,msg_hist,msg_names,msg))
})();
var state__32884__auto__ = (function (){var statearr_708981 = f__32883__auto__.call(null);
(statearr_708981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_708981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__,msg_hist,msg_names,msg))
);

return c__32882__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32882__auto___709082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___709082,ch){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___709082,ch){
return (function (state_709065){
var state_val_709066 = (state_709065[(1)]);
if((state_val_709066 === (1))){
var state_709065__$1 = state_709065;
var statearr_709067_709083 = state_709065__$1;
(statearr_709067_709083[(2)] = null);

(statearr_709067_709083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_709066 === (2))){
var state_709065__$1 = state_709065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_709065__$1,(4),ch);
} else {
if((state_val_709066 === (3))){
var inst_709063 = (state_709065[(2)]);
var state_709065__$1 = state_709065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_709065__$1,inst_709063);
} else {
if((state_val_709066 === (4))){
var inst_709053 = (state_709065[(7)]);
var inst_709053__$1 = (state_709065[(2)]);
var state_709065__$1 = (function (){var statearr_709068 = state_709065;
(statearr_709068[(7)] = inst_709053__$1);

return statearr_709068;
})();
if(cljs.core.truth_(inst_709053__$1)){
var statearr_709069_709084 = state_709065__$1;
(statearr_709069_709084[(1)] = (5));

} else {
var statearr_709070_709085 = state_709065__$1;
(statearr_709070_709085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_709066 === (5))){
var inst_709053 = (state_709065[(7)]);
var inst_709055 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_709053);
var state_709065__$1 = state_709065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_709065__$1,(8),inst_709055);
} else {
if((state_val_709066 === (6))){
var state_709065__$1 = state_709065;
var statearr_709071_709086 = state_709065__$1;
(statearr_709071_709086[(2)] = null);

(statearr_709071_709086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_709066 === (7))){
var inst_709061 = (state_709065[(2)]);
var state_709065__$1 = state_709065;
var statearr_709072_709087 = state_709065__$1;
(statearr_709072_709087[(2)] = inst_709061);

(statearr_709072_709087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_709066 === (8))){
var inst_709057 = (state_709065[(2)]);
var state_709065__$1 = (function (){var statearr_709073 = state_709065;
(statearr_709073[(8)] = inst_709057);

return statearr_709073;
})();
var statearr_709074_709088 = state_709065__$1;
(statearr_709074_709088[(2)] = null);

(statearr_709074_709088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__32882__auto___709082,ch))
;
return ((function (switch__32859__auto__,c__32882__auto___709082,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32860__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32860__auto____0 = (function (){
var statearr_709078 = [null,null,null,null,null,null,null,null,null];
(statearr_709078[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32860__auto__);

(statearr_709078[(1)] = (1));

return statearr_709078;
});
var figwheel$client$heads_up_plugin_$_state_machine__32860__auto____1 = (function (state_709065){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_709065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e709079){if((e709079 instanceof Object)){
var ex__32863__auto__ = e709079;
var statearr_709080_709089 = state_709065;
(statearr_709080_709089[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_709065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e709079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__709090 = state_709065;
state_709065 = G__709090;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32860__auto__ = function(state_709065){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32860__auto____1.call(this,state_709065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32860__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32860__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___709082,ch))
})();
var state__32884__auto__ = (function (){var statearr_709081 = f__32883__auto__.call(null);
(statearr_709081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___709082);

return statearr_709081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___709082,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_709111){
var state_val_709112 = (state_709111[(1)]);
if((state_val_709112 === (1))){
var inst_709106 = cljs.core.async.timeout.call(null,(3000));
var state_709111__$1 = state_709111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_709111__$1,(2),inst_709106);
} else {
if((state_val_709112 === (2))){
var inst_709108 = (state_709111[(2)]);
var inst_709109 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_709111__$1 = (function (){var statearr_709113 = state_709111;
(statearr_709113[(7)] = inst_709108);

return statearr_709113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_709111__$1,inst_709109);
} else {
return null;
}
}
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____0 = (function (){
var statearr_709117 = [null,null,null,null,null,null,null,null];
(statearr_709117[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__);

(statearr_709117[(1)] = (1));

return statearr_709117;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____1 = (function (state_709111){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_709111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e709118){if((e709118 instanceof Object)){
var ex__32863__auto__ = e709118;
var statearr_709119_709121 = state_709111;
(statearr_709119_709121[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_709111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e709118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__709122 = state_709111;
state_709111 = G__709122;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__ = function(state_709111){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____1.call(this,state_709111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32860__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_709120 = f__32883__auto__.call(null);
(statearr_709120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_709120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__,figwheel_version,temp__6753__auto__){
return (function (state_709145){
var state_val_709146 = (state_709145[(1)]);
if((state_val_709146 === (1))){
var inst_709139 = cljs.core.async.timeout.call(null,(2000));
var state_709145__$1 = state_709145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_709145__$1,(2),inst_709139);
} else {
if((state_val_709146 === (2))){
var inst_709141 = (state_709145[(2)]);
var inst_709142 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_709143 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_709142);
var state_709145__$1 = (function (){var statearr_709147 = state_709145;
(statearr_709147[(7)] = inst_709141);

return statearr_709147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_709145__$1,inst_709143);
} else {
return null;
}
}
});})(c__32882__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____0 = (function (){
var statearr_709151 = [null,null,null,null,null,null,null,null];
(statearr_709151[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__);

(statearr_709151[(1)] = (1));

return statearr_709151;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____1 = (function (state_709145){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_709145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e709152){if((e709152 instanceof Object)){
var ex__32863__auto__ = e709152;
var statearr_709153_709155 = state_709145;
(statearr_709153_709155[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_709145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e709152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__709156 = state_709145;
state_709145 = G__709156;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__ = function(state_709145){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____1.call(this,state_709145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__,figwheel_version,temp__6753__auto__))
})();
var state__32884__auto__ = (function (){var statearr_709154 = f__32883__auto__.call(null);
(statearr_709154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_709154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__,figwheel_version,temp__6753__auto__))
);

return c__32882__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__709157){
var map__709161 = p__709157;
var map__709161__$1 = ((((!((map__709161 == null)))?((((map__709161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709161):map__709161);
var file = cljs.core.get.call(null,map__709161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__709161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__709161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__709163 = "";
var G__709163__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__709163),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__709163);
var G__709163__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__709163__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__709163__$1);
if(cljs.core.truth_((function (){var and__27638__auto__ = line;
if(cljs.core.truth_(and__27638__auto__)){
return column;
} else {
return and__27638__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__709163__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__709163__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__709164){
var map__709171 = p__709164;
var map__709171__$1 = ((((!((map__709171 == null)))?((((map__709171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709171):map__709171);
var ed = map__709171__$1;
var formatted_exception = cljs.core.get.call(null,map__709171__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__709171__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__709171__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__709173_709177 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__709174_709178 = null;
var count__709175_709179 = (0);
var i__709176_709180 = (0);
while(true){
if((i__709176_709180 < count__709175_709179)){
var msg_709181 = cljs.core._nth.call(null,chunk__709174_709178,i__709176_709180);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_709181);

var G__709182 = seq__709173_709177;
var G__709183 = chunk__709174_709178;
var G__709184 = count__709175_709179;
var G__709185 = (i__709176_709180 + (1));
seq__709173_709177 = G__709182;
chunk__709174_709178 = G__709183;
count__709175_709179 = G__709184;
i__709176_709180 = G__709185;
continue;
} else {
var temp__6753__auto___709186 = cljs.core.seq.call(null,seq__709173_709177);
if(temp__6753__auto___709186){
var seq__709173_709187__$1 = temp__6753__auto___709186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__709173_709187__$1)){
var c__28561__auto___709188 = cljs.core.chunk_first.call(null,seq__709173_709187__$1);
var G__709189 = cljs.core.chunk_rest.call(null,seq__709173_709187__$1);
var G__709190 = c__28561__auto___709188;
var G__709191 = cljs.core.count.call(null,c__28561__auto___709188);
var G__709192 = (0);
seq__709173_709177 = G__709189;
chunk__709174_709178 = G__709190;
count__709175_709179 = G__709191;
i__709176_709180 = G__709192;
continue;
} else {
var msg_709193 = cljs.core.first.call(null,seq__709173_709187__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_709193);

var G__709194 = cljs.core.next.call(null,seq__709173_709187__$1);
var G__709195 = null;
var G__709196 = (0);
var G__709197 = (0);
seq__709173_709177 = G__709194;
chunk__709174_709178 = G__709195;
count__709175_709179 = G__709196;
i__709176_709180 = G__709197;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__709198){
var map__709201 = p__709198;
var map__709201__$1 = ((((!((map__709201 == null)))?((((map__709201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709201):map__709201);
var w = map__709201__$1;
var message = cljs.core.get.call(null,map__709201__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/guide/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/guide/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27638__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27638__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27638__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__709213 = cljs.core.seq.call(null,plugins);
var chunk__709214 = null;
var count__709215 = (0);
var i__709216 = (0);
while(true){
if((i__709216 < count__709215)){
var vec__709217 = cljs.core._nth.call(null,chunk__709214,i__709216);
var k = cljs.core.nth.call(null,vec__709217,(0),null);
var plugin = cljs.core.nth.call(null,vec__709217,(1),null);
if(cljs.core.truth_(plugin)){
var pl_709223 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__709213,chunk__709214,count__709215,i__709216,pl_709223,vec__709217,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_709223.call(null,msg_hist);
});})(seq__709213,chunk__709214,count__709215,i__709216,pl_709223,vec__709217,k,plugin))
);
} else {
}

var G__709224 = seq__709213;
var G__709225 = chunk__709214;
var G__709226 = count__709215;
var G__709227 = (i__709216 + (1));
seq__709213 = G__709224;
chunk__709214 = G__709225;
count__709215 = G__709226;
i__709216 = G__709227;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__709213);
if(temp__6753__auto__){
var seq__709213__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__709213__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__709213__$1);
var G__709228 = cljs.core.chunk_rest.call(null,seq__709213__$1);
var G__709229 = c__28561__auto__;
var G__709230 = cljs.core.count.call(null,c__28561__auto__);
var G__709231 = (0);
seq__709213 = G__709228;
chunk__709214 = G__709229;
count__709215 = G__709230;
i__709216 = G__709231;
continue;
} else {
var vec__709220 = cljs.core.first.call(null,seq__709213__$1);
var k = cljs.core.nth.call(null,vec__709220,(0),null);
var plugin = cljs.core.nth.call(null,vec__709220,(1),null);
if(cljs.core.truth_(plugin)){
var pl_709232 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__709213,chunk__709214,count__709215,i__709216,pl_709232,vec__709220,k,plugin,seq__709213__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_709232.call(null,msg_hist);
});})(seq__709213,chunk__709214,count__709215,i__709216,pl_709232,vec__709220,k,plugin,seq__709213__$1,temp__6753__auto__))
);
} else {
}

var G__709233 = cljs.core.next.call(null,seq__709213__$1);
var G__709234 = null;
var G__709235 = (0);
var G__709236 = (0);
seq__709213 = G__709233;
chunk__709214 = G__709234;
count__709215 = G__709235;
i__709216 = G__709236;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args709237 = [];
var len__28871__auto___709244 = arguments.length;
var i__28872__auto___709245 = (0);
while(true){
if((i__28872__auto___709245 < len__28871__auto___709244)){
args709237.push((arguments[i__28872__auto___709245]));

var G__709246 = (i__28872__auto___709245 + (1));
i__28872__auto___709245 = G__709246;
continue;
} else {
}
break;
}

var G__709239 = args709237.length;
switch (G__709239) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args709237.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__709240_709248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__709241_709249 = null;
var count__709242_709250 = (0);
var i__709243_709251 = (0);
while(true){
if((i__709243_709251 < count__709242_709250)){
var msg_709252 = cljs.core._nth.call(null,chunk__709241_709249,i__709243_709251);
figwheel.client.socket.handle_incoming_message.call(null,msg_709252);

var G__709253 = seq__709240_709248;
var G__709254 = chunk__709241_709249;
var G__709255 = count__709242_709250;
var G__709256 = (i__709243_709251 + (1));
seq__709240_709248 = G__709253;
chunk__709241_709249 = G__709254;
count__709242_709250 = G__709255;
i__709243_709251 = G__709256;
continue;
} else {
var temp__6753__auto___709257 = cljs.core.seq.call(null,seq__709240_709248);
if(temp__6753__auto___709257){
var seq__709240_709258__$1 = temp__6753__auto___709257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__709240_709258__$1)){
var c__28561__auto___709259 = cljs.core.chunk_first.call(null,seq__709240_709258__$1);
var G__709260 = cljs.core.chunk_rest.call(null,seq__709240_709258__$1);
var G__709261 = c__28561__auto___709259;
var G__709262 = cljs.core.count.call(null,c__28561__auto___709259);
var G__709263 = (0);
seq__709240_709248 = G__709260;
chunk__709241_709249 = G__709261;
count__709242_709250 = G__709262;
i__709243_709251 = G__709263;
continue;
} else {
var msg_709264 = cljs.core.first.call(null,seq__709240_709258__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_709264);

var G__709265 = cljs.core.next.call(null,seq__709240_709258__$1);
var G__709266 = null;
var G__709267 = (0);
var G__709268 = (0);
seq__709240_709248 = G__709265;
chunk__709241_709249 = G__709266;
count__709242_709250 = G__709267;
i__709243_709251 = G__709268;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28878__auto__ = [];
var len__28871__auto___709273 = arguments.length;
var i__28872__auto___709274 = (0);
while(true){
if((i__28872__auto___709274 < len__28871__auto___709273)){
args__28878__auto__.push((arguments[i__28872__auto___709274]));

var G__709275 = (i__28872__auto___709274 + (1));
i__28872__auto___709274 = G__709275;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__709270){
var map__709271 = p__709270;
var map__709271__$1 = ((((!((map__709271 == null)))?((((map__709271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709271):map__709271);
var opts = map__709271__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq709269){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq709269));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e709277){if((e709277 instanceof Error)){
var e = e709277;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e709277;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__709281){
var map__709282 = p__709281;
var map__709282__$1 = ((((!((map__709282 == null)))?((((map__709282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__709282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__709282):map__709282);
var msg_name = cljs.core.get.call(null,map__709282__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489703356124
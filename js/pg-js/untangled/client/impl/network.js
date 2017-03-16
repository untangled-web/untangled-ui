// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.client.impl.network');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
/**
 * This is here (not inlined) to make mocking easier.
 */
untangled.client.impl.network.make_xhrio = (function untangled$client$impl$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
untangled.client.impl.network.ProgressiveTransfer = function(){};

/**
 * Send EDN. The update-callback will merge the state
 *   given to it. The done-callback will merge the state given to it, and indicates completion.
 */
untangled.client.impl.network.updating_send = (function untangled$client$impl$network$updating_send(this$,edn,done_callback,error_callback,update_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$ProgressiveTransfer$updating_send$arity$5 == null)))){
return this$.untangled$client$impl$network$ProgressiveTransfer$updating_send$arity$5(this$,edn,done_callback,error_callback,update_callback);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.impl.network.updating_send[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__8221__auto__.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
var m__8221__auto____$1 = (untangled.client.impl.network.updating_send["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__8221__auto____$1.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
throw cljs.core.missing_protocol("ProgressiveTransfer.updating-send",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.UntangledNetwork = function(){};

/**
 * Send EDN. Calls either the done or error callback when the send is done, and optionally calls the update-callback
 *  one or more times during the transfer (if not nil and supported)
 */
untangled.client.impl.network.send = (function untangled$client$impl$network$send(this$,edn,done_callback,error_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$send$arity$4 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$send$arity$4(this$,edn,done_callback,error_callback);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.impl.network.send[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__8221__auto__.call(null,this$,edn,done_callback,error_callback));
} else {
var m__8221__auto____$1 = (untangled.client.impl.network.send["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__8221__auto____$1.call(null,this$,edn,done_callback,error_callback));
} else {
throw cljs.core.missing_protocol("UntangledNetwork.send",this$);
}
}
}
});

/**
 * Starts the network, passing in the app for any components that may need it.
 */
untangled.client.impl.network.start = (function untangled$client$impl$network$start(this$,complete_app){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$start$arity$2 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$start$arity$2(this$,complete_app);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.impl.network.start[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(this$,complete_app) : m__8221__auto__.call(null,this$,complete_app));
} else {
var m__8221__auto____$1 = (untangled.client.impl.network.start["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,complete_app) : m__8221__auto____$1.call(null,this$,complete_app));
} else {
throw cljs.core.missing_protocol("UntangledNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
untangled.client.impl.network.response_ok = (function untangled$client$impl$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.impl.network.response_ok[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__8221__auto__.call(null,this$,xhrio,ok_cb));
} else {
var m__8221__auto____$1 = (untangled.client.impl.network.response_ok["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__8221__auto____$1.call(null,this$,xhrio,ok_cb));
} else {
throw cljs.core.missing_protocol("IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
untangled.client.impl.network.response_error = (function untangled$client$impl$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__8220__auto__ = (((this$ == null))?null:this$);
var m__8221__auto__ = (untangled.client.impl.network.response_error[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__8221__auto__.call(null,this$,xhrio,err_cb));
} else {
var m__8221__auto____$1 = (untangled.client.impl.network.response_error["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__8221__auto____$1.call(null,this$,xhrio,err_cb));
} else {
throw cljs.core.missing_protocol("IXhrIOCallbacks.response-error",this$);
}
}
}
});

/**
 * An XhrIo-specific implementation method for interpreting the server response.
 */
untangled.client.impl.network.parse_response = (function untangled$client$impl$network$parse_response(var_args){
var args40311 = [];
var len__8723__auto___40315 = arguments.length;
var i__8724__auto___40316 = (0);
while(true){
if((i__8724__auto___40316 < len__8723__auto___40315)){
args40311.push((arguments[i__8724__auto___40316]));

var G__40317 = (i__8724__auto___40316 + (1));
i__8724__auto___40316 = G__40317;
continue;
} else {
}
break;
}

var G__40313 = args40311.length;
switch (G__40313) {
case 1:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40311.length)].join('')));

}
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1 = (function (xhr_io){
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,null);
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2 = (function (xhr_io,read_handlers){
try{var text = xhr_io.getResponseText();
var base_handlers = new cljs.core.PersistentArrayMap(null, 2, ["f",((function (text){
return (function (v){
return parseFloat(v);
});})(text))
,"u",cljs.core.uuid], null);
var handlers = ((cljs.core.map_QMARK_(read_handlers))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_handlers,read_handlers], 0)):base_handlers);
if(clojure.string.blank_QMARK_(text)){
return xhr_io.getStatus();
} else {
return cognitect.transit.read(om.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),xhr_io.getResponseText());
}
}catch (e40314){if((e40314 instanceof Object)){
var e = e40314;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,(404),cljs.core.cst$kw$message,"Server down"], null);
} else {
throw e40314;

}
}});

untangled.client.impl.network.parse_response.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled.client.impl.network.IXhrIOCallbacks}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.Network = (function (url,request_transform,global_error_callback,complete_app,transit_handlers,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.transit_handlers = transit_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k40320,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__40322 = (((k40320 instanceof cljs.core.Keyword))?k40320.fqn:null);
switch (G__40322) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
case "transit-handlers":
return self__.transit_handlers;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40320,else__8180__auto__);

}
});


untangled.client.impl.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.client.impl.network.Network{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40319){
var self__ = this;
var G__40319__$1 = this;
return (new cljs.core.RecordIter((0),G__40319__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.client.impl.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,read_handlers);
if(cljs.core.truth_((function (){var and__7490__auto__ = query_response;
if(cljs.core.truth_(and__7490__auto__)){
return valid_data_callback;
} else {
return and__7490__auto__;
}
})())){
return (valid_data_callback.cljs$core$IFn$_invoke$arity$1 ? valid_data_callback.cljs$core$IFn$_invoke$arity$1(query_response) : valid_data_callback.call(null,query_response));
} else {
return null;
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([str], 0));

(error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1(error) : error_callback.call(null,error));

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.global_error_callback) : cljs.core.deref.call(null,self__.global_error_callback)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.global_error_callback) : cljs.core.deref.call(null,self__.global_error_callback)).call(null,status,error);
} else {
return null;
}
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("UNTANGLED NETWORK ERROR: No connection established.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$network], null));
} else {
return log_and_dispatch_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("SERVER ERROR CODE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,self__.transit_handlers));
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.client.impl.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
var xhrio = untangled.client.impl.network.make_xhrio();
var handlers = (function (){var or__7502__auto__ = cljs.core.cst$kw$write.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__40323 = (function (){var G__40324 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,edn,cljs.core.cst$kw$headers,headers], null);
if(cljs.core.truth_(self__.request_transform)){
return (self__.request_transform.cljs$core$IFn$_invoke$arity$1 ? self__.request_transform.cljs$core$IFn$_invoke$arity$1(G__40324) : self__.request_transform.call(null,G__40324));
} else {
return G__40324;
}
})();
var map__40323__$1 = ((((!((map__40323 == null)))?((((map__40323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40323):map__40323);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40323__$1,cljs.core.cst$kw$body);
var headers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40323__$1,cljs.core.cst$kw$headers);
var post_data = cognitect.transit.write(om.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js(headers__$1);
xhrio.send(self__.url,"POST",post_data,headers__$2);

var G__40326_40346 = xhrio;
var G__40327_40347 = goog.net.EventType.SUCCESS;
var G__40328_40348 = ((function (G__40326_40346,G__40327_40347,xhrio,handlers,headers,map__40323,map__40323__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(null,xhrio,ok);
});})(G__40326_40346,G__40327_40347,xhrio,handlers,headers,map__40323,map__40323__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__40326_40346,G__40327_40347,G__40328_40348);

var G__40329 = xhrio;
var G__40330 = goog.net.EventType.ERROR;
var G__40331 = ((function (G__40329,G__40330,xhrio,handlers,headers,map__40323,map__40323__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(null,xhrio,error);
});})(G__40329,G__40330,xhrio,handlers,headers,map__40323,map__40323__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
return goog.events.listen(G__40329,G__40330,G__40331);
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$complete_DASH_app,app);
});


untangled.client.impl.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$transit_DASH_handlers,null,cljs.core.cst$kw$global_DASH_error_DASH_callback,null,cljs.core.cst$kw$request_DASH_transform,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$complete_DASH_app,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.client.impl.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__40319){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__40332 = cljs.core.keyword_identical_QMARK_;
var expr__40333 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__40335 = cljs.core.cst$kw$url;
var G__40336 = expr__40333;
return (pred__40332.cljs$core$IFn$_invoke$arity$2 ? pred__40332.cljs$core$IFn$_invoke$arity$2(G__40335,G__40336) : pred__40332.call(null,G__40335,G__40336));
})())){
return (new untangled.client.impl.network.Network(G__40319,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40337 = cljs.core.cst$kw$request_DASH_transform;
var G__40338 = expr__40333;
return (pred__40332.cljs$core$IFn$_invoke$arity$2 ? pred__40332.cljs$core$IFn$_invoke$arity$2(G__40337,G__40338) : pred__40332.call(null,G__40337,G__40338));
})())){
return (new untangled.client.impl.network.Network(self__.url,G__40319,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40339 = cljs.core.cst$kw$global_DASH_error_DASH_callback;
var G__40340 = expr__40333;
return (pred__40332.cljs$core$IFn$_invoke$arity$2 ? pred__40332.cljs$core$IFn$_invoke$arity$2(G__40339,G__40340) : pred__40332.call(null,G__40339,G__40340));
})())){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,G__40319,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40341 = cljs.core.cst$kw$complete_DASH_app;
var G__40342 = expr__40333;
return (pred__40332.cljs$core$IFn$_invoke$arity$2 ? pred__40332.cljs$core$IFn$_invoke$arity$2(G__40341,G__40342) : pred__40332.call(null,G__40341,G__40342));
})())){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__40319,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40343 = cljs.core.cst$kw$transit_DASH_handlers;
var G__40344 = expr__40333;
return (pred__40332.cljs$core$IFn$_invoke$arity$2 ? pred__40332.cljs$core$IFn$_invoke$arity$2(G__40343,G__40344) : pred__40332.call(null,G__40343,G__40344));
})())){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__40319,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__40319),null));
}
}
}
}
}
});


untangled.client.impl.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__40319){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__40319,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.client.impl.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$url,cljs.core.cst$sym$request_DASH_transform,cljs.core.cst$sym$global_DASH_error_DASH_callback,cljs.core.cst$sym$complete_DASH_app,cljs.core.cst$sym$transit_DASH_handlers], null);
});

untangled.client.impl.network.Network.cljs$lang$type = true;

untangled.client.impl.network.Network.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.Network.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.__GT_Network = (function untangled$client$impl$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new untangled.client.impl.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

untangled.client.impl.network.map__GT_Network = (function untangled$client$impl$network$map__GT_Network(G__40321){
return (new untangled.client.impl.network.Network(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__40321),cljs.core.cst$kw$request_DASH_transform.cljs$core$IFn$_invoke$arity$1(G__40321),cljs.core.cst$kw$global_DASH_error_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__40321),cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__40321),cljs.core.cst$kw$transit_DASH_handlers.cljs$core$IFn$_invoke$arity$1(G__40321),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40321,cljs.core.cst$kw$url,cljs.core.array_seq([cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], 0)),null));
});

/**
 * TODO: This is PUBLIC API! Should not be in impl ns.
 * 
 *   Build an Untangled Network object using the default implementation.
 * 
 *   Features:
 * 
 *   - Can configure the target URL on the server for Om network requests
 *   - Can supply a (fn [{:keys [body headers] :as req}] req') to transform arbitrary requests (e.g. to add things like auth headers)
 *   - Supports a global error callback (fn [status-code error] ) that is notified when a 400+ status code or hard network error occurs
 *   - `transit-handlers`: A map of transit handlers to install on the reader, such as
 * 
 * `{ :read { "thing" (fn [wire-value] (convert wire-value))) }
 *    :write { Thing (ThingHandler.) } }`
 * 
 * where:
 * 
 * (defrecord Thing [foo])
 * 
 * (deftype ThingHandler []
 *   Object
 *   (tag [_ _] "thing")
 *   (rep [_ thing] (make-raw thing))
 *   (stringRep [_ _] nil)))
 *   
 */
untangled.client.impl.network.make_untangled_network = (function untangled$client$impl$network$make_untangled_network(var_args){
var args__8730__auto__ = [];
var len__8723__auto___40354 = arguments.length;
var i__8724__auto___40355 = (0);
while(true){
if((i__8724__auto___40355 < len__8723__auto___40354)){
args__8730__auto__.push((arguments[i__8724__auto___40355]));

var G__40356 = (i__8724__auto___40355 + (1));
i__8724__auto___40355 = G__40356;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40351){
var map__40352 = p__40351;
var map__40352__$1 = ((((!((map__40352 == null)))?((((map__40352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40352):map__40352);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40352__$1,cljs.core.cst$kw$request_DASH_transform);
var global_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40352__$1,cljs.core.cst$kw$global_DASH_error_DASH_callback);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40352__$1,cljs.core.cst$kw$transit_DASH_handlers);
return untangled.client.impl.network.map__GT_Network(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(global_error_callback) : cljs.core.atom.call(null,global_error_callback))], null));
});

untangled.client.impl.network.make_untangled_network.cljs$lang$maxFixedArity = (1);

untangled.client.impl.network.make_untangled_network.cljs$lang$applyTo = (function (seq40349){
var G__40350 = cljs.core.first(seq40349);
var seq40349__$1 = cljs.core.next(seq40349);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic(G__40350,seq40349__$1);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.impl.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8177__auto__,k__8178__auto__){
var self__ = this;
var this__8177__auto____$1 = this;
return this__8177__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8178__auto__,null);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8179__auto__,k40358,else__8180__auto__){
var self__ = this;
var this__8179__auto____$1 = this;
var G__40360 = (((k40358 instanceof cljs.core.Keyword))?k40358.fqn:null);
switch (G__40360) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40358,else__8180__auto__);

}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8191__auto__,writer__8192__auto__,opts__8193__auto__){
var self__ = this;
var this__8191__auto____$1 = this;
var pr_pair__8194__auto__ = ((function (this__8191__auto____$1){
return (function (keyval__8195__auto__){
return cljs.core.pr_sequential_writer(writer__8192__auto__,cljs.core.pr_writer,""," ","",opts__8193__auto__,keyval__8195__auto__);
});})(this__8191__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8192__auto__,pr_pair__8194__auto__,"#untangled.client.impl.network.MockNetwork{",", ","}",opts__8193__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40357){
var self__ = this;
var G__40357__$1 = this;
return (new cljs.core.RecordIter((0),G__40357__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_app], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8175__auto__){
var self__ = this;
var this__8175__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8171__auto__){
var self__ = this;
var this__8171__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8181__auto__){
var self__ = this;
var this__8181__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8172__auto__){
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


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8173__auto__,other__8174__auto__){
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


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Ignored (mock) Network request ",edn], 0));
});


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$complete_DASH_app,app);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8186__auto__,k__8187__auto__){
var self__ = this;
var this__8186__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$complete_DASH_app,null], null), null),k__8187__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8186__auto____$1),self__.__meta),k__8187__auto__);
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8187__auto__)),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8184__auto__,k__8185__auto__,G__40357){
var self__ = this;
var this__8184__auto____$1 = this;
var pred__40361 = cljs.core.keyword_identical_QMARK_;
var expr__40362 = k__8185__auto__;
if(cljs.core.truth_((function (){var G__40364 = cljs.core.cst$kw$complete_DASH_app;
var G__40365 = expr__40362;
return (pred__40361.cljs$core$IFn$_invoke$arity$2 ? pred__40361.cljs$core$IFn$_invoke$arity$2(G__40364,G__40365) : pred__40361.call(null,G__40364,G__40365));
})())){
return (new untangled.client.impl.network.MockNetwork(G__40357,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8185__auto__,G__40357),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8189__auto__){
var self__ = this;
var this__8189__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8176__auto__,G__40357){
var self__ = this;
var this__8176__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,G__40357,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8182__auto__,entry__8183__auto__){
var self__ = this;
var this__8182__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8183__auto__)){
return this__8182__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8183__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8182__auto____$1,entry__8183__auto__);
}
});

untangled.client.impl.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$complete_DASH_app], null);
});

untangled.client.impl.network.MockNetwork.cljs$lang$type = true;

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__8213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__8213__auto__,writer__8214__auto__){
return cljs.core._write(writer__8214__auto__,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.__GT_MockNetwork = (function untangled$client$impl$network$__GT_MockNetwork(complete_app){
return (new untangled.client.impl.network.MockNetwork(complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_MockNetwork = (function untangled$client$impl$network$map__GT_MockNetwork(G__40359){
return (new untangled.client.impl.network.MockNetwork(cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__40359),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40359,cljs.core.cst$kw$complete_DASH_app),null));
});

untangled.client.impl.network.mock_network = (function untangled$client$impl$network$mock_network(){
return untangled.client.impl.network.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY);
});

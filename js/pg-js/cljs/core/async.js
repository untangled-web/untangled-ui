// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args43408 = [];
var len__8723__auto___43414 = arguments.length;
var i__8724__auto___43415 = (0);
while(true){
if((i__8724__auto___43415 < len__8723__auto___43414)){
args43408.push((arguments[i__8724__auto___43415]));

var G__43416 = (i__8724__auto___43415 + (1));
i__8724__auto___43415 = G__43416;
continue;
} else {
}
break;
}

var G__43410 = args43408.length;
switch (G__43410) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43408.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43411 = (function (f,blockable,meta43412){
this.f = f;
this.blockable = blockable;
this.meta43412 = meta43412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43413,meta43412__$1){
var self__ = this;
var _43413__$1 = this;
return (new cljs.core.async.t_cljs$core$async43411(self__.f,self__.blockable,meta43412__$1));
});


cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43413){
var self__ = this;
var _43413__$1 = this;
return self__.meta43412;
});


cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async43411.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta43412], null);
});

cljs.core.async.t_cljs$core$async43411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43411";

cljs.core.async.t_cljs$core$async43411.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async43411");
});

cljs.core.async.__GT_t_cljs$core$async43411 = (function cljs$core$async$__GT_t_cljs$core$async43411(f__$1,blockable__$1,meta43412){
return (new cljs.core.async.t_cljs$core$async43411(f__$1,blockable__$1,meta43412));
});

}

return (new cljs.core.async.t_cljs$core$async43411(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args43420 = [];
var len__8723__auto___43423 = arguments.length;
var i__8724__auto___43424 = (0);
while(true){
if((i__8724__auto___43424 < len__8723__auto___43423)){
args43420.push((arguments[i__8724__auto___43424]));

var G__43425 = (i__8724__auto___43424 + (1));
i__8724__auto___43424 = G__43425;
continue;
} else {
}
break;
}

var G__43422 = args43420.length;
switch (G__43422) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43420.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args43427 = [];
var len__8723__auto___43430 = arguments.length;
var i__8724__auto___43431 = (0);
while(true){
if((i__8724__auto___43431 < len__8723__auto___43430)){
args43427.push((arguments[i__8724__auto___43431]));

var G__43432 = (i__8724__auto___43431 + (1));
i__8724__auto___43431 = G__43432;
continue;
} else {
}
break;
}

var G__43429 = args43427.length;
switch (G__43429) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43427.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args43434 = [];
var len__8723__auto___43437 = arguments.length;
var i__8724__auto___43438 = (0);
while(true){
if((i__8724__auto___43438 < len__8723__auto___43437)){
args43434.push((arguments[i__8724__auto___43438]));

var G__43439 = (i__8724__auto___43438 + (1));
i__8724__auto___43438 = G__43439;
continue;
} else {
}
break;
}

var G__43436 = args43434.length;
switch (G__43436) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43434.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43441 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43441) : fn1.call(null,val_43441));
} else {
cljs.core.async.impl.dispatch.run(((function (val_43441,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43441) : fn1.call(null,val_43441));
});})(val_43441,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args43442 = [];
var len__8723__auto___43445 = arguments.length;
var i__8724__auto___43446 = (0);
while(true){
if((i__8724__auto___43446 < len__8723__auto___43445)){
args43442.push((arguments[i__8724__auto___43446]));

var G__43447 = (i__8724__auto___43446 + (1));
i__8724__auto___43446 = G__43447;
continue;
} else {
}
break;
}

var G__43444 = args43442.length;
switch (G__43444) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43442.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6751__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8523__auto___43449 = n;
var x_43450 = (0);
while(true){
if((x_43450 < n__8523__auto___43449)){
(a[x_43450] = (0));

var G__43451 = (x_43450 + (1));
x_43450 = G__43451;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__43452 = (i + (1));
i = G__43452;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async43456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43456 = (function (flag,meta43457){
this.flag = flag;
this.meta43457 = meta43457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43458,meta43457__$1){
var self__ = this;
var _43458__$1 = this;
return (new cljs.core.async.t_cljs$core$async43456(self__.flag,meta43457__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43458){
var self__ = this;
var _43458__$1 = this;
return self__.meta43457;
});})(flag))
;


cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43456.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta43457], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43456";

cljs.core.async.t_cljs$core$async43456.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async43456");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43456 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43456(flag__$1,meta43457){
return (new cljs.core.async.t_cljs$core$async43456(flag__$1,meta43457));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43456(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43462 = (function (flag,cb,meta43463){
this.flag = flag;
this.cb = cb;
this.meta43463 = meta43463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43464,meta43463__$1){
var self__ = this;
var _43464__$1 = this;
return (new cljs.core.async.t_cljs$core$async43462(self__.flag,self__.cb,meta43463__$1));
});


cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43464){
var self__ = this;
var _43464__$1 = this;
return self__.meta43463;
});


cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta43463], null);
});

cljs.core.async.t_cljs$core$async43462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43462";

cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async43462");
});

cljs.core.async.__GT_t_cljs$core$async43462 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43462(flag__$1,cb__$1,meta43463){
return (new cljs.core.async.t_cljs$core$async43462(flag__$1,cb__$1,meta43463));
});

}

return (new cljs.core.async.t_cljs$core$async43462(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43465_SHARP_){
var G__43469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43465_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43469) : fret.call(null,G__43469));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43466_SHARP_){
var G__43470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43466_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43470) : fret.call(null,G__43470));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7502__auto__ = wport;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43471 = (i + (1));
i = G__43471;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7502__auto__ = ret;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6753__auto__ = (function (){var and__7490__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___43477 = arguments.length;
var i__8724__auto___43478 = (0);
while(true){
if((i__8724__auto___43478 < len__8723__auto___43477)){
args__8730__auto__.push((arguments[i__8724__auto___43478]));

var G__43479 = (i__8724__auto___43478 + (1));
i__8724__auto___43478 = G__43479;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43474){
var map__43475 = p__43474;
var map__43475__$1 = ((((!((map__43475 == null)))?((((map__43475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43475):map__43475);
var opts = map__43475__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43472){
var G__43473 = cljs.core.first(seq43472);
var seq43472__$1 = cljs.core.next(seq43472);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43473,seq43472__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args43480 = [];
var len__8723__auto___43530 = arguments.length;
var i__8724__auto___43531 = (0);
while(true){
if((i__8724__auto___43531 < len__8723__auto___43530)){
args43480.push((arguments[i__8724__auto___43531]));

var G__43532 = (i__8724__auto___43531 + (1));
i__8724__auto___43531 = G__43532;
continue;
} else {
}
break;
}

var G__43482 = args43480.length;
switch (G__43482) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43480.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43349__auto___43534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___43534){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___43534){
return (function (state_43506){
var state_val_43507 = (state_43506[(1)]);
if((state_val_43507 === (7))){
var inst_43502 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43508_43535 = state_43506__$1;
(statearr_43508_43535[(2)] = inst_43502);

(statearr_43508_43535[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (1))){
var state_43506__$1 = state_43506;
var statearr_43509_43536 = state_43506__$1;
(statearr_43509_43536[(2)] = null);

(statearr_43509_43536[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (4))){
var inst_43485 = (state_43506[(7)]);
var inst_43485__$1 = (state_43506[(2)]);
var inst_43486 = (inst_43485__$1 == null);
var state_43506__$1 = (function (){var statearr_43510 = state_43506;
(statearr_43510[(7)] = inst_43485__$1);

return statearr_43510;
})();
if(cljs.core.truth_(inst_43486)){
var statearr_43511_43537 = state_43506__$1;
(statearr_43511_43537[(1)] = (5));

} else {
var statearr_43512_43538 = state_43506__$1;
(statearr_43512_43538[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (13))){
var state_43506__$1 = state_43506;
var statearr_43513_43539 = state_43506__$1;
(statearr_43513_43539[(2)] = null);

(statearr_43513_43539[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (6))){
var inst_43485 = (state_43506[(7)]);
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43506__$1,(11),to,inst_43485);
} else {
if((state_val_43507 === (3))){
var inst_43504 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43506__$1,inst_43504);
} else {
if((state_val_43507 === (12))){
var state_43506__$1 = state_43506;
var statearr_43514_43540 = state_43506__$1;
(statearr_43514_43540[(2)] = null);

(statearr_43514_43540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (2))){
var state_43506__$1 = state_43506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43506__$1,(4),from);
} else {
if((state_val_43507 === (11))){
var inst_43495 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
if(cljs.core.truth_(inst_43495)){
var statearr_43515_43541 = state_43506__$1;
(statearr_43515_43541[(1)] = (12));

} else {
var statearr_43516_43542 = state_43506__$1;
(statearr_43516_43542[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (9))){
var state_43506__$1 = state_43506;
var statearr_43517_43543 = state_43506__$1;
(statearr_43517_43543[(2)] = null);

(statearr_43517_43543[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (5))){
var state_43506__$1 = state_43506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43518_43544 = state_43506__$1;
(statearr_43518_43544[(1)] = (8));

} else {
var statearr_43519_43545 = state_43506__$1;
(statearr_43519_43545[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (14))){
var inst_43500 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43520_43546 = state_43506__$1;
(statearr_43520_43546[(2)] = inst_43500);

(statearr_43520_43546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (10))){
var inst_43492 = (state_43506[(2)]);
var state_43506__$1 = state_43506;
var statearr_43521_43547 = state_43506__$1;
(statearr_43521_43547[(2)] = inst_43492);

(statearr_43521_43547[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43507 === (8))){
var inst_43489 = cljs.core.async.close_BANG_(to);
var state_43506__$1 = state_43506;
var statearr_43522_43548 = state_43506__$1;
(statearr_43522_43548[(2)] = inst_43489);

(statearr_43522_43548[(1)] = (10));


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
});})(c__43349__auto___43534))
;
return ((function (switch__43223__auto__,c__43349__auto___43534){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_43526 = [null,null,null,null,null,null,null,null];
(statearr_43526[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_43526[(1)] = (1));

return statearr_43526;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_43506){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43506);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43527){if((e43527 instanceof Object)){
var ex__43227__auto__ = e43527;
var statearr_43528_43549 = state_43506;
(statearr_43528_43549[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43506);

return cljs.core.cst$kw$recur;
} else {
throw e43527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43550 = state_43506;
state_43506 = G__43550;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_43506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_43506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___43534))
})();
var state__43351__auto__ = (function (){var statearr_43529 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___43534);

return statearr_43529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___43534))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__43738){
var vec__43739 = p__43738;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43739,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43739,(1),null);
var job = vec__43739;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43349__auto___43925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results){
return (function (state_43746){
var state_val_43747 = (state_43746[(1)]);
if((state_val_43747 === (1))){
var state_43746__$1 = state_43746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43746__$1,(2),res,v);
} else {
if((state_val_43747 === (2))){
var inst_43743 = (state_43746[(2)]);
var inst_43744 = cljs.core.async.close_BANG_(res);
var state_43746__$1 = (function (){var statearr_43748 = state_43746;
(statearr_43748[(7)] = inst_43743);

return statearr_43748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43746__$1,inst_43744);
} else {
return null;
}
}
});})(c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results))
;
return ((function (switch__43223__auto__,c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_43752 = [null,null,null,null,null,null,null,null];
(statearr_43752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_43752[(1)] = (1));

return statearr_43752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_43746){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43746);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43753){if((e43753 instanceof Object)){
var ex__43227__auto__ = e43753;
var statearr_43754_43926 = state_43746;
(statearr_43754_43926[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43746);

return cljs.core.cst$kw$recur;
} else {
throw e43753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43927 = state_43746;
state_43746 = G__43927;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_43746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_43746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results))
})();
var state__43351__auto__ = (function (){var statearr_43755 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___43925);

return statearr_43755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___43925,res,vec__43739,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43756){
var vec__43757 = p__43756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43757,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43757,(1),null);
var job = vec__43757;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8523__auto___43928 = n;
var __43929 = (0);
while(true){
if((__43929 < n__8523__auto___43928)){
var G__43760_43930 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43760_43930) {
case "compute":
var c__43349__auto___43932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43929,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (__43929,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function (state_43773){
var state_val_43774 = (state_43773[(1)]);
if((state_val_43774 === (1))){
var state_43773__$1 = state_43773;
var statearr_43775_43933 = state_43773__$1;
(statearr_43775_43933[(2)] = null);

(statearr_43775_43933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43774 === (2))){
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43773__$1,(4),jobs);
} else {
if((state_val_43774 === (3))){
var inst_43771 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43773__$1,inst_43771);
} else {
if((state_val_43774 === (4))){
var inst_43763 = (state_43773[(2)]);
var inst_43764 = process(inst_43763);
var state_43773__$1 = state_43773;
if(cljs.core.truth_(inst_43764)){
var statearr_43776_43934 = state_43773__$1;
(statearr_43776_43934[(1)] = (5));

} else {
var statearr_43777_43935 = state_43773__$1;
(statearr_43777_43935[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43774 === (5))){
var state_43773__$1 = state_43773;
var statearr_43778_43936 = state_43773__$1;
(statearr_43778_43936[(2)] = null);

(statearr_43778_43936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43774 === (6))){
var state_43773__$1 = state_43773;
var statearr_43779_43937 = state_43773__$1;
(statearr_43779_43937[(2)] = null);

(statearr_43779_43937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43774 === (7))){
var inst_43769 = (state_43773[(2)]);
var state_43773__$1 = state_43773;
var statearr_43780_43938 = state_43773__$1;
(statearr_43780_43938[(2)] = inst_43769);

(statearr_43780_43938[(1)] = (3));


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
});})(__43929,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
;
return ((function (__43929,switch__43223__auto__,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_43784 = [null,null,null,null,null,null,null];
(statearr_43784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_43784[(1)] = (1));

return statearr_43784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_43773){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43773);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43785){if((e43785 instanceof Object)){
var ex__43227__auto__ = e43785;
var statearr_43786_43939 = state_43773;
(statearr_43786_43939[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43773);

return cljs.core.cst$kw$recur;
} else {
throw e43785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43940 = state_43773;
state_43773 = G__43940;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_43773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_43773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(__43929,switch__43223__auto__,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
})();
var state__43351__auto__ = (function (){var statearr_43787 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___43932);

return statearr_43787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(__43929,c__43349__auto___43932,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
);


break;
case "async":
var c__43349__auto___43941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43929,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (__43929,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function (state_43800){
var state_val_43801 = (state_43800[(1)]);
if((state_val_43801 === (1))){
var state_43800__$1 = state_43800;
var statearr_43802_43942 = state_43800__$1;
(statearr_43802_43942[(2)] = null);

(statearr_43802_43942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43801 === (2))){
var state_43800__$1 = state_43800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43800__$1,(4),jobs);
} else {
if((state_val_43801 === (3))){
var inst_43798 = (state_43800[(2)]);
var state_43800__$1 = state_43800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43800__$1,inst_43798);
} else {
if((state_val_43801 === (4))){
var inst_43790 = (state_43800[(2)]);
var inst_43791 = async(inst_43790);
var state_43800__$1 = state_43800;
if(cljs.core.truth_(inst_43791)){
var statearr_43803_43943 = state_43800__$1;
(statearr_43803_43943[(1)] = (5));

} else {
var statearr_43804_43944 = state_43800__$1;
(statearr_43804_43944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43801 === (5))){
var state_43800__$1 = state_43800;
var statearr_43805_43945 = state_43800__$1;
(statearr_43805_43945[(2)] = null);

(statearr_43805_43945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43801 === (6))){
var state_43800__$1 = state_43800;
var statearr_43806_43946 = state_43800__$1;
(statearr_43806_43946[(2)] = null);

(statearr_43806_43946[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43801 === (7))){
var inst_43796 = (state_43800[(2)]);
var state_43800__$1 = state_43800;
var statearr_43807_43947 = state_43800__$1;
(statearr_43807_43947[(2)] = inst_43796);

(statearr_43807_43947[(1)] = (3));


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
});})(__43929,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
;
return ((function (__43929,switch__43223__auto__,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_43811 = [null,null,null,null,null,null,null];
(statearr_43811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_43811[(1)] = (1));

return statearr_43811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_43800){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43800);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43812){if((e43812 instanceof Object)){
var ex__43227__auto__ = e43812;
var statearr_43813_43948 = state_43800;
(statearr_43813_43948[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43800);

return cljs.core.cst$kw$recur;
} else {
throw e43812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43949 = state_43800;
state_43800 = G__43949;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_43800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_43800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(__43929,switch__43223__auto__,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
})();
var state__43351__auto__ = (function (){var statearr_43814 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___43941);

return statearr_43814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(__43929,c__43349__auto___43941,G__43760_43930,n__8523__auto___43928,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__43950 = (__43929 + (1));
__43929 = G__43950;
continue;
} else {
}
break;
}

var c__43349__auto___43951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___43951,jobs,results,process,async){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___43951,jobs,results,process,async){
return (function (state_43836){
var state_val_43837 = (state_43836[(1)]);
if((state_val_43837 === (1))){
var state_43836__$1 = state_43836;
var statearr_43838_43952 = state_43836__$1;
(statearr_43838_43952[(2)] = null);

(statearr_43838_43952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43837 === (2))){
var state_43836__$1 = state_43836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43836__$1,(4),from);
} else {
if((state_val_43837 === (3))){
var inst_43834 = (state_43836[(2)]);
var state_43836__$1 = state_43836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43836__$1,inst_43834);
} else {
if((state_val_43837 === (4))){
var inst_43817 = (state_43836[(7)]);
var inst_43817__$1 = (state_43836[(2)]);
var inst_43818 = (inst_43817__$1 == null);
var state_43836__$1 = (function (){var statearr_43839 = state_43836;
(statearr_43839[(7)] = inst_43817__$1);

return statearr_43839;
})();
if(cljs.core.truth_(inst_43818)){
var statearr_43840_43953 = state_43836__$1;
(statearr_43840_43953[(1)] = (5));

} else {
var statearr_43841_43954 = state_43836__$1;
(statearr_43841_43954[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43837 === (5))){
var inst_43820 = cljs.core.async.close_BANG_(jobs);
var state_43836__$1 = state_43836;
var statearr_43842_43955 = state_43836__$1;
(statearr_43842_43955[(2)] = inst_43820);

(statearr_43842_43955[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43837 === (6))){
var inst_43817 = (state_43836[(7)]);
var inst_43822 = (state_43836[(8)]);
var inst_43822__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43824 = [inst_43817,inst_43822__$1];
var inst_43825 = (new cljs.core.PersistentVector(null,2,(5),inst_43823,inst_43824,null));
var state_43836__$1 = (function (){var statearr_43843 = state_43836;
(statearr_43843[(8)] = inst_43822__$1);

return statearr_43843;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43836__$1,(8),jobs,inst_43825);
} else {
if((state_val_43837 === (7))){
var inst_43832 = (state_43836[(2)]);
var state_43836__$1 = state_43836;
var statearr_43844_43956 = state_43836__$1;
(statearr_43844_43956[(2)] = inst_43832);

(statearr_43844_43956[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43837 === (8))){
var inst_43822 = (state_43836[(8)]);
var inst_43827 = (state_43836[(2)]);
var state_43836__$1 = (function (){var statearr_43845 = state_43836;
(statearr_43845[(9)] = inst_43827);

return statearr_43845;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43836__$1,(9),results,inst_43822);
} else {
if((state_val_43837 === (9))){
var inst_43829 = (state_43836[(2)]);
var state_43836__$1 = (function (){var statearr_43846 = state_43836;
(statearr_43846[(10)] = inst_43829);

return statearr_43846;
})();
var statearr_43847_43957 = state_43836__$1;
(statearr_43847_43957[(2)] = null);

(statearr_43847_43957[(1)] = (2));


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
});})(c__43349__auto___43951,jobs,results,process,async))
;
return ((function (switch__43223__auto__,c__43349__auto___43951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_43851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_43851[(1)] = (1));

return statearr_43851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_43836){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43836);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43852){if((e43852 instanceof Object)){
var ex__43227__auto__ = e43852;
var statearr_43853_43958 = state_43836;
(statearr_43853_43958[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43836);

return cljs.core.cst$kw$recur;
} else {
throw e43852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43959 = state_43836;
state_43836 = G__43959;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_43836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_43836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___43951,jobs,results,process,async))
})();
var state__43351__auto__ = (function (){var statearr_43854 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___43951);

return statearr_43854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___43951,jobs,results,process,async))
);


var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__,jobs,results,process,async){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__,jobs,results,process,async){
return (function (state_43892){
var state_val_43893 = (state_43892[(1)]);
if((state_val_43893 === (7))){
var inst_43888 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43894_43960 = state_43892__$1;
(statearr_43894_43960[(2)] = inst_43888);

(statearr_43894_43960[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (20))){
var state_43892__$1 = state_43892;
var statearr_43895_43961 = state_43892__$1;
(statearr_43895_43961[(2)] = null);

(statearr_43895_43961[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (1))){
var state_43892__$1 = state_43892;
var statearr_43896_43962 = state_43892__$1;
(statearr_43896_43962[(2)] = null);

(statearr_43896_43962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (4))){
var inst_43857 = (state_43892[(7)]);
var inst_43857__$1 = (state_43892[(2)]);
var inst_43858 = (inst_43857__$1 == null);
var state_43892__$1 = (function (){var statearr_43897 = state_43892;
(statearr_43897[(7)] = inst_43857__$1);

return statearr_43897;
})();
if(cljs.core.truth_(inst_43858)){
var statearr_43898_43963 = state_43892__$1;
(statearr_43898_43963[(1)] = (5));

} else {
var statearr_43899_43964 = state_43892__$1;
(statearr_43899_43964[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (15))){
var inst_43870 = (state_43892[(8)]);
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43892__$1,(18),to,inst_43870);
} else {
if((state_val_43893 === (21))){
var inst_43883 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43900_43965 = state_43892__$1;
(statearr_43900_43965[(2)] = inst_43883);

(statearr_43900_43965[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (13))){
var inst_43885 = (state_43892[(2)]);
var state_43892__$1 = (function (){var statearr_43901 = state_43892;
(statearr_43901[(9)] = inst_43885);

return statearr_43901;
})();
var statearr_43902_43966 = state_43892__$1;
(statearr_43902_43966[(2)] = null);

(statearr_43902_43966[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (6))){
var inst_43857 = (state_43892[(7)]);
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43892__$1,(11),inst_43857);
} else {
if((state_val_43893 === (17))){
var inst_43878 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
if(cljs.core.truth_(inst_43878)){
var statearr_43903_43967 = state_43892__$1;
(statearr_43903_43967[(1)] = (19));

} else {
var statearr_43904_43968 = state_43892__$1;
(statearr_43904_43968[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (3))){
var inst_43890 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43892__$1,inst_43890);
} else {
if((state_val_43893 === (12))){
var inst_43867 = (state_43892[(10)]);
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43892__$1,(14),inst_43867);
} else {
if((state_val_43893 === (2))){
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43892__$1,(4),results);
} else {
if((state_val_43893 === (19))){
var state_43892__$1 = state_43892;
var statearr_43905_43969 = state_43892__$1;
(statearr_43905_43969[(2)] = null);

(statearr_43905_43969[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (11))){
var inst_43867 = (state_43892[(2)]);
var state_43892__$1 = (function (){var statearr_43906 = state_43892;
(statearr_43906[(10)] = inst_43867);

return statearr_43906;
})();
var statearr_43907_43970 = state_43892__$1;
(statearr_43907_43970[(2)] = null);

(statearr_43907_43970[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (9))){
var state_43892__$1 = state_43892;
var statearr_43908_43971 = state_43892__$1;
(statearr_43908_43971[(2)] = null);

(statearr_43908_43971[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (5))){
var state_43892__$1 = state_43892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43909_43972 = state_43892__$1;
(statearr_43909_43972[(1)] = (8));

} else {
var statearr_43910_43973 = state_43892__$1;
(statearr_43910_43973[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (14))){
var inst_43872 = (state_43892[(11)]);
var inst_43870 = (state_43892[(8)]);
var inst_43870__$1 = (state_43892[(2)]);
var inst_43871 = (inst_43870__$1 == null);
var inst_43872__$1 = cljs.core.not(inst_43871);
var state_43892__$1 = (function (){var statearr_43911 = state_43892;
(statearr_43911[(11)] = inst_43872__$1);

(statearr_43911[(8)] = inst_43870__$1);

return statearr_43911;
})();
if(inst_43872__$1){
var statearr_43912_43974 = state_43892__$1;
(statearr_43912_43974[(1)] = (15));

} else {
var statearr_43913_43975 = state_43892__$1;
(statearr_43913_43975[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (16))){
var inst_43872 = (state_43892[(11)]);
var state_43892__$1 = state_43892;
var statearr_43914_43976 = state_43892__$1;
(statearr_43914_43976[(2)] = inst_43872);

(statearr_43914_43976[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (10))){
var inst_43864 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43915_43977 = state_43892__$1;
(statearr_43915_43977[(2)] = inst_43864);

(statearr_43915_43977[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (18))){
var inst_43875 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43916_43978 = state_43892__$1;
(statearr_43916_43978[(2)] = inst_43875);

(statearr_43916_43978[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43893 === (8))){
var inst_43861 = cljs.core.async.close_BANG_(to);
var state_43892__$1 = state_43892;
var statearr_43917_43979 = state_43892__$1;
(statearr_43917_43979[(2)] = inst_43861);

(statearr_43917_43979[(1)] = (10));


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
});})(c__43349__auto__,jobs,results,process,async))
;
return ((function (switch__43223__auto__,c__43349__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1 = (function (state_43892){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_43892);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e43922){if((e43922 instanceof Object)){
var ex__43227__auto__ = e43922;
var statearr_43923_43980 = state_43892;
(statearr_43923_43980[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43892);

return cljs.core.cst$kw$recur;
} else {
throw e43922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__43981 = state_43892;
state_43892 = G__43981;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__ = function(state_43892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1.call(this,state_43892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__,jobs,results,process,async))
})();
var state__43351__auto__ = (function (){var statearr_43924 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_43924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_43924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__,jobs,results,process,async))
);

return c__43349__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args43982 = [];
var len__8723__auto___43985 = arguments.length;
var i__8724__auto___43986 = (0);
while(true){
if((i__8724__auto___43986 < len__8723__auto___43985)){
args43982.push((arguments[i__8724__auto___43986]));

var G__43987 = (i__8724__auto___43986 + (1));
i__8724__auto___43986 = G__43987;
continue;
} else {
}
break;
}

var G__43984 = args43982.length;
switch (G__43984) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43982.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args43989 = [];
var len__8723__auto___43992 = arguments.length;
var i__8724__auto___43993 = (0);
while(true){
if((i__8724__auto___43993 < len__8723__auto___43992)){
args43989.push((arguments[i__8724__auto___43993]));

var G__43994 = (i__8724__auto___43993 + (1));
i__8724__auto___43993 = G__43994;
continue;
} else {
}
break;
}

var G__43991 = args43989.length;
switch (G__43991) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43989.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args43996 = [];
var len__8723__auto___44049 = arguments.length;
var i__8724__auto___44050 = (0);
while(true){
if((i__8724__auto___44050 < len__8723__auto___44049)){
args43996.push((arguments[i__8724__auto___44050]));

var G__44051 = (i__8724__auto___44050 + (1));
i__8724__auto___44050 = G__44051;
continue;
} else {
}
break;
}

var G__43998 = args43996.length;
switch (G__43998) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43996.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43349__auto___44053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___44053,tc,fc){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___44053,tc,fc){
return (function (state_44024){
var state_val_44025 = (state_44024[(1)]);
if((state_val_44025 === (7))){
var inst_44020 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
var statearr_44026_44054 = state_44024__$1;
(statearr_44026_44054[(2)] = inst_44020);

(statearr_44026_44054[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (1))){
var state_44024__$1 = state_44024;
var statearr_44027_44055 = state_44024__$1;
(statearr_44027_44055[(2)] = null);

(statearr_44027_44055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (4))){
var inst_44001 = (state_44024[(7)]);
var inst_44001__$1 = (state_44024[(2)]);
var inst_44002 = (inst_44001__$1 == null);
var state_44024__$1 = (function (){var statearr_44028 = state_44024;
(statearr_44028[(7)] = inst_44001__$1);

return statearr_44028;
})();
if(cljs.core.truth_(inst_44002)){
var statearr_44029_44056 = state_44024__$1;
(statearr_44029_44056[(1)] = (5));

} else {
var statearr_44030_44057 = state_44024__$1;
(statearr_44030_44057[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (13))){
var state_44024__$1 = state_44024;
var statearr_44031_44058 = state_44024__$1;
(statearr_44031_44058[(2)] = null);

(statearr_44031_44058[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (6))){
var inst_44001 = (state_44024[(7)]);
var inst_44007 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44001) : p.call(null,inst_44001));
var state_44024__$1 = state_44024;
if(cljs.core.truth_(inst_44007)){
var statearr_44032_44059 = state_44024__$1;
(statearr_44032_44059[(1)] = (9));

} else {
var statearr_44033_44060 = state_44024__$1;
(statearr_44033_44060[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (3))){
var inst_44022 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44024__$1,inst_44022);
} else {
if((state_val_44025 === (12))){
var state_44024__$1 = state_44024;
var statearr_44034_44061 = state_44024__$1;
(statearr_44034_44061[(2)] = null);

(statearr_44034_44061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (2))){
var state_44024__$1 = state_44024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44024__$1,(4),ch);
} else {
if((state_val_44025 === (11))){
var inst_44001 = (state_44024[(7)]);
var inst_44011 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44024__$1,(8),inst_44011,inst_44001);
} else {
if((state_val_44025 === (9))){
var state_44024__$1 = state_44024;
var statearr_44035_44062 = state_44024__$1;
(statearr_44035_44062[(2)] = tc);

(statearr_44035_44062[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (5))){
var inst_44004 = cljs.core.async.close_BANG_(tc);
var inst_44005 = cljs.core.async.close_BANG_(fc);
var state_44024__$1 = (function (){var statearr_44036 = state_44024;
(statearr_44036[(8)] = inst_44004);

return statearr_44036;
})();
var statearr_44037_44063 = state_44024__$1;
(statearr_44037_44063[(2)] = inst_44005);

(statearr_44037_44063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (14))){
var inst_44018 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
var statearr_44038_44064 = state_44024__$1;
(statearr_44038_44064[(2)] = inst_44018);

(statearr_44038_44064[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (10))){
var state_44024__$1 = state_44024;
var statearr_44039_44065 = state_44024__$1;
(statearr_44039_44065[(2)] = fc);

(statearr_44039_44065[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44025 === (8))){
var inst_44013 = (state_44024[(2)]);
var state_44024__$1 = state_44024;
if(cljs.core.truth_(inst_44013)){
var statearr_44040_44066 = state_44024__$1;
(statearr_44040_44066[(1)] = (12));

} else {
var statearr_44041_44067 = state_44024__$1;
(statearr_44041_44067[(1)] = (13));

}

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
});})(c__43349__auto___44053,tc,fc))
;
return ((function (switch__43223__auto__,c__43349__auto___44053,tc,fc){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_44045 = [null,null,null,null,null,null,null,null,null];
(statearr_44045[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_44045[(1)] = (1));

return statearr_44045;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_44024){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_44024);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e44046){if((e44046 instanceof Object)){
var ex__43227__auto__ = e44046;
var statearr_44047_44068 = state_44024;
(statearr_44047_44068[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44024);

return cljs.core.cst$kw$recur;
} else {
throw e44046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__44069 = state_44024;
state_44024 = G__44069;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_44024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_44024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___44053,tc,fc))
})();
var state__43351__auto__ = (function (){var statearr_44048 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_44048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___44053);

return statearr_44048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___44053,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_44133){
var state_val_44134 = (state_44133[(1)]);
if((state_val_44134 === (7))){
var inst_44129 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
var statearr_44135_44156 = state_44133__$1;
(statearr_44135_44156[(2)] = inst_44129);

(statearr_44135_44156[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (1))){
var inst_44113 = init;
var state_44133__$1 = (function (){var statearr_44136 = state_44133;
(statearr_44136[(7)] = inst_44113);

return statearr_44136;
})();
var statearr_44137_44157 = state_44133__$1;
(statearr_44137_44157[(2)] = null);

(statearr_44137_44157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (4))){
var inst_44116 = (state_44133[(8)]);
var inst_44116__$1 = (state_44133[(2)]);
var inst_44117 = (inst_44116__$1 == null);
var state_44133__$1 = (function (){var statearr_44138 = state_44133;
(statearr_44138[(8)] = inst_44116__$1);

return statearr_44138;
})();
if(cljs.core.truth_(inst_44117)){
var statearr_44139_44158 = state_44133__$1;
(statearr_44139_44158[(1)] = (5));

} else {
var statearr_44140_44159 = state_44133__$1;
(statearr_44140_44159[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (6))){
var inst_44120 = (state_44133[(9)]);
var inst_44116 = (state_44133[(8)]);
var inst_44113 = (state_44133[(7)]);
var inst_44120__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44113,inst_44116) : f.call(null,inst_44113,inst_44116));
var inst_44121 = cljs.core.reduced_QMARK_(inst_44120__$1);
var state_44133__$1 = (function (){var statearr_44141 = state_44133;
(statearr_44141[(9)] = inst_44120__$1);

return statearr_44141;
})();
if(inst_44121){
var statearr_44142_44160 = state_44133__$1;
(statearr_44142_44160[(1)] = (8));

} else {
var statearr_44143_44161 = state_44133__$1;
(statearr_44143_44161[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (3))){
var inst_44131 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44133__$1,inst_44131);
} else {
if((state_val_44134 === (2))){
var state_44133__$1 = state_44133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44133__$1,(4),ch);
} else {
if((state_val_44134 === (9))){
var inst_44120 = (state_44133[(9)]);
var inst_44113 = inst_44120;
var state_44133__$1 = (function (){var statearr_44144 = state_44133;
(statearr_44144[(7)] = inst_44113);

return statearr_44144;
})();
var statearr_44145_44162 = state_44133__$1;
(statearr_44145_44162[(2)] = null);

(statearr_44145_44162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (5))){
var inst_44113 = (state_44133[(7)]);
var state_44133__$1 = state_44133;
var statearr_44146_44163 = state_44133__$1;
(statearr_44146_44163[(2)] = inst_44113);

(statearr_44146_44163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (10))){
var inst_44127 = (state_44133[(2)]);
var state_44133__$1 = state_44133;
var statearr_44147_44164 = state_44133__$1;
(statearr_44147_44164[(2)] = inst_44127);

(statearr_44147_44164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44134 === (8))){
var inst_44120 = (state_44133[(9)]);
var inst_44123 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_44120) : cljs.core.deref.call(null,inst_44120));
var state_44133__$1 = state_44133;
var statearr_44148_44165 = state_44133__$1;
(statearr_44148_44165[(2)] = inst_44123);

(statearr_44148_44165[(1)] = (10));


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
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43224__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43224__auto____0 = (function (){
var statearr_44152 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44152[(0)] = cljs$core$async$reduce_$_state_machine__43224__auto__);

(statearr_44152[(1)] = (1));

return statearr_44152;
});
var cljs$core$async$reduce_$_state_machine__43224__auto____1 = (function (state_44133){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_44133);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e44153){if((e44153 instanceof Object)){
var ex__43227__auto__ = e44153;
var statearr_44154_44166 = state_44133;
(statearr_44154_44166[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44133);

return cljs.core.cst$kw$recur;
} else {
throw e44153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__44167 = state_44133;
state_44133 = G__44167;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43224__auto__ = function(state_44133){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43224__auto____1.call(this,state_44133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43224__auto____0;
cljs$core$async$reduce_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43224__auto____1;
return cljs$core$async$reduce_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_44155 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_44155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_44155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args44168 = [];
var len__8723__auto___44220 = arguments.length;
var i__8724__auto___44221 = (0);
while(true){
if((i__8724__auto___44221 < len__8723__auto___44220)){
args44168.push((arguments[i__8724__auto___44221]));

var G__44222 = (i__8724__auto___44221 + (1));
i__8724__auto___44221 = G__44222;
continue;
} else {
}
break;
}

var G__44170 = args44168.length;
switch (G__44170) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44168.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_44195){
var state_val_44196 = (state_44195[(1)]);
if((state_val_44196 === (7))){
var inst_44177 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
var statearr_44197_44224 = state_44195__$1;
(statearr_44197_44224[(2)] = inst_44177);

(statearr_44197_44224[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (1))){
var inst_44171 = cljs.core.seq(coll);
var inst_44172 = inst_44171;
var state_44195__$1 = (function (){var statearr_44198 = state_44195;
(statearr_44198[(7)] = inst_44172);

return statearr_44198;
})();
var statearr_44199_44225 = state_44195__$1;
(statearr_44199_44225[(2)] = null);

(statearr_44199_44225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (4))){
var inst_44172 = (state_44195[(7)]);
var inst_44175 = cljs.core.first(inst_44172);
var state_44195__$1 = state_44195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44195__$1,(7),ch,inst_44175);
} else {
if((state_val_44196 === (13))){
var inst_44189 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
var statearr_44200_44226 = state_44195__$1;
(statearr_44200_44226[(2)] = inst_44189);

(statearr_44200_44226[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (6))){
var inst_44180 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
if(cljs.core.truth_(inst_44180)){
var statearr_44201_44227 = state_44195__$1;
(statearr_44201_44227[(1)] = (8));

} else {
var statearr_44202_44228 = state_44195__$1;
(statearr_44202_44228[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (3))){
var inst_44193 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44195__$1,inst_44193);
} else {
if((state_val_44196 === (12))){
var state_44195__$1 = state_44195;
var statearr_44203_44229 = state_44195__$1;
(statearr_44203_44229[(2)] = null);

(statearr_44203_44229[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (2))){
var inst_44172 = (state_44195[(7)]);
var state_44195__$1 = state_44195;
if(cljs.core.truth_(inst_44172)){
var statearr_44204_44230 = state_44195__$1;
(statearr_44204_44230[(1)] = (4));

} else {
var statearr_44205_44231 = state_44195__$1;
(statearr_44205_44231[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (11))){
var inst_44186 = cljs.core.async.close_BANG_(ch);
var state_44195__$1 = state_44195;
var statearr_44206_44232 = state_44195__$1;
(statearr_44206_44232[(2)] = inst_44186);

(statearr_44206_44232[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (9))){
var state_44195__$1 = state_44195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44207_44233 = state_44195__$1;
(statearr_44207_44233[(1)] = (11));

} else {
var statearr_44208_44234 = state_44195__$1;
(statearr_44208_44234[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (5))){
var inst_44172 = (state_44195[(7)]);
var state_44195__$1 = state_44195;
var statearr_44209_44235 = state_44195__$1;
(statearr_44209_44235[(2)] = inst_44172);

(statearr_44209_44235[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (10))){
var inst_44191 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
var statearr_44210_44236 = state_44195__$1;
(statearr_44210_44236[(2)] = inst_44191);

(statearr_44210_44236[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44196 === (8))){
var inst_44172 = (state_44195[(7)]);
var inst_44182 = cljs.core.next(inst_44172);
var inst_44172__$1 = inst_44182;
var state_44195__$1 = (function (){var statearr_44211 = state_44195;
(statearr_44211[(7)] = inst_44172__$1);

return statearr_44211;
})();
var statearr_44212_44237 = state_44195__$1;
(statearr_44212_44237[(2)] = null);

(statearr_44212_44237[(1)] = (2));


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
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_44216 = [null,null,null,null,null,null,null,null];
(statearr_44216[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_44216[(1)] = (1));

return statearr_44216;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_44195){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_44195);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e44217){if((e44217 instanceof Object)){
var ex__43227__auto__ = e44217;
var statearr_44218_44238 = state_44195;
(statearr_44218_44238[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44195);

return cljs.core.cst$kw$recur;
} else {
throw e44217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__44239 = state_44195;
state_44195 = G__44239;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_44195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_44195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_44219 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_44219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_44219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8220__auto__ = (((_ == null))?null:_);
var m__8221__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8221__auto__.call(null,_));
} else {
var m__8221__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8221__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8221__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8221__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8221__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto__.call(null,m,ch));
} else {
var m__8221__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8221__auto__.call(null,m));
} else {
var m__8221__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8221__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__44468 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44468) : cljs.core.atom.call(null,G__44468));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44469 = (function (ch,cs,meta44470){
this.ch = ch;
this.cs = cs;
this.meta44470 = meta44470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44471,meta44470__$1){
var self__ = this;
var _44471__$1 = this;
return (new cljs.core.async.t_cljs$core$async44469(self__.ch,self__.cs,meta44470__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44471){
var self__ = this;
var _44471__$1 = this;
return self__.meta44470;
});})(cs))
;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async44469.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44472_44696 = self__.cs;
var G__44473_44697 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44472_44696,G__44473_44697) : cljs.core.reset_BANG_.call(null,G__44472_44696,G__44473_44697));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44469.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta44470], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44469";

cljs.core.async.t_cljs$core$async44469.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async44469");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44469 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44469(ch__$1,cs__$1,meta44470){
return (new cljs.core.async.t_cljs$core$async44469(ch__$1,cs__$1,meta44470));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44469(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43349__auto___44698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___44698,cs,m,dchan,dctr,done){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___44698,cs,m,dchan,dctr,done){
return (function (state_44608){
var state_val_44609 = (state_44608[(1)]);
if((state_val_44609 === (7))){
var inst_44604 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44610_44699 = state_44608__$1;
(statearr_44610_44699[(2)] = inst_44604);

(statearr_44610_44699[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (20))){
var inst_44507 = (state_44608[(7)]);
var inst_44519 = cljs.core.first(inst_44507);
var inst_44520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44519,(0),null);
var inst_44521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44519,(1),null);
var state_44608__$1 = (function (){var statearr_44611 = state_44608;
(statearr_44611[(8)] = inst_44520);

return statearr_44611;
})();
if(cljs.core.truth_(inst_44521)){
var statearr_44612_44700 = state_44608__$1;
(statearr_44612_44700[(1)] = (22));

} else {
var statearr_44613_44701 = state_44608__$1;
(statearr_44613_44701[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (27))){
var inst_44551 = (state_44608[(9)]);
var inst_44476 = (state_44608[(10)]);
var inst_44549 = (state_44608[(11)]);
var inst_44556 = (state_44608[(12)]);
var inst_44556__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44549,inst_44551);
var inst_44557 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44556__$1,inst_44476,done);
var state_44608__$1 = (function (){var statearr_44614 = state_44608;
(statearr_44614[(12)] = inst_44556__$1);

return statearr_44614;
})();
if(cljs.core.truth_(inst_44557)){
var statearr_44615_44702 = state_44608__$1;
(statearr_44615_44702[(1)] = (30));

} else {
var statearr_44616_44703 = state_44608__$1;
(statearr_44616_44703[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (1))){
var state_44608__$1 = state_44608;
var statearr_44617_44704 = state_44608__$1;
(statearr_44617_44704[(2)] = null);

(statearr_44617_44704[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (24))){
var inst_44507 = (state_44608[(7)]);
var inst_44526 = (state_44608[(2)]);
var inst_44527 = cljs.core.next(inst_44507);
var inst_44485 = inst_44527;
var inst_44486 = null;
var inst_44487 = (0);
var inst_44488 = (0);
var state_44608__$1 = (function (){var statearr_44618 = state_44608;
(statearr_44618[(13)] = inst_44526);

(statearr_44618[(14)] = inst_44486);

(statearr_44618[(15)] = inst_44487);

(statearr_44618[(16)] = inst_44485);

(statearr_44618[(17)] = inst_44488);

return statearr_44618;
})();
var statearr_44619_44705 = state_44608__$1;
(statearr_44619_44705[(2)] = null);

(statearr_44619_44705[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (39))){
var state_44608__$1 = state_44608;
var statearr_44623_44706 = state_44608__$1;
(statearr_44623_44706[(2)] = null);

(statearr_44623_44706[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (4))){
var inst_44476 = (state_44608[(10)]);
var inst_44476__$1 = (state_44608[(2)]);
var inst_44477 = (inst_44476__$1 == null);
var state_44608__$1 = (function (){var statearr_44624 = state_44608;
(statearr_44624[(10)] = inst_44476__$1);

return statearr_44624;
})();
if(cljs.core.truth_(inst_44477)){
var statearr_44625_44707 = state_44608__$1;
(statearr_44625_44707[(1)] = (5));

} else {
var statearr_44626_44708 = state_44608__$1;
(statearr_44626_44708[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (15))){
var inst_44486 = (state_44608[(14)]);
var inst_44487 = (state_44608[(15)]);
var inst_44485 = (state_44608[(16)]);
var inst_44488 = (state_44608[(17)]);
var inst_44503 = (state_44608[(2)]);
var inst_44504 = (inst_44488 + (1));
var tmp44620 = inst_44486;
var tmp44621 = inst_44487;
var tmp44622 = inst_44485;
var inst_44485__$1 = tmp44622;
var inst_44486__$1 = tmp44620;
var inst_44487__$1 = tmp44621;
var inst_44488__$1 = inst_44504;
var state_44608__$1 = (function (){var statearr_44627 = state_44608;
(statearr_44627[(14)] = inst_44486__$1);

(statearr_44627[(15)] = inst_44487__$1);

(statearr_44627[(18)] = inst_44503);

(statearr_44627[(16)] = inst_44485__$1);

(statearr_44627[(17)] = inst_44488__$1);

return statearr_44627;
})();
var statearr_44628_44709 = state_44608__$1;
(statearr_44628_44709[(2)] = null);

(statearr_44628_44709[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (21))){
var inst_44530 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44632_44710 = state_44608__$1;
(statearr_44632_44710[(2)] = inst_44530);

(statearr_44632_44710[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (31))){
var inst_44556 = (state_44608[(12)]);
var inst_44560 = done(null);
var inst_44561 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44556);
var state_44608__$1 = (function (){var statearr_44633 = state_44608;
(statearr_44633[(19)] = inst_44560);

return statearr_44633;
})();
var statearr_44634_44711 = state_44608__$1;
(statearr_44634_44711[(2)] = inst_44561);

(statearr_44634_44711[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (32))){
var inst_44551 = (state_44608[(9)]);
var inst_44548 = (state_44608[(20)]);
var inst_44550 = (state_44608[(21)]);
var inst_44549 = (state_44608[(11)]);
var inst_44563 = (state_44608[(2)]);
var inst_44564 = (inst_44551 + (1));
var tmp44629 = inst_44548;
var tmp44630 = inst_44550;
var tmp44631 = inst_44549;
var inst_44548__$1 = tmp44629;
var inst_44549__$1 = tmp44631;
var inst_44550__$1 = tmp44630;
var inst_44551__$1 = inst_44564;
var state_44608__$1 = (function (){var statearr_44635 = state_44608;
(statearr_44635[(9)] = inst_44551__$1);

(statearr_44635[(22)] = inst_44563);

(statearr_44635[(20)] = inst_44548__$1);

(statearr_44635[(21)] = inst_44550__$1);

(statearr_44635[(11)] = inst_44549__$1);

return statearr_44635;
})();
var statearr_44636_44712 = state_44608__$1;
(statearr_44636_44712[(2)] = null);

(statearr_44636_44712[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (40))){
var inst_44576 = (state_44608[(23)]);
var inst_44580 = done(null);
var inst_44581 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44576);
var state_44608__$1 = (function (){var statearr_44637 = state_44608;
(statearr_44637[(24)] = inst_44580);

return statearr_44637;
})();
var statearr_44638_44713 = state_44608__$1;
(statearr_44638_44713[(2)] = inst_44581);

(statearr_44638_44713[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (33))){
var inst_44567 = (state_44608[(25)]);
var inst_44569 = cljs.core.chunked_seq_QMARK_(inst_44567);
var state_44608__$1 = state_44608;
if(inst_44569){
var statearr_44639_44714 = state_44608__$1;
(statearr_44639_44714[(1)] = (36));

} else {
var statearr_44640_44715 = state_44608__$1;
(statearr_44640_44715[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (13))){
var inst_44497 = (state_44608[(26)]);
var inst_44500 = cljs.core.async.close_BANG_(inst_44497);
var state_44608__$1 = state_44608;
var statearr_44641_44716 = state_44608__$1;
(statearr_44641_44716[(2)] = inst_44500);

(statearr_44641_44716[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (22))){
var inst_44520 = (state_44608[(8)]);
var inst_44523 = cljs.core.async.close_BANG_(inst_44520);
var state_44608__$1 = state_44608;
var statearr_44642_44717 = state_44608__$1;
(statearr_44642_44717[(2)] = inst_44523);

(statearr_44642_44717[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (36))){
var inst_44567 = (state_44608[(25)]);
var inst_44571 = cljs.core.chunk_first(inst_44567);
var inst_44572 = cljs.core.chunk_rest(inst_44567);
var inst_44573 = cljs.core.count(inst_44571);
var inst_44548 = inst_44572;
var inst_44549 = inst_44571;
var inst_44550 = inst_44573;
var inst_44551 = (0);
var state_44608__$1 = (function (){var statearr_44643 = state_44608;
(statearr_44643[(9)] = inst_44551);

(statearr_44643[(20)] = inst_44548);

(statearr_44643[(21)] = inst_44550);

(statearr_44643[(11)] = inst_44549);

return statearr_44643;
})();
var statearr_44644_44718 = state_44608__$1;
(statearr_44644_44718[(2)] = null);

(statearr_44644_44718[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (41))){
var inst_44567 = (state_44608[(25)]);
var inst_44583 = (state_44608[(2)]);
var inst_44584 = cljs.core.next(inst_44567);
var inst_44548 = inst_44584;
var inst_44549 = null;
var inst_44550 = (0);
var inst_44551 = (0);
var state_44608__$1 = (function (){var statearr_44645 = state_44608;
(statearr_44645[(9)] = inst_44551);

(statearr_44645[(20)] = inst_44548);

(statearr_44645[(27)] = inst_44583);

(statearr_44645[(21)] = inst_44550);

(statearr_44645[(11)] = inst_44549);

return statearr_44645;
})();
var statearr_44646_44719 = state_44608__$1;
(statearr_44646_44719[(2)] = null);

(statearr_44646_44719[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (43))){
var state_44608__$1 = state_44608;
var statearr_44647_44720 = state_44608__$1;
(statearr_44647_44720[(2)] = null);

(statearr_44647_44720[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (29))){
var inst_44592 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44648_44721 = state_44608__$1;
(statearr_44648_44721[(2)] = inst_44592);

(statearr_44648_44721[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (44))){
var inst_44601 = (state_44608[(2)]);
var state_44608__$1 = (function (){var statearr_44649 = state_44608;
(statearr_44649[(28)] = inst_44601);

return statearr_44649;
})();
var statearr_44650_44722 = state_44608__$1;
(statearr_44650_44722[(2)] = null);

(statearr_44650_44722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (6))){
var inst_44540 = (state_44608[(29)]);
var inst_44539 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_44540__$1 = cljs.core.keys(inst_44539);
var inst_44541 = cljs.core.count(inst_44540__$1);
var inst_44542 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_44541) : cljs.core.reset_BANG_.call(null,dctr,inst_44541));
var inst_44547 = cljs.core.seq(inst_44540__$1);
var inst_44548 = inst_44547;
var inst_44549 = null;
var inst_44550 = (0);
var inst_44551 = (0);
var state_44608__$1 = (function (){var statearr_44651 = state_44608;
(statearr_44651[(9)] = inst_44551);

(statearr_44651[(20)] = inst_44548);

(statearr_44651[(21)] = inst_44550);

(statearr_44651[(30)] = inst_44542);

(statearr_44651[(29)] = inst_44540__$1);

(statearr_44651[(11)] = inst_44549);

return statearr_44651;
})();
var statearr_44652_44723 = state_44608__$1;
(statearr_44652_44723[(2)] = null);

(statearr_44652_44723[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (28))){
var inst_44567 = (state_44608[(25)]);
var inst_44548 = (state_44608[(20)]);
var inst_44567__$1 = cljs.core.seq(inst_44548);
var state_44608__$1 = (function (){var statearr_44653 = state_44608;
(statearr_44653[(25)] = inst_44567__$1);

return statearr_44653;
})();
if(inst_44567__$1){
var statearr_44654_44724 = state_44608__$1;
(statearr_44654_44724[(1)] = (33));

} else {
var statearr_44655_44725 = state_44608__$1;
(statearr_44655_44725[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (25))){
var inst_44551 = (state_44608[(9)]);
var inst_44550 = (state_44608[(21)]);
var inst_44553 = (inst_44551 < inst_44550);
var inst_44554 = inst_44553;
var state_44608__$1 = state_44608;
if(cljs.core.truth_(inst_44554)){
var statearr_44656_44726 = state_44608__$1;
(statearr_44656_44726[(1)] = (27));

} else {
var statearr_44657_44727 = state_44608__$1;
(statearr_44657_44727[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (34))){
var state_44608__$1 = state_44608;
var statearr_44658_44728 = state_44608__$1;
(statearr_44658_44728[(2)] = null);

(statearr_44658_44728[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (17))){
var state_44608__$1 = state_44608;
var statearr_44659_44729 = state_44608__$1;
(statearr_44659_44729[(2)] = null);

(statearr_44659_44729[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (3))){
var inst_44606 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44608__$1,inst_44606);
} else {
if((state_val_44609 === (12))){
var inst_44535 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44660_44730 = state_44608__$1;
(statearr_44660_44730[(2)] = inst_44535);

(statearr_44660_44730[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (2))){
var state_44608__$1 = state_44608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44608__$1,(4),ch);
} else {
if((state_val_44609 === (23))){
var state_44608__$1 = state_44608;
var statearr_44661_44731 = state_44608__$1;
(statearr_44661_44731[(2)] = null);

(statearr_44661_44731[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (35))){
var inst_44590 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44662_44732 = state_44608__$1;
(statearr_44662_44732[(2)] = inst_44590);

(statearr_44662_44732[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (19))){
var inst_44507 = (state_44608[(7)]);
var inst_44511 = cljs.core.chunk_first(inst_44507);
var inst_44512 = cljs.core.chunk_rest(inst_44507);
var inst_44513 = cljs.core.count(inst_44511);
var inst_44485 = inst_44512;
var inst_44486 = inst_44511;
var inst_44487 = inst_44513;
var inst_44488 = (0);
var state_44608__$1 = (function (){var statearr_44663 = state_44608;
(statearr_44663[(14)] = inst_44486);

(statearr_44663[(15)] = inst_44487);

(statearr_44663[(16)] = inst_44485);

(statearr_44663[(17)] = inst_44488);

return statearr_44663;
})();
var statearr_44664_44733 = state_44608__$1;
(statearr_44664_44733[(2)] = null);

(statearr_44664_44733[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (11))){
var inst_44507 = (state_44608[(7)]);
var inst_44485 = (state_44608[(16)]);
var inst_44507__$1 = cljs.core.seq(inst_44485);
var state_44608__$1 = (function (){var statearr_44665 = state_44608;
(statearr_44665[(7)] = inst_44507__$1);

return statearr_44665;
})();
if(inst_44507__$1){
var statearr_44666_44734 = state_44608__$1;
(statearr_44666_44734[(1)] = (16));

} else {
var statearr_44667_44735 = state_44608__$1;
(statearr_44667_44735[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (9))){
var inst_44537 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44668_44736 = state_44608__$1;
(statearr_44668_44736[(2)] = inst_44537);

(statearr_44668_44736[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (5))){
var inst_44483 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_44484 = cljs.core.seq(inst_44483);
var inst_44485 = inst_44484;
var inst_44486 = null;
var inst_44487 = (0);
var inst_44488 = (0);
var state_44608__$1 = (function (){var statearr_44669 = state_44608;
(statearr_44669[(14)] = inst_44486);

(statearr_44669[(15)] = inst_44487);

(statearr_44669[(16)] = inst_44485);

(statearr_44669[(17)] = inst_44488);

return statearr_44669;
})();
var statearr_44670_44737 = state_44608__$1;
(statearr_44670_44737[(2)] = null);

(statearr_44670_44737[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (14))){
var state_44608__$1 = state_44608;
var statearr_44671_44738 = state_44608__$1;
(statearr_44671_44738[(2)] = null);

(statearr_44671_44738[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (45))){
var inst_44598 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44672_44739 = state_44608__$1;
(statearr_44672_44739[(2)] = inst_44598);

(statearr_44672_44739[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (26))){
var inst_44540 = (state_44608[(29)]);
var inst_44594 = (state_44608[(2)]);
var inst_44595 = cljs.core.seq(inst_44540);
var state_44608__$1 = (function (){var statearr_44673 = state_44608;
(statearr_44673[(31)] = inst_44594);

return statearr_44673;
})();
if(inst_44595){
var statearr_44674_44740 = state_44608__$1;
(statearr_44674_44740[(1)] = (42));

} else {
var statearr_44675_44741 = state_44608__$1;
(statearr_44675_44741[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (16))){
var inst_44507 = (state_44608[(7)]);
var inst_44509 = cljs.core.chunked_seq_QMARK_(inst_44507);
var state_44608__$1 = state_44608;
if(inst_44509){
var statearr_44676_44742 = state_44608__$1;
(statearr_44676_44742[(1)] = (19));

} else {
var statearr_44677_44743 = state_44608__$1;
(statearr_44677_44743[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (38))){
var inst_44587 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44678_44744 = state_44608__$1;
(statearr_44678_44744[(2)] = inst_44587);

(statearr_44678_44744[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (30))){
var state_44608__$1 = state_44608;
var statearr_44679_44745 = state_44608__$1;
(statearr_44679_44745[(2)] = null);

(statearr_44679_44745[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (10))){
var inst_44486 = (state_44608[(14)]);
var inst_44488 = (state_44608[(17)]);
var inst_44496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44486,inst_44488);
var inst_44497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44496,(0),null);
var inst_44498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44496,(1),null);
var state_44608__$1 = (function (){var statearr_44680 = state_44608;
(statearr_44680[(26)] = inst_44497);

return statearr_44680;
})();
if(cljs.core.truth_(inst_44498)){
var statearr_44681_44746 = state_44608__$1;
(statearr_44681_44746[(1)] = (13));

} else {
var statearr_44682_44747 = state_44608__$1;
(statearr_44682_44747[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (18))){
var inst_44533 = (state_44608[(2)]);
var state_44608__$1 = state_44608;
var statearr_44683_44748 = state_44608__$1;
(statearr_44683_44748[(2)] = inst_44533);

(statearr_44683_44748[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (42))){
var state_44608__$1 = state_44608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44608__$1,(45),dchan);
} else {
if((state_val_44609 === (37))){
var inst_44567 = (state_44608[(25)]);
var inst_44476 = (state_44608[(10)]);
var inst_44576 = (state_44608[(23)]);
var inst_44576__$1 = cljs.core.first(inst_44567);
var inst_44577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44576__$1,inst_44476,done);
var state_44608__$1 = (function (){var statearr_44684 = state_44608;
(statearr_44684[(23)] = inst_44576__$1);

return statearr_44684;
})();
if(cljs.core.truth_(inst_44577)){
var statearr_44685_44749 = state_44608__$1;
(statearr_44685_44749[(1)] = (39));

} else {
var statearr_44686_44750 = state_44608__$1;
(statearr_44686_44750[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44609 === (8))){
var inst_44487 = (state_44608[(15)]);
var inst_44488 = (state_44608[(17)]);
var inst_44490 = (inst_44488 < inst_44487);
var inst_44491 = inst_44490;
var state_44608__$1 = state_44608;
if(cljs.core.truth_(inst_44491)){
var statearr_44687_44751 = state_44608__$1;
(statearr_44687_44751[(1)] = (10));

} else {
var statearr_44688_44752 = state_44608__$1;
(statearr_44688_44752[(1)] = (11));

}

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
});})(c__43349__auto___44698,cs,m,dchan,dctr,done))
;
return ((function (switch__43223__auto__,c__43349__auto___44698,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43224__auto__ = null;
var cljs$core$async$mult_$_state_machine__43224__auto____0 = (function (){
var statearr_44692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44692[(0)] = cljs$core$async$mult_$_state_machine__43224__auto__);

(statearr_44692[(1)] = (1));

return statearr_44692;
});
var cljs$core$async$mult_$_state_machine__43224__auto____1 = (function (state_44608){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_44608);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e44693){if((e44693 instanceof Object)){
var ex__43227__auto__ = e44693;
var statearr_44694_44753 = state_44608;
(statearr_44694_44753[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44608);

return cljs.core.cst$kw$recur;
} else {
throw e44693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__44754 = state_44608;
state_44608 = G__44754;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43224__auto__ = function(state_44608){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43224__auto____1.call(this,state_44608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43224__auto____0;
cljs$core$async$mult_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43224__auto____1;
return cljs$core$async$mult_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___44698,cs,m,dchan,dctr,done))
})();
var state__43351__auto__ = (function (){var statearr_44695 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_44695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___44698);

return statearr_44695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___44698,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args44755 = [];
var len__8723__auto___44758 = arguments.length;
var i__8724__auto___44759 = (0);
while(true){
if((i__8724__auto___44759 < len__8723__auto___44758)){
args44755.push((arguments[i__8724__auto___44759]));

var G__44760 = (i__8724__auto___44759 + (1));
i__8724__auto___44759 = G__44760;
continue;
} else {
}
break;
}

var G__44757 = args44755.length;
switch (G__44757) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44755.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto__.call(null,m,ch));
} else {
var m__8221__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto__.call(null,m,ch));
} else {
var m__8221__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8221__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8221__auto__.call(null,m));
} else {
var m__8221__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8221__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8221__auto__.call(null,m,state_map));
} else {
var m__8221__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8221__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8220__auto__ = (((m == null))?null:m);
var m__8221__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8221__auto__.call(null,m,mode));
} else {
var m__8221__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8221__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8730__auto__ = [];
var len__8723__auto___44772 = arguments.length;
var i__8724__auto___44773 = (0);
while(true){
if((i__8724__auto___44773 < len__8723__auto___44772)){
args__8730__auto__.push((arguments[i__8724__auto___44773]));

var G__44774 = (i__8724__auto___44773 + (1));
i__8724__auto___44773 = G__44774;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44766){
var map__44767 = p__44766;
var map__44767__$1 = ((((!((map__44767 == null)))?((((map__44767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44767):map__44767);
var opts = map__44767__$1;
var statearr_44769_44775 = state;
(statearr_44769_44775[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__44767,map__44767__$1,opts){
return (function (val){
var statearr_44770_44776 = state;
(statearr_44770_44776[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__44767,map__44767__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_44771_44777 = state;
(statearr_44771_44777[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44762){
var G__44763 = cljs.core.first(seq44762);
var seq44762__$1 = cljs.core.next(seq44762);
var G__44764 = cljs.core.first(seq44762__$1);
var seq44762__$2 = cljs.core.next(seq44762__$1);
var G__44765 = cljs.core.first(seq44762__$2);
var seq44762__$3 = cljs.core.next(seq44762__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44763,G__44764,G__44765,seq44762__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__44949 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44949) : cljs.core.atom.call(null,G__44949));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__44950 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44950) : cljs.core.atom.call(null,G__44950));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44951 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44952){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44952 = meta44952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44953,meta44952__$1){
var self__ = this;
var _44953__$1 = this;
return (new cljs.core.async.t_cljs$core$async44951(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44952__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44953){
var self__ = this;
var _44953__$1 = this;
return self__.meta44952;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44954_45120 = self__.cs;
var G__44955_45121 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44954_45120,G__44955_45121) : cljs.core.reset_BANG_.call(null,G__44954_45120,G__44955_45121));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async44951.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44951.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta44952], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44951";

cljs.core.async.t_cljs$core$async44951.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async44951");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44951 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44951(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44952){
return (new cljs.core.async.t_cljs$core$async44951(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44952));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44951(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43349__auto___45122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45057){
var state_val_45058 = (state_45057[(1)]);
if((state_val_45058 === (7))){
var inst_44972 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
var statearr_45059_45123 = state_45057__$1;
(statearr_45059_45123[(2)] = inst_44972);

(statearr_45059_45123[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (20))){
var inst_44984 = (state_45057[(7)]);
var state_45057__$1 = state_45057;
var statearr_45060_45124 = state_45057__$1;
(statearr_45060_45124[(2)] = inst_44984);

(statearr_45060_45124[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (27))){
var state_45057__$1 = state_45057;
var statearr_45061_45125 = state_45057__$1;
(statearr_45061_45125[(2)] = null);

(statearr_45061_45125[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (1))){
var inst_44959 = (state_45057[(8)]);
var inst_44959__$1 = calc_state();
var inst_44961 = (inst_44959__$1 == null);
var inst_44962 = cljs.core.not(inst_44961);
var state_45057__$1 = (function (){var statearr_45062 = state_45057;
(statearr_45062[(8)] = inst_44959__$1);

return statearr_45062;
})();
if(inst_44962){
var statearr_45063_45126 = state_45057__$1;
(statearr_45063_45126[(1)] = (2));

} else {
var statearr_45064_45127 = state_45057__$1;
(statearr_45064_45127[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (24))){
var inst_45031 = (state_45057[(9)]);
var inst_45008 = (state_45057[(10)]);
var inst_45017 = (state_45057[(11)]);
var inst_45031__$1 = (inst_45008.cljs$core$IFn$_invoke$arity$1 ? inst_45008.cljs$core$IFn$_invoke$arity$1(inst_45017) : inst_45008.call(null,inst_45017));
var state_45057__$1 = (function (){var statearr_45065 = state_45057;
(statearr_45065[(9)] = inst_45031__$1);

return statearr_45065;
})();
if(cljs.core.truth_(inst_45031__$1)){
var statearr_45066_45128 = state_45057__$1;
(statearr_45066_45128[(1)] = (29));

} else {
var statearr_45067_45129 = state_45057__$1;
(statearr_45067_45129[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (4))){
var inst_44975 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_44975)){
var statearr_45068_45130 = state_45057__$1;
(statearr_45068_45130[(1)] = (8));

} else {
var statearr_45069_45131 = state_45057__$1;
(statearr_45069_45131[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (15))){
var inst_45002 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_45002)){
var statearr_45070_45132 = state_45057__$1;
(statearr_45070_45132[(1)] = (19));

} else {
var statearr_45071_45133 = state_45057__$1;
(statearr_45071_45133[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (21))){
var inst_45007 = (state_45057[(12)]);
var inst_45007__$1 = (state_45057[(2)]);
var inst_45008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45007__$1,cljs.core.cst$kw$solos);
var inst_45009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45007__$1,cljs.core.cst$kw$mutes);
var inst_45010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45007__$1,cljs.core.cst$kw$reads);
var state_45057__$1 = (function (){var statearr_45072 = state_45057;
(statearr_45072[(13)] = inst_45009);

(statearr_45072[(12)] = inst_45007__$1);

(statearr_45072[(10)] = inst_45008);

return statearr_45072;
})();
return cljs.core.async.ioc_alts_BANG_(state_45057__$1,(22),inst_45010);
} else {
if((state_val_45058 === (31))){
var inst_45039 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_45039)){
var statearr_45073_45134 = state_45057__$1;
(statearr_45073_45134[(1)] = (32));

} else {
var statearr_45074_45135 = state_45057__$1;
(statearr_45074_45135[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (32))){
var inst_45016 = (state_45057[(14)]);
var state_45057__$1 = state_45057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45057__$1,(35),out,inst_45016);
} else {
if((state_val_45058 === (33))){
var inst_45007 = (state_45057[(12)]);
var inst_44984 = inst_45007;
var state_45057__$1 = (function (){var statearr_45075 = state_45057;
(statearr_45075[(7)] = inst_44984);

return statearr_45075;
})();
var statearr_45076_45136 = state_45057__$1;
(statearr_45076_45136[(2)] = null);

(statearr_45076_45136[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (13))){
var inst_44984 = (state_45057[(7)]);
var inst_44991 = inst_44984.cljs$lang$protocol_mask$partition0$;
var inst_44992 = (inst_44991 & (64));
var inst_44993 = inst_44984.cljs$core$ISeq$;
var inst_44994 = (cljs.core.PROTOCOL_SENTINEL === inst_44993);
var inst_44995 = (inst_44992) || (inst_44994);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_44995)){
var statearr_45077_45137 = state_45057__$1;
(statearr_45077_45137[(1)] = (16));

} else {
var statearr_45078_45138 = state_45057__$1;
(statearr_45078_45138[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (22))){
var inst_45016 = (state_45057[(14)]);
var inst_45017 = (state_45057[(11)]);
var inst_45015 = (state_45057[(2)]);
var inst_45016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45015,(0),null);
var inst_45017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45015,(1),null);
var inst_45018 = (inst_45016__$1 == null);
var inst_45019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45017__$1,change);
var inst_45020 = (inst_45018) || (inst_45019);
var state_45057__$1 = (function (){var statearr_45079 = state_45057;
(statearr_45079[(14)] = inst_45016__$1);

(statearr_45079[(11)] = inst_45017__$1);

return statearr_45079;
})();
if(cljs.core.truth_(inst_45020)){
var statearr_45080_45139 = state_45057__$1;
(statearr_45080_45139[(1)] = (23));

} else {
var statearr_45081_45140 = state_45057__$1;
(statearr_45081_45140[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (36))){
var inst_45007 = (state_45057[(12)]);
var inst_44984 = inst_45007;
var state_45057__$1 = (function (){var statearr_45082 = state_45057;
(statearr_45082[(7)] = inst_44984);

return statearr_45082;
})();
var statearr_45083_45141 = state_45057__$1;
(statearr_45083_45141[(2)] = null);

(statearr_45083_45141[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (29))){
var inst_45031 = (state_45057[(9)]);
var state_45057__$1 = state_45057;
var statearr_45084_45142 = state_45057__$1;
(statearr_45084_45142[(2)] = inst_45031);

(statearr_45084_45142[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (6))){
var state_45057__$1 = state_45057;
var statearr_45085_45143 = state_45057__$1;
(statearr_45085_45143[(2)] = false);

(statearr_45085_45143[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (28))){
var inst_45027 = (state_45057[(2)]);
var inst_45028 = calc_state();
var inst_44984 = inst_45028;
var state_45057__$1 = (function (){var statearr_45086 = state_45057;
(statearr_45086[(15)] = inst_45027);

(statearr_45086[(7)] = inst_44984);

return statearr_45086;
})();
var statearr_45087_45144 = state_45057__$1;
(statearr_45087_45144[(2)] = null);

(statearr_45087_45144[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (25))){
var inst_45053 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
var statearr_45088_45145 = state_45057__$1;
(statearr_45088_45145[(2)] = inst_45053);

(statearr_45088_45145[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (34))){
var inst_45051 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
var statearr_45089_45146 = state_45057__$1;
(statearr_45089_45146[(2)] = inst_45051);

(statearr_45089_45146[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (17))){
var state_45057__$1 = state_45057;
var statearr_45090_45147 = state_45057__$1;
(statearr_45090_45147[(2)] = false);

(statearr_45090_45147[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (3))){
var state_45057__$1 = state_45057;
var statearr_45091_45148 = state_45057__$1;
(statearr_45091_45148[(2)] = false);

(statearr_45091_45148[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (12))){
var inst_45055 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45057__$1,inst_45055);
} else {
if((state_val_45058 === (2))){
var inst_44959 = (state_45057[(8)]);
var inst_44964 = inst_44959.cljs$lang$protocol_mask$partition0$;
var inst_44965 = (inst_44964 & (64));
var inst_44966 = inst_44959.cljs$core$ISeq$;
var inst_44967 = (cljs.core.PROTOCOL_SENTINEL === inst_44966);
var inst_44968 = (inst_44965) || (inst_44967);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_44968)){
var statearr_45092_45149 = state_45057__$1;
(statearr_45092_45149[(1)] = (5));

} else {
var statearr_45093_45150 = state_45057__$1;
(statearr_45093_45150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (23))){
var inst_45016 = (state_45057[(14)]);
var inst_45022 = (inst_45016 == null);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_45022)){
var statearr_45094_45151 = state_45057__$1;
(statearr_45094_45151[(1)] = (26));

} else {
var statearr_45095_45152 = state_45057__$1;
(statearr_45095_45152[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (35))){
var inst_45042 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
if(cljs.core.truth_(inst_45042)){
var statearr_45096_45153 = state_45057__$1;
(statearr_45096_45153[(1)] = (36));

} else {
var statearr_45097_45154 = state_45057__$1;
(statearr_45097_45154[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (19))){
var inst_44984 = (state_45057[(7)]);
var inst_45004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44984);
var state_45057__$1 = state_45057;
var statearr_45098_45155 = state_45057__$1;
(statearr_45098_45155[(2)] = inst_45004);

(statearr_45098_45155[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (11))){
var inst_44984 = (state_45057[(7)]);
var inst_44988 = (inst_44984 == null);
var inst_44989 = cljs.core.not(inst_44988);
var state_45057__$1 = state_45057;
if(inst_44989){
var statearr_45099_45156 = state_45057__$1;
(statearr_45099_45156[(1)] = (13));

} else {
var statearr_45100_45157 = state_45057__$1;
(statearr_45100_45157[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (9))){
var inst_44959 = (state_45057[(8)]);
var state_45057__$1 = state_45057;
var statearr_45101_45158 = state_45057__$1;
(statearr_45101_45158[(2)] = inst_44959);

(statearr_45101_45158[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (5))){
var state_45057__$1 = state_45057;
var statearr_45102_45159 = state_45057__$1;
(statearr_45102_45159[(2)] = true);

(statearr_45102_45159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (14))){
var state_45057__$1 = state_45057;
var statearr_45103_45160 = state_45057__$1;
(statearr_45103_45160[(2)] = false);

(statearr_45103_45160[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (26))){
var inst_45017 = (state_45057[(11)]);
var inst_45024 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45017);
var state_45057__$1 = state_45057;
var statearr_45104_45161 = state_45057__$1;
(statearr_45104_45161[(2)] = inst_45024);

(statearr_45104_45161[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (16))){
var state_45057__$1 = state_45057;
var statearr_45105_45162 = state_45057__$1;
(statearr_45105_45162[(2)] = true);

(statearr_45105_45162[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (38))){
var inst_45047 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
var statearr_45106_45163 = state_45057__$1;
(statearr_45106_45163[(2)] = inst_45047);

(statearr_45106_45163[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (30))){
var inst_45009 = (state_45057[(13)]);
var inst_45008 = (state_45057[(10)]);
var inst_45017 = (state_45057[(11)]);
var inst_45034 = cljs.core.empty_QMARK_(inst_45008);
var inst_45035 = (inst_45009.cljs$core$IFn$_invoke$arity$1 ? inst_45009.cljs$core$IFn$_invoke$arity$1(inst_45017) : inst_45009.call(null,inst_45017));
var inst_45036 = cljs.core.not(inst_45035);
var inst_45037 = (inst_45034) && (inst_45036);
var state_45057__$1 = state_45057;
var statearr_45107_45164 = state_45057__$1;
(statearr_45107_45164[(2)] = inst_45037);

(statearr_45107_45164[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (10))){
var inst_44959 = (state_45057[(8)]);
var inst_44980 = (state_45057[(2)]);
var inst_44981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44980,cljs.core.cst$kw$solos);
var inst_44982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44980,cljs.core.cst$kw$mutes);
var inst_44983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44980,cljs.core.cst$kw$reads);
var inst_44984 = inst_44959;
var state_45057__$1 = (function (){var statearr_45108 = state_45057;
(statearr_45108[(16)] = inst_44982);

(statearr_45108[(7)] = inst_44984);

(statearr_45108[(17)] = inst_44983);

(statearr_45108[(18)] = inst_44981);

return statearr_45108;
})();
var statearr_45109_45165 = state_45057__$1;
(statearr_45109_45165[(2)] = null);

(statearr_45109_45165[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (18))){
var inst_44999 = (state_45057[(2)]);
var state_45057__$1 = state_45057;
var statearr_45110_45166 = state_45057__$1;
(statearr_45110_45166[(2)] = inst_44999);

(statearr_45110_45166[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (37))){
var state_45057__$1 = state_45057;
var statearr_45111_45167 = state_45057__$1;
(statearr_45111_45167[(2)] = null);

(statearr_45111_45167[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45058 === (8))){
var inst_44959 = (state_45057[(8)]);
var inst_44977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44959);
var state_45057__$1 = state_45057;
var statearr_45112_45168 = state_45057__$1;
(statearr_45112_45168[(2)] = inst_44977);

(statearr_45112_45168[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43223__auto__,c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43224__auto__ = null;
var cljs$core$async$mix_$_state_machine__43224__auto____0 = (function (){
var statearr_45116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45116[(0)] = cljs$core$async$mix_$_state_machine__43224__auto__);

(statearr_45116[(1)] = (1));

return statearr_45116;
});
var cljs$core$async$mix_$_state_machine__43224__auto____1 = (function (state_45057){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45057);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45117){if((e45117 instanceof Object)){
var ex__43227__auto__ = e45117;
var statearr_45118_45169 = state_45057;
(statearr_45118_45169[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45057);

return cljs.core.cst$kw$recur;
} else {
throw e45117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45170 = state_45057;
state_45057 = G__45170;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43224__auto__ = function(state_45057){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43224__auto____1.call(this,state_45057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43224__auto____0;
cljs$core$async$mix_$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43224__auto____1;
return cljs$core$async$mix_$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43351__auto__ = (function (){var statearr_45119 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45122);

return statearr_45119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8220__auto__ = (((p == null))?null:p);
var m__8221__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8221__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8221__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8221__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8220__auto__ = (((p == null))?null:p);
var m__8221__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8221__auto__.call(null,p,v,ch));
} else {
var m__8221__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8221__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args45171 = [];
var len__8723__auto___45174 = arguments.length;
var i__8724__auto___45175 = (0);
while(true){
if((i__8724__auto___45175 < len__8723__auto___45174)){
args45171.push((arguments[i__8724__auto___45175]));

var G__45176 = (i__8724__auto___45175 + (1));
i__8724__auto___45175 = G__45176;
continue;
} else {
}
break;
}

var G__45173 = args45171.length;
switch (G__45173) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45171.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8220__auto__ = (((p == null))?null:p);
var m__8221__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8221__auto__.call(null,p));
} else {
var m__8221__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8221__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8220__auto__ = (((p == null))?null:p);
var m__8221__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8221__auto__.call(null,p,v));
} else {
var m__8221__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8221__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args45179 = [];
var len__8723__auto___45307 = arguments.length;
var i__8724__auto___45308 = (0);
while(true){
if((i__8724__auto___45308 < len__8723__auto___45307)){
args45179.push((arguments[i__8724__auto___45308]));

var G__45309 = (i__8724__auto___45308 + (1));
i__8724__auto___45308 = G__45309;
continue;
} else {
}
break;
}

var G__45181 = args45179.length;
switch (G__45181) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45179.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__45182 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45182) : cljs.core.atom.call(null,G__45182));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7502__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7502__auto__,mults){
return (function (p1__45178_SHARP_){
if(cljs.core.truth_((p1__45178_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45178_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45178_SHARP_.call(null,topic)))){
return p1__45178_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45178_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7502__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45183 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45184){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45184 = meta45184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45185,meta45184__$1){
var self__ = this;
var _45185__$1 = this;
return (new cljs.core.async.t_cljs$core$async45183(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45184__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45185){
var self__ = this;
var _45185__$1 = this;
return self__.meta45184;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__45186 = self__.mults;
var G__45187 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45186,G__45187) : cljs.core.reset_BANG_.call(null,G__45186,G__45187));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async45183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45183.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta45184], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45183";

cljs.core.async.t_cljs$core$async45183.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async45183");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45183 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45183(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45184){
return (new cljs.core.async.t_cljs$core$async45183(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45184));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45183(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43349__auto___45311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45311,mults,ensure_mult,p){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45311,mults,ensure_mult,p){
return (function (state_45259){
var state_val_45260 = (state_45259[(1)]);
if((state_val_45260 === (7))){
var inst_45255 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45261_45312 = state_45259__$1;
(statearr_45261_45312[(2)] = inst_45255);

(statearr_45261_45312[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (20))){
var state_45259__$1 = state_45259;
var statearr_45262_45313 = state_45259__$1;
(statearr_45262_45313[(2)] = null);

(statearr_45262_45313[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (1))){
var state_45259__$1 = state_45259;
var statearr_45263_45314 = state_45259__$1;
(statearr_45263_45314[(2)] = null);

(statearr_45263_45314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (24))){
var inst_45238 = (state_45259[(7)]);
var inst_45247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45238);
var state_45259__$1 = state_45259;
var statearr_45264_45315 = state_45259__$1;
(statearr_45264_45315[(2)] = inst_45247);

(statearr_45264_45315[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (4))){
var inst_45190 = (state_45259[(8)]);
var inst_45190__$1 = (state_45259[(2)]);
var inst_45191 = (inst_45190__$1 == null);
var state_45259__$1 = (function (){var statearr_45265 = state_45259;
(statearr_45265[(8)] = inst_45190__$1);

return statearr_45265;
})();
if(cljs.core.truth_(inst_45191)){
var statearr_45266_45316 = state_45259__$1;
(statearr_45266_45316[(1)] = (5));

} else {
var statearr_45267_45317 = state_45259__$1;
(statearr_45267_45317[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (15))){
var inst_45232 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45268_45318 = state_45259__$1;
(statearr_45268_45318[(2)] = inst_45232);

(statearr_45268_45318[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (21))){
var inst_45252 = (state_45259[(2)]);
var state_45259__$1 = (function (){var statearr_45269 = state_45259;
(statearr_45269[(9)] = inst_45252);

return statearr_45269;
})();
var statearr_45270_45319 = state_45259__$1;
(statearr_45270_45319[(2)] = null);

(statearr_45270_45319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (13))){
var inst_45214 = (state_45259[(10)]);
var inst_45216 = cljs.core.chunked_seq_QMARK_(inst_45214);
var state_45259__$1 = state_45259;
if(inst_45216){
var statearr_45271_45320 = state_45259__$1;
(statearr_45271_45320[(1)] = (16));

} else {
var statearr_45272_45321 = state_45259__$1;
(statearr_45272_45321[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (22))){
var inst_45244 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
if(cljs.core.truth_(inst_45244)){
var statearr_45273_45322 = state_45259__$1;
(statearr_45273_45322[(1)] = (23));

} else {
var statearr_45274_45323 = state_45259__$1;
(statearr_45274_45323[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (6))){
var inst_45238 = (state_45259[(7)]);
var inst_45190 = (state_45259[(8)]);
var inst_45240 = (state_45259[(11)]);
var inst_45238__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45190) : topic_fn.call(null,inst_45190));
var inst_45239 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_45240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45239,inst_45238__$1);
var state_45259__$1 = (function (){var statearr_45275 = state_45259;
(statearr_45275[(7)] = inst_45238__$1);

(statearr_45275[(11)] = inst_45240__$1);

return statearr_45275;
})();
if(cljs.core.truth_(inst_45240__$1)){
var statearr_45276_45324 = state_45259__$1;
(statearr_45276_45324[(1)] = (19));

} else {
var statearr_45277_45325 = state_45259__$1;
(statearr_45277_45325[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (25))){
var inst_45249 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45278_45326 = state_45259__$1;
(statearr_45278_45326[(2)] = inst_45249);

(statearr_45278_45326[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (17))){
var inst_45214 = (state_45259[(10)]);
var inst_45223 = cljs.core.first(inst_45214);
var inst_45224 = cljs.core.async.muxch_STAR_(inst_45223);
var inst_45225 = cljs.core.async.close_BANG_(inst_45224);
var inst_45226 = cljs.core.next(inst_45214);
var inst_45200 = inst_45226;
var inst_45201 = null;
var inst_45202 = (0);
var inst_45203 = (0);
var state_45259__$1 = (function (){var statearr_45279 = state_45259;
(statearr_45279[(12)] = inst_45201);

(statearr_45279[(13)] = inst_45225);

(statearr_45279[(14)] = inst_45200);

(statearr_45279[(15)] = inst_45202);

(statearr_45279[(16)] = inst_45203);

return statearr_45279;
})();
var statearr_45280_45327 = state_45259__$1;
(statearr_45280_45327[(2)] = null);

(statearr_45280_45327[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (3))){
var inst_45257 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45259__$1,inst_45257);
} else {
if((state_val_45260 === (12))){
var inst_45234 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45281_45328 = state_45259__$1;
(statearr_45281_45328[(2)] = inst_45234);

(statearr_45281_45328[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (2))){
var state_45259__$1 = state_45259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45259__$1,(4),ch);
} else {
if((state_val_45260 === (23))){
var state_45259__$1 = state_45259;
var statearr_45282_45329 = state_45259__$1;
(statearr_45282_45329[(2)] = null);

(statearr_45282_45329[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (19))){
var inst_45190 = (state_45259[(8)]);
var inst_45240 = (state_45259[(11)]);
var inst_45242 = cljs.core.async.muxch_STAR_(inst_45240);
var state_45259__$1 = state_45259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45259__$1,(22),inst_45242,inst_45190);
} else {
if((state_val_45260 === (11))){
var inst_45200 = (state_45259[(14)]);
var inst_45214 = (state_45259[(10)]);
var inst_45214__$1 = cljs.core.seq(inst_45200);
var state_45259__$1 = (function (){var statearr_45283 = state_45259;
(statearr_45283[(10)] = inst_45214__$1);

return statearr_45283;
})();
if(inst_45214__$1){
var statearr_45284_45330 = state_45259__$1;
(statearr_45284_45330[(1)] = (13));

} else {
var statearr_45285_45331 = state_45259__$1;
(statearr_45285_45331[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (9))){
var inst_45236 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45286_45332 = state_45259__$1;
(statearr_45286_45332[(2)] = inst_45236);

(statearr_45286_45332[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (5))){
var inst_45197 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_45198 = cljs.core.vals(inst_45197);
var inst_45199 = cljs.core.seq(inst_45198);
var inst_45200 = inst_45199;
var inst_45201 = null;
var inst_45202 = (0);
var inst_45203 = (0);
var state_45259__$1 = (function (){var statearr_45287 = state_45259;
(statearr_45287[(12)] = inst_45201);

(statearr_45287[(14)] = inst_45200);

(statearr_45287[(15)] = inst_45202);

(statearr_45287[(16)] = inst_45203);

return statearr_45287;
})();
var statearr_45288_45333 = state_45259__$1;
(statearr_45288_45333[(2)] = null);

(statearr_45288_45333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (14))){
var state_45259__$1 = state_45259;
var statearr_45292_45334 = state_45259__$1;
(statearr_45292_45334[(2)] = null);

(statearr_45292_45334[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (16))){
var inst_45214 = (state_45259[(10)]);
var inst_45218 = cljs.core.chunk_first(inst_45214);
var inst_45219 = cljs.core.chunk_rest(inst_45214);
var inst_45220 = cljs.core.count(inst_45218);
var inst_45200 = inst_45219;
var inst_45201 = inst_45218;
var inst_45202 = inst_45220;
var inst_45203 = (0);
var state_45259__$1 = (function (){var statearr_45293 = state_45259;
(statearr_45293[(12)] = inst_45201);

(statearr_45293[(14)] = inst_45200);

(statearr_45293[(15)] = inst_45202);

(statearr_45293[(16)] = inst_45203);

return statearr_45293;
})();
var statearr_45294_45335 = state_45259__$1;
(statearr_45294_45335[(2)] = null);

(statearr_45294_45335[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (10))){
var inst_45201 = (state_45259[(12)]);
var inst_45200 = (state_45259[(14)]);
var inst_45202 = (state_45259[(15)]);
var inst_45203 = (state_45259[(16)]);
var inst_45208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45201,inst_45203);
var inst_45209 = cljs.core.async.muxch_STAR_(inst_45208);
var inst_45210 = cljs.core.async.close_BANG_(inst_45209);
var inst_45211 = (inst_45203 + (1));
var tmp45289 = inst_45201;
var tmp45290 = inst_45200;
var tmp45291 = inst_45202;
var inst_45200__$1 = tmp45290;
var inst_45201__$1 = tmp45289;
var inst_45202__$1 = tmp45291;
var inst_45203__$1 = inst_45211;
var state_45259__$1 = (function (){var statearr_45295 = state_45259;
(statearr_45295[(12)] = inst_45201__$1);

(statearr_45295[(14)] = inst_45200__$1);

(statearr_45295[(15)] = inst_45202__$1);

(statearr_45295[(17)] = inst_45210);

(statearr_45295[(16)] = inst_45203__$1);

return statearr_45295;
})();
var statearr_45296_45336 = state_45259__$1;
(statearr_45296_45336[(2)] = null);

(statearr_45296_45336[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (18))){
var inst_45229 = (state_45259[(2)]);
var state_45259__$1 = state_45259;
var statearr_45297_45337 = state_45259__$1;
(statearr_45297_45337[(2)] = inst_45229);

(statearr_45297_45337[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45260 === (8))){
var inst_45202 = (state_45259[(15)]);
var inst_45203 = (state_45259[(16)]);
var inst_45205 = (inst_45203 < inst_45202);
var inst_45206 = inst_45205;
var state_45259__$1 = state_45259;
if(cljs.core.truth_(inst_45206)){
var statearr_45298_45338 = state_45259__$1;
(statearr_45298_45338[(1)] = (10));

} else {
var statearr_45299_45339 = state_45259__$1;
(statearr_45299_45339[(1)] = (11));

}

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
});})(c__43349__auto___45311,mults,ensure_mult,p))
;
return ((function (switch__43223__auto__,c__43349__auto___45311,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45303[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45303[(1)] = (1));

return statearr_45303;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45259){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45259);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45304){if((e45304 instanceof Object)){
var ex__43227__auto__ = e45304;
var statearr_45305_45340 = state_45259;
(statearr_45305_45340[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45259);

return cljs.core.cst$kw$recur;
} else {
throw e45304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45341 = state_45259;
state_45259 = G__45341;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45311,mults,ensure_mult,p))
})();
var state__43351__auto__ = (function (){var statearr_45306 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45311);

return statearr_45306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45311,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args45342 = [];
var len__8723__auto___45345 = arguments.length;
var i__8724__auto___45346 = (0);
while(true){
if((i__8724__auto___45346 < len__8723__auto___45345)){
args45342.push((arguments[i__8724__auto___45346]));

var G__45347 = (i__8724__auto___45346 + (1));
i__8724__auto___45346 = G__45347;
continue;
} else {
}
break;
}

var G__45344 = args45342.length;
switch (G__45344) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45342.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args45349 = [];
var len__8723__auto___45352 = arguments.length;
var i__8724__auto___45353 = (0);
while(true){
if((i__8724__auto___45353 < len__8723__auto___45352)){
args45349.push((arguments[i__8724__auto___45353]));

var G__45354 = (i__8724__auto___45353 + (1));
i__8724__auto___45353 = G__45354;
continue;
} else {
}
break;
}

var G__45351 = args45349.length;
switch (G__45351) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45349.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args45356 = [];
var len__8723__auto___45427 = arguments.length;
var i__8724__auto___45428 = (0);
while(true){
if((i__8724__auto___45428 < len__8723__auto___45427)){
args45356.push((arguments[i__8724__auto___45428]));

var G__45429 = (i__8724__auto___45428 + (1));
i__8724__auto___45428 = G__45429;
continue;
} else {
}
break;
}

var G__45358 = args45356.length;
switch (G__45358) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45356.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43349__auto___45431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45397){
var state_val_45398 = (state_45397[(1)]);
if((state_val_45398 === (7))){
var state_45397__$1 = state_45397;
var statearr_45399_45432 = state_45397__$1;
(statearr_45399_45432[(2)] = null);

(statearr_45399_45432[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (1))){
var state_45397__$1 = state_45397;
var statearr_45400_45433 = state_45397__$1;
(statearr_45400_45433[(2)] = null);

(statearr_45400_45433[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (4))){
var inst_45361 = (state_45397[(7)]);
var inst_45363 = (inst_45361 < cnt);
var state_45397__$1 = state_45397;
if(cljs.core.truth_(inst_45363)){
var statearr_45401_45434 = state_45397__$1;
(statearr_45401_45434[(1)] = (6));

} else {
var statearr_45402_45435 = state_45397__$1;
(statearr_45402_45435[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (15))){
var inst_45393 = (state_45397[(2)]);
var state_45397__$1 = state_45397;
var statearr_45403_45436 = state_45397__$1;
(statearr_45403_45436[(2)] = inst_45393);

(statearr_45403_45436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (13))){
var inst_45386 = cljs.core.async.close_BANG_(out);
var state_45397__$1 = state_45397;
var statearr_45404_45437 = state_45397__$1;
(statearr_45404_45437[(2)] = inst_45386);

(statearr_45404_45437[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (6))){
var state_45397__$1 = state_45397;
var statearr_45405_45438 = state_45397__$1;
(statearr_45405_45438[(2)] = null);

(statearr_45405_45438[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (3))){
var inst_45395 = (state_45397[(2)]);
var state_45397__$1 = state_45397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45397__$1,inst_45395);
} else {
if((state_val_45398 === (12))){
var inst_45383 = (state_45397[(8)]);
var inst_45383__$1 = (state_45397[(2)]);
var inst_45384 = cljs.core.some(cljs.core.nil_QMARK_,inst_45383__$1);
var state_45397__$1 = (function (){var statearr_45406 = state_45397;
(statearr_45406[(8)] = inst_45383__$1);

return statearr_45406;
})();
if(cljs.core.truth_(inst_45384)){
var statearr_45407_45439 = state_45397__$1;
(statearr_45407_45439[(1)] = (13));

} else {
var statearr_45408_45440 = state_45397__$1;
(statearr_45408_45440[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (2))){
var inst_45360 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_45361 = (0);
var state_45397__$1 = (function (){var statearr_45409 = state_45397;
(statearr_45409[(7)] = inst_45361);

(statearr_45409[(9)] = inst_45360);

return statearr_45409;
})();
var statearr_45410_45441 = state_45397__$1;
(statearr_45410_45441[(2)] = null);

(statearr_45410_45441[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (11))){
var inst_45361 = (state_45397[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45397,(10),Object,null,(9));
var inst_45370 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45361) : chs__$1.call(null,inst_45361));
var inst_45371 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45361) : done.call(null,inst_45361));
var inst_45372 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45370,inst_45371);
var state_45397__$1 = state_45397;
var statearr_45411_45442 = state_45397__$1;
(statearr_45411_45442[(2)] = inst_45372);


cljs.core.async.impl.ioc_helpers.process_exception(state_45397__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (9))){
var inst_45361 = (state_45397[(7)]);
var inst_45374 = (state_45397[(2)]);
var inst_45375 = (inst_45361 + (1));
var inst_45361__$1 = inst_45375;
var state_45397__$1 = (function (){var statearr_45412 = state_45397;
(statearr_45412[(7)] = inst_45361__$1);

(statearr_45412[(10)] = inst_45374);

return statearr_45412;
})();
var statearr_45413_45443 = state_45397__$1;
(statearr_45413_45443[(2)] = null);

(statearr_45413_45443[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (5))){
var inst_45381 = (state_45397[(2)]);
var state_45397__$1 = (function (){var statearr_45414 = state_45397;
(statearr_45414[(11)] = inst_45381);

return statearr_45414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45397__$1,(12),dchan);
} else {
if((state_val_45398 === (14))){
var inst_45383 = (state_45397[(8)]);
var inst_45388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45383);
var state_45397__$1 = state_45397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45397__$1,(16),out,inst_45388);
} else {
if((state_val_45398 === (16))){
var inst_45390 = (state_45397[(2)]);
var state_45397__$1 = (function (){var statearr_45415 = state_45397;
(statearr_45415[(12)] = inst_45390);

return statearr_45415;
})();
var statearr_45416_45444 = state_45397__$1;
(statearr_45416_45444[(2)] = null);

(statearr_45416_45444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (10))){
var inst_45365 = (state_45397[(2)]);
var inst_45366 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45397__$1 = (function (){var statearr_45417 = state_45397;
(statearr_45417[(13)] = inst_45365);

return statearr_45417;
})();
var statearr_45418_45445 = state_45397__$1;
(statearr_45418_45445[(2)] = inst_45366);


cljs.core.async.impl.ioc_helpers.process_exception(state_45397__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_45398 === (8))){
var inst_45379 = (state_45397[(2)]);
var state_45397__$1 = state_45397;
var statearr_45419_45446 = state_45397__$1;
(statearr_45419_45446[(2)] = inst_45379);

(statearr_45419_45446[(1)] = (5));


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
});})(c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43223__auto__,c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45423[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45423[(1)] = (1));

return statearr_45423;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45397){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45397);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45424){if((e45424 instanceof Object)){
var ex__43227__auto__ = e45424;
var statearr_45425_45447 = state_45397;
(statearr_45425_45447[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45397);

return cljs.core.cst$kw$recur;
} else {
throw e45424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45448 = state_45397;
state_45397 = G__45448;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43351__auto__ = (function (){var statearr_45426 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45431);

return statearr_45426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45431,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args45450 = [];
var len__8723__auto___45508 = arguments.length;
var i__8724__auto___45509 = (0);
while(true){
if((i__8724__auto___45509 < len__8723__auto___45508)){
args45450.push((arguments[i__8724__auto___45509]));

var G__45510 = (i__8724__auto___45509 + (1));
i__8724__auto___45509 = G__45510;
continue;
} else {
}
break;
}

var G__45452 = args45450.length;
switch (G__45452) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45450.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___45512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45512,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45512,out){
return (function (state_45484){
var state_val_45485 = (state_45484[(1)]);
if((state_val_45485 === (7))){
var inst_45463 = (state_45484[(7)]);
var inst_45464 = (state_45484[(8)]);
var inst_45463__$1 = (state_45484[(2)]);
var inst_45464__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45463__$1,(0),null);
var inst_45465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45463__$1,(1),null);
var inst_45466 = (inst_45464__$1 == null);
var state_45484__$1 = (function (){var statearr_45486 = state_45484;
(statearr_45486[(7)] = inst_45463__$1);

(statearr_45486[(9)] = inst_45465);

(statearr_45486[(8)] = inst_45464__$1);

return statearr_45486;
})();
if(cljs.core.truth_(inst_45466)){
var statearr_45487_45513 = state_45484__$1;
(statearr_45487_45513[(1)] = (8));

} else {
var statearr_45488_45514 = state_45484__$1;
(statearr_45488_45514[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (1))){
var inst_45453 = cljs.core.vec(chs);
var inst_45454 = inst_45453;
var state_45484__$1 = (function (){var statearr_45489 = state_45484;
(statearr_45489[(10)] = inst_45454);

return statearr_45489;
})();
var statearr_45490_45515 = state_45484__$1;
(statearr_45490_45515[(2)] = null);

(statearr_45490_45515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (4))){
var inst_45454 = (state_45484[(10)]);
var state_45484__$1 = state_45484;
return cljs.core.async.ioc_alts_BANG_(state_45484__$1,(7),inst_45454);
} else {
if((state_val_45485 === (6))){
var inst_45480 = (state_45484[(2)]);
var state_45484__$1 = state_45484;
var statearr_45491_45516 = state_45484__$1;
(statearr_45491_45516[(2)] = inst_45480);

(statearr_45491_45516[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (3))){
var inst_45482 = (state_45484[(2)]);
var state_45484__$1 = state_45484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45484__$1,inst_45482);
} else {
if((state_val_45485 === (2))){
var inst_45454 = (state_45484[(10)]);
var inst_45456 = cljs.core.count(inst_45454);
var inst_45457 = (inst_45456 > (0));
var state_45484__$1 = state_45484;
if(cljs.core.truth_(inst_45457)){
var statearr_45493_45517 = state_45484__$1;
(statearr_45493_45517[(1)] = (4));

} else {
var statearr_45494_45518 = state_45484__$1;
(statearr_45494_45518[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (11))){
var inst_45454 = (state_45484[(10)]);
var inst_45473 = (state_45484[(2)]);
var tmp45492 = inst_45454;
var inst_45454__$1 = tmp45492;
var state_45484__$1 = (function (){var statearr_45495 = state_45484;
(statearr_45495[(11)] = inst_45473);

(statearr_45495[(10)] = inst_45454__$1);

return statearr_45495;
})();
var statearr_45496_45519 = state_45484__$1;
(statearr_45496_45519[(2)] = null);

(statearr_45496_45519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (9))){
var inst_45464 = (state_45484[(8)]);
var state_45484__$1 = state_45484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45484__$1,(11),out,inst_45464);
} else {
if((state_val_45485 === (5))){
var inst_45478 = cljs.core.async.close_BANG_(out);
var state_45484__$1 = state_45484;
var statearr_45497_45520 = state_45484__$1;
(statearr_45497_45520[(2)] = inst_45478);

(statearr_45497_45520[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (10))){
var inst_45476 = (state_45484[(2)]);
var state_45484__$1 = state_45484;
var statearr_45498_45521 = state_45484__$1;
(statearr_45498_45521[(2)] = inst_45476);

(statearr_45498_45521[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45485 === (8))){
var inst_45454 = (state_45484[(10)]);
var inst_45463 = (state_45484[(7)]);
var inst_45465 = (state_45484[(9)]);
var inst_45464 = (state_45484[(8)]);
var inst_45468 = (function (){var cs = inst_45454;
var vec__45459 = inst_45463;
var v = inst_45464;
var c = inst_45465;
return ((function (cs,vec__45459,v,c,inst_45454,inst_45463,inst_45465,inst_45464,state_val_45485,c__43349__auto___45512,out){
return (function (p1__45449_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45449_SHARP_);
});
;})(cs,vec__45459,v,c,inst_45454,inst_45463,inst_45465,inst_45464,state_val_45485,c__43349__auto___45512,out))
})();
var inst_45469 = cljs.core.filterv(inst_45468,inst_45454);
var inst_45454__$1 = inst_45469;
var state_45484__$1 = (function (){var statearr_45499 = state_45484;
(statearr_45499[(10)] = inst_45454__$1);

return statearr_45499;
})();
var statearr_45500_45522 = state_45484__$1;
(statearr_45500_45522[(2)] = null);

(statearr_45500_45522[(1)] = (2));


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
});})(c__43349__auto___45512,out))
;
return ((function (switch__43223__auto__,c__43349__auto___45512,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45504 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45504[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45504[(1)] = (1));

return statearr_45504;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45484){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45484);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45505){if((e45505 instanceof Object)){
var ex__43227__auto__ = e45505;
var statearr_45506_45523 = state_45484;
(statearr_45506_45523[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45484);

return cljs.core.cst$kw$recur;
} else {
throw e45505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45524 = state_45484;
state_45484 = G__45524;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45512,out))
})();
var state__43351__auto__ = (function (){var statearr_45507 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45512);

return statearr_45507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45512,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args45525 = [];
var len__8723__auto___45574 = arguments.length;
var i__8724__auto___45575 = (0);
while(true){
if((i__8724__auto___45575 < len__8723__auto___45574)){
args45525.push((arguments[i__8724__auto___45575]));

var G__45576 = (i__8724__auto___45575 + (1));
i__8724__auto___45575 = G__45576;
continue;
} else {
}
break;
}

var G__45527 = args45525.length;
switch (G__45527) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45525.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___45578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45578,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45578,out){
return (function (state_45551){
var state_val_45552 = (state_45551[(1)]);
if((state_val_45552 === (7))){
var inst_45533 = (state_45551[(7)]);
var inst_45533__$1 = (state_45551[(2)]);
var inst_45534 = (inst_45533__$1 == null);
var inst_45535 = cljs.core.not(inst_45534);
var state_45551__$1 = (function (){var statearr_45553 = state_45551;
(statearr_45553[(7)] = inst_45533__$1);

return statearr_45553;
})();
if(inst_45535){
var statearr_45554_45579 = state_45551__$1;
(statearr_45554_45579[(1)] = (8));

} else {
var statearr_45555_45580 = state_45551__$1;
(statearr_45555_45580[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (1))){
var inst_45528 = (0);
var state_45551__$1 = (function (){var statearr_45556 = state_45551;
(statearr_45556[(8)] = inst_45528);

return statearr_45556;
})();
var statearr_45557_45581 = state_45551__$1;
(statearr_45557_45581[(2)] = null);

(statearr_45557_45581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (4))){
var state_45551__$1 = state_45551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45551__$1,(7),ch);
} else {
if((state_val_45552 === (6))){
var inst_45546 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45558_45582 = state_45551__$1;
(statearr_45558_45582[(2)] = inst_45546);

(statearr_45558_45582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (3))){
var inst_45548 = (state_45551[(2)]);
var inst_45549 = cljs.core.async.close_BANG_(out);
var state_45551__$1 = (function (){var statearr_45559 = state_45551;
(statearr_45559[(9)] = inst_45548);

return statearr_45559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45551__$1,inst_45549);
} else {
if((state_val_45552 === (2))){
var inst_45528 = (state_45551[(8)]);
var inst_45530 = (inst_45528 < n);
var state_45551__$1 = state_45551;
if(cljs.core.truth_(inst_45530)){
var statearr_45560_45583 = state_45551__$1;
(statearr_45560_45583[(1)] = (4));

} else {
var statearr_45561_45584 = state_45551__$1;
(statearr_45561_45584[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (11))){
var inst_45528 = (state_45551[(8)]);
var inst_45538 = (state_45551[(2)]);
var inst_45539 = (inst_45528 + (1));
var inst_45528__$1 = inst_45539;
var state_45551__$1 = (function (){var statearr_45562 = state_45551;
(statearr_45562[(10)] = inst_45538);

(statearr_45562[(8)] = inst_45528__$1);

return statearr_45562;
})();
var statearr_45563_45585 = state_45551__$1;
(statearr_45563_45585[(2)] = null);

(statearr_45563_45585[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (9))){
var state_45551__$1 = state_45551;
var statearr_45564_45586 = state_45551__$1;
(statearr_45564_45586[(2)] = null);

(statearr_45564_45586[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (5))){
var state_45551__$1 = state_45551;
var statearr_45565_45587 = state_45551__$1;
(statearr_45565_45587[(2)] = null);

(statearr_45565_45587[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (10))){
var inst_45543 = (state_45551[(2)]);
var state_45551__$1 = state_45551;
var statearr_45566_45588 = state_45551__$1;
(statearr_45566_45588[(2)] = inst_45543);

(statearr_45566_45588[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45552 === (8))){
var inst_45533 = (state_45551[(7)]);
var state_45551__$1 = state_45551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45551__$1,(11),out,inst_45533);
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
});})(c__43349__auto___45578,out))
;
return ((function (switch__43223__auto__,c__43349__auto___45578,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45570[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45570[(1)] = (1));

return statearr_45570;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45551){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45551);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45571){if((e45571 instanceof Object)){
var ex__43227__auto__ = e45571;
var statearr_45572_45589 = state_45551;
(statearr_45572_45589[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45551);

return cljs.core.cst$kw$recur;
} else {
throw e45571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45590 = state_45551;
state_45551 = G__45590;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45578,out))
})();
var state__43351__auto__ = (function (){var statearr_45573 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45578);

return statearr_45573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45578,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45600 = (function (f,ch,meta45601){
this.f = f;
this.ch = ch;
this.meta45601 = meta45601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45602,meta45601__$1){
var self__ = this;
var _45602__$1 = this;
return (new cljs.core.async.t_cljs$core$async45600(self__.f,self__.ch,meta45601__$1));
});


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45602){
var self__ = this;
var _45602__$1 = this;
return self__.meta45601;
});


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45603 = (function (f,ch,meta45601,_,fn1,meta45604){
this.f = f;
this.ch = ch;
this.meta45601 = meta45601;
this._ = _;
this.fn1 = fn1;
this.meta45604 = meta45604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45605,meta45604__$1){
var self__ = this;
var _45605__$1 = this;
return (new cljs.core.async.t_cljs$core$async45603(self__.f,self__.ch,self__.meta45601,self__._,self__.fn1,meta45604__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45605){
var self__ = this;
var _45605__$1 = this;
return self__.meta45604;
});})(___$1))
;


cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async45603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45591_SHARP_){
var G__45606 = (((p1__45591_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45591_SHARP_) : self__.f.call(null,p1__45591_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45606) : f1.call(null,G__45606));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45603.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45601,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async45600], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta45604], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45603";

cljs.core.async.t_cljs$core$async45603.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async45603");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45603 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45603(f__$1,ch__$1,meta45601__$1,___$2,fn1__$1,meta45604){
return (new cljs.core.async.t_cljs$core$async45603(f__$1,ch__$1,meta45601__$1,___$2,fn1__$1,meta45604));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45603(self__.f,self__.ch,self__.meta45601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7490__auto__ = ret;
if(cljs.core.truth_(and__7490__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7490__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45607 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45607) : self__.f.call(null,G__45607));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45601], null);
});

cljs.core.async.t_cljs$core$async45600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45600";

cljs.core.async.t_cljs$core$async45600.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async45600");
});

cljs.core.async.__GT_t_cljs$core$async45600 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45600(f__$1,ch__$1,meta45601){
return (new cljs.core.async.t_cljs$core$async45600(f__$1,ch__$1,meta45601));
});

}

return (new cljs.core.async.t_cljs$core$async45600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45611 = (function (f,ch,meta45612){
this.f = f;
this.ch = ch;
this.meta45612 = meta45612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45613,meta45612__$1){
var self__ = this;
var _45613__$1 = this;
return (new cljs.core.async.t_cljs$core$async45611(self__.f,self__.ch,meta45612__$1));
});


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45613){
var self__ = this;
var _45613__$1 = this;
return self__.meta45612;
});


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async45611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45612], null);
});

cljs.core.async.t_cljs$core$async45611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45611";

cljs.core.async.t_cljs$core$async45611.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async45611");
});

cljs.core.async.__GT_t_cljs$core$async45611 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45611(f__$1,ch__$1,meta45612){
return (new cljs.core.async.t_cljs$core$async45611(f__$1,ch__$1,meta45612));
});

}

return (new cljs.core.async.t_cljs$core$async45611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45617 = (function (p,ch,meta45618){
this.p = p;
this.ch = ch;
this.meta45618 = meta45618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45619,meta45618__$1){
var self__ = this;
var _45619__$1 = this;
return (new cljs.core.async.t_cljs$core$async45617(self__.p,self__.ch,meta45618__$1));
});


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45619){
var self__ = this;
var _45619__$1 = this;
return self__.meta45618;
});


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async45617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45618], null);
});

cljs.core.async.t_cljs$core$async45617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45617";

cljs.core.async.t_cljs$core$async45617.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async45617");
});

cljs.core.async.__GT_t_cljs$core$async45617 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45617(p__$1,ch__$1,meta45618){
return (new cljs.core.async.t_cljs$core$async45617(p__$1,ch__$1,meta45618));
});

}

return (new cljs.core.async.t_cljs$core$async45617(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args45620 = [];
var len__8723__auto___45664 = arguments.length;
var i__8724__auto___45665 = (0);
while(true){
if((i__8724__auto___45665 < len__8723__auto___45664)){
args45620.push((arguments[i__8724__auto___45665]));

var G__45666 = (i__8724__auto___45665 + (1));
i__8724__auto___45665 = G__45666;
continue;
} else {
}
break;
}

var G__45622 = args45620.length;
switch (G__45622) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45620.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___45668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45668,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45668,out){
return (function (state_45643){
var state_val_45644 = (state_45643[(1)]);
if((state_val_45644 === (7))){
var inst_45639 = (state_45643[(2)]);
var state_45643__$1 = state_45643;
var statearr_45645_45669 = state_45643__$1;
(statearr_45645_45669[(2)] = inst_45639);

(statearr_45645_45669[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (1))){
var state_45643__$1 = state_45643;
var statearr_45646_45670 = state_45643__$1;
(statearr_45646_45670[(2)] = null);

(statearr_45646_45670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (4))){
var inst_45625 = (state_45643[(7)]);
var inst_45625__$1 = (state_45643[(2)]);
var inst_45626 = (inst_45625__$1 == null);
var state_45643__$1 = (function (){var statearr_45647 = state_45643;
(statearr_45647[(7)] = inst_45625__$1);

return statearr_45647;
})();
if(cljs.core.truth_(inst_45626)){
var statearr_45648_45671 = state_45643__$1;
(statearr_45648_45671[(1)] = (5));

} else {
var statearr_45649_45672 = state_45643__$1;
(statearr_45649_45672[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (6))){
var inst_45625 = (state_45643[(7)]);
var inst_45630 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45625) : p.call(null,inst_45625));
var state_45643__$1 = state_45643;
if(cljs.core.truth_(inst_45630)){
var statearr_45650_45673 = state_45643__$1;
(statearr_45650_45673[(1)] = (8));

} else {
var statearr_45651_45674 = state_45643__$1;
(statearr_45651_45674[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (3))){
var inst_45641 = (state_45643[(2)]);
var state_45643__$1 = state_45643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45643__$1,inst_45641);
} else {
if((state_val_45644 === (2))){
var state_45643__$1 = state_45643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45643__$1,(4),ch);
} else {
if((state_val_45644 === (11))){
var inst_45633 = (state_45643[(2)]);
var state_45643__$1 = state_45643;
var statearr_45652_45675 = state_45643__$1;
(statearr_45652_45675[(2)] = inst_45633);

(statearr_45652_45675[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (9))){
var state_45643__$1 = state_45643;
var statearr_45653_45676 = state_45643__$1;
(statearr_45653_45676[(2)] = null);

(statearr_45653_45676[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (5))){
var inst_45628 = cljs.core.async.close_BANG_(out);
var state_45643__$1 = state_45643;
var statearr_45654_45677 = state_45643__$1;
(statearr_45654_45677[(2)] = inst_45628);

(statearr_45654_45677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (10))){
var inst_45636 = (state_45643[(2)]);
var state_45643__$1 = (function (){var statearr_45655 = state_45643;
(statearr_45655[(8)] = inst_45636);

return statearr_45655;
})();
var statearr_45656_45678 = state_45643__$1;
(statearr_45656_45678[(2)] = null);

(statearr_45656_45678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45644 === (8))){
var inst_45625 = (state_45643[(7)]);
var state_45643__$1 = state_45643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45643__$1,(11),out,inst_45625);
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
});})(c__43349__auto___45668,out))
;
return ((function (switch__43223__auto__,c__43349__auto___45668,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45660 = [null,null,null,null,null,null,null,null,null];
(statearr_45660[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45660[(1)] = (1));

return statearr_45660;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45643){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45643);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45661){if((e45661 instanceof Object)){
var ex__43227__auto__ = e45661;
var statearr_45662_45679 = state_45643;
(statearr_45662_45679[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45643);

return cljs.core.cst$kw$recur;
} else {
throw e45661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45680 = state_45643;
state_45643 = G__45680;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45668,out))
})();
var state__43351__auto__ = (function (){var statearr_45663 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45668);

return statearr_45663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args45681 = [];
var len__8723__auto___45684 = arguments.length;
var i__8724__auto___45685 = (0);
while(true){
if((i__8724__auto___45685 < len__8723__auto___45684)){
args45681.push((arguments[i__8724__auto___45685]));

var G__45686 = (i__8724__auto___45685 + (1));
i__8724__auto___45685 = G__45686;
continue;
} else {
}
break;
}

var G__45683 = args45681.length;
switch (G__45683) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45681.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43349__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto__){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto__){
return (function (state_45853){
var state_val_45854 = (state_45853[(1)]);
if((state_val_45854 === (7))){
var inst_45849 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45855_45896 = state_45853__$1;
(statearr_45855_45896[(2)] = inst_45849);

(statearr_45855_45896[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (20))){
var inst_45819 = (state_45853[(7)]);
var inst_45830 = (state_45853[(2)]);
var inst_45831 = cljs.core.next(inst_45819);
var inst_45805 = inst_45831;
var inst_45806 = null;
var inst_45807 = (0);
var inst_45808 = (0);
var state_45853__$1 = (function (){var statearr_45856 = state_45853;
(statearr_45856[(8)] = inst_45830);

(statearr_45856[(9)] = inst_45806);

(statearr_45856[(10)] = inst_45807);

(statearr_45856[(11)] = inst_45805);

(statearr_45856[(12)] = inst_45808);

return statearr_45856;
})();
var statearr_45857_45897 = state_45853__$1;
(statearr_45857_45897[(2)] = null);

(statearr_45857_45897[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (1))){
var state_45853__$1 = state_45853;
var statearr_45858_45898 = state_45853__$1;
(statearr_45858_45898[(2)] = null);

(statearr_45858_45898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (4))){
var inst_45794 = (state_45853[(13)]);
var inst_45794__$1 = (state_45853[(2)]);
var inst_45795 = (inst_45794__$1 == null);
var state_45853__$1 = (function (){var statearr_45859 = state_45853;
(statearr_45859[(13)] = inst_45794__$1);

return statearr_45859;
})();
if(cljs.core.truth_(inst_45795)){
var statearr_45860_45899 = state_45853__$1;
(statearr_45860_45899[(1)] = (5));

} else {
var statearr_45861_45900 = state_45853__$1;
(statearr_45861_45900[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (15))){
var state_45853__$1 = state_45853;
var statearr_45865_45901 = state_45853__$1;
(statearr_45865_45901[(2)] = null);

(statearr_45865_45901[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (21))){
var state_45853__$1 = state_45853;
var statearr_45866_45902 = state_45853__$1;
(statearr_45866_45902[(2)] = null);

(statearr_45866_45902[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (13))){
var inst_45806 = (state_45853[(9)]);
var inst_45807 = (state_45853[(10)]);
var inst_45805 = (state_45853[(11)]);
var inst_45808 = (state_45853[(12)]);
var inst_45815 = (state_45853[(2)]);
var inst_45816 = (inst_45808 + (1));
var tmp45862 = inst_45806;
var tmp45863 = inst_45807;
var tmp45864 = inst_45805;
var inst_45805__$1 = tmp45864;
var inst_45806__$1 = tmp45862;
var inst_45807__$1 = tmp45863;
var inst_45808__$1 = inst_45816;
var state_45853__$1 = (function (){var statearr_45867 = state_45853;
(statearr_45867[(9)] = inst_45806__$1);

(statearr_45867[(10)] = inst_45807__$1);

(statearr_45867[(11)] = inst_45805__$1);

(statearr_45867[(14)] = inst_45815);

(statearr_45867[(12)] = inst_45808__$1);

return statearr_45867;
})();
var statearr_45868_45903 = state_45853__$1;
(statearr_45868_45903[(2)] = null);

(statearr_45868_45903[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (22))){
var state_45853__$1 = state_45853;
var statearr_45869_45904 = state_45853__$1;
(statearr_45869_45904[(2)] = null);

(statearr_45869_45904[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (6))){
var inst_45794 = (state_45853[(13)]);
var inst_45803 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45794) : f.call(null,inst_45794));
var inst_45804 = cljs.core.seq(inst_45803);
var inst_45805 = inst_45804;
var inst_45806 = null;
var inst_45807 = (0);
var inst_45808 = (0);
var state_45853__$1 = (function (){var statearr_45870 = state_45853;
(statearr_45870[(9)] = inst_45806);

(statearr_45870[(10)] = inst_45807);

(statearr_45870[(11)] = inst_45805);

(statearr_45870[(12)] = inst_45808);

return statearr_45870;
})();
var statearr_45871_45905 = state_45853__$1;
(statearr_45871_45905[(2)] = null);

(statearr_45871_45905[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (17))){
var inst_45819 = (state_45853[(7)]);
var inst_45823 = cljs.core.chunk_first(inst_45819);
var inst_45824 = cljs.core.chunk_rest(inst_45819);
var inst_45825 = cljs.core.count(inst_45823);
var inst_45805 = inst_45824;
var inst_45806 = inst_45823;
var inst_45807 = inst_45825;
var inst_45808 = (0);
var state_45853__$1 = (function (){var statearr_45872 = state_45853;
(statearr_45872[(9)] = inst_45806);

(statearr_45872[(10)] = inst_45807);

(statearr_45872[(11)] = inst_45805);

(statearr_45872[(12)] = inst_45808);

return statearr_45872;
})();
var statearr_45873_45906 = state_45853__$1;
(statearr_45873_45906[(2)] = null);

(statearr_45873_45906[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (3))){
var inst_45851 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45853__$1,inst_45851);
} else {
if((state_val_45854 === (12))){
var inst_45839 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45874_45907 = state_45853__$1;
(statearr_45874_45907[(2)] = inst_45839);

(statearr_45874_45907[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (2))){
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45853__$1,(4),in$);
} else {
if((state_val_45854 === (23))){
var inst_45847 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45875_45908 = state_45853__$1;
(statearr_45875_45908[(2)] = inst_45847);

(statearr_45875_45908[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (19))){
var inst_45834 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45876_45909 = state_45853__$1;
(statearr_45876_45909[(2)] = inst_45834);

(statearr_45876_45909[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (11))){
var inst_45819 = (state_45853[(7)]);
var inst_45805 = (state_45853[(11)]);
var inst_45819__$1 = cljs.core.seq(inst_45805);
var state_45853__$1 = (function (){var statearr_45877 = state_45853;
(statearr_45877[(7)] = inst_45819__$1);

return statearr_45877;
})();
if(inst_45819__$1){
var statearr_45878_45910 = state_45853__$1;
(statearr_45878_45910[(1)] = (14));

} else {
var statearr_45879_45911 = state_45853__$1;
(statearr_45879_45911[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (9))){
var inst_45841 = (state_45853[(2)]);
var inst_45842 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45853__$1 = (function (){var statearr_45880 = state_45853;
(statearr_45880[(15)] = inst_45841);

return statearr_45880;
})();
if(cljs.core.truth_(inst_45842)){
var statearr_45881_45912 = state_45853__$1;
(statearr_45881_45912[(1)] = (21));

} else {
var statearr_45882_45913 = state_45853__$1;
(statearr_45882_45913[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (5))){
var inst_45797 = cljs.core.async.close_BANG_(out);
var state_45853__$1 = state_45853;
var statearr_45883_45914 = state_45853__$1;
(statearr_45883_45914[(2)] = inst_45797);

(statearr_45883_45914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (14))){
var inst_45819 = (state_45853[(7)]);
var inst_45821 = cljs.core.chunked_seq_QMARK_(inst_45819);
var state_45853__$1 = state_45853;
if(inst_45821){
var statearr_45884_45915 = state_45853__$1;
(statearr_45884_45915[(1)] = (17));

} else {
var statearr_45885_45916 = state_45853__$1;
(statearr_45885_45916[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (16))){
var inst_45837 = (state_45853[(2)]);
var state_45853__$1 = state_45853;
var statearr_45886_45917 = state_45853__$1;
(statearr_45886_45917[(2)] = inst_45837);

(statearr_45886_45917[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45854 === (10))){
var inst_45806 = (state_45853[(9)]);
var inst_45808 = (state_45853[(12)]);
var inst_45813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45806,inst_45808);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45853__$1,(13),out,inst_45813);
} else {
if((state_val_45854 === (18))){
var inst_45819 = (state_45853[(7)]);
var inst_45828 = cljs.core.first(inst_45819);
var state_45853__$1 = state_45853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45853__$1,(20),out,inst_45828);
} else {
if((state_val_45854 === (8))){
var inst_45807 = (state_45853[(10)]);
var inst_45808 = (state_45853[(12)]);
var inst_45810 = (inst_45808 < inst_45807);
var inst_45811 = inst_45810;
var state_45853__$1 = state_45853;
if(cljs.core.truth_(inst_45811)){
var statearr_45887_45918 = state_45853__$1;
(statearr_45887_45918[(1)] = (10));

} else {
var statearr_45888_45919 = state_45853__$1;
(statearr_45888_45919[(1)] = (11));

}

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
});})(c__43349__auto__))
;
return ((function (switch__43223__auto__,c__43349__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0 = (function (){
var statearr_45892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45892[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__);

(statearr_45892[(1)] = (1));

return statearr_45892;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1 = (function (state_45853){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45853);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45893){if((e45893 instanceof Object)){
var ex__43227__auto__ = e45893;
var statearr_45894_45920 = state_45853;
(statearr_45894_45920[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45853);

return cljs.core.cst$kw$recur;
} else {
throw e45893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__45921 = state_45853;
state_45853 = G__45921;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__ = function(state_45853){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1.call(this,state_45853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43224__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto__))
})();
var state__43351__auto__ = (function (){var statearr_45895 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto__);

return statearr_45895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto__))
);

return c__43349__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args45922 = [];
var len__8723__auto___45925 = arguments.length;
var i__8724__auto___45926 = (0);
while(true){
if((i__8724__auto___45926 < len__8723__auto___45925)){
args45922.push((arguments[i__8724__auto___45926]));

var G__45927 = (i__8724__auto___45926 + (1));
i__8724__auto___45926 = G__45927;
continue;
} else {
}
break;
}

var G__45924 = args45922.length;
switch (G__45924) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45922.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args45929 = [];
var len__8723__auto___45932 = arguments.length;
var i__8724__auto___45933 = (0);
while(true){
if((i__8724__auto___45933 < len__8723__auto___45932)){
args45929.push((arguments[i__8724__auto___45933]));

var G__45934 = (i__8724__auto___45933 + (1));
i__8724__auto___45933 = G__45934;
continue;
} else {
}
break;
}

var G__45931 = args45929.length;
switch (G__45931) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45929.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args45936 = [];
var len__8723__auto___45987 = arguments.length;
var i__8724__auto___45988 = (0);
while(true){
if((i__8724__auto___45988 < len__8723__auto___45987)){
args45936.push((arguments[i__8724__auto___45988]));

var G__45989 = (i__8724__auto___45988 + (1));
i__8724__auto___45988 = G__45989;
continue;
} else {
}
break;
}

var G__45938 = args45936.length;
switch (G__45938) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45936.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___45991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___45991,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___45991,out){
return (function (state_45962){
var state_val_45963 = (state_45962[(1)]);
if((state_val_45963 === (7))){
var inst_45957 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45964_45992 = state_45962__$1;
(statearr_45964_45992[(2)] = inst_45957);

(statearr_45964_45992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (1))){
var inst_45939 = null;
var state_45962__$1 = (function (){var statearr_45965 = state_45962;
(statearr_45965[(7)] = inst_45939);

return statearr_45965;
})();
var statearr_45966_45993 = state_45962__$1;
(statearr_45966_45993[(2)] = null);

(statearr_45966_45993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (4))){
var inst_45942 = (state_45962[(8)]);
var inst_45942__$1 = (state_45962[(2)]);
var inst_45943 = (inst_45942__$1 == null);
var inst_45944 = cljs.core.not(inst_45943);
var state_45962__$1 = (function (){var statearr_45967 = state_45962;
(statearr_45967[(8)] = inst_45942__$1);

return statearr_45967;
})();
if(inst_45944){
var statearr_45968_45994 = state_45962__$1;
(statearr_45968_45994[(1)] = (5));

} else {
var statearr_45969_45995 = state_45962__$1;
(statearr_45969_45995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (6))){
var state_45962__$1 = state_45962;
var statearr_45970_45996 = state_45962__$1;
(statearr_45970_45996[(2)] = null);

(statearr_45970_45996[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (3))){
var inst_45959 = (state_45962[(2)]);
var inst_45960 = cljs.core.async.close_BANG_(out);
var state_45962__$1 = (function (){var statearr_45971 = state_45962;
(statearr_45971[(9)] = inst_45959);

return statearr_45971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45962__$1,inst_45960);
} else {
if((state_val_45963 === (2))){
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45962__$1,(4),ch);
} else {
if((state_val_45963 === (11))){
var inst_45942 = (state_45962[(8)]);
var inst_45951 = (state_45962[(2)]);
var inst_45939 = inst_45942;
var state_45962__$1 = (function (){var statearr_45972 = state_45962;
(statearr_45972[(10)] = inst_45951);

(statearr_45972[(7)] = inst_45939);

return statearr_45972;
})();
var statearr_45973_45997 = state_45962__$1;
(statearr_45973_45997[(2)] = null);

(statearr_45973_45997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (9))){
var inst_45942 = (state_45962[(8)]);
var state_45962__$1 = state_45962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45962__$1,(11),out,inst_45942);
} else {
if((state_val_45963 === (5))){
var inst_45939 = (state_45962[(7)]);
var inst_45942 = (state_45962[(8)]);
var inst_45946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45942,inst_45939);
var state_45962__$1 = state_45962;
if(inst_45946){
var statearr_45975_45998 = state_45962__$1;
(statearr_45975_45998[(1)] = (8));

} else {
var statearr_45976_45999 = state_45962__$1;
(statearr_45976_45999[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (10))){
var inst_45954 = (state_45962[(2)]);
var state_45962__$1 = state_45962;
var statearr_45977_46000 = state_45962__$1;
(statearr_45977_46000[(2)] = inst_45954);

(statearr_45977_46000[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45963 === (8))){
var inst_45939 = (state_45962[(7)]);
var tmp45974 = inst_45939;
var inst_45939__$1 = tmp45974;
var state_45962__$1 = (function (){var statearr_45978 = state_45962;
(statearr_45978[(7)] = inst_45939__$1);

return statearr_45978;
})();
var statearr_45979_46001 = state_45962__$1;
(statearr_45979_46001[(2)] = null);

(statearr_45979_46001[(1)] = (2));


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
});})(c__43349__auto___45991,out))
;
return ((function (switch__43223__auto__,c__43349__auto___45991,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_45983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45983[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_45983[(1)] = (1));

return statearr_45983;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_45962){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_45962);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e45984){if((e45984 instanceof Object)){
var ex__43227__auto__ = e45984;
var statearr_45985_46002 = state_45962;
(statearr_45985_46002[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45962);

return cljs.core.cst$kw$recur;
} else {
throw e45984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__46003 = state_45962;
state_45962 = G__46003;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_45962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_45962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___45991,out))
})();
var state__43351__auto__ = (function (){var statearr_45986 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_45986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___45991);

return statearr_45986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___45991,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46004 = [];
var len__8723__auto___46074 = arguments.length;
var i__8724__auto___46075 = (0);
while(true){
if((i__8724__auto___46075 < len__8723__auto___46074)){
args46004.push((arguments[i__8724__auto___46075]));

var G__46076 = (i__8724__auto___46075 + (1));
i__8724__auto___46075 = G__46076;
continue;
} else {
}
break;
}

var G__46006 = args46004.length;
switch (G__46006) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46004.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___46078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___46078,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___46078,out){
return (function (state_46044){
var state_val_46045 = (state_46044[(1)]);
if((state_val_46045 === (7))){
var inst_46040 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
var statearr_46046_46079 = state_46044__$1;
(statearr_46046_46079[(2)] = inst_46040);

(statearr_46046_46079[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (1))){
var inst_46007 = (new Array(n));
var inst_46008 = inst_46007;
var inst_46009 = (0);
var state_46044__$1 = (function (){var statearr_46047 = state_46044;
(statearr_46047[(7)] = inst_46008);

(statearr_46047[(8)] = inst_46009);

return statearr_46047;
})();
var statearr_46048_46080 = state_46044__$1;
(statearr_46048_46080[(2)] = null);

(statearr_46048_46080[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (4))){
var inst_46012 = (state_46044[(9)]);
var inst_46012__$1 = (state_46044[(2)]);
var inst_46013 = (inst_46012__$1 == null);
var inst_46014 = cljs.core.not(inst_46013);
var state_46044__$1 = (function (){var statearr_46049 = state_46044;
(statearr_46049[(9)] = inst_46012__$1);

return statearr_46049;
})();
if(inst_46014){
var statearr_46050_46081 = state_46044__$1;
(statearr_46050_46081[(1)] = (5));

} else {
var statearr_46051_46082 = state_46044__$1;
(statearr_46051_46082[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (15))){
var inst_46034 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
var statearr_46052_46083 = state_46044__$1;
(statearr_46052_46083[(2)] = inst_46034);

(statearr_46052_46083[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (13))){
var state_46044__$1 = state_46044;
var statearr_46053_46084 = state_46044__$1;
(statearr_46053_46084[(2)] = null);

(statearr_46053_46084[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (6))){
var inst_46009 = (state_46044[(8)]);
var inst_46030 = (inst_46009 > (0));
var state_46044__$1 = state_46044;
if(cljs.core.truth_(inst_46030)){
var statearr_46054_46085 = state_46044__$1;
(statearr_46054_46085[(1)] = (12));

} else {
var statearr_46055_46086 = state_46044__$1;
(statearr_46055_46086[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (3))){
var inst_46042 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46044__$1,inst_46042);
} else {
if((state_val_46045 === (12))){
var inst_46008 = (state_46044[(7)]);
var inst_46032 = cljs.core.vec(inst_46008);
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46044__$1,(15),out,inst_46032);
} else {
if((state_val_46045 === (2))){
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46044__$1,(4),ch);
} else {
if((state_val_46045 === (11))){
var inst_46024 = (state_46044[(2)]);
var inst_46025 = (new Array(n));
var inst_46008 = inst_46025;
var inst_46009 = (0);
var state_46044__$1 = (function (){var statearr_46056 = state_46044;
(statearr_46056[(10)] = inst_46024);

(statearr_46056[(7)] = inst_46008);

(statearr_46056[(8)] = inst_46009);

return statearr_46056;
})();
var statearr_46057_46087 = state_46044__$1;
(statearr_46057_46087[(2)] = null);

(statearr_46057_46087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (9))){
var inst_46008 = (state_46044[(7)]);
var inst_46022 = cljs.core.vec(inst_46008);
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46044__$1,(11),out,inst_46022);
} else {
if((state_val_46045 === (5))){
var inst_46008 = (state_46044[(7)]);
var inst_46009 = (state_46044[(8)]);
var inst_46017 = (state_46044[(11)]);
var inst_46012 = (state_46044[(9)]);
var inst_46016 = (inst_46008[inst_46009] = inst_46012);
var inst_46017__$1 = (inst_46009 + (1));
var inst_46018 = (inst_46017__$1 < n);
var state_46044__$1 = (function (){var statearr_46058 = state_46044;
(statearr_46058[(12)] = inst_46016);

(statearr_46058[(11)] = inst_46017__$1);

return statearr_46058;
})();
if(cljs.core.truth_(inst_46018)){
var statearr_46059_46088 = state_46044__$1;
(statearr_46059_46088[(1)] = (8));

} else {
var statearr_46060_46089 = state_46044__$1;
(statearr_46060_46089[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (14))){
var inst_46037 = (state_46044[(2)]);
var inst_46038 = cljs.core.async.close_BANG_(out);
var state_46044__$1 = (function (){var statearr_46062 = state_46044;
(statearr_46062[(13)] = inst_46037);

return statearr_46062;
})();
var statearr_46063_46090 = state_46044__$1;
(statearr_46063_46090[(2)] = inst_46038);

(statearr_46063_46090[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (10))){
var inst_46028 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
var statearr_46064_46091 = state_46044__$1;
(statearr_46064_46091[(2)] = inst_46028);

(statearr_46064_46091[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46045 === (8))){
var inst_46008 = (state_46044[(7)]);
var inst_46017 = (state_46044[(11)]);
var tmp46061 = inst_46008;
var inst_46008__$1 = tmp46061;
var inst_46009 = inst_46017;
var state_46044__$1 = (function (){var statearr_46065 = state_46044;
(statearr_46065[(7)] = inst_46008__$1);

(statearr_46065[(8)] = inst_46009);

return statearr_46065;
})();
var statearr_46066_46092 = state_46044__$1;
(statearr_46066_46092[(2)] = null);

(statearr_46066_46092[(1)] = (2));


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
});})(c__43349__auto___46078,out))
;
return ((function (switch__43223__auto__,c__43349__auto___46078,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_46070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46070[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_46070[(1)] = (1));

return statearr_46070;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_46044){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46044);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46071){if((e46071 instanceof Object)){
var ex__43227__auto__ = e46071;
var statearr_46072_46093 = state_46044;
(statearr_46072_46093[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46044);

return cljs.core.cst$kw$recur;
} else {
throw e46071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__46094 = state_46044;
state_46044 = G__46094;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_46044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_46044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___46078,out))
})();
var state__43351__auto__ = (function (){var statearr_46073 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_46073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___46078);

return statearr_46073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___46078,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46095 = [];
var len__8723__auto___46169 = arguments.length;
var i__8724__auto___46170 = (0);
while(true){
if((i__8724__auto___46170 < len__8723__auto___46169)){
args46095.push((arguments[i__8724__auto___46170]));

var G__46171 = (i__8724__auto___46170 + (1));
i__8724__auto___46170 = G__46171;
continue;
} else {
}
break;
}

var G__46097 = args46095.length;
switch (G__46097) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46095.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43349__auto___46173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43349__auto___46173,out){
return (function (){
var f__43350__auto__ = (function (){var switch__43223__auto__ = ((function (c__43349__auto___46173,out){
return (function (state_46139){
var state_val_46140 = (state_46139[(1)]);
if((state_val_46140 === (7))){
var inst_46135 = (state_46139[(2)]);
var state_46139__$1 = state_46139;
var statearr_46141_46174 = state_46139__$1;
(statearr_46141_46174[(2)] = inst_46135);

(statearr_46141_46174[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (1))){
var inst_46098 = [];
var inst_46099 = inst_46098;
var inst_46100 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_46139__$1 = (function (){var statearr_46142 = state_46139;
(statearr_46142[(7)] = inst_46100);

(statearr_46142[(8)] = inst_46099);

return statearr_46142;
})();
var statearr_46143_46175 = state_46139__$1;
(statearr_46143_46175[(2)] = null);

(statearr_46143_46175[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (4))){
var inst_46103 = (state_46139[(9)]);
var inst_46103__$1 = (state_46139[(2)]);
var inst_46104 = (inst_46103__$1 == null);
var inst_46105 = cljs.core.not(inst_46104);
var state_46139__$1 = (function (){var statearr_46144 = state_46139;
(statearr_46144[(9)] = inst_46103__$1);

return statearr_46144;
})();
if(inst_46105){
var statearr_46145_46176 = state_46139__$1;
(statearr_46145_46176[(1)] = (5));

} else {
var statearr_46146_46177 = state_46139__$1;
(statearr_46146_46177[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (15))){
var inst_46129 = (state_46139[(2)]);
var state_46139__$1 = state_46139;
var statearr_46147_46178 = state_46139__$1;
(statearr_46147_46178[(2)] = inst_46129);

(statearr_46147_46178[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (13))){
var state_46139__$1 = state_46139;
var statearr_46148_46179 = state_46139__$1;
(statearr_46148_46179[(2)] = null);

(statearr_46148_46179[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (6))){
var inst_46099 = (state_46139[(8)]);
var inst_46124 = inst_46099.length;
var inst_46125 = (inst_46124 > (0));
var state_46139__$1 = state_46139;
if(cljs.core.truth_(inst_46125)){
var statearr_46149_46180 = state_46139__$1;
(statearr_46149_46180[(1)] = (12));

} else {
var statearr_46150_46181 = state_46139__$1;
(statearr_46150_46181[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (3))){
var inst_46137 = (state_46139[(2)]);
var state_46139__$1 = state_46139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46139__$1,inst_46137);
} else {
if((state_val_46140 === (12))){
var inst_46099 = (state_46139[(8)]);
var inst_46127 = cljs.core.vec(inst_46099);
var state_46139__$1 = state_46139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46139__$1,(15),out,inst_46127);
} else {
if((state_val_46140 === (2))){
var state_46139__$1 = state_46139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46139__$1,(4),ch);
} else {
if((state_val_46140 === (11))){
var inst_46107 = (state_46139[(10)]);
var inst_46103 = (state_46139[(9)]);
var inst_46117 = (state_46139[(2)]);
var inst_46118 = [];
var inst_46119 = inst_46118.push(inst_46103);
var inst_46099 = inst_46118;
var inst_46100 = inst_46107;
var state_46139__$1 = (function (){var statearr_46151 = state_46139;
(statearr_46151[(7)] = inst_46100);

(statearr_46151[(11)] = inst_46119);

(statearr_46151[(8)] = inst_46099);

(statearr_46151[(12)] = inst_46117);

return statearr_46151;
})();
var statearr_46152_46182 = state_46139__$1;
(statearr_46152_46182[(2)] = null);

(statearr_46152_46182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (9))){
var inst_46099 = (state_46139[(8)]);
var inst_46115 = cljs.core.vec(inst_46099);
var state_46139__$1 = state_46139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46139__$1,(11),out,inst_46115);
} else {
if((state_val_46140 === (5))){
var inst_46100 = (state_46139[(7)]);
var inst_46107 = (state_46139[(10)]);
var inst_46103 = (state_46139[(9)]);
var inst_46107__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46103) : f.call(null,inst_46103));
var inst_46108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46107__$1,inst_46100);
var inst_46109 = cljs.core.keyword_identical_QMARK_(inst_46100,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_46110 = (inst_46108) || (inst_46109);
var state_46139__$1 = (function (){var statearr_46153 = state_46139;
(statearr_46153[(10)] = inst_46107__$1);

return statearr_46153;
})();
if(cljs.core.truth_(inst_46110)){
var statearr_46154_46183 = state_46139__$1;
(statearr_46154_46183[(1)] = (8));

} else {
var statearr_46155_46184 = state_46139__$1;
(statearr_46155_46184[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (14))){
var inst_46132 = (state_46139[(2)]);
var inst_46133 = cljs.core.async.close_BANG_(out);
var state_46139__$1 = (function (){var statearr_46157 = state_46139;
(statearr_46157[(13)] = inst_46132);

return statearr_46157;
})();
var statearr_46158_46185 = state_46139__$1;
(statearr_46158_46185[(2)] = inst_46133);

(statearr_46158_46185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (10))){
var inst_46122 = (state_46139[(2)]);
var state_46139__$1 = state_46139;
var statearr_46159_46186 = state_46139__$1;
(statearr_46159_46186[(2)] = inst_46122);

(statearr_46159_46186[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_46140 === (8))){
var inst_46107 = (state_46139[(10)]);
var inst_46103 = (state_46139[(9)]);
var inst_46099 = (state_46139[(8)]);
var inst_46112 = inst_46099.push(inst_46103);
var tmp46156 = inst_46099;
var inst_46099__$1 = tmp46156;
var inst_46100 = inst_46107;
var state_46139__$1 = (function (){var statearr_46160 = state_46139;
(statearr_46160[(7)] = inst_46100);

(statearr_46160[(14)] = inst_46112);

(statearr_46160[(8)] = inst_46099__$1);

return statearr_46160;
})();
var statearr_46161_46187 = state_46139__$1;
(statearr_46161_46187[(2)] = null);

(statearr_46161_46187[(1)] = (2));


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
});})(c__43349__auto___46173,out))
;
return ((function (switch__43223__auto__,c__43349__auto___46173,out){
return (function() {
var cljs$core$async$state_machine__43224__auto__ = null;
var cljs$core$async$state_machine__43224__auto____0 = (function (){
var statearr_46165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46165[(0)] = cljs$core$async$state_machine__43224__auto__);

(statearr_46165[(1)] = (1));

return statearr_46165;
});
var cljs$core$async$state_machine__43224__auto____1 = (function (state_46139){
while(true){
var ret_value__43225__auto__ = (function (){try{while(true){
var result__43226__auto__ = switch__43223__auto__(state_46139);
if(cljs.core.keyword_identical_QMARK_(result__43226__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__43226__auto__;
}
break;
}
}catch (e46166){if((e46166 instanceof Object)){
var ex__43227__auto__ = e46166;
var statearr_46167_46188 = state_46139;
(statearr_46167_46188[(5)] = ex__43227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46139);

return cljs.core.cst$kw$recur;
} else {
throw e46166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43225__auto__,cljs.core.cst$kw$recur)){
var G__46189 = state_46139;
state_46139 = G__46189;
continue;
} else {
return ret_value__43225__auto__;
}
break;
}
});
cljs$core$async$state_machine__43224__auto__ = function(state_46139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43224__auto____1.call(this,state_46139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43224__auto____0;
cljs$core$async$state_machine__43224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43224__auto____1;
return cljs$core$async$state_machine__43224__auto__;
})()
;})(switch__43223__auto__,c__43349__auto___46173,out))
})();
var state__43351__auto__ = (function (){var statearr_46168 = (f__43350__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43350__auto__.cljs$core$IFn$_invoke$arity$0() : f__43350__auto__.call(null));
(statearr_46168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43349__auto___46173);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43351__auto__);
});})(c__43349__auto___46173,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


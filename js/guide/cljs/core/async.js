// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args697339 = [];
var len__28871__auto___697351 = arguments.length;
var i__28872__auto___697352 = (0);
while(true){
if((i__28872__auto___697352 < len__28871__auto___697351)){
args697339.push((arguments[i__28872__auto___697352]));

var G__697353 = (i__28872__auto___697352 + (1));
i__28872__auto___697352 = G__697353;
continue;
} else {
}
break;
}

var G__697347 = args697339.length;
switch (G__697347) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697339.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async697348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async697348 = (function (f,blockable,meta697349){
this.f = f;
this.blockable = blockable;
this.meta697349 = meta697349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_697350,meta697349__$1){
var self__ = this;
var _697350__$1 = this;
return (new cljs.core.async.t_cljs$core$async697348(self__.f,self__.blockable,meta697349__$1));
});


cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_697350){
var self__ = this;
var _697350__$1 = this;
return self__.meta697349;
});


cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async697348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async697348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta697349","meta697349",665500287,null)], null);
});

cljs.core.async.t_cljs$core$async697348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async697348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async697348";

cljs.core.async.t_cljs$core$async697348.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async697348");
});

cljs.core.async.__GT_t_cljs$core$async697348 = (function cljs$core$async$__GT_t_cljs$core$async697348(f__$1,blockable__$1,meta697349){
return (new cljs.core.async.t_cljs$core$async697348(f__$1,blockable__$1,meta697349));
});

}

return (new cljs.core.async.t_cljs$core$async697348(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args697367 = [];
var len__28871__auto___697377 = arguments.length;
var i__28872__auto___697378 = (0);
while(true){
if((i__28872__auto___697378 < len__28871__auto___697377)){
args697367.push((arguments[i__28872__auto___697378]));

var G__697379 = (i__28872__auto___697378 + (1));
i__28872__auto___697378 = G__697379;
continue;
} else {
}
break;
}

var G__697376 = args697367.length;
switch (G__697376) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697367.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args697431 = [];
var len__28871__auto___697434 = arguments.length;
var i__28872__auto___697435 = (0);
while(true){
if((i__28872__auto___697435 < len__28871__auto___697434)){
args697431.push((arguments[i__28872__auto___697435]));

var G__697436 = (i__28872__auto___697435 + (1));
i__28872__auto___697435 = G__697436;
continue;
} else {
}
break;
}

var G__697433 = args697431.length;
switch (G__697433) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697431.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args697445 = [];
var len__28871__auto___697455 = arguments.length;
var i__28872__auto___697456 = (0);
while(true){
if((i__28872__auto___697456 < len__28871__auto___697455)){
args697445.push((arguments[i__28872__auto___697456]));

var G__697457 = (i__28872__auto___697456 + (1));
i__28872__auto___697456 = G__697457;
continue;
} else {
}
break;
}

var G__697454 = args697445.length;
switch (G__697454) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697445.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_697459 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_697459);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_697459,ret){
return (function (){
return fn1.call(null,val_697459);
});})(val_697459,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args697460 = [];
var len__28871__auto___697463 = arguments.length;
var i__28872__auto___697464 = (0);
while(true){
if((i__28872__auto___697464 < len__28871__auto___697463)){
args697460.push((arguments[i__28872__auto___697464]));

var G__697465 = (i__28872__auto___697464 + (1));
i__28872__auto___697464 = G__697465;
continue;
} else {
}
break;
}

var G__697462 = args697460.length;
switch (G__697462) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697460.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28671__auto___697467 = n;
var x_697468 = (0);
while(true){
if((x_697468 < n__28671__auto___697467)){
(a[x_697468] = (0));

var G__697469 = (x_697468 + (1));
x_697468 = G__697469;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__697470 = (i + (1));
i = G__697470;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async697474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async697474 = (function (flag,meta697475){
this.flag = flag;
this.meta697475 = meta697475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_697476,meta697475__$1){
var self__ = this;
var _697476__$1 = this;
return (new cljs.core.async.t_cljs$core$async697474(self__.flag,meta697475__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_697476){
var self__ = this;
var _697476__$1 = this;
return self__.meta697475;
});})(flag))
;


cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async697474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async697474.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta697475","meta697475",2020562812,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async697474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async697474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async697474";

cljs.core.async.t_cljs$core$async697474.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async697474");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async697474 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async697474(flag__$1,meta697475){
return (new cljs.core.async.t_cljs$core$async697474(flag__$1,meta697475));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async697474(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async697480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async697480 = (function (flag,cb,meta697481){
this.flag = flag;
this.cb = cb;
this.meta697481 = meta697481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_697482,meta697481__$1){
var self__ = this;
var _697482__$1 = this;
return (new cljs.core.async.t_cljs$core$async697480(self__.flag,self__.cb,meta697481__$1));
});


cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_697482){
var self__ = this;
var _697482__$1 = this;
return self__.meta697481;
});


cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async697480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async697480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta697481","meta697481",464072009,null)], null);
});

cljs.core.async.t_cljs$core$async697480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async697480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async697480";

cljs.core.async.t_cljs$core$async697480.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async697480");
});

cljs.core.async.__GT_t_cljs$core$async697480 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async697480(flag__$1,cb__$1,meta697481){
return (new cljs.core.async.t_cljs$core$async697480(flag__$1,cb__$1,meta697481));
});

}

return (new cljs.core.async.t_cljs$core$async697480(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__697483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__697483_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__697484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__697484_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27650__auto__ = wport;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return port;
}
})()], null));
} else {
var G__697485 = (i + (1));
i = G__697485;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27650__auto__ = ret;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__27638__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__28878__auto__ = [];
var len__28871__auto___697491 = arguments.length;
var i__28872__auto___697492 = (0);
while(true){
if((i__28872__auto___697492 < len__28871__auto___697491)){
args__28878__auto__.push((arguments[i__28872__auto___697492]));

var G__697493 = (i__28872__auto___697492 + (1));
i__28872__auto___697492 = G__697493;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__697488){
var map__697489 = p__697488;
var map__697489__$1 = ((((!((map__697489 == null)))?((((map__697489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__697489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__697489):map__697489);
var opts = map__697489__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq697486){
var G__697487 = cljs.core.first.call(null,seq697486);
var seq697486__$1 = cljs.core.next.call(null,seq697486);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__697487,seq697486__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args697494 = [];
var len__28871__auto___697544 = arguments.length;
var i__28872__auto___697545 = (0);
while(true){
if((i__28872__auto___697545 < len__28871__auto___697544)){
args697494.push((arguments[i__28872__auto___697545]));

var G__697546 = (i__28872__auto___697545 + (1));
i__28872__auto___697545 = G__697546;
continue;
} else {
}
break;
}

var G__697496 = args697494.length;
switch (G__697496) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697494.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32882__auto___697548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___697548){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___697548){
return (function (state_697520){
var state_val_697521 = (state_697520[(1)]);
if((state_val_697521 === (7))){
var inst_697516 = (state_697520[(2)]);
var state_697520__$1 = state_697520;
var statearr_697522_697549 = state_697520__$1;
(statearr_697522_697549[(2)] = inst_697516);

(statearr_697522_697549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (1))){
var state_697520__$1 = state_697520;
var statearr_697523_697550 = state_697520__$1;
(statearr_697523_697550[(2)] = null);

(statearr_697523_697550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (4))){
var inst_697499 = (state_697520[(7)]);
var inst_697499__$1 = (state_697520[(2)]);
var inst_697500 = (inst_697499__$1 == null);
var state_697520__$1 = (function (){var statearr_697524 = state_697520;
(statearr_697524[(7)] = inst_697499__$1);

return statearr_697524;
})();
if(cljs.core.truth_(inst_697500)){
var statearr_697525_697551 = state_697520__$1;
(statearr_697525_697551[(1)] = (5));

} else {
var statearr_697526_697552 = state_697520__$1;
(statearr_697526_697552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (13))){
var state_697520__$1 = state_697520;
var statearr_697527_697553 = state_697520__$1;
(statearr_697527_697553[(2)] = null);

(statearr_697527_697553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (6))){
var inst_697499 = (state_697520[(7)]);
var state_697520__$1 = state_697520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_697520__$1,(11),to,inst_697499);
} else {
if((state_val_697521 === (3))){
var inst_697518 = (state_697520[(2)]);
var state_697520__$1 = state_697520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697520__$1,inst_697518);
} else {
if((state_val_697521 === (12))){
var state_697520__$1 = state_697520;
var statearr_697528_697554 = state_697520__$1;
(statearr_697528_697554[(2)] = null);

(statearr_697528_697554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (2))){
var state_697520__$1 = state_697520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697520__$1,(4),from);
} else {
if((state_val_697521 === (11))){
var inst_697509 = (state_697520[(2)]);
var state_697520__$1 = state_697520;
if(cljs.core.truth_(inst_697509)){
var statearr_697529_697555 = state_697520__$1;
(statearr_697529_697555[(1)] = (12));

} else {
var statearr_697530_697556 = state_697520__$1;
(statearr_697530_697556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (9))){
var state_697520__$1 = state_697520;
var statearr_697531_697557 = state_697520__$1;
(statearr_697531_697557[(2)] = null);

(statearr_697531_697557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (5))){
var state_697520__$1 = state_697520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_697532_697558 = state_697520__$1;
(statearr_697532_697558[(1)] = (8));

} else {
var statearr_697533_697559 = state_697520__$1;
(statearr_697533_697559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (14))){
var inst_697514 = (state_697520[(2)]);
var state_697520__$1 = state_697520;
var statearr_697534_697560 = state_697520__$1;
(statearr_697534_697560[(2)] = inst_697514);

(statearr_697534_697560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (10))){
var inst_697506 = (state_697520[(2)]);
var state_697520__$1 = state_697520;
var statearr_697535_697561 = state_697520__$1;
(statearr_697535_697561[(2)] = inst_697506);

(statearr_697535_697561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697521 === (8))){
var inst_697503 = cljs.core.async.close_BANG_.call(null,to);
var state_697520__$1 = state_697520;
var statearr_697536_697562 = state_697520__$1;
(statearr_697536_697562[(2)] = inst_697503);

(statearr_697536_697562[(1)] = (10));


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
});})(c__32882__auto___697548))
;
return ((function (switch__32859__auto__,c__32882__auto___697548){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_697540 = [null,null,null,null,null,null,null,null];
(statearr_697540[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_697540[(1)] = (1));

return statearr_697540;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_697520){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697541){if((e697541 instanceof Object)){
var ex__32863__auto__ = e697541;
var statearr_697542_697563 = state_697520;
(statearr_697542_697563[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697564 = state_697520;
state_697520 = G__697564;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_697520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_697520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___697548))
})();
var state__32884__auto__ = (function (){var statearr_697543 = f__32883__auto__.call(null);
(statearr_697543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___697548);

return statearr_697543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___697548))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__697752){
var vec__697753 = p__697752;
var v = cljs.core.nth.call(null,vec__697753,(0),null);
var p = cljs.core.nth.call(null,vec__697753,(1),null);
var job = vec__697753;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32882__auto___697939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results){
return (function (state_697760){
var state_val_697761 = (state_697760[(1)]);
if((state_val_697761 === (1))){
var state_697760__$1 = state_697760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_697760__$1,(2),res,v);
} else {
if((state_val_697761 === (2))){
var inst_697757 = (state_697760[(2)]);
var inst_697758 = cljs.core.async.close_BANG_.call(null,res);
var state_697760__$1 = (function (){var statearr_697762 = state_697760;
(statearr_697762[(7)] = inst_697757);

return statearr_697762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697760__$1,inst_697758);
} else {
return null;
}
}
});})(c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results))
;
return ((function (switch__32859__auto__,c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_697766 = [null,null,null,null,null,null,null,null];
(statearr_697766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__);

(statearr_697766[(1)] = (1));

return statearr_697766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1 = (function (state_697760){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697767){if((e697767 instanceof Object)){
var ex__32863__auto__ = e697767;
var statearr_697768_697940 = state_697760;
(statearr_697768_697940[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697941 = state_697760;
state_697760 = G__697941;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = function(state_697760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1.call(this,state_697760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results))
})();
var state__32884__auto__ = (function (){var statearr_697769 = f__32883__auto__.call(null);
(statearr_697769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___697939);

return statearr_697769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___697939,res,vec__697753,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__697770){
var vec__697771 = p__697770;
var v = cljs.core.nth.call(null,vec__697771,(0),null);
var p = cljs.core.nth.call(null,vec__697771,(1),null);
var job = vec__697771;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28671__auto___697942 = n;
var __697943 = (0);
while(true){
if((__697943 < n__28671__auto___697942)){
var G__697774_697944 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__697774_697944) {
case "compute":
var c__32882__auto___697946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__697943,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (__697943,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function (state_697787){
var state_val_697788 = (state_697787[(1)]);
if((state_val_697788 === (1))){
var state_697787__$1 = state_697787;
var statearr_697789_697947 = state_697787__$1;
(statearr_697789_697947[(2)] = null);

(statearr_697789_697947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697788 === (2))){
var state_697787__$1 = state_697787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697787__$1,(4),jobs);
} else {
if((state_val_697788 === (3))){
var inst_697785 = (state_697787[(2)]);
var state_697787__$1 = state_697787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697787__$1,inst_697785);
} else {
if((state_val_697788 === (4))){
var inst_697777 = (state_697787[(2)]);
var inst_697778 = process.call(null,inst_697777);
var state_697787__$1 = state_697787;
if(cljs.core.truth_(inst_697778)){
var statearr_697790_697948 = state_697787__$1;
(statearr_697790_697948[(1)] = (5));

} else {
var statearr_697791_697949 = state_697787__$1;
(statearr_697791_697949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697788 === (5))){
var state_697787__$1 = state_697787;
var statearr_697792_697950 = state_697787__$1;
(statearr_697792_697950[(2)] = null);

(statearr_697792_697950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697788 === (6))){
var state_697787__$1 = state_697787;
var statearr_697793_697951 = state_697787__$1;
(statearr_697793_697951[(2)] = null);

(statearr_697793_697951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697788 === (7))){
var inst_697783 = (state_697787[(2)]);
var state_697787__$1 = state_697787;
var statearr_697794_697952 = state_697787__$1;
(statearr_697794_697952[(2)] = inst_697783);

(statearr_697794_697952[(1)] = (3));


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
});})(__697943,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
;
return ((function (__697943,switch__32859__auto__,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_697798 = [null,null,null,null,null,null,null];
(statearr_697798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__);

(statearr_697798[(1)] = (1));

return statearr_697798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1 = (function (state_697787){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697799){if((e697799 instanceof Object)){
var ex__32863__auto__ = e697799;
var statearr_697800_697953 = state_697787;
(statearr_697800_697953[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697954 = state_697787;
state_697787 = G__697954;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = function(state_697787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1.call(this,state_697787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__;
})()
;})(__697943,switch__32859__auto__,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_697801 = f__32883__auto__.call(null);
(statearr_697801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___697946);

return statearr_697801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(__697943,c__32882__auto___697946,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
);


break;
case "async":
var c__32882__auto___697955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__697943,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (__697943,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function (state_697814){
var state_val_697815 = (state_697814[(1)]);
if((state_val_697815 === (1))){
var state_697814__$1 = state_697814;
var statearr_697816_697956 = state_697814__$1;
(statearr_697816_697956[(2)] = null);

(statearr_697816_697956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697815 === (2))){
var state_697814__$1 = state_697814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697814__$1,(4),jobs);
} else {
if((state_val_697815 === (3))){
var inst_697812 = (state_697814[(2)]);
var state_697814__$1 = state_697814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697814__$1,inst_697812);
} else {
if((state_val_697815 === (4))){
var inst_697804 = (state_697814[(2)]);
var inst_697805 = async.call(null,inst_697804);
var state_697814__$1 = state_697814;
if(cljs.core.truth_(inst_697805)){
var statearr_697817_697957 = state_697814__$1;
(statearr_697817_697957[(1)] = (5));

} else {
var statearr_697818_697958 = state_697814__$1;
(statearr_697818_697958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697815 === (5))){
var state_697814__$1 = state_697814;
var statearr_697819_697959 = state_697814__$1;
(statearr_697819_697959[(2)] = null);

(statearr_697819_697959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697815 === (6))){
var state_697814__$1 = state_697814;
var statearr_697820_697960 = state_697814__$1;
(statearr_697820_697960[(2)] = null);

(statearr_697820_697960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697815 === (7))){
var inst_697810 = (state_697814[(2)]);
var state_697814__$1 = state_697814;
var statearr_697821_697961 = state_697814__$1;
(statearr_697821_697961[(2)] = inst_697810);

(statearr_697821_697961[(1)] = (3));


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
});})(__697943,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
;
return ((function (__697943,switch__32859__auto__,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_697825 = [null,null,null,null,null,null,null];
(statearr_697825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__);

(statearr_697825[(1)] = (1));

return statearr_697825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1 = (function (state_697814){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697826){if((e697826 instanceof Object)){
var ex__32863__auto__ = e697826;
var statearr_697827_697962 = state_697814;
(statearr_697827_697962[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697963 = state_697814;
state_697814 = G__697963;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = function(state_697814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1.call(this,state_697814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__;
})()
;})(__697943,switch__32859__auto__,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_697828 = f__32883__auto__.call(null);
(statearr_697828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___697955);

return statearr_697828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(__697943,c__32882__auto___697955,G__697774_697944,n__28671__auto___697942,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__697964 = (__697943 + (1));
__697943 = G__697964;
continue;
} else {
}
break;
}

var c__32882__auto___697965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___697965,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___697965,jobs,results,process,async){
return (function (state_697850){
var state_val_697851 = (state_697850[(1)]);
if((state_val_697851 === (1))){
var state_697850__$1 = state_697850;
var statearr_697852_697966 = state_697850__$1;
(statearr_697852_697966[(2)] = null);

(statearr_697852_697966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697851 === (2))){
var state_697850__$1 = state_697850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697850__$1,(4),from);
} else {
if((state_val_697851 === (3))){
var inst_697848 = (state_697850[(2)]);
var state_697850__$1 = state_697850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697850__$1,inst_697848);
} else {
if((state_val_697851 === (4))){
var inst_697831 = (state_697850[(7)]);
var inst_697831__$1 = (state_697850[(2)]);
var inst_697832 = (inst_697831__$1 == null);
var state_697850__$1 = (function (){var statearr_697853 = state_697850;
(statearr_697853[(7)] = inst_697831__$1);

return statearr_697853;
})();
if(cljs.core.truth_(inst_697832)){
var statearr_697854_697967 = state_697850__$1;
(statearr_697854_697967[(1)] = (5));

} else {
var statearr_697855_697968 = state_697850__$1;
(statearr_697855_697968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697851 === (5))){
var inst_697834 = cljs.core.async.close_BANG_.call(null,jobs);
var state_697850__$1 = state_697850;
var statearr_697856_697969 = state_697850__$1;
(statearr_697856_697969[(2)] = inst_697834);

(statearr_697856_697969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697851 === (6))){
var inst_697836 = (state_697850[(8)]);
var inst_697831 = (state_697850[(7)]);
var inst_697836__$1 = cljs.core.async.chan.call(null,(1));
var inst_697837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_697838 = [inst_697831,inst_697836__$1];
var inst_697839 = (new cljs.core.PersistentVector(null,2,(5),inst_697837,inst_697838,null));
var state_697850__$1 = (function (){var statearr_697857 = state_697850;
(statearr_697857[(8)] = inst_697836__$1);

return statearr_697857;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_697850__$1,(8),jobs,inst_697839);
} else {
if((state_val_697851 === (7))){
var inst_697846 = (state_697850[(2)]);
var state_697850__$1 = state_697850;
var statearr_697858_697970 = state_697850__$1;
(statearr_697858_697970[(2)] = inst_697846);

(statearr_697858_697970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697851 === (8))){
var inst_697836 = (state_697850[(8)]);
var inst_697841 = (state_697850[(2)]);
var state_697850__$1 = (function (){var statearr_697859 = state_697850;
(statearr_697859[(9)] = inst_697841);

return statearr_697859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_697850__$1,(9),results,inst_697836);
} else {
if((state_val_697851 === (9))){
var inst_697843 = (state_697850[(2)]);
var state_697850__$1 = (function (){var statearr_697860 = state_697850;
(statearr_697860[(10)] = inst_697843);

return statearr_697860;
})();
var statearr_697861_697971 = state_697850__$1;
(statearr_697861_697971[(2)] = null);

(statearr_697861_697971[(1)] = (2));


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
});})(c__32882__auto___697965,jobs,results,process,async))
;
return ((function (switch__32859__auto__,c__32882__auto___697965,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_697865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_697865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__);

(statearr_697865[(1)] = (1));

return statearr_697865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1 = (function (state_697850){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697866){if((e697866 instanceof Object)){
var ex__32863__auto__ = e697866;
var statearr_697867_697972 = state_697850;
(statearr_697867_697972[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697973 = state_697850;
state_697850 = G__697973;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = function(state_697850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1.call(this,state_697850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___697965,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_697868 = f__32883__auto__.call(null);
(statearr_697868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___697965);

return statearr_697868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___697965,jobs,results,process,async))
);


var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__,jobs,results,process,async){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__,jobs,results,process,async){
return (function (state_697906){
var state_val_697907 = (state_697906[(1)]);
if((state_val_697907 === (7))){
var inst_697902 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
var statearr_697908_697974 = state_697906__$1;
(statearr_697908_697974[(2)] = inst_697902);

(statearr_697908_697974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (20))){
var state_697906__$1 = state_697906;
var statearr_697909_697975 = state_697906__$1;
(statearr_697909_697975[(2)] = null);

(statearr_697909_697975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (1))){
var state_697906__$1 = state_697906;
var statearr_697910_697976 = state_697906__$1;
(statearr_697910_697976[(2)] = null);

(statearr_697910_697976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (4))){
var inst_697871 = (state_697906[(7)]);
var inst_697871__$1 = (state_697906[(2)]);
var inst_697872 = (inst_697871__$1 == null);
var state_697906__$1 = (function (){var statearr_697911 = state_697906;
(statearr_697911[(7)] = inst_697871__$1);

return statearr_697911;
})();
if(cljs.core.truth_(inst_697872)){
var statearr_697912_697977 = state_697906__$1;
(statearr_697912_697977[(1)] = (5));

} else {
var statearr_697913_697978 = state_697906__$1;
(statearr_697913_697978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (15))){
var inst_697884 = (state_697906[(8)]);
var state_697906__$1 = state_697906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_697906__$1,(18),to,inst_697884);
} else {
if((state_val_697907 === (21))){
var inst_697897 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
var statearr_697914_697979 = state_697906__$1;
(statearr_697914_697979[(2)] = inst_697897);

(statearr_697914_697979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (13))){
var inst_697899 = (state_697906[(2)]);
var state_697906__$1 = (function (){var statearr_697915 = state_697906;
(statearr_697915[(9)] = inst_697899);

return statearr_697915;
})();
var statearr_697916_697980 = state_697906__$1;
(statearr_697916_697980[(2)] = null);

(statearr_697916_697980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (6))){
var inst_697871 = (state_697906[(7)]);
var state_697906__$1 = state_697906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697906__$1,(11),inst_697871);
} else {
if((state_val_697907 === (17))){
var inst_697892 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
if(cljs.core.truth_(inst_697892)){
var statearr_697917_697981 = state_697906__$1;
(statearr_697917_697981[(1)] = (19));

} else {
var statearr_697918_697982 = state_697906__$1;
(statearr_697918_697982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (3))){
var inst_697904 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_697906__$1,inst_697904);
} else {
if((state_val_697907 === (12))){
var inst_697881 = (state_697906[(10)]);
var state_697906__$1 = state_697906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697906__$1,(14),inst_697881);
} else {
if((state_val_697907 === (2))){
var state_697906__$1 = state_697906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_697906__$1,(4),results);
} else {
if((state_val_697907 === (19))){
var state_697906__$1 = state_697906;
var statearr_697919_697983 = state_697906__$1;
(statearr_697919_697983[(2)] = null);

(statearr_697919_697983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (11))){
var inst_697881 = (state_697906[(2)]);
var state_697906__$1 = (function (){var statearr_697920 = state_697906;
(statearr_697920[(10)] = inst_697881);

return statearr_697920;
})();
var statearr_697921_697984 = state_697906__$1;
(statearr_697921_697984[(2)] = null);

(statearr_697921_697984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (9))){
var state_697906__$1 = state_697906;
var statearr_697922_697985 = state_697906__$1;
(statearr_697922_697985[(2)] = null);

(statearr_697922_697985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (5))){
var state_697906__$1 = state_697906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_697923_697986 = state_697906__$1;
(statearr_697923_697986[(1)] = (8));

} else {
var statearr_697924_697987 = state_697906__$1;
(statearr_697924_697987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (14))){
var inst_697886 = (state_697906[(11)]);
var inst_697884 = (state_697906[(8)]);
var inst_697884__$1 = (state_697906[(2)]);
var inst_697885 = (inst_697884__$1 == null);
var inst_697886__$1 = cljs.core.not.call(null,inst_697885);
var state_697906__$1 = (function (){var statearr_697925 = state_697906;
(statearr_697925[(11)] = inst_697886__$1);

(statearr_697925[(8)] = inst_697884__$1);

return statearr_697925;
})();
if(inst_697886__$1){
var statearr_697926_697988 = state_697906__$1;
(statearr_697926_697988[(1)] = (15));

} else {
var statearr_697927_697989 = state_697906__$1;
(statearr_697927_697989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (16))){
var inst_697886 = (state_697906[(11)]);
var state_697906__$1 = state_697906;
var statearr_697928_697990 = state_697906__$1;
(statearr_697928_697990[(2)] = inst_697886);

(statearr_697928_697990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (10))){
var inst_697878 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
var statearr_697929_697991 = state_697906__$1;
(statearr_697929_697991[(2)] = inst_697878);

(statearr_697929_697991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (18))){
var inst_697889 = (state_697906[(2)]);
var state_697906__$1 = state_697906;
var statearr_697930_697992 = state_697906__$1;
(statearr_697930_697992[(2)] = inst_697889);

(statearr_697930_697992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_697907 === (8))){
var inst_697875 = cljs.core.async.close_BANG_.call(null,to);
var state_697906__$1 = state_697906;
var statearr_697931_697993 = state_697906__$1;
(statearr_697931_697993[(2)] = inst_697875);

(statearr_697931_697993[(1)] = (10));


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
}
}
}
}
});})(c__32882__auto__,jobs,results,process,async))
;
return ((function (switch__32859__auto__,c__32882__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_697935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_697935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__);

(statearr_697935[(1)] = (1));

return statearr_697935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1 = (function (state_697906){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_697906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e697936){if((e697936 instanceof Object)){
var ex__32863__auto__ = e697936;
var statearr_697937_697994 = state_697906;
(statearr_697937_697994[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_697906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e697936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__697995 = state_697906;
state_697906 = G__697995;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__ = function(state_697906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1.call(this,state_697906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__,jobs,results,process,async))
})();
var state__32884__auto__ = (function (){var statearr_697938 = f__32883__auto__.call(null);
(statearr_697938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_697938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__,jobs,results,process,async))
);

return c__32882__auto__;
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
var args697996 = [];
var len__28871__auto___697999 = arguments.length;
var i__28872__auto___698000 = (0);
while(true){
if((i__28872__auto___698000 < len__28871__auto___697999)){
args697996.push((arguments[i__28872__auto___698000]));

var G__698001 = (i__28872__auto___698000 + (1));
i__28872__auto___698000 = G__698001;
continue;
} else {
}
break;
}

var G__697998 = args697996.length;
switch (G__697998) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args697996.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args698003 = [];
var len__28871__auto___698006 = arguments.length;
var i__28872__auto___698007 = (0);
while(true){
if((i__28872__auto___698007 < len__28871__auto___698006)){
args698003.push((arguments[i__28872__auto___698007]));

var G__698008 = (i__28872__auto___698007 + (1));
i__28872__auto___698007 = G__698008;
continue;
} else {
}
break;
}

var G__698005 = args698003.length;
switch (G__698005) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args698003.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args698010 = [];
var len__28871__auto___698063 = arguments.length;
var i__28872__auto___698064 = (0);
while(true){
if((i__28872__auto___698064 < len__28871__auto___698063)){
args698010.push((arguments[i__28872__auto___698064]));

var G__698065 = (i__28872__auto___698064 + (1));
i__28872__auto___698064 = G__698065;
continue;
} else {
}
break;
}

var G__698012 = args698010.length;
switch (G__698012) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args698010.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32882__auto___698067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___698067,tc,fc){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___698067,tc,fc){
return (function (state_698038){
var state_val_698039 = (state_698038[(1)]);
if((state_val_698039 === (7))){
var inst_698034 = (state_698038[(2)]);
var state_698038__$1 = state_698038;
var statearr_698040_698068 = state_698038__$1;
(statearr_698040_698068[(2)] = inst_698034);

(statearr_698040_698068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (1))){
var state_698038__$1 = state_698038;
var statearr_698041_698069 = state_698038__$1;
(statearr_698041_698069[(2)] = null);

(statearr_698041_698069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (4))){
var inst_698015 = (state_698038[(7)]);
var inst_698015__$1 = (state_698038[(2)]);
var inst_698016 = (inst_698015__$1 == null);
var state_698038__$1 = (function (){var statearr_698042 = state_698038;
(statearr_698042[(7)] = inst_698015__$1);

return statearr_698042;
})();
if(cljs.core.truth_(inst_698016)){
var statearr_698043_698070 = state_698038__$1;
(statearr_698043_698070[(1)] = (5));

} else {
var statearr_698044_698071 = state_698038__$1;
(statearr_698044_698071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (13))){
var state_698038__$1 = state_698038;
var statearr_698045_698072 = state_698038__$1;
(statearr_698045_698072[(2)] = null);

(statearr_698045_698072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (6))){
var inst_698015 = (state_698038[(7)]);
var inst_698021 = p.call(null,inst_698015);
var state_698038__$1 = state_698038;
if(cljs.core.truth_(inst_698021)){
var statearr_698046_698073 = state_698038__$1;
(statearr_698046_698073[(1)] = (9));

} else {
var statearr_698047_698074 = state_698038__$1;
(statearr_698047_698074[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (3))){
var inst_698036 = (state_698038[(2)]);
var state_698038__$1 = state_698038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_698038__$1,inst_698036);
} else {
if((state_val_698039 === (12))){
var state_698038__$1 = state_698038;
var statearr_698048_698075 = state_698038__$1;
(statearr_698048_698075[(2)] = null);

(statearr_698048_698075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (2))){
var state_698038__$1 = state_698038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_698038__$1,(4),ch);
} else {
if((state_val_698039 === (11))){
var inst_698015 = (state_698038[(7)]);
var inst_698025 = (state_698038[(2)]);
var state_698038__$1 = state_698038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_698038__$1,(8),inst_698025,inst_698015);
} else {
if((state_val_698039 === (9))){
var state_698038__$1 = state_698038;
var statearr_698049_698076 = state_698038__$1;
(statearr_698049_698076[(2)] = tc);

(statearr_698049_698076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (5))){
var inst_698018 = cljs.core.async.close_BANG_.call(null,tc);
var inst_698019 = cljs.core.async.close_BANG_.call(null,fc);
var state_698038__$1 = (function (){var statearr_698050 = state_698038;
(statearr_698050[(8)] = inst_698018);

return statearr_698050;
})();
var statearr_698051_698077 = state_698038__$1;
(statearr_698051_698077[(2)] = inst_698019);

(statearr_698051_698077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (14))){
var inst_698032 = (state_698038[(2)]);
var state_698038__$1 = state_698038;
var statearr_698052_698078 = state_698038__$1;
(statearr_698052_698078[(2)] = inst_698032);

(statearr_698052_698078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (10))){
var state_698038__$1 = state_698038;
var statearr_698053_698079 = state_698038__$1;
(statearr_698053_698079[(2)] = fc);

(statearr_698053_698079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698039 === (8))){
var inst_698027 = (state_698038[(2)]);
var state_698038__$1 = state_698038;
if(cljs.core.truth_(inst_698027)){
var statearr_698054_698080 = state_698038__$1;
(statearr_698054_698080[(1)] = (12));

} else {
var statearr_698055_698081 = state_698038__$1;
(statearr_698055_698081[(1)] = (13));

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
});})(c__32882__auto___698067,tc,fc))
;
return ((function (switch__32859__auto__,c__32882__auto___698067,tc,fc){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_698059 = [null,null,null,null,null,null,null,null,null];
(statearr_698059[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_698059[(1)] = (1));

return statearr_698059;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_698038){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_698038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e698060){if((e698060 instanceof Object)){
var ex__32863__auto__ = e698060;
var statearr_698061_698082 = state_698038;
(statearr_698061_698082[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_698038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e698060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__698083 = state_698038;
state_698038 = G__698083;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_698038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_698038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___698067,tc,fc))
})();
var state__32884__auto__ = (function (){var statearr_698062 = f__32883__auto__.call(null);
(statearr_698062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___698067);

return statearr_698062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___698067,tc,fc))
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
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_698147){
var state_val_698148 = (state_698147[(1)]);
if((state_val_698148 === (7))){
var inst_698143 = (state_698147[(2)]);
var state_698147__$1 = state_698147;
var statearr_698149_698170 = state_698147__$1;
(statearr_698149_698170[(2)] = inst_698143);

(statearr_698149_698170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (1))){
var inst_698127 = init;
var state_698147__$1 = (function (){var statearr_698150 = state_698147;
(statearr_698150[(7)] = inst_698127);

return statearr_698150;
})();
var statearr_698151_698171 = state_698147__$1;
(statearr_698151_698171[(2)] = null);

(statearr_698151_698171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (4))){
var inst_698130 = (state_698147[(8)]);
var inst_698130__$1 = (state_698147[(2)]);
var inst_698131 = (inst_698130__$1 == null);
var state_698147__$1 = (function (){var statearr_698152 = state_698147;
(statearr_698152[(8)] = inst_698130__$1);

return statearr_698152;
})();
if(cljs.core.truth_(inst_698131)){
var statearr_698153_698172 = state_698147__$1;
(statearr_698153_698172[(1)] = (5));

} else {
var statearr_698154_698173 = state_698147__$1;
(statearr_698154_698173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (6))){
var inst_698134 = (state_698147[(9)]);
var inst_698130 = (state_698147[(8)]);
var inst_698127 = (state_698147[(7)]);
var inst_698134__$1 = f.call(null,inst_698127,inst_698130);
var inst_698135 = cljs.core.reduced_QMARK_.call(null,inst_698134__$1);
var state_698147__$1 = (function (){var statearr_698155 = state_698147;
(statearr_698155[(9)] = inst_698134__$1);

return statearr_698155;
})();
if(inst_698135){
var statearr_698156_698174 = state_698147__$1;
(statearr_698156_698174[(1)] = (8));

} else {
var statearr_698157_698175 = state_698147__$1;
(statearr_698157_698175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (3))){
var inst_698145 = (state_698147[(2)]);
var state_698147__$1 = state_698147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_698147__$1,inst_698145);
} else {
if((state_val_698148 === (2))){
var state_698147__$1 = state_698147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_698147__$1,(4),ch);
} else {
if((state_val_698148 === (9))){
var inst_698134 = (state_698147[(9)]);
var inst_698127 = inst_698134;
var state_698147__$1 = (function (){var statearr_698158 = state_698147;
(statearr_698158[(7)] = inst_698127);

return statearr_698158;
})();
var statearr_698159_698176 = state_698147__$1;
(statearr_698159_698176[(2)] = null);

(statearr_698159_698176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (5))){
var inst_698127 = (state_698147[(7)]);
var state_698147__$1 = state_698147;
var statearr_698160_698177 = state_698147__$1;
(statearr_698160_698177[(2)] = inst_698127);

(statearr_698160_698177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (10))){
var inst_698141 = (state_698147[(2)]);
var state_698147__$1 = state_698147;
var statearr_698161_698178 = state_698147__$1;
(statearr_698161_698178[(2)] = inst_698141);

(statearr_698161_698178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698148 === (8))){
var inst_698134 = (state_698147[(9)]);
var inst_698137 = cljs.core.deref.call(null,inst_698134);
var state_698147__$1 = state_698147;
var statearr_698162_698179 = state_698147__$1;
(statearr_698162_698179[(2)] = inst_698137);

(statearr_698162_698179[(1)] = (10));


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
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32860__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32860__auto____0 = (function (){
var statearr_698166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_698166[(0)] = cljs$core$async$reduce_$_state_machine__32860__auto__);

(statearr_698166[(1)] = (1));

return statearr_698166;
});
var cljs$core$async$reduce_$_state_machine__32860__auto____1 = (function (state_698147){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_698147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e698167){if((e698167 instanceof Object)){
var ex__32863__auto__ = e698167;
var statearr_698168_698180 = state_698147;
(statearr_698168_698180[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_698147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e698167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__698181 = state_698147;
state_698147 = G__698181;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32860__auto__ = function(state_698147){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32860__auto____1.call(this,state_698147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32860__auto____0;
cljs$core$async$reduce_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32860__auto____1;
return cljs$core$async$reduce_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_698169 = f__32883__auto__.call(null);
(statearr_698169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_698169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
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
var args698182 = [];
var len__28871__auto___698234 = arguments.length;
var i__28872__auto___698235 = (0);
while(true){
if((i__28872__auto___698235 < len__28871__auto___698234)){
args698182.push((arguments[i__28872__auto___698235]));

var G__698236 = (i__28872__auto___698235 + (1));
i__28872__auto___698235 = G__698236;
continue;
} else {
}
break;
}

var G__698184 = args698182.length;
switch (G__698184) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args698182.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_698209){
var state_val_698210 = (state_698209[(1)]);
if((state_val_698210 === (7))){
var inst_698191 = (state_698209[(2)]);
var state_698209__$1 = state_698209;
var statearr_698211_698238 = state_698209__$1;
(statearr_698211_698238[(2)] = inst_698191);

(statearr_698211_698238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (1))){
var inst_698185 = cljs.core.seq.call(null,coll);
var inst_698186 = inst_698185;
var state_698209__$1 = (function (){var statearr_698212 = state_698209;
(statearr_698212[(7)] = inst_698186);

return statearr_698212;
})();
var statearr_698213_698239 = state_698209__$1;
(statearr_698213_698239[(2)] = null);

(statearr_698213_698239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (4))){
var inst_698186 = (state_698209[(7)]);
var inst_698189 = cljs.core.first.call(null,inst_698186);
var state_698209__$1 = state_698209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_698209__$1,(7),ch,inst_698189);
} else {
if((state_val_698210 === (13))){
var inst_698203 = (state_698209[(2)]);
var state_698209__$1 = state_698209;
var statearr_698214_698240 = state_698209__$1;
(statearr_698214_698240[(2)] = inst_698203);

(statearr_698214_698240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (6))){
var inst_698194 = (state_698209[(2)]);
var state_698209__$1 = state_698209;
if(cljs.core.truth_(inst_698194)){
var statearr_698215_698241 = state_698209__$1;
(statearr_698215_698241[(1)] = (8));

} else {
var statearr_698216_698242 = state_698209__$1;
(statearr_698216_698242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (3))){
var inst_698207 = (state_698209[(2)]);
var state_698209__$1 = state_698209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_698209__$1,inst_698207);
} else {
if((state_val_698210 === (12))){
var state_698209__$1 = state_698209;
var statearr_698217_698243 = state_698209__$1;
(statearr_698217_698243[(2)] = null);

(statearr_698217_698243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (2))){
var inst_698186 = (state_698209[(7)]);
var state_698209__$1 = state_698209;
if(cljs.core.truth_(inst_698186)){
var statearr_698218_698244 = state_698209__$1;
(statearr_698218_698244[(1)] = (4));

} else {
var statearr_698219_698245 = state_698209__$1;
(statearr_698219_698245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (11))){
var inst_698200 = cljs.core.async.close_BANG_.call(null,ch);
var state_698209__$1 = state_698209;
var statearr_698220_698246 = state_698209__$1;
(statearr_698220_698246[(2)] = inst_698200);

(statearr_698220_698246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (9))){
var state_698209__$1 = state_698209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_698221_698247 = state_698209__$1;
(statearr_698221_698247[(1)] = (11));

} else {
var statearr_698222_698248 = state_698209__$1;
(statearr_698222_698248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (5))){
var inst_698186 = (state_698209[(7)]);
var state_698209__$1 = state_698209;
var statearr_698223_698249 = state_698209__$1;
(statearr_698223_698249[(2)] = inst_698186);

(statearr_698223_698249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (10))){
var inst_698205 = (state_698209[(2)]);
var state_698209__$1 = state_698209;
var statearr_698224_698250 = state_698209__$1;
(statearr_698224_698250[(2)] = inst_698205);

(statearr_698224_698250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698210 === (8))){
var inst_698186 = (state_698209[(7)]);
var inst_698196 = cljs.core.next.call(null,inst_698186);
var inst_698186__$1 = inst_698196;
var state_698209__$1 = (function (){var statearr_698225 = state_698209;
(statearr_698225[(7)] = inst_698186__$1);

return statearr_698225;
})();
var statearr_698226_698251 = state_698209__$1;
(statearr_698226_698251[(2)] = null);

(statearr_698226_698251[(1)] = (2));


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
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_698230 = [null,null,null,null,null,null,null,null];
(statearr_698230[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_698230[(1)] = (1));

return statearr_698230;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_698209){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_698209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e698231){if((e698231 instanceof Object)){
var ex__32863__auto__ = e698231;
var statearr_698232_698252 = state_698209;
(statearr_698232_698252[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_698209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e698231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__698253 = state_698209;
state_698209 = G__698253;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_698209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_698209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_698233 = f__32883__auto__.call(null);
(statearr_698233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_698233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__28368__auto__ = (((_ == null))?null:_);
var m__28369__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,_);
} else {
var m__28369__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28369__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,ch);
} else {
var m__28369__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m);
} else {
var m__28369__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async698479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async698479 = (function (ch,cs,meta698480){
this.ch = ch;
this.cs = cs;
this.meta698480 = meta698480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_698481,meta698480__$1){
var self__ = this;
var _698481__$1 = this;
return (new cljs.core.async.t_cljs$core$async698479(self__.ch,self__.cs,meta698480__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_698481){
var self__ = this;
var _698481__$1 = this;
return self__.meta698480;
});})(cs))
;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async698479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async698479.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta698480","meta698480",-125354491,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async698479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async698479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async698479";

cljs.core.async.t_cljs$core$async698479.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async698479");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async698479 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async698479(ch__$1,cs__$1,meta698480){
return (new cljs.core.async.t_cljs$core$async698479(ch__$1,cs__$1,meta698480));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async698479(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32882__auto___698704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___698704,cs,m,dchan,dctr,done){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___698704,cs,m,dchan,dctr,done){
return (function (state_698616){
var state_val_698617 = (state_698616[(1)]);
if((state_val_698617 === (7))){
var inst_698612 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698618_698705 = state_698616__$1;
(statearr_698618_698705[(2)] = inst_698612);

(statearr_698618_698705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (20))){
var inst_698515 = (state_698616[(7)]);
var inst_698527 = cljs.core.first.call(null,inst_698515);
var inst_698528 = cljs.core.nth.call(null,inst_698527,(0),null);
var inst_698529 = cljs.core.nth.call(null,inst_698527,(1),null);
var state_698616__$1 = (function (){var statearr_698619 = state_698616;
(statearr_698619[(8)] = inst_698528);

return statearr_698619;
})();
if(cljs.core.truth_(inst_698529)){
var statearr_698620_698706 = state_698616__$1;
(statearr_698620_698706[(1)] = (22));

} else {
var statearr_698621_698707 = state_698616__$1;
(statearr_698621_698707[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (27))){
var inst_698559 = (state_698616[(9)]);
var inst_698484 = (state_698616[(10)]);
var inst_698564 = (state_698616[(11)]);
var inst_698557 = (state_698616[(12)]);
var inst_698564__$1 = cljs.core._nth.call(null,inst_698557,inst_698559);
var inst_698565 = cljs.core.async.put_BANG_.call(null,inst_698564__$1,inst_698484,done);
var state_698616__$1 = (function (){var statearr_698622 = state_698616;
(statearr_698622[(11)] = inst_698564__$1);

return statearr_698622;
})();
if(cljs.core.truth_(inst_698565)){
var statearr_698623_698708 = state_698616__$1;
(statearr_698623_698708[(1)] = (30));

} else {
var statearr_698624_698709 = state_698616__$1;
(statearr_698624_698709[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (1))){
var state_698616__$1 = state_698616;
var statearr_698625_698710 = state_698616__$1;
(statearr_698625_698710[(2)] = null);

(statearr_698625_698710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (24))){
var inst_698515 = (state_698616[(7)]);
var inst_698534 = (state_698616[(2)]);
var inst_698535 = cljs.core.next.call(null,inst_698515);
var inst_698493 = inst_698535;
var inst_698494 = null;
var inst_698495 = (0);
var inst_698496 = (0);
var state_698616__$1 = (function (){var statearr_698626 = state_698616;
(statearr_698626[(13)] = inst_698493);

(statearr_698626[(14)] = inst_698495);

(statearr_698626[(15)] = inst_698494);

(statearr_698626[(16)] = inst_698534);

(statearr_698626[(17)] = inst_698496);

return statearr_698626;
})();
var statearr_698627_698711 = state_698616__$1;
(statearr_698627_698711[(2)] = null);

(statearr_698627_698711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (39))){
var state_698616__$1 = state_698616;
var statearr_698631_698712 = state_698616__$1;
(statearr_698631_698712[(2)] = null);

(statearr_698631_698712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (4))){
var inst_698484 = (state_698616[(10)]);
var inst_698484__$1 = (state_698616[(2)]);
var inst_698485 = (inst_698484__$1 == null);
var state_698616__$1 = (function (){var statearr_698632 = state_698616;
(statearr_698632[(10)] = inst_698484__$1);

return statearr_698632;
})();
if(cljs.core.truth_(inst_698485)){
var statearr_698633_698713 = state_698616__$1;
(statearr_698633_698713[(1)] = (5));

} else {
var statearr_698634_698714 = state_698616__$1;
(statearr_698634_698714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (15))){
var inst_698493 = (state_698616[(13)]);
var inst_698495 = (state_698616[(14)]);
var inst_698494 = (state_698616[(15)]);
var inst_698496 = (state_698616[(17)]);
var inst_698511 = (state_698616[(2)]);
var inst_698512 = (inst_698496 + (1));
var tmp698628 = inst_698493;
var tmp698629 = inst_698495;
var tmp698630 = inst_698494;
var inst_698493__$1 = tmp698628;
var inst_698494__$1 = tmp698630;
var inst_698495__$1 = tmp698629;
var inst_698496__$1 = inst_698512;
var state_698616__$1 = (function (){var statearr_698635 = state_698616;
(statearr_698635[(13)] = inst_698493__$1);

(statearr_698635[(14)] = inst_698495__$1);

(statearr_698635[(15)] = inst_698494__$1);

(statearr_698635[(17)] = inst_698496__$1);

(statearr_698635[(18)] = inst_698511);

return statearr_698635;
})();
var statearr_698636_698715 = state_698616__$1;
(statearr_698636_698715[(2)] = null);

(statearr_698636_698715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (21))){
var inst_698538 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698640_698716 = state_698616__$1;
(statearr_698640_698716[(2)] = inst_698538);

(statearr_698640_698716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (31))){
var inst_698564 = (state_698616[(11)]);
var inst_698568 = done.call(null,null);
var inst_698569 = cljs.core.async.untap_STAR_.call(null,m,inst_698564);
var state_698616__$1 = (function (){var statearr_698641 = state_698616;
(statearr_698641[(19)] = inst_698568);

return statearr_698641;
})();
var statearr_698642_698717 = state_698616__$1;
(statearr_698642_698717[(2)] = inst_698569);

(statearr_698642_698717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (32))){
var inst_698556 = (state_698616[(20)]);
var inst_698558 = (state_698616[(21)]);
var inst_698559 = (state_698616[(9)]);
var inst_698557 = (state_698616[(12)]);
var inst_698571 = (state_698616[(2)]);
var inst_698572 = (inst_698559 + (1));
var tmp698637 = inst_698556;
var tmp698638 = inst_698558;
var tmp698639 = inst_698557;
var inst_698556__$1 = tmp698637;
var inst_698557__$1 = tmp698639;
var inst_698558__$1 = tmp698638;
var inst_698559__$1 = inst_698572;
var state_698616__$1 = (function (){var statearr_698643 = state_698616;
(statearr_698643[(20)] = inst_698556__$1);

(statearr_698643[(21)] = inst_698558__$1);

(statearr_698643[(9)] = inst_698559__$1);

(statearr_698643[(22)] = inst_698571);

(statearr_698643[(12)] = inst_698557__$1);

return statearr_698643;
})();
var statearr_698644_698718 = state_698616__$1;
(statearr_698644_698718[(2)] = null);

(statearr_698644_698718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (40))){
var inst_698584 = (state_698616[(23)]);
var inst_698588 = done.call(null,null);
var inst_698589 = cljs.core.async.untap_STAR_.call(null,m,inst_698584);
var state_698616__$1 = (function (){var statearr_698645 = state_698616;
(statearr_698645[(24)] = inst_698588);

return statearr_698645;
})();
var statearr_698646_698719 = state_698616__$1;
(statearr_698646_698719[(2)] = inst_698589);

(statearr_698646_698719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (33))){
var inst_698575 = (state_698616[(25)]);
var inst_698577 = cljs.core.chunked_seq_QMARK_.call(null,inst_698575);
var state_698616__$1 = state_698616;
if(inst_698577){
var statearr_698647_698720 = state_698616__$1;
(statearr_698647_698720[(1)] = (36));

} else {
var statearr_698648_698721 = state_698616__$1;
(statearr_698648_698721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (13))){
var inst_698505 = (state_698616[(26)]);
var inst_698508 = cljs.core.async.close_BANG_.call(null,inst_698505);
var state_698616__$1 = state_698616;
var statearr_698649_698722 = state_698616__$1;
(statearr_698649_698722[(2)] = inst_698508);

(statearr_698649_698722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (22))){
var inst_698528 = (state_698616[(8)]);
var inst_698531 = cljs.core.async.close_BANG_.call(null,inst_698528);
var state_698616__$1 = state_698616;
var statearr_698650_698723 = state_698616__$1;
(statearr_698650_698723[(2)] = inst_698531);

(statearr_698650_698723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (36))){
var inst_698575 = (state_698616[(25)]);
var inst_698579 = cljs.core.chunk_first.call(null,inst_698575);
var inst_698580 = cljs.core.chunk_rest.call(null,inst_698575);
var inst_698581 = cljs.core.count.call(null,inst_698579);
var inst_698556 = inst_698580;
var inst_698557 = inst_698579;
var inst_698558 = inst_698581;
var inst_698559 = (0);
var state_698616__$1 = (function (){var statearr_698651 = state_698616;
(statearr_698651[(20)] = inst_698556);

(statearr_698651[(21)] = inst_698558);

(statearr_698651[(9)] = inst_698559);

(statearr_698651[(12)] = inst_698557);

return statearr_698651;
})();
var statearr_698652_698724 = state_698616__$1;
(statearr_698652_698724[(2)] = null);

(statearr_698652_698724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (41))){
var inst_698575 = (state_698616[(25)]);
var inst_698591 = (state_698616[(2)]);
var inst_698592 = cljs.core.next.call(null,inst_698575);
var inst_698556 = inst_698592;
var inst_698557 = null;
var inst_698558 = (0);
var inst_698559 = (0);
var state_698616__$1 = (function (){var statearr_698653 = state_698616;
(statearr_698653[(20)] = inst_698556);

(statearr_698653[(21)] = inst_698558);

(statearr_698653[(9)] = inst_698559);

(statearr_698653[(27)] = inst_698591);

(statearr_698653[(12)] = inst_698557);

return statearr_698653;
})();
var statearr_698654_698725 = state_698616__$1;
(statearr_698654_698725[(2)] = null);

(statearr_698654_698725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (43))){
var state_698616__$1 = state_698616;
var statearr_698655_698726 = state_698616__$1;
(statearr_698655_698726[(2)] = null);

(statearr_698655_698726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (29))){
var inst_698600 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698656_698727 = state_698616__$1;
(statearr_698656_698727[(2)] = inst_698600);

(statearr_698656_698727[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (44))){
var inst_698609 = (state_698616[(2)]);
var state_698616__$1 = (function (){var statearr_698657 = state_698616;
(statearr_698657[(28)] = inst_698609);

return statearr_698657;
})();
var statearr_698658_698728 = state_698616__$1;
(statearr_698658_698728[(2)] = null);

(statearr_698658_698728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (6))){
var inst_698548 = (state_698616[(29)]);
var inst_698547 = cljs.core.deref.call(null,cs);
var inst_698548__$1 = cljs.core.keys.call(null,inst_698547);
var inst_698549 = cljs.core.count.call(null,inst_698548__$1);
var inst_698550 = cljs.core.reset_BANG_.call(null,dctr,inst_698549);
var inst_698555 = cljs.core.seq.call(null,inst_698548__$1);
var inst_698556 = inst_698555;
var inst_698557 = null;
var inst_698558 = (0);
var inst_698559 = (0);
var state_698616__$1 = (function (){var statearr_698659 = state_698616;
(statearr_698659[(30)] = inst_698550);

(statearr_698659[(20)] = inst_698556);

(statearr_698659[(21)] = inst_698558);

(statearr_698659[(9)] = inst_698559);

(statearr_698659[(29)] = inst_698548__$1);

(statearr_698659[(12)] = inst_698557);

return statearr_698659;
})();
var statearr_698660_698729 = state_698616__$1;
(statearr_698660_698729[(2)] = null);

(statearr_698660_698729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (28))){
var inst_698556 = (state_698616[(20)]);
var inst_698575 = (state_698616[(25)]);
var inst_698575__$1 = cljs.core.seq.call(null,inst_698556);
var state_698616__$1 = (function (){var statearr_698661 = state_698616;
(statearr_698661[(25)] = inst_698575__$1);

return statearr_698661;
})();
if(inst_698575__$1){
var statearr_698662_698730 = state_698616__$1;
(statearr_698662_698730[(1)] = (33));

} else {
var statearr_698663_698731 = state_698616__$1;
(statearr_698663_698731[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (25))){
var inst_698558 = (state_698616[(21)]);
var inst_698559 = (state_698616[(9)]);
var inst_698561 = (inst_698559 < inst_698558);
var inst_698562 = inst_698561;
var state_698616__$1 = state_698616;
if(cljs.core.truth_(inst_698562)){
var statearr_698664_698732 = state_698616__$1;
(statearr_698664_698732[(1)] = (27));

} else {
var statearr_698665_698733 = state_698616__$1;
(statearr_698665_698733[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (34))){
var state_698616__$1 = state_698616;
var statearr_698666_698734 = state_698616__$1;
(statearr_698666_698734[(2)] = null);

(statearr_698666_698734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (17))){
var state_698616__$1 = state_698616;
var statearr_698667_698735 = state_698616__$1;
(statearr_698667_698735[(2)] = null);

(statearr_698667_698735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (3))){
var inst_698614 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_698616__$1,inst_698614);
} else {
if((state_val_698617 === (12))){
var inst_698543 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698668_698736 = state_698616__$1;
(statearr_698668_698736[(2)] = inst_698543);

(statearr_698668_698736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (2))){
var state_698616__$1 = state_698616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_698616__$1,(4),ch);
} else {
if((state_val_698617 === (23))){
var state_698616__$1 = state_698616;
var statearr_698669_698737 = state_698616__$1;
(statearr_698669_698737[(2)] = null);

(statearr_698669_698737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (35))){
var inst_698598 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698670_698738 = state_698616__$1;
(statearr_698670_698738[(2)] = inst_698598);

(statearr_698670_698738[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (19))){
var inst_698515 = (state_698616[(7)]);
var inst_698519 = cljs.core.chunk_first.call(null,inst_698515);
var inst_698520 = cljs.core.chunk_rest.call(null,inst_698515);
var inst_698521 = cljs.core.count.call(null,inst_698519);
var inst_698493 = inst_698520;
var inst_698494 = inst_698519;
var inst_698495 = inst_698521;
var inst_698496 = (0);
var state_698616__$1 = (function (){var statearr_698671 = state_698616;
(statearr_698671[(13)] = inst_698493);

(statearr_698671[(14)] = inst_698495);

(statearr_698671[(15)] = inst_698494);

(statearr_698671[(17)] = inst_698496);

return statearr_698671;
})();
var statearr_698672_698739 = state_698616__$1;
(statearr_698672_698739[(2)] = null);

(statearr_698672_698739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (11))){
var inst_698493 = (state_698616[(13)]);
var inst_698515 = (state_698616[(7)]);
var inst_698515__$1 = cljs.core.seq.call(null,inst_698493);
var state_698616__$1 = (function (){var statearr_698673 = state_698616;
(statearr_698673[(7)] = inst_698515__$1);

return statearr_698673;
})();
if(inst_698515__$1){
var statearr_698674_698740 = state_698616__$1;
(statearr_698674_698740[(1)] = (16));

} else {
var statearr_698675_698741 = state_698616__$1;
(statearr_698675_698741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (9))){
var inst_698545 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698676_698742 = state_698616__$1;
(statearr_698676_698742[(2)] = inst_698545);

(statearr_698676_698742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (5))){
var inst_698491 = cljs.core.deref.call(null,cs);
var inst_698492 = cljs.core.seq.call(null,inst_698491);
var inst_698493 = inst_698492;
var inst_698494 = null;
var inst_698495 = (0);
var inst_698496 = (0);
var state_698616__$1 = (function (){var statearr_698677 = state_698616;
(statearr_698677[(13)] = inst_698493);

(statearr_698677[(14)] = inst_698495);

(statearr_698677[(15)] = inst_698494);

(statearr_698677[(17)] = inst_698496);

return statearr_698677;
})();
var statearr_698678_698743 = state_698616__$1;
(statearr_698678_698743[(2)] = null);

(statearr_698678_698743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (14))){
var state_698616__$1 = state_698616;
var statearr_698679_698744 = state_698616__$1;
(statearr_698679_698744[(2)] = null);

(statearr_698679_698744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (45))){
var inst_698606 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698680_698745 = state_698616__$1;
(statearr_698680_698745[(2)] = inst_698606);

(statearr_698680_698745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (26))){
var inst_698548 = (state_698616[(29)]);
var inst_698602 = (state_698616[(2)]);
var inst_698603 = cljs.core.seq.call(null,inst_698548);
var state_698616__$1 = (function (){var statearr_698681 = state_698616;
(statearr_698681[(31)] = inst_698602);

return statearr_698681;
})();
if(inst_698603){
var statearr_698682_698746 = state_698616__$1;
(statearr_698682_698746[(1)] = (42));

} else {
var statearr_698683_698747 = state_698616__$1;
(statearr_698683_698747[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (16))){
var inst_698515 = (state_698616[(7)]);
var inst_698517 = cljs.core.chunked_seq_QMARK_.call(null,inst_698515);
var state_698616__$1 = state_698616;
if(inst_698517){
var statearr_698684_698748 = state_698616__$1;
(statearr_698684_698748[(1)] = (19));

} else {
var statearr_698685_698749 = state_698616__$1;
(statearr_698685_698749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (38))){
var inst_698595 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698686_698750 = state_698616__$1;
(statearr_698686_698750[(2)] = inst_698595);

(statearr_698686_698750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (30))){
var state_698616__$1 = state_698616;
var statearr_698687_698751 = state_698616__$1;
(statearr_698687_698751[(2)] = null);

(statearr_698687_698751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (10))){
var inst_698494 = (state_698616[(15)]);
var inst_698496 = (state_698616[(17)]);
var inst_698504 = cljs.core._nth.call(null,inst_698494,inst_698496);
var inst_698505 = cljs.core.nth.call(null,inst_698504,(0),null);
var inst_698506 = cljs.core.nth.call(null,inst_698504,(1),null);
var state_698616__$1 = (function (){var statearr_698688 = state_698616;
(statearr_698688[(26)] = inst_698505);

return statearr_698688;
})();
if(cljs.core.truth_(inst_698506)){
var statearr_698689_698752 = state_698616__$1;
(statearr_698689_698752[(1)] = (13));

} else {
var statearr_698690_698753 = state_698616__$1;
(statearr_698690_698753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (18))){
var inst_698541 = (state_698616[(2)]);
var state_698616__$1 = state_698616;
var statearr_698691_698754 = state_698616__$1;
(statearr_698691_698754[(2)] = inst_698541);

(statearr_698691_698754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (42))){
var state_698616__$1 = state_698616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_698616__$1,(45),dchan);
} else {
if((state_val_698617 === (37))){
var inst_698584 = (state_698616[(23)]);
var inst_698484 = (state_698616[(10)]);
var inst_698575 = (state_698616[(25)]);
var inst_698584__$1 = cljs.core.first.call(null,inst_698575);
var inst_698585 = cljs.core.async.put_BANG_.call(null,inst_698584__$1,inst_698484,done);
var state_698616__$1 = (function (){var statearr_698692 = state_698616;
(statearr_698692[(23)] = inst_698584__$1);

return statearr_698692;
})();
if(cljs.core.truth_(inst_698585)){
var statearr_698693_698755 = state_698616__$1;
(statearr_698693_698755[(1)] = (39));

} else {
var statearr_698694_698756 = state_698616__$1;
(statearr_698694_698756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_698617 === (8))){
var inst_698495 = (state_698616[(14)]);
var inst_698496 = (state_698616[(17)]);
var inst_698498 = (inst_698496 < inst_698495);
var inst_698499 = inst_698498;
var state_698616__$1 = state_698616;
if(cljs.core.truth_(inst_698499)){
var statearr_698695_698757 = state_698616__$1;
(statearr_698695_698757[(1)] = (10));

} else {
var statearr_698696_698758 = state_698616__$1;
(statearr_698696_698758[(1)] = (11));

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
});})(c__32882__auto___698704,cs,m,dchan,dctr,done))
;
return ((function (switch__32859__auto__,c__32882__auto___698704,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32860__auto__ = null;
var cljs$core$async$mult_$_state_machine__32860__auto____0 = (function (){
var statearr_698700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_698700[(0)] = cljs$core$async$mult_$_state_machine__32860__auto__);

(statearr_698700[(1)] = (1));

return statearr_698700;
});
var cljs$core$async$mult_$_state_machine__32860__auto____1 = (function (state_698616){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_698616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e698701){if((e698701 instanceof Object)){
var ex__32863__auto__ = e698701;
var statearr_698702_698759 = state_698616;
(statearr_698702_698759[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_698616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e698701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__698760 = state_698616;
state_698616 = G__698760;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32860__auto__ = function(state_698616){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32860__auto____1.call(this,state_698616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32860__auto____0;
cljs$core$async$mult_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32860__auto____1;
return cljs$core$async$mult_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___698704,cs,m,dchan,dctr,done))
})();
var state__32884__auto__ = (function (){var statearr_698703 = f__32883__auto__.call(null);
(statearr_698703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___698704);

return statearr_698703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___698704,cs,m,dchan,dctr,done))
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
var args698761 = [];
var len__28871__auto___698764 = arguments.length;
var i__28872__auto___698765 = (0);
while(true){
if((i__28872__auto___698765 < len__28871__auto___698764)){
args698761.push((arguments[i__28872__auto___698765]));

var G__698766 = (i__28872__auto___698765 + (1));
i__28872__auto___698765 = G__698766;
continue;
} else {
}
break;
}

var G__698763 = args698761.length;
switch (G__698763) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args698761.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,ch);
} else {
var m__28369__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,ch);
} else {
var m__28369__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m);
} else {
var m__28369__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,state_map);
} else {
var m__28369__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28368__auto__ = (((m == null))?null:m);
var m__28369__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,m,mode);
} else {
var m__28369__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___698778 = arguments.length;
var i__28872__auto___698779 = (0);
while(true){
if((i__28872__auto___698779 < len__28871__auto___698778)){
args__28878__auto__.push((arguments[i__28872__auto___698779]));

var G__698780 = (i__28872__auto___698779 + (1));
i__28872__auto___698779 = G__698780;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__698772){
var map__698773 = p__698772;
var map__698773__$1 = ((((!((map__698773 == null)))?((((map__698773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__698773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__698773):map__698773);
var opts = map__698773__$1;
var statearr_698775_698781 = state;
(statearr_698775_698781[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__698773,map__698773__$1,opts){
return (function (val){
var statearr_698776_698782 = state;
(statearr_698776_698782[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__698773,map__698773__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_698777_698783 = state;
(statearr_698777_698783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq698768){
var G__698769 = cljs.core.first.call(null,seq698768);
var seq698768__$1 = cljs.core.next.call(null,seq698768);
var G__698770 = cljs.core.first.call(null,seq698768__$1);
var seq698768__$2 = cljs.core.next.call(null,seq698768__$1);
var G__698771 = cljs.core.first.call(null,seq698768__$2);
var seq698768__$3 = cljs.core.next.call(null,seq698768__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__698769,G__698770,G__698771,seq698768__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async698951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async698951 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta698952){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta698952 = meta698952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_698953,meta698952__$1){
var self__ = this;
var _698953__$1 = this;
return (new cljs.core.async.t_cljs$core$async698951(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta698952__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_698953){
var self__ = this;
var _698953__$1 = this;
return self__.meta698952;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async698951.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async698951.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta698952","meta698952",-1462034606,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async698951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async698951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async698951";

cljs.core.async.t_cljs$core$async698951.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async698951");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async698951 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async698951(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta698952){
return (new cljs.core.async.t_cljs$core$async698951(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta698952));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async698951(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32882__auto___699118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_699055){
var state_val_699056 = (state_699055[(1)]);
if((state_val_699056 === (7))){
var inst_698970 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
var statearr_699057_699119 = state_699055__$1;
(statearr_699057_699119[(2)] = inst_698970);

(statearr_699057_699119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (20))){
var inst_698982 = (state_699055[(7)]);
var state_699055__$1 = state_699055;
var statearr_699058_699120 = state_699055__$1;
(statearr_699058_699120[(2)] = inst_698982);

(statearr_699058_699120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (27))){
var state_699055__$1 = state_699055;
var statearr_699059_699121 = state_699055__$1;
(statearr_699059_699121[(2)] = null);

(statearr_699059_699121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (1))){
var inst_698957 = (state_699055[(8)]);
var inst_698957__$1 = calc_state.call(null);
var inst_698959 = (inst_698957__$1 == null);
var inst_698960 = cljs.core.not.call(null,inst_698959);
var state_699055__$1 = (function (){var statearr_699060 = state_699055;
(statearr_699060[(8)] = inst_698957__$1);

return statearr_699060;
})();
if(inst_698960){
var statearr_699061_699122 = state_699055__$1;
(statearr_699061_699122[(1)] = (2));

} else {
var statearr_699062_699123 = state_699055__$1;
(statearr_699062_699123[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (24))){
var inst_699006 = (state_699055[(9)]);
var inst_699015 = (state_699055[(10)]);
var inst_699029 = (state_699055[(11)]);
var inst_699029__$1 = inst_699006.call(null,inst_699015);
var state_699055__$1 = (function (){var statearr_699063 = state_699055;
(statearr_699063[(11)] = inst_699029__$1);

return statearr_699063;
})();
if(cljs.core.truth_(inst_699029__$1)){
var statearr_699064_699124 = state_699055__$1;
(statearr_699064_699124[(1)] = (29));

} else {
var statearr_699065_699125 = state_699055__$1;
(statearr_699065_699125[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (4))){
var inst_698973 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_698973)){
var statearr_699066_699126 = state_699055__$1;
(statearr_699066_699126[(1)] = (8));

} else {
var statearr_699067_699127 = state_699055__$1;
(statearr_699067_699127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (15))){
var inst_699000 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_699000)){
var statearr_699068_699128 = state_699055__$1;
(statearr_699068_699128[(1)] = (19));

} else {
var statearr_699069_699129 = state_699055__$1;
(statearr_699069_699129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (21))){
var inst_699005 = (state_699055[(12)]);
var inst_699005__$1 = (state_699055[(2)]);
var inst_699006 = cljs.core.get.call(null,inst_699005__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_699007 = cljs.core.get.call(null,inst_699005__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_699008 = cljs.core.get.call(null,inst_699005__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_699055__$1 = (function (){var statearr_699070 = state_699055;
(statearr_699070[(9)] = inst_699006);

(statearr_699070[(13)] = inst_699007);

(statearr_699070[(12)] = inst_699005__$1);

return statearr_699070;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_699055__$1,(22),inst_699008);
} else {
if((state_val_699056 === (31))){
var inst_699037 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_699037)){
var statearr_699071_699130 = state_699055__$1;
(statearr_699071_699130[(1)] = (32));

} else {
var statearr_699072_699131 = state_699055__$1;
(statearr_699072_699131[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (32))){
var inst_699014 = (state_699055[(14)]);
var state_699055__$1 = state_699055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699055__$1,(35),out,inst_699014);
} else {
if((state_val_699056 === (33))){
var inst_699005 = (state_699055[(12)]);
var inst_698982 = inst_699005;
var state_699055__$1 = (function (){var statearr_699073 = state_699055;
(statearr_699073[(7)] = inst_698982);

return statearr_699073;
})();
var statearr_699074_699132 = state_699055__$1;
(statearr_699074_699132[(2)] = null);

(statearr_699074_699132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (13))){
var inst_698982 = (state_699055[(7)]);
var inst_698989 = inst_698982.cljs$lang$protocol_mask$partition0$;
var inst_698990 = (inst_698989 & (64));
var inst_698991 = inst_698982.cljs$core$ISeq$;
var inst_698992 = (cljs.core.PROTOCOL_SENTINEL === inst_698991);
var inst_698993 = (inst_698990) || (inst_698992);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_698993)){
var statearr_699075_699133 = state_699055__$1;
(statearr_699075_699133[(1)] = (16));

} else {
var statearr_699076_699134 = state_699055__$1;
(statearr_699076_699134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (22))){
var inst_699014 = (state_699055[(14)]);
var inst_699015 = (state_699055[(10)]);
var inst_699013 = (state_699055[(2)]);
var inst_699014__$1 = cljs.core.nth.call(null,inst_699013,(0),null);
var inst_699015__$1 = cljs.core.nth.call(null,inst_699013,(1),null);
var inst_699016 = (inst_699014__$1 == null);
var inst_699017 = cljs.core._EQ_.call(null,inst_699015__$1,change);
var inst_699018 = (inst_699016) || (inst_699017);
var state_699055__$1 = (function (){var statearr_699077 = state_699055;
(statearr_699077[(14)] = inst_699014__$1);

(statearr_699077[(10)] = inst_699015__$1);

return statearr_699077;
})();
if(cljs.core.truth_(inst_699018)){
var statearr_699078_699135 = state_699055__$1;
(statearr_699078_699135[(1)] = (23));

} else {
var statearr_699079_699136 = state_699055__$1;
(statearr_699079_699136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (36))){
var inst_699005 = (state_699055[(12)]);
var inst_698982 = inst_699005;
var state_699055__$1 = (function (){var statearr_699080 = state_699055;
(statearr_699080[(7)] = inst_698982);

return statearr_699080;
})();
var statearr_699081_699137 = state_699055__$1;
(statearr_699081_699137[(2)] = null);

(statearr_699081_699137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (29))){
var inst_699029 = (state_699055[(11)]);
var state_699055__$1 = state_699055;
var statearr_699082_699138 = state_699055__$1;
(statearr_699082_699138[(2)] = inst_699029);

(statearr_699082_699138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (6))){
var state_699055__$1 = state_699055;
var statearr_699083_699139 = state_699055__$1;
(statearr_699083_699139[(2)] = false);

(statearr_699083_699139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (28))){
var inst_699025 = (state_699055[(2)]);
var inst_699026 = calc_state.call(null);
var inst_698982 = inst_699026;
var state_699055__$1 = (function (){var statearr_699084 = state_699055;
(statearr_699084[(15)] = inst_699025);

(statearr_699084[(7)] = inst_698982);

return statearr_699084;
})();
var statearr_699085_699140 = state_699055__$1;
(statearr_699085_699140[(2)] = null);

(statearr_699085_699140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (25))){
var inst_699051 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
var statearr_699086_699141 = state_699055__$1;
(statearr_699086_699141[(2)] = inst_699051);

(statearr_699086_699141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (34))){
var inst_699049 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
var statearr_699087_699142 = state_699055__$1;
(statearr_699087_699142[(2)] = inst_699049);

(statearr_699087_699142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (17))){
var state_699055__$1 = state_699055;
var statearr_699088_699143 = state_699055__$1;
(statearr_699088_699143[(2)] = false);

(statearr_699088_699143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (3))){
var state_699055__$1 = state_699055;
var statearr_699089_699144 = state_699055__$1;
(statearr_699089_699144[(2)] = false);

(statearr_699089_699144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (12))){
var inst_699053 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699055__$1,inst_699053);
} else {
if((state_val_699056 === (2))){
var inst_698957 = (state_699055[(8)]);
var inst_698962 = inst_698957.cljs$lang$protocol_mask$partition0$;
var inst_698963 = (inst_698962 & (64));
var inst_698964 = inst_698957.cljs$core$ISeq$;
var inst_698965 = (cljs.core.PROTOCOL_SENTINEL === inst_698964);
var inst_698966 = (inst_698963) || (inst_698965);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_698966)){
var statearr_699090_699145 = state_699055__$1;
(statearr_699090_699145[(1)] = (5));

} else {
var statearr_699091_699146 = state_699055__$1;
(statearr_699091_699146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (23))){
var inst_699014 = (state_699055[(14)]);
var inst_699020 = (inst_699014 == null);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_699020)){
var statearr_699092_699147 = state_699055__$1;
(statearr_699092_699147[(1)] = (26));

} else {
var statearr_699093_699148 = state_699055__$1;
(statearr_699093_699148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (35))){
var inst_699040 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
if(cljs.core.truth_(inst_699040)){
var statearr_699094_699149 = state_699055__$1;
(statearr_699094_699149[(1)] = (36));

} else {
var statearr_699095_699150 = state_699055__$1;
(statearr_699095_699150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (19))){
var inst_698982 = (state_699055[(7)]);
var inst_699002 = cljs.core.apply.call(null,cljs.core.hash_map,inst_698982);
var state_699055__$1 = state_699055;
var statearr_699096_699151 = state_699055__$1;
(statearr_699096_699151[(2)] = inst_699002);

(statearr_699096_699151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (11))){
var inst_698982 = (state_699055[(7)]);
var inst_698986 = (inst_698982 == null);
var inst_698987 = cljs.core.not.call(null,inst_698986);
var state_699055__$1 = state_699055;
if(inst_698987){
var statearr_699097_699152 = state_699055__$1;
(statearr_699097_699152[(1)] = (13));

} else {
var statearr_699098_699153 = state_699055__$1;
(statearr_699098_699153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (9))){
var inst_698957 = (state_699055[(8)]);
var state_699055__$1 = state_699055;
var statearr_699099_699154 = state_699055__$1;
(statearr_699099_699154[(2)] = inst_698957);

(statearr_699099_699154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (5))){
var state_699055__$1 = state_699055;
var statearr_699100_699155 = state_699055__$1;
(statearr_699100_699155[(2)] = true);

(statearr_699100_699155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (14))){
var state_699055__$1 = state_699055;
var statearr_699101_699156 = state_699055__$1;
(statearr_699101_699156[(2)] = false);

(statearr_699101_699156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (26))){
var inst_699015 = (state_699055[(10)]);
var inst_699022 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_699015);
var state_699055__$1 = state_699055;
var statearr_699102_699157 = state_699055__$1;
(statearr_699102_699157[(2)] = inst_699022);

(statearr_699102_699157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (16))){
var state_699055__$1 = state_699055;
var statearr_699103_699158 = state_699055__$1;
(statearr_699103_699158[(2)] = true);

(statearr_699103_699158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (38))){
var inst_699045 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
var statearr_699104_699159 = state_699055__$1;
(statearr_699104_699159[(2)] = inst_699045);

(statearr_699104_699159[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (30))){
var inst_699006 = (state_699055[(9)]);
var inst_699007 = (state_699055[(13)]);
var inst_699015 = (state_699055[(10)]);
var inst_699032 = cljs.core.empty_QMARK_.call(null,inst_699006);
var inst_699033 = inst_699007.call(null,inst_699015);
var inst_699034 = cljs.core.not.call(null,inst_699033);
var inst_699035 = (inst_699032) && (inst_699034);
var state_699055__$1 = state_699055;
var statearr_699105_699160 = state_699055__$1;
(statearr_699105_699160[(2)] = inst_699035);

(statearr_699105_699160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (10))){
var inst_698957 = (state_699055[(8)]);
var inst_698978 = (state_699055[(2)]);
var inst_698979 = cljs.core.get.call(null,inst_698978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_698980 = cljs.core.get.call(null,inst_698978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_698981 = cljs.core.get.call(null,inst_698978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_698982 = inst_698957;
var state_699055__$1 = (function (){var statearr_699106 = state_699055;
(statearr_699106[(16)] = inst_698979);

(statearr_699106[(17)] = inst_698980);

(statearr_699106[(7)] = inst_698982);

(statearr_699106[(18)] = inst_698981);

return statearr_699106;
})();
var statearr_699107_699161 = state_699055__$1;
(statearr_699107_699161[(2)] = null);

(statearr_699107_699161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (18))){
var inst_698997 = (state_699055[(2)]);
var state_699055__$1 = state_699055;
var statearr_699108_699162 = state_699055__$1;
(statearr_699108_699162[(2)] = inst_698997);

(statearr_699108_699162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (37))){
var state_699055__$1 = state_699055;
var statearr_699109_699163 = state_699055__$1;
(statearr_699109_699163[(2)] = null);

(statearr_699109_699163[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699056 === (8))){
var inst_698957 = (state_699055[(8)]);
var inst_698975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_698957);
var state_699055__$1 = state_699055;
var statearr_699110_699164 = state_699055__$1;
(statearr_699110_699164[(2)] = inst_698975);

(statearr_699110_699164[(1)] = (10));


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
});})(c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32859__auto__,c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32860__auto__ = null;
var cljs$core$async$mix_$_state_machine__32860__auto____0 = (function (){
var statearr_699114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_699114[(0)] = cljs$core$async$mix_$_state_machine__32860__auto__);

(statearr_699114[(1)] = (1));

return statearr_699114;
});
var cljs$core$async$mix_$_state_machine__32860__auto____1 = (function (state_699055){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699115){if((e699115 instanceof Object)){
var ex__32863__auto__ = e699115;
var statearr_699116_699165 = state_699055;
(statearr_699116_699165[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699166 = state_699055;
state_699055 = G__699166;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32860__auto__ = function(state_699055){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32860__auto____1.call(this,state_699055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32860__auto____0;
cljs$core$async$mix_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32860__auto____1;
return cljs$core$async$mix_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32884__auto__ = (function (){var statearr_699117 = f__32883__auto__.call(null);
(statearr_699117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699118);

return statearr_699117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28368__auto__ = (((p == null))?null:p);
var m__28369__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28369__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28368__auto__ = (((p == null))?null:p);
var m__28369__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,p,v,ch);
} else {
var m__28369__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args699167 = [];
var len__28871__auto___699170 = arguments.length;
var i__28872__auto___699171 = (0);
while(true){
if((i__28872__auto___699171 < len__28871__auto___699170)){
args699167.push((arguments[i__28872__auto___699171]));

var G__699172 = (i__28872__auto___699171 + (1));
i__28872__auto___699171 = G__699172;
continue;
} else {
}
break;
}

var G__699169 = args699167.length;
switch (G__699169) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699167.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28368__auto__ = (((p == null))?null:p);
var m__28369__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,p);
} else {
var m__28369__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28368__auto__ = (((p == null))?null:p);
var m__28369__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28368__auto__)]);
if(!((m__28369__auto__ == null))){
return m__28369__auto__.call(null,p,v);
} else {
var m__28369__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28369__auto____$1 == null))){
return m__28369__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args699175 = [];
var len__28871__auto___699300 = arguments.length;
var i__28872__auto___699301 = (0);
while(true){
if((i__28872__auto___699301 < len__28871__auto___699300)){
args699175.push((arguments[i__28872__auto___699301]));

var G__699302 = (i__28872__auto___699301 + (1));
i__28872__auto___699301 = G__699302;
continue;
} else {
}
break;
}

var G__699177 = args699175.length;
switch (G__699177) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699175.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27650__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27650__auto__,mults){
return (function (p1__699174_SHARP_){
if(cljs.core.truth_(p1__699174_SHARP_.call(null,topic))){
return p1__699174_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__699174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27650__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async699178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async699178 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta699179){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta699179 = meta699179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_699180,meta699179__$1){
var self__ = this;
var _699180__$1 = this;
return (new cljs.core.async.t_cljs$core$async699178(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta699179__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_699180){
var self__ = this;
var _699180__$1 = this;
return self__.meta699179;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async699178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async699178.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta699179","meta699179",-734979493,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async699178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async699178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async699178";

cljs.core.async.t_cljs$core$async699178.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async699178");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async699178 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async699178(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta699179){
return (new cljs.core.async.t_cljs$core$async699178(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta699179));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async699178(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32882__auto___699304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699304,mults,ensure_mult,p){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699304,mults,ensure_mult,p){
return (function (state_699252){
var state_val_699253 = (state_699252[(1)]);
if((state_val_699253 === (7))){
var inst_699248 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699254_699305 = state_699252__$1;
(statearr_699254_699305[(2)] = inst_699248);

(statearr_699254_699305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (20))){
var state_699252__$1 = state_699252;
var statearr_699255_699306 = state_699252__$1;
(statearr_699255_699306[(2)] = null);

(statearr_699255_699306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (1))){
var state_699252__$1 = state_699252;
var statearr_699256_699307 = state_699252__$1;
(statearr_699256_699307[(2)] = null);

(statearr_699256_699307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (24))){
var inst_699231 = (state_699252[(7)]);
var inst_699240 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_699231);
var state_699252__$1 = state_699252;
var statearr_699257_699308 = state_699252__$1;
(statearr_699257_699308[(2)] = inst_699240);

(statearr_699257_699308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (4))){
var inst_699183 = (state_699252[(8)]);
var inst_699183__$1 = (state_699252[(2)]);
var inst_699184 = (inst_699183__$1 == null);
var state_699252__$1 = (function (){var statearr_699258 = state_699252;
(statearr_699258[(8)] = inst_699183__$1);

return statearr_699258;
})();
if(cljs.core.truth_(inst_699184)){
var statearr_699259_699309 = state_699252__$1;
(statearr_699259_699309[(1)] = (5));

} else {
var statearr_699260_699310 = state_699252__$1;
(statearr_699260_699310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (15))){
var inst_699225 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699261_699311 = state_699252__$1;
(statearr_699261_699311[(2)] = inst_699225);

(statearr_699261_699311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (21))){
var inst_699245 = (state_699252[(2)]);
var state_699252__$1 = (function (){var statearr_699262 = state_699252;
(statearr_699262[(9)] = inst_699245);

return statearr_699262;
})();
var statearr_699263_699312 = state_699252__$1;
(statearr_699263_699312[(2)] = null);

(statearr_699263_699312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (13))){
var inst_699207 = (state_699252[(10)]);
var inst_699209 = cljs.core.chunked_seq_QMARK_.call(null,inst_699207);
var state_699252__$1 = state_699252;
if(inst_699209){
var statearr_699264_699313 = state_699252__$1;
(statearr_699264_699313[(1)] = (16));

} else {
var statearr_699265_699314 = state_699252__$1;
(statearr_699265_699314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (22))){
var inst_699237 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
if(cljs.core.truth_(inst_699237)){
var statearr_699266_699315 = state_699252__$1;
(statearr_699266_699315[(1)] = (23));

} else {
var statearr_699267_699316 = state_699252__$1;
(statearr_699267_699316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (6))){
var inst_699231 = (state_699252[(7)]);
var inst_699183 = (state_699252[(8)]);
var inst_699233 = (state_699252[(11)]);
var inst_699231__$1 = topic_fn.call(null,inst_699183);
var inst_699232 = cljs.core.deref.call(null,mults);
var inst_699233__$1 = cljs.core.get.call(null,inst_699232,inst_699231__$1);
var state_699252__$1 = (function (){var statearr_699268 = state_699252;
(statearr_699268[(7)] = inst_699231__$1);

(statearr_699268[(11)] = inst_699233__$1);

return statearr_699268;
})();
if(cljs.core.truth_(inst_699233__$1)){
var statearr_699269_699317 = state_699252__$1;
(statearr_699269_699317[(1)] = (19));

} else {
var statearr_699270_699318 = state_699252__$1;
(statearr_699270_699318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (25))){
var inst_699242 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699271_699319 = state_699252__$1;
(statearr_699271_699319[(2)] = inst_699242);

(statearr_699271_699319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (17))){
var inst_699207 = (state_699252[(10)]);
var inst_699216 = cljs.core.first.call(null,inst_699207);
var inst_699217 = cljs.core.async.muxch_STAR_.call(null,inst_699216);
var inst_699218 = cljs.core.async.close_BANG_.call(null,inst_699217);
var inst_699219 = cljs.core.next.call(null,inst_699207);
var inst_699193 = inst_699219;
var inst_699194 = null;
var inst_699195 = (0);
var inst_699196 = (0);
var state_699252__$1 = (function (){var statearr_699272 = state_699252;
(statearr_699272[(12)] = inst_699195);

(statearr_699272[(13)] = inst_699193);

(statearr_699272[(14)] = inst_699218);

(statearr_699272[(15)] = inst_699194);

(statearr_699272[(16)] = inst_699196);

return statearr_699272;
})();
var statearr_699273_699320 = state_699252__$1;
(statearr_699273_699320[(2)] = null);

(statearr_699273_699320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (3))){
var inst_699250 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699252__$1,inst_699250);
} else {
if((state_val_699253 === (12))){
var inst_699227 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699274_699321 = state_699252__$1;
(statearr_699274_699321[(2)] = inst_699227);

(statearr_699274_699321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (2))){
var state_699252__$1 = state_699252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699252__$1,(4),ch);
} else {
if((state_val_699253 === (23))){
var state_699252__$1 = state_699252;
var statearr_699275_699322 = state_699252__$1;
(statearr_699275_699322[(2)] = null);

(statearr_699275_699322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (19))){
var inst_699183 = (state_699252[(8)]);
var inst_699233 = (state_699252[(11)]);
var inst_699235 = cljs.core.async.muxch_STAR_.call(null,inst_699233);
var state_699252__$1 = state_699252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699252__$1,(22),inst_699235,inst_699183);
} else {
if((state_val_699253 === (11))){
var inst_699193 = (state_699252[(13)]);
var inst_699207 = (state_699252[(10)]);
var inst_699207__$1 = cljs.core.seq.call(null,inst_699193);
var state_699252__$1 = (function (){var statearr_699276 = state_699252;
(statearr_699276[(10)] = inst_699207__$1);

return statearr_699276;
})();
if(inst_699207__$1){
var statearr_699277_699323 = state_699252__$1;
(statearr_699277_699323[(1)] = (13));

} else {
var statearr_699278_699324 = state_699252__$1;
(statearr_699278_699324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (9))){
var inst_699229 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699279_699325 = state_699252__$1;
(statearr_699279_699325[(2)] = inst_699229);

(statearr_699279_699325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (5))){
var inst_699190 = cljs.core.deref.call(null,mults);
var inst_699191 = cljs.core.vals.call(null,inst_699190);
var inst_699192 = cljs.core.seq.call(null,inst_699191);
var inst_699193 = inst_699192;
var inst_699194 = null;
var inst_699195 = (0);
var inst_699196 = (0);
var state_699252__$1 = (function (){var statearr_699280 = state_699252;
(statearr_699280[(12)] = inst_699195);

(statearr_699280[(13)] = inst_699193);

(statearr_699280[(15)] = inst_699194);

(statearr_699280[(16)] = inst_699196);

return statearr_699280;
})();
var statearr_699281_699326 = state_699252__$1;
(statearr_699281_699326[(2)] = null);

(statearr_699281_699326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (14))){
var state_699252__$1 = state_699252;
var statearr_699285_699327 = state_699252__$1;
(statearr_699285_699327[(2)] = null);

(statearr_699285_699327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (16))){
var inst_699207 = (state_699252[(10)]);
var inst_699211 = cljs.core.chunk_first.call(null,inst_699207);
var inst_699212 = cljs.core.chunk_rest.call(null,inst_699207);
var inst_699213 = cljs.core.count.call(null,inst_699211);
var inst_699193 = inst_699212;
var inst_699194 = inst_699211;
var inst_699195 = inst_699213;
var inst_699196 = (0);
var state_699252__$1 = (function (){var statearr_699286 = state_699252;
(statearr_699286[(12)] = inst_699195);

(statearr_699286[(13)] = inst_699193);

(statearr_699286[(15)] = inst_699194);

(statearr_699286[(16)] = inst_699196);

return statearr_699286;
})();
var statearr_699287_699328 = state_699252__$1;
(statearr_699287_699328[(2)] = null);

(statearr_699287_699328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (10))){
var inst_699195 = (state_699252[(12)]);
var inst_699193 = (state_699252[(13)]);
var inst_699194 = (state_699252[(15)]);
var inst_699196 = (state_699252[(16)]);
var inst_699201 = cljs.core._nth.call(null,inst_699194,inst_699196);
var inst_699202 = cljs.core.async.muxch_STAR_.call(null,inst_699201);
var inst_699203 = cljs.core.async.close_BANG_.call(null,inst_699202);
var inst_699204 = (inst_699196 + (1));
var tmp699282 = inst_699195;
var tmp699283 = inst_699193;
var tmp699284 = inst_699194;
var inst_699193__$1 = tmp699283;
var inst_699194__$1 = tmp699284;
var inst_699195__$1 = tmp699282;
var inst_699196__$1 = inst_699204;
var state_699252__$1 = (function (){var statearr_699288 = state_699252;
(statearr_699288[(12)] = inst_699195__$1);

(statearr_699288[(13)] = inst_699193__$1);

(statearr_699288[(15)] = inst_699194__$1);

(statearr_699288[(17)] = inst_699203);

(statearr_699288[(16)] = inst_699196__$1);

return statearr_699288;
})();
var statearr_699289_699329 = state_699252__$1;
(statearr_699289_699329[(2)] = null);

(statearr_699289_699329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (18))){
var inst_699222 = (state_699252[(2)]);
var state_699252__$1 = state_699252;
var statearr_699290_699330 = state_699252__$1;
(statearr_699290_699330[(2)] = inst_699222);

(statearr_699290_699330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699253 === (8))){
var inst_699195 = (state_699252[(12)]);
var inst_699196 = (state_699252[(16)]);
var inst_699198 = (inst_699196 < inst_699195);
var inst_699199 = inst_699198;
var state_699252__$1 = state_699252;
if(cljs.core.truth_(inst_699199)){
var statearr_699291_699331 = state_699252__$1;
(statearr_699291_699331[(1)] = (10));

} else {
var statearr_699292_699332 = state_699252__$1;
(statearr_699292_699332[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32882__auto___699304,mults,ensure_mult,p))
;
return ((function (switch__32859__auto__,c__32882__auto___699304,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_699296[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699296[(1)] = (1));

return statearr_699296;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699252){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699297){if((e699297 instanceof Object)){
var ex__32863__auto__ = e699297;
var statearr_699298_699333 = state_699252;
(statearr_699298_699333[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699334 = state_699252;
state_699252 = G__699334;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699304,mults,ensure_mult,p))
})();
var state__32884__auto__ = (function (){var statearr_699299 = f__32883__auto__.call(null);
(statearr_699299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699304);

return statearr_699299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699304,mults,ensure_mult,p))
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
var args699335 = [];
var len__28871__auto___699338 = arguments.length;
var i__28872__auto___699339 = (0);
while(true){
if((i__28872__auto___699339 < len__28871__auto___699338)){
args699335.push((arguments[i__28872__auto___699339]));

var G__699340 = (i__28872__auto___699339 + (1));
i__28872__auto___699339 = G__699340;
continue;
} else {
}
break;
}

var G__699337 = args699335.length;
switch (G__699337) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699335.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args699342 = [];
var len__28871__auto___699345 = arguments.length;
var i__28872__auto___699346 = (0);
while(true){
if((i__28872__auto___699346 < len__28871__auto___699345)){
args699342.push((arguments[i__28872__auto___699346]));

var G__699347 = (i__28872__auto___699346 + (1));
i__28872__auto___699346 = G__699347;
continue;
} else {
}
break;
}

var G__699344 = args699342.length;
switch (G__699344) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699342.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args699349 = [];
var len__28871__auto___699420 = arguments.length;
var i__28872__auto___699421 = (0);
while(true){
if((i__28872__auto___699421 < len__28871__auto___699420)){
args699349.push((arguments[i__28872__auto___699421]));

var G__699422 = (i__28872__auto___699421 + (1));
i__28872__auto___699421 = G__699422;
continue;
} else {
}
break;
}

var G__699351 = args699349.length;
switch (G__699351) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699349.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32882__auto___699424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_699390){
var state_val_699391 = (state_699390[(1)]);
if((state_val_699391 === (7))){
var state_699390__$1 = state_699390;
var statearr_699392_699425 = state_699390__$1;
(statearr_699392_699425[(2)] = null);

(statearr_699392_699425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (1))){
var state_699390__$1 = state_699390;
var statearr_699393_699426 = state_699390__$1;
(statearr_699393_699426[(2)] = null);

(statearr_699393_699426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (4))){
var inst_699354 = (state_699390[(7)]);
var inst_699356 = (inst_699354 < cnt);
var state_699390__$1 = state_699390;
if(cljs.core.truth_(inst_699356)){
var statearr_699394_699427 = state_699390__$1;
(statearr_699394_699427[(1)] = (6));

} else {
var statearr_699395_699428 = state_699390__$1;
(statearr_699395_699428[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (15))){
var inst_699386 = (state_699390[(2)]);
var state_699390__$1 = state_699390;
var statearr_699396_699429 = state_699390__$1;
(statearr_699396_699429[(2)] = inst_699386);

(statearr_699396_699429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (13))){
var inst_699379 = cljs.core.async.close_BANG_.call(null,out);
var state_699390__$1 = state_699390;
var statearr_699397_699430 = state_699390__$1;
(statearr_699397_699430[(2)] = inst_699379);

(statearr_699397_699430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (6))){
var state_699390__$1 = state_699390;
var statearr_699398_699431 = state_699390__$1;
(statearr_699398_699431[(2)] = null);

(statearr_699398_699431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (3))){
var inst_699388 = (state_699390[(2)]);
var state_699390__$1 = state_699390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699390__$1,inst_699388);
} else {
if((state_val_699391 === (12))){
var inst_699376 = (state_699390[(8)]);
var inst_699376__$1 = (state_699390[(2)]);
var inst_699377 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_699376__$1);
var state_699390__$1 = (function (){var statearr_699399 = state_699390;
(statearr_699399[(8)] = inst_699376__$1);

return statearr_699399;
})();
if(cljs.core.truth_(inst_699377)){
var statearr_699400_699432 = state_699390__$1;
(statearr_699400_699432[(1)] = (13));

} else {
var statearr_699401_699433 = state_699390__$1;
(statearr_699401_699433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (2))){
var inst_699353 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_699354 = (0);
var state_699390__$1 = (function (){var statearr_699402 = state_699390;
(statearr_699402[(9)] = inst_699353);

(statearr_699402[(7)] = inst_699354);

return statearr_699402;
})();
var statearr_699403_699434 = state_699390__$1;
(statearr_699403_699434[(2)] = null);

(statearr_699403_699434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (11))){
var inst_699354 = (state_699390[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_699390,(10),Object,null,(9));
var inst_699363 = chs__$1.call(null,inst_699354);
var inst_699364 = done.call(null,inst_699354);
var inst_699365 = cljs.core.async.take_BANG_.call(null,inst_699363,inst_699364);
var state_699390__$1 = state_699390;
var statearr_699404_699435 = state_699390__$1;
(statearr_699404_699435[(2)] = inst_699365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (9))){
var inst_699354 = (state_699390[(7)]);
var inst_699367 = (state_699390[(2)]);
var inst_699368 = (inst_699354 + (1));
var inst_699354__$1 = inst_699368;
var state_699390__$1 = (function (){var statearr_699405 = state_699390;
(statearr_699405[(7)] = inst_699354__$1);

(statearr_699405[(10)] = inst_699367);

return statearr_699405;
})();
var statearr_699406_699436 = state_699390__$1;
(statearr_699406_699436[(2)] = null);

(statearr_699406_699436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (5))){
var inst_699374 = (state_699390[(2)]);
var state_699390__$1 = (function (){var statearr_699407 = state_699390;
(statearr_699407[(11)] = inst_699374);

return statearr_699407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699390__$1,(12),dchan);
} else {
if((state_val_699391 === (14))){
var inst_699376 = (state_699390[(8)]);
var inst_699381 = cljs.core.apply.call(null,f,inst_699376);
var state_699390__$1 = state_699390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699390__$1,(16),out,inst_699381);
} else {
if((state_val_699391 === (16))){
var inst_699383 = (state_699390[(2)]);
var state_699390__$1 = (function (){var statearr_699408 = state_699390;
(statearr_699408[(12)] = inst_699383);

return statearr_699408;
})();
var statearr_699409_699437 = state_699390__$1;
(statearr_699409_699437[(2)] = null);

(statearr_699409_699437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (10))){
var inst_699358 = (state_699390[(2)]);
var inst_699359 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_699390__$1 = (function (){var statearr_699410 = state_699390;
(statearr_699410[(13)] = inst_699358);

return statearr_699410;
})();
var statearr_699411_699438 = state_699390__$1;
(statearr_699411_699438[(2)] = inst_699359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699391 === (8))){
var inst_699372 = (state_699390[(2)]);
var state_699390__$1 = state_699390;
var statearr_699412_699439 = state_699390__$1;
(statearr_699412_699439[(2)] = inst_699372);

(statearr_699412_699439[(1)] = (5));


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
});})(c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32859__auto__,c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_699416[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699416[(1)] = (1));

return statearr_699416;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699390){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699417){if((e699417 instanceof Object)){
var ex__32863__auto__ = e699417;
var statearr_699418_699440 = state_699390;
(statearr_699418_699440[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699441 = state_699390;
state_699390 = G__699441;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32884__auto__ = (function (){var statearr_699419 = f__32883__auto__.call(null);
(statearr_699419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699424);

return statearr_699419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699424,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args699443 = [];
var len__28871__auto___699501 = arguments.length;
var i__28872__auto___699502 = (0);
while(true){
if((i__28872__auto___699502 < len__28871__auto___699501)){
args699443.push((arguments[i__28872__auto___699502]));

var G__699503 = (i__28872__auto___699502 + (1));
i__28872__auto___699502 = G__699503;
continue;
} else {
}
break;
}

var G__699445 = args699443.length;
switch (G__699445) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699443.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___699505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699505,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699505,out){
return (function (state_699477){
var state_val_699478 = (state_699477[(1)]);
if((state_val_699478 === (7))){
var inst_699457 = (state_699477[(7)]);
var inst_699456 = (state_699477[(8)]);
var inst_699456__$1 = (state_699477[(2)]);
var inst_699457__$1 = cljs.core.nth.call(null,inst_699456__$1,(0),null);
var inst_699458 = cljs.core.nth.call(null,inst_699456__$1,(1),null);
var inst_699459 = (inst_699457__$1 == null);
var state_699477__$1 = (function (){var statearr_699479 = state_699477;
(statearr_699479[(9)] = inst_699458);

(statearr_699479[(7)] = inst_699457__$1);

(statearr_699479[(8)] = inst_699456__$1);

return statearr_699479;
})();
if(cljs.core.truth_(inst_699459)){
var statearr_699480_699506 = state_699477__$1;
(statearr_699480_699506[(1)] = (8));

} else {
var statearr_699481_699507 = state_699477__$1;
(statearr_699481_699507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (1))){
var inst_699446 = cljs.core.vec.call(null,chs);
var inst_699447 = inst_699446;
var state_699477__$1 = (function (){var statearr_699482 = state_699477;
(statearr_699482[(10)] = inst_699447);

return statearr_699482;
})();
var statearr_699483_699508 = state_699477__$1;
(statearr_699483_699508[(2)] = null);

(statearr_699483_699508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (4))){
var inst_699447 = (state_699477[(10)]);
var state_699477__$1 = state_699477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_699477__$1,(7),inst_699447);
} else {
if((state_val_699478 === (6))){
var inst_699473 = (state_699477[(2)]);
var state_699477__$1 = state_699477;
var statearr_699484_699509 = state_699477__$1;
(statearr_699484_699509[(2)] = inst_699473);

(statearr_699484_699509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (3))){
var inst_699475 = (state_699477[(2)]);
var state_699477__$1 = state_699477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699477__$1,inst_699475);
} else {
if((state_val_699478 === (2))){
var inst_699447 = (state_699477[(10)]);
var inst_699449 = cljs.core.count.call(null,inst_699447);
var inst_699450 = (inst_699449 > (0));
var state_699477__$1 = state_699477;
if(cljs.core.truth_(inst_699450)){
var statearr_699486_699510 = state_699477__$1;
(statearr_699486_699510[(1)] = (4));

} else {
var statearr_699487_699511 = state_699477__$1;
(statearr_699487_699511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (11))){
var inst_699447 = (state_699477[(10)]);
var inst_699466 = (state_699477[(2)]);
var tmp699485 = inst_699447;
var inst_699447__$1 = tmp699485;
var state_699477__$1 = (function (){var statearr_699488 = state_699477;
(statearr_699488[(10)] = inst_699447__$1);

(statearr_699488[(11)] = inst_699466);

return statearr_699488;
})();
var statearr_699489_699512 = state_699477__$1;
(statearr_699489_699512[(2)] = null);

(statearr_699489_699512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (9))){
var inst_699457 = (state_699477[(7)]);
var state_699477__$1 = state_699477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699477__$1,(11),out,inst_699457);
} else {
if((state_val_699478 === (5))){
var inst_699471 = cljs.core.async.close_BANG_.call(null,out);
var state_699477__$1 = state_699477;
var statearr_699490_699513 = state_699477__$1;
(statearr_699490_699513[(2)] = inst_699471);

(statearr_699490_699513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (10))){
var inst_699469 = (state_699477[(2)]);
var state_699477__$1 = state_699477;
var statearr_699491_699514 = state_699477__$1;
(statearr_699491_699514[(2)] = inst_699469);

(statearr_699491_699514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699478 === (8))){
var inst_699458 = (state_699477[(9)]);
var inst_699447 = (state_699477[(10)]);
var inst_699457 = (state_699477[(7)]);
var inst_699456 = (state_699477[(8)]);
var inst_699461 = (function (){var cs = inst_699447;
var vec__699452 = inst_699456;
var v = inst_699457;
var c = inst_699458;
return ((function (cs,vec__699452,v,c,inst_699458,inst_699447,inst_699457,inst_699456,state_val_699478,c__32882__auto___699505,out){
return (function (p1__699442_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__699442_SHARP_);
});
;})(cs,vec__699452,v,c,inst_699458,inst_699447,inst_699457,inst_699456,state_val_699478,c__32882__auto___699505,out))
})();
var inst_699462 = cljs.core.filterv.call(null,inst_699461,inst_699447);
var inst_699447__$1 = inst_699462;
var state_699477__$1 = (function (){var statearr_699492 = state_699477;
(statearr_699492[(10)] = inst_699447__$1);

return statearr_699492;
})();
var statearr_699493_699515 = state_699477__$1;
(statearr_699493_699515[(2)] = null);

(statearr_699493_699515[(1)] = (2));


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
});})(c__32882__auto___699505,out))
;
return ((function (switch__32859__auto__,c__32882__auto___699505,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_699497[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699497[(1)] = (1));

return statearr_699497;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699477){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699498){if((e699498 instanceof Object)){
var ex__32863__auto__ = e699498;
var statearr_699499_699516 = state_699477;
(statearr_699499_699516[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699517 = state_699477;
state_699477 = G__699517;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699505,out))
})();
var state__32884__auto__ = (function (){var statearr_699500 = f__32883__auto__.call(null);
(statearr_699500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699505);

return statearr_699500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699505,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args699518 = [];
var len__28871__auto___699567 = arguments.length;
var i__28872__auto___699568 = (0);
while(true){
if((i__28872__auto___699568 < len__28871__auto___699567)){
args699518.push((arguments[i__28872__auto___699568]));

var G__699569 = (i__28872__auto___699568 + (1));
i__28872__auto___699568 = G__699569;
continue;
} else {
}
break;
}

var G__699520 = args699518.length;
switch (G__699520) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699518.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___699571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699571,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699571,out){
return (function (state_699544){
var state_val_699545 = (state_699544[(1)]);
if((state_val_699545 === (7))){
var inst_699526 = (state_699544[(7)]);
var inst_699526__$1 = (state_699544[(2)]);
var inst_699527 = (inst_699526__$1 == null);
var inst_699528 = cljs.core.not.call(null,inst_699527);
var state_699544__$1 = (function (){var statearr_699546 = state_699544;
(statearr_699546[(7)] = inst_699526__$1);

return statearr_699546;
})();
if(inst_699528){
var statearr_699547_699572 = state_699544__$1;
(statearr_699547_699572[(1)] = (8));

} else {
var statearr_699548_699573 = state_699544__$1;
(statearr_699548_699573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (1))){
var inst_699521 = (0);
var state_699544__$1 = (function (){var statearr_699549 = state_699544;
(statearr_699549[(8)] = inst_699521);

return statearr_699549;
})();
var statearr_699550_699574 = state_699544__$1;
(statearr_699550_699574[(2)] = null);

(statearr_699550_699574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (4))){
var state_699544__$1 = state_699544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699544__$1,(7),ch);
} else {
if((state_val_699545 === (6))){
var inst_699539 = (state_699544[(2)]);
var state_699544__$1 = state_699544;
var statearr_699551_699575 = state_699544__$1;
(statearr_699551_699575[(2)] = inst_699539);

(statearr_699551_699575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (3))){
var inst_699541 = (state_699544[(2)]);
var inst_699542 = cljs.core.async.close_BANG_.call(null,out);
var state_699544__$1 = (function (){var statearr_699552 = state_699544;
(statearr_699552[(9)] = inst_699541);

return statearr_699552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699544__$1,inst_699542);
} else {
if((state_val_699545 === (2))){
var inst_699521 = (state_699544[(8)]);
var inst_699523 = (inst_699521 < n);
var state_699544__$1 = state_699544;
if(cljs.core.truth_(inst_699523)){
var statearr_699553_699576 = state_699544__$1;
(statearr_699553_699576[(1)] = (4));

} else {
var statearr_699554_699577 = state_699544__$1;
(statearr_699554_699577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (11))){
var inst_699521 = (state_699544[(8)]);
var inst_699531 = (state_699544[(2)]);
var inst_699532 = (inst_699521 + (1));
var inst_699521__$1 = inst_699532;
var state_699544__$1 = (function (){var statearr_699555 = state_699544;
(statearr_699555[(8)] = inst_699521__$1);

(statearr_699555[(10)] = inst_699531);

return statearr_699555;
})();
var statearr_699556_699578 = state_699544__$1;
(statearr_699556_699578[(2)] = null);

(statearr_699556_699578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (9))){
var state_699544__$1 = state_699544;
var statearr_699557_699579 = state_699544__$1;
(statearr_699557_699579[(2)] = null);

(statearr_699557_699579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (5))){
var state_699544__$1 = state_699544;
var statearr_699558_699580 = state_699544__$1;
(statearr_699558_699580[(2)] = null);

(statearr_699558_699580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (10))){
var inst_699536 = (state_699544[(2)]);
var state_699544__$1 = state_699544;
var statearr_699559_699581 = state_699544__$1;
(statearr_699559_699581[(2)] = inst_699536);

(statearr_699559_699581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699545 === (8))){
var inst_699526 = (state_699544[(7)]);
var state_699544__$1 = state_699544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699544__$1,(11),out,inst_699526);
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
});})(c__32882__auto___699571,out))
;
return ((function (switch__32859__auto__,c__32882__auto___699571,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_699563[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699563[(1)] = (1));

return statearr_699563;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699544){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699564){if((e699564 instanceof Object)){
var ex__32863__auto__ = e699564;
var statearr_699565_699582 = state_699544;
(statearr_699565_699582[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699583 = state_699544;
state_699544 = G__699583;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699571,out))
})();
var state__32884__auto__ = (function (){var statearr_699566 = f__32883__auto__.call(null);
(statearr_699566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699571);

return statearr_699566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699571,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async699591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async699591 = (function (f,ch,meta699592){
this.f = f;
this.ch = ch;
this.meta699592 = meta699592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_699593,meta699592__$1){
var self__ = this;
var _699593__$1 = this;
return (new cljs.core.async.t_cljs$core$async699591(self__.f,self__.ch,meta699592__$1));
});


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_699593){
var self__ = this;
var _699593__$1 = this;
return self__.meta699592;
});


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async699594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async699594 = (function (f,ch,meta699592,_,fn1,meta699595){
this.f = f;
this.ch = ch;
this.meta699592 = meta699592;
this._ = _;
this.fn1 = fn1;
this.meta699595 = meta699595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_699596,meta699595__$1){
var self__ = this;
var _699596__$1 = this;
return (new cljs.core.async.t_cljs$core$async699594(self__.f,self__.ch,self__.meta699592,self__._,self__.fn1,meta699595__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_699596){
var self__ = this;
var _699596__$1 = this;
return self__.meta699595;
});})(___$1))
;


cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async699594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__699584_SHARP_){
return f1.call(null,(((p1__699584_SHARP_ == null))?null:self__.f.call(null,p1__699584_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async699594.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta699592","meta699592",1429839939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async699591","cljs.core.async/t_cljs$core$async699591",1636782177,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta699595","meta699595",675801401,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async699594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async699594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async699594";

cljs.core.async.t_cljs$core$async699594.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async699594");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async699594 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async699594(f__$1,ch__$1,meta699592__$1,___$2,fn1__$1,meta699595){
return (new cljs.core.async.t_cljs$core$async699594(f__$1,ch__$1,meta699592__$1,___$2,fn1__$1,meta699595));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async699594(self__.f,self__.ch,self__.meta699592,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27638__auto__ = ret;
if(cljs.core.truth_(and__27638__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27638__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async699591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta699592","meta699592",1429839939,null)], null);
});

cljs.core.async.t_cljs$core$async699591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async699591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async699591";

cljs.core.async.t_cljs$core$async699591.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async699591");
});

cljs.core.async.__GT_t_cljs$core$async699591 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async699591(f__$1,ch__$1,meta699592){
return (new cljs.core.async.t_cljs$core$async699591(f__$1,ch__$1,meta699592));
});

}

return (new cljs.core.async.t_cljs$core$async699591(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async699600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async699600 = (function (f,ch,meta699601){
this.f = f;
this.ch = ch;
this.meta699601 = meta699601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_699602,meta699601__$1){
var self__ = this;
var _699602__$1 = this;
return (new cljs.core.async.t_cljs$core$async699600(self__.f,self__.ch,meta699601__$1));
});


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_699602){
var self__ = this;
var _699602__$1 = this;
return self__.meta699601;
});


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async699600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta699601","meta699601",-1815774563,null)], null);
});

cljs.core.async.t_cljs$core$async699600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async699600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async699600";

cljs.core.async.t_cljs$core$async699600.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async699600");
});

cljs.core.async.__GT_t_cljs$core$async699600 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async699600(f__$1,ch__$1,meta699601){
return (new cljs.core.async.t_cljs$core$async699600(f__$1,ch__$1,meta699601));
});

}

return (new cljs.core.async.t_cljs$core$async699600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async699606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async699606 = (function (p,ch,meta699607){
this.p = p;
this.ch = ch;
this.meta699607 = meta699607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_699608,meta699607__$1){
var self__ = this;
var _699608__$1 = this;
return (new cljs.core.async.t_cljs$core$async699606(self__.p,self__.ch,meta699607__$1));
});


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_699608){
var self__ = this;
var _699608__$1 = this;
return self__.meta699607;
});


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async699606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async699606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta699607","meta699607",-1107251581,null)], null);
});

cljs.core.async.t_cljs$core$async699606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async699606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async699606";

cljs.core.async.t_cljs$core$async699606.cljs$lang$ctorPrWriter = (function (this__28307__auto__,writer__28308__auto__,opt__28309__auto__){
return cljs.core._write.call(null,writer__28308__auto__,"cljs.core.async/t_cljs$core$async699606");
});

cljs.core.async.__GT_t_cljs$core$async699606 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async699606(p__$1,ch__$1,meta699607){
return (new cljs.core.async.t_cljs$core$async699606(p__$1,ch__$1,meta699607));
});

}

return (new cljs.core.async.t_cljs$core$async699606(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args699609 = [];
var len__28871__auto___699653 = arguments.length;
var i__28872__auto___699654 = (0);
while(true){
if((i__28872__auto___699654 < len__28871__auto___699653)){
args699609.push((arguments[i__28872__auto___699654]));

var G__699655 = (i__28872__auto___699654 + (1));
i__28872__auto___699654 = G__699655;
continue;
} else {
}
break;
}

var G__699611 = args699609.length;
switch (G__699611) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699609.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___699657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699657,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699657,out){
return (function (state_699632){
var state_val_699633 = (state_699632[(1)]);
if((state_val_699633 === (7))){
var inst_699628 = (state_699632[(2)]);
var state_699632__$1 = state_699632;
var statearr_699634_699658 = state_699632__$1;
(statearr_699634_699658[(2)] = inst_699628);

(statearr_699634_699658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (1))){
var state_699632__$1 = state_699632;
var statearr_699635_699659 = state_699632__$1;
(statearr_699635_699659[(2)] = null);

(statearr_699635_699659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (4))){
var inst_699614 = (state_699632[(7)]);
var inst_699614__$1 = (state_699632[(2)]);
var inst_699615 = (inst_699614__$1 == null);
var state_699632__$1 = (function (){var statearr_699636 = state_699632;
(statearr_699636[(7)] = inst_699614__$1);

return statearr_699636;
})();
if(cljs.core.truth_(inst_699615)){
var statearr_699637_699660 = state_699632__$1;
(statearr_699637_699660[(1)] = (5));

} else {
var statearr_699638_699661 = state_699632__$1;
(statearr_699638_699661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (6))){
var inst_699614 = (state_699632[(7)]);
var inst_699619 = p.call(null,inst_699614);
var state_699632__$1 = state_699632;
if(cljs.core.truth_(inst_699619)){
var statearr_699639_699662 = state_699632__$1;
(statearr_699639_699662[(1)] = (8));

} else {
var statearr_699640_699663 = state_699632__$1;
(statearr_699640_699663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (3))){
var inst_699630 = (state_699632[(2)]);
var state_699632__$1 = state_699632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699632__$1,inst_699630);
} else {
if((state_val_699633 === (2))){
var state_699632__$1 = state_699632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699632__$1,(4),ch);
} else {
if((state_val_699633 === (11))){
var inst_699622 = (state_699632[(2)]);
var state_699632__$1 = state_699632;
var statearr_699641_699664 = state_699632__$1;
(statearr_699641_699664[(2)] = inst_699622);

(statearr_699641_699664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (9))){
var state_699632__$1 = state_699632;
var statearr_699642_699665 = state_699632__$1;
(statearr_699642_699665[(2)] = null);

(statearr_699642_699665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (5))){
var inst_699617 = cljs.core.async.close_BANG_.call(null,out);
var state_699632__$1 = state_699632;
var statearr_699643_699666 = state_699632__$1;
(statearr_699643_699666[(2)] = inst_699617);

(statearr_699643_699666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (10))){
var inst_699625 = (state_699632[(2)]);
var state_699632__$1 = (function (){var statearr_699644 = state_699632;
(statearr_699644[(8)] = inst_699625);

return statearr_699644;
})();
var statearr_699645_699667 = state_699632__$1;
(statearr_699645_699667[(2)] = null);

(statearr_699645_699667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699633 === (8))){
var inst_699614 = (state_699632[(7)]);
var state_699632__$1 = state_699632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699632__$1,(11),out,inst_699614);
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
});})(c__32882__auto___699657,out))
;
return ((function (switch__32859__auto__,c__32882__auto___699657,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699649 = [null,null,null,null,null,null,null,null,null];
(statearr_699649[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699649[(1)] = (1));

return statearr_699649;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699632){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699650){if((e699650 instanceof Object)){
var ex__32863__auto__ = e699650;
var statearr_699651_699668 = state_699632;
(statearr_699651_699668[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699669 = state_699632;
state_699632 = G__699669;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699657,out))
})();
var state__32884__auto__ = (function (){var statearr_699652 = f__32883__auto__.call(null);
(statearr_699652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699657);

return statearr_699652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699657,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args699670 = [];
var len__28871__auto___699673 = arguments.length;
var i__28872__auto___699674 = (0);
while(true){
if((i__28872__auto___699674 < len__28871__auto___699673)){
args699670.push((arguments[i__28872__auto___699674]));

var G__699675 = (i__28872__auto___699674 + (1));
i__28872__auto___699674 = G__699675;
continue;
} else {
}
break;
}

var G__699672 = args699670.length;
switch (G__699672) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699670.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_699842){
var state_val_699843 = (state_699842[(1)]);
if((state_val_699843 === (7))){
var inst_699838 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
var statearr_699844_699885 = state_699842__$1;
(statearr_699844_699885[(2)] = inst_699838);

(statearr_699844_699885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (20))){
var inst_699808 = (state_699842[(7)]);
var inst_699819 = (state_699842[(2)]);
var inst_699820 = cljs.core.next.call(null,inst_699808);
var inst_699794 = inst_699820;
var inst_699795 = null;
var inst_699796 = (0);
var inst_699797 = (0);
var state_699842__$1 = (function (){var statearr_699845 = state_699842;
(statearr_699845[(8)] = inst_699819);

(statearr_699845[(9)] = inst_699795);

(statearr_699845[(10)] = inst_699794);

(statearr_699845[(11)] = inst_699797);

(statearr_699845[(12)] = inst_699796);

return statearr_699845;
})();
var statearr_699846_699886 = state_699842__$1;
(statearr_699846_699886[(2)] = null);

(statearr_699846_699886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (1))){
var state_699842__$1 = state_699842;
var statearr_699847_699887 = state_699842__$1;
(statearr_699847_699887[(2)] = null);

(statearr_699847_699887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (4))){
var inst_699783 = (state_699842[(13)]);
var inst_699783__$1 = (state_699842[(2)]);
var inst_699784 = (inst_699783__$1 == null);
var state_699842__$1 = (function (){var statearr_699848 = state_699842;
(statearr_699848[(13)] = inst_699783__$1);

return statearr_699848;
})();
if(cljs.core.truth_(inst_699784)){
var statearr_699849_699888 = state_699842__$1;
(statearr_699849_699888[(1)] = (5));

} else {
var statearr_699850_699889 = state_699842__$1;
(statearr_699850_699889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (15))){
var state_699842__$1 = state_699842;
var statearr_699854_699890 = state_699842__$1;
(statearr_699854_699890[(2)] = null);

(statearr_699854_699890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (21))){
var state_699842__$1 = state_699842;
var statearr_699855_699891 = state_699842__$1;
(statearr_699855_699891[(2)] = null);

(statearr_699855_699891[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (13))){
var inst_699795 = (state_699842[(9)]);
var inst_699794 = (state_699842[(10)]);
var inst_699797 = (state_699842[(11)]);
var inst_699796 = (state_699842[(12)]);
var inst_699804 = (state_699842[(2)]);
var inst_699805 = (inst_699797 + (1));
var tmp699851 = inst_699795;
var tmp699852 = inst_699794;
var tmp699853 = inst_699796;
var inst_699794__$1 = tmp699852;
var inst_699795__$1 = tmp699851;
var inst_699796__$1 = tmp699853;
var inst_699797__$1 = inst_699805;
var state_699842__$1 = (function (){var statearr_699856 = state_699842;
(statearr_699856[(9)] = inst_699795__$1);

(statearr_699856[(14)] = inst_699804);

(statearr_699856[(10)] = inst_699794__$1);

(statearr_699856[(11)] = inst_699797__$1);

(statearr_699856[(12)] = inst_699796__$1);

return statearr_699856;
})();
var statearr_699857_699892 = state_699842__$1;
(statearr_699857_699892[(2)] = null);

(statearr_699857_699892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (22))){
var state_699842__$1 = state_699842;
var statearr_699858_699893 = state_699842__$1;
(statearr_699858_699893[(2)] = null);

(statearr_699858_699893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (6))){
var inst_699783 = (state_699842[(13)]);
var inst_699792 = f.call(null,inst_699783);
var inst_699793 = cljs.core.seq.call(null,inst_699792);
var inst_699794 = inst_699793;
var inst_699795 = null;
var inst_699796 = (0);
var inst_699797 = (0);
var state_699842__$1 = (function (){var statearr_699859 = state_699842;
(statearr_699859[(9)] = inst_699795);

(statearr_699859[(10)] = inst_699794);

(statearr_699859[(11)] = inst_699797);

(statearr_699859[(12)] = inst_699796);

return statearr_699859;
})();
var statearr_699860_699894 = state_699842__$1;
(statearr_699860_699894[(2)] = null);

(statearr_699860_699894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (17))){
var inst_699808 = (state_699842[(7)]);
var inst_699812 = cljs.core.chunk_first.call(null,inst_699808);
var inst_699813 = cljs.core.chunk_rest.call(null,inst_699808);
var inst_699814 = cljs.core.count.call(null,inst_699812);
var inst_699794 = inst_699813;
var inst_699795 = inst_699812;
var inst_699796 = inst_699814;
var inst_699797 = (0);
var state_699842__$1 = (function (){var statearr_699861 = state_699842;
(statearr_699861[(9)] = inst_699795);

(statearr_699861[(10)] = inst_699794);

(statearr_699861[(11)] = inst_699797);

(statearr_699861[(12)] = inst_699796);

return statearr_699861;
})();
var statearr_699862_699895 = state_699842__$1;
(statearr_699862_699895[(2)] = null);

(statearr_699862_699895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (3))){
var inst_699840 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699842__$1,inst_699840);
} else {
if((state_val_699843 === (12))){
var inst_699828 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
var statearr_699863_699896 = state_699842__$1;
(statearr_699863_699896[(2)] = inst_699828);

(statearr_699863_699896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (2))){
var state_699842__$1 = state_699842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699842__$1,(4),in$);
} else {
if((state_val_699843 === (23))){
var inst_699836 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
var statearr_699864_699897 = state_699842__$1;
(statearr_699864_699897[(2)] = inst_699836);

(statearr_699864_699897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (19))){
var inst_699823 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
var statearr_699865_699898 = state_699842__$1;
(statearr_699865_699898[(2)] = inst_699823);

(statearr_699865_699898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (11))){
var inst_699794 = (state_699842[(10)]);
var inst_699808 = (state_699842[(7)]);
var inst_699808__$1 = cljs.core.seq.call(null,inst_699794);
var state_699842__$1 = (function (){var statearr_699866 = state_699842;
(statearr_699866[(7)] = inst_699808__$1);

return statearr_699866;
})();
if(inst_699808__$1){
var statearr_699867_699899 = state_699842__$1;
(statearr_699867_699899[(1)] = (14));

} else {
var statearr_699868_699900 = state_699842__$1;
(statearr_699868_699900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (9))){
var inst_699830 = (state_699842[(2)]);
var inst_699831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_699842__$1 = (function (){var statearr_699869 = state_699842;
(statearr_699869[(15)] = inst_699830);

return statearr_699869;
})();
if(cljs.core.truth_(inst_699831)){
var statearr_699870_699901 = state_699842__$1;
(statearr_699870_699901[(1)] = (21));

} else {
var statearr_699871_699902 = state_699842__$1;
(statearr_699871_699902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (5))){
var inst_699786 = cljs.core.async.close_BANG_.call(null,out);
var state_699842__$1 = state_699842;
var statearr_699872_699903 = state_699842__$1;
(statearr_699872_699903[(2)] = inst_699786);

(statearr_699872_699903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (14))){
var inst_699808 = (state_699842[(7)]);
var inst_699810 = cljs.core.chunked_seq_QMARK_.call(null,inst_699808);
var state_699842__$1 = state_699842;
if(inst_699810){
var statearr_699873_699904 = state_699842__$1;
(statearr_699873_699904[(1)] = (17));

} else {
var statearr_699874_699905 = state_699842__$1;
(statearr_699874_699905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (16))){
var inst_699826 = (state_699842[(2)]);
var state_699842__$1 = state_699842;
var statearr_699875_699906 = state_699842__$1;
(statearr_699875_699906[(2)] = inst_699826);

(statearr_699875_699906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699843 === (10))){
var inst_699795 = (state_699842[(9)]);
var inst_699797 = (state_699842[(11)]);
var inst_699802 = cljs.core._nth.call(null,inst_699795,inst_699797);
var state_699842__$1 = state_699842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699842__$1,(13),out,inst_699802);
} else {
if((state_val_699843 === (18))){
var inst_699808 = (state_699842[(7)]);
var inst_699817 = cljs.core.first.call(null,inst_699808);
var state_699842__$1 = state_699842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699842__$1,(20),out,inst_699817);
} else {
if((state_val_699843 === (8))){
var inst_699797 = (state_699842[(11)]);
var inst_699796 = (state_699842[(12)]);
var inst_699799 = (inst_699797 < inst_699796);
var inst_699800 = inst_699799;
var state_699842__$1 = state_699842;
if(cljs.core.truth_(inst_699800)){
var statearr_699876_699907 = state_699842__$1;
(statearr_699876_699907[(1)] = (10));

} else {
var statearr_699877_699908 = state_699842__$1;
(statearr_699877_699908[(1)] = (11));

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
}
}
}
}
}
}
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____0 = (function (){
var statearr_699881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_699881[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__);

(statearr_699881[(1)] = (1));

return statearr_699881;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____1 = (function (state_699842){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699882){if((e699882 instanceof Object)){
var ex__32863__auto__ = e699882;
var statearr_699883_699909 = state_699842;
(statearr_699883_699909[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699910 = state_699842;
state_699842 = G__699910;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__ = function(state_699842){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____1.call(this,state_699842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32860__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_699884 = f__32883__auto__.call(null);
(statearr_699884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_699884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args699911 = [];
var len__28871__auto___699914 = arguments.length;
var i__28872__auto___699915 = (0);
while(true){
if((i__28872__auto___699915 < len__28871__auto___699914)){
args699911.push((arguments[i__28872__auto___699915]));

var G__699916 = (i__28872__auto___699915 + (1));
i__28872__auto___699915 = G__699916;
continue;
} else {
}
break;
}

var G__699913 = args699911.length;
switch (G__699913) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699911.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args699918 = [];
var len__28871__auto___699921 = arguments.length;
var i__28872__auto___699922 = (0);
while(true){
if((i__28872__auto___699922 < len__28871__auto___699921)){
args699918.push((arguments[i__28872__auto___699922]));

var G__699923 = (i__28872__auto___699922 + (1));
i__28872__auto___699922 = G__699923;
continue;
} else {
}
break;
}

var G__699920 = args699918.length;
switch (G__699920) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699918.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args699925 = [];
var len__28871__auto___699976 = arguments.length;
var i__28872__auto___699977 = (0);
while(true){
if((i__28872__auto___699977 < len__28871__auto___699976)){
args699925.push((arguments[i__28872__auto___699977]));

var G__699978 = (i__28872__auto___699977 + (1));
i__28872__auto___699977 = G__699978;
continue;
} else {
}
break;
}

var G__699927 = args699925.length;
switch (G__699927) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699925.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___699980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___699980,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___699980,out){
return (function (state_699951){
var state_val_699952 = (state_699951[(1)]);
if((state_val_699952 === (7))){
var inst_699946 = (state_699951[(2)]);
var state_699951__$1 = state_699951;
var statearr_699953_699981 = state_699951__$1;
(statearr_699953_699981[(2)] = inst_699946);

(statearr_699953_699981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (1))){
var inst_699928 = null;
var state_699951__$1 = (function (){var statearr_699954 = state_699951;
(statearr_699954[(7)] = inst_699928);

return statearr_699954;
})();
var statearr_699955_699982 = state_699951__$1;
(statearr_699955_699982[(2)] = null);

(statearr_699955_699982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (4))){
var inst_699931 = (state_699951[(8)]);
var inst_699931__$1 = (state_699951[(2)]);
var inst_699932 = (inst_699931__$1 == null);
var inst_699933 = cljs.core.not.call(null,inst_699932);
var state_699951__$1 = (function (){var statearr_699956 = state_699951;
(statearr_699956[(8)] = inst_699931__$1);

return statearr_699956;
})();
if(inst_699933){
var statearr_699957_699983 = state_699951__$1;
(statearr_699957_699983[(1)] = (5));

} else {
var statearr_699958_699984 = state_699951__$1;
(statearr_699958_699984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (6))){
var state_699951__$1 = state_699951;
var statearr_699959_699985 = state_699951__$1;
(statearr_699959_699985[(2)] = null);

(statearr_699959_699985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (3))){
var inst_699948 = (state_699951[(2)]);
var inst_699949 = cljs.core.async.close_BANG_.call(null,out);
var state_699951__$1 = (function (){var statearr_699960 = state_699951;
(statearr_699960[(9)] = inst_699948);

return statearr_699960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_699951__$1,inst_699949);
} else {
if((state_val_699952 === (2))){
var state_699951__$1 = state_699951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_699951__$1,(4),ch);
} else {
if((state_val_699952 === (11))){
var inst_699931 = (state_699951[(8)]);
var inst_699940 = (state_699951[(2)]);
var inst_699928 = inst_699931;
var state_699951__$1 = (function (){var statearr_699961 = state_699951;
(statearr_699961[(7)] = inst_699928);

(statearr_699961[(10)] = inst_699940);

return statearr_699961;
})();
var statearr_699962_699986 = state_699951__$1;
(statearr_699962_699986[(2)] = null);

(statearr_699962_699986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (9))){
var inst_699931 = (state_699951[(8)]);
var state_699951__$1 = state_699951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_699951__$1,(11),out,inst_699931);
} else {
if((state_val_699952 === (5))){
var inst_699928 = (state_699951[(7)]);
var inst_699931 = (state_699951[(8)]);
var inst_699935 = cljs.core._EQ_.call(null,inst_699931,inst_699928);
var state_699951__$1 = state_699951;
if(inst_699935){
var statearr_699964_699987 = state_699951__$1;
(statearr_699964_699987[(1)] = (8));

} else {
var statearr_699965_699988 = state_699951__$1;
(statearr_699965_699988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (10))){
var inst_699943 = (state_699951[(2)]);
var state_699951__$1 = state_699951;
var statearr_699966_699989 = state_699951__$1;
(statearr_699966_699989[(2)] = inst_699943);

(statearr_699966_699989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_699952 === (8))){
var inst_699928 = (state_699951[(7)]);
var tmp699963 = inst_699928;
var inst_699928__$1 = tmp699963;
var state_699951__$1 = (function (){var statearr_699967 = state_699951;
(statearr_699967[(7)] = inst_699928__$1);

return statearr_699967;
})();
var statearr_699968_699990 = state_699951__$1;
(statearr_699968_699990[(2)] = null);

(statearr_699968_699990[(1)] = (2));


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
});})(c__32882__auto___699980,out))
;
return ((function (switch__32859__auto__,c__32882__auto___699980,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_699972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_699972[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_699972[(1)] = (1));

return statearr_699972;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_699951){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_699951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e699973){if((e699973 instanceof Object)){
var ex__32863__auto__ = e699973;
var statearr_699974_699991 = state_699951;
(statearr_699974_699991[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_699951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e699973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__699992 = state_699951;
state_699951 = G__699992;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_699951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_699951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___699980,out))
})();
var state__32884__auto__ = (function (){var statearr_699975 = f__32883__auto__.call(null);
(statearr_699975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___699980);

return statearr_699975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___699980,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args699993 = [];
var len__28871__auto___700063 = arguments.length;
var i__28872__auto___700064 = (0);
while(true){
if((i__28872__auto___700064 < len__28871__auto___700063)){
args699993.push((arguments[i__28872__auto___700064]));

var G__700065 = (i__28872__auto___700064 + (1));
i__28872__auto___700064 = G__700065;
continue;
} else {
}
break;
}

var G__699995 = args699993.length;
switch (G__699995) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args699993.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___700067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___700067,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___700067,out){
return (function (state_700033){
var state_val_700034 = (state_700033[(1)]);
if((state_val_700034 === (7))){
var inst_700029 = (state_700033[(2)]);
var state_700033__$1 = state_700033;
var statearr_700035_700068 = state_700033__$1;
(statearr_700035_700068[(2)] = inst_700029);

(statearr_700035_700068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (1))){
var inst_699996 = (new Array(n));
var inst_699997 = inst_699996;
var inst_699998 = (0);
var state_700033__$1 = (function (){var statearr_700036 = state_700033;
(statearr_700036[(7)] = inst_699998);

(statearr_700036[(8)] = inst_699997);

return statearr_700036;
})();
var statearr_700037_700069 = state_700033__$1;
(statearr_700037_700069[(2)] = null);

(statearr_700037_700069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (4))){
var inst_700001 = (state_700033[(9)]);
var inst_700001__$1 = (state_700033[(2)]);
var inst_700002 = (inst_700001__$1 == null);
var inst_700003 = cljs.core.not.call(null,inst_700002);
var state_700033__$1 = (function (){var statearr_700038 = state_700033;
(statearr_700038[(9)] = inst_700001__$1);

return statearr_700038;
})();
if(inst_700003){
var statearr_700039_700070 = state_700033__$1;
(statearr_700039_700070[(1)] = (5));

} else {
var statearr_700040_700071 = state_700033__$1;
(statearr_700040_700071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (15))){
var inst_700023 = (state_700033[(2)]);
var state_700033__$1 = state_700033;
var statearr_700041_700072 = state_700033__$1;
(statearr_700041_700072[(2)] = inst_700023);

(statearr_700041_700072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (13))){
var state_700033__$1 = state_700033;
var statearr_700042_700073 = state_700033__$1;
(statearr_700042_700073[(2)] = null);

(statearr_700042_700073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (6))){
var inst_699998 = (state_700033[(7)]);
var inst_700019 = (inst_699998 > (0));
var state_700033__$1 = state_700033;
if(cljs.core.truth_(inst_700019)){
var statearr_700043_700074 = state_700033__$1;
(statearr_700043_700074[(1)] = (12));

} else {
var statearr_700044_700075 = state_700033__$1;
(statearr_700044_700075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (3))){
var inst_700031 = (state_700033[(2)]);
var state_700033__$1 = state_700033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_700033__$1,inst_700031);
} else {
if((state_val_700034 === (12))){
var inst_699997 = (state_700033[(8)]);
var inst_700021 = cljs.core.vec.call(null,inst_699997);
var state_700033__$1 = state_700033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_700033__$1,(15),out,inst_700021);
} else {
if((state_val_700034 === (2))){
var state_700033__$1 = state_700033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_700033__$1,(4),ch);
} else {
if((state_val_700034 === (11))){
var inst_700013 = (state_700033[(2)]);
var inst_700014 = (new Array(n));
var inst_699997 = inst_700014;
var inst_699998 = (0);
var state_700033__$1 = (function (){var statearr_700045 = state_700033;
(statearr_700045[(10)] = inst_700013);

(statearr_700045[(7)] = inst_699998);

(statearr_700045[(8)] = inst_699997);

return statearr_700045;
})();
var statearr_700046_700076 = state_700033__$1;
(statearr_700046_700076[(2)] = null);

(statearr_700046_700076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (9))){
var inst_699997 = (state_700033[(8)]);
var inst_700011 = cljs.core.vec.call(null,inst_699997);
var state_700033__$1 = state_700033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_700033__$1,(11),out,inst_700011);
} else {
if((state_val_700034 === (5))){
var inst_700001 = (state_700033[(9)]);
var inst_700006 = (state_700033[(11)]);
var inst_699998 = (state_700033[(7)]);
var inst_699997 = (state_700033[(8)]);
var inst_700005 = (inst_699997[inst_699998] = inst_700001);
var inst_700006__$1 = (inst_699998 + (1));
var inst_700007 = (inst_700006__$1 < n);
var state_700033__$1 = (function (){var statearr_700047 = state_700033;
(statearr_700047[(12)] = inst_700005);

(statearr_700047[(11)] = inst_700006__$1);

return statearr_700047;
})();
if(cljs.core.truth_(inst_700007)){
var statearr_700048_700077 = state_700033__$1;
(statearr_700048_700077[(1)] = (8));

} else {
var statearr_700049_700078 = state_700033__$1;
(statearr_700049_700078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (14))){
var inst_700026 = (state_700033[(2)]);
var inst_700027 = cljs.core.async.close_BANG_.call(null,out);
var state_700033__$1 = (function (){var statearr_700051 = state_700033;
(statearr_700051[(13)] = inst_700026);

return statearr_700051;
})();
var statearr_700052_700079 = state_700033__$1;
(statearr_700052_700079[(2)] = inst_700027);

(statearr_700052_700079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (10))){
var inst_700017 = (state_700033[(2)]);
var state_700033__$1 = state_700033;
var statearr_700053_700080 = state_700033__$1;
(statearr_700053_700080[(2)] = inst_700017);

(statearr_700053_700080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700034 === (8))){
var inst_700006 = (state_700033[(11)]);
var inst_699997 = (state_700033[(8)]);
var tmp700050 = inst_699997;
var inst_699997__$1 = tmp700050;
var inst_699998 = inst_700006;
var state_700033__$1 = (function (){var statearr_700054 = state_700033;
(statearr_700054[(7)] = inst_699998);

(statearr_700054[(8)] = inst_699997__$1);

return statearr_700054;
})();
var statearr_700055_700081 = state_700033__$1;
(statearr_700055_700081[(2)] = null);

(statearr_700055_700081[(1)] = (2));


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
});})(c__32882__auto___700067,out))
;
return ((function (switch__32859__auto__,c__32882__auto___700067,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_700059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_700059[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_700059[(1)] = (1));

return statearr_700059;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_700033){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_700033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e700060){if((e700060 instanceof Object)){
var ex__32863__auto__ = e700060;
var statearr_700061_700082 = state_700033;
(statearr_700061_700082[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_700033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e700060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__700083 = state_700033;
state_700033 = G__700083;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_700033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_700033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___700067,out))
})();
var state__32884__auto__ = (function (){var statearr_700062 = f__32883__auto__.call(null);
(statearr_700062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___700067);

return statearr_700062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___700067,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args700084 = [];
var len__28871__auto___700158 = arguments.length;
var i__28872__auto___700159 = (0);
while(true){
if((i__28872__auto___700159 < len__28871__auto___700158)){
args700084.push((arguments[i__28872__auto___700159]));

var G__700160 = (i__28872__auto___700159 + (1));
i__28872__auto___700159 = G__700160;
continue;
} else {
}
break;
}

var G__700086 = args700084.length;
switch (G__700086) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args700084.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32882__auto___700162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___700162,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___700162,out){
return (function (state_700128){
var state_val_700129 = (state_700128[(1)]);
if((state_val_700129 === (7))){
var inst_700124 = (state_700128[(2)]);
var state_700128__$1 = state_700128;
var statearr_700130_700163 = state_700128__$1;
(statearr_700130_700163[(2)] = inst_700124);

(statearr_700130_700163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (1))){
var inst_700087 = [];
var inst_700088 = inst_700087;
var inst_700089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_700128__$1 = (function (){var statearr_700131 = state_700128;
(statearr_700131[(7)] = inst_700089);

(statearr_700131[(8)] = inst_700088);

return statearr_700131;
})();
var statearr_700132_700164 = state_700128__$1;
(statearr_700132_700164[(2)] = null);

(statearr_700132_700164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (4))){
var inst_700092 = (state_700128[(9)]);
var inst_700092__$1 = (state_700128[(2)]);
var inst_700093 = (inst_700092__$1 == null);
var inst_700094 = cljs.core.not.call(null,inst_700093);
var state_700128__$1 = (function (){var statearr_700133 = state_700128;
(statearr_700133[(9)] = inst_700092__$1);

return statearr_700133;
})();
if(inst_700094){
var statearr_700134_700165 = state_700128__$1;
(statearr_700134_700165[(1)] = (5));

} else {
var statearr_700135_700166 = state_700128__$1;
(statearr_700135_700166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (15))){
var inst_700118 = (state_700128[(2)]);
var state_700128__$1 = state_700128;
var statearr_700136_700167 = state_700128__$1;
(statearr_700136_700167[(2)] = inst_700118);

(statearr_700136_700167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (13))){
var state_700128__$1 = state_700128;
var statearr_700137_700168 = state_700128__$1;
(statearr_700137_700168[(2)] = null);

(statearr_700137_700168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (6))){
var inst_700088 = (state_700128[(8)]);
var inst_700113 = inst_700088.length;
var inst_700114 = (inst_700113 > (0));
var state_700128__$1 = state_700128;
if(cljs.core.truth_(inst_700114)){
var statearr_700138_700169 = state_700128__$1;
(statearr_700138_700169[(1)] = (12));

} else {
var statearr_700139_700170 = state_700128__$1;
(statearr_700139_700170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (3))){
var inst_700126 = (state_700128[(2)]);
var state_700128__$1 = state_700128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_700128__$1,inst_700126);
} else {
if((state_val_700129 === (12))){
var inst_700088 = (state_700128[(8)]);
var inst_700116 = cljs.core.vec.call(null,inst_700088);
var state_700128__$1 = state_700128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_700128__$1,(15),out,inst_700116);
} else {
if((state_val_700129 === (2))){
var state_700128__$1 = state_700128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_700128__$1,(4),ch);
} else {
if((state_val_700129 === (11))){
var inst_700092 = (state_700128[(9)]);
var inst_700096 = (state_700128[(10)]);
var inst_700106 = (state_700128[(2)]);
var inst_700107 = [];
var inst_700108 = inst_700107.push(inst_700092);
var inst_700088 = inst_700107;
var inst_700089 = inst_700096;
var state_700128__$1 = (function (){var statearr_700140 = state_700128;
(statearr_700140[(7)] = inst_700089);

(statearr_700140[(11)] = inst_700106);

(statearr_700140[(12)] = inst_700108);

(statearr_700140[(8)] = inst_700088);

return statearr_700140;
})();
var statearr_700141_700171 = state_700128__$1;
(statearr_700141_700171[(2)] = null);

(statearr_700141_700171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (9))){
var inst_700088 = (state_700128[(8)]);
var inst_700104 = cljs.core.vec.call(null,inst_700088);
var state_700128__$1 = state_700128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_700128__$1,(11),out,inst_700104);
} else {
if((state_val_700129 === (5))){
var inst_700092 = (state_700128[(9)]);
var inst_700089 = (state_700128[(7)]);
var inst_700096 = (state_700128[(10)]);
var inst_700096__$1 = f.call(null,inst_700092);
var inst_700097 = cljs.core._EQ_.call(null,inst_700096__$1,inst_700089);
var inst_700098 = cljs.core.keyword_identical_QMARK_.call(null,inst_700089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_700099 = (inst_700097) || (inst_700098);
var state_700128__$1 = (function (){var statearr_700142 = state_700128;
(statearr_700142[(10)] = inst_700096__$1);

return statearr_700142;
})();
if(cljs.core.truth_(inst_700099)){
var statearr_700143_700172 = state_700128__$1;
(statearr_700143_700172[(1)] = (8));

} else {
var statearr_700144_700173 = state_700128__$1;
(statearr_700144_700173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (14))){
var inst_700121 = (state_700128[(2)]);
var inst_700122 = cljs.core.async.close_BANG_.call(null,out);
var state_700128__$1 = (function (){var statearr_700146 = state_700128;
(statearr_700146[(13)] = inst_700121);

return statearr_700146;
})();
var statearr_700147_700174 = state_700128__$1;
(statearr_700147_700174[(2)] = inst_700122);

(statearr_700147_700174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (10))){
var inst_700111 = (state_700128[(2)]);
var state_700128__$1 = state_700128;
var statearr_700148_700175 = state_700128__$1;
(statearr_700148_700175[(2)] = inst_700111);

(statearr_700148_700175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_700129 === (8))){
var inst_700092 = (state_700128[(9)]);
var inst_700096 = (state_700128[(10)]);
var inst_700088 = (state_700128[(8)]);
var inst_700101 = inst_700088.push(inst_700092);
var tmp700145 = inst_700088;
var inst_700088__$1 = tmp700145;
var inst_700089 = inst_700096;
var state_700128__$1 = (function (){var statearr_700149 = state_700128;
(statearr_700149[(14)] = inst_700101);

(statearr_700149[(7)] = inst_700089);

(statearr_700149[(8)] = inst_700088__$1);

return statearr_700149;
})();
var statearr_700150_700176 = state_700128__$1;
(statearr_700150_700176[(2)] = null);

(statearr_700150_700176[(1)] = (2));


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
});})(c__32882__auto___700162,out))
;
return ((function (switch__32859__auto__,c__32882__auto___700162,out){
return (function() {
var cljs$core$async$state_machine__32860__auto__ = null;
var cljs$core$async$state_machine__32860__auto____0 = (function (){
var statearr_700154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_700154[(0)] = cljs$core$async$state_machine__32860__auto__);

(statearr_700154[(1)] = (1));

return statearr_700154;
});
var cljs$core$async$state_machine__32860__auto____1 = (function (state_700128){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_700128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e700155){if((e700155 instanceof Object)){
var ex__32863__auto__ = e700155;
var statearr_700156_700177 = state_700128;
(statearr_700156_700177[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_700128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e700155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__700178 = state_700128;
state_700128 = G__700178;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
cljs$core$async$state_machine__32860__auto__ = function(state_700128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32860__auto____1.call(this,state_700128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32860__auto____0;
cljs$core$async$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32860__auto____1;
return cljs$core$async$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___700162,out))
})();
var state__32884__auto__ = (function (){var statearr_700157 = f__32883__auto__.call(null);
(statearr_700157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___700162);

return statearr_700157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___700162,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489703342142
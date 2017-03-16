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
var args40749 = [];
var len__8723__auto___40755 = arguments.length;
var i__8724__auto___40756 = (0);
while(true){
if((i__8724__auto___40756 < len__8723__auto___40755)){
args40749.push((arguments[i__8724__auto___40756]));

var G__40757 = (i__8724__auto___40756 + (1));
i__8724__auto___40756 = G__40757;
continue;
} else {
}
break;
}

var G__40751 = args40749.length;
switch (G__40751) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40749.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40752 = (function (f,blockable,meta40753){
this.f = f;
this.blockable = blockable;
this.meta40753 = meta40753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40754,meta40753__$1){
var self__ = this;
var _40754__$1 = this;
return (new cljs.core.async.t_cljs$core$async40752(self__.f,self__.blockable,meta40753__$1));
});


cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40754){
var self__ = this;
var _40754__$1 = this;
return self__.meta40753;
});


cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async40752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta40753], null);
});

cljs.core.async.t_cljs$core$async40752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40752";

cljs.core.async.t_cljs$core$async40752.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async40752");
});

cljs.core.async.__GT_t_cljs$core$async40752 = (function cljs$core$async$__GT_t_cljs$core$async40752(f__$1,blockable__$1,meta40753){
return (new cljs.core.async.t_cljs$core$async40752(f__$1,blockable__$1,meta40753));
});

}

return (new cljs.core.async.t_cljs$core$async40752(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40761 = [];
var len__8723__auto___40764 = arguments.length;
var i__8724__auto___40765 = (0);
while(true){
if((i__8724__auto___40765 < len__8723__auto___40764)){
args40761.push((arguments[i__8724__auto___40765]));

var G__40766 = (i__8724__auto___40765 + (1));
i__8724__auto___40765 = G__40766;
continue;
} else {
}
break;
}

var G__40763 = args40761.length;
switch (G__40763) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40761.length)].join('')));

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
var args40768 = [];
var len__8723__auto___40771 = arguments.length;
var i__8724__auto___40772 = (0);
while(true){
if((i__8724__auto___40772 < len__8723__auto___40771)){
args40768.push((arguments[i__8724__auto___40772]));

var G__40773 = (i__8724__auto___40772 + (1));
i__8724__auto___40772 = G__40773;
continue;
} else {
}
break;
}

var G__40770 = args40768.length;
switch (G__40770) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40768.length)].join('')));

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
var args40775 = [];
var len__8723__auto___40778 = arguments.length;
var i__8724__auto___40779 = (0);
while(true){
if((i__8724__auto___40779 < len__8723__auto___40778)){
args40775.push((arguments[i__8724__auto___40779]));

var G__40780 = (i__8724__auto___40779 + (1));
i__8724__auto___40779 = G__40780;
continue;
} else {
}
break;
}

var G__40777 = args40775.length;
switch (G__40777) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40775.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40782 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40782) : fn1.call(null,val_40782));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40782,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40782) : fn1.call(null,val_40782));
});})(val_40782,ret))
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
var args40783 = [];
var len__8723__auto___40786 = arguments.length;
var i__8724__auto___40787 = (0);
while(true){
if((i__8724__auto___40787 < len__8723__auto___40786)){
args40783.push((arguments[i__8724__auto___40787]));

var G__40788 = (i__8724__auto___40787 + (1));
i__8724__auto___40787 = G__40788;
continue;
} else {
}
break;
}

var G__40785 = args40783.length;
switch (G__40785) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40783.length)].join('')));

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
var n__8523__auto___40790 = n;
var x_40791 = (0);
while(true){
if((x_40791 < n__8523__auto___40790)){
(a[x_40791] = (0));

var G__40792 = (x_40791 + (1));
x_40791 = G__40792;
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

var G__40793 = (i + (1));
i = G__40793;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async40797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40797 = (function (flag,meta40798){
this.flag = flag;
this.meta40798 = meta40798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40799,meta40798__$1){
var self__ = this;
var _40799__$1 = this;
return (new cljs.core.async.t_cljs$core$async40797(self__.flag,meta40798__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40799){
var self__ = this;
var _40799__$1 = this;
return self__.meta40798;
});})(flag))
;


cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;


cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async40797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40797.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta40798], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40797";

cljs.core.async.t_cljs$core$async40797.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async40797");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40797 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40797(flag__$1,meta40798){
return (new cljs.core.async.t_cljs$core$async40797(flag__$1,meta40798));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40797(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40803 = (function (flag,cb,meta40804){
this.flag = flag;
this.cb = cb;
this.meta40804 = meta40804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40805,meta40804__$1){
var self__ = this;
var _40805__$1 = this;
return (new cljs.core.async.t_cljs$core$async40803(self__.flag,self__.cb,meta40804__$1));
});


cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40805){
var self__ = this;
var _40805__$1 = this;
return self__.meta40804;
});


cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async40803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta40804], null);
});

cljs.core.async.t_cljs$core$async40803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40803";

cljs.core.async.t_cljs$core$async40803.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async40803");
});

cljs.core.async.__GT_t_cljs$core$async40803 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40803(flag__$1,cb__$1,meta40804){
return (new cljs.core.async.t_cljs$core$async40803(flag__$1,cb__$1,meta40804));
});

}

return (new cljs.core.async.t_cljs$core$async40803(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40806_SHARP_){
var G__40810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40806_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40810) : fret.call(null,G__40810));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40807_SHARP_){
var G__40811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40807_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40811) : fret.call(null,G__40811));
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
var G__40812 = (i + (1));
i = G__40812;
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
var len__8723__auto___40818 = arguments.length;
var i__8724__auto___40819 = (0);
while(true){
if((i__8724__auto___40819 < len__8723__auto___40818)){
args__8730__auto__.push((arguments[i__8724__auto___40819]));

var G__40820 = (i__8724__auto___40819 + (1));
i__8724__auto___40819 = G__40820;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((1) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8731__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40815){
var map__40816 = p__40815;
var map__40816__$1 = ((((!((map__40816 == null)))?((((map__40816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40816):map__40816);
var opts = map__40816__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40813){
var G__40814 = cljs.core.first(seq40813);
var seq40813__$1 = cljs.core.next(seq40813);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40814,seq40813__$1);
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
var args40821 = [];
var len__8723__auto___40871 = arguments.length;
var i__8724__auto___40872 = (0);
while(true){
if((i__8724__auto___40872 < len__8723__auto___40871)){
args40821.push((arguments[i__8724__auto___40872]));

var G__40873 = (i__8724__auto___40872 + (1));
i__8724__auto___40872 = G__40873;
continue;
} else {
}
break;
}

var G__40823 = args40821.length;
switch (G__40823) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40821.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40690__auto___40875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___40875){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___40875){
return (function (state_40847){
var state_val_40848 = (state_40847[(1)]);
if((state_val_40848 === (7))){
var inst_40843 = (state_40847[(2)]);
var state_40847__$1 = state_40847;
var statearr_40849_40876 = state_40847__$1;
(statearr_40849_40876[(2)] = inst_40843);

(statearr_40849_40876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (1))){
var state_40847__$1 = state_40847;
var statearr_40850_40877 = state_40847__$1;
(statearr_40850_40877[(2)] = null);

(statearr_40850_40877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (4))){
var inst_40826 = (state_40847[(7)]);
var inst_40826__$1 = (state_40847[(2)]);
var inst_40827 = (inst_40826__$1 == null);
var state_40847__$1 = (function (){var statearr_40851 = state_40847;
(statearr_40851[(7)] = inst_40826__$1);

return statearr_40851;
})();
if(cljs.core.truth_(inst_40827)){
var statearr_40852_40878 = state_40847__$1;
(statearr_40852_40878[(1)] = (5));

} else {
var statearr_40853_40879 = state_40847__$1;
(statearr_40853_40879[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (13))){
var state_40847__$1 = state_40847;
var statearr_40854_40880 = state_40847__$1;
(statearr_40854_40880[(2)] = null);

(statearr_40854_40880[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (6))){
var inst_40826 = (state_40847[(7)]);
var state_40847__$1 = state_40847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40847__$1,(11),to,inst_40826);
} else {
if((state_val_40848 === (3))){
var inst_40845 = (state_40847[(2)]);
var state_40847__$1 = state_40847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40847__$1,inst_40845);
} else {
if((state_val_40848 === (12))){
var state_40847__$1 = state_40847;
var statearr_40855_40881 = state_40847__$1;
(statearr_40855_40881[(2)] = null);

(statearr_40855_40881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (2))){
var state_40847__$1 = state_40847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40847__$1,(4),from);
} else {
if((state_val_40848 === (11))){
var inst_40836 = (state_40847[(2)]);
var state_40847__$1 = state_40847;
if(cljs.core.truth_(inst_40836)){
var statearr_40856_40882 = state_40847__$1;
(statearr_40856_40882[(1)] = (12));

} else {
var statearr_40857_40883 = state_40847__$1;
(statearr_40857_40883[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (9))){
var state_40847__$1 = state_40847;
var statearr_40858_40884 = state_40847__$1;
(statearr_40858_40884[(2)] = null);

(statearr_40858_40884[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (5))){
var state_40847__$1 = state_40847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40859_40885 = state_40847__$1;
(statearr_40859_40885[(1)] = (8));

} else {
var statearr_40860_40886 = state_40847__$1;
(statearr_40860_40886[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (14))){
var inst_40841 = (state_40847[(2)]);
var state_40847__$1 = state_40847;
var statearr_40861_40887 = state_40847__$1;
(statearr_40861_40887[(2)] = inst_40841);

(statearr_40861_40887[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (10))){
var inst_40833 = (state_40847[(2)]);
var state_40847__$1 = state_40847;
var statearr_40862_40888 = state_40847__$1;
(statearr_40862_40888[(2)] = inst_40833);

(statearr_40862_40888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40848 === (8))){
var inst_40830 = cljs.core.async.close_BANG_(to);
var state_40847__$1 = state_40847;
var statearr_40863_40889 = state_40847__$1;
(statearr_40863_40889[(2)] = inst_40830);

(statearr_40863_40889[(1)] = (10));


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
});})(c__40690__auto___40875))
;
return ((function (switch__40506__auto__,c__40690__auto___40875){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_40867 = [null,null,null,null,null,null,null,null];
(statearr_40867[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_40867[(1)] = (1));

return statearr_40867;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_40847){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_40847);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e40868){if((e40868 instanceof Object)){
var ex__40510__auto__ = e40868;
var statearr_40869_40890 = state_40847;
(statearr_40869_40890[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40847);

return cljs.core.cst$kw$recur;
} else {
throw e40868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__40891 = state_40847;
state_40847 = G__40891;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_40847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_40847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___40875))
})();
var state__40692__auto__ = (function (){var statearr_40870 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_40870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___40875);

return statearr_40870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___40875))
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
return (function (p__41079){
var vec__41080 = p__41079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41080,(1),null);
var job = vec__41080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40690__auto___41266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results){
return (function (state_41087){
var state_val_41088 = (state_41087[(1)]);
if((state_val_41088 === (1))){
var state_41087__$1 = state_41087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41087__$1,(2),res,v);
} else {
if((state_val_41088 === (2))){
var inst_41084 = (state_41087[(2)]);
var inst_41085 = cljs.core.async.close_BANG_(res);
var state_41087__$1 = (function (){var statearr_41089 = state_41087;
(statearr_41089[(7)] = inst_41084);

return statearr_41089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41087__$1,inst_41085);
} else {
return null;
}
}
});})(c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results))
;
return ((function (switch__40506__auto__,c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_41093 = [null,null,null,null,null,null,null,null];
(statearr_41093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__);

(statearr_41093[(1)] = (1));

return statearr_41093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1 = (function (state_41087){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41087);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41094){if((e41094 instanceof Object)){
var ex__40510__auto__ = e41094;
var statearr_41095_41267 = state_41087;
(statearr_41095_41267[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41087);

return cljs.core.cst$kw$recur;
} else {
throw e41094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41268 = state_41087;
state_41087 = G__41268;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = function(state_41087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1.call(this,state_41087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results))
})();
var state__40692__auto__ = (function (){var statearr_41096 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___41266);

return statearr_41096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___41266,res,vec__41080,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41097){
var vec__41098 = p__41097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41098,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41098,(1),null);
var job = vec__41098;
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
var n__8523__auto___41269 = n;
var __41270 = (0);
while(true){
if((__41270 < n__8523__auto___41269)){
var G__41101_41271 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41101_41271) {
case "compute":
var c__40690__auto___41273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41270,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (__41270,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function (state_41114){
var state_val_41115 = (state_41114[(1)]);
if((state_val_41115 === (1))){
var state_41114__$1 = state_41114;
var statearr_41116_41274 = state_41114__$1;
(statearr_41116_41274[(2)] = null);

(statearr_41116_41274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41115 === (2))){
var state_41114__$1 = state_41114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41114__$1,(4),jobs);
} else {
if((state_val_41115 === (3))){
var inst_41112 = (state_41114[(2)]);
var state_41114__$1 = state_41114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41114__$1,inst_41112);
} else {
if((state_val_41115 === (4))){
var inst_41104 = (state_41114[(2)]);
var inst_41105 = process(inst_41104);
var state_41114__$1 = state_41114;
if(cljs.core.truth_(inst_41105)){
var statearr_41117_41275 = state_41114__$1;
(statearr_41117_41275[(1)] = (5));

} else {
var statearr_41118_41276 = state_41114__$1;
(statearr_41118_41276[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41115 === (5))){
var state_41114__$1 = state_41114;
var statearr_41119_41277 = state_41114__$1;
(statearr_41119_41277[(2)] = null);

(statearr_41119_41277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41115 === (6))){
var state_41114__$1 = state_41114;
var statearr_41120_41278 = state_41114__$1;
(statearr_41120_41278[(2)] = null);

(statearr_41120_41278[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41115 === (7))){
var inst_41110 = (state_41114[(2)]);
var state_41114__$1 = state_41114;
var statearr_41121_41279 = state_41114__$1;
(statearr_41121_41279[(2)] = inst_41110);

(statearr_41121_41279[(1)] = (3));


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
});})(__41270,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
;
return ((function (__41270,switch__40506__auto__,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_41125 = [null,null,null,null,null,null,null];
(statearr_41125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__);

(statearr_41125[(1)] = (1));

return statearr_41125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1 = (function (state_41114){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41114);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41126){if((e41126 instanceof Object)){
var ex__40510__auto__ = e41126;
var statearr_41127_41280 = state_41114;
(statearr_41127_41280[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41114);

return cljs.core.cst$kw$recur;
} else {
throw e41126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41281 = state_41114;
state_41114 = G__41281;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = function(state_41114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1.call(this,state_41114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__;
})()
;})(__41270,switch__40506__auto__,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
})();
var state__40692__auto__ = (function (){var statearr_41128 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___41273);

return statearr_41128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(__41270,c__40690__auto___41273,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
);


break;
case "async":
var c__40690__auto___41282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41270,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (__41270,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function (state_41141){
var state_val_41142 = (state_41141[(1)]);
if((state_val_41142 === (1))){
var state_41141__$1 = state_41141;
var statearr_41143_41283 = state_41141__$1;
(statearr_41143_41283[(2)] = null);

(statearr_41143_41283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41142 === (2))){
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41141__$1,(4),jobs);
} else {
if((state_val_41142 === (3))){
var inst_41139 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41141__$1,inst_41139);
} else {
if((state_val_41142 === (4))){
var inst_41131 = (state_41141[(2)]);
var inst_41132 = async(inst_41131);
var state_41141__$1 = state_41141;
if(cljs.core.truth_(inst_41132)){
var statearr_41144_41284 = state_41141__$1;
(statearr_41144_41284[(1)] = (5));

} else {
var statearr_41145_41285 = state_41141__$1;
(statearr_41145_41285[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41142 === (5))){
var state_41141__$1 = state_41141;
var statearr_41146_41286 = state_41141__$1;
(statearr_41146_41286[(2)] = null);

(statearr_41146_41286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41142 === (6))){
var state_41141__$1 = state_41141;
var statearr_41147_41287 = state_41141__$1;
(statearr_41147_41287[(2)] = null);

(statearr_41147_41287[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41142 === (7))){
var inst_41137 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
var statearr_41148_41288 = state_41141__$1;
(statearr_41148_41288[(2)] = inst_41137);

(statearr_41148_41288[(1)] = (3));


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
});})(__41270,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
;
return ((function (__41270,switch__40506__auto__,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_41152 = [null,null,null,null,null,null,null];
(statearr_41152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__);

(statearr_41152[(1)] = (1));

return statearr_41152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1 = (function (state_41141){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41141);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41153){if((e41153 instanceof Object)){
var ex__40510__auto__ = e41153;
var statearr_41154_41289 = state_41141;
(statearr_41154_41289[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41141);

return cljs.core.cst$kw$recur;
} else {
throw e41153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41290 = state_41141;
state_41141 = G__41290;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = function(state_41141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1.call(this,state_41141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__;
})()
;})(__41270,switch__40506__auto__,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
})();
var state__40692__auto__ = (function (){var statearr_41155 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___41282);

return statearr_41155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(__41270,c__40690__auto___41282,G__41101_41271,n__8523__auto___41269,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__41291 = (__41270 + (1));
__41270 = G__41291;
continue;
} else {
}
break;
}

var c__40690__auto___41292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___41292,jobs,results,process,async){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___41292,jobs,results,process,async){
return (function (state_41177){
var state_val_41178 = (state_41177[(1)]);
if((state_val_41178 === (1))){
var state_41177__$1 = state_41177;
var statearr_41179_41293 = state_41177__$1;
(statearr_41179_41293[(2)] = null);

(statearr_41179_41293[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41178 === (2))){
var state_41177__$1 = state_41177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41177__$1,(4),from);
} else {
if((state_val_41178 === (3))){
var inst_41175 = (state_41177[(2)]);
var state_41177__$1 = state_41177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41177__$1,inst_41175);
} else {
if((state_val_41178 === (4))){
var inst_41158 = (state_41177[(7)]);
var inst_41158__$1 = (state_41177[(2)]);
var inst_41159 = (inst_41158__$1 == null);
var state_41177__$1 = (function (){var statearr_41180 = state_41177;
(statearr_41180[(7)] = inst_41158__$1);

return statearr_41180;
})();
if(cljs.core.truth_(inst_41159)){
var statearr_41181_41294 = state_41177__$1;
(statearr_41181_41294[(1)] = (5));

} else {
var statearr_41182_41295 = state_41177__$1;
(statearr_41182_41295[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41178 === (5))){
var inst_41161 = cljs.core.async.close_BANG_(jobs);
var state_41177__$1 = state_41177;
var statearr_41183_41296 = state_41177__$1;
(statearr_41183_41296[(2)] = inst_41161);

(statearr_41183_41296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41178 === (6))){
var inst_41158 = (state_41177[(7)]);
var inst_41163 = (state_41177[(8)]);
var inst_41163__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41165 = [inst_41158,inst_41163__$1];
var inst_41166 = (new cljs.core.PersistentVector(null,2,(5),inst_41164,inst_41165,null));
var state_41177__$1 = (function (){var statearr_41184 = state_41177;
(statearr_41184[(8)] = inst_41163__$1);

return statearr_41184;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41177__$1,(8),jobs,inst_41166);
} else {
if((state_val_41178 === (7))){
var inst_41173 = (state_41177[(2)]);
var state_41177__$1 = state_41177;
var statearr_41185_41297 = state_41177__$1;
(statearr_41185_41297[(2)] = inst_41173);

(statearr_41185_41297[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41178 === (8))){
var inst_41163 = (state_41177[(8)]);
var inst_41168 = (state_41177[(2)]);
var state_41177__$1 = (function (){var statearr_41186 = state_41177;
(statearr_41186[(9)] = inst_41168);

return statearr_41186;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41177__$1,(9),results,inst_41163);
} else {
if((state_val_41178 === (9))){
var inst_41170 = (state_41177[(2)]);
var state_41177__$1 = (function (){var statearr_41187 = state_41177;
(statearr_41187[(10)] = inst_41170);

return statearr_41187;
})();
var statearr_41188_41298 = state_41177__$1;
(statearr_41188_41298[(2)] = null);

(statearr_41188_41298[(1)] = (2));


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
});})(c__40690__auto___41292,jobs,results,process,async))
;
return ((function (switch__40506__auto__,c__40690__auto___41292,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_41192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__);

(statearr_41192[(1)] = (1));

return statearr_41192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1 = (function (state_41177){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41177);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41193){if((e41193 instanceof Object)){
var ex__40510__auto__ = e41193;
var statearr_41194_41299 = state_41177;
(statearr_41194_41299[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41177);

return cljs.core.cst$kw$recur;
} else {
throw e41193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41300 = state_41177;
state_41177 = G__41300;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = function(state_41177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1.call(this,state_41177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___41292,jobs,results,process,async))
})();
var state__40692__auto__ = (function (){var statearr_41195 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___41292);

return statearr_41195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___41292,jobs,results,process,async))
);


var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__,jobs,results,process,async){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__,jobs,results,process,async){
return (function (state_41233){
var state_val_41234 = (state_41233[(1)]);
if((state_val_41234 === (7))){
var inst_41229 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41235_41301 = state_41233__$1;
(statearr_41235_41301[(2)] = inst_41229);

(statearr_41235_41301[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (20))){
var state_41233__$1 = state_41233;
var statearr_41236_41302 = state_41233__$1;
(statearr_41236_41302[(2)] = null);

(statearr_41236_41302[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (1))){
var state_41233__$1 = state_41233;
var statearr_41237_41303 = state_41233__$1;
(statearr_41237_41303[(2)] = null);

(statearr_41237_41303[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (4))){
var inst_41198 = (state_41233[(7)]);
var inst_41198__$1 = (state_41233[(2)]);
var inst_41199 = (inst_41198__$1 == null);
var state_41233__$1 = (function (){var statearr_41238 = state_41233;
(statearr_41238[(7)] = inst_41198__$1);

return statearr_41238;
})();
if(cljs.core.truth_(inst_41199)){
var statearr_41239_41304 = state_41233__$1;
(statearr_41239_41304[(1)] = (5));

} else {
var statearr_41240_41305 = state_41233__$1;
(statearr_41240_41305[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (15))){
var inst_41211 = (state_41233[(8)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41233__$1,(18),to,inst_41211);
} else {
if((state_val_41234 === (21))){
var inst_41224 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41241_41306 = state_41233__$1;
(statearr_41241_41306[(2)] = inst_41224);

(statearr_41241_41306[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (13))){
var inst_41226 = (state_41233[(2)]);
var state_41233__$1 = (function (){var statearr_41242 = state_41233;
(statearr_41242[(9)] = inst_41226);

return statearr_41242;
})();
var statearr_41243_41307 = state_41233__$1;
(statearr_41243_41307[(2)] = null);

(statearr_41243_41307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (6))){
var inst_41198 = (state_41233[(7)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41233__$1,(11),inst_41198);
} else {
if((state_val_41234 === (17))){
var inst_41219 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
if(cljs.core.truth_(inst_41219)){
var statearr_41244_41308 = state_41233__$1;
(statearr_41244_41308[(1)] = (19));

} else {
var statearr_41245_41309 = state_41233__$1;
(statearr_41245_41309[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (3))){
var inst_41231 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41233__$1,inst_41231);
} else {
if((state_val_41234 === (12))){
var inst_41208 = (state_41233[(10)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41233__$1,(14),inst_41208);
} else {
if((state_val_41234 === (2))){
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41233__$1,(4),results);
} else {
if((state_val_41234 === (19))){
var state_41233__$1 = state_41233;
var statearr_41246_41310 = state_41233__$1;
(statearr_41246_41310[(2)] = null);

(statearr_41246_41310[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (11))){
var inst_41208 = (state_41233[(2)]);
var state_41233__$1 = (function (){var statearr_41247 = state_41233;
(statearr_41247[(10)] = inst_41208);

return statearr_41247;
})();
var statearr_41248_41311 = state_41233__$1;
(statearr_41248_41311[(2)] = null);

(statearr_41248_41311[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (9))){
var state_41233__$1 = state_41233;
var statearr_41249_41312 = state_41233__$1;
(statearr_41249_41312[(2)] = null);

(statearr_41249_41312[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (5))){
var state_41233__$1 = state_41233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41250_41313 = state_41233__$1;
(statearr_41250_41313[(1)] = (8));

} else {
var statearr_41251_41314 = state_41233__$1;
(statearr_41251_41314[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (14))){
var inst_41213 = (state_41233[(11)]);
var inst_41211 = (state_41233[(8)]);
var inst_41211__$1 = (state_41233[(2)]);
var inst_41212 = (inst_41211__$1 == null);
var inst_41213__$1 = cljs.core.not(inst_41212);
var state_41233__$1 = (function (){var statearr_41252 = state_41233;
(statearr_41252[(11)] = inst_41213__$1);

(statearr_41252[(8)] = inst_41211__$1);

return statearr_41252;
})();
if(inst_41213__$1){
var statearr_41253_41315 = state_41233__$1;
(statearr_41253_41315[(1)] = (15));

} else {
var statearr_41254_41316 = state_41233__$1;
(statearr_41254_41316[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (16))){
var inst_41213 = (state_41233[(11)]);
var state_41233__$1 = state_41233;
var statearr_41255_41317 = state_41233__$1;
(statearr_41255_41317[(2)] = inst_41213);

(statearr_41255_41317[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (10))){
var inst_41205 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41256_41318 = state_41233__$1;
(statearr_41256_41318[(2)] = inst_41205);

(statearr_41256_41318[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (18))){
var inst_41216 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41257_41319 = state_41233__$1;
(statearr_41257_41319[(2)] = inst_41216);

(statearr_41257_41319[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41234 === (8))){
var inst_41202 = cljs.core.async.close_BANG_(to);
var state_41233__$1 = state_41233;
var statearr_41258_41320 = state_41233__$1;
(statearr_41258_41320[(2)] = inst_41202);

(statearr_41258_41320[(1)] = (10));


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
});})(c__40690__auto__,jobs,results,process,async))
;
return ((function (switch__40506__auto__,c__40690__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_41262 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__);

(statearr_41262[(1)] = (1));

return statearr_41262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1 = (function (state_41233){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41233);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41263){if((e41263 instanceof Object)){
var ex__40510__auto__ = e41263;
var statearr_41264_41321 = state_41233;
(statearr_41264_41321[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41233);

return cljs.core.cst$kw$recur;
} else {
throw e41263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41322 = state_41233;
state_41233 = G__41322;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__ = function(state_41233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1.call(this,state_41233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__,jobs,results,process,async))
})();
var state__40692__auto__ = (function (){var statearr_41265 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_41265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__,jobs,results,process,async))
);

return c__40690__auto__;
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
var args41323 = [];
var len__8723__auto___41326 = arguments.length;
var i__8724__auto___41327 = (0);
while(true){
if((i__8724__auto___41327 < len__8723__auto___41326)){
args41323.push((arguments[i__8724__auto___41327]));

var G__41328 = (i__8724__auto___41327 + (1));
i__8724__auto___41327 = G__41328;
continue;
} else {
}
break;
}

var G__41325 = args41323.length;
switch (G__41325) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41323.length)].join('')));

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
var args41330 = [];
var len__8723__auto___41333 = arguments.length;
var i__8724__auto___41334 = (0);
while(true){
if((i__8724__auto___41334 < len__8723__auto___41333)){
args41330.push((arguments[i__8724__auto___41334]));

var G__41335 = (i__8724__auto___41334 + (1));
i__8724__auto___41334 = G__41335;
continue;
} else {
}
break;
}

var G__41332 = args41330.length;
switch (G__41332) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41330.length)].join('')));

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
var args41337 = [];
var len__8723__auto___41390 = arguments.length;
var i__8724__auto___41391 = (0);
while(true){
if((i__8724__auto___41391 < len__8723__auto___41390)){
args41337.push((arguments[i__8724__auto___41391]));

var G__41392 = (i__8724__auto___41391 + (1));
i__8724__auto___41391 = G__41392;
continue;
} else {
}
break;
}

var G__41339 = args41337.length;
switch (G__41339) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41337.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__40690__auto___41394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___41394,tc,fc){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___41394,tc,fc){
return (function (state_41365){
var state_val_41366 = (state_41365[(1)]);
if((state_val_41366 === (7))){
var inst_41361 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
var statearr_41367_41395 = state_41365__$1;
(statearr_41367_41395[(2)] = inst_41361);

(statearr_41367_41395[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (1))){
var state_41365__$1 = state_41365;
var statearr_41368_41396 = state_41365__$1;
(statearr_41368_41396[(2)] = null);

(statearr_41368_41396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (4))){
var inst_41342 = (state_41365[(7)]);
var inst_41342__$1 = (state_41365[(2)]);
var inst_41343 = (inst_41342__$1 == null);
var state_41365__$1 = (function (){var statearr_41369 = state_41365;
(statearr_41369[(7)] = inst_41342__$1);

return statearr_41369;
})();
if(cljs.core.truth_(inst_41343)){
var statearr_41370_41397 = state_41365__$1;
(statearr_41370_41397[(1)] = (5));

} else {
var statearr_41371_41398 = state_41365__$1;
(statearr_41371_41398[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (13))){
var state_41365__$1 = state_41365;
var statearr_41372_41399 = state_41365__$1;
(statearr_41372_41399[(2)] = null);

(statearr_41372_41399[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (6))){
var inst_41342 = (state_41365[(7)]);
var inst_41348 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41342) : p.call(null,inst_41342));
var state_41365__$1 = state_41365;
if(cljs.core.truth_(inst_41348)){
var statearr_41373_41400 = state_41365__$1;
(statearr_41373_41400[(1)] = (9));

} else {
var statearr_41374_41401 = state_41365__$1;
(statearr_41374_41401[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (3))){
var inst_41363 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41365__$1,inst_41363);
} else {
if((state_val_41366 === (12))){
var state_41365__$1 = state_41365;
var statearr_41375_41402 = state_41365__$1;
(statearr_41375_41402[(2)] = null);

(statearr_41375_41402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (2))){
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41365__$1,(4),ch);
} else {
if((state_val_41366 === (11))){
var inst_41342 = (state_41365[(7)]);
var inst_41352 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41365__$1,(8),inst_41352,inst_41342);
} else {
if((state_val_41366 === (9))){
var state_41365__$1 = state_41365;
var statearr_41376_41403 = state_41365__$1;
(statearr_41376_41403[(2)] = tc);

(statearr_41376_41403[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (5))){
var inst_41345 = cljs.core.async.close_BANG_(tc);
var inst_41346 = cljs.core.async.close_BANG_(fc);
var state_41365__$1 = (function (){var statearr_41377 = state_41365;
(statearr_41377[(8)] = inst_41345);

return statearr_41377;
})();
var statearr_41378_41404 = state_41365__$1;
(statearr_41378_41404[(2)] = inst_41346);

(statearr_41378_41404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (14))){
var inst_41359 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
var statearr_41379_41405 = state_41365__$1;
(statearr_41379_41405[(2)] = inst_41359);

(statearr_41379_41405[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (10))){
var state_41365__$1 = state_41365;
var statearr_41380_41406 = state_41365__$1;
(statearr_41380_41406[(2)] = fc);

(statearr_41380_41406[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41366 === (8))){
var inst_41354 = (state_41365[(2)]);
var state_41365__$1 = state_41365;
if(cljs.core.truth_(inst_41354)){
var statearr_41381_41407 = state_41365__$1;
(statearr_41381_41407[(1)] = (12));

} else {
var statearr_41382_41408 = state_41365__$1;
(statearr_41382_41408[(1)] = (13));

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
});})(c__40690__auto___41394,tc,fc))
;
return ((function (switch__40506__auto__,c__40690__auto___41394,tc,fc){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_41386 = [null,null,null,null,null,null,null,null,null];
(statearr_41386[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_41386[(1)] = (1));

return statearr_41386;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_41365){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41365);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41387){if((e41387 instanceof Object)){
var ex__40510__auto__ = e41387;
var statearr_41388_41409 = state_41365;
(statearr_41388_41409[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41365);

return cljs.core.cst$kw$recur;
} else {
throw e41387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41410 = state_41365;
state_41365 = G__41410;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_41365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_41365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___41394,tc,fc))
})();
var state__40692__auto__ = (function (){var statearr_41389 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___41394);

return statearr_41389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___41394,tc,fc))
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
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_41474){
var state_val_41475 = (state_41474[(1)]);
if((state_val_41475 === (7))){
var inst_41470 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41476_41497 = state_41474__$1;
(statearr_41476_41497[(2)] = inst_41470);

(statearr_41476_41497[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (1))){
var inst_41454 = init;
var state_41474__$1 = (function (){var statearr_41477 = state_41474;
(statearr_41477[(7)] = inst_41454);

return statearr_41477;
})();
var statearr_41478_41498 = state_41474__$1;
(statearr_41478_41498[(2)] = null);

(statearr_41478_41498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (4))){
var inst_41457 = (state_41474[(8)]);
var inst_41457__$1 = (state_41474[(2)]);
var inst_41458 = (inst_41457__$1 == null);
var state_41474__$1 = (function (){var statearr_41479 = state_41474;
(statearr_41479[(8)] = inst_41457__$1);

return statearr_41479;
})();
if(cljs.core.truth_(inst_41458)){
var statearr_41480_41499 = state_41474__$1;
(statearr_41480_41499[(1)] = (5));

} else {
var statearr_41481_41500 = state_41474__$1;
(statearr_41481_41500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (6))){
var inst_41457 = (state_41474[(8)]);
var inst_41454 = (state_41474[(7)]);
var inst_41461 = (state_41474[(9)]);
var inst_41461__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41454,inst_41457) : f.call(null,inst_41454,inst_41457));
var inst_41462 = cljs.core.reduced_QMARK_(inst_41461__$1);
var state_41474__$1 = (function (){var statearr_41482 = state_41474;
(statearr_41482[(9)] = inst_41461__$1);

return statearr_41482;
})();
if(inst_41462){
var statearr_41483_41501 = state_41474__$1;
(statearr_41483_41501[(1)] = (8));

} else {
var statearr_41484_41502 = state_41474__$1;
(statearr_41484_41502[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (3))){
var inst_41472 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41474__$1,inst_41472);
} else {
if((state_val_41475 === (2))){
var state_41474__$1 = state_41474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41474__$1,(4),ch);
} else {
if((state_val_41475 === (9))){
var inst_41461 = (state_41474[(9)]);
var inst_41454 = inst_41461;
var state_41474__$1 = (function (){var statearr_41485 = state_41474;
(statearr_41485[(7)] = inst_41454);

return statearr_41485;
})();
var statearr_41486_41503 = state_41474__$1;
(statearr_41486_41503[(2)] = null);

(statearr_41486_41503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (5))){
var inst_41454 = (state_41474[(7)]);
var state_41474__$1 = state_41474;
var statearr_41487_41504 = state_41474__$1;
(statearr_41487_41504[(2)] = inst_41454);

(statearr_41487_41504[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (10))){
var inst_41468 = (state_41474[(2)]);
var state_41474__$1 = state_41474;
var statearr_41488_41505 = state_41474__$1;
(statearr_41488_41505[(2)] = inst_41468);

(statearr_41488_41505[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41475 === (8))){
var inst_41461 = (state_41474[(9)]);
var inst_41464 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_41461) : cljs.core.deref.call(null,inst_41461));
var state_41474__$1 = state_41474;
var statearr_41489_41506 = state_41474__$1;
(statearr_41489_41506[(2)] = inst_41464);

(statearr_41489_41506[(1)] = (10));


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
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40507__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40507__auto____0 = (function (){
var statearr_41493 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41493[(0)] = cljs$core$async$reduce_$_state_machine__40507__auto__);

(statearr_41493[(1)] = (1));

return statearr_41493;
});
var cljs$core$async$reduce_$_state_machine__40507__auto____1 = (function (state_41474){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41474);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41494){if((e41494 instanceof Object)){
var ex__40510__auto__ = e41494;
var statearr_41495_41507 = state_41474;
(statearr_41495_41507[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41474);

return cljs.core.cst$kw$recur;
} else {
throw e41494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41508 = state_41474;
state_41474 = G__41508;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40507__auto__ = function(state_41474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40507__auto____1.call(this,state_41474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40507__auto____0;
cljs$core$async$reduce_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40507__auto____1;
return cljs$core$async$reduce_$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_41496 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_41496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
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
var args41509 = [];
var len__8723__auto___41561 = arguments.length;
var i__8724__auto___41562 = (0);
while(true){
if((i__8724__auto___41562 < len__8723__auto___41561)){
args41509.push((arguments[i__8724__auto___41562]));

var G__41563 = (i__8724__auto___41562 + (1));
i__8724__auto___41562 = G__41563;
continue;
} else {
}
break;
}

var G__41511 = args41509.length;
switch (G__41511) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41509.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_41536){
var state_val_41537 = (state_41536[(1)]);
if((state_val_41537 === (7))){
var inst_41518 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41538_41565 = state_41536__$1;
(statearr_41538_41565[(2)] = inst_41518);

(statearr_41538_41565[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (1))){
var inst_41512 = cljs.core.seq(coll);
var inst_41513 = inst_41512;
var state_41536__$1 = (function (){var statearr_41539 = state_41536;
(statearr_41539[(7)] = inst_41513);

return statearr_41539;
})();
var statearr_41540_41566 = state_41536__$1;
(statearr_41540_41566[(2)] = null);

(statearr_41540_41566[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (4))){
var inst_41513 = (state_41536[(7)]);
var inst_41516 = cljs.core.first(inst_41513);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41536__$1,(7),ch,inst_41516);
} else {
if((state_val_41537 === (13))){
var inst_41530 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41541_41567 = state_41536__$1;
(statearr_41541_41567[(2)] = inst_41530);

(statearr_41541_41567[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (6))){
var inst_41521 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41521)){
var statearr_41542_41568 = state_41536__$1;
(statearr_41542_41568[(1)] = (8));

} else {
var statearr_41543_41569 = state_41536__$1;
(statearr_41543_41569[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (3))){
var inst_41534 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41536__$1,inst_41534);
} else {
if((state_val_41537 === (12))){
var state_41536__$1 = state_41536;
var statearr_41544_41570 = state_41536__$1;
(statearr_41544_41570[(2)] = null);

(statearr_41544_41570[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (2))){
var inst_41513 = (state_41536[(7)]);
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41513)){
var statearr_41545_41571 = state_41536__$1;
(statearr_41545_41571[(1)] = (4));

} else {
var statearr_41546_41572 = state_41536__$1;
(statearr_41546_41572[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (11))){
var inst_41527 = cljs.core.async.close_BANG_(ch);
var state_41536__$1 = state_41536;
var statearr_41547_41573 = state_41536__$1;
(statearr_41547_41573[(2)] = inst_41527);

(statearr_41547_41573[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (9))){
var state_41536__$1 = state_41536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41548_41574 = state_41536__$1;
(statearr_41548_41574[(1)] = (11));

} else {
var statearr_41549_41575 = state_41536__$1;
(statearr_41549_41575[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (5))){
var inst_41513 = (state_41536[(7)]);
var state_41536__$1 = state_41536;
var statearr_41550_41576 = state_41536__$1;
(statearr_41550_41576[(2)] = inst_41513);

(statearr_41550_41576[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (10))){
var inst_41532 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41551_41577 = state_41536__$1;
(statearr_41551_41577[(2)] = inst_41532);

(statearr_41551_41577[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41537 === (8))){
var inst_41513 = (state_41536[(7)]);
var inst_41523 = cljs.core.next(inst_41513);
var inst_41513__$1 = inst_41523;
var state_41536__$1 = (function (){var statearr_41552 = state_41536;
(statearr_41552[(7)] = inst_41513__$1);

return statearr_41552;
})();
var statearr_41553_41578 = state_41536__$1;
(statearr_41553_41578[(2)] = null);

(statearr_41553_41578[(1)] = (2));


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
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_41557 = [null,null,null,null,null,null,null,null];
(statearr_41557[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_41557[(1)] = (1));

return statearr_41557;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_41536){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41536);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e41558){if((e41558 instanceof Object)){
var ex__40510__auto__ = e41558;
var statearr_41559_41579 = state_41536;
(statearr_41559_41579[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41536);

return cljs.core.cst$kw$recur;
} else {
throw e41558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__41580 = state_41536;
state_41536 = G__41580;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_41536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_41536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_41560 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_41560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_41560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
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
var cs = (function (){var G__41809 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41809) : cljs.core.atom.call(null,G__41809));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41810 = (function (ch,cs,meta41811){
this.ch = ch;
this.cs = cs;
this.meta41811 = meta41811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41812,meta41811__$1){
var self__ = this;
var _41812__$1 = this;
return (new cljs.core.async.t_cljs$core$async41810(self__.ch,self__.cs,meta41811__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41812){
var self__ = this;
var _41812__$1 = this;
return self__.meta41811;
});})(cs))
;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async41810.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__41813_42037 = self__.cs;
var G__41814_42038 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41813_42037,G__41814_42038) : cljs.core.reset_BANG_.call(null,G__41813_42037,G__41814_42038));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41810.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta41811], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41810";

cljs.core.async.t_cljs$core$async41810.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async41810");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41810 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41810(ch__$1,cs__$1,meta41811){
return (new cljs.core.async.t_cljs$core$async41810(ch__$1,cs__$1,meta41811));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41810(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40690__auto___42039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42039,cs,m,dchan,dctr,done){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42039,cs,m,dchan,dctr,done){
return (function (state_41949){
var state_val_41950 = (state_41949[(1)]);
if((state_val_41950 === (7))){
var inst_41945 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_41951_42040 = state_41949__$1;
(statearr_41951_42040[(2)] = inst_41945);

(statearr_41951_42040[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (20))){
var inst_41848 = (state_41949[(7)]);
var inst_41860 = cljs.core.first(inst_41848);
var inst_41861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41860,(0),null);
var inst_41862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41860,(1),null);
var state_41949__$1 = (function (){var statearr_41952 = state_41949;
(statearr_41952[(8)] = inst_41861);

return statearr_41952;
})();
if(cljs.core.truth_(inst_41862)){
var statearr_41953_42041 = state_41949__$1;
(statearr_41953_42041[(1)] = (22));

} else {
var statearr_41954_42042 = state_41949__$1;
(statearr_41954_42042[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (27))){
var inst_41817 = (state_41949[(9)]);
var inst_41897 = (state_41949[(10)]);
var inst_41890 = (state_41949[(11)]);
var inst_41892 = (state_41949[(12)]);
var inst_41897__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41890,inst_41892);
var inst_41898 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41897__$1,inst_41817,done);
var state_41949__$1 = (function (){var statearr_41955 = state_41949;
(statearr_41955[(10)] = inst_41897__$1);

return statearr_41955;
})();
if(cljs.core.truth_(inst_41898)){
var statearr_41956_42043 = state_41949__$1;
(statearr_41956_42043[(1)] = (30));

} else {
var statearr_41957_42044 = state_41949__$1;
(statearr_41957_42044[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (1))){
var state_41949__$1 = state_41949;
var statearr_41958_42045 = state_41949__$1;
(statearr_41958_42045[(2)] = null);

(statearr_41958_42045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (24))){
var inst_41848 = (state_41949[(7)]);
var inst_41867 = (state_41949[(2)]);
var inst_41868 = cljs.core.next(inst_41848);
var inst_41826 = inst_41868;
var inst_41827 = null;
var inst_41828 = (0);
var inst_41829 = (0);
var state_41949__$1 = (function (){var statearr_41959 = state_41949;
(statearr_41959[(13)] = inst_41827);

(statearr_41959[(14)] = inst_41828);

(statearr_41959[(15)] = inst_41867);

(statearr_41959[(16)] = inst_41829);

(statearr_41959[(17)] = inst_41826);

return statearr_41959;
})();
var statearr_41960_42046 = state_41949__$1;
(statearr_41960_42046[(2)] = null);

(statearr_41960_42046[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (39))){
var state_41949__$1 = state_41949;
var statearr_41964_42047 = state_41949__$1;
(statearr_41964_42047[(2)] = null);

(statearr_41964_42047[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (4))){
var inst_41817 = (state_41949[(9)]);
var inst_41817__$1 = (state_41949[(2)]);
var inst_41818 = (inst_41817__$1 == null);
var state_41949__$1 = (function (){var statearr_41965 = state_41949;
(statearr_41965[(9)] = inst_41817__$1);

return statearr_41965;
})();
if(cljs.core.truth_(inst_41818)){
var statearr_41966_42048 = state_41949__$1;
(statearr_41966_42048[(1)] = (5));

} else {
var statearr_41967_42049 = state_41949__$1;
(statearr_41967_42049[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (15))){
var inst_41827 = (state_41949[(13)]);
var inst_41828 = (state_41949[(14)]);
var inst_41829 = (state_41949[(16)]);
var inst_41826 = (state_41949[(17)]);
var inst_41844 = (state_41949[(2)]);
var inst_41845 = (inst_41829 + (1));
var tmp41961 = inst_41827;
var tmp41962 = inst_41828;
var tmp41963 = inst_41826;
var inst_41826__$1 = tmp41963;
var inst_41827__$1 = tmp41961;
var inst_41828__$1 = tmp41962;
var inst_41829__$1 = inst_41845;
var state_41949__$1 = (function (){var statearr_41968 = state_41949;
(statearr_41968[(13)] = inst_41827__$1);

(statearr_41968[(18)] = inst_41844);

(statearr_41968[(14)] = inst_41828__$1);

(statearr_41968[(16)] = inst_41829__$1);

(statearr_41968[(17)] = inst_41826__$1);

return statearr_41968;
})();
var statearr_41969_42050 = state_41949__$1;
(statearr_41969_42050[(2)] = null);

(statearr_41969_42050[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (21))){
var inst_41871 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_41973_42051 = state_41949__$1;
(statearr_41973_42051[(2)] = inst_41871);

(statearr_41973_42051[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (31))){
var inst_41897 = (state_41949[(10)]);
var inst_41901 = done(null);
var inst_41902 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41897);
var state_41949__$1 = (function (){var statearr_41974 = state_41949;
(statearr_41974[(19)] = inst_41901);

return statearr_41974;
})();
var statearr_41975_42052 = state_41949__$1;
(statearr_41975_42052[(2)] = inst_41902);

(statearr_41975_42052[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (32))){
var inst_41891 = (state_41949[(20)]);
var inst_41890 = (state_41949[(11)]);
var inst_41892 = (state_41949[(12)]);
var inst_41889 = (state_41949[(21)]);
var inst_41904 = (state_41949[(2)]);
var inst_41905 = (inst_41892 + (1));
var tmp41970 = inst_41891;
var tmp41971 = inst_41890;
var tmp41972 = inst_41889;
var inst_41889__$1 = tmp41972;
var inst_41890__$1 = tmp41971;
var inst_41891__$1 = tmp41970;
var inst_41892__$1 = inst_41905;
var state_41949__$1 = (function (){var statearr_41976 = state_41949;
(statearr_41976[(20)] = inst_41891__$1);

(statearr_41976[(11)] = inst_41890__$1);

(statearr_41976[(12)] = inst_41892__$1);

(statearr_41976[(21)] = inst_41889__$1);

(statearr_41976[(22)] = inst_41904);

return statearr_41976;
})();
var statearr_41977_42053 = state_41949__$1;
(statearr_41977_42053[(2)] = null);

(statearr_41977_42053[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (40))){
var inst_41917 = (state_41949[(23)]);
var inst_41921 = done(null);
var inst_41922 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41917);
var state_41949__$1 = (function (){var statearr_41978 = state_41949;
(statearr_41978[(24)] = inst_41921);

return statearr_41978;
})();
var statearr_41979_42054 = state_41949__$1;
(statearr_41979_42054[(2)] = inst_41922);

(statearr_41979_42054[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (33))){
var inst_41908 = (state_41949[(25)]);
var inst_41910 = cljs.core.chunked_seq_QMARK_(inst_41908);
var state_41949__$1 = state_41949;
if(inst_41910){
var statearr_41980_42055 = state_41949__$1;
(statearr_41980_42055[(1)] = (36));

} else {
var statearr_41981_42056 = state_41949__$1;
(statearr_41981_42056[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (13))){
var inst_41838 = (state_41949[(26)]);
var inst_41841 = cljs.core.async.close_BANG_(inst_41838);
var state_41949__$1 = state_41949;
var statearr_41982_42057 = state_41949__$1;
(statearr_41982_42057[(2)] = inst_41841);

(statearr_41982_42057[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (22))){
var inst_41861 = (state_41949[(8)]);
var inst_41864 = cljs.core.async.close_BANG_(inst_41861);
var state_41949__$1 = state_41949;
var statearr_41983_42058 = state_41949__$1;
(statearr_41983_42058[(2)] = inst_41864);

(statearr_41983_42058[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (36))){
var inst_41908 = (state_41949[(25)]);
var inst_41912 = cljs.core.chunk_first(inst_41908);
var inst_41913 = cljs.core.chunk_rest(inst_41908);
var inst_41914 = cljs.core.count(inst_41912);
var inst_41889 = inst_41913;
var inst_41890 = inst_41912;
var inst_41891 = inst_41914;
var inst_41892 = (0);
var state_41949__$1 = (function (){var statearr_41984 = state_41949;
(statearr_41984[(20)] = inst_41891);

(statearr_41984[(11)] = inst_41890);

(statearr_41984[(12)] = inst_41892);

(statearr_41984[(21)] = inst_41889);

return statearr_41984;
})();
var statearr_41985_42059 = state_41949__$1;
(statearr_41985_42059[(2)] = null);

(statearr_41985_42059[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (41))){
var inst_41908 = (state_41949[(25)]);
var inst_41924 = (state_41949[(2)]);
var inst_41925 = cljs.core.next(inst_41908);
var inst_41889 = inst_41925;
var inst_41890 = null;
var inst_41891 = (0);
var inst_41892 = (0);
var state_41949__$1 = (function (){var statearr_41986 = state_41949;
(statearr_41986[(20)] = inst_41891);

(statearr_41986[(11)] = inst_41890);

(statearr_41986[(12)] = inst_41892);

(statearr_41986[(21)] = inst_41889);

(statearr_41986[(27)] = inst_41924);

return statearr_41986;
})();
var statearr_41987_42060 = state_41949__$1;
(statearr_41987_42060[(2)] = null);

(statearr_41987_42060[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (43))){
var state_41949__$1 = state_41949;
var statearr_41988_42061 = state_41949__$1;
(statearr_41988_42061[(2)] = null);

(statearr_41988_42061[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (29))){
var inst_41933 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_41989_42062 = state_41949__$1;
(statearr_41989_42062[(2)] = inst_41933);

(statearr_41989_42062[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (44))){
var inst_41942 = (state_41949[(2)]);
var state_41949__$1 = (function (){var statearr_41990 = state_41949;
(statearr_41990[(28)] = inst_41942);

return statearr_41990;
})();
var statearr_41991_42063 = state_41949__$1;
(statearr_41991_42063[(2)] = null);

(statearr_41991_42063[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (6))){
var inst_41881 = (state_41949[(29)]);
var inst_41880 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_41881__$1 = cljs.core.keys(inst_41880);
var inst_41882 = cljs.core.count(inst_41881__$1);
var inst_41883 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_41882) : cljs.core.reset_BANG_.call(null,dctr,inst_41882));
var inst_41888 = cljs.core.seq(inst_41881__$1);
var inst_41889 = inst_41888;
var inst_41890 = null;
var inst_41891 = (0);
var inst_41892 = (0);
var state_41949__$1 = (function (){var statearr_41992 = state_41949;
(statearr_41992[(20)] = inst_41891);

(statearr_41992[(11)] = inst_41890);

(statearr_41992[(12)] = inst_41892);

(statearr_41992[(21)] = inst_41889);

(statearr_41992[(30)] = inst_41883);

(statearr_41992[(29)] = inst_41881__$1);

return statearr_41992;
})();
var statearr_41993_42064 = state_41949__$1;
(statearr_41993_42064[(2)] = null);

(statearr_41993_42064[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (28))){
var inst_41889 = (state_41949[(21)]);
var inst_41908 = (state_41949[(25)]);
var inst_41908__$1 = cljs.core.seq(inst_41889);
var state_41949__$1 = (function (){var statearr_41994 = state_41949;
(statearr_41994[(25)] = inst_41908__$1);

return statearr_41994;
})();
if(inst_41908__$1){
var statearr_41995_42065 = state_41949__$1;
(statearr_41995_42065[(1)] = (33));

} else {
var statearr_41996_42066 = state_41949__$1;
(statearr_41996_42066[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (25))){
var inst_41891 = (state_41949[(20)]);
var inst_41892 = (state_41949[(12)]);
var inst_41894 = (inst_41892 < inst_41891);
var inst_41895 = inst_41894;
var state_41949__$1 = state_41949;
if(cljs.core.truth_(inst_41895)){
var statearr_41997_42067 = state_41949__$1;
(statearr_41997_42067[(1)] = (27));

} else {
var statearr_41998_42068 = state_41949__$1;
(statearr_41998_42068[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (34))){
var state_41949__$1 = state_41949;
var statearr_41999_42069 = state_41949__$1;
(statearr_41999_42069[(2)] = null);

(statearr_41999_42069[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (17))){
var state_41949__$1 = state_41949;
var statearr_42000_42070 = state_41949__$1;
(statearr_42000_42070[(2)] = null);

(statearr_42000_42070[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (3))){
var inst_41947 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41949__$1,inst_41947);
} else {
if((state_val_41950 === (12))){
var inst_41876 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42001_42071 = state_41949__$1;
(statearr_42001_42071[(2)] = inst_41876);

(statearr_42001_42071[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (2))){
var state_41949__$1 = state_41949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41949__$1,(4),ch);
} else {
if((state_val_41950 === (23))){
var state_41949__$1 = state_41949;
var statearr_42002_42072 = state_41949__$1;
(statearr_42002_42072[(2)] = null);

(statearr_42002_42072[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (35))){
var inst_41931 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42003_42073 = state_41949__$1;
(statearr_42003_42073[(2)] = inst_41931);

(statearr_42003_42073[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (19))){
var inst_41848 = (state_41949[(7)]);
var inst_41852 = cljs.core.chunk_first(inst_41848);
var inst_41853 = cljs.core.chunk_rest(inst_41848);
var inst_41854 = cljs.core.count(inst_41852);
var inst_41826 = inst_41853;
var inst_41827 = inst_41852;
var inst_41828 = inst_41854;
var inst_41829 = (0);
var state_41949__$1 = (function (){var statearr_42004 = state_41949;
(statearr_42004[(13)] = inst_41827);

(statearr_42004[(14)] = inst_41828);

(statearr_42004[(16)] = inst_41829);

(statearr_42004[(17)] = inst_41826);

return statearr_42004;
})();
var statearr_42005_42074 = state_41949__$1;
(statearr_42005_42074[(2)] = null);

(statearr_42005_42074[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (11))){
var inst_41826 = (state_41949[(17)]);
var inst_41848 = (state_41949[(7)]);
var inst_41848__$1 = cljs.core.seq(inst_41826);
var state_41949__$1 = (function (){var statearr_42006 = state_41949;
(statearr_42006[(7)] = inst_41848__$1);

return statearr_42006;
})();
if(inst_41848__$1){
var statearr_42007_42075 = state_41949__$1;
(statearr_42007_42075[(1)] = (16));

} else {
var statearr_42008_42076 = state_41949__$1;
(statearr_42008_42076[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (9))){
var inst_41878 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42009_42077 = state_41949__$1;
(statearr_42009_42077[(2)] = inst_41878);

(statearr_42009_42077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (5))){
var inst_41824 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_41825 = cljs.core.seq(inst_41824);
var inst_41826 = inst_41825;
var inst_41827 = null;
var inst_41828 = (0);
var inst_41829 = (0);
var state_41949__$1 = (function (){var statearr_42010 = state_41949;
(statearr_42010[(13)] = inst_41827);

(statearr_42010[(14)] = inst_41828);

(statearr_42010[(16)] = inst_41829);

(statearr_42010[(17)] = inst_41826);

return statearr_42010;
})();
var statearr_42011_42078 = state_41949__$1;
(statearr_42011_42078[(2)] = null);

(statearr_42011_42078[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (14))){
var state_41949__$1 = state_41949;
var statearr_42012_42079 = state_41949__$1;
(statearr_42012_42079[(2)] = null);

(statearr_42012_42079[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (45))){
var inst_41939 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42013_42080 = state_41949__$1;
(statearr_42013_42080[(2)] = inst_41939);

(statearr_42013_42080[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (26))){
var inst_41881 = (state_41949[(29)]);
var inst_41935 = (state_41949[(2)]);
var inst_41936 = cljs.core.seq(inst_41881);
var state_41949__$1 = (function (){var statearr_42014 = state_41949;
(statearr_42014[(31)] = inst_41935);

return statearr_42014;
})();
if(inst_41936){
var statearr_42015_42081 = state_41949__$1;
(statearr_42015_42081[(1)] = (42));

} else {
var statearr_42016_42082 = state_41949__$1;
(statearr_42016_42082[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (16))){
var inst_41848 = (state_41949[(7)]);
var inst_41850 = cljs.core.chunked_seq_QMARK_(inst_41848);
var state_41949__$1 = state_41949;
if(inst_41850){
var statearr_42017_42083 = state_41949__$1;
(statearr_42017_42083[(1)] = (19));

} else {
var statearr_42018_42084 = state_41949__$1;
(statearr_42018_42084[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (38))){
var inst_41928 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42019_42085 = state_41949__$1;
(statearr_42019_42085[(2)] = inst_41928);

(statearr_42019_42085[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (30))){
var state_41949__$1 = state_41949;
var statearr_42020_42086 = state_41949__$1;
(statearr_42020_42086[(2)] = null);

(statearr_42020_42086[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (10))){
var inst_41827 = (state_41949[(13)]);
var inst_41829 = (state_41949[(16)]);
var inst_41837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41827,inst_41829);
var inst_41838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41837,(0),null);
var inst_41839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41837,(1),null);
var state_41949__$1 = (function (){var statearr_42021 = state_41949;
(statearr_42021[(26)] = inst_41838);

return statearr_42021;
})();
if(cljs.core.truth_(inst_41839)){
var statearr_42022_42087 = state_41949__$1;
(statearr_42022_42087[(1)] = (13));

} else {
var statearr_42023_42088 = state_41949__$1;
(statearr_42023_42088[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (18))){
var inst_41874 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_42024_42089 = state_41949__$1;
(statearr_42024_42089[(2)] = inst_41874);

(statearr_42024_42089[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (42))){
var state_41949__$1 = state_41949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41949__$1,(45),dchan);
} else {
if((state_val_41950 === (37))){
var inst_41817 = (state_41949[(9)]);
var inst_41917 = (state_41949[(23)]);
var inst_41908 = (state_41949[(25)]);
var inst_41917__$1 = cljs.core.first(inst_41908);
var inst_41918 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41917__$1,inst_41817,done);
var state_41949__$1 = (function (){var statearr_42025 = state_41949;
(statearr_42025[(23)] = inst_41917__$1);

return statearr_42025;
})();
if(cljs.core.truth_(inst_41918)){
var statearr_42026_42090 = state_41949__$1;
(statearr_42026_42090[(1)] = (39));

} else {
var statearr_42027_42091 = state_41949__$1;
(statearr_42027_42091[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41950 === (8))){
var inst_41828 = (state_41949[(14)]);
var inst_41829 = (state_41949[(16)]);
var inst_41831 = (inst_41829 < inst_41828);
var inst_41832 = inst_41831;
var state_41949__$1 = state_41949;
if(cljs.core.truth_(inst_41832)){
var statearr_42028_42092 = state_41949__$1;
(statearr_42028_42092[(1)] = (10));

} else {
var statearr_42029_42093 = state_41949__$1;
(statearr_42029_42093[(1)] = (11));

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
});})(c__40690__auto___42039,cs,m,dchan,dctr,done))
;
return ((function (switch__40506__auto__,c__40690__auto___42039,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40507__auto__ = null;
var cljs$core$async$mult_$_state_machine__40507__auto____0 = (function (){
var statearr_42033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42033[(0)] = cljs$core$async$mult_$_state_machine__40507__auto__);

(statearr_42033[(1)] = (1));

return statearr_42033;
});
var cljs$core$async$mult_$_state_machine__40507__auto____1 = (function (state_41949){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_41949);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42034){if((e42034 instanceof Object)){
var ex__40510__auto__ = e42034;
var statearr_42035_42094 = state_41949;
(statearr_42035_42094[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41949);

return cljs.core.cst$kw$recur;
} else {
throw e42034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42095 = state_41949;
state_41949 = G__42095;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40507__auto__ = function(state_41949){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40507__auto____1.call(this,state_41949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40507__auto____0;
cljs$core$async$mult_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40507__auto____1;
return cljs$core$async$mult_$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42039,cs,m,dchan,dctr,done))
})();
var state__40692__auto__ = (function (){var statearr_42036 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42039);

return statearr_42036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42039,cs,m,dchan,dctr,done))
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
var args42096 = [];
var len__8723__auto___42099 = arguments.length;
var i__8724__auto___42100 = (0);
while(true){
if((i__8724__auto___42100 < len__8723__auto___42099)){
args42096.push((arguments[i__8724__auto___42100]));

var G__42101 = (i__8724__auto___42100 + (1));
i__8724__auto___42100 = G__42101;
continue;
} else {
}
break;
}

var G__42098 = args42096.length;
switch (G__42098) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42096.length)].join('')));

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
var len__8723__auto___42113 = arguments.length;
var i__8724__auto___42114 = (0);
while(true){
if((i__8724__auto___42114 < len__8723__auto___42113)){
args__8730__auto__.push((arguments[i__8724__auto___42114]));

var G__42115 = (i__8724__auto___42114 + (1));
i__8724__auto___42114 = G__42115;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((3) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8731__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42107){
var map__42108 = p__42107;
var map__42108__$1 = ((((!((map__42108 == null)))?((((map__42108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42108):map__42108);
var opts = map__42108__$1;
var statearr_42110_42116 = state;
(statearr_42110_42116[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts(((function (map__42108,map__42108__$1,opts){
return (function (val){
var statearr_42111_42117 = state;
(statearr_42111_42117[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__42108,map__42108__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_42112_42118 = state;
(statearr_42112_42118[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42103){
var G__42104 = cljs.core.first(seq42103);
var seq42103__$1 = cljs.core.next(seq42103);
var G__42105 = cljs.core.first(seq42103__$1);
var seq42103__$2 = cljs.core.next(seq42103__$1);
var G__42106 = cljs.core.first(seq42103__$2);
var seq42103__$3 = cljs.core.next(seq42103__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42104,G__42105,G__42106,seq42103__$3);
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
var cs = (function (){var G__42290 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42290) : cljs.core.atom.call(null,G__42290));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__42291 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42291) : cljs.core.atom.call(null,G__42291));
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
if(typeof cljs.core.async.t_cljs$core$async42292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42292 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42293){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42293 = meta42293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42294,meta42293__$1){
var self__ = this;
var _42294__$1 = this;
return (new cljs.core.async.t_cljs$core$async42292(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42293__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42294){
var self__ = this;
var _42294__$1 = this;
return self__.meta42293;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42295_42461 = self__.cs;
var G__42296_42462 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42295_42461,G__42296_42462) : cljs.core.reset_BANG_.call(null,G__42295_42461,G__42296_42462));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42292.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta42293], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42292";

cljs.core.async.t_cljs$core$async42292.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42292");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42292 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42292(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42293){
return (new cljs.core.async.t_cljs$core$async42292(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42293));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42292(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40690__auto___42463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42398){
var state_val_42399 = (state_42398[(1)]);
if((state_val_42399 === (7))){
var inst_42313 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
var statearr_42400_42464 = state_42398__$1;
(statearr_42400_42464[(2)] = inst_42313);

(statearr_42400_42464[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (20))){
var inst_42325 = (state_42398[(7)]);
var state_42398__$1 = state_42398;
var statearr_42401_42465 = state_42398__$1;
(statearr_42401_42465[(2)] = inst_42325);

(statearr_42401_42465[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (27))){
var state_42398__$1 = state_42398;
var statearr_42402_42466 = state_42398__$1;
(statearr_42402_42466[(2)] = null);

(statearr_42402_42466[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (1))){
var inst_42300 = (state_42398[(8)]);
var inst_42300__$1 = calc_state();
var inst_42302 = (inst_42300__$1 == null);
var inst_42303 = cljs.core.not(inst_42302);
var state_42398__$1 = (function (){var statearr_42403 = state_42398;
(statearr_42403[(8)] = inst_42300__$1);

return statearr_42403;
})();
if(inst_42303){
var statearr_42404_42467 = state_42398__$1;
(statearr_42404_42467[(1)] = (2));

} else {
var statearr_42405_42468 = state_42398__$1;
(statearr_42405_42468[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (24))){
var inst_42358 = (state_42398[(9)]);
var inst_42349 = (state_42398[(10)]);
var inst_42372 = (state_42398[(11)]);
var inst_42372__$1 = (inst_42349.cljs$core$IFn$_invoke$arity$1 ? inst_42349.cljs$core$IFn$_invoke$arity$1(inst_42358) : inst_42349.call(null,inst_42358));
var state_42398__$1 = (function (){var statearr_42406 = state_42398;
(statearr_42406[(11)] = inst_42372__$1);

return statearr_42406;
})();
if(cljs.core.truth_(inst_42372__$1)){
var statearr_42407_42469 = state_42398__$1;
(statearr_42407_42469[(1)] = (29));

} else {
var statearr_42408_42470 = state_42398__$1;
(statearr_42408_42470[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (4))){
var inst_42316 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42316)){
var statearr_42409_42471 = state_42398__$1;
(statearr_42409_42471[(1)] = (8));

} else {
var statearr_42410_42472 = state_42398__$1;
(statearr_42410_42472[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (15))){
var inst_42343 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42343)){
var statearr_42411_42473 = state_42398__$1;
(statearr_42411_42473[(1)] = (19));

} else {
var statearr_42412_42474 = state_42398__$1;
(statearr_42412_42474[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (21))){
var inst_42348 = (state_42398[(12)]);
var inst_42348__$1 = (state_42398[(2)]);
var inst_42349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42348__$1,cljs.core.cst$kw$solos);
var inst_42350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42348__$1,cljs.core.cst$kw$mutes);
var inst_42351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42348__$1,cljs.core.cst$kw$reads);
var state_42398__$1 = (function (){var statearr_42413 = state_42398;
(statearr_42413[(12)] = inst_42348__$1);

(statearr_42413[(13)] = inst_42350);

(statearr_42413[(10)] = inst_42349);

return statearr_42413;
})();
return cljs.core.async.ioc_alts_BANG_(state_42398__$1,(22),inst_42351);
} else {
if((state_val_42399 === (31))){
var inst_42380 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42380)){
var statearr_42414_42475 = state_42398__$1;
(statearr_42414_42475[(1)] = (32));

} else {
var statearr_42415_42476 = state_42398__$1;
(statearr_42415_42476[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (32))){
var inst_42357 = (state_42398[(14)]);
var state_42398__$1 = state_42398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42398__$1,(35),out,inst_42357);
} else {
if((state_val_42399 === (33))){
var inst_42348 = (state_42398[(12)]);
var inst_42325 = inst_42348;
var state_42398__$1 = (function (){var statearr_42416 = state_42398;
(statearr_42416[(7)] = inst_42325);

return statearr_42416;
})();
var statearr_42417_42477 = state_42398__$1;
(statearr_42417_42477[(2)] = null);

(statearr_42417_42477[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (13))){
var inst_42325 = (state_42398[(7)]);
var inst_42332 = inst_42325.cljs$lang$protocol_mask$partition0$;
var inst_42333 = (inst_42332 & (64));
var inst_42334 = inst_42325.cljs$core$ISeq$;
var inst_42335 = (cljs.core.PROTOCOL_SENTINEL === inst_42334);
var inst_42336 = (inst_42333) || (inst_42335);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42336)){
var statearr_42418_42478 = state_42398__$1;
(statearr_42418_42478[(1)] = (16));

} else {
var statearr_42419_42479 = state_42398__$1;
(statearr_42419_42479[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (22))){
var inst_42358 = (state_42398[(9)]);
var inst_42357 = (state_42398[(14)]);
var inst_42356 = (state_42398[(2)]);
var inst_42357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42356,(0),null);
var inst_42358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42356,(1),null);
var inst_42359 = (inst_42357__$1 == null);
var inst_42360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42358__$1,change);
var inst_42361 = (inst_42359) || (inst_42360);
var state_42398__$1 = (function (){var statearr_42420 = state_42398;
(statearr_42420[(9)] = inst_42358__$1);

(statearr_42420[(14)] = inst_42357__$1);

return statearr_42420;
})();
if(cljs.core.truth_(inst_42361)){
var statearr_42421_42480 = state_42398__$1;
(statearr_42421_42480[(1)] = (23));

} else {
var statearr_42422_42481 = state_42398__$1;
(statearr_42422_42481[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (36))){
var inst_42348 = (state_42398[(12)]);
var inst_42325 = inst_42348;
var state_42398__$1 = (function (){var statearr_42423 = state_42398;
(statearr_42423[(7)] = inst_42325);

return statearr_42423;
})();
var statearr_42424_42482 = state_42398__$1;
(statearr_42424_42482[(2)] = null);

(statearr_42424_42482[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (29))){
var inst_42372 = (state_42398[(11)]);
var state_42398__$1 = state_42398;
var statearr_42425_42483 = state_42398__$1;
(statearr_42425_42483[(2)] = inst_42372);

(statearr_42425_42483[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (6))){
var state_42398__$1 = state_42398;
var statearr_42426_42484 = state_42398__$1;
(statearr_42426_42484[(2)] = false);

(statearr_42426_42484[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (28))){
var inst_42368 = (state_42398[(2)]);
var inst_42369 = calc_state();
var inst_42325 = inst_42369;
var state_42398__$1 = (function (){var statearr_42427 = state_42398;
(statearr_42427[(15)] = inst_42368);

(statearr_42427[(7)] = inst_42325);

return statearr_42427;
})();
var statearr_42428_42485 = state_42398__$1;
(statearr_42428_42485[(2)] = null);

(statearr_42428_42485[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (25))){
var inst_42394 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
var statearr_42429_42486 = state_42398__$1;
(statearr_42429_42486[(2)] = inst_42394);

(statearr_42429_42486[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (34))){
var inst_42392 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
var statearr_42430_42487 = state_42398__$1;
(statearr_42430_42487[(2)] = inst_42392);

(statearr_42430_42487[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (17))){
var state_42398__$1 = state_42398;
var statearr_42431_42488 = state_42398__$1;
(statearr_42431_42488[(2)] = false);

(statearr_42431_42488[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (3))){
var state_42398__$1 = state_42398;
var statearr_42432_42489 = state_42398__$1;
(statearr_42432_42489[(2)] = false);

(statearr_42432_42489[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (12))){
var inst_42396 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42398__$1,inst_42396);
} else {
if((state_val_42399 === (2))){
var inst_42300 = (state_42398[(8)]);
var inst_42305 = inst_42300.cljs$lang$protocol_mask$partition0$;
var inst_42306 = (inst_42305 & (64));
var inst_42307 = inst_42300.cljs$core$ISeq$;
var inst_42308 = (cljs.core.PROTOCOL_SENTINEL === inst_42307);
var inst_42309 = (inst_42306) || (inst_42308);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42309)){
var statearr_42433_42490 = state_42398__$1;
(statearr_42433_42490[(1)] = (5));

} else {
var statearr_42434_42491 = state_42398__$1;
(statearr_42434_42491[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (23))){
var inst_42357 = (state_42398[(14)]);
var inst_42363 = (inst_42357 == null);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42363)){
var statearr_42435_42492 = state_42398__$1;
(statearr_42435_42492[(1)] = (26));

} else {
var statearr_42436_42493 = state_42398__$1;
(statearr_42436_42493[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (35))){
var inst_42383 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
if(cljs.core.truth_(inst_42383)){
var statearr_42437_42494 = state_42398__$1;
(statearr_42437_42494[(1)] = (36));

} else {
var statearr_42438_42495 = state_42398__$1;
(statearr_42438_42495[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (19))){
var inst_42325 = (state_42398[(7)]);
var inst_42345 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42325);
var state_42398__$1 = state_42398;
var statearr_42439_42496 = state_42398__$1;
(statearr_42439_42496[(2)] = inst_42345);

(statearr_42439_42496[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (11))){
var inst_42325 = (state_42398[(7)]);
var inst_42329 = (inst_42325 == null);
var inst_42330 = cljs.core.not(inst_42329);
var state_42398__$1 = state_42398;
if(inst_42330){
var statearr_42440_42497 = state_42398__$1;
(statearr_42440_42497[(1)] = (13));

} else {
var statearr_42441_42498 = state_42398__$1;
(statearr_42441_42498[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (9))){
var inst_42300 = (state_42398[(8)]);
var state_42398__$1 = state_42398;
var statearr_42442_42499 = state_42398__$1;
(statearr_42442_42499[(2)] = inst_42300);

(statearr_42442_42499[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (5))){
var state_42398__$1 = state_42398;
var statearr_42443_42500 = state_42398__$1;
(statearr_42443_42500[(2)] = true);

(statearr_42443_42500[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (14))){
var state_42398__$1 = state_42398;
var statearr_42444_42501 = state_42398__$1;
(statearr_42444_42501[(2)] = false);

(statearr_42444_42501[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (26))){
var inst_42358 = (state_42398[(9)]);
var inst_42365 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42358);
var state_42398__$1 = state_42398;
var statearr_42445_42502 = state_42398__$1;
(statearr_42445_42502[(2)] = inst_42365);

(statearr_42445_42502[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (16))){
var state_42398__$1 = state_42398;
var statearr_42446_42503 = state_42398__$1;
(statearr_42446_42503[(2)] = true);

(statearr_42446_42503[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (38))){
var inst_42388 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
var statearr_42447_42504 = state_42398__$1;
(statearr_42447_42504[(2)] = inst_42388);

(statearr_42447_42504[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (30))){
var inst_42358 = (state_42398[(9)]);
var inst_42350 = (state_42398[(13)]);
var inst_42349 = (state_42398[(10)]);
var inst_42375 = cljs.core.empty_QMARK_(inst_42349);
var inst_42376 = (inst_42350.cljs$core$IFn$_invoke$arity$1 ? inst_42350.cljs$core$IFn$_invoke$arity$1(inst_42358) : inst_42350.call(null,inst_42358));
var inst_42377 = cljs.core.not(inst_42376);
var inst_42378 = (inst_42375) && (inst_42377);
var state_42398__$1 = state_42398;
var statearr_42448_42505 = state_42398__$1;
(statearr_42448_42505[(2)] = inst_42378);

(statearr_42448_42505[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (10))){
var inst_42300 = (state_42398[(8)]);
var inst_42321 = (state_42398[(2)]);
var inst_42322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42321,cljs.core.cst$kw$solos);
var inst_42323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42321,cljs.core.cst$kw$mutes);
var inst_42324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42321,cljs.core.cst$kw$reads);
var inst_42325 = inst_42300;
var state_42398__$1 = (function (){var statearr_42449 = state_42398;
(statearr_42449[(16)] = inst_42323);

(statearr_42449[(17)] = inst_42322);

(statearr_42449[(18)] = inst_42324);

(statearr_42449[(7)] = inst_42325);

return statearr_42449;
})();
var statearr_42450_42506 = state_42398__$1;
(statearr_42450_42506[(2)] = null);

(statearr_42450_42506[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (18))){
var inst_42340 = (state_42398[(2)]);
var state_42398__$1 = state_42398;
var statearr_42451_42507 = state_42398__$1;
(statearr_42451_42507[(2)] = inst_42340);

(statearr_42451_42507[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (37))){
var state_42398__$1 = state_42398;
var statearr_42452_42508 = state_42398__$1;
(statearr_42452_42508[(2)] = null);

(statearr_42452_42508[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42399 === (8))){
var inst_42300 = (state_42398[(8)]);
var inst_42318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42300);
var state_42398__$1 = state_42398;
var statearr_42453_42509 = state_42398__$1;
(statearr_42453_42509[(2)] = inst_42318);

(statearr_42453_42509[(1)] = (10));


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
});})(c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40506__auto__,c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40507__auto__ = null;
var cljs$core$async$mix_$_state_machine__40507__auto____0 = (function (){
var statearr_42457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42457[(0)] = cljs$core$async$mix_$_state_machine__40507__auto__);

(statearr_42457[(1)] = (1));

return statearr_42457;
});
var cljs$core$async$mix_$_state_machine__40507__auto____1 = (function (state_42398){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42398);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42458){if((e42458 instanceof Object)){
var ex__40510__auto__ = e42458;
var statearr_42459_42510 = state_42398;
(statearr_42459_42510[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42398);

return cljs.core.cst$kw$recur;
} else {
throw e42458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42511 = state_42398;
state_42398 = G__42511;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40507__auto__ = function(state_42398){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40507__auto____1.call(this,state_42398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40507__auto____0;
cljs$core$async$mix_$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40507__auto____1;
return cljs$core$async$mix_$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40692__auto__ = (function (){var statearr_42460 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42463);

return statearr_42460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42463,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args42512 = [];
var len__8723__auto___42515 = arguments.length;
var i__8724__auto___42516 = (0);
while(true){
if((i__8724__auto___42516 < len__8723__auto___42515)){
args42512.push((arguments[i__8724__auto___42516]));

var G__42517 = (i__8724__auto___42516 + (1));
i__8724__auto___42516 = G__42517;
continue;
} else {
}
break;
}

var G__42514 = args42512.length;
switch (G__42514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42512.length)].join('')));

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
var args42520 = [];
var len__8723__auto___42648 = arguments.length;
var i__8724__auto___42649 = (0);
while(true){
if((i__8724__auto___42649 < len__8723__auto___42648)){
args42520.push((arguments[i__8724__auto___42649]));

var G__42650 = (i__8724__auto___42649 + (1));
i__8724__auto___42649 = G__42650;
continue;
} else {
}
break;
}

var G__42522 = args42520.length;
switch (G__42522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__42523 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42523) : cljs.core.atom.call(null,G__42523));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7502__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7502__auto__,mults){
return (function (p1__42519_SHARP_){
if(cljs.core.truth_((p1__42519_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42519_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42519_SHARP_.call(null,topic)))){
return p1__42519_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42519_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7502__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42524 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42525){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42525 = meta42525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42526,meta42525__$1){
var self__ = this;
var _42526__$1 = this;
return (new cljs.core.async.t_cljs$core$async42524(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42525__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42526){
var self__ = this;
var _42526__$1 = this;
return self__.meta42525;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__42527 = self__.mults;
var G__42528 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42527,G__42528) : cljs.core.reset_BANG_.call(null,G__42527,G__42528));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async42524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42524.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta42525], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42524";

cljs.core.async.t_cljs$core$async42524.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42524");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42524 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42525){
return (new cljs.core.async.t_cljs$core$async42524(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42525));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42524(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40690__auto___42652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42652,mults,ensure_mult,p){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42652,mults,ensure_mult,p){
return (function (state_42600){
var state_val_42601 = (state_42600[(1)]);
if((state_val_42601 === (7))){
var inst_42596 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42602_42653 = state_42600__$1;
(statearr_42602_42653[(2)] = inst_42596);

(statearr_42602_42653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (20))){
var state_42600__$1 = state_42600;
var statearr_42603_42654 = state_42600__$1;
(statearr_42603_42654[(2)] = null);

(statearr_42603_42654[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (1))){
var state_42600__$1 = state_42600;
var statearr_42604_42655 = state_42600__$1;
(statearr_42604_42655[(2)] = null);

(statearr_42604_42655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (24))){
var inst_42579 = (state_42600[(7)]);
var inst_42588 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42579);
var state_42600__$1 = state_42600;
var statearr_42605_42656 = state_42600__$1;
(statearr_42605_42656[(2)] = inst_42588);

(statearr_42605_42656[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (4))){
var inst_42531 = (state_42600[(8)]);
var inst_42531__$1 = (state_42600[(2)]);
var inst_42532 = (inst_42531__$1 == null);
var state_42600__$1 = (function (){var statearr_42606 = state_42600;
(statearr_42606[(8)] = inst_42531__$1);

return statearr_42606;
})();
if(cljs.core.truth_(inst_42532)){
var statearr_42607_42657 = state_42600__$1;
(statearr_42607_42657[(1)] = (5));

} else {
var statearr_42608_42658 = state_42600__$1;
(statearr_42608_42658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (15))){
var inst_42573 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42609_42659 = state_42600__$1;
(statearr_42609_42659[(2)] = inst_42573);

(statearr_42609_42659[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (21))){
var inst_42593 = (state_42600[(2)]);
var state_42600__$1 = (function (){var statearr_42610 = state_42600;
(statearr_42610[(9)] = inst_42593);

return statearr_42610;
})();
var statearr_42611_42660 = state_42600__$1;
(statearr_42611_42660[(2)] = null);

(statearr_42611_42660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (13))){
var inst_42555 = (state_42600[(10)]);
var inst_42557 = cljs.core.chunked_seq_QMARK_(inst_42555);
var state_42600__$1 = state_42600;
if(inst_42557){
var statearr_42612_42661 = state_42600__$1;
(statearr_42612_42661[(1)] = (16));

} else {
var statearr_42613_42662 = state_42600__$1;
(statearr_42613_42662[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (22))){
var inst_42585 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
if(cljs.core.truth_(inst_42585)){
var statearr_42614_42663 = state_42600__$1;
(statearr_42614_42663[(1)] = (23));

} else {
var statearr_42615_42664 = state_42600__$1;
(statearr_42615_42664[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (6))){
var inst_42531 = (state_42600[(8)]);
var inst_42581 = (state_42600[(11)]);
var inst_42579 = (state_42600[(7)]);
var inst_42579__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42531) : topic_fn.call(null,inst_42531));
var inst_42580 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_42581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42580,inst_42579__$1);
var state_42600__$1 = (function (){var statearr_42616 = state_42600;
(statearr_42616[(11)] = inst_42581__$1);

(statearr_42616[(7)] = inst_42579__$1);

return statearr_42616;
})();
if(cljs.core.truth_(inst_42581__$1)){
var statearr_42617_42665 = state_42600__$1;
(statearr_42617_42665[(1)] = (19));

} else {
var statearr_42618_42666 = state_42600__$1;
(statearr_42618_42666[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (25))){
var inst_42590 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42619_42667 = state_42600__$1;
(statearr_42619_42667[(2)] = inst_42590);

(statearr_42619_42667[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (17))){
var inst_42555 = (state_42600[(10)]);
var inst_42564 = cljs.core.first(inst_42555);
var inst_42565 = cljs.core.async.muxch_STAR_(inst_42564);
var inst_42566 = cljs.core.async.close_BANG_(inst_42565);
var inst_42567 = cljs.core.next(inst_42555);
var inst_42541 = inst_42567;
var inst_42542 = null;
var inst_42543 = (0);
var inst_42544 = (0);
var state_42600__$1 = (function (){var statearr_42620 = state_42600;
(statearr_42620[(12)] = inst_42542);

(statearr_42620[(13)] = inst_42543);

(statearr_42620[(14)] = inst_42544);

(statearr_42620[(15)] = inst_42541);

(statearr_42620[(16)] = inst_42566);

return statearr_42620;
})();
var statearr_42621_42668 = state_42600__$1;
(statearr_42621_42668[(2)] = null);

(statearr_42621_42668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (3))){
var inst_42598 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42600__$1,inst_42598);
} else {
if((state_val_42601 === (12))){
var inst_42575 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42622_42669 = state_42600__$1;
(statearr_42622_42669[(2)] = inst_42575);

(statearr_42622_42669[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (2))){
var state_42600__$1 = state_42600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42600__$1,(4),ch);
} else {
if((state_val_42601 === (23))){
var state_42600__$1 = state_42600;
var statearr_42623_42670 = state_42600__$1;
(statearr_42623_42670[(2)] = null);

(statearr_42623_42670[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (19))){
var inst_42531 = (state_42600[(8)]);
var inst_42581 = (state_42600[(11)]);
var inst_42583 = cljs.core.async.muxch_STAR_(inst_42581);
var state_42600__$1 = state_42600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42600__$1,(22),inst_42583,inst_42531);
} else {
if((state_val_42601 === (11))){
var inst_42555 = (state_42600[(10)]);
var inst_42541 = (state_42600[(15)]);
var inst_42555__$1 = cljs.core.seq(inst_42541);
var state_42600__$1 = (function (){var statearr_42624 = state_42600;
(statearr_42624[(10)] = inst_42555__$1);

return statearr_42624;
})();
if(inst_42555__$1){
var statearr_42625_42671 = state_42600__$1;
(statearr_42625_42671[(1)] = (13));

} else {
var statearr_42626_42672 = state_42600__$1;
(statearr_42626_42672[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (9))){
var inst_42577 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42627_42673 = state_42600__$1;
(statearr_42627_42673[(2)] = inst_42577);

(statearr_42627_42673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (5))){
var inst_42538 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_42539 = cljs.core.vals(inst_42538);
var inst_42540 = cljs.core.seq(inst_42539);
var inst_42541 = inst_42540;
var inst_42542 = null;
var inst_42543 = (0);
var inst_42544 = (0);
var state_42600__$1 = (function (){var statearr_42628 = state_42600;
(statearr_42628[(12)] = inst_42542);

(statearr_42628[(13)] = inst_42543);

(statearr_42628[(14)] = inst_42544);

(statearr_42628[(15)] = inst_42541);

return statearr_42628;
})();
var statearr_42629_42674 = state_42600__$1;
(statearr_42629_42674[(2)] = null);

(statearr_42629_42674[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (14))){
var state_42600__$1 = state_42600;
var statearr_42633_42675 = state_42600__$1;
(statearr_42633_42675[(2)] = null);

(statearr_42633_42675[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (16))){
var inst_42555 = (state_42600[(10)]);
var inst_42559 = cljs.core.chunk_first(inst_42555);
var inst_42560 = cljs.core.chunk_rest(inst_42555);
var inst_42561 = cljs.core.count(inst_42559);
var inst_42541 = inst_42560;
var inst_42542 = inst_42559;
var inst_42543 = inst_42561;
var inst_42544 = (0);
var state_42600__$1 = (function (){var statearr_42634 = state_42600;
(statearr_42634[(12)] = inst_42542);

(statearr_42634[(13)] = inst_42543);

(statearr_42634[(14)] = inst_42544);

(statearr_42634[(15)] = inst_42541);

return statearr_42634;
})();
var statearr_42635_42676 = state_42600__$1;
(statearr_42635_42676[(2)] = null);

(statearr_42635_42676[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (10))){
var inst_42542 = (state_42600[(12)]);
var inst_42543 = (state_42600[(13)]);
var inst_42544 = (state_42600[(14)]);
var inst_42541 = (state_42600[(15)]);
var inst_42549 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42542,inst_42544);
var inst_42550 = cljs.core.async.muxch_STAR_(inst_42549);
var inst_42551 = cljs.core.async.close_BANG_(inst_42550);
var inst_42552 = (inst_42544 + (1));
var tmp42630 = inst_42542;
var tmp42631 = inst_42543;
var tmp42632 = inst_42541;
var inst_42541__$1 = tmp42632;
var inst_42542__$1 = tmp42630;
var inst_42543__$1 = tmp42631;
var inst_42544__$1 = inst_42552;
var state_42600__$1 = (function (){var statearr_42636 = state_42600;
(statearr_42636[(17)] = inst_42551);

(statearr_42636[(12)] = inst_42542__$1);

(statearr_42636[(13)] = inst_42543__$1);

(statearr_42636[(14)] = inst_42544__$1);

(statearr_42636[(15)] = inst_42541__$1);

return statearr_42636;
})();
var statearr_42637_42677 = state_42600__$1;
(statearr_42637_42677[(2)] = null);

(statearr_42637_42677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (18))){
var inst_42570 = (state_42600[(2)]);
var state_42600__$1 = state_42600;
var statearr_42638_42678 = state_42600__$1;
(statearr_42638_42678[(2)] = inst_42570);

(statearr_42638_42678[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42601 === (8))){
var inst_42543 = (state_42600[(13)]);
var inst_42544 = (state_42600[(14)]);
var inst_42546 = (inst_42544 < inst_42543);
var inst_42547 = inst_42546;
var state_42600__$1 = state_42600;
if(cljs.core.truth_(inst_42547)){
var statearr_42639_42679 = state_42600__$1;
(statearr_42639_42679[(1)] = (10));

} else {
var statearr_42640_42680 = state_42600__$1;
(statearr_42640_42680[(1)] = (11));

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
});})(c__40690__auto___42652,mults,ensure_mult,p))
;
return ((function (switch__40506__auto__,c__40690__auto___42652,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_42644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42644[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_42644[(1)] = (1));

return statearr_42644;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_42600){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42600);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42645){if((e42645 instanceof Object)){
var ex__40510__auto__ = e42645;
var statearr_42646_42681 = state_42600;
(statearr_42646_42681[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42600);

return cljs.core.cst$kw$recur;
} else {
throw e42645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42682 = state_42600;
state_42600 = G__42682;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_42600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_42600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42652,mults,ensure_mult,p))
})();
var state__40692__auto__ = (function (){var statearr_42647 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42652);

return statearr_42647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42652,mults,ensure_mult,p))
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
var args42683 = [];
var len__8723__auto___42686 = arguments.length;
var i__8724__auto___42687 = (0);
while(true){
if((i__8724__auto___42687 < len__8723__auto___42686)){
args42683.push((arguments[i__8724__auto___42687]));

var G__42688 = (i__8724__auto___42687 + (1));
i__8724__auto___42687 = G__42688;
continue;
} else {
}
break;
}

var G__42685 = args42683.length;
switch (G__42685) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42683.length)].join('')));

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
var args42690 = [];
var len__8723__auto___42693 = arguments.length;
var i__8724__auto___42694 = (0);
while(true){
if((i__8724__auto___42694 < len__8723__auto___42693)){
args42690.push((arguments[i__8724__auto___42694]));

var G__42695 = (i__8724__auto___42694 + (1));
i__8724__auto___42694 = G__42695;
continue;
} else {
}
break;
}

var G__42692 = args42690.length;
switch (G__42692) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42690.length)].join('')));

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
var args42697 = [];
var len__8723__auto___42768 = arguments.length;
var i__8724__auto___42769 = (0);
while(true){
if((i__8724__auto___42769 < len__8723__auto___42768)){
args42697.push((arguments[i__8724__auto___42769]));

var G__42770 = (i__8724__auto___42769 + (1));
i__8724__auto___42769 = G__42770;
continue;
} else {
}
break;
}

var G__42699 = args42697.length;
switch (G__42699) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42697.length)].join('')));

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
var c__40690__auto___42772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42738){
var state_val_42739 = (state_42738[(1)]);
if((state_val_42739 === (7))){
var state_42738__$1 = state_42738;
var statearr_42740_42773 = state_42738__$1;
(statearr_42740_42773[(2)] = null);

(statearr_42740_42773[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (1))){
var state_42738__$1 = state_42738;
var statearr_42741_42774 = state_42738__$1;
(statearr_42741_42774[(2)] = null);

(statearr_42741_42774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (4))){
var inst_42702 = (state_42738[(7)]);
var inst_42704 = (inst_42702 < cnt);
var state_42738__$1 = state_42738;
if(cljs.core.truth_(inst_42704)){
var statearr_42742_42775 = state_42738__$1;
(statearr_42742_42775[(1)] = (6));

} else {
var statearr_42743_42776 = state_42738__$1;
(statearr_42743_42776[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (15))){
var inst_42734 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42744_42777 = state_42738__$1;
(statearr_42744_42777[(2)] = inst_42734);

(statearr_42744_42777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (13))){
var inst_42727 = cljs.core.async.close_BANG_(out);
var state_42738__$1 = state_42738;
var statearr_42745_42778 = state_42738__$1;
(statearr_42745_42778[(2)] = inst_42727);

(statearr_42745_42778[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (6))){
var state_42738__$1 = state_42738;
var statearr_42746_42779 = state_42738__$1;
(statearr_42746_42779[(2)] = null);

(statearr_42746_42779[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (3))){
var inst_42736 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42738__$1,inst_42736);
} else {
if((state_val_42739 === (12))){
var inst_42724 = (state_42738[(8)]);
var inst_42724__$1 = (state_42738[(2)]);
var inst_42725 = cljs.core.some(cljs.core.nil_QMARK_,inst_42724__$1);
var state_42738__$1 = (function (){var statearr_42747 = state_42738;
(statearr_42747[(8)] = inst_42724__$1);

return statearr_42747;
})();
if(cljs.core.truth_(inst_42725)){
var statearr_42748_42780 = state_42738__$1;
(statearr_42748_42780[(1)] = (13));

} else {
var statearr_42749_42781 = state_42738__$1;
(statearr_42749_42781[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (2))){
var inst_42701 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_42702 = (0);
var state_42738__$1 = (function (){var statearr_42750 = state_42738;
(statearr_42750[(7)] = inst_42702);

(statearr_42750[(9)] = inst_42701);

return statearr_42750;
})();
var statearr_42751_42782 = state_42738__$1;
(statearr_42751_42782[(2)] = null);

(statearr_42751_42782[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (11))){
var inst_42702 = (state_42738[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42738,(10),Object,null,(9));
var inst_42711 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42702) : chs__$1.call(null,inst_42702));
var inst_42712 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42702) : done.call(null,inst_42702));
var inst_42713 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42711,inst_42712);
var state_42738__$1 = state_42738;
var statearr_42752_42783 = state_42738__$1;
(statearr_42752_42783[(2)] = inst_42713);


cljs.core.async.impl.ioc_helpers.process_exception(state_42738__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (9))){
var inst_42702 = (state_42738[(7)]);
var inst_42715 = (state_42738[(2)]);
var inst_42716 = (inst_42702 + (1));
var inst_42702__$1 = inst_42716;
var state_42738__$1 = (function (){var statearr_42753 = state_42738;
(statearr_42753[(10)] = inst_42715);

(statearr_42753[(7)] = inst_42702__$1);

return statearr_42753;
})();
var statearr_42754_42784 = state_42738__$1;
(statearr_42754_42784[(2)] = null);

(statearr_42754_42784[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (5))){
var inst_42722 = (state_42738[(2)]);
var state_42738__$1 = (function (){var statearr_42755 = state_42738;
(statearr_42755[(11)] = inst_42722);

return statearr_42755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42738__$1,(12),dchan);
} else {
if((state_val_42739 === (14))){
var inst_42724 = (state_42738[(8)]);
var inst_42729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42724);
var state_42738__$1 = state_42738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42738__$1,(16),out,inst_42729);
} else {
if((state_val_42739 === (16))){
var inst_42731 = (state_42738[(2)]);
var state_42738__$1 = (function (){var statearr_42756 = state_42738;
(statearr_42756[(12)] = inst_42731);

return statearr_42756;
})();
var statearr_42757_42785 = state_42738__$1;
(statearr_42757_42785[(2)] = null);

(statearr_42757_42785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (10))){
var inst_42706 = (state_42738[(2)]);
var inst_42707 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42738__$1 = (function (){var statearr_42758 = state_42738;
(statearr_42758[(13)] = inst_42706);

return statearr_42758;
})();
var statearr_42759_42786 = state_42738__$1;
(statearr_42759_42786[(2)] = inst_42707);


cljs.core.async.impl.ioc_helpers.process_exception(state_42738__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_42739 === (8))){
var inst_42720 = (state_42738[(2)]);
var state_42738__$1 = state_42738;
var statearr_42760_42787 = state_42738__$1;
(statearr_42760_42787[(2)] = inst_42720);

(statearr_42760_42787[(1)] = (5));


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
});})(c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40506__auto__,c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_42764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42764[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_42764[(1)] = (1));

return statearr_42764;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_42738){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42738);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42765){if((e42765 instanceof Object)){
var ex__40510__auto__ = e42765;
var statearr_42766_42788 = state_42738;
(statearr_42766_42788[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42738);

return cljs.core.cst$kw$recur;
} else {
throw e42765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42789 = state_42738;
state_42738 = G__42789;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_42738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_42738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40692__auto__ = (function (){var statearr_42767 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42772);

return statearr_42767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42772,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42791 = [];
var len__8723__auto___42849 = arguments.length;
var i__8724__auto___42850 = (0);
while(true){
if((i__8724__auto___42850 < len__8723__auto___42849)){
args42791.push((arguments[i__8724__auto___42850]));

var G__42851 = (i__8724__auto___42850 + (1));
i__8724__auto___42850 = G__42851;
continue;
} else {
}
break;
}

var G__42793 = args42791.length;
switch (G__42793) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42791.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___42853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42853,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42853,out){
return (function (state_42825){
var state_val_42826 = (state_42825[(1)]);
if((state_val_42826 === (7))){
var inst_42805 = (state_42825[(7)]);
var inst_42804 = (state_42825[(8)]);
var inst_42804__$1 = (state_42825[(2)]);
var inst_42805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42804__$1,(0),null);
var inst_42806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42804__$1,(1),null);
var inst_42807 = (inst_42805__$1 == null);
var state_42825__$1 = (function (){var statearr_42827 = state_42825;
(statearr_42827[(7)] = inst_42805__$1);

(statearr_42827[(9)] = inst_42806);

(statearr_42827[(8)] = inst_42804__$1);

return statearr_42827;
})();
if(cljs.core.truth_(inst_42807)){
var statearr_42828_42854 = state_42825__$1;
(statearr_42828_42854[(1)] = (8));

} else {
var statearr_42829_42855 = state_42825__$1;
(statearr_42829_42855[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (1))){
var inst_42794 = cljs.core.vec(chs);
var inst_42795 = inst_42794;
var state_42825__$1 = (function (){var statearr_42830 = state_42825;
(statearr_42830[(10)] = inst_42795);

return statearr_42830;
})();
var statearr_42831_42856 = state_42825__$1;
(statearr_42831_42856[(2)] = null);

(statearr_42831_42856[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (4))){
var inst_42795 = (state_42825[(10)]);
var state_42825__$1 = state_42825;
return cljs.core.async.ioc_alts_BANG_(state_42825__$1,(7),inst_42795);
} else {
if((state_val_42826 === (6))){
var inst_42821 = (state_42825[(2)]);
var state_42825__$1 = state_42825;
var statearr_42832_42857 = state_42825__$1;
(statearr_42832_42857[(2)] = inst_42821);

(statearr_42832_42857[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (3))){
var inst_42823 = (state_42825[(2)]);
var state_42825__$1 = state_42825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42825__$1,inst_42823);
} else {
if((state_val_42826 === (2))){
var inst_42795 = (state_42825[(10)]);
var inst_42797 = cljs.core.count(inst_42795);
var inst_42798 = (inst_42797 > (0));
var state_42825__$1 = state_42825;
if(cljs.core.truth_(inst_42798)){
var statearr_42834_42858 = state_42825__$1;
(statearr_42834_42858[(1)] = (4));

} else {
var statearr_42835_42859 = state_42825__$1;
(statearr_42835_42859[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (11))){
var inst_42795 = (state_42825[(10)]);
var inst_42814 = (state_42825[(2)]);
var tmp42833 = inst_42795;
var inst_42795__$1 = tmp42833;
var state_42825__$1 = (function (){var statearr_42836 = state_42825;
(statearr_42836[(11)] = inst_42814);

(statearr_42836[(10)] = inst_42795__$1);

return statearr_42836;
})();
var statearr_42837_42860 = state_42825__$1;
(statearr_42837_42860[(2)] = null);

(statearr_42837_42860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (9))){
var inst_42805 = (state_42825[(7)]);
var state_42825__$1 = state_42825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42825__$1,(11),out,inst_42805);
} else {
if((state_val_42826 === (5))){
var inst_42819 = cljs.core.async.close_BANG_(out);
var state_42825__$1 = state_42825;
var statearr_42838_42861 = state_42825__$1;
(statearr_42838_42861[(2)] = inst_42819);

(statearr_42838_42861[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (10))){
var inst_42817 = (state_42825[(2)]);
var state_42825__$1 = state_42825;
var statearr_42839_42862 = state_42825__$1;
(statearr_42839_42862[(2)] = inst_42817);

(statearr_42839_42862[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42826 === (8))){
var inst_42805 = (state_42825[(7)]);
var inst_42806 = (state_42825[(9)]);
var inst_42804 = (state_42825[(8)]);
var inst_42795 = (state_42825[(10)]);
var inst_42809 = (function (){var cs = inst_42795;
var vec__42800 = inst_42804;
var v = inst_42805;
var c = inst_42806;
return ((function (cs,vec__42800,v,c,inst_42805,inst_42806,inst_42804,inst_42795,state_val_42826,c__40690__auto___42853,out){
return (function (p1__42790_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42790_SHARP_);
});
;})(cs,vec__42800,v,c,inst_42805,inst_42806,inst_42804,inst_42795,state_val_42826,c__40690__auto___42853,out))
})();
var inst_42810 = cljs.core.filterv(inst_42809,inst_42795);
var inst_42795__$1 = inst_42810;
var state_42825__$1 = (function (){var statearr_42840 = state_42825;
(statearr_42840[(10)] = inst_42795__$1);

return statearr_42840;
})();
var statearr_42841_42863 = state_42825__$1;
(statearr_42841_42863[(2)] = null);

(statearr_42841_42863[(1)] = (2));


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
});})(c__40690__auto___42853,out))
;
return ((function (switch__40506__auto__,c__40690__auto___42853,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_42845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42845[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_42845[(1)] = (1));

return statearr_42845;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_42825){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42825);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42846){if((e42846 instanceof Object)){
var ex__40510__auto__ = e42846;
var statearr_42847_42864 = state_42825;
(statearr_42847_42864[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42825);

return cljs.core.cst$kw$recur;
} else {
throw e42846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42865 = state_42825;
state_42825 = G__42865;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_42825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_42825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42853,out))
})();
var state__40692__auto__ = (function (){var statearr_42848 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42853);

return statearr_42848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42853,out))
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
var args42866 = [];
var len__8723__auto___42915 = arguments.length;
var i__8724__auto___42916 = (0);
while(true){
if((i__8724__auto___42916 < len__8723__auto___42915)){
args42866.push((arguments[i__8724__auto___42916]));

var G__42917 = (i__8724__auto___42916 + (1));
i__8724__auto___42916 = G__42917;
continue;
} else {
}
break;
}

var G__42868 = args42866.length;
switch (G__42868) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42866.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___42919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___42919,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___42919,out){
return (function (state_42892){
var state_val_42893 = (state_42892[(1)]);
if((state_val_42893 === (7))){
var inst_42874 = (state_42892[(7)]);
var inst_42874__$1 = (state_42892[(2)]);
var inst_42875 = (inst_42874__$1 == null);
var inst_42876 = cljs.core.not(inst_42875);
var state_42892__$1 = (function (){var statearr_42894 = state_42892;
(statearr_42894[(7)] = inst_42874__$1);

return statearr_42894;
})();
if(inst_42876){
var statearr_42895_42920 = state_42892__$1;
(statearr_42895_42920[(1)] = (8));

} else {
var statearr_42896_42921 = state_42892__$1;
(statearr_42896_42921[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (1))){
var inst_42869 = (0);
var state_42892__$1 = (function (){var statearr_42897 = state_42892;
(statearr_42897[(8)] = inst_42869);

return statearr_42897;
})();
var statearr_42898_42922 = state_42892__$1;
(statearr_42898_42922[(2)] = null);

(statearr_42898_42922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (4))){
var state_42892__$1 = state_42892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42892__$1,(7),ch);
} else {
if((state_val_42893 === (6))){
var inst_42887 = (state_42892[(2)]);
var state_42892__$1 = state_42892;
var statearr_42899_42923 = state_42892__$1;
(statearr_42899_42923[(2)] = inst_42887);

(statearr_42899_42923[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (3))){
var inst_42889 = (state_42892[(2)]);
var inst_42890 = cljs.core.async.close_BANG_(out);
var state_42892__$1 = (function (){var statearr_42900 = state_42892;
(statearr_42900[(9)] = inst_42889);

return statearr_42900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42892__$1,inst_42890);
} else {
if((state_val_42893 === (2))){
var inst_42869 = (state_42892[(8)]);
var inst_42871 = (inst_42869 < n);
var state_42892__$1 = state_42892;
if(cljs.core.truth_(inst_42871)){
var statearr_42901_42924 = state_42892__$1;
(statearr_42901_42924[(1)] = (4));

} else {
var statearr_42902_42925 = state_42892__$1;
(statearr_42902_42925[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (11))){
var inst_42869 = (state_42892[(8)]);
var inst_42879 = (state_42892[(2)]);
var inst_42880 = (inst_42869 + (1));
var inst_42869__$1 = inst_42880;
var state_42892__$1 = (function (){var statearr_42903 = state_42892;
(statearr_42903[(10)] = inst_42879);

(statearr_42903[(8)] = inst_42869__$1);

return statearr_42903;
})();
var statearr_42904_42926 = state_42892__$1;
(statearr_42904_42926[(2)] = null);

(statearr_42904_42926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (9))){
var state_42892__$1 = state_42892;
var statearr_42905_42927 = state_42892__$1;
(statearr_42905_42927[(2)] = null);

(statearr_42905_42927[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (5))){
var state_42892__$1 = state_42892;
var statearr_42906_42928 = state_42892__$1;
(statearr_42906_42928[(2)] = null);

(statearr_42906_42928[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (10))){
var inst_42884 = (state_42892[(2)]);
var state_42892__$1 = state_42892;
var statearr_42907_42929 = state_42892__$1;
(statearr_42907_42929[(2)] = inst_42884);

(statearr_42907_42929[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42893 === (8))){
var inst_42874 = (state_42892[(7)]);
var state_42892__$1 = state_42892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42892__$1,(11),out,inst_42874);
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
});})(c__40690__auto___42919,out))
;
return ((function (switch__40506__auto__,c__40690__auto___42919,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_42911 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42911[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_42911[(1)] = (1));

return statearr_42911;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_42892){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42892);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e42912){if((e42912 instanceof Object)){
var ex__40510__auto__ = e42912;
var statearr_42913_42930 = state_42892;
(statearr_42913_42930[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42892);

return cljs.core.cst$kw$recur;
} else {
throw e42912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__42931 = state_42892;
state_42892 = G__42931;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_42892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_42892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___42919,out))
})();
var state__40692__auto__ = (function (){var statearr_42914 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_42914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___42919);

return statearr_42914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___42919,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42941 = (function (f,ch,meta42942){
this.f = f;
this.ch = ch;
this.meta42942 = meta42942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42943,meta42942__$1){
var self__ = this;
var _42943__$1 = this;
return (new cljs.core.async.t_cljs$core$async42941(self__.f,self__.ch,meta42942__$1));
});


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42943){
var self__ = this;
var _42943__$1 = this;
return self__.meta42942;
});


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42944 = (function (f,ch,meta42942,_,fn1,meta42945){
this.f = f;
this.ch = ch;
this.meta42942 = meta42942;
this._ = _;
this.fn1 = fn1;
this.meta42945 = meta42945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42946,meta42945__$1){
var self__ = this;
var _42946__$1 = this;
return (new cljs.core.async.t_cljs$core$async42944(self__.f,self__.ch,self__.meta42942,self__._,self__.fn1,meta42945__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42946){
var self__ = this;
var _42946__$1 = this;
return self__.meta42945;
});})(___$1))
;


cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async42944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42932_SHARP_){
var G__42947 = (((p1__42932_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42932_SHARP_) : self__.f.call(null,p1__42932_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42947) : f1.call(null,G__42947));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42944.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta42942,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async42941], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta42945], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42944";

cljs.core.async.t_cljs$core$async42944.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42944");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42944 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42944(f__$1,ch__$1,meta42942__$1,___$2,fn1__$1,meta42945){
return (new cljs.core.async.t_cljs$core$async42944(f__$1,ch__$1,meta42942__$1,___$2,fn1__$1,meta42945));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42944(self__.f,self__.ch,self__.meta42942,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7490__auto__ = ret;
if(cljs.core.truth_(and__7490__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7490__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42948 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42948) : self__.f.call(null,G__42948));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta42942], null);
});

cljs.core.async.t_cljs$core$async42941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42941";

cljs.core.async.t_cljs$core$async42941.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42941");
});

cljs.core.async.__GT_t_cljs$core$async42941 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42941(f__$1,ch__$1,meta42942){
return (new cljs.core.async.t_cljs$core$async42941(f__$1,ch__$1,meta42942));
});

}

return (new cljs.core.async.t_cljs$core$async42941(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42952 = (function (f,ch,meta42953){
this.f = f;
this.ch = ch;
this.meta42953 = meta42953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42954,meta42953__$1){
var self__ = this;
var _42954__$1 = this;
return (new cljs.core.async.t_cljs$core$async42952(self__.f,self__.ch,meta42953__$1));
});


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42954){
var self__ = this;
var _42954__$1 = this;
return self__.meta42953;
});


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async42952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta42953], null);
});

cljs.core.async.t_cljs$core$async42952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42952";

cljs.core.async.t_cljs$core$async42952.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42952");
});

cljs.core.async.__GT_t_cljs$core$async42952 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42952(f__$1,ch__$1,meta42953){
return (new cljs.core.async.t_cljs$core$async42952(f__$1,ch__$1,meta42953));
});

}

return (new cljs.core.async.t_cljs$core$async42952(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42958 = (function (p,ch,meta42959){
this.p = p;
this.ch = ch;
this.meta42959 = meta42959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42960,meta42959__$1){
var self__ = this;
var _42960__$1 = this;
return (new cljs.core.async.t_cljs$core$async42958(self__.p,self__.ch,meta42959__$1));
});


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42960){
var self__ = this;
var _42960__$1 = this;
return self__.meta42959;
});


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async42958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta42959], null);
});

cljs.core.async.t_cljs$core$async42958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42958";

cljs.core.async.t_cljs$core$async42958.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.core.async/t_cljs$core$async42958");
});

cljs.core.async.__GT_t_cljs$core$async42958 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42958(p__$1,ch__$1,meta42959){
return (new cljs.core.async.t_cljs$core$async42958(p__$1,ch__$1,meta42959));
});

}

return (new cljs.core.async.t_cljs$core$async42958(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42961 = [];
var len__8723__auto___43005 = arguments.length;
var i__8724__auto___43006 = (0);
while(true){
if((i__8724__auto___43006 < len__8723__auto___43005)){
args42961.push((arguments[i__8724__auto___43006]));

var G__43007 = (i__8724__auto___43006 + (1));
i__8724__auto___43006 = G__43007;
continue;
} else {
}
break;
}

var G__42963 = args42961.length;
switch (G__42963) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42961.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___43009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___43009,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___43009,out){
return (function (state_42984){
var state_val_42985 = (state_42984[(1)]);
if((state_val_42985 === (7))){
var inst_42980 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
var statearr_42986_43010 = state_42984__$1;
(statearr_42986_43010[(2)] = inst_42980);

(statearr_42986_43010[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (1))){
var state_42984__$1 = state_42984;
var statearr_42987_43011 = state_42984__$1;
(statearr_42987_43011[(2)] = null);

(statearr_42987_43011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (4))){
var inst_42966 = (state_42984[(7)]);
var inst_42966__$1 = (state_42984[(2)]);
var inst_42967 = (inst_42966__$1 == null);
var state_42984__$1 = (function (){var statearr_42988 = state_42984;
(statearr_42988[(7)] = inst_42966__$1);

return statearr_42988;
})();
if(cljs.core.truth_(inst_42967)){
var statearr_42989_43012 = state_42984__$1;
(statearr_42989_43012[(1)] = (5));

} else {
var statearr_42990_43013 = state_42984__$1;
(statearr_42990_43013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (6))){
var inst_42966 = (state_42984[(7)]);
var inst_42971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42966) : p.call(null,inst_42966));
var state_42984__$1 = state_42984;
if(cljs.core.truth_(inst_42971)){
var statearr_42991_43014 = state_42984__$1;
(statearr_42991_43014[(1)] = (8));

} else {
var statearr_42992_43015 = state_42984__$1;
(statearr_42992_43015[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (3))){
var inst_42982 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42984__$1,inst_42982);
} else {
if((state_val_42985 === (2))){
var state_42984__$1 = state_42984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42984__$1,(4),ch);
} else {
if((state_val_42985 === (11))){
var inst_42974 = (state_42984[(2)]);
var state_42984__$1 = state_42984;
var statearr_42993_43016 = state_42984__$1;
(statearr_42993_43016[(2)] = inst_42974);

(statearr_42993_43016[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (9))){
var state_42984__$1 = state_42984;
var statearr_42994_43017 = state_42984__$1;
(statearr_42994_43017[(2)] = null);

(statearr_42994_43017[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (5))){
var inst_42969 = cljs.core.async.close_BANG_(out);
var state_42984__$1 = state_42984;
var statearr_42995_43018 = state_42984__$1;
(statearr_42995_43018[(2)] = inst_42969);

(statearr_42995_43018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (10))){
var inst_42977 = (state_42984[(2)]);
var state_42984__$1 = (function (){var statearr_42996 = state_42984;
(statearr_42996[(8)] = inst_42977);

return statearr_42996;
})();
var statearr_42997_43019 = state_42984__$1;
(statearr_42997_43019[(2)] = null);

(statearr_42997_43019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42985 === (8))){
var inst_42966 = (state_42984[(7)]);
var state_42984__$1 = state_42984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42984__$1,(11),out,inst_42966);
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
});})(c__40690__auto___43009,out))
;
return ((function (switch__40506__auto__,c__40690__auto___43009,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_43001 = [null,null,null,null,null,null,null,null,null];
(statearr_43001[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_43001[(1)] = (1));

return statearr_43001;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_42984){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_42984);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e43002){if((e43002 instanceof Object)){
var ex__40510__auto__ = e43002;
var statearr_43003_43020 = state_42984;
(statearr_43003_43020[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42984);

return cljs.core.cst$kw$recur;
} else {
throw e43002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__43021 = state_42984;
state_42984 = G__43021;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_42984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_42984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___43009,out))
})();
var state__40692__auto__ = (function (){var statearr_43004 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_43004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___43009);

return statearr_43004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___43009,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43022 = [];
var len__8723__auto___43025 = arguments.length;
var i__8724__auto___43026 = (0);
while(true){
if((i__8724__auto___43026 < len__8723__auto___43025)){
args43022.push((arguments[i__8724__auto___43026]));

var G__43027 = (i__8724__auto___43026 + (1));
i__8724__auto___43026 = G__43027;
continue;
} else {
}
break;
}

var G__43024 = args43022.length;
switch (G__43024) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43022.length)].join('')));

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
var c__40690__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto__){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto__){
return (function (state_43194){
var state_val_43195 = (state_43194[(1)]);
if((state_val_43195 === (7))){
var inst_43190 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43196_43237 = state_43194__$1;
(statearr_43196_43237[(2)] = inst_43190);

(statearr_43196_43237[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (20))){
var inst_43160 = (state_43194[(7)]);
var inst_43171 = (state_43194[(2)]);
var inst_43172 = cljs.core.next(inst_43160);
var inst_43146 = inst_43172;
var inst_43147 = null;
var inst_43148 = (0);
var inst_43149 = (0);
var state_43194__$1 = (function (){var statearr_43197 = state_43194;
(statearr_43197[(8)] = inst_43171);

(statearr_43197[(9)] = inst_43147);

(statearr_43197[(10)] = inst_43149);

(statearr_43197[(11)] = inst_43146);

(statearr_43197[(12)] = inst_43148);

return statearr_43197;
})();
var statearr_43198_43238 = state_43194__$1;
(statearr_43198_43238[(2)] = null);

(statearr_43198_43238[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (1))){
var state_43194__$1 = state_43194;
var statearr_43199_43239 = state_43194__$1;
(statearr_43199_43239[(2)] = null);

(statearr_43199_43239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (4))){
var inst_43135 = (state_43194[(13)]);
var inst_43135__$1 = (state_43194[(2)]);
var inst_43136 = (inst_43135__$1 == null);
var state_43194__$1 = (function (){var statearr_43200 = state_43194;
(statearr_43200[(13)] = inst_43135__$1);

return statearr_43200;
})();
if(cljs.core.truth_(inst_43136)){
var statearr_43201_43240 = state_43194__$1;
(statearr_43201_43240[(1)] = (5));

} else {
var statearr_43202_43241 = state_43194__$1;
(statearr_43202_43241[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (15))){
var state_43194__$1 = state_43194;
var statearr_43206_43242 = state_43194__$1;
(statearr_43206_43242[(2)] = null);

(statearr_43206_43242[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (21))){
var state_43194__$1 = state_43194;
var statearr_43207_43243 = state_43194__$1;
(statearr_43207_43243[(2)] = null);

(statearr_43207_43243[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (13))){
var inst_43147 = (state_43194[(9)]);
var inst_43149 = (state_43194[(10)]);
var inst_43146 = (state_43194[(11)]);
var inst_43148 = (state_43194[(12)]);
var inst_43156 = (state_43194[(2)]);
var inst_43157 = (inst_43149 + (1));
var tmp43203 = inst_43147;
var tmp43204 = inst_43146;
var tmp43205 = inst_43148;
var inst_43146__$1 = tmp43204;
var inst_43147__$1 = tmp43203;
var inst_43148__$1 = tmp43205;
var inst_43149__$1 = inst_43157;
var state_43194__$1 = (function (){var statearr_43208 = state_43194;
(statearr_43208[(9)] = inst_43147__$1);

(statearr_43208[(10)] = inst_43149__$1);

(statearr_43208[(14)] = inst_43156);

(statearr_43208[(11)] = inst_43146__$1);

(statearr_43208[(12)] = inst_43148__$1);

return statearr_43208;
})();
var statearr_43209_43244 = state_43194__$1;
(statearr_43209_43244[(2)] = null);

(statearr_43209_43244[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (22))){
var state_43194__$1 = state_43194;
var statearr_43210_43245 = state_43194__$1;
(statearr_43210_43245[(2)] = null);

(statearr_43210_43245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (6))){
var inst_43135 = (state_43194[(13)]);
var inst_43144 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43135) : f.call(null,inst_43135));
var inst_43145 = cljs.core.seq(inst_43144);
var inst_43146 = inst_43145;
var inst_43147 = null;
var inst_43148 = (0);
var inst_43149 = (0);
var state_43194__$1 = (function (){var statearr_43211 = state_43194;
(statearr_43211[(9)] = inst_43147);

(statearr_43211[(10)] = inst_43149);

(statearr_43211[(11)] = inst_43146);

(statearr_43211[(12)] = inst_43148);

return statearr_43211;
})();
var statearr_43212_43246 = state_43194__$1;
(statearr_43212_43246[(2)] = null);

(statearr_43212_43246[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (17))){
var inst_43160 = (state_43194[(7)]);
var inst_43164 = cljs.core.chunk_first(inst_43160);
var inst_43165 = cljs.core.chunk_rest(inst_43160);
var inst_43166 = cljs.core.count(inst_43164);
var inst_43146 = inst_43165;
var inst_43147 = inst_43164;
var inst_43148 = inst_43166;
var inst_43149 = (0);
var state_43194__$1 = (function (){var statearr_43213 = state_43194;
(statearr_43213[(9)] = inst_43147);

(statearr_43213[(10)] = inst_43149);

(statearr_43213[(11)] = inst_43146);

(statearr_43213[(12)] = inst_43148);

return statearr_43213;
})();
var statearr_43214_43247 = state_43194__$1;
(statearr_43214_43247[(2)] = null);

(statearr_43214_43247[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (3))){
var inst_43192 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43194__$1,inst_43192);
} else {
if((state_val_43195 === (12))){
var inst_43180 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43215_43248 = state_43194__$1;
(statearr_43215_43248[(2)] = inst_43180);

(statearr_43215_43248[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (2))){
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43194__$1,(4),in$);
} else {
if((state_val_43195 === (23))){
var inst_43188 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43216_43249 = state_43194__$1;
(statearr_43216_43249[(2)] = inst_43188);

(statearr_43216_43249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (19))){
var inst_43175 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43217_43250 = state_43194__$1;
(statearr_43217_43250[(2)] = inst_43175);

(statearr_43217_43250[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (11))){
var inst_43160 = (state_43194[(7)]);
var inst_43146 = (state_43194[(11)]);
var inst_43160__$1 = cljs.core.seq(inst_43146);
var state_43194__$1 = (function (){var statearr_43218 = state_43194;
(statearr_43218[(7)] = inst_43160__$1);

return statearr_43218;
})();
if(inst_43160__$1){
var statearr_43219_43251 = state_43194__$1;
(statearr_43219_43251[(1)] = (14));

} else {
var statearr_43220_43252 = state_43194__$1;
(statearr_43220_43252[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (9))){
var inst_43182 = (state_43194[(2)]);
var inst_43183 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43194__$1 = (function (){var statearr_43221 = state_43194;
(statearr_43221[(15)] = inst_43182);

return statearr_43221;
})();
if(cljs.core.truth_(inst_43183)){
var statearr_43222_43253 = state_43194__$1;
(statearr_43222_43253[(1)] = (21));

} else {
var statearr_43223_43254 = state_43194__$1;
(statearr_43223_43254[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (5))){
var inst_43138 = cljs.core.async.close_BANG_(out);
var state_43194__$1 = state_43194;
var statearr_43224_43255 = state_43194__$1;
(statearr_43224_43255[(2)] = inst_43138);

(statearr_43224_43255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (14))){
var inst_43160 = (state_43194[(7)]);
var inst_43162 = cljs.core.chunked_seq_QMARK_(inst_43160);
var state_43194__$1 = state_43194;
if(inst_43162){
var statearr_43225_43256 = state_43194__$1;
(statearr_43225_43256[(1)] = (17));

} else {
var statearr_43226_43257 = state_43194__$1;
(statearr_43226_43257[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (16))){
var inst_43178 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43227_43258 = state_43194__$1;
(statearr_43227_43258[(2)] = inst_43178);

(statearr_43227_43258[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43195 === (10))){
var inst_43147 = (state_43194[(9)]);
var inst_43149 = (state_43194[(10)]);
var inst_43154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43147,inst_43149);
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43194__$1,(13),out,inst_43154);
} else {
if((state_val_43195 === (18))){
var inst_43160 = (state_43194[(7)]);
var inst_43169 = cljs.core.first(inst_43160);
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43194__$1,(20),out,inst_43169);
} else {
if((state_val_43195 === (8))){
var inst_43149 = (state_43194[(10)]);
var inst_43148 = (state_43194[(12)]);
var inst_43151 = (inst_43149 < inst_43148);
var inst_43152 = inst_43151;
var state_43194__$1 = state_43194;
if(cljs.core.truth_(inst_43152)){
var statearr_43228_43259 = state_43194__$1;
(statearr_43228_43259[(1)] = (10));

} else {
var statearr_43229_43260 = state_43194__$1;
(statearr_43229_43260[(1)] = (11));

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
});})(c__40690__auto__))
;
return ((function (switch__40506__auto__,c__40690__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____0 = (function (){
var statearr_43233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43233[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__);

(statearr_43233[(1)] = (1));

return statearr_43233;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____1 = (function (state_43194){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_43194);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e43234){if((e43234 instanceof Object)){
var ex__40510__auto__ = e43234;
var statearr_43235_43261 = state_43194;
(statearr_43235_43261[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43194);

return cljs.core.cst$kw$recur;
} else {
throw e43234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__43262 = state_43194;
state_43194 = G__43262;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__ = function(state_43194){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____1.call(this,state_43194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40507__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto__))
})();
var state__40692__auto__ = (function (){var statearr_43236 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_43236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto__);

return statearr_43236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto__))
);

return c__40690__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43263 = [];
var len__8723__auto___43266 = arguments.length;
var i__8724__auto___43267 = (0);
while(true){
if((i__8724__auto___43267 < len__8723__auto___43266)){
args43263.push((arguments[i__8724__auto___43267]));

var G__43268 = (i__8724__auto___43267 + (1));
i__8724__auto___43267 = G__43268;
continue;
} else {
}
break;
}

var G__43265 = args43263.length;
switch (G__43265) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43263.length)].join('')));

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
var args43270 = [];
var len__8723__auto___43273 = arguments.length;
var i__8724__auto___43274 = (0);
while(true){
if((i__8724__auto___43274 < len__8723__auto___43273)){
args43270.push((arguments[i__8724__auto___43274]));

var G__43275 = (i__8724__auto___43274 + (1));
i__8724__auto___43274 = G__43275;
continue;
} else {
}
break;
}

var G__43272 = args43270.length;
switch (G__43272) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43270.length)].join('')));

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
var args43277 = [];
var len__8723__auto___43328 = arguments.length;
var i__8724__auto___43329 = (0);
while(true){
if((i__8724__auto___43329 < len__8723__auto___43328)){
args43277.push((arguments[i__8724__auto___43329]));

var G__43330 = (i__8724__auto___43329 + (1));
i__8724__auto___43329 = G__43330;
continue;
} else {
}
break;
}

var G__43279 = args43277.length;
switch (G__43279) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43277.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___43332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___43332,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___43332,out){
return (function (state_43303){
var state_val_43304 = (state_43303[(1)]);
if((state_val_43304 === (7))){
var inst_43298 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43305_43333 = state_43303__$1;
(statearr_43305_43333[(2)] = inst_43298);

(statearr_43305_43333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (1))){
var inst_43280 = null;
var state_43303__$1 = (function (){var statearr_43306 = state_43303;
(statearr_43306[(7)] = inst_43280);

return statearr_43306;
})();
var statearr_43307_43334 = state_43303__$1;
(statearr_43307_43334[(2)] = null);

(statearr_43307_43334[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (4))){
var inst_43283 = (state_43303[(8)]);
var inst_43283__$1 = (state_43303[(2)]);
var inst_43284 = (inst_43283__$1 == null);
var inst_43285 = cljs.core.not(inst_43284);
var state_43303__$1 = (function (){var statearr_43308 = state_43303;
(statearr_43308[(8)] = inst_43283__$1);

return statearr_43308;
})();
if(inst_43285){
var statearr_43309_43335 = state_43303__$1;
(statearr_43309_43335[(1)] = (5));

} else {
var statearr_43310_43336 = state_43303__$1;
(statearr_43310_43336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (6))){
var state_43303__$1 = state_43303;
var statearr_43311_43337 = state_43303__$1;
(statearr_43311_43337[(2)] = null);

(statearr_43311_43337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (3))){
var inst_43300 = (state_43303[(2)]);
var inst_43301 = cljs.core.async.close_BANG_(out);
var state_43303__$1 = (function (){var statearr_43312 = state_43303;
(statearr_43312[(9)] = inst_43300);

return statearr_43312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43303__$1,inst_43301);
} else {
if((state_val_43304 === (2))){
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43303__$1,(4),ch);
} else {
if((state_val_43304 === (11))){
var inst_43283 = (state_43303[(8)]);
var inst_43292 = (state_43303[(2)]);
var inst_43280 = inst_43283;
var state_43303__$1 = (function (){var statearr_43313 = state_43303;
(statearr_43313[(10)] = inst_43292);

(statearr_43313[(7)] = inst_43280);

return statearr_43313;
})();
var statearr_43314_43338 = state_43303__$1;
(statearr_43314_43338[(2)] = null);

(statearr_43314_43338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (9))){
var inst_43283 = (state_43303[(8)]);
var state_43303__$1 = state_43303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43303__$1,(11),out,inst_43283);
} else {
if((state_val_43304 === (5))){
var inst_43283 = (state_43303[(8)]);
var inst_43280 = (state_43303[(7)]);
var inst_43287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43283,inst_43280);
var state_43303__$1 = state_43303;
if(inst_43287){
var statearr_43316_43339 = state_43303__$1;
(statearr_43316_43339[(1)] = (8));

} else {
var statearr_43317_43340 = state_43303__$1;
(statearr_43317_43340[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (10))){
var inst_43295 = (state_43303[(2)]);
var state_43303__$1 = state_43303;
var statearr_43318_43341 = state_43303__$1;
(statearr_43318_43341[(2)] = inst_43295);

(statearr_43318_43341[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43304 === (8))){
var inst_43280 = (state_43303[(7)]);
var tmp43315 = inst_43280;
var inst_43280__$1 = tmp43315;
var state_43303__$1 = (function (){var statearr_43319 = state_43303;
(statearr_43319[(7)] = inst_43280__$1);

return statearr_43319;
})();
var statearr_43320_43342 = state_43303__$1;
(statearr_43320_43342[(2)] = null);

(statearr_43320_43342[(1)] = (2));


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
});})(c__40690__auto___43332,out))
;
return ((function (switch__40506__auto__,c__40690__auto___43332,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_43324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43324[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_43324[(1)] = (1));

return statearr_43324;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_43303){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_43303);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e43325){if((e43325 instanceof Object)){
var ex__40510__auto__ = e43325;
var statearr_43326_43343 = state_43303;
(statearr_43326_43343[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43303);

return cljs.core.cst$kw$recur;
} else {
throw e43325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__43344 = state_43303;
state_43303 = G__43344;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_43303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_43303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___43332,out))
})();
var state__40692__auto__ = (function (){var statearr_43327 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_43327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___43332);

return statearr_43327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___43332,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43345 = [];
var len__8723__auto___43415 = arguments.length;
var i__8724__auto___43416 = (0);
while(true){
if((i__8724__auto___43416 < len__8723__auto___43415)){
args43345.push((arguments[i__8724__auto___43416]));

var G__43417 = (i__8724__auto___43416 + (1));
i__8724__auto___43416 = G__43417;
continue;
} else {
}
break;
}

var G__43347 = args43345.length;
switch (G__43347) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43345.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___43419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___43419,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___43419,out){
return (function (state_43385){
var state_val_43386 = (state_43385[(1)]);
if((state_val_43386 === (7))){
var inst_43381 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43387_43420 = state_43385__$1;
(statearr_43387_43420[(2)] = inst_43381);

(statearr_43387_43420[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (1))){
var inst_43348 = (new Array(n));
var inst_43349 = inst_43348;
var inst_43350 = (0);
var state_43385__$1 = (function (){var statearr_43388 = state_43385;
(statearr_43388[(7)] = inst_43350);

(statearr_43388[(8)] = inst_43349);

return statearr_43388;
})();
var statearr_43389_43421 = state_43385__$1;
(statearr_43389_43421[(2)] = null);

(statearr_43389_43421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (4))){
var inst_43353 = (state_43385[(9)]);
var inst_43353__$1 = (state_43385[(2)]);
var inst_43354 = (inst_43353__$1 == null);
var inst_43355 = cljs.core.not(inst_43354);
var state_43385__$1 = (function (){var statearr_43390 = state_43385;
(statearr_43390[(9)] = inst_43353__$1);

return statearr_43390;
})();
if(inst_43355){
var statearr_43391_43422 = state_43385__$1;
(statearr_43391_43422[(1)] = (5));

} else {
var statearr_43392_43423 = state_43385__$1;
(statearr_43392_43423[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (15))){
var inst_43375 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43393_43424 = state_43385__$1;
(statearr_43393_43424[(2)] = inst_43375);

(statearr_43393_43424[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (13))){
var state_43385__$1 = state_43385;
var statearr_43394_43425 = state_43385__$1;
(statearr_43394_43425[(2)] = null);

(statearr_43394_43425[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (6))){
var inst_43350 = (state_43385[(7)]);
var inst_43371 = (inst_43350 > (0));
var state_43385__$1 = state_43385;
if(cljs.core.truth_(inst_43371)){
var statearr_43395_43426 = state_43385__$1;
(statearr_43395_43426[(1)] = (12));

} else {
var statearr_43396_43427 = state_43385__$1;
(statearr_43396_43427[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (3))){
var inst_43383 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43385__$1,inst_43383);
} else {
if((state_val_43386 === (12))){
var inst_43349 = (state_43385[(8)]);
var inst_43373 = cljs.core.vec(inst_43349);
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43385__$1,(15),out,inst_43373);
} else {
if((state_val_43386 === (2))){
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43385__$1,(4),ch);
} else {
if((state_val_43386 === (11))){
var inst_43365 = (state_43385[(2)]);
var inst_43366 = (new Array(n));
var inst_43349 = inst_43366;
var inst_43350 = (0);
var state_43385__$1 = (function (){var statearr_43397 = state_43385;
(statearr_43397[(10)] = inst_43365);

(statearr_43397[(7)] = inst_43350);

(statearr_43397[(8)] = inst_43349);

return statearr_43397;
})();
var statearr_43398_43428 = state_43385__$1;
(statearr_43398_43428[(2)] = null);

(statearr_43398_43428[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (9))){
var inst_43349 = (state_43385[(8)]);
var inst_43363 = cljs.core.vec(inst_43349);
var state_43385__$1 = state_43385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43385__$1,(11),out,inst_43363);
} else {
if((state_val_43386 === (5))){
var inst_43358 = (state_43385[(11)]);
var inst_43350 = (state_43385[(7)]);
var inst_43349 = (state_43385[(8)]);
var inst_43353 = (state_43385[(9)]);
var inst_43357 = (inst_43349[inst_43350] = inst_43353);
var inst_43358__$1 = (inst_43350 + (1));
var inst_43359 = (inst_43358__$1 < n);
var state_43385__$1 = (function (){var statearr_43399 = state_43385;
(statearr_43399[(11)] = inst_43358__$1);

(statearr_43399[(12)] = inst_43357);

return statearr_43399;
})();
if(cljs.core.truth_(inst_43359)){
var statearr_43400_43429 = state_43385__$1;
(statearr_43400_43429[(1)] = (8));

} else {
var statearr_43401_43430 = state_43385__$1;
(statearr_43401_43430[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (14))){
var inst_43378 = (state_43385[(2)]);
var inst_43379 = cljs.core.async.close_BANG_(out);
var state_43385__$1 = (function (){var statearr_43403 = state_43385;
(statearr_43403[(13)] = inst_43378);

return statearr_43403;
})();
var statearr_43404_43431 = state_43385__$1;
(statearr_43404_43431[(2)] = inst_43379);

(statearr_43404_43431[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (10))){
var inst_43369 = (state_43385[(2)]);
var state_43385__$1 = state_43385;
var statearr_43405_43432 = state_43385__$1;
(statearr_43405_43432[(2)] = inst_43369);

(statearr_43405_43432[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43386 === (8))){
var inst_43358 = (state_43385[(11)]);
var inst_43349 = (state_43385[(8)]);
var tmp43402 = inst_43349;
var inst_43349__$1 = tmp43402;
var inst_43350 = inst_43358;
var state_43385__$1 = (function (){var statearr_43406 = state_43385;
(statearr_43406[(7)] = inst_43350);

(statearr_43406[(8)] = inst_43349__$1);

return statearr_43406;
})();
var statearr_43407_43433 = state_43385__$1;
(statearr_43407_43433[(2)] = null);

(statearr_43407_43433[(1)] = (2));


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
});})(c__40690__auto___43419,out))
;
return ((function (switch__40506__auto__,c__40690__auto___43419,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_43411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43411[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_43411[(1)] = (1));

return statearr_43411;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_43385){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_43385);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e43412){if((e43412 instanceof Object)){
var ex__40510__auto__ = e43412;
var statearr_43413_43434 = state_43385;
(statearr_43413_43434[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43385);

return cljs.core.cst$kw$recur;
} else {
throw e43412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__43435 = state_43385;
state_43385 = G__43435;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_43385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_43385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___43419,out))
})();
var state__40692__auto__ = (function (){var statearr_43414 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_43414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___43419);

return statearr_43414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___43419,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43436 = [];
var len__8723__auto___43510 = arguments.length;
var i__8724__auto___43511 = (0);
while(true){
if((i__8724__auto___43511 < len__8723__auto___43510)){
args43436.push((arguments[i__8724__auto___43511]));

var G__43512 = (i__8724__auto___43511 + (1));
i__8724__auto___43511 = G__43512;
continue;
} else {
}
break;
}

var G__43438 = args43436.length;
switch (G__43438) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43436.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40690__auto___43514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40690__auto___43514,out){
return (function (){
var f__40691__auto__ = (function (){var switch__40506__auto__ = ((function (c__40690__auto___43514,out){
return (function (state_43480){
var state_val_43481 = (state_43480[(1)]);
if((state_val_43481 === (7))){
var inst_43476 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43482_43515 = state_43480__$1;
(statearr_43482_43515[(2)] = inst_43476);

(statearr_43482_43515[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (1))){
var inst_43439 = [];
var inst_43440 = inst_43439;
var inst_43441 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_43480__$1 = (function (){var statearr_43483 = state_43480;
(statearr_43483[(7)] = inst_43440);

(statearr_43483[(8)] = inst_43441);

return statearr_43483;
})();
var statearr_43484_43516 = state_43480__$1;
(statearr_43484_43516[(2)] = null);

(statearr_43484_43516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (4))){
var inst_43444 = (state_43480[(9)]);
var inst_43444__$1 = (state_43480[(2)]);
var inst_43445 = (inst_43444__$1 == null);
var inst_43446 = cljs.core.not(inst_43445);
var state_43480__$1 = (function (){var statearr_43485 = state_43480;
(statearr_43485[(9)] = inst_43444__$1);

return statearr_43485;
})();
if(inst_43446){
var statearr_43486_43517 = state_43480__$1;
(statearr_43486_43517[(1)] = (5));

} else {
var statearr_43487_43518 = state_43480__$1;
(statearr_43487_43518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (15))){
var inst_43470 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43488_43519 = state_43480__$1;
(statearr_43488_43519[(2)] = inst_43470);

(statearr_43488_43519[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (13))){
var state_43480__$1 = state_43480;
var statearr_43489_43520 = state_43480__$1;
(statearr_43489_43520[(2)] = null);

(statearr_43489_43520[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (6))){
var inst_43440 = (state_43480[(7)]);
var inst_43465 = inst_43440.length;
var inst_43466 = (inst_43465 > (0));
var state_43480__$1 = state_43480;
if(cljs.core.truth_(inst_43466)){
var statearr_43490_43521 = state_43480__$1;
(statearr_43490_43521[(1)] = (12));

} else {
var statearr_43491_43522 = state_43480__$1;
(statearr_43491_43522[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (3))){
var inst_43478 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43480__$1,inst_43478);
} else {
if((state_val_43481 === (12))){
var inst_43440 = (state_43480[(7)]);
var inst_43468 = cljs.core.vec(inst_43440);
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43480__$1,(15),out,inst_43468);
} else {
if((state_val_43481 === (2))){
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43480__$1,(4),ch);
} else {
if((state_val_43481 === (11))){
var inst_43448 = (state_43480[(10)]);
var inst_43444 = (state_43480[(9)]);
var inst_43458 = (state_43480[(2)]);
var inst_43459 = [];
var inst_43460 = inst_43459.push(inst_43444);
var inst_43440 = inst_43459;
var inst_43441 = inst_43448;
var state_43480__$1 = (function (){var statearr_43492 = state_43480;
(statearr_43492[(11)] = inst_43458);

(statearr_43492[(7)] = inst_43440);

(statearr_43492[(12)] = inst_43460);

(statearr_43492[(8)] = inst_43441);

return statearr_43492;
})();
var statearr_43493_43523 = state_43480__$1;
(statearr_43493_43523[(2)] = null);

(statearr_43493_43523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (9))){
var inst_43440 = (state_43480[(7)]);
var inst_43456 = cljs.core.vec(inst_43440);
var state_43480__$1 = state_43480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43480__$1,(11),out,inst_43456);
} else {
if((state_val_43481 === (5))){
var inst_43448 = (state_43480[(10)]);
var inst_43444 = (state_43480[(9)]);
var inst_43441 = (state_43480[(8)]);
var inst_43448__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43444) : f.call(null,inst_43444));
var inst_43449 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43448__$1,inst_43441);
var inst_43450 = cljs.core.keyword_identical_QMARK_(inst_43441,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_43451 = (inst_43449) || (inst_43450);
var state_43480__$1 = (function (){var statearr_43494 = state_43480;
(statearr_43494[(10)] = inst_43448__$1);

return statearr_43494;
})();
if(cljs.core.truth_(inst_43451)){
var statearr_43495_43524 = state_43480__$1;
(statearr_43495_43524[(1)] = (8));

} else {
var statearr_43496_43525 = state_43480__$1;
(statearr_43496_43525[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (14))){
var inst_43473 = (state_43480[(2)]);
var inst_43474 = cljs.core.async.close_BANG_(out);
var state_43480__$1 = (function (){var statearr_43498 = state_43480;
(statearr_43498[(13)] = inst_43473);

return statearr_43498;
})();
var statearr_43499_43526 = state_43480__$1;
(statearr_43499_43526[(2)] = inst_43474);

(statearr_43499_43526[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (10))){
var inst_43463 = (state_43480[(2)]);
var state_43480__$1 = state_43480;
var statearr_43500_43527 = state_43480__$1;
(statearr_43500_43527[(2)] = inst_43463);

(statearr_43500_43527[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43481 === (8))){
var inst_43448 = (state_43480[(10)]);
var inst_43440 = (state_43480[(7)]);
var inst_43444 = (state_43480[(9)]);
var inst_43453 = inst_43440.push(inst_43444);
var tmp43497 = inst_43440;
var inst_43440__$1 = tmp43497;
var inst_43441 = inst_43448;
var state_43480__$1 = (function (){var statearr_43501 = state_43480;
(statearr_43501[(7)] = inst_43440__$1);

(statearr_43501[(14)] = inst_43453);

(statearr_43501[(8)] = inst_43441);

return statearr_43501;
})();
var statearr_43502_43528 = state_43480__$1;
(statearr_43502_43528[(2)] = null);

(statearr_43502_43528[(1)] = (2));


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
});})(c__40690__auto___43514,out))
;
return ((function (switch__40506__auto__,c__40690__auto___43514,out){
return (function() {
var cljs$core$async$state_machine__40507__auto__ = null;
var cljs$core$async$state_machine__40507__auto____0 = (function (){
var statearr_43506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43506[(0)] = cljs$core$async$state_machine__40507__auto__);

(statearr_43506[(1)] = (1));

return statearr_43506;
});
var cljs$core$async$state_machine__40507__auto____1 = (function (state_43480){
while(true){
var ret_value__40508__auto__ = (function (){try{while(true){
var result__40509__auto__ = switch__40506__auto__(state_43480);
if(cljs.core.keyword_identical_QMARK_(result__40509__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__40509__auto__;
}
break;
}
}catch (e43507){if((e43507 instanceof Object)){
var ex__40510__auto__ = e43507;
var statearr_43508_43529 = state_43480;
(statearr_43508_43529[(5)] = ex__40510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43480);

return cljs.core.cst$kw$recur;
} else {
throw e43507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40508__auto__,cljs.core.cst$kw$recur)){
var G__43530 = state_43480;
state_43480 = G__43530;
continue;
} else {
return ret_value__40508__auto__;
}
break;
}
});
cljs$core$async$state_machine__40507__auto__ = function(state_43480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40507__auto____1.call(this,state_43480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40507__auto____0;
cljs$core$async$state_machine__40507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40507__auto____1;
return cljs$core$async$state_machine__40507__auto__;
})()
;})(switch__40506__auto__,c__40690__auto___43514,out))
})();
var state__40692__auto__ = (function (){var statearr_43509 = (f__40691__auto__.cljs$core$IFn$_invoke$arity$0 ? f__40691__auto__.cljs$core$IFn$_invoke$arity$0() : f__40691__auto__.call(null));
(statearr_43509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40690__auto___43514);

return statearr_43509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40692__auto__);
});})(c__40690__auto___43514,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


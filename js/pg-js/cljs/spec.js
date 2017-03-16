// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8221__auto__.call(null,spec,x));
} else {
var m__8221__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8221__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8221__auto__.call(null,spec,y));
} else {
var m__8221__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8221__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8221__auto__.call(null,spec,path,via,in$,x));
} else {
var m__8221__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8221__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8221__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__8221__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8221__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8221__auto__.call(null,spec,gfn));
} else {
var m__8221__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8221__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__8220__auto__ = (((spec == null))?null:spec);
var m__8221__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__8221__auto__.call(null,spec));
} else {
var m__8221__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__8221__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__40921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40921) : cljs.core.atom.call(null,G__40921));
})();
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__40922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__40922;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__7502__auto__ = cljs.spec.reg_resolve(k);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__7490__auto__ = cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__7490__auto__)){
return x;
} else {
return and__7490__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__7502__auto__ = (function (){var and__7490__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__7490__auto__){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
var or__7502__auto____$2 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7502__auto____$2)){
return or__7502__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_(s))){
return cljs.spec.with_name((cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.regex_spec_impl.call(null,s,null)),cljs.spec.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__7502__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args40929 = [];
var len__8723__auto___40932 = arguments.length;
var i__8724__auto___40933 = (0);
while(true){
if((i__8724__auto___40933 < len__8723__auto___40932)){
args40929.push((arguments[i__8724__auto___40933]));

var G__40934 = (i__8724__auto___40933 + (1));
i__8724__auto___40933 = G__40934;
continue;
} else {
}
break;
}

var G__40931 = args40929.length;
switch (G__40931) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40929.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__8220__auto__ = (((_ == null))?null:_);
var m__8221__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8221__auto__.call(null,_));
} else {
var m__8221__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8221__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8220__auto__ = (((_ == null))?null:_);
var m__8221__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8220__auto__)]);
if(!((m__8221__auto__ == null))){
return (m__8221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__8221__auto__.call(null,_,form));
} else {
var m__8221__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8221__auto____$1 == null))){
return (m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8221__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__8221__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;



cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(k__$1));
});


cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(k__$1));
});


cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(s__$1));
});


cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__40940 = null;
var G__40940__1 = (function (o){
var G__40936 = cljs.core.cst$kw$cljs$spec_SLASH_unknown;
var G__40937 = o;
var G__40938 = null;
var G__40939 = null;
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(G__40936,G__40937,G__40938,G__40939) : cljs.spec.spec_impl.call(null,G__40936,G__40937,G__40938,G__40939));
});
var G__40940__2 = (function (o,form){
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.spec_impl.call(null,form,o,null,null));
});
G__40940 = function(o,form){
switch(arguments.length){
case 1:
return G__40940__1.call(this,o);
case 2:
return G__40940__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40940.cljs$core$IFn$_invoke$arity$1 = G__40940__1;
G__40940.cljs$core$IFn$_invoke$arity$2 = G__40940__2;
return G__40940;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args40941 = [];
var len__8723__auto___40944 = arguments.length;
var i__8724__auto___40945 = (0);
while(true){
if((i__8724__auto___40945 < len__8723__auto___40944)){
args40941.push((arguments[i__8724__auto___40945]));

var G__40946 = (i__8724__auto___40945 + (1));
i__8724__auto___40945 = G__40946;
continue;
} else {
}
break;
}

var G__40943 = args40941.length;
switch (G__40943) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40941.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__7502__auto__ = cljs.spec.spec_QMARK_(s);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__7502__auto__ = cljs.spec.spec_QMARK_(s);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__7490__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__7490__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__7490__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = (form instanceof cljs.core.Symbol);
if(and__7490__auto__){
return cljs.core.namespace(form);
} else {
return and__7490__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev(cljs.spec.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn,gen_fn);
} else {
return cljs.spec.with_gen_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6753__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__6753__auto__)){
var probs = temp__6753__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6751__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40988_41028 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40989_41029 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40988_41028,_STAR_print_fn_STAR_40989_41029,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_40988_41028,_STAR_print_fn_STAR_40989_41029,sb__8594__auto__))
;

try{var seq__40990_41030 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__40991_41031 = null;
var count__40992_41032 = (0);
var i__40993_41033 = (0);
while(true){
if((i__40993_41033 < count__40992_41032)){
var map__40994_41034 = chunk__40991_41031.cljs$core$IIndexed$_nth$arity$2(null,i__40993_41033);
var map__40994_41035__$1 = ((((!((map__40994_41034 == null)))?((((map__40994_41034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40994_41034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40994_41034):map__40994_41034);
var prob_41036 = map__40994_41035__$1;
var path_41037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$path);
var pred_41038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$pred);
var val_41039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$val);
var reason_41040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$reason);
var via_41041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$via);
var in_41042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40994_41035__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_41042)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_41042], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_41039], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_41041)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_41041)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_41037)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_41037], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_41038)], 0));

if(cljs.core.truth_(reason_41040)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_41040], 0));
} else {
}

var seq__40996_41043 = cljs.core.seq(prob_41036);
var chunk__40997_41044 = null;
var count__40998_41045 = (0);
var i__40999_41046 = (0);
while(true){
if((i__40999_41046 < count__40998_41045)){
var vec__41000_41047 = chunk__40997_41044.cljs$core$IIndexed$_nth$arity$2(null,i__40999_41046);
var k_41048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41000_41047,(0),null);
var v_41049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41000_41047,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_41048))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41048], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41049], 0));
}

var G__41050 = seq__40996_41043;
var G__41051 = chunk__40997_41044;
var G__41052 = count__40998_41045;
var G__41053 = (i__40999_41046 + (1));
seq__40996_41043 = G__41050;
chunk__40997_41044 = G__41051;
count__40998_41045 = G__41052;
i__40999_41046 = G__41053;
continue;
} else {
var temp__6753__auto___41054 = cljs.core.seq(seq__40996_41043);
if(temp__6753__auto___41054){
var seq__40996_41055__$1 = temp__6753__auto___41054;
if(cljs.core.chunked_seq_QMARK_(seq__40996_41055__$1)){
var c__8413__auto___41056 = cljs.core.chunk_first(seq__40996_41055__$1);
var G__41057 = cljs.core.chunk_rest(seq__40996_41055__$1);
var G__41058 = c__8413__auto___41056;
var G__41059 = cljs.core.count(c__8413__auto___41056);
var G__41060 = (0);
seq__40996_41043 = G__41057;
chunk__40997_41044 = G__41058;
count__40998_41045 = G__41059;
i__40999_41046 = G__41060;
continue;
} else {
var vec__41003_41061 = cljs.core.first(seq__40996_41055__$1);
var k_41062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003_41061,(0),null);
var v_41063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41003_41061,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_41062))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41062], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41063], 0));
}

var G__41064 = cljs.core.next(seq__40996_41055__$1);
var G__41065 = null;
var G__41066 = (0);
var G__41067 = (0);
seq__40996_41043 = G__41064;
chunk__40997_41044 = G__41065;
count__40998_41045 = G__41066;
i__40999_41046 = G__41067;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__41068 = seq__40990_41030;
var G__41069 = chunk__40991_41031;
var G__41070 = count__40992_41032;
var G__41071 = (i__40993_41033 + (1));
seq__40990_41030 = G__41068;
chunk__40991_41031 = G__41069;
count__40992_41032 = G__41070;
i__40993_41033 = G__41071;
continue;
} else {
var temp__6753__auto___41072 = cljs.core.seq(seq__40990_41030);
if(temp__6753__auto___41072){
var seq__40990_41073__$1 = temp__6753__auto___41072;
if(cljs.core.chunked_seq_QMARK_(seq__40990_41073__$1)){
var c__8413__auto___41074 = cljs.core.chunk_first(seq__40990_41073__$1);
var G__41075 = cljs.core.chunk_rest(seq__40990_41073__$1);
var G__41076 = c__8413__auto___41074;
var G__41077 = cljs.core.count(c__8413__auto___41074);
var G__41078 = (0);
seq__40990_41030 = G__41075;
chunk__40991_41031 = G__41076;
count__40992_41032 = G__41077;
i__40993_41033 = G__41078;
continue;
} else {
var map__41006_41079 = cljs.core.first(seq__40990_41073__$1);
var map__41006_41080__$1 = ((((!((map__41006_41079 == null)))?((((map__41006_41079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41006_41079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41006_41079):map__41006_41079);
var prob_41081 = map__41006_41080__$1;
var path_41082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$path);
var pred_41083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$pred);
var val_41084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$val);
var reason_41085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$reason);
var via_41086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$via);
var in_41087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006_41080__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_41087)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_41087], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_41084], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_41086)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_41086)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_41082)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_41082], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_41083)], 0));

if(cljs.core.truth_(reason_41085)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_41085], 0));
} else {
}

var seq__41008_41088 = cljs.core.seq(prob_41081);
var chunk__41009_41089 = null;
var count__41010_41090 = (0);
var i__41011_41091 = (0);
while(true){
if((i__41011_41091 < count__41010_41090)){
var vec__41012_41092 = chunk__41009_41089.cljs$core$IIndexed$_nth$arity$2(null,i__41011_41091);
var k_41093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41012_41092,(0),null);
var v_41094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41012_41092,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_41093))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41093], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41094], 0));
}

var G__41095 = seq__41008_41088;
var G__41096 = chunk__41009_41089;
var G__41097 = count__41010_41090;
var G__41098 = (i__41011_41091 + (1));
seq__41008_41088 = G__41095;
chunk__41009_41089 = G__41096;
count__41010_41090 = G__41097;
i__41011_41091 = G__41098;
continue;
} else {
var temp__6753__auto___41099__$1 = cljs.core.seq(seq__41008_41088);
if(temp__6753__auto___41099__$1){
var seq__41008_41100__$1 = temp__6753__auto___41099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41008_41100__$1)){
var c__8413__auto___41101 = cljs.core.chunk_first(seq__41008_41100__$1);
var G__41102 = cljs.core.chunk_rest(seq__41008_41100__$1);
var G__41103 = c__8413__auto___41101;
var G__41104 = cljs.core.count(c__8413__auto___41101);
var G__41105 = (0);
seq__41008_41088 = G__41102;
chunk__41009_41089 = G__41103;
count__41010_41090 = G__41104;
i__41011_41091 = G__41105;
continue;
} else {
var vec__41015_41106 = cljs.core.first(seq__41008_41100__$1);
var k_41107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41015_41106,(0),null);
var v_41108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41015_41106,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_41107))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41107], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41108], 0));
}

var G__41109 = cljs.core.next(seq__41008_41100__$1);
var G__41110 = null;
var G__41111 = (0);
var G__41112 = (0);
seq__41008_41088 = G__41109;
chunk__41009_41089 = G__41110;
count__41010_41090 = G__41111;
i__41011_41091 = G__41112;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__41113 = cljs.core.next(seq__40990_41073__$1);
var G__41114 = null;
var G__41115 = (0);
var G__41116 = (0);
seq__40990_41030 = G__41113;
chunk__40991_41031 = G__41114;
count__40992_41032 = G__41115;
i__40993_41033 = G__41116;
continue;
}
} else {
}
}
break;
}

var seq__41018_41117 = cljs.core.seq(ed);
var chunk__41019_41118 = null;
var count__41020_41119 = (0);
var i__41021_41120 = (0);
while(true){
if((i__41021_41120 < count__41020_41119)){
var vec__41022_41121 = chunk__41019_41118.cljs$core$IIndexed$_nth$arity$2(null,i__41021_41120);
var k_41122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41022_41121,(0),null);
var v_41123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41022_41121,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_41122))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41122], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41123], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__41124 = seq__41018_41117;
var G__41125 = chunk__41019_41118;
var G__41126 = count__41020_41119;
var G__41127 = (i__41021_41120 + (1));
seq__41018_41117 = G__41124;
chunk__41019_41118 = G__41125;
count__41020_41119 = G__41126;
i__41021_41120 = G__41127;
continue;
} else {
var temp__6753__auto___41128 = cljs.core.seq(seq__41018_41117);
if(temp__6753__auto___41128){
var seq__41018_41129__$1 = temp__6753__auto___41128;
if(cljs.core.chunked_seq_QMARK_(seq__41018_41129__$1)){
var c__8413__auto___41130 = cljs.core.chunk_first(seq__41018_41129__$1);
var G__41131 = cljs.core.chunk_rest(seq__41018_41129__$1);
var G__41132 = c__8413__auto___41130;
var G__41133 = cljs.core.count(c__8413__auto___41130);
var G__41134 = (0);
seq__41018_41117 = G__41131;
chunk__41019_41118 = G__41132;
count__41020_41119 = G__41133;
i__41021_41120 = G__41134;
continue;
} else {
var vec__41025_41135 = cljs.core.first(seq__41018_41129__$1);
var k_41136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025_41135,(0),null);
var v_41137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025_41135,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_41136))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_41136], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_41137], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__41138 = cljs.core.next(seq__41018_41129__$1);
var G__41139 = null;
var G__41140 = (0);
var G__41141 = (0);
seq__41018_41117 = G__41138;
chunk__41019_41118 = G__41139;
count__41020_41119 = G__41140;
i__41021_41120 = G__41141;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40989_41029;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40988_41028;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return (cljs.spec._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out(cljs.spec.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41144_41146 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41145_41147 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41144_41146,_STAR_print_fn_STAR_41145_41147,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_41144_41146,_STAR_print_fn_STAR_41145_41147,sb__8594__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41145_41147;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41144_41146;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__6751__auto__ = (function (){var or__7502__auto__ = (function (){var temp__6753__auto__ = (function (){var or__7502__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__7502__auto__ = cljs.spec.spec_name(spec__$1);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var gfn = temp__6753__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var g = temp__6751__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6751__auto__,spec__$1){
return (function (p1__41148_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__41148_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__41148_SHARP_));
});})(g,temp__6751__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args41149 = [];
var len__8723__auto___41152 = arguments.length;
var i__8724__auto___41153 = (0);
while(true){
if((i__8724__auto___41153 < len__8723__auto___41152)){
args41149.push((arguments[i__8724__auto___41153]));

var G__41154 = (i__8724__auto___41153 + (1));
i__8724__auto___41153 = G__41154;
continue;
} else {
}
break;
}

var G__41151 = args41149.length;
switch (G__41151) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41149.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit,cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.ident_QMARK_(k);
if(and__7490__auto__){
return cljs.core.namespace(k);
} else {
return and__7490__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__7502__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym(k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec(v);
var temp__6753__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6753__auto__)){
var arg_spec = temp__6753__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cljs.spec.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__6751__auto__ = cljs.spec.spec_name(arg_spec);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym(v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41158_41160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41159_41161 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41158_41160,_STAR_print_fn_STAR_41159_41161,sb__8594__auto__,ed,arg_spec,temp__6753__auto__,specs){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_41158_41160,_STAR_print_fn_STAR_41159_41161,sb__8594__auto__,ed,arg_spec,temp__6753__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41159_41161;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41158_41160;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__7502__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args41162 = [];
var len__8723__auto___41165 = arguments.length;
var i__8724__auto___41166 = (0);
while(true){
if((i__8724__auto___41166 < len__8723__auto___41165)){
args41162.push((arguments[i__8724__auto___41166]));

var G__41167 = (i__8724__auto___41166 + (1));
i__8724__auto___41166 = G__41167;
continue;
} else {
}
break;
}

var G__41164 = args41162.length;
switch (G__41164) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41162.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6751__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return cljs.spec.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args41169 = [];
var len__8723__auto___41172 = arguments.length;
var i__8724__auto___41173 = (0);
while(true){
if((i__8724__auto___41173 < len__8723__auto___41172)){
args41169.push((arguments[i__8724__auto___41173]));

var G__41174 = (i__8724__auto___41173 + (1));
i__8724__auto___41173 = G__41174;
continue;
} else {
}
break;
}

var G__41171 = args41169.length;
switch (G__41171) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41169.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.conform_STAR_(spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.conform_STAR_(spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args41176 = [];
var len__8723__auto___41179 = arguments.length;
var i__8724__auto___41180 = (0);
while(true){
if((i__8724__auto___41180 < len__8723__auto___41179)){
args41176.push((arguments[i__8724__auto___41180]));

var G__41181 = (i__8724__auto___41180 + (1));
i__8724__auto___41180 = G__41181;
continue;
} else {
}
break;
}

var G__41178 = args41176.length;
switch (G__41178) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41176.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec_SLASH_unknown)));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__6751__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(form),cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__41186){
var map__41227 = p__41186;
var map__41227__$1 = ((((!((map__41227 == null)))?((((map__41227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41227):map__41227);
var argm = map__41227__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__41183_SHARP_){
var or__7502__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__41183_SHARP_) : k__GT_s.call(null,p1__41183_SHARP_));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p1__41183_SHARP_;
}
});})(k__GT_s,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec41229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41229 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__41186,map__41227,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta41230){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.p__41186 = p__41186;
this.map__41227 = map__41227;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta41230 = meta41230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_41231,meta41230__$1){
var self__ = this;
var _41231__$1 = this;
return (new cljs.spec.t_cljs$spec41229(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.p__41186,self__.map__41227,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta41230__$1));
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_41231){
var self__ = this;
var _41231__$1 = this;
return self__.meta41230;
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__41238 = m;
var vec__41239 = G__41238;
var seq__41240 = cljs.core.seq(vec__41239);
var first__41241 = cljs.core.first(seq__41240);
var seq__41240__$1 = cljs.core.next(seq__41240);
var vec__41242 = first__41241;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242,(1),null);
var ks = seq__41240__$1;
var keys = vec__41239;
var ret__$1 = ret;
var G__41238__$1 = G__41238;
while(true){
var ret__$2 = ret__$1;
var vec__41245 = G__41238__$1;
var seq__41246 = cljs.core.seq(vec__41245);
var first__41247 = cljs.core.first(seq__41246);
var seq__41246__$1 = cljs.core.next(seq__41246);
var vec__41248 = first__41247;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41248,(1),null);
var ks__$1 = seq__41246__$1;
var keys__$1 = vec__41245;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__6751__auto__)){
var s = temp__6751__auto__;
var cv = cljs.spec.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__41267 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__41268 = ks__$1;
ret__$1 = G__41267;
G__41238__$1 = G__41268;
continue;
}
} else {
var G__41269 = ret__$2;
var G__41270 = ks__$1;
ret__$1 = G__41269;
G__41238__$1 = G__41270;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__41254 = cljs.core.keys(m);
var vec__41255 = G__41254;
var seq__41256 = cljs.core.seq(vec__41255);
var first__41257 = cljs.core.first(seq__41256);
var seq__41256__$1 = cljs.core.next(seq__41256);
var k = first__41257;
var ks = seq__41256__$1;
var keys = vec__41255;
var ret__$1 = ret;
var G__41254__$1 = G__41254;
while(true){
var ret__$2 = ret__$1;
var vec__41258 = G__41254__$1;
var seq__41259 = cljs.core.seq(vec__41258);
var first__41260 = cljs.core.first(seq__41259);
var seq__41259__$1 = cljs.core.next(seq__41259);
var k__$1 = first__41260;
var ks__$1 = seq__41259__$1;
var keys__$1 = vec__41258;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__41271 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__41272 = ks__$1;
ret__$1 = G__41271;
G__41254__$1 = G__41272;
continue;
} else {
var G__41273 = ret__$2;
var G__41274 = ks__$1;
ret__$1 = G__41273;
G__41254__$1 = G__41274;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__6753__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6753__auto__){
var probs = temp__6753__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__6753__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__41184_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__41184_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__6753__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__41261){
var vec__41262 = p__41261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41262,(1),null);
if(cljs.core.truth_((function (){var or__7502__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__41185_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__41185_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__41265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__41265) : cljs.spec.map_spec_impl.call(null,G__41265));
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec41229.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__41266 = cljs.core.PersistentVector.EMPTY;
var G__41266__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__41266,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__41266);
var G__41266__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__41266__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__41266__$1);
var G__41266__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__41266__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__41266__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__41266__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__41266__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec41229.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$p__41186,cljs.core.cst$sym$map__41227,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta41230], null);
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec41229.cljs$lang$type = true;

cljs.spec.t_cljs$spec41229.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41229";

cljs.spec.t_cljs$spec41229.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41229");
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec41229 = ((function (k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec41229(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__41186__$1,map__41227__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta41230){
return (new cljs.spec.t_cljs$spec41229(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__41186__$1,map__41227__$2,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta41230));
});})(k__GT_s,keys__GT_specnames,id,map__41227,map__41227__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec41229(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__41186,map__41227__$1,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args41275 = [];
var len__8723__auto___41283 = arguments.length;
var i__8724__auto___41284 = (0);
while(true){
if((i__8724__auto___41284 < len__8723__auto___41283)){
args41275.push((arguments[i__8724__auto___41284]));

var G__41285 = (i__8724__auto___41284 + (1));
i__8724__auto___41284 = G__41285;
continue;
} else {
}
break;
}

var G__41277 = args41275.length;
switch (G__41277) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41275.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__41278 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__41278,gfn);
} else {
return G__41278;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__41279 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__41279,gfn);
} else {
return G__41279;
}
} else {
if(typeof cljs.spec.t_cljs$spec41280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41280 = (function (form,pred,gfn,cpred_QMARK_,unc,meta41281){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta41281 = meta41281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41282,meta41281__$1){
var self__ = this;
var _41282__$1 = this;
return (new cljs.spec.t_cljs$spec41280(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta41281__$1));
});


cljs.spec.t_cljs$spec41280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41282){
var self__ = this;
var _41282__$1 = this;
return self__.meta41281;
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});


cljs.spec.t_cljs$spec41280.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec41280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta41281], null);
});

cljs.spec.t_cljs$spec41280.cljs$lang$type = true;

cljs.spec.t_cljs$spec41280.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41280";

cljs.spec.t_cljs$spec41280.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41280");
});

cljs.spec.__GT_t_cljs$spec41280 = (function cljs$spec$__GT_t_cljs$spec41280(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta41281){
return (new cljs.spec.t_cljs$spec41280(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta41281));
});

}

return (new cljs.spec.t_cljs$spec41280(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args41292 = [];
var len__8723__auto___41306 = arguments.length;
var i__8724__auto___41307 = (0);
while(true){
if((i__8724__auto___41307 < len__8723__auto___41306)){
args41292.push((arguments[i__8724__auto___41307]));

var G__41308 = (i__8724__auto___41307 + (1));
i__8724__auto___41307 = G__41308;
continue;
} else {
}
break;
}

var G__41294 = args41292.length;
switch (G__41294) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41292.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__41287_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__7490__auto__ = cljs.core._get_method(mm,cljs.core._dispatch_fn(mm).call(null,p1__41287_SHARP_));
if(cljs.core.truth_(and__7490__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__41287_SHARP_) : mm.call(null,p1__41287_SHARP_));
} else {
return and__7490__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__41288_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__41288_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__41289_SHARP_,p2__41290_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41289_SHARP_,retag,p2__41290_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec41295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41295 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta41296){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta41296 = meta41296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_41297,meta41296__$1){
var self__ = this;
var _41297__$1 = this;
return (new cljs.spec.t_cljs$spec41295(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta41296__$1));
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_41297){
var self__ = this;
var _41297__$1 = this;
return self__.meta41296;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.unform(pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__6751__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__41298){
var vec__41299 = p__41298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41299,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41299,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__41299,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__41299,k,f,___$1,id,predx,dval,tag){
return (function (p1__41291_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__41291_SHARP_,k) : self__.tag.call(null,p1__41291_SHARP_,k));
});})(rmap__$1,p,vec__41299,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__8436__auto__ = self__.form;
return cljs.core._conj((function (){var x__8436__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__41299,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__41302){
var vec__41303 = p__41302;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41303,(0),null);
return cljs.spec.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec41295.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_multi_DASH_spec),(function (){var x__8436__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec41295.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta41296], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec41295.cljs$lang$type = true;

cljs.spec.t_cljs$spec41295.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41295";

cljs.spec.t_cljs$spec41295.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41295");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec41295 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec41295(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta41296){
return (new cljs.spec.t_cljs$spec41295(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta41296));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec41295(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args41310 = [];
var len__8723__auto___41316 = arguments.length;
var i__8724__auto___41317 = (0);
while(true){
if((i__8724__auto___41317 < len__8723__auto___41316)){
args41310.push((arguments[i__8724__auto___41317]));

var G__41318 = (i__8724__auto___41317 + (1));
i__8724__auto___41317 = G__41318;
continue;
} else {
}
break;
}

var G__41312 = args41310.length;
switch (G__41312) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41310.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.t_cljs$spec41313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41313 = (function (forms,preds,gfn,specs,cnt,meta41314){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta41314 = meta41314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_41315,meta41314__$1){
var self__ = this;
var _41315__$1 = this;
return (new cljs.spec.t_cljs$spec41313(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta41314__$1));
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_41315){
var self__ = this;
var _41315__$1 = this;
return self__.meta41314;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.specs) : cljs.core.deref.call(null,self__.specs));
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__41320 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__41321 = (i + (1));
ret = G__41320;
i = G__41321;
continue;
}
}
break;
}
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__41322 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__41323 = (i + (1));
ret = G__41322;
i = G__41323;
continue;
}
break;
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;


cljs.spec.t_cljs$spec41313.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec41313.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta41314], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec41313.cljs$lang$type = true;

cljs.spec.t_cljs$spec41313.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41313";

cljs.spec.t_cljs$spec41313.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41313");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec41313 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec41313(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta41314){
return (new cljs.spec.t_cljs$spec41313(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta41314));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec41313(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x41325 = v;

x41325.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;


x41325.cljs$core$IMapEntry$_key$arity$1 = ((function (x41325){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x41325))
;


x41325.cljs$core$IMapEntry$_val$arity$1 = ((function (x41325){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x41325))
;

return x41325;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__41334 = cljs.core.count(preds);
switch (G__41334) {
case (2):
return ((function (G__41334,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__41334,id,kps,specs))

break;
case (3):
return ((function (G__41334,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__41334,id,kps,specs))

break;
default:
return ((function (G__41334,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var G__41343 = (i + (1));
i = G__41343;
continue;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
break;
}
});
;})(G__41334,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec41335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41335 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta41336){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta41336 = meta41336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_41337,meta41336__$1){
var self__ = this;
var _41337__$1 = this;
return (new cljs.spec.t_cljs$spec41335(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta41336__$1));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_41337){
var self__ = this;
var _41337__$1 = this;
return self__.meta41336;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__41338){
var self__ = this;
var vec__41339 = p__41338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec41335.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec41335.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta41336], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec41335.cljs$lang$type = true;

cljs.spec.t_cljs$spec41335.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41335";

cljs.spec.t_cljs$spec41335.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41335");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec41335 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec41335(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta41336){
return (new cljs.spec.t_cljs$spec41335(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta41336));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec41335(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__41370 = preds;
var vec__41372 = G__41370;
var seq__41373 = cljs.core.seq(vec__41372);
var first__41374 = cljs.core.first(seq__41373);
var seq__41373__$1 = cljs.core.next(seq__41373);
var pred = first__41374;
var preds__$1 = seq__41373__$1;
var G__41371 = forms;
var vec__41375 = G__41371;
var seq__41376 = cljs.core.seq(vec__41375);
var first__41377 = cljs.core.first(seq__41376);
var seq__41376__$1 = cljs.core.next(seq__41376);
var form = first__41377;
var forms__$1 = seq__41376__$1;
var ret__$1 = ret;
var G__41370__$1 = G__41370;
var G__41371__$1 = G__41371;
while(true){
var ret__$2 = ret__$1;
var vec__41378 = G__41370__$1;
var seq__41379 = cljs.core.seq(vec__41378);
var first__41380 = cljs.core.first(seq__41379);
var seq__41379__$1 = cljs.core.next(seq__41379);
var pred__$1 = first__41380;
var preds__$2 = seq__41379__$1;
var vec__41381 = G__41371__$1;
var seq__41382 = cljs.core.seq(vec__41381);
var first__41383 = cljs.core.first(seq__41382);
var seq__41382__$1 = cljs.core.next(seq__41382);
var form__$1 = first__41383;
var forms__$2 = seq__41382__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__41384 = nret;
var G__41385 = preds__$2;
var G__41386 = forms__$2;
ret__$1 = G__41384;
G__41370__$1 = G__41385;
G__41371__$1 = G__41386;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__41413 = forms;
var vec__41415 = G__41413;
var seq__41416 = cljs.core.seq(vec__41415);
var first__41417 = cljs.core.first(seq__41416);
var seq__41416__$1 = cljs.core.next(seq__41416);
var form = first__41417;
var forms__$1 = seq__41416__$1;
var G__41414 = preds;
var vec__41418 = G__41414;
var seq__41419 = cljs.core.seq(vec__41418);
var first__41420 = cljs.core.first(seq__41419);
var seq__41419__$1 = cljs.core.next(seq__41419);
var pred = first__41420;
var preds__$1 = seq__41419__$1;
var ret__$1 = ret;
var G__41413__$1 = G__41413;
var G__41414__$1 = G__41414;
while(true){
var ret__$2 = ret__$1;
var vec__41421 = G__41413__$1;
var seq__41422 = cljs.core.seq(vec__41421);
var first__41423 = cljs.core.first(seq__41422);
var seq__41422__$1 = cljs.core.next(seq__41422);
var form__$1 = first__41423;
var forms__$2 = seq__41422__$1;
var vec__41424 = G__41414__$1;
var seq__41425 = cljs.core.seq(vec__41424);
var first__41426 = cljs.core.first(seq__41425);
var seq__41425__$1 = cljs.core.next(seq__41425);
var pred__$1 = first__41426;
var preds__$2 = seq__41425__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__41427 = nret;
var G__41428 = forms__$2;
var G__41429 = preds__$2;
ret__$1 = G__41427;
G__41413__$1 = G__41428;
G__41414__$1 = G__41429;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__41436 = cljs.core.count(preds);
switch (G__41436) {
case (2):
return ((function (G__41436,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__41436,specs))

break;
case (3):
return ((function (G__41436,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__41436,specs))

break;
default:
return ((function (G__41436,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__41441 = nret;
var G__41442 = (i + (1));
ret = G__41441;
i = G__41442;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__41436,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec41437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41437 = (function (forms,preds,gfn,specs,cform,meta41438){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta41438 = meta41438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_41439,meta41438__$1){
var self__ = this;
var _41439__$1 = this;
return (new cljs.spec.t_cljs$spec41437(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta41438__$1));
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_41439){
var self__ = this;
var _41439__$1 = this;
return self__.meta41438;
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__41431_SHARP_,p2__41430_SHARP_){
return cljs.spec.unform(p2__41430_SHARP_,p1__41431_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;


cljs.spec.t_cljs$spec41437.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_and),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec41437.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta41438], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec41437.cljs$lang$type = true;

cljs.spec.t_cljs$spec41437.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41437";

cljs.spec.t_cljs$spec41437.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41437");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec41437 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec41437(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta41438){
return (new cljs.spec.t_cljs$spec41437(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta41438));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec41437(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__7502__auto__ = kfn;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__7502__auto__ = kform;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = count;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__7490__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8436__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = (function (){var or__7502__auto__ = min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__7490__auto__)){
return !((((function (){var or__7502__auto__ = min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__7502__auto__ = max_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__7490__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__8436__auto__ = (function (){var or__7502__auto__ = min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = (function (){var or__7502__auto__ = max_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = distinct;
if(cljs.core.truth_(and__7490__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__7490__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec41454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41454 = (function (forms,preds,gfn,meta41455){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta41455 = meta41455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41456,meta41455__$1){
var self__ = this;
var _41456__$1 = this;
return (new cljs.spec.t_cljs$spec41454(self__.forms,self__.preds,self__.gfn,meta41455__$1));
});


cljs.spec.t_cljs$spec41454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41456){
var self__ = this;
var _41456__$1 = this;
return self__.meta41455;
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__41443_SHARP_,p2__41444_SHARP_){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p1__41443_SHARP_,x,p2__41444_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__41445_SHARP_){
return cljs.spec.unform(p1__41445_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__41446_SHARP_,p2__41447_SHARP_){
return cljs.spec.explain_1(p1__41446_SHARP_,p2__41447_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__41448_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__41448_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__41449_SHARP_,p2__41450_SHARP_){
return cljs.spec.gensub(p1__41449_SHARP_,overrides,path,rmap,p2__41450_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});


cljs.spec.t_cljs$spec41454.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_merge),self__.forms)));
});

cljs.spec.t_cljs$spec41454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta41455], null);
});

cljs.spec.t_cljs$spec41454.cljs$lang$type = true;

cljs.spec.t_cljs$spec41454.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41454";

cljs.spec.t_cljs$spec41454.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41454");
});

cljs.spec.__GT_t_cljs$spec41454 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec41454(forms__$1,preds__$1,gfn__$1,meta41455){
return (new cljs.spec.t_cljs$spec41454(forms__$1,preds__$1,gfn__$1,meta41455));
});

}

return (new cljs.spec.t_cljs$spec41454(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args41461 = [];
var len__8723__auto___41496 = arguments.length;
var i__8724__auto___41497 = (0);
while(true){
if((i__8724__auto___41497 < len__8723__auto___41496)){
args41461.push((arguments[i__8724__auto___41497]));

var G__41498 = (i__8724__auto___41497 + (1));
i__8724__auto___41497 = G__41498;
continue;
} else {
}
break;
}

var G__41463 = args41461.length;
switch (G__41463) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41461.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__41464,gfn){
var map__41465 = p__41464;
var map__41465__$1 = ((((!((map__41465 == null)))?((((map__41465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41465):map__41465);
var opts = map__41465__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$max_DASH_count);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$cljs$spec_SLASH_kfn);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41465__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$conform_DASH_keys);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$distinct);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41465__$1,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$kind);
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41465__$1,cljs.core.cst$kw$cljs$spec_SLASH_cpred);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__41457_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(spec) : cljs.core.deref.call(null,spec)),p1__41457_SHARP_);
});})(conform_into,spec,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__7502__auto__ = kfn;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return ((function (or__7502__auto__,conform_into,spec,check_QMARK_,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__7502__auto__,conform_into,spec,check_QMARK_,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__41467 = ((cljs.core.map_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null):((cljs.core.vector_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null):((cljs.core.list_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null):((cljs.core.set_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_seqable_QMARK_], null)
))));
var kindfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41467,(0),null);
var kindform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41467,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__7490__auto__ = cljs.core.map_QMARK_(x);
if(and__7490__auto__){
var or__7502__auto__ = (function (){var and__7490__auto____$1 = kind;
if(cljs.core.truth_(and__7490__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__7490__auto____$1;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__7490__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__41458_SHARP_){
return cljs.core.empty((function (){var or__7502__auto__ = conform_into;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p1__41458_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec41470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41470 = (function (form,max_count,map__41465,check_QMARK_,gfn,gen_max,p__41464,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,vec__41467,distinct,kindfn,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta41471){
this.form = form;
this.max_count = max_count;
this.map__41465 = map__41465;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.p__41464 = p__41464;
this.pred = pred;
this.cpred = cpred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.vec__41467 = vec__41467;
this.distinct = distinct;
this.kindfn = kindfn;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta41471 = meta41471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_41472,meta41471__$1){
var self__ = this;
var _41472__$1 = this;
return (new cljs.spec.t_cljs$spec41470(self__.form,self__.max_count,self__.map__41465,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.p__41464,self__.pred,self__.cpred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.vec__41467,self__.distinct,self__.kindfn,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta41471__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_41472){
var self__ = this;
var _41472__$1 = this;
return self__.meta41471;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.spec) : cljs.core.deref.call(null,self__.spec));
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__41473 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__41479 = cljs.core.seq(x);
var vec__41480 = G__41479;
var seq__41481 = cljs.core.seq(vec__41480);
var first__41482 = cljs.core.first(seq__41481);
var seq__41481__$1 = cljs.core.next(seq__41481);
var v = first__41482;
var vs = seq__41481__$1;
var vseq = vec__41480;
var ret__$1 = ret;
var i__$1 = i;
var G__41479__$1 = G__41479;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__41483 = G__41479__$1;
var seq__41484 = cljs.core.seq(vec__41483);
var first__41485 = cljs.core.first(seq__41484);
var seq__41484__$1 = cljs.core.next(seq__41484);
var v__$1 = first__41485;
var vs__$1 = seq__41484__$1;
var vseq__$1 = vec__41483;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__41500 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__41501 = (i__$2 + (1));
var G__41502 = vs__$1;
ret__$1 = G__41500;
i__$1 = G__41501;
G__41479__$1 = G__41502;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__7840__auto__ = (1);
var y__7841__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__41503 = (i + step);
i = G__41503;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__41489 = cljs.core.seq(x);
var vec__41490 = G__41489;
var seq__41491 = cljs.core.seq(vec__41490);
var first__41492 = cljs.core.first(seq__41491);
var seq__41491__$1 = cljs.core.next(seq__41491);
var v = first__41492;
var vs = seq__41491__$1;
var vseq = vec__41490;
var i__$1 = i;
var G__41489__$1 = G__41489;
while(true){
var i__$2 = i__$1;
var vec__41493 = G__41489__$1;
var seq__41494 = cljs.core.seq(vec__41493);
var first__41495 = cljs.core.first(seq__41494);
var seq__41494__$1 = cljs.core.next(seq__41494);
var v__$1 = first__41495;
var vs__$1 = seq__41494__$1;
var vseq__$1 = vec__41493;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__41504 = (i__$2 + (1));
var G__41505 = vs__$1;
i__$1 = G__41504;
G__41489__$1 = G__41505;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__7502__auto__ = cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__7502__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__7502__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__41459_SHARP_){
if(cljs.core.empty_QMARK_(p1__41459_SHARP_)){
return p1__41459_SHARP_;
} else {
return cljs.core.empty(p1__41459_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__41460_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__41460_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__41460_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__7502__auto__ = self__.min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__7502__auto__ = self__.max_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var x__7840__auto__ = self__.gen_max;
var y__7841__auto__ = ((2) * (function (){var or__7502__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return (0);
}
})());
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__7502__auto__ = self__.min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__7502__auto__ = self__.min_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (0);
}
})(),(function (){var or__7502__auto__ = self__.max_count;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var x__7840__auto__ = self__.gen_max;
var y__7841__auto__ = ((2) * (function (){var or__7502__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return (0);
}
})());
return ((x__7840__auto__ > y__7841__auto__) ? x__7840__auto__ : y__7841__auto__);
}
})()], 0)):cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec41470.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_every),(function (){var x__8436__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec41470.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$map__41465,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$p__41464,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$kindform,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$vec__41467,cljs.core.cst$sym$distinct,cljs.core.cst$sym$kindfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta41471], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec41470.cljs$lang$type = true;

cljs.spec.t_cljs$spec41470.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41470";

cljs.spec.t_cljs$spec41470.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41470");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec41470 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec41470(form__$1,max_count__$1,map__41465__$2,check_QMARK___$1,gfn__$1,gen_max__$1,p__41464__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,vec__41467__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta41471){
return (new cljs.spec.t_cljs$spec41470(form__$1,max_count__$1,map__41465__$2,check_QMARK___$1,gfn__$1,gen_max__$1,p__41464__$1,pred__$1,cpred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,vec__41467__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta41471));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__41467,kindfn,kindform,cfns,map__41465,map__41465__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec41470(form,max_count,map__41465__$1,check_QMARK_,gfn,gen_max,p__41464,pred,cpred,kindform,conform_keys,kind_form,addcv,cfns,vec__41467,distinct,kindfn,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__41506){
var map__41509 = p__41506;
var map__41509__$1 = ((((!((map__41509 == null)))?((((map__41509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41509):map__41509);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41509__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__41511){
var map__41524 = p__41511;
var map__41524__$1 = ((((!((map__41524 == null)))?((((map__41524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41524):map__41524);
var vec__41525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524__$1,cljs.core.cst$kw$ps);
var seq__41526 = cljs.core.seq(vec__41525);
var first__41527 = cljs.core.first(seq__41526);
var seq__41526__$1 = cljs.core.next(seq__41526);
var p1 = first__41527;
var pr = seq__41526__$1;
var ps = vec__41525;
var vec__41528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524__$1,cljs.core.cst$kw$ks);
var seq__41529 = cljs.core.seq(vec__41528);
var first__41530 = cljs.core.first(seq__41529);
var seq__41529__$1 = cljs.core.next(seq__41529);
var k1 = first__41530;
var kr = seq__41529__$1;
var ks = vec__41528;
var vec__41531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524__$1,cljs.core.cst$kw$forms);
var seq__41532 = cljs.core.seq(vec__41531);
var first__41533 = cljs.core.first(seq__41532);
var seq__41532__$1 = cljs.core.next(seq__41532);
var f1 = first__41533;
var fr = seq__41532__$1;
var forms = vec__41531;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41524__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__41535 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__41535) : cljs.spec.pcat_STAR_.call(null,G__41535));
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__8730__auto__ = [];
var len__8723__auto___41537 = arguments.length;
var i__8724__auto___41538 = (0);
while(true){
if((i__8724__auto___41538 < len__8723__auto___41537)){
args__8730__auto__.push((arguments[i__8724__auto___41538]));

var G__41539 = (i__8724__auto___41538 + (1));
i__8724__auto___41538 = G__41539;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq41536){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41536));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.array_seq([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.array_seq([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8436__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),(function (){var x__8436__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__STAR_),(function (){var x__8436__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__7502__auto__ = ks;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41540_SHARP_){
var G__41543 = cljs.core.first(p1__41540_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41543) : f.call(null,G__41543));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7502__auto__ = cljs.core.seq(ks);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7502__auto__ = cljs.core.seq(forms);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__41541_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__41541_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__41553 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__41556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41553,(0),null);
var seq__41557 = cljs.core.seq(vec__41556);
var first__41558 = cljs.core.first(seq__41557);
var seq__41557__$1 = cljs.core.next(seq__41557);
var p1 = first__41558;
var pr = seq__41557__$1;
var ps__$1 = vec__41556;
var vec__41559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41553,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559,(0),null);
var ks__$1 = vec__41559;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41553,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.spec.accept(cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__8730__auto__ = [];
var len__8723__auto___41563 = arguments.length;
var i__8724__auto___41564 = (0);
while(true){
if((i__8724__auto___41564 < len__8723__auto___41563)){
args__8730__auto__.push((arguments[i__8724__auto___41564]));

var G__41565 = (i__8724__auto___41564 + (1));
i__8724__auto___41564 = G__41565;
continue;
} else {
}
break;
}

var argseq__8731__auto__ = ((((0) < args__8730__auto__.length))?(new cljs.core.IndexedSeq(args__8730__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__8731__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq41562){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41562));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__7490__auto__ = p1;
if(cljs.core.truth_(and__7490__auto__)){
return p2;
} else {
return and__7490__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__7502__auto__ = p1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept(cljs.core.cst$kw$cljs$spec_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__7502__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec_SLASH_nil);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_pcat,null,cljs.core.cst$kw$cljs$spec_SLASH_rep,null], null), null).call(null,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__41569 = cljs.spec.reg_resolve_BANG_(p);
var map__41569__$1 = ((((!((map__41569 == null)))?((((map__41569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41569):map__41569);
var p__$1 = map__41569__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,cljs.core.cst$kw$forms);
var G__41571 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41571)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41571)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41571)){
var and__7490__auto__ = (cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__7490__auto__)){
var or__7502__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.invalid_QMARK_(ret));
}
} else {
return and__7490__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41571)){
var or__7502__auto__ = (p1 === p2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return (cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41571)){
return cljs.core.every_QMARK_(cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41571)){
return cljs.core.some(cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__41590 = cljs.spec.reg_resolve_BANG_(p);
var map__41590__$1 = ((((!((map__41590 == null)))?((((map__41590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41590):map__41590);
var p__$1 = map__41590__$1;
var vec__41591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$ps);
var seq__41592 = cljs.core.seq(vec__41591);
var first__41593 = cljs.core.first(seq__41592);
var seq__41592__$1 = cljs.core.next(seq__41592);
var p0 = first__41593;
var pr = seq__41592__$1;
var ps = vec__41591;
var vec__41594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41594,(0),null);
var ks = vec__41594;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,cljs.core.cst$kw$forms);
var G__41598 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41598)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41598)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41598)){
var pret = (cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41598)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41598)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41598)){
var vec__41599 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__41602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41602,(0),null);
var vec__41605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41605,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec_SLASH_nil:(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__41628 = cljs.spec.reg_resolve_BANG_(p);
var map__41628__$1 = ((((!((map__41628 == null)))?((((map__41628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41628):map__41628);
var p__$1 = map__41628__$1;
var vec__41629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$ps);
var seq__41630 = cljs.core.seq(vec__41629);
var first__41631 = cljs.core.first(seq__41630);
var seq__41630__$1 = cljs.core.next(seq__41630);
var p0 = first__41631;
var pr = seq__41630__$1;
var ps = vec__41629;
var vec__41632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41632,(0),null);
var ks = vec__41632;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__41636 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41636)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41636)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41636)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__41609_SHARP_,p2__41608_SHARP_){
return cljs.spec.unform(p2__41608_SHARP_,p1__41609_SHARP_);
});})(G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41636)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__41610_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__41610_SHARP_) : cljs.spec.op_unform.call(null,p1,p1__41610_SHARP_));
});})(G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41636)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__41611_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__41611_SHARP_) : cljs.spec.op_unform.call(null,p0,p1__41611_SHARP_));
});})(G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__41637 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__41638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__41637,G__41638) : cljs.spec.op_unform.call(null,G__41637,G__41638));
} else {
return null;
}
});})(G__41636,map__41628,map__41628__$1,p__$1,vec__41629,seq__41630,first__41631,seq__41630__$1,p0,pr,ps,vec__41632,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41636)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__41639 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41639,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41639,(1),null);
var G__41642 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__41643 = v;
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__41642,G__41643) : cljs.spec.op_unform.call(null,G__41642,G__41643));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__41647 = cljs.spec.reg_resolve_BANG_(p);
var map__41647__$1 = ((((!((map__41647 == null)))?((((map__41647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41647):map__41647);
var p__$1 = map__41647__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41647__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__41647,map__41647__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__41647,map__41647__$1,p__$1,op,ps,splice))
;
var G__41649 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41649)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41649)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41649)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41649)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41649)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41649)){
return prop();
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__41664 = cljs.spec.reg_resolve_BANG_(p);
var map__41664__$1 = ((((!((map__41664 == null)))?((((map__41664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41664):map__41664);
var p__$1 = map__41664__$1;
var vec__41665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$ps);
var seq__41666 = cljs.core.seq(vec__41665);
var first__41667 = cljs.core.first(seq__41666);
var seq__41666__$1 = cljs.core.next(seq__41666);
var p0 = first__41667;
var pr = seq__41666__$1;
var ps = vec__41665;
var vec__41668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$ks);
var seq__41669 = cljs.core.seq(vec__41668);
var first__41670 = cljs.core.first(seq__41669);
var seq__41669__$1 = cljs.core.next(seq__41669);
var k0 = first__41670;
var kr = seq__41669__$1;
var ks = vec__41668;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41664__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__41672 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41672)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41672)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41672)){
var temp__6753__auto__ = (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__6753__auto__)){
var p1__$1 = temp__6753__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds(cljs.spec.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return cljs.spec.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41672)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?(function (){var G__41673 = cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null));
var G__41674 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__41673,G__41674) : cljs.spec.deriv.call(null,G__41673,G__41674));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41672)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__41672,map__41664,map__41664__$1,p__$1,vec__41665,seq__41666,first__41667,seq__41666__$1,p0,pr,ps,vec__41668,seq__41669,first__41670,seq__41669__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__41650_SHARP_){
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1__41650_SHARP_,x) : cljs.spec.deriv.call(null,p1__41650_SHARP_,x));
});})(G__41672,map__41664,map__41664__$1,p__$1,vec__41665,seq__41666,first__41667,seq__41666__$1,p0,pr,ps,vec__41668,seq__41669,first__41670,seq__41669__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41672)){
return cljs.spec.alt2(cljs.spec.rep_STAR_((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?(function (){var G__41675 = cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms);
var G__41676 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__41675,G__41676) : cljs.spec.deriv.call(null,G__41675,G__41676));
})():null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__41680 = cljs.spec.reg_resolve_BANG_(p);
var map__41680__$1 = ((((!((map__41680 == null)))?((((map__41680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41680):map__41680);
var p__$1 = map__41680__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__41682 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41682)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41682)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41682)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,(cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41682)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__8436__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__7502__auto__ = cljs.core.seq(ks);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41682)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__8436__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41682)){
var x__8436__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec_SLASH__STAR_);
return cljs.core._conj((function (){var x__8436__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__41714 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(0),null);
var input__$1 = vec__41714;
var map__41717 = cljs.spec.reg_resolve_BANG_(p);
var map__41717__$1 = ((((!((map__41717 == null)))?((((map__41717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41717):map__41717);
var p__$1 = map__41717__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__6751__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__41719 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41719)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41719)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41719)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__6751__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__6751__auto__)){
var p1__$1 = temp__6751__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
var G__41720 = cljs.spec.op_describe(p1);
var G__41721 = p1;
var G__41722 = path;
var G__41723 = via__$1;
var G__41724 = in$;
var G__41725 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__41720,G__41721,G__41722,G__41723,G__41724,G__41725) : cljs.spec.op_explain.call(null,G__41720,G__41721,G__41722,G__41723,G__41724,G__41725));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41719)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7502__auto__ = cljs.core.seq(ks);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7502__auto__ = cljs.core.seq(forms);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__41726 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__41719,vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__41729){
var vec__41730 = p__41729;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41730,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__41719,vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41726,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41726,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41726,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__7502__auto__ = form__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41719)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__41719,vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__41733 = (function (){var or__7502__auto__ = form__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
var G__41734 = pred;
var G__41735 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__41736 = via__$1;
var G__41737 = in$;
var G__41738 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__41733,G__41734,G__41735,G__41736,G__41737,G__41738) : cljs.spec.op_explain.call(null,G__41733,G__41734,G__41735,G__41736,G__41737,G__41738));
});})(G__41719,vec__41714,x,input__$1,map__41717,map__41717__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__7502__auto__ = cljs.core.seq(ks);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7502__auto__ = cljs.core.seq(forms);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41719)){
var G__41739 = (((p1 === p2))?forms:cljs.spec.op_describe(p1));
var G__41740 = p1;
var G__41741 = path;
var G__41742 = via__$1;
var G__41743 = in$;
var G__41744 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__41739,G__41740,G__41741,G__41742,G__41743,G__41744) : cljs.spec.op_explain.call(null,G__41739,G__41740,G__41741,G__41742,G__41743,G__41744));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__41766 = cljs.spec.reg_resolve_BANG_(p);
var map__41766__$1 = ((((!((map__41766 == null)))?((((map__41766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41766):map__41766);
var p__$1 = map__41766__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$p1);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$id);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41766__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__7490__auto__ = rmap__$1;
if(cljs.core.truth_(and__7490__auto__)){
var and__7490__auto____$1 = id;
if(cljs.core.truth_(and__7490__auto____$1)){
var and__7490__auto____$2 = k;
if(cljs.core.truth_(and__7490__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__7490__auto____$2;
}
} else {
return and__7490__auto____$1;
}
} else {
return and__7490__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
var G__41768 = p__$2;
var G__41769 = overrides;
var G__41770 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__41771 = rmap__$1;
var G__41772 = (function (){var or__7502__auto__ = f__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__41768,G__41769,G__41770,G__41771,G__41772) : cljs.spec.re_gen.call(null,G__41768,G__41769,G__41770,G__41771,G__41772));
});})(map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
var G__41773 = p__$2;
var G__41774 = overrides;
var G__41775 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__41776 = rmap__$1;
var G__41777 = (function (){var or__7502__auto__ = f__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__41773,G__41774,G__41775,G__41776,G__41777) : cljs.spec.re_gen.call(null,G__41773,G__41774,G__41775,G__41776,G__41777));
}
}
});})(map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__7502__auto__ = cljs.core.seq(ks__$1);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7502__auto__ = cljs.core.seq(forms__$1);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__7502__auto__ = (function (){var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
var G__41779 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__41779)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41779)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__41780 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__41780)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__41780)){
var temp__6753__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__41780)){
var G__41781 = p1;
var G__41782 = overrides;
var G__41783 = path;
var G__41784 = rmap__$1;
var G__41785 = cljs.spec.op_describe(p1);
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__41781,G__41782,G__41783,G__41784,G__41785) : cljs.spec.re_gen.call(null,G__41781,G__41782,G__41783,G__41784,G__41785));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__41780)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__41780)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__41780)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__6753__auto__ = (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6753__auto__,G__41780,or__7502__auto____$1,or__7502__auto__,map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__41745_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__41745_SHARP_);
});})(g,temp__6753__auto__,G__41780,or__7502__auto____$1,or__7502__auto__,map__41766,map__41766__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__41786){
while(true){
var vec__41790 = p__41786;
var seq__41791 = cljs.core.seq(vec__41790);
var first__41792 = cljs.core.first(seq__41791);
var seq__41791__$1 = cljs.core.next(seq__41791);
var x = first__41792;
var xs = seq__41791__$1;
var data = vec__41790;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p))){
var ret = cljs.spec.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
var temp__6751__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__6751__auto__)){
var dp = temp__6751__auto__;
var G__41793 = dp;
var G__41794 = xs;
p = G__41793;
p__41786 = G__41794;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__41808 = input;
var vec__41809 = G__41808;
var seq__41810 = cljs.core.seq(vec__41809);
var first__41811 = cljs.core.first(seq__41810);
var seq__41810__$1 = cljs.core.next(seq__41810);
var x = first__41811;
var xs = seq__41810__$1;
var data = vec__41809;
var i = (0);
var p__$1 = p;
var G__41808__$1 = G__41808;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__41812 = G__41808__$1;
var seq__41813 = cljs.core.seq(vec__41812);
var first__41814 = cljs.core.first(seq__41813);
var seq__41813__$1 = cljs.core.next(seq__41813);
var x__$1 = first__41814;
var xs__$1 = seq__41813__$1;
var data__$1 = vec__41812;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6751__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var dp = temp__6751__auto__;
var G__41815 = dp;
var G__41816 = xs__$1;
var G__41817 = (i__$2 + (1));
p__$1 = G__41815;
G__41808__$1 = G__41816;
i__$1 = G__41817;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec_SLASH_pcat)){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(re)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__7502__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(p__$2)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec41821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41821 = (function (re,gfn,meta41822){
this.re = re;
this.gfn = gfn;
this.meta41822 = meta41822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41823,meta41822__$1){
var self__ = this;
var _41823__$1 = this;
return (new cljs.spec.t_cljs$spec41821(self__.re,self__.gfn,meta41822__$1));
});


cljs.spec.t_cljs$spec41821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41823){
var self__ = this;
var _41823__$1 = this;
return self__.meta41822;
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1));
});


cljs.spec.t_cljs$spec41821.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec41821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta41822], null);
});

cljs.spec.t_cljs$spec41821.cljs$lang$type = true;

cljs.spec.t_cljs$spec41821.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41821";

cljs.spec.t_cljs$spec41821.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41821");
});

cljs.spec.__GT_t_cljs$spec41821 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec41821(re__$1,gfn__$1,meta41822){
return (new cljs.spec.t_cljs$spec41821(re__$1,gfn__$1,meta41822));
});

}

return (new cljs.spec.t_cljs$spec41821(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__7490__auto__ = cljs.core.not(cljs.spec.invalid_QMARK_(cret));
if(and__7490__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__7490__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__41824_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__41824_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__6751__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6751__auto__)){
var vec__41828 = temp__6751__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41828,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.t_cljs$spec41837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec41837 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta41838){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta41838 = meta41838;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_41839,meta41838__$1){
var self__ = this;
var _41839__$1 = this;
return (new cljs.spec.t_cljs$spec41837(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta41838__$1));
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_41839){
var self__ = this;
var _41839__$1 = this;
return self__.meta41838;
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.validate_fn(f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e41840){if((e41840 instanceof Error)){
var t = e41840;
return t;
} else {
throw e41840;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cret))){
return cljs.spec.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform(self__.argspec,args);
return cljs.spec.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__41843__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41841_41844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41842_41845 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41841_41844,_STAR_print_fn_STAR_41842_41845,sb__8594__auto__,___$3,specs){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_41841_41844,_STAR_print_fn_STAR_41842_41845,sb__8594__auto__,___$3,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41842_41845;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41841_41844;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__41843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41846__i = 0, G__41846__a = new Array(arguments.length -  0);
while (G__41846__i < G__41846__a.length) {G__41846__a[G__41846__i] = arguments[G__41846__i + 0]; ++G__41846__i;}
  args = new cljs.core.IndexedSeq(G__41846__a,0);
} 
return G__41843__delegate.call(this,args);};
G__41843.cljs$lang$maxFixedArity = 0;
G__41843.cljs$lang$applyTo = (function (arglist__41847){
var args = cljs.core.seq(arglist__41847);
return G__41843__delegate(args);
});
G__41843.cljs$core$IFn$_invoke$arity$variadic = G__41843__delegate;
return G__41843;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;


cljs.spec.t_cljs$spec41837.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.array_seq([(function (){var x__8436__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__8436__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__8436__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec41837.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta41838], null);
});})(specs))
;

cljs.spec.t_cljs$spec41837.cljs$lang$type = true;

cljs.spec.t_cljs$spec41837.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41837";

cljs.spec.t_cljs$spec41837.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41837");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec41837 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec41837(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta41838){
return (new cljs.spec.t_cljs$spec41837(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta41838));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec41837(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__41848_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__41848_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__41848_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__41849_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__41849_SHARP_))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__41848_SHARP_], null),cljs.core.list(cljs.core.cst$sym$zipmap,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__41848_SHARP_),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__41848_SHARP_))),(function (p1__41848_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__41848_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__41848_SHARP_));
}),null,true,(function (p1__41849_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41850){
var vec__41851 = p__41850;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41851,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,k,cljs.core.cst$kw$cljs$spec_SLASH_v,v], null);
}),p1__41849_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.t_cljs$spec41858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41858 = (function (spec,meta41859){
this.spec = spec;
this.meta41859 = meta41859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_41860,meta41859__$1){
var self__ = this;
var _41860__$1 = this;
return (new cljs.spec.t_cljs$spec41858(self__.spec,meta41859__$1));
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_41860){
var self__ = this;
var _41860__$1 = this;
return self__.meta41859;
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_(self__.spec,x);
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__41861 = cljs.spec.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1(G__41861) : cljs.spec.nonconforming.call(null,G__41861));
});})(spec__$1))
;


cljs.spec.t_cljs$spec41858.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nonconforming),(function (){var x__8436__auto__ = cljs.spec.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec41858.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta41859], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec41858.cljs$lang$type = true;

cljs.spec.t_cljs$spec41858.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41858";

cljs.spec.t_cljs$spec41858.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41858");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec41858 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec41858(spec__$2,meta41859){
return (new cljs.spec.t_cljs$spec41858(spec__$2,meta41859));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec41858(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.t_cljs$spec41865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec41865 = (function (form,pred,gfn,spec,meta41866){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta41866 = meta41866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec41865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_41867,meta41866__$1){
var self__ = this;
var _41867__$1 = this;
return (new cljs.spec.t_cljs$spec41865(self__.form,self__.pred,self__.gfn,self__.spec,meta41866__$1));
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_41867){
var self__ = this;
var _41867__$1 = this;
return self__.meta41866;
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_(self__.spec,x);
}
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_(self__.spec,x);
}
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__7502__auto__ = cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;


cljs.spec.t_cljs$spec41865.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nilable),(function (){var x__8436__auto__ = cljs.spec.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec41865.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta41866], null);
});})(spec))
;

cljs.spec.t_cljs$spec41865.cljs$lang$type = true;

cljs.spec.t_cljs$spec41865.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec41865";

cljs.spec.t_cljs$spec41865.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec41865");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec41865 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec41865(form__$1,pred__$1,gfn__$1,spec__$1,meta41866){
return (new cljs.spec.t_cljs$spec41865(form__$1,pred__$1,gfn__$1,spec__$1,meta41866));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec41865(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args41869 = [];
var len__8723__auto___41872 = arguments.length;
var i__8724__auto___41873 = (0);
while(true){
if((i__8724__auto___41873 < len__8723__auto___41872)){
args41869.push((arguments[i__8724__auto___41873]));

var G__41874 = (i__8724__auto___41873 + (1));
i__8724__auto___41873 = G__41874;
continue;
} else {
}
break;
}

var G__41871 = args41869.length;
switch (G__41871) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41869.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41868_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41868_SHARP_,cljs.spec.conform(spec,p1__41868_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__7490__auto__ = cljs.core.inst_QMARK_(inst);
if(and__7490__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__7490__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__7490__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7490__auto__)){
return val.lessThan(end);
} else {
return and__7490__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__7490__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7490__auto__)){
return val.lessThan(end);
} else {
return and__7490__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41878_41880 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41879_41881 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41878_41880,_STAR_print_fn_STAR_41879_41881,sb__8594__auto__,ed){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_41878_41880,_STAR_print_fn_STAR_41879_41881,sb__8594__auto__,ed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41879_41881;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41878_41880;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})())].join('')));
}
});

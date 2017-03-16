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
cljs.spec.registry_ref = (function (){var G__36101 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36101) : cljs.core.atom.call(null,G__36101));
})();
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__36102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__36102;
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
var args36136 = [];
var len__8723__auto___36151 = arguments.length;
var i__8724__auto___36152 = (0);
while(true){
if((i__8724__auto___36152 < len__8723__auto___36151)){
args36136.push((arguments[i__8724__auto___36152]));

var G__36153 = (i__8724__auto___36152 + (1));
i__8724__auto___36152 = G__36153;
continue;
} else {
}
break;
}

var G__36140 = args36136.length;
switch (G__36140) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36136.length)].join('')));

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
var G__36182 = null;
var G__36182__1 = (function (o){
var G__36164 = cljs.core.cst$kw$cljs$spec_SLASH_unknown;
var G__36165 = o;
var G__36166 = null;
var G__36167 = null;
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(G__36164,G__36165,G__36166,G__36167) : cljs.spec.spec_impl.call(null,G__36164,G__36165,G__36166,G__36167));
});
var G__36182__2 = (function (o,form){
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.spec_impl.call(null,form,o,null,null));
});
G__36182 = function(o,form){
switch(arguments.length){
case 1:
return G__36182__1.call(this,o);
case 2:
return G__36182__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36182.cljs$core$IFn$_invoke$arity$1 = G__36182__1;
G__36182.cljs$core$IFn$_invoke$arity$2 = G__36182__2;
return G__36182;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args36195 = [];
var len__8723__auto___36199 = arguments.length;
var i__8724__auto___36200 = (0);
while(true){
if((i__8724__auto___36200 < len__8723__auto___36199)){
args36195.push((arguments[i__8724__auto___36200]));

var G__36201 = (i__8724__auto___36200 + (1));
i__8724__auto___36200 = G__36201;
continue;
} else {
}
break;
}

var G__36197 = args36195.length;
switch (G__36197) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36195.length)].join('')));

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
var _STAR_print_newline_STAR_36323_36401 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36324_36402 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36323_36401,_STAR_print_fn_STAR_36324_36402,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_36323_36401,_STAR_print_fn_STAR_36324_36402,sb__8594__auto__))
;

try{var seq__36330_36403 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__36331_36404 = null;
var count__36332_36405 = (0);
var i__36333_36406 = (0);
while(true){
if((i__36333_36406 < count__36332_36405)){
var map__36334_36411 = chunk__36331_36404.cljs$core$IIndexed$_nth$arity$2(null,i__36333_36406);
var map__36334_36412__$1 = ((((!((map__36334_36411 == null)))?((((map__36334_36411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36334_36411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36334_36411):map__36334_36411);
var prob_36413 = map__36334_36412__$1;
var path_36414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$path);
var pred_36415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$pred);
var val_36416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$val);
var reason_36417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$reason);
var via_36418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$via);
var in_36419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36334_36412__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_36419)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_36419], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_36416], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_36418)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_36418)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_36414)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_36414], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_36415)], 0));

if(cljs.core.truth_(reason_36417)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_36417], 0));
} else {
}

var seq__36340_36429 = cljs.core.seq(prob_36413);
var chunk__36341_36430 = null;
var count__36342_36431 = (0);
var i__36343_36432 = (0);
while(true){
if((i__36343_36432 < count__36342_36431)){
var vec__36344_36433 = chunk__36341_36430.cljs$core$IIndexed$_nth$arity$2(null,i__36343_36432);
var k_36434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344_36433,(0),null);
var v_36435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344_36433,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_36434))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36434], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36435], 0));
}

var G__36445 = seq__36340_36429;
var G__36446 = chunk__36341_36430;
var G__36447 = count__36342_36431;
var G__36448 = (i__36343_36432 + (1));
seq__36340_36429 = G__36445;
chunk__36341_36430 = G__36446;
count__36342_36431 = G__36447;
i__36343_36432 = G__36448;
continue;
} else {
var temp__6753__auto___36449 = cljs.core.seq(seq__36340_36429);
if(temp__6753__auto___36449){
var seq__36340_36450__$1 = temp__6753__auto___36449;
if(cljs.core.chunked_seq_QMARK_(seq__36340_36450__$1)){
var c__8413__auto___36451 = cljs.core.chunk_first(seq__36340_36450__$1);
var G__36452 = cljs.core.chunk_rest(seq__36340_36450__$1);
var G__36453 = c__8413__auto___36451;
var G__36454 = cljs.core.count(c__8413__auto___36451);
var G__36455 = (0);
seq__36340_36429 = G__36452;
chunk__36341_36430 = G__36453;
count__36342_36431 = G__36454;
i__36343_36432 = G__36455;
continue;
} else {
var vec__36347_36456 = cljs.core.first(seq__36340_36450__$1);
var k_36457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36347_36456,(0),null);
var v_36458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36347_36456,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_36457))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36457], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36458], 0));
}

var G__36459 = cljs.core.next(seq__36340_36450__$1);
var G__36460 = null;
var G__36461 = (0);
var G__36462 = (0);
seq__36340_36429 = G__36459;
chunk__36341_36430 = G__36460;
count__36342_36431 = G__36461;
i__36343_36432 = G__36462;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__36463 = seq__36330_36403;
var G__36464 = chunk__36331_36404;
var G__36465 = count__36332_36405;
var G__36466 = (i__36333_36406 + (1));
seq__36330_36403 = G__36463;
chunk__36331_36404 = G__36464;
count__36332_36405 = G__36465;
i__36333_36406 = G__36466;
continue;
} else {
var temp__6753__auto___36467 = cljs.core.seq(seq__36330_36403);
if(temp__6753__auto___36467){
var seq__36330_36468__$1 = temp__6753__auto___36467;
if(cljs.core.chunked_seq_QMARK_(seq__36330_36468__$1)){
var c__8413__auto___36469 = cljs.core.chunk_first(seq__36330_36468__$1);
var G__36470 = cljs.core.chunk_rest(seq__36330_36468__$1);
var G__36471 = c__8413__auto___36469;
var G__36472 = cljs.core.count(c__8413__auto___36469);
var G__36473 = (0);
seq__36330_36403 = G__36470;
chunk__36331_36404 = G__36471;
count__36332_36405 = G__36472;
i__36333_36406 = G__36473;
continue;
} else {
var map__36354_36474 = cljs.core.first(seq__36330_36468__$1);
var map__36354_36475__$1 = ((((!((map__36354_36474 == null)))?((((map__36354_36474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354_36474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36354_36474):map__36354_36474);
var prob_36476 = map__36354_36475__$1;
var path_36477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$path);
var pred_36478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$pred);
var val_36479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$val);
var reason_36480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$reason);
var via_36481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$via);
var in_36482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354_36475__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_36482)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_36482], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_36479], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_36481)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_36481)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_36477)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_36477], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_36478)], 0));

if(cljs.core.truth_(reason_36480)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_36480], 0));
} else {
}

var seq__36363_36489 = cljs.core.seq(prob_36476);
var chunk__36364_36490 = null;
var count__36365_36491 = (0);
var i__36366_36492 = (0);
while(true){
if((i__36366_36492 < count__36365_36491)){
var vec__36367_36493 = chunk__36364_36490.cljs$core$IIndexed$_nth$arity$2(null,i__36366_36492);
var k_36494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36367_36493,(0),null);
var v_36495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36367_36493,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_36494))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36494], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36495], 0));
}

var G__36502 = seq__36363_36489;
var G__36503 = chunk__36364_36490;
var G__36504 = count__36365_36491;
var G__36505 = (i__36366_36492 + (1));
seq__36363_36489 = G__36502;
chunk__36364_36490 = G__36503;
count__36365_36491 = G__36504;
i__36366_36492 = G__36505;
continue;
} else {
var temp__6753__auto___36506__$1 = cljs.core.seq(seq__36363_36489);
if(temp__6753__auto___36506__$1){
var seq__36363_36507__$1 = temp__6753__auto___36506__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36363_36507__$1)){
var c__8413__auto___36508 = cljs.core.chunk_first(seq__36363_36507__$1);
var G__36509 = cljs.core.chunk_rest(seq__36363_36507__$1);
var G__36510 = c__8413__auto___36508;
var G__36511 = cljs.core.count(c__8413__auto___36508);
var G__36512 = (0);
seq__36363_36489 = G__36509;
chunk__36364_36490 = G__36510;
count__36365_36491 = G__36511;
i__36366_36492 = G__36512;
continue;
} else {
var vec__36372_36516 = cljs.core.first(seq__36363_36507__$1);
var k_36517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372_36516,(0),null);
var v_36518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372_36516,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_36517))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36517], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36518], 0));
}

var G__36522 = cljs.core.next(seq__36363_36507__$1);
var G__36523 = null;
var G__36524 = (0);
var G__36525 = (0);
seq__36363_36489 = G__36522;
chunk__36364_36490 = G__36523;
count__36365_36491 = G__36524;
i__36366_36492 = G__36525;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__36526 = cljs.core.next(seq__36330_36468__$1);
var G__36527 = null;
var G__36528 = (0);
var G__36529 = (0);
seq__36330_36403 = G__36526;
chunk__36331_36404 = G__36527;
count__36332_36405 = G__36528;
i__36333_36406 = G__36529;
continue;
}
} else {
}
}
break;
}

var seq__36381_36530 = cljs.core.seq(ed);
var chunk__36382_36531 = null;
var count__36383_36532 = (0);
var i__36384_36533 = (0);
while(true){
if((i__36384_36533 < count__36383_36532)){
var vec__36385_36534 = chunk__36382_36531.cljs$core$IIndexed$_nth$arity$2(null,i__36384_36533);
var k_36535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385_36534,(0),null);
var v_36536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385_36534,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_36535))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36535], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36536], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__36545 = seq__36381_36530;
var G__36546 = chunk__36382_36531;
var G__36547 = count__36383_36532;
var G__36548 = (i__36384_36533 + (1));
seq__36381_36530 = G__36545;
chunk__36382_36531 = G__36546;
count__36383_36532 = G__36547;
i__36384_36533 = G__36548;
continue;
} else {
var temp__6753__auto___36550 = cljs.core.seq(seq__36381_36530);
if(temp__6753__auto___36550){
var seq__36381_36552__$1 = temp__6753__auto___36550;
if(cljs.core.chunked_seq_QMARK_(seq__36381_36552__$1)){
var c__8413__auto___36553 = cljs.core.chunk_first(seq__36381_36552__$1);
var G__36554 = cljs.core.chunk_rest(seq__36381_36552__$1);
var G__36555 = c__8413__auto___36553;
var G__36556 = cljs.core.count(c__8413__auto___36553);
var G__36557 = (0);
seq__36381_36530 = G__36554;
chunk__36382_36531 = G__36555;
count__36383_36532 = G__36556;
i__36384_36533 = G__36557;
continue;
} else {
var vec__36392_36560 = cljs.core.first(seq__36381_36552__$1);
var k_36561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36392_36560,(0),null);
var v_36562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36392_36560,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_36561))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_36561], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_36562], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__36571 = cljs.core.next(seq__36381_36552__$1);
var G__36572 = null;
var G__36573 = (0);
var G__36574 = (0);
seq__36381_36530 = G__36571;
chunk__36382_36531 = G__36572;
count__36383_36532 = G__36573;
i__36384_36533 = G__36574;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36324_36402;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36323_36401;
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
var _STAR_print_newline_STAR_36585_36587 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36586_36588 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36585_36587,_STAR_print_fn_STAR_36586_36588,sb__8594__auto__){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_36585_36587,_STAR_print_fn_STAR_36586_36588,sb__8594__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36586_36588;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36585_36587;
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
return (function (p1__36592_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__36592_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__36592_SHARP_));
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
var args36609 = [];
var len__8723__auto___36617 = arguments.length;
var i__8724__auto___36618 = (0);
while(true){
if((i__8724__auto___36618 < len__8723__auto___36617)){
args36609.push((arguments[i__8724__auto___36618]));

var G__36620 = (i__8724__auto___36618 + (1));
i__8724__auto___36618 = G__36620;
continue;
} else {
}
break;
}

var G__36613 = args36609.length;
switch (G__36613) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36609.length)].join('')));

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
var _STAR_print_newline_STAR_36671_36677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36672_36678 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36671_36677,_STAR_print_fn_STAR_36672_36678,sb__8594__auto__,ed,arg_spec,temp__6753__auto__,specs){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_36671_36677,_STAR_print_fn_STAR_36672_36678,sb__8594__auto__,ed,arg_spec,temp__6753__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36672_36678;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36671_36677;
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
var args36687 = [];
var len__8723__auto___36695 = arguments.length;
var i__8724__auto___36697 = (0);
while(true){
if((i__8724__auto___36697 < len__8723__auto___36695)){
args36687.push((arguments[i__8724__auto___36697]));

var G__36698 = (i__8724__auto___36697 + (1));
i__8724__auto___36697 = G__36698;
continue;
} else {
}
break;
}

var G__36691 = args36687.length;
switch (G__36691) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36687.length)].join('')));

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
var args36704 = [];
var len__8723__auto___36710 = arguments.length;
var i__8724__auto___36723 = (0);
while(true){
if((i__8724__auto___36723 < len__8723__auto___36710)){
args36704.push((arguments[i__8724__auto___36723]));

var G__36724 = (i__8724__auto___36723 + (1));
i__8724__auto___36723 = G__36724;
continue;
} else {
}
break;
}

var G__36709 = args36704.length;
switch (G__36709) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36704.length)].join('')));

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
var args36726 = [];
var len__8723__auto___36746 = arguments.length;
var i__8724__auto___36747 = (0);
while(true){
if((i__8724__auto___36747 < len__8723__auto___36746)){
args36726.push((arguments[i__8724__auto___36747]));

var G__36748 = (i__8724__auto___36747 + (1));
i__8724__auto___36747 = G__36748;
continue;
} else {
}
break;
}

var G__36729 = args36726.length;
switch (G__36729) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36726.length)].join('')));

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
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__36763){
var map__36838 = p__36763;
var map__36838__$1 = ((((!((map__36838 == null)))?((((map__36838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36838):map__36838);
var argm = map__36838__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36838__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36760_SHARP_){
var or__7502__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__36760_SHARP_) : k__GT_s.call(null,p1__36760_SHARP_));
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p1__36760_SHARP_;
}
});})(k__GT_s,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec36840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec36840 = (function (map__36838,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__36763,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta36841){
this.map__36838 = map__36838;
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
this.p__36763 = p__36763;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta36841 = meta36841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec36840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_36842,meta36841__$1){
var self__ = this;
var _36842__$1 = this;
return (new cljs.spec.t_cljs$spec36840(self__.map__36838,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.p__36763,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta36841__$1));
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_36842){
var self__ = this;
var _36842__$1 = this;
return self__.meta36841;
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__36853 = m;
var vec__36854 = G__36853;
var seq__36855 = cljs.core.seq(vec__36854);
var first__36856 = cljs.core.first(seq__36855);
var seq__36855__$1 = cljs.core.next(seq__36855);
var vec__36857 = first__36856;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36857,(1),null);
var ks = seq__36855__$1;
var keys = vec__36854;
var ret__$1 = ret;
var G__36853__$1 = G__36853;
while(true){
var ret__$2 = ret__$1;
var vec__36864 = G__36853__$1;
var seq__36865 = cljs.core.seq(vec__36864);
var first__36866 = cljs.core.first(seq__36865);
var seq__36865__$1 = cljs.core.next(seq__36865);
var vec__36867 = first__36866;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36867,(1),null);
var ks__$1 = seq__36865__$1;
var keys__$1 = vec__36864;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__6751__auto__)){
var s = temp__6751__auto__;
var cv = cljs.spec.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__36939 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__36940 = ks__$1;
ret__$1 = G__36939;
G__36853__$1 = G__36940;
continue;
}
} else {
var G__36944 = ret__$2;
var G__36945 = ks__$1;
ret__$1 = G__36944;
G__36853__$1 = G__36945;
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
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__36877 = cljs.core.keys(m);
var vec__36878 = G__36877;
var seq__36879 = cljs.core.seq(vec__36878);
var first__36880 = cljs.core.first(seq__36879);
var seq__36879__$1 = cljs.core.next(seq__36879);
var k = first__36880;
var ks = seq__36879__$1;
var keys = vec__36878;
var ret__$1 = ret;
var G__36877__$1 = G__36877;
while(true){
var ret__$2 = ret__$1;
var vec__36882 = G__36877__$1;
var seq__36883 = cljs.core.seq(vec__36882);
var first__36884 = cljs.core.first(seq__36883);
var seq__36883__$1 = cljs.core.next(seq__36883);
var k__$1 = first__36884;
var ks__$1 = seq__36883__$1;
var keys__$1 = vec__36882;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__36951 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__36952 = ks__$1;
ret__$1 = G__36951;
G__36877__$1 = G__36952;
continue;
} else {
var G__36953 = ret__$2;
var G__36954 = ks__$1;
ret__$1 = G__36953;
G__36877__$1 = G__36954;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__6753__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6753__auto__){
var probs = temp__6753__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__6753__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36761_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__36761_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__6753__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__36889){
var vec__36890 = p__36889;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(1),null);
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
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__36762_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__36762_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__36908 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__36908) : cljs.spec.map_spec_impl.call(null,G__36908));
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;


cljs.spec.t_cljs$spec36840.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__36912 = cljs.core.PersistentVector.EMPTY;
var G__36912__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__36912,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__36912);
var G__36912__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__36912__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__36912__$1);
var G__36912__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__36912__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__36912__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__36912__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__36912__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec36840.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$map__36838,cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$p__36763,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta36841], null);
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec36840.cljs$lang$type = true;

cljs.spec.t_cljs$spec36840.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec36840";

cljs.spec.t_cljs$spec36840.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec36840");
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec36840 = ((function (k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec36840(map__36838__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__36763__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta36841){
return (new cljs.spec.t_cljs$spec36840(map__36838__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__36763__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta36841));
});})(k__GT_s,keys__GT_specnames,id,map__36838,map__36838__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec36840(map__36838__$1,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__36763,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args36985 = [];
var len__8723__auto___37005 = arguments.length;
var i__8724__auto___37006 = (0);
while(true){
if((i__8724__auto___37006 < len__8723__auto___37005)){
args36985.push((arguments[i__8724__auto___37006]));

var G__37007 = (i__8724__auto___37006 + (1));
i__8724__auto___37006 = G__37007;
continue;
} else {
}
break;
}

var G__36988 = args36985.length;
switch (G__36988) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36985.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__36991 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__36991,gfn);
} else {
return G__36991;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__36993 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__36993,gfn);
} else {
return G__36993;
}
} else {
if(typeof cljs.spec.t_cljs$spec36994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec36994 = (function (form,pred,gfn,cpred_QMARK_,unc,meta36995){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta36995 = meta36995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec36994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36996,meta36995__$1){
var self__ = this;
var _36996__$1 = this;
return (new cljs.spec.t_cljs$spec36994(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta36995__$1));
});


cljs.spec.t_cljs$spec36994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36996){
var self__ = this;
var _36996__$1 = this;
return self__.meta36995;
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
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


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
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


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});


cljs.spec.t_cljs$spec36994.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec36994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta36995], null);
});

cljs.spec.t_cljs$spec36994.cljs$lang$type = true;

cljs.spec.t_cljs$spec36994.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec36994";

cljs.spec.t_cljs$spec36994.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec36994");
});

cljs.spec.__GT_t_cljs$spec36994 = (function cljs$spec$__GT_t_cljs$spec36994(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta36995){
return (new cljs.spec.t_cljs$spec36994(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta36995));
});

}

return (new cljs.spec.t_cljs$spec36994(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args37035 = [];
var len__8723__auto___37107 = arguments.length;
var i__8724__auto___37108 = (0);
while(true){
if((i__8724__auto___37108 < len__8723__auto___37107)){
args37035.push((arguments[i__8724__auto___37108]));

var G__37109 = (i__8724__auto___37108 + (1));
i__8724__auto___37108 = G__37109;
continue;
} else {
}
break;
}

var G__37043 = args37035.length;
switch (G__37043) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37035.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__37030_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__7490__auto__ = cljs.core._get_method(mm,cljs.core._dispatch_fn(mm).call(null,p1__37030_SHARP_));
if(cljs.core.truth_(and__7490__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__37030_SHARP_) : mm.call(null,p1__37030_SHARP_));
} else {
return and__7490__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__37031_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__37031_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__37032_SHARP_,p2__37033_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37032_SHARP_,retag,p2__37033_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec37044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37044 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta37045){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta37045 = meta37045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_37046,meta37045__$1){
var self__ = this;
var _37046__$1 = this;
return (new cljs.spec.t_cljs$spec37044(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta37045__$1));
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec37044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_37046){
var self__ = this;
var _37046__$1 = this;
return self__.meta37045;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
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


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__37091){
var vec__37092 = p__37091;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37092,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37092,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__37092,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__37092,k,f,___$1,id,predx,dval,tag){
return (function (p1__37034_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__37034_SHARP_,k) : self__.tag.call(null,p1__37034_SHARP_,k));
});})(rmap__$1,p,vec__37092,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__8436__auto__ = self__.form;
return cljs.core._conj((function (){var x__8436__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto____$1);
})(),x__8436__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__37092,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__37098){
var vec__37099 = p__37098;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099,(0),null);
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


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;


cljs.spec.t_cljs$spec37044.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
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

cljs.spec.t_cljs$spec37044.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta37045], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec37044.cljs$lang$type = true;

cljs.spec.t_cljs$spec37044.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37044";

cljs.spec.t_cljs$spec37044.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37044");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec37044 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec37044(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta37045){
return (new cljs.spec.t_cljs$spec37044(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta37045));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec37044(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args37145 = [];
var len__8723__auto___37192 = arguments.length;
var i__8724__auto___37193 = (0);
while(true){
if((i__8724__auto___37193 < len__8723__auto___37192)){
args37145.push((arguments[i__8724__auto___37193]));

var G__37194 = (i__8724__auto___37193 + (1));
i__8724__auto___37193 = G__37194;
continue;
} else {
}
break;
}

var G__37151 = args37145.length;
switch (G__37151) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37145.length)].join('')));

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
if(typeof cljs.spec.t_cljs$spec37165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37165 = (function (forms,preds,gfn,specs,cnt,meta37166){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta37166 = meta37166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_37167,meta37166__$1){
var self__ = this;
var _37167__$1 = this;
return (new cljs.spec.t_cljs$spec37165(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta37166__$1));
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_37167){
var self__ = this;
var _37167__$1 = this;
return self__.meta37166;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__37196 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__37197 = (i + (1));
ret = G__37196;
i = G__37197;
continue;
}
}
break;
}
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__37203 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__37204 = (i + (1));
ret = G__37203;
i = G__37204;
continue;
}
break;
}
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
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


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
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


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;


cljs.spec.t_cljs$spec37165.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec37165.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta37166], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec37165.cljs$lang$type = true;

cljs.spec.t_cljs$spec37165.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37165";

cljs.spec.t_cljs$spec37165.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37165");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec37165 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec37165(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta37166){
return (new cljs.spec.t_cljs$spec37165(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta37166));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec37165(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x37222 = v;

x37222.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;


x37222.cljs$core$IMapEntry$_key$arity$1 = ((function (x37222){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x37222))
;


x37222.cljs$core$IMapEntry$_val$arity$1 = ((function (x37222){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x37222))
;

return x37222;
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
var cform = (function (){var G__37274 = cljs.core.count(preds);
switch (G__37274) {
case (2):
return ((function (G__37274,id,kps,specs){
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
;})(G__37274,id,kps,specs))

break;
case (3):
return ((function (G__37274,id,kps,specs){
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
;})(G__37274,id,kps,specs))

break;
default:
return ((function (G__37274,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var G__37341 = (i + (1));
i = G__37341;
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
;})(G__37274,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec37281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37281 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta37282){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta37282 = meta37282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_37283,meta37282__$1){
var self__ = this;
var _37283__$1 = this;
return (new cljs.spec.t_cljs$spec37281(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta37282__$1));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_37283){
var self__ = this;
var _37283__$1 = this;
return self__.meta37282;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__37297){
var self__ = this;
var vec__37298 = p__37297;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
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


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
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


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;


cljs.spec.t_cljs$spec37281.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec37281.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta37282], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec37281.cljs$lang$type = true;

cljs.spec.t_cljs$spec37281.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37281";

cljs.spec.t_cljs$spec37281.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37281");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec37281 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec37281(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta37282){
return (new cljs.spec.t_cljs$spec37281(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta37282));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec37281(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__37428 = preds;
var vec__37430 = G__37428;
var seq__37431 = cljs.core.seq(vec__37430);
var first__37432 = cljs.core.first(seq__37431);
var seq__37431__$1 = cljs.core.next(seq__37431);
var pred = first__37432;
var preds__$1 = seq__37431__$1;
var G__37429 = forms;
var vec__37433 = G__37429;
var seq__37434 = cljs.core.seq(vec__37433);
var first__37435 = cljs.core.first(seq__37434);
var seq__37434__$1 = cljs.core.next(seq__37434);
var form = first__37435;
var forms__$1 = seq__37434__$1;
var ret__$1 = ret;
var G__37428__$1 = G__37428;
var G__37429__$1 = G__37429;
while(true){
var ret__$2 = ret__$1;
var vec__37448 = G__37428__$1;
var seq__37449 = cljs.core.seq(vec__37448);
var first__37450 = cljs.core.first(seq__37449);
var seq__37449__$1 = cljs.core.next(seq__37449);
var pred__$1 = first__37450;
var preds__$2 = seq__37449__$1;
var vec__37451 = G__37429__$1;
var seq__37452 = cljs.core.seq(vec__37451);
var first__37453 = cljs.core.first(seq__37452);
var seq__37452__$1 = cljs.core.next(seq__37452);
var form__$1 = first__37453;
var forms__$2 = seq__37452__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__37466 = nret;
var G__37467 = preds__$2;
var G__37468 = forms__$2;
ret__$1 = G__37466;
G__37428__$1 = G__37467;
G__37429__$1 = G__37468;
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
var G__37496 = forms;
var vec__37498 = G__37496;
var seq__37499 = cljs.core.seq(vec__37498);
var first__37500 = cljs.core.first(seq__37499);
var seq__37499__$1 = cljs.core.next(seq__37499);
var form = first__37500;
var forms__$1 = seq__37499__$1;
var G__37497 = preds;
var vec__37501 = G__37497;
var seq__37502 = cljs.core.seq(vec__37501);
var first__37503 = cljs.core.first(seq__37502);
var seq__37502__$1 = cljs.core.next(seq__37502);
var pred = first__37503;
var preds__$1 = seq__37502__$1;
var ret__$1 = ret;
var G__37496__$1 = G__37496;
var G__37497__$1 = G__37497;
while(true){
var ret__$2 = ret__$1;
var vec__37504 = G__37496__$1;
var seq__37505 = cljs.core.seq(vec__37504);
var first__37506 = cljs.core.first(seq__37505);
var seq__37505__$1 = cljs.core.next(seq__37505);
var form__$1 = first__37506;
var forms__$2 = seq__37505__$1;
var vec__37507 = G__37497__$1;
var seq__37508 = cljs.core.seq(vec__37507);
var first__37509 = cljs.core.first(seq__37508);
var seq__37508__$1 = cljs.core.next(seq__37508);
var pred__$1 = first__37509;
var preds__$2 = seq__37508__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__37520 = nret;
var G__37521 = forms__$2;
var G__37522 = preds__$2;
ret__$1 = G__37520;
G__37496__$1 = G__37521;
G__37497__$1 = G__37522;
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
var cform = (function (){var G__37590 = cljs.core.count(preds);
switch (G__37590) {
case (2):
return ((function (G__37590,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__37590,specs))

break;
case (3):
return ((function (G__37590,specs){
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
;})(G__37590,specs))

break;
default:
return ((function (G__37590,specs){
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
var G__37629 = nret;
var G__37630 = (i + (1));
ret = G__37629;
i = G__37630;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__37590,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec37591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37591 = (function (forms,preds,gfn,specs,cform,meta37592){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta37592 = meta37592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_37593,meta37592__$1){
var self__ = this;
var _37593__$1 = this;
return (new cljs.spec.t_cljs$spec37591(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta37592__$1));
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_37593){
var self__ = this;
var _37593__$1 = this;
return self__.meta37592;
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__37530_SHARP_,p2__37526_SHARP_){
return cljs.spec.unform(p2__37526_SHARP_,p1__37530_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
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


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;


cljs.spec.t_cljs$spec37591.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_and),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec37591.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta37592], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec37591.cljs$lang$type = true;

cljs.spec.t_cljs$spec37591.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37591";

cljs.spec.t_cljs$spec37591.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37591");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec37591 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec37591(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta37592){
return (new cljs.spec.t_cljs$spec37591(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta37592));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec37591(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof cljs.spec.t_cljs$spec37779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37779 = (function (forms,preds,gfn,meta37780){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta37780 = meta37780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37781,meta37780__$1){
var self__ = this;
var _37781__$1 = this;
return (new cljs.spec.t_cljs$spec37779(self__.forms,self__.preds,self__.gfn,meta37780__$1));
});


cljs.spec.t_cljs$spec37779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37781){
var self__ = this;
var _37781__$1 = this;
return self__.meta37780;
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__37753_SHARP_,p2__37754_SHARP_){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p1__37753_SHARP_,x,p2__37754_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__37755_SHARP_){
return cljs.spec.unform(p1__37755_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__37756_SHARP_,p2__37757_SHARP_){
return cljs.spec.explain_1(p1__37756_SHARP_,p2__37757_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__37758_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__37758_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__37759_SHARP_,p2__37760_SHARP_){
return cljs.spec.gensub(p1__37759_SHARP_,overrides,path,rmap,p2__37760_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});


cljs.spec.t_cljs$spec37779.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_merge),self__.forms)));
});

cljs.spec.t_cljs$spec37779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta37780], null);
});

cljs.spec.t_cljs$spec37779.cljs$lang$type = true;

cljs.spec.t_cljs$spec37779.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37779";

cljs.spec.t_cljs$spec37779.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37779");
});

cljs.spec.__GT_t_cljs$spec37779 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec37779(forms__$1,preds__$1,gfn__$1,meta37780){
return (new cljs.spec.t_cljs$spec37779(forms__$1,preds__$1,gfn__$1,meta37780));
});

}

return (new cljs.spec.t_cljs$spec37779(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args37819 = [];
var len__8723__auto___37900 = arguments.length;
var i__8724__auto___37901 = (0);
while(true){
if((i__8724__auto___37901 < len__8723__auto___37900)){
args37819.push((arguments[i__8724__auto___37901]));

var G__37903 = (i__8724__auto___37901 + (1));
i__8724__auto___37901 = G__37903;
continue;
} else {
}
break;
}

var G__37826 = args37819.length;
switch (G__37826) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37819.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__37828,gfn){
var map__37829 = p__37828;
var map__37829__$1 = ((((!((map__37829 == null)))?((((map__37829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37829):map__37829);
var opts = map__37829__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$max_DASH_count);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$cljs$spec_SLASH_kfn);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37829__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$conform_DASH_keys);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$distinct);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37829__$1,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$kind);
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.cst$kw$cljs$spec_SLASH_cpred);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__37810_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(spec) : cljs.core.deref.call(null,spec)),p1__37810_SHARP_);
});})(conform_into,spec,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__7502__auto__ = kfn;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return ((function (or__7502__auto__,conform_into,spec,check_QMARK_,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__7502__auto__,conform_into,spec,check_QMARK_,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__37841 = ((cljs.core.map_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null):((cljs.core.vector_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null):((cljs.core.list_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null):((cljs.core.set_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_seqable_QMARK_], null)
))));
var kindfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37841,(0),null);
var kindform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37841,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__37813_SHARP_){
return cljs.core.empty((function (){var or__7502__auto__ = conform_into;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p1__37813_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec37856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec37856 = (function (form,max_count,check_QMARK_,gfn,gen_max,vec__37841,pred,cpred,p__37828,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,map__37829,conform_into,meta37857){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.vec__37841 = vec__37841;
this.pred = pred;
this.cpred = cpred;
this.p__37828 = p__37828;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
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
this.map__37829 = map__37829;
this.conform_into = conform_into;
this.meta37857 = meta37857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec37856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_37858,meta37857__$1){
var self__ = this;
var _37858__$1 = this;
return (new cljs.spec.t_cljs$spec37856(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.vec__37841,self__.pred,self__.cpred,self__.p__37828,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.map__37829,self__.conform_into,meta37857__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_37858){
var self__ = this;
var _37858__$1 = this;
return self__.meta37857;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.spec) : cljs.core.deref.call(null,self__.spec));
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__37861 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__37867 = cljs.core.seq(x);
var vec__37868 = G__37867;
var seq__37869 = cljs.core.seq(vec__37868);
var first__37870 = cljs.core.first(seq__37869);
var seq__37869__$1 = cljs.core.next(seq__37869);
var v = first__37870;
var vs = seq__37869__$1;
var vseq = vec__37868;
var ret__$1 = ret;
var i__$1 = i;
var G__37867__$1 = G__37867;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__37872 = G__37867__$1;
var seq__37873 = cljs.core.seq(vec__37872);
var first__37874 = cljs.core.first(seq__37873);
var seq__37873__$1 = cljs.core.next(seq__37873);
var v__$1 = first__37874;
var vs__$1 = seq__37873__$1;
var vseq__$1 = vec__37872;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__38024 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__38025 = (i__$2 + (1));
var G__38026 = vs__$1;
ret__$1 = G__38024;
i__$1 = G__38025;
G__37867__$1 = G__38026;
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
var G__38027 = (i + step);
i = G__38027;
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
var G__37884 = cljs.core.seq(x);
var vec__37885 = G__37884;
var seq__37886 = cljs.core.seq(vec__37885);
var first__37887 = cljs.core.first(seq__37886);
var seq__37886__$1 = cljs.core.next(seq__37886);
var v = first__37887;
var vs = seq__37886__$1;
var vseq = vec__37885;
var i__$1 = i;
var G__37884__$1 = G__37884;
while(true){
var i__$2 = i__$1;
var vec__37888 = G__37884__$1;
var seq__37889 = cljs.core.seq(vec__37888);
var first__37890 = cljs.core.first(seq__37889);
var seq__37889__$1 = cljs.core.next(seq__37889);
var v__$1 = first__37890;
var vs__$1 = seq__37889__$1;
var vseq__$1 = vec__37888;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__38042 = (i__$2 + (1));
var G__38043 = vs__$1;
i__$1 = G__38042;
G__37884__$1 = G__38043;
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
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__7502__auto__ = cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__7502__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__7502__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__37815_SHARP_){
if(cljs.core.empty_QMARK_(p1__37815_SHARP_)){
return p1__37815_SHARP_;
} else {
return cljs.core.empty(p1__37815_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__37816_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__37816_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__37816_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
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
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;


cljs.spec.t_cljs$spec37856.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_every),(function (){var x__8436__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec37856.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$vec__37841,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$p__37828,cljs.core.cst$sym$kindform,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$distinct,cljs.core.cst$sym$kindfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$map__37829,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta37857], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec37856.cljs$lang$type = true;

cljs.spec.t_cljs$spec37856.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec37856";

cljs.spec.t_cljs$spec37856.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec37856");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec37856 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec37856(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,vec__37841__$1,pred__$1,cpred__$1,p__37828__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__37829__$2,conform_into__$1,meta37857){
return (new cljs.spec.t_cljs$spec37856(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,vec__37841__$1,pred__$1,cpred__$1,p__37828__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__37829__$2,conform_into__$1,meta37857));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__37841,kindfn,kindform,cfns,map__37829,map__37829__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec37856(form,max_count,check_QMARK_,gfn,gen_max,vec__37841,pred,cpred,p__37828,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,map__37829__$1,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__38147){
var map__38150 = p__38147;
var map__38150__$1 = ((((!((map__38150 == null)))?((((map__38150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38150):map__38150);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__38155){
var map__38179 = p__38155;
var map__38179__$1 = ((((!((map__38179 == null)))?((((map__38179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38179):map__38179);
var vec__38180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,cljs.core.cst$kw$ps);
var seq__38181 = cljs.core.seq(vec__38180);
var first__38182 = cljs.core.first(seq__38181);
var seq__38181__$1 = cljs.core.next(seq__38181);
var p1 = first__38182;
var pr = seq__38181__$1;
var ps = vec__38180;
var vec__38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,cljs.core.cst$kw$ks);
var seq__38184 = cljs.core.seq(vec__38183);
var first__38185 = cljs.core.first(seq__38184);
var seq__38184__$1 = cljs.core.next(seq__38184);
var k1 = first__38185;
var kr = seq__38184__$1;
var ks = vec__38183;
var vec__38186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,cljs.core.cst$kw$forms);
var seq__38187 = cljs.core.seq(vec__38186);
var first__38188 = cljs.core.first(seq__38187);
var seq__38187__$1 = cljs.core.next(seq__38187);
var f1 = first__38188;
var fr = seq__38187__$1;
var forms = vec__38186;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__38193 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__38193) : cljs.spec.pcat_STAR_.call(null,G__38193));
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
var len__8723__auto___38211 = arguments.length;
var i__8724__auto___38212 = (0);
while(true){
if((i__8724__auto___38212 < len__8723__auto___38211)){
args__8730__auto__.push((arguments[i__8724__auto___38212]));

var G__38214 = (i__8724__auto___38212 + (1));
i__8724__auto___38212 = G__38214;
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

cljs.spec.pcat.cljs$lang$applyTo = (function (seq38209){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38209));
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
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38255_SHARP_){
var G__38274 = cljs.core.first(p1__38255_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38274) : f.call(null,G__38274));
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
return (function (p1__38257_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38257_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__38314 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__38317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(0),null);
var seq__38318 = cljs.core.seq(vec__38317);
var first__38319 = cljs.core.first(seq__38318);
var seq__38318__$1 = cljs.core.next(seq__38318);
var p1 = first__38319;
var pr = seq__38318__$1;
var ps__$1 = vec__38317;
var vec__38320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38320,(0),null);
var ks__$1 = vec__38320;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(2),null);
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
var len__8723__auto___38348 = arguments.length;
var i__8724__auto___38349 = (0);
while(true){
if((i__8724__auto___38349 < len__8723__auto___38348)){
args__8730__auto__.push((arguments[i__8724__auto___38349]));

var G__38351 = (i__8724__auto___38349 + (1));
i__8724__auto___38349 = G__38351;
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

cljs.spec.alts.cljs$lang$applyTo = (function (seq38340){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38340));
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
var map__38380 = cljs.spec.reg_resolve_BANG_(p);
var map__38380__$1 = ((((!((map__38380 == null)))?((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38380):map__38380);
var p__$1 = map__38380__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,cljs.core.cst$kw$forms);
var G__38384 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38384)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38384)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38384)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38384)){
var or__7502__auto__ = (p1 === p2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
return (cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38384)){
return cljs.core.every_QMARK_(cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38384)){
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
var map__38421 = cljs.spec.reg_resolve_BANG_(p);
var map__38421__$1 = ((((!((map__38421 == null)))?((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38421):map__38421);
var p__$1 = map__38421__$1;
var vec__38422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$ps);
var seq__38423 = cljs.core.seq(vec__38422);
var first__38424 = cljs.core.first(seq__38423);
var seq__38423__$1 = cljs.core.next(seq__38423);
var p0 = first__38424;
var pr = seq__38423__$1;
var ps = vec__38422;
var vec__38425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38425,(0),null);
var ks = vec__38425;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,cljs.core.cst$kw$forms);
var G__38434 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38434)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38434)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38434)){
var pret = (cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38434)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38434)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38434)){
var vec__38435 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__38438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38438,(0),null);
var vec__38441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38441,(0),null);
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
var map__38482 = cljs.spec.reg_resolve_BANG_(p);
var map__38482__$1 = ((((!((map__38482 == null)))?((((map__38482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38482):map__38482);
var p__$1 = map__38482__$1;
var vec__38483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$ps);
var seq__38484 = cljs.core.seq(vec__38483);
var first__38485 = cljs.core.first(seq__38484);
var seq__38484__$1 = cljs.core.next(seq__38484);
var p0 = first__38485;
var pr = seq__38484__$1;
var ps = vec__38483;
var vec__38486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(0),null);
var ks = vec__38486;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__38492 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38492)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38492)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38492)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__38455_SHARP_,p2__38454_SHARP_){
return cljs.spec.unform(p2__38454_SHARP_,p1__38455_SHARP_);
});})(G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38492)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__38457_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__38457_SHARP_) : cljs.spec.op_unform.call(null,p1,p1__38457_SHARP_));
});})(G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38492)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__38458_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__38458_SHARP_) : cljs.spec.op_unform.call(null,p0,p1__38458_SHARP_));
});})(G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__38494 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__38495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__38494,G__38495) : cljs.spec.op_unform.call(null,G__38494,G__38495));
} else {
return null;
}
});})(G__38492,map__38482,map__38482__$1,p__$1,vec__38483,seq__38484,first__38485,seq__38484__$1,p0,pr,ps,vec__38486,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38492)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__38497 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38497,(1),null);
var G__38502 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__38503 = v;
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__38502,G__38503) : cljs.spec.op_unform.call(null,G__38502,G__38503));
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
var map__38559 = cljs.spec.reg_resolve_BANG_(p);
var map__38559__$1 = ((((!((map__38559 == null)))?((((map__38559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38559):map__38559);
var p__$1 = map__38559__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__38559,map__38559__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__38559,map__38559__$1,p__$1,op,ps,splice))
;
var G__38563 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38563)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38563)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38563)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38563)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38563)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38563)){
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
var map__38600 = cljs.spec.reg_resolve_BANG_(p);
var map__38600__$1 = ((((!((map__38600 == null)))?((((map__38600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38600):map__38600);
var p__$1 = map__38600__$1;
var vec__38601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$ps);
var seq__38602 = cljs.core.seq(vec__38601);
var first__38603 = cljs.core.first(seq__38602);
var seq__38602__$1 = cljs.core.next(seq__38602);
var p0 = first__38603;
var pr = seq__38602__$1;
var ps = vec__38601;
var vec__38604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$ks);
var seq__38605 = cljs.core.seq(vec__38604);
var first__38606 = cljs.core.first(seq__38605);
var seq__38605__$1 = cljs.core.next(seq__38605);
var k0 = first__38606;
var kr = seq__38605__$1;
var ks = vec__38604;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__38608 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38608)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38608)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38608)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38608)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?(function (){var G__38609 = cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null));
var G__38610 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__38609,G__38610) : cljs.spec.deriv.call(null,G__38609,G__38610));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38608)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__38608,map__38600,map__38600__$1,p__$1,vec__38601,seq__38602,first__38603,seq__38602__$1,p0,pr,ps,vec__38604,seq__38605,first__38606,seq__38605__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__38578_SHARP_){
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1__38578_SHARP_,x) : cljs.spec.deriv.call(null,p1__38578_SHARP_,x));
});})(G__38608,map__38600,map__38600__$1,p__$1,vec__38601,seq__38602,first__38603,seq__38602__$1,p0,pr,ps,vec__38604,seq__38605,first__38606,seq__38605__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38608)){
return cljs.spec.alt2(cljs.spec.rep_STAR_((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?(function (){var G__38611 = cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms);
var G__38612 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__38611,G__38612) : cljs.spec.deriv.call(null,G__38611,G__38612));
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
var map__38639 = cljs.spec.reg_resolve_BANG_(p);
var map__38639__$1 = ((((!((map__38639 == null)))?((((map__38639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38639):map__38639);
var p__$1 = map__38639__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__38642 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38642)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38642)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38642)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,(cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38642)){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38642)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__8436__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38642)){
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
var vec__38722 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38722,(0),null);
var input__$1 = vec__38722;
var map__38725 = cljs.spec.reg_resolve_BANG_(p);
var map__38725__$1 = ((((!((map__38725 == null)))?((((map__38725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38725):map__38725);
var p__$1 = map__38725__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38725__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__6751__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__38735 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38735)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38735)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38735)){
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
var G__38740 = cljs.spec.op_describe(p1);
var G__38741 = p1;
var G__38742 = path;
var G__38743 = via__$1;
var G__38744 = in$;
var G__38745 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__38740,G__38741,G__38742,G__38743,G__38744,G__38745) : cljs.spec.op_explain.call(null,G__38740,G__38741,G__38742,G__38743,G__38744,G__38745));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38735)){
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
var vec__38754 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__38735,vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__38757){
var vec__38758 = p__38757;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38758,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__38735,vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38754,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38754,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38754,(2),null);
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38735)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__38735,vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__38765 = (function (){var or__7502__auto__ = form__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
var G__38766 = pred;
var G__38767 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38768 = via__$1;
var G__38769 = in$;
var G__38770 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__38765,G__38766,G__38767,G__38768,G__38769,G__38770) : cljs.spec.op_explain.call(null,G__38765,G__38766,G__38767,G__38768,G__38769,G__38770));
});})(G__38735,vec__38722,x,input__$1,map__38725,map__38725__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38735)){
var G__38771 = (((p1 === p2))?forms:cljs.spec.op_describe(p1));
var G__38772 = p1;
var G__38773 = path;
var G__38774 = via__$1;
var G__38775 = in$;
var G__38776 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__38771,G__38772,G__38773,G__38774,G__38775,G__38776) : cljs.spec.op_explain.call(null,G__38771,G__38772,G__38773,G__38774,G__38775,G__38776));
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
var map__38828 = cljs.spec.reg_resolve_BANG_(p);
var map__38828__$1 = ((((!((map__38828 == null)))?((((map__38828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38828):map__38828);
var p__$1 = map__38828__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$p1);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$id);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38828__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
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
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
var G__38830 = p__$2;
var G__38831 = overrides;
var G__38832 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38833 = rmap__$1;
var G__38834 = (function (){var or__7502__auto__ = f__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__38830,G__38831,G__38832,G__38833,G__38834) : cljs.spec.re_gen.call(null,G__38830,G__38831,G__38832,G__38833,G__38834));
});})(map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
var G__38835 = p__$2;
var G__38836 = overrides;
var G__38837 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__38838 = rmap__$1;
var G__38839 = (function (){var or__7502__auto__ = f__$1;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__38835,G__38836,G__38837,G__38838,G__38839) : cljs.spec.re_gen.call(null,G__38835,G__38836,G__38837,G__38838,G__38839));
}
}
});})(map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
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
});})(map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__7502__auto__ = (function (){var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
var G__38841 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__38841)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38841)){
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
var G__38842 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__38842)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38842)){
var temp__6753__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__38842)){
var G__38843 = p1;
var G__38844 = overrides;
var G__38845 = path;
var G__38846 = rmap__$1;
var G__38847 = cljs.spec.op_describe(p1);
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__38843,G__38844,G__38845,G__38846,G__38847) : cljs.spec.re_gen.call(null,G__38843,G__38844,G__38845,G__38846,G__38847));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__38842)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__38842)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__38842)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__6753__auto__ = (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6753__auto__,G__38842,or__7502__auto____$1,or__7502__auto__,map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__38797_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__38797_SHARP_);
});})(g,temp__6753__auto__,G__38842,or__7502__auto____$1,or__7502__auto__,map__38828,map__38828__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
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
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__38873){
while(true){
var vec__38877 = p__38873;
var seq__38878 = cljs.core.seq(vec__38877);
var first__38879 = cljs.core.first(seq__38878);
var seq__38878__$1 = cljs.core.next(seq__38878);
var x = first__38879;
var xs = seq__38878__$1;
var data = vec__38877;
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
var G__38883 = dp;
var G__38884 = xs;
p = G__38883;
p__38873 = G__38884;
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
var G__38909 = input;
var vec__38910 = G__38909;
var seq__38911 = cljs.core.seq(vec__38910);
var first__38912 = cljs.core.first(seq__38911);
var seq__38911__$1 = cljs.core.next(seq__38911);
var x = first__38912;
var xs = seq__38911__$1;
var data = vec__38910;
var i = (0);
var p__$1 = p;
var G__38909__$1 = G__38909;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__38913 = G__38909__$1;
var seq__38914 = cljs.core.seq(vec__38913);
var first__38915 = cljs.core.first(seq__38914);
var seq__38914__$1 = cljs.core.next(seq__38914);
var x__$1 = first__38915;
var xs__$1 = seq__38914__$1;
var data__$1 = vec__38913;
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
var G__38927 = dp;
var G__38928 = xs__$1;
var G__38929 = (i__$2 + (1));
p__$1 = G__38927;
G__38909__$1 = G__38928;
i__$1 = G__38929;
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
if(typeof cljs.spec.t_cljs$spec38951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec38951 = (function (re,gfn,meta38952){
this.re = re;
this.gfn = gfn;
this.meta38952 = meta38952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec38951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38953,meta38952__$1){
var self__ = this;
var _38953__$1 = this;
return (new cljs.spec.t_cljs$spec38951(self__.re,self__.gfn,meta38952__$1));
});


cljs.spec.t_cljs$spec38951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38953){
var self__ = this;
var _38953__$1 = this;
return self__.meta38952;
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1));
});


cljs.spec.t_cljs$spec38951.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec38951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta38952], null);
});

cljs.spec.t_cljs$spec38951.cljs$lang$type = true;

cljs.spec.t_cljs$spec38951.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec38951";

cljs.spec.t_cljs$spec38951.cljs$lang$ctorPrWriter = (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec38951");
});

cljs.spec.__GT_t_cljs$spec38951 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec38951(re__$1,gfn__$1,meta38952){
return (new cljs.spec.t_cljs$spec38951(re__$1,gfn__$1,meta38952));
});

}

return (new cljs.spec.t_cljs$spec38951(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38964_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__38964_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__6751__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6751__auto__)){
var vec__38968 = temp__6751__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38968,(0),null);
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
if(typeof cljs.spec.t_cljs$spec38984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec38984 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta38985){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta38985 = meta38985;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec38984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_38986,meta38985__$1){
var self__ = this;
var _38986__$1 = this;
return (new cljs.spec.t_cljs$spec38984(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta38985__$1));
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_38986){
var self__ = this;
var _38986__$1 = this;
return self__.meta38985;
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
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


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e38992){if((e38992 instanceof Error)){
var t = e38992;
return t;
} else {
throw e38992;

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


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__39009__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8594__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38996_39010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38997_39011 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38996_39010,_STAR_print_fn_STAR_38997_39011,sb__8594__auto__,___$3,specs){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_38996_39010,_STAR_print_fn_STAR_38997_39011,sb__8594__auto__,___$3,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38997_39011;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38996_39010;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__39009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39012__i = 0, G__39012__a = new Array(arguments.length -  0);
while (G__39012__i < G__39012__a.length) {G__39012__a[G__39012__i] = arguments[G__39012__i + 0]; ++G__39012__i;}
  args = new cljs.core.IndexedSeq(G__39012__a,0);
} 
return G__39009__delegate.call(this,args);};
G__39009.cljs$lang$maxFixedArity = 0;
G__39009.cljs$lang$applyTo = (function (arglist__39013){
var args = cljs.core.seq(arglist__39013);
return G__39009__delegate(args);
});
G__39009.cljs$core$IFn$_invoke$arity$variadic = G__39009__delegate;
return G__39009;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;


cljs.spec.t_cljs$spec38984.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
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

cljs.spec.t_cljs$spec38984.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta38985], null);
});})(specs))
;

cljs.spec.t_cljs$spec38984.cljs$lang$type = true;

cljs.spec.t_cljs$spec38984.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec38984";

cljs.spec.t_cljs$spec38984.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec38984");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec38984 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec38984(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta38985){
return (new cljs.spec.t_cljs$spec38984(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta38985));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec38984(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__39014_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__39014_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__39014_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__39015_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__39015_SHARP_))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__39014_SHARP_], null),cljs.core.list(cljs.core.cst$sym$zipmap,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__39014_SHARP_),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__39014_SHARP_))),(function (p1__39014_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__39014_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__39014_SHARP_));
}),null,true,(function (p1__39015_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39021){
var vec__39022 = p__39021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,k,cljs.core.cst$kw$cljs$spec_SLASH_v,v], null);
}),p1__39015_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.t_cljs$spec39039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39039 = (function (spec,meta39040){
this.spec = spec;
this.meta39040 = meta39040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec39039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_39041,meta39040__$1){
var self__ = this;
var _39041__$1 = this;
return (new cljs.spec.t_cljs$spec39039(self__.spec,meta39040__$1));
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_39041){
var self__ = this;
var _39041__$1 = this;
return self__.meta39040;
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
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


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_(self__.spec,x);
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__39045 = cljs.spec.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1(G__39045) : cljs.spec.nonconforming.call(null,G__39045));
});})(spec__$1))
;


cljs.spec.t_cljs$spec39039.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nonconforming),(function (){var x__8436__auto__ = cljs.spec.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec39039.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta39040], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec39039.cljs$lang$type = true;

cljs.spec.t_cljs$spec39039.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39039";

cljs.spec.t_cljs$spec39039.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec39039");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec39039 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec39039(spec__$2,meta39040){
return (new cljs.spec.t_cljs$spec39039(spec__$2,meta39040));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec39039(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.t_cljs$spec39079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec39079 = (function (form,pred,gfn,spec,meta39080){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta39080 = meta39080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.t_cljs$spec39079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_39081,meta39080__$1){
var self__ = this;
var _39081__$1 = this;
return (new cljs.spec.t_cljs$spec39079(self__.form,self__.pred,self__.gfn,self__.spec,meta39080__$1));
});})(spec))
;


cljs.spec.t_cljs$spec39079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_39081){
var self__ = this;
var _39081__$1 = this;
return self__.meta39080;
});})(spec))
;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
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


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
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


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
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


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
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


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;


cljs.spec.t_cljs$spec39079.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nilable),(function (){var x__8436__auto__ = cljs.spec.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8436__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec39079.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta39080], null);
});})(spec))
;

cljs.spec.t_cljs$spec39079.cljs$lang$type = true;

cljs.spec.t_cljs$spec39079.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec39079";

cljs.spec.t_cljs$spec39079.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8159__auto__,writer__8160__auto__,opt__8161__auto__){
return cljs.core._write(writer__8160__auto__,"cljs.spec/t_cljs$spec39079");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec39079 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec39079(form__$1,pred__$1,gfn__$1,spec__$1,meta39080){
return (new cljs.spec.t_cljs$spec39079(form__$1,pred__$1,gfn__$1,spec__$1,meta39080));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec39079(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args39105 = [];
var len__8723__auto___39112 = arguments.length;
var i__8724__auto___39113 = (0);
while(true){
if((i__8724__auto___39113 < len__8723__auto___39112)){
args39105.push((arguments[i__8724__auto___39113]));

var G__39114 = (i__8724__auto___39113 + (1));
i__8724__auto___39113 = G__39114;
continue;
} else {
}
break;
}

var G__39111 = args39105.length;
switch (G__39111) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39105.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39104_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__39104_SHARP_,cljs.spec.conform(spec,p1__39104_SHARP_)],null));
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
var _STAR_print_newline_STAR_39141_39147 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39142_39148 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39141_39147,_STAR_print_fn_STAR_39142_39148,sb__8594__auto__,ed){
return (function (x__8595__auto__){
return sb__8594__auto__.append(x__8595__auto__);
});})(_STAR_print_newline_STAR_39141_39147,_STAR_print_fn_STAR_39142_39148,sb__8594__auto__,ed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39142_39148;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39141_39147;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8594__auto__)].join('');
})())].join('')));
}
});

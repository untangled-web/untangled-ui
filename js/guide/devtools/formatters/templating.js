// Compiled by ClojureScript 1.9.473 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x711828_711829 = value;

x711828_711829.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x711836_711839 = value;

x711836_711839.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x711844_711845 = value;

x711844_711845.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27638__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27638__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711853 = arguments.length;
var i__28872__auto___711854 = (0);
while(true){
if((i__28872__auto___711854 < len__28871__auto___711853)){
args__28878__auto__.push((arguments[i__28872__auto___711854]));

var G__711855 = (i__28872__auto___711854 + (1));
i__28872__auto___711854 = G__711855;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((0) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28879__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__711849_711856 = cljs.core.seq.call(null,items);
var chunk__711850_711857 = null;
var count__711851_711858 = (0);
var i__711852_711859 = (0);
while(true){
if((i__711852_711859 < count__711851_711858)){
var item_711860 = cljs.core._nth.call(null,chunk__711850_711857,i__711852_711859);
if(!((item_711860 == null))){
if(cljs.core.coll_QMARK_.call(null,item_711860)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_711860)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_711860));
}
} else {
}

var G__711861 = seq__711849_711856;
var G__711862 = chunk__711850_711857;
var G__711863 = count__711851_711858;
var G__711864 = (i__711852_711859 + (1));
seq__711849_711856 = G__711861;
chunk__711850_711857 = G__711862;
count__711851_711858 = G__711863;
i__711852_711859 = G__711864;
continue;
} else {
var temp__6753__auto___711865 = cljs.core.seq.call(null,seq__711849_711856);
if(temp__6753__auto___711865){
var seq__711849_711866__$1 = temp__6753__auto___711865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__711849_711866__$1)){
var c__28561__auto___711867 = cljs.core.chunk_first.call(null,seq__711849_711866__$1);
var G__711868 = cljs.core.chunk_rest.call(null,seq__711849_711866__$1);
var G__711869 = c__28561__auto___711867;
var G__711870 = cljs.core.count.call(null,c__28561__auto___711867);
var G__711871 = (0);
seq__711849_711856 = G__711868;
chunk__711850_711857 = G__711869;
count__711851_711858 = G__711870;
i__711852_711859 = G__711871;
continue;
} else {
var item_711872 = cljs.core.first.call(null,seq__711849_711866__$1);
if(!((item_711872 == null))){
if(cljs.core.coll_QMARK_.call(null,item_711872)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_711872)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_711872));
}
} else {
}

var G__711873 = cljs.core.next.call(null,seq__711849_711866__$1);
var G__711874 = null;
var G__711875 = (0);
var G__711876 = (0);
seq__711849_711856 = G__711873;
chunk__711850_711857 = G__711874;
count__711851_711858 = G__711875;
i__711852_711859 = G__711876;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq711848){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq711848));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711885 = arguments.length;
var i__28872__auto___711886 = (0);
while(true){
if((i__28872__auto___711886 < len__28871__auto___711885)){
args__28878__auto__.push((arguments[i__28872__auto___711886]));

var G__711887 = (i__28872__auto___711886 + (1));
i__28872__auto___711886 = G__711887;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__711881_711888 = cljs.core.seq.call(null,children);
var chunk__711882_711889 = null;
var count__711883_711890 = (0);
var i__711884_711891 = (0);
while(true){
if((i__711884_711891 < count__711883_711890)){
var child_711892 = cljs.core._nth.call(null,chunk__711882_711889,i__711884_711891);
if(!((child_711892 == null))){
if(cljs.core.coll_QMARK_.call(null,child_711892)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_711892))));
} else {
var temp__6751__auto___711893 = devtools.formatters.helpers.pref.call(null,child_711892);
if(cljs.core.truth_(temp__6751__auto___711893)){
var child_value_711894 = temp__6751__auto___711893;
template.push(child_value_711894);
} else {
}
}
} else {
}

var G__711895 = seq__711881_711888;
var G__711896 = chunk__711882_711889;
var G__711897 = count__711883_711890;
var G__711898 = (i__711884_711891 + (1));
seq__711881_711888 = G__711895;
chunk__711882_711889 = G__711896;
count__711883_711890 = G__711897;
i__711884_711891 = G__711898;
continue;
} else {
var temp__6753__auto___711899 = cljs.core.seq.call(null,seq__711881_711888);
if(temp__6753__auto___711899){
var seq__711881_711900__$1 = temp__6753__auto___711899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__711881_711900__$1)){
var c__28561__auto___711901 = cljs.core.chunk_first.call(null,seq__711881_711900__$1);
var G__711902 = cljs.core.chunk_rest.call(null,seq__711881_711900__$1);
var G__711903 = c__28561__auto___711901;
var G__711904 = cljs.core.count.call(null,c__28561__auto___711901);
var G__711905 = (0);
seq__711881_711888 = G__711902;
chunk__711882_711889 = G__711903;
count__711883_711890 = G__711904;
i__711884_711891 = G__711905;
continue;
} else {
var child_711906 = cljs.core.first.call(null,seq__711881_711900__$1);
if(!((child_711906 == null))){
if(cljs.core.coll_QMARK_.call(null,child_711906)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_711906))));
} else {
var temp__6751__auto___711908 = devtools.formatters.helpers.pref.call(null,child_711906);
if(cljs.core.truth_(temp__6751__auto___711908)){
var child_value_711912 = temp__6751__auto___711908;
template.push(child_value_711912);
} else {
}
}
} else {
}

var G__711915 = cljs.core.next.call(null,seq__711881_711900__$1);
var G__711916 = null;
var G__711917 = (0);
var G__711918 = (0);
seq__711881_711888 = G__711915;
chunk__711882_711889 = G__711916;
count__711883_711890 = G__711917;
i__711884_711891 = G__711918;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq711878){
var G__711879 = cljs.core.first.call(null,seq711878);
var seq711878__$1 = cljs.core.next.call(null,seq711878);
var G__711880 = cljs.core.first.call(null,seq711878__$1);
var seq711878__$2 = cljs.core.next.call(null,seq711878__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__711879,G__711880,seq711878__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711931 = arguments.length;
var i__28872__auto___711932 = (0);
while(true){
if((i__28872__auto___711932 < len__28871__auto___711931)){
args__28878__auto__.push((arguments[i__28872__auto___711932]));

var G__711933 = (i__28872__auto___711932 + (1));
i__28872__auto___711932 = G__711933;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq711929){
var G__711930 = cljs.core.first.call(null,seq711929);
var seq711929__$1 = cljs.core.next.call(null,seq711929);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__711930,seq711929__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711936 = arguments.length;
var i__28872__auto___711937 = (0);
while(true){
if((i__28872__auto___711937 < len__28871__auto___711936)){
args__28878__auto__.push((arguments[i__28872__auto___711937]));

var G__711941 = (i__28872__auto___711937 + (1));
i__28872__auto___711937 = G__711941;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq711934){
var G__711935 = cljs.core.first.call(null,seq711934);
var seq711934__$1 = cljs.core.next.call(null,seq711934);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__711935,seq711934__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args711945 = [];
var len__28871__auto___711950 = arguments.length;
var i__28872__auto___711951 = (0);
while(true){
if((i__28872__auto___711951 < len__28871__auto___711950)){
args711945.push((arguments[i__28872__auto___711951]));

var G__711952 = (i__28872__auto___711951 + (1));
i__28872__auto___711951 = G__711952;
continue;
} else {
}
break;
}

var G__711947 = args711945.length;
switch (G__711947) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args711945.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj711949 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27650__auto__ = start_index;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return (0);
}
})()};
return obj711949;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28878__auto__ = [];
var len__28871__auto___711966 = arguments.length;
var i__28872__auto___711967 = (0);
while(true){
if((i__28872__auto___711967 < len__28871__auto___711966)){
args__28878__auto__.push((arguments[i__28872__auto___711967]));

var G__711968 = (i__28872__auto___711967 + (1));
i__28872__auto___711967 = G__711968;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((1) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28879__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__711962){
var vec__711963 = p__711962;
var state_override_fn = cljs.core.nth.call(null,vec__711963,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq711960){
var G__711961 = cljs.core.first.call(null,seq711960);
var seq711960__$1 = cljs.core.next.call(null,seq711960);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__711961,seq711960__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__28742__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_711972_711975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_711973_711976 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_711972_711975,_STAR_print_fn_STAR_711973_711976,sb__28742__auto__){
return (function (x__28743__auto__){
return sb__28742__auto__.append(x__28743__auto__);
});})(_STAR_print_newline_STAR_711972_711975,_STAR_print_fn_STAR_711973_711976,sb__28742__auto__))
;

try{var _STAR_print_level_STAR_711974_711977 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_711974_711977;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_711973_711976;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_711972_711975;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28742__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_711979 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_711979;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__711981 = name;
switch (G__711981) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__711986 = tag;
var html_tag = cljs.core.nth.call(null,vec__711986,(0),null);
var style = cljs.core.nth.call(null,vec__711986,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_711990 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_711990;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_711993 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_711994 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_711994;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_711993;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__711995 = initial_value;
var G__711996 = value.call(null);
initial_value = G__711995;
value = G__711996;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__711997 = initial_value;
var G__711998 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__711997;
value = G__711998;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__711999 = initial_value;
var G__712000 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__711999;
value = G__712000;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1489703359404
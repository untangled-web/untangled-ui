// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27650__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27650__auto__){
return or__27650__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27650__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__706621_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__706621_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__706661 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__706662 = null;
var count__706663 = (0);
var i__706664 = (0);
while(true){
if((i__706664 < count__706663)){
var n = cljs.core._nth.call(null,chunk__706662,i__706664);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__706675 = seq__706661;
var G__706676 = chunk__706662;
var G__706677 = count__706663;
var G__706678 = (i__706664 + (1));
seq__706661 = G__706675;
chunk__706662 = G__706676;
count__706663 = G__706677;
i__706664 = G__706678;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__706661);
if(temp__6753__auto__){
var seq__706661__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706661__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__706661__$1);
var G__706679 = cljs.core.chunk_rest.call(null,seq__706661__$1);
var G__706680 = c__28561__auto__;
var G__706681 = cljs.core.count.call(null,c__28561__auto__);
var G__706682 = (0);
seq__706661 = G__706679;
chunk__706662 = G__706680;
count__706663 = G__706681;
i__706664 = G__706682;
continue;
} else {
var n = cljs.core.first.call(null,seq__706661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__706683 = cljs.core.next.call(null,seq__706661__$1);
var G__706684 = null;
var G__706685 = (0);
var G__706686 = (0);
seq__706661 = G__706683;
chunk__706662 = G__706684;
count__706663 = G__706685;
i__706664 = G__706686;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__706757_706786 = cljs.core.seq.call(null,deps);
var chunk__706758_706787 = null;
var count__706759_706788 = (0);
var i__706760_706789 = (0);
while(true){
if((i__706760_706789 < count__706759_706788)){
var dep_706790 = cljs.core._nth.call(null,chunk__706758_706787,i__706760_706789);
topo_sort_helper_STAR_.call(null,dep_706790,(depth + (1)),state);

var G__706791 = seq__706757_706786;
var G__706792 = chunk__706758_706787;
var G__706793 = count__706759_706788;
var G__706794 = (i__706760_706789 + (1));
seq__706757_706786 = G__706791;
chunk__706758_706787 = G__706792;
count__706759_706788 = G__706793;
i__706760_706789 = G__706794;
continue;
} else {
var temp__6753__auto___706796 = cljs.core.seq.call(null,seq__706757_706786);
if(temp__6753__auto___706796){
var seq__706757_706797__$1 = temp__6753__auto___706796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706757_706797__$1)){
var c__28561__auto___706799 = cljs.core.chunk_first.call(null,seq__706757_706797__$1);
var G__706800 = cljs.core.chunk_rest.call(null,seq__706757_706797__$1);
var G__706801 = c__28561__auto___706799;
var G__706802 = cljs.core.count.call(null,c__28561__auto___706799);
var G__706803 = (0);
seq__706757_706786 = G__706800;
chunk__706758_706787 = G__706801;
count__706759_706788 = G__706802;
i__706760_706789 = G__706803;
continue;
} else {
var dep_706804 = cljs.core.first.call(null,seq__706757_706797__$1);
topo_sort_helper_STAR_.call(null,dep_706804,(depth + (1)),state);

var G__706805 = cljs.core.next.call(null,seq__706757_706797__$1);
var G__706806 = null;
var G__706807 = (0);
var G__706808 = (0);
seq__706757_706786 = G__706805;
chunk__706758_706787 = G__706806;
count__706759_706788 = G__706807;
i__706760_706789 = G__706808;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__706762){
var vec__706766 = p__706762;
var seq__706767 = cljs.core.seq.call(null,vec__706766);
var first__706768 = cljs.core.first.call(null,seq__706767);
var seq__706767__$1 = cljs.core.next.call(null,seq__706767);
var x = first__706768;
var xs = seq__706767__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__706766,seq__706767,first__706768,seq__706767__$1,x,xs,get_deps__$1){
return (function (p1__706687_SHARP_){
return clojure.set.difference.call(null,p1__706687_SHARP_,x);
});})(vec__706766,seq__706767,first__706768,seq__706767__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__706867 = cljs.core.seq.call(null,provides);
var chunk__706868 = null;
var count__706869 = (0);
var i__706870 = (0);
while(true){
if((i__706870 < count__706869)){
var prov = cljs.core._nth.call(null,chunk__706868,i__706870);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__706871_706903 = cljs.core.seq.call(null,requires);
var chunk__706872_706904 = null;
var count__706873_706905 = (0);
var i__706874_706906 = (0);
while(true){
if((i__706874_706906 < count__706873_706905)){
var req_706907 = cljs.core._nth.call(null,chunk__706872_706904,i__706874_706906);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_706907,prov);

var G__706908 = seq__706871_706903;
var G__706909 = chunk__706872_706904;
var G__706910 = count__706873_706905;
var G__706911 = (i__706874_706906 + (1));
seq__706871_706903 = G__706908;
chunk__706872_706904 = G__706909;
count__706873_706905 = G__706910;
i__706874_706906 = G__706911;
continue;
} else {
var temp__6753__auto___706912 = cljs.core.seq.call(null,seq__706871_706903);
if(temp__6753__auto___706912){
var seq__706871_706914__$1 = temp__6753__auto___706912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706871_706914__$1)){
var c__28561__auto___706915 = cljs.core.chunk_first.call(null,seq__706871_706914__$1);
var G__706920 = cljs.core.chunk_rest.call(null,seq__706871_706914__$1);
var G__706921 = c__28561__auto___706915;
var G__706922 = cljs.core.count.call(null,c__28561__auto___706915);
var G__706923 = (0);
seq__706871_706903 = G__706920;
chunk__706872_706904 = G__706921;
count__706873_706905 = G__706922;
i__706874_706906 = G__706923;
continue;
} else {
var req_706925 = cljs.core.first.call(null,seq__706871_706914__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_706925,prov);

var G__706928 = cljs.core.next.call(null,seq__706871_706914__$1);
var G__706929 = null;
var G__706930 = (0);
var G__706931 = (0);
seq__706871_706903 = G__706928;
chunk__706872_706904 = G__706929;
count__706873_706905 = G__706930;
i__706874_706906 = G__706931;
continue;
}
} else {
}
}
break;
}

var G__707225 = seq__706867;
var G__707226 = chunk__706868;
var G__707227 = count__706869;
var G__707228 = (i__706870 + (1));
seq__706867 = G__707225;
chunk__706868 = G__707226;
count__706869 = G__707227;
i__706870 = G__707228;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__706867);
if(temp__6753__auto__){
var seq__706867__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706867__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__706867__$1);
var G__707231 = cljs.core.chunk_rest.call(null,seq__706867__$1);
var G__707232 = c__28561__auto__;
var G__707233 = cljs.core.count.call(null,c__28561__auto__);
var G__707234 = (0);
seq__706867 = G__707231;
chunk__706868 = G__707232;
count__706869 = G__707233;
i__706870 = G__707234;
continue;
} else {
var prov = cljs.core.first.call(null,seq__706867__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__706886_707237 = cljs.core.seq.call(null,requires);
var chunk__706887_707238 = null;
var count__706888_707239 = (0);
var i__706889_707240 = (0);
while(true){
if((i__706889_707240 < count__706888_707239)){
var req_707247 = cljs.core._nth.call(null,chunk__706887_707238,i__706889_707240);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_707247,prov);

var G__707248 = seq__706886_707237;
var G__707249 = chunk__706887_707238;
var G__707250 = count__706888_707239;
var G__707251 = (i__706889_707240 + (1));
seq__706886_707237 = G__707248;
chunk__706887_707238 = G__707249;
count__706888_707239 = G__707250;
i__706889_707240 = G__707251;
continue;
} else {
var temp__6753__auto___707255__$1 = cljs.core.seq.call(null,seq__706886_707237);
if(temp__6753__auto___707255__$1){
var seq__706886_707257__$1 = temp__6753__auto___707255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706886_707257__$1)){
var c__28561__auto___707258 = cljs.core.chunk_first.call(null,seq__706886_707257__$1);
var G__707260 = cljs.core.chunk_rest.call(null,seq__706886_707257__$1);
var G__707261 = c__28561__auto___707258;
var G__707262 = cljs.core.count.call(null,c__28561__auto___707258);
var G__707263 = (0);
seq__706886_707237 = G__707260;
chunk__706887_707238 = G__707261;
count__706888_707239 = G__707262;
i__706889_707240 = G__707263;
continue;
} else {
var req_707268 = cljs.core.first.call(null,seq__706886_707257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_707268,prov);

var G__707280 = cljs.core.next.call(null,seq__706886_707257__$1);
var G__707281 = null;
var G__707282 = (0);
var G__707283 = (0);
seq__706886_707237 = G__707280;
chunk__706887_707238 = G__707281;
count__706888_707239 = G__707282;
i__706889_707240 = G__707283;
continue;
}
} else {
}
}
break;
}

var G__707290 = cljs.core.next.call(null,seq__706867__$1);
var G__707291 = null;
var G__707292 = (0);
var G__707293 = (0);
seq__706867 = G__707290;
chunk__706868 = G__707291;
count__706869 = G__707292;
i__706870 = G__707293;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__707303_707317 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__707304_707318 = null;
var count__707305_707319 = (0);
var i__707306_707320 = (0);
while(true){
if((i__707306_707320 < count__707305_707319)){
var ns_707329 = cljs.core._nth.call(null,chunk__707304_707318,i__707306_707320);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_707329);

var G__707331 = seq__707303_707317;
var G__707332 = chunk__707304_707318;
var G__707333 = count__707305_707319;
var G__707334 = (i__707306_707320 + (1));
seq__707303_707317 = G__707331;
chunk__707304_707318 = G__707332;
count__707305_707319 = G__707333;
i__707306_707320 = G__707334;
continue;
} else {
var temp__6753__auto___707335 = cljs.core.seq.call(null,seq__707303_707317);
if(temp__6753__auto___707335){
var seq__707303_707337__$1 = temp__6753__auto___707335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__707303_707337__$1)){
var c__28561__auto___707338 = cljs.core.chunk_first.call(null,seq__707303_707337__$1);
var G__707339 = cljs.core.chunk_rest.call(null,seq__707303_707337__$1);
var G__707340 = c__28561__auto___707338;
var G__707341 = cljs.core.count.call(null,c__28561__auto___707338);
var G__707342 = (0);
seq__707303_707317 = G__707339;
chunk__707304_707318 = G__707340;
count__707305_707319 = G__707341;
i__707306_707320 = G__707342;
continue;
} else {
var ns_707349 = cljs.core.first.call(null,seq__707303_707337__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_707349);

var G__707350 = cljs.core.next.call(null,seq__707303_707337__$1);
var G__707351 = null;
var G__707352 = (0);
var G__707353 = (0);
seq__707303_707317 = G__707350;
chunk__707304_707318 = G__707351;
count__707305_707319 = G__707352;
i__707306_707320 = G__707353;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27650__auto__ = goog.require__;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__707356__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__707356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__707357__i = 0, G__707357__a = new Array(arguments.length -  0);
while (G__707357__i < G__707357__a.length) {G__707357__a[G__707357__i] = arguments[G__707357__i + 0]; ++G__707357__i;}
  args = new cljs.core.IndexedSeq(G__707357__a,0);
} 
return G__707356__delegate.call(this,args);};
G__707356.cljs$lang$maxFixedArity = 0;
G__707356.cljs$lang$applyTo = (function (arglist__707358){
var args = cljs.core.seq(arglist__707358);
return G__707356__delegate(args);
});
G__707356.cljs$core$IFn$_invoke$arity$variadic = G__707356__delegate;
return G__707356;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__707366 = cljs.core._EQ_;
var expr__707367 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__707366.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__707367))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__707366,expr__707367){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__707366,expr__707367))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__707366,expr__707367){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e707371){if((e707371 instanceof Error)){
var e = e707371;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e707371;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__707366,expr__707367))
} else {
if(cljs.core.truth_(pred__707366.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__707367))){
return ((function (pred__707366,expr__707367){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__707366,expr__707367){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__707366,expr__707367))
);

return deferred.addErrback(((function (deferred,pred__707366,expr__707367){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__707366,expr__707367))
);
});
;})(pred__707366,expr__707367))
} else {
if(cljs.core.truth_(pred__707366.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__707367))){
return ((function (pred__707366,expr__707367){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e707372){if((e707372 instanceof Error)){
var e = e707372;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e707372;

}
}})());
});
;})(pred__707366,expr__707367))
} else {
return ((function (pred__707366,expr__707367){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__707366,expr__707367))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__707394,callback){
var map__707397 = p__707394;
var map__707397__$1 = ((((!((map__707397 == null)))?((((map__707397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707397):map__707397);
var file_msg = map__707397__$1;
var request_url = cljs.core.get.call(null,map__707397__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__707397,map__707397__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__707397,map__707397__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__){
return (function (state_707452){
var state_val_707453 = (state_707452[(1)]);
if((state_val_707453 === (7))){
var inst_707448 = (state_707452[(2)]);
var state_707452__$1 = state_707452;
var statearr_707454_707488 = state_707452__$1;
(statearr_707454_707488[(2)] = inst_707448);

(statearr_707454_707488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (1))){
var state_707452__$1 = state_707452;
var statearr_707455_707489 = state_707452__$1;
(statearr_707455_707489[(2)] = null);

(statearr_707455_707489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (4))){
var inst_707431 = (state_707452[(7)]);
var inst_707431__$1 = (state_707452[(2)]);
var state_707452__$1 = (function (){var statearr_707456 = state_707452;
(statearr_707456[(7)] = inst_707431__$1);

return statearr_707456;
})();
if(cljs.core.truth_(inst_707431__$1)){
var statearr_707459_707490 = state_707452__$1;
(statearr_707459_707490[(1)] = (5));

} else {
var statearr_707460_707491 = state_707452__$1;
(statearr_707460_707491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (6))){
var state_707452__$1 = state_707452;
var statearr_707461_707493 = state_707452__$1;
(statearr_707461_707493[(2)] = null);

(statearr_707461_707493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (3))){
var inst_707450 = (state_707452[(2)]);
var state_707452__$1 = state_707452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_707452__$1,inst_707450);
} else {
if((state_val_707453 === (2))){
var state_707452__$1 = state_707452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_707452__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_707453 === (11))){
var inst_707444 = (state_707452[(2)]);
var state_707452__$1 = (function (){var statearr_707463 = state_707452;
(statearr_707463[(8)] = inst_707444);

return statearr_707463;
})();
var statearr_707464_707494 = state_707452__$1;
(statearr_707464_707494[(2)] = null);

(statearr_707464_707494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (9))){
var inst_707437 = (state_707452[(9)]);
var inst_707435 = (state_707452[(10)]);
var inst_707439 = inst_707437.call(null,inst_707435);
var state_707452__$1 = state_707452;
var statearr_707465_707499 = state_707452__$1;
(statearr_707465_707499[(2)] = inst_707439);

(statearr_707465_707499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (5))){
var inst_707431 = (state_707452[(7)]);
var inst_707433 = figwheel.client.file_reloading.blocking_load.call(null,inst_707431);
var state_707452__$1 = state_707452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_707452__$1,(8),inst_707433);
} else {
if((state_val_707453 === (10))){
var inst_707435 = (state_707452[(10)]);
var inst_707441 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_707435);
var state_707452__$1 = state_707452;
var statearr_707467_707500 = state_707452__$1;
(statearr_707467_707500[(2)] = inst_707441);

(statearr_707467_707500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707453 === (8))){
var inst_707431 = (state_707452[(7)]);
var inst_707437 = (state_707452[(9)]);
var inst_707435 = (state_707452[(2)]);
var inst_707436 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_707437__$1 = cljs.core.get.call(null,inst_707436,inst_707431);
var state_707452__$1 = (function (){var statearr_707472 = state_707452;
(statearr_707472[(9)] = inst_707437__$1);

(statearr_707472[(10)] = inst_707435);

return statearr_707472;
})();
if(cljs.core.truth_(inst_707437__$1)){
var statearr_707474_707507 = state_707452__$1;
(statearr_707474_707507[(1)] = (9));

} else {
var statearr_707475_707508 = state_707452__$1;
(statearr_707475_707508[(1)] = (10));

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
});})(c__32882__auto__))
;
return ((function (switch__32859__auto__,c__32882__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32860__auto__ = null;
var figwheel$client$file_reloading$state_machine__32860__auto____0 = (function (){
var statearr_707482 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_707482[(0)] = figwheel$client$file_reloading$state_machine__32860__auto__);

(statearr_707482[(1)] = (1));

return statearr_707482;
});
var figwheel$client$file_reloading$state_machine__32860__auto____1 = (function (state_707452){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_707452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e707483){if((e707483 instanceof Object)){
var ex__32863__auto__ = e707483;
var statearr_707484_707518 = state_707452;
(statearr_707484_707518[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_707452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e707483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__707520 = state_707452;
state_707452 = G__707520;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32860__auto__ = function(state_707452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32860__auto____1.call(this,state_707452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32860__auto____0;
figwheel$client$file_reloading$state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32860__auto____1;
return figwheel$client$file_reloading$state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__))
})();
var state__32884__auto__ = (function (){var statearr_707487 = f__32883__auto__.call(null);
(statearr_707487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_707487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__))
);

return c__32882__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__707521,callback){
var map__707529 = p__707521;
var map__707529__$1 = ((((!((map__707529 == null)))?((((map__707529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707529):map__707529);
var file_msg = map__707529__$1;
var namespace = cljs.core.get.call(null,map__707529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__707529,map__707529__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__707529,map__707529__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__707539){
var map__707542 = p__707539;
var map__707542__$1 = ((((!((map__707542 == null)))?((((map__707542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707542):map__707542);
var file_msg = map__707542__$1;
var namespace = cljs.core.get.call(null,map__707542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__707552){
var map__707556 = p__707552;
var map__707556__$1 = ((((!((map__707556 == null)))?((((map__707556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707556):map__707556);
var file_msg = map__707556__$1;
var namespace = cljs.core.get.call(null,map__707556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27638__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27638__auto__){
var or__27650__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27638__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__707623,callback){
var map__707634 = p__707623;
var map__707634__$1 = ((((!((map__707634 == null)))?((((map__707634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707634):map__707634);
var file_msg = map__707634__$1;
var request_url = cljs.core.get.call(null,map__707634__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__707634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32882__auto___707749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto___707749,out){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto___707749,out){
return (function (state_707728){
var state_val_707729 = (state_707728[(1)]);
if((state_val_707729 === (1))){
var inst_707702 = cljs.core.seq.call(null,files);
var inst_707703 = cljs.core.first.call(null,inst_707702);
var inst_707704 = cljs.core.next.call(null,inst_707702);
var inst_707705 = files;
var state_707728__$1 = (function (){var statearr_707731 = state_707728;
(statearr_707731[(7)] = inst_707703);

(statearr_707731[(8)] = inst_707705);

(statearr_707731[(9)] = inst_707704);

return statearr_707731;
})();
var statearr_707732_707786 = state_707728__$1;
(statearr_707732_707786[(2)] = null);

(statearr_707732_707786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707729 === (2))){
var inst_707705 = (state_707728[(8)]);
var inst_707711 = (state_707728[(10)]);
var inst_707710 = cljs.core.seq.call(null,inst_707705);
var inst_707711__$1 = cljs.core.first.call(null,inst_707710);
var inst_707712 = cljs.core.next.call(null,inst_707710);
var inst_707713 = (inst_707711__$1 == null);
var inst_707714 = cljs.core.not.call(null,inst_707713);
var state_707728__$1 = (function (){var statearr_707733 = state_707728;
(statearr_707733[(10)] = inst_707711__$1);

(statearr_707733[(11)] = inst_707712);

return statearr_707733;
})();
if(inst_707714){
var statearr_707734_707800 = state_707728__$1;
(statearr_707734_707800[(1)] = (4));

} else {
var statearr_707735_707802 = state_707728__$1;
(statearr_707735_707802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707729 === (3))){
var inst_707726 = (state_707728[(2)]);
var state_707728__$1 = state_707728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_707728__$1,inst_707726);
} else {
if((state_val_707729 === (4))){
var inst_707711 = (state_707728[(10)]);
var inst_707716 = figwheel.client.file_reloading.reload_js_file.call(null,inst_707711);
var state_707728__$1 = state_707728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_707728__$1,(7),inst_707716);
} else {
if((state_val_707729 === (5))){
var inst_707722 = cljs.core.async.close_BANG_.call(null,out);
var state_707728__$1 = state_707728;
var statearr_707737_707804 = state_707728__$1;
(statearr_707737_707804[(2)] = inst_707722);

(statearr_707737_707804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707729 === (6))){
var inst_707724 = (state_707728[(2)]);
var state_707728__$1 = state_707728;
var statearr_707738_707805 = state_707728__$1;
(statearr_707738_707805[(2)] = inst_707724);

(statearr_707738_707805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_707729 === (7))){
var inst_707712 = (state_707728[(11)]);
var inst_707718 = (state_707728[(2)]);
var inst_707719 = cljs.core.async.put_BANG_.call(null,out,inst_707718);
var inst_707705 = inst_707712;
var state_707728__$1 = (function (){var statearr_707739 = state_707728;
(statearr_707739[(8)] = inst_707705);

(statearr_707739[(12)] = inst_707719);

return statearr_707739;
})();
var statearr_707740_707808 = state_707728__$1;
(statearr_707740_707808[(2)] = null);

(statearr_707740_707808[(1)] = (2));


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
});})(c__32882__auto___707749,out))
;
return ((function (switch__32859__auto__,c__32882__auto___707749,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____0 = (function (){
var statearr_707745 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_707745[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__);

(statearr_707745[(1)] = (1));

return statearr_707745;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____1 = (function (state_707728){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_707728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e707746){if((e707746 instanceof Object)){
var ex__32863__auto__ = e707746;
var statearr_707747_707810 = state_707728;
(statearr_707747_707810[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_707728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e707746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__707811 = state_707728;
state_707728 = G__707811;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__ = function(state_707728){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____1.call(this,state_707728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto___707749,out))
})();
var state__32884__auto__ = (function (){var statearr_707748 = f__32883__auto__.call(null);
(statearr_707748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto___707749);

return statearr_707748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto___707749,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__707812,opts){
var map__707817 = p__707812;
var map__707817__$1 = ((((!((map__707817 == null)))?((((map__707817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707817):map__707817);
var eval_body = cljs.core.get.call(null,map__707817__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__707817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27638__auto__ = eval_body;
if(cljs.core.truth_(and__27638__auto__)){
return typeof eval_body === 'string';
} else {
return and__27638__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e707819){var e = e707819;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__707826_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__707826_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__707835){
var vec__707836 = p__707835;
var k = cljs.core.nth.call(null,vec__707836,(0),null);
var v = cljs.core.nth.call(null,vec__707836,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__707839){
var vec__707840 = p__707839;
var k = cljs.core.nth.call(null,vec__707840,(0),null);
var v = cljs.core.nth.call(null,vec__707840,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__707846,p__707847){
var map__708104 = p__707846;
var map__708104__$1 = ((((!((map__708104 == null)))?((((map__708104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708104):map__708104);
var opts = map__708104__$1;
var before_jsload = cljs.core.get.call(null,map__708104__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__708104__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__708104__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__708105 = p__707847;
var map__708105__$1 = ((((!((map__708105 == null)))?((((map__708105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708105):map__708105);
var msg = map__708105__$1;
var files = cljs.core.get.call(null,map__708105__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__708105__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__708105__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32883__auto__ = (function (){var switch__32859__auto__ = ((function (c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_708260){
var state_val_708261 = (state_708260[(1)]);
if((state_val_708261 === (7))){
var inst_708123 = (state_708260[(7)]);
var inst_708122 = (state_708260[(8)]);
var inst_708120 = (state_708260[(9)]);
var inst_708121 = (state_708260[(10)]);
var inst_708128 = cljs.core._nth.call(null,inst_708121,inst_708123);
var inst_708129 = figwheel.client.file_reloading.eval_body.call(null,inst_708128,opts);
var inst_708130 = (inst_708123 + (1));
var tmp708262 = inst_708122;
var tmp708263 = inst_708120;
var tmp708264 = inst_708121;
var inst_708120__$1 = tmp708263;
var inst_708121__$1 = tmp708264;
var inst_708122__$1 = tmp708262;
var inst_708123__$1 = inst_708130;
var state_708260__$1 = (function (){var statearr_708265 = state_708260;
(statearr_708265[(7)] = inst_708123__$1);

(statearr_708265[(11)] = inst_708129);

(statearr_708265[(8)] = inst_708122__$1);

(statearr_708265[(9)] = inst_708120__$1);

(statearr_708265[(10)] = inst_708121__$1);

return statearr_708265;
})();
var statearr_708266_708352 = state_708260__$1;
(statearr_708266_708352[(2)] = null);

(statearr_708266_708352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (20))){
var inst_708163 = (state_708260[(12)]);
var inst_708171 = figwheel.client.file_reloading.sort_files.call(null,inst_708163);
var state_708260__$1 = state_708260;
var statearr_708267_708353 = state_708260__$1;
(statearr_708267_708353[(2)] = inst_708171);

(statearr_708267_708353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (27))){
var state_708260__$1 = state_708260;
var statearr_708268_708354 = state_708260__$1;
(statearr_708268_708354[(2)] = null);

(statearr_708268_708354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (1))){
var inst_708112 = (state_708260[(13)]);
var inst_708109 = before_jsload.call(null,files);
var inst_708110 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_708111 = (function (){return ((function (inst_708112,inst_708109,inst_708110,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__707843_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__707843_SHARP_);
});
;})(inst_708112,inst_708109,inst_708110,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708112__$1 = cljs.core.filter.call(null,inst_708111,files);
var inst_708113 = cljs.core.not_empty.call(null,inst_708112__$1);
var state_708260__$1 = (function (){var statearr_708269 = state_708260;
(statearr_708269[(14)] = inst_708109);

(statearr_708269[(15)] = inst_708110);

(statearr_708269[(13)] = inst_708112__$1);

return statearr_708269;
})();
if(cljs.core.truth_(inst_708113)){
var statearr_708270_708355 = state_708260__$1;
(statearr_708270_708355[(1)] = (2));

} else {
var statearr_708271_708356 = state_708260__$1;
(statearr_708271_708356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (24))){
var state_708260__$1 = state_708260;
var statearr_708272_708357 = state_708260__$1;
(statearr_708272_708357[(2)] = null);

(statearr_708272_708357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (39))){
var inst_708213 = (state_708260[(16)]);
var state_708260__$1 = state_708260;
var statearr_708273_708358 = state_708260__$1;
(statearr_708273_708358[(2)] = inst_708213);

(statearr_708273_708358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (46))){
var inst_708255 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708274_708359 = state_708260__$1;
(statearr_708274_708359[(2)] = inst_708255);

(statearr_708274_708359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (4))){
var inst_708157 = (state_708260[(2)]);
var inst_708158 = cljs.core.List.EMPTY;
var inst_708159 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_708158);
var inst_708160 = (function (){return ((function (inst_708157,inst_708158,inst_708159,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__707844_SHARP_){
var and__27638__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__707844_SHARP_);
if(cljs.core.truth_(and__27638__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__707844_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__707844_SHARP_)));
} else {
return and__27638__auto__;
}
});
;})(inst_708157,inst_708158,inst_708159,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708161 = cljs.core.filter.call(null,inst_708160,files);
var inst_708162 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_708163 = cljs.core.concat.call(null,inst_708161,inst_708162);
var state_708260__$1 = (function (){var statearr_708275 = state_708260;
(statearr_708275[(12)] = inst_708163);

(statearr_708275[(17)] = inst_708157);

(statearr_708275[(18)] = inst_708159);

return statearr_708275;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_708276_708362 = state_708260__$1;
(statearr_708276_708362[(1)] = (16));

} else {
var statearr_708277_708363 = state_708260__$1;
(statearr_708277_708363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (15))){
var inst_708147 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708278_708364 = state_708260__$1;
(statearr_708278_708364[(2)] = inst_708147);

(statearr_708278_708364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (21))){
var inst_708173 = (state_708260[(19)]);
var inst_708173__$1 = (state_708260[(2)]);
var inst_708174 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_708173__$1);
var state_708260__$1 = (function (){var statearr_708279 = state_708260;
(statearr_708279[(19)] = inst_708173__$1);

return statearr_708279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_708260__$1,(22),inst_708174);
} else {
if((state_val_708261 === (31))){
var inst_708258 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_708260__$1,inst_708258);
} else {
if((state_val_708261 === (32))){
var inst_708213 = (state_708260[(16)]);
var inst_708218 = inst_708213.cljs$lang$protocol_mask$partition0$;
var inst_708219 = (inst_708218 & (64));
var inst_708220 = inst_708213.cljs$core$ISeq$;
var inst_708221 = (cljs.core.PROTOCOL_SENTINEL === inst_708220);
var inst_708222 = (inst_708219) || (inst_708221);
var state_708260__$1 = state_708260;
if(cljs.core.truth_(inst_708222)){
var statearr_708280_708367 = state_708260__$1;
(statearr_708280_708367[(1)] = (35));

} else {
var statearr_708281_708368 = state_708260__$1;
(statearr_708281_708368[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (40))){
var inst_708235 = (state_708260[(20)]);
var inst_708234 = (state_708260[(2)]);
var inst_708235__$1 = cljs.core.get.call(null,inst_708234,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_708236 = cljs.core.get.call(null,inst_708234,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_708237 = cljs.core.not_empty.call(null,inst_708235__$1);
var state_708260__$1 = (function (){var statearr_708282 = state_708260;
(statearr_708282[(21)] = inst_708236);

(statearr_708282[(20)] = inst_708235__$1);

return statearr_708282;
})();
if(cljs.core.truth_(inst_708237)){
var statearr_708283_708369 = state_708260__$1;
(statearr_708283_708369[(1)] = (41));

} else {
var statearr_708284_708370 = state_708260__$1;
(statearr_708284_708370[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (33))){
var state_708260__$1 = state_708260;
var statearr_708285_708371 = state_708260__$1;
(statearr_708285_708371[(2)] = false);

(statearr_708285_708371[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (13))){
var inst_708133 = (state_708260[(22)]);
var inst_708137 = cljs.core.chunk_first.call(null,inst_708133);
var inst_708138 = cljs.core.chunk_rest.call(null,inst_708133);
var inst_708139 = cljs.core.count.call(null,inst_708137);
var inst_708120 = inst_708138;
var inst_708121 = inst_708137;
var inst_708122 = inst_708139;
var inst_708123 = (0);
var state_708260__$1 = (function (){var statearr_708286 = state_708260;
(statearr_708286[(7)] = inst_708123);

(statearr_708286[(8)] = inst_708122);

(statearr_708286[(9)] = inst_708120);

(statearr_708286[(10)] = inst_708121);

return statearr_708286;
})();
var statearr_708287_708372 = state_708260__$1;
(statearr_708287_708372[(2)] = null);

(statearr_708287_708372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (22))){
var inst_708176 = (state_708260[(23)]);
var inst_708181 = (state_708260[(24)]);
var inst_708173 = (state_708260[(19)]);
var inst_708177 = (state_708260[(25)]);
var inst_708176__$1 = (state_708260[(2)]);
var inst_708177__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_708176__$1);
var inst_708178 = (function (){var all_files = inst_708173;
var res_SINGLEQUOTE_ = inst_708176__$1;
var res = inst_708177__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_708176,inst_708181,inst_708173,inst_708177,inst_708176__$1,inst_708177__$1,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__707845_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__707845_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_708176,inst_708181,inst_708173,inst_708177,inst_708176__$1,inst_708177__$1,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708179 = cljs.core.filter.call(null,inst_708178,inst_708176__$1);
var inst_708180 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_708181__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_708180);
var inst_708182 = cljs.core.not_empty.call(null,inst_708181__$1);
var state_708260__$1 = (function (){var statearr_708288 = state_708260;
(statearr_708288[(23)] = inst_708176__$1);

(statearr_708288[(24)] = inst_708181__$1);

(statearr_708288[(26)] = inst_708179);

(statearr_708288[(25)] = inst_708177__$1);

return statearr_708288;
})();
if(cljs.core.truth_(inst_708182)){
var statearr_708289_708373 = state_708260__$1;
(statearr_708289_708373[(1)] = (23));

} else {
var statearr_708290_708374 = state_708260__$1;
(statearr_708290_708374[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (36))){
var state_708260__$1 = state_708260;
var statearr_708291_708375 = state_708260__$1;
(statearr_708291_708375[(2)] = false);

(statearr_708291_708375[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (41))){
var inst_708235 = (state_708260[(20)]);
var inst_708239 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_708240 = cljs.core.map.call(null,inst_708239,inst_708235);
var inst_708241 = cljs.core.pr_str.call(null,inst_708240);
var inst_708242 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_708241)].join('');
var inst_708243 = figwheel.client.utils.log.call(null,inst_708242);
var state_708260__$1 = state_708260;
var statearr_708292_708376 = state_708260__$1;
(statearr_708292_708376[(2)] = inst_708243);

(statearr_708292_708376[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (43))){
var inst_708236 = (state_708260[(21)]);
var inst_708246 = (state_708260[(2)]);
var inst_708247 = cljs.core.not_empty.call(null,inst_708236);
var state_708260__$1 = (function (){var statearr_708293 = state_708260;
(statearr_708293[(27)] = inst_708246);

return statearr_708293;
})();
if(cljs.core.truth_(inst_708247)){
var statearr_708294_708377 = state_708260__$1;
(statearr_708294_708377[(1)] = (44));

} else {
var statearr_708295_708378 = state_708260__$1;
(statearr_708295_708378[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (29))){
var inst_708176 = (state_708260[(23)]);
var inst_708181 = (state_708260[(24)]);
var inst_708173 = (state_708260[(19)]);
var inst_708179 = (state_708260[(26)]);
var inst_708213 = (state_708260[(16)]);
var inst_708177 = (state_708260[(25)]);
var inst_708209 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_708212 = (function (){var all_files = inst_708173;
var res_SINGLEQUOTE_ = inst_708176;
var res = inst_708177;
var files_not_loaded = inst_708179;
var dependencies_that_loaded = inst_708181;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708213,inst_708177,inst_708209,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__708211){
var map__708296 = p__708211;
var map__708296__$1 = ((((!((map__708296 == null)))?((((map__708296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708296):map__708296);
var namespace = cljs.core.get.call(null,map__708296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708213,inst_708177,inst_708209,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708213__$1 = cljs.core.group_by.call(null,inst_708212,inst_708179);
var inst_708215 = (inst_708213__$1 == null);
var inst_708216 = cljs.core.not.call(null,inst_708215);
var state_708260__$1 = (function (){var statearr_708298 = state_708260;
(statearr_708298[(16)] = inst_708213__$1);

(statearr_708298[(28)] = inst_708209);

return statearr_708298;
})();
if(inst_708216){
var statearr_708299_708379 = state_708260__$1;
(statearr_708299_708379[(1)] = (32));

} else {
var statearr_708300_708380 = state_708260__$1;
(statearr_708300_708380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (44))){
var inst_708236 = (state_708260[(21)]);
var inst_708249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_708236);
var inst_708250 = cljs.core.pr_str.call(null,inst_708249);
var inst_708251 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_708250)].join('');
var inst_708252 = figwheel.client.utils.log.call(null,inst_708251);
var state_708260__$1 = state_708260;
var statearr_708301_708381 = state_708260__$1;
(statearr_708301_708381[(2)] = inst_708252);

(statearr_708301_708381[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (6))){
var inst_708154 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708302_708382 = state_708260__$1;
(statearr_708302_708382[(2)] = inst_708154);

(statearr_708302_708382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (28))){
var inst_708179 = (state_708260[(26)]);
var inst_708206 = (state_708260[(2)]);
var inst_708207 = cljs.core.not_empty.call(null,inst_708179);
var state_708260__$1 = (function (){var statearr_708303 = state_708260;
(statearr_708303[(29)] = inst_708206);

return statearr_708303;
})();
if(cljs.core.truth_(inst_708207)){
var statearr_708304_708383 = state_708260__$1;
(statearr_708304_708383[(1)] = (29));

} else {
var statearr_708305_708384 = state_708260__$1;
(statearr_708305_708384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (25))){
var inst_708177 = (state_708260[(25)]);
var inst_708193 = (state_708260[(2)]);
var inst_708194 = cljs.core.not_empty.call(null,inst_708177);
var state_708260__$1 = (function (){var statearr_708306 = state_708260;
(statearr_708306[(30)] = inst_708193);

return statearr_708306;
})();
if(cljs.core.truth_(inst_708194)){
var statearr_708307_708385 = state_708260__$1;
(statearr_708307_708385[(1)] = (26));

} else {
var statearr_708308_708386 = state_708260__$1;
(statearr_708308_708386[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (34))){
var inst_708229 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
if(cljs.core.truth_(inst_708229)){
var statearr_708309_708387 = state_708260__$1;
(statearr_708309_708387[(1)] = (38));

} else {
var statearr_708310_708388 = state_708260__$1;
(statearr_708310_708388[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (17))){
var state_708260__$1 = state_708260;
var statearr_708311_708389 = state_708260__$1;
(statearr_708311_708389[(2)] = recompile_dependents);

(statearr_708311_708389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (3))){
var state_708260__$1 = state_708260;
var statearr_708312_708390 = state_708260__$1;
(statearr_708312_708390[(2)] = null);

(statearr_708312_708390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (12))){
var inst_708150 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708313_708391 = state_708260__$1;
(statearr_708313_708391[(2)] = inst_708150);

(statearr_708313_708391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (2))){
var inst_708112 = (state_708260[(13)]);
var inst_708119 = cljs.core.seq.call(null,inst_708112);
var inst_708120 = inst_708119;
var inst_708121 = null;
var inst_708122 = (0);
var inst_708123 = (0);
var state_708260__$1 = (function (){var statearr_708314 = state_708260;
(statearr_708314[(7)] = inst_708123);

(statearr_708314[(8)] = inst_708122);

(statearr_708314[(9)] = inst_708120);

(statearr_708314[(10)] = inst_708121);

return statearr_708314;
})();
var statearr_708315_708392 = state_708260__$1;
(statearr_708315_708392[(2)] = null);

(statearr_708315_708392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (23))){
var inst_708176 = (state_708260[(23)]);
var inst_708181 = (state_708260[(24)]);
var inst_708173 = (state_708260[(19)]);
var inst_708179 = (state_708260[(26)]);
var inst_708177 = (state_708260[(25)]);
var inst_708184 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_708186 = (function (){var all_files = inst_708173;
var res_SINGLEQUOTE_ = inst_708176;
var res = inst_708177;
var files_not_loaded = inst_708179;
var dependencies_that_loaded = inst_708181;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708184,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__708185){
var map__708316 = p__708185;
var map__708316__$1 = ((((!((map__708316 == null)))?((((map__708316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708316):map__708316);
var request_url = cljs.core.get.call(null,map__708316__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708184,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708187 = cljs.core.reverse.call(null,inst_708181);
var inst_708188 = cljs.core.map.call(null,inst_708186,inst_708187);
var inst_708189 = cljs.core.pr_str.call(null,inst_708188);
var inst_708190 = figwheel.client.utils.log.call(null,inst_708189);
var state_708260__$1 = (function (){var statearr_708318 = state_708260;
(statearr_708318[(31)] = inst_708184);

return statearr_708318;
})();
var statearr_708319_708393 = state_708260__$1;
(statearr_708319_708393[(2)] = inst_708190);

(statearr_708319_708393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (35))){
var state_708260__$1 = state_708260;
var statearr_708320_708394 = state_708260__$1;
(statearr_708320_708394[(2)] = true);

(statearr_708320_708394[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (19))){
var inst_708163 = (state_708260[(12)]);
var inst_708169 = figwheel.client.file_reloading.expand_files.call(null,inst_708163);
var state_708260__$1 = state_708260;
var statearr_708321_708395 = state_708260__$1;
(statearr_708321_708395[(2)] = inst_708169);

(statearr_708321_708395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (11))){
var state_708260__$1 = state_708260;
var statearr_708322_708398 = state_708260__$1;
(statearr_708322_708398[(2)] = null);

(statearr_708322_708398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (9))){
var inst_708152 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708323_708399 = state_708260__$1;
(statearr_708323_708399[(2)] = inst_708152);

(statearr_708323_708399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (5))){
var inst_708123 = (state_708260[(7)]);
var inst_708122 = (state_708260[(8)]);
var inst_708125 = (inst_708123 < inst_708122);
var inst_708126 = inst_708125;
var state_708260__$1 = state_708260;
if(cljs.core.truth_(inst_708126)){
var statearr_708324_708400 = state_708260__$1;
(statearr_708324_708400[(1)] = (7));

} else {
var statearr_708325_708401 = state_708260__$1;
(statearr_708325_708401[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (14))){
var inst_708133 = (state_708260[(22)]);
var inst_708142 = cljs.core.first.call(null,inst_708133);
var inst_708143 = figwheel.client.file_reloading.eval_body.call(null,inst_708142,opts);
var inst_708144 = cljs.core.next.call(null,inst_708133);
var inst_708120 = inst_708144;
var inst_708121 = null;
var inst_708122 = (0);
var inst_708123 = (0);
var state_708260__$1 = (function (){var statearr_708326 = state_708260;
(statearr_708326[(7)] = inst_708123);

(statearr_708326[(8)] = inst_708122);

(statearr_708326[(9)] = inst_708120);

(statearr_708326[(10)] = inst_708121);

(statearr_708326[(32)] = inst_708143);

return statearr_708326;
})();
var statearr_708327_708402 = state_708260__$1;
(statearr_708327_708402[(2)] = null);

(statearr_708327_708402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (45))){
var state_708260__$1 = state_708260;
var statearr_708328_708403 = state_708260__$1;
(statearr_708328_708403[(2)] = null);

(statearr_708328_708403[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (26))){
var inst_708176 = (state_708260[(23)]);
var inst_708181 = (state_708260[(24)]);
var inst_708173 = (state_708260[(19)]);
var inst_708179 = (state_708260[(26)]);
var inst_708177 = (state_708260[(25)]);
var inst_708196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_708198 = (function (){var all_files = inst_708173;
var res_SINGLEQUOTE_ = inst_708176;
var res = inst_708177;
var files_not_loaded = inst_708179;
var dependencies_that_loaded = inst_708181;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708196,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__708197){
var map__708329 = p__708197;
var map__708329__$1 = ((((!((map__708329 == null)))?((((map__708329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708329):map__708329);
var namespace = cljs.core.get.call(null,map__708329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__708329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708196,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708199 = cljs.core.map.call(null,inst_708198,inst_708177);
var inst_708200 = cljs.core.pr_str.call(null,inst_708199);
var inst_708201 = figwheel.client.utils.log.call(null,inst_708200);
var inst_708202 = (function (){var all_files = inst_708173;
var res_SINGLEQUOTE_ = inst_708176;
var res = inst_708177;
var files_not_loaded = inst_708179;
var dependencies_that_loaded = inst_708181;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708196,inst_708198,inst_708199,inst_708200,inst_708201,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_708176,inst_708181,inst_708173,inst_708179,inst_708177,inst_708196,inst_708198,inst_708199,inst_708200,inst_708201,state_val_708261,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_708203 = setTimeout(inst_708202,(10));
var state_708260__$1 = (function (){var statearr_708331 = state_708260;
(statearr_708331[(33)] = inst_708201);

(statearr_708331[(34)] = inst_708196);

return statearr_708331;
})();
var statearr_708332_708404 = state_708260__$1;
(statearr_708332_708404[(2)] = inst_708203);

(statearr_708332_708404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (16))){
var state_708260__$1 = state_708260;
var statearr_708333_708405 = state_708260__$1;
(statearr_708333_708405[(2)] = reload_dependents);

(statearr_708333_708405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (38))){
var inst_708213 = (state_708260[(16)]);
var inst_708231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_708213);
var state_708260__$1 = state_708260;
var statearr_708334_708406 = state_708260__$1;
(statearr_708334_708406[(2)] = inst_708231);

(statearr_708334_708406[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (30))){
var state_708260__$1 = state_708260;
var statearr_708335_708407 = state_708260__$1;
(statearr_708335_708407[(2)] = null);

(statearr_708335_708407[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (10))){
var inst_708133 = (state_708260[(22)]);
var inst_708135 = cljs.core.chunked_seq_QMARK_.call(null,inst_708133);
var state_708260__$1 = state_708260;
if(inst_708135){
var statearr_708336_708408 = state_708260__$1;
(statearr_708336_708408[(1)] = (13));

} else {
var statearr_708337_708409 = state_708260__$1;
(statearr_708337_708409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (18))){
var inst_708167 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
if(cljs.core.truth_(inst_708167)){
var statearr_708338_708410 = state_708260__$1;
(statearr_708338_708410[(1)] = (19));

} else {
var statearr_708339_708411 = state_708260__$1;
(statearr_708339_708411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (42))){
var state_708260__$1 = state_708260;
var statearr_708340_708412 = state_708260__$1;
(statearr_708340_708412[(2)] = null);

(statearr_708340_708412[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (37))){
var inst_708226 = (state_708260[(2)]);
var state_708260__$1 = state_708260;
var statearr_708341_708413 = state_708260__$1;
(statearr_708341_708413[(2)] = inst_708226);

(statearr_708341_708413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_708261 === (8))){
var inst_708133 = (state_708260[(22)]);
var inst_708120 = (state_708260[(9)]);
var inst_708133__$1 = cljs.core.seq.call(null,inst_708120);
var state_708260__$1 = (function (){var statearr_708342 = state_708260;
(statearr_708342[(22)] = inst_708133__$1);

return statearr_708342;
})();
if(inst_708133__$1){
var statearr_708343_708414 = state_708260__$1;
(statearr_708343_708414[(1)] = (10));

} else {
var statearr_708344_708415 = state_708260__$1;
(statearr_708344_708415[(1)] = (11));

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
}
});})(c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32859__auto__,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____0 = (function (){
var statearr_708348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_708348[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__);

(statearr_708348[(1)] = (1));

return statearr_708348;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____1 = (function (state_708260){
while(true){
var ret_value__32861__auto__ = (function (){try{while(true){
var result__32862__auto__ = switch__32859__auto__.call(null,state_708260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32862__auto__;
}
break;
}
}catch (e708349){if((e708349 instanceof Object)){
var ex__32863__auto__ = e708349;
var statearr_708350_708416 = state_708260;
(statearr_708350_708416[(5)] = ex__32863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_708260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e708349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__708417 = state_708260;
state_708260 = G__708417;
continue;
} else {
return ret_value__32861__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__ = function(state_708260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____1.call(this,state_708260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32860__auto__;
})()
;})(switch__32859__auto__,c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32884__auto__ = (function (){var statearr_708351 = f__32883__auto__.call(null);
(statearr_708351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32882__auto__);

return statearr_708351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32884__auto__);
});})(c__32882__auto__,map__708104,map__708104__$1,opts,before_jsload,on_jsload,reload_dependents,map__708105,map__708105__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32882__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__708420,link){
var map__708423 = p__708420;
var map__708423__$1 = ((((!((map__708423 == null)))?((((map__708423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708423):map__708423);
var file = cljs.core.get.call(null,map__708423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__708423,map__708423__$1,file){
return (function (p1__708418_SHARP_,p2__708419_SHARP_){
if(cljs.core._EQ_.call(null,p1__708418_SHARP_,p2__708419_SHARP_)){
return p1__708418_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__708423,map__708423__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__708429){
var map__708430 = p__708429;
var map__708430__$1 = ((((!((map__708430 == null)))?((((map__708430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708430):map__708430);
var match_length = cljs.core.get.call(null,map__708430__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__708430__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__708425_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__708425_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__708432_SHARP_,p2__708433_SHARP_){
return cljs.core.assoc.call(null,p1__708432_SHARP_,cljs.core.get.call(null,p2__708433_SHARP_,key),p2__708433_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_708434 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_708434);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_708434);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__708435,p__708436){
var map__708441 = p__708435;
var map__708441__$1 = ((((!((map__708441 == null)))?((((map__708441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708441):map__708441);
var on_cssload = cljs.core.get.call(null,map__708441__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__708442 = p__708436;
var map__708442__$1 = ((((!((map__708442 == null)))?((((map__708442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__708442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__708442):map__708442);
var files_msg = map__708442__$1;
var files = cljs.core.get.call(null,map__708442__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489703355656
// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__706540){
var map__706598 = p__706540;
var map__706598__$1 = ((((!((map__706598 == null)))?((((map__706598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706598):map__706598);
var m = map__706598__$1;
var n = cljs.core.get.call(null,map__706598__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__706598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__706600_706644 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__706601_706645 = null;
var count__706602_706646 = (0);
var i__706603_706647 = (0);
while(true){
if((i__706603_706647 < count__706602_706646)){
var f_706655 = cljs.core._nth.call(null,chunk__706601_706645,i__706603_706647);
cljs.core.println.call(null,"  ",f_706655);

var G__706657 = seq__706600_706644;
var G__706658 = chunk__706601_706645;
var G__706659 = count__706602_706646;
var G__706660 = (i__706603_706647 + (1));
seq__706600_706644 = G__706657;
chunk__706601_706645 = G__706658;
count__706602_706646 = G__706659;
i__706603_706647 = G__706660;
continue;
} else {
var temp__6753__auto___706665 = cljs.core.seq.call(null,seq__706600_706644);
if(temp__6753__auto___706665){
var seq__706600_706667__$1 = temp__6753__auto___706665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706600_706667__$1)){
var c__28561__auto___706672 = cljs.core.chunk_first.call(null,seq__706600_706667__$1);
var G__706688 = cljs.core.chunk_rest.call(null,seq__706600_706667__$1);
var G__706689 = c__28561__auto___706672;
var G__706690 = cljs.core.count.call(null,c__28561__auto___706672);
var G__706691 = (0);
seq__706600_706644 = G__706688;
chunk__706601_706645 = G__706689;
count__706602_706646 = G__706690;
i__706603_706647 = G__706691;
continue;
} else {
var f_706697 = cljs.core.first.call(null,seq__706600_706667__$1);
cljs.core.println.call(null,"  ",f_706697);

var G__706704 = cljs.core.next.call(null,seq__706600_706667__$1);
var G__706705 = null;
var G__706706 = (0);
var G__706707 = (0);
seq__706600_706644 = G__706704;
chunk__706601_706645 = G__706705;
count__706602_706646 = G__706706;
i__706603_706647 = G__706707;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_706715 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27650__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_706715);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_706715)))?cljs.core.second.call(null,arglists_706715):arglists_706715));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__706607_706769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__706608_706770 = null;
var count__706609_706771 = (0);
var i__706610_706772 = (0);
while(true){
if((i__706610_706772 < count__706609_706771)){
var vec__706611_706773 = cljs.core._nth.call(null,chunk__706608_706770,i__706610_706772);
var name_706774 = cljs.core.nth.call(null,vec__706611_706773,(0),null);
var map__706614_706775 = cljs.core.nth.call(null,vec__706611_706773,(1),null);
var map__706614_706776__$1 = ((((!((map__706614_706775 == null)))?((((map__706614_706775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706614_706775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706614_706775):map__706614_706775);
var doc_706777 = cljs.core.get.call(null,map__706614_706776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_706778 = cljs.core.get.call(null,map__706614_706776__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_706774);

cljs.core.println.call(null," ",arglists_706778);

if(cljs.core.truth_(doc_706777)){
cljs.core.println.call(null," ",doc_706777);
} else {
}

var G__706812 = seq__706607_706769;
var G__706813 = chunk__706608_706770;
var G__706814 = count__706609_706771;
var G__706815 = (i__706610_706772 + (1));
seq__706607_706769 = G__706812;
chunk__706608_706770 = G__706813;
count__706609_706771 = G__706814;
i__706610_706772 = G__706815;
continue;
} else {
var temp__6753__auto___706820 = cljs.core.seq.call(null,seq__706607_706769);
if(temp__6753__auto___706820){
var seq__706607_706821__$1 = temp__6753__auto___706820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706607_706821__$1)){
var c__28561__auto___706828 = cljs.core.chunk_first.call(null,seq__706607_706821__$1);
var G__706830 = cljs.core.chunk_rest.call(null,seq__706607_706821__$1);
var G__706831 = c__28561__auto___706828;
var G__706832 = cljs.core.count.call(null,c__28561__auto___706828);
var G__706833 = (0);
seq__706607_706769 = G__706830;
chunk__706608_706770 = G__706831;
count__706609_706771 = G__706832;
i__706610_706772 = G__706833;
continue;
} else {
var vec__706616_706834 = cljs.core.first.call(null,seq__706607_706821__$1);
var name_706835 = cljs.core.nth.call(null,vec__706616_706834,(0),null);
var map__706619_706836 = cljs.core.nth.call(null,vec__706616_706834,(1),null);
var map__706619_706837__$1 = ((((!((map__706619_706836 == null)))?((((map__706619_706836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706619_706836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706619_706836):map__706619_706836);
var doc_706838 = cljs.core.get.call(null,map__706619_706837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_706839 = cljs.core.get.call(null,map__706619_706837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_706835);

cljs.core.println.call(null," ",arglists_706839);

if(cljs.core.truth_(doc_706838)){
cljs.core.println.call(null," ",doc_706838);
} else {
}

var G__706859 = cljs.core.next.call(null,seq__706607_706821__$1);
var G__706861 = null;
var G__706862 = (0);
var G__706863 = (0);
seq__706607_706769 = G__706859;
chunk__706608_706770 = G__706861;
count__706609_706771 = G__706862;
i__706610_706772 = G__706863;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__706627 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__706628 = null;
var count__706629 = (0);
var i__706630 = (0);
while(true){
if((i__706630 < count__706629)){
var role = cljs.core._nth.call(null,chunk__706628,i__706630);
var temp__6753__auto___706892__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___706892__$1)){
var spec_706913 = temp__6753__auto___706892__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_706913));
} else {
}

var G__706916 = seq__706627;
var G__706917 = chunk__706628;
var G__706918 = count__706629;
var G__706919 = (i__706630 + (1));
seq__706627 = G__706916;
chunk__706628 = G__706917;
count__706629 = G__706918;
i__706630 = G__706919;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__706627);
if(temp__6753__auto____$1){
var seq__706627__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706627__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__706627__$1);
var G__706934 = cljs.core.chunk_rest.call(null,seq__706627__$1);
var G__706935 = c__28561__auto__;
var G__706936 = cljs.core.count.call(null,c__28561__auto__);
var G__706937 = (0);
seq__706627 = G__706934;
chunk__706628 = G__706935;
count__706629 = G__706936;
i__706630 = G__706937;
continue;
} else {
var role = cljs.core.first.call(null,seq__706627__$1);
var temp__6753__auto___706946__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___706946__$2)){
var spec_706947 = temp__6753__auto___706946__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_706947));
} else {
}

var G__706958 = cljs.core.next.call(null,seq__706627__$1);
var G__706959 = null;
var G__706960 = (0);
var G__706961 = (0);
seq__706627 = G__706958;
chunk__706628 = G__706959;
count__706629 = G__706960;
i__706630 = G__706961;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489703354932
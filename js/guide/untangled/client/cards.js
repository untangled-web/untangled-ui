// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.client.cards');
goog.require('cljs.core');
goog.require('untangled.client.core');
goog.require('devcards.core');
goog.require('untangled.dom');
/**
 * Embed an untangled client application in a devcard. The `args` can be any args you'd
 *   normally pass to `new-untangled-client` except for `:initial-state` (which is taken from
 *   InitialAppState or the card's data in that preferred order)
 */
untangled.client.cards.untangled_app = (function untangled$client$cards$untangled_app(var_args){
var args__28878__auto__ = [];
var len__28871__auto___705028 = arguments.length;
var i__28872__auto___705029 = (0);
while(true){
if((i__28872__auto___705029 < len__28871__auto___705028)){
args__28878__auto__.push((arguments[i__28872__auto___705029]));

var G__705031 = (i__28872__auto___705029 + (1));
i__28872__auto___705029 = G__705031;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((3) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((3)),(0),null)):null);
return untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28879__auto__);
});

untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,root_ui,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("devcards.core","dom-node","devcards.core/dom-node",1263576311,null)),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28584__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state-atom__704970__auto__","state-atom__704970__auto__",-1937977195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node__704971__auto__","node__704971__auto__",1270868802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.client.core","mount","untangled.client.core/mount",1628552673,null)),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.client.core","new-untangled-client","untangled.client.core/new-untangled-client",1297354047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state-atom__704970__auto__","state-atom__704970__auto__",-1937977195,null)),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = root_ui;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"node__704971__auto__","node__704971__auto__",1270868802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","setTimeout","js/setTimeout",-574009236,null)),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__28584__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"state-atom__704970__auto__","state-atom__704970__auto__",-1937977195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.dom","unique-key","untangled.dom/unique-key",2097928944,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1000)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
});

untangled.client.cards.untangled_app.cljs$lang$maxFixedArity = (3);

untangled.client.cards.untangled_app.cljs$lang$applyTo = (function (seq704972){
var G__704973 = cljs.core.first.call(null,seq704972);
var seq704972__$1 = cljs.core.next.call(null,seq704972);
var G__704974 = cljs.core.first.call(null,seq704972__$1);
var seq704972__$2 = cljs.core.next.call(null,seq704972__$1);
var G__704975 = cljs.core.first.call(null,seq704972__$2);
var seq704972__$3 = cljs.core.next.call(null,seq704972__$2);
return untangled.client.cards.untangled_app.cljs$core$IFn$_invoke$arity$variadic(G__704973,G__704974,G__704975,seq704972__$3);
});


untangled.client.cards.untangled_app.cljs$lang$macro = true;

//# sourceMappingURL=cards.js.map?rel=1489703353393
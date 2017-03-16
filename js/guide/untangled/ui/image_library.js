// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.image_library');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.i18n');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('untangled.client.mutations');
untangled.ui.image_library.debounce = (function untangled$ui$image_library$debounce(timeout,f){
var id = cljs.core.atom.call(null,null);
return ((function (id){
return (function() { 
var G__706336__delegate = function (args){
if(!((cljs.core.deref.call(null,id) == null))){
clearTimeout(cljs.core.deref.call(null,id));
} else {
}

return cljs.core.reset_BANG_.call(null,id,setTimeout(cljs.core.partial.call(null,cljs.core.apply,f,args),timeout));
};
var G__706336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__706337__i = 0, G__706337__a = new Array(arguments.length -  0);
while (G__706337__i < G__706337__a.length) {G__706337__a[G__706337__i] = arguments[G__706337__i + 0]; ++G__706337__i;}
  args = new cljs.core.IndexedSeq(G__706337__a,0);
} 
return G__706336__delegate.call(this,args);};
G__706336.cljs$lang$maxFixedArity = 0;
G__706336.cljs$lang$applyTo = (function (arglist__706340){
var args = cljs.core.seq(arglist__706340);
return G__706336__delegate(args);
});
G__706336.cljs$core$IFn$_invoke$arity$variadic = G__706336__delegate;
return G__706336;
})()
;
;})(id))
});
untangled.ui.image_library.get_img_sizes = (function untangled$ui$image_library$get_img_sizes(file,cb){
var create_object_url = (function (p1__706347_SHARP_){
return (function (){var or__27650__auto__ = window.URL;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return window.webkitURL;
}
})().createObjectURL(p1__706347_SHARP_);
});
var img = (new Image());
img.addEventListener("load",((function (create_object_url,img){
return (function (){
var this$ = this;
return cb.call(null,this$.width,this$.height);
});})(create_object_url,img))
);

return goog.object.set(img,"src",create_object_url.call(null,file));
});
untangled.ui.image_library.read_file = (function untangled$ui$image_library$read_file(fileEvt,callback){
var files = fileEvt.target.files;
var seq__706374 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,files));
var chunk__706375 = null;
var count__706376 = (0);
var i__706377 = (0);
while(true){
if((i__706377 < count__706376)){
var file = cljs.core._nth.call(null,chunk__706375,i__706377);
var read_method_706383 = ((function (seq__706374,chunk__706375,count__706376,i__706377,file,files){
return (function (p1__706358_SHARP_,p2__706359_SHARP_){
return p1__706358_SHARP_.readAsBinaryString(p2__706359_SHARP_);
});})(seq__706374,chunk__706375,count__706376,i__706377,file,files))
;
var reader_706384 = (new FileReader());
reader_706384.addEventListener("load",cljs.core.comp.call(null,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files){
return (function (data){
return untangled.ui.image_library.get_img_sizes.call(null,file,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files){
return (function (width,height){
return callback.call(null,file.name,file.size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),data);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files))
);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files))
,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files){
return (function (p1__706360_SHARP_){
return window.btoa(p1__706360_SHARP_);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files))
,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files){
return (function (p1__706361_SHARP_){
return p1__706361_SHARP_.target.result;
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706383,reader_706384,file,files))
));

read_method_706383.call(null,reader_706384,file);

var G__706395 = seq__706374;
var G__706396 = chunk__706375;
var G__706397 = count__706376;
var G__706398 = (i__706377 + (1));
seq__706374 = G__706395;
chunk__706375 = G__706396;
count__706376 = G__706397;
i__706377 = G__706398;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__706374);
if(temp__6753__auto__){
var seq__706374__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__706374__$1)){
var c__28561__auto__ = cljs.core.chunk_first.call(null,seq__706374__$1);
var G__706399 = cljs.core.chunk_rest.call(null,seq__706374__$1);
var G__706400 = c__28561__auto__;
var G__706401 = cljs.core.count.call(null,c__28561__auto__);
var G__706402 = (0);
seq__706374 = G__706399;
chunk__706375 = G__706400;
count__706376 = G__706401;
i__706377 = G__706402;
continue;
} else {
var file = cljs.core.first.call(null,seq__706374__$1);
var read_method_706403 = ((function (seq__706374,chunk__706375,count__706376,i__706377,file,seq__706374__$1,temp__6753__auto__,files){
return (function (p1__706358_SHARP_,p2__706359_SHARP_){
return p1__706358_SHARP_.readAsBinaryString(p2__706359_SHARP_);
});})(seq__706374,chunk__706375,count__706376,i__706377,file,seq__706374__$1,temp__6753__auto__,files))
;
var reader_706404 = (new FileReader());
reader_706404.addEventListener("load",cljs.core.comp.call(null,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files){
return (function (data){
return untangled.ui.image_library.get_img_sizes.call(null,file,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files){
return (function (width,height){
return callback.call(null,file.name,file.size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),data);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files))
);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files))
,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files){
return (function (p1__706360_SHARP_){
return window.btoa(p1__706360_SHARP_);
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files))
,((function (seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files){
return (function (p1__706361_SHARP_){
return p1__706361_SHARP_.target.result;
});})(seq__706374,chunk__706375,count__706376,i__706377,read_method_706403,reader_706404,file,seq__706374__$1,temp__6753__auto__,files))
));

read_method_706403.call(null,reader_706404,file);

var G__706423 = cljs.core.next.call(null,seq__706374__$1);
var G__706424 = null;
var G__706425 = (0);
var G__706426 = (0);
seq__706374 = G__706423;
chunk__706375 = G__706424;
count__706376 = G__706425;
i__706377 = G__706426;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.ui.image_library.store_file = (function untangled$ui$image_library$store_file(image_library_component,file_name,file_size,file_dimensions,data){
return om.next.transact_BANG_.call(null,image_library_component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.component.image-library","store","untangled.component.image-library/store",-92354521,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),om.next.tempid.call(null),new cljs.core.Keyword("content","data","content/data",945459912),data,new cljs.core.Keyword("image","name","image/name",1609496982),file_name,new cljs.core.Keyword("image","size","image/size",1534582828),file_size,new cljs.core.Keyword("image","dimensions","image/dimensions",-154246996),file_dimensions], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})(),(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.component.image-library","refresh","untangled.component.image-library/refresh",-1790436266,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,image_library_component))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});
untangled.ui.image_library.path = (function untangled$ui$image_library$path(base,target){
if(clojure.string.ends_with_QMARK_.call(null,base,"/")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)].join('');
}
});


untangled.ui.image_library.load_images = (function untangled$ui$image_library$load_images(picker,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("untangled.component.image-picker","picker-loading","untangled.component.image-picker/picker-loading",2040653263),(function (){var or__27650__auto__ = picker;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return new cljs.core.Keyword(null,"singleton","singleton",-1768662798);
}
})());

return untangled.client.data_fetch.load_data_action.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("untangled.component.image-picker","images-loaded","untangled.component.image-picker/images-loaded",-235861128,null));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-picker","images-loaded","untangled.component.image-picker/images-loaded",-235861128,null),(function (p__706451,_,___$1){
var map__706452 = p__706451;
var map__706452__$1 = ((((!((map__706452 == null)))?((((map__706452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706452):map__706452);
var state = cljs.core.get.call(null,map__706452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706452,map__706452__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__706452,map__706452__$1,state){
return (function (p__706456){
var map__706457 = p__706456;
var map__706457__$1 = ((((!((map__706457 == null)))?((((map__706457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706457):map__706457);
var s = map__706457__$1;
var images = cljs.core.get.call(null,map__706457__$1,new cljs.core.Keyword(null,"images","images",1757475080));
var picker_loading = cljs.core.get.call(null,map__706457__$1,new cljs.core.Keyword("untangled.component.image-picker","picker-loading","untangled.component.image-picker/picker-loading",2040653263));
return untangled.ui.image_library.update_current_page.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,s,new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword("untangled.component.image-picker","picker-loading","untangled.component.image-picker/picker-loading",2040653263)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),picker_loading,new cljs.core.Keyword(null,"images","images",1757475080)], null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.set,cljs.core.concat),images),picker_loading);
});})(map__706452,map__706452__$1,state))
);
});})(map__706452,map__706452__$1,state))
], null);
}));
/**
 * Returns a new application state-db with the indicated image-library updated to have its current page filled.
 */
untangled.ui.image_library.update_current_page = (function untangled$ui$image_library$update_current_page(var_args){
var args__28878__auto__ = [];
var len__28871__auto___706501 = arguments.length;
var i__28872__auto___706502 = (0);
while(true){
if((i__28872__auto___706502 < len__28871__auto___706501)){
args__28878__auto__.push((arguments[i__28872__auto___706502]));

var G__706510 = (i__28872__auto___706502 + (1));
i__28872__auto___706502 = G__706510;
continue;
} else {
}
break;
}

var argseq__28879__auto__ = ((((2) < args__28878__auto__.length))?(new cljs.core.IndexedSeq(args__28878__auto__.slice((2)),(0),null)):null);
return untangled.ui.image_library.update_current_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28879__auto__);
});

untangled.ui.image_library.update_current_page.cljs$core$IFn$_invoke$arity$variadic = (function (state_db,picker_id,p__706482){
var map__706483 = p__706482;
var map__706483__$1 = ((((!((map__706483 == null)))?((((map__706483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706483):map__706483);
var show_more = cljs.core.get.call(null,map__706483__$1,new cljs.core.Keyword(null,"show-more","show-more",-559964732));
var map__706485 = cljs.core.get_in.call(null,state_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),picker_id], null));
var map__706485__$1 = ((((!((map__706485 == null)))?((((map__706485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706485):map__706485);
var images = cljs.core.get.call(null,map__706485__$1,new cljs.core.Keyword(null,"images","images",1757475080));
var search_string = cljs.core.get.call(null,map__706485__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
var page_size = cljs.core.get.call(null,map__706485__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
var current_page = cljs.core.get.call(null,map__706485__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var xf = cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more){
return (function (p1__706476_SHARP_){
return cljs.core.get_in.call(null,state_db,p1__706476_SHARP_);
});})(map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more))
),cljs.core.filter.call(null,((function (map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more){
return (function (p__706487){
var map__706488 = p__706487;
var map__706488__$1 = ((((!((map__706488 == null)))?((((map__706488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706488):map__706488);
var img = map__706488__$1;
var name = cljs.core.get.call(null,map__706488__$1,new cljs.core.Keyword("image","name","image/name",1609496982));
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,name),clojure.string.lower_case.call(null,search_string));
});})(map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more))
),cljs.core.map.call(null,((function (map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more){
return (function (img){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(img)], null),img);
});})(map__706485,map__706485__$1,images,search_string,page_size,current_page,map__706483,map__706483__$1,show_more))
));
var current_page_normalized = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,images);
return cljs.core.assoc_in.call(null,state_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),picker_id,new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null),cljs.core.vec.call(null,cljs.core.take.call(null,(function (){var G__706492 = page_size;
if(cljs.core.truth_(show_more)){
return (G__706492 + cljs.core.count.call(null,current_page));
} else {
return G__706492;
}
})(),cljs.core.sort_by.call(null,cljs.core.meta,((function (map__706485,map__706485__$1,images,search_string,page_size,current_page,xf,current_page_normalized,map__706483,map__706483__$1,show_more){
return (function (p__706493,p__706494){
var map__706495 = p__706493;
var map__706495__$1 = ((((!((map__706495 == null)))?((((map__706495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706495):map__706495);
var l = map__706495__$1;
var recent_l = cljs.core.get.call(null,map__706495__$1,new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814));
var map__706496 = p__706494;
var map__706496__$1 = ((((!((map__706496 == null)))?((((map__706496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706496):map__706496);
var r = map__706496__$1;
var recent_r = cljs.core.get.call(null,map__706496__$1,new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814));
var compare_img = ((function (map__706495,map__706495__$1,l,recent_l,map__706496,map__706496__$1,r,recent_r,map__706485,map__706485__$1,images,search_string,page_size,current_page,xf,current_page_normalized,map__706483,map__706483__$1,show_more){
return (function (l__$1,r__$1){
return cljs.core.compare.call(null,clojure.string.lower_case.call(null,new cljs.core.Keyword("image","name","image/name",1609496982).cljs$core$IFn$_invoke$arity$1(l__$1)),clojure.string.lower_case.call(null,new cljs.core.Keyword("image","name","image/name",1609496982).cljs$core$IFn$_invoke$arity$1(r__$1)));
});})(map__706495,map__706495__$1,l,recent_l,map__706496,map__706496__$1,r,recent_r,map__706485,map__706485__$1,images,search_string,page_size,current_page,xf,current_page_normalized,map__706483,map__706483__$1,show_more))
;
if(cljs.core.truth_((function (){var and__27638__auto__ = recent_l;
if(cljs.core.truth_(and__27638__auto__)){
return recent_r;
} else {
return and__27638__auto__;
}
})())){
return compare_img.call(null,l,r);
} else {
if(cljs.core.truth_((function (){var and__27638__auto__ = recent_l;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not.call(null,recent_r);
} else {
return and__27638__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__27638__auto__ = cljs.core.not.call(null,recent_l);
if(and__27638__auto__){
return recent_r;
} else {
return and__27638__auto__;
}
})())){
return (1);
} else {
return compare_img.call(null,l,r);

}
}
}
});})(map__706485,map__706485__$1,images,search_string,page_size,current_page,xf,current_page_normalized,map__706483,map__706483__$1,show_more))
,current_page_normalized))));
});

untangled.ui.image_library.update_current_page.cljs$lang$maxFixedArity = (2);

untangled.ui.image_library.update_current_page.cljs$lang$applyTo = (function (seq706477){
var G__706478 = cljs.core.first.call(null,seq706477);
var seq706477__$1 = cljs.core.next.call(null,seq706477);
var G__706479 = cljs.core.first.call(null,seq706477__$1);
var seq706477__$2 = cljs.core.next.call(null,seq706477__$1);
return untangled.ui.image_library.update_current_page.cljs$core$IFn$_invoke$arity$variadic(G__706478,G__706479,seq706477__$2);
});

untangled.ui.image_library.search = (function untangled$ui$image_library$search(picker_id,pattern,state_db){
return untangled.ui.image_library.update_current_page.call(null,cljs.core.assoc_in.call(null,state_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),picker_id,new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),pattern),picker_id);
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-library","search","untangled.component.image-library/search",-6604193,null),(function (p__706622,_,p__706623){
var map__706624 = p__706622;
var map__706624__$1 = ((((!((map__706624 == null)))?((((map__706624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706624):map__706624);
var env = map__706624__$1;
var state = cljs.core.get.call(null,map__706624__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__706625 = p__706623;
var map__706625__$1 = ((((!((map__706625 == null)))?((((map__706625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706625):map__706625);
var picker = cljs.core.get.call(null,map__706625__$1,new cljs.core.Keyword(null,"picker","picker",-659389603));
var pattern = cljs.core.get.call(null,map__706625__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706624,map__706624__$1,env,state,map__706625,map__706625__$1,picker,pattern){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,untangled.ui.image_library.search,picker,pattern));
});})(map__706624,map__706624__$1,env,state,map__706625,map__706625__$1,picker,pattern))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-library","store","untangled.component.image-library/store",-92354521,null),(function (p__706668,_,p__706669){
var map__706670 = p__706668;
var map__706670__$1 = ((((!((map__706670 == null)))?((((map__706670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706670):map__706670);
var state = cljs.core.get.call(null,map__706670__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__706670__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var ast = cljs.core.get.call(null,map__706670__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__706671 = p__706669;
var map__706671__$1 = ((((!((map__706671 == null)))?((((map__706671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706671):map__706671);
var params = map__706671__$1;
var id = cljs.core.get.call(null,map__706671__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706670,map__706670__$1,state,ref,ast,map__706671,map__706671__$1,params,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__706670,map__706670__$1,state,ref,ast,map__706671,map__706671__$1,params,id){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id], null),cljs.core.assoc.call(null,cljs.core.select_keys.call(null,params,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("image","name","image/name",1609496982),new cljs.core.Keyword("image","extension","image/extension",1405903870),new cljs.core.Keyword("image","size","image/size",1534582828),new cljs.core.Keyword("image","dimensions","image/dimensions",-154246996)], null)),new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814),true)),cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"images","images",1757475080)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id], null));
});})(map__706670,map__706670__$1,state,ref,ast,map__706671,map__706671__$1,params,id))
);
});})(map__706670,map__706670__$1,state,ref,ast,map__706671,map__706671__$1,params,id))
,new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-library","refresh","untangled.component.image-library/refresh",-1790436266,null),(function (p__706779,_,p__706780){
var map__706781 = p__706779;
var map__706781__$1 = ((((!((map__706781 == null)))?((((map__706781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706781):map__706781);
var state = cljs.core.get.call(null,map__706781__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__706782 = p__706780;
var map__706782__$1 = ((((!((map__706782 == null)))?((((map__706782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706782):map__706782);
var params = map__706782__$1;
var picker = cljs.core.get.call(null,map__706782__$1,new cljs.core.Keyword(null,"picker","picker",-659389603));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706781,map__706781__$1,state,map__706782,map__706782__$1,params,picker){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.image_library.update_current_page,picker);
});})(map__706781,map__706781__$1,state,map__706782,map__706782__$1,params,picker))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-library","show-more","untangled.component.image-library/show-more",133938897,null),(function (p__706823,_,p__706824){
var map__706825 = p__706823;
var map__706825__$1 = ((((!((map__706825 == null)))?((((map__706825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706825):map__706825);
var state = cljs.core.get.call(null,map__706825__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__706826 = p__706824;
var map__706826__$1 = ((((!((map__706826 == null)))?((((map__706826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706826):map__706826);
var picker = cljs.core.get.call(null,map__706826__$1,new cljs.core.Keyword(null,"picker","picker",-659389603));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706825,map__706825__$1,state,map__706826,map__706826__$1,picker){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled.ui.image_library.update_current_page,picker,new cljs.core.Keyword(null,"show-more","show-more",-559964732),true);
});})(map__706825,map__706825__$1,state,map__706826,map__706826__$1,picker))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled.component.image-library","select","untangled.component.image-library/select",-442435396,null),(function (p__706876,_,p__706877){
var map__706878 = p__706876;
var map__706878__$1 = ((((!((map__706878 == null)))?((((map__706878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706878):map__706878);
var state = cljs.core.get.call(null,map__706878__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__706878__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__706879 = p__706877;
var map__706879__$1 = ((((!((map__706879 == null)))?((((map__706879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706879):map__706879);
var id = cljs.core.get.call(null,map__706879__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__706878,map__706878__$1,state,ref,map__706879,map__706879__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,((function (map__706878,map__706878__$1,state,ref,map__706879,map__706879__$1,id){
return (function (s){
var selected_image = cljs.core.get_in.call(null,s,cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"selected","selected",574897764)));
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,(function (){var G__706891 = s;
if(cljs.core.truth_(selected_image)){
return cljs.core.assoc_in.call(null,G__706891,cljs.core.conj.call(null,selected_image,new cljs.core.Keyword("ui","selected","ui/selected",574902016)),false);
} else {
return G__706891;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id,new cljs.core.Keyword("ui","selected","ui/selected",574902016)], null),cljs.core.not),cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"selected","selected",574897764)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id], null));
});})(map__706878,map__706878__$1,state,ref,map__706879,map__706879__$1,id))
);
});})(map__706878,map__706878__$1,state,ref,map__706879,map__706879__$1,id))
], null);
}));
if(typeof untangled.ui.image_library.ImageMedia !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.image_library.ImageMedia = (function untangled$ui$image_library$ImageMedia(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.image_library.ImageMedia.prototype = goog.object.clone(React.Component.prototype);
}

var x706969_707025 = untangled.ui.image_library.ImageMedia.prototype;
x706969_707025.componentWillUpdate = ((function (x706969_707025){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707030 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707031 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707030,next_ident__29856__auto___707031)){
var idxr__29857__auto___707033 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707033 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707033),((function (idxr__29857__auto___707033,ident__29855__auto___707030,next_ident__29856__auto___707031,this__29851__auto__,x706969_707025){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707030], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707031], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707033,ident__29855__auto___707030,next_ident__29856__auto___707031,this__29851__auto__,x706969_707025))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x706969_707025))
;

x706969_707025.shouldComponentUpdate = ((function (x706969_707025){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__706975 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__706975);
} else {
return G__706975;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x706969_707025))
;

x706969_707025.componentWillUnmount = ((function (x706969_707025){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706969_707025))
;

x706969_707025.componentDidUpdate = ((function (x706969_707025){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x706969_707025))
;

x706969_707025.isMounted = ((function (x706969_707025){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x706969_707025))
;

x706969_707025.componentWillMount = ((function (x706969_707025){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x706969_707025))
;

x706969_707025.render = ((function (x706969_707025){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_706986 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_706987 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_706988 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_706989 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_706990 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__706992 = om.next.props.call(null,this$);
var map__706992__$1 = ((((!((map__706992 == null)))?((((map__706992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706992):map__706992);
var id = cljs.core.get.call(null,map__706992__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var name = cljs.core.get.call(null,map__706992__$1,new cljs.core.Keyword("image","name","image/name",1609496982));
var image_path = cljs.core.get.call(null,map__706992__$1,new cljs.core.Keyword("ui.dev","image-path","ui.dev/image-path",-1111293908));
var recent = cljs.core.get.call(null,map__706992__$1,new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814));
var selected = cljs.core.get.call(null,map__706992__$1,new cljs.core.Keyword("ui","selected","ui/selected",574902016));
var map__706993 = om.next.get_computed.call(null,this$);
var map__706993__$1 = ((((!((map__706993 == null)))?((((map__706993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__706993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__706993):map__706993);
var image_cdn = cljs.core.get.call(null,map__706993__$1,new cljs.core.Keyword(null,"image-cdn","image-cdn",-564926461),"/assets");
var onSelect = cljs.core.get.call(null,map__706993__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return om.dom.div.call(null,({"className": "u-column--6 u-column--3@md u-column--2@xl"}),om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card c-card--inset is-selectable"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(selected)?" is-selected":null))].join('')}),((om.next.tempid_QMARK_.call(null,id))?om.dom.span.call(null,null,tr("Uploading...")):om.dom.a.call(null,({"className": "c-card__thumb", "onClick": onSelect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))}),om.dom.img.call(null,({"src": (function (){var or__27650__auto__ = image_path;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return untangled.ui.image_library.path.call(null,image_cdn,id);
}
})(), "alt": name})))),om.dom.div.call(null,({"className": "c-card__meta"}),om.dom.strong.call(null,null,name))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_706990;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_706989;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_706988;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_706987;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_706986;
}});})(x706969_707025))
;


untangled.ui.image_library.ImageMedia.prototype.constructor = untangled.ui.image_library.ImageMedia;

untangled.ui.image_library.ImageMedia.prototype.constructor.displayName = "untangled.ui.image-library/ImageMedia";

untangled.ui.image_library.ImageMedia.prototype.om$isComponent = true;

var x707002_707088 = untangled.ui.image_library.ImageMedia;
/** @nocollapse */
x707002_707088.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707002_707088.om$next$IQuery$query$arity$1 = ((function (x707002_707088){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("image","name","image/name",1609496982),new cljs.core.Keyword("ui.dev","image-path","ui.dev/image-path",-1111293908),new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814),new cljs.core.Keyword("ui","selected","ui/selected",574902016)], null);
});})(x707002_707088))
;

/** @nocollapse */
x707002_707088.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707002_707088.om$next$Ident$ident$arity$2 = ((function (x707002_707088){
return (function (this$,p__707007){
var map__707008 = p__707007;
var map__707008__$1 = ((((!((map__707008 == null)))?((((map__707008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707008):map__707008);
var id = cljs.core.get.call(null,map__707008__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id], null);
});})(x707002_707088))
;


var x707010_707098 = untangled.ui.image_library.ImageMedia.prototype;

x707010_707098.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707010_707098.om$next$IQuery$query$arity$1 = ((function (x707010_707098){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("image","name","image/name",1609496982),new cljs.core.Keyword("ui.dev","image-path","ui.dev/image-path",-1111293908),new cljs.core.Keyword("ui.image","recent","ui.image/recent",-1646744814),new cljs.core.Keyword("ui","selected","ui/selected",574902016)], null);
});})(x707010_707098))
;


x707010_707098.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707010_707098.om$next$Ident$ident$arity$2 = ((function (x707010_707098){
return (function (this$,p__707012){
var map__707013 = p__707012;
var map__707013__$1 = ((((!((map__707013 == null)))?((((map__707013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707013):map__707013);
var id = cljs.core.get.call(null,map__707013__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image","by-id","image/by-id",-2095172214),id], null);
});})(x707010_707098))
;


untangled.ui.image_library.ImageMedia.cljs$lang$type = true;

untangled.ui.image_library.ImageMedia.cljs$lang$ctorStr = "untangled.ui.image-library/ImageMedia";

untangled.ui.image_library.ImageMedia.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.image-library/ImageMedia");
});
untangled.ui.image_library.ui_image_media = om.next.factory.call(null,untangled.ui.image_library.ImageMedia,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
/**
 * TODO: Describe how to build this.
 */
untangled.ui.image_library.make_image_library = (function untangled$ui$image_library$make_image_library(p__707168){
var map__707173 = p__707168;
var map__707173__$1 = ((((!((map__707173 == null)))?((((map__707173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707173):map__707173);
var id = cljs.core.get.call(null,map__707173__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"singleton","singleton",-1768662798));
var page_size = cljs.core.get.call(null,map__707173__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073),(25));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page-size","page-size",223836073),page_size,new cljs.core.Keyword(null,"search-string","search-string",68818394),"",new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.PersistentVector.EMPTY], null);
});
if(typeof untangled.ui.image_library.ImageLibrary !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.image_library.ImageLibrary = (function untangled$ui$image_library$ImageLibrary(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.image_library.ImageLibrary.prototype = goog.object.clone(React.Component.prototype);
}

var x707199_707308 = untangled.ui.image_library.ImageLibrary.prototype;
x707199_707308.componentWillUpdate = ((function (x707199_707308){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___707321 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___707322 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___707321,next_ident__29856__auto___707322)){
var idxr__29857__auto___707330 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___707330 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___707330),((function (idxr__29857__auto___707330,ident__29855__auto___707321,next_ident__29856__auto___707322,this__29851__auto__,x707199_707308){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___707321], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___707322], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___707330,ident__29855__auto___707321,next_ident__29856__auto___707322,this__29851__auto__,x707199_707308))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x707199_707308))
;

x707199_707308.shouldComponentUpdate = ((function (x707199_707308){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__707201 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__707201);
} else {
return G__707201;
}
})();
var or__27650__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__29851__auto__),next_props__29852__auto____$2);
if(or__27650__auto__){
return or__27650__auto__;
} else {
var or__27650__auto____$1 = (function (){var and__27638__auto__ = this__29851__auto__.state;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__29851__auto__.state,"omcljs$state"),goog.object.get(next_state__29853__auto__,"omcljs$state"));
} else {
return and__27638__auto__;
}
})();
if(cljs.core.truth_(or__27650__auto____$1)){
return or__27650__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__29851__auto__.props.children,next_children__29854__auto__);
}
}
});})(x707199_707308))
;

x707199_707308.componentWillUnmount = ((function (x707199_707308){
return (function (){
var this__29851__auto__ = this;
var r__29862__auto__ = om.next.get_reconciler.call(null,this__29851__auto__);
var cfg__29863__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__29862__auto__);
var st__29864__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
var indexer__29861__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__29863__auto__);
if(cljs.core.truth_((function (){var and__27638__auto__ = !((st__29864__auto__ == null));
if(and__27638__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__29864__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__29851__auto__], null));
} else {
return and__27638__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__29864__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__29851__auto__);
} else {
}

if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707199_707308))
;

x707199_707308.componentDidUpdate = ((function (x707199_707308){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x707199_707308))
;

x707199_707308.isMounted = ((function (x707199_707308){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x707199_707308))
;

x707199_707308.componentWillMount = ((function (x707199_707308){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x707199_707308))
;

x707199_707308.search = ((function (x707199_707308){
return (function (id){
var this$ = this;
return ((function (this$,x707199_707308){
return (function (p1__707185_SHARP_){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.component.image-library","search","untangled.component.image-library/search",-6604193,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"picker","picker",-659389603),id,new cljs.core.Keyword(null,"pattern","pattern",242135423),p1__707185_SHARP_.target.value], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});
;})(this$,x707199_707308))
});})(x707199_707308))
;

x707199_707308.select = ((function (x707199_707308){
return (function (p__707208){
var map__707209 = p__707208;
var map__707209__$1 = ((((!((map__707209 == null)))?((((map__707209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707209):map__707209);
var id = cljs.core.get.call(null,map__707209__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__707209__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var this$ = this;
return ((function (this$,map__707209,map__707209__$1,id,path,x707199_707308){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.component.image-library","select","untangled.component.image-library/select",-442435396,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),path], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});
;})(this$,map__707209,map__707209__$1,id,path,x707199_707308))
});})(x707199_707308))
;

x707199_707308.on_upload = ((function (x707199_707308){
return (function (){
var this$ = this;
return ((function (this$,x707199_707308){
return (function (input){
return untangled.ui.image_library.read_file.call(null,input,cljs.core.partial.call(null,untangled.ui.image_library.store_file,this$));
});
;})(this$,x707199_707308))
});})(x707199_707308))
;

x707199_707308.show_more = ((function (x707199_707308){
return (function (){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28584__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled.component.image-library","show-more","untangled.component.image-library/show-more",133938897,null)),(function (){var x__28584__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28584__auto__);
})())))));
});})(x707199_707308))
;

x707199_707308.render_toolbar = ((function (x707199_707308){
return (function (){
var this$ = this;
var map__707215 = om.next.props.call(null,this$);
var map__707215__$1 = ((((!((map__707215 == null)))?((((map__707215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707215):map__707215);
var id = cljs.core.get.call(null,map__707215__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var search_string = cljs.core.get.call(null,map__707215__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return om.dom.div.call(null,({"className": "o-modal__toolbar"}),om.dom.div.call(null,({"className": "u-start"}),om.dom.div.call(null,({"className": "o-input"}),om.dom.input.call(null,({"className": "o-input__box", "onChange": this$.search(id), "value": (function (){var or__27650__auto__ = search_string;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return "";
}
})(), "placeholder": tr("Search your images")})),this$.getIconFn().call(null,new cljs.core.Keyword(null,"search","search",1564939822)))),om.dom.div.call(null,({"className": "u-end"})));
});})(x707199_707308))
;

x707199_707308.componentDidMount = ((function (x707199_707308){
return (function (newprops){
var this$ = this;
var image_list = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"image-list","image-list",1901154921));
return goog.events.listen(image_list,goog.events.EventType.SCROLL,untangled.ui.image_library.debounce.call(null,(150),((function (image_list,this$,x707199_707308){
return (function (_){
if((image_list.scrollHeight <= (image_list.offsetHeight + image_list.scrollTop))){
return this$.show_more();
} else {
return null;
}
});})(image_list,this$,x707199_707308))
));
});})(x707199_707308))
;

x707199_707308.getIconFn = ((function (x707199_707308){
return (function (){
var this$ = this;
return om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"icon-fn","icon-fn",-1497534529));
});})(x707199_707308))
;

x707199_707308.render_images = ((function (x707199_707308){
return (function (){
var this$ = this;
var map__707219 = om.next.props.call(null,this$);
var map__707219__$1 = ((((!((map__707219 == null)))?((((map__707219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707219):map__707219);
var id = cljs.core.get.call(null,map__707219__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var current_page = cljs.core.get.call(null,map__707219__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var images = cljs.core.get.call(null,map__707219__$1,new cljs.core.Keyword(null,"images","images",1757475080));
var map__707220 = om.next.get_computed.call(null,this$);
var map__707220__$1 = ((((!((map__707220 == null)))?((((map__707220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707220):map__707220);
var image_cdn = cljs.core.get.call(null,map__707220__$1,new cljs.core.Keyword(null,"image-cdn","image-cdn",-564926461));
var map__707221 = om.next.get_state.call(null,this$);
var map__707221__$1 = ((((!((map__707221 == null)))?((((map__707221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707221):map__707221);
var image_list = cljs.core.get.call(null,map__707221__$1,new cljs.core.Keyword(null,"image-list","image-list",1901154921));
return om.dom.div.call(null,({"className": "o-modal__content", "ref": ((function (map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308){
return (function (p1__707189_SHARP_){
if(cljs.core.truth_(p1__707189_SHARP_)){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"image-list","image-list",1901154921),ReactDOM.findDOMNode(p1__707189_SHARP_));
} else {
return null;
}
});})(map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308))
}),om.dom.div.call(null,({"className": "u-row"}),((cljs.core.empty_QMARK_.call(null,current_page))?om.dom.span.call(null,null,"No Images found!"):cljs.core.map.call(null,((function (map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308){
return (function (img){
return untangled.ui.image_library.ui_image_media.call(null,om.next.computed.call(null,img,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image-cdn","image-cdn",-564926461),image_cdn,new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308){
return (function (p1__707190_SHARP_){
return this$.select(p1__707190_SHARP_);
});})(map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308))
], null)));
});})(map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308))
,current_page)),om.dom.div.call(null,({"className": "u-center"}),((cljs.core._EQ_.call(null,cljs.core.count.call(null,current_page),cljs.core.count.call(null,images)))?null:om.dom.button.call(null,({"className": "c-button", "onClick": ((function (map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308){
return (function (){
return this$.show_more();
});})(map__707219,map__707219__$1,id,current_page,images,map__707220,map__707220__$1,image_cdn,map__707221,map__707221__$1,image_list,this$,x707199_707308))
}),"Show more")))));
});})(x707199_707308))
;

x707199_707308.render_page_control = ((function (x707199_707308){
return (function (){
var this$ = this;
var map__707252 = om.next.props.call(null,this$);
var map__707252__$1 = ((((!((map__707252 == null)))?((((map__707252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707252):map__707252);
var id = cljs.core.get.call(null,map__707252__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var current_page = cljs.core.get.call(null,map__707252__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var selected = cljs.core.get.call(null,map__707252__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__707253 = om.next.get_computed.call(null,this$);
var map__707253__$1 = ((((!((map__707253 == null)))?((((map__707253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707253):map__707253);
var image_cdn = cljs.core.get.call(null,map__707253__$1,new cljs.core.Keyword(null,"image-cdn","image-cdn",-564926461));
var onClose = cljs.core.get.call(null,map__707253__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
var onSelect = cljs.core.get.call(null,map__707253__$1,new cljs.core.Keyword(null,"onSelect","onSelect",251862405));
return om.dom.div.call(null,({"className": "o-modal__footer"}),om.dom.input.call(null,({"type": "file", "className": "u-hide", "multiple": true, "accept": "image/*", "ref": ((function (map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308){
return (function (p1__707192_SHARP_){
if(cljs.core.truth_(p1__707192_SHARP_)){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"file-input","file-input",-681020476),ReactDOM.findDOMNode(p1__707192_SHARP_));
} else {
return null;
}
});})(map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308))
, "onChange": this$.on_upload()})),om.dom.div.call(null,({"className": "u-start"}),om.dom.button.call(null,({"className": "c-button", "onClick": ((function (map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308){
return (function (){
return om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"file-input","file-input",-681020476)).click();
});})(map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308))
}),this$.getIconFn().call(null,new cljs.core.Keyword(null,"cloud_upload","cloud_upload",-1812135533)),om.dom.span.call(null,null,tr("Upload image")))),om.dom.div.call(null,({"className": "u-end"}),om.dom.button.call(null,({"className": "c-button c-button--text", "onClick": onClose}),tr("Cancel")),om.dom.button.call(null,({"className": "c-button c-button--secondary", "disabled": (cljs.core.truth_(selected)?null:true), "onClick": ((function (map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308){
return (function (){
return onSelect.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"path","path",-188191168),untangled.ui.image_library.path.call(null,image_cdn,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(selected))], null));
});})(map__707252,map__707252__$1,id,current_page,selected,map__707253,map__707253__$1,image_cdn,onClose,onSelect,this$,x707199_707308))
}),tr("Insert image"))));
});})(x707199_707308))
;

x707199_707308.render_header = ((function (x707199_707308){
return (function (){
var this$ = this;
var map__707264 = om.next.get_computed.call(null,this$);
var map__707264__$1 = ((((!((map__707264 == null)))?((((map__707264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707264):map__707264);
var onClose = cljs.core.get.call(null,map__707264__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
return om.dom.div.call(null,({"className": "o-modal__title"}),this$.getIconFn().call(null,new cljs.core.Keyword(null,"arrow_back","arrow_back",-797387964),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["u-hide@md-up"], null),new cljs.core.Keyword(null,"title","title",636505583),tr("Back"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClose),om.dom.h1.call(null,({"className": "o-modal__heading"}),tr("Choose an image")),this$.getIconFn().call(null,new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["u-hide@sm"], null),new cljs.core.Keyword(null,"title","title",636505583),tr("Close"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClose));
});})(x707199_707308))
;

x707199_707308.render_backdrop = ((function (x707199_707308){
return (function (){
var this$ = this;
var map__707266 = om.next.get_computed.call(null,this$);
var map__707266__$1 = ((((!((map__707266 == null)))?((((map__707266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707266):map__707266);
var onClose = cljs.core.get.call(null,map__707266__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
return om.dom.div.call(null,({"className": "c-backdrop is-active", "onClick": onClose}));
});})(x707199_707308))
;

x707199_707308.render = ((function (x707199_707308){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_707275 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_707276 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_707277 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_707278 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_707279 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "o-modal is-active"}),om.dom.div.call(null,({"className": "o-modal__card o-modal__card--wide"}),this$.render_header(),this$.render_toolbar(),this$.render_images(),this$.render_page_control())),this$.render_backdrop());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_707279;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_707278;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_707277;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_707276;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_707275;
}});})(x707199_707308))
;


untangled.ui.image_library.ImageLibrary.prototype.constructor = untangled.ui.image_library.ImageLibrary;

untangled.ui.image_library.ImageLibrary.prototype.constructor.displayName = "untangled.ui.image-library/ImageLibrary";

untangled.ui.image_library.ImageLibrary.prototype.om$isComponent = true;

var x707284_707537 = untangled.ui.image_library.ImageLibrary;
/** @nocollapse */
x707284_707537.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707284_707537.om$next$IQuery$query$arity$1 = ((function (x707284_707537){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.Keyword(null,"search-string","search-string",68818394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null)], null);
});})(x707284_707537))
;

/** @nocollapse */
x707284_707537.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x707284_707537.om$next$Ident$ident$arity$2 = ((function (x707284_707537){
return (function (_,p__707285){
var map__707286 = p__707285;
var map__707286__$1 = ((((!((map__707286 == null)))?((((map__707286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707286):map__707286);
var id = cljs.core.get.call(null,map__707286__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"singleton","singleton",-1768662798));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),id], null);
});})(x707284_707537))
;


var x707289_707549 = untangled.ui.image_library.ImageLibrary.prototype;

x707289_707549.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x707289_707549.om$next$IQuery$query$arity$1 = ((function (x707289_707549){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.Keyword(null,"search-string","search-string",68818394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"images","images",1757475080),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,untangled.ui.image_library.ImageMedia)], null)], null);
});})(x707289_707549))
;


x707289_707549.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x707289_707549.om$next$Ident$ident$arity$2 = ((function (x707289_707549){
return (function (_,p__707294){
var map__707295 = p__707294;
var map__707295__$1 = ((((!((map__707295 == null)))?((((map__707295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__707295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__707295):map__707295);
var id = cljs.core.get.call(null,map__707295__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"singleton","singleton",-1768662798));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("image-pickers","by-id","image-pickers/by-id",-354888782),id], null);
});})(x707289_707549))
;


untangled.ui.image_library.ImageLibrary.cljs$lang$type = true;

untangled.ui.image_library.ImageLibrary.cljs$lang$ctorStr = "untangled.ui.image-library/ImageLibrary";

untangled.ui.image_library.ImageLibrary.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.image-library/ImageLibrary");
});
/**
 * Render an image library. This component supports the following computed parameters:
 * 
 * onClose   : A callback when a user clicks on cancel or the top right X.
 * onSelect  : A callback that is called with the image ID when the user selects an image.
 * image-cdn : The base path for loading the images. Defaults to /assets (serve locally instead of through CDN)
 * 
 * Intial state: This component does NOT implement `initial-state`. Instead, use `make-image-library` to build
 * initial state.
 */
untangled.ui.image_library.ui_image_library = om.next.factory.call(null,untangled.ui.image_library.ImageLibrary);

//# sourceMappingURL=image_library.js.map?rel=1489703355242
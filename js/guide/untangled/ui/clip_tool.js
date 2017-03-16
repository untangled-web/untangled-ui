// Compiled by ClojureScript 1.9.473 {}
goog.provide('untangled.ui.clip_tool');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.ui.clip_geometry');
untangled.ui.clip_tool.refresh_clip_region = (function untangled$ui$clip_tool$refresh_clip_region(this$,props){
var map__703915 = props;
var map__703915__$1 = ((((!((map__703915 == null)))?((((map__703915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703915):map__703915);
var url = cljs.core.get.call(null,map__703915__$1,new cljs.core.Keyword(null,"url","url",276297046));
var size = cljs.core.get.call(null,map__703915__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var handle_size = cljs.core.get.call(null,map__703915__$1,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),(10));
var map__703916 = size;
var map__703916__$1 = ((((!((map__703916 == null)))?((((map__703916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703916):map__703916);
var width = cljs.core.get.call(null,map__703916__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__703916__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__703917 = om.next.get_state.call(null,this$);
var map__703917__$1 = ((((!((map__703917 == null)))?((((map__703917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703917):map__703917);
var canvas = cljs.core.get.call(null,map__703917__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var image_object = cljs.core.get.call(null,map__703917__$1,new cljs.core.Keyword(null,"image-object","image-object",-170709191));
var clip_region = cljs.core.get.call(null,map__703917__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var aspect_ratio = (image_object.width / image_object.height);
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(props));
var h = (w / aspect_ratio);
var ctx = canvas.getContext("2d");
var ul_handle = untangled.ui.clip_geometry.new_handle.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
var lr_handle = untangled.ui.clip_geometry.new_handle.call(null,new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
if(cljs.core.truth_((function (){var and__27638__auto__ = url;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,url,image_object.src);
} else {
return and__27638__auto__;
}
})())){
image_object.src = url;
} else {
}

untangled.ui.clip_geometry.draw_rect.call(null,ctx,untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,width,height)),new cljs.core.Keyword(null,"solid-white","solid-white",1560126565));

ctx.drawImage(image_object,(0),(0),w,h);

untangled.ui.clip_geometry.draw_rect.call(null,ctx,clip_region,new cljs.core.Keyword(null,"solid","solid",-2023773691));

untangled.ui.clip_geometry.draw_rect.call(null,ctx,ul_handle,new cljs.core.Keyword(null,"solid-black","solid-black",2018821317));

return untangled.ui.clip_geometry.draw_rect.call(null,ctx,lr_handle,new cljs.core.Keyword(null,"solid-black","solid-black",2018821317));
});
/**
 * Convert a clip region from clip tool coordinates to image coordinates. The size is the size of the clip tool.
 */
untangled.ui.clip_tool.translate_clip_region = (function untangled$ui$clip_tool$translate_clip_region(clip_region,size,image_object){
var map__703945 = clip_region;
var map__703945__$1 = ((((!((map__703945 == null)))?((((map__703945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__703945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__703945):map__703945);
var ul = cljs.core.get.call(null,map__703945__$1,new cljs.core.Keyword(null,"ul","ul",-1349521403));
var lr = cljs.core.get.call(null,map__703945__$1,new cljs.core.Keyword(null,"lr","lr",445647393));
var img_w = image_object.width;
var img_h = image_object.height;
var img_aspect = (img_w / img_h);
var tool_bbox = untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size)));
var scaled_image_bbox = untangled.ui.clip_geometry.max_rect.call(null,tool_bbox,img_aspect);
var w = untangled.ui.clip_geometry.width.call(null,scaled_image_bbox);
var scale = (img_w / w);
var ul_x = (scale * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ul));
var ul_y = (scale * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ul));
var lr_x = (scale * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(lr));
var lr_y = (scale * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lr));
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,ul_x,ul_y),untangled.ui.clip_geometry.__GT_Point.call(null,lr_x,lr_y));
});
untangled.ui.clip_tool.generate_url = (function untangled$ui$clip_tool$generate_url(id,clip_region,size,image_object){
var image_clip_area = untangled.ui.clip_tool.translate_clip_region.call(null,clip_region,size,image_object);
var ul = new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(image_clip_area);
var lr = new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(image_clip_area);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/assets/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/?x1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ul)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ul)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&x2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(lr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&width="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((untangled.ui.clip_geometry.width.call(null,clip_region) + (10)))].join('');
});
untangled.ui.clip_tool.constrain_size = (function untangled$ui$clip_tool$constrain_size(old_clip,min_size,new_clip){
var w_new_clip = untangled.ui.clip_geometry.width.call(null,new_clip);
var h_new_clip = untangled.ui.clip_geometry.height.call(null,new_clip);
if(((min_size > w_new_clip)) || ((min_size > h_new_clip))){
return old_clip;
} else {
return new_clip;
}
});
untangled.ui.clip_tool.change_cursor = (function untangled$ui$clip_tool$change_cursor(canvas,cursor_type){
return canvas.style.cursor = cursor_type;
});
untangled.ui.clip_tool.constrain_corner = (function untangled$ui$clip_tool$constrain_corner(orig_clip,new_clip,aspect_ratio){
var ul_new = new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(new_clip);
var lr_new = new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(new_clip);
var ul_old = new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(orig_clip);
var lr_old = new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(orig_clip);
var dw = (untangled.ui.clip_geometry.width.call(null,orig_clip) - untangled.ui.clip_geometry.width.call(null,new_clip));
var dh = (untangled.ui.clip_geometry.height.call(null,orig_clip) - untangled.ui.clip_geometry.height.call(null,new_clip));
var ul_moving_QMARK_ = cljs.core.not_EQ_.call(null,ul_new,ul_old);
var dx = (dh * aspect_ratio);
var dy = (dw / aspect_ratio);
if(ul_moving_QMARK_){
if((Math.abs(dw) > Math.abs(dh))){
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ul_new),(dy + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ul_old))),lr_old);
} else {
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(dx + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ul_old)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ul_new)),lr_old);
}
} else {
if((Math.abs(dw) > Math.abs(dh))){
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,ul_old,untangled.ui.clip_geometry.__GT_Point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(lr_new),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lr_old) - dy)));
} else {
return untangled.ui.clip_geometry.__GT_Rectangle.call(null,ul_old,untangled.ui.clip_geometry.__GT_Point.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(lr_old) - dx),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lr_new)));
}
}
});
untangled.ui.clip_tool.dragUL = (function untangled$ui$clip_tool$dragUL(comp,evt){
var map__704011 = om.next.get_state.call(null,comp);
var map__704011__$1 = ((((!((map__704011 == null)))?((((map__704011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704011):map__704011);
var canvas = cljs.core.get.call(null,map__704011__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var clip_region = cljs.core.get.call(null,map__704011__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var aspect_ratio = cljs.core.get.call(null,map__704011__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var min_size = cljs.core.get.call(null,map__704011__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var origin = cljs.core.get.call(null,map__704011__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__704012 = clip_region;
var map__704012__$1 = ((((!((map__704012 == null)))?((((map__704012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704012):map__704012);
var ul = cljs.core.get.call(null,map__704012__$1,new cljs.core.Keyword(null,"ul","ul",-1349521403));
var lr = cljs.core.get.call(null,map__704012__$1,new cljs.core.Keyword(null,"lr","lr",445647393));
var target = untangled.ui.clip_geometry.event__GT_dom_coords.call(null,evt,canvas);
var new_ul = untangled.ui.clip_geometry.diff_translate.call(null,ul,origin,target);
var new_clip = untangled.ui.clip_tool.constrain_size.call(null,clip_region,min_size,untangled.ui.clip_tool.constrain_corner.call(null,clip_region,untangled.ui.clip_geometry.__GT_Rectangle.call(null,new_ul,new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(clip_region)),aspect_ratio));
untangled.ui.clip_tool.change_cursor.call(null,canvas,"nw-resize");

return om.next.update_state_BANG_.call(null,comp,cljs.core.assoc,new cljs.core.Keyword(null,"origin","origin",1037372088),target,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),new_clip);
});
untangled.ui.clip_tool.dragLR = (function untangled$ui$clip_tool$dragLR(comp,evt){
var map__704034 = om.next.get_state.call(null,comp);
var map__704034__$1 = ((((!((map__704034 == null)))?((((map__704034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704034):map__704034);
var canvas = cljs.core.get.call(null,map__704034__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var clip_region = cljs.core.get.call(null,map__704034__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var aspect_ratio = cljs.core.get.call(null,map__704034__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var min_size = cljs.core.get.call(null,map__704034__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var origin = cljs.core.get.call(null,map__704034__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var map__704035 = clip_region;
var map__704035__$1 = ((((!((map__704035 == null)))?((((map__704035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704035):map__704035);
var ul = cljs.core.get.call(null,map__704035__$1,new cljs.core.Keyword(null,"ul","ul",-1349521403));
var lr = cljs.core.get.call(null,map__704035__$1,new cljs.core.Keyword(null,"lr","lr",445647393));
var target = untangled.ui.clip_geometry.event__GT_dom_coords.call(null,evt,canvas);
var new_lr = untangled.ui.clip_geometry.diff_translate.call(null,lr,origin,target);
var new_clip = untangled.ui.clip_tool.constrain_size.call(null,clip_region,min_size,untangled.ui.clip_tool.constrain_corner.call(null,clip_region,untangled.ui.clip_geometry.__GT_Rectangle.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(clip_region),new_lr),aspect_ratio));
untangled.ui.clip_tool.change_cursor.call(null,canvas,"nw-resize");

return om.next.update_state_BANG_.call(null,comp,cljs.core.assoc,new cljs.core.Keyword(null,"origin","origin",1037372088),target,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),new_clip);
});
untangled.ui.clip_tool.pan = (function untangled$ui$clip_tool$pan(comp,evt){
var map__704055 = om.next.get_state.call(null,comp);
var map__704055__$1 = ((((!((map__704055 == null)))?((((map__704055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704055):map__704055);
var canvas = cljs.core.get.call(null,map__704055__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var clip_region = cljs.core.get.call(null,map__704055__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var origin = cljs.core.get.call(null,map__704055__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var target = untangled.ui.clip_geometry.event__GT_dom_coords.call(null,evt,canvas);
var new_clip = untangled.ui.clip_geometry.diff_translate_rect.call(null,clip_region,origin,target);
untangled.ui.clip_tool.change_cursor.call(null,canvas,"move");

return om.next.update_state_BANG_.call(null,comp,cljs.core.assoc,new cljs.core.Keyword(null,"origin","origin",1037372088),target,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),new_clip);
});
untangled.ui.clip_tool.mouseDown = (function untangled$ui$clip_tool$mouseDown(this$,evt){
var map__704059 = om.next.get_state.call(null,this$);
var map__704059__$1 = ((((!((map__704059 == null)))?((((map__704059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704059):map__704059);
var canvas = cljs.core.get.call(null,map__704059__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var clip_region = cljs.core.get.call(null,map__704059__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var handle_size = cljs.core.get.call(null,map__704059__$1,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407));
var canvas_point = untangled.ui.clip_geometry.event__GT_dom_coords.call(null,evt,canvas);
var ul_handle = untangled.ui.clip_geometry.new_handle.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
var lr_handle = untangled.ui.clip_geometry.new_handle.call(null,new cljs.core.Keyword(null,"lr","lr",445647393).cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_.call(null,ul_handle,canvas_point))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"drag-ul","drag-ul",-13512036),new cljs.core.Keyword(null,"origin","origin",1037372088),canvas_point);
} else {
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_.call(null,lr_handle,canvas_point))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"drag-lr","drag-lr",1581382366),new cljs.core.Keyword(null,"origin","origin",1037372088),canvas_point);
} else {
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_.call(null,clip_region,canvas_point))){
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"origin","origin",1037372088),canvas_point);
} else {
}
}
}

return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,om.next.props.call(null,this$));
});
untangled.ui.clip_tool.mouseUp = (function untangled$ui$clip_tool$mouseUp(this$,evt){
var map__704088 = om.next.get_state.call(null,this$);
var map__704088__$1 = ((((!((map__704088 == null)))?((((map__704088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704088):map__704088);
var canvas = cljs.core.get.call(null,map__704088__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
canvas.style.cursor = "";

om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"origin","origin",1037372088),null);

return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,om.next.props.call(null,this$));
});
untangled.ui.clip_tool.mouseMoved = (function untangled$ui$clip_tool$mouseMoved(this$,evt,onChange){
var map__704097 = om.next.get_state.call(null,this$);
var map__704097__$1 = ((((!((map__704097 == null)))?((((map__704097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704097):map__704097);
var active_operation = cljs.core.get.call(null,map__704097__$1,new cljs.core.Keyword(null,"active-operation","active-operation",46329814));
var map__704098 = om.next.props.call(null,this$);
var map__704098__$1 = ((((!((map__704098 == null)))?((((map__704098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704098):map__704098);
var size = cljs.core.get.call(null,map__704098__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__704101_704120 = (((active_operation instanceof cljs.core.Keyword))?active_operation.fqn:null);
switch (G__704101_704120) {
case "drag-ul":
untangled.ui.clip_tool.dragUL.call(null,this$,evt);

break;
case "drag-lr":
untangled.ui.clip_tool.dragLR.call(null,this$,evt);

break;
case "pan":
untangled.ui.clip_tool.pan.call(null,this$,evt);

break;
default:

}

if(cljs.core.truth_((function (){var and__27638__auto__ = onChange;
if(cljs.core.truth_(and__27638__auto__)){
return cljs.core.not_EQ_.call(null,active_operation,new cljs.core.Keyword(null,"none","none",1333468478));
} else {
return and__27638__auto__;
}
})())){
var map__704102_704132 = om.next.get_state.call(null,this$);
var map__704102_704133__$1 = ((((!((map__704102_704132 == null)))?((((map__704102_704132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704102_704132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704102_704132):map__704102_704132);
var state_704134 = map__704102_704133__$1;
var clip_region_704135 = cljs.core.get.call(null,map__704102_704133__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var image_object_704136 = cljs.core.get.call(null,map__704102_704133__$1,new cljs.core.Keyword(null,"image-object","image-object",-170709191));
onChange.call(null,cljs.core.assoc.call(null,state_704134,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),untangled.ui.clip_tool.translate_clip_region.call(null,clip_region_704135,size,image_object_704136)));
} else {
}

return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,om.next.props.call(null,this$));
});
untangled.ui.clip_tool.set_initial_clip = (function untangled$ui$clip_tool$set_initial_clip(comp,img){
var map__704146 = om.next.get_state.call(null,comp);
var map__704146__$1 = ((((!((map__704146 == null)))?((((map__704146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704146):map__704146);
var aspect_ratio = cljs.core.get.call(null,map__704146__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var canvas = cljs.core.get.call(null,map__704146__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var canvas_bbox = untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,canvas.width,canvas.height));
var img_aspect = (img.width / img.height);
var img_bbox = untangled.ui.clip_geometry.max_rect.call(null,canvas_bbox,img_aspect);
var clip = untangled.ui.clip_geometry.max_rect.call(null,img_bbox,aspect_ratio);
return om.next.update_state_BANG_.call(null,comp,cljs.core.assoc,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),clip);
});
if(typeof untangled.ui.clip_tool.ClipTool !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.clip_tool.ClipTool = (function untangled$ui$clip_tool$ClipTool(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.clip_tool.ClipTool.prototype = goog.object.clone(React.Component.prototype);
}

var x704162_704199 = untangled.ui.clip_tool.ClipTool.prototype;
x704162_704199.componentWillUpdate = ((function (x704162_704199){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___704200 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___704201 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___704200,next_ident__29856__auto___704201)){
var idxr__29857__auto___704205 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___704205 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___704205),((function (idxr__29857__auto___704205,ident__29855__auto___704200,next_ident__29856__auto___704201,this__29851__auto__,x704162_704199){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___704200], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___704201], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___704205,ident__29855__auto___704200,next_ident__29856__auto___704201,this__29851__auto__,x704162_704199))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x704162_704199))
;

x704162_704199.componentWillUnmount = ((function (x704162_704199){
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
});})(x704162_704199))
;

x704162_704199.componentDidUpdate = ((function (x704162_704199){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x704162_704199))
;

x704162_704199.isMounted = ((function (x704162_704199){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x704162_704199))
;

x704162_704199.componentWillMount = ((function (x704162_704199){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x704162_704199))
;

x704162_704199.initLocalState = ((function (x704162_704199){
return (function (){
var this$ = this;
var ret__29829__auto__ = (function (){var img = (new Image());
img.onload = ((function (img,this$,x704162_704199){
return (function (){
untangled.ui.clip_tool.set_initial_clip.call(null,this$,img);

var map__704165_704311 = om.next.props.call(null,this$);
var map__704165_704312__$1 = ((((!((map__704165_704311 == null)))?((((map__704165_704311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704165_704311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704165_704311):map__704165_704311);
var size_704313 = cljs.core.get.call(null,map__704165_704312__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var onChange_704314 = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var map__704166_704315 = om.next.get_state.call(null,this$);
var map__704166_704316__$1 = ((((!((map__704166_704315 == null)))?((((map__704166_704315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704166_704315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704166_704315):map__704166_704315);
var clip_region_704317 = cljs.core.get.call(null,map__704166_704316__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
if(cljs.core.truth_(onChange_704314)){
onChange_704314.call(null,cljs.core.assoc.call(null,om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),untangled.ui.clip_tool.translate_clip_region.call(null,clip_region_704317,size_704313,img)));
} else {
}

return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,om.next.props.call(null,this$));
});})(img,this$,x704162_704199))
;

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"image-object","image-object",-170709191),img,new cljs.core.Keyword(null,"origin","origin",1037372088),untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712),untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0))),new cljs.core.Keyword(null,"activeOperation","activeOperation",1728433595),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"min-size","min-size",1058361905),(20)], null);
})();
var obj704170 = {"omcljs$state":ret__29829__auto__};
return obj704170;
});})(x704162_704199))
;

x704162_704199.shouldComponentUpdate = ((function (x704162_704199){
return (function (next_props,next_state){
var this$ = this;
return false;
});})(x704162_704199))
;

x704162_704199.componentWillReceiveProps = ((function (x704162_704199){
return (function (next_props__29831__auto__){
var this__29830__auto__ = this;
var this$ = this__29830__auto__;
var props = om.next._next_props.call(null,next_props__29831__auto__,this__29830__auto__);
return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,props);
});})(x704162_704199))
;

x704162_704199.componentDidMount = ((function (x704162_704199){
return (function (newprops){
var this$ = this;
var map__704171 = om.next.props.call(null,this$);
var map__704171__$1 = ((((!((map__704171 == null)))?((((map__704171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704171):map__704171);
var url = cljs.core.get.call(null,map__704171__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handle_size = cljs.core.get.call(null,map__704171__$1,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407));
var aspect_ratio = cljs.core.get.call(null,map__704171__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var size = cljs.core.get.call(null,map__704171__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__704172 = om.next.get_state.call(null,this$);
var map__704172__$1 = ((((!((map__704172 == null)))?((((map__704172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704172):map__704172);
var state = map__704172__$1;
var image_object = cljs.core.get.call(null,map__704172__$1,new cljs.core.Keyword(null,"image-object","image-object",-170709191));
var clip_region = cljs.core.get.call(null,map__704172__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),aspect_ratio,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),(function (){var or__27650__auto__ = handle_size;
if(cljs.core.truth_(or__27650__auto__)){
return or__27650__auto__;
} else {
return (10);
}
})());

image_object.src = url;

return untangled.ui.clip_tool.refresh_clip_region.call(null,this$,newprops);
});})(x704162_704199))
;

x704162_704199.render = ((function (x704162_704199){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_704177 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_704178 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_704179 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_704180 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_704181 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__704185 = om.next.props.call(null,this$);
var map__704185__$1 = ((((!((map__704185 == null)))?((((map__704185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704185):map__704185);
var id = cljs.core.get.call(null,map__704185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var size = cljs.core.get.call(null,map__704185__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var onChange = om.next.get_computed.call(null,this$,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
return om.dom.div.call(null,({"style": ({"width": "500px"})}),om.dom.canvas.call(null,({"ref": ((function (map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199){
return (function (ele){
if(cljs.core.truth_(ele)){
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),ele);
} else {
return null;
}
});})(map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199))
, "id": id, "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "onMouseDown": ((function (map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199){
return (function (evt){
return untangled.ui.clip_tool.mouseDown.call(null,this$,evt);
});})(map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199))
, "onMouseMove": ((function (map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199){
return (function (evt){
return untangled.ui.clip_tool.mouseMoved.call(null,this$,evt,onChange);
});})(map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199))
, "onMouseUp": ((function (map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199){
return (function (evt){
return untangled.ui.clip_tool.mouseUp.call(null,this$,evt);
});})(map__704185,map__704185__$1,id,size,onChange,_STAR_reconciler_STAR_704177,_STAR_depth_STAR_704178,_STAR_shared_STAR_704179,_STAR_instrument_STAR_704180,_STAR_parent_STAR_704181,this$,this__29850__auto__,x704162_704199))
, "className": "clip-tool"})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_704181;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_704180;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_704179;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_704178;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_704177;
}});})(x704162_704199))
;


untangled.ui.clip_tool.ClipTool.prototype.constructor = untangled.ui.clip_tool.ClipTool;

untangled.ui.clip_tool.ClipTool.prototype.constructor.displayName = "untangled.ui.clip-tool/ClipTool";

untangled.ui.clip_tool.ClipTool.prototype.om$isComponent = true;

var x704188_704389 = untangled.ui.clip_tool.ClipTool;
/** @nocollapse */
x704188_704389.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x704188_704389.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x704188_704389){
return (function (clz,p__704190){
var map__704192 = p__704190;
var map__704192__$1 = ((((!((map__704192 == null)))?((((map__704192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704192):map__704192);
var params = map__704192__$1;
var image_url = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064),"https://upload.wikimedia.org/wikipedia/en/6/61/Minions_image.jpg");
var id = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"id","id",-1388402092),"clip-1");
var aspect_ratio = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1));
var handle_size = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),(10));
var width = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"width","width",-384071477),(400));
var height = cljs.core.get.call(null,map__704192__$1,new cljs.core.Keyword(null,"height","height",1025178622),(400));
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),image_url,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),aspect_ratio,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),handle_size,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});})(x704188_704389))
;

/** @nocollapse */
x704188_704389.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x704188_704389.om$next$IQuery$query$arity$1 = ((function (x704188_704389){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407)], null);
});})(x704188_704389))
;

/** @nocollapse */
x704188_704389.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x704188_704389.om$next$Ident$ident$arity$2 = ((function (x704188_704389){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clip-tools","by-id","clip-tools/by-id",-1210115675),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x704188_704389))
;


var x704195_704432 = untangled.ui.clip_tool.ClipTool.prototype;

x704195_704432.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x704195_704432.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x704195_704432){
return (function (clz,p__704196){
var map__704197 = p__704196;
var map__704197__$1 = ((((!((map__704197 == null)))?((((map__704197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704197):map__704197);
var params = map__704197__$1;
var image_url = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064),"https://upload.wikimedia.org/wikipedia/en/6/61/Minions_image.jpg");
var id = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"id","id",-1388402092),"clip-1");
var aspect_ratio = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),(1));
var handle_size = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),(10));
var width = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"width","width",-384071477),(400));
var height = cljs.core.get.call(null,map__704197__$1,new cljs.core.Keyword(null,"height","height",1025178622),(400));
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"url","url",276297046),image_url,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),aspect_ratio,new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407),handle_size,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});})(x704195_704432))
;


x704195_704432.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x704195_704432.om$next$IQuery$query$arity$1 = ((function (x704195_704432){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504),new cljs.core.Keyword(null,"handle-size","handle-size",-1431339407)], null);
});})(x704195_704432))
;


x704195_704432.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x704195_704432.om$next$Ident$ident$arity$2 = ((function (x704195_704432){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clip-tools","by-id","clip-tools/by-id",-1210115675),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x704195_704432))
;


untangled.ui.clip_tool.ClipTool.cljs$lang$type = true;

untangled.ui.clip_tool.ClipTool.cljs$lang$ctorStr = "untangled.ui.clip-tool/ClipTool";

untangled.ui.clip_tool.ClipTool.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.clip-tool/ClipTool");
});
untangled.ui.clip_tool.ui_clip_tool = om.next.factory.call(null,untangled.ui.clip_tool.ClipTool);
untangled.ui.clip_tool.refresh_image = (function untangled$ui$clip_tool$refresh_image(canvas,component){
if(cljs.core.truth_(new cljs.core.Keyword(null,"image-object","image-object",-170709191).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,component)))){
var props = om.next.props.call(null,component);
var map__704458 = props;
var map__704458__$1 = ((((!((map__704458 == null)))?((((map__704458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704458):map__704458);
var clip_region = cljs.core.get.call(null,map__704458__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var image_object = cljs.core.get.call(null,map__704458__$1,new cljs.core.Keyword(null,"image-object","image-object",-170709191));
var sx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(clip_region));
var sy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ul","ul",-1349521403).cljs$core$IFn$_invoke$arity$1(clip_region));
var sw = untangled.ui.clip_geometry.width.call(null,clip_region);
var sh = untangled.ui.clip_geometry.height.call(null,clip_region);
var aspect_ratio = (sw / sh);
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props);
var h = (w / aspect_ratio);
var ctx = canvas.getContext("2d");
untangled.ui.clip_geometry.draw_rect.call(null,ctx,untangled.ui.clip_geometry.__GT_Rectangle.call(null,untangled.ui.clip_geometry.__GT_Point.call(null,(0),(0)),untangled.ui.clip_geometry.__GT_Point.call(null,w,h)),new cljs.core.Keyword(null,"solid-black","solid-black",2018821317));

return ctx.drawImage(image_object,sx,sy,sw,sh,(0),(0),w,h);
} else {
return null;
}
});
if(typeof untangled.ui.clip_tool.PreviewClip !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.clip_tool.PreviewClip = (function untangled$ui$clip_tool$PreviewClip(){
var this__29997__auto__ = this;
React.Component.apply(this__29997__auto__,arguments);

if(!((this__29997__auto__.initLocalState == null))){
this__29997__auto__.state = this__29997__auto__.initLocalState();
} else {
this__29997__auto__.state = {};
}

return this__29997__auto__;
});

untangled.ui.clip_tool.PreviewClip.prototype = goog.object.clone(React.Component.prototype);
}

var x704472_704524 = untangled.ui.clip_tool.PreviewClip.prototype;
x704472_704524.componentWillUpdate = ((function (x704472_704524){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
if(((!((this__29851__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__29851__auto__.om$next$Ident$)))?true:false):false)){
var ident__29855__auto___704525 = om.next.ident.call(null,this__29851__auto__,om.next.props.call(null,this__29851__auto__));
var next_ident__29856__auto___704526 = om.next.ident.call(null,this__29851__auto__,om.next._next_props.call(null,next_props__29852__auto__,this__29851__auto__));
if(cljs.core.not_EQ_.call(null,ident__29855__auto___704525,next_ident__29856__auto___704526)){
var idxr__29857__auto___704536 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__29857__auto___704536 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__29857__auto___704536),((function (idxr__29857__auto___704536,ident__29855__auto___704525,next_ident__29856__auto___704526,this__29851__auto__,x704472_704524){
return (function (indexes__29858__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__29858__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__29855__auto___704525], null),cljs.core.disj,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__29856__auto___704526], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__29851__auto__);
});})(idxr__29857__auto___704536,ident__29855__auto___704525,next_ident__29856__auto___704526,this__29851__auto__,x704472_704524))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__29851__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__29851__auto__);
});})(x704472_704524))
;

x704472_704524.shouldComponentUpdate = ((function (x704472_704524){
return (function (next_props__29852__auto__,next_state__29853__auto__){
var this__29851__auto__ = this;
var next_children__29854__auto__ = next_props__29852__auto__.children;
var next_props__29852__auto____$1 = goog.object.get(next_props__29852__auto__,"omcljs$value");
var next_props__29852__auto____$2 = (function (){var G__704481 = next_props__29852__auto____$1;
if((next_props__29852__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__704481);
} else {
return G__704481;
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
});})(x704472_704524))
;

x704472_704524.componentWillUnmount = ((function (x704472_704524){
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
});})(x704472_704524))
;

x704472_704524.componentDidUpdate = ((function (x704472_704524){
return (function (prev_props__29859__auto__,prev_state__29860__auto__){
var this__29851__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__29851__auto__);
});})(x704472_704524))
;

x704472_704524.isMounted = ((function (x704472_704524){
return (function (){
var this__29851__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__29851__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x704472_704524))
;

x704472_704524.componentWillMount = ((function (x704472_704524){
return (function (){
var this__29851__auto__ = this;
var indexer__29861__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__29851__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__29861__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__29861__auto__,this__29851__auto__);
}
});})(x704472_704524))
;

x704472_704524.render = ((function (x704472_704524){
return (function (){
var this__29850__auto__ = this;
var this$ = this__29850__auto__;
var _STAR_reconciler_STAR_704492 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_704493 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_704494 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_704495 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_704496 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__29850__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__29850__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__29850__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__29850__auto__);

om.next._STAR_parent_STAR_ = this__29850__auto__;

try{var map__704499 = om.next.props.call(null,this$);
var map__704499__$1 = ((((!((map__704499 == null)))?((((map__704499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704499):map__704499);
var filename = cljs.core.get.call(null,map__704499__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var width = cljs.core.get.call(null,map__704499__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__704499__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var clip_region = cljs.core.get.call(null,map__704499__$1,new cljs.core.Keyword(null,"clip-region","clip-region",-1118142712));
var map__704500 = clip_region;
var map__704500__$1 = ((((!((map__704500 == null)))?((((map__704500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__704500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__704500):map__704500);
var ul = cljs.core.get.call(null,map__704500__$1,new cljs.core.Keyword(null,"ul","ul",-1349521403));
var lr = cljs.core.get.call(null,map__704500__$1,new cljs.core.Keyword(null,"lr","lr",445647393));
return om.dom.div.call(null,({"style": ({"position": "relative", "top": "-400px", "left": "500px"})}),om.dom.canvas.call(null,({"ref": ((function (map__704499,map__704499__$1,filename,width,height,clip_region,map__704500,map__704500__$1,ul,lr,_STAR_reconciler_STAR_704492,_STAR_depth_STAR_704493,_STAR_shared_STAR_704494,_STAR_instrument_STAR_704495,_STAR_parent_STAR_704496,this$,this__29850__auto__,x704472_704524){
return (function (elem){
if(cljs.core.truth_(elem)){
return untangled.ui.clip_tool.refresh_image.call(null,elem,this$);
} else {
return null;
}
});})(map__704499,map__704499__$1,filename,width,height,clip_region,map__704500,map__704500__$1,ul,lr,_STAR_reconciler_STAR_704492,_STAR_depth_STAR_704493,_STAR_shared_STAR_704494,_STAR_instrument_STAR_704495,_STAR_parent_STAR_704496,this$,this__29850__auto__,x704472_704524))
, "style": ({"border": "1px solid black"}), "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "className": "preview-clip"})),om.dom.div.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?x1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ul) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ul) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&x2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(lr) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(lr) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&width="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_704496;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_704495;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_704494;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_704493;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_704492;
}});})(x704472_704524))
;


untangled.ui.clip_tool.PreviewClip.prototype.constructor = untangled.ui.clip_tool.PreviewClip;

untangled.ui.clip_tool.PreviewClip.prototype.constructor.displayName = "untangled.ui.clip-tool/PreviewClip";

untangled.ui.clip_tool.PreviewClip.prototype.om$isComponent = true;

var x704520_704623 = untangled.ui.clip_tool.PreviewClip;


var x704521_704624 = untangled.ui.clip_tool.PreviewClip.prototype;


untangled.ui.clip_tool.PreviewClip.cljs$lang$type = true;

untangled.ui.clip_tool.PreviewClip.cljs$lang$ctorStr = "untangled.ui.clip-tool/PreviewClip";

untangled.ui.clip_tool.PreviewClip.cljs$lang$ctorPrWriter = (function (this__30000__auto__,writer__30001__auto__,opt__30002__auto__){
return cljs.core._write.call(null,writer__30001__auto__,"untangled.ui.clip-tool/PreviewClip");
});
/**
 * Render a preview of a clipped image. 
 */
untangled.ui.clip_tool.ui_preview_clip = om.next.factory.call(null,untangled.ui.clip_tool.PreviewClip);

//# sourceMappingURL=clip_tool.js.map?rel=1489703353051
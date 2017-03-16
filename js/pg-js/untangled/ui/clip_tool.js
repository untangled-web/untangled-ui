// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('untangled.ui.clip_tool');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('untangled.ui.clip_geometry');
untangled.ui.clip_tool.refresh_clip_region = (function untangled$ui$clip_tool$refresh_clip_region(this$,props){
var map__50727 = props;
var map__50727__$1 = ((((!((map__50727 == null)))?((((map__50727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50727):map__50727);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50727__$1,cljs.core.cst$kw$url);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50727__$1,cljs.core.cst$kw$size);
var handle_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50727__$1,cljs.core.cst$kw$handle_DASH_size,(10));
var map__50728 = size;
var map__50728__$1 = ((((!((map__50728 == null)))?((((map__50728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50728):map__50728);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50728__$1,cljs.core.cst$kw$height);
var map__50729 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50729__$1 = ((((!((map__50729 == null)))?((((map__50729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50729):map__50729);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729__$1,cljs.core.cst$kw$canvas);
var image_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729__$1,cljs.core.cst$kw$image_DASH_object);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729__$1,cljs.core.cst$kw$clip_DASH_region);
var aspect_ratio = (image_object.width / image_object.height);
var w = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(props));
var h = (w / aspect_ratio);
var ctx = canvas.getContext("2d");
var ul_handle = untangled.ui.clip_geometry.new_handle(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
var lr_handle = untangled.ui.clip_geometry.new_handle(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
if(cljs.core.truth_((function (){var and__7490__auto__ = url;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(url,image_object.src);
} else {
return and__7490__auto__;
}
})())){
image_object.src = url;
} else {
}

untangled.ui.clip_geometry.draw_rect(ctx,untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(width,height)),cljs.core.cst$kw$solid_DASH_white);

ctx.drawImage(image_object,(0),(0),w,h);

untangled.ui.clip_geometry.draw_rect(ctx,clip_region,cljs.core.cst$kw$solid);

untangled.ui.clip_geometry.draw_rect(ctx,ul_handle,cljs.core.cst$kw$solid_DASH_black);

return untangled.ui.clip_geometry.draw_rect(ctx,lr_handle,cljs.core.cst$kw$solid_DASH_black);
});
/**
 * Convert a clip region from clip tool coordinates to image coordinates. The size is the size of the clip tool.
 */
untangled.ui.clip_tool.translate_clip_region = (function untangled$ui$clip_tool$translate_clip_region(clip_region,size,image_object){
var map__50735 = clip_region;
var map__50735__$1 = ((((!((map__50735 == null)))?((((map__50735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50735):map__50735);
var ul = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50735__$1,cljs.core.cst$kw$ul);
var lr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50735__$1,cljs.core.cst$kw$lr);
var img_w = image_object.width;
var img_h = image_object.height;
var img_aspect = (img_w / img_h);
var tool_bbox = untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(size)));
var scaled_image_bbox = untangled.ui.clip_geometry.max_rect(tool_bbox,img_aspect);
var w = untangled.ui.clip_geometry.width(scaled_image_bbox);
var scale = (img_w / w);
var ul_x = (scale * cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(ul));
var ul_y = (scale * cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ul));
var lr_x = (scale * cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(lr));
var lr_y = (scale * cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(lr));
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point(ul_x,ul_y),untangled.ui.clip_geometry.__GT_Point(lr_x,lr_y));
});
untangled.ui.clip_tool.generate_url = (function untangled$ui$clip_tool$generate_url(id,clip_region,size,image_object){
var image_clip_area = untangled.ui.clip_tool.translate_clip_region(clip_region,size,image_object);
var ul = cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(image_clip_area);
var lr = cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(image_clip_area);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/assets/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/?x1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(ul)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ul)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&x2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(lr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(lr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&width="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((untangled.ui.clip_geometry.width(clip_region) + (10)))].join('');
});
untangled.ui.clip_tool.constrain_size = (function untangled$ui$clip_tool$constrain_size(old_clip,min_size,new_clip){
var w_new_clip = untangled.ui.clip_geometry.width(new_clip);
var h_new_clip = untangled.ui.clip_geometry.height(new_clip);
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
var ul_new = cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(new_clip);
var lr_new = cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(new_clip);
var ul_old = cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(orig_clip);
var lr_old = cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(orig_clip);
var dw = (untangled.ui.clip_geometry.width(orig_clip) - untangled.ui.clip_geometry.width(new_clip));
var dh = (untangled.ui.clip_geometry.height(orig_clip) - untangled.ui.clip_geometry.height(new_clip));
var ul_moving_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ul_new,ul_old);
var dx = (dh * aspect_ratio);
var dy = (dw / aspect_ratio);
if(ul_moving_QMARK_){
if((Math.abs(dw) > Math.abs(dh))){
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(ul_new),(dy + cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ul_old))),lr_old);
} else {
return untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((dx + cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(ul_old)),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ul_new)),lr_old);
}
} else {
if((Math.abs(dw) > Math.abs(dh))){
return untangled.ui.clip_geometry.__GT_Rectangle(ul_old,untangled.ui.clip_geometry.__GT_Point(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(lr_new),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(lr_old) - dy)));
} else {
return untangled.ui.clip_geometry.__GT_Rectangle(ul_old,untangled.ui.clip_geometry.__GT_Point((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(lr_old) - dx),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(lr_new)));
}
}
});
untangled.ui.clip_tool.dragUL = (function untangled$ui$clip_tool$dragUL(comp,evt){
var map__50741 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(comp);
var map__50741__$1 = ((((!((map__50741 == null)))?((((map__50741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50741):map__50741);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,cljs.core.cst$kw$canvas);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,cljs.core.cst$kw$clip_DASH_region);
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,cljs.core.cst$kw$aspect_DASH_ratio);
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,cljs.core.cst$kw$min_DASH_size);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,cljs.core.cst$kw$origin);
var map__50742 = clip_region;
var map__50742__$1 = ((((!((map__50742 == null)))?((((map__50742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50742):map__50742);
var ul = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50742__$1,cljs.core.cst$kw$ul);
var lr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50742__$1,cljs.core.cst$kw$lr);
var target = untangled.ui.clip_geometry.event__GT_dom_coords(evt,canvas);
var new_ul = untangled.ui.clip_geometry.diff_translate(ul,origin,target);
var new_clip = untangled.ui.clip_tool.constrain_size(clip_region,min_size,untangled.ui.clip_tool.constrain_corner(clip_region,untangled.ui.clip_geometry.__GT_Rectangle(new_ul,cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(clip_region)),aspect_ratio));
untangled.ui.clip_tool.change_cursor(canvas,"nw-resize");

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(comp,cljs.core.assoc,cljs.core.cst$kw$origin,target,cljs.core.cst$kw$clip_DASH_region,new_clip);
});
untangled.ui.clip_tool.dragLR = (function untangled$ui$clip_tool$dragLR(comp,evt){
var map__50749 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(comp);
var map__50749__$1 = ((((!((map__50749 == null)))?((((map__50749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50749):map__50749);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,cljs.core.cst$kw$canvas);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,cljs.core.cst$kw$clip_DASH_region);
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,cljs.core.cst$kw$aspect_DASH_ratio);
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,cljs.core.cst$kw$min_DASH_size);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50749__$1,cljs.core.cst$kw$origin);
var map__50750 = clip_region;
var map__50750__$1 = ((((!((map__50750 == null)))?((((map__50750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50750):map__50750);
var ul = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50750__$1,cljs.core.cst$kw$ul);
var lr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50750__$1,cljs.core.cst$kw$lr);
var target = untangled.ui.clip_geometry.event__GT_dom_coords(evt,canvas);
var new_lr = untangled.ui.clip_geometry.diff_translate(lr,origin,target);
var new_clip = untangled.ui.clip_tool.constrain_size(clip_region,min_size,untangled.ui.clip_tool.constrain_corner(clip_region,untangled.ui.clip_geometry.__GT_Rectangle(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(clip_region),new_lr),aspect_ratio));
untangled.ui.clip_tool.change_cursor(canvas,"nw-resize");

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(comp,cljs.core.assoc,cljs.core.cst$kw$origin,target,cljs.core.cst$kw$clip_DASH_region,new_clip);
});
untangled.ui.clip_tool.pan = (function untangled$ui$clip_tool$pan(comp,evt){
var map__50755 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(comp);
var map__50755__$1 = ((((!((map__50755 == null)))?((((map__50755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50755):map__50755);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,cljs.core.cst$kw$canvas);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,cljs.core.cst$kw$clip_DASH_region);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50755__$1,cljs.core.cst$kw$origin);
var target = untangled.ui.clip_geometry.event__GT_dom_coords(evt,canvas);
var new_clip = untangled.ui.clip_geometry.diff_translate_rect(clip_region,origin,target);
untangled.ui.clip_tool.change_cursor(canvas,"move");

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(comp,cljs.core.assoc,cljs.core.cst$kw$origin,target,cljs.core.cst$kw$clip_DASH_region,new_clip);
});
untangled.ui.clip_tool.mouseDown = (function untangled$ui$clip_tool$mouseDown(this$,evt){
var map__50759 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50759__$1 = ((((!((map__50759 == null)))?((((map__50759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50759):map__50759);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50759__$1,cljs.core.cst$kw$canvas);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50759__$1,cljs.core.cst$kw$clip_DASH_region);
var handle_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50759__$1,cljs.core.cst$kw$handle_DASH_size);
var canvas_point = untangled.ui.clip_geometry.event__GT_dom_coords(evt,canvas);
var ul_handle = untangled.ui.clip_geometry.new_handle(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
var lr_handle = untangled.ui.clip_geometry.new_handle(cljs.core.cst$kw$lr.cljs$core$IFn$_invoke$arity$1(clip_region),handle_size);
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_(ul_handle,canvas_point))){
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_operation,cljs.core.cst$kw$drag_DASH_ul,cljs.core.cst$kw$origin,canvas_point);
} else {
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_(lr_handle,canvas_point))){
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_operation,cljs.core.cst$kw$drag_DASH_lr,cljs.core.cst$kw$origin,canvas_point);
} else {
if(cljs.core.truth_(untangled.ui.clip_geometry.inside_rect_QMARK_(clip_region,canvas_point))){
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_operation,cljs.core.cst$kw$pan,cljs.core.cst$kw$origin,canvas_point);
} else {
}
}
}

return untangled.ui.clip_tool.refresh_clip_region(this$,om.next.props(this$));
});
untangled.ui.clip_tool.mouseUp = (function untangled$ui$clip_tool$mouseUp(this$,evt){
var map__50763 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50763__$1 = ((((!((map__50763 == null)))?((((map__50763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50763):map__50763);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50763__$1,cljs.core.cst$kw$canvas);
canvas.style.cursor = "";

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_operation,cljs.core.cst$kw$none,cljs.core.cst$kw$origin,null);

return untangled.ui.clip_tool.refresh_clip_region(this$,om.next.props(this$));
});
untangled.ui.clip_tool.mouseMoved = (function untangled$ui$clip_tool$mouseMoved(this$,evt,onChange){
var map__50773 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50773__$1 = ((((!((map__50773 == null)))?((((map__50773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50773):map__50773);
var active_operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50773__$1,cljs.core.cst$kw$active_DASH_operation);
var map__50774 = om.next.props(this$);
var map__50774__$1 = ((((!((map__50774 == null)))?((((map__50774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50774):map__50774);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50774__$1,cljs.core.cst$kw$size);
var G__50777_50781 = (((active_operation instanceof cljs.core.Keyword))?active_operation.fqn:null);
switch (G__50777_50781) {
case "drag-ul":
untangled.ui.clip_tool.dragUL(this$,evt);

break;
case "drag-lr":
untangled.ui.clip_tool.dragLR(this$,evt);

break;
case "pan":
untangled.ui.clip_tool.pan(this$,evt);

break;
default:

}

if(cljs.core.truth_((function (){var and__7490__auto__ = onChange;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(active_operation,cljs.core.cst$kw$none);
} else {
return and__7490__auto__;
}
})())){
var map__50778_50783 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50778_50784__$1 = ((((!((map__50778_50783 == null)))?((((map__50778_50783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50778_50783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50778_50783):map__50778_50783);
var state_50785 = map__50778_50784__$1;
var clip_region_50786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778_50784__$1,cljs.core.cst$kw$clip_DASH_region);
var image_object_50787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50778_50784__$1,cljs.core.cst$kw$image_DASH_object);
var G__50780_50788 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_50785,cljs.core.cst$kw$clip_DASH_region,untangled.ui.clip_tool.translate_clip_region(clip_region_50786,size,image_object_50787));
(onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__50780_50788) : onChange.call(null,G__50780_50788));
} else {
}

return untangled.ui.clip_tool.refresh_clip_region(this$,om.next.props(this$));
});
untangled.ui.clip_tool.set_initial_clip = (function untangled$ui$clip_tool$set_initial_clip(comp,img){
var map__50791 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(comp);
var map__50791__$1 = ((((!((map__50791 == null)))?((((map__50791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50791):map__50791);
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50791__$1,cljs.core.cst$kw$aspect_DASH_ratio);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50791__$1,cljs.core.cst$kw$canvas);
var canvas_bbox = untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(canvas.width,canvas.height));
var img_aspect = (img.width / img.height);
var img_bbox = untangled.ui.clip_geometry.max_rect(canvas_bbox,img_aspect);
var clip = untangled.ui.clip_geometry.max_rect(img_bbox,aspect_ratio);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(comp,cljs.core.assoc,cljs.core.cst$kw$clip_DASH_region,clip);
});
if(typeof untangled.ui.clip_tool.ClipTool !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled.ui.clip_tool.ClipTool = (function untangled$ui$clip_tool$ClipTool(){
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.clip_tool.ClipTool.prototype = goog.object.clone(React.Component.prototype);
}

var x50797_50825 = untangled.ui.clip_tool.ClipTool.prototype;
x50797_50825.componentWillUpdate = ((function (x50797_50825){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50826 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50827 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50826,next_ident__10196__auto___50827)){
var idxr__10197__auto___50828 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50828 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50828),((function (idxr__10197__auto___50828,ident__10195__auto___50826,next_ident__10196__auto___50827,this__10191__auto__,x50797_50825){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50826], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50827], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50828,ident__10195__auto___50826,next_ident__10196__auto___50827,this__10191__auto__,x50797_50825))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50797_50825))
;

x50797_50825.componentWillUnmount = ((function (x50797_50825){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50797_50825))
;

x50797_50825.componentDidUpdate = ((function (x50797_50825){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50797_50825))
;

x50797_50825.isMounted = ((function (x50797_50825){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50797_50825))
;

x50797_50825.componentWillMount = ((function (x50797_50825){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50797_50825))
;

x50797_50825.initLocalState = ((function (x50797_50825){
return (function (){
var this$ = this;
var ret__10169__auto__ = (function (){var img = (new Image());
img.onload = ((function (img,this$,x50797_50825){
return (function (){
untangled.ui.clip_tool.set_initial_clip(this$,img);

var map__50799_50829 = om.next.props(this$);
var map__50799_50830__$1 = ((((!((map__50799_50829 == null)))?((((map__50799_50829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50799_50829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50799_50829):map__50799_50829);
var size_50831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50799_50830__$1,cljs.core.cst$kw$size);
var onChange_50832 = om.next.get_computed.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$onChange);
var map__50800_50833 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50800_50834__$1 = ((((!((map__50800_50833 == null)))?((((map__50800_50833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50800_50833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50800_50833):map__50800_50833);
var clip_region_50835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50800_50834__$1,cljs.core.cst$kw$clip_DASH_region);
if(cljs.core.truth_(onChange_50832)){
var G__50803_50836 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$clip_DASH_region,untangled.ui.clip_tool.translate_clip_region(clip_region_50835,size_50831,img));
(onChange_50832.cljs$core$IFn$_invoke$arity$1 ? onChange_50832.cljs$core$IFn$_invoke$arity$1(G__50803_50836) : onChange_50832.call(null,G__50803_50836));
} else {
}

return untangled.ui.clip_tool.refresh_clip_region(this$,om.next.props(this$));
});})(img,this$,x50797_50825))
;

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$image_DASH_object,img,cljs.core.cst$kw$origin,untangled.ui.clip_geometry.__GT_Point((0),(0)),cljs.core.cst$kw$clip_DASH_region,untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point((0),(0))),cljs.core.cst$kw$activeOperation,cljs.core.cst$kw$none,cljs.core.cst$kw$min_DASH_size,(20)], null);
})();
var obj50805 = {"omcljs$state":ret__10169__auto__};
return obj50805;
});})(x50797_50825))
;

x50797_50825.shouldComponentUpdate = ((function (x50797_50825){
return (function (next_props,next_state){
var this$ = this;
return false;
});})(x50797_50825))
;

x50797_50825.componentWillReceiveProps = ((function (x50797_50825){
return (function (next_props__10171__auto__){
var this__10170__auto__ = this;
var this$ = this__10170__auto__;
var props = om.next._next_props(next_props__10171__auto__,this__10170__auto__);
return untangled.ui.clip_tool.refresh_clip_region(this$,props);
});})(x50797_50825))
;

x50797_50825.componentDidMount = ((function (x50797_50825){
return (function (newprops){
var this$ = this;
var map__50806 = om.next.props(this$);
var map__50806__$1 = ((((!((map__50806 == null)))?((((map__50806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50806):map__50806);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50806__$1,cljs.core.cst$kw$url);
var handle_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50806__$1,cljs.core.cst$kw$handle_DASH_size);
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50806__$1,cljs.core.cst$kw$aspect_DASH_ratio);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50806__$1,cljs.core.cst$kw$size);
var map__50807 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__50807__$1 = ((((!((map__50807 == null)))?((((map__50807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50807):map__50807);
var state = map__50807__$1;
var image_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50807__$1,cljs.core.cst$kw$image_DASH_object);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50807__$1,cljs.core.cst$kw$clip_DASH_region);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6(this$,cljs.core.assoc,cljs.core.cst$kw$aspect_DASH_ratio,aspect_ratio,cljs.core.cst$kw$handle_DASH_size,(function (){var or__7502__auto__ = handle_size;
if(cljs.core.truth_(or__7502__auto__)){
return or__7502__auto__;
} else {
return (10);
}
})());

image_object.src = url;

return untangled.ui.clip_tool.refresh_clip_region(this$,newprops);
});})(x50797_50825))
;

x50797_50825.render = ((function (x50797_50825){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50810 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50811 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50812 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50813 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50814 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50815 = om.next.props(this$);
var map__50815__$1 = ((((!((map__50815 == null)))?((((map__50815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50815):map__50815);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,cljs.core.cst$kw$id);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,cljs.core.cst$kw$size);
var onChange = om.next.get_computed.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$onChange);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"width": "500px"})}),cljs.core.array_seq([om.dom.canvas(({"ref": ((function (map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825){
return (function (ele){
if(cljs.core.truth_(ele)){
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$canvas,ele);
} else {
return null;
}
});})(map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825))
, "id": id, "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(size)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "onMouseDown": ((function (map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825){
return (function (evt){
return untangled.ui.clip_tool.mouseDown(this$,evt);
});})(map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825))
, "onMouseMove": ((function (map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825){
return (function (evt){
return untangled.ui.clip_tool.mouseMoved(this$,evt,onChange);
});})(map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825))
, "onMouseUp": ((function (map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825){
return (function (evt){
return untangled.ui.clip_tool.mouseUp(this$,evt);
});})(map__50815,map__50815__$1,id,size,onChange,_STAR_reconciler_STAR_50810,_STAR_depth_STAR_50811,_STAR_shared_STAR_50812,_STAR_instrument_STAR_50813,_STAR_parent_STAR_50814,this$,this__10190__auto__,x50797_50825))
, "className": "clip-tool"}))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50814;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50813;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50812;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50811;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50810;
}});})(x50797_50825))
;


untangled.ui.clip_tool.ClipTool.prototype.constructor = untangled.ui.clip_tool.ClipTool;

untangled.ui.clip_tool.ClipTool.prototype.constructor.displayName = "untangled.ui.clip-tool/ClipTool";

untangled.ui.clip_tool.ClipTool.prototype.om$isComponent = true;

var x50817_50837 = untangled.ui.clip_tool.ClipTool;
/** @nocollapse */
x50817_50837.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50817_50837.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50817_50837){
return (function (clz,p__50818){
var map__50819 = p__50818;
var map__50819__$1 = ((((!((map__50819 == null)))?((((map__50819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50819):map__50819);
var params = map__50819__$1;
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$image_DASH_url,"https://upload.wikimedia.org/wikipedia/en/6/61/Minions_image.jpg");
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$id,"clip-1");
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$aspect_DASH_ratio,(1));
var handle_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$handle_DASH_size,(10));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$width,(400));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50819__$1,cljs.core.cst$kw$height,(400));
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$url,image_url,cljs.core.cst$kw$aspect_DASH_ratio,aspect_ratio,cljs.core.cst$kw$handle_DASH_size,handle_size,cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null)], null);
});})(x50817_50837))
;

/** @nocollapse */
x50817_50837.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50817_50837.om$next$IQuery$query$arity$1 = ((function (x50817_50837){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$url,cljs.core.cst$kw$size,cljs.core.cst$kw$aspect_DASH_ratio,cljs.core.cst$kw$handle_DASH_size], null);
});})(x50817_50837))
;

/** @nocollapse */
x50817_50837.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50817_50837.om$next$Ident$ident$arity$2 = ((function (x50817_50837){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clip_DASH_tools_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x50817_50837))
;


var x50821_50838 = untangled.ui.clip_tool.ClipTool.prototype;

x50821_50838.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x50821_50838.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50821_50838){
return (function (clz,p__50822){
var map__50823 = p__50822;
var map__50823__$1 = ((((!((map__50823 == null)))?((((map__50823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50823):map__50823);
var params = map__50823__$1;
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$image_DASH_url,"https://upload.wikimedia.org/wikipedia/en/6/61/Minions_image.jpg");
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$id,"clip-1");
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$aspect_DASH_ratio,(1));
var handle_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$handle_DASH_size,(10));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$width,(400));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50823__$1,cljs.core.cst$kw$height,(400));
var clz__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$url,image_url,cljs.core.cst$kw$aspect_DASH_ratio,aspect_ratio,cljs.core.cst$kw$handle_DASH_size,handle_size,cljs.core.cst$kw$size,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null)], null);
});})(x50821_50838))
;


x50821_50838.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x50821_50838.om$next$IQuery$query$arity$1 = ((function (x50821_50838){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$url,cljs.core.cst$kw$size,cljs.core.cst$kw$aspect_DASH_ratio,cljs.core.cst$kw$handle_DASH_size], null);
});})(x50821_50838))
;


x50821_50838.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x50821_50838.om$next$Ident$ident$arity$2 = ((function (x50821_50838){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clip_DASH_tools_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x50821_50838))
;


untangled.ui.clip_tool.ClipTool.cljs$lang$type = true;

untangled.ui.clip_tool.ClipTool.cljs$lang$ctorStr = "untangled.ui.clip-tool/ClipTool";

untangled.ui.clip_tool.ClipTool.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.clip-tool/ClipTool");
});
untangled.ui.clip_tool.ui_clip_tool = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.clip_tool.ClipTool);
untangled.ui.clip_tool.refresh_image = (function untangled$ui$clip_tool$refresh_image(canvas,component){
if(cljs.core.truth_(cljs.core.cst$kw$image_DASH_object.cljs$core$IFn$_invoke$arity$1(om.next.props(component)))){
var props = om.next.props(component);
var map__50841 = props;
var map__50841__$1 = ((((!((map__50841 == null)))?((((map__50841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50841):map__50841);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50841__$1,cljs.core.cst$kw$clip_DASH_region);
var image_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50841__$1,cljs.core.cst$kw$image_DASH_object);
var sx = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(clip_region));
var sy = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ul.cljs$core$IFn$_invoke$arity$1(clip_region));
var sw = untangled.ui.clip_geometry.width(clip_region);
var sh = untangled.ui.clip_geometry.height(clip_region);
var aspect_ratio = (sw / sh);
var w = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(props);
var h = (w / aspect_ratio);
var ctx = canvas.getContext("2d");
untangled.ui.clip_geometry.draw_rect(ctx,untangled.ui.clip_geometry.__GT_Rectangle(untangled.ui.clip_geometry.__GT_Point((0),(0)),untangled.ui.clip_geometry.__GT_Point(w,h)),cljs.core.cst$kw$solid_DASH_black);

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
var this__10337__auto__ = this;
React.Component.apply(this__10337__auto__,arguments);

if(!((this__10337__auto__.initLocalState == null))){
this__10337__auto__.state = this__10337__auto__.initLocalState();
} else {
this__10337__auto__.state = {};
}

return this__10337__auto__;
});

untangled.ui.clip_tool.PreviewClip.prototype = goog.object.clone(React.Component.prototype);
}

var x50847_50867 = untangled.ui.clip_tool.PreviewClip.prototype;
x50847_50867.componentWillUpdate = ((function (x50847_50867){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
if(((!((this__10191__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__10191__auto__.om$next$Ident$)))?true:false):false)){
var ident__10195__auto___50868 = om.next.ident(this__10191__auto__,om.next.props(this__10191__auto__));
var next_ident__10196__auto___50869 = om.next.ident(this__10191__auto__,om.next._next_props(next_props__10192__auto__,this__10191__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__10195__auto___50868,next_ident__10196__auto___50869)){
var idxr__10197__auto___50870 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__10197__auto___50870 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__10197__auto___50870),((function (idxr__10197__auto___50870,ident__10195__auto___50868,next_ident__10196__auto___50869,this__10191__auto__,x50847_50867){
return (function (indexes__10198__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__10198__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__10195__auto___50868], null),cljs.core.disj,this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__10196__auto___50869], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__10191__auto__);
});})(idxr__10197__auto___50870,ident__10195__auto___50868,next_ident__10196__auto___50869,this__10191__auto__,x50847_50867))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__10191__auto__);

return om.next.merge_pending_state_BANG_(this__10191__auto__);
});})(x50847_50867))
;

x50847_50867.shouldComponentUpdate = ((function (x50847_50867){
return (function (next_props__10192__auto__,next_state__10193__auto__){
var this__10191__auto__ = this;
var next_children__10194__auto__ = next_props__10192__auto__.children;
var next_props__10192__auto____$1 = goog.object.get(next_props__10192__auto__,"omcljs$value");
var next_props__10192__auto____$2 = (function (){var G__50849 = next_props__10192__auto____$1;
if((next_props__10192__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__50849);
} else {
return G__50849;
}
})();
var or__7502__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__10191__auto__),next_props__10192__auto____$2);
if(or__7502__auto__){
return or__7502__auto__;
} else {
var or__7502__auto____$1 = (function (){var and__7490__auto__ = this__10191__auto__.state;
if(cljs.core.truth_(and__7490__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__50854 = this__10191__auto__.state;
var G__50855 = "omcljs$state";
return goog.object.get(G__50854,G__50855);
})(),goog.object.get(next_state__10193__auto__,"omcljs$state"));
} else {
return and__7490__auto__;
}
})();
if(cljs.core.truth_(or__7502__auto____$1)){
return or__7502__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__10191__auto__.props.children,next_children__10194__auto__);
}
}
});})(x50847_50867))
;

x50847_50867.componentWillUnmount = ((function (x50847_50867){
return (function (){
var this__10191__auto__ = this;
var r__10202__auto__ = om.next.get_reconciler(this__10191__auto__);
var cfg__10203__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__10202__auto__);
var st__10204__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
var indexer__10201__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__10203__auto__);
if(cljs.core.truth_((function (){var and__7490__auto__ = !((st__10204__auto__ == null));
if(and__7490__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__10204__auto__) : cljs.core.deref.call(null,st__10204__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__10191__auto__], null));
} else {
return and__7490__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__10204__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__10191__auto__], 0));
} else {
}

if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50847_50867))
;

x50847_50867.componentDidUpdate = ((function (x50847_50867){
return (function (prev_props__10199__auto__,prev_state__10200__auto__){
var this__10191__auto__ = this;
return om.next.clear_prev_props_BANG_(this__10191__auto__);
});})(x50847_50867))
;

x50847_50867.isMounted = ((function (x50847_50867){
return (function (){
var this__10191__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__10191__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50847_50867))
;

x50847_50867.componentWillMount = ((function (x50847_50867){
return (function (){
var this__10191__auto__ = this;
var indexer__10201__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__10191__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__10201__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__10201__auto__,this__10191__auto__);
}
});})(x50847_50867))
;

x50847_50867.render = ((function (x50847_50867){
return (function (){
var this__10190__auto__ = this;
var this$ = this__10190__auto__;
var _STAR_reconciler_STAR_50856 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50857 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50858 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50859 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50860 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__10190__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__10190__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__10190__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__10190__auto__);

om.next._STAR_parent_STAR_ = this__10190__auto__;

try{var map__50861 = om.next.props(this$);
var map__50861__$1 = ((((!((map__50861 == null)))?((((map__50861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50861):map__50861);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861__$1,cljs.core.cst$kw$filename);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861__$1,cljs.core.cst$kw$height);
var clip_region = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50861__$1,cljs.core.cst$kw$clip_DASH_region);
var map__50862 = clip_region;
var map__50862__$1 = ((((!((map__50862 == null)))?((((map__50862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50862):map__50862);
var ul = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50862__$1,cljs.core.cst$kw$ul);
var lr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50862__$1,cljs.core.cst$kw$lr);
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"style": ({"position": "relative", "top": "-400px", "left": "500px"})}),cljs.core.array_seq([om.dom.canvas(({"ref": ((function (map__50861,map__50861__$1,filename,width,height,clip_region,map__50862,map__50862__$1,ul,lr,_STAR_reconciler_STAR_50856,_STAR_depth_STAR_50857,_STAR_shared_STAR_50858,_STAR_instrument_STAR_50859,_STAR_parent_STAR_50860,this$,this__10190__auto__,x50847_50867){
return (function (elem){
if(cljs.core.truth_(elem)){
return untangled.ui.clip_tool.refresh_image(elem,this$);
} else {
return null;
}
});})(map__50861,map__50861__$1,filename,width,height,clip_region,map__50862,map__50862__$1,ul,lr,_STAR_reconciler_STAR_50856,_STAR_depth_STAR_50857,_STAR_shared_STAR_50858,_STAR_instrument_STAR_50859,_STAR_parent_STAR_50860,this$,this__10190__auto__,x50847_50867))
, "style": ({"border": "1px solid black"}), "width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "className": "preview-clip"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?x1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(ul) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y1="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ul) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&x2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(lr) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&y2="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(lr) | (0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("&width="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')], 0))], 0));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50860;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50859;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50858;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50857;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50856;
}});})(x50847_50867))
;


untangled.ui.clip_tool.PreviewClip.prototype.constructor = untangled.ui.clip_tool.PreviewClip;

untangled.ui.clip_tool.PreviewClip.prototype.constructor.displayName = "untangled.ui.clip-tool/PreviewClip";

untangled.ui.clip_tool.PreviewClip.prototype.om$isComponent = true;

var x50865_50871 = untangled.ui.clip_tool.PreviewClip;


var x50866_50872 = untangled.ui.clip_tool.PreviewClip.prototype;


untangled.ui.clip_tool.PreviewClip.cljs$lang$type = true;

untangled.ui.clip_tool.PreviewClip.cljs$lang$ctorStr = "untangled.ui.clip-tool/PreviewClip";

untangled.ui.clip_tool.PreviewClip.cljs$lang$ctorPrWriter = (function (this__10340__auto__,writer__10341__auto__,opt__10342__auto__){
return cljs.core._write(writer__10341__auto__,"untangled.ui.clip-tool/PreviewClip");
});
/**
 * Render a preview of a clipped image. 
 */
untangled.ui.clip_tool.ui_preview_clip = om.next.factory.cljs$core$IFn$_invoke$arity$1(untangled.ui.clip_tool.PreviewClip);
